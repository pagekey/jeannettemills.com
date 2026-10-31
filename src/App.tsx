import Home from "@/components/pages/Home";
import NotFound from "@/components/pages/NotFound";
import Options from "@/components/pages/Options";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Options />} />
        <Route path="/option-1" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
