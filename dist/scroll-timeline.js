!(function () {
  function e(e, n) {
    for (var t = 0; t < n.length; t++) {
      var i = n[t];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i);
    }
  }
  function n(n, t, i) {
    return (
      t && e(n.prototype, t),
      i && e(n, i),
      Object.defineProperty(n, "prototype", { writable: !1 }),
      n
    );
  }
  function t() {
    return (
      (t =
        Object.assign ||
        function (e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
          return e;
        }),
      t.apply(this, arguments)
    );
  }
  function i(e, n) {
    (e.prototype = Object.create(n.prototype)),
      (e.prototype.constructor = e),
      r(e, n);
  }
  function r(e, n) {
    return (
      (r =
        Object.setPrototypeOf ||
        function (e, n) {
          return (e.__proto__ = n), e;
        }),
      r(e, n)
    );
  }
  function a() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch (e) {
      return !1;
    }
  }
  function o(e, n, t) {
    return (
      (o = a()
        ? Reflect.construct
        : function (e, n, t) {
            var i = [null];
            i.push.apply(i, n);
            var a = new (Function.bind.apply(e, i))();
            return t && r(a, t.prototype), a;
          }),
      o.apply(null, arguments)
    );
  }
  function l(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function s(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var t = 0, i = new Array(n); t < n; t++) i[t] = e[t];
    return i;
  }
  function u(e, n) {
    var t =
      ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (t) return (t = t.call(e)).next.bind(t);
    if (
      Array.isArray(e) ||
      (t = (function (e, n) {
        if (e) {
          if ("string" == typeof e) return s(e, n);
          var t = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === t && e.constructor && (t = e.constructor.name),
            "Map" === t || "Set" === t
              ? Array.from(e)
              : "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              ? s(e, n)
              : void 0
          );
        }
      })(e)) ||
      (n && e && "number" == typeof e.length)
    ) {
      t && (e = t);
      var i = 0;
      return function () {
        return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  for (
    var c = null,
      f = [
        "percent",
        "length",
        "angle",
        "time",
        "frequency",
        "resolution",
        "flex",
      ],
      m = {
        fontRelativeLengths: {
          units: new Set([
            "em",
            "rem",
            "ex",
            "rex",
            "cap",
            "rcap",
            "ch",
            "rch",
            "ic",
            "ric",
            "lh",
            "rlh",
          ]),
        },
        viewportRelativeLengths: {
          units: new Set([
            "vw",
            "lvw",
            "svw",
            "dvw",
            "vh",
            "lvh",
            "svh",
            "dvh",
            "vi",
            "lvi",
            "svi",
            "dvi",
            "vb",
            "lvb",
            "svb",
            "dvb",
            "vmin",
            "lvmin",
            "svmin",
            "dvmin",
            "vmax",
            "lvmax",
            "svmax",
            "dvmax",
          ]),
        },
        absoluteLengths: {
          units: new Set(["cm", "mm", "Q", "in", "pt", "pc", "px"]),
          compatible: !0,
          canonicalUnit: "px",
          ratios: {
            cm: 96 / 2.54,
            mm: 96 / 2.54 / 10,
            Q: 96 / 2.54 / 40,
            in: 96,
            pc: 16,
            pt: 96 / 72,
            px: 1,
          },
        },
        angle: {
          units: new Set(["deg", "grad", "rad", "turn"]),
          compatible: !0,
          canonicalUnit: "deg",
          ratios: { deg: 1, grad: 0.9, rad: 180 / Math.PI, turn: 360 },
        },
        time: {
          units: new Set(["s", "ms"]),
          compatible: !0,
          canonicalUnit: "s",
          ratios: { s: 1, ms: 0.001 },
        },
        frequency: {
          units: new Set(["hz", "khz"]),
          compatible: !0,
          canonicalUnit: "hz",
          ratios: { hz: 1, khz: 1e3 },
        },
        resolution: {
          units: new Set(["dpi", "dpcm", "dppx"]),
          compatible: !0,
          canonicalUnit: "dppx",
          ratios: { dpi: 1 / 96, dpcm: 2.54 / 96, dppx: 1 },
        },
      },
      h = new Map(),
      p = 0,
      d = Object.values(m);
    p < d.length;
    p++
  ) {
    var v = d[p];
    if (v.compatible)
      for (var g, S = u(v.units); !(g = S()).done; ) h.set(g.value, v);
  }
  function y(e) {
    return h.get(e);
  }
  function T(e, n) {
    for (var i = t({}, e), r = 0, a = Object.keys(n); r < a.length; r++) {
      var o = a[r];
      i[o] ? (i[o] += n[o]) : (i[o] = n[o]);
    }
    return i;
  }
  function w(e) {
    return "number" === e
      ? {}
      : "percent" === e
      ? { percent: 1 }
      : m.absoluteLengths.units.has(e) ||
        m.fontRelativeLengths.units.has(e) ||
        m.viewportRelativeLengths.units.has(e)
      ? { length: 1 }
      : m.angle.units.has(e)
      ? { angle: 1 }
      : m.time.units.has(e)
      ? { time: 1 }
      : m.frequency.units.has(e)
      ? { frequency: 1 }
      : m.resolution.units.has(e)
      ? { resolution: 1 }
      : "fr" === e
      ? { flex: 1 }
      : c;
  }
  function b(e) {
    if (e instanceof CSSUnitValue) {
      var n,
        t = e.unit,
        i = e.value,
        r = y(e.unit);
      return (
        r &&
          t !== r.canonicalUnit &&
          ((i *= r.ratios[t]), (t = r.canonicalUnit)),
        "number" === t ? [[i, {}]] : [[i, ((n = {}), (n[t] = 1), n)]]
      );
    }
    if (e instanceof CSSMathInvert) {
      if (!(e.value instanceof CSSUnitValue))
        throw new Error("Not implemented");
      var a = b(e.value);
      if (a === c) return c;
      if (a.length > 1) return c;
      for (
        var o = a[0], l = {}, s = 0, f = Object.entries(o[1]);
        s < f.length;
        s++
      ) {
        var m = f[s];
        l[m[0]] = -1 * m[1];
      }
      return (a[0] = [1 / o[0], l]), a;
    }
    if (e instanceof CSSMathProduct) {
      for (var h, p = [[1, {}]], d = u(e.values); !(h = d()).done; ) {
        var v = b(h.value),
          g = [];
        if (v === c) return c;
        for (var S, w = u(p); !(S = w()).done; )
          for (var x, E = S.value, k = u(v); !(x = k()).done; ) {
            var M = x.value;
            g.push([E[0] * M[0], T(E[1], M[1])]);
          }
        p = g;
      }
      return p;
    }
    throw new Error("Not implemented");
  }
  function x(e, n) {
    if (w(n) === c)
      throw new SyntaxError("The string did not match the expected pattern.");
    var t = b(e);
    if (!t) throw new TypeError();
    if (t.length > 1) throw new TypeError("Sum has more than one item");
    var i = (function (e, n) {
      var t = e.unit,
        i = e.value,
        r = y(t),
        a = y(n);
      return a && r === a
        ? new CSSUnitValue((i * a.ratios[t]) / a.ratios[n], n)
        : c;
    })(E(t[0]), n);
    if (i === c) throw new TypeError();
    return i;
  }
  function E(e) {
    var n = e[0],
      t = Object.entries(e[1]);
    if (t.length > 1) return c;
    if (0 === t.length) return new CSSUnitValue(n, "number");
    var i = t[0];
    return 1 !== i[1] ? c : new CSSUnitValue(n, i[0]);
  }
  function k(e) {
    var n = [].slice.call(arguments, 1);
    if (n && n.length) throw new Error("Not implemented");
    var t = b(e),
      i = t.map(function (e) {
        return E(e);
      });
    if (
      i.some(function (e) {
        return e === c;
      })
    )
      throw new TypeError("Type error");
    return o(CSSMathSum, i);
  }
  function M(e, n) {
    var i;
    if (e.percentHint && n.percentHint && e.percentHint !== n.percentHint)
      return c;
    for (
      var r,
        a = t({}, e, {
          percentHint: null != (i = e.percentHint) ? i : n.percentHint,
        }),
        o = u(f);
      !(r = o()).done;

    ) {
      var l = r.value;
      n[l] && (null != a[l] || (a[l] = 0), (a[l] += n[l]));
    }
    return a;
  }
  var C = new Set(["px", "deg", "s", "hz", "dppx", "number", "fr"]);
  function I(e) {
    return C.has(e.toLowerCase());
  }
  function P(e, n) {
    return e.reduce(function (e, t) {
      return e.has(t[n]) ? e.get(t[n]).push(t) : e.set(t[n], [t]), e;
    }, new Map());
  }
  function A(e, n) {
    for (var t, i = [], r = [], a = u(e); !(t = a()).done; ) {
      var o = t.value;
      n(o) ? i.push(o) : r.push(o);
    }
    return [i, r];
  }
  function R(e, n) {
    function t(e) {
      return Array.from(e).map(function (e) {
        return R(e, n);
      });
    }
    if (e instanceof CSSUnitValue) {
      if ("percent" === e.unit && n.percentageReference)
        return new CSSUnitValue(
          (e.value / 100) * n.percentageReference.value,
          n.percentageReference.unit
        );
      var i = e.toSum();
      return (
        i && 1 === i.values.length && (e = i.values[0]),
        e instanceof CSSUnitValue &&
          "em" === e.unit &&
          n.fontSize &&
          (e = new CSSUnitValue(e.value * n.fontSize.value, n.fontSize.unit)),
        e
      );
    }
    if (!e.operator) return e;
    switch (e.operator) {
      case "sum":
        e = o(CSSMathSum, t(e.values));
        break;
      case "product":
        e = o(CSSMathProduct, t(e.values));
        break;
      case "negate":
        e = new CSSMathNegate(R(e.value, n));
        break;
      case "clamp":
        e = new CSSMathClamp(R(e.lower, n), R(e.value, n), R(e.upper, n));
        break;
      case "invert":
        e = new CSSMathInvert(R(e.value, n));
        break;
      case "min":
        e = o(CSSMathMin, t(e.values));
        break;
      case "max":
        e = o(CSSMathMax, t(e.values));
    }
    if (e instanceof CSSMathMin || e instanceof CSSMathMax) {
      var r = Array.from(e.values);
      if (
        r.every(function (e) {
          return (
            e instanceof CSSUnitValue &&
            "percent" !== e.unit &&
            I(e.unit) &&
            e.unit === r[0].unit
          );
        })
      ) {
        var a = Math[e.operator].apply(
          Math,
          r.map(function (e) {
            return e.value;
          })
        );
        return new CSSUnitValue(a, r[0].unit);
      }
    }
    if (e instanceof CSSMathMin || e instanceof CSSMathMax) {
      var l = A(Array.from(e.values), function (e) {
          return e instanceof CSSUnitValue && "percent" !== e.unit;
        }),
        s = l[1],
        c = Array.from(P(l[0], "unit").values()),
        f = c.some(function (e) {
          return e.length > 0;
        });
      if (f) {
        var m = c.map(function (n) {
          var t = Math[e.operator].apply(
            Math,
            n.map(function (e) {
              return e.value;
            })
          );
          return new CSSUnitValue(t, n[0].unit);
        });
        e =
          e instanceof CSSMathMin
            ? o(CSSMathMin, m.concat(s))
            : o(CSSMathMax, m.concat(s));
      }
      return e;
    }
    if (e instanceof CSSMathNegate)
      return e.value instanceof CSSUnitValue
        ? new CSSUnitValue(0 - e.value.value, e.value.unit)
        : e.value instanceof CSSMathNegate
        ? e.value.value
        : e;
    if (e instanceof CSSMathInvert)
      return e.value instanceof CSSMathInvert ? e.value.value : e;
    if (e instanceof CSSMathSum) {
      for (var h, p = [], d = u(e.values); !(h = d()).done; ) {
        var v,
          g = h.value;
        g instanceof CSSMathSum ? (v = p).push.apply(v, g.values) : p.push(g);
      }
      return (
        (y = (S = p).filter(function (e) {
          return e instanceof CSSUnitValue;
        })),
        (T = S.filter(function (e) {
          return !(e instanceof CSSUnitValue);
        })),
        (w = Array.from(P(y, "unit").entries()).map(function (e) {
          var n = e[0],
            t = e[1].reduce(function (e, n) {
              return e + n.value;
            }, 0);
          return new CSSUnitValue(t, n);
        })),
        1 === (p = [].concat(T, w)).length ? p[0] : o(CSSMathSum, p)
      );
    }
    var S, y, T, w;
    if (e instanceof CSSMathProduct) {
      for (var b, x = [], E = u(e.values); !(b = E()).done; ) {
        var k,
          M = b.value;
        M instanceof CSSMathProduct
          ? (k = x).push.apply(k, M.values)
          : x.push(M);
      }
      var C = A(x, function (e) {
          return e instanceof CSSUnitValue && "number" === e.unit;
        }),
        N = C[0],
        O = C[1];
      if (N.length > 1) {
        var V = N.reduce(function (e, n) {
          return e * n.value;
        }, 1);
        x = [new CSSUnitValue(V, "number")].concat(O);
      }
      if (2 === x.length) {
        for (var L, j, U, _ = u(x); !(U = _()).done; ) {
          var W = U.value;
          W instanceof CSSUnitValue && "number" === W.unit
            ? (L = W)
            : W instanceof CSSMathSum &&
              [].concat(W.values).every(function (e) {
                return e instanceof CSSUnitValue;
              }) &&
              (j = W);
        }
        if (L && j)
          return o(
            CSSMathSum,
            [].concat(j.values).map(function (e) {
              return new CSSUnitValue(e.value * L.value, e.unit);
            })
          );
      }
      if (
        x.every(function (e) {
          return (
            (e instanceof CSSUnitValue && I(e.unit)) ||
            (e instanceof CSSMathInvert &&
              e.value instanceof CSSUnitValue &&
              I(e.value.unit))
          );
        })
      ) {
        var z = o(CSSMathProduct, x).toSum();
        if (z && 1 === z.values.length) return z.values[0];
      }
      return o(CSSMathProduct, x);
    }
    return e;
  }
  !(function () {
    var e = new WeakMap();
    function t(e) {
      for (var n, t = [], i = 0; i < e.length; i++)
        t[i] =
          "number" == typeof (n = e[i]) ? new CSSUnitValue(n, "number") : n;
      return t;
    }
    var r = (function () {
      function i(n, i, r, a) {
        e.set(this, {
          values: t(n),
          operator: i,
          name: r || i,
          delimiter: a || ", ",
        });
      }
      return (
        (i.prototype.toString = function () {
          var n = e.get(this);
          return n.name + "(" + n.values.join(n.delimiter) + ")";
        }),
        n(i, [
          {
            key: "operator",
            get: function () {
              return e.get(this).operator;
            },
          },
          {
            key: "values",
            get: function () {
              return e.get(this).values;
            },
          },
        ]),
        i
      );
    })();
    function a(e) {
      var n = [],
        t = e.split(/(?<!\([^\)]*)([*])(?![^\(]*\))/);
      for (n.push(l(t.shift())); t.length; ) t.shift(), n.push(l(t.shift()));
      return o(CSSMathProduct, n);
    }
    function l(e) {
      var n = [],
        t = e.split(/(?<!\([^\)]*)([/])(?![^\(]*\))/);
      for (n.push(s(t.shift())); t.length; )
        t.shift(), n.push(new CSSMathInvert(s(t.shift())));
      return o(CSSMathProduct, n);
    }
    function s(e) {
      return (e = e.trim()).match(/^[a-z(]/i)
        ? (function (e) {
            var n = e.match(/^(calc|min|max)?\((.*)\)$/);
            if (!n) throw new SyntaxError("Unsupported syntax " + e);
            var t = n[1],
              i = n[2];
            switch (void 0 === t ? "parens" : t) {
              case "calc":
              case "parens":
                return (function (e) {
                  var n = [],
                    t = e.split(/(?<!\([^\)]*)(\s[+-]\s)(?![^\(]*\))/);
                  for (n.push(a(t.shift())); t.length; ) {
                    var i = t.shift(),
                      r = t.shift();
                    "+" === i.trim()
                      ? n.push(a(r))
                      : "-" === i.trim() && n.push(new CSSMathNegate(a(r)));
                  }
                  return o(CSSMathSum, n);
                })(i);
              case "min":
                return o(CSSMathMin, i.split(",").map(s));
              case "max":
                return o(CSSMathMax, i.split(",").map(s));
            }
          })(e)
        : (function (e) {
            var n = e.match(
              /^(-?\d*[.]?\d+)(r?em|r?ex|r?cap|r?ch|r?ic|r?lh|[sld]?v(w|h|i|b|min|max)|cm|mm|Q|in|pt|pc|px|%)?$/
            );
            if (n) {
              var t = n[2];
              return (
                void 0 === t ? (t = "number") : "%" === t && (t = "percent"),
                new CSSUnitValue(parseFloat(n[1]), t)
              );
            }
            throw new SyntaxError("Unsupported syntax " + e);
          })(e);
    }
    var c = {
      CSSNumericValue: (function () {
        function e() {}
        return (
          (e.parse = function (e) {
            return R(s(e), {});
          }),
          e
        );
      })(),
      CSSUnitValue: (function () {
        function t(n, t) {
          e.set(this, { value: n, unit: t });
        }
        var i = t.prototype;
        return (
          (i.to = function (e) {
            return x(this, e);
          }),
          (i.toSum = function () {
            return k.apply(void 0, [this].concat([].slice.call(arguments)));
          }),
          (i.type = function () {
            return w(e.get(this).unit);
          }),
          (i.toString = function () {
            var n = e.get(this);
            return (
              "" +
              n.value +
              (function (e) {
                switch (e) {
                  case "percent":
                    return "%";
                  case "number":
                    return "";
                  default:
                    return e.toLowerCase();
                }
              })(n.unit)
            );
          }),
          n(t, [
            {
              key: "value",
              get: function () {
                return e.get(this).value;
              },
              set: function (n) {
                e.get(this).value = n;
              },
            },
            {
              key: "unit",
              get: function () {
                return e.get(this).unit;
              },
            },
          ]),
          t
        );
      })(),
      CSSKeywordValue: (function () {
        function e(e) {
          this.value = e;
        }
        return (
          (e.prototype.toString = function () {
            return this.value.toString();
          }),
          e
        );
      })(),
      CSSMathSum: (function (e) {
        function n(n) {
          return e.call(this, arguments, "sum", "calc", " + ") || this;
        }
        return i(n, e), n;
      })(r),
      CSSMathProduct: (function (n) {
        function t(e) {
          return n.call(this, arguments, "product", "calc", " * ") || this;
        }
        i(t, n);
        var r = t.prototype;
        return (
          (r.toSum = function () {
            return k.apply(void 0, [this].concat([].slice.call(arguments)));
          }),
          (r.type = function () {
            return e
              .get(this)
              .values.map(function (e) {
                return e.type();
              })
              .reduce(M);
          }),
          t
        );
      })(r),
      CSSMathNegate: (function (t) {
        function r(e) {
          return t.call(this, [arguments[0]], "negate", "-") || this;
        }
        return (
          i(r, t),
          n(r, [
            {
              key: "value",
              get: function () {
                return e.get(this).values[0];
              },
            },
          ]),
          r
        );
      })(r),
      CSSMathInvert: (function (t) {
        function r(e) {
          return (
            t.call(this, [1, arguments[0]], "invert", "calc", " / ") || this
          );
        }
        return (
          i(r, t),
          (r.prototype.type = function () {
            return (function (e) {
              for (var n, t = {}, i = u(f); !(n = i()).done; ) {
                var r = n.value;
                t[r] = -1 * e[r];
              }
              return t;
            })(e.get(this).values[1].type());
          }),
          n(r, [
            {
              key: "value",
              get: function () {
                return e.get(this).values[1];
              },
            },
          ]),
          r
        );
      })(r),
      CSSMathMax: (function (e) {
        function n() {
          return e.call(this, arguments, "max") || this;
        }
        return i(n, e), n;
      })(r),
      CSSMathMin: (function (e) {
        function n() {
          return e.call(this, arguments, "min") || this;
        }
        return i(n, e), n;
      })(r),
    };
    if (!window.CSS && !Reflect.defineProperty(window, "CSS", { value: {} }))
      throw Error("Error installing CSSOM support");
    for (var m in (window.CSSUnitValue ||
      [
        "number",
        "percent",
        "em",
        "ex",
        "px",
        "cm",
        "mm",
        "in",
        "pt",
        "pc",
        "Q",
        "vw",
        "vh",
        "vmin",
        "vmax",
        "rems",
        "ch",
        "deg",
        "rad",
        "grad",
        "turn",
        "ms",
        "s",
        "Hz",
        "kHz",
        "dppx",
        "dpi",
        "dpcm",
        "fr",
      ].forEach(function (e) {
        if (
          !Reflect.defineProperty(CSS, e, {
            value: function (n) {
              return new CSSUnitValue(n, e);
            },
          })
        )
          throw Error("Error installing CSS." + e);
      }),
    c))
      if (!(m in window) && !Reflect.defineProperty(window, m, { value: c[m] }))
        throw Error("Error installing CSSOM support for " + m);
  })();
  var N = "block",
    O = new WeakMap(),
    V = new WeakMap();
  function L(e) {
    return e === document.scrollingElement ? document : e;
  }
  function j(e) {
    _(e);
    var n = O.get(e).animations;
    if (0 !== n.length)
      for (var t = e.currentTime, i = 0; i < n.length; i++)
        n[i].tickAnimation(t);
  }
  function U(e, n) {
    if (!e) return null;
    var t = V.get(e).sourceMeasurements,
      i = "horizontal-tb" == getComputedStyle(e).writingMode,
      r = t.scrollTop;
    return (
      ("x" == n || ("inline" == n && i) || ("block" == n && !i)) &&
        (r = Math.abs(t.scrollLeft)),
      r
    );
  }
  function _(e) {
    if (e instanceof ie) {
      var n = e.subject;
      n && "none" != getComputedStyle(n).display ? H(e, J(n)) : H(e, null);
    } else
      !(function (e) {
        var n = O.get(e);
        n.anonymousSource && H(e, Q(n.anonymousSource, n.anonymousTarget));
      })(e);
  }
  function W(e) {
    var n = getComputedStyle(e);
    return {
      scrollLeft: e.scrollLeft,
      scrollTop: e.scrollTop,
      scrollWidth: e.scrollWidth,
      scrollHeight: e.scrollHeight,
      clientWidth: e.clientWidth,
      clientHeight: e.clientHeight,
      writingMode: n.writingMode,
      direction: n.direction,
      scrollPaddingTop: n.scrollPaddingTop,
      scrollPaddingBottom: n.scrollPaddingBottom,
      scrollPaddingLeft: n.scrollPaddingLeft,
      scrollPaddingRight: n.scrollPaddingRight,
    };
  }
  function z(e, n) {
    if (e && n) {
      for (var t = 0, i = 0, r = n, a = e.offsetParent; r && r != a; )
        (i += r.offsetLeft), (t += r.offsetTop), (r = r.offsetParent);
      (i -= e.offsetLeft + e.clientLeft), (t -= e.offsetTop + e.clientTop);
      var o = getComputedStyle(n);
      return {
        top: t,
        left: i,
        offsetWidth: n.offsetWidth,
        offsetHeight: n.offsetHeight,
        fontSize: o.fontSize,
      };
    }
  }
  function D(e) {
    var n = V.get(e);
    n.sourceMeasurements = W(e);
    for (var t, i = u(n.timelineRefs); !(t = i()).done; ) {
      var r = t.value.deref();
      r instanceof ie && (O.get(r).subjectMeasurements = z(e, r.subject));
    }
    requestAnimationFrame(function () {
      for (var e, t = u(n.timelineRefs); !(e = t()).done; ) {
        var i = e.value.deref();
        i && j(i);
      }
    });
  }
  function H(e, n) {
    var t = O.get(e).source;
    if (t != n) {
      if (t) {
        var i = V.get(t);
        if (i) {
          i.timelineRefs.delete(e);
          for (
            var r,
              a = u(
                Array.from(i.timelineRefs).filter(function (e) {
                  return void 0 === e.deref();
                })
              );
            !(r = a()).done;

          )
            i.timelineRefs.delete(r.value);
          0 === i.timelineRefs.size && (i.disconnect(), V.delete(t));
        }
      }
      if (((O.get(e).source = n), n)) {
        var o = V.get(n);
        if (!o) {
          (o = { timelineRefs: new Set(), sourceMeasurements: W(n) }),
            V.set(n, o);
          var l = new ResizeObserver(function (e) {
            for (var n, t = u(e); !(n = t()).done; ) D(n.value.target);
          });
          l.observe(n);
          var s = new MutationObserver(function (e) {
            for (var n, t = u(e); !(n = t()).done; ) D(n.value.target);
          });
          s.observe(n, { attributes: !0, attributeFilter: ["style", "class"] });
          var c = function () {
            (o.sourceMeasurements.scrollLeft = n.scrollLeft),
              (o.sourceMeasurements.scrollTop = n.scrollTop);
            for (var e, t = u(o.timelineRefs); !(e = t()).done; ) {
              var i = e.value.deref();
              i && j(i);
            }
          };
          L(n).addEventListener("scroll", c),
            (o.disconnect = function () {
              l.disconnect(),
                s.disconnect(),
                L(n).removeEventListener("scroll", c);
            });
        }
        o.timelineRefs.add(new WeakRef(e));
      }
    }
  }
  function F(e, n) {
    for (var t = O.get(e).animations, i = 0; i < t.length; i++)
      t[i].animation == n && t.splice(i, 1);
  }
  function q(e, n, t) {
    for (var i = O.get(e).animations, r = 0; r < i.length; r++)
      if (i[r].animation == n) return;
    i.push({ animation: n, tickAnimation: t }), j(e);
  }
  var B = (function () {
    function e(n) {
      if (
        (O.set(this, {
          source: null,
          axis: N,
          anonymousSource: n ? n.anonymousSource : null,
          anonymousTarget: n ? n.anonymousTarget : null,
          subject: null,
          inset: null,
          animations: [],
          subjectMeasurements: null,
        }),
        H(
          this,
          n && void 0 !== n.source ? n.source : document.scrollingElement
        ),
        n && void 0 !== n.axis && n.axis != N)
      ) {
        if (!e.isValidAxis(n.axis)) throw TypeError("Invalid axis");
        O.get(this).axis = n.axis;
      }
      j(this);
    }
    return (
      (e.isValidAxis = function (e) {
        return ["block", "inline", "x", "y"].includes(e);
      }),
      n(e, [
        {
          key: "source",
          get: function () {
            return O.get(this).source;
          },
          set: function (e) {
            H(this, e), j(this);
          },
        },
        {
          key: "axis",
          get: function () {
            return O.get(this).axis;
          },
          set: function (n) {
            if (!e.isValidAxis(n)) throw TypeError("Invalid axis");
            (O.get(this).axis = n), j(this);
          },
        },
        {
          key: "duration",
          get: function () {
            return CSS.percent(100);
          },
        },
        {
          key: "phase",
          get: function () {
            var e = this.source;
            if (!e) return "inactive";
            var n = getComputedStyle(e);
            return "none" == n.display
              ? "inactive"
              : e == document.scrollingElement ||
                ("visible" != n.overflow && "clip" != n.overflow)
              ? "active"
              : "inactive";
          },
        },
        {
          key: "currentTime",
          get: function () {
            var e = null,
              n = this.source;
            if (!n) return e;
            if ("inactive" == this.phase) return e;
            var t = getComputedStyle(n);
            if ("inline" === t.display || "none" === t.display) return e;
            var i = this.axis,
              r = U(n, i),
              a = (function (e, n) {
                var t = V.get(e).sourceMeasurements,
                  i = "horizontal-tb" == getComputedStyle(e).writingMode;
                return (
                  "block" === n
                    ? (n = i ? "y" : "x")
                    : "inline" === n && (n = i ? "x" : "y"),
                  "y" === n
                    ? t.scrollHeight - t.clientHeight
                    : "x" === n
                    ? t.scrollWidth - t.clientWidth
                    : void 0
                );
              })(n, i);
            return a > 0 ? CSS.percent((100 * r) / a) : CSS.percent(100);
          },
        },
        {
          key: "__polyfill",
          get: function () {
            return !0;
          },
        },
      ]),
      e
    );
  })();
  function K(e, n) {
    for (var t = e.parentElement; null != t; ) {
      if (n(t)) return t;
      t = t.parentElement;
    }
  }
  function Q(e, n) {
    return "root" == e ? document.scrollingElement : J(n);
  }
  function G(e) {
    switch (getComputedStyle(e).display) {
      case "block":
      case "inline-block":
      case "list-item":
      case "table":
      case "table-caption":
      case "flow-root":
      case "flex":
      case "grid":
        return !0;
    }
    return !1;
  }
  function X(e) {
    var n = getComputedStyle(e);
    return (
      "none" != n.transform ||
      "none" != n.perspective ||
      "transform" == n.willChange ||
      "perspective" == n.willChange ||
      "none" != n.filter ||
      "filter" == n.willChange ||
      "none" != n.backdropFilter
    );
  }
  function Y(e) {
    return "static" != getComputedStyle(e).position || X(e);
  }
  function $(e) {
    switch (getComputedStyle(e).position) {
      case "static":
      case "relative":
      case "sticky":
        return K(e, G);
      case "absolute":
        return K(e, Y);
      case "fixed":
        return K(e, X);
    }
  }
  function J(e) {
    if (e) {
      for (; (e = $(e)); )
        switch (getComputedStyle(e)["overflow-x"]) {
          case "auto":
          case "scroll":
          case "hidden":
            return e == document.body &&
              "visible" == getComputedStyle(document.scrollingElement).overflow
              ? document.scrollingElement
              : e;
        }
      return document.scrollingElement;
    }
  }
  function Z(e, n) {
    var t = O.get(e),
      i = t.subjectMeasurements,
      r = V.get(t.source).sourceMeasurements;
    return "inactive" === e.phase
      ? null
      : e instanceof ie
      ? ee(n, r, i, t.axis, t.inset)
      : null;
  }
  function ee(e, n, t, i, r) {
    var a = "horizontal-tb" == n.writingMode,
      o = "rtl" == n.direction || "vertical-rl" == n.writingMode,
      l = void 0,
      s = void 0,
      u = { fontSize: t.fontSize };
    "x" == i || ("inline" == i && a) || ("block" == i && !a)
      ? ((l = t.offsetWidth),
        (s = t.left),
        (u.scrollPadding = [n.scrollPaddingLeft, n.scrollPaddingRight]),
        o &&
          ((s += n.scrollWidth - n.clientWidth),
          (u.scrollPadding = [n.scrollPaddingRight, n.scrollPaddingLeft])),
        (u.containerSize = n.clientWidth))
      : ((l = t.offsetHeight),
        (s = t.top),
        (u.scrollPadding = [n.scrollPaddingTop, n.scrollPaddingBottom]),
        (u.containerSize = n.clientHeight));
    var c = (function (e, n) {
        if (!e) return { start: 0, end: 0 };
        var t = [e.start, e.end].map(function (e, t) {
          if ("auto" === e)
            return "auto" === n.scrollPadding[t]
              ? 0
              : parseFloat(n.scrollPadding[t]);
          var i = R(e, {
            percentageReference: CSS.px(n.containerSize),
            fontSize: CSS.px(parseFloat(n.fontSize)),
          });
          if (i instanceof CSSUnitValue && "px" === i.unit) return i.value;
          throw TypeError("Unsupported inset.");
        });
        return { start: t[0], end: t[1] };
      })(r, u),
      f = s - u.containerSize + c.end,
      m = s + l - c.start,
      h = f + l,
      p = m - l,
      d = Math.min(h, p),
      v = Math.max(h, p),
      g = void 0,
      S = void 0,
      y = l > u.containerSize;
    switch (e) {
      case "cover":
        (g = f), (S = m);
        break;
      case "contain":
        (g = d), (S = v);
        break;
      case "entry":
        (g = f), (S = d);
        break;
      case "exit":
        (g = v), (S = m);
        break;
      case "entry-crossing":
        (g = f), (S = y ? v : d);
        break;
      case "exit-crossing":
        (g = y ? d : v), (S = m);
    }
    return { start: g, end: S };
  }
  function ne(e, n, t) {
    return te(Z(e, n), t, Z(e, "cover"), e.subject);
  }
  function te(e, n, t, i) {
    if (!e || !t) return 0;
    var r = getComputedStyle(i),
      a = R(n, {
        percentageReference: CSS.px(e.end - e.start),
        fontSize: CSS.px(parseFloat(r.fontSize)),
      });
    if (!(a instanceof CSSUnitValue) || "px" !== a.unit)
      throw new Error("Unsupported offset '" + a.toString() + "'");
    return (a.value + e.start - t.start) / (t.end - t.start);
  }
  var ie = (function (e) {
      function t(n) {
        var t;
        t = e.call(this, n) || this;
        var i = O.get(l(t));
        return (
          (i.subject = n && n.subject ? n.subject : void 0),
          n &&
            n.inset &&
            (i.inset = (function (e) {
              var n;
              if (!e) return { start: 0, end: 0 };
              var t = e;
              if (
                ("string" == typeof e &&
                  (t = e.split(/(?<!\([^\)]*)\s(?![^\(]*\))/).map(function (e) {
                    if ("auto" === e.trim()) return "auto";
                    try {
                      return CSSNumericValue.parse(e);
                    } catch (e) {
                      throw TypeError("Invalid inset");
                    }
                  })),
                0 === t.length || t.length > 2)
              )
                throw TypeError("Invalid inset");
              for (var i, r = u(t); !(i = r()).done; ) {
                var a = i.value;
                if ("auto" !== a) {
                  var o = a.type();
                  if (1 !== o.length && 1 !== o.percent)
                    throw TypeError("Invalid inset");
                }
              }
              return { start: t[0], end: null != (n = t[1]) ? n : t[0] };
            })(n.inset)),
          i.subject &&
            new MutationObserver(function () {
              D(i.source);
            }).observe(i.subject, {
              attributes: !0,
              attributeFilter: ["class", "style"],
            }),
          _(l(t)),
          (i.subjectMeasurements = z(i.source, i.subject)),
          j(l(t)),
          t
        );
      }
      return (
        i(t, e),
        n(t, [
          {
            key: "source",
            get: function () {
              return _(this), O.get(this).source;
            },
            set: function (e) {
              throw new Error("Cannot set the source of a view timeline");
            },
          },
          {
            key: "subject",
            get: function () {
              return O.get(this).subject;
            },
          },
          {
            key: "axis",
            get: function () {
              return O.get(this).axis;
            },
          },
          {
            key: "currentTime",
            get: function () {
              var e = null,
                n = U(this.source, this.axis);
              if (n == e) return e;
              var t = Z(this, "cover");
              return t
                ? CSS.percent(((n - t.start) / (t.end - t.start)) * 100)
                : e;
            },
          },
          {
            key: "startOffset",
            get: function () {
              return CSS.px(Z(this, "cover").start);
            },
          },
          {
            key: "endOffset",
            get: function () {
              return CSS.px(Z(this, "cover").end);
            },
          },
        ]),
        t
      );
    })(B),
    re = document.getAnimations,
    ae = window.Element.prototype.getAnimations,
    oe = window.Element.prototype.animate,
    le = window.Animation,
    se = [
      "entry",
      "exit",
      "cover",
      "contain",
      "entry-crossing",
      "exit-crossing",
    ],
    ue = new RegExp("(" + se.join("|") + ")(?!-)"),
    ce = (function () {
      function e() {
        var e = this;
        (this.state = "pending"),
          (this.nativeResolve = this.nativeReject = null),
          (this.promise = new Promise(function (n, t) {
            (e.nativeResolve = n), (e.nativeReject = t);
          }));
      }
      var n = e.prototype;
      return (
        (n.resolve = function (e) {
          (this.state = "resolved"), this.nativeResolve(e);
        }),
        (n.reject = function (e) {
          (this.state = "rejected"),
            this.promise.catch(function () {}),
            this.nativeReject(e);
        }),
        e
      );
    })();
  function fe(e) {
    (e.readyPromise = new ce()),
      requestAnimationFrame(function () {
        var n, t;
        null !==
          (null != (n = null == (t = e.timeline) ? void 0 : t.currentTime)
            ? n
            : null) &&
          (Ae(e),
          "play" !== e.pendingTask ||
          (null === e.startTime && null === e.holdTime)
            ? "pause" === e.pendingTask && ve(e)
            : de(e));
      });
  }
  function me() {
    return new DOMException("The user aborted a request", "AbortError");
  }
  function he(e, n) {
    var t;
    if (null === n) return n;
    if ("number" != typeof n)
      throw new DOMException(
        "Unexpected value: " + n + ".  Cannot convert to CssNumberish",
        "InvalidStateError"
      );
    var i = null != (t = e.rangeDuration) ? t : 100,
      r = be(e);
    return CSS.percent(r ? (i * n) / r : 0);
  }
  function pe(e, n) {
    if (e.timeline) {
      if (null === n) return n;
      if ("percent" === n.unit) {
        var t,
          i = null != (t = e.rangeDuration) ? t : 100,
          r = be(e);
        return (n.value * r) / i;
      }
      throw new DOMException(
        "CSSNumericValue must be a percentage for progress based animations.",
        "NotSupportedError"
      );
    }
    if (null == n || "number" == typeof n) return n;
    var a = n.to("ms");
    if (a) return a.value;
    throw new DOMException(
      "CSSNumericValue must be either a number or a time value for time based animations.",
      "InvalidStateError"
    );
  }
  function de(e) {
    var n = pe(e, e.timeline.currentTime);
    if (null != e.holdTime)
      ye(e),
        0 == e.animation.playbackRate
          ? (e.startTime = n)
          : ((e.startTime = n - e.holdTime / e.animation.playbackRate),
            (e.holdTime = null));
    else if (null !== e.startTime && null !== e.pendingPlaybackRate) {
      var t = (n - e.startTime) * e.animation.playbackRate;
      ye(e);
      var i = e.animation.playbackRate;
      0 == i
        ? ((e.holdTime = null), (e.startTime = n))
        : (e.startTime = n - t / i);
    }
    e.readyPromise &&
      "pending" == e.readyPromise.state &&
      e.readyPromise.resolve(e.proxy),
      we(e, !1, !1),
      xe(e),
      (e.pendingTask = null);
  }
  function ve(e) {
    var n = pe(e, e.timeline.currentTime);
    null != e.startTime &&
      null == e.holdTime &&
      (e.holdTime = (n - e.startTime) * e.animation.playbackRate),
      ye(e),
      (e.startTime = null),
      e.readyPromise.resolve(e.proxy),
      we(e, !1, !1),
      xe(e),
      (e.pendingTask = null);
  }
  function ge(e) {
    if (
      e.finishedPromise &&
      "pending" == e.finishedPromise.state &&
      "finished" == e.proxy.playState
    ) {
      e.finishedPromise.resolve(e.proxy), e.animation.pause();
      var n = new CustomEvent("finish", {
        detail: {
          currentTime: e.proxy.currentTime,
          timelineTime: e.proxy.timeline.currentTime,
        },
      });
      Object.defineProperty(n, "currentTime", {
        get: function () {
          return this.detail.currentTime;
        },
      }),
        Object.defineProperty(n, "timelineTime", {
          get: function () {
            return this.detail.timelineTime;
          },
        }),
        requestAnimationFrame(function () {
          queueMicrotask(function () {
            e.animation.dispatchEvent(n);
          });
        });
    }
  }
  function Se(e) {
    return null !== e.pendingPlaybackRate
      ? e.pendingPlaybackRate
      : e.animation.playbackRate;
  }
  function ye(e) {
    null !== e.pendingPlaybackRate &&
      ((e.animation.playbackRate = e.pendingPlaybackRate),
      (e.pendingPlaybackRate = null));
  }
  function Te(e) {
    if (!e.timeline) return null;
    var n = pe(e, e.timeline.currentTime);
    if (null === n) return null;
    if (null === e.startTime) return null;
    var t = (n - e.startTime) * e.animation.playbackRate;
    return -0 == t && (t = 0), t;
  }
  function we(e, n, t) {
    if (e.timeline) {
      var i = n ? pe(e, e.proxy.currentTime) : Te(e);
      if (i && null != e.startTime && !e.proxy.pending) {
        var r = Se(e),
          a = be(e),
          o = e.previousCurrentTime;
        r > 0 && i >= a && null != e.previousCurrentTime
          ? ((null === o || o < a) && (o = a), (e.holdTime = n ? i : o))
          : r < 0 && i <= 0
          ? ((null == o || o > 0) && (o = 0), (e.holdTime = n ? i : o))
          : 0 != r &&
            (n &&
              null !== e.holdTime &&
              (e.startTime = (function (e, n) {
                if (!e.timeline) return null;
                var t = pe(e, e.timeline.currentTime);
                return null == t ? null : t - n / e.animation.playbackRate;
              })(e, e.holdTime)),
            (e.holdTime = null));
      }
      xe(e),
        (e.previousCurrentTime = pe(e, e.proxy.currentTime)),
        "finished" == e.proxy.playState
          ? (e.finishedPromise || (e.finishedPromise = new ce()),
            "pending" == e.finishedPromise.state &&
              (t
                ? ge(e)
                : Promise.resolve().then(function () {
                    ge(e);
                  })))
          : (e.finishedPromise &&
              "resolved" == e.finishedPromise.state &&
              (e.finishedPromise = new ce()),
            "paused" != e.animation.playState && e.animation.pause());
    }
  }
  function be(e) {
    var n = (function (e) {
      var n = e.proxy.effect.getTiming();
      return e.normalizedTiming || n;
    })(e);
    return Math.max(0, n.delay + n.endDelay + n.iterations * n.duration);
  }
  function xe(e) {
    if (e.timeline)
      if (null !== e.startTime) {
        var n = e.timeline.currentTime;
        if (null == n) return;
        Ee(e, (pe(e, n) - e.startTime) * e.animation.playbackRate);
      } else null !== e.holdTime && Ee(e, e.holdTime);
  }
  function Ee(e, n) {
    var t = e.timeline,
      i = e.animation.playbackRate;
    e.animation.currentTime =
      n +
      (t.currentTime && t.currentTime.value == (i < 0 ? 0 : 100)
        ? i < 0
          ? 0.001
          : -0.001
        : 0);
  }
  function ke(e, n) {
    if (e.timeline) {
      var t = "paused" == e.proxy.playState && e.proxy.pending,
        i = !1,
        r = pe(e, e.proxy.currentTime);
      0 == Se(e) && null == r && (e.holdTime = 0),
        null == r && (e.autoAlignStartTime = !0),
        ("finished" === e.proxy.playState || t) &&
          ((e.holdTime = null),
          (e.startTime = null),
          (e.autoAlignStartTime = !0)),
        e.holdTime && (e.startTime = null),
        e.pendingTask && ((e.pendingTask = null), (i = !0)),
        (null !== e.holdTime ||
          e.autoAlignStartTime ||
          t ||
          null !== e.pendingPlaybackRate) &&
          (e.readyPromise && !i && (e.readyPromise = null),
          xe(e),
          e.readyPromise || fe(e),
          (e.pendingTask = "play"),
          q(e.timeline, e.animation, Me.bind(e.proxy)),
          we(e, !1, !1));
    }
  }
  function Me(e) {
    var n = Ie.get(this);
    if (n)
      if (null != e) {
        Ae(n),
          n.pendingTask &&
            requestAnimationFrame(function () {
              "play" !== n.pendingTask ||
              (null === n.startTime && null === n.holdTime)
                ? "pause" === n.pendingTask && ve(n)
                : de(n);
            });
        var t = this.playState;
        if ("running" == t || "finished" == t) {
          var i = pe(n, e);
          Ee(n, (i - pe(n, this.startTime)) * this.playbackRate),
            "finished" == t && 0 != Se(n) && (n.holdTime = null),
            we(n, !1, !1);
        }
      } else
        "paused" !== n.proxy.playState &&
          "idle" != n.animation.playState &&
          n.animation.cancel();
  }
  function Ce(e) {
    e.specifiedTiming = null;
  }
  var Ie = new WeakMap();
  window.addEventListener(
    "pagehide",
    function (e) {
      Ie = new WeakMap();
    },
    !1
  );
  var Pe = new WeakMap();
  function Ae(e) {
    if (
      e.autoAlignStartTime &&
      e.timeline &&
      e.timeline.currentTime &&
      "idle" !== e.proxy.playState &&
      ("paused" !== e.proxy.playState || null === e.holdTime)
    ) {
      var n = e.rangeDuration,
        t = CSS.percent(
          100 *
            (function (e) {
              if (!(e.timeline instanceof ViewTimeline)) return 0;
              var n = e.animationRange.start;
              return (
                "normal" === n &&
                  (n = { rangeName: "cover", offset: CSS.percent(0) }),
                ne(e.timeline, n.rangeName, n.offset)
              );
            })(e)
        ),
        i = CSS.percent(
          100 *
            (1 -
              (function (e) {
                if (!(e.timeline instanceof ViewTimeline)) return 0;
                var n = e.animationRange.end;
                return (
                  "normal" === n &&
                    (n = { rangeName: "cover", offset: CSS.percent(100) }),
                  1 - ne(e.timeline, n.rangeName, n.offset)
                );
              })(e))
        );
      e.rangeDuration = i.value - t.value;
      var r = Se(e);
      (e.startTime = pe(e, r >= 0 ? t : i)),
        (e.holdTime = null),
        e.rangeDuration !== n && Ce(e);
    }
  }
  var Re = (function () {
    function e(e, n, t) {
      void 0 === t && (t = {});
      var i = e instanceof le ? e : new le(e, a),
        r = n instanceof B,
        a = r ? void 0 : n;
      Pe.set(i, this),
        Ie.set(this, {
          animation: i,
          timeline: r ? n : void 0,
          playState: r ? "idle" : null,
          readyPromise: null,
          finishedPromise: null,
          startTime: null,
          holdTime: null,
          rangeDuration: null,
          previousCurrentTime: null,
          autoAlignStartTime: !1,
          pendingPlaybackRate: null,
          pendingTask: null,
          specifiedTiming: null,
          normalizedTiming: null,
          effect: null,
          animationRange:
            n instanceof ViewTimeline ? Oe(t["animation-range"]) : null,
          proxy: this,
        });
    }
    var t = e.prototype;
    return (
      (t.finish = function () {
        var e = Ie.get(this);
        if (e.timeline) {
          var n = Se(e),
            t = be(e);
          if (0 == n)
            throw new DOMException(
              "Cannot finish Animation with a playbackRate of 0.",
              "InvalidStateError"
            );
          if (n > 0 && Infinity == t)
            throw new DOMException(
              "Cannot finish Animation with an infinite target effect end.",
              "InvalidStateError"
            );
          ye(e);
          var i = n < 0 ? 0 : t;
          this.currentTime = he(e, i);
          var r = pe(e, e.timeline.currentTime);
          null === e.startTime &&
            null !== r &&
            (e.startTime = r - i / e.animation.playbackRate),
            "pause" == e.pendingTask &&
              null !== e.startTime &&
              ((e.holdTime = null),
              (e.pendingTask = null),
              e.readyPromise.resolve(this)),
            "play" == e.pendingTask &&
              null !== e.startTime &&
              ((e.pendingTask = null), e.readyPromise.resolve(this)),
            we(e, !0, !0);
        } else e.animation.finish();
      }),
      (t.play = function () {
        var e = Ie.get(this);
        e.timeline ? ke(e) : e.animation.play();
      }),
      (t.pause = function () {
        var e = Ie.get(this);
        e.timeline
          ? "paused" != this.playState &&
            (null === e.animation.currentTime && (e.autoAlignStartTime = !0),
            "play" == e.pendingTask
              ? (e.pendingTask = null)
              : (e.readyPromise = null),
            e.readyPromise || fe(e),
            (e.pendingTask = "pause"),
            q(e.timeline, e.animation, Me.bind(e.proxy)))
          : e.animation.pause();
      }),
      (t.reverse = function () {
        var e = Ie.get(this),
          n = Se(e),
          t = pe(e, this.currentTime),
          i = Infinity == be(e),
          r = 0 != n && (n < 0 || t > 0 || !i);
        if (!e.timeline || !r)
          return (
            r && (e.pendingPlaybackRate = -Se(e)), void e.animation.reverse()
          );
        if ("inactive" == e.timeline.phase)
          throw new DOMException(
            "Cannot reverse an animation with no active timeline",
            "InvalidStateError"
          );
        this.updatePlaybackRate(-n), ke(e);
      }),
      (t.updatePlaybackRate = function (e) {
        var n = Ie.get(this);
        if (((n.pendingPlaybackRate = e), n.timeline)) {
          if (!n.readyPromise || "pending" != n.readyPromise.state)
            switch (this.playState) {
              case "idle":
              case "paused":
                ye(n);
                break;
              case "finished":
                var t = pe(n, n.timeline.currentTime),
                  i =
                    null !== t
                      ? (t - n.startTime) * n.animation.playbackRate
                      : null;
                (n.startTime =
                  0 == e ? t : null != t && null != i ? (t - i) / e : null),
                  ye(n),
                  we(n, !1, !1),
                  xe(n);
                break;
              default:
                ke(n);
            }
        } else n.animation.updatePlaybackRate(e);
      }),
      (t.persist = function () {
        Ie.get(this).animation.persist();
      }),
      (t.cancel = function () {
        var e = Ie.get(this);
        e.timeline
          ? ("idle" != this.playState &&
              ((function (e) {
                e.pendingTask &&
                  ((e.pendingTask = null),
                  ye(e),
                  e.readyPromise.reject(me()),
                  fe(e),
                  e.readyPromise.resolve(e.proxy));
              })(e),
              e.finishedPromise &&
                "pending" == e.finishedPromise.state &&
                e.finishedPromise.reject(me()),
              (e.finishedPromise = new ce()),
              e.animation.cancel()),
            (e.startTime = null),
            (e.holdTime = null),
            F(e.timeline, e.animation))
          : e.animation.cancel();
      }),
      (t.addEventListener = function (e, n, t) {
        Ie.get(this).animation.addEventListener(e, n, t);
      }),
      (t.removeEventListener = function (e, n, t) {
        Ie.get(this).animation.removeEventListener(e, n, t);
      }),
      (t.dispatchEvent = function (e) {
        Ie.get(this).animation.dispatchEvent(e);
      }),
      n(e, [
        {
          key: "effect",
          get: function () {
            var e = Ie.get(this);
            return e.timeline
              ? (e.effect ||
                  (e.effect = (function (e) {
                    var n = e.animation.effect,
                      t = n.updateTiming,
                      i = {
                        apply: function (t) {
                          n.getTiming();
                          var i = t.apply(n);
                          if (e.timeline) {
                            var r,
                              a = null != (r = e.duration) ? r : 100;
                            (i.localTime = he(e, i.localTime)),
                              (i.endTime = he(e, i.endTime)),
                              (i.activeDuration = he(e, i.activeDuration));
                            var o = be(e);
                            (i.duration = o
                              ? CSS.percent(
                                  (a *
                                    (i.iterations
                                      ? (o - i.delay - i.endDelay) /
                                        i.iterations
                                      : 0)) /
                                    o
                                )
                              : CSS.percent(0)),
                              void 0 === e.timeline.currentTime &&
                                (i.localTime = null);
                          }
                          return i;
                        },
                      },
                      r = {
                        apply: function (i, r) {
                          if (e.specifiedTiming) return e.specifiedTiming;
                          e.specifiedTiming = i.apply(n);
                          var a,
                            o = Object.assign({}, e.specifiedTiming);
                          return (
                            (null === o.duration ||
                              "auto" === o.duration ||
                              e.autoDurationEffect) &&
                              e.timeline &&
                              ((e.autoDurationEffect = !0),
                              (o.delay = 0),
                              (o.endDelay = 0),
                              (a = o.iterations ? 1e5 : 0),
                              (o.duration = o.iterations
                                ? (a - o.delay - o.endDelay) / o.iterations
                                : 0),
                              o.duration < 0 &&
                                ((o.duration = 0), (o.endDelay = a - o.delay)),
                              t.apply(n, [o])),
                            (e.normalizedTiming = o),
                            e.specifiedTiming
                          );
                        },
                      },
                      a = {
                        apply: function (t, i, r) {
                          if (r && r.length) {
                            if (e.timeline) {
                              var a = r[0],
                                o = a.duration;
                              if (Infinity === o)
                                throw TypeError(
                                  "Effect duration cannot be Infinity when used with Scroll Timelines"
                                );
                              if (Infinity === a.iterations)
                                throw TypeError(
                                  "Effect iterations cannot be Infinity when used with Scroll Timelines"
                                );
                              void 0 !== o &&
                                "auto" !== o &&
                                (e.autoDurationEffect = null);
                            }
                            e.specifiedTiming &&
                              t.apply(n, [e.specifiedTiming]),
                              t.apply(n, r),
                              Ce(e);
                          }
                        },
                      },
                      o = new Proxy(n, {
                        get: function (e, t) {
                          var i = e[t];
                          return "function" == typeof i ? i.bind(n) : i;
                        },
                        set: function (e, n, t) {
                          return (e[n] = t), !0;
                        },
                      });
                    return (
                      (o.getComputedTiming = new Proxy(n.getComputedTiming, i)),
                      (o.getTiming = new Proxy(n.getTiming, r)),
                      (o.updateTiming = new Proxy(n.updateTiming, a)),
                      o
                    );
                  })(e)),
                e.effect)
              : e.animation.effect;
          },
          set: function (e) {
            var n = Ie.get(this);
            (n.animation.effect = e),
              (n.effect = null),
              (n.autoDurationEffect = null);
          },
        },
        {
          key: "timeline",
          get: function () {
            var e = Ie.get(this);
            return e.timeline || e.animation.timeline;
          },
          set: function (e) {
            var n = Ie.get(this),
              t = this.timeline;
            if (t != e) {
              var i,
                r = this.playState,
                a = this.currentTime,
                o = be(n);
              i = null === a ? null : 0 === o ? 0 : pe(n, a) / o;
              var l = t instanceof B,
                s = e instanceof B,
                u = this.pending;
              if ((l && F(n.timeline, n.animation), s))
                return (
                  (n.timeline = e),
                  ye(n),
                  (n.autoAlignStartTime = !0),
                  (n.startTime = null),
                  (n.holdTime = null),
                  ("running" !== r && "finished" !== r) ||
                    ((n.readyPromise && "resolved" !== n.readyPromise.state) ||
                      fe(n),
                    (n.pendingTask = "play"),
                    q(n.timeline, n.animation, Me.bind(this))),
                  "paused" === r && null !== i && (n.holdTime = i * o),
                  u &&
                    ((n.readyPromise && "resolved" != n.readyPromise.state) ||
                      fe(n),
                    (n.pendingTask = "paused" == r ? "pause" : "play")),
                  null !== n.startTime && (n.holdTime = null),
                  void we(n, !1, !1)
                );
              if (n.animation.timeline != e)
                throw TypeError("Unsupported timeline: " + e);
              if ((F(n.timeline, n.animation), (n.timeline = null), l))
                switch (
                  (null !== a && (n.animation.currentTime = i * be(n)), r)
                ) {
                  case "paused":
                    n.animation.pause();
                    break;
                  case "running":
                  case "finished":
                    n.animation.play();
                }
            }
          },
        },
        {
          key: "startTime",
          get: function () {
            var e = Ie.get(this);
            return e.timeline ? he(e, e.startTime) : e.animation.startTime;
          },
          set: function (e) {
            var n = Ie.get(this);
            if (((e = pe(n, e)), n.timeline)) {
              (n.autoAlignStartTime = !1),
                null == pe(n, n.timeline.currentTime) &&
                  null != n.startTime &&
                  ((n.holdTime = null), xe(n));
              var t = pe(n, this.currentTime);
              ye(n),
                (n.startTime = e),
                (n.holdTime =
                  null !== n.startTime && 0 != n.animation.playbackRate
                    ? null
                    : t),
                n.pendingTask &&
                  ((n.pendingTask = null), n.readyPromise.resolve(this)),
                we(n, !0, !1),
                xe(n);
            } else n.animation.startTime = e;
          },
        },
        {
          key: "currentTime",
          get: function () {
            var e = Ie.get(this);
            return e.timeline
              ? he(e, null != e.holdTime ? e.holdTime : Te(e))
              : e.animation.currentTime;
          },
          set: function (e) {
            var n = Ie.get(this);
            n.timeline
              ? ((function (e, n) {
                  if (null == n && null !== e.currentTime)
                    throw new TypeError();
                  (n = pe(e, n)),
                    (e.autoAlignStartTime = !1),
                    null !== e.holdTime ||
                    null === e.startTime ||
                    "inactive" === e.timeline.phase ||
                    0 === e.animation.playbackRate
                      ? (e.holdTime = n)
                      : (e.startTime =
                          pe(e, e.timeline.currentTime) -
                          n / e.animation.playbackRate),
                    "inactive" === e.timeline.phase && (e.startTime = null),
                    (e.previousCurrentTime = null);
                })(n, e),
                "pause" == n.pendingTask &&
                  ((n.holdTime = pe(n, e)),
                  ye(n),
                  (n.startTime = null),
                  (n.pendingTask = null),
                  n.readyPromise.resolve(this)),
                we(n, !0, !1))
              : (n.animation.currentTime = e);
          },
        },
        {
          key: "playbackRate",
          get: function () {
            return Ie.get(this).animation.playbackRate;
          },
          set: function (e) {
            var n = Ie.get(this);
            if (n.timeline) {
              n.pendingPlaybackRate = null;
              var t = this.currentTime;
              (n.animation.playbackRate = e),
                null !== t && (this.currentTime = t);
            } else n.animation.playbackRate = e;
          },
        },
        {
          key: "playState",
          get: function () {
            var e = Ie.get(this);
            if (!e.timeline) return e.animation.playState;
            var n = pe(e, this.currentTime);
            if (null === n && null === e.startTime && null == e.pendingTask)
              return "idle";
            if (
              "pause" == e.pendingTask ||
              (null === e.startTime && "play" != e.pendingTask)
            )
              return "paused";
            if (null != n) {
              if (e.animation.playbackRate > 0 && n >= be(e)) return "finished";
              if (e.animation.playbackRate < 0 && n <= 0) return "finished";
            }
            return "running";
          },
        },
        {
          key: "rangeStart",
          get: function () {
            var e;
            return null != (e = Ie.get(this).animationRange.start)
              ? e
              : "normal";
          },
          set: function (e) {
            var n = Ie.get(this);
            if (!n.timeline) return (n.animation.rangeStart = e);
            n.timeline instanceof ViewTimeline &&
              ((n.animationRange.start = Ne(e, "start")), Ae(n), xe(n));
          },
        },
        {
          key: "rangeEnd",
          get: function () {
            var e;
            return null != (e = Ie.get(this).animationRange.end) ? e : "normal";
          },
          set: function (e) {
            var n = Ie.get(this);
            if (!n.timeline) return (n.animation.rangeEnd = e);
            n.timeline instanceof ViewTimeline &&
              ((n.animationRange.end = Ne(e, "end")), Ae(n), xe(n));
          },
        },
        {
          key: "replaceState",
          get: function () {
            return Ie.get(this).animation.pending;
          },
        },
        {
          key: "pending",
          get: function () {
            var e = Ie.get(this);
            return e.timeline
              ? !!e.readyPromise && "pending" == e.readyPromise.state
              : e.animation.pending;
          },
        },
        {
          key: "id",
          get: function () {
            return Ie.get(this).animation.id;
          },
          set: function (e) {
            Ie.get(this).animation.id = e;
          },
        },
        {
          key: "onfinish",
          get: function () {
            return Ie.get(this).animation.onfinish;
          },
          set: function (e) {
            Ie.get(this).animation.onfinish = e;
          },
        },
        {
          key: "oncancel",
          get: function () {
            return Ie.get(this).animation.oncancel;
          },
          set: function (e) {
            Ie.get(this).animation.oncancel = e;
          },
        },
        {
          key: "onremove",
          get: function () {
            return Ie.get(this).animation.onremove;
          },
          set: function (e) {
            Ie.get(this).animation.onremove = e;
          },
        },
        {
          key: "finished",
          get: function () {
            var e = Ie.get(this);
            return e.timeline
              ? (e.finishedPromise || (e.finishedPromise = new ce()),
                e.finishedPromise.promise)
              : e.animation.finished;
          },
        },
        {
          key: "ready",
          get: function () {
            var e = Ie.get(this);
            return e.timeline
              ? (e.readyPromise ||
                  ((e.readyPromise = new ce()), e.readyPromise.resolve(this)),
                e.readyPromise.promise)
              : e.animation.ready;
          },
        },
      ]),
      e
    );
  })();
  function Ne(e, n) {
    if (!e || "normal" === e) return "normal";
    var t = "cover",
      i = "start" === n ? CSS.percent(0) : CSS.percent(100);
    if (e instanceof Object)
      void 0 !== e.rangeName && (t = e.rangeName),
        void 0 !== e.offset && (i = e.offset);
    else {
      var r = e
        .split(ue)
        .map(function (e) {
          return e.trim();
        })
        .filter(Boolean);
      1 === r.length
        ? se.includes(r[0])
          ? (t = r[0])
          : (i = CSSNumericValue.parse(r[0]))
        : 2 === r.length && ((t = r[0]), (i = CSSNumericValue.parse(r[1])));
    }
    if (!se.includes(t)) throw TypeError("Invalid range name");
    return { rangeName: t, offset: i };
  }
  function Oe(e) {
    if (!e) return { start: "normal", end: "normal" };
    var n = {
        start: { rangeName: "cover", offset: CSS.percent(0) },
        end: { rangeName: "cover", offset: CSS.percent(100) },
      },
      t = e.split(" "),
      i = [],
      r = [];
    if (
      (t.forEach(function (e) {
        e.endsWith("%") ? r.push(parseFloat(e)) : i.push(e);
      }),
      i.length > 2 || r.length > 2 || 1 == r.length)
    )
      throw TypeError("Invalid time range or unsupported time range format.");
    return (
      i.length &&
        ((n.start.rangeName = i[0]),
        (n.end.rangeName = i.length > 1 ? i[1] : i[0])),
      r.length > 1 &&
        ((n.start.offset = CSS.percent(r[0])),
        (n.end.offset = CSS.percent(r[1]))),
      n
    );
  }
  function Ve(e, n) {
    var t = n.timeline;
    t instanceof B && delete n.timeline;
    var i = oe.apply(this, [e, n]),
      r = new Re(i, t);
    return (
      t instanceof B &&
        (i.pause(),
        t instanceof ViewTimeline &&
          (Ie.get(r).animationRange = {
            start: Ne(n.rangeStart, "start"),
            end: Ne(n.rangeEnd, "end"),
          }),
        r.play()),
      r
    );
  }
  function Le(e) {
    for (var n = 0; n < e.length; ++n) {
      var t = Pe.get(e[n]);
      t && (e[n] = t);
    }
    return e;
  }
  function je(e) {
    return Le(ae.apply(this, [e]));
  }
  function Ue(e) {
    return Le(re.apply(this, [e]));
  }
  var _e = {
      IDENTIFIER: /[\w\\\@_-]+/g,
      WHITE_SPACE: /\s*/g,
      NUMBER: /^[0-9]+/,
      TIME: /^[0-9]+(s|ms)/,
      SCROLL_TIMELINE: /scroll-timeline\s*:([^;}]+)/,
      SCROLL_TIMELINE_NAME: /scroll-timeline-name\s*:([^;}]+)/,
      SCROLL_TIMELINE_AXIS: /scroll-timeline-axis\s*:([^;}]+)/,
      VIEW_TIMELINE: /view-timeline\s*:([^;}]+)/,
      VIEW_TIMELINE_NAME: /view-timeline-name\s*:([^;}]+)/,
      VIEW_TIMELINE_AXIS: /view-timeline-axis\s*:([^;}]+)/,
      VIEW_TIMELINE_INSET: /view-timeline-inset\s*:([^;}]+)/,
      ANIMATION_TIMELINE: /animation-timeline\s*:([^;}]+)/,
      ANIMATION_TIME_RANGE: /animation-range\s*:([^;}]+)/,
      ANIMATION_NAME: /animation-name\s*:([^;}]+)/,
      ANIMATION: /animation\s*:([^;}]+)/,
      ANONYMOUS_SCROLL_TIMELINE: /scroll\(([^)]*)\)/,
      ANONYMOUS_VIEW_TIMELINE: /view\(([^)]*)\)/,
    },
    We = ["block", "inline", "x", "y"],
    ze = ["nearest", "root"],
    De = (function () {
      function e() {
        (this.cssRulesWithTimelineName = []),
          (this.nextAnonymousTimelineNameIndex = 0),
          (this.anonymousScrollTimelineOptions = new Map()),
          (this.anonymousViewTimelineOptions = new Map()),
          (this.sourceSelectorToScrollTimeline = []),
          (this.subjectSelectorToViewTimeline = []),
          (this.keyframeNamesSelectors = new Map());
      }
      var n = e.prototype;
      return (
        (n.transpileStyleSheet = function (e, n, t) {
          for (
            var i = { sheetSrc: e, index: 0, name: t };
            i.index < i.sheetSrc.length &&
            (this.eatWhitespace(i), !(i.index >= i.sheetSrc.length));

          )
            if (this.lookAhead("/*", i))
              for (; this.lookAhead("/*", i); )
                this.eatComment(i), this.eatWhitespace(i);
            else {
              var r = this.parseQualifiedRule(i);
              r &&
                (n
                  ? this.parseKeyframesAndSaveNameMapping(r, i)
                  : this.handleScrollTimelineProps(r, i));
            }
          return i.sheetSrc;
        }),
        (n.getAnimationTimelineOptions = function (e, n) {
          for (var t = this.cssRulesWithTimelineName.length - 1; t >= 0; t--) {
            var i = this.cssRulesWithTimelineName[t];
            try {
              if (
                n.matches(i.selector) &&
                (!i["animation-name"] || i["animation-name"] == e)
              )
                return {
                  "animation-timeline": i["animation-timeline"],
                  "animation-range": i["animation-range"],
                };
            } catch (e) {}
          }
          return null;
        }),
        (n.getAnonymousScrollTimelineOptions = function (e, n) {
          var t = this.anonymousScrollTimelineOptions.get(e);
          return t
            ? {
                anonymousSource: t.source,
                anonymousTarget: n,
                source: Q(t.source, n),
                axis: t.axis ? t.axis : "block",
              }
            : null;
        }),
        (n.getScrollTimelineOptions = function (e, n) {
          var i = this.getAnonymousScrollTimelineOptions(e, n);
          if (i) return i;
          for (
            var r = this.sourceSelectorToScrollTimeline.length - 1;
            r >= 0;
            r--
          ) {
            var a = this.sourceSelectorToScrollTimeline[r];
            if (a.name == e) {
              var o = this.findPreviousSiblingOrAncestorMatchingSelector(
                n,
                a.selector
              );
              if (o) return t({ source: o }, a.axis ? { axis: a.axis } : {});
            }
          }
          return null;
        }),
        (n.findPreviousSiblingOrAncestorMatchingSelector = function (e, n) {
          for (var t = e; t; ) {
            if (t.matches(n)) return t;
            t = t.previousElementSibling || t.parentElement;
          }
          return null;
        }),
        (n.getAnonymousViewTimelineOptions = function (e, n) {
          var t = this.anonymousViewTimelineOptions.get(e);
          return t
            ? {
                subject: n,
                axis: t.axis ? t.axis : "block",
                inset: t.inset ? t.inset : "auto",
              }
            : null;
        }),
        (n.getViewTimelineOptions = function (e, n) {
          var t = this.getAnonymousViewTimelineOptions(e, n);
          if (t) return t;
          for (
            var i = this.subjectSelectorToViewTimeline.length - 1;
            i >= 0;
            i--
          ) {
            var r = this.subjectSelectorToViewTimeline[i];
            if (r.name == e) {
              var a = this.findPreviousSiblingOrAncestorMatchingSelector(
                n,
                r.selector
              );
              if (a) return { subject: a, axis: r.axis, inset: r.inset };
            }
          }
          return null;
        }),
        (n.handleScrollTimelineProps = function (e, n) {
          var t = this;
          if (!e.selector.includes("@keyframes")) {
            var i = e.block.contents.includes("animation-name:"),
              r = e.block.contents.includes("animation-timeline:"),
              a = e.block.contents.includes("animation:");
            if (
              (this.saveSourceSelectorToScrollTimeline(e),
              this.saveSubjectSelectorToViewTimeline(e),
              r || i || a)
            ) {
              var o = [],
                l = [],
                s = !1;
              r && (o = this.extractScrollTimelineNames(e.block.contents)),
                i &&
                  (l = this.extractMatches(
                    e.block.contents,
                    _e.ANIMATION_NAME
                  )),
                (r && i) ||
                  (a &&
                    this.extractMatches(e.block.contents, _e.ANIMATION).forEach(
                      function (n) {
                        var i = t.extractAnimationName(n);
                        i && r && l.push(i),
                          r &&
                            (t.hasDuration(n) ||
                              (t.hasAutoDuration(n) &&
                                (e.block.contents = e.block.contents.replace(
                                  "auto",
                                  "    "
                                )),
                              (e.block.contents = e.block.contents.replace(
                                n,
                                " 1s " + n
                              )),
                              (s = !0)));
                      }
                    ),
                  s &&
                    this.replacePart(
                      e.block.startIndex,
                      e.block.endIndex,
                      e.block.contents,
                      n
                    )),
                this.saveRelationInList(e, o, l);
            }
          }
        }),
        (n.saveSourceSelectorToScrollTimeline = function (e) {
          var n,
            t = e.block.contents.includes("scroll-timeline:"),
            i = e.block.contents.includes("scroll-timeline-name:"),
            r = e.block.contents.includes("scroll-timeline-axis:");
          if (t || i) {
            var a = [];
            if (t)
              for (
                var o,
                  l = u(
                    this.extractMatches(e.block.contents, _e.SCROLL_TIMELINE)
                  );
                !(o = l()).done;

              ) {
                var s = this.split(o.value),
                  c = { selector: e.selector, name: "" };
                1 == s.length
                  ? (c.name = s[0])
                  : 2 == s.length &&
                    (We.includes(s[0])
                      ? ((c.axis = s[0]), (c.name = s[1]))
                      : ((c.axis = s[1]), (c.name = s[0]))),
                  a.push(c);
              }
            if (i)
              for (
                var f = this.extractMatches(
                    e.block.contents,
                    _e.SCROLL_TIMELINE_NAME
                  ),
                  m = 0;
                m < f.length;
                m++
              )
                m < a.length
                  ? (a[m].name = f[m])
                  : a.push({ selector: e.selector, name: f[m] });
            var h = [];
            if (r) {
              var p = this.extractMatches(
                e.block.contents,
                _e.SCROLL_TIMELINE_AXIS
              );
              if (
                (h = p.filter(function (e) {
                  return We.includes(e);
                })).length != p.length
              )
                throw new Error("Invalid axis");
            }
            for (var d = 0; d < a.length; d++)
              h.length && (a[d].axis = h[d % a.length]);
            (n = this.sourceSelectorToScrollTimeline).push.apply(n, a);
          }
        }),
        (n.saveSubjectSelectorToViewTimeline = function (e) {
          var n,
            t = e.block.contents.includes("view-timeline:"),
            i = e.block.contents.includes("view-timeline-name:"),
            r = e.block.contents.includes("view-timeline-axis:"),
            a = e.block.contents.includes("view-timeline-inset:");
          if (t || i) {
            var o = [];
            if (t)
              for (
                var l,
                  s = u(
                    this.extractMatches(e.block.contents, _e.VIEW_TIMELINE)
                  );
                !(l = s()).done;

              ) {
                var c = this.split(l.value),
                  f = { selector: e.selector, name: "", inset: null };
                1 == c.length
                  ? (f.name = c[0])
                  : 2 == c.length &&
                    (We.includes(c[0])
                      ? ((f.axis = c[0]), (f.name = c[1]))
                      : ((f.axis = c[1]), (f.name = c[0]))),
                  o.push(f);
              }
            if (i)
              for (
                var m = this.extractMatches(
                    e.block.contents,
                    _e.VIEW_TIMELINE_NAME
                  ),
                  h = 0;
                h < m.length;
                h++
              )
                h < o.length
                  ? (o[h].name = m[h])
                  : o.push({ selector: e.selector, name: m[h], inset: null });
            var p = [],
              d = [];
            if (
              (a &&
                (p = this.extractMatches(
                  e.block.contents,
                  _e.VIEW_TIMELINE_INSET
                )),
              r)
            ) {
              var v = this.extractMatches(
                e.block.contents,
                _e.VIEW_TIMELINE_AXIS
              );
              if (
                (d = v.filter(function (e) {
                  return We.includes(e);
                })).length != v.length
              )
                throw new Error("Invalid axis");
            }
            for (var g = 0; g < o.length; g++)
              p.length && (o[g].inset = p[g % o.length]),
                d.length && (o[g].axis = d[g % o.length]);
            (n = this.subjectSelectorToViewTimeline).push.apply(n, o);
          }
        }),
        (n.hasDuration = function (e) {
          return (
            e.split(" ").filter(function (e) {
              return _e.TIME.exec(e);
            }).length >= 1
          );
        }),
        (n.hasAutoDuration = function (e) {
          return (
            e.split(" ").filter(function (e) {
              return "auto" === e;
            }).length >= 1
          );
        }),
        (n.saveRelationInList = function (e, n, i) {
          var r = [];
          e.block.contents.includes("animation-range:") &&
            (r = this.extractMatches(
              e.block.contents,
              _e.ANIMATION_TIME_RANGE
            ));
          for (
            var a = Math.max(n.length, i.length, r.length), o = 0;
            o < a;
            o++
          )
            this.cssRulesWithTimelineName.push(
              t(
                { selector: e.selector, "animation-timeline": n[o % n.length] },
                i.length ? { "animation-name": i[o % i.length] } : {},
                r.length ? { "animation-range": r[o % r.length] } : {}
              )
            );
        }),
        (n.extractScrollTimelineNames = function (e) {
          var n = this,
            t = _e.ANIMATION_TIMELINE.exec(e)[1].trim(),
            i = [];
          return (
            t
              .split(",")
              .map(function (e) {
                return e.trim();
              })
              .forEach(function (e) {
                if (
                  (function (e) {
                    return (
                      (e.startsWith("scroll") || e.startsWith("view")) &&
                      e.includes("(")
                    );
                  })(e)
                ) {
                  var t = n.saveAnonymousTimelineName(e);
                  i.push(t);
                } else i.push(e);
              }),
            i
          );
        }),
        (n.saveAnonymousTimelineName = function (e) {
          var n = ":t" + this.nextAnonymousTimelineNameIndex++;
          return (
            e.startsWith("scroll(")
              ? this.anonymousScrollTimelineOptions.set(
                  n,
                  this.parseAnonymousScrollTimeline(e)
                )
              : this.anonymousViewTimelineOptions.set(
                  n,
                  this.parseAnonymousViewTimeline(e)
                ),
            n
          );
        }),
        (n.parseAnonymousScrollTimeline = function (e) {
          var n = _e.ANONYMOUS_SCROLL_TIMELINE.exec(e);
          if (!n) return null;
          var t = {};
          return (
            n[1].split(" ").forEach(function (e) {
              We.includes(e) ? (t.axis = e) : ze.includes(e) && (t.source = e);
            }),
            t
          );
        }),
        (n.parseAnonymousViewTimeline = function (e) {
          var n = _e.ANONYMOUS_VIEW_TIMELINE.exec(e);
          if (!n) return null;
          var t = {};
          return (
            n[1].split(" ").forEach(function (e) {
              We.includes(e)
                ? (t.axis = e)
                : (t.inset = t.inset ? t.inset + " " + e : e);
            }),
            t
          );
        }),
        (n.extractAnimationName = function (e) {
          return this.findMatchingEntryInContainer(
            e,
            this.keyframeNamesSelectors
          );
        }),
        (n.findMatchingEntryInContainer = function (e, n) {
          var t = e.split(" ").filter(function (e) {
            return n.has(e);
          });
          return t ? t[0] : null;
        }),
        (n.parseIdentifier = function (e) {
          _e.IDENTIFIER.lastIndex = e.index;
          var n = _e.IDENTIFIER.exec(e.sheetSrc);
          if (!n) throw this.parseError(e, "Expected an identifier");
          return (e.index += n[0].length), n[0];
        }),
        (n.parseKeyframesAndSaveNameMapping = function (e, n) {
          var t = this;
          if (e.selector.startsWith("@keyframes")) {
            var i = this.replaceKeyframesAndGetMapping(e, n);
            e.selector.split(" ").forEach(function (e, n) {
              n > 0 && t.keyframeNamesSelectors.set(e, i);
            });
          }
        }),
        (n.replaceKeyframesAndGetMapping = function (e, n) {
          var t = e.block.contents,
            i = (function (e) {
              for (var n = 0, t = -1, i = [], r = 0; r < e.length; r++)
                "{" == e[r] ? n++ : "}" == e[r] && n--,
                  1 == n && "{" != e[r] && "}" != e[r] && -1 == t && (t = r),
                  2 == n &&
                    "{" == e[r] &&
                    (i.push({ start: t, end: r }), (t = -1));
              return i;
            })(t);
          if (0 == i.length) return new Map();
          var r = new Map(),
            a = !1,
            o = [];
          o.push(t.substring(0, i[0].start));
          for (
            var l = function (e) {
                var n = t.substring(i[e].start, i[e].end),
                  l = [];
                n.split(",").forEach(function (e) {
                  var n,
                    t = e
                      .split(" ")
                      .map(function (e) {
                        return e.trim();
                      })
                      .filter(function (e) {
                        return "" != e;
                      })
                      .join(" "),
                    i = r.size;
                  r.set(i, t),
                    l.push(i + "%"),
                    (n = t),
                    se.some(function (e) {
                      return n.startsWith(e);
                    }) && (a = !0);
                }),
                  o.push(l.join(",")),
                  o.push(
                    e == i.length - 1
                      ? t.substring(i[e].end)
                      : t.substring(i[e].end, i[e + 1].start)
                  );
              },
              s = 0;
            s < i.length;
            s++
          )
            l(s);
          return a
            ? ((e.block.contents = o.join("")),
              this.replacePart(
                e.block.startIndex,
                e.block.endIndex,
                e.block.contents,
                n
              ),
              r)
            : new Map();
        }),
        (n.parseQualifiedRule = function (e) {
          var n = e.index,
            t = this.parseSelector(e).trim();
          if (t)
            return {
              selector: t,
              block: this.eatBlock(e),
              startIndex: n,
              endIndex: e.index,
            };
        }),
        (n.removeEnclosingDoubleQuotes = function (e) {
          return e.substring(
            '"' == e[0] ? 1 : 0,
            '"' == e[e.length - 1] ? e.length - 1 : e.length
          );
        }),
        (n.assertString = function (e, n) {
          if (e.sheetSrc.substr(e.index, n.length) != n)
            throw this.parseError(e, "Did not find expected sequence " + n);
          e.index += n.length;
        }),
        (n.replacePart = function (e, n, t, i) {
          (i.sheetSrc = i.sheetSrc.slice(0, e) + t + i.sheetSrc.slice(n)),
            i.index >= n && (i.index = e + t.length + (i.index - n));
        }),
        (n.eatComment = function (e) {
          this.assertString(e, "/*"),
            this.eatUntil("*/", e, !0),
            this.assertString(e, "*/");
        }),
        (n.eatBlock = function (e) {
          var n = e.index;
          this.assertString(e, "{");
          for (var t = 1; 0 != t; )
            this.lookAhead("/*", e)
              ? this.eatComment(e)
              : ("{" === e.sheetSrc[e.index]
                  ? t++
                  : "}" === e.sheetSrc[e.index] && t--,
                this.advance(e));
          var i = e.index;
          return {
            startIndex: n,
            endIndex: i,
            contents: e.sheetSrc.slice(n, i),
          };
        }),
        (n.advance = function (e) {
          if ((e.index++, e.index > e.sheetSrc.length))
            throw this.parseError(e, "Advanced beyond the end");
        }),
        (n.parseError = function (e, n) {
          return Error(
            "(" + (e.name ? e.name : "<anonymous file>") + "): " + n
          );
        }),
        (n.eatUntil = function (e, n, t) {
          void 0 === t && (t = !1);
          for (var i = n.index; !this.lookAhead(e, n); ) this.advance(n);
          return (
            t &&
              (n.sheetSrc =
                n.sheetSrc.slice(0, i) +
                " ".repeat(n.index - i) +
                n.sheetSrc.slice(n.index)),
            n.sheetSrc.slice(i, n.index)
          );
        }),
        (n.parseSelector = function (e) {
          var n = e.index;
          if ((this.eatUntil("{", e), n === e.index))
            throw Error("Empty selector");
          return e.sheetSrc.slice(n, e.index);
        }),
        (n.eatWhitespace = function (e) {
          _e.WHITE_SPACE.lastIndex = e.index;
          var n = _e.WHITE_SPACE.exec(e.sheetSrc);
          n && (e.index += n[0].length);
        }),
        (n.lookAhead = function (e, n) {
          return n.sheetSrc.substr(n.index, e.length) == e;
        }),
        (n.peek = function (e) {
          return e.sheetSrc[e.index];
        }),
        (n.extractMatches = function (e, n, t) {
          return (
            void 0 === t && (t = ","),
            n
              .exec(e)[1]
              .trim()
              .split(t)
              .map(function (e) {
                return e.trim();
              })
          );
        }),
        (n.split = function (e) {
          return e
            .split(" ")
            .map(function (e) {
              return e.trim();
            })
            .filter(function (e) {
              return "" != e;
            });
        }),
        e
      );
    })(),
    He = new De();
  function Fe(e, n, t, i, r, a) {
    var o = W(n),
      l = z(n, t);
    return te(ee(e, o, l, i, r), a, ee("cover", o, l, i, r));
  }
  !(function () {
    if (
      !(function () {
        if (CSS.supports("animation-timeline: --works")) return !0;
        !(function () {
          var e = new MutationObserver(function (e) {
            for (var t, i = u(e); !(t = i()).done; )
              for (var r, a = u(t.value.addedNodes); !(r = a()).done; ) {
                var o = r.value;
                o instanceof HTMLStyleElement && n(o);
              }
          });
          function n(e) {
            if (0 !== e.innerHTML.trim().length) {
              var n = He.transpileStyleSheet(e.innerHTML, !0);
              (n = He.transpileStyleSheet(n, !1)), (e.innerHTML = n);
            }
          }
          e.observe(document.documentElement, { childList: !0, subtree: !0 }),
            document.querySelectorAll("style").forEach(function (e) {
              return n(e);
            }),
            document.querySelectorAll("link").forEach(function (e) {});
        })(),
          window.addEventListener("animationstart", function (e) {
            e.target
              .getAnimations()
              .filter(function (n) {
                return n.animationName === e.animationName;
              })
              .forEach(function (n) {
                var t = (function (e, n, t) {
                  var i = He.getAnimationTimelineOptions(n, t);
                  if (!i) return null;
                  var r = i["animation-timeline"];
                  if (!r) return null;
                  var a =
                    He.getScrollTimelineOptions(r, t) ||
                    He.getViewTimelineOptions(r, t);
                  return a
                    ? (a.subject &&
                        (function (e, n) {
                          var t = J(n.subject),
                            i = n.axis || n.axis,
                            r = He.keyframeNamesSelectors.get(e.animationName);
                          if (r && r.size) {
                            var a = [];
                            e.effect.getKeyframes().forEach(function (e) {
                              var o = (function (e, r) {
                                for (
                                  var a, o = null, l = u(e);
                                  !(a = l()).done;

                                ) {
                                  var s = a.value,
                                    c = s[1];
                                  if (s[0] == 100 * r.offset) {
                                    if ("from" == c) o = 0;
                                    else if ("to" == c) o = 100;
                                    else {
                                      var f = c.split(" ");
                                      o =
                                        1 == f.length
                                          ? parseFloat(f[0])
                                          : 100 *
                                            Fe(
                                              f[0],
                                              t,
                                              n.subject,
                                              i,
                                              n.inset,
                                              CSS.percent(parseFloat(f[1]))
                                            );
                                    }
                                    break;
                                  }
                                }
                                return o;
                              })(r, e);
                              null !== o &&
                                o >= 0 &&
                                o <= 100 &&
                                ((e.offset = o / 100), a.push(e));
                            });
                            var o = a.sort(function (e, n) {
                              return e.offset < n.offset
                                ? -1
                                : e.affset > n.offset
                                ? 1
                                : 0;
                            });
                            e.effect.setKeyframes(o);
                          }
                        })(e, a),
                      {
                        timeline: a.source ? new B(a) : new ie(a),
                        animOptions: i,
                      })
                    : null;
                })(n, n.animationName, e.target);
                if (t)
                  if (!t.timeline || n instanceof Re) n.timeline = t.timeline;
                  else {
                    var i = new Re(n, t.timeline, t.animOptions);
                    n.pause(), i.play();
                  }
              });
          });
      })()
    ) {
      if (
        ([].concat(document.styleSheets).filter(function (e) {
          return null !== e.href;
        }).length &&
          console.warn(
            "Non-Inline StyleSheets detected: ScrollTimeline polyfill currently only supports inline styles within style tags"
          ),
        !Reflect.defineProperty(window, "ScrollTimeline", { value: B }))
      )
        throw Error(
          "Error installing ScrollTimeline polyfill: could not attach ScrollTimeline to window"
        );
      if (!Reflect.defineProperty(window, "ViewTimeline", { value: ie }))
        throw Error(
          "Error installing ViewTimeline polyfill: could not attach ViewTimeline to window"
        );
      if (!Reflect.defineProperty(Element.prototype, "animate", { value: Ve }))
        throw Error(
          "Error installing ScrollTimeline polyfill: could not attach WAAPI's animate to DOM Element"
        );
      if (!Reflect.defineProperty(window, "Animation", { value: Re }))
        throw Error("Error installing Animation constructor.");
      if (
        !Reflect.defineProperty(Element.prototype, "getAnimations", {
          value: je,
        })
      )
        throw Error(
          "Error installing ScrollTimeline polyfill: could not attach WAAPI's getAnimations to DOM Element"
        );
      if (!Reflect.defineProperty(document, "getAnimations", { value: Ue }))
        throw Error(
          "Error installing ScrollTimeline polyfill: could not attach WAAPI's getAnimations to document"
        );
    }
  })();
})();
//# sourceMappingURL=scroll-timeline.js.map
