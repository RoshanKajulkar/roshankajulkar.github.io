let value=[],i=0,j=0

function setup() {
  createCanvas(1000, 640);
  for(let i=0;i<1000;i++){
    value[i] = Math.round(640 * random());
  }

}


function draw() {
  background(240);
if(i<1000){
  for(j=0;j<1000-i-1;j++){
    let a = value[j]
    let b = value[j+1]
    if(a>b){
      let temp = value[j];
      value[j] = value[j+1];
      value[j+1] = temp;
    }
  }
  i = i + 1
} 
else{
  console.log("finished")
}

  for(let i=0;i<1000;i++)
  {
    line(i,640,i,value[i]); 
  }
  
}

