import { Home, User, Briefcase, Code, Mail, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

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

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If on different page, navigate to home
      navigate('/');
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
      {/* Desktop Side Navigation */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-3 border border-purple-500/20 shadow-2xl shadow-purple-500/10">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.path;
              
              if (item.id === 'home') {
                return (
                  <button
                    key={item.id}
                    onClick={handleHomeClick}
                    className={`p-3 rounded-xl transition-all duration-300 group relative ${
                      isActive
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30'
                        : 'text-white/60 hover:text-white hover:bg-purple-600/20'
                    }`}
                    title={item.label}
                  >
                    <IconComponent size={20} />
                    <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-black/90 
                                   text-white px-3 py-2 rounded-lg text-base opacity-0 group-hover:opacity-100 
                                   transition-all duration-300 pointer-events-none whitespace-nowrap
                                   border border-purple-500/20 shadow-lg shadow-purple-500/20">
                      {item.label}
                    </span>
                  </button>
                );
              }
              
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
                                 text-white px-3 py-2 rounded-lg text-base opacity-0 group-hover:opacity-100 
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
                             text-white px-3 py-2 rounded-lg text-base opacity-0 group-hover:opacity-100 
                             transition-all duration-300 pointer-events-none whitespace-nowrap
                             border border-purple-500/20 shadow-lg shadow-purple-500/20">
                Contact
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="fixed top-6 right-6 z-50 lg:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-menu-button p-3 bg-black/40 backdrop-blur-xl rounded-xl border border-purple-500/20 
                   text-white hover:bg-purple-600/20 transition-all duration-300 shadow-lg shadow-purple-500/10"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Sidebar */}
        <div className={`mobile-menu absolute left-0 top-0 h-full w-80 bg-black/90 backdrop-blur-xl 
                       border-r border-purple-500/20 shadow-2xl shadow-purple-500/20 
                       transform transition-transform duration-300 ease-out ${
                         isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                       }`}>
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Navigation
              </h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-white/60 hover:text-white hover:bg-purple-600/20 rounded-lg transition-all duration-300"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === item.path;
                
                if (item.id === 'home') {
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        handleHomeClick();
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 w-full ${
                        isActive
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30'
                          : 'text-white/60 hover:text-white hover:bg-purple-600/20'
                      }`}
                    >
                      <IconComponent size={20} />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                }
                
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30'
                        : 'text-white/60 hover:text-white hover:bg-purple-600/20'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <IconComponent size={20} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
              
              <button
                onClick={() => {
                  handleContactClick();
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 w-full
                         text-white/60 hover:text-white hover:bg-purple-600/20"
              >
                <Mail size={20} />
                <span className="font-medium">Contact</span>
              </button>
            </div>

            {/* Profile Section */}
            <div className="mt-8 pt-8 border-t border-purple-500/20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div>
                  <h3 className="text-white font-medium">Shriya Dwivedi</h3>
                  <p className="text-white/60 text-base">Computer Engineering Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}