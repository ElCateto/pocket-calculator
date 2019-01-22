var numberOfNumbers = 0
var numArray = ['',''];
var numArrayPost = 0;

var enableDeci = true;
var clearDispl = false
function num(number) {
  if (numberOfNumbers < 9){
    if (clearDispl) {
    document.getElementById('displayScreen').value = document.getElementById('displayScreen').value + number;
    numberOfNumbers++
  }
}
}

function oper(symbol){
  document.getElementById('displayScreen').value = document.getElementById('displayScreen').value + symbol;
  numberOfNumbers = 0;
}
function equals(){
  let answer = eval(document.getElementById('displayScreen').value)
  document.getElementById('displayScreen').value = answer
  clearDispl = true;
}

function claer(){
    document.getElementById('displayScreen').value = 0
    clearDispl = true;
    numberOfNumbers = 0;
}

function plusOrminus(){
     if (numArray[0]){
        numArray[numArrayPost] = (numArray[numArrayPost] * (-1)).toString();
        display();
    }
}

function percent(){
    if (numArray[0]){
        numArray[numArrayPost] = (numArray[numArrayPost] / (100)).toString();
        display();
    }
}
function dot(){

}
