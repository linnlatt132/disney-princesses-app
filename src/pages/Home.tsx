import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import DetailPage from "./DetailPage";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="bg-white h-160 w-300 rounded-2xl ">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Slider />} />
            <Route path="detail/:slug" element={<DetailPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Home;
