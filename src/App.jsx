import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";
import ScrollToTop from "./components/ScrollToTop";
import SiteLayout from "@/components/SiteLayout";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import FlangeGaskets from "@/pages/products/FlangeGaskets";
import CustomGaskets from "@/pages/products/CustomGaskets";
import NonAsbestosSheets from "@/pages/products/NonAsbestosSheets";
import SBRRubberSheets from "@/pages/products/SBRRubberSheets";
import RubberisedCork from "@/pages/products/RubberisedCork";
import GlandPacking from "@/pages/products/GlandPacking";
import SealingRopeTape from "@/pages/products/SealingRopeTape";
import SpiralWoundGaskets from "@/pages/products/SpiralWoundGaskets";
import Industries from "@/pages/Industries";
import TechnicalResources from "@/pages/TechnicalResources";
import HowToMeasure from "@/pages/HowToMeasure";
import About from "@/pages/About";
import RequestQuote from "@/pages/RequestQuote";
import Contact from "@/pages/Contact";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/flange-gaskets" element={<FlangeGaskets />} />
          <Route path="/products/custom-gaskets" element={<CustomGaskets />} />
          <Route path="/products/non-asbestos-gasket-sheets" element={<NonAsbestosSheets />} />
          <Route path="/products/sbr-rubber-sheets" element={<SBRRubberSheets />} />
          <Route path="/products/rubberised-cork" element={<RubberisedCork />} />
          <Route path="/products/gland-packing" element={<GlandPacking />} />
          <Route path="/products/sealing-rope-tape" element={<SealingRopeTape />} />
          <Route path="/products/spiral-wound-gaskets" element={<SpiralWoundGaskets />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/technical-resources" element={<TechnicalResources />} />
          <Route path="/how-to-measure-a-gasket" element={<HowToMeasure />} />
          <Route path="/about" element={<About />} />
          <Route path="/request-quote" element={<RequestQuote />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}
