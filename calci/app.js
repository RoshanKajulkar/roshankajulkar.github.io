const res = document.getElementById('result');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const btn = document.getElementById('btn');

function add(){
    if(num1.value != '' &&  num2.value != ""){
        const result = Number(num1.value) + Number(num2.value);
        num1.value = '';
        num2.value = '';
        res.textContent = "result is " +  result ;
    }
    else
    {
        res.textContent = "Enter correct Input";
    }
}

btn.addEventListener('click' , add);