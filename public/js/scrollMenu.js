var menu=document.getElementById('my-header');
var numPx = '150'; // Quantidade de pixels a contar do TOP até definir a cor

window.addEventListener('scroll', function() {
    if (window.scrollY > numPx) {
    	menu.classList.add('mudarCor'); // adiciona classe "mudaCor"
    } else {
      menu.classList.remove('mudarCor'); // remove classe "mudaCor"
    }
});
var btn = document.querySelector("#btnInsc");
btn.addEventListener("click", function() {
    var div = document.querySelector("#inscForm");
        div.style.display = "block"; 
});

var closee=document.querySelector("#close");
closee.addEventListener("click", function() {
    var divClose=document.querySelector("#inscForm");
    divClose.style.display="none";
});