"use client";

import { useState } from "react";

// Starts as a plain "Contact Support" button, not a live tel: link, so the
// number isn't sitting in the page's initial HTML for scrapers to harvest.
// One click swaps it into a real tel: link showing the number, so a second
// tap (or the first click, on a phone that already opened its dialer) places
// the call.
export default function ContactSupportButton({
  phoneNumber,
  className = "",
}: {
  phoneNumber: string;
  className?: string;
}) {
  const [revealed, setRevealed] = useState(false);

  if (revealed) {
    return (
      <a
        href={`tel:${phoneNumber.replace(/[^\d+]/g, "")}`}
        className={className}
      >
        {phoneNumber}
      </a>
    );
  }

  return (
    <button type="button" onClick={() => setRevealed(true)} className={className}>
      Contact Support
    </button>
  );
}
