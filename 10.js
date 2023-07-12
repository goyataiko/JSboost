apple = {
    name : "りんご",
    color : "red",
    weight : 10
};
orange = {
    name : "オレンジ",
    color : "orange",
    weight : 15
};
grape = {
    name : "ぶどう",
    color : "purple",
    weight : 5
};

let fruits = [apple, orange, grape];

var sum = 0;
fruits.forEach(e => {
    sum += e.weight;
});

console.log(sum);
