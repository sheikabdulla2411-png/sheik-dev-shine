const tickerItems = [
  "TECHNICAL SEO",
  "ON-PAGE OPTIMISATION",
  "CORE WEB VITALS",
  "KEYWORD RESEARCH",
  "E-E-A-T",
  "GA4",
  "SCHEMA MARKUP",
  "AEO",
  "GEO",
  "GOOGLE SEARCH CONSOLE",
  "CONTENT STRATEGY",
  "AHREFS",
  "SCREAMING FROG",
];

const TickerContent = () => (
  <>
    {tickerItems.map((item) => (
      <span key={item} className="flex items-center shrink-0">
        <span className="text-sm sm:text-base tracking-[0.15em] text-accent px-4">{item}</span>
        <span className="text-accent/60" aria-hidden="true">✦</span>
      </span>
    ))}
  </>
);

const TickerStrip = () => {
  return (
    <div
      className="w-full overflow-hidden py-4 select-none"
      style={{ borderTop: "1px solid hsl(var(--accent) / 0.3)", borderBottom: "1px solid hsl(var(--accent) / 0.3)" }}
      aria-hidden="true"
    >
      <div className="ticker-track">
        <TickerContent />
        <TickerContent />
      </div>
    </div>
  );
};

export default TickerStrip;
