const arr = []
const n = (Math.floor(Math.random() * 11)) + 10;
for(let i=0; i<n ; i++){
    arr.push(Math.floor(Math.random() * 91) + 10)
}

const button1 = document.querySelector('.button-1');
const button2 = document.querySelector('.button-2');
const input1 = document.querySelector('.input-1');
const input2 = document.querySelector('.input-2');
const span1 = document.querySelector('.span-1');
const increase = document.querySelector('.increase');
const diminish = document.querySelector('.diminish');


button1.addEventListener('click', function() {
    span1.innerText = arr.join(', ');
})

increase.addEventListener('click', function() {
    arr.sort()
    span1.innerText = arr.join(', ');
})

diminish.addEventListener('click', function() {
    arr.sort().reverse()
    span1.innerText = arr.join(', ');
})

button2.addEventListener('click', function() {
    arr.splice(input1.value, 0, input2.value).join(', ');
    span1.innerHTML = arr.join(', ');
})