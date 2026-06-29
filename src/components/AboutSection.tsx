import { motion } from "framer-motion";
import { Shield, Truck, ThumbsUp, Clock, Phone, MessageCircle } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, waLink } from "@/data/products";

const features = [
  { icon: Shield, title: "Genuine Products", desc: "Authorized dealer of authentic Maisha Mabati" },
  { icon: Truck, title: "Fast Delivery", desc: "Quick countrywide delivery at competitive rates" },
  { icon: ThumbsUp, title: "Best Prices", desc: "Factory-direct pricing — no middleman markups" },
  { icon: Clock, title: "Always Available", desc: "Order anytime via WhatsApp or call us directly" },
];

const AboutSection = () => {
  return (
    <>
      {/* About */}
      <section id="about" className="py-20 md:py-28 bg-muted relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-heading font-bold text-sm mb-4 uppercase tracking-wider">
                About Us
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground mb-6">
                Your Trusted Roofing Partner
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                <strong className="text-foreground">MaishaMabati</strong> is a leading supplier of premium
                roofing materials in Kenya. We are authorized distributors of <strong className="text-foreground">Maisha Mabati</strong> roofing sheets — trusted by thousands of homeowners, contractors, and developers.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With years of experience in the construction industry, we deliver quality materials at the best prices,
                ensuring every project — from residential homes to commercial buildings — is built to last.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 max-w-2xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-heading font-bold text-sm mb-4 uppercase tracking-wider">
              Why Us
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground">
              Built for Quality
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-card rounded-2xl border border-border p-6 text-center shadow-card hover:shadow-card-hover transition-shadow group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-primary-glow">
                  <f.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-20 md:py-28 bg-gradient-dark text-primary-foreground relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />

        <div className="container mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-4">
              Ready to Build?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10">
              Get in touch today for the best prices on Maisha Mabati. We deliver countrywide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-primary font-heading font-bold text-lg hover:scale-105 transition-transform shadow-primary-glow"
              >
                <Phone className="w-5 h-5" />
                Call: {PHONE_DISPLAY}
              </a>
              <a
                href={waLink("Hello MAISHA MABATI FACTORY, I would like to place an order.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[hsl(142_70%_45%)] font-heading font-bold text-lg hover:scale-105 transition-transform"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
