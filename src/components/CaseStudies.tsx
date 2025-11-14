import { UtensilsCrossed, Flower2, Stethoscope } from "lucide-react";
import { FadeIn, SlideIn } from "@/components/AnimatedText";

const cases = [
  {
    icon: UtensilsCrossed,
    title: "Local Restaurant",
    result: "82% fewer missed calls in 30 days.",
  },
  {
    icon: Flower2,
    title: "Florist Chain",
    result: "3× more bookings during holidays.",
  },
  {
    icon: Stethoscope,
    title: "Clinic",
    result: "Saved 20+ hours/week in admin time.",
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Real Businesses. Real Impact.
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cases.map((caseStudy, index) => (
            <SlideIn key={index} direction="up" delay={index * 0.15}>
              <div className="bg-secondary/30 border border-border rounded-3xl p-10 hover:shadow-xl transition-all duration-300 hover:border-foreground/30 hover:-translate-y-2 cursor-pointer group">
                <div className="w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center mb-8 group-hover:bg-foreground/10 transition-all group-hover:scale-110 duration-300">
                  <caseStudy.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{caseStudy.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{caseStudy.result}</p>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
