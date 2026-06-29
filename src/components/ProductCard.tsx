import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { Product } from "@/data/products";
import { formatGaugePrices, waLink } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="relative overflow-hidden aspect-[4/3] bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-3 right-3 max-w-[85%] px-3 py-1.5 rounded-full bg-card/95 backdrop-blur text-primary text-xs font-bold font-heading shadow-card text-right leading-tight">
          {formatGaugePrices(product.gaugePrices)}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{product.description}</p>

        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/product/${product.id}`);
            }}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-gradient-primary text-primary-foreground font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            View Details
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href={waLink(`Hello, I want to order ${product.name} (${formatGaugePrices(product.gaugePrices)})`)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-secondary text-secondary-foreground font-heading font-semibold text-sm text-center hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-4 h-4" />
            Order
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
