
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC9V8Vz_q7041Mrj2GZSzFQbsQJmUWJYQM",
    authDomain: "foodmonkey-36546.firebaseapp.com",
    databaseURL: "https://foodmonkey-36546.firebaseio.com",
    projectId: "foodmonkey-36546",
    storageBucket: "foodmonkey-36546.appspot.com",
    messagingSenderId: "249648993939",
    appId: "1:249648993939:web:d61b879f1bb3b1d1695f66"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var provider = new firebase.auth.GoogleAuthProvider();


document.addEventListener('init', function (event) {

    var page = event.target;

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            // var displayName = user.displayName;
            var email = user.email;
            console.log(email + "signed in ");

            // var emailVerified = user.emailVerified;
            // var photoURL = user.photoURL;
            // var isAnonymous = user.isAnonymous;
            // var uid = user.uid;
            // var providerData = user.providerData;
            // ...
        } else {

            console.log("signed out ");
            // User is signed out.

        }
    });

    if (page.id === 'tabbar') {
        //code for tapbar

        $("#menubtn").click(function () {
            var menu = document.getElementById('menu');
            menu.open();
        });
        $("#btnFastfood").click(function () {

            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('fastfood.html')
                .then(menu.close.bind(menu));

        });
        $("#Backhome").click(function () {

            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('tabbar.html')
                .then(menu.close.bind(menu));

        });




        db.collection("recommended") .orderBy("photoUrl", "asc").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                var item =
                    `<ons-carousel-item modifier="nodivider" id="${doc.data().id}" class="recomended_item">
            <div class="thumbnail" style="background-image: url('${doc.data().photoUrl}');background-size: 100%;">
            </div>
            <div class="recomended_item_title" id="item1_name">${doc.data().name}</div>
        </ons-carousel-item>`;


                $("#carousel").append(item);

            });

        });
    }

    if (page.id === "sidemenu") {

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                var email = user.email;
                $("#header").append(email);
            } else { $("#header").empty(); }
        });

        $("#logoutbtn").click(function () {
            alert("logout?")
            firebase.auth().signOut().then(function () {
                var content = document.getElementById('content');
                var menu = document.getElementById('menu');
                content.load('tabbar.html')
                    .then(menu.close.bind(menu));

            }).catch(function (error) {
                console.log(error.message);
            });
        });
        $("#SignInbtn").click(function () {
            firebase.auth().signOut().then(function () {
                var content = document.getElementById('content');
                var menu = document.getElementById('menu');
                content.load('login.html')
                    .then(menu.close.bind(menu));

            }).catch(function (error) {
                console.log(error.message);
            });
        });

        $("#homebtn").click(function () {

            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('tabbar.html')
                .then(menu.close.bind(menu));
        });
    }

    if (page.id === 'login') {

        
        $("#btnRegist").click(function () {


            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('regist.html')
                .then(menu.close.bind(menu));

        });
        $("#btnGoogle").click(function () {

            firebase.auth().signInWithPopup(provider).then(function (result) {
                //Do something when login complete

                var content = document.getElementById('content');
                var menu = document.getElementById('menu');
                content.load('tabbar.html')
                    .then(menu.close.bind(menu))
                    .catch(function (error) {
                        // Handle Errors here.
                        console.log(error.message);

                    });
            });

        });

        $("#btnLogin").click(function () {

            var username = $("#user").val();
            var password = $("#pass").val();
            console.log(username + password);
            firebase.auth().signInWithEmailAndPassword(username, password).then(function (result) {
                var content = document.getElementById('content');
                var menu = document.getElementById('menu');
                content.load('tabbar.html')
                    .then(menu.close.bind(menu))
            }).catch(function (error) {
                // Handle Errors here.
                console.log(error.message);

            });

        });
        $("#backhomebtn").click(function () {

            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('tabbar.html')
                .then(menu.close.bind(menu));

        });

    }
    if (page.id === 'regist') {

        $("#btnRegist1").click(function () {
            var email = $("#Registemail").val();
            var password = $("#Registpass").val();
            if (email && password != null) {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                var content = document.getElementById('content');
                var menu = document.getElementById('menu');
                content.load('tabbar.html')
                    .then(menu.close.bind(menu))
                    .catch(function (error) {
                        // Handle Errors here.
                        console.log(error.message);

                    });
            } else { alert("Chack your regist"); }
        });

        $("#back").click(function () {

            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('login.html')
                .then(menu.close.bind(menu));

        });

    }
    if (page.id === 'fastfood') {
        db.collection("fastfood").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var item =
                 `<ons-card style="margin-top: 40px;"><div class="detail">
                 <div class="col-6">
                       <img src="${doc.data().photoURL}" style="width:80%;"> 
                      <p>${doc.data().name}</p>
               </div>
                  <div class="col-6" style="margin-top: 50px;">
                      <ons-button class="btnFood" id="${doc.data().id}">Menu</ons-button>
                  </div>
                 </div>   </ons-card> `;



                $("#listFastfood").append(item);
               
        
            });
            $("#001").click(function () {

                var content = document.getElementById('content');
                var menu = document.getElementById('menu');
                content.load('MenuKfc.html')
                    .then(menu.close.bind(menu));
    
            });

        });

        $("#back").click(function () {

            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('tabbar.html')
                .then(menu.close.bind(menu));

        });

        $("#Backhome").click(function () {

            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('tabbar.html')
                .then(menu.close.bind(menu));

        });
 
      

    }
    if (page.id === 'Kfc') {
        db.collection("KFC") .orderBy("id", "asc").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var item =
                 `  <div class="Food">
                  <div class="col-6">
                 <img
                   src="${doc.data().photoURL}"
                   style="width:60%">
   
               </div>
               <div class="col-6">
                 <p>${doc.data().detail}</p>
                 <ons-button class="btnFood" id="btn${doc.data().id}">THB ${doc.data().price}</ons-button>
               </div>
               </div>`;



                $("#food").append(item);
               
        
            });
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    $("#btn001").click(function () {
    
                        var content = document.getElementById('content');
                        var menu = document.getElementById('menu');
                        content.load('orderCf.html')
                            .then(menu.close.bind(menu));
            
                    });
            
                } else {
                    $("#btn001").click(function () {
                    alert("Please Login!!");
                    var content = document.getElementById('content');
                    var menu = document.getElementById('menu');
                    content.load('login.html')
                        .then(menu.close.bind(menu));
                });
        
                }
            });

        });
        

        $("#back").click(function () {

            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('fastfood.html')
                .then(menu.close.bind(menu));

        });
        $("#Backhome").click(function () {

            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('tabbar.html')
                .then(menu.close.bind(menu));

        });
      
    }
    if (page.id === 'orderCf') {

        $("#back").click(function () {

            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('MenuKfc.html')
                .then(menu.close.bind(menu));

        });

        $("#Backhome").click(function () {

            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('tabbar.html')
                .then(menu.close.bind(menu));

        });

    }




});