document.getElementById('btn-pin-generator').addEventListener('click',function(){
    
    const getPin = getpin();
    console.log(getPin);
})

function getpin(){
    const generatePin = Math.round(Math.random()*10000);
    const generatePinString = generatePin+'';
    if(generatePinString.length == 4){
        return generatePinString;
    }
    else{
        return getpin();
    }
}