import SnowWhite from "../assets/images/SnowWhite.svg";
import { motion } from "framer-motion";

const Card = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="h-110 w-80  hover:cursor-pointer hover:scale-105 flex justify-end flex-col mt-5"
    >
      <img
        src={SnowWhite}
        alt="snowwhite"
        className="absolute mb-28 h-85 ml-2 z-20"
      />
      <div className=" card-bg text-white rounded-3xl h-60 justify-end flex flex-col p-9">
        <p className="font-semibold text-[30px] ">Snow White</p>
        <div className="space-x-2 flex items-center">
          <span className=" font-thin text-[19px]">Movie</span>{" "}
          <div className="rounded-full h-1 w-1 bg-white "></div>
          <span className="font-semibold text-[20px]">SnowWhite</span>
        </div>
      </div>
    </motion.div>
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
