const btn = document.querySelector('#clickbtn1')
const btn1= document.querySelector('#clickbtn2')
const input_encoder = document.querySelector("#encoderq");
const input_decoder = document.querySelector("#decoderq")
btn.onclick = function a() {const url = input_encoder.value;
    const code= encodeURIComponent(url)
   input_decoder.value=code;
}

btn1.onclick = function d() {const deurl = input_decoder.value;
    const decode= decodeURIComponent(deurl)
    input_encoder.value=decode;
}
