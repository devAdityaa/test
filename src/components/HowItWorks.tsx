import { FadeIn, SlideIn } from "@/components/AnimatedText";
import { motion } from "framer-motion";
import { PhoneIncoming, PhoneOutgoing } from "lucide-react";

const features = [
  {
    icon: PhoneIncoming,
    title: "Inbound Receptionist",
    description:
      "Greets callers, answers FAQs, books appointments/tasks, and routes calls — all in your brand's tone and personality.",
  },
  {
    icon: PhoneOutgoing,
    title: "Outbound Executive",
    description:
      "Sends reminders, follows up with leads, and nurtures prospects automatically — naturally, in any language or accent.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <FadeIn className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            2 Ways EternitAI Transforms Conversations
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether it's handling incoming calls or reaching out proactively, we've got you covered.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <SlideIn
              key={feature.title}
              direction={index === 0 ? "left" : "right"}
              delay={0.2 + index * 0.1}
            >
              <motion.div 
                animate={{ 
                  y: [0, -8, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ 
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.3 }
                }}
                className="relative overflow-hidden rounded-3xl p-10 h-full group hover:shadow-lg"
              >
                {/* Base Dark Background */}
                <div 
                  className="absolute inset-0 -z-10 transition-all duration-500 ease-in-out"
                  style={{
                    background: "rgba(0, 0, 0, 0.85)",
                  }}
                />
                
                {/* White Background on Hover */}
                <div 
                  className="absolute inset-0 -z-10 bg-white opacity-0 group-hover:opacity-95 transition-opacity duration-500 ease-in-out"
                />
                
                {/* Grain Texture Overlay */}
                <div 
                  className="absolute inset-0 -z-10 opacity-30 pointer-events-none mix-blend-overlay transition-opacity duration-500 group-hover:opacity-20"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "180px 180px",
                  }}
                />
                
                {/* Frosted Glass Effect */}
                <div 
                  className="absolute inset-0 -z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.5) 100%)",
                    backdropFilter: "blur(8px) saturate(120%)",
                    WebkitBackdropFilter: "blur(8px) saturate(120%)",
                  }}
                />
                
                {/* Glass Reflection Highlights */}
                <div 
                  className="absolute inset-0 -z-10 pointer-events-none opacity-10 transition-opacity duration-500 group-hover:opacity-0"
                  style={{
                    background: "linear-gradient(to bottom right, rgba(255, 255, 255, 0.15) 0%, transparent 40%, rgba(255, 255, 255, 0.08) 100%)",
                  }}
                />
                
                {/* Subtle Border Glow */}
                <div 
                  className="absolute inset-0 -z-10 rounded-3xl pointer-events-none transition-all duration-500"
                  style={{
                    boxShadow: "inset 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 24px rgba(0, 0, 0, 0.4)",
                  }}
                />
                
                {/* Content Layer */}
                <div className="relative z-10 font-grotesk">
                  <feature.icon className="w-16 h-16 mb-8 stroke-[1.5] text-white group-hover:text-foreground transition-all duration-500 group-hover:scale-110" />
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight text-white group-hover:text-foreground transition-colors duration-500">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 group-hover:text-muted-foreground text-lg leading-relaxed transition-colors duration-500">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
