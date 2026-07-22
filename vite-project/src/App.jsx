import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
// import Courses from "./Courses";
 import Enrollnow from "./Enrollnow";

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/courses" element={<Courses />} /> */}
        <Route path="/enroll" element={<Enrollnow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;