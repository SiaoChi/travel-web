import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
// import MgmPage from './pages/MgmPage/MgmPage';
// import PolicyPage from './pages/PolicyPage/PolicyPage';
import Menu from "./components/Menu/Menu";
import Footer from './components/Footer/Footer';

function App() {
  const isGithubPages = window.location.hostname === 'siaochi.github.io';
  const basename = isGithubPages ? '/travel-web' : '/'; 
  return (
    <Router basename={basename}>
      <Menu />  
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/mgm" element={<MgmPage />} />
        <Route path="/policy" element={<PolicyPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

