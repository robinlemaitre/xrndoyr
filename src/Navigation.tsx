import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

// Assurez-vous que cette URL est correcte pour votre logo
const urlLogo = `${process.env.PUBLIC_URL}/image/Ecopaths_logo.png`;

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Si on n'est pas sur la page d'accueil, on laisse le Link gérer la navigation
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    }
  };

  const handleNavigation = (section: string) => {
    if (location.pathname === '/xrndyor') {
      // Si on est déjà sur la page principale, on fait défiler
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Sinon, on navigue vers la page principale avec l'ancre
      navigate(`/xrndyor#${section}`);
    }
  };

  return (
    <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" onClick={handleLogoClick}>
          <img src={urlLogo} alt="Ecopaths Logo" className="h-10 mr-4" />
        </Link>
      </div>
      <div className="space-x-4">
        <HashLink smooth to="/#solution" className="text-white hover:text-gray-200 transition duration-300">Solution</HashLink>
        <HashLink smooth to="/#blog" className="text-white hover:text-gray-200 transition duration-300">Blog</HashLink>
        <HashLink smooth to="/#about" className="text-white hover:text-gray-200 transition duration-300">À propos</HashLink>
        <HashLink smooth to="/#contact" className="bg-white text-[#073763] px-4 py-2 hover:bg-gray-200 transition duration-300">Contactez-nous</HashLink>
      </div>
    </nav>
  );
};

export default Navigation;