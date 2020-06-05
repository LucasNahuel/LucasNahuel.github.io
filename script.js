document.getElementById("boton-info").onclick = function(){
    window.scrollTo({
    top:0,
    left:0,
    behavior: 'smooth'})
}

document.getElementById("boton-formacion").onclick = function(){
    var el = document.getElementById("carta-formacion");
    var rec = el.getBoundingClientRect();
    var headerHeigth = document.getElementById("header").offsetHeight;
    window.scrollBy({
    top:rec.top - headerHeigth,
    left:0,
    behavior: 'smooth'})
}

document.getElementById("boton-proyectos").onclick = function(){
    var el = document.getElementById("carta-proyectos");
    var rec = el.getBoundingClientRect();
    var headerHeigth = document.getElementById("header").offsetHeight;
    window.scrollBy({
    top:rec.top - headerHeigth,
    left:0,
    behavior: 'smooth'})
}
