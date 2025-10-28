import { Check, Video } from "lucide-react";

interface FeatureSectionProps {
  headline: string;
  description: string;
  checklist: string[];
  visualPlaceholder: string;
  reversed?: boolean;
  videoSrc?: string;
}

export function FeatureSection({
  headline,
  description,
  checklist,
  visualPlaceholder,
  reversed = false,
  videoSrc,
}: FeatureSectionProps) {
  const content = (
    <div className={`flex flex-col justify-center ${reversed ? "lg:pl-12" : "lg:pr-12"}`}>
      <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
        {headline}
      </h2>
      
      <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-xl">
        {description}
      </p>

      <ul className="space-y-4">
        {checklist.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3"
            data-testid={`checklist-item-${index}`}
          >
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-chart-2/10 flex items-center justify-center mt-0.5">
              <Check className="h-4 w-4 text-chart-2" />
            </div>
            <span className="text-base text-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const visual = (
    <div className="relative">
      <div className="relative rounded-2xl overflow-hidden shadow-xl bg-card border border-card-border">
        {videoSrc ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full aspect-video object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
            <source src={videoSrc} type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="aspect-video bg-gradient-to-br from-primary/5 via-card to-muted/50 flex items-center justify-center p-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Video className="h-8 w-8 text-primary" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                {visualPlaceholder}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reversed ? "lg:flex-row-reverse" : ""}`}>
          {reversed ? (
            <>
              {visual}
              {content}
            </>
          ) : (
            <>
              {content}
              {visual}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
