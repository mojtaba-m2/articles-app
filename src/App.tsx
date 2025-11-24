import { Route, Routes } from "react-router-dom";
import Container from "./components/container/Container";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import InnerArticle from "./pages/article/InnerArticle";
import WritingArticle from "./pages/writingArticle/WritingArticle";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles/:id" element={<InnerArticle />} />
          <Route path="/newArt" element={<WritingArticle />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
