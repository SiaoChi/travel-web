import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
// import MgmPage from './pages/MgmPage/MgmPage';
// import PolicyPage from './pages/PolicyPage/PolicyPage';

function App() {
  const basename = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production' ? '/' : '/travel-web';
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/mgm" element={<MgmPage />} />
        <Route path="/policy" element={<PolicyPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

