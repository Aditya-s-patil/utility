const unit= document.querySelector('#unit')
const unit2= document.querySelector('#unit2')
const output= document.querySelector('#Output')
const input= document.querySelector('.input1')
const convert= document.querySelector('#convert')
const KiloGram=document.querySelector('#KiloGram')
const Gram= document.querySelector('#Gram')
const Ounce= document.querySelector('#Ounce')
const Pounds= document.querySelector('#Pounds')
const table= document.querySelector('#table')

input.onchange=()=>{
    
    if(unit.value==="KiloGram"&& unit2.value==="Gram1"){
        output.value=input.value*1000
        KiloGram.innerHTML= input.value
        Gram.innerHTML= input.value*1000
        Ounce.innerHTML=input.value*35.274
        Pounds.innerHTML=input.value*2.2046250028412499589
    }
    else if(unit.value==="KiloGram"&& unit2.value==="Ounce1"){
        output.value=input.value*35.274
        KiloGram.innerHTML= input.value
        Gram.innerHTML= input.value*1000
        Ounce.innerHTML=input.value*35.274
        Pounds.innerHTML=input.value*2.2046250028412499589
    }
    else if(unit.value==="KiloGram"&& unit2.value==="KiloGram1"){
        output.value=input.value*35.274
        KiloGram.innerHTML= input.value
        Gram.innerHTML= input.value*1000
        Ounce.innerHTML=input.value*35.274
        Pounds.innerHTML=input.value*2.2046250028412499589
    }
    else if(unit.value==="KiloGram"&& unit2.value==="Pounds1"){
        output.value=input.value*2.2046250028412499589
        KiloGram.innerHTML= input.value
        Gram.innerHTML= input.value*1000
        Ounce.innerHTML=input.value*35.274
        Pounds.innerHTML=input.value*2.2046250028412499589
    }
    else if(unit.value==="Gram"&& unit2.value==="KiloGram1"){
        output.value=input.value*0.00100000108
        KiloGram.innerHTML= input.value*0.00100000108
        Gram.innerHTML= input.value
        Ounce.innerHTML=input.value*0.03527400004546
        Pounds.innerHTML=input.value*0.00220462
    }
    else if(unit.value==="Gram"&& unit2.value==="Gram1"){
        output.value=input.value*35.274
        KiloGram.innerHTML= input.value*0.00100000108
        Gram.innerHTML= input.value
        Ounce.innerHTML=input.value*0.03527400004546
        Pounds.innerHTML=input.value*0.00220462
    }
    else if(unit.value==="Gram"&& unit2.value==="Ounce1"){
        output.value=input.value*0.03527400004546
        KiloGram.innerHTML= input.value*0.00100000108
        Gram.innerHTML= input.value
        Ounce.innerHTML=input.value*0.03527400004546
        Pounds.innerHTML=input.value*0.00220462
    }
    else if(unit.value==="Gram" && unit2.value==="Pounds1"){
        output.value=input.value*0.00220462
        KiloGram.innerHTML= input.value*0.00100000108
        Gram.innerHTML= input.value
        Ounce.innerHTML=input.value*0.03527400004546
        Pounds.innerHTML=input.value*0.00220462
    }
    else if(unit.value==="Ounce"&& unit2.value==="KiloGram1"){
        output.value=input.value*0.02834955374248552748
        KiloGram.innerHTML= input.value*0.02834955374248552748
        Gram.innerHTML=input.value*28.349553742485525731
        Ounce.innerHTML=input.value
        Pounds.innerHTML=input.value*0.0625
    }
    else if(unit.value==="Ounce"&& unit2.value==="Gram1"){
        output.value=input.value*28.349553742485525731
        KiloGram.innerHTML= input.value*0.02834955374248552748
        Gram.innerHTML=input.value*28.349553742485525731
        Ounce.innerHTML=input.value
        Pounds.innerHTML=input.value*0.0625
    }else if(unit.value==="Ounce"&& unit2.value==="Ounce1"){
        output.value=input.value
        KiloGram.innerHTML= input.value-32*0.5556
        Gram.innerHTML=input.value*28.349553742485525731
        Ounce.innerHTML=input.value
        Pounds.innerHTML=input.value*0.0625
    }
    else if(unit.value==="Ounce"&& unit2.value==="Pounds1"){
        output.value=input.value*0.0625
        KiloGram.innerHTML= input.value-32*0.5556
        Gram.innerHTML=input.value*28.349553742485525731
        Ounce.innerHTML=input.value
        Pounds.innerHTML=input.value*0.0625
    }
    else if(unit.value==="Pounds"&& unit2.value==="Pounds1"){
        output.value=input.value
        KiloGram.innerHTML= input.value*0.453592
        Gram.innerHTML=input.value*453.5920000001679
        Ounce.innerHTML=input.value*15.999986948640000151
        Pounds.innerHTML=input.value
    }
    else if(unit.value==="Pounds"&& unit2.value==="kiloGram1"){
        output.value=input.value*0.45359200000016791643
        KiloGram.innerHTML= input.value*0.45359200000016791643
        Gram.innerHTML=input.value*453.5920000001679
        Ounce.innerHTML=input.value*15.999986948640000151
        Pounds.innerHTML=input.value
    }
    else if(unit.value==="Pounds"&& unit2.value==="Gram1"){
        output.value=input.value*453.5920000001679
        KiloGram.innerHTML= input.value*0.45359200000016791643
        Gram.innerHTML=input.value*453.5920000001679
        Ounce.innerHTML=input.value*15.999986948640000151
        Pounds.innerHTML=input.value
    }
    else if(unit.value==="Pounds"&& unit2.value==="Gram1"){
        output.value=input.value*453.5920000001679
        KiloGram.innerHTML= input.value*0.45359200000016791643
        Gram.innerHTML=input.value*453.5920000001679
        Ounce.innerHTML=input.value*15.999986948640000151
        Pounds.innerHTML=input.value
    }
}






unit2.onchange=()=>{
    table.style.display="block"
    if(unit.value==="KiloGram"&& unit2.value==="Gram1"){
        output.value=input.value*1000
        KiloGram.innerHTML= input.value
        Gram.innerHTML= input.value*1000
        Ounce.innerHTML=input.value*35.274
        Pounds.innerHTML=input.value*2.2046250028412499589
    }
    else if(unit.value==="KiloGram"&& unit2.value==="Ounce1"){
        output.value=input.value*35.274
        KiloGram.innerHTML= input.value
        Gram.innerHTML= input.value*1000
        Ounce.innerHTML=input.value*35.274
        Pounds.innerHTML=input.value*2.2046250028412499589
    }
    else if(unit.value==="KiloGram"&& unit2.value==="KiloGram1"){
        output.value=input.value*35.274
        KiloGram.innerHTML= input.value
        Gram.innerHTML= input.value*1000
        Ounce.innerHTML=input.value*35.274
        Pounds.innerHTML=input.value*2.2046250028412499589
    }
    else if(unit.value==="Gram"&& unit2.value==="KiloGram1"){
        output.value=input.value*0.00100000108
        KiloGram.innerHTML= input.value*0.00100000108
        Gram.innerHTML= input.value
        Ounce.innerHTML=input.value*0.03527400004546
        Pounds.innerHTML=input.value*0.00220462
    }
    else if(unit.value==="Gram"&& unit2.value==="Gram1"){
        output.value=input.value*35.274
        KiloGram.innerHTML= input.value*0.00100000108
        Gram.innerHTML= input.value
        Ounce.innerHTML=input.value*0.03527400004546
        Pounds.innerHTML=input.value*0.00220462
    }
    else if(unit.value==="Gram"&& unit2.value==="Ounce1"){
        output.value=input.value*0.03527400004546
        KiloGram.innerHTML= input.value*0.00100000108
        Gram.innerHTML= input.value
        Ounce.innerHTML=input.value*0.03527400004546
        Pounds.innerHTML=input.value*0.00220462
    }
    else if(unit.value==="Gram" && unit2.value==="Pounds1"){
        output.value=input.value*0.00220462
        KiloGram.innerHTML= input.value*0.00100000108
        Gram.innerHTML= input.value
        Ounce.innerHTML=input.value*0.03527400004546
        Pounds.innerHTML=input.value*0.00220462
    }
    else if(unit.value==="Ounce"&& unit2.value==="KiloGram1"){
        output.value=input.value*0.02834955374248552748
        KiloGram.innerHTML= input.value*0.02834955374248552748
        Gram.innerHTML=input.value*28.349553742485525731
        Ounce.innerHTML=input.value
        Pounds.innerHTML=input.value*0.0625
    }
    else if(unit.value==="Ounce"&& unit2.value==="Gram1"){
        output.value=input.value*28.349553742485525731
        KiloGram.innerHTML= input.value*0.02834955374248552748
        Gram.innerHTML=input.value*28.349553742485525731
        Ounce.innerHTML=input.value
        Pounds.innerHTML=input.value*0.0625
    }else if(unit.value==="Ounce"&& unit2.value==="Ounce1"){
        output.value=input.value
        KiloGram.innerHTML= input.value-32*0.5556
        Gram.innerHTML=input.value*28.349553742485525731
        Ounce.innerHTML=input.value
        Pounds.innerHTML=input.value*0.0625
    }
    else if(unit.value==="Ounce"&& unit2.value==="Pounds1"){
        output.value=input.value*0.0625
        KiloGram.innerHTML= input.value-32*0.5556
        Gram.innerHTML=input.value*28.349553742485525731
        Ounce.innerHTML=input.value
        Pounds.innerHTML=input.value*0.0625
    }
    else if(unit.value==="Pounds"&& unit2.value==="Pounds1"){
        output.value=input.value
        KiloGram.innerHTML= input.value*0.453592
        Gram.innerHTML=input.value*453.5920000001679
        Ounce.innerHTML=input.value*15.999986948640000151
        Pounds.innerHTML=input.value
    }
    else if(unit.value==="Pounds"&& unit2.value==="kiloGram1"){
        output.value=input.value*0.45359200000016791643
        KiloGram.innerHTML= input.value*0.45359200000016791643
        Gram.innerHTML=input.value*453.5920000001679
        Ounce.innerHTML=input.value*15.999986948640000151
        Pounds.innerHTML=input.value
    }
    else if(unit.value==="Pounds"&& unit2.value==="Gram1"){
        output.value=input.value*453.5920000001679
        KiloGram.innerHTML= input.value*0.45359200000016791643
        Gram.innerHTML=input.value*453.5920000001679
        Ounce.innerHTML=input.value*15.999986948640000151
        Pounds.innerHTML=input.value
    }
    else if(unit.value==="Pounds"&& unit2.value==="Gram1"){
        output.value=input.value*453.5920000001679
        KiloGram.innerHTML= input.value*0.45359200000016791643
        Gram.innerHTML=input.value*453.5920000001679
        Ounce.innerHTML=input.value*15.999986948640000151
        Pounds.innerHTML=input.value
    }
}








unit.onchange=()=>{
    table.style.display="block"
    if(unit.value==="KiloGram"&& unit2.value==="Gram1"){
        output.value=input.value*1000
        KiloGram.innerHTML= input.value
        Gram.innerHTML= input.value*1000
        Ounce.innerHTML=input.value*35.274
        Pounds.innerHTML=input.value*2.2046250028412499589
    }
    else if(unit.value==="KiloGram"&& unit2.value==="Ounce1"){
        output.value=input.value*35.274
        KiloGram.innerHTML= input.value
        Gram.innerHTML= input.value*1000
        Ounce.innerHTML=input.value*35.274
        Pounds.innerHTML=input.value*2.2046250028412499589
    }
    else if(unit.value==="KiloGram"&& unit2.value==="KiloGram1"){
        output.value=input.value*35.274
        KiloGram.innerHTML= input.value
        Gram.innerHTML= input.value*1000
        Ounce.innerHTML=input.value*35.274
        Pounds.innerHTML=input.value*2.2046250028412499589
    }
    else if(unit.value==="Gram"&& unit2.value==="KiloGram1"){
        output.value=input.value*0.00100000108
        KiloGram.innerHTML= input.value*0.00100000108
        Gram.innerHTML= input.value
        Ounce.innerHTML=input.value*0.03527400004546
        Pounds.innerHTML=input.value*0.00220462
    }
    else if(unit.value==="Gram"&& unit2.value==="Gram1"){
        output.value=input.value*35.274
        KiloGram.innerHTML= input.value*0.00100000108
        Gram.innerHTML= input.value
        Ounce.innerHTML=input.value*0.03527400004546
        Pounds.innerHTML=input.value*0.00220462
    }
    else if(unit.value==="Gram"&& unit2.value==="Ounce1"){
        output.value=input.value*0.03527400004546
        KiloGram.innerHTML= input.value*0.00100000108
        Gram.innerHTML= input.value
        Ounce.innerHTML=input.value*0.03527400004546
        Pounds.innerHTML=input.value*0.00220462
    }
    else if(unit.value==="Gram" && unit2.value==="Pounds1"){
        output.value=input.value*0.00220462
        KiloGram.innerHTML= input.value*0.00100000108
        Gram.innerHTML= input.value
        Ounce.innerHTML=input.value*0.03527400004546
        Pounds.innerHTML=input.value*0.00220462
    }
    else if(unit.value==="Ounce"&& unit2.value==="KiloGram1"){
        output.value=input.value*0.02834955374248552748
        KiloGram.innerHTML= input.value*0.02834955374248552748
        Gram.innerHTML=input.value*28.349553742485525731
        Ounce.innerHTML=input.value
        Pounds.innerHTML=input.value*0.0625
    }
    else if(unit.value==="Ounce"&& unit2.value==="Gram1"){
        output.value=input.value*28.349553742485525731
        KiloGram.innerHTML= input.value*0.02834955374248552748
        Gram.innerHTML=input.value*28.349553742485525731
        Ounce.innerHTML=input.value
        Pounds.innerHTML=input.value*0.0625
    }else if(unit.value==="Ounce"&& unit2.value==="Ounce1"){
        output.value=input.value
        KiloGram.innerHTML= input.value-32*0.5556
        Gram.innerHTML=input.value*28.349553742485525731
        Ounce.innerHTML=input.value
        Pounds.innerHTML=input.value*0.0625
    }
    else if(unit.value==="Ounce"&& unit2.value==="Pounds1"){
        output.value=input.value*0.0625
        KiloGram.innerHTML= input.value-32*0.5556
        Gram.innerHTML=input.value*28.349553742485525731
        Ounce.innerHTML=input.value
        Pounds.innerHTML=input.value*0.0625
    }
    else if(unit.value==="Pounds"&& unit2.value==="Pounds1"){
        output.value=input.value
        KiloGram.innerHTML= input.value*0.453592
        Gram.innerHTML=input.value*453.5920000001679
        Ounce.innerHTML=input.value*15.999986948640000151
        Pounds.innerHTML=input.value
    }
    else if(unit.value==="Pounds"&& unit2.value==="kiloGram1"){
        output.value=input.value*0.45359200000016791643
        KiloGram.innerHTML= input.value*0.45359200000016791643
        Gram.innerHTML=input.value*453.5920000001679
        Ounce.innerHTML=input.value*15.999986948640000151
        Pounds.innerHTML=input.value
    }
    else if(unit.value==="Pounds"&& unit2.value==="Gram1"){
        output.value=input.value*453.5920000001679
        KiloGram.innerHTML= input.value*0.45359200000016791643
        Gram.innerHTML=input.value*453.5920000001679
        Ounce.innerHTML=input.value*15.999986948640000151
        Pounds.innerHTML=input.value
    }
    else if(unit.value==="Pounds"&& unit2.value==="Gram1"){
        output.value=input.value*453.5920000001679
        KiloGram.innerHTML= input.value*0.45359200000016791643
        Gram.innerHTML=input.value*453.5920000001679
        Ounce.innerHTML=input.value*15.999986948640000151
        Pounds.innerHTML=input.value
    }
}