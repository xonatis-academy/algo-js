let l = [180, 190, 165, 123, 234];

// CODE : filtrer dans l, les élements supérieurs ou égaux à 190 et les mettre dans k
let k = [];
for (const a of l) {
    if (a >= 190) {
        k.push(a);
    }
}

console.log(k);