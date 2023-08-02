
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCxRz4asKDfmdO1y3dPG48BA6H0qdChtio",
      authDomain: "quitter-49142.firebaseapp.com",
      databaseURL: "https://quitter-49142-default-rtdb.firebaseio.com/",
      projectId: "quitter-49142",
      storageBucket: "quitter-49142.appspot.com",
      messagingSenderId: "228559231803",
      appId: "1:228559231803:web:5e9352f2c3936cf7c8b51e"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " +  user_name;

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - ", Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomNameP(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
} 

function logout() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name")
      window.location = "index.html"
}