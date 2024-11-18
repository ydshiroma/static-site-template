window.addEventListener('load', (event) => {
  console.log("Page loaded.");
});

function showOrHide() {
    const visibility = document.getElementById("showthis").style.visibility;
    if (visibility == "hidden") {
        document.getElementById("showthis").style.visibility = "visible";
        document.getElementById("bio-image").style.filter = "brightness(30%)"
    } else {
        document.getElementById("showthis").style.visibility = "hidden";
        document.getElementById("bio-image").style.filter = "brightness(100%)"
    }
}

// START MODAL CODE

// Get the image that opens the modal
var img = document.querySelectorAll('img.modalImg');

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < img.length; i++) {
 img[i].onclick = function(e){
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
  }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}

// END MODAL CODE