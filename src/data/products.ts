import colourBoxProfile from "@/assets/products/colour-box-profile.jpg";
import premiumTile from "@/assets/products/premium-tile.jpg";
import romanTile from "@/assets/products/roman-tile.jpg";
import colour113Profile from "@/assets/products/colour-11-3-profile.jpg";
import aluZinc113 from "@/assets/products/alu-zinc-11-3.jpg";
import maishaTile from "@/assets/products/maisha-tile.jpeg";

export interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  description: string;
  category: "mabati";
  availableColors?: string;
  details?: string;
}

export const products: Product[] = [
  {
    id: "colour-box-profile",
    name: "Maisha Colour Box Profile",
    image: colourBoxProfile,
    price: "KSh 470/meter",
    description: "This wide span profile is for roofing and cladding. It is designed to provide the building and construction industry with an economical alternative to Invented Box Rib profiles. Widely used for domestic roofing, industrial roofing, farmhouses, airport hangars and factory sheds.",
    category: "mabati",
    availableColors: "GREEN, TILE RED, SKY BLUE, GRAPHITE, BRIGHT RED, BRICK RED, MAROON, SAFARICOM GREEN, REGAL RED",
  },
  {
    id: "premium-tile",
    name: "Maisha Premium Tile",
    image: premiumTile,
    price: "KSh 550/meter",
    description: "With a great aesthetic value, it is currently one of the most popular and affordable ranges of Maisha. Manufactured with high standard Mild Steel and Coated with UV Resistant paint. Available in standard corrugation and suitable for versatile applications.",
    category: "mabati",
    availableColors: "GREEN, TILE RED, GRAPHITE, BRIGHT RED, BRICK RED",
  },
  {
    id: "roman-tile",
    name: "Maisha Roman Tile",
    image: romanTile,
    price: "KSh 550/meter",
    description: "A prestigious and premium roofing profile. It gives the roof a look resembling 'Roman Clay Tiles.' For those who want the beauty of roof tiles without the leaks, maintenance and the added cost. The most rigid of profiles with high thermal efficiency.",
    category: "mabati",
    availableColors: "GREEN, TILE RED, GRAPHITE, BRIGHT RED, BRICK RED",
  },
  {
    id: "colour-11-3-profile",
    name: "Maisha Colour 11/3 Profile",
    image: colour113Profile,
    price: "KSh 520/meter",
    description: "A widely used profile for roofing and cladding applications due to its ease of handling and fixing, relative strength, cost effectiveness and use in common design. Available in a diverse range of attractive colours with 11/3 corrugation style.",
    category: "mabati",
    availableColors: "GREEN, TILE RED, GRAPHITE, BRIGHT RED, BRICK RED, SKY BLUE, MAROON, SAFARICOM GREEN, REGAL RED",
  },
  {
    id: "alu-zinc-11-3",
    name: "Maisha Alu-Zinc Mabati 11/3",
    image: aluZinc113,
    price: "KSh 390/meter",
    description: "A flat carbon steel sheet from Maisha Mabati Mills Ltd, setting the standard for dry and protected roofing. This product combines attractive aesthetics with proven resilience.",
    category: "mabati",
  },
  {
    id: "maisha-tile",
    name: "Maisha Tile",
    image: maishaTile,
    price: "KSh 390/meter",
    description: "A popular alternative to conventional roofing tiles. Its appearance and light-weight make it suitable for any architectural concept. Maisha Tile has a vast range of applications.",
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
