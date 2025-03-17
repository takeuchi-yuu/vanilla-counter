let plusButton = document.getElementById("plus");
let minusButton = document.getElementById("minus");
let countElem = document.getElementById("count");
let count = 0;

document.addEventListener(plusButton, ()=>{
    count += 1;
    countElem.textContent = count;
});

document.addEventListener(minusButton, ()=>{
    count -= 1;
    countElem.textContent = count;
});