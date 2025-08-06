import { Heart, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t border-purple-500/20 bg-black/20 backdrop-blur-xl">
      <div className="w-full max-w-none mx-auto px-4 lg:pl-24 lg:pr-8 xl:pl-28 xl:pr-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Shriya Dwivedi
            </h3>
            <p className="text-white/70 leading-relaxed">
              Computer Engineering Student passionate about AI, Machine Learning, 
              and creating innovative solutions for real-world problems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <a href="/" className="text-white/70 hover:text-purple-300 transition-colors duration-300">
                Home
              </a>
              <a href="/about" className="text-white/70 hover:text-purple-300 transition-colors duration-300">
                About
              </a>
              <a href="/projects" className="text-white/70 hover:text-purple-300 transition-colors duration-300">
                Projects
              </a>
              <a href="/skills" className="text-white/70 hover:text-purple-300 transition-colors duration-300">
                Skills
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Contact Information</h4>
            <div className="space-y-3">
              <a href="mailto:shriyadwivedi29@gmail.com" 
                 className="flex items-center space-x-2 text-white/70 hover:text-purple-300 transition-colors">
                <Mail size={16} />
                <span>shriyadwivedi29@gmail.com</span>
              </a>
              <a href="tel:+918010245399" 
                 className="flex items-center space-x-2 text-white/70 hover:text-purple-300 transition-colors">
                <Phone size={16} />
                <span>+91 8010245399</span>
              </a>
              <div className="flex items-center space-x-2 text-white/70">
                <MapPin size={16} />
                <span>Ambernath, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 
                      border-t border-purple-500/20 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-white/70">
            <span>© {currentYear} Designed & Developed with</span>
            <Heart size={16} className="text-red-400" />
            <span>by Shriya Dwivedi</span>
          </div>

                      <div className="flex items-center space-x-6 text-base text-white/70">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 bg-purple-600/20 backdrop-blur-sm rounded-full border border-purple-500/30 
                     hover:bg-purple-600/30 transition-all duration-300 shadow-lg shadow-purple-500/10"
            title="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px 
                    bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </footer>
  );
}