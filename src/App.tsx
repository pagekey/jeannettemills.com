import Home from "@/components/pages/Option1/Home";
import NotFound from "@/components/pages/NotFound";
import Options from "@/components/pages/Options";
import OptionTwo from "@/components/pages/Option2";
import OptionThree, { OptionThreePage } from "@/components/pages/Option3";
import {
  OptionTwoAbout,
  OptionTwoBooks,
  OptionTwoContact,
  OptionTwoWork,
} from "@/components/pages/Option2/Subpages";
import {
  AboutPage,
  BooksPage,
  ContactPage,
  WorkPage,
} from "@/components/pages/Option1/ContentPages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Options />} />
        <Route path="/option-1" element={<Home />} />
        <Route path="/option-2" element={<OptionTwo />} />
        <Route path="/option-3" element={<OptionThree />} />
        <Route path="/option-1/about" element={<AboutPage />} />
        <Route path="/option-1/work-with-jeannette" element={<WorkPage />} />
        <Route path="/option-1/books" element={<BooksPage />} />
        <Route path="/option-1/contact" element={<ContactPage />} />
        <Route path="/option-2/about" element={<OptionTwoAbout />} />
        <Route
          path="/option-2/work-with-jeannette"
          element={<OptionTwoWork />}
        />
        <Route path="/option-2/books" element={<OptionTwoBooks />} />
        <Route path="/option-2/contact" element={<OptionTwoContact />} />
        <Route
          path="/option-3/about"
          element={<OptionThreePage type="about" />}
        />
        <Route
          path="/option-3/work-with-jeannette"
          element={<OptionThreePage type="work" />}
        />
        <Route
          path="/option-3/books"
          element={<OptionThreePage type="books" />}
        />
        <Route
          path="/option-3/contact"
          element={<OptionThreePage type="contact" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
