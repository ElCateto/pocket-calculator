var numberOfNumbers = 0
var numArr = [];
var numArrPos = 0;
var enableDec = true;
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

function plusOrminus(){
     if (numArr[0]){
        numArr[numArrPos] = (numArr[numArrPos] * (-1)).toString();
        display();
    }
}

function percent(){
    if (numArr[0]){
        numArr[numArrPos] = (numArr[numArrPos] / (100)).toString();
        display();
    }
}
function dot(){

}
