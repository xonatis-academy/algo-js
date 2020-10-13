let o = {
    hauteur : 180,
    largeur : 150,
    nombre_de_porte : 5,
    couleur : 'bleu',
    materiaux : 'bois'
};

console.log(o);

// CODE : Incrémentez de 1 le nombre de portes
o.nombre_de_porte ++; // raccourci pour : o.nombre_de_porte += 1
// o.nombre_de_porte += 1 raccourci pour : o.nombre_de_porte = o.nombre_de_porte + 1

// DONC CES INSTRUCTIONS SONT EQUIVALENTES :
// o.nombre_de_porte = o.nombre_de_porte + 1
// o.nombre_de_porte += 1
// o.nombre_de_porte ++

console.log(o);

