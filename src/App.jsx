import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Promo from "./pages/Promo";
import PriceList from "./pages/PriceList";
import Gallery from "./pages/Gallery";
import TestDrive from "./pages/TestDrive";
import Simulasi from "./pages/Simulasi";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/promo" element={<Promo />} />
          <Route path="/pricelist" element={<PriceList />} />
          <Route path="/testdrive" element={<TestDrive />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}
