import type { ContentBlock } from "./blog-posts";

// Finqalab newsroom updates.
//
// Bodies are the real published articles from finqalab.com/blog, kept
// verbatim, these are the company's own announcements, not rewrites. Slugs
// match the live URLs so the two stay recognisably the same article.
//
// Reuses <BlogBlocks/>'s ContentBlock shape (p / h3 / ul / quote) so the
// flow-state article page can render these with the same renderer the blog
// uses, rather than a second near-identical one that could drift.

export type Update = {
  slug: string;
  title: string;
  category: string;
  /** Absent where the source article doesn't show one, see the 35 Bn entry. */
  date?: string;
  image: string;
  excerpt: string;
  content: ContentBlock[];
};

export const updates: Update[] = [
  {
    slug: "finqalab-engronomy-2024",
    title: "Finqalab Joins Engronomy 2024 to Promote Financial Wellness at Engro",
    category: "Event",
    date: "2024-05-23",
    image: "/images/updates/engro.webp",
    excerpt:
      "Finqalab participated in Engronomy, an event hosted by Engro, to engage with employees and promote financial wellness.",
    content: [
      { type: "p", text: "Karachi, Pakistan – May 23, 2024" },
      {
        type: "p",
        text: "At Finqalab, we are committed to empowering individuals with the knowledge and tools they need to achieve financial stability. On May 23, 2024, we participated in Engronomy, an event hosted by Engro, to engage with employees and promote financial wellness.",
      },
      {
        type: "p",
        text: "The event provided a platform for interactive discussions, live demonstrations, and hands-on learning about smart investing. Employees explored how Finqalab's platform simplifies investing, making it more accessible for both beginners and experienced investors. The enthusiasm and engagement from participants highlighted the growing interest in financial empowerment and investment literacy.",
      },
      {
        type: "p",
        text: "As financial well-being becomes a key priority in professional spaces, Finqalab continues to collaborate with organizations to make financial literacy more accessible.",
      },
    ],
  },
  {
    slug: "finqalab-proctor-and-gamble",
    title: "Finqalab Partners with P&G for a Two-Day Financial Empowerment Initiative",
    category: "Partnership",
    date: "2025-01-28",
    image: "/images/updates/png.webp",
    excerpt:
      "Finqalab partnered with Procter & Gamble for a two-day interactive session focused on investment awareness.",
    content: [
      { type: "p", text: "Karachi, Pakistan – January 28, 2025" },
      {
        type: "p",
        text: "In an effort to promote financial literacy and empower professionals with smart investment strategies, Finqalab partnered with Procter & Gamble (P&G) for a two-day interactive session focused on investment awareness.",
      },
      {
        type: "p",
        text: "The initiative introduced P&G employees to the fundamentals of investing, empowering them with the knowledge to make informed financial decisions. Through hands-on discussions, interactive games, and engaging sessions, participants gained practical insights into managing their personal finances. Live demos showcased how Finqalab's platform simplifies investing, making it accessible for both beginners and seasoned investors alike.",
      },
      {
        type: "quote",
        text: "Financial literacy is the foundation of financial independence. Collaborating with corporate partners like P&G allows us to extend our mission of making investing approachable for everyone.",
        attribution: "Fatiq Bin Khursheed, CEO Finqalab",
      },
      {
        type: "p",
        text: "This collaboration marks another milestone in Finqalab's ongoing commitment to fostering financial awareness in professional communities. Stay tuned for more industry partnerships aimed at bridging the gap between knowledge and action in the investment space.",
      },
      {
        type: "p",
        text: "If your organization is interested in collaborating on similar initiatives, reach out to us!",
      },
    ],
  },
  {
    slug: "finqalab-surpasses-pkr-1-billion-in-transactions",
    title: "Finqalab Surpasses PKR 1 Billion in Transactions",
    category: "Milestone",
    date: "2024-11-27",
    image: "/images/updates/1-billion.webp",
    excerpt:
      "Finqalab has processed over PKR 1 billion in transactions since launch, reflecting growing investor trust in the platform.",
    content: [
      {
        type: "p",
        text: "Finqalab has reached a major milestone, processing over PKR 1 billion in transactions since its launch. As a growing investment platform, this achievement reflects the increasing trust of investors and the demand for seamless, accessible financial solutions.",
      },
      {
        type: "p",
        text: "Since its inception, Finqalab has aimed to simplify investing by offering stock trading and Shariah-compliant Sukuk investments, providing users with the tools they need to grow their wealth. With a user-friendly interface and a commitment to financial inclusion, the platform has empowered thousands to take control of their financial futures.",
      },
      {
        type: "quote",
        text: "This milestone marks just the beginning. We are focused on expanding our offerings, setting new benchmarks, and continuing to make investing easier and more accessible for everyone.",
        attribution: "The Finqalab team",
      },
      {
        type: "p",
        text: "As Finqalab continues to grow, the company remains dedicated to innovation and user-centric financial solutions.",
      },
    ],
  },
  {
    slug: "sukuk-investment-now-available-on-the-finqalab-app",
    title: "Sukuk Investment Now Available on the Finqalab App!",
    category: "Product",
    date: "2024-10-02",
    image: "/images/updates/sukuks.webp",
    excerpt:
      "Sukuk investment is now live on Finqalab, a Shariah-compliant, asset-backed way to grow your wealth from the app.",
    content: [
      {
        type: "p",
        text: "Finqalab is excited to introduce Sukuk investment on our platform, offering a Shariah-compliant and secure way for investors to grow their wealth. This latest feature aligns with our commitment to providing diverse and accessible investment opportunities to our users.",
      },
      {
        type: "p",
        text: "Sukuk is a great option for those looking for steady returns while ensuring their investments adhere to Islamic financial principles. Now, with just a few taps on the Finqalab app, investors can seamlessly place their bids and take advantage of this structured, asset-backed investment.",
      },
      {
        type: "p",
        text: "Join a growing community of informed investors and start investing in Sukuk today!",
      },
      {
        type: "p",
        text: "For assistance, our customer support team is available at support@finqalab.com or via WhatsApp.",
      },
    ],
  },
  {
    slug: "finqalab-launches-fintalk-a-new-podcast-series-for-pakistani-investors",
    title: "Finqalab Launches “Fintalk” – A New Podcast Series for Pakistani Investors",
    category: "Podcast",
    date: "2024-11-26",
    image: "/images/updates/fintalk.webp",
    excerpt:
      "Fintalk by Finqalab is a podcast series featuring industry leaders and market experts, built to make financial knowledge accessible.",
    content: [
      {
        type: "p",
        text: "As part of our commitment to financial literacy, Finqalab is excited to introduce “Fintalk by Finqalab”, a podcast series designed to educate and empower investors. This initiative falls under the broader umbrella of Finqalab Academy, which provides valuable insights into finance and investing.",
      },
      {
        type: "p",
        text: "Fintalk will feature industry leaders, finance professionals, and market experts, covering essential topics such as investment strategies, market trends, and financial planning.",
      },
      {
        type: "p",
        text: "The first episode features Finqalab's CEO, Fatiq Bin Khursheed, CFA, answering key questions on investing, from strategies, analytical approaches, to insights into different investment avenues and even career advice. Speaking about the vision behind Fintalk, Fatiq said:",
      },
      {
        type: "quote",
        text: "There's a common misconception that finance and investing are too complex for the average person. With Fintalk, we aim to challenge that belief by making financial knowledge accessible, practical, and engaging for everyone.",
        attribution: "Fatiq Bin Khursheed, CFA, CEO Finqalab",
      },
      {
        type: "p",
        text: "With many more insightful episodes to come, Fintalk aims to simplify complex financial concepts and help investors make informed decisions.",
      },
    ],
  },
  {
    slug: "finqalab-introduces-bulland-mandu-the-faces-of-market-sentiment",
    title: "Finqalab Introduces Bulland & Mandu: The Faces of Market Sentiment",
    category: "Brand",
    date: "2025-02-25",
    image: "/images/updates/mascots.webp",
    excerpt:
      "Meet Bulland and Mandu, Finqalab's official mascots, embodying the highs and lows of the financial world.",
    content: [
      {
        type: "p",
        text: "Finqalab is proud to introduce its new official mascots, Bulland and Mandu, a dynamic duo that embodies the highs and lows of the financial world. These characters aren't just symbols; they're here to make investing more engaging, relatable, and fun for everyone.",
      },
      { type: "h3", text: "Meet Bulland: The Bull Market Beast" },
      {
        type: "p",
        text: "Standing tall (and ripped), Bulland is the ultimate optimist. He thrives on energy, ambition, and an unshakable belief in market growth. Whether he's hyping up a rally or flexing his confidence, Bulland represents the drive to seize opportunities and make bold investment moves. With his “Chaotic Good” personality, he's always up for a challenge, just like bullish investors who embrace risk for high rewards.",
      },
      { type: "h3", text: "Meet Mandu: The Bear Market Philosopher" },
      {
        type: "p",
        text: "On the other side, we have Mandu, the wise, skeptical bear who knows that markets don't always go up. Preferring caution over hype, Mandu reminds investors to stay grounded, think critically, and manage risk wisely. His “Lawful Evil” mindset doesn't mean he's against success, he just believes in making calculated moves and waiting for the right moment to strike.",
      },
      {
        type: "p",
        text: "Together, Bulland and Mandu represent the ever-changing nature of financial markets, helping investors navigate the ups and downs with humor and insight.",
      },
      {
        type: "p",
        text: "Stay tuned as Bulland & Mandu take over Finqalab with educational content, market insights, and exclusive community interactions.",
      },
    ],
  },
  {
    slug: "finqalab-app-is-now-available-for-download-on-ios-and-android",
    title: "Finqalab App is Now Available for Download on iOS and Android",
    category: "Product",
    date: "2024-06-12",
    image: "/images/updates/app-launch.webp",
    excerpt:
      "Finqalab is now live on both the Play Store and App Store, bringing seamless online stock trading to your phone.",
    content: [
      { type: "p", text: "Karachi, Pakistan – June 12, 2024" },
      {
        type: "p",
        text: "We're thrilled to announce that Finqalab, your go-to destination for seamless online stock trading, is now just a tap away on both Play and App Stores. Our journey to revolutionize how you engage with the stock market has taken a monumental leap forward with the public launch of our app on June 12, 2024.",
      },
      {
        type: "p",
        text: "With Finqalab, investing in stocks has never been easier. Whether you are a seasoned investor or just dipping your toes into the market, our user-friendly interface and robust features cater to all levels of expertise.",
      },
      {
        type: "p",
        text: "What sets Finqalab apart is its commitment to empowering every user with the tools and knowledge needed to make informed investment decisions. From real-time market data to comprehensive analytics and market insights, we have got you covered at every step of your trading journey.",
      },
      {
        type: "p",
        text: "But it is not just about functionality; we have also prioritized security and reliability. With state-of-the-art encryption and stringent security measures, you can trade with confidence, knowing that your investments are safe with us.",
      },
      {
        type: "p",
        text: "Furthermore, Finqalab is not solely an app; it's your investment partner. Our commitment extends beyond providing a seamless trading experience. With Finqalab, you gain access to comprehensive customer support and investment advisory. Join Finqalab, and become a part of our Finqalab Market Insights community that provides latest market related updates and expert financial advice.",
      },
      { type: "p", text: "Download the app now and become a part of the Finqalab family!" },
    ],
  },
  {
    slug: "finqalab-hits-5-billion-transactions-a-new-era-for-investing-in-pakistan",
    title: "Finqalab Hits 5 Billion Transactions: A New Era for Investing in Pakistan",
    category: "Milestone",
    date: "2025-04-28",
    image: "/images/updates/5-billion.webp",
    excerpt:
      "Surpassing PKR 5 billion in transactions marks a shift in how people across Pakistan engage with investing and wealth-building.",
    content: [
      {
        type: "p",
        text: "Finqalab has officially surpassed PKR 5 billion worth of transactions, a major milestone that marks a shift in how people across Pakistan are engaging with investing, personal finance, and wealth-building.",
      },
      {
        type: "p",
        text: "This surge in activity reflects more than platform growth. It captures a deep shift in mindset. Users are no longer on the sidelines; they're participating, exploring, and taking ownership of their financial futures. Whether checking a portfolio, responding to market trends, or learning through our YouTube content and communities, every transaction represents action and agency.",
      },
      {
        type: "p",
        text: "From the beginning, Finqalab set out to change how investing feels. We designed the platform to be bold, intuitive, and human-centered, a space where finance is approachable and decisions feel informed, not overwhelming. Crossing 5 billion transactions shows that this vision is resonating. It shows that people are ready for something better.",
      },
      {
        type: "p",
        text: "This milestone also signals a rising confidence in digital finance across Pakistan. It tells us that the future of investing is already underway and it's being built by everyday users who want clarity, control, and community in one place.",
      },
      {
        type: "p",
        text: "As we move forward, we remain committed to deepening this experience: more content, smarter tools, better conversations. The journey to 5 billion was built one decision at a time and the next chapter will be even bigger.",
      },
      { type: "p", text: "Finqalab is reimagining investing in Pakistan. And this is just the beginning." },
    ],
  },
  {
    slug: "finqalab-partners-with-sadapay-promoting-financial-literacy-in-pakistan",
    title: "Finqalab Partners with SadaPay: Promoting Financial Literacy in Pakistan",
    category: "Partnership",
    date: "2025-06-10",
    image: "/images/updates/sadapay.webp",
    excerpt:
      "Finqalab partnered with SadaPay to host an interactive online session on the basics of investing in the Pakistan Stock Exchange.",
    content: [
      { type: "p", text: "Karachi, Pakistan – June 10, 2025" },
      {
        type: "p",
        text: "In a continued effort to drive financial literacy in Pakistan, Finqalab partnered with SadaPay to host an interactive online session on the basics of investing in the Pakistan Stock Exchange (PSX). This initiative is part of Finqalab's mission to make investing more accessible, understandable, and actionable for professionals across the country.",
      },
      {
        type: "p",
        text: "The session explored core investing concepts, economic factors influencing the PSX, and how beginners can start building long-term wealth. Attendees walked away with practical financial knowledge and greater confidence in navigating investment opportunities in Pakistan.",
      },
      {
        type: "quote",
        text: "We believe that financial education is the foundation of financial independence. Collaborating with innovative fintechs like SadaPay helps us extend that mission into forward-thinking organizations.",
        attribution: "Fatiq Bin Khursheed, CEO of Finqalab",
      },
      {
        type: "p",
        text: "This collaboration marks another milestone in Finqalab's ongoing commitment to fostering financial awareness in professional communities. Stay tuned for more industry partnerships aimed at bridging the gap between knowledge and action in the investment space.",
      },
      {
        type: "p",
        text: "If your organization is interested in collaborating on similar initiatives, reach out to us!",
      },
    ],
  },
  {
    slug: "finqalab-partners-with-unilever-pakistan-to-advance-financial-literacy",
    title: "Finqalab Partners with Unilever Pakistan to Advance Financial Literacy",
    category: "Partnership",
    date: "2025-08-21",
    image: "/images/updates/unilever.webp",
    excerpt:
      "Finqalab collaborated with Unilever Pakistan on a session empowering employees with practical wealth management knowledge.",
    content: [
      { type: "p", text: "Karachi, Pakistan – August 21, 2025" },
      {
        type: "p",
        text: "As part of Finqalab's financial literacy initiative, our team recently collaborated with Unilever Pakistan to deliver a dedicated session aimed at empowering employees with practical wealth management knowledge.",
      },
      {
        type: "p",
        text: "In today's dynamic economic landscape, financial wellness plays a crucial role in personal and professional well-being. Through this session, Finqalab shared actionable insights on financial awareness, smart money management, and wealth-building strategies crafted specifically for corporate professionals. The goal was to equip participants with the confidence to diversify their sources of income and to impart the understanding needed to make informed financial decisions in both their personal and professional lives.",
      },
      {
        type: "p",
        text: "This initiative reflects Finqalab's ongoing commitment to promote financial inclusion and education across Pakistan. By partnering with forward-thinking organizations like Unilever Pakistan, Finqalab continues to extend its mission of making financial literacy accessible, engaging, and meaningful.",
      },
      {
        type: "p",
        text: "A special thank you to the Unilever Pakistan team for their support in bringing this session to life.",
      },
      {
        type: "p",
        text: "Stay tuned for more collaborations and initiatives as we continue to shape a more financially confident Pakistan together.",
      },
    ],
  },
  {
    slug: "finqalab-partners-with-bazaar-technologies-to-strengthen-employee-financial-skills",
    title: "Finqalab Partners with Bazaar Technologies to Strengthen Employee Financial Skills",
    category: "Partnership",
    date: "2025-11-07",
    image: "/images/updates/bazaar.webp",
    excerpt:
      "A one-day interactive session with Bazaar Technologies, educating employees about financial awareness and investing.",
    content: [
      {
        type: "p",
        text: "Finqalab recently partnered with Bazaar Technologies to conduct a financial literacy session for their team, aimed at educating employees about financial awareness and investing.",
      },
      {
        type: "p",
        text: "The one-day interactive session was conducted to encourage the employees to take actionable steps toward their financial growth. By simplifying the basics of investing and promoting practical, real-world money management habits, the goal of the interactive session was to help participants understand how informed financial decisions can lead to long-term stability and confidence.",
      },
      {
        type: "p",
        text: "The workshop featured hands-on discussions, interactive games, and live demonstrations, during which the Finqalab team shared their expertise on developing healthy financial behaviors. Topics included foundational investment principles, disciplined saving, and the importance of securing one's financial future. The team also highlighted how investing can be convenient when financial choices align with personal goals.",
      },
      {
        type: "p",
        text: "At Finqalab, we believe that financially aware employees are better equipped to make thoughtful decisions, both personally and professionally. This collaboration with Bazaar Technologies reflects a shared commitment to empowering individuals with financial knowledge and aligns with Finqalab's broader mission of fostering a financially empowered Pakistan.",
      },
      {
        type: "p",
        text: "We look forward to continuing our mission of advancing financial literacy through meaningful partnerships with forward-thinking organizations.",
      },
    ],
  },
  {
    slug: "finqalab-surpasses-pkr-35-billion-in-transactions",
    title: "Finqalab Surpasses PKR 35 Billion in Transactions",
    category: "Milestone",
    // The published article carries no visible date, left unset rather than
    // inventing one. The page simply omits the dateline for this entry.
    image: "/images/updates/35-billion.webp",
    excerpt:
      "PKR 35 billion in transactions since launching in June 2024, a new chapter in the evolution of digital investing in Pakistan.",
    content: [
      {
        type: "p",
        text: "Finqalab has officially surpassed PKR 35 billion in transactions since launching in June 2024, marking a powerful new chapter in the evolution of digital investing in Pakistan.",
      },
      {
        type: "p",
        text: "When we crossed our earlier milestones, it signaled a growing curiosity about investing among everyday Pakistanis. Reaching this new level reflects something deeper. It shows that participation is accelerating and that more people are moving from watching the markets to actively engaging with them. Every transaction represents a decision, a learning moment, and a step toward greater financial ownership.",
      },
      {
        type: "p",
        text: "Over the past year, Finqalab has continued to evolve into a fast-growing fintech ecosystem designed around the needs of modern investors. Faster onboarding has made it easier than ever for people to begin their investing journey. At the same time, our growing community and expanding educational content across social media platforms have helped thousands of users build confidence, understand market dynamics, and make more informed decisions.",
      },
      {
        type: "p",
        text: "This milestone reflects the emergence of a new kind of investor in Pakistan. They are curious, digitally connected, and eager to participate in the country's financial future. It also signals a broader shift toward digital finance, where accessibility, education, and community play a central role in how people approach wealth building.",
      },
      {
        type: "p",
        text: "As we look ahead, our ambition is clear. Finqalab will continue working toward expanding retail participation in Pakistan's capital markets while improving our platform to make it more convenient to use. We also aim to equip our users with powerful tools to monitor their investments, provide ready access to market insights, and ensure top-notch support for quick resolution of any issues.",
      },
      {
        type: "p",
        text: "Surpassing PKR 35 billion in transactions is a measure of where we've come. What excites us far more is where we're going.",
      },
    ],
  },
];

export function getUpdateBySlug(slug: string) {
  return updates.find((u) => u.slug === slug);
}
