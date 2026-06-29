import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { mabatiProducts } from "@/data/products";

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary/5 blur-3xl -z-0" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-heading font-bold text-sm mb-4 uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Maisha Mabati Range
          </h2>
          <p className="text-muted-foreground text-lg">
            Premium roofing profiles in every style and colour to bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mabatiProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
