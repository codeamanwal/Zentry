import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Completed from "./pages/Completed"
import Admin from "./pages/Admin"
import Pending from "./pages/Pending";
import { SidebarProvider } from './contexts/SidebarContext';
import PendingForm from './pages/PendingForm';
import Login from './pages/Login';
import PendingNew from './pages/PendingNew'
import PendingFormNew from './pages/PendingFormNew'

function App() {
  return (
    <SidebarProvider>
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pending" element={<Pending />} />
          <Route path="/pending/edit/:settlementId" element={<PendingFormNew />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/pendingNew" element={<PendingNew />} />
        </Routes>
    </Router>
    </SidebarProvider>
  );
}

export default App;
