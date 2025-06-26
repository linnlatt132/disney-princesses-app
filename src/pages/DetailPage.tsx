import { useParams } from "react-router-dom";
import princesses from "../data/princesses";
import { motion } from "framer-motion";

const DetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const princess = princesses.find((p) => p.slug === slug);

  if (!princess) {
    return <div className="text-center mt-20">Princess not found</div>;
  }

  const { name, movieName, about, personImg, bgImg2, scenes } = princess;

  return (
    <motion.div
      className="min-h-screen p-8 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="absolute inset-0 -z-10">{bgImg2}</div>
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <div className="w-40 mx-auto">{personImg}</div>
        <h1 className="text-4xl font-bold">{name}</h1>
        <h2 className="text-xl italic">From: {movieName}</h2>
        <p className="text-base font-light">{about}</p>

        <div className="grid grid-cols-3 gap-4 mt-6">
          {scenes.map((scene, i) => (
            <img
              key={i}
              src={scene}
              className="rounded-xl shadow-md"
              alt={`Scene ${i}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DetailPage;
