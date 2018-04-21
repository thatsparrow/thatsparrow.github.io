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
         NAME: "Jann Benjamin",
         TITLE: ["/Candid Writer /Agile Developer"],
         LINKS: ['<a class="item" title="" href="about/">About</a>','<a class="item" title="An ode to symmetry" href="art/">Art</a>','<a class="item" title="An ode to symmetry" href="music/">Music</a>','<a class="item" title="A summary of my background and skills" href="#">Résumé</a>'],
         WORK: {
             position: ["Public Relations Executive"],
             company: '<a title="A multinational media and digital marketing communications company" href="http://www.dentsuaegisnetwork.com/">Dentsu Aegis Network</a>',
             location: "Colombo, Sri Lanka"
         },
                 PLAY: {
             position: ["Co-Founder", "Project Lead"],
             company: '<a title="A software consultancy specialising in cross-platform development and analytics" href="http://osiris.agency">OSIRIS</a>',
             location: "Remote"
         },
         PORTFOLIO: {
             a: '<a title="Logos, Identities, Prototypes, Typography" href="compiling">art > branding</a>',
             b: '<a title="Press Releases, Features, Thought Leadership Articles, AV Scripts, Case Studies, Product Listings, Web Copy, Social Media Copy" href="compiling">copy > print</a>',
             c: '<a title="Audio, AVs, CAD" href="compiling">etc > assorted</a>',
                          
         },

         PROJECTS: {
             1: '<a title="A minimal notepad for heavy deadlines" href="compiling">app > flow</a> : • HTML • CSS • JavaScript',
             2: '<a title="A UX effect to simulate a human typing" href="compiling">UX > type</a> : • JavaScript',
             3: '<a title="A static website crafted with Jekyll, HTML5, CSS3 and Javascript" href="compiling">web > osiris</a> : • Jekyll',
             4: '<a title="A to-do list interface" href="compiling">app > list</a> : • Flask • MySQL • jQuery • PythonAnywhere',
             5: '<a title="A collaborative code compiler (Python, Java, C, C#, C++, Haskell, Perl, Ruby) built on Heroku and Firebase" href="apps/compile/">app > compile</a> : • Node.js • Firebase • Heroku',
             6: '<a title="A collection of CSS3 effects" href="compiling">UI > float</a> : • CSS • jQuery',
             7: '<a title="A static website crafted for a boutique apparel company" href="http://353clothing.com">web > 353</a> : • Bootstrap • Slack',
             8: '<a title="An Android app that finds petrol stations and splits costs" href="compiling">app > insight</a> : • Android Studio • Google Maps API',
             9: '<a title="A series of number theory problems hosted on projecteuler.net" href="compiling">code > euler</a> : • Java • Python • Mathematica • Haskell',
         },
        
         CREDITS: ['<a class="item" href="PGP.md">PGP</a>', '<a class="item" href="REMINDER.md">Reminder</a>','1994-Present | jannbenjam.in&trade;']
     };
     return "<pre id='" + contentId + "'>" + JSON.convertToHumanReadableString(b, 2, window.innerHeight > window.innerWidth) + "</pre>"
 }
