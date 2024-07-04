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
import Create from "./pages/Create";
import ViewPendingForm from "./components/pending/ViewPendingForm";
import ViewCompletedForm from "./components/completed/ViewCompletedForm";

function App() {
  return (
    <SidebarProvider>
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create" element={<Create />} />
          <Route path="/pending" element={<Pending />} />
          <Route path="/pending1/edit/:settlementId" element={<PendingFormNew />} />
          <Route path="/pending/edit/:settlementId" element={<PendingForm />} />
          <Route path="/pending/view/:settlementId" element={<ViewPendingForm />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/completed/view/:settlementId" element={<ViewCompletedForm />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/pendingNew" element={<PendingNew />} />
        </Routes>
    </Router>
    </SidebarProvider>
  );
}

export default App;
