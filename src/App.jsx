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
import Countdown from "./components/Countdown/Countdown";
import Loading from "./components/Loading/Loading";
import { useState ,useEffect } from "react";
import Ticket from "./components/Ticket/New_Ticket.jsx";

function App() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Simulate a loading delay
    }, 3000);
  }, []);

  return loading ?( <Loading /> ) : 
  (
  <Router>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/members" element={<Members/>} />
    <Route path="/achievements" element={<Achievements/>} />
    <Route path="/project" element={<Project/>} />
    <Route path="/countdown" element={<Countdown/>} />
    <Route path="/ticket" element={<Ticket />} />
    {/* <Route path="/newticket" element={<NewTicket />} /> */}
  </Routes>
</Router>)
};
  // return (
  //   // <Router>
  //   //   <Navbar/>
  //   //   <Routes>
  //   //     <Route path="/" element={<Home />} />
  //   //     <Route path="/members" element={<Members/>} />
  //   //     <Route path="/achievements" element={<Achievements/>} />
  //   //     <Route path="/project" element={<Project/>} />
  //   //     <Route path="/countdown" element={<Countdown/>} />
  //   //   </Routes>
  //   // </Router>
  // )


export default App

