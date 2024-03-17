function animateItem() {
  
  var gm_screen1 = document.getElementById("screen1_container");
  var gm_screen2 = document.getElementById("screen2_container");
  var gm_screen3 = document.getElementById("screen3_container");
  
  gm_screen1.classList.add("animate");

  console.log("clicked me");
  // Remove the animation class after the animation completes
  setTimeout(function () {
    //gm_screen1.classList.remove("animate");

    gm_screen2.style.display="block"

  }, 500);
}

 
