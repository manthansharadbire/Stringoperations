const inputElement = document.getElementById('input');
const outputElement = document.getElementById('output');

function handleuppercase(){
outputElement.value = inputElement.value.toUpperCase();
}

function handlelowercase(){
outputElement.value = inputElement.value.toLowerCase();
}

function handlewordcount(){
outputElement.value = inputElement.value.split(" ").length;
}

function handlecharactercount(){
outputElement.value = inputElement.value.length;
}

