// variables

let openbtn = document.getElementById("open-btn");
let closebtn = document.getElementById("close-btn");
let modalcontainer = document.getElementById("modal-container");

//Event Listener

openbtn.addEventListener("click", function () {
  modalcontainer.style.display = "block";
});

closebtn.addEventListener("click", function () {
  modalcontainer.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === modalcontainer) {
    modalcontainer.style.display = "none";
  }
});
