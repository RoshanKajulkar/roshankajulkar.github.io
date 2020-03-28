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

text = "0";
flag = 0;

addflag = 0;
subflag = 0;
mulflag = 0;
divflag = 0;
resset = 0;

function dotf(){
    console.log(". dot");
}

function allcf(){
    text = "0";
    flag = 0;
    addflag = 0;
    subflag = 0;
    mulflag = 0;
    divflag = 0;
    exp.textContent = text;
}

function onef(){
    if(text == "0"){
        text = "1";
    }
    else if(resset == 1)
    {
        text = "1";
        resset = 0;
        flag = 0;
    }
    else{
        text += "1";
    }
    exp.textContent = text;
    
}

function twof(){
    if(text == "0"){
        text = "2";
    }
    else if(resset == 1)
    {
        text = "2";
        resset = 0;
        flag = 0;
    }
    else{
        text += "2";
    }
    exp.textContent = text;
}

function threef(){
    if(text == "0"){
        text = "3";
    }
    else if(resset == 1)
    {
        text = "3";
        resset = 0;
        flag = 0;
    }
    else{
        text += "3";
    }
    exp.textContent = text;
}

function fourf(){
    if(text == "0"){
        text = "4";
    }
    else if(resset == 1)
    {
        text = "4";
        resset = 0;
        flag = 0;
    }
    else{
        text += "4";
    }
    exp.textContent = text;
}

function fivef(){
    if(text == "0"){
        text = "5";
    }
    else if(resset == 1)
    {
        text = "5";
        resset = 0;
        flag = 0;
    }
    else{
        text += "5";
    }
    exp.textContent = text;
}

function sixf(){
    if(text == "0"){
        text = "6";
    }
    else if(resset == 1)
    {
        text = "6";
        resset = 0;
        flag = 0;
    }
    else{
        text += "6";
    }
    exp.textContent = text;
}

function sevenf(){
    if(text == "0"){
        text = "7";
    }
    else if(resset == 1)
    {
        text = "7";
        resset = 0;
        flag = 0;
    }
    else{
        text += "7";
    }
    exp.textContent = text;
}

function eightf(){
    if(text == "0"){
        text = "8";
    }
    else if(resset == 1)
    {
        text = "8";
        resset = 0;
        flag = 0;
    }
    else{
        text += "8";
    }
    exp.textContent = text;
}

function ninef(){
    if(text == "0"){
        text = "9";
    }
    else if(resset == 1)
    {
        text = "9";
        resset = 0;
        flag = 0;
    }
    else{
        text += "9";
    }
    exp.textContent = text;
}


function zerof(){
    if(text == "0"){
        text = "0";
    }
    else if(resset == 1)
    {
        text = "0";
        resset = 0;
        flag = 0;
    }
    else{
        text += "0";
    }
    exp.textContent = text;
}
function addf(){
    if(flag == 1){
        console.log("skip operator used");
    }
    else{
        flag = 1;
        addflag = 1;
        text += "+";
        exp.textContent = text;
    }
    
}

function subf(){
    if(flag == 1){
        console.log("skip operator used");
    }
    else{
        flag = 1;
        text += "-";
        subflag = 1;
        exp.textContent = text;
    }
}

function mulf(){
    if(flag == 1){
        console.log("skip operator used"); 
    }
    else{
        flag = 1;
        text += "x";
        mulflag = 1;
        exp.textContent = text;
    }
}

function divf(){
    if(flag == 1){
        console.log("skip operator used");
    }
    else{
        flag = 1;
        text += "/";
        divflag = 1;
        exp.textContent = text;
    }
}

function checkNumEnd(){
    isnum = text[text.length-1];
    if(isnum == "+" || isnum == "-" || isnum == "x" || isnum == "/")
        return -1;
    else
        return 1;

}

function equalsf(){

    if(flag == 1)
    {
        stat = checkNumEnd();
        console.log(stat);
        if(stat==1){
            num = text.split(/[\+x/-]+/);
            
            num1 = parseInt(num[0]);
            num2 = parseInt(num[1]);

            if(addflag == 1){
                console.log("addition");
                result = num1 + num2;
                exp.textContent = String(result);
                addflag=0;
                
                resset = 1;
            }
            
            if(mulflag == 1){
                console.log("multiplication");
                result = num1 * num2;
                exp.textContent = String(result);
                mulflag=0;
                
                resset = 1;
            }

            if(subflag == 1){
                console.log("subtraction");
                result = num1 - num2;
                exp.textContent = String(result);
                subflag=0;
               
                resset = 1;
            }

            if(divflag == 1){
                console.log("division");
                result = num1 / num2;
                exp.textContent = String(result);
                divflag=0;
                
                resset = 1;
            }
            console.log(num);

        }
        else
        {
            console.log("incomplete");
        }
    }
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
