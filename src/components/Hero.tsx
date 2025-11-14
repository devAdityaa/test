import { Button } from "@/components/ui/button";
import { Mic, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { OrganicVideoLoop } from "@/components/OrganicVideoLoop";
import { useEffect, useState } from "react";
import Vapi from "@vapi-ai/web";
import { toast } from "sonner";

const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [isCallActive, setIsCallActive] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % 4);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const vapiInstance = new Vapi("11c39611-da19-44e6-a73b-157aa5f1d11f");
    setVapi(vapiInstance);

    vapiInstance.on("call-start", () => {
      setIsCallActive(true);
      setIsConnecting(false);
      toast.success("Call started!");
    });

    vapiInstance.on("call-end", () => {
      setIsCallActive(false);
      toast.info("Call ended");
    });

    vapiInstance.on("error", (error) => {
      console.error("Vapi error:", error);
      toast.error("Call error occurred");
      setIsCallActive(false);
      setIsConnecting(false);
    });

    return () => {
      vapiInstance.stop();
    };
  }, []);

  const handleVoiceDemo = async () => {
    if (!vapi) return;

    if (isCallActive) {
      vapi.stop();
    } else {
      try {
        setIsConnecting(true);
        await vapi.start("36c12a50-01bc-4da8-92c9-8259e7350724");
      } catch (error) {
        console.error("Failed to start call:", error);
        toast.error("Failed to start voice demo");
        setIsConnecting(false);
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-border">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 lg:space-y-10"
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
              >
                Never Miss Another Call
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
              >
                Meet your AI voice receptionist. It sounds human, handles calls 24/7, books appointments, and closes leads while you focus on growing your business.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={handleVoiceDemo}
                className={`rounded-full px-8 h-14 text-base font-medium group relative overflow-hidden ${
                  isConnecting ? 'animate-blink-white' : ''
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3"
                >
                  <Mic className="h-5 w-5" />
                  {isConnecting ? "Connecting..." : isCallActive ? "End Call" : "Try Voice Demo"}
                </motion.div>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-14 text-base font-medium border-2 hover:bg-foreground hover:text-background transition-all duration-300"
                asChild
              >
                <a href="#demo">Free Consultation</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="pt-6 space-y-4"
            >
              <p className="text-sm text-muted-foreground">
                Trusted by 100+ businesses across:
              </p>
              <div className="flex flex-wrap gap-6">
                {["Restaurants", "Plumbing", "Florists", "Clinics"].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
                    className="relative text-sm font-medium cursor-default"
                  >
                    <span className={currentVideoIndex === i ? "text-foreground" : "text-muted-foreground"}>
                      {item}
                    </span>
                    
                    {/* Animated underline */}
                    <motion.span
                      className="absolute bottom-0 left-0 h-[2px] bg-foreground"
                      initial={{ width: 0 }}
                      animate={{ 
                        width: currentVideoIndex === i ? "100%" : "0%"
                      }}
                      transition={{ 
                        duration: 0.5,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Glass Video Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative w-full hidden lg:flex items-center justify-center"
          >
            <OrganicVideoLoop currentVideoIndex={currentVideoIndex} />
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
