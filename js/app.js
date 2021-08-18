// pin generator

function getPin(){
    const randonmPin=Math.round(Math.random() * 10000)
    const pin= randonmPin + '';
    if(pin.length == 4){
       return pin;
    
    }
    else{
        generatePin()

    }
   
}

function generatePin(){
   const pin= getPin();
document.getElementById('generatePinDisplay').value = pin;
 
    
}

// key pad making

document.getElementById('key-pad').addEventListener('click',function(event){
const number=event.target.innerText;
const displayTypedNumber=document.getElementById('display-typed-number');
if(isNaN(number)){
if(number == 'C'){
    displayTypedNumber.value=''
}
}
else{
    const previousNumber=displayTypedNumber. value;
    const newNumber = previousNumber + number;
    displayTypedNumber. value = newNumber;
}

})

// verify Pin
function verifyPin(){
  const generatePin=  document.getElementById('generatePinDisplay').value
    const displayTypedNumber=document.getElementById('display-typed-number').value;
   const failError= document.getElementById('notify-fail');
   const successMessage= document.getElementById('notify-success');

   if(generatePin == displayTypedNumber){
    successMessage.style.display='block'
    failError.style.display='none'
   }
   else{
   
    failError.style.display='block' 
    successMessage.style.display='none'
   }
}

