import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  {
    value: "2M+",
    label: "Calls answered in the trades.",
  },
  {
    value: "92%",
    label: "Booking rate in most channels.",
  },
  {
    value: "$1.25B",
    label: "Revenue sold by our AI Agents.",
  },
  {
    value: "96%",
    label: "Satisfaction from EternitAI customers.",
  },
];

const Stats = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-20 border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="text-center space-y-3"
            >
              <div className="text-5xl md:text-6xl font-bold tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
