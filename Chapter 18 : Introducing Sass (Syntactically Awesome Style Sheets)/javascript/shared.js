// alert("this is working, yeeeeaaaahhhhH!");

var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var modalYesButton = document.querySelector(".modal__action");
var selectPlanButton = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var button = document.querySelector(".button");
var checkBox = document.getElementById("agree-terms");

for (var i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener("click", function () {
    modal.classList.add("open");
    backdrop.style.display = "block";
    setTimeout(() => {
      backdrop.classList.add("open");
    }, 10);
  });
}

backdrop.addEventListener("click", function () {
  mobileNav.classList.remove("open");
  closeModal();
});
if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}
if (modalYesButton) {
  modalYesButton.addEventListener("click", continueToHostingPage);
}
toggleButton.addEventListener("click", function () {
  mobileNav.classList.add("open");
  backdrop.style.display = "block";
  setTimeout(() => {
    backdrop.classList.add("open");
  }, 10);
});
button.addEventListener("click", function () {
  button.classList.remove("button:disabled");
});

checkBox.addEventListener("change", (event) => {
  if (event.target.checked) {
    enableButton();
  } else {
    disableButton();
  }
});

button.addEventListener("click", (event) => {
  console.log(event);
  console.log("OMG!!!!");
});

function closeModal() {
  backdrop.style.display = "none";
  setTimeout(() => {
    backdrop.classList.remove("open");
  }, 10);
  if (modal) {
    modal.classList.remove("open");
  }
}

function continueToHostingPage() {
  backdrop.style.display = "none";
  setTimeout(() => {
    backdrop.classList.remove("open");
  }, 10);
  modal.classList.remove("open");
  document.location.href = "start-hosting.html";
}

function enableButton() {
  button.disabled = false;
}

function disableButton() {
  button.disabled = true;
}
