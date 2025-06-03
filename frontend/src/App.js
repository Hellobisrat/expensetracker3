import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashbord.jsx";
import Home from "./pages/Home";
import Expenses from "./pages/Expenses";
import Reports from "./pages/Reports.jsx";
import Navbar from "./components/Navbar.jsx"

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
}

export default App;