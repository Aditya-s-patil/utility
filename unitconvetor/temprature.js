const unit= document.querySelector('#unit')
const unit2= document.querySelector('#unit2')
const output= document.querySelector('#Output')
const input= document.querySelector('.input1')
const convert= document.querySelector('#convert')
const Celsius=document.querySelector('#Celsius')
const Kelvin= document.querySelector('#Kelvin')
const Fahrenheit= document.querySelector('#Fahrenheit')
const table= document.querySelector('#table')

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        if(unit.value==="Celsius"  && unit2.value==="Kelvin1"){
            output.value=input.value+273.15
            Celsius.innerHTML= input.value
            Kelvin.innerHTML= input.value+273.15
            Fahrenheit.innerHTML=input.value*0.01
        }
        else if(unit.value==="Celsius"  && unit2.value==="Fahrenheit1"){
            output.value=(input.value*1.8)+32
            Celsius.innerHTML= input.value
            Kelvin.innerHTML= input.value+273.15
            Fahrenheit.innerHTML=(input.value*1.8)+32
        }
        else if(unit.value==="Celsius"&& unit2.value==="celsius1"){
            output.value=input.value
            Celsius.innerHTML= input.value
            Kelvin.innerHTML= input.value+273.15
            Fahrenheit.innerHTML=(input.value*1.8)+32
        }
        else if(unit.value==="Kelvin"&& unit2.value==="celsius1"){
            output.value=input.value-273.15
            Celsius.innerHTML= input.value-273.15
            Kelvin.innerHTML= input.value
            Fahrenheit.innerHTML=((input.value-273.15)*1.8)+32
        }
        else if(unit.value==="Kelvin"&& unit2.value==="Kelvin1"){
            output.value=input.value
            Celsius.innerHTML= input.value-273.15
            Kelvin.innerHTML= input.value
            Fahrenheit.innerHTML=((input.value-273.15)*1.8)+32
        }
        else if(unit.value==="Kelvin"&& unit2.value==="Fahrenheit1"){
            output.value=((input.value-273.15)*1.8)+32
            Celsius.innerHTML= input.value-273.15
            Kelvin.innerHTML= input.value
            Fahrenheit.innerHTML=((input.value-273.15)*1.8)+32
        }
        else if(unit.value==="Fahrenheit"&& unit2.value==="celsius1"){
            output.value=(input.value-32)*0.5556
            Celsius.innerHTML= (input.value-32)*0.5556
            Kelvin.innerHTML=((input.value-32)*0.5556)+273.15
            Fahrenheit.innerHTML=input.value
        }
        else if(unit.value==="Fahrenheit"&& unit2.value==="Kelvin1"){
            output.value=((input.value-32)*0.5556)+273.15
            Celsius.innerHTML= (input.value-32)*0.5556
            Kelvin.innerHTML=((input.value-32)*0.5556)+273.15
            Fahrenheit.innerHTML=input.value
        }else if(unit.value==="Fahrenheit"&& unit2.value==="Fahrenheit1"){
            output.value=input.value
            Celsius.innerHTML= input.value-32*0.5556
            Kelvin.innerHTML=((input.value-32)*0.5556)+273.15
            Fahrenheit.innerHTML=input.value
        }
        
    }
  });






unit2.onchange=()=>{
    table.style.display="block"
    if(unit.value==="Celsius"&& unit2.value==="Kelvin1"){
        output.value=input.value+273.15
        Celsius.innerHTML= input.value
        Kelvin.innerHTML= input.value+273.15
        Fahrenheit.innerHTML=input.value*0.01
    }
    else if(unit.value==="Celsius"&& unit2.value==="Fahrenheit1"){
        output.value=(input.value*1.8)+32
        Celsius.innerHTML= input.value
        Kelvin.innerHTML= input.value+273.15
        Fahrenheit.innerHTML=(input.value*1.8)+32
    }
    else if(unit.value==="Celsius"&& unit2.value==="celsius1"){
        output.value=input.value
        Celsius.innerHTML= input.value
        Kelvin.innerHTML= input.value+273.15
        Fahrenheit.innerHTML=(input.value*1.8)+32
    }
    else if(unit.value==="Kelvin"&& unit2.value==="celsius1"){
        output.value=input.value-273.15
        Celsius.innerHTML= input.value-273.15
        Kelvin.innerHTML= input.value
        Fahrenheit.innerHTML=((input.value-273.15)*1.8)+32
    }
    else if(unit.value==="Kelvin"&& unit2.value==="Kelvin1"){
        output.value=input.value
        Celsius.innerHTML= input.value-273.15
        Kelvin.innerHTML= input.value
        Fahrenheit.innerHTML=((input.value-273.15)*1.8)+32
    }
    else if(unit.value==="Kelvin"&& unit2.value==="Fahrenheit1"){
        output.value=((input.value-273.15)*1.8)+32
        Celsius.innerHTML= input.value-273.15
        Kelvin.innerHTML= input.value
        Fahrenheit.innerHTML=((input.value-273.15)*1.8)+32
    }
    else if(unit.value==="Fahrenheit"&& unit2.value==="celsius1"){
        output.value=(input.value-32)*0.5556
        Celsius.innerHTML= (input.value-32)*0.5556
        Kelvin.innerHTML=((input.value-32)*0.5556)+273.15
        Fahrenheit.innerHTML=input.value
    }
    else if(unit.value==="Fahrenheit"&& unit2.value==="Kelvin1"){
        output.value=((input.value-32)*0.5556)+273.15
        Celsius.innerHTML= (input.value-32)*0.5556
        Kelvin.innerHTML=((input.value-32)*0.5556)+273.15
        Fahrenheit.innerHTML=input.value
    }else if(unit.value==="Fahrenheit"&& unit2.value==="Fahrenheit1"){
        output.value=input.value
        Celsius.innerHTML= input.value-32*0.5556
        Kelvin.innerHTML=((input.value-32)*0.5556)+273.15
        Fahrenheit.innerHTML=input.value
    }
}








unit.onchange=()=>{
    table.style.display="block"
    if(unit.value==="Celsius"&& unit2.value==="Kelvin1"){
        output.value=input.value+273.15
        Celsius.innerHTML= input.value
        Kelvin.innerHTML= input.value+273.15
        Fahrenheit.innerHTML=input.value*0.01
    }
    else if(unit.value==="Celsius"&& unit2.value==="Fahrenheit1"){
        output.value=(input.value*1.8)+32
        Celsius.innerHTML= input.value
        Kelvin.innerHTML= input.value+273.15
        Fahrenheit.innerHTML=(input.value*1.8)+32
    }
    else if(unit.value==="Celsius"&& unit2.value==="celsius1"){
        output.value=input.value
        Celsius.innerHTML= input.value
        Kelvin.innerHTML= input.value+273.15
        Fahrenheit.innerHTML=(input.value*1.8)+32
    }
    else if(unit.value==="Kelvin"&& unit2.value==="celsius1"){
        output.value=input.value-273.15
        Celsius.innerHTML= input.value-273.15
        Kelvin.innerHTML= input.value
        Fahrenheit.innerHTML=((input.value-273.15)*1.8)+32
    }
    else if(unit.value==="Kelvin"&& unit2.value==="Kelvin1"){
        output.value=input.value
        Celsius.innerHTML= input.value-273.15
        Kelvin.innerHTML= input.value
        Fahrenheit.innerHTML=((input.value-273.15)*1.8)+32
    }
    else if(unit.value==="Kelvin"&& unit2.value==="Fahrenheit1"){
        output.value=((input.value-273.15)*1.8)+32
        Celsius.innerHTML= input.value-273.15
        Kelvin.innerHTML= input.value
        Fahrenheit.innerHTML=((input.value-273.15)*1.8)+32
    }
    else if(unit.value==="Fahrenheit"&& unit2.value==="celsius1"){
        output.value=(input.value-32)*0.5556
        Celsius.innerHTML= (input.value-32)*0.5556
        Kelvin.innerHTML=((input.value-32)*0.5556)+273.15
        Fahrenheit.innerHTML=input.value
    }
    else if(unit.value==="Fahrenheit"&& unit2.value==="Kelvin1"){
        output.value=((input.value-32)*0.5556)+273.15
        Celsius.innerHTML= (input.value-32)*0.5556
        Kelvin.innerHTML=((input.value-32)*0.5556)+273.15
        Fahrenheit.innerHTML=input.value
    }else if(unit.value==="Fahrenheit"&& unit2.value==="Fahrenheit1"){
        output.value=input.value
        Celsius.innerHTML= input.value-32*0.5556
        Kelvin.innerHTML=((input.value-32)*0.5556)+273.15
        Fahrenheit.innerHTML=input.value
    }
}