let block1 = {
    hauteur: 23,
    largeur: 43
};
let block2 = {
    hauteur: 45,
    largeur: 62
}

// CODE : intervertir hauteur et largeur, dans chacun des 2 blocks
let e = 0;

e = block1.hauteur;
block1.hauteur = block1.largeur;
block1.largeur = e;

e = block2.hauteur;
block2.hauteur = block2.largeur;
block2.largeur = e;

console.log(block1);
console.log(block2);