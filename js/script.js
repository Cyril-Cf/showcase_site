i18next
  .use(i18nextBrowserLanguageDetector)
  .use(i18nextHttpBackend)
  .init(
    {
      debug: true,
      fallbackLng: "fr",
      backend: {
        loadPath: "locales/{{lng}}/{{ns}}.yaml",
        parse: function (data) {
          if (window.jsyaml && typeof window.jsyaml.load === "function") {
            return window.jsyaml.load(data);
          } else {
            console.error(
              "Erreur: La fonction de chargement YAML est introuvable."
            );
            return {};
          }
        },
      },
    },
    function (err, t) {
      console.log(t("head.title"));
      function changeContent(onHover, item) {
        var listItem = document.querySelector(`.${item}`);
        switch (item) {
          case "web":
            if (onHover) {
              listItem.innerHTML = `
                  <div>
                      <p>
                      Rust est utilisé pour développer des applications web robustes,
                      grâce à son système de sécurité et ses performances
                      exceptionnelles.
                      </p>
                      <a href="#">En savoir plus</a>
                  </div>
                `;
            } else {
              listItem.innerHTML = `
                  <h3>Développement Web</h3>
                `;
            }
            break;
          case "ai":
            if (onHover) {
              listItem.innerHTML = `
                    <div>
                        <p>
                          Les performances de Rust en font un choix prometteur pour le
                          développement d'applications d'intelligence artificielle.
                        </p>
                        <a href="#">En savoir plus</a>
                    </div>
                  `;
            } else {
              listItem.innerHTML = `
                    <h3>Intelligence Artificielle</h3>
                  `;
            }
            break;
          case "video-games":
            if (onHover) {
              listItem.innerHTML = `
                        <div>
                            <p>
                            Rust offre un contrôle précis sur le matériel, ce qui en fait un
                            langage adapté au développement de jeux vidéo haute performance.
                            </p>
                            <a href="#">En savoir plus</a>
                        </div>
                      `;
            } else {
              listItem.innerHTML = `
                        <h3>Développement de Jeux Vidéo</h3>
                      `;
            }
            break;
          case "embedded":
            if (onHover) {
              listItem.innerHTML = `
                            <div>
                                <p>
                                Rust est utilisé pour le développement de systèmes embarqués,
                    offrant à la fois la sécurité et la performance nécessaire.
                                </p>
                                <a href="#">En savoir plus</a>
                            </div>
                          `;
            } else {
              listItem.innerHTML = `
                            <h3>Systèmes Embarqués</h3>
                          `;
            }
            break;
          case "system":
            if (onHover) {
              listItem.innerHTML = `
                                <div>
                                    <p>
                                    Rust excelle dans la programmation système, offrant une
                    alternative sécurisée aux langages traditionnels. Il a fait son
                    arrivée dans le Kernel Linux.
                                    </p>
                                    <a href="#">En savoir plus</a>
                                </div>
                              `;
            } else {
              listItem.innerHTML = `
                                <h3>Programmation Système</h3>
                              `;
            }
            break;
        }
      }

      document.addEventListener("DOMContentLoaded", function () {
        const buttons = document.querySelectorAll(".buttons li");
        const img = document.querySelector(".container .main .content img");
        const h3 = document.querySelector(".container .main .content h3");
        const paragraph = document.querySelector(".container .main .content p");

        buttons.forEach((button) => {
          button.addEventListener("click", () => {
            buttons.forEach((btn) => btn.classList.remove("button-selected"));
            button.classList.add("button-selected");

            switch (button.id) {
              case "security":
                img.src = "img/security.avif";
                img.alt = "lock";
                h3.innerText = "Sécurité de la Mémoire";
                paragraph.innerText = `
                Rust élimine élégamment les erreurs de gestion de la mémoire courantes, telles que les pointeurs nuls et les débordements de tampon. Son système de possession et de gestion de la mémoire garantit une sécurité sans sacrifier les performances, offrant ainsi une protection contre les failles de sécurité potentielles.
                `;
                break;
              case "performance":
                img.src = "img/speed.avif";
                img.alt = "a speed meter";
                h3.innerText = "Performances Exceptionnelles";
                paragraph.innerText = `
                Rust offre des performances exceptionnelles, rivalisant avec des langages bas niveau comme le C et le C++. Son modèle de propriété unique et son système de gestion de la mémoire permettent d'atteindre une efficacité optimale sans compromis sur la sécurité, en faisant un choix idéal pour les applications nécessitant rapidité et fiabilité.
                `;
                break;
              case "concurrency":
                img.src = "img/race.avif";
                img.alt = "a race between athletes";
                h3.innerText = "Concurrence Sans Douleur";
                paragraph.innerText = `
                La concurrence est native dans Rust grâce à son modèle d'exécution sans heurts. Rust intègre des fonctionnalités de gestion de la concurrence facilitant le développement d'applications parallèles sans les tracas traditionnels. Cela rend Rust particulièrement adapté aux systèmes distribués et aux applications gourmandes en ressources.
                `;
                break;
              case "abstraction":
                img.src = "img/helpful.avif";
                img.alt = "a small robot";
                h3.innerText = "Abstraction Sans Perte de Performance";
                paragraph.innerText = `
                Contrairement à certains langages, Rust offre des abstractions puissantes tout en maintenant un contrôle précis sur le matériel. Les traits et les génériques permettent de créer du code générique sans sacrifier l'efficacité, offrant ainsi une flexibilité sans compromettre la vitesse d'exécution.
                `;
                break;
              case "ecosystem":
                img.src = "img/group.avif";
                img.alt = "a group of hands";
                h3.innerText = "Écosystème Actif";
                paragraph.innerText = `
                Rust bénéficie d'une communauté dynamique et d'un écosystème en pleine expansion. Les crate (bibliothèques) disponibles offrent une grande variété de fonctionnalités, facilitant le développement de solutions rapides et robustes. La documentation et la communauté garantissent une expérience de développement fluide.
                `;
                break;
              case "use-case":
                img.src = "img/mobile.avif";
                img.alt = "a mobile phone";
                h3.innerText = "De multiples cas d'usage";
                paragraph.innerText = `
                Rust se distingue comme un langage de programmation moderne, offrant sécurité, performances et facilité de développement. Que vous travailliez sur des projets système, des applications embarquées ou des solutions cloud, Rust est un choix solide pour atteindre vos objectifs avec succès.
                `;
                break;
            }
          });
        });
        buttons[0].click();
      });
    }
  );
