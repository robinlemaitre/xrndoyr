import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Linkedin } from 'lucide-react';

// URLs des images
const urlLogo = "/image/Ecopaths_logo.png";
const urlIllustration = "/image/caddie.jpg"; // Remplacez par le nom correct du fichier d'illustration

// URL de redirection LinkedIn
const linkLinkedIn = "https://www.linkedin.com/company/93853240/";

const BlogPost3: React.FC = () => {
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
            <h1 className="text-4xl font-bold mb-6 text-left">Révolutionner les achats durables avec l'ACV automatisée : Vers un ROI carbone optimisé et une meilleure gestion du Scope 3</h1>
            <img src={urlIllustration} alt="Illustration" className="w-full h-auto mb-6 max-w-md mx-auto" />

            <p className="mb-4">
              Dans un monde où les enjeux environnementaux et sociaux sont de plus en plus pressants, les entreprises sont poussées à repenser leurs pratiques d'achat pour les aligner sur des critères de durabilité. L'Analyse du Cycle de Vie (ACV) automatisée se révèle être un levier puissant pour transformer la fonction achat en une force motrice de la durabilité, tout en optimisant le retour sur investissement carbone (ROI carbone). Cet article explore comment l'ACV automatisée peut révolutionner le métier des achats en répondant aux exigences du Scope 3 et de la CSRD, tout en offrant des insights précieux pour des décisions plus responsables et stratégiques.
            </p>

            <h2 className="text-2xl font-bold mb-4">Les achats durables : Un enjeu crucial pour les entreprises</h2>
            <p className="mb-4">
              La fonction achat est au cœur des activités d'une entreprise, reliant directement la chaîne d'approvisionnement aux stratégies de durabilité. Les achats durables ne se limitent plus à choisir des fournisseurs éthiques ou des matériaux écologiques, mais englobent une approche holistique qui prend en compte l'impact environnemental, social, et économique de chaque décision d'achat. C'est ici que l'ACV automatisée entre en jeu, en offrant une vision complète et détaillée des impacts associés, notamment ceux liés au Scope 3.
            </p>

            <h2 className="text-2xl font-bold mb-4">L'ACV automatisée : Un outil pour des décisions éclairées et la gestion du Scope 3</h2>
            <p className="mb-4">
              Le Scope 3, qui inclut les émissions indirectes liées à la chaîne de valeur en amont et en aval, est souvent le plus difficile à quantifier et à gérer. Cependant, il représente une part significative de l'empreinte carbone totale d'une entreprise. L'ACV automatisée permet aux entreprises de mesurer avec précision ces émissions tout au long du cycle de vie des produits, depuis l'extraction des matières premières jusqu'à la fin de vie. Pour les acheteurs, cela signifie pouvoir comparer différents fournisseurs ou matériaux non seulement sur leur coût, mais aussi sur leur empreinte carbone, ce qui est crucial pour répondre aux exigences de la CSRD.
            </p>

            <h2 className="text-2xl font-bold mb-4">Optimisation du ROI carbone : Combien coûte le carbone évité ?</h2>
            <p className="mb-4">
              L'un des avantages les plus marquants de l'ACV automatisée dans la fonction achat est la capacité à calculer le ROI carbone. Ce concept innovant répond à une question clé : "Combien me coûte le carbone évité ?". Par exemple, si un achat plus cher, mais moins carboné, permet de réduire de manière significative les émissions de gaz à effet de serre, l'ACV automatisée permet de quantifier cette réduction et de la comparer au surcoût de l'achat. Cela permet d'identifier précisément quels postes d'achat, où un investissement plus important dans des produits moins carbonés, est le plus efficace. Ainsi, les entreprises peuvent optimiser leur budget tout en maximisant les bénéfices environnementaux, en s'assurant que chaque euro dépensé contribue de manière optimale à la réduction des émissions.
            </p>

            <h2 className="text-2xl font-bold mb-4">Cas d'usage : La chaîne d'approvisionnement responsable</h2>
            <p className="mb-4">
              Prenons l'exemple d'une entreprise qui souhaite réduire l'empreinte carbone de sa chaîne d'approvisionnement. Grâce à l'ACV automatisée, elle peut identifier les fournisseurs dont les pratiques de production sont les plus écologiques, calculer l'empreinte carbone associée à chaque produit acheté, et choisir des alternatives plus durables. Cela pourrait inclure l'adoption de matériaux recyclés, la réduction des déchets ou l'optimisation des processus de transport pour minimiser les émissions de GES. À terme, cela permet non seulement de réduire les coûts associés aux pénalités environnementales potentielles, mais aussi d'améliorer l'image de marque et de répondre aux attentes des parties prenantes.
            </p>

            <h2 className="text-2xl font-bold mb-4">Définir des objectifs ambitieux avec la CSRD</h2>
            <p className="mb-4">
              La CSRD exige des entreprises qu'elles définissent et atteignent des objectifs de réduction d'émissions de GES alignés sur les accords internationaux comme l'Accord de Paris. L'ACV automatisée joue un rôle clé dans cette démarche en fournissant des données précises sur les émissions actuelles, en particulier celles du Scope 3, et en aidant à modéliser différents scénarios de réduction. Les entreprises peuvent ainsi fixer des objectifs réalistes et ambitieux, basés sur une compréhension approfondie de leur empreinte carbone tout au long de la chaîne d'approvisionnement.
            </p>

            <h2 className="text-2xl font-bold mb-4">Conclusion : L'ACV automatisée, un levier pour les achats responsables et la conformité à la CSRD</h2>
            <p className="mb-4">
              En intégrant l'ACV automatisée dans leur stratégie d'achat, les entreprises peuvent transformer leur chaîne d'approvisionnement en un véritable vecteur de durabilité. Cela ne se limite pas à la réduction des coûts ou à l'amélioration de l'efficacité, mais comprend également la création de valeur à long terme à travers un ROI carbone optimisé et une meilleure gestion des émissions du Scope 3. Ainsi, l'ACV automatisée ne révolutionne pas seulement le métier des achats, mais redéfinit aussi la manière dont les entreprises abordent la durabilité dans un contexte global, tout en assurant leur conformité avec les normes de reporting de la CSRD.
            </p>
            <p className="mb-4">
              Article par Robin Lemaitre, Co-fondateur d'Ecopaths.
            </p>
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

export default BlogPost3;
