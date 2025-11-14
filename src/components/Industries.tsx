import { Button } from "@/components/ui/button";
import { FadeIn, ScaleIn } from "@/components/AnimatedText";
import { ParallaxSection } from "@/components/ParallaxSection";
import restaurantImg from "@/assets/restaurant.jpg";
import flowerShopImg from "@/assets/flower_shop.webp";
import plumberImg from "@/assets/plumber.jpeg";
import clinicsImg from "@/assets/clinics.jpg";

const industries = [
  {
    image: restaurantImg,
    title: "Restaurants",
    persona: "Sofia",
    subtitle: "Warm Hostess",
    category: "Restaurants & Dining",
    traits: ["Warm", "Bilingual", "Personable", "Detail-oriented"],
    description: "Handles reservations with charm, remembers preferences, and upsells with finesse",
  },
  {
    image: flowerShopImg,
    title: "Florists",
    persona: "Amelia",
    subtitle: "Florist Expert",
    category: "Flower & Gift Shops",
    traits: ["Creative", "Enthusiastic", "Nurturing", "Sales-focused"],
    description: "Remembers customer orders, suggests arrangements, drives holiday season sales",
  },
  {
    image: plumberImg,
    title: "Plumbers",
    persona: "Jake",
    subtitle: "Calm Dispatcher",
    category: "Plumbing & HVAC",
    traits: ["Professional", "Reassuring", "Efficient", "Problem-solver"],
    description: "Handles emergency calls with urgency, dispatches jobs, manages capacity",
  },
  {
    image: clinicsImg,
    title: "Clinics",
    persona: "Nina",
    subtitle: "Empathetic Coordinator",
    category: "Medical Clinics",
    traits: ["Compassionate", "HIPAA-aware", "Organized", "Patient"],
    description: "Books appointments with care, handles sensitive information, reduces no-shows",
  },
];

const Industries = () => {
  return (
    <section id="industries" className="py-24 border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <FadeIn delay={0.2}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Tailored for Every Business Type
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-muted-foreground">
              Pre-built, human-sounding voice personas that fit your industry — just customize and deploy.
            </p>
          </FadeIn>
        </div>

        <ParallaxSection speed={-0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {industries.map((industry, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <div className="bg-background border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-2 h-full flex flex-col">
                  {/* Image Section with Grainy B&W Effect */}
                  <div className="relative h-48 overflow-hidden flex-shrink-0">
                    <img 
                      src={industry.image} 
                      alt={industry.title}
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 space-y-4 flex-grow flex flex-col">
                    {/* Persona Name */}
                    <h3 className="text-3xl font-bold">{industry.persona}</h3>
                    
                    {/* Subtitle */}
                    <p className="text-muted-foreground text-sm">{industry.subtitle}</p>
                    
                    {/* Category Badge */}
                    <div className="inline-block">
                      <span className="px-3 py-1 bg-secondary/50 text-foreground text-xs font-semibold rounded-full">
                        {industry.category}
                      </span>
                    </div>
                    
                    {/* Personality Traits */}
                    <div className="space-y-2">
                      <p className="text-sm font-semibold">Personality Traits:</p>
                      <div className="flex flex-wrap gap-2">
                        {industry.traits.map((trait, i) => (
                          <span 
                            key={i}
                            className="px-2 py-1 bg-secondary/30 text-foreground text-xs rounded-md"
                          >
                            {trait}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed pt-2">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </ParallaxSection>

        <FadeIn delay={0.6}>
          <div className="text-center mt-16">
            <Button size="lg" className="rounded-full px-8 h-14 text-base font-medium" asChild>
              <a href="#demo">Build Your AI Voice</a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Industries;
