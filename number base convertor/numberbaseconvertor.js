const input = document.querySelector('.input')
const output = document.querySelector("#Output")
const unit= document.querySelector('#unit')
const unit2= document.querySelector('#unit2')
const binary= document.querySelector('#binary')
const decimal = document.querySelector("#decimal")
const hex= document.querySelector("#hex")
const octal= document.querySelector("#octal")  
const table= document.querySelector('#table')


input.onchange=()=>{
    const dec_bin=input.value

    let dec_bina=parseInt(dec_bin,10)
    let decbin=dec_bina.toString(2)
    let dec_hex=parseInt(dec_bin,10)
    let dechex=dec_hex.toString(16)
    let dec_oct=parseInt(dec_bin,10)
    let decoct=dec_oct.toString(8)

    let oct_bin=parseInt(dec_bin,8)
    let octbin=oct_bin.toString(2)
    let oct_dec=parseInt(dec_bin,8)
    let octdec=oct_dec.toString(10)
    let oct_hex=parseInt(dec_bin,8)
    let octhex=oct_hex.toString(16)

    let hex_bin=parseInt(dec_bin,16)
    let hexbin=hex_bin.toString(2)
    let hex_dec=parseInt(dec_bin,16)
    let hexdec=hex_dec.toString(10)
    let hex_oct=parseInt(dec_bin,16)
    let hexoct=hex_oct.toString(8)
    
    let bin_dec=parseInt(dec_bin,2)
    let binhex= bin_dec.toString(16)
    let binoct= bin_dec.toString(8)
    let bindec= bin_dec.toString(10)
    if (unit.value==="Binary" && unit2.value==="Binary1"){
        output.value=bin_dec
        binary.innerHTML= bin_dec
        decimal.innerHTML=bindec
        hex.innerHTML= binhex
        octal.innerHTML=binoct
    }
    else if (unit.value==="Binary" && unit2.value==="Decimal1"){
        output.value=bindec
        binary.innerHTML= bin_dec
        decimal.innerHTML=bindec
        hex.innerHTML=binhex
        octal.innerHTML=binoct
    }
    else if (unit.value==="Binary" && unit2.value==="Hex1"){
        output.value= binhex
        binary.innerHTML= bin_dec
        decimal.innerHTML=bindec
        hex.innerHTML=binhex
        octal.innerHTML=binoct
    }
    else if (unit.value==="Binary" && unit2.value==="Octal1"){
        output.value=binoct
        binary.innerHTML= bin_dec
        decimal.innerHTML=bindec
        hex.innerHTML=binhex
        octal.innerHTML=binoct
    }
    else if (unit.value==="Decimal" && unit2.value==="Decimal1"){
        output.value= input.value
        binary.innerHTML= decbin
        decimal.innerHTML= input.value
        hex.innerHTML=dechex
        octal.innerHTML=decoct
    }
    else if (unit.value==="Decimal" && unit2.value==="Binary1"){
        output.value= decbin
        binary.innerHTML= decbin
        decimal.innerHTML= input.value
        hex.innerHTML=dechex
        octal.innerHTML=decoct
    }
    else if (unit.value==="Decimal" && unit2.value==="Hex1"){
        output.value= dechex
        binary.innerHTML= decbin
        decimal.innerHTML= input.value
        hex.innerHTML=dechex
        octal.innerHTML=decoct
    }
    else if (unit.value==="Decimal" && unit2.value==="Octal1"){
        output.value= decoct
        binary.innerHTML= decbin
        decimal.innerHTML= input.value
        hex.innerHTML=dechex
        octal.innerHTML=decoct
    }
    else if (unit.value==="Hex" && unit2.value==="Decimal1"){
        output.value= hexdec
        binary.innerHTML=hexbin
        decimal.innerHTML=hexdec
        hex.innerHTML=input.value
        octal.innerHTML=hexoct
    }
    else if (unit.value==="Hex" && unit2.value==="Binary1"){
        output.value= hexbin
        binary.innerHTML=hexbin
        decimal.innerHTML=hexdec
        hex.innerHTML=input.value
        octal.innerHTML=hexoct
    }
    else if (unit.value==="Hex" && unit2.value==="Hex1"){
        output.value= input.value
        binary.innerHTML=hexbin
        decimal.innerHTML=hexdec
        hex.innerHTML=input.value
        octal.innerHTML=hexoct
    }
    else if (unit.value==="Hex" && unit2.value==="Octal1"){
        output.value= hexoct
        binary.innerHTML=hexbin
        decimal.innerHTML=hexdec
        hex.innerHTML=input.value
        octal.innerHTML=hexoct
    }
    else if (unit.value==="Octal" && unit2.value==="Decimal1"){
        output.value= octdec
        binary.innerHTML= octbin
        decimal.innerHTML=octdec
        hex.innerHTML=octhex
        octal.innerHTML=input.value
    }
    else if (unit.value==="Octal" && unit2.value==="Binary1"){
        output.value= octbin
        binary.innerHTML= octbin
        decimal.innerHTML=octdec
        hex.innerHTML=octhex
        octal.innerHTML=input.value
    }
    else if (unit.value==="Octal" && unit2.value==="Hex1"){
        output.value= octhex
        binary.innerHTML= octbin
        decimal.innerHTML=octdec
        hex.innerHTML=octhex
        octal.innerHTML=input.value
    }
    else if (unit.value==="Octal" && unit2.value==="Octal1"){
        output.value= input.value
        binary.innerHTML= octbin
        decimal.innerHTML=octdec
        hex.innerHTML=octhex
        octal.innerHTML=input.value
    }
}





unit2.onchange=()=>{
    const dec_bin=input.value

    let dec_bina=parseInt(dec_bin,10)
    let decbin=dec_bina.toString(2)
    let dec_hex=parseInt(dec_bin,10)
    let dechex=dec_hex.toString(16)
    let dec_oct=parseInt(dec_bin,10)
    let decoct=dec_oct.toString(8)

    let oct_bin=parseInt(dec_bin,8)
    let octbin=oct_bin.toString(2)
    let oct_dec=parseInt(dec_bin,8)
    let octdec=oct_dec.toString(10)
    let oct_hex=parseInt(dec_bin,8)
    let octhex=oct_hex.toString(16)

    let hex_bin=parseInt(dec_bin,16)
    let hexbin=hex_bin.toString(2)
    let hex_dec=parseInt(dec_bin,16)
    let hexdec=hex_dec.toString(10)
    let hex_oct=parseInt(dec_bin,16)
    let hexoct=hex_oct.toString(8)
    
    let bin_dec=parseInt(dec_bin,2)
    let binhex= bin_dec.toString(16)
    let binoct= bin_dec.toString(8)
    let bindec= bin_dec.toString(10)
    if (unit.value==="Binary" && unit2.value==="Binary1"){
        output.value=bin_dec
        binary.innerHTML= bin_dec
        decimal.innerHTML=bindec
        hex.innerHTML= binhex
        octal.innerHTML=binoct
        table.style.display="block"
    }
    else if (unit.value==="Binary" && unit2.value==="Decimal1"){
        output.value=bindec
        binary.innerHTML= bin_dec
        decimal.innerHTML=bindec
        hex.innerHTML=binhex
        octal.innerHTML=binoct
        table.style.display="block"
    }
    else if (unit.value==="Binary" && unit2.value==="Hex1"){
        output.value= binhex
        binary.innerHTML= bin_dec
        decimal.innerHTML=bindec
        hex.innerHTML=binhex
        octal.innerHTML=binoct
        table.style.display="block"
    }
    else if (unit.value==="Binary" && unit2.value==="Octal1"){
        output.value=binoct
        binary.innerHTML= bin_dec
        decimal.innerHTML=bindec
        hex.innerHTML=binhex
        octal.innerHTML=binoct
        table.style.display="block"
    }
    else if (unit.value==="Decimal" && unit2.value==="Decimal1"){
        output.value= input.value
        binary.innerHTML= decbin
        decimal.innerHTML= input.value
        hex.innerHTML=dechex
        octal.innerHTML=decoct
        table.style.display="block"
    }
    else if (unit.value==="Decimal" && unit2.value==="Binary1"){
        output.value= decbin
        binary.innerHTML= decbin
        decimal.innerHTML= input.value
        hex.innerHTML=dechex
        octal.innerHTML=decoct
        table.style.display="block"
    }
    else if (unit.value==="Decimal" && unit2.value==="Hex1"){
        output.value= dechex
        binary.innerHTML= decbin
        decimal.innerHTML= input.value
        hex.innerHTML=dechex
        octal.innerHTML=decoct
        table.style.display="block"
    }
    else if (unit.value==="Decimal" && unit2.value==="Octal1"){
        output.value= decoct
        binary.innerHTML= decbin
        decimal.innerHTML= input.value
        hex.innerHTML=dechex
        octal.innerHTML=decoct
        table.style.display="block"
    }
    else if (unit.value==="Hex" && unit2.value==="Decimal1"){
        output.value= hexdec
        binary.innerHTML=hexbin
        decimal.innerHTML=hexdec
        hex.innerHTML=input.value
        octal.innerHTML=hexoct
        table.style.display="block"
    }
    else if (unit.value==="Hex" && unit2.value==="Binary1"){
        output.value= hexbin
        binary.innerHTML=hexbin
        decimal.innerHTML=hexdec
        hex.innerHTML=input.value
        octal.innerHTML=hexoct
        table.style.display="block"
    }
    else if (unit.value==="Hex" && unit2.value==="Hex1"){
        output.value= input.value
        binary.innerHTML=hexbin
        decimal.innerHTML=hexdec
        hex.innerHTML=input.value
        octal.innerHTML=hexoct
        table.style.display="block"
    }
    else if (unit.value==="Hex" && unit2.value==="Octal1"){
        output.value= hexoct
        binary.innerHTML=hexbin
        decimal.innerHTML=hexdec
        hex.innerHTML=input.value
        octal.innerHTML=hexoct
        table.style.display="block"
    }
    else if (unit.value==="Octal" && unit2.value==="Decimal1"){
        output.value= octdec
        binary.innerHTML= octbin
        decimal.innerHTML=octdec
        hex.innerHTML=octhex
        octal.innerHTML=input.value
        table.style.display="block"
    }
    else if (unit.value==="Octal" && unit2.value==="Binary1"){
        output.value= octbin
        binary.innerHTML= octbin
        decimal.innerHTML=octdec
        hex.innerHTML=octhex
        octal.innerHTML=input.value
        table.style.display="block"
    }
    else if (unit.value==="Octal" && unit2.value==="Hex1"){
        output.value= octhex
        binary.innerHTML= octbin
        decimal.innerHTML=octdec
        hex.innerHTML=octhex
        octal.innerHTML=input.value
        table.style.display="block"
    }
    else if (unit.value==="Octal" && unit2.value==="Octal1"){
        output.value= input.value
        binary.innerHTML= octbin
        decimal.innerHTML=octdec
        hex.innerHTML=octhex
        octal.innerHTML=input.value
        table.style.display="block"
    }
}





unit.onchange=()=>{
    const dec_bin=input.value

    let dec_bina=parseInt(dec_bin,10)
    let decbin=dec_bina.toString(2)
    let dec_hex=parseInt(dec_bin,10)
    let dechex=dec_hex.toString(16)
    let dec_oct=parseInt(dec_bin,10)
    let decoct=dec_oct.toString(8)

    let oct_bin=parseInt(dec_bin,8)
    let octbin=oct_bin.toString(2)
    let oct_dec=parseInt(dec_bin,8)
    let octdec=oct_dec.toString(10)
    let oct_hex=parseInt(dec_bin,8)
    let octhex=oct_hex.toString(16)

    let hex_bin=parseInt(dec_bin,16)
    let hexbin=hex_bin.toString(2)
    let hex_dec=parseInt(dec_bin,16)
    let hexdec=hex_dec.toString(10)
    let hex_oct=parseInt(dec_bin,16)
    let hexoct=hex_oct.toString(8)
    
    let bin_dec=parseInt(dec_bin,2)
    let binhex= bin_dec.toString(16)
    let binoct= bin_dec.toString(8)
    let bindec= bin_dec.toString(10)
    if (unit.value==="Binary" && unit2.value==="Binary1"){
        output.value=bin_dec
        binary.innerHTML= bin_dec
        decimal.innerHTML=bindec
        hex.innerHTML= binhex
        octal.innerHTML=binoct
        table.style.display="block"
    }
    else if (unit.value==="Binary" && unit2.value==="Decimal1"){
        output.value=bindec
        binary.innerHTML= bin_dec
        decimal.innerHTML=bindec
        hex.innerHTML=binhex
        octal.innerHTML=binoct
        table.style.display="block"
    }
    else if (unit.value==="Binary" && unit2.value==="Hex1"){
        output.value= binhex
        binary.innerHTML= bin_dec
        decimal.innerHTML=bindec
        hex.innerHTML=binhex
        octal.innerHTML=binoct
        table.style.display="block"
    }
    else if (unit.value==="Binary" && unit2.value==="Octal1"){
        output.value=binoct
        binary.innerHTML= bin_dec
        decimal.innerHTML=bindec
        hex.innerHTML=binhex
        octal.innerHTML=binoct
        table.style.display="block"
    }
    else if (unit.value==="Decimal" && unit2.value==="Decimal1"){
        output.value= input.value
        binary.innerHTML= decbin
        decimal.innerHTML= input.value
        hex.innerHTML=dechex
        octal.innerHTML=decoct
        table.style.display="block"
    }
    else if (unit.value==="Decimal" && unit2.value==="Binary1"){
        output.value= decbin
        binary.innerHTML= decbin
        decimal.innerHTML= input.value
        hex.innerHTML=dechex
        octal.innerHTML=decoct
        table.style.display="block"
    }
    else if (unit.value==="Decimal" && unit2.value==="Hex1"){
        output.value= dechex
        binary.innerHTML= decbin
        decimal.innerHTML= input.value
        hex.innerHTML=dechex
        octal.innerHTML=decoct
        table.style.display="block"
    }
    else if (unit.value==="Decimal" && unit2.value==="Octal1"){
        output.value= decoct
        binary.innerHTML= decbin
        decimal.innerHTML= input.value
        hex.innerHTML=dechex
        octal.innerHTML=decoct
        table.style.display="block"
    }
    else if (unit.value==="Hex" && unit2.value==="Decimal1"){
        output.value= hexdec
        binary.innerHTML=hexbin
        decimal.innerHTML=hexdec
        hex.innerHTML=input.value
        octal.innerHTML=hexoct
        table.style.display="block"
    }
    else if (unit.value==="Hex" && unit2.value==="Binary1"){
        output.value= hexbin
        binary.innerHTML=hexbin
        decimal.innerHTML=hexdec
        hex.innerHTML=input.value
        octal.innerHTML=hexoct
        table.style.display="block"
    }
    else if (unit.value==="Hex" && unit2.value==="Hex1"){
        output.value= input.value
        binary.innerHTML=hexbin
        decimal.innerHTML=hexdec
        hex.innerHTML=input.value
        octal.innerHTML=hexoct
        table.style.display="block"
    }
    else if (unit.value==="Hex" && unit2.value==="Octal1"){
        output.value= hexoct
        binary.innerHTML=hexbin
        decimal.innerHTML=hexdec
        hex.innerHTML=input.value
        octal.innerHTML=hexoct
        table.style.display="block"
    }
    else if (unit.value==="Octal" && unit2.value==="Decimal1"){
        output.value= octdec
        binary.innerHTML= octbin
        decimal.innerHTML=octdec
        hex.innerHTML=octhex
        octal.innerHTML=input.value
        table.style.display="block"
    }
    else if (unit.value==="Octal" && unit2.value==="Binary1"){
        output.value= octbin
        binary.innerHTML= octbin
        decimal.innerHTML=octdec
        hex.innerHTML=octhex
        octal.innerHTML=input.value
        table.style.display="block"
    }
    else if (unit.value==="Octal" && unit2.value==="Hex1"){
        output.value= octhex
        binary.innerHTML= octbin
        decimal.innerHTML=octdec
        hex.innerHTML=octhex
        octal.innerHTML=input.value
        table.style.display="block"
    }
    else if (unit.value==="Octal" && unit2.value==="Octal1"){
        output.value= input.value
        binary.innerHTML= octbin
        decimal.innerHTML=octdec
        hex.innerHTML=octhex
        octal.innerHTML=input.value
        table.style.display="block"
    }
}