// Finqalab Academy course content.
//
// Each course carries the full written article plus the YouTube video ID for
// the accompanying course video, so the /academy accordion can present both in
// one place without sending the reader to a separate page.
//
// videoId is intentionally nullable: a course without a linked video yet
// renders an explicit "video coming soon" placeholder rather than an embed
// pointing at a made-up ID (which would render as a broken player).

export type CourseListItem = { label?: string; text: string };

export type CourseBlock =
  | { type: "h"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: CourseListItem[] }
  | { type: "ol"; items: CourseListItem[] };

export type AcademyCourse = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  videoId: string | null;
  blocks: CourseBlock[];
};

export const academyCourses: AcademyCourse[] = [
  {
    slug: "types-of-assets",
    title: "Understanding Different Types of Assets",
    kicker: "Foundations",
    summary:
      "Cash, real estate, commodities, bonds and stocks — what each asset class actually does in a portfolio, in a Pakistani context.",
    videoId: "IPHZdMlsb0U",
    blocks: [
      { type: "h", text: "Introduction" },
      {
        type: "p",
        text: "Investing is a crucial part of financial planning and building wealth, particularly in Pakistan's dynamic economic environment. Knowing the different types of assets can help you create a diverse portfolio that stands strong against fluctuations. Here, we will explain the basics of major asset classes to help you make smart investment choices.",
      },
      { type: "h", text: "Cash" },
      {
        type: "p",
        text: "Cash is the simplest and most liquid asset, which includes physical currency and deposits in current accounts. Cash itself doesn't yield any return but provides stability and quick access, making it essential for emergency funds or short-term savings. However, inflation erodes the value of cash. For example, In 2013, PKR 1,000/- could buy around 10 liters of petrol at a price of nearly PKR 97/liter. By 2023, the price of petrol has risen to more than PKR 250/liter and you can buy less than 4 litres of petrol with the same amount of cash.",
      },
      { type: "h", text: "Real Estate" },
      {
        type: "p",
        text: "Real estate involves properties like homes, commercial buildings, industrial spaces, etc. In Pakistan, real estate has remained the most preferred choice of investment for the masses and it has yielded good returns thanks to urbanization and economic growth. Real estate generates return in the form of rental income and capital gains or price appreciation. However, investing in real estate requires substantial capital and is less liquid than other assets. In order to address this issue of large capital requirement, a concept of Real Estate Investment Trust (REIT) exists, which are essentially stocks of real estate projects. Additionally, Real Estate Investment Trusts (REITs) provide a way to invest in real estate without owning physical properties. For example, Dolmen City REIT, which includes Dolmen Mall, allows investors to own a share of high-value commercial property and earn dividends from rental income of the project, offering a more accessible way to participate in the real estate.",
      },
      { type: "h", text: "Commodities" },
      {
        type: "p",
        text: "Commodities include assets like gold, silver, oil, and agricultural products, such as wheat etc. In Pakistan, gold is a particularly popular commodity investment, often seen as a safe haven. One can invest in commodities through direct purchase, or trade electronically through an exchange. The Pakistan Mercantile Exchange (PMEX) is a platform for trading commodities in Pakistan. The benefit of PMEX is that you do not have to worry about physical ownership of the goods, since one can invest through financial instruments. Returns in commodities are generated solely through capital appreciation; there is no cash flow income involved, like rent or dividend.",
      },
      { type: "h", text: "Bonds" },
      {
        type: "p",
        text: "Bonds are debt securities issued by governments and corporations. In Pakistan, government bonds, such as Pakistan Investment Bonds (PIBs) and Treasury Bills (T-Bills), are most common debt based financial assets. Investing in bonds means you are lending money to the issuer for periodic interest payments and specific maturity, at which date you receive your principal back. Bonds are considered lower risk than stocks and can provide a steady income, making them a vital part of a diversified portfolio, especially for cautious investors.",
      },
      { type: "h", text: "Stocks" },
      {
        type: "p",
        text: "Stocks represent ownership in a company, giving shareholders a share of the company's profits. The Pakistan Stock Exchange (PSX) is where investors can buy and sell shares of publicly listed companies. Stocks offer significantly higher returns, especially over the long term, but they also carry higher risks compared to other asset classes. Stock prices can be influenced by a company's performance, market conditions, and economic factors. Diversifying across different sectors and regions can help reduce some risks associated with stock investing.",
      },
      { type: "h", text: "Conclusion" },
      {
        type: "p",
        text: "Knowing the different types of assets is essential for building a strong and diversified portfolio, particularly in Pakistan's evolving financial landscape. Each asset type has its own benefits and can align with various investment goals and risk tolerance levels. By mixing different assets, you can create a balanced portfolio that maximizes returns while managing risk. For a deeper dive into each asset class, watch our full video on the Finqalab YouTube channel.",
      },
    ],
  },
  {
    slug: "oil-gas-exploration",
    title: "Understanding Oil & Gas Exploration Sector in Pakistan",
    kicker: "Sector Deep Dive",
    summary:
      "How Pakistan's upstream E&P sector is structured, what drives its pricing, and the production and circular-debt pressures it faces.",
    videoId: "n3ZT_1U3EDc",
    blocks: [
      { type: "h", text: "Introduction" },
      {
        type: "p",
        text: "The oil and gas sector in Pakistan, while not as resource-rich as some of its Middle Eastern counterparts, plays a crucial role in the country's economy. Over the past decade, however, this sector has been grappling with significant challenges, particularly in maintaining production levels. This blog delves into the current state of the industry, analyzes it through Porter's Five Forces, explores the key challenges faced by exploration and production (E&P) companies, and provides an outlook.",
      },
      { type: "h", text: "Structure of Pakistan's Oil and Gas Sector" },
      {
        type: "p",
        text: "Pakistan's oil and gas sector is divided into three main segments: upstream, midstream, and downstream.",
      },
      {
        type: "ul",
        items: [
          {
            label: "Upstream Companies",
            text: "These are the companies at the top of the supply chain, responsible for extracting oil and gas from the ground. They extract crude oil and natural gas, perform water treatment (since extracted oil often contains water), and sell the crude oil to refineries and the natural gas to distribution companies after treatment.",
          },
          {
            label: "Refineries",
            text: "These companies take crude oil from upstream companies and convert it into finished products like petrol, diesel, and kerosene — products used in vehicles and other applications.",
          },
          {
            label: "Downstream Companies",
            text: "These companies purchase refined products from refineries and sell them to end-users. Pakistan State Oil (PSO) is a prime example, distributing refined products to consumers through their network of stations.",
          },
        ],
      },
      {
        type: "p",
        text: "Currently, Pakistan consumes around 16-17 million metric tons of oil annually. Only 20-25% of this is produced locally; the remaining 75-80% is imported, making Pakistan a significant oil importer. For gas, the country's consumption stands at approximately 4 billion cubic feet per day, with local production meeting around 80% of the consumption and imported LNG addressing the remaining 20%.",
      },
      { type: "h", text: "Oil and Gas Sector in Pakistan" },
      {
        type: "p",
        text: "Pakistan is not inherently very rich in oil and gas resources. Unlike the Middle Eastern countries, where oil and gas production is abundant, Pakistan's oil production peaked at approximately 95,000 barrels per day (bpd) in 2015. This increase was driven by major discoveries in the Khyber Pakhtunkhwa (KPK) region, such as the Nashpa and Tal Blocks. However, since 2010, no major discoveries have been made, leading to a gradual decline in production. As of 2024, crude oil production has dropped to around 71,000 bpd. Similarly, the natural gas sector has faced a decline. Pakistan's gas production peaked at 4.3 billion cubic feet per day (bcfd) in 2012 but has since fallen to 3.2 bcfd. Major gas fields such as Sui, Uch, and Mari were discovered decades ago, and recent discoveries have been small. This decline in production is a significant concern for the country's energy security.",
      },
      { type: "h", text: "Competition and Pricing in the E&P Sector" },
      {
        type: "p",
        text: "Given the large gap between demand and supply, companies don't need to compete aggressively to sell their products — whatever they produce can be sold comfortably. However, this lack of competition doesn't allow companies to charge any price they want, as the government strictly regulates this sector through pricing policies.",
      },
      { type: "p", text: "Pricing Factors:" },
      {
        type: "ul",
        items: [
          { label: "International Oil Prices", text: "The sector's revenue is linked to international oil prices." },
          {
            label: "Exchange Rate",
            text: "Pricing is set in dollars, even though transactions occur in rupees, making the exchange rate a critical determinant of revenue.",
          },
        ],
      },
      { type: "p", text: "Additional Income Sources:" },
      {
        type: "ul",
        items: [
          {
            label: "Interest Income",
            text: "These companies often have significant liquidity, which they invest in government instruments like T-bills and PIBs.",
          },
          { label: "Exchange Gains", text: "Companies also benefit from exchange gains when the local currency devalues." },
        ],
      },
      { type: "p", text: "Key Expenses:" },
      {
        type: "ul",
        items: [
          { label: "Royalties", text: "Companies must pay royalties to the government, typically ranging between 8-12% of their revenue." },
          { label: "Transportation Costs", text: "This includes the cost of transporting oil and gas from the fields to refineries." },
          {
            label: "Operating Expenses",
            text: "These cover salaries, non-cash expenses like depreciation and amortization, and administrative costs.",
          },
          { label: "Exploration Costs", text: "Expenses incurred in conducting surveys and drilling wells that may turn out to be dry." },
        ],
      },
      { type: "h", text: "Porter's Five Forces Analysis" },
      { type: "p", text: "Porter's Five Forces is a globally accepted framework to analyze an industry's structure:" },
      {
        type: "ul",
        items: [
          {
            label: "Threat of New Entrants",
            text: "The barriers to entry in the oil and gas sector are high due to the significant capital investment required for exploration and production. Additionally, the sector is heavily regulated, which further limits the entry of new players.",
          },
          {
            label: "Bargaining Power of Suppliers",
            text: "In Pakistan, the government through regulatory bodies defines pricing that can be charged by the E&P companies, limiting the bargaining power of suppliers.",
          },
          {
            label: "Bargaining Power of Buyers",
            text: "The government is the single largest buyer of natural gas from E&P companies whereas local refineries buy crude oil. Since pricing is defined through petroleum policies, buyers also have limited bargaining power.",
          },
          {
            label: "Threat of Substitute Products",
            text: "The threat of substitutes, such as renewable energy sources, is increasing. However, given Pakistan's current energy infrastructure, the transition to alternatives like solar and wind energy is gradual. An immediate substitute is imported crude oil, which faces the challenge of limited foreign exchange in the country.",
          },
          { label: "Industry Rivalry", text: "The rivalry among existing players is low since it is a highly regulated sector." },
        ],
      },
      { type: "h", text: "Challenges in the Oil and Gas Sector" },
      { type: "p", text: "The oil and gas sector in Pakistan is currently facing several significant challenges:" },
      {
        type: "ul",
        items: [
          {
            label: "Declining Production Levels",
            text: "As mentioned earlier, Pakistan's oil and gas production has been on a decline due to the lack of new large discoveries. Maintaining even the current production levels has been a serious challenge.",
          },
          {
            label: "Increased Exploration Costs",
            text: "To maintain production levels, companies are forced to increase their exploration efforts, leading to a significant rise in costs. The lack of new discoveries further exacerbates this issue.",
          },
          {
            label: "Circular Debt Crisis",
            text: "The circular debt crisis has severely impacted E&P companies in Pakistan. This issue, which emerged around 2008-09, has intensified over the years. The rising receivables and delayed payments have eroded liquidity, forcing companies like Oil and Gas Development Company (OGDC) and Pakistan Petroleum Limited (PPL) to curtail their dividends.",
          },
        ],
      },
      { type: "h", text: "Outlook" },
      {
        type: "p",
        text: "In a web of declining production, rising exploration costs, and liquidity constraints, the potential for future growth hinges on following factors:",
      },
      {
        type: "ul",
        items: [
          {
            label: "Exploration Efforts in Abu Dhabi",
            text: "Pakistani E&P companies have secured offshore leases in Abu Dhabi, a region rich in oil. Success in these endeavors could provide a much-needed boost to the sector.",
          },
          {
            label: "Resolution of Circular Debt",
            text: "While there have been efforts to increase gas prices to improve cash flow for E&P companies, more needs to be done.",
          },
        ],
      },
    ],
  },
  {
    slug: "oil-refining-insights",
    title: "Oil Refining Insights: Key Challenges, Regulations, and Future Outlook",
    kicker: "Sector Deep Dive",
    summary:
      "How refineries make money, why product spreads matter more than headline prices, and what the 2023 refinery policy changes.",
    videoId: "8Hrqpngc-O8",
    blocks: [
      {
        type: "p",
        text: "While the oil upstream segment involves the exploration and production of crude oil, the midstream segment focuses primarily on the refining of the crude oil. In this article, we will explore how refineries operate, the regulatory environment, factors influencing their profitability, the role of non-energy products, and an analysis of the competitive environment.",
      },
      { type: "h", text: "The Role of Oil Refineries" },
      {
        type: "p",
        text: "Oil refineries play a critical role in transforming crude oil into refined products used in daily life, such as petrol, diesel, furnace oil, and kerosene. In Pakistan, petrol and diesel are the most consumed products, with furnace oil contributing to electricity generation primarily.",
      },
      {
        type: "p",
        text: "Other refined products include jet fuel for aviation, naphtha for petrochemicals, asphalt for road construction, etc. This oil refining industry in Pakistan is also strictly regulated by the government; prices are set/revised on a fortnightly basis.",
      },
      { type: "h", text: "Government Regulation and Pricing Mechanism" },
      {
        type: "p",
        text: "Pakistan's oil refining industry operates under stringent pricing policies established by the government. Refineries can sell their refined products, particularly petrol and diesel, at ex-refinery prices set by the regulators. Ex-refinery price is the actual import price of Pakistan State Oil (PSO), which can also be considered as the import parity price.",
      },
      {
        type: "p",
        text: "Import parity price considers the landed cost — the total cost of importing a product, which includes freight, insurance, customs duties, and other associated costs.",
      },
      {
        type: "p",
        text: "While one might assume that rising product prices lead to higher profitability, the reality in refining is different. Profitability is driven by product spreads (the difference between the price of crude oil and refined products), not just the absolute price levels.",
      },
      {
        type: "p",
        text: "For instance, if petrol is priced at $100 per barrel and crude oil at $80, the spread is $20. However, if petrol rises to $120 while crude oil jumps to $110, the spread narrows to $10, reducing profitability despite the higher prices. These product spreads, when combined in a weighted average according to output slate of the refinery, translate into Gross Refinery Margins (GRMs).",
      },
      { type: "h", text: "Gross Refining Margin (GRM) and Profitability Trends" },
      {
        type: "p",
        text: "Refineries, not just in Pakistan but also globally, rely heavily on Gross Refining Margins (GRM) for their profitability. GRMs measure the spread between the price of crude oil and refined products and fluctuate with international prices. When GRMs are high, refineries experience strong profits; however, when they fall, so do profits. An analysis of the historical GRM trends reveals that they are highly volatile in nature, while averaging around a certain mean. This volatility eventually translates into refineries profitability as well.",
      },
      { type: "h", text: "Custom/Deemed Duties" },
      {
        type: "p",
        text: "Another key factor influencing refinery profits is the customs duty on high-speed diesel, currently set at 7.5%. This duty is incorporated into the final price, allowing refineries to benefit from an incremental price that contributes directly to their profits. Estimates suggest that this deemed duty provides approximately PKR 9 billion annually to Pakistan's three main refineries listed on Pakistan Stock Exchange — Attock Refinery, National Refinery, and Pakistan Refinery.",
      },
      { type: "h", text: "The Impact of Furnace Oil on Refinery Operations" },
      {
        type: "p",
        text: "A significant challenge for Pakistan's refineries is managing the production of furnace oil, a low-value byproduct. In recent years, demand for furnace oil has plummeted due to the rise of more efficient and cheaper electricity generation sources like LNG and hydropower. With furnace oil-based power plants having been phased out, refineries are left with excess production. Unfortunately, furnace oil is an extremely low-value product and hence carries negative product spread. Exporting furnace oil compounds the problem due to added inland and sea freight costs.",
      },
      { type: "h", text: "Lubricants: A Profitable Segment" },
      {
        type: "p",
        text: "Unlike the volatile fuel segment, the lubricants sector remains highly profitable, particularly for National Refinery, the sole local producer of base oil in Pakistan. Lubricants, including engine oils and machinery oils, are essential products that provide strong profit margins due to their deregulated nature.",
      },
      {
        type: "p",
        text: "National Refinery's lube segment consistently delivers profits in the range of PKR 8–10 billion annually. This stable income contrasts with the fluctuating fortunes of the fuel segment, where profits are heavily influenced by international market trends.",
      },
      { type: "h", text: "Porter's Five Forces Analysis of the Oil Refining Sector" },
      { type: "p", text: "To better understand the competitive landscape of the oil refining sector, we can apply Porter's Five Forces analysis:" },
      {
        type: "ol",
        items: [
          {
            label: "Competition",
            text: "The industry has low competition due to a high demand for petrol and diesel, with local refineries supplying less than 50% of the national demand.",
          },
          {
            label: "Bargaining Power of Suppliers",
            text: "Supplier power is low as government-regulated pricing limits the ability to charge any premium.",
          },
          {
            label: "Bargaining Power of Buyers",
            text: "Buyers also have low power due to a reliance on locally refined products, especially given Pakistan's foreign exchange constraints limiting imports.",
          },
          {
            label: "Threat of Substitutes",
            text: "There are no significant substitutes for petrol and diesel, especially with the decline of CNG as an alternative fuel source.",
          },
          { label: "Threat of New Entrants", text: "The sector has high barriers to entry, with new refineries requiring massive capital investments." },
        ],
      },
      { type: "h", text: "The Future Outlook for Pakistan's Oil Refining Sector" },
      {
        type: "p",
        text: "The future of Pakistan's oil refining sector hinges on two key elements: GRMs and upgradation projects. The government's National Refinery Policy 2023 encourages refineries to upgrade their technology to meet advanced euro fuel standards and refine more crude oil locally.",
      },
      {
        type: "p",
        text: "Upgradation projects are being incentivized through increased customs duties on petrol and diesel. These improvements are expected to boost profitability; however, timing and financing details remain unclear. More details about capital costs and financing structures will provide clearer insights into the potential value of these projects.",
      },
      { type: "h", text: "Conclusion" },
      {
        type: "p",
        text: "The midstream oil refining sector in Pakistan faces both challenges and opportunities. While refineries shall benefit from customs duties, they shall continue to grapple with the volatility of GRMs. Understanding these complexities is vital for making informed investment decisions in this industry.",
      },
    ],
  },
];
