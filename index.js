var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sidemenu = document.getElementById("sidemenu");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwiwsDD-yx3uCq3lymYc99SUmTjB_hHE4htMGg6LP5dLJ263Nt1wfFg1MlIsao-RPk4/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
        msg.textContent = "Message Sent Successfully!";
        form.reset();
        setTimeout(function(){
            msg.textContent = "";
        }, 5000);
    })
    .catch((error) => {
        msg.style.color = "red";
        msg.textContent = "Try Again after some time";
        form.reset();
        setTimeout(function(){
            msg.textContent = "";
            msg.style.color = "#61b752";
        }, 5000);
    });
});
