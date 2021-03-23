$(document).ready(function () {
    var raisinBlack = "#252627ff";
    var outrageousOrange = "#fe6847ff";

    window.onscroll = function() {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById('navigation').style.transform = "scale(0.8) translateY(30vh)";

            for (let item of document.getElementsByClassName('navigation-item')) {
                item.style.color = raisinBlack;
                item.style.backgroundColor = "transparent";
            }
        } else {
            document.getElementById('navigation').style.transform = "scale(1)";
            for (let item of document.getElementsByClassName('navigation-item')) {
                item.style.color = outrageousOrange;
                item.style.backgroundColor = raisinBlack;
            }
        }
    }
});