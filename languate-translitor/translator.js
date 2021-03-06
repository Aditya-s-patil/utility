const dropdown = document.querySelector('.translator-input');
const dropdownOutput = document.querySelector('.translator-output');
const transalte = document.querySelector('.btn-translate');
const inputValue = document.querySelector('.input');

transalte.addEventListener('click', () => {
    fetch(`https://api.mymemory.translated.net/get?q=`+inputValue.value+`&langpair=`+dropdown.value+'|'+dropdownOutput.value)
        .then((response) => response.json())
        .then((json) => {
            document.querySelector('.out').removeAttribute('hidden');
            document.querySelector('.out').value= json.responseData.translatedText;
    });
});