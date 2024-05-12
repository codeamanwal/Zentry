import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Header from './components/Header';
import { Box } from '@mui/material';
import Mainbody from './components/Mainbody';
import Footer from './components/Footer';

function App() {
  return (
    <Router> 
      <Box>
        <Header />
        <Mainbody />
        <Footer />
      </Box>
    </Router> 
  );
}

export default App;
