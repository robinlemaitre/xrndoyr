import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

// Assurez-vous que cette URL est correcte pour votre logo
const urlLogo = `${process.env.PUBLIC_URL}/image/Ecopaths_logo.png`;

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    }
  };

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (section: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${section}`);
    }
    setIsOpen(false); // Ferme le menu après la navigation
  };

  return (
    <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" onClick={handleLogoClick}>
          <img src={urlLogo} alt="Ecopaths Logo" className="h-10 mr-4" />
        </Link>
      </div>
      <div className="hidden md:flex space-x-4 items-center">
        <HashLink smooth to="/#solution" className="text-white hover:text-gray-200 transition duration-300">Solution</HashLink>
        <HashLink smooth to="/#blog" className="text-white hover:text-gray-200 transition duration-300">Blog</HashLink>
        <HashLink smooth to="/#about" className="text-white hover:text-gray-200 transition duration-300">À propos</HashLink>
        <HashLink smooth to="/#contact" className="bg-white text-[#073763] px-4 py-2 hover:bg-gray-200 transition duration-300">Contactez-nous</HashLink>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={handleToggleMenu} className="text-white focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div className={`absolute top-0 left-0 w-full bg-[#073763] z-20 transform ${isOpen ? "translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex justify-end p-4">
          <button onClick={handleToggleMenu} className="text-white focus:outline-none">
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <HashLink smooth to="/#solution" onClick={() => handleNavigation('solution')} className="text-white hover:text-gray-200 transition duration-300">Solution</HashLink>
          <HashLink smooth to="/#blog" onClick={() => handleNavigation('blog')} className="text-white hover:text-gray-200 transition duration-300">Blog</HashLink>
          <HashLink smooth to="/#about" onClick={() => handleNavigation('about')} className="text-white hover:text-gray-200 transition duration-300">À propos</HashLink>
          <HashLink smooth to="/#contact" onClick={() => handleNavigation('contact')} className="bg-white text-[#073763] px-4 py-2 hover:bg-gray-200 transition duration-300">Contactez-nous</HashLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
