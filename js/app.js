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

    $("#address").click(function () { 
      $("#content")[0].load("address.html");
      $("#sidemenu")[0].close();
    });

    $("#signin").click(function () { 
      $("#content")[0].load("login2.html");
      $("#sidemenu")[0].close();
    });

    $("#signedout").click(function () {
      $("#content")[0].load("login.html");
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

    $("#item1").click(function () {
      console.log(";;;;;;;");

      $("#myNavigator")[0].pushPage("MenuSweet.html");
    });

    $("#menuSweet").click(function () {
      console.log(";;;;;;;");

      $("#myNavigator")[0].pushPage("MenuSweet.html");
    });

    $("#item2").click(function () {
      console.log(";;;;;;;");

      $("#myNavigator")[0].pushPage("MenuSweet2.html");
    });


    $("#menuSweet2").click(function () {
      console.log(";;;;;;;");

      $("#myNavigator")[0].pushPage("MenuSweet2.html");
    });

    $("#menuSweet3").click(function () {
      console.log(";;;;;;;");

      $("#myNavigator")[0].pushPage("MenuSweet3.html");
    });

    $("#item3").click(function () {
      console.log(";;;;;;;");

      $("#myNavigator")[0].pushPage("MenuStreet.html");
    });


    $("#menuStreet").click(function () {
      console.log(";;;;;;;");

      $("#myNavigator")[0].pushPage("MenuStreet.html");
    });

    $("#menuDrink").click(function () {
      console.log(";;;;;;;");

      $("#myNavigator")[0].pushPage("MenuDrink.html");
    });

    $("#item4").click(function () {
      console.log(";;;;;;;");

      $("#myNavigator")[0].pushPage("MenuDrink2.html");
    });


    $("#menuDrink2").click(function () {
      console.log(";;;;;;;");

      $("#myNavigator")[0].pushPage("MenuDrink2.html");
    });

    $("#menuIslam").click(function () { 
      console.log(";;;;;;;");

      $("#myNavigator")[0].pushPage("MenuIslam.html");
    });

    $("#menuIslam2").click(function () {
      console.log(";;;;;;;");

      $("#myNavigator")[0].pushPage("MenuIslam2.html");
    });


  }

  if (page.id === 'loginPage') {
    console.log("loginPage");

    $("#backhomebtn").click(function () {
      $("#content")[0].load("home.html");
    });
  }

});

