//------------------------------

var overlay = document.getElementById('overlay');

function hover(x) {
    "use strict";
    x.style.height = '65%';
}

function away(x) {
    "use strict";
    x.style.height = '0%';
}

//-------------------------------------
var up = document.getElementById('up');
up.addEventListener('click', function io() {
    "use strict";
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
