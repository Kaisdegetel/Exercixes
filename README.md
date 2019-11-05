1)

- initialiser le module http avec lequel on crée notre serveur node.
- initialiser l'url et le port
- creation du serveur en spécifiant le type du header et le res retourné ("hello world")
- ecouter le port du serveur, une fois il est lancé, il va générer un msg hello world dans le console

2) 

- installer express-generator globalement  npm install express-generator -g
- initialiser un projet esj avec la commande express --esj
- Créer le msg hello world dans index.js du dossier views 

3)

- initialiser un projet esj avec la commande express --esj
- Télécharger et ajouter une image dans le dossier public/images 
- Importer une image avec son chemin absolu src="/images/node.png"

4)

- Créer un serveur express toujours avec la commande express --esj
- Créer les pages : index pour afficher un lien vers une formulaire, formulaire pour afficher la formulaire et result pour afficher le text saisi
- Créer 3 routes:
        - "/" home page index
        - "/formulaire" (get) pour naviger vers la page formulaire
        - "/formulaire" (post) pour envoyer le text saisi vers la page result
- Créer deux middleware pour réduire une chaine vers 32 charactères et pour supprimer les tags HTML
- Pour ce dernier j'ai utilisé une librairie externe striptags (npm i --save striptags) voir le lien https://www.npmjs.com/package/striptags



3) le formulaire pointe sur POST /formulaire

4) réaliser une page POST /formulaire qui affiche les informations du text area.

5) Il faut réaliser deux middleware pour la validation des entrées

6) un middleware "trunk32"  qui réduit à 32 ma chaine qui tu vas recevoir dans req.body.<leNomDuTextArea>

7) un middleware "noHTML" qui va supprimer les codes HTML du textArea

