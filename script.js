// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "0px";
  }




}

const menulink = document.querySelector(".menulink");
const menutoggle = document.querySelector(".toggle");
menutoggle.onclick = function () {
  console.log("click");

  menutoggle.classList.toggle("active");

  if (menulink.style.right === "0px") {
    menulink.style.right = "-550px";
  } else {
    menulink.style.right = "0px";
  }
};


