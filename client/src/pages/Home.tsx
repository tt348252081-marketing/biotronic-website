import { motion } from "framer-motion";
import { ProductCard } from "@/components/ProductCard";

export default function Home() {
  const products = [
    {
      id: "1",
      brand: "Fuji System",
      name: "One Lung Ventilation Tube",
      description:
        "單肺通氣管系列，專為單肺手術設計，提供精確的肺部隔離與通氣控制，確保手術過程的安全性與可靠性。",
      icon: "/products/FUJI4.png",
    },
    {
      id: "2",
      brand: "Masimo",
      name: "ET CO2 Monitor、SpHb / PVI / SpCO / SpMet Monitor",
      description:
        "呼氣末二氧化碳監測儀與多參數血氧監測系統，提供即時生理參數監控，協助臨床醫師做出精準的醫療決策。",
      icon: "/products/MASIMO-EMMA2.png",
    },
    {
      id: "3",
      brand: "Atrasorb",
      name: "蘇打石灰",
      description:
        "醫療麻醉循環系統中去除呼吸管路中的CO2，防止二氧化碳積碳。",
      icon: "/products/Pharma2.png",
    },
    {
      id: "4",
      brand: "SungWon",
      name: "Safety Blue Syringe CVC Series",
      description:
        "安全藍色注射器與中心靜脈導管系列，結合人體工學設計與安全防護機制，降低針扎風險。",
      icon: "/products/SUNG4.png",
    },
    {
      id: "5",
      brand: "JANS",
      name: "Cuffsure 囊壓寶",
      description:
        "類注射器設計、攜帶便利；刻度配合指示帶，直觀式的監測氣囊壓力。",
      icon: "/products/JANS4.png",
    },
    {
      id: "6",
      brand: "TSCI",
      name: "Blanket Warmer、Fluido Warmer",
      description:
        "保暖毯與輸液加溫器，有效預防術中低體溫，提升病患舒適度與術後恢復品質。",
      icon: "/products/TSCI2.png",
    },
    {
      id: "7",
      brand: "Tuoren",
      name: "Anesthesia Consumable Series",
      description:
        "麻醉耗材系列，多種高品質單次使用耗材，確保感染控制與臨床效能。",
      icon: "/products/TUOREN4.png",
    },
    {
      id: "8",
      brand: "Tuoren Video Intubating",
      name: "TUOREN-金泰克",
      description:
        "影像式插管設備呈現插管時的即時影像，可提供更安全及更有效率的插管品質;搭配拋棄式隔離套和拋棄式葉片使用，可以降低交叉感染的風險。",
      icon: "/products/TUOREN VIDEO INTUBATING2.png",
    },
    {
      id: "9",
      brand: "Vivolight",
      name: "Projection Vein Finder",
      description:
        "投影式血管顯像儀，利用近紅外光技術即時顯示皮下血管分佈，輔助醫護人員進行精確穿刺。",
      icon: "/products/VIVO3.png",
    },
    {
      id: "10",
      brand: "Vitaltec",
      name: "Tracheostomy Tube Series",
      description:
        "氣切管系列，採用生物相容性材質，提供優異的柔軟度與配戴舒適性，減少氣道刺激。",
      icon: "/products/Vitaltec1.png",
    },
    {
      id: "11",
      brand: "Keewell",
      name: "輸液加溫器",
      description:
        "彈性加熱管為U型結構彈性管，提供穩定的加熱效能；可單/雙管合併選擇使用。",
      icon: "/products/KEEWELL4.png",
    },
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-asdan-blue selection:text-white">

      {/* Header Section */}
      <header className="relative bg-white pt-[100px] pb-[80px] px-6 sm:px-10 overflow-hidden">

        {/* Top Gradient Line */}
        <div
          className="absolute top-0 left-0 right-0 h-[6px]"
          style={{ background: "linear-gradient(to right, #b8c9e7, #f5ccc6)" }}
        />

        <div className="max-w-[800px] mx-auto text-center">

          {/* 🔵 新增：Logo + 亞仕丹企業有限公司 */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <img
              src="/products/亞仕丹logo1.png"
              alt="Asdan Logo"
              className="w-[28px] h-auto opacity-80"
            />
            <span className="text-[18px] text-gray-700 tracking-wide">
              亞仕丹企業有限公司
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-[56px] font-black mb-6 tracking-tighter leading-[1.2] bg-gradient-to-r from-asdan-blue to-asdan-orange bg-clip-text text-transparent"
          >
            醫療設備產品目錄
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg font-light text-gray-600 tracking-wide"
          >
            專業提供高品質醫療設備與解決方案
          </motion.p>
        </div>
      </header>

      {/* Catalog Section */}
      <section className="py-[100px] px-6 sm:px-10 bg-[#fbf2e9]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[42px] font-bold text-[#2c3e50] mb-4 tracking-tight">
              產品系列
            </h2>
            <p className="text-gray-500 font-light">探索我們的專業醫療設備系列</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with ONLY gradient lines */}
      <section className="relative bg-white py-[100px] px-6 sm:px-10 text-center overflow-hidden">

        <div
          className="absolute top-0 left-0 right-0 h-[6px]"
          style={{ background: "linear-gradient(to right, #b8c9e7, #f5ccc6)" }}
        />

        <div
          className="absolute bottom-0 left-0 right-0 h-[6px]"
          style={{ background: "linear-gradient(to right, #b8c9e7, #f5ccc6)" }}
        />

        <div className="max-w-[600px] mx-auto relative z-10">
          <h2 className="text-[32px] font-bold text-[#2c3e50] mb-4">
            了解更多資訊
          </h2>
          <p className="text-gray-500 font-light mb-10">
            歡迎瀏覽完整產品資訊，或聯繫我們獲取專業諮詢。
          </p>

          <motion.a
            href="https://www.airwaydevices.com.tw/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-asdan-blue text-white font-semibold text-lg tracking-wide shadow-lg shadow-asdan-blue/30 transition-all duration-300 hover:bg-white hover:text-asdan-blue hover:shadow-xl active:bg-asdan-orange active:text-white active:shadow-asdan-orange/30 active:scale-95"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            前往連結
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-[#999] py-10 text-center border-t border-white/5">
        <p className="text-[13px] font-light tracking-wider">
          &copy; {new Date().getFullYear()} 亞仕丹企業有限公司 版權所有.
        </p>
      </footer>
    </div>
  );
}