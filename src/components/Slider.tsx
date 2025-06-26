import { useState } from "react";
import princesses from "../data/princesses";
import { AnimatePresence, motion } from "framer-motion";
import Card from "./Card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const visibleCards = princesses.slice(index, index + 3);
  const previewCard = princesses[index + 3];

  const handleNext = () => {
    if (index + 3 < princesses.length) setIndex(index + 1);
  };
  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden px-8 flex space-x-90">
        <AnimatePresence initial={false} mode="wait">
          {visibleCards.map((princess) => (
            <motion.div
              key={princess.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              <Card princess={princess} />
            </motion.div>
          ))}
          {previewCard && (
            <motion.div
              key={previewCard.id}
              className="transform scale-70 opacity-50 translate-y-4"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 0.6, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
            >
              <Card princess={previewCard} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-between items-center px-6 mt-3">
        <div className="flex space-x-10 ml-10 text-[18px]">
          <p>facebook</p>
          <p>Instagram</p>
        </div>
        <div className="flex justify-between w-80 mr-10">
          <button
            className="text-[18px] font-serif disabled:opacity-50 hover:cursor-pointer flex items-center"
            onClick={handlePrev}
            disabled={index === 0}
          >
            <ChevronLeft /> Prev
          </button>
          <button
            className="text-[18px] font-serif disabled:opacity-50 hover:cursor-pointer flex items-center"
            onClick={handleNext}
            disabled={index + 3 >= princesses.length}
          >
            Next <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Slider;
