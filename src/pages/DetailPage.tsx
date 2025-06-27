import { useNavigate, useParams } from "react-router-dom";
import princesses from "../data/princesses";
import { motion } from "framer-motion";
import { ChevronLeft, X } from "lucide-react";
import { useState } from "react";

const DetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const princess = princesses.find((p) => p.slug === slug);
  if (!princess) {
    return <div className="text-center mt-20">Princess not found</div>;
  }

  // const { name, movieName, about, personImg, bgImg2, scenes } = princess;
  const currentIndex = princesses.findIndex((p) => p.id === princess.id);
  const nextPrincess = princesses[(currentIndex + 1) % princesses.length];
  const [isExiting, setIsExiting] = useState(false);
  const closePage = () => {
    setIsExiting(true);
    navigate("/");
  };
  return (
    <motion.div
      className="relative w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onAnimationComplete={() => {
        if (isExiting) {
          navigate("/");
        }
      }}
      transition={{
        duration: isExiting ? 0.1 : 0.2,
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* close button */}
        <div className=" text-black flex cursor-default select-none items-center text-2xl justify-end mr-15 mt-10 ">
          <span onClick={closePage} className="flex hover:cursor-pointer">
            <X size={30} />
            Close
          </span>
        </div>
        {/* bottom bg and names */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-between rounded-br-2xl cursor-default select-none"
        >
          {/* Names */}
          <div className="-rotate-90 transform origin-left flex items-center justify-between space-x-8 mt-110 ml-22">
            <ChevronLeft
              size={30}
              onClick={() => navigate(`/detail/${nextPrincess.slug}`)}
              className="hover:cursor-pointer"
            />
            <p
              onClick={() => navigate(`/detail/${nextPrincess.slug}`)}
              className="text-[20px] font-thin whitespace-nowrap text-black/50 hover:cursor-pointer"
            >
              {nextPrincess.name}
            </p>
            <p className="text-[30px] whitespace-nowrap">{princess.name}</p>
          </div>

          {/* bottom background */}
          <motion.div
            layoutId={`bg-${princess.id}`}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 30 }}
            className="absolute"
            style={
              princess.id === 2
                ? { top: "119px", left: "168px" }
                : { top: "119px", left: "154px" }
            }
          >
            {princess.bgImg2}
          </motion.div>
        </motion.div>

        {/* Image and content */}
        <div className="text-white flex absolute top-32 left-56 space-x-20">
          {/* img */}
          {/* <div className="scale-170 relative top-8">{princess.personImg}</div> */}
          <motion.div
            layoutId={`img-${princess.id}`}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="scale-170 relative top-8"
          >
            {princess.personImg}
          </motion.div>

          {/* content */}
          <motion.div
            className="px-5"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {/* Name and movie name and about */}
            <div>
              <div className="detail-name">{princess.name}</div>
              <div className="flex items-center space-x-3">
                <span className="text-[20px] font-thin text-white/50">
                  Movie
                </span>
                <span className="text-[24px] font-medium">
                  {princess.movieName}
                </span>
              </div>
              <div className="text-[15px] mt-2 text-white">
                {princess.about}
              </div>
            </div>

            {/* clips */}
            <motion.div
              className="mt-6 mb-2"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              Clips
            </motion.div>
            <motion.div
              className="flex flex-row space-x-10 "
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              {princess.scenes.map((scene, i) => (
                <img
                  key={i}
                  src={scene}
                  className="rounded-xl w-45 h-25 object-cover"
                  alt={`Scene ${i}`}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DetailPage;
