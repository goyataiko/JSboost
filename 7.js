fruits = { apple : "リンゴ",
banana : "バナナ",
grape : "ぶどう",
lemon : "レモン"}

let keys = Object.keys(fruits);
let values = Object.values(fruits);

console.log(keys[2]);

for (key of keys) {
    console.log(key);
}
for (value of values) {
    console.log(value);
}