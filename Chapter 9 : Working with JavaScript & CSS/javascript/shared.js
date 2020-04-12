// alert("this is working, yeeeeaaaahhhhH!");

var backdrop = document.querySelector('.backdrop')
var modal = document.querySelector('.modal')
// console.dir(backdrop)
// backdrop.style.display = 'block';
var selectPlanButton = document.querySelectorAll('.plan button');
// console.log(selectPlanBotton);

for (var i = 0; i < selectPlanBotton.length; i++) {
    selectPlanButton[i].addEventListener('click', function () {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
};