document.addEventListener('init', function (event) {
  var page = event.target;


  if (page.id === 'homePage') {
    console.log("homePage");

    $("#menubtn").click(function () {
      $("#sidemenu")[0].open();      
    });
  }

  if (page.id === 'menuPage') {
    console.log("menuPage");

    $("#login").click(function () {
      $("#content")[0].load("login.html");  
      $("#sidemenu")[0].close();   
    });

    $("#home").click(function () {
      $("#content")[0].load("home.html");  
      $("#sidemenu")[0].close();   
    });

    $("#sweets").click(function () {
      console.log("sweets");
      
      $("#myNavigator")[0].pushPage("Sweet.html");   
    });

    $("#street").click(function () {
      console.log(";;;;;;;");
      
      $("#myNavigator")[0].pushPage("Street.html");   
    });

    $("#drink").click(function () {
      console.log(";;;;;;;");
      
      $("#myNavigator")[0].pushPage("drink.html");   
    });

    
    $("#islam").click(function () {
      console.log(";;;;;;;");
      
      $("#myNavigator")[0].pushPage("Islam.html");   
    });

    
 

  

  }
  if (page.id === 'mypage') {
    console.log("mypage");

   $("#menuSweet").click(function () {
      console.log(";;;;;;;");
      
      $("#myNavigator")[0].pushPage("MenuSweet.html");   
    });

  
   $("#menuStreet").click(function () {
        console.log(";;;;;;;");
        
      $("#myNavigator")[0].pushPage("MenuStreet.html");   
    });
  
      }

  if (page.id === 'loginPage') {
    console.log("loginPage");

    $("#backhomebtn").click(function () {
      $("#content")[0].load("home.html");      
    });
  }
});
