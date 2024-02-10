"use strict";

i18next.use(i18nextBrowserLanguageDetector).use(i18nextHttpBackend).init({
  debug: true,
  fallbackLng: "fr",
  backend: {
    loadPath: "locales/{{lng}}/{{ns}}.yaml",
    parse: window.jsyaml.load
  }
}, function (err, t) {
  console.log(t("head.title"));

  function changeContent(onHover, item) {
    var listItem = document.querySelector(".".concat(item));

    switch (item) {
      case "web":
        if (onHover) {
          listItem.innerHTML = "\n                  <div>\n                      <p>\n                      Rust est utilis\xE9 pour d\xE9velopper des applications web robustes,\n                      gr\xE2ce \xE0 son syst\xE8me de s\xE9curit\xE9 et ses performances\n                      exceptionnelles.\n                      </p>\n                      <a href=\"#\">En savoir plus</a>\n                  </div>\n                ";
        } else {
          listItem.innerHTML = "\n                  <h3>D\xE9veloppement Web</h3>\n                ";
        }

        break;

      case "ai":
        if (onHover) {
          listItem.innerHTML = "\n                    <div>\n                        <p>\n                          Les performances de Rust en font un choix prometteur pour le\n                          d\xE9veloppement d'applications d'intelligence artificielle.\n                        </p>\n                        <a href=\"#\">En savoir plus</a>\n                    </div>\n                  ";
        } else {
          listItem.innerHTML = "\n                    <h3>Intelligence Artificielle</h3>\n                  ";
        }

        break;

      case "video-games":
        if (onHover) {
          listItem.innerHTML = "\n                        <div>\n                            <p>\n                            Rust offre un contr\xF4le pr\xE9cis sur le mat\xE9riel, ce qui en fait un\n                            langage adapt\xE9 au d\xE9veloppement de jeux vid\xE9o haute performance.\n                            </p>\n                            <a href=\"#\">En savoir plus</a>\n                        </div>\n                      ";
        } else {
          listItem.innerHTML = "\n                        <h3>D\xE9veloppement de Jeux Vid\xE9o</h3>\n                      ";
        }

        break;

      case "embedded":
        if (onHover) {
          listItem.innerHTML = "\n                            <div>\n                                <p>\n                                Rust est utilis\xE9 pour le d\xE9veloppement de syst\xE8mes embarqu\xE9s,\n                    offrant \xE0 la fois la s\xE9curit\xE9 et la performance n\xE9cessaire.\n                                </p>\n                                <a href=\"#\">En savoir plus</a>\n                            </div>\n                          ";
        } else {
          listItem.innerHTML = "\n                            <h3>Syst\xE8mes Embarqu\xE9s</h3>\n                          ";
        }

        break;

      case "system":
        if (onHover) {
          listItem.innerHTML = "\n                                <div>\n                                    <p>\n                                    Rust excelle dans la programmation syst\xE8me, offrant une\n                    alternative s\xE9curis\xE9e aux langages traditionnels. Il a fait son\n                    arriv\xE9e dans le Kernel Linux.\n                                    </p>\n                                    <a href=\"#\">En savoir plus</a>\n                                </div>\n                              ";
        } else {
          listItem.innerHTML = "\n                                <h3>Programmation Syst\xE8me</h3>\n                              ";
        }

        break;
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".buttons li");
    var img = document.querySelector(".container .main .content img");
    var h3 = document.querySelector(".container .main .content h3");
    var paragraph = document.querySelector(".container .main .content p");
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        buttons.forEach(function (btn) {
          return btn.classList.remove("button-selected");
        });
        button.classList.add("button-selected");

        switch (button.id) {
          case "security":
            img.src = "img/security.avif";
            img.alt = "lock";
            h3.innerText = "Sécurité de la Mémoire";
            paragraph.innerText = "\n                Rust \xE9limine \xE9l\xE9gamment les erreurs de gestion de la m\xE9moire courantes, telles que les pointeurs nuls et les d\xE9bordements de tampon. Son syst\xE8me de possession et de gestion de la m\xE9moire garantit une s\xE9curit\xE9 sans sacrifier les performances, offrant ainsi une protection contre les failles de s\xE9curit\xE9 potentielles.\n                ";
            break;

          case "performance":
            img.src = "img/speed.avif";
            img.alt = "a speed meter";
            h3.innerText = "Performances Exceptionnelles";
            paragraph.innerText = "\n                Rust offre des performances exceptionnelles, rivalisant avec des langages bas niveau comme le C et le C++. Son mod\xE8le de propri\xE9t\xE9 unique et son syst\xE8me de gestion de la m\xE9moire permettent d'atteindre une efficacit\xE9 optimale sans compromis sur la s\xE9curit\xE9, en faisant un choix id\xE9al pour les applications n\xE9cessitant rapidit\xE9 et fiabilit\xE9.\n                ";
            break;

          case "concurrency":
            img.src = "img/race.avif";
            img.alt = "a race between athletes";
            h3.innerText = "Concurrence Sans Douleur";
            paragraph.innerText = "\n                La concurrence est native dans Rust gr\xE2ce \xE0 son mod\xE8le d'ex\xE9cution sans heurts. Rust int\xE8gre des fonctionnalit\xE9s de gestion de la concurrence facilitant le d\xE9veloppement d'applications parall\xE8les sans les tracas traditionnels. Cela rend Rust particuli\xE8rement adapt\xE9 aux syst\xE8mes distribu\xE9s et aux applications gourmandes en ressources.\n                ";
            break;

          case "abstraction":
            img.src = "img/helpful.avif";
            img.alt = "a small robot";
            h3.innerText = "Abstraction Sans Perte de Performance";
            paragraph.innerText = "\n                Contrairement \xE0 certains langages, Rust offre des abstractions puissantes tout en maintenant un contr\xF4le pr\xE9cis sur le mat\xE9riel. Les traits et les g\xE9n\xE9riques permettent de cr\xE9er du code g\xE9n\xE9rique sans sacrifier l'efficacit\xE9, offrant ainsi une flexibilit\xE9 sans compromettre la vitesse d'ex\xE9cution.\n                ";
            break;

          case "ecosystem":
            img.src = "img/group.avif";
            img.alt = "a group of hands";
            h3.innerText = "Écosystème Actif";
            paragraph.innerText = "\n                Rust b\xE9n\xE9ficie d'une communaut\xE9 dynamique et d'un \xE9cosyst\xE8me en pleine expansion. Les crate (biblioth\xE8ques) disponibles offrent une grande vari\xE9t\xE9 de fonctionnalit\xE9s, facilitant le d\xE9veloppement de solutions rapides et robustes. La documentation et la communaut\xE9 garantissent une exp\xE9rience de d\xE9veloppement fluide.\n                ";
            break;

          case "use-case":
            img.src = "img/mobile.avif";
            img.alt = "a mobile phone";
            h3.innerText = "De multiples cas d'usage";
            paragraph.innerText = "\n                Rust se distingue comme un langage de programmation moderne, offrant s\xE9curit\xE9, performances et facilit\xE9 de d\xE9veloppement. Que vous travailliez sur des projets syst\xE8me, des applications embarqu\xE9es ou des solutions cloud, Rust est un choix solide pour atteindre vos objectifs avec succ\xE8s.\n                ";
            break;
        }
      });
    });
    buttons[0].click();
  });
});