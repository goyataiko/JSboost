const input = document.getElementById('a');
const display = document.getElementById('display');

input.addEventListener('blur', function(msg){
    display.innerText = input.value;
})