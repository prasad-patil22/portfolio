import React, { useState, useEffect } from 'react';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <img src="/profile.jpg" alt="Prasad Patil" />
          <h1>Prasad Patil</h1>
        </div>
        
        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="/" onClick={() => scrollToSection('home')}>Home</a>
          <a href="/about" onClick={() => scrollToSection('about')}>AboutMe</a>
          <a href="/projects" onClick={() => scrollToSection('projects')}>Projects</a>
          <a href="/experience" onClick={() => scrollToSection('experience')}>Experience</a>
          <a href="/tech" onClick={() => scrollToSection('skills')}>Skills</a>
          <a href="/contact" onClick={() => scrollToSection('contact')}>Contact</a>
        </nav>
        
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <style>
        {`
          .navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 0;
  z-index: 1000;
  background: rgba(18, 18, 18, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.navbar.scrolled {
  padding: 15px 0;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.logo img {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
  border: 2px solid #bb86fc;
}

.logo h1 {
  font-size: 24px;
  font-weight: 700;
  background: linear-gradient(45deg, #bb86fc, #03dac6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-links {
  display: flex;
  list-style: none;
}

.nav-links a {
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  margin-left: 40px;
  text-decoration: none;
  transition: color 0.3s ease;
  position: relative;
  cursor: pointer;
}

.nav-links a:hover, 
.nav-links a.active {
  color: #bb86fc;
}

.nav-links a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 0;
  background: linear-gradient(45deg, #bb86fc, #03dac6);
  transition: width 0.3s ease;
}

.nav-links a:hover::after, 
.nav-links a.active::after {
  width: 100%;
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 1001;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: #ffffff;
  margin-bottom: 5px;
  border-radius: 5px;
  transform-origin: 5px 0px;
  transition: all 0.3s ease;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(0px, 0px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(-5px, 1px);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }
  
  .nav-links {
    position: fixed;
    top: 70px;
    left: -100%;
    width: 100%;
    height: calc(100vh - 70px);
    background: #121212;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: left 0.3s ease;
    z-index: 1000;
  }
  
  .nav-links.active {
    left: 0;
  }
  
  .nav-links a {
    margin: 20px 0;
    font-size: 20px;
  }
}
        `}
      </style>
    </header>
  );
};

export default Navbar;