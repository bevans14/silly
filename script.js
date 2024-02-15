var button = document.getElementById("button");
var box = document.querySelector(".box");
var picture = document.getElementById("picture");
picture.style.display = "none";

button.addEventListener("click", function() {
  // Replace text and button with "Test"
  box.innerHTML = "<h1>What do you see in this tiny image? :3</h1><img src='https://narchitects.com/wp-content/uploads/2020/05/nARCHITECT-WILLOWBROOK_RD-F.OUDEMAN%C2%A9-01-sm.jpg' alt='Test Image' width='100' height='100'>";

  

  // Delay execution of displayPicture function
  setTimeout(displayPicture, 4500);
});

function displayPicture() {
    var picture = document.getElementById("picture");
    var audio = new Audio("scream.mp3"); // Replace "scream.mp3" with your audio file

    if (picture.style.display === "none") {
      picture.style.display = "block";
      audio.play();
      audio.loop = true;
    } else {
      picture.style.display = "none";
      audio.pause();
    }
  
  }