import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
// import MgmPage from './pages/MgmPage/MgmPage';
// import PolicyPage from './pages/PolicyPage/PolicyPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/mgm" element={<MgmPage />} />
        <Route path="/policy" element={<PolicyPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

