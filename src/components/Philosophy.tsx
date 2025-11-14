import { Button } from "@/components/ui/button";

const Philosophy = () => {
  return (
    <section className="py-24 border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            We Don't Just Build AI — We Build Representation
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            At EternitAI, we're not here to follow AI trends — we're here to redefine them. Our mission is
            to give brands, creators, and agencies a voice that represents them: bold, human, and
            unforgettable.
          </p>
          <div className="pt-6">
            <p className="text-base md:text-lg font-semibold mb-8">
              🚀 Partnered with 100+ forward-thinking businesses globally.
            </p>
            <Button size="lg" className="rounded-full px-8 h-14 text-base font-medium">
              Build Your AI Voice
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
