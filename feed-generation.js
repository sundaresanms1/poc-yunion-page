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
    fetch_feed()
  });


// function fetch_feed() {
  
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "http://ec2-52-1-7-62.compute-1.amazonaws.com:8080/yunion/contents/details");
//   xhr.send();
//   xhr.responseType = "json";
//   xhr.onload = () => {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       const data = xhr.response;
//       console.log(data);
//     } else {
//       console.log(`Error: ${xhr.status}`);
//     }
//   };

//   return data

// }



function fetch_feed() {
sample_feed = [
  {
      "id": 1,
      "owner": {
          "id": 202,
          "first_name": "Sundaresan",
          "last_name": "Subramanian",
          "email": "test@email.com"
      },
      "description": "Sample post",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "This is the first sample post created on Yunion",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 4,
      "owner": {
          "id": 202,
          "first_name": "Sundaresan",
          "last_name": "Subramanian",
          "email": "test@email.com"
      },
      "description": "Sample post",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "This is a great pltform happy to see so many industry experts on Yunion!",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 5,
      "owner": {
          "id": 202,
          "first_name": "Sundaresan",
          "last_name": "Subramanian",
          "email": "test@email.com"
      },
      "description": "Sample post",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "This is a great pltform happy to see so many industry experts on Yunion!",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 25,
      "owner": {
          "id": 202,
          "first_name": "Sundaresan",
          "last_name": "Subramanian",
          "email": "test@email.com"
      },
      "description": "Sample post",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "This is a great pltform happy to see so many industry experts on Yunion!",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 27,
      "owner": {
          "id": 201,
          "first_name": "JOHN",
          "last_name": "SMALL",
          "email": "JOHN_SMALL@gmail.com"
      },
      "description": "Sample post",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "This is a great pltform happy to see so many industry experts on Yunion!",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 28,
      "owner": {
          "id": 201,
          "first_name": "JOHN",
          "last_name": "SMALL",
          "email": "JOHN_SMALL@gmail.com"
      },
      "description": "Sample post",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "This is a great pltform happy to see so many industry experts on Yunion!",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 38,
      "owner": {
          "id": 201,
          "first_name": "JOHN",
          "last_name": "SMALL",
          "email": "JOHN_SMALL@gmail.com"
      },
      "description": "Sample post",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "This is a great pltform happy to see so many industry experts on Yunion!",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 39,
      "owner": {
          "id": 201,
          "first_name": "JOHN",
          "last_name": "SMALL",
          "email": "JOHN_SMALL@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "This is a great pltform happy to see so many industry experts on Yunion!",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 41,
      "owner": {
          "id": 201,
          "first_name": "JOHN",
          "last_name": "SMALL",
          "email": "JOHN_SMALL@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "This is a great pltform happy to see so many industry experts on Yunion!",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 44,
      "owner": {
          "id": 201,
          "first_name": "JOHN",
          "last_name": "SMALL",
          "email": "JOHN_SMALL@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "THE COVID-19 PANDEMIC HAS BROUGHT UNPRECEDENTED CH",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 45,
      "owner": {
          "id": 201,
          "first_name": "JOHN",
          "last_name": "SMALL",
          "email": "JOHN_SMALL@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "THE COVID-19 PANDEMIC HAS BROUGHT UNPRECEDENTED CHALLENGES FOR THE SEAFOOD INDUSTRY, FROM DISRUPTION",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 46,
      "owner": {
          "id": 201,
          "first_name": "JOHN",
          "last_name": "SMALL",
          "email": "JOHN_SMALL@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "THE COVID-19 PANDEMIC HAS BROUGHT UNPRECEDENTED CHALLENGES FOR THE SEAFOOD INDUSTRY, FROM DISRUPTIONS IN GLOBAL TRADE TO REDUCED DEMAND AND PRICES. AS",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 48,
      "owner": {
          "id": 201,
          "first_name": "JOHN",
          "last_name": "SMALL",
          "email": "JOHN_SMALL@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "THE COVID-19 PANDEMIC HAS BROUGHT UNPRECEDENTED CHALLENGES FOR THE SEAFOOD INDUSTRY, FROM DISRUPTIONS IN GLOBAL TRADE TO REDUCED DEMAND AND PRICES. AS WE NAVIGATE THIS CRISIS, IT IS CRUCIAL TO SUPPORT THE WELFARE OF FISHERS AND AQUACULTURE WORKERS, A",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 50,
      "owner": {
          "id": 201,
          "first_name": "JOHN",
          "last_name": "SMALL",
          "email": "JOHN_SMALL@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "FISHERIES AND AQUACULTURE ARE CRUCIAL SECTORS THAT CONTRIBUTE TO FOOD SECURITY, NUTRITION AND EMPLOYMENT OPPORTUNITIES IN INDIA. HOWEVER, THEY ARE ALSO VULNERABLE TO THE IMPACTS OF CLIMATE CHANGE, OVERFISHING AND POLLUTION. AS AN EXPERT IN THE FIELD,",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 51,
      "owner": {
          "id": 201,
          "first_name": "JOHN",
          "last_name": "SMALL",
          "email": "JOHN_SMALL@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AT CENTRAL INSTITUTE OF BRACKISHWATER AQUACULTURE, WE ARE COMMITTED TO RESEARCH AND DEVELOPMENT EFFORTS THAT CAN PROMOTE SUSTAINABLE AND PROFITABLE AQUACULTURE PRACTICES. OUR RECENT COLLABORATIONS WITH INDUSTRY PARTNERS HAVE YIELDED POSITIVE RESULTS ",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 52,
      "owner": {
          "id": 201,
          "first_name": "JOHN",
          "last_name": "SMALL",
          "email": "JOHN_SMALL@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "INDIA HAS A RICH DIVERSITY OF AQUATIC RESOURCES THAT CAN SUPPORT A THRIVING FISHERIES AND AQUACULTURE INDUSTRY. HOWEVER, THERE IS A NEED TO LEVERAGE MODERN TECHNOLOGIES AND MANAGEMENT PRACTICES TO REALIZE THEIR FULL POTENTIAL. AS THE DIRECTOR OF CENT",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 53,
      "owner": {
          "id": 201,
          "first_name": "JOHN",
          "last_name": "SMALL",
          "email": "JOHN_SMALL@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS WE CELEBRATE WORLD FISHERIES DAY, LET US REFLECT ON THE CRUCIAL ROLE THAT FISHERIES AND AQUACULTURE PLAY IN FEEDING THE WORLD AND SUPPORTING LIVELIHOODS. HOWEVER, LET US ALSO RECOGNIZE THE CHALLENGES THAT THESE SECTORS FACE, SUCH AS OVERFISHING, C",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 54,
      "owner": {
          "id": 201,
          "first_name": "JOHN",
          "last_name": "SMALL",
          "email": "JOHN_SMALL@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS THE DIRECTOR OF RESEARCH AT KERALA UNIVERSITY OF FISHERIES AND OCEAN STUDIES (KUFOS), I AM THRILLED TO ANNOUNCE THAT OUR SCIENTISTS HAVE SUCCESSFULLY DEVELOPED A NEW TECHNOLOGY TO ENHANCE THE GROWTH RATE OF BLACK TIGER SHRIMP. THIS INNOVATION WILL",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 55,
      "owner": {
          "id": 200,
          "first_name": "SALLY",
          "last_name": "LORENZO",
          "email": "SALLY_LORENZO@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS THE INDIAN SOLAR INDUSTRY CONTINUES TO GROW, WE'RE SEEING A NEW WAVE OF INNOVATION AND ENTREPRENEURSHIP IN AREAS LIKE ENERGY STORAGE, ELECTRIC VEHICLES, AND SMART GRID TECHNOLOGIES. THIS IS AN EXCITING TIME FOR THE INDUSTRY, AND WE BELIEVE THAT TH",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 56,
      "owner": {
          "id": 200,
          "first_name": "SALLY",
          "last_name": "LORENZO",
          "email": "SALLY_LORENZO@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "SOLAR ENERGY HAS THE POTENTIAL TO BE A GAME-CHANGER FOR INDIA'S ENERGY SECURITY AND ECONOMIC DEVELOPMENT. AT BRIDGE TO INDIA, WE'RE WORKING ON PROJECTS THAT PROMOTE SOLAR ENERGY SOLUTIONS FOR INDUSTRIAL AND COMMERCIAL CLIENTS, HELPING THEM REDUCE COS",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 57,
      "owner": {
          "id": 200,
          "first_name": "SALLY",
          "last_name": "LORENZO",
          "email": "SALLY_LORENZO@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "THE INDIAN SOLAR INDUSTRY IS NOT JUST ABOUT ELECTRICITY GENERATION - IT'S ABOUT CREATING A MORE SUSTAINABLE AND EQUITABLE SOCIETY. AT BRIDGE TO INDIA, WE'RE WORKING ON PROJECTS THAT USE SOLAR ENERGY TO POWER SCHOOLS, HOSPITALS, AND COMMUNITY CENTERS ",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 58,
      "owner": {
          "id": 200,
          "first_name": "SALLY",
          "last_name": "LORENZO",
          "email": "SALLY_LORENZO@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "SOLAR ENERGY IS NOT JUST A SOURCE OF POWER - IT'S A SYMBOL OF HOPE AND PROGRESS. AT BRIDGE TO INDIA, WE'RE PROUD TO BE WORKING ON PROJECTS THAT CREATE JOBS, IMPROVE LIVELIHOODS, AND REDUCE CARBON EMISSIONS. WE BELIEVE THAT SOLAR ENERGY CAN BE A POWER",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 59,
      "owner": {
          "id": 200,
          "first_name": "SALLY",
          "last_name": "LORENZO",
          "email": "SALLY_LORENZO@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "THE INDIAN SOLAR INDUSTRY HAS COME A LONG WAY IN THE LAST DECADE, AND IT'S EXCITING TO SEE THE PROGRESS WE'VE MADE. BUT THERE'S STILL MUCH WORK TO BE DONE TO UNLOCK THE FULL POTENTIAL OF SOLAR ENERGY IN INDIA. AT BRIDGE TO INDIA, WE'RE FOCUSED ON DRI",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 60,
      "owner": {
          "id": 199,
          "first_name": "JENNIFER",
          "last_name": "CYPHERS",
          "email": "JENNIFER_CYPHERS@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "THE COVID-19 PANDEMIC HAS CREATED UNPRECEDENTED CHALLENGES FOR THE INDIAN SOLAR INDUSTRY, BUT IT HAS ALSO HIGHLIGHTED THE RESILIENCE AND CREATIVITY OF OUR COMMUNITY. AT BRIDGE TO INDIA, WE'RE ADAPTING TO THE NEW REALITY, LEVERAGING DIGITAL TECHNOLOGI",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 61,
      "owner": {
          "id": 199,
          "first_name": "JENNIFER",
          "last_name": "CYPHERS",
          "email": "JENNIFER_CYPHERS@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "ONE OF THE MOST EXCITING THINGS ABOUT THE INDIAN SOLAR INDUSTRY IS THE POTENTIAL TO CREATE NEW BUSINESS MODELS AND INVESTMENT OPPORTUNITIES. AT BRIDGE TO INDIA, WE'RE WORKING ON PROJECTS THAT COMBINE SOLAR ENERGY WITH INNOVATIVE FINANCING MECHANISMS,",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 62,
      "owner": {
          "id": 199,
          "first_name": "JENNIFER",
          "last_name": "CYPHERS",
          "email": "JENNIFER_CYPHERS@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "I'M THRILLED TO ANNOUNCE THAT SAURYA ENERTECH HAS JUST COMPLETED THE INSTALLATION OF A 2 MW SOLAR POWER PLANT IN GUJARAT. WE'RE PROUD TO BE CONTRIBUTING TO INDIA'S TRANSITION TO CLEAN ENERGY AND LOOK FORWARD TO DELIVERING MORE INNOVATIVE SOLUTIONS TO",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 63,
      "owner": {
          "id": 199,
          "first_name": "JENNIFER",
          "last_name": "CYPHERS",
          "email": "JENNIFER_CYPHERS@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "IT'S OFFICIAL: SOLAR ENERGY IS NOW CHEAPER THAN COAL IN MOST PARTS OF INDIA. THIS IS A MAJOR MILESTONE FOR THE INDIAN SOLAR INDUSTRY AND A SIGN OF THE TREMENDOUS PROGRESS WE'VE MADE IN RECENT YEARS. HOWEVER, THERE'S STILL MUCH WORK TO BE DONE TO ACCE",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 64,
      "owner": {
          "id": 199,
          "first_name": "JENNIFER",
          "last_name": "CYPHERS",
          "email": "JENNIFER_CYPHERS@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "ONE OF THE MOST EXCITING THINGS ABOUT SOLAR ENERGY IS ITS ABILITY TO BENEFIT COMMUNITIES ACROSS THE COUNTRY. RECENTLY, WE'VE BEEN WORKING ON A PROJECT TO INSTALL SOLAR-POWERED IRRIGATION SYSTEMS IN RURAL AREAS, HELPING FARMERS BOOST THEIR CROP YIELDS",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 65,
      "owner": {
          "id": 198,
          "first_name": "MARTA",
          "last_name": "MOONEY",
          "email": "MARTA_MOONEY@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AQUACULTURE HAS THE POTENTIAL TO PLAY A MAJOR ROLE IN MEETING THE RISING DEMAND FOR SEAFOOD, BUT IT IS IMPORTANT TO ENSURE THAT IT IS SUSTAINABLE AND DOES NOT HARM THE ENVIRONMENT. AS AN EXPERT IN THE FIELD, I STRONGLY ADVOCATE FOR RESPONSIBLE AQUACU",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 66,
      "owner": {
          "id": 198,
          "first_name": "MARTA",
          "last_name": "MOONEY",
          "email": "MARTA_MOONEY@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "THE FISHING INDUSTRY IS A CRITICAL SOURCE OF LIVELIHOOD FOR MILLIONS OF PEOPLE WORLDWIDE. HOWEVER, IT IS ALSO FACING SEVERAL CHALLENGES INCLUDING OVERFISHING, CLIMATE CHANGE, AND POLLUTION. AS A FISHERIES EXPERT, I BELIEVE THAT IT IS IMPERATIVE TO AD",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 67,
      "owner": {
          "id": 198,
          "first_name": "MARTA",
          "last_name": "MOONEY",
          "email": "MARTA_MOONEY@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AT KUFOS, WE ARE COMMITTED TO PROMOTING INNOVATION AND ENTREPRENEURSHIP IN THE FISHERIES SECTOR. WE RECENTLY LAUNCHED A NEW INCUBATION CENTER TO SUPPORT STARTUPS AND SMES THAT ARE WORKING ON CUTTING-EDGE SOLUTIONS IN AREAS SUCH AS AQUACULTURE, FISHER",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 68,
      "owner": {
          "id": 198,
          "first_name": "MARTA",
          "last_name": "MOONEY",
          "email": "MARTA_MOONEY@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "THE COVID-19 PANDEMIC HAS BROUGHT UNPRECEDENTED CHALLENGES FOR THE SEAFOOD INDUSTRY, FROM DISRUPTIONS IN GLOBAL TRADE TO REDUCED DEMAND AND PRICES. AS WE NAVIGATE THIS CRISIS, IT IS CRUCIAL TO SUPPORT THE WELFARE OF FISHERS AND AQUACULTURE WORKERS, A",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 69,
      "owner": {
          "id": 198,
          "first_name": "MARTA",
          "last_name": "MOONEY",
          "email": "MARTA_MOONEY@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS THE DIRECTOR OF CENTRAL INSTITUTE OF BRACKISHWATER AQUACULTURE, I AM EXCITED TO SHARE THAT OUR TEAM HAS SUCCESSFULLY DEVELOPED A NEW FEED TECHNOLOGY THAT CAN ENHANCE THE GROWTH RATE AND DISEASE RESISTANCE OF SHRIMP. OUR RESEARCH FINDINGS HOLD GREA",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 70,
      "owner": {
          "id": 197,
          "first_name": "RUBY",
          "last_name": "SMITH",
          "email": "RUBY_SMITH@gmail.com"
      },
      "description": "AGRO POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS A FARMER IN INDIA, I'VE SEEN FIRSTHAND THE IMPACT THAT SUSTAINABLE AGRICULTURE PRACTICES CAN HAVE ON THE LAND AND THE COMMUNITY. BY USING TECHNIQUES LIKE CROP ROTATION, NATURAL PEST CONTROL, AND ORGANIC FERTILIZERS, WE CAN IMPROVE SOIL HEALTH, RED",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 71,
      "owner": {
          "id": 197,
          "first_name": "RUBY",
          "last_name": "SMITH",
          "email": "RUBY_SMITH@gmail.com"
      },
      "description": "AGRO POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS AN AGRICULTURAL RESEARCHER IN INDIA, I'M CONSTANTLY EXPLORING NEW WAYS TO IMPROVE CROP YIELDS, REDUCE WASTE, AND INCREASE EFFICIENCY. ONE PROMISING AREA OF RESEARCH IS PRECISION AGRICULTURE, WHICH USES TECHNOLOGIES LIKE DRONES, SENSORS, AND AI TO ",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 72,
      "owner": {
          "id": 197,
          "first_name": "RUBY",
          "last_name": "SMITH",
          "email": "RUBY_SMITH@gmail.com"
      },
      "description": "AGRO POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS A FOOD PROCESSOR IN INDIA, I'M COMMITTED TO ENSURING THAT OUR PRODUCTS MEET THE HIGHEST STANDARDS OF QUALITY AND SAFETY. THAT'S WHY WE INVEST IN RIGOROUS TESTING AND CERTIFICATION PROCESSES, AS WELL AS CONTINUOUS IMPROVEMENT PROGRAMS TO REDUCE WAS",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 73,
      "owner": {
          "id": 197,
          "first_name": "RUBY",
          "last_name": "SMITH",
          "email": "RUBY_SMITH@gmail.com"
      },
      "description": "AGRO POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS AN AGRICULTURAL POLICY MAKER IN INDIA, I'M PROUD TO SUPPORT INITIATIVES THAT PROMOTE SUSTAINABLE AGRICULTURE, EMPOWER FARMERS, AND STRENGTHEN RURAL COMMUNITIES. THROUGH PROGRAMS LIKE CROP INSURANCE, IRRIGATION INFRASTRUCTURE, AND MARKET LINKAGES, ",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 74,
      "owner": {
          "id": 197,
          "first_name": "RUBY",
          "last_name": "SMITH",
          "email": "RUBY_SMITH@gmail.com"
      },
      "description": "AGRO POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS AN AGRICULTURAL ENTREPRENEUR IN INDIA, I SEE TREMENDOUS OPPORTUNITIES TO CREATE VALUE AND IMPACT BY BUILDING INNOVATIVE AND SCALABLE BUSINESSES IN THE AGRO-PRODUCTS SECTOR. BY LEVERAGING TECHNOLOGIES LIKE AI, BLOCKCHAIN, AND E-COMMERCE, WE CAN IMP",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 75,
      "owner": {
          "id": 196,
          "first_name": "LETHA",
          "last_name": "HOUCK",
          "email": "LETHA_HOUCK@gmail.com"
      },
      "description": "AGRO POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS A FARMER IN INDIA, I'M GRATEFUL FOR THE PROGRESS THAT HAS BEEN MADE TO IMPROVE AGRICULTURAL PRACTICES AND INCREASE PRODUCTIVITY. BUT WE NEED TO BE MINDFUL OF THE ENVIRONMENTAL IMPACT OF OUR WORK. LET'S CONTINUE TO EXPLORE AND ADOPT SUSTAINABLE AGR",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 76,
      "owner": {
          "id": 196,
          "first_name": "LETHA",
          "last_name": "HOUCK",
          "email": "LETHA_HOUCK@gmail.com"
      },
      "description": "AGRO POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS A FARMER IN INDIA, I KNOW FIRSTHAND THE IMPORTANCE OF HAVING ACCESS TO HIGH-QUALITY SEEDS AND FERTILIZERS. BY INVESTING IN RESEARCH AND DEVELOPMENT, WE CAN IMPROVE CROP YIELDS AND SUPPORT THE LIVELIHOODS OF MILLIONS OF FARMERS ACROSS THE COUNTRY. ",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 77,
      "owner": {
          "id": 196,
          "first_name": "LETHA",
          "last_name": "HOUCK",
          "email": "LETHA_HOUCK@gmail.com"
      },
      "description": "AGRO POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS A FARMER IN INDIA, I KNOW THAT SMALL CHANGES CAN MAKE A BIG IMPACT ON OUR FARMS AND IN OUR COMMUNITIES. BY USING RENEWABLE ENERGY, SUCH AS SOLAR POWER, WE CAN REDUCE OUR RELIANCE ON FOSSIL FUELS AND REDUCE OUR CARBON FOOTPRINT. LET'S TAKE SMALL ST",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 78,
      "owner": {
          "id": 196,
          "first_name": "LETHA",
          "last_name": "HOUCK",
          "email": "LETHA_HOUCK@gmail.com"
      },
      "description": "AGRO POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS A FARMER IN INDIA, I'M PROUD TO BE A PART OF AN INDUSTRY THAT FEEDS MILLIONS OF PEOPLE ACROSS THE COUNTRY. BUT WE NEED TO DO MORE TO ENSURE THAT OUR FOOD SYSTEMS ARE EQUITABLE AND SUSTAINABLE. LET'S WORK TOGETHER TO IMPROVE ACCESS TO MARKETS, FINA",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 79,
      "owner": {
          "id": 196,
          "first_name": "LETHA",
          "last_name": "HOUCK",
          "email": "LETHA_HOUCK@gmail.com"
      },
      "description": "AGRO POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS AN AGRICULTURAL RESEARCHER IN INDIA, I'M EXCITED ABOUT THE POTENTIAL OF BIOTECHNOLOGY TO TRANSFORM THE FOOD AND AGRICULTURE SECTOR. BY USING GENETIC ENGINEERING TO CREATE DISEASE-RESISTANT CROPS, WE CAN REDUCE THE USE OF HARMFUL PESTICIDES AND INC",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 80,
      "owner": {
          "id": 195,
          "first_name": "PAUL",
          "last_name": "BONNER",
          "email": "PAUL_BONNER@gmail.com"
      },
      "description": "AGRO POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS AN AGRICULTURAL RESEARCHER IN INDIA, I BELIEVE THAT WE NEED TO TAKE A HOLISTIC APPROACH TO SUSTAINABLE AGRICULTURE. THIS MEANS THINKING ABOUT THE SOCIAL, ECONOMIC, AND ENVIRONMENTAL IMPACTS OF OUR WORK, AND STRIVING FOR EQUITABLE AND INCLUSIVE OUT",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 81,
      "owner": {
          "id": 195,
          "first_name": "PAUL",
          "last_name": "BONNER",
          "email": "PAUL_BONNER@gmail.com"
      },
      "description": "AGRO POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS AN AGRICULTURAL RESEARCHER IN INDIA, I'M PROUD TO WORK ON PROJECTS THAT SUPPORT SMALL FARMERS AND IMPROVE FOOD SECURITY. BY PROVIDING TRAINING, ACCESS TO FINANCE, AND MARKET LINKAGES, WE CAN HELP SMALL FARMERS TO INCREASE THEIR PRODUCTIVITY AND IN",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 82,
      "owner": {
          "id": 195,
          "first_name": "PAUL",
          "last_name": "BONNER",
          "email": "PAUL_BONNER@gmail.com"
      },
      "description": "AGRO POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS AN AGRICULTURAL RESEARCHER IN INDIA, I BELIEVE THAT INNOVATION IS KEY TO IMPROVING AGRICULTURAL PRODUCTIVITY AND REDUCING WASTE. BY DEVELOPING NEW TECHNOLOGIES AND PRACTICES, SUCH AS PRECISION AGRICULTURE AND VERTICAL FARMING, WE CAN OPTIMIZE RESO",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 83,
      "owner": {
          "id": 195,
          "first_name": "PAUL",
          "last_name": "BONNER",
          "email": "PAUL_BONNER@gmail.com"
      },
      "description": "AGRO POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS AN AGRICULTURAL RESEARCHER IN INDIA, I BELIEVE THAT SCIENCE CAN HELP US TO ADDRESS SOME OF THE BIGGEST CHALLENGES IN INDIAN AGRICULTURE, FROM CLIMATE CHANGE TO FOOD SECURITY. LET'S INVEST IN RESEARCH AND DEVELOPMENT TO FIND SOLUTIONS TO THESE CHAL",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 84,
      "owner": {
          "id": 195,
          "first_name": "PAUL",
          "last_name": "BONNER",
          "email": "PAUL_BONNER@gmail.com"
      },
      "description": "AGRO POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS A FOOD PROCESSOR IN INDIA, I KNOW THE IMPORTANCE OF FOOD SAFETY AND QUALITY CONTROL. BY ADOPTING STRICT STANDARDS AND PRACTICES, WE CAN ENSURE THAT OUR PRODUCTS MEET THE HIGHEST LEVELS OF SAFETY AND QUALITY. LET'S WORK TOGETHER TO BUILD A REPUTATI",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 85,
      "owner": {
          "id": 194,
          "first_name": "MINNIE",
          "last_name": "BELCHER",
          "email": "MINNIE_BELCHER@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "FISHERIES AND AQUACULTURE ARE CRUCIAL SECTORS THAT CONTRIBUTE TO FOOD SECURITY, NUTRITION AND EMPLOYMENT OPPORTUNITIES IN INDIA. HOWEVER, THEY ARE ALSO VULNERABLE TO THE IMPACTS OF CLIMATE CHANGE, OVERFISHING AND POLLUTION. AS AN EXPERT IN THE FIELD,",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 86,
      "owner": {
          "id": 194,
          "first_name": "MINNIE",
          "last_name": "BELCHER",
          "email": "MINNIE_BELCHER@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AT CENTRAL INSTITUTE OF BRACKISHWATER AQUACULTURE, WE ARE COMMITTED TO RESEARCH AND DEVELOPMENT EFFORTS THAT CAN PROMOTE SUSTAINABLE AND PROFITABLE AQUACULTURE PRACTICES. OUR RECENT COLLABORATIONS WITH INDUSTRY PARTNERS HAVE YIELDED POSITIVE RESULTS ",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 87,
      "owner": {
          "id": 194,
          "first_name": "MINNIE",
          "last_name": "BELCHER",
          "email": "MINNIE_BELCHER@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "INDIA HAS A RICH DIVERSITY OF AQUATIC RESOURCES THAT CAN SUPPORT A THRIVING FISHERIES AND AQUACULTURE INDUSTRY. HOWEVER, THERE IS A NEED TO LEVERAGE MODERN TECHNOLOGIES AND MANAGEMENT PRACTICES TO REALIZE THEIR FULL POTENTIAL. AS THE DIRECTOR OF CENT",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 88,
      "owner": {
          "id": 194,
          "first_name": "MINNIE",
          "last_name": "BELCHER",
          "email": "MINNIE_BELCHER@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS WE CELEBRATE WORLD FISHERIES DAY, LET US REFLECT ON THE CRUCIAL ROLE THAT FISHERIES AND AQUACULTURE PLAY IN FEEDING THE WORLD AND SUPPORTING LIVELIHOODS. HOWEVER, LET US ALSO RECOGNIZE THE CHALLENGES THAT THESE SECTORS FACE, SUCH AS OVERFISHING, C",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 89,
      "owner": {
          "id": 194,
          "first_name": "MINNIE",
          "last_name": "BELCHER",
          "email": "MINNIE_BELCHER@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS THE DIRECTOR OF RESEARCH AT KERALA UNIVERSITY OF FISHERIES AND OCEAN STUDIES (KUFOS), I AM THRILLED TO ANNOUNCE THAT OUR SCIENTISTS HAVE SUCCESSFULLY DEVELOPED A NEW TECHNOLOGY TO ENHANCE THE GROWTH RATE OF BLACK TIGER SHRIMP. THIS INNOVATION WILL",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 90,
      "owner": {
          "id": 193,
          "first_name": "DERRICK",
          "last_name": "ROBERTS",
          "email": "DERRICK_ROBERTS@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "INDIA HAS SET AN AMBITIOUS TARGET OF 100 GW OF SOLAR CAPACITY BY 2022. WHILE WE'VE MADE SIGNIFICANT PROGRESS IN RECENT YEARS, THERE ARE STILL CHALLENGES AROUND PROJECT FINANCING AND REVENUE ASSURANCE THAT NEED TO BE ADDRESSED. WE NEED INNOVATIVE SOLU",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 91,
      "owner": {
          "id": 193,
          "first_name": "DERRICK",
          "last_name": "ROBERTS",
          "email": "DERRICK_ROBERTS@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS THE INDIAN SOLAR INDUSTRY CONTINUES TO GROW AND MATURE, WE'RE SEEING DEVELOPERS AND INVESTORS EXPLORE NEW BUSINESS MODELS AND FINANCING MECHANISMS BEYOND THE AUCTION-BASED MARKET. THIS IS A POSITIVE DEVELOPMENT, BUT WE NEED TO ENSURE THAT THE MARK",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 92,
      "owner": {
          "id": 193,
          "first_name": "DERRICK",
          "last_name": "ROBERTS",
          "email": "DERRICK_ROBERTS@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "SOLAR ENERGY HAS THE POTENTIAL TO TRANSFORM INDIA'S RURAL ECONOMY AND CREATE JOBS IN AREAS LIKE MANUFACTURING, INSTALLATION, AND MAINTENANCE. AT CEEW, WE'RE WORKING ON PROJECTS TO PROMOTE DECENTRALIZED SOLAR ENERGY SOLUTIONS AND SUPPORT LOCAL ENTREPR",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 93,
      "owner": {
          "id": 193,
          "first_name": "DERRICK",
          "last_name": "ROBERTS",
          "email": "DERRICK_ROBERTS@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "THE INDIAN SOLAR INDUSTRY IS EXPECTED TO GROW AT A CAGR OF 30% OVER THE NEXT FIVE YEARS, DRIVEN BY FALLING COSTS AND SUPPORTIVE POLICIES. THIS IS A REMARKABLE ACHIEVEMENT AND A TESTAMENT TO THE HARD WORK AND DEDICATION OF EVERYONE IN THE INDUSTRY. HO",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 94,
      "owner": {
          "id": 193,
          "first_name": "DERRICK",
          "last_name": "ROBERTS",
          "email": "DERRICK_ROBERTS@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "THE RECENT DROP IN SOLAR TARIFFS TO RECORD LOWS IS A SIGN OF THE TREMENDOUS PROGRESS WE'VE MADE IN REDUCING COSTS AND INCREASING EFFICIENCY. HOWEVER, WE NEED TO ENSURE THAT THE SOLAR MARKET IS SUSTAINABLE AND THAT DEVELOPERS AND INVESTORS CAN MAKE A ",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 95,
      "owner": {
          "id": 192,
          "first_name": "RONALD",
          "last_name": "BURGER",
          "email": "RONALD_BURGER@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AQUACULTURE HAS THE POTENTIAL TO PLAY A MAJOR ROLE IN MEETING THE RISING DEMAND FOR SEAFOOD, BUT IT IS IMPORTANT TO ENSURE THAT IT IS SUSTAINABLE AND DOES NOT HARM THE ENVIRONMENT. AS AN EXPERT IN THE FIELD, I STRONGLY ADVOCATE FOR RESPONSIBLE AQUACU",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 96,
      "owner": {
          "id": 192,
          "first_name": "RONALD",
          "last_name": "BURGER",
          "email": "RONALD_BURGER@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "THE FISHING INDUSTRY IS A CRITICAL SOURCE OF LIVELIHOOD FOR MILLIONS OF PEOPLE WORLDWIDE. HOWEVER, IT IS ALSO FACING SEVERAL CHALLENGES INCLUDING OVERFISHING, CLIMATE CHANGE, AND POLLUTION. AS A FISHERIES EXPERT, I BELIEVE THAT IT IS IMPERATIVE TO AD",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 97,
      "owner": {
          "id": 192,
          "first_name": "RONALD",
          "last_name": "BURGER",
          "email": "RONALD_BURGER@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AT KUFOS, WE ARE COMMITTED TO PROMOTING INNOVATION AND ENTREPRENEURSHIP IN THE FISHERIES SECTOR. WE RECENTLY LAUNCHED A NEW INCUBATION CENTER TO SUPPORT STARTUPS AND SMES THAT ARE WORKING ON CUTTING-EDGE SOLUTIONS IN AREAS SUCH AS AQUACULTURE, FISHER",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 98,
      "owner": {
          "id": 192,
          "first_name": "RONALD",
          "last_name": "BURGER",
          "email": "RONALD_BURGER@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "THE COVID-19 PANDEMIC HAS BROUGHT UNPRECEDENTED CHALLENGES FOR THE SEAFOOD INDUSTRY, FROM DISRUPTIONS IN GLOBAL TRADE TO REDUCED DEMAND AND PRICES. AS WE NAVIGATE THIS CRISIS, IT IS CRUCIAL TO SUPPORT THE WELFARE OF FISHERS AND AQUACULTURE WORKERS, A",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 99,
      "owner": {
          "id": 192,
          "first_name": "RONALD",
          "last_name": "BURGER",
          "email": "RONALD_BURGER@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS THE DIRECTOR OF CENTRAL INSTITUTE OF BRACKISHWATER AQUACULTURE, I AM EXCITED TO SHARE THAT OUR TEAM HAS SUCCESSFULLY DEVELOPED A NEW FEED TECHNOLOGY THAT CAN ENHANCE THE GROWTH RATE AND DISEASE RESISTANCE OF SHRIMP. OUR RESEARCH FINDINGS HOLD GREA",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 100,
      "owner": {
          "id": 191,
          "first_name": "HOLLY",
          "last_name": "ABEL",
          "email": "HOLLY_ABEL@gmail.com"
      },
      "description": "AGRO POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS A FOOD PROCESSOR IN INDIA, I BELIEVE THAT WE HAVE A RESPONSIBILITY TO MINIMIZE WASTE AND USE RESOURCES EFFICIENTLY. BY ADOPTING CIRCULAR ECONOMY PRINCIPLES, WE CAN REDUCE OUR ENVIRONMENTAL IMPACT AND CREATE VALUE FOR OUR BUSINESS. LET'S EMBRACE SU",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 101,
      "owner": {
          "id": 191,
          "first_name": "HOLLY",
          "last_name": "ABEL",
          "email": "HOLLY_ABEL@gmail.com"
      },
      "description": "AGRO POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS A FOOD PROCESSOR IN INDIA, I'M PROUD TO SUPPORT INDIAN FARMERS BY SOURCING HIGH-QUALITY INGREDIENTS AND PROMOTING FAIR TRADE PRACTICES. LET'S WORK TOGETHER TO BUILD STRONG RELATIONSHIPS WITH OUR SUPPLIERS, AND TO CREATE A MORE EQUITABLE AND SUSTAI",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 102,
      "owner": {
          "id": 191,
          "first_name": "HOLLY",
          "last_name": "ABEL",
          "email": "HOLLY_ABEL@gmail.com"
      },
      "description": "AGRO POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS A FOOD PROCESSOR IN INDIA, I KNOW THAT PACKAGING PLAYS AN IMPORTANT ROLE IN PROTECTING AND PRESERVING OUR FOOD PRODUCTS. BUT WE NEED TO ENSURE THAT OUR PACKAGING IS SUSTAINABLE AND ENVIRONMENTALLY FRIENDLY. LET'S INVEST IN RESEARCH AND DEVELOPMENT",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 103,
      "owner": {
          "id": 191,
          "first_name": "HOLLY",
          "last_name": "ABEL",
          "email": "HOLLY_ABEL@gmail.com"
      },
      "description": "AGRO POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS A FOOD PROCESSOR IN INDIA, I'M EXCITED ABOUT THE POTENTIAL OF TECHNOLOGY TO TRANSFORM THE FOOD PROCESSING INDUSTRY. BY USING AUTOMATION, AI, AND BIG DATA, WE CAN OPTIMIZE OUR PRODUCTION PROCESSES AND IMPROVE QUALITY CONTROL. LET'S CONTINUE TO INVE",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 104,
      "owner": {
          "id": 191,
          "first_name": "HOLLY",
          "last_name": "ABEL",
          "email": "HOLLY_ABEL@gmail.com"
      },
      "description": "AGRO POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS AN AGRICULTURAL POLICY MAKER IN INDIA, I'M COMMITTED TO SUPPORTING SMALL FARMERS AND RURAL COMMUNITIES. BY INVESTING IN INFRASTRUCTURE, TRAINING, AND MARKET LINKAGES, WE CAN CREATE A MORE INCLUSIVE AND RESILIENT FOOD SYSTEM FOR INDIA. LET'S PUT FA",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 105,
      "owner": {
          "id": 190,
          "first_name": "CHAD",
          "last_name": "WILSON",
          "email": "CHAD_WILSON@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "ROOFTOP SOLAR HAS ENORMOUS POTENTIAL IN INDIA, BOTH IN TERMS OF ELECTRICITY GENERATION AND JOB,CREATION. HOWEVER, WE STILL FACE CHALLENGES AROUND FINANCING, POLICY, AND IMPLEMENTATION THAT NEED TO BE ADDRESSED. AT BRIDGE TO INDIA, WE'RE WORKING ON IN",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 106,
      "owner": {
          "id": 190,
          "first_name": "CHAD",
          "last_name": "WILSON",
          "email": "CHAD_WILSON@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "THE INDIAN SOLAR INDUSTRY IS AT A CRITICAL JUNCTURE. WHILE WE'VE MADE SIGNIFICANT PROGRESS IN RECENT YEARS, THERE ARE STILL CHALLENGES AROUND POLICY IMPLEMENTATION, GRID INTEGRATION, AND FINANCING THAT NEED TO BE ADDRESSED. AT BRIDGE TO INDIA, WE BEL",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 107,
      "owner": {
          "id": 190,
          "first_name": "CHAD",
          "last_name": "WILSON",
          "email": "CHAD_WILSON@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS THE INDIAN SOLAR INDUSTRY CONTINUES TO GROW, WE'RE SEEING A NEW WAVE OF INNOVATION AND ENTREPRENEURSHIP IN AREAS LIKE ENERGY STORAGE, ELECTRIC VEHICLES, AND SMART GRID TECHNOLOGIES. THIS IS AN EXCITING TIME FOR THE INDUSTRY, AND WE BELIEVE THAT TH",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 108,
      "owner": {
          "id": 190,
          "first_name": "CHAD",
          "last_name": "WILSON",
          "email": "CHAD_WILSON@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "SOLAR ENERGY HAS THE POTENTIAL TO BE A GAME-CHANGER FOR INDIA'S ENERGY SECURITY AND ECONOMIC DEVELOPMENT. AT BRIDGE TO INDIA, WE'RE WORKING ON PROJECTS THAT PROMOTE SOLAR ENERGY SOLUTIONS FOR INDUSTRIAL AND COMMERCIAL CLIENTS, HELPING THEM REDUCE COS",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 109,
      "owner": {
          "id": 190,
          "first_name": "CHAD",
          "last_name": "WILSON",
          "email": "CHAD_WILSON@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "THE INDIAN SOLAR INDUSTRY IS NOT JUST ABOUT ELECTRICITY GENERATION - IT'S ABOUT CREATING A MORE SUSTAINABLE AND EQUITABLE SOCIETY. AT BRIDGE TO INDIA, WE'RE WORKING ON PROJECTS THAT USE SOLAR ENERGY TO POWER SCHOOLS, HOSPITALS, AND COMMUNITY CENTERS ",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 110,
      "owner": {
          "id": 189,
          "first_name": "GERRI",
          "last_name": "CASTRO",
          "email": "GERRI_CASTRO@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "SOLAR ENERGY IS NOT JUST A SOURCE OF POWER - IT'S A SYMBOL OF HOPE AND PROGRESS. AT BRIDGE TO INDIA, WE'RE PROUD TO BE WORKING ON PROJECTS THAT CREATE JOBS, IMPROVE LIVELIHOODS, AND REDUCE CARBON EMISSIONS. WE BELIEVE THAT SOLAR ENERGY CAN BE A POWER",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 111,
      "owner": {
          "id": 189,
          "first_name": "GERRI",
          "last_name": "CASTRO",
          "email": "GERRI_CASTRO@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "THE INDIAN SOLAR INDUSTRY HAS COME A LONG WAY IN THE LAST DECADE, AND IT'S EXCITING TO SEE THE PROGRESS WE'VE MADE. BUT THERE'S STILL MUCH WORK TO BE DONE TO UNLOCK THE FULL POTENTIAL OF SOLAR ENERGY IN INDIA. AT BRIDGE TO INDIA, WE'RE FOCUSED ON DRI",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 112,
      "owner": {
          "id": 189,
          "first_name": "GERRI",
          "last_name": "CASTRO",
          "email": "GERRI_CASTRO@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "THE COVID-19 PANDEMIC HAS CREATED UNPRECEDENTED CHALLENGES FOR THE INDIAN SOLAR INDUSTRY, BUT IT HAS ALSO HIGHLIGHTED THE RESILIENCE AND CREATIVITY OF OUR COMMUNITY. AT BRIDGE TO INDIA, WE'RE ADAPTING TO THE NEW REALITY, LEVERAGING DIGITAL TECHNOLOGI",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 113,
      "owner": {
          "id": 189,
          "first_name": "GERRI",
          "last_name": "CASTRO",
          "email": "GERRI_CASTRO@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "ONE OF THE MOST EXCITING THINGS ABOUT THE INDIAN SOLAR INDUSTRY IS THE POTENTIAL TO CREATE NEW BUSINESS MODELS AND INVESTMENT OPPORTUNITIES. AT BRIDGE TO INDIA, WE'RE WORKING ON PROJECTS THAT COMBINE SOLAR ENERGY WITH INNOVATIVE FINANCING MECHANISMS,",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 114,
      "owner": {
          "id": 189,
          "first_name": "GERRI",
          "last_name": "CASTRO",
          "email": "GERRI_CASTRO@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "I'M THRILLED TO ANNOUNCE THAT SAURYA ENERTECH HAS JUST COMPLETED THE INSTALLATION OF A 2 MW SOLAR POWER PLANT IN GUJARAT. WE'RE PROUD TO BE CONTRIBUTING TO INDIA'S TRANSITION TO CLEAN ENERGY AND LOOK FORWARD TO DELIVERING MORE INNOVATIVE SOLUTIONS TO",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 115,
      "owner": {
          "id": 188,
          "first_name": "JAMES",
          "last_name": "OBRIEN",
          "email": "JAMES_OBRIEN@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "IT'S OFFICIAL: SOLAR ENERGY IS NOW CHEAPER THAN COAL IN MOST PARTS OF INDIA. THIS IS A MAJOR MILESTONE FOR THE INDIAN SOLAR INDUSTRY AND A SIGN OF THE TREMENDOUS PROGRESS WE'VE MADE IN RECENT YEARS. HOWEVER, THERE'S STILL MUCH WORK TO BE DONE TO ACCE",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 116,
      "owner": {
          "id": 188,
          "first_name": "JAMES",
          "last_name": "OBRIEN",
          "email": "JAMES_OBRIEN@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "ONE OF THE MOST EXCITING THINGS ABOUT SOLAR ENERGY IS ITS ABILITY TO BENEFIT COMMUNITIES ACROSS THE COUNTRY. RECENTLY, WE'VE BEEN WORKING ON A PROJECT TO INSTALL SOLAR-POWERED IRRIGATION SYSTEMS IN RURAL AREAS, HELPING FARMERS BOOST THEIR CROP YIELDS",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 117,
      "owner": {
          "id": 188,
          "first_name": "JAMES",
          "last_name": "OBRIEN",
          "email": "JAMES_OBRIEN@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "INDIA HAS SET AN AMBITIOUS TARGET OF 100 GW OF SOLAR CAPACITY BY 2022. WHILE WE'VE MADE SIGNIFICANT PROGRESS IN RECENT YEARS, THERE ARE STILL CHALLENGES AROUND PROJECT FINANCING AND REVENUE ASSURANCE THAT NEED TO BE ADDRESSED. WE NEED INNOVATIVE SOLU",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 118,
      "owner": {
          "id": 188,
          "first_name": "JAMES",
          "last_name": "OBRIEN",
          "email": "JAMES_OBRIEN@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS THE INDIAN SOLAR INDUSTRY CONTINUES TO GROW AND MATURE, WE'RE SEEING DEVELOPERS AND INVESTORS EXPLORE NEW BUSINESS MODELS AND FINANCING MECHANISMS BEYOND THE AUCTION-BASED MARKET. THIS IS A POSITIVE DEVELOPMENT, BUT WE NEED TO ENSURE THAT THE MARK",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 119,
      "owner": {
          "id": 188,
          "first_name": "JAMES",
          "last_name": "OBRIEN",
          "email": "JAMES_OBRIEN@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "SOLAR ENERGY HAS THE POTENTIAL TO TRANSFORM INDIA'S RURAL ECONOMY AND CREATE JOBS IN AREAS LIKE MANUFACTURING, INSTALLATION, AND MAINTENANCE. AT CEEW, WE'RE WORKING ON PROJECTS TO PROMOTE DECENTRALIZED SOLAR ENERGY SOLUTIONS AND SUPPORT LOCAL ENTREPR",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 120,
      "owner": {
          "id": 187,
          "first_name": "CAMILLE",
          "last_name": "HOUSTON",
          "email": "CAMILLE_HOUSTON@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "THE INDIAN SOLAR INDUSTRY IS EXPECTED TO GROW AT A CAGR OF 30% OVER THE NEXT FIVE YEARS, DRIVEN BY FALLING COSTS AND SUPPORTIVE POLICIES. THIS IS A REMARKABLE ACHIEVEMENT AND A TESTAMENT TO THE HARD WORK AND DEDICATION OF EVERYONE IN THE INDUSTRY. HO",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 121,
      "owner": {
          "id": 187,
          "first_name": "CAMILLE",
          "last_name": "HOUSTON",
          "email": "CAMILLE_HOUSTON@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "THE RECENT DROP IN SOLAR TARIFFS TO RECORD LOWS IS A SIGN OF THE TREMENDOUS PROGRESS WE'VE MADE IN REDUCING COSTS AND INCREASING EFFICIENCY. HOWEVER, WE NEED TO ENSURE THAT THE SOLAR MARKET IS SUSTAINABLE AND THAT DEVELOPERS AND INVESTORS CAN MAKE A ",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 122,
      "owner": {
          "id": 187,
          "first_name": "CAMILLE",
          "last_name": "HOUSTON",
          "email": "CAMILLE_HOUSTON@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "ROOFTOP SOLAR HAS ENORMOUS POTENTIAL IN INDIA, BOTH IN TERMS OF ELECTRICITY GENERATION AND JOB,CREATION. HOWEVER, WE STILL FACE CHALLENGES AROUND FINANCING, POLICY, AND IMPLEMENTATION THAT NEED TO BE ADDRESSED. AT BRIDGE TO INDIA, WE'RE WORKING ON IN",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 123,
      "owner": {
          "id": 187,
          "first_name": "CAMILLE",
          "last_name": "HOUSTON",
          "email": "CAMILLE_HOUSTON@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "THE INDIAN SOLAR INDUSTRY IS AT A CRITICAL JUNCTURE. WHILE WE'VE MADE SIGNIFICANT PROGRESS IN RECENT YEARS, THERE ARE STILL CHALLENGES AROUND POLICY IMPLEMENTATION, GRID INTEGRATION, AND FINANCING THAT NEED TO BE ADDRESSED. AT BRIDGE TO INDIA, WE BEL",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 124,
      "owner": {
          "id": 187,
          "first_name": "CAMILLE",
          "last_name": "HOUSTON",
          "email": "CAMILLE_HOUSTON@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS THE INDIAN SOLAR INDUSTRY CONTINUES TO GROW, WE'RE SEEING A NEW WAVE OF INNOVATION AND ENTREPRENEURSHIP IN AREAS LIKE ENERGY STORAGE, ELECTRIC VEHICLES, AND SMART GRID TECHNOLOGIES. THIS IS AN EXCITING TIME FOR THE INDUSTRY, AND WE BELIEVE THAT TH",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 125,
      "owner": {
          "id": 186,
          "first_name": "KATHY",
          "last_name": "WILLIAMS",
          "email": "KATHY_WILLIAMS@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "SOLAR ENERGY HAS THE POTENTIAL TO BE A GAME-CHANGER FOR INDIA'S ENERGY SECURITY AND ECONOMIC DEVELOPMENT. AT BRIDGE TO INDIA, WE'RE WORKING ON PROJECTS THAT PROMOTE SOLAR ENERGY SOLUTIONS FOR INDUSTRIAL AND COMMERCIAL CLIENTS, HELPING THEM REDUCE COS",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 126,
      "owner": {
          "id": 186,
          "first_name": "KATHY",
          "last_name": "WILLIAMS",
          "email": "KATHY_WILLIAMS@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "THE INDIAN SOLAR INDUSTRY IS NOT JUST ABOUT ELECTRICITY GENERATION - IT'S ABOUT CREATING A MORE SUSTAINABLE AND EQUITABLE SOCIETY. AT BRIDGE TO INDIA, WE'RE WORKING ON PROJECTS THAT USE SOLAR ENERGY TO POWER SCHOOLS, HOSPITALS, AND COMMUNITY CENTERS ",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 127,
      "owner": {
          "id": 186,
          "first_name": "KATHY",
          "last_name": "WILLIAMS",
          "email": "KATHY_WILLIAMS@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "SOLAR ENERGY IS NOT JUST A SOURCE OF POWER - IT'S A SYMBOL OF HOPE AND PROGRESS. AT BRIDGE TO INDIA, WE'RE PROUD TO BE WORKING ON PROJECTS THAT CREATE JOBS, IMPROVE LIVELIHOODS, AND REDUCE CARBON EMISSIONS. WE BELIEVE THAT SOLAR ENERGY CAN BE A POWER",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 128,
      "owner": {
          "id": 186,
          "first_name": "KATHY",
          "last_name": "WILLIAMS",
          "email": "KATHY_WILLIAMS@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "THE INDIAN SOLAR INDUSTRY HAS COME A LONG WAY IN THE LAST DECADE, AND IT'S EXCITING TO SEE THE PROGRESS WE'VE MADE. BUT THERE'S STILL MUCH WORK TO BE DONE TO UNLOCK THE FULL POTENTIAL OF SOLAR ENERGY IN INDIA. AT BRIDGE TO INDIA, WE'RE FOCUSED ON DRI",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 129,
      "owner": {
          "id": 186,
          "first_name": "KATHY",
          "last_name": "WILLIAMS",
          "email": "KATHY_WILLIAMS@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "THE COVID-19 PANDEMIC HAS CREATED UNPRECEDENTED CHALLENGES FOR THE INDIAN SOLAR INDUSTRY, BUT IT HAS ALSO HIGHLIGHTED THE RESILIENCE AND CREATIVITY OF OUR COMMUNITY. AT BRIDGE TO INDIA, WE'RE ADAPTING TO THE NEW REALITY, LEVERAGING DIGITAL TECHNOLOGI",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 130,
      "owner": {
          "id": 185,
          "first_name": "FRANCISCO",
          "last_name": "MYERS",
          "email": "FRANCISCO_MYERS@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "FISHERIES AND AQUACULTURE ARE CRUCIAL SECTORS THAT CONTRIBUTE TO FOOD SECURITY, NUTRITION AND EMPLOYMENT OPPORTUNITIES IN INDIA. HOWEVER, THEY ARE ALSO VULNERABLE TO THE IMPACTS OF CLIMATE CHANGE, OVERFISHING AND POLLUTION. AS AN EXPERT IN THE FIELD,",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 131,
      "owner": {
          "id": 185,
          "first_name": "FRANCISCO",
          "last_name": "MYERS",
          "email": "FRANCISCO_MYERS@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AT CENTRAL INSTITUTE OF BRACKISHWATER AQUACULTURE, WE ARE COMMITTED TO RESEARCH AND DEVELOPMENT EFFORTS THAT CAN PROMOTE SUSTAINABLE AND PROFITABLE AQUACULTURE PRACTICES. OUR RECENT COLLABORATIONS WITH INDUSTRY PARTNERS HAVE YIELDED POSITIVE RESULTS ",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 132,
      "owner": {
          "id": 185,
          "first_name": "FRANCISCO",
          "last_name": "MYERS",
          "email": "FRANCISCO_MYERS@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "INDIA HAS A RICH DIVERSITY OF AQUATIC RESOURCES THAT CAN SUPPORT A THRIVING FISHERIES AND AQUACULTURE INDUSTRY. HOWEVER, THERE IS A NEED TO LEVERAGE MODERN TECHNOLOGIES AND MANAGEMENT PRACTICES TO REALIZE THEIR FULL POTENTIAL. AS THE DIRECTOR OF CENT",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 133,
      "owner": {
          "id": 185,
          "first_name": "FRANCISCO",
          "last_name": "MYERS",
          "email": "FRANCISCO_MYERS@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS WE CELEBRATE WORLD FISHERIES DAY, LET US REFLECT ON THE CRUCIAL ROLE THAT FISHERIES AND AQUACULTURE PLAY IN FEEDING THE WORLD AND SUPPORTING LIVELIHOODS. HOWEVER, LET US ALSO RECOGNIZE THE CHALLENGES THAT THESE SECTORS FACE, SUCH AS OVERFISHING, C",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 134,
      "owner": {
          "id": 185,
          "first_name": "FRANCISCO",
          "last_name": "MYERS",
          "email": "FRANCISCO_MYERS@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS THE DIRECTOR OF RESEARCH AT KERALA UNIVERSITY OF FISHERIES AND OCEAN STUDIES (KUFOS), I AM THRILLED TO ANNOUNCE THAT OUR SCIENTISTS HAVE SUCCESSFULLY DEVELOPED A NEW TECHNOLOGY TO ENHANCE THE GROWTH RATE OF BLACK TIGER SHRIMP. THIS INNOVATION WILL",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 135,
      "owner": {
          "id": 184,
          "first_name": "WILLIAM",
          "last_name": "SANDERFER",
          "email": "WILLIAM_SANDERFER@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AQUACULTURE HAS THE POTENTIAL TO PLAY A MAJOR ROLE IN MEETING THE RISING DEMAND FOR SEAFOOD, BUT IT IS IMPORTANT TO ENSURE THAT IT IS SUSTAINABLE AND DOES NOT HARM THE ENVIRONMENT. AS AN EXPERT IN THE FIELD, I STRONGLY ADVOCATE FOR RESPONSIBLE AQUACU",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 136,
      "owner": {
          "id": 184,
          "first_name": "WILLIAM",
          "last_name": "SANDERFER",
          "email": "WILLIAM_SANDERFER@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "THE FISHING INDUSTRY IS A CRITICAL SOURCE OF LIVELIHOOD FOR MILLIONS OF PEOPLE WORLDWIDE. HOWEVER, IT IS ALSO FACING SEVERAL CHALLENGES INCLUDING OVERFISHING, CLIMATE CHANGE, AND POLLUTION. AS A FISHERIES EXPERT, I BELIEVE THAT IT IS IMPERATIVE TO AD",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 137,
      "owner": {
          "id": 184,
          "first_name": "WILLIAM",
          "last_name": "SANDERFER",
          "email": "WILLIAM_SANDERFER@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AT KUFOS, WE ARE COMMITTED TO PROMOTING INNOVATION AND ENTREPRENEURSHIP IN THE FISHERIES SECTOR. WE RECENTLY LAUNCHED A NEW INCUBATION CENTER TO SUPPORT STARTUPS AND SMES THAT ARE WORKING ON CUTTING-EDGE SOLUTIONS IN AREAS SUCH AS AQUACULTURE, FISHER",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 138,
      "owner": {
          "id": 184,
          "first_name": "WILLIAM",
          "last_name": "SANDERFER",
          "email": "WILLIAM_SANDERFER@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "THE COVID-19 PANDEMIC HAS BROUGHT UNPRECEDENTED CHALLENGES FOR THE SEAFOOD INDUSTRY, FROM DISRUPTIONS IN GLOBAL TRADE TO REDUCED DEMAND AND PRICES. AS WE NAVIGATE THIS CRISIS, IT IS CRUCIAL TO SUPPORT THE WELFARE OF FISHERS AND AQUACULTURE WORKERS, A",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 139,
      "owner": {
          "id": 184,
          "first_name": "WILLIAM",
          "last_name": "SANDERFER",
          "email": "WILLIAM_SANDERFER@gmail.com"
      },
      "description": "AQUA POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS THE DIRECTOR OF CENTRAL INSTITUTE OF BRACKISHWATER AQUACULTURE, I AM EXCITED TO SHARE THAT OUR TEAM HAS SUCCESSFULLY DEVELOPED A NEW FEED TECHNOLOGY THAT CAN ENHANCE THE GROWTH RATE AND DISEASE RESISTANCE OF SHRIMP. OUR RESEARCH FINDINGS HOLD GREA",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 140,
      "owner": {
          "id": 183,
          "first_name": "SUSAN",
          "last_name": "DOAK",
          "email": "SUSAN_DOAK@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "ONE OF THE MOST EXCITING THINGS ABOUT THE INDIAN SOLAR INDUSTRY IS THE POTENTIAL TO CREATE NEW BUSINESS MODELS AND INVESTMENT OPPORTUNITIES. AT BRIDGE TO INDIA, WE'RE WORKING ON PROJECTS THAT COMBINE SOLAR ENERGY WITH INNOVATIVE FINANCING MECHANISMS,",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 141,
      "owner": {
          "id": 183,
          "first_name": "SUSAN",
          "last_name": "DOAK",
          "email": "SUSAN_DOAK@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "I'M THRILLED TO ANNOUNCE THAT SAURYA ENERTECH HAS JUST COMPLETED THE INSTALLATION OF A 2 MW SOLAR POWER PLANT IN GUJARAT. WE'RE PROUD TO BE CONTRIBUTING TO INDIA'S TRANSITION TO CLEAN ENERGY AND LOOK FORWARD TO DELIVERING MORE INNOVATIVE SOLUTIONS TO",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 142,
      "owner": {
          "id": 183,
          "first_name": "SUSAN",
          "last_name": "DOAK",
          "email": "SUSAN_DOAK@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "IT'S OFFICIAL: SOLAR ENERGY IS NOW CHEAPER THAN COAL IN MOST PARTS OF INDIA. THIS IS A MAJOR MILESTONE FOR THE INDIAN SOLAR INDUSTRY AND A SIGN OF THE TREMENDOUS PROGRESS WE'VE MADE IN RECENT YEARS. HOWEVER, THERE'S STILL MUCH WORK TO BE DONE TO ACCE",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 143,
      "owner": {
          "id": 183,
          "first_name": "SUSAN",
          "last_name": "DOAK",
          "email": "SUSAN_DOAK@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "ONE OF THE MOST EXCITING THINGS ABOUT SOLAR ENERGY IS ITS ABILITY TO BENEFIT COMMUNITIES ACROSS THE COUNTRY. RECENTLY, WE'VE BEEN WORKING ON A PROJECT TO INSTALL SOLAR-POWERED IRRIGATION SYSTEMS IN RURAL AREAS, HELPING FARMERS BOOST THEIR CROP YIELDS",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 144,
      "owner": {
          "id": 183,
          "first_name": "SUSAN",
          "last_name": "DOAK",
          "email": "SUSAN_DOAK@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "INDIA HAS SET AN AMBITIOUS TARGET OF 100 GW OF SOLAR CAPACITY BY 2022. WHILE WE'VE MADE SIGNIFICANT PROGRESS IN RECENT YEARS, THERE ARE STILL CHALLENGES AROUND PROJECT FINANCING AND REVENUE ASSURANCE THAT NEED TO BE ADDRESSED. WE NEED INNOVATIVE SOLU",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 145,
      "owner": {
          "id": 182,
          "first_name": "TIM",
          "last_name": "BURY",
          "email": "TIM_BURY@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "AS THE INDIAN SOLAR INDUSTRY CONTINUES TO GROW AND MATURE, WE'RE SEEING DEVELOPERS AND INVESTORS EXPLORE NEW BUSINESS MODELS AND FINANCING MECHANISMS BEYOND THE AUCTION-BASED MARKET. THIS IS A POSITIVE DEVELOPMENT, BUT WE NEED TO ENSURE THAT THE MARK",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 146,
      "owner": {
          "id": 182,
          "first_name": "TIM",
          "last_name": "BURY",
          "email": "TIM_BURY@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "SOLAR ENERGY HAS THE POTENTIAL TO TRANSFORM INDIA'S RURAL ECONOMY AND CREATE JOBS IN AREAS LIKE MANUFACTURING, INSTALLATION, AND MAINTENANCE. AT CEEW, WE'RE WORKING ON PROJECTS TO PROMOTE DECENTRALIZED SOLAR ENERGY SOLUTIONS AND SUPPORT LOCAL ENTREPR",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 147,
      "owner": {
          "id": 182,
          "first_name": "TIM",
          "last_name": "BURY",
          "email": "TIM_BURY@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "THE INDIAN SOLAR INDUSTRY IS EXPECTED TO GROW AT A CAGR OF 30% OVER THE NEXT FIVE YEARS, DRIVEN BY FALLING COSTS AND SUPPORTIVE POLICIES. THIS IS A REMARKABLE ACHIEVEMENT AND A TESTAMENT TO THE HARD WORK AND DEDICATION OF EVERYONE IN THE INDUSTRY. HO",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 148,
      "owner": {
          "id": 182,
          "first_name": "TIM",
          "last_name": "BURY",
          "email": "TIM_BURY@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "THE RECENT DROP IN SOLAR TARIFFS TO RECORD LOWS IS A SIGN OF THE TREMENDOUS PROGRESS WE'VE MADE IN REDUCING COSTS AND INCREASING EFFICIENCY. HOWEVER, WE NEED TO ENSURE THAT THE SOLAR MARKET IS SUSTAINABLE AND THAT DEVELOPERS AND INVESTORS CAN MAKE A ",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 149,
      "owner": {
          "id": 182,
          "first_name": "TIM",
          "last_name": "BURY",
          "email": "TIM_BURY@gmail.com"
      },
      "description": "SOLAR POST",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "ROOFTOP SOLAR HAS ENORMOUS POTENTIAL IN INDIA, BOTH IN TERMS OF ELECTRICITY GENERATION AND JOB,CREATION. HOWEVER, WE STILL FACE CHALLENGES AROUND FINANCING, POLICY, AND IMPLEMENTATION THAT NEED TO BE ADDRESSED. AT BRIDGE TO INDIA, WE'RE WORKING ON IN",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  },
  {
      "id": 150,
      "owner": {
          "id": 202,
          "first_name": "Sundaresan",
          "last_name": "Subramanian",
          "email": "test@email.com"
      },
      "description": "Sample post",
      "visiblityLevel": {
          "level": 3,
          "description": "Visible to anyone",
          "display_name": "Universal"
      },
      "text": "This is a awesome platform.. congratulations to the dev team!!",
      "uri": "",
      "created_at": "2023-04-04T01:55:05.123Z",
      "last_updated_at": "2023-04-04T01:55:05.123Z"
  }
]

for (let i = 0; i < sample_feed.length; i++) {
  let user_id = sample_feed[i].owner.id
  
  const attributes =  getAttributesById(user_id)
  
  USER_NAME = attributes.name
  USER_DESIGNATION = attributes.Designation
  USER_LOCATION = attributes.Company
  TEXT_CONTENT = sample_feed[i].text
  NUM_COMMENTS = "11"
  NUM_LIKES = "56"

  html_string = "<section class='u-border-1 u-border-palette-5-light-2 u-clearfix u-section-1' id='sec-62b2'> <div class='u-clearfix u-sheet u-sheet-1'> <div class='u-clearfix u-gutter-0 u-layout-wrap u-layout-wrap-1'> <div class='u-layout'> <div class='u-layout-row'> <div class='u-align-left u-container-style u-layout-cell u-right-cell u-size-60 u-layout-cell-1'> <div class='u-container-layout u-container-layout-1'> <div alt='' class='u-image u-image-circle u-image-1' src='' data-image-width='256' data-image-height='256'></div> <h2 class='u-text u-text-custom-color-1 u-text-1'>"+USER_NAME+"</h2> <h4 class='u-text u-text-palette-5-base u-text-2'>" + USER_DESIGNATION +",&nbsp" + USER_LOCATION + "</h4> <p class='u-text u-text-4'>"+TEXT_CONTENT+"</p> <img class='u-expanded-width-xs u-image u-image-default u-image-2' src='images/e1cdcde96ec836523405e386294decb940c696b8be992e0e7726198c09bd16c58d58d3039475764ce34268cab08b63a89479f7a3f88083bc8a2af1_1280.jpg' alt='' data-image-width='1280' data-image-height='853'> </div> </div> </div> </div> </div> <p class='u-text u-text-default u-text-5'>"+NUM_COMMENTS+" <span class='u-file-icon u-icon u-icon-1'><img src='images/1380338.png' alt=''></span> </p> <p class='u-text u-text-default u-text-6'>"+NUM_LIKES + " <span class='u-file-icon u-icon u-icon-2' data-animation-name='' data-animation-duration='0' data-animation-delay='0' data-animation-direction=''><img src='images/126473.png' alt=''></span> </p> <a href='' class='u-btn u-btn-round u-button-style u-custom-color-1 u-radius-9 u-btn-1'><span class='u-file-icon u-icon u-icon-3'><img src='images/18.png' alt=''></span>&nbsp;Like </a> <a href='' class='u-border-none u-btn u-btn-round u-button-style u-custom-color-1 u-radius-9 u-btn-2'><span class='u-file-icon u-icon u-text-white u-icon-4'><img src='images/1380338-a4aa210c.png' alt=''></span>&nbsp;Comment </a> <a href='' class='u-border-none u-btn u-btn-round u-button-style u-custom-color-1 u-radius-9 u-btn-3'><span class='u-file-icon u-icon u-text-white u-icon-5'><img src='images/2958791-eda71ee5.png' alt=''></span>&nbsp;Share </a> <a href='' class='u-border-none u-btn u-btn-round u-button-style u-custom-color-1 u-radius-9 u-btn-4'><span class='u-file-icon u-icon u-text-custom-color-4 u-icon-6'><img src='images/2107957-a8cee9a4.png' alt=''></span>&nbsp;Save </a> </div></section>"
  resultdiv.append(html_string)

}


return false;

}



function getAttributesById(id) {
  const obj = {201: {'name': 'JOHN SMALL',
  'email': 'JOHN_SMALL@gmail.com',
  'Designation': 'ASSISTANT SENIOR DIRECTOR',
  'Company': 'JOHN_PVT_LTD',
  'CityOfResidence': 'HYDERABAD',
  'Industry': 'AQUATIC PRODUCT RETAILERS'},
 200: {'name': 'SALLY LORENZO',
  'email': 'SALLY_LORENZO@gmail.com',
  'Designation': 'Director',
  'Company': 'ABCCorp',
  'CityOfResidence': 'Chennai',
  'Industry': 'Data Science'},
 199: {'name': 'JENNIFER CYPHERS',
  'email': 'JENNIFER_CYPHERS@gmail.com',
  'Designation': 'DIRECTOR',
  'Company': 'JENNIFER_PVT_LTD',
  'CityOfResidence': 'HYDERABAD',
  'Industry': 'SOLAR EPC (ENGINEERING, PROCUREMENT, AND CONSTRUCTION) COMPANIES'},
 198: {'name': 'MARTA MOONEY',
  'email': 'MARTA_MOONEY@gmail.com',
  'Designation': 'AVP',
  'Company': 'MARTA_PVT_LTD',
  'CityOfResidence': 'HYDERABAD',
  'Industry': 'EQUIPMENT MANUFACTURERS'},
 197: {'name': 'RUBY SMITH',
  'email': 'RUBY_SMITH@gmail.com',
  'Designation': 'PRESIDENT',
  'Company': 'RUBY_PVT_LTD',
  'CityOfResidence': 'BANGALORE',
  'Industry': 'AGRICULTURAL CONSULTING FIRMS'},
 196: {'name': 'LETHA HOUCK',
  'email': 'LETHA_HOUCK@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'LETHA_PVT_LTD',
  'CityOfResidence': 'HYDERABAD',
  'Industry': 'AGRO-PRODUCT EXPORTERS'},
 195: {'name': 'PAUL BONNER',
  'email': 'PAUL_BONNER@gmail.com',
  'Designation': 'ASSISTANT SENIOR DIRECTOR',
  'Company': 'PAUL_PVT_LTD',
  'CityOfResidence': 'KOCHI',
  'Industry': 'AGRICULTURAL MACHINERY MANUFACTURERS'},
 194: {'name': 'MINNIE BELCHER',
  'email': 'MINNIE_BELCHER@gmail.com',
  'Designation': 'ASSISTANT SENIOR DIRECTOR',
  'Company': 'MINNIE_PVT_LTD',
  'CityOfResidence': 'DELHI',
  'Industry': 'AQUATIC ANIMAL TRANSPORT COMPANIES'},
 193: {'name': 'DERRICK ROBERTS',
  'email': 'DERRICK_ROBERTS@gmail.com',
  'Designation': 'AVP',
  'Company': 'DERRICK_PVT_LTD',
  'CityOfResidence': 'MUMBAI',
  'Industry': 'SOLAR BATTERY MANUFACTURERS'},
 192: {'name': 'RONALD BURGER',
  'email': 'RONALD_BURGER@gmail.com',
  'Designation': 'ASSISTANT SENIOR DIRECTOR',
  'Company': 'RONALD_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'AQUATIC PEST MANAGEMENT COMPANIES'},
 191: {'name': 'HOLLY ABEL',
  'email': 'HOLLY_ABEL@gmail.com',
  'Designation': 'PRESIDENT',
  'Company': 'HOLLY_PVT_LTD',
  'CityOfResidence': 'MUMBAI',
  'Industry': 'AQUACULTURE FARMERS'},
 190: {'name': 'CHAD WILSON',
  'email': 'CHAD_WILSON@gmail.com',
  'Designation': 'PRESIDENT',
  'Company': 'CHAD_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'SOLAR ENERGY AGGREGATORS'},
 189: {'name': 'GERRI CASTRO',
  'email': 'GERRI_CASTRO@gmail.com',
  'Designation': 'ASSISTANT SENIOR DIRECTOR',
  'Company': 'GERRI_PVT_LTD',
  'CityOfResidence': 'HYDERABAD',
  'Industry': 'SOLAR ENERGY MARKETPLACES'},
 188: {'name': 'JAMES OBRIEN',
  'email': 'JAMES_OBRIEN@gmail.com',
  'Designation': 'DIRECTOR',
  'Company': 'JAMES_PVT_LTD',
  'CityOfResidence': 'BANGALORE',
  'Industry': 'SOLAR HOME SYSTEM PROVIDERS'},
 187: {'name': 'CAMILLE HOUSTON',
  'email': 'CAMILLE_HOUSTON@gmail.com',
  'Designation': 'AVP',
  'Company': 'CAMILLE_PVT_LTD',
  'CityOfResidence': 'KOCHI',
  'Industry': 'SOLAR CELL MANUFACTURERS'},
 186: {'name': 'KATHY WILLIAMS',
  'email': 'KATHY_WILLIAMS@gmail.com',
  'Designation': 'PRESIDENT',
  'Company': 'KATHY_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'SOLAR PANEL MANUFACTURERS'},
 185: {'name': 'FRANCISCO MYERS',
  'email': 'FRANCISCO_MYERS@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'FRANCISCO_PVT_LTD',
  'CityOfResidence': 'BANGALORE',
  'Industry': 'AQUATIC WASTE MANAGEMENT COMPANIES'},
 184: {'name': 'WILLIAM SANDERFER',
  'email': 'WILLIAM_SANDERFER@gmail.com',
  'Designation': 'AVP',
  'Company': 'WILLIAM_PVT_LTD',
  'CityOfResidence': 'CHENNAI',
  'Industry': 'AQUATIC ENVIRONMENTAL MONITORING COMPANIES'},
 183: {'name': 'SUSAN DOAK',
  'email': 'SUSAN_DOAK@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'SUSAN_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'SOLAR BATTERY MANUFACTURERS'},
 182: {'name': 'TIM BURY',
  'email': 'TIM_BURY@gmail.com',
  'Designation': 'DIRECTOR',
  'Company': 'TIM_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'SOLAR ASSET MANAGEMENT COMPANIES'},
 11: {'name': 'JULIA BROWN',
  'email': 'JULIA_BROWN@gmail.com',
  'Designation': 'Director',
  'Company': 'ABCCorp',
  'CityOfResidence': 'Chennai',
  'Industry': 'Data Science'},
 2: {'name': 'LINDA LEE',
  'email': 'LINDA_LEE@gmail.com',
  'Designation': 'PRESIDENT',
  'Company': 'CAMILLE_PVT_LTD',
  'CityOfResidence': 'CHENNAI',
  'Industry': 'SOLAR MODULE MANUFACTURERS'},
 3: {'name': 'JAMES PETERSON',
  'email': 'JAMES_PETERSON@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'RONALD_PVT_LTD',
  'CityOfResidence': 'DELHI',
  'Industry': 'AQUATIC ANIMAL HEALTH PROVIDERS'},
 4: {'name': 'ANNE ONEIL',
  'email': 'ANNE_ONEIL@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'GERRI_PVT_LTD',
  'CityOfResidence': 'CHENNAI',
  'Industry': 'SOLAR CONSULTING FIRMS'},
 5: {'name': 'JEREMIAH TAMBORLANE',
  'email': 'JEREMIAH_TAMBORLANE@gmail.com',
  'Designation': 'AVP',
  'Company': 'JOHN_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'AQUATIC ANIMAL FEED SUPPLIERS'},
 6: {'name': 'JUDITH PLAZA',
  'email': 'JUDITH_PLAZA@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'FRANCISCO_PVT_LTD',
  'CityOfResidence': 'DELHI',
  'Industry': 'AQUATIC ENVIRONMENTAL MONITORING COMPANIES'},
 7: {'name': 'STACEY OLIVER',
  'email': 'STACEY_OLIVER@gmail.com',
  'Designation': 'DIRECTOR',
  'Company': 'WILLIAM_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'AQUATIC WASTE MANAGEMENT COMPANIES'},
 8: {'name': 'KAYLA BUSTOS',
  'email': 'KAYLA_BUSTOS@gmail.com',
  'Designation': 'PRESIDENT',
  'Company': 'SUSAN_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'SOLAR FINANCING COMPANIES'},
 9: {'name': 'RACHEL NOLEN',
  'email': 'RACHEL_NOLEN@gmail.com',
  'Designation': 'ASSISTANT SENIOR DIRECTOR',
  'Company': 'CHAD_PVT_LTD',
  'CityOfResidence': 'CHENNAI',
  'Industry': 'SOLAR PUMP MANUFACTURERS'},
 10: {'name': 'ROSA WEDGE',
  'email': 'ROSA_WEDGE@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'RUBY_PVT_LTD',
  'CityOfResidence': 'MUMBAI',
  'Industry': 'AGRICULTURAL INSURANCE PROVIDERS'},
 12: {'name': 'TARA HALL',
  'email': 'TARA_HALL@gmail.com',
  'Designation': 'AVP',
  'Company': 'HOLLY_PVT_LTD',
  'CityOfResidence': 'KOCHI',
  'Industry': 'CROP FARMERS'},
 13: {'name': 'ANITA CAYTON',
  'email': 'ANITA_CAYTON@gmail.com',
  'Designation': 'ASSISTANT SENIOR DIRECTOR',
  'Company': 'MINNIE_PVT_LTD',
  'CityOfResidence': 'MUMBAI',
  'Industry': 'AQUACULTURE INSURANCE PROVIDERS'},
 14: {'name': 'KEITH PIERRE',
  'email': 'KEITH_PIERRE@gmail.com',
  'Designation': 'AVP',
  'Company': 'DERRICK_PVT_LTD',
  'CityOfResidence': 'KOCHI',
  'Industry': 'SOLAR PROJECT INVESTORS'},
 15: {'name': 'FRANCES APPLING',
  'email': 'FRANCES_APPLING@gmail.com',
  'Designation': 'PRESIDENT',
  'Company': 'JAMES_PVT_LTD',
  'CityOfResidence': 'DELHI',
  'Industry': 'SOLAR ENERGY RETAILERS'},
 16: {'name': 'ELIZABETH SNYDER',
  'email': 'ELIZABETH_SNYDER@gmail.com',
  'Designation': 'PRESIDENT',
  'Company': 'JAMES_PVT_LTD',
  'CityOfResidence': 'CHENNAI',
  'Industry': 'SOLAR ASSET MANAGEMENT COMPANIES'},
 17: {'name': 'CYNTHIA HALLER',
  'email': 'CYNTHIA_HALLER@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'KATHY_PVT_LTD',
  'CityOfResidence': 'BANGALORE',
  'Industry': 'SOLAR CONSULTING FIRMS'},
 18: {'name': 'FELIX ASHLOCK',
  'email': 'FELIX_ASHLOCK@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'JAMES_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'SOLAR GENERATOR MANUFACTURERS'},
 19: {'name': 'DAN PHILLIPS',
  'email': 'DAN_PHILLIPS@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'JOHN_PVT_LTD',
  'CityOfResidence': 'KOCHI',
  'Industry': 'EQUIPMENT MANUFACTURERS'},
 20: {'name': 'JOSHUA SMITH',
  'email': 'JOSHUA_SMITH@gmail.com',
  'Designation': 'AVP',
  'Company': 'JENNIFER_PVT_LTD',
  'CityOfResidence': 'DELHI',
  'Industry': 'SOLAR ADVOCACY ORGANIZATIONS'},
 21: {'name': 'STEVE STANLEY',
  'email': 'STEVE_STANLEY@gmail.com',
  'Designation': 'PRESIDENT',
  'Company': 'WILLIAM_PVT_LTD',
  'CityOfResidence': 'CHENNAI',
  'Industry': 'AQUATIC WEED CONTROL COMPANIES'},
 22: {'name': 'VERONICA ELY',
  'email': 'VERONICA_ELY@gmail.com',
  'Designation': 'ASSISTANT SENIOR DIRECTOR',
  'Company': 'KATHY_PVT_LTD',
  'CityOfResidence': 'DELHI',
  'Industry': 'SOLAR TRACKING SYSTEM MANUFACTURERS'},
 23: {'name': 'MARIA ROMAN',
  'email': 'MARIA_ROMAN@gmail.com',
  'Designation': 'DIRECTOR',
  'Company': 'PAUL_PVT_LTD',
  'CityOfResidence': 'CHENNAI',
  'Industry': 'AGROCHEMICAL MANUFACTURERS'},
 24: {'name': 'JESSICA CARROTHERS',
  'email': 'JESSICA_CARROTHERS@gmail.com',
  'Designation': 'PRESIDENT',
  'Company': 'RUBY_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'AGRO-PRODUCT IMPORTERS'},
 25: {'name': 'MARY DEPASQUALE',
  'email': 'MARY_DEPASQUALE@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'GERRI_PVT_LTD',
  'CityOfResidence': 'CHENNAI',
  'Industry': 'SOLAR INSURANCE PROVIDERS'},
 26: {'name': 'WENDY STAUB',
  'email': 'WENDY_STAUB@gmail.com',
  'Designation': 'AVP',
  'Company': 'SUSAN_PVT_LTD',
  'CityOfResidence': 'CHENNAI',
  'Industry': 'SOLAR TRACKING SYSTEM MANUFACTURERS'},
 27: {'name': 'JOANN PATRICK',
  'email': 'JOANN_PATRICK@gmail.com',
  'Designation': 'DIRECTOR',
  'Company': 'RUBY_PVT_LTD',
  'CityOfResidence': 'BANGALORE',
  'Industry': 'PRECISION FARMING COMPANIES'},
 28: {'name': 'PAULA SAHARA',
  'email': 'PAULA_SAHARA@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'FRANCISCO_PVT_LTD',
  'CityOfResidence': 'HYDERABAD',
  'Industry': 'AQUATIC EDUCATION AND TRAINING PROVIDERS'},
 29: {'name': 'ROBERT BURGESS',
  'email': 'ROBERT_BURGESS@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'SALLY_PVT_LTD',
  'CityOfResidence': 'HYDERABAD',
  'Industry': 'SOLAR INVERTER MANUFACTURERS'},
 30: {'name': 'SALLY HALL',
  'email': 'SALLY_HALL@gmail.com',
  'Designation': 'DIRECTOR',
  'Company': 'LETHA_PVT_LTD',
  'CityOfResidence': 'BANGALORE',
  'Industry': 'AGRO-PRODUCT EXPORTERS'},
 31: {'name': 'DAVID COLLINS',
  'email': 'DAVID_COLLINS@gmail.com',
  'Designation': 'PRESIDENT',
  'Company': 'PAUL_PVT_LTD',
  'CityOfResidence': 'KOCHI',
  'Industry': 'IRRIGATION EQUIPMENT MANUFACTURERS'},
 32: {'name': 'JOSHUA BIRCH',
  'email': 'JOSHUA_BIRCH@gmail.com',
  'Designation': 'PRESIDENT',
  'Company': 'JAMES_PVT_LTD',
  'CityOfResidence': 'CHENNAI',
  'Industry': 'SOLAR CELL MANUFACTURERS'},
 33: {'name': 'GEORGE GRAMMER',
  'email': 'GEORGE_GRAMMER@gmail.com',
  'Designation': 'DIRECTOR',
  'Company': 'RONALD_PVT_LTD',
  'CityOfResidence': 'MUMBAI',
  'Industry': 'SHRIMP FARMS'},
 34: {'name': 'JULIA MCCLAIN',
  'email': 'JULIA_MCCLAIN@gmail.com',
  'Designation': 'PRESIDENT',
  'Company': 'PAUL_PVT_LTD',
  'CityOfResidence': 'CHENNAI',
  'Industry': 'POULTRY FARMERS'},
 35: {'name': 'CARL HAIGLER',
  'email': 'CARL_HAIGLER@gmail.com',
  'Designation': 'DIRECTOR',
  'Company': 'PAUL_PVT_LTD',
  'CityOfResidence': 'BANGALORE',
  'Industry': 'AGRICULTURAL MARKETING FIRMS'},
 36: {'name': 'MARY MARTINEZ',
  'email': 'MARY_MARTINEZ@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'JENNIFER_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'SOLAR FINANCING COMPANIES'},
 37: {'name': 'ELIZABETH FERNANDEZ',
  'email': 'ELIZABETH_FERNANDEZ@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'WILLIAM_PVT_LTD',
  'CityOfResidence': 'KOCHI',
  'Industry': 'AQUATIC ANIMAL TRANSPORT COMPANIES'},
 38: {'name': 'JULIE RETH',
  'email': 'JULIE_RETH@gmail.com',
  'Designation': 'PRESIDENT',
  'Company': 'GERRI_PVT_LTD',
  'CityOfResidence': 'DELHI',
  'Industry': 'SOLAR ADVOCACY ORGANIZATIONS'},
 39: {'name': 'KELLY LIGHT',
  'email': 'KELLY_LIGHT@gmail.com',
  'Designation': 'ASSISTANT SENIOR DIRECTOR',
  'Company': 'RUBY_PVT_LTD',
  'CityOfResidence': 'CHENNAI',
  'Industry': 'SUSTAINABLE FARMING COMPANIES'},
 40: {'name': 'ANA STOUT',
  'email': 'ANA_STOUT@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'GERRI_PVT_LTD',
  'CityOfResidence': 'HYDERABAD',
  'Industry': 'SOLAR TRAINING AND EDUCATION PROVIDERS'},
 41: {'name': 'HELEN MCCLARY',
  'email': 'HELEN_MCCLARY@gmail.com',
  'Designation': 'DIRECTOR',
  'Company': 'MARTA_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'AQUATIC FOOD PROCESSING COMPANIES'},
 42: {'name': 'TIMOTHY MATA',
  'email': 'TIMOTHY_MATA@gmail.com',
  'Designation': 'ASSISTANT SENIOR DIRECTOR',
  'Company': 'GERRI_PVT_LTD',
  'CityOfResidence': 'BANGALORE',
  'Industry': 'SOLAR ASSET MANAGEMENT COMPANIES'},
 43: {'name': 'DEBORAH MENTZER',
  'email': 'DEBORAH_MENTZER@gmail.com',
  'Designation': 'ASSISTANT SENIOR DIRECTOR',
  'Company': 'RUBY_PVT_LTD',
  'CityOfResidence': 'KOCHI',
  'Industry': 'AGRICULTURAL INSURANCE PROVIDERS'},
 44: {'name': 'CLIFFORD GARLAND',
  'email': 'CLIFFORD_GARLAND@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'JENNIFER_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'SOLAR ADVOCACY ORGANIZATIONS'},
 45: {'name': 'ANNA SMITH',
  'email': 'ANNA_SMITH@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'RUBY_PVT_LTD',
  'CityOfResidence': 'MUMBAI',
  'Industry': 'AGRICULTURAL INSURANCE PROVIDERS'},
 46: {'name': 'JANET SAVALA',
  'email': 'JANET_SAVALA@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'DERRICK_PVT_LTD',
  'CityOfResidence': 'DELHI',
  'Industry': 'SOLAR MODULE MANUFACTURERS'},
 47: {'name': 'IRENE PELLETIER',
  'email': 'IRENE_PELLETIER@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'SALLY_PVT_LTD',
  'CityOfResidence': 'BANGALORE',
  'Industry': 'SOLAR MODULE MANUFACTURERS'},
 48: {'name': 'HEATHER COUCHMAN',
  'email': 'HEATHER_COUCHMAN@gmail.com',
  'Designation': 'AVP',
  'Company': 'CHAD_PVT_LTD',
  'CityOfResidence': 'HYDERABAD',
  'Industry': 'SOLAR FINANCING COMPANIES'},
 49: {'name': 'RENEE MAXWELL',
  'email': 'RENEE_MAXWELL@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'DERRICK_PVT_LTD',
  'CityOfResidence': 'BANGALORE',
  'Industry': 'SOLAR CHARGE CONTROLLER MANUFACTURERS'},
 50: {'name': 'CAROL CARR',
  'email': 'CAROL_CARR@gmail.com',
  'Designation': 'AVP',
  'Company': 'JAMES_PVT_LTD',
  'CityOfResidence': 'BANGALORE',
  'Industry': 'SOLAR BATTERY MANUFACTURERS'},
 51: {'name': 'ANTONIA LAGNESE',
  'email': 'ANTONIA_LAGNESE@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'GERRI_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'SOLAR ADVOCACY ORGANIZATIONS'},
 52: {'name': 'STEVE SHAH',
  'email': 'STEVE_SHAH@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'TIM_PVT_LTD',
  'CityOfResidence': 'CHENNAI',
  'Industry': 'SOLAR WATER HEATER MANUFACTURERS'},
 53: {'name': 'LENA ARROYO',
  'email': 'LENA_ARROYO@gmail.com',
  'Designation': 'AVP',
  'Company': 'WILLIAM_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'SHELLFISH FARMS'},
 54: {'name': 'PATRICIA STAFFORD',
  'email': 'PATRICIA_STAFFORD@gmail.com',
  'Designation': 'AVP',
  'Company': 'SALLY_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'SOLAR MOUNTING SYSTEM MANUFACTURERS'},
 55: {'name': 'ELIZEBETH MCINTOSH',
  'email': 'ELIZEBETH_MCINTOSH@gmail.com',
  'Designation': 'AVP',
  'Company': 'FRANCISCO_PVT_LTD',
  'CityOfResidence': 'BANGALORE',
  'Industry': 'SHRIMP FARMS'},
 56: {'name': 'GARY CASTRO',
  'email': 'GARY_CASTRO@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'HOLLY_PVT_LTD',
  'CityOfResidence': 'MUMBAI',
  'Industry': 'AGRO-PRODUCT EXPORTERS'},
 57: {'name': 'VALERIE FOX',
  'email': 'VALERIE_FOX@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'LETHA_PVT_LTD',
  'CityOfResidence': 'MUMBAI',
  'Industry': 'AGRICULTURAL TRAINING AND EDUCATION PROVIDERS'},
 58: {'name': 'JAMES UNDERWOOD',
  'email': 'JAMES_UNDERWOOD@gmail.com',
  'Designation': 'ASSISTANT SENIOR DIRECTOR',
  'Company': 'PAUL_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'AGRICULTURAL RESEARCH INSTITUTIONS'},
 59: {'name': 'ANDREW WOOLDRIDGE',
  'email': 'ANDREW_WOOLDRIDGE@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'JENNIFER_PVT_LTD',
  'CityOfResidence': 'MUMBAI',
  'Industry': 'SOLAR HOME SYSTEM PROVIDERS'},
 60: {'name': 'LINDA CARRUTHERS',
  'email': 'LINDA_CARRUTHERS@gmail.com',
  'Designation': 'DIRECTOR',
  'Company': 'RONALD_PVT_LTD',
  'CityOfResidence': 'DELHI',
  'Industry': 'AQUATIC ANIMAL TRANSPORT COMPANIES'},
 61: {'name': 'MARIE MITCHELL',
  'email': 'MARIE_MITCHELL@gmail.com',
  'Designation': 'AVP',
  'Company': 'DERRICK_PVT_LTD',
  'CityOfResidence': 'BANGALORE',
  'Industry': 'SOLAR CHARGE CONTROLLER MANUFACTURERS'},
 62: {'name': 'DALE HARPER',
  'email': 'DALE_HARPER@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'KATHY_PVT_LTD',
  'CityOfResidence': 'KOCHI',
  'Industry': 'SOLAR AIR CONDITIONER MANUFACTURERS'},
 63: {'name': 'SCOTT GILBERT',
  'email': 'SCOTT_GILBERT@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'PAUL_PVT_LTD',
  'CityOfResidence': 'BANGALORE',
  'Industry': 'AQUACULTURE FARMERS'},
 64: {'name': 'HASSIE YURKO',
  'email': 'HASSIE_YURKO@gmail.com',
  'Designation': 'DIRECTOR',
  'Company': 'RONALD_PVT_LTD',
  'CityOfResidence': 'KOCHI',
  'Industry': 'AQUATIC PRODUCT RETAILERS'},
 65: {'name': 'PETE YBARRA',
  'email': 'PETE_YBARRA@gmail.com',
  'Designation': 'ASSISTANT SENIOR DIRECTOR',
  'Company': 'LETHA_PVT_LTD',
  'CityOfResidence': 'CHENNAI',
  'Industry': 'IRRIGATION EQUIPMENT MANUFACTURERS'},
 66: {'name': 'JAMES LEVAR',
  'email': 'JAMES_LEVAR@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'MARTA_PVT_LTD',
  'CityOfResidence': 'DELHI',
  'Industry': 'SHRIMP FARMS'},
 67: {'name': 'DEBRA BROOKS',
  'email': 'DEBRA_BROOKS@gmail.com',
  'Designation': 'DIRECTOR',
  'Company': 'MINNIE_PVT_LTD',
  'CityOfResidence': 'MUMBAI',
  'Industry': 'EQUIPMENT MANUFACTURERS'},
 68: {'name': 'IDA PERSON',
  'email': 'IDA_PERSON@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'HOLLY_PVT_LTD',
  'CityOfResidence': 'BANGALORE',
  'Industry': 'SEED MANUFACTURERS'},
 69: {'name': 'THOMAS ROBINSON',
  'email': 'THOMAS_ROBINSON@gmail.com',
  'Designation': 'AVP',
  'Company': 'WILLIAM_PVT_LTD',
  'CityOfResidence': 'BANGALORE',
  'Industry': 'AQUATIC PLANT NURSERIES'},
 70: {'name': 'NOLA MOORE',
  'email': 'NOLA_MOORE@gmail.com',
  'Designation': 'DIRECTOR',
  'Company': 'FRANCISCO_PVT_LTD',
  'CityOfResidence': 'MUMBAI',
  'Industry': 'SEAWEED FARMS'},
 71: {'name': 'TRINA ELLZEY',
  'email': 'TRINA_ELLZEY@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'SALLY_PVT_LTD',
  'CityOfResidence': 'BANGALORE',
  'Industry': 'SOLAR ENERGY RETAILERS'},
 72: {'name': 'MARIA ROCK',
  'email': 'MARIA_ROCK@gmail.com',
  'Designation': 'PRESIDENT',
  'Company': 'PAUL_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'AGRICULTURAL FINANCING COMPANIES'},
 73: {'name': 'SUSIE FRATTA',
  'email': 'SUSIE_FRATTA@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'FRANCISCO_PVT_LTD',
  'CityOfResidence': 'MUMBAI',
  'Industry': 'AQUACULTURE CONSULTANTS'},
 74: {'name': 'DANIEL SALLEE',
  'email': 'DANIEL_SALLEE@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'RONALD_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'AQUATIC PLANT NURSERIES'},
 75: {'name': 'JOY FIGUEROA',
  'email': 'JOY_FIGUEROA@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'JAMES_PVT_LTD',
  'CityOfResidence': 'CHENNAI',
  'Industry': 'SOLAR CELL MANUFACTURERS'},
 76: {'name': 'MARIO BOWERS',
  'email': 'MARIO_BOWERS@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'CHAD_PVT_LTD',
  'CityOfResidence': 'DELHI',
  'Industry': 'SOLAR TRACKING SYSTEM MANUFACTURERS'},
 77: {'name': 'JOHN COLEMAN',
  'email': 'JOHN_COLEMAN@gmail.com',
  'Designation': 'PRESIDENT',
  'Company': 'GERRI_PVT_LTD',
  'CityOfResidence': 'HYDERABAD',
  'Industry': 'SOLAR WATER HEATER MANUFACTURERS'},
 78: {'name': 'DUSTY MONTEITH',
  'email': 'DUSTY_MONTEITH@gmail.com',
  'Designation': 'PRESIDENT',
  'Company': 'SALLY_PVT_LTD',
  'CityOfResidence': 'KOCHI',
  'Industry': 'SOLAR ENERGY AGGREGATORS'},
 79: {'name': 'OWEN BRUNO',
  'email': 'OWEN_BRUNO@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'DERRICK_PVT_LTD',
  'CityOfResidence': 'HYDERABAD',
  'Industry': 'SOLAR ENERGY TRADING PLATFORMS'},
 80: {'name': 'CANDACE HOU',
  'email': 'CANDACE_HOU@gmail.com',
  'Designation': 'DIRECTOR',
  'Company': 'MINNIE_PVT_LTD',
  'CityOfResidence': 'BANGALORE',
  'Industry': 'AQUATIC ANIMAL HEALTH PROVIDERS'},
 81: {'name': 'JEANETTE DISMUKES',
  'email': 'JEANETTE_DISMUKES@gmail.com',
  'Designation': 'DIRECTOR',
  'Company': 'CAMILLE_PVT_LTD',
  'CityOfResidence': 'CHENNAI',
  'Industry': 'SOLAR GENERATOR MANUFACTURERS'},
 82: {'name': 'ROSE PRICE',
  'email': 'ROSE_PRICE@gmail.com',
  'Designation': 'AVP',
  'Company': 'SALLY_PVT_LTD',
  'CityOfResidence': 'MUMBAI',
  'Industry': 'SOLAR ENERGY RETAILERS'},
 83: {'name': 'WILL WRIGHT',
  'email': 'WILL_WRIGHT@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'WILLIAM_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'AQUACULTURE RESEARCH INSTITUTIONS'},
 84: {'name': 'GREGORY CULBERT',
  'email': 'GREGORY_CULBERT@gmail.com',
  'Designation': 'AVP',
  'Company': 'GERRI_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'SOLAR EPC (ENGINEERING, PROCUREMENT, AND CONSTRUCTION) COMPANIES'},
 85: {'name': 'MILDRED HOGAN',
  'email': 'MILDRED_HOGAN@gmail.com',
  'Designation': 'ASSISTANT SENIOR DIRECTOR',
  'Company': 'SALLY_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'SOLAR TRAINING AND EDUCATION PROVIDERS'},
 86: {'name': 'CECIL WATKINS',
  'email': 'CECIL_WATKINS@gmail.com',
  'Designation': 'PRESIDENT',
  'Company': 'DERRICK_PVT_LTD',
  'CityOfResidence': 'MUMBAI',
  'Industry': 'SOLAR CONSULTING FIRMS'},
 87: {'name': 'JOYCE MCGRAW',
  'email': 'JOYCE_MCGRAW@gmail.com',
  'Designation': 'AVP',
  'Company': 'WILLIAM_PVT_LTD',
  'CityOfResidence': 'KOCHI',
  'Industry': 'AQUATIC CERTIFICATION AND LABELING ORGANIZATIONS'},
 88: {'name': 'MOSES JONES',
  'email': 'MOSES_JONES@gmail.com',
  'Designation': 'PRESIDENT',
  'Company': 'FRANCISCO_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'AQUATIC EDUCATION AND TRAINING PROVIDERS'},
 89: {'name': 'GERALD STIFF',
  'email': 'GERALD_STIFF@gmail.com',
  'Designation': 'ASSISTANT SENIOR DIRECTOR',
  'Company': 'HOLLY_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'FERTILIZER MANUFACTURERS'},
 90: {'name': 'MILDRED FERGUSON',
  'email': 'MILDRED_FERGUSON@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'CHAD_PVT_LTD',
  'CityOfResidence': 'DELHI',
  'Industry': 'SOLAR CHARGE CONTROLLER MANUFACTURERS'},
 91: {'name': 'NANCY SMITH',
  'email': 'NANCY_SMITH@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'MARTA_PVT_LTD',
  'CityOfResidence': 'CHENNAI',
  'Industry': 'AQUATIC FARM MANAGEMENT SOFTWARE PROVIDERS'},
 92: {'name': 'SHANTA EHRGOTT',
  'email': 'SHANTA_EHRGOTT@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'MINNIE_PVT_LTD',
  'CityOfResidence': 'MUMBAI',
  'Industry': 'AQUATIC ANIMAL HEALTH PROVIDERS'},
 93: {'name': 'JOHN ACTON',
  'email': 'JOHN_ACTON@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'CHAD_PVT_LTD',
  'CityOfResidence': 'MUMBAI',
  'Industry': 'SOLAR PROJECT DEVELOPERS'},
 94: {'name': 'RONALD THOMPSON',
  'email': 'RONALD_THOMPSON@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'KATHY_PVT_LTD',
  'CityOfResidence': 'KOCHI',
  'Industry': 'SOLAR CONSULTING FIRMS'},
 95: {'name': 'CHESTER BENTON',
  'email': 'CHESTER_BENTON@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'CHAD_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'SOLAR FINANCING COMPANIES'},
 96: {'name': 'JOHN TINCHER',
  'email': 'JOHN_TINCHER@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'SUSAN_PVT_LTD',
  'CityOfResidence': 'BANGALORE',
  'Industry': 'SOLAR PANEL MANUFACTURERS'},
 97: {'name': 'LISA WHITE',
  'email': 'LISA_WHITE@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'MINNIE_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'AQUACULTURE INVESTMENT FIRMS'},
 98: {'name': 'LOUISE FREEMAN',
  'email': 'LOUISE_FREEMAN@gmail.com',
  'Designation': 'DIRECTOR',
  'Company': 'MARTA_PVT_LTD',
  'CityOfResidence': 'BANGALORE',
  'Industry': 'AQUATIC ANIMAL TRANSPORT COMPANIES'},
 99: {'name': 'GERALDINE DIAS',
  'email': 'GERALDINE_DIAS@gmail.com',
  'Designation': 'ASSISTANT SENIOR DIRECTOR',
  'Company': 'CHAD_PVT_LTD',
  'CityOfResidence': 'CHENNAI',
  'Industry': 'SOLAR STREET LIGHT MANUFACTURERS'},
 100: {'name': 'BEVERLEY SCLAFANI',
  'email': 'BEVERLEY_SCLAFANI@gmail.com',
  'Designation': 'PRESIDENT',
  'Company': 'DERRICK_PVT_LTD',
  'CityOfResidence': 'MUMBAI',
  'Industry': 'SOLAR MOUNTING SYSTEM MANUFACTURERS'},
 101: {'name': 'DOMENICA SADBERRY',
  'email': 'DOMENICA_SADBERRY@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'RONALD_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'FISH HATCHERIES'},
 102: {'name': 'ALBERT MCELROY',
  'email': 'ALBERT_MCELROY@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'JAMES_PVT_LTD',
  'CityOfResidence': 'MUMBAI',
  'Industry': 'SOLAR INVERTER MANUFACTURERS'},
 103: {'name': 'MEL HARKAVY',
  'email': 'MEL_HARKAVY@gmail.com',
  'Designation': 'DIRECTOR',
  'Company': 'SALLY_PVT_LTD',
  'CityOfResidence': 'DELHI',
  'Industry': 'SOLAR ADVOCACY ORGANIZATIONS'},
 104: {'name': 'JOSEPHINE DOTY',
  'email': 'JOSEPHINE_DOTY@gmail.com',
  'Designation': 'AVP',
  'Company': 'MINNIE_PVT_LTD',
  'CityOfResidence': 'HYDERABAD',
  'Industry': 'FISH HATCHERIES'},
 105: {'name': 'SHIRLEY COPLIN',
  'email': 'SHIRLEY_COPLIN@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'JENNIFER_PVT_LTD',
  'CityOfResidence': 'BANGALORE',
  'Industry': 'SOLAR ENERGY MARKETPLACES'},
 106: {'name': 'WILEY RANESES',
  'email': 'WILEY_RANESES@gmail.com',
  'Designation': 'PRESIDENT',
  'Company': 'SUSAN_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'SOLAR MOUNTING SYSTEM MANUFACTURERS'},
 107: {'name': 'CHERYL CZAPLA',
  'email': 'CHERYL_CZAPLA@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'KATHY_PVT_LTD',
  'CityOfResidence': 'DELHI',
  'Industry': 'SOLAR ADVOCACY ORGANIZATIONS'},
 108: {'name': 'MARGIE GREENE',
  'email': 'MARGIE_GREENE@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'CHAD_PVT_LTD',
  'CityOfResidence': 'CHENNAI',
  'Industry': 'SOLAR ADVOCACY ORGANIZATIONS'},
 109: {'name': 'CONCHITA PETERSON',
  'email': 'CONCHITA_PETERSON@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'PAUL_PVT_LTD',
  'CityOfResidence': 'DELHI',
  'Industry': 'AGRICULTURAL TRAINING AND EDUCATION PROVIDERS'},
 110: {'name': 'BERNICE ANDERSON',
  'email': 'BERNICE_ANDERSON@gmail.com',
  'Designation': 'ASSISTANT SENIOR DIRECTOR',
  'Company': 'WILLIAM_PVT_LTD',
  'CityOfResidence': 'CHENNAI',
  'Industry': 'FISH FEED MANUFACTURERS'},
 111: {'name': 'BOBBY JOHNSON',
  'email': 'BOBBY_JOHNSON@gmail.com',
  'Designation': 'DIRECTOR',
  'Company': 'PAUL_PVT_LTD',
  'CityOfResidence': 'DELHI',
  'Industry': 'ORGANIC FARMING COMPANIES'},
 112: {'name': 'ANNA TAYLOR',
  'email': 'ANNA_TAYLOR@gmail.com',
  'Designation': 'ASSISTANT SENIOR DIRECTOR',
  'Company': 'MINNIE_PVT_LTD',
  'CityOfResidence': 'KOCHI',
  'Industry': 'AQUATIC TECHNOLOGY PROVIDERS'},
 113: {'name': 'DAVID BURT',
  'email': 'DAVID_BURT@gmail.com',
  'Designation': 'AVP',
  'Company': 'LETHA_PVT_LTD',
  'CityOfResidence': 'MUMBAI',
  'Industry': 'AGRICULTURAL RESEARCH INSTITUTIONS'},
 114: {'name': 'ESTHER KENNERSON',
  'email': 'ESTHER_KENNERSON@gmail.com',
  'Designation': 'DIRECTOR',
  'Company': 'MINNIE_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'AQUATIC ANIMAL FEED SUPPLIERS'},
 115: {'name': 'ZACHARY WEST',
  'email': 'ZACHARY_WEST@gmail.com',
  'Designation': 'DIRECTOR',
  'Company': 'DERRICK_PVT_LTD',
  'CityOfResidence': 'BANGALORE',
  'Industry': 'SOLAR FINANCING COMPANIES'},
 116: {'name': 'CHRISTOPHER FURMAN',
  'email': 'CHRISTOPHER_FURMAN@gmail.com',
  'Designation': 'ASSISTANT SENIOR DIRECTOR',
  'Company': 'RONALD_PVT_LTD',
  'CityOfResidence': 'KOCHI',
  'Industry': 'FISH HATCHERIES'},
 117: {'name': 'WARREN MULCAHY',
  'email': 'WARREN_MULCAHY@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'CHAD_PVT_LTD',
  'CityOfResidence': 'CHENNAI',
  'Industry': 'SOLAR ENERGY AGGREGATORS'},
 118: {'name': 'MARY MCCRACKEN',
  'email': 'MARY_MCCRACKEN@gmail.com',
  'Designation': 'DIRECTOR',
  'Company': 'MINNIE_PVT_LTD',
  'CityOfResidence': 'BANGALORE',
  'Industry': 'EQUIPMENT MANUFACTURERS'},
 119: {'name': 'VERNON CARVER',
  'email': 'VERNON_CARVER@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'LETHA_PVT_LTD',
  'CityOfResidence': 'DELHI',
  'Industry': 'FARM MANAGEMENT SOFTWARE PROVIDERS'},
 120: {'name': 'GERALD RANDOLPH',
  'email': 'GERALD_RANDOLPH@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'JOHN_PVT_LTD',
  'CityOfResidence': 'MUMBAI',
  'Industry': 'AQUATIC WASTE MANAGEMENT COMPANIES'},
 121: {'name': 'MARIO MITCHELL',
  'email': 'MARIO_MITCHELL@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'SUSAN_PVT_LTD',
  'CityOfResidence': 'KOCHI',
  'Industry': 'SOLAR PROJECT INVESTORS'},
 122: {'name': 'THOMAS STYER',
  'email': 'THOMAS_STYER@gmail.com',
  'Designation': 'AVP',
  'Company': 'CHAD_PVT_LTD',
  'CityOfResidence': 'DELHI',
  'Industry': 'SOLAR CONSULTING FIRMS'},
 123: {'name': 'CHRISTOPHER LANEY',
  'email': 'CHRISTOPHER_LANEY@gmail.com',
  'Designation': 'ASSISTANT SENIOR DIRECTOR',
  'Company': 'SUSAN_PVT_LTD',
  'CityOfResidence': 'KOCHI',
  'Industry': 'SOLAR INVERTER MANUFACTURERS'},
 124: {'name': 'KATHY PATTON',
  'email': 'KATHY_PATTON@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'FRANCISCO_PVT_LTD',
  'CityOfResidence': 'HYDERABAD',
  'Industry': 'AQUACULTURE INVESTMENT FIRMS'},
 125: {'name': 'MARY ROBINSON',
  'email': 'MARY_ROBINSON@gmail.com',
  'Designation': 'PRESIDENT',
  'Company': 'JAMES_PVT_LTD',
  'CityOfResidence': 'DELHI',
  'Industry': 'SOLAR ADVOCACY ORGANIZATIONS'},
 126: {'name': 'JAMES THOMPSON',
  'email': 'JAMES_THOMPSON@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'SALLY_PVT_LTD',
  'CityOfResidence': 'CHENNAI',
  'Industry': 'SOLAR HOME SYSTEM PROVIDERS'},
 127: {'name': 'CATHERINE MARTINEZ',
  'email': 'CATHERINE_MARTINEZ@gmail.com',
  'Designation': 'DIRECTOR',
  'Company': 'TIM_PVT_LTD',
  'CityOfResidence': 'HYDERABAD',
  'Industry': 'SOLAR TRACKING SYSTEM MANUFACTURERS'},
 128: {'name': 'MI BOE',
  'email': 'MI_BOE@gmail.com',
  'Designation': 'PRESIDENT',
  'Company': 'SUSAN_PVT_LTD',
  'CityOfResidence': 'CHENNAI',
  'Industry': 'SOLAR WATER HEATER MANUFACTURERS'},
 129: {'name': 'SHIRLEY DOUCETTE',
  'email': 'SHIRLEY_DOUCETTE@gmail.com',
  'Designation': 'AVP',
  'Company': 'GERRI_PVT_LTD',
  'CityOfResidence': 'CHENNAI',
  'Industry': 'SOLAR GENERATOR MANUFACTURERS'},
 130: {'name': 'MARIA WILSON',
  'email': 'MARIA_WILSON@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'WILLIAM_PVT_LTD',
  'CityOfResidence': 'CHENNAI',
  'Industry': 'AQUATIC WASTE MANAGEMENT COMPANIES'},
 131: {'name': 'AL HARKER',
  'email': 'AL_HARKER@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'JAMES_PVT_LTD',
  'CityOfResidence': 'BANGALORE',
  'Industry': 'SOLAR ADVOCACY ORGANIZATIONS'},
 132: {'name': 'TAMMY PEREZ',
  'email': 'TAMMY_PEREZ@gmail.com',
  'Designation': 'PRESIDENT',
  'Company': 'JENNIFER_PVT_LTD',
  'CityOfResidence': 'MUMBAI',
  'Industry': 'SOLAR MODULE MANUFACTURERS'},
 133: {'name': 'MARK MARROGUIN',
  'email': 'MARK_MARROGUIN@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'SUSAN_PVT_LTD',
  'CityOfResidence': 'HYDERABAD',
  'Industry': 'SOLAR FINANCING COMPANIES'},
 134: {'name': 'GEORGIA MACKENZIE',
  'email': 'GEORGIA_MACKENZIE@gmail.com',
  'Designation': 'ASSISTANT SENIOR DIRECTOR',
  'Company': 'CHAD_PVT_LTD',
  'CityOfResidence': 'MUMBAI',
  'Industry': 'SOLAR CHARGE CONTROLLER MANUFACTURERS'},
 135: {'name': 'MORRIS MARQUIS',
  'email': 'MORRIS_MARQUIS@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'PAUL_PVT_LTD',
  'CityOfResidence': 'DELHI',
  'Industry': 'AGRICULTURAL INSURANCE PROVIDERS'},
 136: {'name': 'MICHAEL GOSCH',
  'email': 'MICHAEL_GOSCH@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'PAUL_PVT_LTD',
  'CityOfResidence': 'DELHI',
  'Industry': 'ORGANIC FARMING COMPANIES'},
 137: {'name': 'DAVID MANNING',
  'email': 'DAVID_MANNING@gmail.com',
  'Designation': 'PRESIDENT',
  'Company': 'KATHY_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'SOLAR ENERGY AGGREGATORS'},
 138: {'name': 'DANIEL ROWE',
  'email': 'DANIEL_ROWE@gmail.com',
  'Designation': 'AVP',
  'Company': 'CHAD_PVT_LTD',
  'CityOfResidence': 'MUMBAI',
  'Industry': 'SOLAR CELL MANUFACTURERS'},
 139: {'name': 'EDWARD FAUST',
  'email': 'EDWARD_FAUST@gmail.com',
  'Designation': 'AVP',
  'Company': 'WILLIAM_PVT_LTD',
  'CityOfResidence': 'MUMBAI',
  'Industry': 'AQUATIC PEST MANAGEMENT COMPANIES'},
 140: {'name': 'CLETA CRAMER',
  'email': 'CLETA_CRAMER@gmail.com',
  'Designation': 'ASSISTANT SENIOR DIRECTOR',
  'Company': 'KATHY_PVT_LTD',
  'CityOfResidence': 'DELHI',
  'Industry': 'SOLAR WATER HEATER MANUFACTURERS'},
 141: {'name': 'CARYN MILLER',
  'email': 'CARYN_MILLER@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'LETHA_PVT_LTD',
  'CityOfResidence': 'CHENNAI',
  'Industry': 'FERTILIZER MANUFACTURERS'},
 142: {'name': 'WILLIAM MADAN',
  'email': 'WILLIAM_MADAN@gmail.com',
  'Designation': 'PRESIDENT',
  'Company': 'DERRICK_PVT_LTD',
  'CityOfResidence': 'CHENNAI',
  'Industry': 'SOLAR INVERTER MANUFACTURERS'},
 143: {'name': 'ALDO PARRALES',
  'email': 'ALDO_PARRALES@gmail.com',
  'Designation': 'AVP',
  'Company': 'GERRI_PVT_LTD',
  'CityOfResidence': 'BANGALORE',
  'Industry': 'SOLAR CHARGE CONTROLLER MANUFACTURERS'},
 144: {'name': 'MOLLY COFFMAN',
  'email': 'MOLLY_COFFMAN@gmail.com',
  'Designation': 'ASSISTANT SENIOR DIRECTOR',
  'Company': 'JENNIFER_PVT_LTD',
  'CityOfResidence': 'BANGALORE',
  'Industry': 'SOLAR ADVOCACY ORGANIZATIONS'},
 145: {'name': 'JIMMY BONDS',
  'email': 'JIMMY_BONDS@gmail.com',
  'Designation': 'AVP',
  'Company': 'WILLIAM_PVT_LTD',
  'CityOfResidence': 'KOCHI',
  'Industry': 'SEAWEED FARMS'},
 146: {'name': 'NELLIE HOPSON',
  'email': 'NELLIE_HOPSON@gmail.com',
  'Designation': 'ASSISTANT SENIOR DIRECTOR',
  'Company': 'PAUL_PVT_LTD',
  'CityOfResidence': 'HYDERABAD',
  'Industry': 'AGRICULTURAL FINANCING COMPANIES'},
 147: {'name': 'BRIAN JAMISON',
  'email': 'BRIAN_JAMISON@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'MARTA_PVT_LTD',
  'CityOfResidence': 'KOCHI',
  'Industry': 'AQUATIC INSURANCE BROKERS'},
 148: {'name': 'LAUREN FAVERO',
  'email': 'LAUREN_FAVERO@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'JOHN_PVT_LTD',
  'CityOfResidence': 'HYDERABAD',
  'Industry': 'FISH FARMS'},
 149: {'name': 'ROBIN STEMMER',
  'email': 'ROBIN_STEMMER@gmail.com',
  'Designation': 'PRESIDENT',
  'Company': 'DERRICK_PVT_LTD',
  'CityOfResidence': 'MUMBAI',
  'Industry': 'SOLAR MODULE MANUFACTURERS'},
 150: {'name': 'GERALDINE NUGENT',
  'email': 'GERALDINE_NUGENT@gmail.com',
  'Designation': 'DIRECTOR',
  'Company': 'JAMES_PVT_LTD',
  'CityOfResidence': 'CHENNAI',
  'Industry': 'SOLAR PANEL MANUFACTURERS'},
 151: {'name': 'PAMELA BARRETT',
  'email': 'PAMELA_BARRETT@gmail.com',
  'Designation': 'ASSISTANT SENIOR DIRECTOR',
  'Company': 'HOLLY_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'AGRO-PRODUCT PROCESSORS'},
 152: {'name': 'MARY MCTIERNAN',
  'email': 'MARY_MCTIERNAN@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'RUBY_PVT_LTD',
  'CityOfResidence': 'BANGALORE',
  'Industry': 'AGRICULTURAL INSURANCE PROVIDERS'},
 153: {'name': 'SCOTT HAYS',
  'email': 'SCOTT_HAYS@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'DERRICK_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'SOLAR CHARGE CONTROLLER MANUFACTURERS'},
 154: {'name': 'JOHN WEBB',
  'email': 'JOHN_WEBB@gmail.com',
  'Designation': 'PRESIDENT',
  'Company': 'KATHY_PVT_LTD',
  'CityOfResidence': 'HYDERABAD',
  'Industry': 'SOLAR RESEARCH INSTITUTIONS'},
 155: {'name': 'CANDIS WEBB',
  'email': 'CANDIS_WEBB@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'LETHA_PVT_LTD',
  'CityOfResidence': 'KOCHI',
  'Industry': 'CROP FARMERS'},
 156: {'name': 'CLINTON MCCONNELL',
  'email': 'CLINTON_MCCONNELL@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'JOHN_PVT_LTD',
  'CityOfResidence': 'KOCHI',
  'Industry': 'AQUATIC INSURANCE BROKERS'},
 157: {'name': 'MARK GOULD',
  'email': 'MARK_GOULD@gmail.com',
  'Designation': 'DIRECTOR',
  'Company': 'LETHA_PVT_LTD',
  'CityOfResidence': 'MUMBAI',
  'Industry': 'LIVESTOCK FARMERS'},
 158: {'name': 'NORMAN FLEEGER',
  'email': 'NORMAN_FLEEGER@gmail.com',
  'Designation': 'DIRECTOR',
  'Company': 'CHAD_PVT_LTD',
  'CityOfResidence': 'MUMBAI',
  'Industry': 'SOLAR ENERGY MARKETPLACES'},
 159: {'name': 'ERIKA WILLIAMS',
  'email': 'ERIKA_WILLIAMS@gmail.com',
  'Designation': 'ASSISTANT SENIOR DIRECTOR',
  'Company': 'JAMES_PVT_LTD',
  'CityOfResidence': 'KOCHI',
  'Industry': 'SOLAR RESEARCH INSTITUTIONS'},
 160: {'name': 'PAUL CRUISE',
  'email': 'PAUL_CRUISE@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'RUBY_PVT_LTD',
  'CityOfResidence': 'KOCHI',
  'Industry': 'POULTRY FARMERS'},
 161: {'name': 'STEVEN POOLE',
  'email': 'STEVEN_POOLE@gmail.com',
  'Designation': 'PRESIDENT',
  'Company': 'FRANCISCO_PVT_LTD',
  'CityOfResidence': 'HYDERABAD',
  'Industry': 'AQUATIC ANIMAL TRANSPORT COMPANIES'},
 162: {'name': 'DENNIS VAUX',
  'email': 'DENNIS_VAUX@gmail.com',
  'Designation': 'AVP',
  'Company': 'DERRICK_PVT_LTD',
  'CityOfResidence': 'CHENNAI',
  'Industry': 'SOLAR PROJECT DEVELOPERS'},
 163: {'name': 'ALBINA STEWART',
  'email': 'ALBINA_STEWART@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'PAUL_PVT_LTD',
  'CityOfResidence': 'KOCHI',
  'Industry': 'CROP FARMERS'},
 164: {'name': 'LEONARD HASKELL',
  'email': 'LEONARD_HASKELL@gmail.com',
  'Designation': 'PRESIDENT',
  'Company': 'DERRICK_PVT_LTD',
  'CityOfResidence': 'DELHI',
  'Industry': 'SOLAR ENERGY RETAILERS'},
 165: {'name': 'MARY HARLAN',
  'email': 'MARY_HARLAN@gmail.com',
  'Designation': 'PRESIDENT',
  'Company': 'SUSAN_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'SOLAR MOUNTING SYSTEM MANUFACTURERS'},
 166: {'name': 'RUTH BERTRAND',
  'email': 'RUTH_BERTRAND@gmail.com',
  'Designation': 'DIRECTOR',
  'Company': 'MARTA_PVT_LTD',
  'CityOfResidence': 'BANGALORE',
  'Industry': 'AQUATIC WASTE MANAGEMENT COMPANIES'},
 167: {'name': 'LEE SHAW',
  'email': 'LEE_SHAW@gmail.com',
  'Designation': 'DIRECTOR',
  'Company': 'JENNIFER_PVT_LTD',
  'CityOfResidence': 'MUMBAI',
  'Industry': 'SOLAR RESEARCH INSTITUTIONS'},
 168: {'name': 'DANIELLA CHEN',
  'email': 'DANIELLA_CHEN@gmail.com',
  'Designation': 'AVP',
  'Company': 'SALLY_PVT_LTD',
  'CityOfResidence': 'BANGALORE',
  'Industry': 'SOLAR MODULE MANUFACTURERS'},
 169: {'name': 'SCARLETT WILLIAMS',
  'email': 'SCARLETT_WILLIAMS@gmail.com',
  'Designation': 'PRESIDENT',
  'Company': 'GERRI_PVT_LTD',
  'CityOfResidence': 'DELHI',
  'Industry': 'SOLAR ENERGY RETAILERS'},
 170: {'name': 'JOE SOWERS',
  'email': 'JOE_SOWERS@gmail.com',
  'Designation': 'AVP',
  'Company': 'WILLIAM_PVT_LTD',
  'CityOfResidence': 'DELHI',
  'Industry': 'AQUAPONICS FARMS'},
 171: {'name': 'CHRISTOPHER ACHENBACH',
  'email': 'CHRISTOPHER_ACHENBACH@gmail.com',
  'Designation': 'VICEPRESIDENT',
  'Company': 'FRANCISCO_PVT_LTD',
  'CityOfResidence': 'MUMBAI',
  'Industry': 'AQUATIC PEST MANAGEMENT COMPANIES'},
 172: {'name': 'ERNESTO LOTTHAMMER',
  'email': 'ERNESTO_LOTTHAMMER@gmail.com',
  'Designation': 'AVP',
  'Company': 'SALLY_PVT_LTD',
  'CityOfResidence': 'BANGALORE',
  'Industry': 'SOLAR WATER HEATER MANUFACTURERS'},
 173: {'name': 'ALONZO STARKS',
  'email': 'ALONZO_STARKS@gmail.com',
  'Designation': 'ASSISTANT SENIOR DIRECTOR',
  'Company': 'JOHN_PVT_LTD',
  'CityOfResidence': 'DELHI',
  'Industry': 'AQUATIC RESEARCH VESSEL PROVIDERS'},
 174: {'name': 'KAREN RAY',
  'email': 'KAREN_RAY@gmail.com',
  'Designation': 'ASSISTANT SENIOR DIRECTOR',
  'Company': 'GERRI_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'SOLAR CELL MANUFACTURERS'},
 175: {'name': 'RACHEL PEL',
  'email': 'RACHEL_PEL@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'PAUL_PVT_LTD',
  'CityOfResidence': 'MUMBAI',
  'Industry': 'AGRO-PRODUCT DISTRIBUTORS'},
 176: {'name': 'KENNETH BAKER',
  'email': 'KENNETH_BAKER@gmail.com',
  'Designation': 'PRESIDENT',
  'Company': 'JAMES_PVT_LTD',
  'CityOfResidence': 'PUNE',
  'Industry': 'SOLAR MOUNTING SYSTEM MANUFACTURERS'},
 177: {'name': 'ROSIE DRAKE',
  'email': 'ROSIE_DRAKE@gmail.com',
  'Designation': 'DIRECTOR',
  'Company': 'CHAD_PVT_LTD',
  'CityOfResidence': 'DELHI',
  'Industry': 'SOLAR TRACKING SYSTEM MANUFACTURERS'},
 178: {'name': 'ANGEL WHITE',
  'email': 'ANGEL_WHITE@gmail.com',
  'Designation': 'AVP',
  'Company': 'RONALD_PVT_LTD',
  'CityOfResidence': 'BANGALORE',
  'Industry': 'AQUATIC FARM MANAGEMENT SOFTWARE PROVIDERS'},
 179: {'name': 'ROXIE RAKOWSKI',
  'email': 'ROXIE_RAKOWSKI@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'KATHY_PVT_LTD',
  'CityOfResidence': 'MUMBAI',
  'Industry': 'SOLAR HOME SYSTEM PROVIDERS'},
 180: {'name': 'PAUL STARNES',
  'email': 'PAUL_STARNES@gmail.com',
  'Designation': 'ASSISTANT SENIOR DIRECTOR',
  'Company': 'DERRICK_PVT_LTD',
  'CityOfResidence': 'KOCHI',
  'Industry': 'SOLAR RESEARCH INSTITUTIONS'},
 181: {'name': 'HERBERT HOCKENBERRY',
  'email': 'HERBERT_HOCKENBERRY@gmail.com',
  'Designation': 'SENIORDIRECTOR',
  'Company': 'CAMILLE_PVT_LTD',
  'CityOfResidence': 'MUMBAI',
  'Industry': 'SOLAR ASSET MANAGEMENT COMPANIES'},
 202: {'name': 'Sundaresan Subramanian',
  'email': 'test@email.com',
  'Designation': 'Director',
  'Company': 'ABCCorp',
  'CityOfResidence': 'Chennai',
  'Industry': 'Data Science'}};

  if (obj[id]) {
    const { name, email, Designation, Company, CityOfResidence, Industry } = obj[id];
    return { name, email, Designation, Company, CityOfResidence, Industry };
  }
  return null; // return null if the given ID is not found in the object
}


