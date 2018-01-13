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
        TITLE: ["Writer", "Software Developer"],
        WORK: {
            position: ["Public Relations Executive", "Content Writer"],
            company: '<a href="http://dentsugrantgroup.com/">Dentsu Aegis Network</a>',
            location: "Colombo, Sri Lanka"
        },
        PORTFOLIO: {
            a: '<a href="work/sparrowpad">work/print</a>',
            b: '<a href="work/sparrowpad">work/digital</a>',
            c: '<a href="work/sparrowpad">work/other</a>',
        },
		PLAY: {
            position: ["Software Developer", "Illustrator"],
            company: '<a href="http://osiris.agency">Osiris</a>',
            location: "Mount Lavinia, Sri Lanka"
        },
        PROJECTS: {
            1: '<a href="apps/sparrowpad">apps/sparrowpad</a>',
            2: '<a href="apps/sparrowpad">apps/type</a>',
            3: '<a href="apps/sparrowpad">apps/osiris</a>',
            4: '<a href="apps/sparrowpad">apps/list</a>',
            5: '<a href="apps/sparrowpad">apps/webcompile</a>',
            6: '<a href="apps/sparrowpad">apps/float</a>',
            7: '<a href="apps/sparrowpad">apps/353</a>',
            8: '<a href="apps/sparrowpad">apps/insight</a>',
            9: '<a href="apps/sparrowpad">apps/kento</a>',
        },


        INTERESTS: {
            art: ["Impressionism", "Photorealism"], 
            music: ["Nu jazz", "Lounge"]
        },
		
        CONTACT: ['<a class="item" href="mailto:' + a + '">' + a + "</a>", '<a class="item" href="https://api.whatsapp.com/send?phone=940766970959">WhatsApp</a>', '<a class="item" href="http://instagram.com/thatsparrow">Instagram</a>'],
		LINKS: ['<a class="item" href="about.txt">About</a>','<a class="item" href="projects/">Projects</a>', '<a class="item" href="resume/">Resume</a>', '<a class="item" href="blog/">Blog</a>']
    };
    return "<pre id='" + contentId + "'>" + JSON.convertToHumanReadableString(b, 2, window.innerHeight > window.innerWidth) + "</pre>"
};