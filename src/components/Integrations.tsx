import { FadeIn } from "@/components/AnimatedText";
import { motion } from "framer-motion";

const integrations = [
  "HubSpot",
  "GoHighLevel",
  "Zapier",
  "n8n",
  "Google Sheets",
  "Webhooks",
];

const Integrations = () => {
  return (
    <section id="integrations" className="py-24 border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Your CRM's New Best Friend
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              EternitAI plugs into your existing tools — HubSpot, GoHighLevel, Zapier, n8n, Google Sheets,
              and custom webhooks. Capture leads. Trigger automations. Scale faster.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -4 }}
            >
              <div className="bg-secondary/30 border-2 border-border rounded-full px-8 py-4 text-base font-semibold hover:border-foreground/40 transition-all duration-300 cursor-pointer">
                {integration}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
