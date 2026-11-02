import Home from "@/components/pages/Home";
import NotFound from "@/components/pages/NotFound";
import AboutPage from "@/components/pages/AboutPage";
import BooksPage from "@/components/pages/BooksPage";
import ContactPage from "@/components/pages/ContactPage";
import WorkPage from "@/components/pages/WorkPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work-with-jeannette" element={<WorkPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
