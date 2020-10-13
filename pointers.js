function swapNumbers(y) {
    let e = 0;
    e = y.element1;
    y.element1 = y.element2;
    y.element2 = e;
}

let q = 5;
let r = 3;

let dico = {
    element1 : q,
    element2 : r
}

swapNumbers(dico);

q = dico.element1;
r = dico.element2;

console.log(q);
console.log(r);