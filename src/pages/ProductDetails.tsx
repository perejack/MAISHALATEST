import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, ArrowLeft, MessageCircle, Check } from "lucide-react";
import { products, PHONE_DISPLAY, PHONE_TEL, waLink } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold text-foreground mb-4">Product not found</h1>
          <button onClick={() => navigate("/")} className="text-primary font-semibold hover:underline">
            Go back home
          </button>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);
  const colorList = product.availableColors?.split(",").map(c => c.trim()) ?? [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 md:pt-32 pb-20">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary font-heading font-semibold mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-2xl overflow-hidden border border-border shadow-card-hover aspect-[4/3] bg-muted"
            >
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col justify-center"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-heading font-bold text-xs w-fit mb-4 uppercase tracking-wider">
                Maisha Mabati
              </span>
              <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground mb-4 leading-tight">
                {product.name}
              </h1>
              <p className="text-3xl md:text-4xl font-heading font-black text-primary mb-6">{product.price}</p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">{product.description}</p>

              {colorList.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-heading font-bold text-foreground mb-3">Available Colours:</h3>
                  <div className="flex flex-wrap gap-2">
                    {colorList.map(c => (
                      <span
                        key={c}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-foreground text-xs font-semibold border border-border"
                      >
                        <Check className="w-3 h-3 text-primary" />
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {product.details && (
                <div className="mb-6">
                  <h3 className="font-heading font-bold text-foreground mb-2">Details:</h3>
                  <p className="text-muted-foreground text-sm">{product.details}</p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <a
                  href={waLink(`Hello MAISHA MABATI FACTORY, I want to order ${product.name} (${product.price})`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-4 rounded-lg bg-[hsl(142_70%_45%)] text-[hsl(0_0%_100%)] font-heading font-bold text-base hover:scale-[1.02] transition-transform"
                >
                  <MessageCircle className="w-5 h-5" />
                  Order via WhatsApp
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex-1 flex items-center justify-center gap-2 py-4 rounded-lg bg-gradient-primary text-primary-foreground font-heading font-bold text-base hover:scale-[1.02] transition-transform shadow-primary-glow"
                >
                  <Phone className="w-5 h-5" />
                  Call: {PHONE_DISPLAY}
                </a>
              </div>
            </motion.div>
          </div>

          {relatedProducts.length > 0 && (
            <div>
              <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-foreground mb-8 text-center">
                Related Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductDetails;
