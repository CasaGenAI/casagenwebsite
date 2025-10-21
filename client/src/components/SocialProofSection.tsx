export function SocialProofSection() {
  const brokerages = [
    { name: "Compass", placeholder: "COMPASS" },
    { name: "Keller Williams", placeholder: "KELLER WILLIAMS" },
    { name: "RE/MAX", placeholder: "RE/MAX" },
    { name: "eXp Realty", placeholder: "eXp REALTY" },
    { name: "Coldwell Banker", placeholder: "COLDWELL BANKER" },
    { name: "Berkshire Hathaway", placeholder: "BERKSHIRE HATHAWAY" },
  ];

  return (
    <section className="py-16 lg:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-wide text-center text-muted-foreground mb-12">
          Trusted by top agents and investors at:
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brokerages.map((brokerage) => (
            <div
              key={brokerage.name}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              data-testid={`logo-${brokerage.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="h-12 flex items-center justify-center px-4">
                <span className="text-xs font-bold text-muted-foreground whitespace-nowrap">
                  {brokerage.placeholder}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
