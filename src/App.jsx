import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PriceList from "./pages/Pricelist";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricelist" element={<PriceList />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
