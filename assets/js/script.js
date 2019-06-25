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
         ALIASES: ["ගල්කිස්ස​ ජාන්", "スズメ", "жэнь", "&#x1F422;"],
                     
         BLOG_ENTRIES: {
             x: '<a title="" href="BLOG/0.html">Hello, World!</a>',
             xx: '<a title="" href="BLOG/1.html">MATLAB or Mathematica?</a>',
             xxx: '<a title="" href="BLOG/2.html">The Autonomy of Ethics II</a>',
             xxxx: '<a title="" href="BLOG/3.html">Nickel Telescope Bias Subtraction (Python 2.7)</a>',
             xxxxx: '<a title="" href="BLOG/4.html">Beckler on Aristotle&#39;s Theory of Actuality</a>',
             xxxxxx: '<a title="" href="BLOG/5.html">Turtle School - The Tao of Jann</a>',
             xxxxxxx: '<a title="" href="BLOG/6.html">Thoughts on Functional Languages</a>',
             xxxxxxxx: '<a title="" href="BLOG/7.html">Creating your own neural network</a>',
             xxxxxxxxx: '<a title="" href="BLOG/8.html">The Allure of Female Independence</a>',
             xxxxxxxxxx: '<a title="" href="BLOG/">READ MORE!</a>',
             
                          
         },     

         PORTFOLIO: {
             _: '<a title="Tank Tops // Leggings // Long Sleeve Tees" href="bugs">Apparel</a>',
             __: '<a title="Logo // Typography // Web Design" href="bugs">Branding</a>',
             ____: '<a title="Press Release // Feature // Thought Leadership // AV Script // Case Study // Web Copy" href="PORTFOLIO/copywriting/">Copy</a>',
             _____: '<a title="Minimal // Hip Hop // Trap" href="PORTFOLIO/music/">Music</a>', 
             ______: '<a title="Serenity" href="PORTFOLIO/photography/">Photography</a>',
             
            
             _______: '<a title="Customer Success Stories" href="bugs">Video</a>', 
         },

         PROJECTS: {
             16: '<a title="A minimal notepad for heavy deadlines" href="FOSS_PROJECTS/notepad-master">Notepad</a> » 💻 : • HTML5 : • CSS3 : • JS',
	         17: '<a title="For simulating a human typing on-screen" href="FOSS_PROJECTS/type-ai-master">Type</a> » AI : • JavaScript : • CoffeeScript',
             18: '<a title="A few NLP chatbot implementations written in Python" href="FOSS_PROJECTS/pulse-ai-master">Pulse-chat-bot</a> » AI : • Python : • NLTK',
             19: '<a title="A static website for a digital agency" href="https://www.behance.net/gallery/71725979/OSIRIS">www.osiris.agency</a> » 📱 💻 : • Jekyll : • Semantic UI',
             20: '<a title="AI: Camera Object Detection" href="compiling">Objection Detection via Camera</a> » AI : • Python : • ImageAI : • Keras',
             21: '<a title="A collaborative code compiler (Python, Java, C, C#, C++, Haskell, Perl, Ruby) built on Heroku and Firebase" href="apps/compile">Compile(r)</a> » 💻 : • Node.js : • Firebase : • Heroku',
             22: '<a title="A collection of CSS3 effects" href="FOSS_PROJECTS/float-master">Float</a> » 😊 : • JavaScript',
             23: '<a title="A static website for an apparel boutique" href="https://www.behance.net/gallery/72582967/353-Clothing-Co">www.353clothing.com</a> » 📱 💻 : • Bootstrap : • Slack',
             24: '<a title="An Android app that finds petrol stations and splits costs" href="https://github.com/thatsparrow/thatsparrow.github.io/tree/master/FOSS_PROJECTS/insight-master">Insight</a> » 📱 : • Java : • Google Maps API',
             25: '<a title="A series of number theory problems and their solutions" href="https://github.com/thatsparrow/euler">Project Euler Solutions</a> » >_ : • C : • C++ : • Java : • Python + 3 more',
             26: '<a title="Technical documentation on the UNIX operating system" href="apps/unix">UNIX</a> » 📚 : • HTML5 : • LaTeX',
             27: '<a title="A few shell scripts to automate your life" href="https://github.com/thatsparrow/scripts">Scripts</a> » >_ : • Bash : • Fish : • Python ',
             28: '<a title="A two-body simulation written in JavaScript" href="apps/kepler">Kepler Orbits</a> » 📈 : • JavaScript',
             29: '<a title="A simulation of wind-driven ocean waves in 2D" href="">2D Ray Tracing</a> » 📈 : • Fortran',
             30: '<a title="An offline html editor" href="">HTML-editor</a> » 📈 : • JavaScript  ',
             31: '<a title="A background music player" href="">Kyoto</a> » 📈 : • Fortran',
             32: '<a title="A calculator written in JavaScript" href="FOSS_PROJECTS/calculator-master">CalculatorJS</a> » 📈 : • JavaScript',
             33: '<a title="A touch-typing interface for improving WPM" href="">Touch-type</a> » 📱 💻 : • HTML5 : • CSS3 : • JS',
             34: '<a title="A modified KANBAN board" href="">Notice-board</a> » 📱 💻 : • HTML5 : • CSS3 : • JS (React.js)',
             35: '<a title="My first Python game!" href="">Bong-hit</a> » 💻 : • Python : • PyGame ',
       
         },

          INFO: ['<a class="item" title="?" href="INFO/about/">About</a>','<a class="item" title="=)" href="INFO/contact/">Contact</a>','<a class="item" title="=P" href="INFO/resume/">Résumé</a>','<a class="item" title=">=D" href="INFO/services/">Services</a>'],
 
        
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
