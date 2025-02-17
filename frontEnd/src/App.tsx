import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Card
        imgSrc={"https://picsum.photos/id/237/300/200"}
        price={14}
        title="Thosai"
        desc="fluffy and hot thosai"
      />
      <Footer />
    </>
  );
};

export default App;
