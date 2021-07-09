const unit= document.getElementById('unit')
const head=document.querySelector('.head')
var input = document.getElementById('encoderq');
var output = document.getElementById('decoderq');
const charcount= document.getElementById('charcount')
const wordcount= document.getElementById('wordcount')


input.addEventListener('input', function(event) {
    charcount.innerHTML='Character Count  :- '+event.target.value.length
    wordcount.innerHTML='Word Count  :- '+event.target.value.split(/\s+/).length
    if (unit.value==='mirror'){
        output.innerText = event.target.value.split('').reverse().join('');
    }
    else if(unit.value==='uppercase'){
        output.innerHTML=event.target.value.toUpperCase()
    }
    else if(unit.value==='lowercase'){
        output.innerHTML=event.target.value.toLowerCase()
    }
});

unit.onchange=()=>{
    if (unit.value==='mirror'){
        output.innerText = input.value.split('').reverse().join('');
    }
    else if(unit.value==='uppercase'){
        output.innerHTML=input.value.toUpperCase()
    }
    else if(unit.value==='lowercase'){
        output.innerHTML=input.value.toLowerCase()
    }
}