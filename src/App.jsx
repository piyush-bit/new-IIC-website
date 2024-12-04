import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import { Members } from "./pages/Members";
import Achievements from "./components/Achievements/Achievements";
import Project from "./pages/Project";

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members/>} />
        <Route path="/achievements" element={<Achievements/>} />
        <Route path="/project" element={<Project/>} />
      </Routes>
    </Router>
  )
}

export default App

