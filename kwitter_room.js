var firebaseConfig = {
      apiKey: "AIzaSyAXwMOKN-mho93TpnxvzoZar-0Ao--Znn4",
      authDomain: "chat-94569.firebaseapp.com",
      databaseURL: "https://chat-94569-default-rtdb.firebaseio.com",
      projectId: "chat-94569",
      storageBucket: "chat-94569.appspot.com",
      messagingSenderId: "1076384701968",
      appId: "1:1076384701968:web:1b4660ff104fec89bff495"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name= localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML= "Welcome "+ user_name +" !";

function addroom()
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
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function redirectToRoomName(name)
{
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout()
{
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name"); 
     window.location = "index.html";

}