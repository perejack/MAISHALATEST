import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck, Truck, Star } from "lucide-react";
import heroImage from "@/assets/hero-house.jpg";
import { waLink } from "@/data/products";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      {/* Layered overlays for cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(150_40%_8%/0.92)] via-[hsl(150_40%_8%/0.7)] to-[hsl(150_40%_8%/0.3)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(150_40%_8%/0.8)] via-transparent to-transparent" />

      {/* Decorative floating shapes */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-10 w-32 h-32 rounded-full bg-primary/20 blur-3xl hidden md:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-1/4 w-40 h-40 rounded-full bg-secondary/20 blur-3xl hidden md:block"
      />

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 mb-6"
          >
            <Star className="w-4 h-4 text-secondary fill-secondary" />
            <span className="text-primary-foreground text-sm font-heading font-semibold">
              Kenya's Trusted Mabati Supplier
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-6 leading-[1.05]"
          >
            Premium Mabati
            <br />
            for <span className="text-secondary">Every Roof</span>
            <span className="text-primary">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mb-8 font-body leading-relaxed"
          >
            Authentic Maisha Mabati roofing sheets in every colour and profile —
            delivered straight to your site at factory-direct prices.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href="#products"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg font-heading font-bold text-primary-foreground bg-gradient-primary shadow-primary-glow hover:scale-105 transition-transform text-base"
            >
              Browse Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={waLink("Hello MAISHA MABATI FACTORY, I would like to inquire about your products.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg font-heading font-bold text-primary-foreground bg-[hsl(142_70%_45%)] hover:scale-105 transition-transform text-base"
            >
              <MessageCircle className="w-5 h-5" />
              Order on WhatsApp
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 max-w-2xl"
          >
            {[
              { icon: ShieldCheck, label: "Genuine Maisha" },
              { icon: Truck, label: "Fast Delivery" },
              { icon: Star, label: "Best Prices" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col sm:flex-row items-center gap-2 px-3 py-3 rounded-xl bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20"
              >
                <Icon className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-primary-foreground text-xs sm:text-sm font-heading font-semibold text-center sm:text-left">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-primary-foreground/60" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
