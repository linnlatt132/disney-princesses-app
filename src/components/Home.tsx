import Navbar from "./Navbar";

const Home = ()=>{
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="bg-[#E0DAEB]/60 h-158 w-300 rounded-2xl ">
          <Navbar />
          <h1>home page</h1>
        </div>
      </div>
    );
}

export default Home