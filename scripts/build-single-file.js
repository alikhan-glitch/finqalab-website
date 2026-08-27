const fs = require("fs");
const path = require("path");

const OUT_DIR = path.join(__dirname, "..", "out");
const INDEX_HTML = path.join(OUT_DIR, process.env.SRC_HTML || "index.html");

function b64(filePath) {
  return fs.readFileSync(filePath).toString("base64");
}

function mimeFor(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return (
    {
      ".png": "image/png",
      ".webp": "image/webp",
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".ico": "image/x-icon",
      ".woff2": "font/woff2",
      ".avif": "image/avif",
      ".mp4": "video/mp4",
      ".webm": "video/webm",
    }[ext] || "application/octet-stream"
  );
}

function dataUri(filePath) {
  return `data:${mimeFor(filePath)};base64,${b64(filePath)}`;
}

let html = fs.readFileSync(INDEX_HTML, "utf8");

// 1. Inline the stylesheet (and its @font-face url() references) into a <style> tag.
const cssLinkMatch = html.match(
  /<link rel="stylesheet" href="(\/_next\/static\/chunks\/[^"]+\.css)"[^>]*\/>/
);
if (!cssLinkMatch) throw new Error("stylesheet link not found");
const cssPath = path.join(OUT_DIR, cssLinkMatch[1]);
let css = fs.readFileSync(cssPath, "utf8");
css = css.replace(/url\((\.\.\/media\/[^)]+\.woff2)\)/g, (_, rel) => {
  const fontPath = path.join(path.dirname(cssPath), rel);
  return `url(${dataUri(fontPath)})`;
});
html = html.replace(cssLinkMatch[0], `<style>${css}</style>`);

// 2. Strip preload/modulepreload links (no longer needed once inlined).
html = html.replace(/<link rel="(?:preload|modulepreload)"[^>]*\/>/g, "");

// 3. Strip all executable <script> tags, but keep JSON-LD structured data.
html = html.replace(/<script(?![^>]*type="application\/ld\+json")[^>]*>[\s\S]*?<\/script>/g, "");
html = html.replace(/<script(?![^>]*type="application\/ld\+json")[^>]*\/>/g, "");

// 4. Inline favicon.
html = html.replace(
  /(href=")\/favicon\.ico\?[^"]*(")/,
  (_, pre, post) => `${pre}${dataUri(path.join(OUT_DIR, "favicon.ico"))}${post}`
);

// 5. Inline every /images/*, /icons/*, and /_next/static/media/*.jpg reference
//    (src="..." attributes and url(...) references inside inline styles).
function resolveAssetPath(urlPath) {
  const clean = urlPath.split("?")[0];
  return path.join(OUT_DIR, clean);
}

html = html.replace(/src="(\/images\/[^"]+|\/icons\/[^"]+|\/_next\/static\/media\/[^"]+\.jpg)"/g, (m, p) => {
  const filePath = resolveAssetPath(p);
  if (!fs.existsSync(filePath)) return m;
  return `src="${dataUri(filePath)}"`;
});

html = html.replace(/url\((\/icons\/[^)]+|\/images\/[^)]+)\)/g, (m, p) => {
  const filePath = resolveAssetPath(p);
  if (!fs.existsSync(filePath)) return m;
  return `url(${dataUri(filePath)})`;
});

// 6. Videos: inline the poster image, and either inline the real video files
//    (playable, but ~25MB heavier) or drop the <source> children entirely
//    (static poster frame only, keeps the file small).
html = html.replace(/poster="(\/video\/[^"]+)"/g, (m, p) => {
  const filePath = resolveAssetPath(p);
  if (!fs.existsSync(filePath)) return m;
  return `poster="${dataUri(filePath)}"`;
});

const INLINE_VIDEO = process.env.INLINE_VIDEO === "1";
if (INLINE_VIDEO) {
  html = html.replace(/<source([^>]*)src="(\/video\/[^"]+)"([^>]*)\/>/g, (m, pre, p, post) => {
    const filePath = resolveAssetPath(p);
    if (!fs.existsSync(filePath)) return m;
    return `<source${pre}src="${dataUri(filePath)}"${post}/>`;
  });
} else {
  html = html.replace(/<source[^>]*src="\/video\/[^"]+"[^>]*\/>/g, "");
}

const outPath = path.join(
  __dirname,
  "..",
  process.env.OUT_NAME || (INLINE_VIDEO ? "finqalab-shareable-with-video.html" : "finqalab-shareable.html")
);
fs.writeFileSync(outPath, html);
console.log("Written:", outPath, (fs.statSync(outPath).size / 1024 / 1024).toFixed(2), "MB");
