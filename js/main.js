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


//--------------------------------------

var one = document.getElementById('nomber1'),
    two = document.getElementById('nomber2'),
    three = document.getElementById('nomber3'),
    four = document.getElementById('nomber4'),
    i;

for (i = 0; i < Math.floor(Math.random() * 1238); i = i + 1) {
    two.innerHTML = i + 1;
}
for (i = 0; i < Math.floor(Math.random() * 1238); i = i + 1) {
    three.innerHTML = i + 1;
}
for (i = 0; i < Math.floor(Math.random() * 1238); i = i + 1) {
    four.innerHTML = i + 1;
}

for (i = 0; i < Math.floor(Math.random() * 1238); i = i + 1) {
    one.innerHTML = i + 1;
}
