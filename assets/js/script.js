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
         NAME: "JANN BENJAMIN",
         TITLE: ["Candid Writer", "Agile Developer"],
         LINKS: ['<a class="item" title="A man of mystery and charm whose charm is exceeded only by his mystery" href="about/">About</a>','<a class="item" title="An ode to symmetry" href="art/">Art</a>', '<a class="item" title="A summary of my background and skills" href="resume/">Résumé</a>'],
         WORK: {
             position: ["Public Relations Executive", "Content Writer"],
             company: '<a title="A multinational media and digital marketing communications company" href="http://www.dentsuaegisnetwork.com/">Dentsu Aegis Network</a>',
             location: "Colombo, Sri Lanka"
         },
                 PLAY: {
             position: ["Co-Founder", "Software Developer"],
             company: '<a title="A software consultancy specialising in cross-platform development and analytics" href="http://osiris.agency">OSIRIS</a>',
             location: "Remote"
         },
         PORTFOLIO: {
             a: '<a title="Logos, Identities" href="#">art > branding</a>',
             b: '<a title="Press Releases, Features, Thought Leadership Articles, AV Scripts, Case Studies, Product Listings, Web Copy, Social Media Copy" href="#">copy > print</a>',
             c: '<a title="Audio, AVs" href="#">media > digital</a>',
             d: '<a title="Software Documentation, Reference Manuals" href="#">doc > technical</a>',
             
         },

         PROJECTS: {
             1: '<a title="A minimal notepad for heavy deadlines" href="#">app > flow</a> : • HTML • CSS • JavaScript',
             2: '<a title="A UX effect to simulate a human typing" href="#">UI > type</a> : • JavaScript',
             3: '<a title="A static website crafted with Jekyll, HTML5, CSS3 and Javascript" href="https://github.com/OSIRISagency/OSIRISagency.github.io">web > osiris</a> : • Jekyll',
             4: '<a title="A to-do list interface" href="apps/list">app > list</a> : • Flask • MySQL • jQuery • PythonAnywhere',
             5: '<a title="A collaborative code compiler (Python, Java, C, C#, C++, Haskell, Perl, Ruby) built on Heroku and Firebase" href="apps/compile/">apps > compile</a> : • Node.js • Firebase • Heroku',
             6: '<a title="A collection of CSS3 effects" href="apps/float">UI > float</a> : • jQuery',
             7: '<a title="A static website crafted with Bootstrap, HTML5, CSS3 and JavaScript" href="https://github.com/353clothing/353clothing.github.io">web > 353</a> : • Bootstrap',
             8: '<a title="An Android app that finds petrol stations and splits costs" href="#">app > insight</a> : • Android Studio • Google Maps API',
             9: '<a title="A music interface for helping stay focused" href="apps|kyoto">app > kyoto</a> : • jQuery',
         },
        
         CONTACT: ['<a class="item" href="mailto:thatsparrow@protonmail.ch">E-mail</a>', '<a class="item" href="https://api.whatsapp.com/send?phone=940766970959">WhatsApp</a>', '<a class="item" href="http://instagram.com/thatsparrow">Instagram</a>', '<a class="item" href="https://github.com/thatsparrow">GitHub</a>'],
  
         EXTRA: ['<a class="item" href="PGP.md">PGP</a>','<a class="item" href="LICENSE.md">License</a>', '<a class="item" href="REMINDER.md">Reminder</a>']
     };
     return "<pre id='" + contentId + "'>" + JSON.convertToHumanReadableString(b, 2, window.innerHeight > window.innerWidth) + "</pre>"
 }
