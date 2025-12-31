import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface Product {
  id: string;
  brand: string;
  name: string;
  description: string;
  icon: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [activeColor, setActiveColor] = useState<"green" | "purple">("green");
  const [isActive, setIsActive] = useState(false);

  const activate = () => {
    setActiveColor(Math.random() > 0.5 ? "green" : "purple");
    setIsActive(true);
  };

  const deactivate = () => {
    setIsActive(false);
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      animate={{ y: isActive ? -8 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      onTouchStart={activate}
      onTouchEnd={deactivate}
      className="h-full"
    >
      <Card
        className={cn(
          "relative h-full overflow-hidden rounded-[20px] border border-black/5 bg-white p-0 transition-all duration-300",
          isActive && "shadow-lg",
          activeColor === "green"
            ? isActive
              ? "border-[#4ca635]/40 shadow-[#4ca635]/30"
              : "hover:border-[#4ca635]/40 hover:shadow-[#4ca635]/30"
            : isActive
            ? "border-[#4a2573]/40 shadow-[#4a2573]/30"
            : "hover:border-[#4a2573]/40 hover:shadow-[#4a2573]/30"
        )}
      >
        {/* Top accent line */}
        <div
          className={cn(
            "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-asdan-blue to-asdan-orange transition-opacity duration-300",
            isActive ? "opacity-100" : "opacity-0"
          )}
        />

        {/* Content */}
        <div className="flex flex-col sm:flex-row gap-6 p-6 h-full">
          {/* Image */}
          <div className="flex justify-center sm:block">
            <div className="w-[120px] h-[120px] rounded-2xl bg-gradient-to-br from-gray-50 to-gray-200 border border-black/5 flex items-center justify-center overflow-hidden">
              <img
                src={product.icon}
                alt={product.name}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-asdan-orange" />
              <span className="text-sm font-bold uppercase tracking-[1.5px] text-asdan-blue">
                {product.brand}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold text-[#2c3e50] leading-tight">
              {product.name}
            </h3>

            {/* Description */}
            <div className="relative mt-1 rounded-lg overflow-hidden">
              {/* 背景色塊 */}
              <div
                className={cn(
                  "absolute inset-0 transition-opacity duration-300",
                  isActive ? "opacity-100" : "opacity-0",
                  activeColor === "green"
                    ? "bg-[#4ca635]"
                    : "bg-[#4a2573]"
                )}
              />

              {/* 文字 */}
              <p
                className={cn(
                  "relative z-10 p-3 text-sm leading-relaxed transition-colors duration-300",
                  isActive ? "text-white" : "text-[#2c3e50]"
                )}
              >
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}