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
         ALIASES: ["ජන්", "ジアン", "жэнь", "&#x1f426;"],
         LINKS: ['<a class="item" title=":)" href="about/">🐐 About</a>','<a class="item" title="Musings" href="blog/">✍️ Blog</a>','<a class="item" title="A compilation of instrumentals and mixtapes" href="music/">🎧 Music</a>','<a class="item" title="A summary of my background and skills" href="resume">📃 Résumé</a>'],
              
         PORTFOLIO: {
             12: '<a title="Logo // Typography // Web Design" href="branding">Branding</a>',
             13: '<a title="2D // 3D" href="">CAD</a>',
             14: '<a title="Press Release // Feature // Thought Leadership // AV Script // Case Study // Web Copy" href="print">Print</a>',
             15: '<a title="Texture // Abstract" href="art">Photography</a>',
             16: '<a title="Album Art // Concept Art // Publication" href="">Illustrations</a>',
                          
         },

         PROJECT: {
             302: '<a title="A minimal notepad for heavy deadlines" href="apps/flow">FLOW</a> » 💻 : • HTML5 : • CSS3 : • JS',
	         503: '<a title="For simulating a human typing on-screen" href="apps/type">TYPE</a> » 🤖 : • JavaScript',
             504: '<a title="A few NLP chatbot implementations written in Python" href="https://github.com/thatsparrow/pulse">PULSE</a> » 🤖 : • Python : • NLTK',
             406: '<a title="A static website for a software development co-op" href="http://osiris.agency">OSIRIS</a> » 📱 💻 : • Jekyll',
             303: '<a title="A to-do list interface" href="compiling">LIST</a> » 💻 : • Flask : • MySQL : • jQuery',
             304: '<a title="A collaborative code compiler (Python, Java, C, C#, C++, Haskell, Perl, Ruby) built on Heroku and Firebase" href="apps/compile">COMPILE</a> » 💻 🖧 : • Node.js : • Firebase : • Heroku',
             608: '<a title="A collection of CSS3 effects" href="apps/float">FLOAT</a> » 😊 : • CSS : • jQuery',
             407: '<a title="A static website for an apparel boutique" href="https://github.com/353clothing/353clothing.github.io">353</a> » 📱 💻 : • Bootstrap : • Slack',
             202: '<a title="An Android app that finds petrol stations and splits costs" href="https://github.com/thatsparrow/project-insight">INSIGHT</a> » 📱 : • Java : • Google Maps API',
             703: '<a title="A series of number theory problems and their solutions" href="https://github.com/thatsparrow/euler">EULER » code</a>  : • C : • C++ : • Java : • Python + 3 more',
             802: '<a title="Technical documentation on the UNIX operating system" href="apps/unix">UNIX</a> » 📚 : • HTML : • PDF : • LaTeX',
             704: '<a title="A few shell scripts to automate your life" href="https://github.com/thatsparrow/scripts">AUTOMATE </a> » ⌨️ : • Bash : • Fish',
             702: '<a title="A two-body simulation written in JavaScript" href="apps/kepler">KEPLER</a> » 📈 : • JS',
             703: '<a title="A two-body simulation written in JavaScript" href="">WAVES</a> » 📈 : • Fortran',
             803: '<a title="A two-body simulation written in JavaScript" href="">TYPIST</a> » 📱 💻 : • HTML5 : • CSS3 : • JS',
         },
        
         CREDITS: ['<a class="item" href="PGP.md">PGP</a>', '<a class="item" href="REMINDER.md">Reminder</a>','Crafted with &#127866; and 🍕']
     };
     return "<pre id='" + contentId + "'>" + JSON.convertToHumanReadableString(b, 2, window.innerHeight > window.innerWidth) + "</pre>"
 }

        (function(i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
        ga('create', 'UA-100462785-1', 'auto');
        ga('send', 'pageview');