function AddUser()
{
    var User_name = document.getElementById("login").value;
    localStorage.setItem("User_name", User_name);
    window.location = "kwitter_room.html";
        
    

}

function Logout()
{

      window.location = "index.html"; 
}

