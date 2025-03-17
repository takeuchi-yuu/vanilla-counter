let plusButton = document.querySelector("button.plus");
let minusButton = document.querySelector("button.minus");
let countElem = document.querySelector("span.count");
let count = 0;

plusButton.addEventListener("click", ()=>{
    count += 1;
    countElem.textContent = count;
});

minusButton.addEventListener("click", ()=>{
    count -= 1;
    countElem.textContent = count;
});