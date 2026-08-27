// Finqalab glossary terms, sourced from the live finqalab.com/glossary page.
// Definitions are kept verbatim — these are the client's own published
// explanations of financial terms, not rewrites.
//
// Ordering note: the live page groups terms under letter tabs but does not
// alphabetise within a letter (e.g. "Ask Price" sits after "Authorized
// Shares" under A). This list preserves the source order as-is; the
// <GlossaryBrowser/> sorts within each letter at render time, so the page
// reads correctly without editing the source data.
//
// The live page also carries two genuinely redundant pairs — "PIBs" and
// "Pakistan Investment Bonds (PIBs)", and "Treasury bills" alongside
// "Market Treasury Bills". Both are kept rather than silently merged: they
// are published content, and which one to drop is the content team's call.

export type GlossaryTerm = {
  term: string;
  definition: string;
};

export const glossaryTerms: GlossaryTerm[] = [
  // A
  { term: "Annuity", definition: "A series of payments in equal time periods, guaranteed for a fixed number of years." },
  { term: "Appreciation", definition: "An increase in the price or value of an asset." },
  { term: "Asset", definition: "Anything of value (tangible or intangible) that is owned by an individual or entity, and is anticipated to generate future cash flows." },
  { term: "Asset Class", definition: "A grouping of investments that share similar characteristics and are governed by the same laws and regulations." },
  { term: "Asset allocation", definition: "A strategy used to create a portfolio that balances the potential risks and returns by investing your money in various types of assets, such as stocks and bonds." },
  { term: "Authorized Shares", definition: "The maximum number of shares that a corporation is allowed to issue based on its articles of incorporation." },
  { term: "Ask Price", definition: "The price at which a seller is willing to sell a financial instrument." },

  // B
  { term: "Beta", definition: "A measure of how sensitive or volatile a security is compared to the market as a whole." },
  { term: "Bond Rating", definition: "A rating or grade that is intended to indicate the credit quality of a bond, considering the financial strength of its issuer and the likelihood that it will repay the debt." },
  { term: "Bearish", definition: "The belief that a market, asset, or financial instrument is likely to undergo a decline or downward trend." },
  { term: "Broker", definition: "An independent person or a company that organizes and executes financial transactions on behalf of another party." },
  { term: "Bullish", definition: "The belief that a market, asset, or financial instrument will experience an upward price movement." },
  { term: "Bond", definition: "A type of investment where an investor lends money to a borrower (debtor), which can be a company or the government." },
  { term: "Brokerage firm", definition: "Serves as an intermediary connecting people who want to buy and sell securities and other financial instruments." },
  { term: "Bonus Share", definition: "Extra shares distributed to existing shareholders at no additional cost." },
  { term: "Bid Price", definition: "The price a buyer is willing to pay for shares of a stock or other asset." },
  { term: "Bid Yield / Offer Yield", definition: "Rate at which a willing buyer / seller is offering to buy / sell government securities during the course of the day." },

  // C
  { term: "Coupon", definition: "The interest rate that a bond pays (indicated as a percentage of its face value)." },
  { term: "Coupon Rate", definition: "The amount of interest received by a bond investor, expressed on a nominal annual basis." },
  { term: "Credit Spread", definition: "The spread between Treasury securities and non-Treasury securities that are identical in all respects except for quality rating." },
  { term: "Current Yield", definition: "The coupon from a bond divided by the market price of the bond, expressed as a percentage." },
  { term: "Capital Gain", definition: "When you sell an asset at a price higher than the amount you initially paid for it." },
  { term: "Closing price", definition: "The last level at which an asset was traded before the market closed on any given day." },
  { term: "Certificate of Deposit", definition: "A type of savings account where you deposit a specific amount of money for a set period of time." },
  { term: "Credit rating", definition: "A numerical assessment that informs lenders about the likelihood of a borrower repaying a loan." },
  { term: "Closed-End Fund", definition: "An investment fund that issues a specific number of shares; its capitalization is fixed." },
  { term: "Credit Risk", definition: "Potential that an investment will go down when assigned a negative rating by a reputable credit rating service." },
  { term: "Cut off yield", definition: "Rate at which bids are accepted and set as the coupon rate for the security." },

  // D
  { term: "Discount Factor", definition: "A decimal number or percentage multiplied by a future cash flow value to discount it back to the present value." },
  { term: "Duration", definition: "A measure of the sensitivity of the price of a fixed-income investment to a change in interest rates." },
  { term: "Day trading", definition: "A strategy of short-term investment that involves buying and selling financial instruments within the same trading day." },
  { term: "Default Risk", definition: "The potential for a debt issuer/borrower to be unable to fulfill its financial obligations." },
  { term: "Debt", definition: "The amount of money borrowed by an individual or entity from another party." },
  { term: "Debt to Equity", definition: "A financial ratio that measures the proportion of shareholder equity compared to debt used to fund a company's assets." },
  { term: "Debtor", definition: "A person or an entity that owes money to others." },
  { term: "Deflation", definition: "A decrease in the overall level of prices for goods and services." },
  { term: "Depreciation", definition: "When an asset loses value over a period of time." },
  { term: "Dilution", definition: "Occurs when a company issues additional shares after its initial public offering, leading to a decrease in the value of existing shares." },
  { term: "Diversification", definition: "A risk management approach that involves dividing your investments among various asset classes or securities." },
  { term: "Diversified Portfolio", definition: "A collection of different securities and asset classes that are not affected by the same factors." },
  { term: "Dividend yield", definition: "A financial metric calculated by dividing the annual dividends paid per share by the price per share." },
  { term: "Dividends", definition: "A portion of a firm's net profits that is distributed to the shareholders rather than being reinvested." },

  // E
  { term: "Economic Cycle", definition: "The natural fluctuation of the economy between periods of expansion (growth) and contraction (recession)." },
  { term: "Expected Value", definition: "The sum of every potential value of a variable multiplied with their chance or probability of occurring." },
  { term: "Equity", definition: "The value that would be returned to a company's shareholders if all of the assets were liquidated and all of the company's debts paid off." },
  { term: "Earnings report", definition: "Financial statements released by publicly traded companies on a quarterly basis." },
  { term: "EPS (Earnings per share)", definition: "A metric of a company's profitability calculated by dividing a company's net income by its total number of shares." },
  { term: "ETF", definition: "An exchange-traded fund that operates much like a mutual fund and can be purchased or sold on a stock exchange." },

  // F
  { term: "Fixed rate", definition: "An interest rate that remains fixed either for the entire term of the bond or part of the term." },
  { term: "Floating rate", definition: "An interest rate that is allowed to rise up and down in sync with the market or together with an index." },
  { term: "Face Value / Par Value", definition: "How much a bond will be worth on its maturity date." },
  { term: "Free Float", definition: "The portion of a company's shares that are available for trading on the open market." },
  { term: "Financial Instrument", definition: "Any tradable asset or contract that represents a legally binding agreement between two parties regarding the exchange of financial value." },
  { term: "Fixed Income", definition: "A category of assets and securities that provide investors with a predetermined and consistent stream of income." },
  { term: "Fractional shares", definition: "A fraction or portion of a complete share of a stock." },
  { term: "Fundamental analysis", definition: "An approach to assess the true value of an asset by examining various factors that can impact its future price." },
  { term: "Forex", definition: "A way by which market participants convert one currency to another." },
  { term: "Futures Contracts", definition: "Contractual arrangements between two parties to exchange an asset at a predetermined price on a specified future date." },

  // G
  { term: "Gainers", definition: "Financial instruments, such as stocks or other securities, that have experienced an increase in price over a specific period of time." },

  // H
  { term: "Hedge Fund", definition: "Actively managed investments that employ diverse strategies to invest clients' funds with the goal of outperforming the market." },

  // I
  { term: "Interest Rate Risk", definition: "The risk associated with the potential impact of market interest rate changes." },
  { term: "Index", definition: "In financial markets, stock and bond market indexes consist of a hypothetical portfolio of securities representing a particular market or a segment of it." },
  { term: "Index Fund", definition: "Investment funds that follow the performance of a specific stock market index." },
  { term: "Inflation", definition: "A general increase in prices that causes a decline in a currency's purchasing power." },
  { term: "Interest", definition: "The cost of borrowing money." },
  { term: "Investment", definition: "An asset that you buy with the expectation that it will generate some future income or profit." },
  { term: "Indices trading", definition: "The means by which traders attempt to make a profit from the price movements of indices." },
  { term: "Inflation risk", definition: "The risk that inflation will undermine the real value of cash flows made from an investment." },
  { term: "Intrinsic value", definition: "The perceived or actual worth of an asset, which may differ from its current market price." },
  { term: "IPO (Initial Public Offering)", definition: "When a company decides to raise money through selling shares for the first time to the public." },

  // J
  { term: "Junk Bond", definition: "A bond which is rated below the investment grade and denotes high risk to the investor." },

  // K
  { term: "KMI-30 Index", definition: "A stock market index on the Pakistan Stock Exchange consisting of 30 Shariah-compliant companies." },
  { term: "KMI-All Share Index", definition: "PSX-KMI All Share Index comprises all Shariah compliant companies listed on the Pakistan Stock Exchange Limited." },
  { term: "KSE-30 Index", definition: "Includes the top 30 most liquid companies listed on PSX based on Free Float methodology." },
  { term: "KSE-100 Index", definition: "Comprises of 100 companies selected on the basis of sector representation and highest Free-Float Capitalization." },

  // L
  { term: "Liquidity Preference Theory", definition: "The theory where investors demand a premium or higher rate of return for securities with longer maturity times." },
  { term: "Liquidity", definition: "How easily an asset can be converted into cash." },
  { term: "Limit order", definition: "An instruction given by an investor to a broker to buy or sell a security at a specific price or better." },
  { term: "Long position", definition: "When someone takes a long position on an asset, it means they are expecting the asset's price to rise." },
  { term: "Liquidity Risk", definition: "The risk associated with the ability to sell a security or convert an asset into cash easily and at a fair market price." },
  { term: "Losers", definition: "Financial instruments, such as stocks or other securities, that have experienced a decrease in price over a specific period of time." },

  // M
  { term: "Market Segmentation Theory", definition: "The theory that investors have different investment goals, and, therefore, there is no necessary relationship between long and short-term interest rates." },
  { term: "Moving Average", definition: "The average of time-series data from multiple consecutive periods." },
  { term: "Market order", definition: "An instruction from a trader to a broker to execute a trade immediately at the best available price." },
  { term: "Market value", definition: "What a business is worth according to market participants." },
  { term: "Market capitalization", definition: "The total value of a company's outstanding shares, calculated by multiplying the total number of shares by the current share price." },
  { term: "Market Volatility", definition: "The rate at which prices move over a given period of time." },
  { term: "Mutual fund", definition: "A financial vehicle that pools assets from shareholders to invest in securities." },
  { term: "Market Treasury Bills", definition: "Zero coupon instruments issued by the Government of Pakistan and sold through the State Bank of Pakistan via fortnightly auctions." },
  { term: "Market Status", definition: "Refers to the present condition of the market, indicating whether trading is active or not." },

  // N
  { term: "Nominal Value", definition: "The value of a security, such as a stock or bond, which remains fixed for the duration of its life." },
  { term: "Net income", definition: "The total revenue minus total expenses of a company." },
  { term: "Net Asset Value", definition: "The net value of an investment fund's assets less its liabilities, divided by the number of shares outstanding." },
  { term: "Non-Competitive Bid", definition: "An offer to buy securities made by noninstitutional investors." },

  // O
  { term: "Option", definition: "A financial instrument that offers you the right – but not the obligation – to buy or sell an asset when its price moves beyond a certain price within a set time period." },
  { term: "OTC Market", definition: "Over-the-counter trading via a broker dealer network as opposed to on a centralized exchange." },
  { term: "Open-End Fund", definition: "A diversified portfolio of pooled investor money that can issue an unlimited number of shares." },

  // P
  { term: "PIBs", definition: "Long-term, semi-annual coupon-based instruments issued by Government of Pakistan and sold in the primary market through auctions." },
  { term: "Pension Funds", definition: "A fund set up by an employer for the investment of an employee's retirement savings." },
  { term: "Pure Expectations Theory", definition: "The idea that long-term interest rates predict what short-term rates will do in the future." },
  { term: "Portfolio", definition: "A person's or an institution's entire collection of investments or financial assets." },
  { term: "Primary Market", definition: "Where securities are created – companies sell new stocks and bonds to the public for the first time." },
  { term: "Purchasing power", definition: "The amount of goods and services that can be purchased with a unit of currency." },
  { term: "Passive management", definition: "An investment strategy that aims to mimic the performance of a specific group of assets." },
  { term: "Political Risk", definition: "The possibility that changes in government or government policies can affect the value of an investment." },
  { term: "Pakistan Investment Bonds (PIBs)", definition: "Long-term bonds issued by the Government of Pakistan and sold through SBP via periodic auctions." },

  // R
  { term: "Rules SECP/ Commission", definition: "The NBFC Rules 2003, which governs the operation of the mutual funds." },
  { term: "Return", definition: "The money made or lost on an investment over a period of time." },
  { term: "Risk preference", definition: "An investor's willingness to accept varying levels of risk in their investments." },
  { term: "Risk tolerance", definition: "The level of risk an investor is willing to take when making an investment decision." },
  { term: "ROI", definition: "Return on investment is a financial ratio that divides the net profit (or loss) from an investment by its cost." },
  { term: "REIT", definition: "A real estate investment trust is a company or a group of companies that allows people to invest in a collection of properties that generate rental income." },
  { term: "Return on equity (ROE)", definition: "A measure of a company's profitability against its equity, expressed as a percentage." },

  // S
  { term: "Standard Deviation", definition: "A measure of how far a set of data is from the average." },
  { term: "Sum of Squares", definition: "The Sum of Squares Regression SSR measures how much variation there is in the modeled values." },
  { term: "S&P 500 Index", definition: "A market-capitalization-weighted index of 500 leading publicly traded companies in the U.S." },
  { term: "Shareholders", definition: "Any person, company, or institution that owns shares in a company's stock." },
  { term: "Secondary Market", definition: "Where investors purchase securities from other investors, rather than from issuing companies themselves." },
  { term: "Securities", definition: "Tradable financial instruments with monetary value." },
  { term: "Shares outstanding", definition: "The number of total shares of a corporation that are authorized, issued, and purchased on the secondary market by investors." },
  { term: "Stock", definition: "A security that represents partial ownership in a company." },
  { term: "Stock exchange", definition: "A regulated marketplace where buyers and sellers trade stocks and other financial securities." },
  { term: "Stock Market", definition: "Where investors connect to buy and sell investments — most commonly, stocks." },
  { term: "Stock valuation", definition: "The process of determining the intrinsic value or worth of a company's stock." },
  { term: "Stop loss", definition: "A strategy developed to limit losses and control risk by deciding to sell or buy an asset when it reaches a certain price." },
  { term: "Stock Split", definition: "Occurs when a corporation increases the number of its outstanding shares by distributing more shares to current stockholders." },
  { term: "Sukuk", definition: "A sharia-compliant bond-like instrument used in Islamic finance." },
  { term: "Share price", definition: "The amount it would cost to buy one share in a company." },
  { term: "Shares", definition: "The units of the ownership of a company, usually traded on the stock market." },
  { term: "Shariah-compliant investing", definition: "Investments that must meet all the requirements of Shariah law, as well as other principles set down to govern Islamic finance." },
  { term: "Short", definition: "A strategy where a trader anticipates a decline in the price of an asset." },
  { term: "Short-selling", definition: "The act of selling an asset that you do not currently own, in the hope that it will decrease in value." },

  // T
  { term: "Treasury bills", definition: "Issued by Government of Pakistan and are sold in the primary market through auctions conducted by State bank of Pakistan." },
  { term: "Technical analysis", definition: "A method used to analyze and predict price movements in financial markets by studying historical price charts and market data." },
  { term: "Treasury stock", definition: "Shares of a company that it holds in its own possession." },
  { term: "Time horizon", definition: "The investing timeframe for achieving a financial goal." },
  { term: "Time value of money", definition: "The idea that money available today is worth more than the same amount of money in the future." },

  // V
  { term: "Variance", definition: "A measure of how far a set of data is from their average value." },
  { term: "Volume", definition: "The quantity of a specific asset that is traded within a given timeframe." },

  // Y
  { term: "Yield Curve", definition: "A graph plotting interest rates of bonds with equal credit risk, at the same point in time, but with different maturity rates." },
  { term: "Yield", definition: "The income earned from an investment, most often in the form of interest or dividend payments." },
  { term: "Yield to Maturity", definition: "The annual return earned by a bond investor if purchasing a bond today and holding it until maturity." },

  // Z
  { term: "Zero Coupon Bond", definition: "A debt security instrument that does not pay interest." },
];

/** The first character a term is filed under — uppercased, digits collapsed to "#". */
export function glossaryLetter(term: string): string {
  const first = term.trim().charAt(0).toUpperCase();
  return /[0-9]/.test(first) ? "#" : first;
}

/** Every letter that actually has at least one term, in alphabetical order. */
export function glossaryLetters(terms: GlossaryTerm[] = glossaryTerms): string[] {
  return Array.from(new Set(terms.map((t) => glossaryLetter(t.term)))).sort();
}
