let a = [];
for (i = 1; i<101; i++) {
    a.push(i);
}

let b3 = a.filter(e => e%3 == 0);
let b5 = a.filter(e => e%5 == 0);

console.log(b5);