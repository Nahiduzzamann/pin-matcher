//generate and set pin
document.getElementById('btn-pin-generator').addEventListener('click', function () {

    const getPin = getpin();
    // console.log(getPin);

    document.getElementById('generate-pin-input-field').value = getPin;
})
//get 4 digit pin
function getpin() {
    const generatePin = Math.round(Math.random() * 10000);
    const generatePinString = generatePin + '';
    if (generatePinString.length == 4) {
        return generatePinString;
    }
    else {
        return getpin();
    }
}
//button to pin
document.getElementById('number-body').addEventListener('click', function (e) {
    // console.log(e.target.innerText)
    let pin = e.target.innerText;

    if (pin === '1' || pin === '2' || pin === '3' || pin === '4' || pin === '5' || pin === '6' || pin === '7' || pin === '8' || pin === '9' || pin === '0') {
        document.getElementById('pin-input-field').value += pin;
    }
    else if (pin === 'C') {
        document.getElementById('pin-input-field').value = '';
    }
    else {
        return;
    }

})
//check OTP
document.getElementById('submit').addEventListener('click', function () {
    const otp = document.getElementById('generate-pin-input-field').value;
    const pin = document.getElementById('pin-input-field').value;
    if (otp === pin) {
        alert('✅ Pin Matched... Secret door is opening for you')
    }
    else {
        alert("❌ Pin Didn\'t Match, Please try again");
    }
})