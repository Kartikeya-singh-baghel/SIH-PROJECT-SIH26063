import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Repository from "./pages/Repository";
import Media from "./pages/Media";
import PolarMap from "./pages/PolarMap";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repository" element={<Repository />} />
        <Route path="/map" element={<PolarMap />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;