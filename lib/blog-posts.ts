export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string; attribution?: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  accent: "primary" | "teal";
  icon:
    | "rocket"
    | "idea"
    | "shape"
    | "thinking"
    | "writing"
    | "stocks"
    | "chart"
    | "calendar"
    | "shield"
    | "scale"
    | "coins"
    | "compass";
  content: ContentBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ceasefire-volatility-pakistani-investors",
    title: "Ceasefire, Volatility, and What Comes Next for Pakistani Investors",
    excerpt:
      "A Pakistan-brokered ceasefire briefly sent the KSE-100 to a record one-day high, then a record one-day crash followed. Here's what investors should watch next.",
    date: "2026-04-22",
    accent: "primary",
    icon: "writing",
    content: [
      { type: "p", text: "When the United States and Iran announced a Pakistan-brokered two-week ceasefire on April 8, markets around the world exhaled majorly for the first time in a long while. For investors in Pakistan, the relief was historic. The KSE-100 Index surged 14,138 points on a single day, settling at 165,811 which was its highest single-day gain in absolute terms in PSX history. Global oil prices dropped by 12 to 16 percent within days. The Strait of Hormuz, one of the main points of contention in the entire war episode, choking roughly 20 percent of the world's oil supply since Iran's closure on February 28, was set to reopen. A cascade of risks that had been building since the US-Israeli strikes on Iran began, including inflation, currency pressure, and a widening current account deficit, suddenly looked avoidable. For a moment, it seemed as though a major crisis had been averted and markets were beginning to return to normal. However, it was later announced that peace talks in Islamabad had concluded without a deal." },
      { type: "h3", text: "What the Ceasefire Meant for Pakistan" },
      { type: "p", text: "To understand what is at stake now, it helps to understand what the ceasefire had briefly averted." },
      { type: "p", text: "Pakistan imports roughly 80 percent of its oil needs. For every ten-dollar increase in the global price of crude oil, domestic inflation rises by approximately 0.5 to 0.6 percentage points, according to estimates cited by Pakistan Business Council's former CEO. When Brent crude crossed $110 per barrel, there was a risk that Pakistan's annual inflation could climb to between 11 and 13 percent, nearly double the State Bank of Pakistan's target range of 5 to 7 percent." },
      { type: "p", text: "The current account implications were equally concerning. Pakistan had recorded a current account surplus for the first time in 14 years in FY2025 which was a major milestone. Under a $100 per barrel oil scenario, the surplus could reverse into a hefty deficit, effectively erasing years of economic progress in months. To respond, the government imposed broad cost-saving measures in March, including a four-day workweek for government employees and fuel conservation directives along with an increase in POL prices." },
      { type: "h3", text: "Peace Talks in Islamabad" },
      { type: "p", text: "The ceasefire was tied to a condition: talks between the US and Iran, hosted in Islamabad with Pakistan as mediator, were meant to produce a longer-term agreement. After 21 hours of negotiations over the weekend of April 12 and 13, both sides couldn't reach a decisive agreement." },
      { type: "p", text: "The markets did not wait for analysis. The KSE-100 fell 6,600 points on April 13, closing at 160,591 and erasing much of the previous week's gains in a single session. Oil prices surged over 7 percent, with Brent crude crossing back above $100 per barrel. Brokerage houses described the session as “broad-based panic selling.” The index dipped as low as 160,158 during intraday trading before recovering slightly." },
      { type: "p", text: "The failed talks also came with a new escalation. President Donald Trump announced a naval blockade of Iranian ports, to be enforced beginning the morning of April 14. The US Central Command declared it would apply to all maritime traffic entering or exiting Iranian ports." },
      { type: "h3", text: "A Second Round Is Still Possible" },
      { type: "p", text: "All hope is still not lost. Despite the Islamabad talks ending without agreement, the diplomatic channel has not been sealed shut. For investors, experts, and anyone interested in the macroeconomic effects of war, it is important to understand the context of the meeting between Iranian and US representatives. The Islamabad talks were the first direct, face-to-face engagement between the US and Iran in over four decades. That alone is significant. Diplomatic processes of this nature rarely resolve in a single session, and the fact that both sides engaged at all suggests neither is fully closed to a negotiated outcome. The US President himself has repeatedly expressed a desire to bring an end to this conflict." },
      { type: "h3", text: "What to Watch" },
      { type: "p", text: "For retail investors watching the market in the coming days, the key variables are straightforward even if the outcome is not." },
      { type: "p", text: "The ceasefire is now in its final hours, with the US President setting Wednesday evening as the hard deadline. A second round of talks is actively in motion with the US Vice President and officials heading to Islamabad. Whether Tehran shows up at the table remains the critical unknown. Any confirmation of renewed engagement would likely trigger a positive reaction across the KSE-100. A no-show from Tehran, or a return to hostilities once the ceasefire lapses, would have the opposite effect." },
      { type: "p", text: "Oil prices are the underlying indicator to track closely. As long as Brent crude remains above $100, the macroeconomic risks to Pakistan remain elevated. A drop below $90 would signal de-escalation and provide the foundation for a sustainable market recovery." },
      { type: "p", text: "The next few days will be important in providing an answer to that answer." },
    ],
  },
  {
    slug: "what-is-a-rights-issue",
    title: "What is a Rights Issue?",
    excerpt:
      "If you own shares in a PSX-listed company, you may be offered the right to buy more before anyone else. Here's what that means for your portfolio.",
    date: "2026-03-12",
    accent: "teal",
    icon: "calendar",
    content: [
      {
        type: "p",
        text: "If you own shares in a listed company in Pakistan and receive a notification about a “rights issue,” you're facing a decision that could affect the value of your investment. At its core, a rights issue is when a company offers its existing shareholders the right to purchase additional shares before anyone else. This offer is typically priced below the current market rate. Think of it as an exclusive first offer extended to you simply because you're already a shareholder.",
      },
      {
        type: "p",
        text: "One important distinction: this is not the same as buying shares through your broker on the PSX trading floor. Rights shares are offered directly by the company through a formal process managed by the Central Depository Company (CDC).",
      },
      { type: "h3", text: "Why Do Companies Issue Rights?" },
      {
        type: "p",
        text: "Companies raise fresh capital through rights issues for a variety of strategic and operational reasons:",
      },
      {
        type: "ul",
        items: [
          "Expansion plans — such as a textile company purchasing new machinery or a bank growing its branch network.",
          "Debt reduction or restructuring — paying down borrowing and reducing interest burden.",
          "Working capital requirements — day-to-day operations need liquidity for raw materials, suppliers, or seasonal demand.",
          "Acquisitions and new projects — financing capital-intensive moves, particularly acquisitions.",
          "Meeting regulatory capital requirements — banks and insurers must maintain minimum capital levels set by regulators like the SBP.",
        ],
      },
      { type: "h3", text: "Key Dates, Ratios, and Your Entitlement" },
      {
        type: "p",
        text: "Rights Issue/Ratio tells you how many new shares you can buy relative to what you already hold. A 25% rights issue means for every 4 shares you own, you're entitled to purchase 1 new share. Rights shares are generally offered at a 10–30% discount to the market price.",
      },
      {
        type: "p",
        text: "The Book Closure Date is when the company's shareholder register is frozen — you must be a registered shareholder before this date to receive your entitlement. The Ex-Rights Date is when the share price adjusts to reflect the upcoming issuance. Before the subscription window opens, rights entitlements themselves trade on PSX for a limited period, so if you haven't decided whether to subscribe, you can buy or sell these entitlements in the open market.",
      },
      {
        type: "p",
        text: "Quick example: you own 500 shares of ABC Limited. The company announces a 20% rights issue. Your entitlement = 500 × 20% = 100 new shares.",
      },
      { type: "h3", text: "Your Two Options as a Shareholder" },
      {
        type: "p",
        text: "Option 1 — Subscribe: fill out the subscription form (sent via CDC) and pay for your new shares through your broker or directly to the company's designated bank. Under PSX regulations, the subscription window must remain open for a minimum of 15 days and no more than 30 days.",
      },
      {
        type: "p",
        text: "Option 2 — Sell Your Rights: if you don't wish to invest more capital, you may be able to sell your rights entitlement on PSX during the trading window, realising some value without subscribing.",
      },
      { type: "h3", text: "Understanding TERP — What Happens to the Share Price?" },
      {
        type: "p",
        text: "The Theoretical Ex-Rights Price (TERP) is what the share price should theoretically settle at after the rights issue: TERP = (Market Price × Existing Shares + Issue Price × New Shares) ÷ (Existing Shares + New Shares).",
      },
      {
        type: "p",
        text: "Worked example: current market price PKR 100, you own 400 shares (worth PKR 40,000). Rights issue ratio 25%, issue price PKR 80. Your entitlement: 400 × 25% = 100 new shares. TERP = (100 × 400 + 80 × 100) ÷ (400 + 100) = 48,000 ÷ 500 = PKR 96.",
      },
      {
        type: "p",
        text: "On the ex-rights date, the share price drops from PKR 100 to PKR 96. But if you subscribed, your portfolio stays intact — you now hold 500 shares worth PKR 48,000, having invested PKR 8,000 to maintain your ownership percentage. If you didn't subscribe, your 400 shares are now worth PKR 38,400, a loss of PKR 1,600 in value and a reduction in your ownership percentage.",
      },
      { type: "h3", text: "Real Examples from Pakistan" },
      {
        type: "p",
        text: "In August 2023, Treet Corporation used its rights issue primarily for debt repayment, directing approximately 76% of proceeds toward reducing its debt burden. In May 2025, Dost Steels announced a rights issue at a par value of PKR 10 per share to fund expansion plans. JS Bank conducted a rights issue in 2023, offering 17 new shares for every 100 held at PKR 10 per share, funding its takeover of BankIslami.",
      },
      { type: "h3", text: "Should You Subscribe?" },
      {
        type: "p",
        text: "There's no one-size-fits-all answer. Consider these factors before deciding:",
      },
      {
        type: "ul",
        items: [
          "Review the company's last three years of financial performance — profit trends, debt levels, dividend history.",
          "Read the offer document to understand why the company is raising funds. Capital for growth is generally more reassuring than funds to plug cash flow problems.",
          "Compare the issue price to the current market price — a meaningful discount is a positive signal but doesn't guarantee returns.",
          "Calculate your required outlay and whether you can afford it without straining your finances.",
          "Factor in the broader market and sector outlook.",
        ],
      },
      { type: "h3", text: "Key Takeaways" },
      {
        type: "ul",
        items: [
          "A rights issue gives you priority access to new shares at a discount before the general public.",
          "If you don't participate, your ownership percentage is diluted and your share value may decline.",
          "In Pakistan, the process runs through CDC and your broker — the subscription window is limited.",
          "Use the TERP formula to understand the real price impact and make an informed decision.",
        ],
      },
    ],
  },
  {
    slug: "portfolio-shock-absorbers",
    title: "Portfolio Shock Absorbers: Four Ways to Protect Your Gains",
    excerpt:
      "The KSE-100 has pulled back from 191,000 — a reminder that bull runs don't last forever. Four practical ways to lock in gains before the next correction arrives.",
    date: "2026-03-03",
    accent: "primary",
    icon: "shield",
    content: [
      { type: "p", text: "Bull markets are attractive for most investors. When everything is going up, from cement, steel, to tech and autos, it feels almost reckless to hold back. You ride the wave, your portfolio expands, and the instinct is to double down. But every experienced investor knows that markets do not move in one direction forever." },
      { type: "p", text: "The KSE-100's pullback from the 191,000 level is a signal worth paying attention to. This does not mean panic-selling everything and moving to cash. It means being strategic. The key to consistently building wealth is not just being good at capturing gains, but keeping them." },
      { type: "h3", text: "1. Build a Defensive Dividend Wall" },
      { type: "p", text: "The market isn't a single, uniform entity; it is a collection of businesses with very different risk profiles. While cyclical businesses tend to be more volatile than their defensive counterparts, broader market corrections usually find their way into almost all sectors. Having said that, stocks with strong cash dividend payouts tend to find support in their dividend yields. This rising yield attracts income-seeking investors, which creates a natural price floor." },
      { type: "h3", text: "2. Diversify Across Sectors and Market Caps" },
      { type: "p", text: "Diversification is greatly misunderstood as a concept in retail investing. Most people know they should diversify. Far fewer do it correctly." },
      { type: "p", text: "The classic mistake on the Pakistan Stock Exchange is spreading capital across a number of stocks while there is still concentration with respect to sectors. If you have five stocks in your portfolio and all of them pertain to the same sector, then you are essentially exposed to the same risk factors. Hence, your portfolio is highly concentrated. True diversification means having exposure to sectors driven by different economic conditions, where they do not all move in the same direction at the same time." },
      { type: "h3", text: "3. Diversify Across Asset Classes: The Fixed-Income Safety Net" },
      { type: "p", text: "Diversification across sectors is important for your equity portfolio; however, equities are still correlated somewhat. To reduce this broader stock market risk, diversification across asset classes is recommended. Asset classes include fixed income securities, commodities, real estate, etc." },
      { type: "p", text: "Treasury Bills are an excellent starting point for investors looking to protect their gains. T-bills are government-backed, which means near-zero default risk. A double-digit annual return, fully secured by the sovereign, is not something to dismiss lightly. For investors with a longer horizon, Pakistan Investment Bonds (PIBs) allow you to lock in current yields over a multi-year period. If interest rates fall further, the market value of existing PIBs rises, creating a capital gain on top of your coupon. For investors who prefer simplicity, money market mutual funds invest in exactly these instruments, namely T-bills and PIBs." },
      { type: "h3", text: "4. Maintain Emergency Cash Reserve" },
      { type: "p", text: "Cash is the shock absorber that doubles as an opportunity creator. Most investors think of cash as a cost: idle money earning nothing while the market runs. But in a volatile market environment, a strategic cash reserve is one of the most powerful tools you can have." },
      { type: "p", text: "The concept is simple. Maintain an emergency cash reserve, often 10–15% of your investable portfolio, specifically reserved for moments when the market crashes or faces sudden correction. This cash should not be used to cover losses or facilitate panic-selling; it should be preserved solely for buying opportunities." },
      { type: "p", text: "A well-managed company with solid earnings, a healthy balance sheet, and a durable business model does not suddenly become a worse business because the index dropped some percentage points." },
      { type: "p", text: "This is the moment your emergency cash was built for. While other investors are forced to sell (because they are overleveraged, under-diversified, or simply panicking), you have the financial capacity and the emotional discipline to buy." },
      { type: "h3", text: "Putting It All Together" },
      { type: "p", text: "These four shock absorbers compliment one another, but even implementing one or two can meaningfully protect your portfolio. A dividend wall provides income and price stability. True sector and market-cap diversification ensures that not everything in your portfolio moves together. A fixed-income allocation generates reliable returns while reducing your equity exposure. And a cash reserve gives you both protection and optionality." },
      { type: "p", text: "The investors who will look back at 2026 with satisfaction are not necessarily those who captured every last point of the bull run. They are the ones who recognized when the risk-reward balance was shifting, adjusted accordingly, and entered any correction from a position of strength." },
    ],
  },
  {
    slug: "january-effect-in-pakistan",
    title: "The “January Effect” in Pakistan: Why 2026 Began With a Bang at the PSX",
    excerpt:
      "The KSE-100 crossed 191,000 in January 2026 after three straight negative Januarys. Was it fundamentals, or the psychological reset investors call the January Effect?",
    date: "2026-02-16",
    accent: "teal",
    icon: "rocket",
    content: [
      { type: "h3", text: "The New Year Bull Run" },
      { type: "p", text: "On January 26, 2026, Pakistan's stock market reached a historic milestone as the KSE-100 Index briefly crossed 191,000 points during intraday trading, capping off a stunning rally that caught many by surprise." },
      { type: "p", text: "While headlines pointed to optimism and improving macro indicators, many seasoned investors asked a familiar question: Was this surge driven by fundamentals alone, or was the market once again experiencing the “January Effect”?" },
      { type: "p", text: "Globally, January has a reputation for delivering outsized returns. What made this rally particularly interesting was how strongly the phenomenon appeared to play out at the Pakistan Stock Exchange (PSX)." },
      { type: "h3", text: "Decoding the “January Effect”" },
      { type: "p", text: "The January Effect refers to the tendency of stock markets to deliver stronger returns in January compared to other months of the year. While there is no scientific explanation behind it, the phenomenon is widely associated with renewed optimism, fresh capital allocations, and a psychological “reset” that comes with the start of a new year. Even the perception of a new calendar year – believing you are “starting fresh” or have “turned over a new leaf” – can have a tremendous impact on investor's behavior which encourages individual allocations to stocks." },
      { type: "p", text: "While commonly discussed in developed markets, this pattern is also not alien to Pakistan. Historical PSX data shows that the market has repeatedly displayed turn-of-the-year patterns. Institutional investors typically revisit investment strategies at the start of the year, deploying new mandates and rebalancing portfolios. At the same time, retail investors often enter January with fresh New Year's resolutions; to invest more, take calculated risks, or re-enter markets they avoided previously. Together, these actions inject liquidity and momentum into equities, making the phenomenon far more psychological than scientific." },
      { type: "p", text: "This year stood out precisely because it broke recent trends. The month of January delivered a solid 5.8% return, despite the fact that the returns for this month over the previous three years had been negative. Yet, when viewed over a longer horizon, January still shows positive average returns, reinforcing the idea that long-term seasonalities do exist." },
      { type: "h3", text: "What Caused The January Effect?" },
      { type: "h3", text: "1. Yield Migration: When Money Follows Opportunity" },
      { type: "p", text: "One of the major drivers behind January's rally was the sudden decline in fixed-income yields. For the first time in four years, Treasury Bill yields had fallen into single digits. As returns on risk-free instruments fell, investors were forced to reassess their investments and look for other options where better returns could be found. This led to a clear migration of liquidity toward equities." },
      { type: "p", text: "Speculation around the January 26 SBP Monetary Policy Committee meeting added another layer to the rally. Investors were also positioning for a possible policy rate cut, with the benchmark rate standing at 10.5% amid easing inflation and improving external accounts. Market participants broadly expected a 50–100 basis point rate cut, the expectation of which led to heightened activity at the PSX during the first three weeks of January." },
      { type: "p", text: "However, when the meeting concluded, the SBP opted to maintain the policy rate at 10.5%, citing sticky core inflation and a widening trade deficit as reasons for not further reducing the policy rate. While the decision disappointed some and the yields climbed slightly back into double digits, the rally had already been fueled by anticipation; a classic case of “buy the rumor.”" },
      { type: "h3", text: "2. Institutional Buying" },
      { type: "p", text: "Another force quietly strengthening the January Effect was aggressive mutual fund participation at the PSX. Fresh institutional money entered the market in size, with mutual funds posting a net inflow of $95.21 million during January 2026. Another element strengthening the case for the January Effect was mutual funds' participation beyond the usual heavyweights, such as Automobile Assembling." },
      { type: "h3", text: "3. Macro-Optimism Returns" },
      { type: "p", text: "While technical factors mentioned above did the heavy lifting, they also found their grounds from improving macroeconomic conditions. Single-digit inflation, improving foreign exchange reserves, and relative currency stability helped bolster investor confidence. Cyclical sectors have also been showing signs of recovery. Automobile sales are surprising on the upside. The cement sector is also exhibiting some momentum after a long muted period and the management of cement companies are generally hopeful of 8-10% demand growth in FY26. Overall, corporate earnings momentum is there, and profitability across listed companies at the PSX is showing reasonable traction." },
      { type: "h3", text: "How Retail Investors Can Spot These Trends Early" },
      { type: "h3", text: "Watch for the December Dip" },
      { type: "p", text: "Seasonal rallies like the January Effect often take shape after over-selling in the final weeks of December. In the PSX, this selling is typically driven by year-end portfolio rebalancing and thin market liquidity rather than any deterioration in fundamentals. As risk appetite fades and volumes dry up, even fundamentally strong stocks can experience price declines. Retail investors can monitor overselling patterns in December to identify early signals of a seasonal January rebound." },
      { type: "h3", text: "Track T-Bill Auctions Closely" },
      { type: "p", text: "Falling government bond yields are often an early warning signal. When yields compress, capital naturally searches for higher returns. In 2026, that flow led directly into equities with stable dividends and earnings visibility." },
      { type: "h3", text: "Track Economic and Financial Stability" },
      { type: "p", text: "Seasonal trends like the January Effect are more likely to emerge when economic and political conditions remain relatively stable. Investor confidence tends to improve in a predictable macro environment where policy direction is consistent, inflation is manageable, and political uncertainty is limited. With fewer economic and political risks, market participants are more inclined to re-enter positions in January, increasing the likelihood that historical seasonal patterns play out as expected." },
      { type: "h3", text: "Beyond January" },
      { type: "p", text: "The January Effect in Pakistan can be described as a pattern, not a promise. Strong starts to the year have often been followed by profit-taking in February, reminding investors that seasonality alone is not a strategy. Having said that, sustained economic and earnings support are critical for the gains to carry far. The January 2026 rally reflected underlying structural and macro adjustments, not blind optimism, and should be judged through fundamentals rather than the calendar." },
    ],
  },
  {
    slug: "what-are-dividends",
    title: "What Are Dividends? And Why Do They Matter More Than You Think",
    excerpt:
      "When a company earns profits, it can reinvest them or share them with shareholders. Here's how that second option — dividends — actually works.",
    date: "2026-01-27",
    accent: "primary",
    icon: "calendar",
    content: [
      {
        type: "p",
        text: "When a company earns profits, it has two broad choices: reinvest those profits back into the business or share a portion of them with its owners, the shareholders. When a company chooses the latter, the profit shared is called a dividend.",
      },
      {
        type: "p",
        text: "The most popular form of dividends is cash dividends, though some companies may also opt to pay bonus shares as dividends. Cash in hand is preferred by the market, so cash dividends are viewed more favourably.",
      },
      {
        type: "p",
        text: "Two things must be understood early on: dividends are paid per share, and only eligible shareholders receive them. For example, if a company announces a dividend of PKR 5 per share and you own 1,000 shares, your gross dividend income will be PKR 5,000 before tax. Filers pay 15% tax and non-filers pay 30%, deducted at source.",
      },
      { type: "h3", text: "The Dividend Timeline: Who Gets Paid and Why" },
      {
        type: "p",
        text: "One big misconception among first-time investors is that owning a stock close to the dividend payment date guarantees a dividend. In reality, you could own a dividend-paying stock and still not be eligible. Understanding the dates in the timeline matters.",
      },
      {
        type: "ul",
        items: [
          "Announcement Date — when the company publicly declares the dividend and shares the amount and key dates.",
          "Book Closure — the period during which the company closes its shareholder register to determine eligibility. PSX companies often announce a book closure period instead of a specific ex-date.",
          "Ex-Date — the date the stock starts trading without the right to the upcoming dividend. You must hold shares before this date to be eligible. Finqalab users can find ex-dates in the Events tab of the Discover section.",
          "Payment Date — when the dividend is actually credited to your bank account, usually two to six weeks after the ex-date.",
        ],
      },
      {
        type: "p",
        text: "Under the current T+2 settlement system, share ownership is only updated in the company's register after a trade settles (two business days later). To appear on the register by the book closure start date, an investor must buy early enough for settlement to occur in time. PSX therefore sets the ex-date as BC − 2: trades before this date settle in time for eligibility, trades on or after are excluded.",
      },
      { type: "h3", text: "Which Companies Pay Dividends, and How Often?" },
      {
        type: "p",
        text: "Not all companies pay dividends, and they're not legally obligated to. Dividend payments are typically associated with mature, well-established companies with strong, stable cash flows. Many listed banks, such as MCB Bank, Bank Alfalah, and Habib Bank Limited, pay dividends quarterly. Lucky Cement typically announces annually, while Pakistan Oilfields Limited generally follows a semi-annual pattern. There's no fixed rule — policy depends on future cash requirements, profitability outlook, and growth strategy.",
      },
      { type: "h3", text: "Dividends from the Investor's Perspective" },
      {
        type: "p",
        text: "For an investor, total returns come from two sources: capital gains and dividends. While capital gains depend on price and volatility, dividends represent real cash in hand — which is why many investors place strong value on them. They're often viewed as a form of regular income, particularly attractive for retirees and conservative investors, adding predictability to a portfolio.",
      },
      {
        type: "p",
        text: "When reinvested consistently, dividends can significantly boost total returns through compounding over time. Historically, PSX companies with consistent payouts, like POL and FFC, have outperformed less dividend-paying peers. At the index level, the PSXDIV20, tracking top dividend payers, has consistently outperformed the KSE-100. In markets like Pakistan, where policy shifts and economic uncertainty are common, dividends provide shareholders with reliability that reduces dependence on price appreciation alone.",
      },
      { type: "h3", text: "Understanding Dividend Yield" },
      {
        type: "p",
        text: "Dividend Yield = (Annual Dividend Per Share ÷ Current Share Price) × 100. For example, if a PSX-listed stock trades at PKR 200 and paid PKR 16 in dividends over the last year, its trailing yield is (16 ÷ 200) × 100 = 8%.",
      },
      {
        type: "p",
        text: "Dividend yield is particularly useful for comparing dividend-paying companies with different share prices and payout levels. A company may pay a higher dividend per share than another, but that doesn't automatically make it the better dividend payer — if the second company has a higher yield, it may offer a better cash return relative to the price you're paying.",
      },
      { type: "h3", text: "Conclusion" },
      {
        type: "p",
        text: "For some investors, dividends represent regular income; for others, stability in an otherwise volatile market, or a signal of a company's confidence in its future. They reward patience and long-term ownership — compensating investors not just for holding shares, but for trusting the business through different market cycles. Dividend investing continues to be one of the most reliable strategies in Pakistan's equity market.",
      },
    ],
  },
  {
    slug: "bonus-shares-vs-stock-splits",
    title: "Bonus Shares vs. Stock Splits: A Clear Guide for Pakistani Investors",
    excerpt:
      "Both increase your share count and lower the price per share — but the mechanics, accounting, and tax treatment in Pakistan are very different.",
    date: "2025-12-24",
    accent: "teal",
    icon: "idea",
    content: [
      {
        type: "p",
        text: "In equity markets, companies often take corporate actions to make their shares more accessible and liquid without altering the underlying value of the business. Two commonly misunderstood actions are stock splits and bonus shares. Both increase the number of shares held by investors and reduce share price, but the mechanics, accounting treatment, and tax implications — especially in Pakistan — are materially different.",
      },
      { type: "h3", text: "What Is a Stock Split?" },
      {
        type: "p",
        text: "A stock split occurs when a company divides each existing share into multiple shares in a fixed ratio, such as 2-for-1 or 5-for-1. A stock split does not change the company's market capitalization or the investor's total investment value.",
      },
      {
        type: "p",
        text: "Example: an investor owns 100 shares priced at PKR 1,000 each (total value PKR 100,000). After a 5-for-1 split: 500 shares at PKR 200 each — still PKR 100,000 total. The reduction in price is purely mathematical and represents no loss in wealth, since the company's market capitalization and the shareholder's proportional ownership remain unchanged.",
      },
      {
        type: "p",
        text: "Companies typically issue stock splits to reduce the per-share price and improve affordability, increase the number of shares available, and enhance liquidity. United Bank Limited (UBL) is a useful Pakistani example: its 2-for-1 split roughly doubled its outstanding shares from around 1.2 billion to approximately 2.5 billion.",
      },
      { type: "h3", text: "What Are Bonus Shares?" },
      {
        type: "p",
        text: "Bonus shares are additional shares issued to existing shareholders free of cost, based on a specific percentage (e.g. 20%, 50%, or even 800%). Unlike stock splits, bonus shares are issued out of a company's reserves, such as retained earnings.",
      },
      {
        type: "p",
        text: "Example: an investor holds 1,000 shares at PKR 120 each (PKR 120,000 total). A 20% bonus issue adds 200 shares (1,200 total), and the adjusted price becomes 120 ÷ 1.20 = PKR 100 — total value unchanged at PKR 120,000. Mari Energies' 800% bonus issue in 2014 — eight bonus shares for every one held — increased shares ninefold and reduced the share price from around PKR 3,600 to approximately PKR 400, noticeably improving liquidity and trading activity.",
      },
      { type: "h3", text: "Key Difference: Tax Treatment in Pakistan" },
      {
        type: "p",
        text: "In Pakistan, no tax applies to stock splits, since shares are merely subdivided — there's no concept of additional income. Bonus shares, however, are treated by the government as additional income even though the investor's overall value doesn't increase, so a withholding tax (currently 15%) applies.",
      },
      {
        type: "p",
        text: "Example: you own 100 shares at PKR 520 each (PKR 52,000). After a stock split, 200 shares at PKR 260 — still PKR 52,000, no tax. With bonus shares, a 15% tax on the additional shares means you effectively receive 85 extra shares instead of 100 — at PKR 260, that's 260 × 185 = PKR 48,100, a real reduction in value.",
      },
      {
        type: "p",
        text: "This tax liability has made stock splits more common in Pakistan while bonus share issuance has declined. Mari Energies and Fast Cables were likely among the last to issue bonus shares, while Lucky Cement (5-for-1), Systems Limited (5-for-1), Arif Habib Corporation (10-for-1), and UBL (2-for-1) have recently issued stock splits instead.",
      },
      { type: "h3", text: "Final Perspective" },
      {
        type: "p",
        text: "While bonus shares and stock splits may appear similar on the surface, they differ in source, accounting treatment, and taxation. Stock splits are simpler, tax-neutral, and purely structural, whereas bonus shares involve reserves and attract tax in Pakistan. Understanding these distinctions can help you make better-informed investment decisions.",
      },
    ],
  },
  {
    slug: "capital-gains-tax-on-psx-trades",
    title: "An Investor Guide to Capital Gains Tax on PSX Trades",
    excerpt:
      "CGT sounds intimidating, but it's only ever charged on your profits. Here's how NCCPL calculates, collects, and even refunds capital gains tax on your PSX trades.",
    date: "2025-12-18",
    accent: "primary",
    icon: "scale",
    content: [
      { type: "p", text: "PSX has been a rewarding way to grow wealth for many. However, nothing good comes without some sacrifice. In this case, we are talking about the inevitable Capital Gains Tax (CGT). We have observed that CGT seems intimidating to a lot of people but a key point to note is that CGT is paid on your profits only. You still come out as a winner in the end. Let us break down the nuances of CGT in detail for you." },
      { type: "h3", text: "Key Takeaways" },
      { type: "ul", items: [
        "CGT is a tax on profits from selling assets like shares.",
        "NCCPL is the brains behind the operation that guarantees settlements and computes and collects CGT using data from PSX, as well as from the CDC, AMCs, and PMEX.",
        "CGT rate is inversely linked to holding period as per latest structure; the detailed structure is provided later for your understanding.",
        "It's not all gloom — losses can offset gains, and refunds are automatic if overpaid.",
      ] },
      { type: "h3", text: "Understanding Capital Gains Tax" },
      { type: "p", text: "Suppose you purchase shares of a high-performing technology company for PKR 100/share and then sell them for PKR 150/share. The resulting PKR 50 profit from that sale would be subject to capital gains tax." },
      { type: "p", text: "The topic remains a source of confusion for many, who wonder:" },
      { type: "ul", items: [
        "What tax rates are applicable?",
        "Is it deducted per trade or monthly?",
        "Which costing method is used for computation of CGT?",
      ] },
      { type: "h3", text: "Purchase date and tax-filing status determine CGT rate" },
      { type: "p", text: "Rates at which CGT is deducted depend on acquisition date, holding period, and filer status. Starting July 2025, most investors will face a flat 15% rate, creating a more level playing field." },
      { type: "p", text: "Here's the scoop for tax year 2026, by holding period, for ATL filers versus Non-ATL:" },
      { type: "ul", items: [
        "Pre-July 1, 2013: 0% for ATL filers, 0% for Non-ATL",
        "July 1, 2013–June 30, 2022: 12.5% for ATL filers, 25% for Non-ATL",
        "July 1, 2022–June 30, 2024, held 1–2 years: 12.5% for ATL filers, 25% for Non-ATL",
        "Held 2–3 years: 10% for ATL filers, 20% for Non-ATL",
        "Held 3–4 years: 7.5% for ATL filers, 15% for Non-ATL",
        "Held 4–5 years: 5% for ATL filers, 10% for Non-ATL",
        "Held 5–6 years: 2.5% for ATL filers, 5% for Non-ATL",
        "Holding period exceeds 6 years: 0% for ATL filers, 0% for Non-ATL",
        "July 1, 2024–June 30, 2025: 15% for ATL filers, 30% for Non-ATL",
        "July 1, 2025 onward: 15% for ATL filers, 15% for Non-ATL",
      ] },
      { type: "p", text: "NCCPL regularly updates any changes to the CGT rates on its website. Investors can follow nccpl.com.pk/cgt to stay updated." },
      { type: "h3", text: "CGT is collected monthly by NCCPL" },
      { type: "p", text: "The National Clearing Company of Pakistan Limited (NCCPL) acts as a behind-the-scenes calculator, tracking investors' trading transactions, and billing individuals monthly. The NCCPL shares CGT liabilities on a monthly basis (for prior month) with brokers for their clients. The brokers are then required to deduct cash from their clients' accounts and submit to NCCPL. In case an investor fails to provide cash for CGT, the broker is required to submit his/her details to the NCCPL which in turn blocks their UIN for further buying." },
      { type: "h3", text: "CGT is worked on FIFO costing" },
      { type: "p", text: "The calculations are based on the FIFO (first-in, first-out) method of costing. For example, you bought 100 shares at a cost of PKR 200/share and then bought 100 shares again at a cost of PKR 170/share, taking your average cost to PKR 185. Now assuming you sell 50 shares at PKR 225, your CGT liability shall be calculated on PKR 25 gain (PKR 225 – PKR 200) under the FIFO approach." },
      { type: "h3", text: "Losses can help lower liabilities in the same year" },
      { type: "p", text: "Losses can be offset against gains in the same year or carried forward for up to three years if you are on the Active Taxpayer List. Losses can offset gains, allowing the CGT to be adjusted or even refunded. For example, if you booked a profit of PKR 50,000 and CGT was deducted, but later you incur a loss of PKR 20,000, you'll only end up paying CGT on the net gain of PKR 30,000. This ensures that you are taxed fairly and only on the gains that actually stick. Refunds are automatic in such cases." },
      { type: "h3", text: "Take the Next Step" },
      { type: "p", text: "Taxation is a reality of life. The good part is that CGT only applies to profits on PSX trades. While a new investor (tax-filer) pays 15% on the amount of profit, the remaining 85% remains with him/her. Hence, CGT should be the least of your concerns as long as you are making cash available in your account on the deduction date!" },
    ],
  },
  {
    slug: "personal-finance-living-smart",
    title: "Personal Finance Isn't Just About Saving — It's About Living Smart",
    excerpt:
      "Saving and investing get all the attention, but real personal finance is about balancing today's life with tomorrow's goals. Four simple pillars to get there.",
    date: "2025-05-05",
    accent: "teal",
    icon: "coins",
    content: [
      { type: "p", text: "I see a lot of people posting about saving and investing these days under the umbrella of personal finance. However, in my opinion, personal finance is more than that. It's about building a balanced relationship with money that supports both your future goals and your present quality of life." },
      { type: "p", text: "Let's break it down into four simple pillars:" },
      { type: "h3", text: "1. Pay Yourself First" },
      { type: "p", text: "Yes, spending is just as important. A good lifestyle — the right environment, health, experiences — directly impacts your mental clarity, motivation, and earning capacity. But balance is key. Don't spend to impress, spend to enhance your life. The real flex is financial peace, not flashy purchases." },
      { type: "h3", text: "2. Save Whatever You Can" },
      { type: "p", text: "Your salary isn't truly yours until you've saved a part of it. Whether it's 10% or 30%, consistency is more important than the amount. Automate your savings so it becomes non-negotiable — like a monthly bill you owe your future self." },
      { type: "h3", text: "3. Track, Don't Restrict" },
      { type: "p", text: "Budgeting isn't about saying “no” to everything fun. It's about knowing where your money goes and making intentional choices. Use the 50/30/20 rule as a starting point:" },
      { type: "ul", items: ["50% for needs", "30% for wants", "20% for savings & investments"] },
      { type: "p", text: "Awareness creates control — not guilt." },
      { type: "h3", text: "4. Grow What You Save" },
      { type: "p", text: "Saving alone won't beat inflation. Investing — whether in fixed income, mutual funds, or stocks — helps your money work for you. You don't need to be a market expert to get started. Start small. Stay consistent. Focus on the long term." },
      { type: "p", text: "In the end, I would like to reiterate that you don't need to worry if you can't spare 10% of your salary today. Consistency is more important than the amount even if it is only 2%. In the next writeup, I would delve into how your monthly savings or contributions can grow exponentially over time." },
    ],
  },
  {
    slug: "pakistan-india-tensions-and-psx",
    title: "Pakistan-India Tensions and PSX: What Should Be Your Strategy?",
    excerpt:
      "As tensions flare between Pakistan and India, PSX investors face a familiar dilemma — sell, sit tight, or keep buying. Here's how to think through risk tolerance in the moment.",
    date: "2025-05-05",
    accent: "primary",
    icon: "compass",
    content: [
      { type: "p", text: "The two countries have engaged in yet another conflict recently in the wake of the Pahalgam Terrorist Attack. The last escalation was witnessed in 2019 amid the Pulwama Attack, and we have seen many similar situations. This isn't the first time." },
      { type: "p", text: "The way I see it — both sides are smart enough to understand that a war can only bring destruction and could result in massive (massive is probably too small a word here) casualties, given the combined population of the two countries is more than 1.8 billion. Having said that, some escalation cannot be ruled out due to political reasons." },
      { type: "p", text: "How do we position ourselves as PSX investors in this situation? I can see three different strategies in this scenario." },
      { type: "ul", items: [
        "Sell everything today and keep cash in hand. When things cool down and you're feeling confident, you can get back in. In this case, you may be buying back at higher prices, but that is probably the cost of insurance against a large-scale problem. Having said that, I believe we would have bigger things to worry about in case of a full-scale war.",
        "Relax and do nothing. As mentioned above, we would have more important things to worry about in case of war. When things cool down, your portfolio can gradually regain.",
        "Keep your SIP mode on and continue buying if the market falls. This is a riskier approach but could offer you supernormal gains once things are back to normal.",
      ] },
      { type: "p", text: "If you have any other strategy in mind, please do share in the comments." },
      { type: "p", text: "What should be our strategy? There is no right or wrong here — your approach depends on your risk tolerance and whatever you are comfortable with." },
      { type: "p", text: "Risk tolerance is usually ignored by investors when it comes to PSX; however, it is the single biggest determinant of your investing strategy. We have also recently made a video on how to assess your risk tolerance and come up with asset allocations — you can watch that if you're unclear on this." },
    ],
  },
  {
    slug: "understanding-market-cycles-in-psx",
    title: "Understanding Market Cycles in Pakistan Stock Exchange (PSX)",
    excerpt:
      "Pakistan's stock market often looks unpredictable — sharp growth followed by steep declines. But these swings follow patterns, not randomness.",
    date: "2025-03-26",
    accent: "teal",
    icon: "shape",
    content: [
      {
        type: "p",
        text: "Market cycles are a fundamental concept every investor should understand. In Pakistan, the stock market often seems unpredictable, with periods of sharp growth followed by steep declines. But these movements aren't random — they follow patterns driven by economic realities.",
      },
      {
        type: "p",
        text: "A market cycle refers to the recurring phases of growth and decline in the stock market. Typically, a full cycle consists of a bull phase and a bear phase. Here's how market cycles have played out in the PSX:",
      },
      {
        type: "ul",
        items: [
          "2004–2007: rapid growth driven by economic optimism and reforms.",
          "2008: a global oil price run balloons the current account deficit and creates a currency crisis.",
          "2013–2017: economic growth, low interest rates, and CPEC-related optimism lead to a strong bull run.",
          "2018–2019: limited export growth translates into a current account deficit crisis, leading to tightening and a bear market.",
          "2020 (COVID-19): a quick crash followed by a strong recovery in 2021.",
          "2022–2023: low interest rates trigger another imports-led current account crisis, weighing heavily on the market.",
          "2024: IMF reforms, declining inflation, and improved outlook deliver one of PSX's strongest performances.",
        ],
      },
      {
        type: "p",
        text: "While stock markets globally are influenced by various factors, Pakistan's market cycles — particularly bear markets — can largely be traced back to one root cause: the current account deficit.",
      },
      {
        type: "p",
        text: "The sequence typically begins with economic growth, which increases demand for imports. Unfortunately, Pakistan's export base and remittance inflows often fail to keep pace, causing a shortage of foreign exchange reserves. To counter this, the central bank allows the rupee to depreciate, leading to a surge in inflation and interest rates.",
      },
      {
        type: "p",
        text: "Interest rates carry an inverse relationship with equities. In periods of higher rates, fixed income or risk-free instruments offer attractive returns and money moves away from risky assets like stocks, and vice versa. Fundamentally, justified P/E = 1 ÷ (R − G), where R is the cost of equity — R rises or falls with interest rates, inversely impacting equity valuations.",
      },
      {
        type: "p",
        text: "Monetary tightening slows economic activity. Higher borrowing costs reduce investment and consumption, dampening corporate earnings and investor sentiment. The outcome is a market downturn driven not by fear alone, but by genuine economic stress.",
      },
      {
        type: "p",
        text: "Market cycles are inevitable, but how investors react to them can make all the difference. Trying to time the market — predicting exact highs and lows — is rarely successful. A long-term, disciplined approach works better: during downturns, focus on gradually accumulating fundamentally strong assets at attractive valuations. In bull markets, it's important to avoid overconfidence.",
      },
      {
        type: "quote",
        text: "The stock market is the story of cycles and of the human behaviour that is responsible for overreactions in both directions.",
        attribution: "Seth Klarman",
      },
    ],
  },
  {
    slug: "finding-opportunities-with-sip",
    title: "Finding Opportunities in the Market's Ups and Downs – SIP",
    excerpt:
      "With the KSE100 brushing 100,000 points, volatility isn't the enemy — it's the opportunity. Here's why a disciplined SIP approach beats chasing headlines every time.",
    date: "2024-11-27",
    accent: "primary",
    icon: "coins",
    content: [
      { type: "p", text: "Since the KSE100 has now reached almost 100K points, I feel it's a good time to write on how volatility is your best friend in your investing journey. Unfortunately, our country goes through an economic crisis every five years, which also translates into a stock market crash." },
      { type: "p", text: "Investors (including big shots) suffer big losses on their capital; however, common people mostly stay away from this kind of adventure. Hence we hear this famous statement — “Pakistan's stock market always ends up in losses” — from our acquaintances." },
      { type: "p", text: "Despite volatility over time (especially over the past seven years), the KSE100 index reaching an all-time high of close to the 100K level is a testament to the fact that valuations are realized sooner or later, and that stocks tend to provide the highest returns of all asset classes in the long run." },
      { type: "p", text: "Volatility is good because it lets you buy high-quality businesses at discounted prices. UBL's stock price fell under PKR 100 last year while interest rates were rising, and the bank was working as usual. Imagine a PKR 100 stock price versus an expected dividend of PKR 30/share (the actual dividend turned out to be more than PKR 40/share) — I can only say WTF. Today, the stock is worth PKR 340, and now people wish they had bought it earlier. And there are so many other examples." },
      { type: "p", text: "I see a lot of people posting stuff like “who gets rich on salaries?” on social media. That's true — not because salaries aren't enough, but because people don't properly manage their finances. The best part about being a salaried person is monthly inflow, a portion of which can be invested through strict discipline. With SIP, you can keep buying monthly. If the market crashes, you can keep buying and pulling down your average cost, so that when there is a bounce back (there is a bounce back every time) you come out with a much larger gain." },
      { type: "p", text: "There is one caveat, though: you must invest in fundamentally sound businesses with strong moats. Investing for short-term gains based on news and rumors isn't going to help you in the long run. If you do this, we will probably have more people saying, “Pakistan's stock market always ends up in losses.” That's not the stock market's problem — that's your investing problem." },
    ],
  },
  {
    slug: "pia-privatization-saga",
    title: "The PIA Privatization Saga and Stock Investment Strategy",
    excerpt:
      "PIA's stock swung from under PKR 5 to over PKR 30 and back on privatization headlines. What the saga reveals about investing on fundamentals versus timing the news.",
    date: "2024-11-04",
    accent: "teal",
    icon: "writing",
    content: [
      { type: "p", text: "PIA's stock was worth less than PKR 5 a year ago, and it rallied phenomenally to more than PKR 30 (in less than six months) as the government finally took concrete steps towards its privatization. Amid the shifting news flow, the stock then fell to PKR 12 before rallying back up to PKR 25." },
      { type: "p", text: "However, last week, it all turned out to be a failure when only one bidder participated, with a bid value of PKR 10 billion against the privatization commission's minimum value of PKR 85 billion. While it wasn't a surprise considering what happened with the IPPs' PPA terminations, I won't go into those details here." },
      { type: "p", text: "PIA's market capitalization on the Pakistan Stock Exchange at its peak was close to more than PKR 160 billion. The government would probably have been better off selling its shares in the stock market. Nonetheless, it's not such an easy call, as PIA is the national flag carrier." },
      { type: "p", text: "Now, since the bidding day, the stock has been hitting lower circuits every day and has reached PKR 14 today. Despite the supernormal run, I never participated in this stock. A lot of my friends pitched this stock to me on the turnaround story, but I stayed away due to too much reliance on the bureaucracy, which has a history of bad decision-making." },
      { type: "p", text: "Some might argue that I missed out on good potential returns, but that involved more timing than anything. The best part about investing on fundamentals is that value is realized sooner or later — it's much safer and simpler. Investing is more about discipline than anything else." },
      { type: "quote", text: "Don't lose money. Capital protection is your key, as your returns compound over time into something big.", attribution: "Warren Buffett, Rule #1" },
    ],
  },
  {
    slug: "ev-adoption-in-pakistan",
    title: "Our Take on 4-Wheeler EV Adoption in Pakistan",
    excerpt:
      "Electricity at PKR 70 a unit changes the EV math in Pakistan. We ran the numbers on a Deepal L07 to see how long it actually takes to break even.",
    date: "2024-09-24",
    accent: "primary",
    icon: "chart",
    content: [
      { type: "p", text: "EV infrastructure isn't just about installing charging stations with heavy loads. The biggest obstacle in Pakistan is the cost of electricity, which has now reached nearly PKR 70 per unit — and that's the cost of electricity delivered by distribution companies." },
      { type: "p", text: "EV infrastructure providers would need to cover additional costs and earn some profit too, thereby further elevating the cost of electricity for EV charging purposes (assuming no government intervention). However, if the government intervenes to keep pricing low, we are talking about another source of circular debt, discouraging private investors unless returns are guaranteed, like IPPs." },
      { type: "p", text: "The already high cost of electricity doesn't leave much savings on the table for 4-wheeler EV buyers. Let's take the Deepal L07 as an example — it has a battery capacity of 67 kWh and a range of 540 km. Bear in mind that EV range numbers are quoted under ideal conditions; the number usually drops when the AC is turned on or other factors come into play." },
      { type: "ul", items: [
        "One full charge of the battery should cost 67 x 70 = PKR 4,700.",
        "Assuming 50 km of running in a day, the cost of electricity per day should be PKR 435.",
        "Assuming a mileage of 7 km/liter, a gasoline car should cost PKR 1,800 per day.",
        "Daily savings = PKR 1,365",
        "Monthly savings = PKR 34,125",
        "Annual savings = PKR 409,500",
      ] },
      { type: "p", text: "On the other hand, the upfront price of EVs is higher compared to their gasoline counterparts. The Deepal L07 costs PKR 15.5 million — we can comfortably assume that this is a premium of PKR 4 million." },
      { type: "p", text: "We can calculate the payback period as 4,000,000 / 409,500 ≈ 10 years." },
      { type: "p", text: "I feel that this payback period is absurd, and these calculations assume PKR 70 per unit of electricity. EV adoption is high in countries where:" },
      { type: "ul", items: [
        "Government incentives are in place",
        "Income levels are high",
        "Environmental conservation pushes exist",
      ] },
      { type: "p", text: "I believe Pakistan doesn't tick any of these boxes." },
    ],
  },
  {
    slug: "regulatory-contradictions-banking-sector",
    title: "Regulatory Contradictions in Banking Sector",
    excerpt:
      "Banks keep parking deposits in government paper instead of lending to businesses — and the very rules meant to fix that are quietly working against it.",
    date: "2024-09-24",
    accent: "teal",
    icon: "scale",
    content: [
      { type: "p", text: "The banks in Pakistan have remained under severe criticism for routing a major portion of their liabilities towards government securities and leaving the private credit market dry. But banks are not social organizations — they are businesses. There is no logical incentive for banks to extend risky lending to the private sector for a few hundred bps more when the government is willing to offer sky-high returns for no risk." },
      { type: "p", text: "Policymakers have been trying to push banks towards private sector lending through regulatory interventions; however, they have failed so far due to the lack of a conducive environment. Let's take a look at some interesting regulatory contradictions." },
      { type: "p", text: "A policy rate below the discount rate was introduced in 2015, at which banks could borrow from the SBP discount window. As a result, banks could earn a risk-free spread by borrowing from the SBP discount window and lending to the government — seemingly created to evade the IMF's restriction on the government's borrowing from the SBP." },
      { type: "p", text: "While the spread has fluctuated between positive and negative due to movement in the yield curve, the average has been a positive 0.4% since it was introduced. No wonder large banks like UBL are excited to borrow from this discount window — as per its latest financial statements, UBL's repo borrowings stand close to PKR 4 trillion versus a total deposit base of PKR 2.9 trillion." },
      { type: "p", text: "Amid large fiscal deficits, it's the government that's crowding out the private sector by creating an abnormally large demand for money. Despite such a high concentration of banking deposits in government securities, OMO injection stands at an all-time high of PKR 12 trillion (more than 10% of GDP), reflecting the liquidity crisis in the system. In addition, there is an outstanding net budgetary borrowing of PKR 4.4 trillion from the SBP." },
      { type: "p", text: "Moreover, there is an additional income tax on banks that are unable to maintain an advance-to-deposit ratio (ADR) of 50%. Private sector lending is M2 expansionary, whereas the central bank is running a tight monetary policy owing to an external account crisis at the same time." },
      { type: "p", text: "Regulatory interventions would not help as long as the government remains the largest borrower in the system. In 2003–04, T-Bill yields had dropped under 3% (despite a discount rate of 7.5%) because the government was running a very low budget deficit. Lowering the fiscal deficit is not going to help much at this stage — the government must run large primary surpluses in order to lower its borrowings relative to GDP and leave room for private credit expansion at the same time." },
    ],
  },
  {
    slug: "how-to-10x-your-savings",
    title: "How to 10x Your Savings",
    excerpt:
      "A simple compounding example shows how patience, reinvestment, and steady monthly contributions — not luck — can turn modest savings into roughly PKR 7 million over ten years.",
    date: "2024-09-24",
    accent: "primary",
    icon: "rocket",
    content: [
      { type: "p", text: "I have come across various videos on YouTube that talk about how you can double your money. I thought I should go multiples higher and explain how you can 10x your savings." },
      { type: "p", text: "I am a fundamental investor and not fond of casinos. I try to capitalize on the powers of patience, contributions, and compounding. Let's understand it through an example." },
      { type: "p", text: "Assuming you have an initial investment of PKR 1,000 and you earn 10% profit per year. At the end of Year 1, you would have an initial capital of PKR 1,000 and PKR 100 in profit. Let's assume further that your initial investment is locked at face value; you would have PKR 2,000 at the end of 10 years — PKR 1,000 in initial capital and PKR 100 x 10 = PKR 1,000 in profit. These are called simple calculations." },
      { type: "p", text: "Now let's consider reinvestment of the profits into the same investment. Now, you would begin with PKR 1,100 in Year 2: PKR 1,100 x (1 + 10%) = PKR 1,210." },
      { type: "p", text: "See, you have an additional amount of PKR 10, from the profit component on the reinvested amount of PKR 100. Let's take it further: Year 3 = PKR 1,210 x (1 + 10%) = PKR 1,331. Year 4 = PKR 1,331 x (1 + 10%) = PKR 1,464." },
      { type: "p", text: "By Year 10, you would have PKR 1,000 x (1 + 10%) ^ 10 = PKR 2,594." },
      { type: "p", text: "Just by virtue of compounding, you have managed to generate an additional 30% (PKR 2,594 vs PKR 2,000) over the simple process." },
      { type: "p", text: "With this compounding approach, you need to earn an annualised return of 26% to 10x your initial capital over a 10-year period." },
      { type: "p", text: "Now let's add another dimension to it, i.e. contributions. In addition to a PKR 25,000 initial investment, let's add monthly contributions of PKR 25,000 as part of our savings approach. Each additional contribution shall also earn profits, thereby creating a snowballing effect on your overall portfolio. You can use MS Excel for this calculation." },
      { type: "p", text: "MS Excel = Future Value (profit rate, number of periods, fixed contribution, present value, type = 1 for annuities with payment at the start)" },
      { type: "p", text: "MS Excel = FV (15% / 12, 10 x 12, 25000, 0, 1) ~ PKR 7 million" },
      { type: "ul", items: ["15% return is a more reasonable number in case of Pakistan", "15% has been divided by 12 to generate a monthly average", "10 years have been multiplied by 12 to generate the number of months"] },
      { type: "p", text: "WOW!" },
    ],
  },
  {
    slug: "outperforming-the-market-big-picture",
    title: "Outperforming the Market: It's All About the Big Picture",
    excerpt:
      "Real outperformance rarely comes from fine-tuning an EPS estimate by a few cents — it comes from spotting the big trend the rest of the market hasn't priced in yet.",
    date: "2024-09-18",
    accent: "teal",
    icon: "thinking",
    content: [
      { type: "p", text: "Generating outperformance isn't linked to accuracy but to identifying big trends. It doesn't matter if your projected EPS is 5.10 or 5.20; spending hours fine-tuning this estimate to 5.25 isn't going to add much value." },
      { type: "p", text: "Likewise, assuming an efficient market hypothesis, if your estimate is close to the consensus and actual earnings are close to the same, there is unlikely to be any room for alpha generation." },
      { type: "p", text: "However, if your earnings estimate has a significant variance from the consensus and actual earnings are close to your estimate, you unlock an alpha and achieve outperformance. You need to find that variance." },
      { type: "p", text: "Last year, I met someone who asked me for a low-risk investment suggestion. I recommended Engro Fertilizers (PSX: EFERT) to him and he said that current earnings were unsustainable due to the expected expiry of concessionary gas. And I met so many other people who shared the same opinion. Alhamdulillah, to my benefit, people were probably not reading EFERT's financial statements in detail. The management had mentioned in its notes that they were already provisioning the expense at higher gas prices. I didn't even need to come up with any EPS estimate as the gap between expectations and actual earnings was way too big, which then led to a very steep movement in price." },
      { type: "p", text: "Likewise, my experience of running an automotive company helped me understand the kind of economies of scale that Sazgar Engineering (PSX: SAZEW) could realize in the March/2024 quarter. While my friends were concerned about the sustainability of its gross profit margins, Alhamdulillah I told them that they should prepare for further expansion. And we saw the rally that ensued post the result." },
      { type: "p", text: "In another case, back in 2017, the stock market was betting on an amazing result from ATRL right after the completion of its upgradation project. My friends were estimating the net impact of the project with a depreciation expense at an estimated useful life of 20 years. Alhamdulillah, to my benefit again, they had not checked its accounting policy, which clearly mentioned that plant and machinery were depreciated on a 10-year life. The net impact turned out to be negative in the end." },
      { type: "p", text: "Some of the readers might feel that I am boasting with these examples. However, the idea is to explain that the devil is generally in the details, but it can be in the macros too. For example, Alhamdulillah again, I realized early on that AMD had turned around its products and technology whereas Intel was still focused on its market share. AMD stock is up 5x over the past 5 years and INTC stock is down 50% over the same period." },
      { type: "p", text: "What we must understand is that identifying big trends that differ from market expectations can lead to huge outperformances. In this backdrop, it is essential to understand market expectations as well. You win half of the battles by knowing yourself and the remaining half by knowing your opponents." },
    ],
  },
  {
    slug: "target-pe-ratio-explained",
    title: "Target P/E Ratio Explained: A Simple Approach for Stock Valuation",
    excerpt:
      "Determining a target P/E multiple for a stock isn't rocket science. Here's a simple, practical formula for valuing PSX companies.",
    date: "2024-09-18",
    accent: "primary",
    icon: "idea",
    content: [
      {
        type: "p",
        text: "While it feels way too complicated to a majority, determining a target P/E multiple for a stock isn't any rocket science. Using a simple formula and some basic judgment gets you most of the way there — though remember that valuation is an art, not a science, so your approach can differ.",
      },
      {
        type: "p",
        text: "The Gordon Growth Formula determines a target P/E ratio for a constant, sustainable growth model: P/E = Payout Ratio ÷ (R − G), where the payout ratio is dividend per share divided by earnings per share, R is the cost of equity, and G is the sustainable growth rate.",
      },
      {
        type: "p",
        text: "For companies with strong cash flow generation, such as fertilizers or autos, a 100% payout ratio is a reasonable assumption — otherwise they'd be reinvesting in growth instead.",
      },
      { type: "h3", text: "Estimating the Cost of Equity" },
      {
        type: "p",
        text: "Cost of equity can be calculated a few ways; a common approach is risk-free bond yield plus a risk premium. The equity risk premium is the additional return an investor requires to take on the added risk of equities — 10% is a reasonable starting point, though this can vary with your risk profile.",
      },
      {
        type: "p",
        text: "For the risk-free yield, you can either look at long-term yields to avoid short-term fluctuations, or use short-term benchmarks to keep current monetary policy in mind. With the 10-year PIB yield hovering around 14% and the 12-month T-Bill around 18%, a conservative approach uses 18% + 10% = 28% as the cost of equity (R).",
      },
      { type: "h3", text: "Estimating the Growth Rate" },
      {
        type: "p",
        text: "For growth rate (G), nominal GDP growth is a reasonable benchmark: 10% inflation + 2.5% real GDP growth = 12.5% earnings growth. That gives us: Target P/E = 1 ÷ (28.0% − 12.5%) = 6.5x — a benchmark multiple for sound, cash-flow generating companies.",
      },
      { type: "h3", text: "Adjusting for Special Cases" },
      {
        type: "p",
        text: "Two considerations may require additional work. First, above or below short-term earnings growth: if a company is likely to experience supernormal growth for the next 2–3 years, apply the 6.5x multiple to fourth-year earnings (once it enters a normal growth period) and discount it back using the cost of equity. Second, cash flow constraints: for companies unable to generate cash flows in line with their profitability, apply a discount depending on the severity of the problem — for example, a 50% discount for PSO.",
      },
      {
        type: "p",
        text: "Assigning a target P/E is the last step in your valuation process. Forming an earnings outlook is a much more critical and time-consuming exercise — one worth its own deep dive.",
      },
    ],
  },
  {
    slug: "risks-of-renegotiating-ipp-contracts",
    title: "Risks of Renegotiating IPP Contracts in Pakistan",
    excerpt:
      "As pressure mounts to renegotiate IPP contracts amid soaring electricity bills, walking away from a sovereign commitment could cost Pakistan far more than the payments it's trying to save.",
    date: "2024-09-18",
    accent: "teal",
    icon: "shield",
    content: [
      { type: "p", text: "The government is under pressure to eliminate or renegotiate IPP contracts amid skyrocketing electricity bills, creating yet another panic situation for the government. The PMLN government has a history of making hasty decisions." },
      { type: "p", text: "First, they promised dollarised 30% ROE to power plants in their previous tenure, which is now biting everyone. Now, they are looking for ways to evade those promised capacity payments, which is again going to have long-lasting adverse repercussions." },
      { type: "p", text: "There are calls to renegotiate contracts with IPPs; this is the worst thing they can do, i.e. back out of a sovereign commitment. At a time when this economy needs investments, we are going to send out a message saying, “please don't trust us, we can hurt your investment anytime.”" },
      { type: "p", text: "I believe the government understands this, which is why there is now a proposal to make upfront capacity payments of PKR 4 trillion to the IPPs and end those contracts. While this can certainly generate savings by lowering the cost of capital from expensive dollarised ROE to cheaper PKR domestic interest rate, I believe there is a serious strategic consideration." },
      { type: "p", text: "What will happen to the electricity supply? Once contracts end, IPPs shall be under no commitment to generate power. They should even be able to sell those plants. Despite economic cycles, the economy has been growing in the long run and hence electricity demand. As a result, we can enter another phase of deficit in the future. Even if the IPPs are required to keep operating under the take-and-pay model, there is no recourse except legal battle if they don't deliver on their commitment." },
      { type: "p", text: "For those concerned about the source of financing, capacity payment includes both equity and debt components (unless there is some misunderstanding and all 4 trillion pertain to equity). Assuming a 25–75% debt-equity combination, the government roughly needs to borrow an additional PKR 1 trillion, which is the equity part. The debt part is already borrowed and just needs to be refinanced. Nevertheless, the equity part will most likely be funded through OMO injection (SBP's printing machine) as the fiscal deficit is way too high to leave anything for anyone else." },
      { type: "p", text: "I used to write aggressively against this power policy back in the day. Promising a 30% dollarized ROE was unfair; nonetheless, the government should not back out of its commitment today. Upfront capacity payment does seem like a viable solution; however, the policy makers must keep future demand and supply in mind before making any decision. The government should also consider fixing dollar indexation of local IPPs with the actual dollar cost of the project." },
      { type: "p", text: "One key learning from this episode of IPPs is that capital flows where there is profit. Pakistan needs such profitable policies in export-related sectors." },
      { type: "quote", text: "Our economic crises are always external and not fiscal." },
      { type: "p", text: "Let the private sector make money and generate dollars for the economy." },
    ],
  },
  {
    slug: "sazew-stock-imagination-and-valuation",
    title: "SAZEW Stock: How Imagination and Valuation Led to Big Gains",
    excerpt:
      "A three-wheeler maker most investors overlooked went from a 7.4 rupee quarterly EPS to a ten-month rally — a lesson in what patience, imagination, and downside math can do for a portfolio.",
    date: "2024-09-18",
    accent: "primary",
    icon: "writing",
    content: [
      { type: "p", text: "In Mar/23, I met a friend who told me about this new car, Haval, which was amazing value for money. It was introduced by Sazgar Engineering (PSX: SAZEW). There were import bans in place then, so I didn't pay much attention to it." },
      { type: "p", text: "In Jul/23, Pakistan had resumed the IMF program, import curbs had ended, and the stock market had started showing signs of recovery. While looking for alpha-generating stocks, I came across SAZEW again." },
      { type: "p", text: "I checked out its last quarterly report; the company had already reported an EPS of 7.4 rupees. I crunched some basic numbers and concluded that it could deliver an annualized EPS of more than 30 rupees at that run-rate, thereby implying a P/E ratio of only 2x. An approx. 50% earnings yield (EPS/Price) was mind-boggling." },
      { type: "p", text: "I conducted a downside versus upside analysis. The market capitalization at that time was less than 3 billion rupees, which seemed extremely under-appreciated to me given SAZEW was already the market leader in three-wheelers. There wasn't much to lose." },
      { type: "p", text: "The upside potential, on the other hand, was literally the sky's limit. Economic revival together with additional word of mouth had the potential to triple or even quadruple its sales volumes due to the low base effect." },
      { type: "p", text: "I accumulated some shares for friends at an average cost of 66 rupees. However, the company kept shattering all expectations in terms of volumes as well as margins, thereby leading to an astounding price performance over the last 10 months." },
      { type: "p", text: "SAZEW reported an EPS of 50 rupees for the Mar/24 quarter, whereas the stock price itself was 66 rupees in Jul/23. While it was nearly impossible to project this level of profitability, a multi-bagger potential did exist in Jul/23, but it was a risky bet as the company had only reported one such result." },
      { type: "p", text: "I tried to trade a couple of times during this journey and ended up missing a portion of this rally. However, I did manage to ride a big majority of it." },
      { type: "p", text: "A downside versus upside analysis allowed me to take this bet and helped generate a massive outperformance. My key takeaways from this journey are:" },
      { type: "ul", items: ["Valuations are key to investments; they also define the level of risk we take.", "At the same time, it's extremely important to let our imagination do its part without any limitations instead of forcing barriers on it.", "Don't trade unnecessarily; invest for the long haul."] },
    ],
  },
  {
    slug: "truth-about-reer",
    title: "The Truth About REER: Lagging Indicator of Currency Value",
    excerpt:
      "REER often gets read as a signal that the rupee is about to swing — but the numbers from 2023 show it tells you where the currency has been, not where it's headed.",
    date: "2024-09-18",
    accent: "teal",
    icon: "chart",
    content: [
      { type: "p", text: "REER (Real Effective Exchange Rate) is frequently misunderstood in Pakistan as an indicator of currency undervaluation or overvaluation. Critically, it functions as a lagging rather than leading indicator of currency valuation relative to trading partners." },
      { type: "quote", text: "100 should not be misinterpreted as denoting the equilibrium value of the currency. 100 merely represents the value of the currency at a chosen point in time (in this case the average value of the currency in 2010).", attribution: "State Bank of Pakistan" },
      { type: "h3", text: "The March 2023 Misconception" },
      { type: "p", text: "One year prior, REER dropped to 85 in March 2023 when PKR depreciated to approximately 280 against the USD. Many investors incorrectly interpreted this REER of 85 as signaling 15% currency undervaluation, expecting subsequent appreciation." },
      { type: "h3", text: "The December 2023 Reality Check" },
      { type: "p", text: "By December 2023, while PKR remained around 280 versus the USD, REER had climbed to nearly 99. This occurred because REER incorporates inflation differentials between domestic and basket currencies. The hyperinflation following the previous devaluation widened the currency gap, pushing REER back toward 99." },
      { type: "h3", text: "Practical Market Dynamics" },
      { type: "p", text: "Beyond its theoretical limitations, REER remains largely academic. Market realities — specifically current account and financial account supply-demand dynamics — ultimately determine actual currency equilibrium levels." },
    ],
  },
  {
    slug: "hinoon-stock-market-fear",
    title: "How Market Fear Led to 150% Gains in HINOON Stock",
    excerpt:
      "When Highnoon Laboratories' profits surged even as its share price collapsed with the wider market, one investor saw a mispricing too obvious to ignore — and it paid off within months.",
    date: "2024-09-16",
    accent: "primary",
    icon: "compass",
    content: [
      { type: "p", text: "Sometimes opportunities are right in front of our eyes, but we tend to ignore them just because they seem too good to be true. For fundamental investing, we must keep aside our gut, feelings, and biases and instead focus on facts and numbers." },
      { type: "p", text: "Back in Jul/2019, Pakistan Stock Market was bleeding against the harsh realities of tough macroeconomic adjustments, and I was screening for some fundamentally sound stocks which could at least double in response to economic stabilization." },
      { type: "p", text: "It wasn't easy since it required a lot of imagination in terms of company responses to the economic environment. While corporate profitability was taking a hit, Highnoon Laboratories (PSX: HINOON) had reported more than 40% growth in its profit for the Jun/2019 quarter. It wasn't any one-off, rather pure revenue and margins driven growth." },
      { type: "p", text: "HINOON's stock price had less than halved since its peak in 2017 whereas its profit after tax was up nearly 60% in 2019, thereby causing its price-to-earnings ratio (P/E) to shrink from close to 30x to less than 10x." },
      { type: "p", text: "A systematic risk had led to over-correction in this fundamentally strong company. The forest fire burns even the sandalwood tree, creating opportunities for value investors — especially contrarians." },
      { type: "p", text: "I discussed my thesis with a few friends and concluded that people were trying to justify the market valuation as they couldn't digest that financial performance in such a turbulent economic period." },
      { type: "p", text: "As soon as the market stabilized, it took the stock only 5 months to yield 150% return. It was arguably one of the safest bets at the time. There were a lot of similar stories in 2023 when there was panic across the board." },
      { type: "p", text: "This theme also resonates with a famous saying:" },
      { type: "quote", text: "Buy when there is blood in the streets, even if the blood is your own." },
    ],
  },
  {
    slug: "power-of-compounding-efert",
    title: "The Power of Compounding: How EFERT Delivered 10x Returns Over a Decade",
    excerpt:
      "A decade of steady dividend reinvestment turned Engro Fertilizers into a quiet tenbagger — proof that patience and compounding can outperform chasing exciting stories.",
    date: "2024-09-16",
    accent: "teal",
    icon: "coins",
    content: [
      { type: "p", text: "Engro Fertilizers (PSX: EFERT) has been one of my top investment recommendations for a while, purely due to its handsome dividend yield over the years and the mathematical concept of power of compounding. While looking for tenbaggers, people generally tend to focus on exciting stories and ignore the power of compounding. EFERT is an amazing example of a relatively lower risk and patient investment that has grown into almost 10x over the last 10 years just by virtue of dividend reinvestments." },
      { type: "p", text: "The working below explains how gradual dividend reinvestment (after-tax) into the same stock has led to multiplication of the capital. For simplicity of calculations, I have assumed reinvestment price equal to ex-price. The precise compounding is 9.4x, with 3.6x emanating from accumulation of shares and 2.6x from the share price growth." },
      { type: "p", text: "While EFERT's stock price remained under-appreciated for nearly 9 out of these 10 years, it has emerged as one of the top performing stocks of the bourse. As mentioned earlier, fundamentals reign supreme in the long run." },
      { type: "p", text: "About the power of compounding, let me conclude with what Albert Einstein said:" },
      { type: "quote", text: "Compounding is the eighth wonder of the world. He who understands it, earns it. He who doesn't, pays it.", attribution: "Albert Einstein" },
    ],
  },
  {
    slug: "valuation-is-an-art-not-a-science",
    title: "Valuation Is an Art, Not a Science",
    excerpt:
      "Discounted cash flow models look precise on paper, but every input is a judgment call. Here's why valuation is closer to informed storytelling than exact science.",
    date: "2024-09-16",
    accent: "primary",
    icon: "scale",
    content: [
      { type: "p", text: "While valuations are taught in schools using the mathematical formula of present value of future cash flows, estimation of those future cash flows involves huge assumptions and subjectivity. And the beauty of scientific formulae lies in its inputs, as the value of output is as good as that of input — or GIGO." },
      { type: "p", text: "Using financial ratios, one cannot just say that a lower multiple is better since it can be a value trap. A stock may command a premium due to a variety of factors, including but not limited to growth, balance sheet strength, and management quality." },
      { type: "p", text: "Combining important financial aspects, making assumptions on key variables, and choosing a valuation methodology allows one to create a picture, called outlook, which must be analysed through the lens of market expectations. One learns with experience after several interpretations." },
      { type: "p", text: "The entire framework involves judgements, which can never have a 100% success ratio, and a resulting outlook is constantly assessed in the court of the stock market, which then proves one right or wrong every day. One just needs to be right more often than wrong!" },
    ],
  },
  {
    slug: "cutting-losses-best-decision",
    title: "How Cutting Losses Can Be the Best Decision for Investors",
    excerpt:
      "Holding onto a losing stock just to avoid admitting defeat can cost more than the loss itself. A personal story about Lalpir Power shows why selling early sometimes wins.",
    date: "2024-09-16",
    accent: "teal",
    icon: "thinking",
    content: [
      { type: "p", text: "Loss aversion is a concept in behavioral finance, in which investors hold on to loss making investments for the fear of locking in losses and/or in the hope of breaking even someday." },
      { type: "p", text: "I have seen so many people, in my career, who were unable to take advantage of other profitable opportunities just because they wanted to avoid releasing a loss. What investors must understand is that the loss has already occurred." },
      { type: "p", text: "I had personally invested in Lalpir Power (LPL) in 2019. A couple of months later I realised that some other stocks were offering much better returns than LPL (despite falling). My average selling price was near its all-time low — not something to be proud of. However, it was one of my best investing decisions because the next stocks helped me generate far more returns than I could have earned with LPL." },
      { type: "p", text: "Unlike relationships, one must not have any emotional connection with stocks. Keep your biases aside and be completely logical. Assess your universe of investable stocks with an open mind and go after the ones that make most sense." },
    ],
  },
  {
    slug: "tax-burden-budget-2025",
    title: "Tax Burden Increased in 2025 Budget",
    excerpt:
      "Budget 2025 pushed effective taxation on high-earning AOPs to 57%, among the harshest in the world. Here's why that burden could accelerate brain drain and push savers toward capital markets.",
    date: "2024-09-03",
    accent: "primary",
    icon: "stocks",
    content: [
      { type: "p", text: "The government has finalized Budget 2025 and continued with the policy of burdening the burdened. While additional taxes were anticipated in the wake of a new IMF program, it is surprising to see the level of additional burden on existing taxpayers. I can certainly call it the most insane budget, at least in my career." },
      { type: "p", text: "Taxes for the salaried class have been increased further. Effective taxation on AOPs earning above PKR 500 million has reached 57%; even developed nations do not charge that much despite offering way more in return." },
      { type: "p", text: "Private sector is the backbone of any economy and is the source of sustainable growth. Such taxation shall not only encourage tax evasion by existing players but also discourage smaller ones to grow in size, thereby proving to be the biggest hurdle to economic growth in ensuing years. Unfortunately, the incompetent policy makers lack any understanding of this." },
      { type: "p", text: "At the same time, some sectors and elite continue to enjoy exemptions. What is even more concerning is what comes next. With this mindset, there will be even more burden in the Budget 2026; we cannot rule out a mini-budget 2025 either." },
      { type: "p", text: "Nevertheless, brain drain shall only accelerate from here onwards. Those who can leave will leave the country in search of better life and opportunities. However, those who do not want to leave or cannot leave for any reason must start looking for secondary incomes now. With dismally low rental yields, I believe their savings can do much better with capital markets." },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
