import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type MissionAccordionProps = {
  number: number;
  item: { title: string; content: string };
};

export const MissionAccordion = ({ item, number }: MissionAccordionProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="rounded-xl overflow-hidden bg-[#0D1236] bg-opacity-5">
      <button
        type="button"
        className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-white/20 hover:bg-opacity-10 transition-all duration-300"
        onClick={() => setShow(!show)}
      >
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="bg-white text-[#00052B] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-base sm:text-lg flex-shrink-0">
            {number}
          </div>
          <span className="text-sm sm:text-base font-medium text-white">
            {item.title}
          </span>
        </div>
        {show ? (
          <ChevronUp className="text-white" />
        ) : (
          <ChevronDown className="text-white" />
        )}
      </button>

      {show && (
        <AnimatePresence>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="accordion-content px-4 sm:px-6 pb-6 overflow-hidden"
          >
            <p className="text-gray-300 ml-13 sm:ml-16 pt-4 text-sm sm:text-base">
              {item.content}
            </p>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};
