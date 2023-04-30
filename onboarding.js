// sec-sign-up-gst
// sec-verify-mobile-number
// sec-enter-otp
// sec-complete-profile
// sec-industry-preferences
// sec-completed-signup

function verify_gst() {
    
    // hide section 1
    
    gst = 'ABC1234'
    // Code to Verify GST
    if (gst === "ABC1234") {
        console.log("GST Verfied");
        
        document.getElementById("sec-sign-up-gst").style.display = "none"; // Sign Up GST
        document.getElementById("sec-verify-mobile-number").style.display = "block"; // Verify Mobile Number
        document.getElementById("sec-enter-otp").style.display = "none"; // Enter OTP
        document.getElementById("sec-complete-profile").style.display = "none"; // Complete Profile
        document.getElementById("sec-industry-preferences").style.display = "none"; // Industry Preferences
        document.getElementById("sec-completed-signup").style.display = "none"; // Sign Up Completion
    
                            }
    else {
        
        console.log("GST Not in DB");
         
        }
    
    // return false to prevent the form from submitting
    return false;
  
    //Check if the mobile number exists
  }


function verify_mobile_number() {
    
    // hide section 1
    
    value = '7871077838'
    // Code to Check Whether Mobile Number is in DB
        // Code to Send OTP to mobile device
        // Code to Send OTP/user_id mapping to DB
    if (value === "7871077838") {
        console.log("Entering Mobile Number, Sending OTP");
        
        document.getElementById("sec-sign-up-gst").style.display = "none"; // Sign Up GST
        document.getElementById("sec-verify-mobile-number").style.display = "none"; // Verify Mobile Number
        document.getElementById("sec-enter-otp").style.display = "block"; // Enter OTP
        document.getElementById("sec-complete-profile").style.display = "none"; // Complete Profile
        document.getElementById("sec-industry-preferences").style.display = "none"; // Industry Preferences
        document.getElementById("sec-completed-signup").style.display = "none"; // Sign Up Completion
    
                            }
    else {
        
        console.log("Mobile Number Not in DB");
         
        }
    
    // return false to prevent the form from submitting
    return false;
  
    //Check if the mobile number exists
  }


function verify_otp() {
    
    // hide section 1
    
    value = '1234'
    // Code to Verify OTP
    if (value === "1234") {
        console.log("Entering OTP, Checking if OTP is Correct");
        
        document.getElementById("sec-sign-up-gst").style.display = "none"; // Sign Up GST
        document.getElementById("sec-verify-mobile-number").style.display = "none"; // Verify Mobile Number
        document.getElementById("sec-enter-otp").style.display = "none"; // Enter OTP
        document.getElementById("sec-complete-profile").style.display = "block"; // Complete Profile
        document.getElementById("sec-industry-preferences").style.display = "none"; // Industry Preferences
        document.getElementById("sec-completed-signup").style.display = "none"; // Sign Up Completion
    
                            }
    else {
        
        console.log("OTP Incorrect");
         
        }
    
    // return false to prevent the form from submitting
    return false;
  
    //Check if the mobile number exists
  }


  function complete_profile() {
    

    document.getElementById("sec-sign-up-gst").style.display = "none"; // Sign Up GST
    document.getElementById("sec-verify-mobile-number").style.display = "none"; // Verify Mobile Number
    document.getElementById("sec-enter-otp").style.display = "none"; // Enter OTP
    document.getElementById("sec-complete-profile").style.display = "none"; // Complete Profile
    document.getElementById("sec-industry-preferences").style.display = "block"; // Industry Preferences
    document.getElementById("sec-completed-signup").style.display = "none"; // Sign Up Completion

         
    
    // return false to prevent the form from submitting
    return false;
  
    //Check if the mobile number exists
  }

  function industry_preferences() {
    // Add an event listener to the div element to detect clicks
    
    document.getElementById("sec-sign-up-gst").style.display = "none"; // Sign Up GST
    document.getElementById("sec-verify-mobile-number").style.display = "none"; // Verify Mobile Number
    document.getElementById("sec-enter-otp").style.display = "none"; // Enter OTP
    document.getElementById("sec-complete-profile").style.display = "none"; // Complete Profile
    document.getElementById("sec-industry-preferences").style.display = "none"; // Industry Preferences    
    document.getElementById("sec-completed-signup").style.display = "block"; // Sign Up Completion
  
    
    
    // return false to prevent the form from submitting
    return false;
  
    //Check if the mobile number exists
  }

function reset_industry_active_colors() {
    

    document.getElementById("industry-preference-1").style.color = "black"; // Sign Up GST
    document.getElementById("industry-preference-1").style.borderColor = "none"; // Sign Up GST
    document.getElementById("industry-preference-1").style.borderWidth = "0px"; // Sign Up GST
    
    document.getElementById("industry-preference-2").style.color = "black"; // Sign Up GST
    document.getElementById("industry-preference-2").style.borderColor = "none"; // Sign Up GST
    document.getElementById("industry-preference-2").style.borderWidth = "0px"; // Sign Up GST
    
    document.getElementById("industry-preference-3").style.color = "black"; // Sign Up GST
    document.getElementById("industry-preference-3").style.borderColor = "none"; // Sign Up GST
    document.getElementById("industry-preference-3").style.borderWidth = "0px"; // Sign Up GST
    
    document.getElementById("industry-preference-4").style.color = "black"; // Sign Up GST
    document.getElementById("industry-preference-4").style.borderColor = "none"; // Sign Up GST
    document.getElementById("industry-preference-4").style.borderWidth = "0px"; // Sign Up GST
    
    
    // return false to prevent the form from submitting
    return false;
  
    //Check if the mobile number exists
  }

FINALISED_INDUSTRY_OPTION = null;

var industry_option1 = document.getElementById("industry-preference-1");
var industry_option2 = document.getElementById("industry-preference-2");
var industry_option3 = document.getElementById("industry-preference-3");
var industry_option4 = document.getElementById("industry-preference-4");

var complete_process_button = document.getElementById("complete-signup-process");


// INDUSTRY Option 1
industry_option1.addEventListener("click", function() {
    // Perform an action when the button is clicked
console.log("Industry Option 1!");
FINALISED_INDUSTRY_OPTION = 1    

reset_industry_active_colors()
document.getElementById("industry-preference-1").style.color = "#2cccc4";

document.getElementById("industry-preference-1").style.borderColor = "#2cccc4";
document.getElementById("industry-preference-1").style.borderWidth = "6px";

});



// INDUSTRY Option 2
industry_option2.addEventListener("click", function() {
    // Perform an action when the button is clicked
console.log("Industry Option 2!");
FINALISED_INDUSTRY_OPTION = 2 

reset_industry_active_colors()
document.getElementById("industry-preference-2").style.color = "#2cccc4";

document.getElementById("industry-preference-2").style.borderColor = "#2cccc4";
document.getElementById("industry-preference-2").style.borderWidth = "6px";

});


// INDUSTRY Option 3
industry_option3.addEventListener("click", function() {
        // Perform an action when the button is clicked
console.log("Industry Option 3!");
FINALISED_INDUSTRY_OPTION = 3

reset_industry_active_colors()
document.getElementById("industry-preference-3").style.color = "#2cccc4";

document.getElementById("industry-preference-3").style.borderColor = "#2cccc4";
document.getElementById("industry-preference-3").style.borderWidth = "6px";
});



// INDUSTRY Option 4
industry_option4.addEventListener("click", function() {
            // Perform an action when the button is clicked
console.log("Industry Option 4!");
FINALISED_INDUSTRY_OPTION = 4

reset_industry_active_colors()
document.getElementById("industry-preference-4").style.color = "#2cccc4";

document.getElementById("industry-preference-4").style.borderColor = "#2cccc4";
document.getElementById("industry-preference-4").style.borderWidth = "6px";

});





// function loopWithDelay() {
//     for (var i = 50; i <= 500; i += 50) {
//       console.log(i);
//       pause(250);
//     }
//   }
  
  function pause(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() - start < delay) {
      // Wait
    }
  }


  function make_progress1() {

    // for (var i = 10; i <= 470; i += 10) {
    
    //     document.getElementById("progress-bar").style.width = i+"px";
    //     pause(100);
    //   }
    document.getElementById("progress-bar").style.width = "100px";
    
                        }

                        
// Complete Process
complete_process_button.addEventListener("click", function() {
    // Perform an action when the button is clicked
// console.log(FINALISED_INDUSTRY_OPTION)
 
industry_preferences()
make_progress1()
window.location.href = "https://sundaresanms1.github.io/poc-yunion-page/Feed.html";


});



// industry_option4.addEventListener("click", function() {
//     // Perform an action when the button is clicked
// console.log("Industry Option 4!");
// FINALISED_INDUSTRY_OPTION = 4

// reset_industry_active_colors()
// document.getElementById("industry-preference-4").style.color = "#2cccc4";

// document.getElementById("industry-preference-4").style.borderColor = "#2cccc4";
// document.getElementById("industry-preference-4").style.borderWidth = "6px";

// });

