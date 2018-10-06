var overlay = document.getElementById('overlay');


function hover(x) {
    "use strict";
    x.style.height = '65%';
}

function away(x) {
    "use strict";
    x.style.height = '0%';
}

//----------------------------------------

var vid = document.getElementById('vid');

function up(x) {
    "use strict";
    x.style.display = 'block';
}

function down(x) {
    "use strict";
    x.style.display = 'none';
}


//----------------------------------------


/*

This part function espically setInterval is important as we used setInterval function in if condition not the opposite because its seems to be the oppoiste ^-^;

*/


var a = document.getElementById('nomber4');
var a = 0;
window.setInterval(function increase() {
    "use strict";
    if (a < 3532) {
        a = a + 12;
        setInterval(document.getElementById('nomber4').innerHTML = a, 250);
    } else {
        return;
    }
}, 1);

var b = document.getElementById('nomber3');
var b = 0;
window.setInterval(function increase() {
    "use strict";
    if (b < 721) {
        b = b + 2;
        setInterval(document.getElementById('nomber3').innerHTML = b, 250);
    } else {
        return;
    }
}, 1);


var c = document.getElementById('nomber2');
var c = 0;
window.onscroll = window.setInterval(function increase() {
    "use strict";
    if (c < 127) {
        c = c + 3;
        setInterval(document.getElementById('nomber2').innerHTML = c, 250);
    } else {
        return;
    }
}, 40);


var d = document.getElementById('nomber1');
var d = 0;
window.setInterval(function increase() {
    "use strict";
    if (d < 30) {
        d = d + 1;
        setInterval(document.getElementById('nomber1').innerHTML = d, 250);
    } else {
        return;
    }
}, 50);
