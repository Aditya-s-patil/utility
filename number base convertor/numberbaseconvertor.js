const input = document.querySelector('.input')
const output = document.querySelector('.output1')
const unit= document.querySelector('#unit')
const unit2= document.querySelector('#unit2')
const binary= document.querySelector('#binary')
const decimal = document.querySelector("#decimal")
const hex= document.querySelector("#hex")
const octal= document.querySelector("#octal")
const table= document.querySelector('#table')

input.onchange=()=>{
    if (unit.value==="Binary" && unit2.value==="Binary1"){
        output.innerHTML= input.value
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Binary" && unit2.value==="Decimal1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Binary" && unit2.value==="Hex1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Binary" && unit2.value==="Octal1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Decimal" && unit2.value==="Decimal1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Decimal" && unit2.value==="Binary1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Decimal" && unit2.value==="Hex1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Decimal" && unit2.value==="Octal1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Hex" && unit2.value==="Decimal1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Hex" && unit2.value==="Binary1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Hex" && unit2.value==="Hex1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Hex" && unit2.value==="Octal1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Octal" && unit2.value==="Decimal1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Octal" && unit2.value==="Binary1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Octal" && unit2.value==="Hex1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Octal" && unit2.value==="Octal1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
}

unit.onchange=()=>{
    table.style.display="block"
    if (unit.value==="Binary" && unit2.value==="Binary1"){
        output.innerHTML= input.value
    }
    else if (unit.value==="Binary" && unit2.value==="Decimal1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Binary" && unit2.value==="Hex1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Binary" && unit2.value==="Octal1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Decimal" && unit2.value==="Decimal1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Decimal" && unit2.value==="Binary1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Decimal" && unit2.value==="Hex1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Decimal" && unit2.value==="Octal1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Hex" && unit2.value==="Decimal1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Hex" && unit2.value==="Binary1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Hex" && unit2.value==="Hex1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Hex" && unit2.value==="Octal1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Octal" && unit2.value==="Decimal1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Octal" && unit2.value==="Binary1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Octal" && unit2.value==="Hex1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Octal" && unit2.value==="Octal1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
}

unit2.onchange=()=>{
    table.style.display="block"
    if (unit.value==="Binary" && unit2.value==="Binary1"){
        output.innerHTML= input.value
    }
    else if (unit.value==="Binary" && unit2.value==="Decimal1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Binary" && unit2.value==="Hex1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Binary" && unit2.value==="Octal1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Decimal" && unit2.value==="Decimal1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Decimal" && unit2.value==="Binary1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Decimal" && unit2.value==="Hex1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Decimal" && unit2.value==="Octal1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Hex" && unit2.value==="Decimal1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Hex" && unit2.value==="Binary1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Hex" && unit2.value==="Hex1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Hex" && unit2.value==="Octal1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Octal" && unit2.value==="Decimal1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Octal" && unit2.value==="Binary1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Octal" && unit2.value==="Hex1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
    else if (unit.value==="Octal" && unit2.value==="Octal1"){
        output.innerHTML= input;
        binary.innerHTML= input.value
        decimal.innerHTML= input.value
        hex.innerHTML=input.value
        octal.innerHTML=input.value
    }
}