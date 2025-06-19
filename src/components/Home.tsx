import Card from "./Card";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="bg-[#E0DAEB]/60 h-150 w-300 rounded-2xl ">
        <Navbar />
        <div className="flex w-ful justify-between px-10 ">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
