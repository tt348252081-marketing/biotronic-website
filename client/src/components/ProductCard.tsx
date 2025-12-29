import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

export interface Product {
  id: string;
  brand: string;
  name: string;
  description: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [hoverColor, setHoverColor] = useState<"green" | "purple">("green");

  const handleMouseEnter = () => {
    const color = Math.random() > 0.5 ? "green" : "purple";
    setHoverColor(color);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseEnter={handleMouseEnter}
      className="h-full"
    >
      <Card
        className={cn(
          "group relative h-full overflow-hidden rounded-[20px] border-0 bg-white/80 backdrop-blur-sm p-0 transition-all duration-500",
          "hover:shadow-xl shadow-sm",
          hoverColor === "green"
            ? "hover:shadow-asdan-hover-green/10"
            : "hover:shadow-asdan-hover-purple/10"
        )}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-asdan-blue to-asdan-orange opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row gap-6 p-6 h-full items-start md:items-center">

          {/* Image wrapper */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <div className="w-[120px] h-[120px] rounded-2xl bg-white border border-black/5 flex items-center justify-center overflow-hidden p-2 shadow-inner">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 flex flex-col gap-2 w-full">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-asdan-orange" />
              <span className="text-xs font-bold uppercase tracking-[2px] text-asdan-blue group-hover:text-asdan-orange transition-colors">
                {product.brand}
              </span>
            </div>

            <h3 className="text-xl font-serif font-medium text-asdan-text leading-tight">
              {product.name}
            </h3>

            {/* Description box */}
            <div
              className={cn(
                "mt-2 rounded-lg p-4 transition-all duration-300 relative overflow-hidden",
                "group-hover:-translate-y-1 group-hover:text-white",
                hoverColor === "green"
                  ? "group-hover:bg-asdan-hover-green"
                  : "group-hover:bg-asdan-hover-purple"
              )}
            >
               <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none" />
              <p className="text-sm leading-relaxed text-gray-600 group-hover:text-white transition-colors duration-300 font-sans">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
