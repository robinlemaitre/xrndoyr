import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Linkedin } from 'lucide-react';

// URLs des images
const urlLogo = "/image/Ecopaths_logo.png";
const urlIllustration1 = "/image/sphere-with-trees.png"; // Remplacez par le nom correct du fichier d'illustration 1
const urlIllustration2 = "/image/illustration2.png"; // Remplacez par le nom correct du fichier d'illustration 2

// URL de redirection LinkedIn
const linkLinkedIn = "https://www.linkedin.com/company/93853240/";

const BlogPost2: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="bg-[#073763] shadow-md fixed w-full z-10">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img src={urlLogo} alt="Ecopaths Logo" className="h-10 mr-4" />
          </div>
          <div className="space-x-4">
            <HashLink smooth to="/#solution" className="text-white hover:text-gray-200 transition duration-300">Solution</HashLink>
            <HashLink smooth to="/#blog" className="text-white hover:text-gray-200 transition duration-300">Blog</HashLink>
            <HashLink smooth to="/#contact" className="text-white hover:text-gray-200 transition duration-300">Contactez-nous</HashLink>
            <HashLink smooth to="/#contact" className="bg-white text-[#073763] px-4 py-2 hover:bg-gray-200 transition duration-300">Contactez-nous</HashLink>
          </div>
        </nav>
      </header>

      <main className="pt-24">
        <div className="container mx-auto px-6 py-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-left">L'ACV automatisée : Le secret pour optimiser votre ROI carbone et décarboner efficacement</h1>
            <img src={urlIllustration1} alt="Illustration 1" className="w-full h-auto mb-6 max-w-md mx-auto" />

            <h2 className="text-2xl font-bold mb-4">Le Scope 3 : le défi majeur de votre stratégie carbone</h2>
            <p className="mb-4">
              Commençons par un rappel qui fait mal : pour la plupart des entreprises, le Scope 3 représente plus de 70% de leur empreinte carbone totale. C'est énorme, et c'est là que se cachent vos plus gros leviers de décarbonation.
            </p>

            <h2 className="text-2xl font-bold mb-4">L'ACV automatisée : votre boussole pour naviguer dans le Scope 3</h2>
            <p className="mb-4">
              L'ACV automatisée n'est pas qu'un outil de mesure sophistiqué. C'est votre allié stratégique pour décrypter votre Scope 3 et optimiser vos efforts de décarbonation. Voici comment :
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2"><strong>Cartographie précise de votre chaîne de valeur</strong> : Identifiez les points chauds d'émissions avec une précision chirurgicale.</li>
              <li className="mb-2"><strong>Simulation de scénarios</strong> : Testez l'impact de différentes décisions avant de les mettre en œuvre.</li>
              <li><strong>Évaluation des fournisseurs</strong> : Comparez l'empreinte carbone de vos fournisseurs sur des bases objectives.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Le ROI carbone : le nerf de la guerre</h2>
            <p className="mb-4">
              L'ACV automatisée vous permet de calculer un indicateur clé : le ROI carbone. C'est simple : pour chaque euro investi dans une initiative de décarbonation, combien de tonnes de CO2 économisez-vous ? 
            </p>
            <p className="mb-4">
              Imaginez que vous ayez 100 000 € à investir dans votre transition écologique. Où les dépenser ?
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2"><strong>Option A</strong> : Remplacer votre flotte de véhicules par des modèles électriques</li>
              <li className="mb-2"><strong>Option B</strong> : Optimiser votre chaîne logistique</li>
              <li><strong>Option C</strong> : Travailler avec vos fournisseurs pour réduire leurs émissions</li>
            </ul>
            <p className="mb-4">
              L'ACV automatisée vous dira précisément laquelle de ces options offre le meilleur ROI carbone. Vous pourriez découvrir, par exemple, que l'option C permet d'économiser 10 fois plus de CO2 par euro investi que l'option A.
            </p>

            <h2 className="text-2xl font-bold mb-4">Des indicateurs qui guident votre stratégie</h2>
            <p className="mb-4">
              Au-delà du ROI carbone, l'ACV automatisée vous fournit d'autres indicateurs cruciaux :
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2"><strong>Intensité carbone par unité de valeur</strong> : Mesurez vos émissions par euro de chiffre d'affaires. C'est le baromètre de votre découplage entre croissance et impact environnemental.</li>
              <li className="mb-2"><strong>Potentiel de réduction par poste</strong> : Identifiez les maillons de votre chaîne de valeur où vos efforts auront le plus d'impact.</li>
              <li><strong>Score de maturité fournisseurs</strong> : Évaluez et suivez la performance environnementale de vos fournisseurs.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Passer de la mesure à l'action</h2>
            <p className="mb-4">
              Avec ces données en main, vous pouvez enfin agir de manière ciblée et efficace :
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2"><strong>Redéfinissez votre politique d'achat</strong> : Intégrez le ROI carbone dans vos critères de sélection des fournisseurs.</li>
              <li className="mb-2"><strong>Optimisez votre logistique</strong> : Identifiez et corrigez les inefficacités de votre chaîne d'approvisionnement.</li>
              <li className="mb-2"><strong>Repensez vos produits</strong> : Utilisez l'ACV dès la phase de conception pour créer des produits réellement durables.</li>
              <li><strong>Engagez vos parties prenantes</strong> : Utilisez des données concrètes pour mobiliser fournisseurs, clients et investisseurs autour de votre stratégie de décarbonation.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Conclusion : l'ACV automatisée, votre atout pour une décarbonation intelligente</h2>
            <p className="mb-4">
              L'ACV automatisée n'est pas une solution miracle, mais c'est l'outil qui vous permettra de transformer votre approche de la décarbonation. En vous concentrant sur le ROI carbone, vous vous assurez que chaque action, chaque euro investi, contribue de manière optimale à la réduction de votre empreinte carbone.
            </p>
            <p className="mb-4">
              Dans un monde où les contraintes réglementaires se durcissent et où les attentes des parties prenantes ne cessent de croître, l'ACV automatisée vous donne les moyens de passer d'une approche intuitive à une stratégie basée sur des données concrètes.
            </p>
            <p className="mb-4">
              Alors, prêt à optimiser votre ROI carbone et à faire de votre Scope 3 un levier de performance plutôt qu'un fardeau ? L'avenir de votre entreprise, et celui de notre planète, en dépendent.
            </p>

            <img src={urlIllustration2} alt="Illustration 2" className="w-full h-auto mb-6 max-w-md mx-auto" />
          </div>
        </div>
      </main>

      <footer className="bg-[#073763] py-8">
        <div className="container mx-auto px-6 flex flex-col justify-center items-center">
          <div className="flex space-x-8 mb-4">
            <a href="https://www.incuballiance.fr/" target="_blank" rel="noopener noreferrer">
              <img src="/image/Logo_IncubAlliance.png" alt="Partenaire 1" className="h-20 object-contain" />
            </a>
            <a href="https://lafrenchtech-paris-saclay.fr/" target="_blank" rel="noopener noreferrer">
              <img src="/image/Logo_FT_Paris-Saclay_Blanc-257x300.png" alt="Partenaire 2" className="h-20 object-contain" />
            </a>
            <a href="https://www.microsoft.com/en-us/startups" target="_blank" rel="noopener noreferrer">
              <img src="/image/logo_microsoft_for_startups.png" alt="Partenaire 3" className="h-20 object-contain" />
            </a>
            <a href="https://www.saint-quentin-en-yvelines.fr/sqycub/" target="_blank" rel="noopener noreferrer">
              <img src="/image/SQYCUB.jpeg" alt="Partenaire 4" className="h-20 object-contain" />
            </a>
            <a href="https://paris-saclay-spring.com/spring50" target="_blank" rel="noopener noreferrer">
              <img src="/image/Spring_50.png" alt="Partenaire 5" className="h-20 object-contain" />
            </a>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href={linkLinkedIn} className="text-white hover:text-gray-300">
              <Linkedin size={24} />
            </a>
          </div>
          <p className="text-white mt-4">&copy; 2024 Ecopaths. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost2;
