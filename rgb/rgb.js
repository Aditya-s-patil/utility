const red = document.getElementById('red')
const green= document.getElementById('green')
const blue= document.getElementById('blue')
const ans= document.getElementById('ans')
const submit= document.getElementById('submit')
const body= document.getElementById('body')
const submit2= document.getElementById('submit2')
const ans3= document.getElementById('ans3')

submit.onclick=()=>{
    reed = Number(red.value).toString(16);
  greeen = Number(green.value).toString(16);
  bluee = Number(blue.value).toString(16);

  if (reed.length == 1)
    reed = "0" + r;
  else if (greeen.length == 1)
    greeen = "0" + g;
  else if (bluee.length == 1)
    bluee = "0" + b;

  var anns= "#" + reed + greeen + bluee;
  ans.value=anns
  body.style.backgroundColor=anns
 
}
submit2.onclick=()=>{
    var ans1=ans.value
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(ans1);
    var ans2= `red: ${parseInt(result[1], 16)}, green: ${parseInt(result[2], 16)}, blue: ${parseInt(result[3], 16)}`;
     ans3.innerHTML=ans2
     body.style.backgroundColor=ans1
}