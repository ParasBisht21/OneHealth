const users = [
    { aadhar: '111122223333', mobile: '8279409134' },
    { aadhar: '222233334444', mobile: '8765432109' },
    { aadhar: '333344445555', mobile: '7654321098' },
    { aadhar: '444455556666', mobile: '6543210987' },
    { aadhar: '555566667777', mobile: '5432109876' },
    { aadhar: '666677778888', mobile: '4321098765' },
    { aadhar: '777788889999', mobile: '3210987654' },
    { aadhar: '888899990000', mobile: '2109876543' },
    { aadhar: '999900001111', mobile: '1098765432' },
    { aadhar: '000011112222', mobile: '0987654321' },
];

let otp = '';
let mobile = '';

document.getElementById('patient-sign-in').addEventListener('click', function() {
    window.location.href = '/patient-sign-in'; // Replace with the actual URL of the patient sign-in page
});

document.getElementById('institute-sign-in').addEventListener('click', function() {
    window.location.href = '/institute-sign-in'; // Replace with the actual URL of the medical institute sign-in page
});

document.getElementById('sign-up-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.container').style.display = 'none';
    document.getElementById('sign-up-container').style.display = 'flex';
});

document.getElementById('sign-up-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const aadhar = document.getElementById('aadhar').value;
    const user = users.find(user => user.aadhar === aadhar);

    if (user) {
        mobile = user.mobile;
        otp = generateOTP();
        alert(`OTP sent to your mobile number: ${mobile}`); // Simulate sending OTP
        document.getElementById('sign-up-form').style.display = 'none';
        document.getElementById('otp-form').style.display = 'block';
    } else {
        document.getElementById('message').innerText = 'Aadhaar number not found';
    }
});

document.getElementById('otp-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const enteredOtp = document.getElementById('otp').value;

    if (enteredOtp === otp) {
        const healthId = generateHealthID();
        alert(`Your unique health ID: ${healthId}`); // Simulate sending Health ID
        document.getElementById('message').innerText = `Sign-up successful! Your health ID is ${healthId}`;
        document.getElementById('otp-form').style.display = 'none';
    } else {
        document.getElementById('message').innerText = 'Invalid OTP. Please try again.';
    }
});

function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

function generateHealthID() {
    return 'OH' + Math.floor(10000000 + Math.random() * 90000000).toString();
}
// Assuming you have an existing `app.js` file, you can add the following code to handle the sign-in button click event.

document.getElementById('patient-sign-in').addEventListener('click', function() {
    window.location.href = 'patient-dashboard.html';  // Redirect to patient dashboard
});

document.getElementById('institute-sign-in').addEventListener('click', function() {
    window.location.href = 'institute-dashboard.html';  // You would need to create this page similarly
});

