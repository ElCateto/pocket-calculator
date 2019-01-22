var numArr = [];
var operArr = [];
var numArrPos = 0;
var operArrPos = 0;
var numOfNums = 0;
var numOrOper = true; 
var locNums = [];
var enableDec = true;
var numAfterEql = false;
var totalCharacs = 0;
function num(num){
    if (numAfterEql){
        clearOut();
        numAfterEql = false;
        numArrPos = 1;
    }
    if (totalCharacs < 27){
        if (numOfNums < 9){
            OperArrPos++;
            if (numOrOper){
                locNums.push(num);
                numOfNums++; 
                totalCharacs++;
            }
            let intArrNum = locNums.join('');
            numArr.push(''); numArr.push('');
            numArr[numArrPos] = (intArrNum.toString());
        display();     
        }
    }
}

function oper(oper) {
    if (totalCharacs < 27){
        if (numArr[0]){
            OperArr[OperArrPos] = (Oper.toString());
            OperArr.push('');
            numArrPos++;
            locNums = []
            numOfNums = 0;
            totalCharacs++;
            enableDec = true;
            display();
        }
    }
}
function dot(){
    if (enableDec){
        locNums.push('.');
        let intArrNum = locNums.join('');
        numArr[numArrPos] = (intArrNum.toString());
        enableDec = false;
        display();
    }
}
function percent(){
    if (numArr[0]){
        numArr[numArrPos] = (numArr[numArrPos] / 100).toString();
        display();
    }
}
function negate(){
    if (numArr[0]){
        numArr[numArrPos] = (numArr[numArrPos] * (-1)).toString();
        display();
    }
}
function equalizer(){
    let internalArr = [];
    let evenNum = 0;
    let oddNum = 1;
    let divByZero = false;
    for(nums in numArr){
        if (numArr[nums] != '' && numArr[nums] != null){
            internalArr[evenNum] = numArr[nums].toString();
            evenNum += 2;
        }
    }
    for(opers in operArr){
        if (operArr[opers] != '' && opersArr[opers] != null){
            if (symArr[syms] == '/' && numArr.includes('0')){
                divByZero = true;
            }
            internalArr[oddNum] = operArr[oper].toString();
            oddNum += 2;
        }
    }
    let mainString = internalArr.join(' ')
    let intOut  = eval(mainString);
    console.log(typeof(intOut))
    numArrPos = 0;
    numAfterEql = true;
    clearOut();
    numArr.push(intOut.toString());
    if (intOut > 999999999){
        display(true, true, intOut);
    } else if (divByZero){

    } else{
        display(false, true, 0);
    }
}
function claer(){
    numArr = [];
    operArr = [];
    locNums = [];
    operArrPos = 0;
    numArrPos = 0;
    numOfNums = 0;
    numOrOper = true;
    numAfterEql = false;
    document.getElementById('output').value = 0
}
function display(big, eql, numb){
    let displayArr = [];
    let evenNum = 0;
    let oddNum = 1;
    let notZero = true;
    for(nums in numArr){
        if (numArr[nums] != ''){
            if (big && eql){
                if (numb == Infinity){
                    document.getElementById('output').value = 'Error';
                    notZero = false;
                    break;
                } else{
                    displayArr[evenNum] = Number(numArr[nums]).toExponential(9);
                evenNum = 0;
                oddNum = 1;
                }
            } else if (eql){
                let decSplit = numArr[nums].split('.');
                decSplit[0] = Number(decSplit[0]).toLocaleString();
                displayArr[evenNum] = decSplit.join('.');
                evenNum += 2;
            }
            else{
                let decSplit = numArr[nums].split('.');
                decSplit[0] = Number(decSplit[0]).toLocaleString();
                displayArr[evenNum] = decSplit.join('.');
                evenNum += 2;
            }
        } 
    }
    for(Opers in operArr){
        if (operArr[opers] != '' && operArr[opers] != null){
            displayArr[oddNum] = opersArr[opers].toString();
            oddNum += 2;
        }
    }
    let displScre = displayArr.join(' ')
    if (notZero){
        document.getElementById('displayScreen').value = outStr
    }
}
}
