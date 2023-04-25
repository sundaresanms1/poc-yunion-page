
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
    // hide section 1
    console.log(1)
    document.getElementById("sec-mobile-num1").style.display = "none";
    
    // show section 2
    document.getElementById("sec-otp").style.display = "block";
    
    // return false to prevent the form from submitting

    // call the loadParameterizedPostCards function to load and display the parameterized post cards on Feed.html
    loadParameterizedPostCards(postData);
    return false;

    //Check if the mobile number exists
  }



USER_NAME = "Sundaresan"
USER_DESIGNATION = "Director"
USER_LOCATION = "Chennai"
TEXT_CONTENT = "Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet."
NUM_LIKES = 10
NUM_COMMENTS = 2



// function to load the post card template and parameterize it with post data
function loadParameterizedPostCards(postData) {
    // create an XMLHttpRequest object
    const xhr = new XMLHttpRequest();
  
    // set the callback function to handle the response
    xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        // parse the response as HTML
        const postCardHTML = new DOMParser().parseFromString(this.responseText, "text/html").getElementById('sec-62b2');
  
        // loop through post data and parameterize the post card template with each post
        for (let i = 0; i < postData.length; i++) {
          const post = postData[i];
  
          // create a copy of the post card HTML
          const parameterizedPostCard = postCardHTML.cloneNode(true);
  
          // parameterize the post card HTML using template literals
          parameterizedPostCard.querySelector('h2').textContent = post.userName;
          parameterizedPostCard.querySelector('h4').textContent = post.userDesignation;
          parameterizedPostCard.querySelectorAll('h4')[1].textContent = post.userLocation;
          parameterizedPostCard.querySelector('p').textContent = post.textContent;
          parameterizedPostCard.querySelectorAll('p')[1].textContent = post.numLikes;
          parameterizedPostCard.querySelectorAll('p')[2].textContent = post.numComments;
          
          // add the parameterized post card to the post container
          console.log(parameterizedPostCard)
          
          document.getElementById('post-container').appendChild(parameterizedPostCard);
        }
      }
    };
  
    // open the HTTP request and send it
    xhr.open('GET', 'PostCard.html', true);
    xhr.send();
  }
  
  