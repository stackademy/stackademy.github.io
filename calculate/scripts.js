// jQuery


// Calculations

function set_result(result){
  r = document.getElementById("result");
  r.innerHTML = result;
  r.className += "noblink"; 
}

function multiply(){
  result = document.getElementById("value1").value * document.getElementById("value2").value;
  set_result(result)
}

function add(){
  result = document.getElementById("value1").value * 1 + document.getElementById("value2").value * 1;
  set_result(result)
}

function subtract(){
  result = document.getElementById("value1").value - document.getElementById("value2").value;
  set_result(result)
}

function divide(){
  result = document.getElementById("value1").value / document.getElementById("value2").value;
  set_result(result)
}

// Buttons

button = document.getElementById("mult")
button.addEventListener('click', multiply, false)

button = document.getElementById("plus")
button.addEventListener('click', add, false)

button = document.getElementById("min")
button.addEventListener('click', subtract, false)

button = document.getElementById("div")
button.addEventListener('click', divide, false)