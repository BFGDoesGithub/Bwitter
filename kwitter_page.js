//YOUR FIREBASE LINKS
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
username = localStorage.getItem("User_name");
room_name = localStorage.getItem("RoomName");

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        name = message_data['name'];
                        message = message_data['message'];
                        like = message_data['like'];
                        name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
                        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                        like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
                        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like + "</span></button><hr>";


                        row = name_with_tag + message_with_tag + like_button + span_with_tag;
                        document.getElementById("output").innerHTML += row;
                        //End code 
                  }
            });
      });
}
getData();


function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}


function updateLike(message_id)
{
      button_id = message_id;
      likes = document.getElementById(button_id).value
      updated_likes = Number(likes) + 1;

      firebase.database().ref(roof_name).child(message_id).update({
            like : updated_likes
      })

}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
}