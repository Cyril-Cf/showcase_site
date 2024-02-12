/// CONSTRUCTION VARIABLES :
// Créer un tableau vide d'objet IMG avec src, hauteur et largeur
// Créer un second tableau vide d'objet IMG pour les images détectée dans le dossier /img

/// EXPLORER DOSSIER IMG :
// Lister les images présentes dans le dossiers img :
// Parcourir le dossier img et ajouter dans le second tableau pour chaque img AVIF et webp
// Detection si extension autre que AVIF webp et SVG pour warning

/// CONSTRUCTION LOGIQUE DOM :
// Chopper tous les fichiers HTML à la racine et juste à la racine (pas dans dossiers enfants)
// Si ca bloque, créer des fichiers HTML temporaires dans un dossier tmp et les virer

// Pour chaque enfant, construire un DOM virtuel, exemple :
// Dans Dockerfile
// npm install jsdom image-size

// const { JSDOM } = require('jsdom');
// const fs = require('fs');
// const imageSize = require('image-size');
// const html = fs.readFileSync('exemple.html', 'utf8'); // Charger le fichier HTML
// const dom = new JSDOM(html);
// const document = dom.window.document;

// // Fonction pour récupérer les dimensions réelles des images
// function getImageDimensions(imageSrc) {
//     const imagePath = 'chemin/vers/le/dossier/' + imageSrc; // Adapter le chemin selon votre configuration
//     try {
//         const dimensions = imageSize(imagePath);
//         return dimensions;
//     } catch (error) {
//         console.error(`Erreur lors de la récupération des dimensions de l'image ${imageSrc}: ${error}`);
//         return null;
//     }
// }

// // Parcourir toutes les balises img dans le document et afficher leurs dimensions réelles
// const images = document.querySelectorAll('img');
// images.forEach(img => {
//     const src = img.getAttribute('src');
//     const dimensions = getImageDimensions(src);
//     if (dimensions) {
//         console.log(`Image source: ${src}, Width: ${dimensions.width}, Height: ${dimensions.height}`);
//     }
// });

// Dans chaque DOM, faire un query selector pour les tag img et récupérer les hauteur
// et largeur utilisées
// Ajouter cet img au premier tableau avec largeur et hauteur exploitées dans le DOM

/// LOGIQUE DE RESIZING :
// Itérer sur 1er tableau, si valeur présente dans second tableau alors
// Retirer valeur du second tableau
// Calcul du resizing optimal
// Resizing optimal avec écrasement du fichier initial ou conservier old renommé
// Enfin afficher le tableau 2 si celui-ci non vide (liste d'images non utilisées)
// Proposer effacer images non utilisées
