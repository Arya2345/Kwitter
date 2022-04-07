
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCf3uQFcYxC3HrMb6GKwVCo6lCoAANyyOk",
      authDomain: "kwitter-a6fef.firebaseapp.com",
      databaseURL: "https://kwitter-a6fef-default-rtdb.firebaseio.com",
      projectId: "kwitter-a6fef",
      storageBucket: "kwitter-a6fef.appspot.com",
      messagingSenderId: "399589770600",
      appId: "1:399589770600:web:f35bdf7ade5ba5e882c2dd"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirecttoRoomName(this.id)' >#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function logout(){
      window.location="index.html";
}

function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";

}
function redirecttoRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

