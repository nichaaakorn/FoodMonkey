  //Initial /firebase 1111111111111
  var firebaseConfig = {
    apiKey: "AIzaSyC9V8Vz_q7041Mrj2GZSzFQbsQJmUWJYQM",
    authDomain: "foodmonkey-36546.firebaseapp.com",
    databaseURL: "https://foodmonkey-36546.firebaseio.com",
    projectId: "foodmonkey-36546",
    storageBucket: "foodmonkey-36546.appspot.com",
    messagingSenderId: "249648993939",
    appId: "1:249648993939:web:d61b879f1bb3b1d1695f66"
  };
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  
  //login
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
     // var displayName = user.displayName;
      var email = user.email;
      console.log(email+ "signed in");
      // var emailVerified = user.emailVerified;
      // var photoURL = user.photoURL;
      // var isAnonymous = user.isAnonymous;
      // var uid = user.uid;
      // var providerData = user.providerData;
      // ...
    } else {
      console.log("signed out");
  
    }
  });
  
  
  
  
  
  document.addEventListener('init', function (event) {
    var page = event.target;
  
  
  
  
    if (page.id === 'homePage') {
      console.log("homePage");
  
      
  
  //fastfood
      // $("#btn1").click(function () {
        //window.location='fastfood.html'  
         //console.log("go");
       //});
  //dessert
  //$("#btn2").click(function () {
    //window.location='dessert.html'  
     //console.log("go");
  // });
  
  //Drink
  //$("#btn3").click(function () {
    //window.location='drink.html'  
     //console.log("go");
   //});
  
  //Islam
  //$("#btn4").click(function () {
    //window.location='islam.html'  
     //console.log("go");
   //});
  
   $("#fastfoodbtn").click(function () {
    localStorage.setItem("selectedCategory", "fastfood");
    $("#content")[0].load("category.html");
  });
  
  $("#dessertbtn").click(function () {
    localStorage.setItem("selectedCategory", "dessert");  
    $("#content")[0].load("category.html");
  });
  
  $("#drinkbtn").click(function () {
    localStorage.setItem("selectedCategory", "drink");
    $("#content")[0].load("category.html");
  });
  
  $("#islambtn").click(function () {
    localStorage.setItem("selectedCategory", "islam");
    $("#content")[0].load("category.html");
  });
  
  
  
  
  
      $("#menubtn").click(function () {
        $("#sidemenu")[0].open();      
      });
    
      $("#carousel").empty();
      db.collection("recomended").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var item = `<ons-carousel-item modifier="nodivider" id="${doc.data().id}" class="recomended_item">
          <div class="thumbnail"  style="background-image: url('${doc.data().photoUrl}');background-size: 180%;">
        
          </div>
          <div class="recomended_item_title" id="item1_name">'${doc.data().name}</div>
      </ons-carousel-item>` ;
          $("#carousel").append(item);
            
        });
    });
  
  
    
  
  
    
  
  
  
  
    }
  
    if (page.id === 'menuPage') {
      console.log("menuPage");
  
      $("#logout").click(function () {
        window.location='login.html'  
      });
  
      $("#logout").click(function () {
        firebase.auth().signOut().then(function() {
          $("#content")[0].load("login.html");  
        $("#sidemenu")[0].close();   
        }).catch(function(error) {
          console.log(error.message); 
        });
      });
  
      $("#home").click(function () {
        $("#content")[0].load("home.html");  
        $("#sidemenu")[0].close();   
      });

    }

    
  
    if (page.id === 'categoryPage') {
      var category = localStorage.getItem("selectedCategory");
      console.log("categoryPage:" + category);
  
      $("#header").html(category);
  
      $("#menubtn").click(function () {
        $("#sidemenu")[0].open();
      });
  
      $("#list").empty();
      db.collection("recomended").where("category", "==", category).get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var item = `
          <ons-scroller>
          <ons-card style="margin-top: 40px;">
          <div class="category">
          <div class="col-6">
          
         
          <img class="category_header" src="${doc.data().photoURL}" style="width:80%;">         
          <p>${doc.data().name}</p>
   </div>
      
     </div>   </ons-card>  </ons-scroller>
           `
          $("#list").append(item);
          console.log(doc.data().name);
          
        });
      });
  
    }


    if (page.id === 'address') {
      console.log('address');
      var lat, selectedLat;
      var lng, selectedLng;
  
      var onSuccess = function (position) {
        lat = position.coords.latitude;
        lng = position.coords.longitude;
  
  
        mapboxgl.accessToken = 'pk.eyJ1IjoiNjAzMDIxMzA0NiIsImEiOiJjazJsYWJleWkwNTIzM21waGM2ZWp0aGJrIn0.LGKKugFjq5cz1A3e8hhxlQ';
        var map = new mapboxgl.Map({
          container: 'map', // container id
          style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
          center: [lng, lat], // starting position [lng, lat]
          zoom: 13 // starting zoom
        });
        var marker = new mapboxgl.Marker({
          draggable: true
        })
          .setLngLat([lng, lat])
          .addTo(map);
  
        function onDragEnd() {
          var lngLat = marker.getLngLat();
          selectedLat = lngLat.lat;
          selectedLng = lngLat.lng;
          coordinates.style.display = 'block';
          coordinates.innerHTML = 'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
        }
  
        marker.on('dragend', onDragEnd);
      };
  
      // onError Callback receives a PositionError object
      //
      function onError(error) {
        alert('code: ' + error.code + '\n' +
          'message: ' + error.message + '\n');
      }
  
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
  
      $("#setaddress").click(function () {
       ons.notification.alert("Delivery:" + selectedLat + "," + selectedLng);
       
      });
    
    }
  
  
  
    if (page.id === 'loginPage') {
      console.log("loginPage");
  
      $("#signinbtn").click(function () {
       var username = $("#username").val();
       var password = $("#password").val();
       firebase.auth().signInWithEmailAndPassword(username, password)
       .catch(function(error) {
        
         console.log(error.message);
      });
      
      });
      $("#backhomebtn").click(function () {
        $("#content")[0].load("home.html");      
      });
    }
  });
  