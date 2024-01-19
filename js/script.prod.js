"use strict";function changeContent(e,n){var t=document.querySelector(".".concat(n));switch(n){case"web":t.innerHTML=e?'\n            <div>\n                <p>\n                Rust est utilisé pour développer des applications web robustes,\n                grâce à son système de sécurité et ses performances\n                exceptionnelles.\n                </p>\n                <a href="#">En savoir plus</a>\n            </div>\n          ':"\n            <h3>Développement Web</h3>\n          ";break;case"ai":t.innerHTML=e?"\n              <div>\n                  <p>\n                    Les performances de Rust en font un choix prometteur pour le\n                    développement d'applications d'intelligence artificielle.\n                  </p>\n                  <a href=\"#\">En savoir plus</a>\n              </div>\n            ":"\n              <h3>Intelligence Artificielle</h3>\n            ";break;case"video-games":t.innerHTML=e?'\n                  <div>\n                      <p>\n                      Rust offre un contrôle précis sur le matériel, ce qui en fait un\n                      langage adapté au développement de jeux vidéo haute performance.\n                      </p>\n                      <a href="#">En savoir plus</a>\n                  </div>\n                ':"\n                  <h3>Développement de Jeux Vidéo</h3>\n                ";break;case"embedded":t.innerHTML=e?'\n                      <div>\n                          <p>\n                          Rust est utilisé pour le développement de systèmes embarqués,\n              offrant à la fois la sécurité et la performance nécessaire.\n                          </p>\n                          <a href="#">En savoir plus</a>\n                      </div>\n                    ':"\n                      <h3>Systèmes Embarqués</h3>\n                    ";break;case"system":t.innerHTML=e?'\n                          <div>\n                              <p>\n                              Rust excelle dans la programmation système, offrant une\n              alternative sécurisée aux langages traditionnels. Il a fait son\n              arrivée dans le Kernel Linux.\n                              </p>\n                              <a href="#">En savoir plus</a>\n                          </div>\n                        ':"\n                          <h3>Programmation Système</h3>\n                        "}}document.addEventListener("DOMContentLoaded",function(){var n=document.querySelectorAll(".buttons li"),t=document.querySelector(".container .main .content img"),s=document.querySelector(".container .main .content h3"),a=document.querySelector(".container .main .content p");n.forEach(function(e){e.addEventListener("click",function(){switch(n.forEach(function(e){return e.classList.remove("button-selected")}),e.classList.add("button-selected"),e.id){case"security":t.src="img/security.avif",t.alt="lock",s.innerText="Sécurité de la Mémoire",a.innerText="\n          Rust élimine élégamment les erreurs de gestion de la mémoire courantes, telles que les pointeurs nuls et les débordements de tampon. Son système de possession et de gestion de la mémoire garantit une sécurité sans sacrifier les performances, offrant ainsi une protection contre les failles de sécurité potentielles.\n          ";break;case"performance":t.src="img/speed.avif",t.alt="a speed meter",s.innerText="Performances Exceptionnelles",a.innerText="\n          Rust offre des performances exceptionnelles, rivalisant avec des langages bas niveau comme le C et le C++. Son modèle de propriété unique et son système de gestion de la mémoire permettent d'atteindre une efficacité optimale sans compromis sur la sécurité, en faisant un choix idéal pour les applications nécessitant rapidité et fiabilité.\n          ";break;case"concurrency":t.src="img/race.avif",t.alt="a race between athletes",s.innerText="Concurrence Sans Douleur",a.innerText="\n          La concurrence est native dans Rust grâce à son modèle d'exécution sans heurts. Rust intègre des fonctionnalités de gestion de la concurrence facilitant le développement d'applications parallèles sans les tracas traditionnels. Cela rend Rust particulièrement adapté aux systèmes distribués et aux applications gourmandes en ressources.\n          ";break;case"abstraction":t.src="img/helpful.avif",t.alt="a small robot",s.innerText="Abstraction Sans Perte de Performance",a.innerText="\n          Contrairement à certains langages, Rust offre des abstractions puissantes tout en maintenant un contrôle précis sur le matériel. Les traits et les génériques permettent de créer du code générique sans sacrifier l'efficacité, offrant ainsi une flexibilité sans compromettre la vitesse d'exécution.\n          ";break;case"ecosystem":t.src="img/group.avif",t.alt="a group of hands",s.innerText="Écosystème Actif",a.innerText="\n          Rust bénéficie d'une communauté dynamique et d'un écosystème en pleine expansion. Les crate (bibliothèques) disponibles offrent une grande variété de fonctionnalités, facilitant le développement de solutions rapides et robustes. La documentation et la communauté garantissent une expérience de développement fluide.\n          ";break;case"use-case":t.src="img/mobile.avif",t.alt="a mobile phone",s.innerText="De multiples cas d'usage",a.innerText="\n          Rust se distingue comme un langage de programmation moderne, offrant sécurité, performances et facilité de développement. Que vous travailliez sur des projets système, des applications embarquées ou des solutions cloud, Rust est un choix solide pour atteindre vos objectifs avec succès.\n          "}})}),n[0].click()});