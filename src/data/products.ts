import colourBoxProfile from "@/assets/products/colour-box-profile.jpg";
import premiumTile from "@/assets/products/premium-tile.jpg";
import romanTile from "@/assets/products/roman-tile.jpg";
import colour113Profile from "@/assets/products/colour-11-3-profile.jpg";
import aluZinc113 from "@/assets/products/alu-zinc-11-3.jpg";
import maishaTile from "@/assets/products/maisha-tile.jpeg";

export interface GaugePrice {
  gauge: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  image: string;
  gaugePrices: GaugePrice[];
  description: string;
  category: "mabati";
  availableColors?: string;
  details?: string;
}

export const formatGaugePrice = (price: number) => `KSh ${price}/meter`;

export const formatGaugePrices = (gaugePrices: GaugePrice[]) =>
  gaugePrices.map(({ gauge, price }) => `${gauge}: ${formatGaugePrice(price)}`).join(" · ");

export const products: Product[] = [
  {
    id: "versatile-mabati",
    name: "Versatile Mabati",
    image: romanTile,
    gaugePrices: [
      { gauge: "28 gauge", price: 690 },
      { gauge: "30 gauge", price: 676 },
    ],
    description: "A premium tile-profile roofing sheet that gives your roof the elegant look of clay tiles. Rigid, thermally efficient, and built for lasting beauty without the maintenance of traditional tiles.",
    category: "mabati",
    availableColors: "GREEN, TILE RED, GRAPHITE, BRIGHT RED, BRICK RED",
  },
  {
    id: "corrugated-mabati",
    name: "Corrugated Mabati",
    image: colour113Profile,
    gaugePrices: [
      { gauge: "28 gauge", price: 500 },
      { gauge: "30 gauge", price: 455 },
    ],
    description: "Classic corrugated roofing sheets widely used for roofing and cladding. Easy to handle and fix, with proven strength and cost effectiveness for homes, farmhouses, and industrial sheds.",
    category: "mabati",
    availableColors: "GREEN, TILE RED, GRAPHITE, BRIGHT RED, BRICK RED, SKY BLUE, MAROON",
  },
  {
    id: "romantile-mabati",
    name: "Romantile Mabati",
    image: premiumTile,
    gaugePrices: [
      { gauge: "28 gauge", price: 658 },
      { gauge: "30 gauge", price: 590 },
    ],
    description: "A versatile roofing profile suitable for domestic, commercial, and industrial applications. Manufactured with high-quality mild steel and coated with UV-resistant paint for long-lasting performance.",
    category: "mabati",
    availableColors: "GREEN, TILE RED, GRAPHITE, BRIGHT RED, BRICK RED, SKY BLUE",
  },
  {
    id: "box-profile",
    name: "Box Profile",
    image: colourBoxProfile,
    gaugePrices: [
      { gauge: "28 gauge", price: 560 },
      { gauge: "30 gauge", price: 511 },
    ],
    description: "Wide-span box rib profile for roofing and cladding. An economical alternative to inverted box rib profiles, ideal for domestic roofing, industrial buildings, airport hangars, and factory sheds.",
    category: "mabati",
    availableColors: "GREEN, TILE RED, SKY BLUE, GRAPHITE, BRIGHT RED, BRICK RED, MAROON, SAFARICOM GREEN, REGAL RED",
  },
  {
    id: "dumuzaz-unpainted",
    name: "Dumuzaz Unpainted",
    image: aluZinc113,
    gaugePrices: [
      { gauge: "28 gauge", price: 396 },
      { gauge: "30 gauge", price: 388 },
    ],
    description: "Unpainted alu-zinc roofing sheets offering durable, cost-effective protection. Ideal for projects where a natural metallic finish is preferred or where custom painting will be applied on site.",
    category: "mabati",
  },
  {
    id: "eurotile-mabati",
    name: "Eurotile Mabati",
    image: maishaTile,
    gaugePrices: [
      { gauge: "28 gauge", price: 683 },
      { gauge: "30 gauge", price: 678 },
    ],
    description: "Euro-style tile profile mabati combining modern aesthetics with lightweight durability. A popular alternative to conventional roofing tiles for residential and commercial projects.",
    category: "mabati",
    availableColors: "GREEN, TILE RED, GRAPHITE, BRIGHT RED, BRICK RED",
  },
];

export const mabatiProducts = products;

// Centralized contact details
export const PHONE_DISPLAY = "0789 325 548";
export const PHONE_TEL = "+254789325548";
export const WHATSAPP_NUMBER = "254789325548";
export const BRAND_NAME = "MaishaMabati";
export const BRAND_FULL = "MAISHA MABATI FACTORY";

export const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
