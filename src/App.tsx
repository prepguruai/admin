import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GoogleLoginComponent from './pages/Login';
import AdminPage from './pages/Admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminPage />} />
        <Route path="/login" element={<GoogleLoginComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
