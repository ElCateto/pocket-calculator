let string = "";
var state = 0
let saved= "";
let operatorUsed = 0;
var dotUsed = false;
var claerUsed = false;

function zero() {
  if (state == 1) {
    string = "0"
  } else {
    if (operatorUsed == 1) {
      operatorUsed = 0;
      string = saved;
    }
    if (dotUsed == 1) {
      dotUsed = 0;
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
    if (dotUsed == 1) {
      dotUsed = 0;
      string = saved;
    }
    string += "1"
  }
  var div = document.getElementById("displayScreen");
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
    if (dotUsed == 1) {
      dotUsed = 0;
      string = saved;
    }
    string += "2"
  }
  var div = document.getElementById("displayScreen");
  div.innerHTML = string;
}
function tree() {
  if (state == 1) {
    string = "3"
  } else {
    if (operatorUsed == 1) {
      operatorUsed = 0;
      string = saved;
    }
    if (dotUsed == 1) {
      dotUsed = 0;
      string = saved;
    }
  string += "3"
  }
  var div = document.getElementById("displayScreen");
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
    if (dotUsed == 1) {
      dotUsed = 0;
      string = saved;
    }
  string += "4"
  }
  var div = document.getElementById("displayScreen");
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
     if (dotUsed == 1) {
      dotUsed = 0;
      string = saved;
    }
  string += "5"
  }
  var div = document.getElementById("displayScreen");
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
    if (dotUsed == 1) {
      dotUsed = 0;
      string = saved;
    }
  string += "6"
  }
  var div = document.getElementById("displayScreen");
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
    if (dotUsed == 1) {
      dotUsed = 0;
      string = saved;
    }
  string += "7"
  }
  var div = document.getElementById("displayScreen");
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
    if (dotUsed == 1) {
      dotUsed = 0;
      string = saved;
    }
  string += "8"
  }
  var div = document.getElementById("displayScreen");
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
    if (dotUsed == 1) {
      dotUsed = 0;
      string = saved;
    }
    string += "9"
  }
  var div = document.getElementById("displayScreen");
  div.innerHTML = string;
}
function claer() {
  var div = document.getElementById("displayScreen");
  div.innerHTML = 0;
  string = " "
  saved = ""
  operatorUsed = 0;
  claerUsed = true;
  state = 0;
  if (claerUsed == true) {
    dotUsed = false;
    document.getElementById("deciButton").disabled = false;
  }
}
function multiply() {
  var div = document.getElementById("displayScreen");
  saved = string;
  saved += "*"
  div.innerHTML = saved;
  state = 0;
  operatorUsed = 1;
  if (operatorUsed == 1) {
    document.getElementById("deciButton").disabled = false;
  }
}
function plus() {
  var div = document.getElementById("displayScreen");
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
  var div = document.getElementById("diplaysScreen");
  saved = string;
  saved += "/"
  div.innerHTML = saved;
  state = 0;
  operatorUsed = 1;
  if (operatorUsed == 1) {
    document.getElementById("deciButton").disabled = false;
  }
}
function minus() {
  var div = document.getElementById("diplayScreen");
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
  var div= document.getElementById("displayScreen");
  string = eval(string);
  div.innerHTML = Number(string).toLocaleString();
  if (Number(string) > 999999999 || Number(string) < 0.000000001) {
    div.innerHTML = Number(string).toExponential()
  }
  state = 1;
}
function plusOrminus() {
  var div= document.getElementById("diplayScreen");
  string = Number(string) * (-1);
  div.innerHTML = string;
  state = 0;
}
function dot() {
  if (dotUsed == false){
    var div = document.getElementById("displayScreen");
    saved = string;
    saved += ".";
    div.innerHTML = saved;
    dotUsed = true;
  }
  if (dotUsed == true) {
    document.getElementById("deciButton").disabled = true;
  }
}
function percent() {
  var div = document.getElementById("displayScreen");
  string = Number(string) * (0.01)
  div.innerHTML = string;
  state = 0;
}
