import { useState } from "react";
import princesses from "../data/princesses";
import { AnimatePresence, motion, easeInOut } from "framer-motion";
import Card from "./Card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    scale: 0,
    zIndex: 0,
  }),
  center: {
    x: 0,
    scale: 1,
    zIndex: 1,
    transition: { duration: 0.6, ease: easeInOut },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -100 : 100,
    scale: 0,
    zIndex: 0,
    transition: { duration: 0.6, ease: easeInOut },
  }),
};

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const visibleCards = princesses.slice(index, index + 3);
  const previewCard = princesses[index + 3];

  const handleNext = () => {
    if (index + 3 < princesses.length) {
      setDirection(1);
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setDirection(-1);
      setIndex(index - 1);
    }
  };

  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden px-8 flex space-x-90">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          {[...visibleCards, previewCard].map(
            (princess) =>
              princess && (
                <motion.div
                  key={princess.id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <Link key={princess.id} to={`/detail/${princess.slug}`}>
                    <Card princess={princess} />
                  </Link>
                </motion.div>
              )
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
