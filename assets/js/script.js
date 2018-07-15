if (typeof JSON !== "object") {
    JSON = {}
}(function() {
    var a;

    function b(o, q, n, h) {
        var s, c, m, p = n[q];
        switch (typeof p) {
            case "string":
                return '<span class="value">\'' + p + "'</span>";
            case "object":
                m = [];
                if (Object.prototype.toString.apply(p) === "[object Array]") {
                    c = p.length;
                    for (var f = 0; f < c; f += 1) {
                        m[f] = b(o + a, f, p, h) || "null"
                    }
                    var l = (m.length == 0 || m[0].indexOf("{") != -1);
                    if (l) {
                        s = "\n" + o + a + "[" + o + m.join(",") + "\n" + o + a + "]"
                    } else {
                        if (h) {
                            for (var e = 0; e < m.length; e++) {
                                m[e] = "\n" + o + a + (o != a ? a : "") + m[e]
                            }
                            s = "[" + m.join(", ") + "\n" + o + (o != a ? a : "") + "]"
                        } else {
                            s = "[" + m.join(", ") + "]"
                        }
                    }
                    return s
                }
                for (var d in p) {
                    if (Object.prototype.hasOwnProperty.call(p, d)) {
                        s = b(o + a, d, p, h);
                        if (s) {
                            var g = '<span class="key">' + d + "</span>";
                            m.push(o + a + (o ? a : "") + g + (o ? ": " : ": ") + s)
                        }
                    }
                }
                s = (o ? "\n" : "") + (o ? o + a : o) + "{\n" + m.join(",\n") + "\n" + o + (o ? a : "") + "}";
                return s
        }
    }
    JSON.convertToHumanReadableString = function(f, e, d) {
        var c;
        a = "";
        for (c = 0; c < e; c += 1) {
            a += " "
        }
        return b("", "", {
            "": f
        }, d)
    }
}());
var contentId = "content";

function getContentElement() {
    return document.getElementById(contentId)
}

function getScrollLeft() {
    return (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft
}

function getScrollTop() {
    return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
}

function centerContent() {
    var b = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    var a = (window.innerHeight > 0) ? window.innerHeight : screen.height;
    getContentElement().style.top = Math.max(0, ((a - getContentElement().offsetHeight) / 2) + getScrollTop()) + "px";
    getContentElement().style.left = Math.max(0, ((b - getContentElement().offsetWidth) / 2) + getScrollLeft()) + "px"
}

function r(a) {
    /in/.test(document.readyState) ? setTimeout("r(" + a + ")", 9) : a()
}
r(function() {
    reloadContent()
});
window.onresize = function(a) {
    reloadContent()
};

function setContent(a) {
    document.body.innerHTML = a
}

function reloadContent() {
    setContent(compileContent());
    centerContent()
}

function compileContent() {
     var a = "hc.liamnotorp/worrapstaht".split("").reverse().join("").replace("/", "@");
     var b = {
         NAME: ["Jann Benjamin"],
         TITLE: ["Copywriter", "Full-Stack Developer"],
         LINKS: ['<a class="item" title="1994 - Present" href="about/">About</a>','<a class="item" title="An ode to symmetry" href="art/">Art</a>','<a class="item" title="A compilation of instrumentals and mixtapes" href="music/">Music</a>','<a class="item" title="A summary of my background and skills" href="resume">Résumé</a>'],
              
         PORTFOLIO: {
             1: '<a title="Logos, Identities, Prototypes, Typography" href="branding">art > branding</a>',
             2: '<a title="Press Releases, Features, Thought Leadership Articles, AV Scripts, Case Studies, Product Listings, Web Copy, Social Media Copy" href="print">copy > print/text</a>',
             3: '<a title="Audio, AVs, CAD" href="assorted">etc > assorted</a>',
                          
         },

         PROJECTS: {
             a: '<a title="A minimal notepad for heavy deadlines" href="apps/flow">app > flow</a> : • HTML : • CSS : • JavaScript',
	         b: '<a title="A UX effect to simulate a human typing" href="apps/type">UX > type</a> : • JavaScript',
             c: '<a title="A chatbot using Natural Language Processing (NLP)" href="https://github.com/thatsparrow/pulse">AI > pulse</a> : • Python : • NLTK',
             d: '<a title="A static website crafted with Jekyll, HTML5, CSS3 and Javascript" href="http://osiris.agency">web > osiris</a> : • Jekyll',
             e: '<a title="A to-do list interface" href="compiling">app > list</a> : • Flask : • MySQL : • jQuery : • PythonAnywhere',
             f: '<a title="A collaborative code compiler (Python, Java, C, C#, C++, Haskell, Perl, Ruby) built on Heroku and Firebase" href="apps/compile">app > compile</a> : • Node.js : • Firebase : • Heroku',
             g: '<a title="A collection of CSS3 effects" href="apps/float">UI > float</a> : • CSS : • jQuery',
             h: '<a title="A static website crafted for a boutique apparel company" href="http://353clothing.com">web > 353</a> : • Bootstrap : • Slack',
             i: '<a title="A mobile app that finds petrol stations and splits costs" href="compiling">app > insight</a> : • Java : • Android Studio : • Google Maps API',
             j: '<a title="A series of number theory problems hosted on projecteuler.net" href="https://github.com/thatsparrow/euler">code > euler</a> : • Java : • Python : • Mathematica : • Haskell',
             k: '<a title="A technical guide on the UNIX operating system" href="apps/unix">doc > UNIX</a> : • HTML : • CSS : • LaTeX',
         },
        
         CREDITS: ['<a class="item" href="PGP.md">PGP</a>', '<a class="item" href="REMINDER.md">Reminder</a>','Crafted with &#127866;']
     };
     return "<pre id='" + contentId + "'>" + JSON.convertToHumanReadableString(b, 2, window.innerHeight > window.innerWidth) + "</pre>"
 }
