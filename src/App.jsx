
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import BusinessPage from './Pages/BusinessPage';
import SavingInvestment from './Pages/SavingInvestment';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/business" element={<BusinessPage />} />
      <Route path="/savings_and_investment" element={<SavingInvestment />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
