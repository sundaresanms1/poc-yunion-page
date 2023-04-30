function switch_mobile2otp() {
  // hide section 1
  console.log(1);
  document.getElementById("sec-mobile-num1").style.display = "none";

  // show section 2
  document.getElementById("sec-otp").style.display = "block";

  // return false to prevent the form from submitting
  return false;

  //Check if the mobile number exists
}

function otp_check() {
  // hide section 1
  console.log(1);
  document.getElementById("sec-mobile-num1").style.display = "none";

  // show section 2
  document.getElementById("sec-otp").style.display = "none";

  // validate otp
  user = "user123";
  otp = 9999;

  // switch to Feed
  if (user == "user123") {
    if (otp == 9999) {
      window.location.href = "https://sundaresanms1.github.io/poc-yunion-page/Feed.html";
    } else {
      console.log("Incorrect OTP");
    }
  } else {
    console.log("This number doesn't exist on our platform, please register");

    window.location.href = "https://sundaresanms1.github.io/poc-yunion-page/Register.html";
  }

  //bring in user relevant feed
  // feed generation service
  // recommendation service

  // return false to prevent the form from submitting
  return false;
}

// function otp_check() {
//   // hide section 1
//   console.log(1);
//   document.getElementById("sec-mobile-num1").style.display = "none";

//   // show section 2
//   document.getElementById("sec-otp").style.display = "none";

//   // validate otp

//   // switch to Feed
//   window.location.href = "http://127.0.0.1:5500/Register.html";

//   //bring in user relevant feed
//   // feed generation service
//   // recommendation service

//   // return false to prevent the form from submitting
//   return false;
// }

