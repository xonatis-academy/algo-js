/**
 * Intervertit la hauteur et la largeur d'un block
 */
function sous_graphe_echange(block) {
    let e = 0;
    e = block.largeur;
    block.largeur = block.hauteur;
    block.hauteur = e;
}










let block1 = {
    hauteur: 23,
    largeur: 43
};
let block2 = {
    hauteur: 45,
    largeur: 62
}

// CODE : intervertir hauteur et largeur, dans chacun des 2 blocks

sous_graphe_echange(block1)
sous_graphe_echange(block2)

console.log(block1);
console.log(block2);