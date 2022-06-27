let nameEl = document.querySelector('#results-name');
let scoreEl = document.querySelector('#results-score');
let name = localStorage.getItem("name");
let right = localStorage.getItem("score");



nameEl.textContent = "Name: " + name;
scoreEl.textContent = "Score: " + right;
