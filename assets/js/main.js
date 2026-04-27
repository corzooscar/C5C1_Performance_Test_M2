const date = new Date()
document.getElementById("year").innerText = date.getFullYear()

// 1 - Hamburger Function for Mobile
function hiddenHamburguer(){

    var btn = document.getElementsByClassName("menu-toggle")
    var nav = document.getElementsByClassName("nav")
    
    nav[0].classList.toggle("active")
}