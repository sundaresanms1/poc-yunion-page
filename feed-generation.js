var resultdiv = $('#post_feed');
resultdiv.empty();

const postData = [
    {
      userName: "John Doe",
      userDesignation: "Software Developer",
      userLocation: "San Francisco, CA",
      textContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      numLikes: 10,
      numComments: 5
    },
    {
      userName: "Jane Smith",
      userDesignation: "UX Designer",
      userLocation: "New York, NY",
      textContent: "Nulla euismod nisl id odio interdum, vel dictum neque maximus.",
      numLikes: 20,
      numComments: 8
    },
    {
      userName: "Bob Johnson",
      userDesignation: "Product Manager",
      userLocation: "Seattle, WA",
      textContent: "Sed et mi vehicula, consectetur elit eget, pharetra quam.",
      numLikes: 15,
      numComments: 3
    }
  ];

  

  function feed_generation() {  

    console.log(1)
    
  
    for (const post of postData) {
      
      USER_NAME = post.userName
      USER_DESIGNATION = post.userDesignation
      USER_LOCATION = post.userLocation
      TEXT_CONTENT = post.textContent
      NUM_COMMENTS = post.numComments
      NUM_LIKES = post.numLikes
      
      html_string = "<section class='u-border-1 u-border-palette-5-light-2 u-clearfix u-section-1' id='sec-62b2'> <div class='u-clearfix u-sheet u-sheet-1'> <div class='u-clearfix u-gutter-0 u-layout-wrap u-layout-wrap-1'> <div class='u-layout'> <div class='u-layout-row'> <div class='u-align-left u-container-style u-layout-cell u-right-cell u-size-60 u-layout-cell-1'> <div class='u-container-layout u-container-layout-1'> <div alt='' class='u-image u-image-circle u-image-1' src='' data-image-width='256' data-image-height='256'></div> <h2 class='u-text u-text-custom-color-1 u-text-1'>"+USER_NAME+"</h2> <h4 class='u-text u-text-palette-5-base u-text-2'>" + USER_DESIGNATION +",&nbsp" + USER_LOCATION + "</h4> <p class='u-text u-text-4'>"+TEXT_CONTENT+"</p> <img class='u-expanded-width-xs u-image u-image-default u-image-2' src='images/e1cdcde96ec836523405e386294decb940c696b8be992e0e7726198c09bd16c58d58d3039475764ce34268cab08b63a89479f7a3f88083bc8a2af1_1280.jpg' alt='' data-image-width='1280' data-image-height='853'> </div> </div> </div> </div> </div> <p class='u-text u-text-default u-text-5'>"+NUM_COMMENTS+" <span class='u-file-icon u-icon u-icon-1'><img src='images/1380338.png' alt=''></span> </p> <p class='u-text u-text-default u-text-6'>"+NUM_LIKES + " <span class='u-file-icon u-icon u-icon-2' data-animation-name='' data-animation-duration='0' data-animation-delay='0' data-animation-direction=''><img src='images/126473.png' alt=''></span> </p> <a href='' class='u-btn u-btn-round u-button-style u-custom-color-1 u-radius-9 u-btn-1'><span class='u-file-icon u-icon u-icon-3'><img src='images/18.png' alt=''></span>&nbsp;Like </a> <a href='' class='u-border-none u-btn u-btn-round u-button-style u-custom-color-1 u-radius-9 u-btn-2'><span class='u-file-icon u-icon u-text-white u-icon-4'><img src='images/1380338-a4aa210c.png' alt=''></span>&nbsp;Comment </a> <a href='' class='u-border-none u-btn u-btn-round u-button-style u-custom-color-1 u-radius-9 u-btn-3'><span class='u-file-icon u-icon u-text-white u-icon-5'><img src='images/2958791-eda71ee5.png' alt=''></span>&nbsp;Share </a> <a href='' class='u-border-none u-btn u-btn-round u-button-style u-custom-color-1 u-radius-9 u-btn-4'><span class='u-file-icon u-icon u-text-custom-color-4 u-icon-6'><img src='images/2107957-a8cee9a4.png' alt=''></span>&nbsp;Save </a> </div></section>"
      resultdiv.append(html_string)
    }

    return false;

    //Check if the mobile number exists
  }

window.addEventListener('load', function() {
    console.log(1);
    feed_generation()
  });



