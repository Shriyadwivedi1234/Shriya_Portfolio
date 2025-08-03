import { Home, User, Briefcase, Code, Mail } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = () => {
    if (location.pathname === '/') {
      // If already on home page, just scroll to contact
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on different page, navigate to home first then scroll to contact
      navigate('/');
      setTimeout(() => {
        const contactElement = document.getElementById('contact');
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', path: '/' },
    { id: 'about', icon: User, label: 'About', path: '/about' },
    { id: 'projects', icon: Briefcase, label: 'Projects', path: '/projects' },
    { id: 'skills', icon: Code, label: 'Skills', path: '/skills' },
  ];

  return (
    <>
      {/* Side Navigation Only */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40">
        <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-3 border border-purple-500/20 shadow-2xl shadow-purple-500/10">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`p-3 rounded-xl transition-all duration-300 group relative ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30'
                      : 'text-white/60 hover:text-white hover:bg-purple-600/20'
                  }`}
                  title={item.label}
                >
                  <IconComponent size={20} />
                  <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-black/90 
                                 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 
                                 transition-all duration-300 pointer-events-none whitespace-nowrap
                                 border border-purple-500/20 shadow-lg shadow-purple-500/20">
                    {item.label}
                  </span>
                </Link>
              );
            })}
            
            <button
              onClick={handleContactClick}
              className="p-3 rounded-xl transition-all duration-300 group relative
                       text-white/60 hover:text-white hover:bg-purple-600/20"
              title="Contact"
            >
              <Mail size={20} />
              <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-black/90 
                             text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 
                             transition-all duration-300 pointer-events-none whitespace-nowrap
                             border border-purple-500/20 shadow-lg shadow-purple-500/20">
                Contact
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}