$(document).ready(function () {
    var raisinBlack = "#252627ff";
    var outrageousOrange = "#fe6847ff";

    /* Come back to top when reload */
    $(window).scrollTop(0);

    /* When scroll, trigger the effect */
    window.onscroll = function() {
        scrollFunction()
    };

    /* Effect */
    function scrollFunction() {
        /* If mouse is scrolled (which is the verticle position of BODY or the ROOT element is > 50px) */
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            /* Find the navigation box and scale it down and move to the bottom of the screen */
            document.getElementById('navigation').style.transform = "scale(0.8) translateY(35vh)";
            console.log(document.getElementById('navigation').style.transform);
            /* Find all items in navigation box and change its text color and background */
            for (let item of document.getElementsByClassName('navigation-item')) {
                item.style.color = raisinBlack;
                item.style.backgroundColor = "transparent";
            }
        } else {
            /* Reset the state when scroll back to top */
            document.getElementById('navigation').style.transform = "scale(1)";
            for (let item of document.getElementsByClassName('navigation-item')) {
                item.style.color = outrageousOrange;
                item.style.backgroundColor = raisinBlack;
            }
        }
    }

    /* When hover game item, show panel */
});