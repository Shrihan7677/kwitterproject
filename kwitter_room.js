var firebaseConfig = {
    apiKey: "AIzaSyCViygEeVtMqxKd2Isg7lyBEBRVi4xVz34",
    authDomain: "kwitter-project-5e8fc.firebaseapp.com",
    projectId: "kwitter-project-5e8fc",
    storageBucket: "kwitter-project-5e8fc.appspot.com",
    messagingSenderId: "361955911518",
    appId: "1:361955911518:web:30fa1089e8ae6fe53211cf",
    measurementId: "G-MVKPYZTFHZ"
  };
  firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(room_name);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
 function logout() {
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location = "index.html";
 }