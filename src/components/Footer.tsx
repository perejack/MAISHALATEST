import { Phone, MessageCircle } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, waLink } from "@/data/products";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/70 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="font-heading font-black text-primary-foreground text-lg">M</span>
              </div>
              <p className="font-heading font-extrabold text-primary-foreground text-xl">
                Maisha<span className="text-primary">Mabati</span>
              </p>
            </div>
            <p className="text-sm">Quality Mabati — Delivered to Your Site.</p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="/#products" className="hover:text-primary transition-colors">Products</a></li>
              <li><a href="/#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="/#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-3">Contact</h4>
            <div className="space-y-2 text-sm">
              <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
              </a>
              <a
                href={waLink("Hello MAISHA MABATI FACTORY, I would like to inquire about your products.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Chat
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs">
          © {new Date().getFullYear()} MaishaMabati. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
