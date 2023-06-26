import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Content from "./pages/Content";
import Resource from "./pages/Resource";
import Nav from "./components/Nav";



function App() {
  return (
    <>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/content" element={<Content />}/>
        <Route path="/resources" element={<Resource />}/>
      </Routes>
    </>
  );
}

export default App;
