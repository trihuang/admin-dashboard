const notificationIcon = document.querySelector('.icons-container span');

notificationIcon.addEventListener('click', changeColor);

function changeColor(e) {
    let color = e.target.style.color;
    if (color !== "red") e.target.style.color = "red";
    else e.target.style.color = "black";
}