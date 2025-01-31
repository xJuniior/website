import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Database } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <header 
        className="min-h-screen flex items-center justify-center text-white"
        style={{ backgroundImage: 'url("https://cdn.discordapp.com/attachments/797145149356507146/1334681470035562507/image.jpg?ex=679d6a7b&is=679c18fb&hm=4a3ca58703212a3763ad86427acf2e3cc02b54bcc8c6c6780c838f372ca31ebf&")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="container mx-auto px-6 py-24 text-center">
          <img 
            src="https://cdn.discordapp.com/attachments/797145149356507146/1334674864627257374/1BAF6D97-3EA6-4909-861A-C6CA980B34AA.jpg?ex=679d6454&is=679c12d4&hm=aea47d23b4d9823195d7fd199a98f27a49554fae1cfa215164e2cdb832e0b2d3&" 
            alt="Portrait" 
            className="w-32 h-32 rounded-full mx-auto mb-8 object-cover border-4 border-white"
          />
          <h1 className="text-5xl font-bold mb-4">Anis BOULAABA</h1>
          <p className="text-xl mb-8">Etudiant en BTS informatique option SIO à l'ISCB</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="p-2 hover:text-indigo-200 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="p-2 hover:text-indigo-200 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-2 hover:text-indigo-200 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </header>


      {/* À Propos */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Présentation</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
          Je suis Anis, un étudiant en BTS SIO (Services Informatiques aux Organisations) en alternance, actuellement en formation à l'ISCB Centre de formation à Tours. Mon parcours académique et professionnel m'a permis de développer un large éventail de compétences dans des domaines clés de l'informatique et des technologies émergentes. Passionné par la technologie, la programmation et l'innovation, j'ai toujours cherché à me perfectionner et à apprendre en autodidacte.
          </p>
        </div>
      </section>

      {/* Compétences */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Compétences</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Code className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Administration système et réseau</h3>
              <p className="text-gray-600">Windows Server, Windows, Linux</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Database className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Virtualisation et Cloud Computing</h3>
              <p className="text-gray-600">VMware, Hyper-V, VirtualBox</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Palette className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Front-end</h3>
              <p className="text-gray-600">HTML5, CSS3, JavaScript</p>
            </div>
          </div>
        </div>
      </section>

{/* Projets */}
<section className="py-20 px-6">
  <div className="container mx-auto max-w-4xl flex justify-center">
    <div className="grid md:grid-cols-2 gap-8">
      {[1,].map((project) => (
        <div key={project} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src={`https://cdn.discordapp.com/attachments/988537084216242207/988537128336109578/NS_1.png?ex=679d2ef1&is=679bdd71&hm=ce70644f0aecbc1acf4bea3f763ecf9e9d1407430f2369e48df81bae9baad89e&`}
            alt={`Projet ${project}`}
            className="w-full h-48 object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">NeoServ</h3>
            <p className="text-gray-600 mb-4">NeoServ est un projet que j'ai cofondé en 2019, qui propose des solutions d'hébergement Cloud personnalisées. Ce projet m’a permis de mettre en pratique mes compétences en administration système, virtualisation et gestion d’infrastructure Cloud. J'ai été impliqué dans le déploiement des serveurs, la gestion des environnements de virtualisation et la mise en place de solutions d'hébergement pour des clients.</p>
            <a href="https://neo-serv.fr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center text-indigo-600 hover:text-indigo-700">
              Voir le projet <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Stages */}
<section className="py-20 px-6">
  <div className="container mx-auto max-w-4xl">
    <h2 className="text-3xl font-bold text-center mb-12">Stages</h2>
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Sistéo Communications — Tours</h3>
        <p className="text-gray-600">Stage (Octobre - Décembre 2023 / Mai - Juin 2024 – 10 semaines)</p>
        <p className="text-gray-600"><strong>Mission :</strong> Participation à la gestion de projets informatiques et à la mise en œuvre de solutions de communication pour les clients de l'entreprise.</p>
        <p className="text-gray-600"><strong>Responsabilités :</strong></p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Assister dans la configuration et le déploiement des solutions de communication pour les entreprises.</li>
          <li>Aider à la gestion de la relation client en apportant un soutien technique.</li>
          <li>Réaliser des tests de performance et proposer des améliorations sur les systèmes en place.</li>
        </ul>
        <p className="text-gray-600"><strong>Compétences acquises :</strong> Gestion de projet, Communication client, Déploiement et support technique.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Audilab — Saint-Pierre-Des-Corps</h3>
        <p className="text-gray-600">Stage (Mai - Juin 2023 – 5 semaines)</p>
        <p className="text-gray-600"><strong>Mission :</strong> Contribuer à l'intégration et à l'administration des systèmes informatiques pour une meilleure gestion des appareils auditifs.</p>
        <p className="text-gray-600"><strong>Responsabilités :</strong></p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Configuration et maintenance des équipements et logiciels utilisés pour le diagnostic des troubles auditifs.</li>
          <li>Assistance à la gestion du système informatique interne, y compris la mise à jour et la gestion des bases de données.</li>
          <li>Formation des utilisateurs sur l’utilisation des outils informatiques.</li>
        </ul>
        <p className="text-gray-600"><strong>Compétences acquises :</strong> Administration des systèmes, Support technique, Formation des utilisateurs.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Cyrès — Tours</h3>
        <p className="text-gray-600">Stage (Janvier - Février 2023 – 4 semaines)</p>
        <p className="text-gray-600"><strong>Mission :</strong> Participer à l'administration de systèmes et réseaux au sein de l'entreprise, avec un focus sur la cybersécurité.</p>
        <p className="text-gray-600"><strong>Responsabilités :</strong></p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Gestion de la sécurité du réseau interne, en mettant en place des pare-feux et des outils de surveillance.</li>
          <li>Aide à la gestion des incidents et à la résolution des problèmes liés au système informatique.</li>
          <li>Réalisation de rapports d'audit sur les systèmes et réseaux utilisés.</li>
        </ul>
        <p className="text-gray-600"><strong>Compétences acquises :</strong> Cybersécurité, Administration réseau, Gestion des incidents.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">NeoServ — Paris</h3>
        <p className="text-gray-600">Bénévolat (Mars 2019 À Aujourd’hui)</p>
        <p className="text-gray-600"><strong>Mission :</strong> Développement et gestion d'un service d'hébergement cloud pour les utilisateurs.</p>
        <p className="text-gray-600"><strong>Responsabilités :</strong></p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Création et gestion des serveurs virtuels pour les clients.</li>
          <li>Assistance à la mise en place de solutions d’hébergement et à la résolution de problèmes techniques.</li>
          <li>Maintenance des serveurs et gestion des sauvegardes.</li>
        </ul>
        <p className="text-gray-600"><strong>Compétences acquises :</strong> Cloud computing, Gestion de serveurs, Développement web.</p>
      </div>
    </div>
  </div>
</section>

      {/* Parcours */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Parcours</h2>
          <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">2022 - Présent: BTS SIO à l'ISCB</h3>
          <p className="text-gray-600">Actuellement en formation en BTS Services Informatiques aux Organisations, option SISR (Solutions d'Infrastructure, Systèmes et Réseaux) à l'ISCB Centre de formation à Tours.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">2021 - 2024: Baccalauréat Profesionnel au Lycée Henri Becquerel</h3>
          <p className="text-gray-600">Formation en réseaux informatiques et systèmes communicants, avec une spécialisation en administration de réseaux, virtualisation et sécurité des systèmes. Ce Bac m’a permis de développer des compétences pratiques et techniques en informatique, me préparant ainsi à des études supérieures et une carrière dans ce domaine.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">2017 - 2020: Collège</h3>
          <p className="text-gray-600">Études secondaires au Collège Simone Veil, avec une spécialisation en sciences et technologies.</p>
        </div>
          </div>
        </div>
      </section>
      {/* Outils */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Outils</h2>
          <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VSCode" className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">VSCode</h3>
          <p className="text-gray-600">Éditeur de code source développé par Microsoft.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Git</h3>
          <p className="text-gray-600">Système de contrôle de version distribué.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Docker</h3>
          <p className="text-gray-600">Plateforme de conteneurisation.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" alt="Visual Studio" className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Visual Studio</h3>
          <p className="text-gray-600">Environnement de développement intégré (IDE) de Microsoft.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/HeidiSQL_logo_image.png" alt="HeidiSQL" className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">HeidiSQL</h3>
          <p className="text-gray-600">Outil de gestion de base de données pour MySQL, MariaDB, PostgreSQL et SQL Server.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="https://cdn.worldvectorlogo.com/logos/xampp.svg" alt="XAMPP" className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">XAMPP</h3>
          <p className="text-gray-600">Distribution Apache multi-plateforme contenant MariaDB, PHP et Perl.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Node.js</h3>
          <p className="text-gray-600">Environnement d'exécution JavaScript côté serveur.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="https://www.gitkraken.com/wp-content/uploads/2021/03/gitkraken-logo-dark-sq.png" alt="GitKraken" className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">GitKraken</h3>
          <p className="text-gray-600">Client Git intuitif et puissant.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">GitHub</h3>
          <p className="text-gray-600">Plateforme de développement collaboratif et de gestion de versions.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="https://images.sftcdn.net/images/t_app-icon-m/p/c3152528-96bf-11e6-b8e7-00163ed833e7/3833258526/winrar-64bit-3833258526.png" alt="WinRAR" className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">WinRAR</h3>
          <p className="text-gray-600">Outil de compression et de décompression de fichiers.</p>
        </div>
          </div>
        </div>
      </section>
      {/* Langages Informatiques */}

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Langages Informatiques</h2>
          <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg" alt="Lua" className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Lua</h3>
          <p className="text-gray-600">Utilisé pour le développement de serveurs de jeu.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">JavaScript</h3>
          <p className="text-gray-600">Langage de programmation que je suis en train d'acquérir.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">PHP</h3>
          <p className="text-gray-600">Utilisé pour le développement web côté serveur.</p>
        </div>
          </div>
        </div>
      </section>

            {/* Langues Parlées */}
            <section className="py-20 px-6 bg-gray-100">
              <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold text-center mb-12">Langues Parlées</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                    <img src="https://cdn-icons-png.flaticon.com/512/197/197560.png" alt="Français" className="w-8 h-8 mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Français</h3>
                      <p className="text-gray-600">Couramment</p>
                      <div className="flex">
                        <span className="text-yellow-500">★★★★★</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                    <img src="https://cdn-icons-png.flaticon.com/512/197/197374.png" alt="Anglais" className="w-8 h-8 mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Anglais</h3>
                      <p className="text-gray-600">Couramment</p>
                      <div className="flex">
                        <span className="text-yellow-500">★★★★★</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                    <img src="https://cdn-icons-png.flaticon.com/512/197/197593.png" alt="Espagnol" className="w-8 h-8 mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Espagnol</h3>
                      <p className="text-gray-600">Un petit peu</p>
                      <div className="flex">
                        <span className="text-yellow-500">★★☆☆☆</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                    <img src="https://cdn-icons-png.flaticon.com/512/197/197551.png" alt="Arabe" className="w-8 h-8 mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Arabe</h3>
                      <p className="text-gray-600">Couramment</p>
                      <div className="flex">
                        <span className="text-yellow-500">★★★★★</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                    <img src="https://cdn-icons-png.flaticon.com/512/197/197408.png" alt="Russe" className="w-8 h-8 mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Russe</h3>
                      <p className="text-gray-600">En train d'apprendre</p>
                      <div className="flex">
                        <span className="text-yellow-500">★☆☆☆☆</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

{/* Sport */}
<section className="py-20 px-6 bg-gray-50">
  <div className="container mx-auto max-w-4xl">
    <h2 className="text-3xl font-bold text-center mb-12">Sport</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <img 
          src="https://logo-marque.com/wp-content/uploads/2021/02/Ultimate-Fighting-Championship-Logo-2001-2015.png" 
          alt="MMA" 
          className="w-full h-48 object-cover mb-4 rounded"
        />
        <h3 className="text-xl font-semibold mb-2">MMA</h3>
        <p className="text-gray-600">
          Je pratique le MMA à très haut niveau et je m'entraîne jusqu'à 23h après mes cours. Je compte en faire ma profession.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <img 
          src="https://image.spreadshirtmedia.net/image-server/v1/products/T1459A839PA4459PT28D185589142W9833H10000/views/1,width=1200,height=630,appearanceId=839,backgroundColor=F2F2F2/logo-de-football-ballon-pour-logo-dassociation-sur-les-vetements-autocollant.jpg" 
          alt="Football à Chambray" 
          className="w-full h-48 object-cover mb-4 rounded"
        />
        <h3 className="text-xl font-semibold mb-2">Football</h3>
        <p className="text-gray-600">
          J'ai pratiqué le football à Chambray, où j'ai participé à plusieurs compétitions locales et développé mes compétences en travail d'équipe et en stratégie de jeu.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <img 
          src="https://static.vecteezy.com/system/resources/previews/028/596/157/non_2x/wrestling-logo-template-wrestling-sport-logo-template-vector.jpg" 
          alt="Lutte" 
          className="w-full h-48 object-cover mb-4 rounded"
        />
        <h3 className="text-xl font-semibold mb-2">Lutte</h3>
        <p className="text-gray-600">
          J'ai pratiqué la lutte étant petit, ce qui m'a permis de développer ma discipline, ma force physique et ma résilience.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <img 
          src="https://www.shutterstock.com/image-vector/kick-boxing-martial-arts-logo-260nw-747126367.jpg" 
          alt="Kickboxing" 
          className="w-full h-48 object-cover mb-4 rounded"
        />
        <h3 className="text-xl font-semibold mb-2">Kickboxing</h3>
        <p className="text-gray-600">
          Je pratique le kickboxing pour renforcer mes capacités debout.
        </p>
      </div>
      {/* Ajoutez d'autres activités sportives ici */}
    </div>
  </div>
</section>

      {/* Diplômes et Certifications */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Diplômes et Certifications</h2>
          <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">PIX</h3>
          <p className="text-gray-600">Certification de compétences numériques.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Certification CISCO Packet Tracer</h3>
          <p className="text-gray-600">Certification en simulation de réseaux avec CISCO Packet Tracer.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">BAC PRO option SN RISC mention AB</h3>
          <p className="text-gray-600">Baccalauréat Professionnel Systèmes Numériques option Réseaux Informatiques et Systèmes Communicants avec mention Assez Bien.</p>
        </div>
          </div>
        </div>
      </section>









            {/* Contact */}
            <section className="py-20 px-6 bg-gray-100">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-12">Contact</h2>
          <p className="text-lg text-gray-600 mb-8">
            Vous avez un projet intéressant ? N'hésitez pas à me contacter !
          </p>
          <a 
            href="mailto:anisboulaabapro@gmail.com"
            className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Mail className="mr-2" />
            Me Contacter
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600">
        <p>© 2025 Anis BOULAABA.</p>
      </footer>
    </div>
  );
}










export default App;