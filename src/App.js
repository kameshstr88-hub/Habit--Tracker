import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HabitProvider } from "./context/HabitContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Completed from "./pages/Completed";
import About from "./pages/About";

function App() {
  return (
    <HabitProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </HabitProvider>
  );
}

export default App;