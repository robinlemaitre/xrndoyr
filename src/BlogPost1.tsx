import React, { useEffect } from 'react';
import { Linkedin } from 'lucide-react';
import Navigation from './Navigation'; // Importe le composant Navigation

// URLs des images et des vidéos
const urlImage = `${process.env.PUBLIC_URL}/image/Spring_photo.jpeg`; // Remplacez par le nom correct du fichier d'image
const urlLogoIncubAlliance = "/image/Logo_IncubAlliance.png";
const urlLogoFrenchTech = "/image/Logo_FT_Paris-Saclay_Blanc-257x300.png";
const urlLogoMicrosoft = "/image/logo_microsoft_for_startups.png";
const urlLogoSQYCUB = "/image/SQYCUB.jpeg";
const urlLogoSpring50 = "/image/Spring_50.png";
const videoUrl1 = "https://tv78.com/4-start-up-saint-quentinoises-laureates-du-spring50-2024/"; // URL de la vidéo

// URL de redirection LinkedIn
const linkLinkedIn = "https://www.linkedin.com/company/93853240/";

const BlogPost1: React.FC = () => {
  useEffect(() => {
    // Faire défiler vers le haut au montage du composant
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="bg-[#073763] shadow-md fixed w-full z-10">
        <Navigation /> {/* Remplace le header par le composant Navigation */}
      </header>

      <main className="pt-24">
        <div className="container mx-auto px-6 py-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-left">Ecopaths honoré en tant que Lauréat du SPRING 50 dans la catégorie Cleantech</h1>
            <img src={urlImage} alt="Ecopaths au SPRING 50" className="w-full h-auto mb-6 max-w-md mx-auto" />

            <p className="mb-4">
              C’est avec une immense fierté que nous annonçons qu’Ecopaths a été nommé Lauréat du SPRING 50 dans la catégorie Cleantech ! Ce prix prestigieux nous place parmi les 50 startups les plus innovantes de l’écosystème Paris-Saclay, une région connue pour être l’un des principaux pôles d’innovation en Europe.
            </p>

            <h2 className="text-2xl font-bold mb-4">Une reconnaissance de notre innovation technologique</h2>
            <p className="mb-4">
              Le SPRING 50 est plus qu'une simple distinction ; c’est une véritable plateforme qui met en avant les technologies et les idées les plus prometteuses qui façonnent l’avenir. Être reconnu dans la catégorie Cleantech, qui rassemble les entreprises les plus engagées dans la transition écologique, est une validation majeure de notre vision et de notre technologie. Cela prouve que notre approche innovante, qui intègre l'intelligence artificielle pour mesurer et réduire l'empreinte carbone des entreprises, a le potentiel de transformer l’industrie et de contribuer de manière significative à un avenir plus durable.
            </p>

            <h2 className="text-2xl font-bold mb-4">Une visibilité accrue et des opportunités stratégiques</h2>
            <p className="mb-4">
              Cette victoire nous offre une visibilité exceptionnelle, non seulement au sein de l'écosystème Paris-Saclay, mais aussi à l’échelle nationale et internationale. En effet, être Lauréat du SPRING 50 nous ouvre de nouvelles perspectives, notamment en matière de collaborations stratégiques, de partenariats avec des leaders du secteur, et d’opportunités de financement. Cette reconnaissance nous permet de renforcer notre crédibilité auprès des investisseurs et des clients potentiels, en montrant que notre technologie est non seulement viable, mais aussi essentielle dans le cadre de la transition écologique.
            </p>

            <h2 className="text-2xl font-bold mb-4">Un encouragement pour poursuivre notre mission</h2>
            <p className="mb-4">
              Plus qu’une simple victoire, ce prix est une reconnaissance du travail acharné et de la détermination de toute l’équipe d’Ecopaths. Il valide notre engagement à utiliser l’intelligence artificielle pour répondre aux défis environnementaux les plus urgents, en particulier ceux liés aux émissions de gaz à effet de serre et à l’optimisation des chaînes d’approvisionnement. Nous croyons fermement que la technologie peut et doit être un moteur de changement, et ce prix nous encourage à continuer sur cette voie.
            </p>

            <h2 className="text-2xl font-bold mb-4">Un grand merci à nos partenaires</h2>
            <p className="mb-4">
              Nous tenons à exprimer notre profonde gratitude à la French Tech Paris-Saclay pour cette reconnaissance, ainsi qu'aux organisateurs du SPRING 50 pour leur soutien. Nous remercions également le SQYCUB, qui nous accompagne depuis nos débuts, et qui a toujours cru en notre potentiel. Cette victoire est autant la nôtre que la leur.
            </p>

            <h2 className="text-2xl font-bold mb-4">Et après ?</h2>
            <p className="mb-4">
              Ce n’est que le début. Avec cette reconnaissance en poche, nous sommes plus déterminés que jamais à poursuivre notre mission : aider les entreprises à mesurer et réduire leur impact environnemental de manière innovante et efficace. Nous sommes impatients de voir où cette aventure nous mènera, et de continuer à innover pour un avenir durable.
            </p>

            <div className="flex justify-center mb-16">
              <iframe width="560" height="315" src={videoUrl1} title="Video 1" className="w-full max-w-2xl" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#073763] py-8">
        <div className="container mx-auto px-6 flex flex-col justify-center items-center">
          <div className="flex space-x-8 mb-4">
            <a href="https://www.incuballiance.fr/" target="_blank" rel="noopener noreferrer">
              <img src={urlLogoIncubAlliance} alt="Partenaire 1" className="h-20 object-contain" />
            </a>
            <a href="https://lafrenchtech-paris-saclay.fr/" target="_blank" rel="noopener noreferrer">
              <img src={urlLogoFrenchTech} alt="Partenaire 2" className="h-20 object-contain" />
            </a>
            <a href="https://www.microsoft.com/en-us/startups" target="_blank" rel="noopener noreferrer">
              <img src={urlLogoMicrosoft} alt="Partenaire 3" className="h-20 object-contain" />
            </a>
            <a href="https://www.saint-quentin-en-yvelines.fr/sqycub/" target="_blank" rel="noopener noreferrer">
              <img src={urlLogoSQYCUB} alt="Partenaire 4" className="h-20 object-contain" />
            </a>
            <a href="https://paris-saclay-spring.com/spring50" target="_blank" rel="noopener noreferrer">
              <img src={urlLogoSpring50} alt="Partenaire 5" className="h-20 object-contain" />
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

export default BlogPost1;
