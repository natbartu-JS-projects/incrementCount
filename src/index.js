let countEl = document.getElementById("count-el");
let saveBtn = document.getElementById("save-btn");
let saveEl = document.getElementById("save-el");

let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  let saveNumber = +count + " - ";
  saveEl.textContent += saveNumber;
}
