const res = document.getElementById('result');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const addbtn = document.getElementById('btn-add');
const subbtn = document.getElementById('btn-sub');
const mulbtn = document.getElementById('btn-mul');
const divbtn = document.getElementById('btn-div');

function checkValidInput(){
    if(num1.value != '' &&  num2.value != ""){
        return true;
    }
    else{
        return false;
    }
}

function add(){
    
    if(checkValidInput()){
        const result = Number(num1.value) + Number(num2.value);
        res.textContent = `${Number(num1.value)} + ${Number(num2.value)} = ${result}` ;
        num1.value = '';
        num2.value = '';
    }
    else{
        res.textContent = "Enter correct Input";
    }
}

function sub(){
    
    if(checkValidInput()){
        const result = Number(num1.value) - Number(num2.value);
        res.textContent = `${Number(num1.value)} - ${Number(num2.value)} = ${result}` ;
        num1.value = '';
        num2.value = '';      
    }
    else{
        res.textContent = "Enter correct Input";
    }
}

function mul(){
    
    if(checkValidInput()){
        const result = Number(num1.value) * Number(num2.value);
        res.textContent = `${Number(num1.value)} * ${Number(num2.value)} = ${result}` ;
        num1.value = '';
        num2.value = '';
    }
    else{
        res.textContent = "Enter correct Input";
    }
}

function div(){
    
    if(checkValidInput()){
        const result = Number(num1.value) / Number(num2.value);
        res.textContent = `${Number(num1.value)} / ${Number(num2.value)} = ${result}` ;
        num1.value = '';
        num2.value = '';
        
    }
    else{
        res.textContent = "Enter correct Input";
    }
}

addbtn.addEventListener('click' , add);
subbtn.addEventListener('click' , sub);
mulbtn.addEventListener('click' , mul);
divbtn.addEventListener('click' , div);
