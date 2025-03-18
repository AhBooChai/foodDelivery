import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Navbar2 from "./components/Navbar2/Navbar2";

const App = () => {
  return (
    <ShoppingCartProvider>
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </ShoppingCartProvider>
  );
};

export default App;
