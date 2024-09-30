import logo from './logo.svg';
import './App.css';
import Navbar from './Component/navbar';
import AboutUs from "./Component/AboutUs";
import Home from "./Component/Home";
import Exam from "./Component/Exam";
import Contact from "./Component/Contact";
import Landing from "./Component/Landing";
import { BrowserRouter as Router,Route, Routes} from "react-router-dom";

function App() {
  return (
      <Router>
          <Routes>
              {/* Define your routes here */}
              <Route path="/" element={<><Navbar /><Landing/></>} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/home" element={<Home/>} />
              <Route path="/exam" element={<Exam/>} />
          </Routes>
      </Router>
  );
}

export default App;
