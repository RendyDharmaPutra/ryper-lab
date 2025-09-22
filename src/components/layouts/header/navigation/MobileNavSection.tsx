import { motion, AnimatePresence } from "framer-motion";
import { MobileMenuBtn } from "./MobileMenuBtn";
import { X } from "lucide-react";
import { MobileNav } from "./MobileNav";

type MobileNavSectionProps = {
  show: boolean;
  setShow: () => void;
};

export const MobileNavSection = ({ show, setShow }: MobileNavSectionProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.section
          key="mobile-menu"
          initial={{ x: "100%" }} // mulai dari kanan
          animate={{ x: 0 }} // geser masuk ke layar
          exit={{ x: "100%" }} // geser keluar ke kanan
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 right-0 px-4 py-7 h-screen w-64 bg-gray-900/95 backdrop-blur-3xl md:hidden z-[999]"
        >
          <div className="flex justify-end">
            <MobileMenuBtn Icon={X} setShow={setShow} />
          </div>

          <MobileNav />
        </motion.section>
      )}
    </AnimatePresence>
  );
};
