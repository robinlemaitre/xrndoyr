import React from 'react';
import { ArrowRight, BarChart2, Users, FileText, Clock, Target, Cpu, Linkedin } from 'lucide-react';

// URL de l'image et de la vidéo
const urlImage = "/image/spring_photo.jpeg"; // Remplacez par le nom correct du fichier pour l'image
const videoUrl1 = "https://tv78.com/4-start-up-saint-quentinoises-laureates-du-spring50-2024/"; // Remplacez par le lien correct de la vidéo

const BlogPost1: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="bg-[#073763] shadow-md fixed w-full z-10">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/image/Ecopaths_logo.png" alt="Ecopaths Logo" className="h-10 mr-4" />
          </div>
          <div className="space-x-4">
            <a href="/" className="text-white hover:text-gray-200 transition duration-300">Accueil</a>
            <a href="/#solution" className="text-white hover:text-gray-200 transition duration-300">Solution</a>
            <a href="/#blog" className="text-white hover:text-gray-200 transition duration-300">Blog</a>
            <a href="/#about" className="text-white hover:text-gray-200 transition duration-300">À propos</a>
            <a href="/#contact" className="bg-white text-[#073763] px-4 py-2 hover:bg-gray-200 transition duration-300">Contactez-nous</a>
          </div>
        </nav>
      </header>

      <main className="pt-24">
        <section className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold mb-8 text-black">Ecopaths Lauréat du SPRING 50 dans la catégorie Cleantech</h1>
          <img src={urlImage} alt="Ecopaths au SPRING 50" className="w-full max-w-lg h-auto mb-8 mx-auto rounded-lg shadow-md" />
          <div className="prose lg:prose-xl mx-auto">
            <p className="text-lg mb-4 text-black">
              Nous sommes super fiers d'annoncer qu'Ecopaths a été nommé Lauréat du SPRING 50 dans la catégorie cleantech ! 🎉 C'est un immense honneur pour nous de faire partie des 50 startups les plus innovantes de l'écosystème Paris-Saclay.
            </p>
            <p className="text-lg mb-4 text-black">
              Le SPRING 50, c'est un peu comme les Oscars de la tech pour nous. Chaque année, l'événement met en lumière les idées les plus brillantes et les startups les plus prometteuses. Et cette année, nous sommes parmi les 10 lauréats de notre catégorie : La cleantech ! 
            </p>
            <p className="text-lg mb-4 text-black">
              Alors, pourquoi cette victoire est-elle si cool ? D'abord, ça nous donne une énorme visibilité. C'est l'occasion de montrer à quel point notre technologie peut changer la donne en matière de durabilité et d'impact environnemental. Ensuite, ça nous ouvre des portes vers des investisseurs, des partenaires stratégiques et de nouveaux clients potentiels.
            </p>
            <p className="text-lg mb-4 text-black">
              Mais au-delà des opportunités business, c'est surtout une reconnaissance de notre travail acharné et de notre vision. Chez Ecopaths, on croit dur comme fer que l'intelligence artificielle à un role majeur à jouer dans la transition écologique. Et ce prix, c'est un signe de l'éco-système de l'innovation pour nous dire qu'on est sur la bonne voie.
            </p>
            <p className="text-lg mb-4 text-black">
              Un grand merci à toute l'équipe de la French Tech Paris-Saclay,et aux organisateurs du SPRING 50 pour cette belle reconnaissance. Merci également au SQYCUB qui nous fait confiance depuis le début ! On a hâte de continuer l'aventure et de voir où cela nous mènera !
            </p>
            <p className="text-lg mb-4 text-black">
              Vous voulez en savoir plus ? Regardez la vidéo ci-dessous :
            </p>
          </div>
          <div className="flex justify-center mb-16">
            <iframe width="560" height="315" src={videoUrl1} title="Video 1" className="w-full max-w-2xl" allowFullScreen></iframe>
          </div>
        </section>
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
            <a href="https://www.linkedin.com/company/93853240/" className="text-white hover:text-gray-300">
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
