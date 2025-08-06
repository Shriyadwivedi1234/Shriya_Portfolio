import { Download, Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';
import { downloadCV, socialLinks, config } from '../utils/api';

export function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [isNameVisible, setIsNameVisible] = useState(false);
  const fullName = 'SHRIYA DWIVEDI';
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    let nameTimer: ReturnType<typeof setTimeout>;
    let typingTimer: ReturnType<typeof setTimeout>;
    let typingInterval: ReturnType<typeof setTimeout>;

    // Fade in "Hello, I'm" and background first
    nameTimer = setTimeout(() => {
      setIsNameVisible(true);
    }, 200);

    // Start typing animation after fade-in
    typingTimer = setTimeout(() => {
      let index = 0;
      const typeNext = () => {
        setDisplayText(fullName.slice(0, index));
        if (index < fullName.length) {
          index++;
          typingInterval = setTimeout(typeNext, 60 + Math.random() * 40); // randomize for natural effect
        } else {
          setIsTypingComplete(true);
        }
      };
      typeNext();
    }, 700);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(typingTimer);
      clearTimeout(typingInterval);
    };
  }, []);

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = async () => {
    setIsDownloading(true);
    try {
      await downloadCV();
    } catch (error) {
      console.error('Error downloading CV:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 
                      rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 
                      rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-purple-600/20 backdrop-blur-sm rounded-full 
                          border border-purple-500/30 text-sm text-purple-300">
              Computer Engineering Student
            </div>
            
            {/* Enhanced name animation with smooth professional effects */}
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              <div className={`text-white mb-3 text-xl lg:text-2xl font-medium transition-all duration-1000 ease-out ${
                isNameVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                Hello, I'm
              </div>
              <div className={`bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent min-h-[1.2em] transition-all duration-1000 ease-out ${
                isNameVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                {displayText}
                <span className={`${isTypingComplete ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>|</span>
              </div>
            </h1>
            
            <div className={`space-y-4 transition-all duration-1000 ease-out delay-500 ${
              isNameVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <p className="text-xl text-white/80 max-w-lg leading-relaxed">
                Passionate about UI & UX design, with expertise in Python development 
                and a growing focus on creating innovative solutions for real-world problems.
              </p>
              
              <div className="flex items-center space-x-4 text-white/70 text-base">
                <div className="flex items-center space-x-2">
                  <MapPin size={18} className="text-purple-400" />
                  <span>{config.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`flex flex-wrap gap-4 transition-all duration-1000 ease-out delay-700 ${
            isNameVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 rounded-full 
                       text-base font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 
                       flex items-center space-x-2 group"
            >
              <Mail size={20} />
              <span>Hire Me</span>
            </button>

            <button 
              onClick={() => window.open('https://drive.google.com/file/d/1YwCcvfRHqKV5lccwxjf4EhrvxZpOp1T5/view?usp=sharing', '_blank')}
              disabled={isDownloading}
              className="bg-purple-600/20 backdrop-blur-sm px-8 py-3 rounded-full text-base font-medium 
                       border border-purple-500/30 hover:bg-purple-600/30 transition-all duration-300 
                       flex items-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDownloading ? (
                <>
                  <div className="w-4 h-4 border-2 border-purple-300/30 border-t-purple-300 rounded-full animate-spin"></div>
                  <span>Downloading...</span>
                </>
              ) : (
                <>
                  <Download size={20} />
                  <span>Resume</span>
                </>
              )}
            </button>
          </div>

          <div className={`flex space-x-4 transition-all duration-1000 ease-out delay-900 ${
            isNameVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <a href={socialLinks.github} 
               className="p-3 bg-purple-600/20 backdrop-blur-sm rounded-full border border-purple-500/30 
                        hover:bg-purple-600/30 transition-all duration-300 group"
               target="_blank"
               rel="noopener noreferrer"
            >
              <Github size={20} className="group-hover:text-purple-300 transition-colors" />
            </a>
            <a href={socialLinks.linkedin} 
               className="p-3 bg-purple-600/20 backdrop-blur-sm rounded-full border border-purple-500/30 
                        hover:bg-purple-600/30 transition-all duration-300 group"
               target="_blank"
               rel="noopener noreferrer"
            >
              <Linkedin size={20} className="group-hover:text-purple-300 transition-colors" />
            </a>
          </div>
        </div>

        {/* Profile section with actual photo */}
        <div className="relative">
          <div className="relative w-full max-w-md mx-auto">
            {/* Tech-inspired decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-blue-500/20 
                          rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 
                          rounded-full blur-xl animate-pulse delay-700"></div>
            
            {/* Circuit-like lines */}
            <div className="absolute inset-0">
              <svg className="w-full h-full opacity-20" viewBox="0 0 400 400">
                <path d="M50 50 L350 50 L350 150 L200 150 L200 250 L350 250 L350 350" 
                      stroke="url(#gradient)" strokeWidth="2" fill="none" className="animate-pulse" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            {/* Main profile area with actual photo */}
            <div className={`relative bg-black/30 backdrop-blur-xl rounded-3xl p-6 border border-purple-500/20 
                          shadow-2xl shadow-purple-500/10 transition-all duration-1000 ease-out delay-300 ${
                            isNameVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                          }`}>
              <div className="relative flex items-center justify-center">
                
                {/* Profile Photo */}
                <div className="relative z-10 w-64 h-64 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl shadow-purple-500/20">
                  <img 
                  src="/profile-photo.jpg" 
                  alt="Shriya Dwivedi"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to emoji if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-8xl">👩‍💻</div>';
                  }}
                  />
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Shriya Parmanand Dwivedi
                </h3>
                <p className="text-white/70 mt-2 text-base">Computer Engineering Student</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce transition-all duration-1000 ease-out delay-1100 ${
        isNameVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}