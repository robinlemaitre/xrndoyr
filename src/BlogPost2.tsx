import React, { useEffect } from 'react';
import Navigation from './Navigation'; // Importe le composant Navigation
import { Linkedin } from 'lucide-react';

// URLs des images
const urlIllustration1 = "/image/csrd.png"; 

// URL de redirection LinkedIn
const linkLinkedIn = "https://www.linkedin.com/company/93853240/";

const BlogPost2: React.FC = () => {
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
            <h1 className="text-4xl font-bold mb-6 text-left">L'ACV automatisée : La clé pour relever les défis de la CSRD</h1>
            <img src={urlIllustration1} alt="Illustration 1" className="w-full h-auto mb-6 max-w-md mx-auto" />

            <h2 className="text-2xl font-bold mb-4">Le cadre exigeant des ESRS</h2>
            <p className="mb-4">
              La CSRD, en s'appuyant sur les ESRS, pousse les entreprises à fournir une vue d'ensemble exhaustive de leurs performances environnementales. Cela inclut une variété de données allant des émissions de gaz à effet de serre (GES) à la consommation d'eau, en passant par la gestion des déchets et l'impact sur la biodiversité. Le tableau ci-dessous illustre les principales catégories de reporting environnemental imposées par les ESRS :
            </p>

            <table className="w-full text-left mb-6 border-collapse rounded-lg overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-[#073763] text-white">
                  <th className="px-4 py-3 font-semibold">Impact</th>
                  <th className="px-4 py-3 font-semibold">Data</th>
                  <th className="px-4 py-3 font-semibold">Description</th>
                  <th className="px-4 py-3 font-semibold">ESRS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-gray-100">
                  <td className="border-t border-gray-300 px-4 py-4">Émissions de gaz à effet de serre (GES)</td>
                  <td className="border-t border-gray-300 px-4 py-4">- Scope 1 : Émissions directes<br/>- Scope 2 : Émissions indirectes liées à l'énergie<br/>- Scope 3 : Émissions indirectes de la chaîne de valeur</td>
                  <td className="border-t border-gray-300 px-4 py-4">L'entreprise doit fournir des données quantifiées sur ses émissions de GES, ventilées par scope (1, 2, 3), et expliquer les méthodologies utilisées pour les mesurer.</td>
                  <td className="border-t border-gray-300 px-4 py-4">ESRS E1 - Changement climatique</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="border-t border-gray-300 px-4 py-4">Objectifs de réduction des émissions</td>
                  <td className="border-t border-gray-300 px-4 py-4">- Objectifs quantitatifs de réduction des émissions de CO₂<br/>- Stratégies pour atteindre ces objectifs</td>
                  <td className="border-t border-gray-300 px-4 py-4">Les entreprises doivent indiquer leurs objectifs en matière de réduction des émissions de GES, fournir un calendrier et démontrer leur compatibilité avec des objectifs de neutralité carbone (ex: Accord de Paris).</td>
                  <td className="border-t border-gray-300 px-4 py-4">ESRS E1</td>
                </tr>
                <tr className="bg-white hover:bg-gray-100">
                  <td className="border-t border-gray-300 px-4 py-4">Émissions évitées</td>
                  <td className="border-t border-gray-300 px-4 py-4">- Émissions de GES évitées ou réduites grâce aux actions de l’entreprise</td>
                  <td className="border-t border-gray-300 px-4 py-4">Les entreprises doivent rendre compte des actions prises pour éviter ou réduire les émissions de GES et quantifier les résultats.</td>
                  <td className="border-t border-gray-300 px-4 py-4">ESRS E1</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="border-t border-gray-300 px-4 py-4">Consommation d’énergie</td>
                  <td className="border-t border-gray-300 px-4 py-4">- Quantité totale d’énergie consommée<br/>- Répartition entre énergie renouvelable et non renouvelable</td>
                  <td className="border-t border-gray-300 px-4 py-4">L’entreprise doit détailler sa consommation énergétique, en distinguant entre énergie renouvelable (éolien, solaire, etc.) et non renouvelable (pétrole, gaz, charbon).</td>
                  <td className="border-t border-gray-300 px-4 py-4">ESRS E1 / ESRS E3 - Utilisation des ressources</td>
                </tr>
                <tr className="bg-white hover:bg-gray-100">
                  <td className="border-t border-gray-300 px-4 py-4">Consommation d'eau</td>
                  <td className="border-t border-gray-300 px-4 py-4">- Quantité totale d'eau consommée<br/>- Gestion de l’eau (eau recyclée, économisée, etc.)</td>
                  <td className="border-t border-gray-300 px-4 py-4">Les entreprises doivent indiquer la quantité d'eau consommée à travers toutes leurs activités et stratégies d’optimisation (réduction, réutilisation).</td>
                  <td className="border-t border-gray-300 px-4 py-4">ESRS E3 - Utilisation des ressources</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="border-t border-gray-300 px-4 py-4">Déchets et gestion des déchets</td>
                  <td className="border-t border-gray-300 px-4 py-4">- Quantité totale de déchets produits<br/>- Pourcentage des déchets recyclés, réutilisés ou enfouis</td>
                  <td className="border-t border-gray-300 px-4 py-4">Les entreprises doivent quantifier la production de déchets et indiquer comment ces déchets sont gérés (recyclage, réutilisation, enfouissement).</td>
                  <td className="border-t border-gray-300 px-4 py-4">ESRS E3 - Économie circulaire</td>
                </tr>
                <tr className="bg-white hover:bg-gray-100">
                  <td className="border-t border-gray-300 px-4 py-4">Impact sur la biodiversité et les écosystèmes</td>
                  <td className="border-t border-gray-300 px-4 py-4">- Impact de l’activité sur la biodiversité<br/>- Actions pour réduire l'impact sur les écosystèmes</td>
                  <td className="border-t border-gray-300 px-4 py-4">Les entreprises doivent évaluer les risques et impacts liés à leur utilisation des terres, extraction de ressources et exploitation agricole sur la biodiversité et les écosystèmes.</td>
                  <td className="border-t border-gray-300 px-4 py-4">ESRS E4 - Biodiversité</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="border-t border-gray-300 px-4 py-4">Pollution (Air, eau, sols)</td>
                  <td className="border-t border-gray-300 px-4 py-4">- Émissions de polluants dans l’air, l’eau et les sols<br/>- Impact des activités industrielles sur l'environnement</td>
                  <td className="border-t border-gray-300 px-4 py-4">Les entreprises doivent rapporter des données sur leurs émissions de polluants, comme les COV, NOx, et autres composés toxiques, ainsi que les actions pour réduire ces émissions.</td>
                  <td className="border-t border-gray-300 px-4 py-4">ESRS E2 - Pollution</td>
                </tr>
                <tr className="bg-white hover:bg-gray-100">
                  <td className="border-t border-gray-300 px-4 py-4">Stratégie d’adaptation au changement climatique</td>
                  <td className="border-t border-gray-300 px-4 py-4">- Évaluation des risques climatiques pour l’entreprise<br/>- Stratégies pour s’adapter aux changements climatiques</td>
                  <td className="border-t border-gray-300 px-4 py-4">Les entreprises doivent identifier les risques liés au changement climatique (ex: hausse des températures, événements climatiques extrêmes) et décrire les mesures prises pour s'adapter à ces risques.</td>
                  <td className="border-t border-gray-300 px-4 py-4">ESRS E5 - Résilience climatique</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="border-t border-gray-300 px-4 py-4">Efforts pour l'économie circulaire</td>
                  <td className="border-t border-gray-300 px-4 py-4">- Stratégies de réduction des déchets<br/>- Utilisation de matériaux recyclés<br/>- Durabilité des produits</td>
                  <td className="border-t border-gray-300 px-4 py-4">Les entreprises doivent expliquer leurs pratiques d’économie circulaire, notamment l'utilisation de matériaux recyclés, la réduction des déchets et la durabilité des produits.</td>
                  <td className="border-t border-gray-300 px-4 py-4">ESRS E3 - Économie circulaire</td>
                </tr>
              </tbody>
            </table>

            <h2 className="text-2xl font-bold mb-4">Pourquoi l'ACV automatisée est essentielle</h2>
            <p className="mb-4">
              L'ACV fournit une méthode robuste pour capturer les impacts environnementaux sur l'ensemble du cycle de vie d'un produit, depuis l'extraction des matières premières jusqu'à la fin de vie. Avec l'automatisation, ces analyses deviennent plus rapides, plus cohérentes et moins sujettes à des erreurs humaines. Les entreprises peuvent ainsi s'assurer que leurs rapports aux ESRS sont non seulement complets mais aussi d'une précision inégalée.
            </p>

            <h2 className="text-2xl font-bold mb-4">Alignement avec la double matérialité</h2>
            <p className="mb-4">
              La CSRD introduit la notion de double matérialité, exigeant des entreprises qu'elles prennent en compte à la fois l'impact de leurs activités sur l'environnement et les risques financiers associés à ces impacts. L'ACV automatisée aide à répondre à ces deux exigences en fournissant une vision claire des conséquences environnementales (matérialité environnementale) et en évaluant les risques futurs potentiels pour l'entreprise (matérialité financière).
            </p>

            <h2 className="text-2xl font-bold mb-4">Faciliter la prise de décisions stratégiques</h2>
            <p className="mb-4">
              Grâce à l'ACV, les entreprises peuvent identifier les points de levier les plus importants pour réduire leur impact environnemental tout en maximisant leur performance économique. Cette approche permet de faire des choix éclairés qui tiennent compte des besoins de durabilité tout en assurant la résilience à long terme de l'entreprise.
            </p>

            <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
            <p className="mb-4">
              La CSRD et les ESRS représentent une nouvelle ère de responsabilité pour les entreprises, les obligeant à s'engager dans une transparence totale de leurs impacts environnementaux. L'automatisation de l'ACV n'est pas seulement un outil pour se conformer à ces régulations, c'est aussi un moteur de changement, permettant aux entreprises de naviguer dans cette complexité avec confiance. En intégrant une ACV automatisée, les entreprises peuvent non seulement respecter les normes, mais aussi se positionner comme des leaders dans le domaine de la durabilité.
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

export default BlogPost2;
