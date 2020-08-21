window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "4px";
    document.getElementById("Fike").style.fontSize = "15px";
    document.getElementById("Ware").style.fontSize = "15px";

} else {
    document.getElementById("navbar").style.padding = "10px";
    document.getElementById("Fike").style.fontSize = "20px";
    document.getElementById("Ware").style.fontSize = "20px";
}
}