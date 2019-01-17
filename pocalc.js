var numberOfNumbers = 0
function num(number) {
  if (numberOfNumbers < 9){
    document.getElementById('displayScreen').value = document.getElementById('displayScreen').value + number;
    numberOfNumbers++
  }
}
function oper(symbol){
  document.getElementById('displayScreen').value = document.getElementById('displayScreen').value + symbol;
  numberOfNumbers = 0;
}
function equals(){
  let answer = eval(document.getElementById('displayScreen').value)
  document.getElementById('displayScreen').value = answer
}

function claer(){
    document.getElementById('displayScreen').value = 0
    numberOfNumbers = 0;
}

function fun() {
  var audio = document.getElementById("audio");
}
