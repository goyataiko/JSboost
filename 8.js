
function triangleAreaName(width, height) {
    let area = width*height/2; 
    return area; 
}

let triangleAreaNoname = function(width, height) {
    let area = width*height/2; 
    return area; 
}

// 関数の実行
console.log(triangleAreaName(10, 20));
console.log(triangleAreaNoname(10, 20));