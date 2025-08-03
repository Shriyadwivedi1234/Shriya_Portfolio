import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CursorGlow } from './components/CursorGlow';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#050510] text-white relative overflow-hidden">
        {/* Much darker background gradients */}
        <div className="fixed inset-0 bg-gradient-to-br from-[#050510] via-[#0f0620] to-[#0a0f28] opacity-95" />
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent" />
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        
        <CursorGlow />
        
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            {/* Specific redirect for preview_page.html */}
            <Route path="/preview_page.html" element={<Navigate to="/" replace />} />
            {/* Catch-all route for any other unmatched paths */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}