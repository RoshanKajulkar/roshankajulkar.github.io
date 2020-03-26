const heading = document.getElementById("head");
const content = "WELCOME...";

let length = content.length;
let i = 0;

let text = "";

setInterval(display,150);

function display(){
    
    text += content[i];
    heading.textContent = text; 
    i++;
    
    if(i == length){
        i=0;
        text = "";
    }
    
}

