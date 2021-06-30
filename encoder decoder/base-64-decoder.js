const crypto =() =>('crypto');
const btn = document.getElementById('clickbtn1')
const input_encoder = document.getElementById("encoderq");
const input_decoder = document.getElementById("decoderq")
input_decoder.style.display="none"
btn.onclick = function a() {const url = input_encoder.value;
    var decodedString = atob(url);
    input_decoder.style.display="block"
    input_decoder.value=decodedString;
}