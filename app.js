const copyBtn = document.querySelector(".copy")
const numberInput = document.querySelector('#numbers')
const symbolInput = document.querySelector('#symbol')
const lowerInput = document.querySelector('#lower')
const upperInput = document.querySelector('#upper')
const generateBtn = document.querySelector('.start')
const lengthInput = document.querySelector('#num-input')
const textInput = document.querySelector('#text-area')

const functionNames = {
lower:lowerLetter,
upper: upperLetter,
number:number,
symbol:symbol
}
generateBtn.addEventListener('click',()=>{
    const isUpper = upperInput.checked;
    const isLower = lowerInput.checked;
    const isNumber = numberInput.checked;
    const isSymbol = symbolInput.checked;
    const length = parseInt(lengthInput.value);
    textInput.value = generatePassword(
    isUpper,
    isLower,
    isNumber, 
    isSymbol,
    length);
})
console.log();
function generatePassword(upper,lower,number,symbol,length){
let finalPassword = '';
const count = upper + lower  + number + symbol;
const checkedValue = [{upper}, {lower}, {number}, {symbol}].filter(item=>Object.values(item)[0]);

if(count===0){
    return ' ';
} 
for(let i=0; i<length; i+=count) {
    checkedValue.forEach(type => {
        const funcName = Object.keys(type)[0];
        console.log(funcName);
        finalPassword += functionNames[funcName]();
    });
}
const generatedPassword = finalPassword.slice(0, length);
	console.log(generatedPassword);
	return generatedPassword;
}
copyBtn.addEventListener('click', ()=>{
    navigator.clipboard.writeText(textInput.value);
    alert('Password Copied to Clipboard')
    textInput.value = '';
})

function symbol(){
    let randSymbol = Math.floor(Math.random()*11)+33
    return String.fromCharCode(randSymbol);
}
function upperLetter(){
    let randUpper = Math.floor(Math.random()*26)+65;
    return String.fromCharCode(randUpper);
}
function lowerLetter(){
    let randLow = Math.floor(Math.random()*26)+97;
    return String.fromCharCode(randLow);
}
function number(){
    let randNum = Math.floor(Math.random()*10)+48;
    return String.fromCharCode(randNum);
}






