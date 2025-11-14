import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FadeIn, ScaleIn } from "@/components/AnimatedText";

const LeadCapture = () => {
  return (
    <section id="demo" className="py-24 border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Let's Build Your AI Receptionist — In One Call
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground">
                Book a live strategy session to see how EternitAI can handle your calls, book appointments,
                and close leads — 24/7.
              </p>
            </FadeIn>
          </div>

          <ScaleIn delay={0.3}>
            <div className="bg-secondary/30 border-2 border-border rounded-3xl p-10 shadow-sm hover:shadow-xl hover:border-foreground/30 transition-all duration-300">
              <form className="space-y-6">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-sm font-semibold">
                    Name
                  </label>
                  <Input id="name" placeholder="Your full name" className="h-14 rounded-2xl border-2" />
                </div>

                <div className="space-y-3">
                  <label htmlFor="company" className="text-sm font-semibold">
                    Company
                  </label>
                  <Input id="company" placeholder="Your company name" className="h-14 rounded-2xl border-2" />
                </div>

                <div className="space-y-3">
                  <label htmlFor="email" className="text-sm font-semibold">
                    Work Email
                  </label>
                  <Input id="email" type="email" placeholder="you@company.com" className="h-14 rounded-2xl border-2" />
                </div>

                <Button type="submit" size="lg" className="w-full rounded-full h-14 text-base font-medium mt-8">
                  Continue → Pick a Time
                </Button>
              </form>
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;
