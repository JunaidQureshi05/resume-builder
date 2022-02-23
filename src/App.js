import Navbar from './compoenents/header/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import IntroPage from './pages/intropage/IntroPage';
import WorkExperience from './pages/workexperience/WorkExperience';
import SkillsPage from './pages/skillspage/SkillsPage';
import FinalPage from './pages/finalpage/FinalPage';

function App() {
  return (
    <div className="layout">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/final" element={<FinalPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
