// Hello.

var corpus1 =
"Stories sell -- even more so than products, services, and ideas.\n\
\n\That’s why I’m in the business of creating unique stories, and why my clients trust me to communicate theirs to the world.\n\
\n\I used to be a speck of stardust, but a few decades ago I just happened to materialize on your planet.\n\
\n\I'm very much a demigod at heart, love to eat, create, destroy, and travel whenever I feel like it.\n\
\n\I also have an innate ability to dodge moving objects.\n\
\n\Let's get in touch and share a few stories.";

//var corpus2 =
//":)";

var cb1 = function(){
    setTimeout(function(){
        el.value = '';
        new Type(el, '', { accuracy: 1});
    },1000);
}

//var cb2 = function(){
//    setTimeout(function(){
//        el.value = '';
//        new Type(el, '', { accuracy: .3, interval: 5, callback: cb3 });
//    }, 500);
//}

//var cb3 = function(){
//    setTimeout(function(){
//        el.value = '';
//        new Type(el, corpus2);
//    }, 500);
//}

var el = document.getElementById('test');
new Type(el, corpus1);


