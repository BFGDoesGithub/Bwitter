//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyC8_87oYRCR60J4AgoD2nMXgClgn9-qrPQ",
      authDomain: "bwitter-4542d.firebaseapp.com",
      databaseURL: "https://bwitter-4542d-default-rtdb.firebaseio.com",
      projectId: "bwitter-4542d",
      storageBucket: "bwitter-4542d.appspot.com",
      messagingSenderId: "242633274345",
      appId: "1:242633274345:web:ad4bfb72109d834f611178"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
username=localStorage.getItem("User_name");
document.getElementById("UsernameText").innerHTML="Logged In As " + username + ".";


function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  
                  //End code
            });
      });
}
getData();

function AddRoom()
{
      Room_names = document.getElementById("RoomName").value;
      
      firebase.database().ref("/").child(Room_names).update({
            purpose : "adding room name"
      });

      localStorage.setItem("RoomName", Room_names);

      window.location = "kwitter_page.html"; 
}

function redirectToRoomName(name)
{
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function Logout()
{
      localStorage.removeItem("User_name");
      localStorage.removeItem("RoomName");
      localStorage.removeItem("room_name");
      window.location = "index.html"; 
}