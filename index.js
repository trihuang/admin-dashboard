const notificationIcon = document.querySelector('.icons-container span');
const cardIcons = document.querySelectorAll('.icons .material-icons-outlined');

notificationIcon.addEventListener('click', changeColor);
cardIcons.forEach((cardIcon) => {
    cardIcon.addEventListener('click', changeColor);
});

function changeColor(e) {
    let color = e.target.style.color;
    if (color !== "red") e.target.style.color = "red";
    else e.target.style.color = "black";
}