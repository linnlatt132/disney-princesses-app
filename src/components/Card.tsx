import SnowWhite from "../assets/images/princess/SnowWhite.svg?react";
import { motion } from "framer-motion";
import Bg from "../assets/images/bg/SnowWhiteBG.svg?react";

const Card = () => {
  const imgVariants = {
    rest: { scale: 1, y: 0 },
    hover: { scale: 1.12, y: -9 },
  };
  const textVariants = {
    rest: { y: 0 },
    hover: { y: -12 },
  };

  const readMoreVariants = {
    rest: { opacity: 0 },
    hover: { opacity: 1 },
  };
  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative h-70 mt-52 outline-none hover:cursor-pointer"
    >
      <Bg className="absolute inset-0" />
      {/* image grow */}
      <motion.div
        variants={imgVariants}
        className="absolute -top-40 translate-x-1/4 origin-bottom z-20 "
        transition={{ type: "spring", stiffness: 160, damping: 12 }}
      >
        <SnowWhite />
      </motion.div>
      <motion.div
        className="flex flex-col absolute bottom-4 left-8 z-30 text-white w-70 text-start"
        variants={textVariants}
        transition={{ type: "tween", duration: 0.25 }}
      >
        <p className="font-semibold text-[24px] ">Snow White</p>
        <div className="space-x-2 flex items-center">
          <span className="font-thin text-[14px]">Movie</span>
          <div className="rounded-full h-1 w-1 bg-white "></div>
          <span className="text-[16px]">Snow White</span>
        </div>
        <motion.span
          variants={readMoreVariants}
          transition={{ duration: 0.25 }}
          className="mt-1 text-start tracking-wider opacity-0 group-hover:opacity-100 transition-opacity text-sm font-thin font-mono "
        >
          READ MORE &gt;
        </motion.span>
      </motion.div>
    </motion.button>
  );
};
export default Card;

/* Rectangle 6 */

// position: absolute;
// width: 325.94px;
// height: 271.25px;
// left: 181.7px;
// top: 429.25px;

// background: linear-gradient(68.29deg, #8C0303 40.61%, #B24E42 76.06%, #F1C8AA 95.76%);
// box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.6);
// border-radius: 20px;
