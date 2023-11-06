import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Studio from "./pages/Studio/Studio";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";

import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";

import LanguageProvider from "./utils/LanguageProvider/LanguageProvider";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App;
