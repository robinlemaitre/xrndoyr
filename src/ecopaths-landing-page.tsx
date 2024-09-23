import React, { useEffect, useState } from 'react';
import { ArrowRight, BarChart2, Users, FileText, Clock, Target, Cpu, Linkedin } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom'; 
import Navigation from './Navigation'; // Importez le composant Navigation
import Contact from './Contact';

// URLs des images
const urlLogo = `${process.env.PUBLIC_URL}/image/Ecopaths_logo.png`;
const urlPartenaire1 = `${process.env.PUBLIC_URL}/image/Logo_IncubAlliance.png`;
const urlPartenaire2 = `${process.env.PUBLIC_URL}/image/Logo_FT_Paris-Saclay_Blanc-257x300.png`;
const urlPartenaire3 = `${process.env.PUBLIC_URL}/image/logo_microsoft_for_startups.png`;
const urlPartenaire4 = `${process.env.PUBLIC_URL}/image/SQYCUB.jpeg`;
const urlPartenaire5 = `${process.env.PUBLIC_URL}/image/Spring_50.png`;
const urlImageDroite = `${process.env.PUBLIC_URL}/image/dashboard.png`; // Image correcte
// URLs des images
const urlEcoinvent = `${process.env.PUBLIC_URL}/image/ecoinvent-Logo-no-tagline.png`;
const urlArticle1 = `${process.env.PUBLIC_URL}/image/Spring_50.png`;
const urlArticle2 = `${process.env.PUBLIC_URL}/image/CSRD.png`;
const urlArticle3 = `${process.env.PUBLIC_URL}/image/caddie.jpg`;


// URLs de redirection des partenaires
const linkPartenaire1 = "https://www.incuballiance.fr/";
const linkPartenaire2 = "https://lafrenchtech-paris-saclay.fr/";
const linkPartenaire3 = "https://www.microsoft.com/en-us/startups";
const linkPartenaire4 = "https://www.saint-quentin-en-yvelines.fr/sqycub/";
const linkPartenaire5 = "https://paris-saclay-spring.com/spring50";

// URL de redirection LinkedIn
const linkLinkedIn = "https://www.linkedin.com/company/93853240/";

const EcopathsLanding: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="bg-[#073763] shadow-md fixed w-full z-20"> {/* Augmenté le z-index */}
        <Navigation />
      </header>

      <main>
        <section className="relative h-screen flex items-center overflow-hidden pt-24 bg-[#E0F7FA]">
          <div className="relative z-10 text-left text-black w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                La puissance de l'intelligence artificielle au service de votre transition écologique et climatique.
              </h1>
              <p className="text-lg md:text-xl mb-8 text-black">
                Ecopaths utilise l'intelligence artificielle pour rendre possible la réalisation d'analyses du cycle de vie à très large échelle.
              </p>
              <HashLink smooth to="/#contact" className="bg-[#073763] text-white px-6 md:px-8 py-3 md:py-4 text-lg hover:bg-blue-800 transition duration-300 inline-flex items-center">
                En savoir plus
                <ArrowRight className="ml-2" />
              </HashLink>
            </div>
            <div className="flex justify-center md:justify-end mt-6 md:mt-0">
              <img src={urlImageDroite} alt="Illustration" className="object-contain max-h-[400px] md:max-h-[500px]" /> {/* Taille de l'image augmentée */}
            </div>
          </div>
        </section>

        <section id="solution" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">Features.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <Cpu className="mb-4 text-[#073763]" size={48} />
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-black">ACV automatisée.</h3>
                <p className="text-black">Automatisez la génération d'analyses du cycle de vie (ACV) à grande échelle, pour vos produits achetés et vendus grâce à nos algorithmes dédiés.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <Target className="mb-4 text-[#073763]" size={48} />
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-black">Précision accrue.</h3>
                <p className="text-black">Réduction des erreurs humaines, comblement intelligent des données manquantes et explicitation claire des hypothèses.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <BarChart2 className="mb-4 text-[#073763]" size={48} />
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-black">Insights actionnables.</h3>
                <p className="text-black">Suivez les KPI qui guideront votre stratégie : Priorisation de la collecte de données, analyse par scénario pour réduire les émissions de CO2, coûts associés...</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <Users className="mb-4 text-[#073763]" size={48} />
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-black">Libérez vos équipes.</h3>
                <p className="text-black">Automatisation de la collecte et du traitement des données, permettant à vos équipes de se concentrer sur l'analyse stratégique et les actions concrètes.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <FileText className="mb-4 text-[#073763]" size={48} />
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-black">Reporting automatisé.</h3>
                <p className="text-black">Générez facilement des rapports pour vos produits et des rapports d'analyse par scénario, facilitant la communication avec vos parties prenantes internes et externes.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <Clock className="mb-4 text-[#073763]" size={48} />
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-black">Gain de temps.</h3>
                <p className="text-black">Réduisez jusqu'à 90% le temps consacré à la mesure d'impact environnemental, accélérant votre transition écologique et votre conformité réglementaire.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">La fiabilité d'Ecoinvent.</h2>
            <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 rounded-lg shadow-lg p-8">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img src={urlEcoinvent} alt="Logo Ecoinvent" className="mx-auto h-24 object-contain" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-lg md:text-2xl font-semibold mb-4 text-black">La base de données ICV la plus reconnue et mondialement utilisée.</h3>
                <ul className="text-black list-disc list-inside space-y-2">
                  <li>Plus de 18,000 ensembles de données ICV</li>
                  <li>Couvrant une large gamme de secteurs industriels</li>
                  <li>Données régionalisées pour une précision accrue</li>
                  <li>Mises à jour régulières pour refléter les dernières avancées</li>
                  <li>Conforme aux normes ISO 14040/14044</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="blog" className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">Blog.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                <img src={urlArticle1} alt="Article 1" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-black">Ecopaths, Lauréat de la catégorie CleanTech du concours d'innovation de Paris Saclay, Spring 50</h3>
                  <p className="text-black mb-4">Ecopaths a été récompensé pour être l'une des startups les plus prometteuses de la deep tech de l'écosystème Paris Saclay.</p>
                  <Link to="/blogpost1" className="text-[#073763] hover:text-blue-800 inline-flex items-center transition duration-300">
                    Lire la suite
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                <img src={urlArticle2} alt="Article 2" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-black">L'automatisation de l'ACV : une réponse aux défis de la CSRD</h3>
                  <p className="text-black mb-4">Avec l'entrée en vigueur de la CSRD et des normes ESRS, l'ACV automatisée joue un rôle clé pour la conformité aux nouvelles exigences.</p>
                  <Link to="/blogpost2" className="text-[#073763] hover:text-blue-800 inline-flex items-center transition duration-300">
                    Lire la suite
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                <img src={urlArticle3} alt="Article 3" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-black">Révolutionner les achats durables avec l'ACV automatisée : Vers un ROI carbone optimisé et une meilleure gestion du Scope 3</h3>
                  <p className="text-black mb-4">Dans un monde où les enjeux environnementaux et sociaux sont de plus en plus pressants, les entreprises sont poussées à repenser leurs pratiques d'achat pour les aligner sur des critères de durabilité.</p>
                  <Link to="/blogpost3" className="text-[#073763] hover:text-blue-800 inline-flex items-center transition duration-300">
                    Lire la suite
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">À propos d'Ecopaths.</h2>
            <div className="max-w-3xl">
              <p className="text-lg md:text-xl mb-4 text-black">
                Ecopaths est une startup technologique innovante et engagée en faveur de l'environnement, dont l'objectif premier est d'accélérer la transition écologique des entreprises, en résolvant leurs défis grâce à la puissance des modèles de langage.
              </p>
              <p className="text-lg md:text-xl mb-4 text-black">
                Notre mission est de vous donner les outils pour prendre des décisions éclairées et agir concrètement en faveur de l'environnement.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-100">
          <div className="container mx-auto px-6 max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-left text-black">Contactez-nous.</h2>
            <Contact />
          </div>
        </section>
      </main>

      <footer className="bg-[#073763] py-8">
        <div className="container mx-auto px-6 flex flex-col justify-center items-center">
          <div className="flex space-x-8 mb-4">
            {[urlPartenaire1, urlPartenaire2, urlPartenaire3, urlPartenaire4, urlPartenaire5].map((url, index) => (
              <a key={index} href={eval(`linkPartenaire${index + 1}`)} target="_blank" rel="noopener noreferrer">
                <img src={url} alt={`Partenaire ${index + 1}`} className="h-20 object-contain" />
              </a>
            ))} 
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

export default EcopathsLanding;
