let string = "";
var state = 0
let saved= "";
let operatorUsed = 0;
var decimalUsed = false;
var acUsed = false;

function zero() {
  if (state == 1) {
    string = "0"
  } else {
    if (operatorUsed == 1) {
      operatorUsed = 0;
      string = saved;
    }
    if (decimalUsed == 1) {
      decimalUsed = 0;
      string = saved;
    }
    string += "0"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}
function one() {
  if (state == 1) {
    string = "1"
  } else {
    if (operatorUsed == 1) {
      operatorUsed = 0;
      string = saved;
    }
    if (decimalUsed == 1) {
      decimalUsed = 0;
      string = saved;
    }
    string += "1"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}
function two() {
  if (state == 1) {
    string = "2"
  } else {
    if (operatorUsed == 1) {
      operatorUsed = 0;
      string = saved;
    }
    if (decimalUsed == 1) {
      decimalUsed = 0;
      string = saved;
    }
    string += "2"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}
function three() {
  if (state == 1) {
    string = "3"
  } else {
    if (operatorUsed == 1) {
      operatorUsed = 0;
      string = saved;
    }
    if (decimalUsed == 1) {
      decimalUsed = 0;
      string = saved;
    }
  string += "3"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}
function four() {
  if (state == 1) {
    string = "4"
  } else {
    if (operatorUsed == 1) {
      operatorUsed = 0;
      string = saved;
    }
    if (decimalUsed == 1) {
      decimalUsed = 0;
      string = saved;
    }
  string += "4"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}
function five() {
  if (state == 1) {
    string = "5"
  } else {
    if (operatorUsed == 1) {
      operatorUsed = 0;
      string = saved;
    }
     if (decimalUsed == 1) {
      decimalUsed = 0;
      string = saved;
    }
  string += "5"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}
function six() {
  if (state == 1) {
    string = "6"
  } else {
    if (operatorUsed == 1) {
    operatorUsed = 0;
    string = saved;
    }
    if (decimalUsed == 1) {
      decimalUsed = 0;
      string = saved;
    }
  string += "6"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}
function seven() {
  if (state == 1) {
    string = "7"
  } else {
    if (operatorUsed == 1) {
      operatorUsed = 0;
      string = saved;
    }
    if (decimalUsed == 1) {
      decimalUsed = 0;
      string = saved;
    }
  string += "7"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}
function eight() {
  if (state == 1) {
    string = "8"
  } else {
    if (operatorUsed == 1) {
      string = saved;
      operatorUsed = 0;
    }
    if (decimalUsed == 1) {
      decimalUsed = 0;
      string = saved;
    }
  string += "8"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}
function nine() {
  if (state == 1) {
    string = "9"
  } else {
    if (operatorUsed == 1) {
      string = saved;
      operatorUsed = 0;
    }
    if (decimalUsed == 1) {
      decimalUsed = 0;
      string = saved;
    }
    string += "9"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}
function ac() {
  var div = document.getElementById("output");
  div.innerHTML = 0;
  string = " "
  saved = ""
  operatorUsed = 0;
  acUsed = true;
  state = 0;
  if (acUsed == true) {
    decimalUsed = false;
    document.getElementById("deciButton").disabled = false;
  }
}
function multiply() {
  var div = document.getElementById("output");
  saved = string;
  saved += "*"
  div.innerHTML = saved;
  state = 0;
  operatorUsed = 1;
  if (operatorUsed == 1) {
    document.getElementById("deciButton").disabled = false;
  }
}
function add() {
  var div = document.getElementById("output");
  saved = string;
  saved += "+"
  div.innerHTML = saved;
  state = 0;
  operatorUsed = 1;
  if (operatorUsed == 1) {
    document.getElementById("deciButton").disabled = false;
  }
}
function divide() {
  var div = document.getElementById("output");
  saved = string;
  saved += "/"
  div.innerHTML = saved;
  state = 0;
  operatorUsed = 1;
  if (operatorUsed == 1) {
    document.getElementById("deciButton").disabled = false;
  }
}
function subtract() {
  var div = document.getElementById("output");
  saved = string;
  saved += "-"
  div.innerHTML = saved;
  state = 0;
  operatorUsed = 1;
  if (operatorUsed == 1) {
    document.getElementById("deciButton").disabled = false;
  }
}
function equals() {
  var div= document.getElementById("output");
  string = eval(string);
  div.innerHTML = Number(string).toLocaleString();
  if (Number(string) > 999999999 || Number(string) < 0.000000001) {
    div.innerHTML = Number(string).toExponential()
  }
  state = 1;
}
function negative() {
  var div= document.getElementById("output");
  string = Number(string) * (-1);
  div.innerHTML = string;
  state = 0;
}
function decimal() {
  if (decimalUsed == false){
    var div = document.getElementById("output");
    saved = string;
    saved += ".";
    div.innerHTML = saved;
    decimalUsed = true;
  }
  if (decimalUsed == true) {
    document.getElementById("deciButton").disabled = true;
  }
}
function percent() {
  var div = document.getElementById("output");
  string = Number(string) * (0.01)
  div.innerHTML = string;
  state = 0;
}
