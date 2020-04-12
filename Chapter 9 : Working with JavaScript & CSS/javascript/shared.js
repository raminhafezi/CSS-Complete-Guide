// alert("this is working, yeeeeaaaahhhhH!");

var backdrop = document.querySelector('.backdrop')
var modal = document.querySelector('.modal')
var modalNoButton = document.querySelector('.modal__action--negative');
var modalYesButton = document.querySelector(".modal__action");
var selectPlanButton = document.querySelectorAll('.plan button');

// var mobileNavDisplay = document.querySelector(".main-header__brand img");
// var mobileNav = document.querySelector('.mobile-nav');
// console.log(mobileNavDisplay)

for (var i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', function () {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
};

backdrop.addEventListener("click", closeModal);
modalNoButton.addEventListener('click', closeModal);
modalYesButton.addEventListener('click', continueToHostingPage);
// mobileNavDisplay.addEventListener('click', function () {
//     backdrop.style.display = "block";
//     mobileNav.style.display = "block";
// });

function closeModal() {
    backdrop.style.display = "none";
    modal.style.display = "none";
    // mobileNav.style.display = "none";
};

function continueToHostingPage() {
    backdrop.style.display = "none";
    modal.style.display = "none";
    document.location.href = "start-hosting.html";
};


