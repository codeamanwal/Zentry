import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Completed from "./pages/Completed"
import Admin from "./pages/Admin"
import Pending from "./pages/Pending";
import { SidebarProvider } from './contexts/SidebarContext';

function App() {
  return (
    <SidebarProvider>
    <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pending" element={<Pending />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>
    </Router>
    </SidebarProvider>
  );
}

export default App;
