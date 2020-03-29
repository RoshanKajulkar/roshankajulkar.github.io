allc = document.getElementById('allc');
one = document.getElementById('one');
two = document.getElementById('two');
three = document.getElementById('three');
four = document.getElementById('four');
five = document.getElementById('five');
six = document.getElementById('six');
seven = document.getElementById('seven');
eight = document.getElementById('eight');
nine = document.getElementById('nine');
zero = document.getElementById('zero');
dot = document.getElementById('dot');
div = document.getElementById('div');
mul = document.getElementById('mul');
sub = document.getElementById('sub');
add = document.getElementById('add');
equals = document.getElementById('equals');
exp = document.getElementById('exp');

let text = "|";
let flag = 0;


function checkNumEnd(){
    isnum = text[text.length-1];
    if(isnum == "+" || isnum == "-" || isnum == "x" || isnum == "/")
        return -1;
    else
        return 1;

}

function dotf(){
    console.log(". dot");
}

function number(num){
    if(text == '|'){
        text = num;
    }
    else if(num == "0"){
        if(text != "0"){
            text += "0";
        }
    }
    else{
        if(text!= "0"){
            text+= num;
        }
        
    }
    exp.textContent=text;
}

function opr(sign){
    let result ;
    if(sign == "="){
        if(flag == 1){

            stat = checkNumEnd(text);
            if(stat == 1){
                num = text.split(/[\+x/-]+/);
                
                if(num.length == 2){
                    num1 = parseInt(num[0]);
                    num2 = parseInt(num[1]);
                } 
                else{
                    num1 = -(parseInt(num[1]));
                    num2 = parseInt(num[2]);
                }

                if(text.includes("+"))
                    result = num1 + num2;
                else if(text.includes("-"))
                    result = num1 - num2;
                else if(text.includes("x"))
                    result = num1 * num2;
                else{
                    result = num1 / num2;
                }

                text = String(result);
                exp.textContent = text;
                flag = 0;
                text = "|";
            }
            
        }
       
    }
    else{
        if(text == '|'){
            if(sign == "-"){
                text = "-";
            }
        }
        else{
            if(flag != 1 && text != '-'){
                flag = 1;
                text += sign; 
            }           
        }
        exp.textContent = text;
    }
}

function allcf(){
    text = "|";
    flag = 0;
    exp.textContent = "|";
}

function onef(){
    number("1");
}

function twof(){
    number("2");
}

function threef(){
    number("3");
}

function fourf(){
    number("4");
}

function fivef(){
    number("5");
}

function sixf(){
    number("6");
}

function sevenf(){
    number("7");
}

function eightf(){
    number("8");
}

function ninef(){
    number("9");
}


function zerof(){
    number("0");
}

function addf(){
    opr("+");
}

function subf(){
    opr("-");
}

function mulf(){
    opr("x");
}

function divf(){
    opr("/");
}

function equalsf(){
    opr("=");
}


equals.addEventListener('click',equalsf);
allc.addEventListener('click',allcf);
zero.addEventListener('click',zerof);
nine.addEventListener('click',ninef);
eight.addEventListener('click',eightf);
seven.addEventListener('click',sevenf);
six.addEventListener('click',sixf);
five.addEventListener('click',fivef);
four.addEventListener('click',fourf);
three.addEventListener('click',threef);
two.addEventListener('click',twof);
one.addEventListener('click',onef);
dot.addEventListener('click',dotf);
div.addEventListener('click',divf);
mul.addEventListener('click',mulf);
sub.addEventListener('click',subf);
add.addEventListener('click',addf);
