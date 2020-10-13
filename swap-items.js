let o = {
    hauteur : 180,
    largeur : 150,
    nombre_de_porte : 5,
    couleur : 'bois',
    materiaux : 'bleu'
};

console.log(o);

// CODE : intervertir couleur et materiaux de o
let e = '';

e = o.couleur;
o.couleur = o.materiaux;
o.materiaux = e;

console.log(o);
