import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PHONE_DISPLAY, PHONE_TEL } from "@/data/products";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/#home" },
    { label: "Products", href: "/#products" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/95 backdrop-blur-md shadow-card border-b border-border" : "bg-card/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 gap-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center shadow-primary-glow">
              <span className="font-heading font-black text-primary-foreground text-lg">M</span>
            </div>
            <span className="font-heading text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-foreground">
              Maisha<span className="text-primary">Mabati</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="font-heading font-semibold text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all" />
              </a>
            ))}
          </nav>

          {/* Phone — ALWAYS visible */}
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full bg-gradient-primary text-primary-foreground font-heading font-bold text-xs sm:text-sm shadow-primary-glow hover:opacity-90 transition-opacity shrink-0"
          >
            <Phone className="w-4 h-4 shrink-0" />
            <span className="whitespace-nowrap">{PHONE_DISPLAY}</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-card border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-heading font-semibold text-foreground py-3 border-b border-border last:border-0 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
