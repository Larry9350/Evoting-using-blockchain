let members = JSON.parse(localStorage.getItem('members')) || [];
console.log(members);
let member = {
  name: '',
  mobileNumber: '',
  age: '',
  // publicKey: '',
  otp: '',
};

function generateOTP() {
  // Generate a 6-digit random OTP
  var otp = Math.floor(100000 + Math.random() * 900000);
  return otp;
  // alert('Your OTP is: ' + otp);
  // document.getElementById('otp').value = otp;
}

function verifyOTP() {
  // Verify if the entered OTP is correct
  var memberOtp = member.otp;
  var otp = document.getElementById('otp').value;
  if (otp == '') {
    alert('Please enter OTP!');
  } else if (otp == memberOtp) {
    alert('OTP Verified!');
    var mobileNumber = member.mobileNumber;
    window.location.href = `details.html?mobileNumber=${mobileNumber}`;
  } else {
    alert('Invalid OTP Verified!');
  }
}

function register() {
  var inputPhone = document.getElementById('phone').value;
  let memberIndex = members.findIndex(
    (member) => member.mobileNumber === inputPhone
  );

  if (memberIndex >= 0) {
    member = members[memberIndex];
    alert('Existing member');
  } else {
    // Generate a QR code with the user details
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var phone = document.getElementById('phone').value;
    console.log(phone);
      var flag = 0;
if(age >= 18){
   flag = 1;
}

if(flag != 1){
   alert("Age must be greater than 18");
}
else{
   var otp = generateOTP();
   member = {
    name: name,
    mobileNumber: phone,
    age: age,
    // publicKey: publicKey,
    otp: otp,
  };
  members.push(member);
  localStorage.setItem('members', JSON.stringify(members));
  alert('New member added');

  var details =
  'Name: ' +
  member.name +
  '\nPhone: ' +
  member.mobileNumber +
  '\nOTP: ' +
  member.otp;
new QRCode(document.getElementById('qrcode'), details);
}


}
    
  
}