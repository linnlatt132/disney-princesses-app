import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    // <div className="bg-yellow-600 space-y-9 flex flex-col">
    //   <h1 className="bg-cyan-200 p-6">Hello world</h1>
    //   <p className="bg-red-200">3</p>
    //   Hello wrold 2
    // </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:slug" element={<DetailPage />} />
    </Routes>
  );
}

export default App;
