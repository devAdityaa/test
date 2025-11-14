import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/AnimatedText";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";

const testimonials = [
  {
    id: 1,
    name: "Michael Chen",
    role: "Owner",
    company: "Golden Dragon Restaurant",
    image: testimonial1,
    rating: 5,
    quote:
      "EternitAI transformed our reservation system completely. We went from missing 40% of calls to answering every single one. Our booking rate increased by 82% in just 30 days. It's like having a dedicated receptionist who never takes a break.",
  },
  {
    id: 2,
    name: "Sarah Martinez",
    role: "Founder & CEO",
    company: "Bloom Florist Chain",
    image: testimonial2,
    rating: 5,
    quote:
      "During our busiest season, EternitAI handled 3× our normal call volume without breaking a sweat. The AI remembers customer preferences and upsells naturally. Our revenue during holidays increased dramatically thanks to zero missed opportunities.",
  },
  {
    id: 3,
    name: "Dr. James Peterson",
    role: "Practice Manager",
    company: "Peterson Family Clinic",
    image: testimonial3,
    rating: 5,
    quote:
      "We saved over 20 hours per week on administrative tasks. The AI handles appointment scheduling, reminders, and basic patient inquiries with empathy and professionalism. Our staff can now focus on patient care instead of phones.",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Operations Director",
    company: "Swift Plumbing Services",
    image: testimonial4,
    rating: 5,
    quote:
      "Emergency calls at 2 AM? No problem. EternitAI dispatches our technicians efficiently and keeps customers informed. Our customer satisfaction scores went from 87% to 96%. Best investment we've made in our operations.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return testimonials.length - 1;
      if (next >= testimonials.length) return 0;
      return next;
    });
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 border-b border-border overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Loved by Businesses Worldwide
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              See how EternitAI is transforming customer communication for companies like yours
            </p>
          </div>
        </FadeIn>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-[500px] flex items-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full"
              >
                <div className="bg-background rounded-3xl p-8 md:p-12 shadow-xl border border-border">
                  <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    {/* Customer Photo */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex-shrink-0"
                    >
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-accent to-secondary rounded-full blur opacity-75" />
                        <img
                          src={currentTestimonial.image}
                          alt={currentTestimonial.name}
                          className="relative w-32 h-32 rounded-full object-cover border-4 border-background"
                        />
                      </div>
                    </motion.div>

                    {/* Testimonial Content */}
                    <div className="flex-1 space-y-6">
                      {/* Quote Icon */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3, type: "spring" }}
                      >
                        <Quote className="h-12 w-12 text-accent/20" />
                      </motion.div>

                      {/* Rating */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex gap-1"
                      >
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-accent text-accent"
                          />
                        ))}
                      </motion.div>

                      {/* Quote */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg md:text-xl text-foreground leading-relaxed"
                      >
                        "{currentTestimonial.quote}"
                      </motion.p>

                      {/* Customer Info */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="space-y-1"
                      >
                        <p className="font-bold text-lg">
                          {currentTestimonial.name}
                        </p>
                        <p className="text-muted-foreground">
                          {currentTestimonial.role} at{" "}
                          {currentTestimonial.company}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <Button
              variant="outline"
              size="icon"
              onClick={() => paginate(-1)}
              className="pointer-events-auto rounded-full w-12 h-12 bg-background/80 backdrop-blur-sm hover:bg-background hover:scale-110 transition-transform"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => paginate(1)}
              className="pointer-events-auto rounded-full w-12 h-12 bg-background/80 backdrop-blur-sm hover:bg-background hover:scale-110 transition-transform"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 h-2 bg-accent"
                    : "w-2 h-2 bg-border hover:bg-accent/50"
                } rounded-full`}
              />
            ))}
          </div>
        </div>

        {/* Stats Below Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-20"
        >
          {[
            { value: "500+", label: "Happy Customers" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "99.9%", label: "Uptime" },
            { value: "24/7", label: "AI Availability" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-background rounded-xl border border-border"
            >
              <div className="text-3xl font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
