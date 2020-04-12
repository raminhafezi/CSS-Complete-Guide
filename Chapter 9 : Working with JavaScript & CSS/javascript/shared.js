// alert("this is working, yeeeeaaaahhhhH!");

var backdrop = document.querySelector('.backdrop')
var modal = document.querySelector('.modal')
var modalNoButton = document.querySelector('.modal__action--negative');
var modalYesButton = document.querySelector(".modal__action");
var selectPlanButton = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector('.mobile-nav');

// var mobileNavDisplay = document.querySelector(".main-header__brand img");

// console.log(mobileNavDisplay)

for (var i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', function () {
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
};

backdrop.addEventListener("click", function () {
    mobileNav.classList.remove('open');
    closeModal();
});
if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}
if (modalYesButton) {
    modalYesButton.addEventListener('click', continueToHostingPage);
}
toggleButton.addEventListener('click', function () {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});

// mobileNavDisplay.addEventListener('click', function () {
//     backdrop.style.display = "block";
//     mobileNav.style.display = "block";
// });

function closeModal() {
    backdrop.classList.remove('open');
    if (modal) {
        modal.classList.remove('open');
    }
};

function continueToHostingPage() {
    backdrop.classList.remove('open');
    modal.classList.remove('open');
    document.location.href = "start-hosting.html";
};


