import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PendingNew from "./pages/PendingNew";
import Dashboard from "./pages/Dashboard";
import Completed from "./pages/Completed"
import Admin from "./pages/Admin"
import { SidebarProvider } from './contexts/SidebarContext';

function App() {
  return (
    <SidebarProvider>
    <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pending" element={<PendingNew />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>
    </Router>
    </SidebarProvider>
  );
}

export default App;
