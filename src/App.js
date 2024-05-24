import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Completed from "./pages/Completed"
import Admin from "./pages/Admin"
import Pending from "./pages/Pending";
import { SidebarProvider } from './contexts/SidebarContext';
import PendingForm from './pages/PendingFormModal';
import Login from './pages/Login';

function App() {
  return (
    <SidebarProvider>
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pending" element={<Pending />} />
          <Route path="/pending/edit/:id" element={<PendingForm />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>
    </Router>
    </SidebarProvider>
  );
}

export default App;
