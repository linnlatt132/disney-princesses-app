import Card from "./Card";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="bg-[#E0DAEB]/60 h-160 w-300 rounded-2xl ">
        <Navbar />
        <div className="flex w-ful space-x-90 pl-3 ">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex space-x-4 m-4">
          <p>facebook</p>
          <p>instagram</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
