import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.page";
import About from "./components/About";
import PageNotFound from "./components/Errors/PageNotFound";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
