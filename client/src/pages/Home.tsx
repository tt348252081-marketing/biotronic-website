import { Product, ProductCard } from "@/components/ProductCard";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Import images
import imgLung from "@assets/stock_images/medical_device_lung__3f8322bd.jpg";
import imgMonitor from "@assets/stock_images/medical_patient_moni_a91c9054.jpg";
import imgSyringe from "@assets/stock_images/medical_syringe_clos_c8bd5c68.jpg";
import imgLaryngoscope from "@assets/stock_images/medical_laryngoscope_69204258.jpg";
import imgVeinFinder from "@assets/stock_images/medical_vein_finder__1137a0f8.jpg";

const PRODUCTS: Product[] = [
  {
    id: "fuji",
    brand: "Fuji System",
    name: "One Lung Ventilation Tube",
    description: "Advanced ventilation solutions designed for thoracic procedures requiring single-lung isolation.",
    image: imgLung
  },
  {
    id: "masimo",
    brand: "Masimo",
    name: "ET CO2 Monitor、SpHb / PVI / SpCO / SpMet Monitor",
    description: "Comprehensive non-invasive monitoring technologies for patient safety and clinical decision making.",
    image: imgMonitor
  },
  {
    id: "sumi",
    brand: "Sumi",
    name: "Intubation / Exchanger Stylet Series",
    description: "High-quality stylets designed to facilitate difficult intubations and tube exchanges.",
    image: imgLaryngoscope
  },
  {
    id: "sungwon",
    brand: "SungWon",
    name: "Safety Blue Syringe CVC Series",
    description: "Innovative central venous catheterization kits featuring safety syringe technology.",
    image: imgSyringe
  },
  {
    id: "teleflex",
    brand: "Teleflex",
    name: "LMA Series & Laryngoscope Series",
    description: "Premium airway management devices including laryngeal mask airways and laryngoscopes.",
    image: imgLaryngoscope
  },
  {
    id: "tsci",
    brand: "TSCI",
    name: "Blanket Warmer、Fluid Warmer",
    description: "Temperature management systems to prevent perioperative hypothermia.",
    image: imgMonitor
  },
  {
    id: "tuoren",
    brand: "Tuoren",
    name: "Anesthesia Consumable Series",
    description: "A wide range of high-quality disposables for anesthesia and respiratory care.",
    image: imgLung
  },
  {
    id: "vitaltec",
    brand: "Vitaltec",
    name: "Tracheostomy Tube Series",
    description: "Designed for patient comfort and safety during long-term airway management.",
    image: imgLung
  },
  {
    id: "vivolight",
    brand: "Vivolight",
    name: "Projection Vein Finder",
    description: "Real-time vein visualization technology to improve first-stick success rates.",
    image: imgVeinFinder
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-asdan-white font-sans overflow-x-hidden selection:bg-asdan-blue selection:text-white">
      {/* Header / Hero Section - Minimalist */}
      <header className="relative py-24 px-6 md:px-12 text-center max-w-5xl mx-auto">
         <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
         >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-asdan-text mb-4 tracking-tight">
              Asdan Enterprise
            </h1>
            <div className="h-1 w-24 bg-asdan-blue mx-auto rounded-full mb-6" />
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
              Leading the way in advanced medical solutions with a curated selection of premium healthcare technologies.
            </p>
         </motion.div>
      </header>

      {/* Main Content - Product Grid */}
      <main className="container mx-auto px-4 md:px-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-24 text-center">
            <motion.a 
              href="https://www.airwaydevices.com.tw/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-12 py-5 bg-asdan-blue text-white rounded-full 
                        shadow-[0_8px_0_#93a8c7,0_15px_20px_rgba(0,0,0,0.1)] 
                        active:shadow-[0_0px_0_#93a8c7,0_0px_0px_rgba(0,0,0,0.1)] 
                        active:translate-y-[8px]
                        hover:bg-white hover:text-asdan-blue
                        active:bg-asdan-orange active:text-white
                        transition-all duration-200 ease-out
                        font-bold text-lg tracking-wide uppercase group cursor-pointer border-2 border-transparent hover:border-asdan-blue"
            >
              <span>觀看更多</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <p className="mt-6 text-sm text-gray-400 font-medium tracking-wider uppercase">
              Discover our full range
            </p>
        </div>
      </main>

      {/* Footer Decoration */}
      <div className="fixed bottom-0 left-0 w-full h-2 bg-gradient-to-r from-asdan-blue via-white to-asdan-orange opacity-50 z-50 pointer-events-none" />
    </div>
  );
}
