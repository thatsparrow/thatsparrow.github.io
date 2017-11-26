// Hello.

var corpus1 =
"Sup?\n\
\n\
I'm a naïve simulation of a human typing. I was written in a few lines of CoffeeScript, so I'm not meant to be very accurate. Note that you can easily change my typing accuracy level and speed.\n\
\n\
Check this out!";

var corpus2 =
"Use me like this:\n\
\n\
new Type(domElement, 'Just some text.');\n\
\n\
Or pass some options if you feel like it:\n\
\n\
new Type(domElement, 'Terrible but fast typist.', { accuracy: 0.3, interval: 20, callback: allDone });\n\
\n\
Enjoy.";

var cb1 = function(){
    setTimeout(function(){
        el.value = '';
        new Type(el, 'You can set me to be wildly inaccurate.', { accuracy: .5, callback: cb2 });
    }, 2000);
}

var cb2 = function(){
    setTimeout(function(){
        el.value = '';
        new Type(el, 'Or maybe wildly inaccurate and very fast?', { accuracy: .3, interval: 15, callback: cb3 });
    }, 2000);
}

var cb3 = function(){
    setTimeout(function(){
        el.value = '';
        new Type(el, corpus2);
    }, 2000);
}

var el = document.getElementById('test');
new Type(el, corpus1, { callback: cb1 });
