
(function(c) {
    c.fn.t = function(k, J) {
      return this.each(function() {
        if (k == 'queue') return (c(this).q(J));
        var a = J,
          l = k,
          b = c(this),
          r = b,
          w, m, u, n, x, y = -1,
          p = !1,
          B = 0,
          D = 0,
          E = -1,
          z = "12qwertyuiop[]asdfghjkl;zxcvbnm,./~!@#$%^&*()_+:1234567890-=op".split([]),
          e = function(a, b) {
            return c.type(a)[0] == (b || "n")
          },
          F = function() {
            _g = c.grep(g, function(a) {
              return "&" == a[0] || !a[1]
            }).length - 1;
            return -1 < _g ? _g : 0
          },
          A = function(b) {
            E != b && a.blink && (a.blink_perm || r.data("blinking", E = b ? 1 : 0))
          },
          f = {
            c: 0,
            beep: function() {
              0 == f.c && (f.c = c("html").data().__TAC);
              f.o && f.o.stop();
              f.o = f.c.createOscillator();
              f.o.frequency.setValueAtTime(1, f.c.currentTime);
              f.g = f.c.createGain();
              f.o.connect(f.g);
              f.g.connect(f.c.destination);
              f.o.start();
              f.o.stop(f.c.currentTime + .03)
            }
          };
        if ("beep" == l && !b.data().is_typing && c("html").data().__TAC) return f.beep(), this;
        if ("speed" == l && e(a) && 9 < a) return b.data("speed", a).data("blink", Math.max(100, a + b.data().ssbs)), this;
        "" === l && (l = "<del>*</del>");
        if (b.data().is_typing) return l == "paused".slice(0, -1) && (b.data("paused", e(a, "b") ? oo_ = a : b.data("paused") ? oo_ = !1 : oo_ = !0), b.data().blink && b.data("blinking", oo_)), this;
        if (l == "paused".slice(0, -1)) return this;
        b.data("is_typing", 1);
        e(l, "o") && (a = l);
        if (/t\-/.test(b.attr("class"))) return this;
        if ("add" == l && b.data().t) {
          var t = a;
          a = c.extend({}, b.data());
          var G = b = c(":first", b),
            H = e(a.typing, "f");
          t = "<" + a.tag + ' class="typing-add">' + t + "</" + a.tag + ">"
        } else {
          "add" == l && (l = a, a = {});
          a = c.extend({
            t: !0,
            delay: !1,
            speed: 50,
            speed_vary: !1,
            caret: "\u258e",
            tag: "span",
            blink: !0,
            beep: !1,
            blink_perm: !1,
            repeat: -3,
            pause_on_click: !1,
            pause_on_tab_switch: 0,
            wrap: !1,
            mistype: !1,
            locale: "en",
            init: !1,
            typing: !1,
            fin: !1
          }, a ? a : b.data());
          t = x = !1;
          var d, I;
          b.data().t || (b.wrapInner(c("<" + a.tag + "/>", {
            "class": "t-container",
            style: "top:auto;bottom:auto;"
          })), /^[ar]/.test(b.css("position")) || b.css({
            position: "relative"
          }), b.css({
            overflow: "hidden"
          }));
          a.wrap && !b.parent().data().t_wrap && (b.wrap(c("<div/>", /[.#]/.test(a.wrap[0]) ? "#" == a.wrap[0] ? {
            id: a.wrap.substr(1)
          } : {
            "class": a.wrap.substr(1)
          } : {
            style: a.wrap
          })), b.parent().data("t_wrap", 1));
          e(a.beep, "b") || (a.beep = !1);
          !0 === a.beep && e(c("html").data().__TAC, "u") && (c("html").data("__TAC", __TAC = (window.AudioContext = window.AudioContext || window.webkitAudioContext) ? new AudioContext : !1), __TAC || (a.beep = !1));
          !1 === a.repeat && (a.repeat = -3);
          !0 === a.blink && (a.blink = 3 * a.speed);
          e(a.blink) && 100 > a.blink && (a.blink = 100);
          !0 === a.caret && (a.caret = "\u258e");
          e(a.caret, "s") && !c(".t-caret", b)[0] && (!e(a.blink) && (a.blink = !1), x = c("<" + a.tag + "/>", {
            "class": "t-caret",
            html: a.caret
          }).appendTo(b), a.blink && b.append("\u200b") && b.data("bi", setInterval(function() {
            if (0 == r.length) return clearInterval(r.data("bi"));
            ++D >= r.data().blink / 10 && (D = 0, (r.data().blinking | (v = "h" == x.css("visibility")[0]) || a.blink_perm) && x.css({
              visibility: v ? "visible" : "hidden"
            }))
          }, 10)));
          a.blink || b.data().bi && clearInterval(b.data().bi) && b.removeData("bi");
          !e(a.blink_perm, "b") && (a.blink_perm = !0);
          a.speed = !e(a.speed) || 10 > a.speed ? 10 : a.speed;
          a.speed_vary && (a.speed /= 2.5);
          1 < a.mistype || (a.mistype = !1);
          a.ssbs = Math.abs(a.blink - a.speed);
          b.data(a);
          c(".typing-0", b).replaceWith(function() {
            return this.childNodes
          });
          c(".typing-add", b).remove();
          G = b = c(":first", b);
          var g = e(l, "s") ? l : b.html();
          "" == g && (g = "\u200b");
          b.empty();
          r.show().css({
            visibility: "visible"
          });
          e(a.delay) && 0 < a.delay && (d = ~~(1E3 * a.delay / a.speed)) && a.blink_perm || A(1);
          H = e(a.typing, "f");
          !0 === a.pause_on_click && b.parent().off("click").click(function(a) {
            "1" != c(a.target).data().click && c(this).t("pause")
          });
          !0 === a.pause_on_tab_switch ? e(c("html").data().__TAB, "u") && (c("html").data("__TAB", 1), c(document).on("visibilitychange", function() {
            c(".t-container").parent().each(function() {
              h = c(document).attr("visibilityState").charAt(0);
              "h" == h && c(this).data().paused && c(this).data("keep_paused", 1);
              c(this).p("h" == h ? !0 : c(this).data().keep_paused && c(this).removeData("keep_paused") ? !0 : !1)
            })
          })) : !1 === a.pause_on_tab_switch && c("html").data().__TAB && (c("html").removeData("__TAB"), c(document).off("visibilitychange"))
        }
        /<kbd.*?>/i.test(g = String(t || g)) && b.parent().data("kbd", j_ = 1) && b.parent().data("mistype", b.parent().data("mistype") ? _j = b.parent().data().mistype : _j = 10) && (a.mistype = _j) && (a.kbd = j_ ? j_ : !1);
        g = g.replace(/(.*?)[\u200b]+$/, "$1").replace(/<!\-\-([\s\S]+?)\-\->/g, "$1").replace(/<ins>([^0-9])<\/ins>/g, "$1").replace(/<(embed|command|col|wbr|img|br|input|hr|area|source|track|keygen|param)(.*?)[\/]?>/g, "<#$1$2/>").replace(/<ins>\s*(\d*[.]?\d*)\s*(<\/ins>)/g, '<ins data-ins="$1"></ins>').replace(/<ins(.*?)>([\s\S]*?)(<\/ins>)/g, function(a, b, c) {
          return "<#ins" + b + ">" + c.replace(/<(?!#)/g, "<#") + "<#/ins>" + (c ? "" : "</ins>")
        }).replace(/<(del.*?data-del=")(.*?)(".*?)><\/(del>)/g, "<#$1$2$3><#/$4$2</$4").replace(/<del(.*?)>([\s\S]*?)<\/del>/g, function(a, b, c, d) {
          n = (n = c.match(/<s>\s*(.*?)\s*<\/s>/i)) && n[0] ? ' data-s="' + (n[1] || "1") + '"' : "";
          u = (u = c.match(/data-ins="(.*?)"/)) && u[1] ? u[1] : "" == n ? .25 : .75;
          c = c.replace(/(<s>.*?<\/s>|<[\/]?.*?>)/g, "");
          return "<del" + b + n + ' data-del="' + c.replace(/\n/g, "\\n") + '" data-ins="' + u + '">' + ("*" != c ? c : "") + "</del>"
        }).replace(/<s>\s*(\d+)\s*<\/s>/g, '<s data-speed="$1"></s>').replace(/<(\w+)(.*?)>/g, "<$1$2><#/$1>").replace(/<\/(\w+)>/g, "</> ($1)").replace(/<[#]+/g, "<").replace(/(\/del>)\*</g, "$1<").match(/<ins.*?>[\s\S]*?<\/ins>|<[^<]+\/>|<\/> \(\w+\)|<[\s\S]+?><\/\w+>|&[#x]?[a-z0-9]+;|\r|\n|\t|\S|\s/ig);
        !e(d) && (d = g.shift());
        g.push("\u200b");
        "de" == a.locale && (z = '12qwertzuiop\u00fc+asdfghjkl\u00f6\u00e4#<yxcvbnm,.-!"\u00a7$%&/(()=?1234567890\u00df*p+');
        var K = F() + 1;
        !t && e(a.init, "f") && a.init(r);
        r.data("ti", I = setInterval(function() {
          m = r;
          if (++B >= m.data("speed") / 10)
            if (B = 0, m.data("paused")) y = 1;
            else if (!p) {
            p = !p;
            if (e(d)) {
              if (0 < --d) {
                p = !p;
                A(.25 >= b.data().ins ? 0 : 1 == y ? y = -1 : 1);
                return
              }
              d = b.data().ins ? "</>" : g.shift()
            } else if (a.speed_vary && ~~(4 * Math.random())) {
              p = !p;
              return
            }
            A(0);
            if (b.data().del && (!0 === m.data().beep && f.beep(), b.data().s && !d[0] && b.text(""), w = String(b.data().del), !e(d, "a") && "/" == d[1] && (d = w.replace(/\\n/g, "\n").split([])), e(d, "a"))) {
              if (y = d.pop()) {
                b.data().s ? b.html(d.join([]) + "<mark " + ("." == (n = String(b.data().s))[0] ? 'class="' + n.substr(1) + '"' : 'style="background:' + ("1" == n ? "yellow" : n.split(",")[0]) + ((n = n.split(",")[1]) ? ";color:" + n : "") + ';"') + ">" + b.data().del.substr(d.length) + "</mark>") : b.text(d.join([]));
                p = !p;
                return
              }
              "*" == w && (G.wrapInner(c("<" + a.tag + "/>", {
                "class": "typing-0",
                style: "display:none;"
              })), b = b.parent(), t && (g = c.merge(["<" + a.tag + ' class="typing-add"></' + a.tag + ">"], g, ["</" + a.tag + ">"]), b = b.parent()));
              b = b.parent();
              "\u200b" == w && b.find(":last").remove();
              d = ""
            }
            for (;
              "/" == d[1];) b = b.parent(), d = g.shift() || "";
            for (;;)
              if (!0 === m.data().beep && f.beep(), b.append(d), H && a.typing(m, d, F(), K), !/<ins.*?>[\s\S]+</.test(d) && /></.test(d) && (b = b.find(":last")), (_ss = b.data("speed")) && m.s(_ss), g[0] && /<\w+/.test(g[0])) d = g.shift();
              else break;
            (d = g.shift()) ? ((a.mistype && !a.kbd || a.kbd && /kbd/i.test(b.prop("tagName"))) && d && !d[1] && "\u200b" != b.data().del && " " != d && !~~(Math.random() * a.mistype) && -1 < (__ = c.inArray(d.toLowerCase(), z, 2)) && (__ += ~~(2 * Math.random()) + 1, ~~(2 * Math.random()) && (__ -= 3), g = c.merge([90 > d.charCodeAt(0) ? z[__].toUpperCase() : z[__], "</del>", d], g), d = '<del data-ins=".25" data-del="\u200b"></del>'), d && "/" == d[1] && b.data().ins && (d = ~~(1E3 * Number(b.data().ins) / m.data().speed)), p = !p) : (clearInterval(I), m.removeData(["is_typing", "paused", "ti"]), e(a.repeat) && --a.repeat, -1 < a.repeat ? (a.init = !1, m.t(e(l, "o") ? a : l, a)) : (A(1), e(a.fin, "f") && a.fin(m), e(__q = m.data().q, "a") && __q.length && m.a(__q.shift())))
          }
        }, 10))
      })
    };
    c.fn.a = function(k) {
      return this.each(function() {
        c(this).data().t && c(this).t("add", k)
      })
    };
    c.fn.p = function(k) {
      return this.each(function() {
        c(this).data().is_typing && c(this).t("pause", k ? !1 === k || !0 === k ? k : void 0 : void 0)
      })
    };
    c.fn.b = function(k) {
      return this.each(function() {
        c(this).data().t && c(this).t("beep")
      })
    };
    c.fn.s = function(k) {
      return this.each(function() {
        c(this).data().t && c(this).t("speed", k)
      })
    };
    c.fn.q = function(k) {
      return this.each(function() {
        c(this).data().t && c.type(k)[0].match(/s|n/) && ((q = c(this).data()).q || (q.q = []), q.q.push(k.toString()), c(this).data().is_typing || c(this).a(q.q.shift()))
      })
    };
    c.fn.t_off = function(k) {
      return this.each(function() {
        c(this).data().t && (C = c(this)) && ((ti = C.data("ti")) && clearInterval(ti), (bi = C.data("bi")) && clearInterval(bi), C.removeData(), c(".t-container", C).replaceWith(function() {
          return this.childNodes
        }), c(".t-caret", C).remove());
        !0 === k && C.text("")
      })
    }
  })(jQuery);
  
