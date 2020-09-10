window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "1px";
        document.getElementById("Fike").style.fontSize = "120%";
        document.getElementById("Ware").style.fontSize = "120%";

    } else {
        document.getElementById("navbar").style.padding = "10px";
        document.getElementById("Fike").style.fontSize = "165%";
        document.getElementById("Ware").style.fontSize = "165%";
    }
}

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $(".navbar").css({
                "opacity": "1"
            })
            $(".navbar").css({
                "background": "white"
            })
            $(".navbar").css({
                "box-shadow": "0px 0px 7px rgb(177, 137, 92)"
            })
            $(".nav-link").css({
                "color": "black"
            })
            $(".logoMundo").css({
                "filter": "contrast(60%) hue-rotate(170deg) saturate(800%)"
            })


        } else {
            $(".navbar").css({
                "background": "hsla(0, 0%, 100%, 0)"
            })
            $(".navbar").css({
                "box-shadow": "0px 0px 0px rgba(255, 255, 255, 0)"
            })
            $(".nav-link").css({
                "color": "white"
            })
            $(".logoMundo").css({
                "filter": "contrast(20%) hue-rotate(60deg) brightness(300%) saturate(100%)"
               
            })
        }
    })
})