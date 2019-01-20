// Hello.

var corpus1 =
":)"; 

var corpus2 =
"I implement words, data structures, algorithms, and file formats, emphasizing on readability and minimal design.\n\
\n\I used to be a speck of stardust, but a few decades ago a serendipitous event allowed me to materialize on Earth, and I love it!\n\
\n\I'm very much a demi-god at heart, love to eat, create, destroy, and travel whenever I feel like it.\n\
\n\I also have an innate ability to 'slip' punches and 'check' kicks. \n\
\n\Let's get in touch and share a few stories.\n\
\n\✌";

var cb1 = function(){
    setTimeout(function(){
        el.value = '';
        new Type(el, '', { accuracy: 1, callback: cb2 });
    },2000);
}

var cb2 = function(){
    setTimeout(function(){
        el.value = '';
        new Type(el, '', { accuracy: .3, interval: 5, callback: cb3 });
    }, 500);
}

var cb3 = function(){
    setTimeout(function(){
        el.value = '';
        new Type(el, corpus2);
    }, 500);
}

var el = document.getElementById('test');
new Type(el, corpus1, { callback: cb1 });


