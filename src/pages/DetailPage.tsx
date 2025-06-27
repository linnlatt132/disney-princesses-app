import { useNavigate, useParams } from "react-router-dom";
import princesses from "../data/princesses";
import { motion } from "framer-motion";
import { ChevronLeft, X } from "lucide-react";

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

  return (
    <div className="relative w-full">
      <motion.div
        className="flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div
          onClick={() => navigate("/")}
          className=" text-black flex items-center text-2xl justify-end mr-15 mt-10 hover:cursor-pointer"
        >
          <X size={30} />
          Close
        </div>
        {/* bottom bg and name */}
        <div className="flex justify-between rounded-br-2xl">
          {/* Name */}
          <div className="-rotate-90 transform origin-left flex items-center justify-between space-x-8 mt-110 ml-22">
            <ChevronLeft
              size={30}
              onClick={() => navigate(`/detail/${nextPrincess.slug}`)}
              className="hover:cursor-pointer"
            />
            <p className="text-[20px] font-thin whitespace-nowrap text-black/50">
              {nextPrincess.name}
            </p>
            <p className="text-[30px] whitespace-nowrap">{princess.name}</p>
          </div>

          {/* background */}
          {princess.id === 2 ? (
            <div className="absolute top-[119px] left-[168px]">
              {princess.bgImg2}
            </div>
          ) : (
            <div className="absolute top-[119px] left-[154px]">
              {princess.bgImg2}
            </div>
          )}
        </div>

        {/* Image and content */}
        <div className="text-white flex absolute top-32 left-56 space-x-20">
          {/* img */}
          <div className="scale-170 relative top-8">{princess.personImg}</div>

          {/* content */}
          <div className="px-5">
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
            <div className="mt-6 mb-2">Clips</div>
            <div className="flex flex-row space-x-10 ">
              {princess.scenes.map((scene, i) => (
                <img
                  key={i}
                  src={scene}
                  className="rounded-xl w-45 h-25 object-cover"
                  alt={`Scene ${i}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DetailPage;
