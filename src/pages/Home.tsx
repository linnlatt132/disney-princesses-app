// import princesses from "../data/princesses";
// import Card from "./Card";

import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="bg-white h-160 w-300 rounded-2xl ">
        <Navbar />
        {/* <div className="flex w-ful space-x-85 pl-3 ">
          {princesses.map((princess) => (
            <Card key={princess.id} princess={princess} />
          ))}
        </div> */}
        <Slider />
      </div>
    </div>
  );
};

export default Home;
