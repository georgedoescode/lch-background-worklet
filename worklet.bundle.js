(() => {
  // node_modules/culori/src/rgb/parseNumber.js
  var parseNumber = (color, len) => {
    if (typeof color !== "number")
      return;
    if (len === 3) {
      return {
        mode: "rgb",
        r: (color >> 8 & 15 | color >> 4 & 240) / 255,
        g: (color >> 4 & 15 | color & 240) / 255,
        b: (color & 15 | color << 4 & 240) / 255
      };
    }
    if (len === 4) {
      return {
        mode: "rgb",
        r: (color >> 12 & 15 | color >> 8 & 240) / 255,
        g: (color >> 8 & 15 | color >> 4 & 240) / 255,
        b: (color >> 4 & 15 | color & 240) / 255,
        alpha: (color & 15 | color << 4 & 240) / 255
      };
    }
    if (len === 6) {
      return {
        mode: "rgb",
        r: (color >> 16 & 255) / 255,
        g: (color >> 8 & 255) / 255,
        b: (color & 255) / 255
      };
    }
    if (len === 8) {
      return {
        mode: "rgb",
        r: (color >> 24 & 255) / 255,
        g: (color >> 16 & 255) / 255,
        b: (color >> 8 & 255) / 255,
        alpha: (color & 255) / 255
      };
    }
  };
  var parseNumber_default = parseNumber;

  // node_modules/culori/src/colors/named.js
  var named = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  };
  var named_default = named;

  // node_modules/culori/src/rgb/parseNamed.js
  var parseNamed = (color) => {
    return parseNumber_default(named_default[color.toLowerCase()], 6);
  };
  var parseNamed_default = parseNamed;

  // node_modules/culori/src/rgb/parseHex.js
  var hex = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i;
  var parseHex = (color) => {
    let match;
    return (match = color.match(hex)) ? parseNumber_default(parseInt(match[1], 16), match[1].length) : void 0;
  };
  var parseHex_default = parseHex;

  // node_modules/culori/src/util/regex.js
  var num = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)";
  var num_none = `(?:${num}|none)`;
  var per = `${num}%`;
  var per_none = `(?:${num}%|none)`;
  var num_per = `(?:${num}%|${num})`;
  var num_per_none = `(?:${num}%|${num}|none)`;
  var hue = `(?:${num}(deg|grad|rad|turn)|${num})`;
  var hue_none = `(?:${num}(deg|grad|rad|turn)|${num}|none)`;
  var c = `\\s*,\\s*`;
  var s = `\\s+`;
  var rx_num_per_none = new RegExp("^" + num_per_none + "$");

  // node_modules/culori/src/rgb/parseRgb.js
  var rgb_num_old = new RegExp(`^rgba?\\(\\s*${num}${c}${num}${c}${num}\\s*(?:,\\s*${num_per}\\s*)?\\)$`);
  var rgb_per_old = new RegExp(`^rgba?\\(\\s*${per}${c}${per}${c}${per}\\s*(?:,\\s*${num_per}\\s*)?\\)$`);
  var rgb_num_new = new RegExp(`^rgba?\\(\\s*${num_none}${s}${num_none}${s}${num_none}\\s*(?:\\/\\s*${num_per_none}\\s*)?\\)$`);
  var rgb_per_new = new RegExp(`^rgba?\\(\\s*${per_none}${s}${per_none}${s}${per_none}\\s*(?:\\/\\s*${num_per_none}\\s*)?\\)$`);
  var parseRgb = (color) => {
    let res = { mode: "rgb" };
    let match;
    if (match = color.match(rgb_num_old) || color.match(rgb_num_new)) {
      if (match[1] !== void 0) {
        res.r = match[1] / 255;
      }
      if (match[2] !== void 0) {
        res.g = match[2] / 255;
      }
      if (match[3] !== void 0) {
        res.b = match[3] / 255;
      }
    } else if (match = color.match(rgb_per_old) || color.match(rgb_per_new)) {
      if (match[1] !== void 0) {
        res.r = match[1] / 100;
      }
      if (match[2] !== void 0) {
        res.g = match[2] / 100;
      }
      if (match[3] !== void 0) {
        res.b = match[3] / 100;
      }
    } else {
      return void 0;
    }
    if (match[4] !== void 0) {
      res.alpha = match[4] / 100;
    } else if (match[5] !== void 0) {
      res.alpha = +match[5];
    }
    return res;
  };
  var parseRgb_default = parseRgb;

  // node_modules/culori/src/rgb/parseTransparent.js
  var parseTransparent = (c4) => c4 === "transparent" ? { mode: "rgb", r: 0, g: 0, b: 0, alpha: 0 } : void 0;
  var parseTransparent_default = parseTransparent;

  // node_modules/culori/src/interpolate/lerp.js
  var lerp = (a, b, t) => a + t * (b - a);
  var lerp_default = lerp;

  // node_modules/culori/src/interpolate/piecewise.js
  var get_classes = (arr) => {
    let classes = [];
    for (let i = 0; i < arr.length - 1; i++) {
      let a = arr[i];
      let b = arr[i + 1];
      if (a === void 0 && b === void 0) {
        classes.push(void 0);
      } else if (a !== void 0 && b !== void 0) {
        classes.push([a, b]);
      } else {
        classes.push(a !== void 0 ? [a, a] : [b, b]);
      }
    }
    return classes;
  };
  var interpolatorPiecewise = (interpolator) => (arr) => {
    let classes = get_classes(arr);
    return (t) => {
      let cls = t * classes.length;
      let idx = t >= 1 ? classes.length - 1 : Math.max(Math.floor(cls), 0);
      let pair = classes[idx];
      return pair === void 0 ? void 0 : interpolator(pair[0], pair[1], cls - idx);
    };
  };

  // node_modules/culori/src/interpolate/linear.js
  var interpolatorLinear = interpolatorPiecewise(lerp_default);

  // node_modules/culori/src/fixup/alpha.js
  var fixupAlpha = (arr) => {
    let some_defined = false;
    let res = arr.map((v) => {
      if (v !== void 0) {
        some_defined = true;
        return v;
      }
      return 1;
    });
    return some_defined ? res : arr;
  };

  // node_modules/culori/src/rgb/definition.js
  var definition = {
    mode: "rgb",
    channels: ["r", "g", "b", "alpha"],
    parse: [parseHex_default, parseRgb_default, parseNamed_default, parseTransparent_default, "srgb"],
    serialize: "srgb",
    interpolate: {
      r: interpolatorLinear,
      g: interpolatorLinear,
      b: interpolatorLinear,
      alpha: { use: interpolatorLinear, fixup: fixupAlpha }
    }
  };
  var definition_default = definition;

  // node_modules/culori/src/a98/convertA98ToXyz65.js
  var linearize = (v) => Math.pow(Math.abs(v), 563 / 256) * Math.sign(v);
  var convertA98ToXyz65 = (a982) => {
    let r2 = linearize(a982.r);
    let g = linearize(a982.g);
    let b = linearize(a982.b);
    let res = {
      mode: "xyz65",
      x: 0.5766690429101305 * r2 + 0.1855582379065463 * g + 0.1882286462349947 * b,
      y: 0.29734497525053605 * r2 + 0.6273635662554661 * g + 0.07529145849399788 * b,
      z: 0.02703136138641234 * r2 + 0.07068885253582723 * g + 0.9913375368376388 * b
    };
    if (a982.alpha !== void 0) {
      res.alpha = a982.alpha;
    }
    return res;
  };
  var convertA98ToXyz65_default = convertA98ToXyz65;

  // node_modules/culori/src/a98/convertXyz65ToA98.js
  var gamma = (v) => Math.pow(Math.abs(v), 256 / 563) * Math.sign(v);
  var convertXyz65ToA98 = ({ x, y, z, alpha }) => {
    let res = {
      mode: "a98",
      r: gamma(x * 2.0415879038107465 - y * 0.5650069742788596 - 0.34473135077832956 * z),
      g: gamma(x * -0.9692436362808795 + y * 1.8759675015077202 + 0.04155505740717557 * z),
      b: gamma(x * 0.013444280632031142 - y * 0.11836239223101838 + 1.0151749943912054 * z)
    };
    if (alpha !== void 0) {
      res.alpha = alpha;
    }
    return res;
  };
  var convertXyz65ToA98_default = convertXyz65ToA98;

  // node_modules/culori/src/lrgb/convertRgbToLrgb.js
  var fn = (c4) => {
    const abs2 = Math.abs(c4);
    if (abs2 < 0.04045) {
      return c4 / 12.92;
    }
    return (Math.sign(c4) || 1) * Math.pow((abs2 + 0.055) / 1.055, 2.4);
  };
  var convertRgbToLrgb = ({ r: r2, g, b, alpha }) => {
    let res = {
      mode: "lrgb",
      r: fn(r2),
      g: fn(g),
      b: fn(b)
    };
    if (alpha !== void 0)
      res.alpha = alpha;
    return res;
  };
  var convertRgbToLrgb_default = convertRgbToLrgb;

  // node_modules/culori/src/xyz65/convertRgbToXyz65.js
  var convertRgbToXyz65 = (rgb4) => {
    let { r: r2, g, b, alpha } = convertRgbToLrgb_default(rgb4);
    let res = {
      mode: "xyz65",
      x: 0.4124564 * r2 + 0.3575761 * g + 0.1804375 * b,
      y: 0.2126729 * r2 + 0.7151522 * g + 0.072175 * b,
      z: 0.0193339 * r2 + 0.119192 * g + 0.9503041 * b
    };
    if (alpha !== void 0) {
      res.alpha = alpha;
    }
    return res;
  };
  var convertRgbToXyz65_default = convertRgbToXyz65;

  // node_modules/culori/src/lrgb/convertLrgbToRgb.js
  var fn2 = (c4) => {
    const abs2 = Math.abs(c4);
    if (abs2 > 31308e-7) {
      return (Math.sign(c4) || 1) * (1.055 * Math.pow(abs2, 1 / 2.4) - 0.055);
    }
    return c4 * 12.92;
  };
  var convertLrgbToRgb = ({ r: r2, g, b, alpha }, mode = "rgb") => {
    let res = {
      mode,
      r: fn2(r2),
      g: fn2(g),
      b: fn2(b)
    };
    if (alpha !== void 0)
      res.alpha = alpha;
    return res;
  };
  var convertLrgbToRgb_default = convertLrgbToRgb;

  // node_modules/culori/src/xyz65/convertXyz65ToRgb.js
  var convertXyz65ToRgb = ({ x, y, z, alpha }) => {
    let res = convertLrgbToRgb_default({
      r: x * 3.2404542 - y * 1.5371385 - 0.4985314 * z,
      g: x * -0.969266 + y * 1.8760108 + 0.041556 * z,
      b: x * 0.0556434 - y * 0.2040259 + 1.0572252 * z
    });
    if (alpha !== void 0) {
      res.alpha = alpha;
    }
    return res;
  };
  var convertXyz65ToRgb_default = convertXyz65ToRgb;

  // node_modules/culori/src/a98/definition.js
  var definition2 = {
    ...definition_default,
    mode: "a98",
    parse: ["a98-rgb"],
    serialize: "a98-rgb",
    fromMode: {
      rgb: (color) => convertXyz65ToA98_default(convertRgbToXyz65_default(color)),
      xyz65: convertXyz65ToA98_default
    },
    toMode: {
      rgb: (color) => convertXyz65ToRgb_default(convertA98ToXyz65_default(color)),
      xyz65: convertA98ToXyz65_default
    }
  };
  var definition_default2 = definition2;

  // node_modules/culori/src/util/normalizeHue.js
  var normalizeHue = (hue3) => (hue3 = hue3 % 360) < 0 ? hue3 + 360 : hue3;
  var normalizeHue_default = normalizeHue;

  // node_modules/culori/src/fixup/hue.js
  var hue2 = (hues, fn5) => {
    return hues.map((hue3, idx, arr) => {
      if (hue3 === void 0) {
        return hue3;
      }
      let normalized = normalizeHue_default(hue3);
      if (idx === 0 || hues[idx - 1] === void 0) {
        return normalized;
      }
      return fn5(normalized - normalizeHue_default(arr[idx - 1]));
    }).reduce((acc, curr) => {
      if (!acc.length || curr === void 0 || acc[acc.length - 1] === void 0) {
        acc.push(curr);
        return acc;
      }
      acc.push(curr + acc[acc.length - 1]);
      return acc;
    }, []);
  };
  var fixupHueShorter = (arr) => hue2(arr, (d) => Math.abs(d) <= 180 ? d : d - 360 * Math.sign(d));

  // node_modules/culori/src/cubehelix/constants.js
  var M = [-0.14861, 1.78277, -0.29227, -0.90649, 1.97294, 0];
  var degToRad = Math.PI / 180;
  var radToDeg = 180 / Math.PI;

  // node_modules/culori/src/cubehelix/convertRgbToCubehelix.js
  var DE = M[3] * M[4];
  var BE = M[1] * M[4];
  var BCAD = M[1] * M[2] - M[0] * M[3];
  var convertRgbToCubehelix = ({ r: r2, g, b, alpha }) => {
    let l = (BCAD * b + r2 * DE - g * BE) / (BCAD + DE - BE);
    let x = b - l;
    let y = (M[4] * (g - l) - M[2] * x) / M[3];
    let res = {
      mode: "cubehelix",
      l,
      s: l === 0 || l === 1 ? void 0 : Math.sqrt(x * x + y * y) / (M[4] * l * (1 - l))
    };
    if (res.s)
      res.h = Math.atan2(y, x) * radToDeg - 120;
    if (alpha !== void 0)
      res.alpha = alpha;
    return res;
  };
  var convertRgbToCubehelix_default = convertRgbToCubehelix;

  // node_modules/culori/src/cubehelix/convertCubehelixToRgb.js
  var convertCubehelixToRgb = ({ h, s: s2, l, alpha }) => {
    let res = { mode: "rgb" };
    h = (h === void 0 ? 0 : h + 120) * degToRad;
    let amp = s2 === void 0 ? 0 : s2 * l * (1 - l);
    let cosh = Math.cos(h);
    let sinh = Math.sin(h);
    res.r = l + amp * (M[0] * cosh + M[1] * sinh);
    res.g = l + amp * (M[2] * cosh + M[3] * sinh);
    res.b = l + amp * (M[4] * cosh + M[5] * sinh);
    if (alpha !== void 0)
      res.alpha = alpha;
    return res;
  };
  var convertCubehelixToRgb_default = convertCubehelixToRgb;

  // node_modules/culori/src/parse.js
  function parseColorSyntax(color) {
    const m = color.match(/^color\(\s*([a-z0-9-]+)\s*(.*?)\s*\)$/);
    if (!m) {
      return void 0;
    }
    const mode = colorProfiles[m[1]];
    if (!mode) {
      return void 0;
    }
    const res = { mode };
    const [cmp_string, alpha] = m[2].split(/\s*\/\s*/);
    let cm;
    if (alpha !== void 0) {
      cm = alpha.match(rx_num_per_none);
      if (!cm) {
        return void 0;
      }
      if (cm[1] !== void 0) {
        res.alpha = cm[1] / 100;
      } else if (cm[2] !== void 0) {
        res.alpha = +cm[2];
      }
    }
    const components = cmp_string.split(/\s+/);
    let channels = getMode(mode).channels;
    for (let i = 0, ch; i < channels.length; i++) {
      ch = channels[i];
      if (ch === "alpha") {
        continue;
      }
      if (i >= components.length || !components[i]) {
        res[ch] = 0;
        continue;
      }
      if (!(cm = components[i].match(rx_num_per_none))) {
        return void 0;
      }
      if (cm[1] !== void 0) {
        res[ch] = cm[1] / 100;
      } else if (cm[2] !== void 0) {
        res[ch] = +cm[2];
      }
    }
    return res;
  }
  var parse = (color) => {
    if (typeof color !== "string") {
      return void 0;
    }
    let result = void 0;
    let i = 0;
    let len = parsers.length;
    while (i < len) {
      if ((result = parsers[i++](color)) !== void 0) {
        return result;
      }
    }
    return parseColorSyntax(color);
  };
  var parse_default = parse;

  // node_modules/culori/src/_prepare.js
  var prepare = (color, mode) => color === void 0 ? void 0 : typeof color !== "object" ? parse_default(color) : color.mode !== void 0 ? color : mode ? { ...color, mode } : void 0;
  var prepare_default = prepare;

  // node_modules/culori/src/converter.js
  var converter = (target_mode = "rgb") => (color) => (color = prepare_default(color, target_mode)) !== void 0 ? color.mode === target_mode ? color : converters[color.mode][target_mode] ? converters[color.mode][target_mode](color) : target_mode === "rgb" ? converters[color.mode].rgb(color) : converters.rgb[target_mode](converters[color.mode].rgb(color)) : void 0;
  var converter_default = converter;

  // node_modules/culori/src/modes.js
  var converters = {};
  var modes = {};
  var parsers = [];
  var colorProfiles = {};
  var identity = (v) => v;
  var useMode = (definition27) => {
    converters[definition27.mode] = {
      ...converters[definition27.mode],
      ...definition27.toMode
    };
    Object.keys(definition27.fromMode || {}).forEach((k3) => {
      if (!converters[k3]) {
        converters[k3] = {};
      }
      converters[k3][definition27.mode] = definition27.fromMode[k3];
    });
    if (!definition27.ranges) {
      definition27.ranges = {};
    }
    if (!definition27.difference) {
      definition27.difference = {};
    }
    definition27.channels.forEach((channel) => {
      if (definition27.ranges[channel] === void 0) {
        definition27.ranges[channel] = [0, 1];
      }
      if (!definition27.interpolate[channel]) {
        throw new Error(`Missing interpolator for: ${channel}`);
      }
      if (typeof definition27.interpolate[channel] === "function") {
        definition27.interpolate[channel] = {
          use: definition27.interpolate[channel]
        };
      }
      if (!definition27.interpolate[channel].fixup) {
        definition27.interpolate[channel].fixup = identity;
      }
    });
    modes[definition27.mode] = definition27;
    (definition27.parse || []).forEach((parser) => {
      if (typeof parser === "function") {
        useParser(parser);
      } else if (typeof parser === "string") {
        colorProfiles[parser] = definition27.mode;
      }
    });
    return converter_default(definition27.mode);
  };
  var getMode = (mode) => modes[mode];
  var useParser = (parser) => {
    const idx = parsers.indexOf(parser);
    if (idx < 0) {
      parsers.push(parser);
    }
  };

  // node_modules/culori/src/difference.js
  var differenceHueSaturation = (std, smp) => {
    if (std.h === void 0 || smp.h === void 0 || !std.s || !smp.s) {
      return 0;
    }
    let std_h = normalizeHue_default(std.h);
    let smp_h = normalizeHue_default(smp.h);
    let dH = Math.sin((smp_h - std_h + 360) / 2 * Math.PI / 180);
    return 2 * Math.sqrt(std.s * smp.s) * dH;
  };
  var differenceHueNaive = (std, smp) => {
    if (std.h === void 0 || smp.h === void 0) {
      return 0;
    }
    let std_h = normalizeHue_default(std.h);
    let smp_h = normalizeHue_default(smp.h);
    if (Math.abs(smp_h - std_h) > 180) {
      return std_h - (smp_h - 360 * Math.sign(smp_h - std_h));
    }
    return smp_h - std_h;
  };
  var differenceHueChroma = (std, smp) => {
    if (std.h === void 0 || smp.h === void 0 || !std.c || !smp.c) {
      return 0;
    }
    let std_h = normalizeHue_default(std.h);
    let smp_h = normalizeHue_default(smp.h);
    let dH = Math.sin((smp_h - std_h + 360) / 2 * Math.PI / 180);
    return 2 * Math.sqrt(std.c * smp.c) * dH;
  };

  // node_modules/culori/src/average.js
  var averageAngle = (val) => {
    let sum = val.reduce((sum2, val2) => {
      if (val2 !== void 0) {
        let rad = val2 * Math.PI / 180;
        sum2.sin += Math.sin(rad);
        sum2.cos += Math.cos(rad);
      }
      return sum2;
    }, { sin: 0, cos: 0 });
    return Math.atan2(sum.sin, sum.cos) * 180 / Math.PI;
  };

  // node_modules/culori/src/cubehelix/definition.js
  var definition3 = {
    mode: "cubehelix",
    channels: ["h", "s", "l", "alpha"],
    parse: ["--cubehelix"],
    serialize: "--cubehelix",
    ranges: {
      h: [0, 360],
      s: [0, 4.614],
      l: [0, 1]
    },
    fromMode: {
      rgb: convertRgbToCubehelix_default
    },
    toMode: {
      rgb: convertCubehelixToRgb_default
    },
    interpolate: {
      h: {
        use: interpolatorLinear,
        fixup: fixupHueShorter
      },
      s: interpolatorLinear,
      l: interpolatorLinear,
      alpha: {
        use: interpolatorLinear,
        fixup: fixupAlpha
      }
    },
    difference: {
      h: differenceHueSaturation
    },
    average: {
      h: averageAngle
    }
  };
  var definition_default3 = definition3;

  // node_modules/culori/src/lch/convertLabToLch.js
  var convertLabToLch = ({ l, a, b, alpha }, mode = "lch") => {
    let c4 = Math.sqrt(a * a + b * b);
    let res = { mode, l, c: c4 };
    if (c4)
      res.h = normalizeHue_default(Math.atan2(b, a) * 180 / Math.PI);
    if (alpha !== void 0)
      res.alpha = alpha;
    return res;
  };
  var convertLabToLch_default = convertLabToLch;

  // node_modules/culori/src/lch/convertLchToLab.js
  var convertLchToLab = ({ l, c: c4, h, alpha }, mode = "lab") => {
    let res = {
      mode,
      l,
      a: c4 ? c4 * Math.cos(h / 180 * Math.PI) : 0,
      b: c4 ? c4 * Math.sin(h / 180 * Math.PI) : 0
    };
    if (alpha !== void 0)
      res.alpha = alpha;
    return res;
  };
  var convertLchToLab_default = convertLchToLab;

  // node_modules/culori/src/xyz65/constants.js
  var Xn = 0.95047;
  var Yn = 1;
  var Zn = 1.08883;
  var k = Math.pow(29, 3) / Math.pow(3, 3);
  var e = Math.pow(6, 3) / Math.pow(29, 3);

  // node_modules/culori/src/lab65/convertLab65ToXyz65.js
  var fn3 = (v) => Math.pow(v, 3) > e ? Math.pow(v, 3) : (116 * v - 16) / k;
  var convertLab65ToXyz65 = ({ l, a, b, alpha }) => {
    let fy = (l + 16) / 116;
    let fx = a / 500 + fy;
    let fz = fy - b / 200;
    let res = {
      mode: "xyz65",
      x: fn3(fx) * Xn,
      y: fn3(fy) * Yn,
      z: fn3(fz) * Zn
    };
    if (alpha !== void 0) {
      res.alpha = alpha;
    }
    return res;
  };
  var convertLab65ToXyz65_default = convertLab65ToXyz65;

  // node_modules/culori/src/lab65/convertLab65ToRgb.js
  var convertLab65ToRgb = (lab3) => convertXyz65ToRgb_default(convertLab65ToXyz65_default(lab3));
  var convertLab65ToRgb_default = convertLab65ToRgb;

  // node_modules/culori/src/lab65/convertXyz65ToLab65.js
  var f = (value) => value > e ? Math.cbrt(value) : (k * value + 16) / 116;
  var convertXyz65ToLab65 = ({ x, y, z, alpha }) => {
    let f0 = f(x / Xn);
    let f1 = f(y / Yn);
    let f22 = f(z / Zn);
    let res = {
      mode: "lab65",
      l: 116 * f1 - 16,
      a: 500 * (f0 - f1),
      b: 200 * (f1 - f22)
    };
    if (alpha !== void 0) {
      res.alpha = alpha;
    }
    return res;
  };
  var convertXyz65ToLab65_default = convertXyz65ToLab65;

  // node_modules/culori/src/lab65/convertRgbToLab65.js
  var convertRgbToLab65 = (rgb4) => {
    let res = convertXyz65ToLab65_default(convertRgbToXyz65_default(rgb4));
    if (rgb4.r === rgb4.b && rgb4.b === rgb4.g) {
      res.a = res.b = 0;
    }
    return res;
  };
  var convertRgbToLab65_default = convertRgbToLab65;

  // node_modules/culori/src/dlch/constants.js
  var kE = 1;
  var kCH = 1;
  var \u03B8 = 26 / 180 * Math.PI;
  var cos\u03B8 = Math.cos(\u03B8);
  var sin\u03B8 = Math.sin(\u03B8);
  var factor = 100 / Math.log(139 / 100);

  // node_modules/culori/src/dlch/convertDlchToLab65.js
  var convertDlchToLab65 = ({ l, c: c4, h, alpha }) => {
    let res = {
      mode: "lab65",
      l: (Math.exp(l * kE / factor) - 1) / 39e-4
    };
    if (h === void 0) {
      res.a = res.b = 0;
    } else {
      let G = (Math.exp(0.0435 * c4 * kCH * kE) - 1) / 0.075;
      let e3 = G * Math.cos(h / 180 * Math.PI - \u03B8);
      let f3 = G * Math.sin(h / 180 * Math.PI - \u03B8);
      res.a = e3 * cos\u03B8 - f3 / 0.83 * sin\u03B8;
      res.b = e3 * sin\u03B8 + f3 / 0.83 * cos\u03B8;
    }
    if (alpha !== void 0)
      res.alpha = alpha;
    return res;
  };
  var convertDlchToLab65_default = convertDlchToLab65;

  // node_modules/culori/src/dlch/convertLab65ToDlch.js
  var convertLab65ToDlch = ({ l, a, b, alpha }) => {
    let e3 = a * cos\u03B8 + b * sin\u03B8;
    let f3 = 0.83 * (b * cos\u03B8 - a * sin\u03B8);
    let G = Math.sqrt(e3 * e3 + f3 * f3);
    let res = {
      mode: "dlch",
      l: factor / kE * Math.log(1 + 39e-4 * l),
      c: Math.log(1 + 0.075 * G) / (0.0435 * kCH * kE)
    };
    if (res.c) {
      res.h = normalizeHue_default((Math.atan2(f3, e3) + \u03B8) / Math.PI * 180);
    }
    if (alpha !== void 0)
      res.alpha = alpha;
    return res;
  };
  var convertLab65ToDlch_default = convertLab65ToDlch;

  // node_modules/culori/src/dlab/definition.js
  var convertDlabToLab65 = (c4) => convertDlchToLab65_default(convertLabToLch_default(c4, "dlch"));
  var convertLab65ToDlab = (c4) => convertLchToLab_default(convertLab65ToDlch_default(c4), "dlab");
  var definition4 = {
    mode: "dlab",
    parse: ["--din99o-lab"],
    serialize: "--din99o-lab",
    toMode: {
      lab65: convertDlabToLab65,
      rgb: (c4) => convertLab65ToRgb_default(convertDlabToLab65(c4))
    },
    fromMode: {
      lab65: convertLab65ToDlab,
      rgb: (c4) => convertLab65ToDlab(convertRgbToLab65_default(c4))
    },
    channels: ["l", "a", "b", "alpha"],
    ranges: {
      l: [0, 100],
      a: [-40.09, 45.501],
      b: [-40.469, 44.344]
    },
    interpolate: {
      l: interpolatorLinear,
      a: interpolatorLinear,
      b: interpolatorLinear,
      alpha: {
        use: interpolatorLinear,
        fixup: fixupAlpha
      }
    }
  };
  var definition_default4 = definition4;

  // node_modules/culori/src/dlch/definition.js
  var definition5 = {
    mode: "dlch",
    parse: ["--din99o-lch"],
    serialize: "--din99o-lch",
    toMode: {
      lab65: convertDlchToLab65_default,
      dlab: (c4) => convertLchToLab_default(c4, "dlab"),
      rgb: (c4) => convertLab65ToRgb_default(convertDlchToLab65_default(c4))
    },
    fromMode: {
      lab65: convertLab65ToDlch_default,
      dlab: (c4) => convertLabToLch_default(c4, "dlch"),
      rgb: (c4) => convertLab65ToDlch_default(convertRgbToLab65_default(c4))
    },
    channels: ["l", "c", "h", "alpha"],
    ranges: {
      l: [0, 100],
      c: [0, 51.484],
      h: [0, 360]
    },
    interpolate: {
      l: interpolatorLinear,
      c: interpolatorLinear,
      h: {
        use: interpolatorLinear,
        fixup: fixupHueShorter
      },
      alpha: {
        use: interpolatorLinear,
        fixup: fixupAlpha
      }
    },
    difference: {
      h: differenceHueChroma
    },
    average: {
      h: averageAngle
    }
  };
  var definition_default5 = definition5;

  // node_modules/culori/src/hsi/convertHsiToRgb.js
  function convertHsiToRgb({ h, s: s2, i, alpha }) {
    h = normalizeHue_default(h);
    let f3 = Math.abs(h / 60 % 2 - 1);
    let res;
    switch (Math.floor(h / 60)) {
      case 0:
        res = {
          r: i * (1 + s2 * (3 / (2 - f3) - 1)),
          g: i * (1 + s2 * (3 * (1 - f3) / (2 - f3) - 1)),
          b: i * (1 - s2)
        };
        break;
      case 1:
        res = {
          r: i * (1 + s2 * (3 * (1 - f3) / (2 - f3) - 1)),
          g: i * (1 + s2 * (3 / (2 - f3) - 1)),
          b: i * (1 - s2)
        };
        break;
      case 2:
        res = {
          r: i * (1 - s2),
          g: i * (1 + s2 * (3 / (2 - f3) - 1)),
          b: i * (1 + s2 * (3 * (1 - f3) / (2 - f3) - 1))
        };
        break;
      case 3:
        res = {
          r: i * (1 - s2),
          g: i * (1 + s2 * (3 * (1 - f3) / (2 - f3) - 1)),
          b: i * (1 + s2 * (3 / (2 - f3) - 1))
        };
        break;
      case 4:
        res = {
          r: i * (1 + s2 * (3 * (1 - f3) / (2 - f3) - 1)),
          g: i * (1 - s2),
          b: i * (1 + s2 * (3 / (2 - f3) - 1))
        };
        break;
      case 5:
        res = {
          r: i * (1 + s2 * (3 / (2 - f3) - 1)),
          g: i * (1 - s2),
          b: i * (1 + s2 * (3 * (1 - f3) / (2 - f3) - 1))
        };
        break;
      default:
        res = { r: i * (1 - s2), g: i * (1 - s2), b: i * (1 - s2) };
    }
    res.mode = "rgb";
    if (alpha !== void 0)
      res.alpha = alpha;
    return res;
  }

  // node_modules/culori/src/hsi/convertRgbToHsi.js
  function convertRgbToHsi({ r: r2, g, b, alpha }) {
    let M2 = Math.max(r2, g, b), m = Math.min(r2, g, b);
    let res = {
      mode: "hsi",
      s: r2 + g + b === 0 ? 0 : 1 - 3 * m / (r2 + g + b),
      i: (r2 + g + b) / 3
    };
    if (M2 - m !== 0)
      res.h = (M2 === r2 ? (g - b) / (M2 - m) + (g < b) * 6 : M2 === g ? (b - r2) / (M2 - m) + 2 : (r2 - g) / (M2 - m) + 4) * 60;
    if (alpha !== void 0)
      res.alpha = alpha;
    return res;
  }

  // node_modules/culori/src/hsi/definition.js
  var definition6 = {
    mode: "hsi",
    toMode: {
      rgb: convertHsiToRgb
    },
    parse: ["--hsi"],
    serialize: "--hsi",
    fromMode: {
      rgb: convertRgbToHsi
    },
    channels: ["h", "s", "i", "alpha"],
    ranges: {
      h: [0, 360]
    },
    interpolate: {
      h: { use: interpolatorLinear, fixup: fixupHueShorter },
      s: interpolatorLinear,
      i: interpolatorLinear,
      alpha: { use: interpolatorLinear, fixup: fixupAlpha }
    },
    difference: {
      h: differenceHueSaturation
    },
    average: {
      h: averageAngle
    }
  };
  var definition_default6 = definition6;

  // node_modules/culori/src/hsl/convertHslToRgb.js
  function convertHslToRgb({ h, s: s2, l, alpha }) {
    h = normalizeHue_default(h);
    let m1 = l + s2 * (l < 0.5 ? l : 1 - l);
    let m2 = m1 - (m1 - l) * 2 * Math.abs(h / 60 % 2 - 1);
    let res;
    switch (Math.floor(h / 60)) {
      case 0:
        res = { r: m1, g: m2, b: 2 * l - m1 };
        break;
      case 1:
        res = { r: m2, g: m1, b: 2 * l - m1 };
        break;
      case 2:
        res = { r: 2 * l - m1, g: m1, b: m2 };
        break;
      case 3:
        res = { r: 2 * l - m1, g: m2, b: m1 };
        break;
      case 4:
        res = { r: m2, g: 2 * l - m1, b: m1 };
        break;
      case 5:
        res = { r: m1, g: 2 * l - m1, b: m2 };
        break;
      default:
        res = { r: 2 * l - m1, g: 2 * l - m1, b: 2 * l - m1 };
    }
    res.mode = "rgb";
    if (alpha !== void 0)
      res.alpha = alpha;
    return res;
  }

  // node_modules/culori/src/hsl/convertRgbToHsl.js
  function convertRgbToHsl({ r: r2, g, b, alpha }) {
    let M2 = Math.max(r2, g, b), m = Math.min(r2, g, b);
    let res = {
      mode: "hsl",
      s: M2 === m ? 0 : (M2 - m) / (1 - Math.abs(M2 + m - 1)),
      l: 0.5 * (M2 + m)
    };
    if (M2 - m !== 0)
      res.h = (M2 === r2 ? (g - b) / (M2 - m) + (g < b) * 6 : M2 === g ? (b - r2) / (M2 - m) + 2 : (r2 - g) / (M2 - m) + 4) * 60;
    if (alpha !== void 0)
      res.alpha = alpha;
    return res;
  }

  // node_modules/culori/src/util/hue.js
  var hueToDeg = (val, unit) => {
    switch (unit) {
      case "deg":
        return +val;
      case "rad":
        return val / Math.PI * 180;
      case "grad":
        return val / 10 * 9;
      case "turn":
        return val * 360;
    }
  };
  var hue_default = hueToDeg;

  // node_modules/culori/src/hsl/parseHsl.js
  var hsl_old = new RegExp(`^hsla?\\(\\s*${hue}${c}${per}${c}${per}\\s*(?:,\\s*${num_per}\\s*)?\\)$`);
  var hsl_new = new RegExp(`^hsla?\\(\\s*${hue_none}${s}${per_none}${s}${per_none}\\s*(?:\\/\\s*${num_per_none}\\s*)?\\)$`);
  var parseHsl = (color) => {
    let match = color.match(hsl_old) || color.match(hsl_new);
    if (!match)
      return;
    let res = { mode: "hsl" };
    if (match[3] !== void 0) {
      res.h = +match[3];
    } else if (match[1] !== void 0 && match[2] !== void 0) {
      res.h = hue_default(match[1], match[2]);
    }
    if (match[4] !== void 0) {
      res.s = Math.min(Math.max(0, match[4] / 100), 1);
    }
    if (match[5] !== void 0) {
      res.l = Math.min(Math.max(0, match[5] / 100), 1);
    }
    if (match[6] !== void 0) {
      res.alpha = match[6] / 100;
    } else if (match[7] !== void 0) {
      res.alpha = +match[7];
    }
    return res;
  };
  var parseHsl_default = parseHsl;

  // node_modules/culori/src/hsl/definition.js
  var definition7 = {
    mode: "hsl",
    toMode: {
      rgb: convertHslToRgb
    },
    fromMode: {
      rgb: convertRgbToHsl
    },
    channels: ["h", "s", "l", "alpha"],
    ranges: {
      h: [0, 360]
    },
    parse: [parseHsl_default],
    serialize: (c4) => `hsl(${c4.h || 0} ${c4.s !== void 0 ? c4.s * 100 + "%" : "none"} ${c4.l !== void 0 ? c4.l * 100 + "%" : "none"}${c4.alpha < 1 ? ` / ${c4.alpha}` : ""})`,
    interpolate: {
      h: { use: interpolatorLinear, fixup: fixupHueShorter },
      s: interpolatorLinear,
      l: interpolatorLinear,
      alpha: { use: interpolatorLinear, fixup: fixupAlpha }
    },
    difference: {
      h: differenceHueSaturation
    },
    average: {
      h: averageAngle
    }
  };
  var definition_default7 = definition7;

  // node_modules/culori/src/hsv/convertHsvToRgb.js
  function convertHsvToRgb({ h, s: s2, v, alpha }) {
    h = normalizeHue_default(h);
    let f3 = Math.abs(h / 60 % 2 - 1);
    let res;
    switch (Math.floor(h / 60)) {
      case 0:
        res = { r: v, g: v * (1 - s2 * f3), b: v * (1 - s2) };
        break;
      case 1:
        res = { r: v * (1 - s2 * f3), g: v, b: v * (1 - s2) };
        break;
      case 2:
        res = { r: v * (1 - s2), g: v, b: v * (1 - s2 * f3) };
        break;
      case 3:
        res = { r: v * (1 - s2), g: v * (1 - s2 * f3), b: v };
        break;
      case 4:
        res = { r: v * (1 - s2 * f3), g: v * (1 - s2), b: v };
        break;
      case 5:
        res = { r: v, g: v * (1 - s2), b: v * (1 - s2 * f3) };
        break;
      default:
        res = { r: v * (1 - s2), g: v * (1 - s2), b: v * (1 - s2) };
    }
    res.mode = "rgb";
    if (alpha !== void 0)
      res.alpha = alpha;
    return res;
  }

  // node_modules/culori/src/hsv/convertRgbToHsv.js
  function convertRgbToHsv({ r: r2, g, b, alpha }) {
    let M2 = Math.max(r2, g, b), m = Math.min(r2, g, b);
    let res = {
      mode: "hsv",
      s: M2 === 0 ? 0 : 1 - m / M2,
      v: M2
    };
    if (M2 - m !== 0)
      res.h = (M2 === r2 ? (g - b) / (M2 - m) + (g < b) * 6 : M2 === g ? (b - r2) / (M2 - m) + 2 : (r2 - g) / (M2 - m) + 4) * 60;
    if (alpha !== void 0)
      res.alpha = alpha;
    return res;
  }

  // node_modules/culori/src/hsv/definition.js
  var definition8 = {
    mode: "hsv",
    toMode: {
      rgb: convertHsvToRgb
    },
    parse: ["--hsv"],
    serialize: "--hsv",
    fromMode: {
      rgb: convertRgbToHsv
    },
    channels: ["h", "s", "v", "alpha"],
    ranges: {
      h: [0, 360]
    },
    interpolate: {
      h: { use: interpolatorLinear, fixup: fixupHueShorter },
      s: interpolatorLinear,
      v: interpolatorLinear,
      alpha: { use: interpolatorLinear, fixup: fixupAlpha }
    },
    difference: {
      h: differenceHueSaturation
    },
    average: {
      h: averageAngle
    }
  };
  var definition_default8 = definition8;

  // node_modules/culori/src/hwb/convertHwbToRgb.js
  function convertHwbToRgb({ h, w, b, alpha }) {
    if (w + b > 1) {
      let s2 = w + b;
      w /= s2;
      b /= s2;
    }
    return convertHsvToRgb({
      h,
      s: b === 1 ? 1 : 1 - w / (1 - b),
      v: 1 - b,
      alpha
    });
  }

  // node_modules/culori/src/hwb/convertRgbToHwb.js
  function convertRgbToHwb(rgba) {
    let hsv2 = convertRgbToHsv(rgba);
    if (hsv2 === void 0)
      return void 0;
    let res = {
      mode: "hwb",
      w: (1 - hsv2.s) * hsv2.v,
      b: 1 - hsv2.v
    };
    if (hsv2.h !== void 0)
      res.h = hsv2.h;
    if (hsv2.alpha !== void 0)
      res.alpha = hsv2.alpha;
    return res;
  }

  // node_modules/culori/src/hwb/parseHwb.js
  var hwb = new RegExp(`^hwb\\(\\s*${hue_none}${s}${per_none}${s}${per_none}\\s*(?:\\/\\s*${num_per_none}\\s*)?\\)$`);
  var parseHwb = (color) => {
    let match = color.match(hwb);
    if (!match) {
      return void 0;
    }
    let res = { mode: "hwb" };
    if (match[3] !== void 0) {
      res.h = +match[3];
    } else if (match[1] !== void 0 && match[2] !== void 0) {
      res.h = hue_default(match[1], match[2]);
    }
    if (match[4] !== void 0) {
      res.w = match[4] / 100;
    }
    if (match[5] !== void 0) {
      res.b = match[5] / 100;
    }
    if (match[6] !== void 0) {
      res.alpha = match[6] / 100;
    } else if (match[7] !== void 0) {
      res.alpha = +match[7];
    }
    return res;
  };
  var parseHwb_default = parseHwb;

  // node_modules/culori/src/hwb/definition.js
  var definition9 = {
    mode: "hwb",
    toMode: {
      rgb: convertHwbToRgb
    },
    fromMode: {
      rgb: convertRgbToHwb
    },
    channels: ["h", "w", "b", "alpha"],
    ranges: {
      h: [0, 360]
    },
    parse: [parseHwb_default],
    serialize: (c4) => `hwb(${c4.h || 0} ${c4.w * 100}% ${c4.b * 100}%${c4.alpha < 1 ? ` / ${c4.alpha}` : ""})`,
    interpolate: {
      h: { use: interpolatorLinear, fixup: fixupHueShorter },
      w: interpolatorLinear,
      b: interpolatorLinear,
      alpha: { use: interpolatorLinear, fixup: fixupAlpha }
    },
    difference: {
      h: differenceHueNaive
    },
    average: {
      h: averageAngle
    }
  };
  var definition_default9 = definition9;

  // node_modules/culori/src/jab/convertXyz65ToJab.js
  var n = 0.1593017578125;
  var p = 134.03437499999998;
  var c1 = 0.8359375;
  var c2 = 18.8515625;
  var c3 = 18.6875;
  var d0 = 16295499532821565e-27;
  var pq = (v) => {
    let vn3 = Math.pow(v / 1e4, n);
    return Math.pow((c1 + c2 * vn3) / (1 + c3 * vn3), p) || 0;
  };
  var abs = (v) => Math.max(v * 203, 0);
  var convertXyz65ToJab = ({ x, y, z, alpha }) => {
    x = abs(x);
    y = abs(y);
    z = abs(z);
    let xp = 1.15 * x - 0.15 * z;
    let yp = 0.66 * y + 0.34 * x;
    let l = pq(0.41478972 * xp + 0.579999 * yp + 0.014648 * z);
    let m = pq(-0.20151 * xp + 1.120649 * yp + 0.0531008 * z);
    let s2 = pq(-0.0166008 * xp + 0.2648 * yp + 0.6684799 * z);
    let i = (l + m) / 2;
    let res = {
      mode: "jab",
      j: 0.44 * i / (1 - 0.56 * i) - d0,
      a: 3.524 * l - 4.066708 * m + 0.542708 * s2,
      b: 0.199076 * l + 1.096799 * m - 1.295875 * s2
    };
    if (alpha !== void 0) {
      res.alpha = alpha;
    }
    return res;
  };
  var convertXyz65ToJab_default = convertXyz65ToJab;

  // node_modules/culori/src/jab/convertJabToXyz65.js
  var n2 = 0.1593017578125;
  var p2 = 134.03437499999998;
  var c12 = 0.8359375;
  var c22 = 18.8515625;
  var c32 = 18.6875;
  var d02 = 16295499532821565e-27;
  var pq_inv = (v) => {
    let vp = Math.pow(v, 1 / p2);
    return 1e4 * Math.pow((c12 - vp) / (c32 * vp - c22), 1 / n2) || 0;
  };
  var rel = (v) => v / 203;
  var convertJabToXyz65 = ({ j, a, b, alpha }) => {
    let i = (j + d02) / (0.44 + 0.56 * (j + d02));
    let l = pq_inv(i + 0.13860504 * a + 0.058047316 * b);
    let m = pq_inv(i - 0.13860504 * a - 0.058047316 * b);
    let s2 = pq_inv(i - 0.096019242 * a - 0.8118919 * b);
    let res = {
      mode: "xyz65",
      x: rel(1.661373024652174 * l - 0.914523081304348 * m + 0.23136208173913045 * s2),
      y: rel(-0.3250758611844533 * l + 1.571847026732543 * m - 0.21825383453227928 * s2),
      z: rel(-0.090982811 * l - 0.31272829 * m + 1.5227666 * s2)
    };
    if (alpha !== void 0) {
      res.alpha = alpha;
    }
    return res;
  };
  var convertJabToXyz65_default = convertJabToXyz65;

  // node_modules/culori/src/jab/convertRgbToJab.js
  var convertRgbToJab = (rgb4) => {
    let res = convertXyz65ToJab_default(convertRgbToXyz65_default(rgb4));
    if (rgb4.r === rgb4.b && rgb4.b === rgb4.g) {
      res.a = res.b = 0;
    }
    return res;
  };
  var convertRgbToJab_default = convertRgbToJab;

  // node_modules/culori/src/jab/convertJabToRgb.js
  var convertJabToRgb = (color) => convertXyz65ToRgb_default(convertJabToXyz65_default(color));
  var convertJabToRgb_default = convertJabToRgb;

  // node_modules/culori/src/jab/definition.js
  var definition10 = {
    mode: "jab",
    channels: ["j", "a", "b", "alpha"],
    parse: ["--jzazbz"],
    serialize: "--jzazbz",
    fromMode: {
      rgb: convertRgbToJab_default,
      xyz65: convertXyz65ToJab_default
    },
    toMode: {
      rgb: convertJabToRgb_default,
      xyz65: convertJabToXyz65_default
    },
    ranges: {
      j: [0, 0.222],
      a: [-0.109, 0.129],
      b: [-0.185, 0.134]
    },
    interpolate: {
      j: interpolatorLinear,
      a: interpolatorLinear,
      b: interpolatorLinear,
      alpha: { use: interpolatorLinear, fixup: fixupAlpha }
    }
  };
  var definition_default10 = definition10;

  // node_modules/culori/src/jch/convertJabToJch.js
  var convertJabToJch = ({ j, a, b, alpha }) => {
    let c4 = Math.sqrt(a * a + b * b);
    let res = {
      mode: "jch",
      j,
      c: c4
    };
    if (c4) {
      res.h = normalizeHue_default(Math.atan2(b, a) * 180 / Math.PI);
    }
    if (alpha !== void 0) {
      res.alpha = alpha;
    }
    return res;
  };
  var convertJabToJch_default = convertJabToJch;

  // node_modules/culori/src/jch/convertJchToJab.js
  var convertJchToJab = ({ j, c: c4, h, alpha }) => {
    let res = {
      mode: "jab",
      j,
      a: c4 ? c4 * Math.cos(h / 180 * Math.PI) : 0,
      b: c4 ? c4 * Math.sin(h / 180 * Math.PI) : 0
    };
    if (alpha !== void 0)
      res.alpha = alpha;
    return res;
  };
  var convertJchToJab_default = convertJchToJab;

  // node_modules/culori/src/jch/definition.js
  var definition11 = {
    mode: "jch",
    parse: ["--jzczhz"],
    serialize: "--jzczhz",
    toMode: {
      jab: convertJchToJab_default,
      rgb: (c4) => convertJabToRgb_default(convertJchToJab_default(c4))
    },
    fromMode: {
      rgb: (c4) => convertJabToJch_default(convertRgbToJab_default(c4)),
      jab: convertJabToJch_default
    },
    channels: ["j", "c", "h", "alpha"],
    ranges: {
      j: [0, 0.221],
      c: [0, 0.19],
      h: [0, 360]
    },
    interpolate: {
      h: { use: interpolatorLinear, fixup: fixupHueShorter },
      c: interpolatorLinear,
      j: interpolatorLinear,
      alpha: { use: interpolatorLinear, fixup: fixupAlpha }
    },
    difference: {
      h: differenceHueChroma
    },
    average: {
      h: averageAngle
    }
  };
  var definition_default11 = definition11;

  // node_modules/culori/src/xyz50/constants.js
  var Xn2 = 0.96422;
  var Yn2 = 1;
  var Zn2 = 0.82521;
  var k2 = Math.pow(29, 3) / Math.pow(3, 3);
  var e2 = Math.pow(6, 3) / Math.pow(29, 3);

  // node_modules/culori/src/lab/convertLabToXyz50.js
  var fn4 = (v) => Math.pow(v, 3) > e2 ? Math.pow(v, 3) : (116 * v - 16) / k2;
  var convertLabToXyz50 = ({ l, a, b, alpha }) => {
    let fy = (l + 16) / 116;
    let fx = a / 500 + fy;
    let fz = fy - b / 200;
    let res = {
      mode: "xyz50",
      x: fn4(fx) * Xn2,
      y: fn4(fy) * Yn2,
      z: fn4(fz) * Zn2
    };
    if (alpha !== void 0) {
      res.alpha = alpha;
    }
    return res;
  };
  var convertLabToXyz50_default = convertLabToXyz50;

  // node_modules/culori/src/xyz50/convertXyz50ToRgb.js
  var convertXyz50ToRgb = ({ x, y, z, alpha }) => {
    let res = convertLrgbToRgb_default({
      r: x * 3.1338561 - y * 1.6168667 - 0.4906146 * z,
      g: x * -0.9787684 + y * 1.9161415 + 0.033454 * z,
      b: x * 0.0719453 - y * 0.2289914 + 1.4052427 * z
    });
    if (alpha !== void 0) {
      res.alpha = alpha;
    }
    return res;
  };
  var convertXyz50ToRgb_default = convertXyz50ToRgb;

  // node_modules/culori/src/lab/convertLabToRgb.js
  var convertLabToRgb = (lab3) => convertXyz50ToRgb_default(convertLabToXyz50_default(lab3));
  var convertLabToRgb_default = convertLabToRgb;

  // node_modules/culori/src/xyz50/convertRgbToXyz50.js
  var convertRgbToXyz50 = (rgb4) => {
    let { r: r2, g, b, alpha } = convertRgbToLrgb_default(rgb4);
    let res = {
      mode: "xyz50",
      x: 0.4360747 * r2 + 0.3850649 * g + 0.1430804 * b,
      y: 0.2225045 * r2 + 0.7168786 * g + 0.0606169 * b,
      z: 0.0139322 * r2 + 0.0971045 * g + 0.7141733 * b
    };
    if (alpha !== void 0) {
      res.alpha = alpha;
    }
    return res;
  };
  var convertRgbToXyz50_default = convertRgbToXyz50;

  // node_modules/culori/src/lab/convertXyz50ToLab.js
  var f2 = (value) => value > e2 ? Math.cbrt(value) : (k2 * value + 16) / 116;
  var convertXyz50ToLab = ({ x, y, z, alpha }) => {
    let f0 = f2(x / Xn2);
    let f1 = f2(y / Yn2);
    let f22 = f2(z / Zn2);
    let res = {
      mode: "lab",
      l: 116 * f1 - 16,
      a: 500 * (f0 - f1),
      b: 200 * (f1 - f22)
    };
    if (alpha !== void 0) {
      res.alpha = alpha;
    }
    return res;
  };
  var convertXyz50ToLab_default = convertXyz50ToLab;

  // node_modules/culori/src/lab/convertRgbToLab.js
  var convertRgbToLab = (rgb4) => {
    let res = convertXyz50ToLab_default(convertRgbToXyz50_default(rgb4));
    if (rgb4.r === rgb4.b && rgb4.b === rgb4.g) {
      res.a = res.b = 0;
    }
    return res;
  };
  var convertRgbToLab_default = convertRgbToLab;

  // node_modules/culori/src/lab/parseLab.js
  var lab = new RegExp(`^lab\\(\\s*${per_none}${s}${num_none}${s}${num_none}\\s*(?:\\/\\s*${num_per_none}\\s*)?\\)$`);
  var parseLab = (color) => {
    let match = color.match(lab);
    if (!match) {
      return void 0;
    }
    let res = { mode: "lab" };
    if (match[1] !== void 0) {
      res.l = +match[1];
    }
    if (match[2] !== void 0) {
      res.a = +match[2];
    }
    if (match[3] !== void 0) {
      res.b = +match[3];
    }
    if (match[4] !== void 0) {
      res.alpha = match[4] / 100;
    } else if (match[5] !== void 0) {
      res.alpha = +match[5];
    }
    return res;
  };
  var parseLab_default = parseLab;

  // node_modules/culori/src/lab/definition.js
  var definition12 = {
    mode: "lab",
    toMode: {
      xyz50: convertLabToXyz50_default,
      rgb: convertLabToRgb_default
    },
    fromMode: {
      xyz50: convertXyz50ToLab_default,
      rgb: convertRgbToLab_default
    },
    channels: ["l", "a", "b", "alpha"],
    ranges: {
      l: [0, 100],
      a: [-79.287, 93.55],
      b: [-112.029, 93.388]
    },
    parse: [parseLab_default],
    serialize: (c4) => `lab(${c4.l !== void 0 ? c4.l + "%" : "none"} ${c4.a !== void 0 ? c4.a : "none"} ${c4.b !== void 0 ? c4.b : "none"}${c4.alpha < 1 ? ` / ${c4.alpha}` : ""})`,
    interpolate: {
      l: interpolatorLinear,
      a: interpolatorLinear,
      b: interpolatorLinear,
      alpha: { use: interpolatorLinear, fixup: fixupAlpha }
    }
  };
  var definition_default12 = definition12;

  // node_modules/culori/src/lab65/definition.js
  var definition13 = {
    ...definition_default12,
    mode: "lab65",
    parse: ["--lab-d65"],
    serialize: "--lab-d65",
    toMode: {
      xyz65: convertLab65ToXyz65_default,
      rgb: convertLab65ToRgb_default
    },
    fromMode: {
      xyz65: convertXyz65ToLab65_default,
      rgb: convertRgbToLab65_default
    },
    ranges: {
      l: [0, 100],
      a: [-86.182, 98.234],
      b: [-107.86, 94.477]
    }
  };
  var definition_default13 = definition13;

  // node_modules/culori/src/lch/parseLch.js
  var lch = new RegExp(`^lch\\(\\s*${per_none}${s}${num_none}${s}${hue_none}\\s*(?:\\/\\s*${num_per_none}\\s*)?\\)$`);
  var parseLch = (color) => {
    let match = color.match(lch);
    if (!match) {
      return void 0;
    }
    let res = { mode: "lch" };
    if (match[1] !== void 0) {
      res.l = +match[1];
    }
    if (match[2] !== void 0) {
      res.c = Math.max(0, +match[2]);
    }
    if (match[5] !== void 0) {
      res.h = +match[5];
    } else if (match[3] !== void 0 && match[4] !== void 0) {
      res.h = hue_default(match[3], match[4]);
    }
    if (match[6] !== void 0) {
      res.alpha = match[6] / 100;
    } else if (match[7] !== void 0) {
      res.alpha = +match[7];
    }
    return res;
  };
  var parseLch_default = parseLch;

  // node_modules/culori/src/lch/definition.js
  var definition14 = {
    mode: "lch",
    toMode: {
      lab: convertLchToLab_default,
      rgb: (c4) => convertLabToRgb_default(convertLchToLab_default(c4))
    },
    fromMode: {
      rgb: (c4) => convertLabToLch_default(convertRgbToLab_default(c4)),
      lab: convertLabToLch_default
    },
    channels: ["l", "c", "h", "alpha"],
    ranges: {
      l: [0, 100],
      c: [0, 131.207],
      h: [0, 360]
    },
    parse: [parseLch_default],
    serialize: (c4) => `lch(${c4.l !== void 0 ? c4.l + "%" : "none"} ${c4.c !== void 0 ? c4.c : "none"} ${c4.h || 0}${c4.alpha < 1 ? ` / ${c4.alpha}` : ""})`,
    interpolate: {
      h: { use: interpolatorLinear, fixup: fixupHueShorter },
      c: interpolatorLinear,
      l: interpolatorLinear,
      alpha: { use: interpolatorLinear, fixup: fixupAlpha }
    },
    difference: {
      h: differenceHueChroma
    },
    average: {
      h: averageAngle
    }
  };
  var definition_default14 = definition14;

  // node_modules/culori/src/lch65/definition.js
  var definition15 = {
    ...definition_default14,
    mode: "lch65",
    parse: ["--lch-d65"],
    serialize: "--lch-d65",
    toMode: {
      lab65: (c4) => convertLchToLab_default(c4, "lab65"),
      rgb: (c4) => convertLab65ToRgb_default(convertLchToLab_default(c4, "lab65"))
    },
    fromMode: {
      rgb: (c4) => convertLabToLch_default(convertRgbToLab65_default(c4), "lch65"),
      lab65: (c4) => convertLabToLch_default(c4, "lch65")
    },
    ranges: {
      l: [0, 100],
      c: [0, 133.807],
      h: [0, 360]
    }
  };
  var definition_default15 = definition15;

  // node_modules/culori/src/lchuv/convertLuvToLchuv.js
  var convertLuvToLchuv = ({ l, u, v, alpha }) => {
    let c4 = Math.sqrt(u * u + v * v);
    let res = {
      mode: "lchuv",
      l,
      c: c4
    };
    if (c4) {
      res.h = normalizeHue_default(Math.atan2(v, u) * 180 / Math.PI);
    }
    if (alpha !== void 0) {
      res.alpha = alpha;
    }
    return res;
  };
  var convertLuvToLchuv_default = convertLuvToLchuv;

  // node_modules/culori/src/lchuv/convertLchuvToLuv.js
  var convertLchuvToLuv = ({ l, c: c4, h, alpha }) => {
    let res = {
      mode: "luv",
      l,
      u: c4 ? c4 * Math.cos(h / 180 * Math.PI) : 0,
      v: c4 ? c4 * Math.sin(h / 180 * Math.PI) : 0
    };
    if (alpha !== void 0) {
      res.alpha = alpha;
    }
    return res;
  };
  var convertLchuvToLuv_default = convertLchuvToLuv;

  // node_modules/culori/src/luv/convertXyz50ToLuv.js
  var u_fn = (x, y, z) => 4 * x / (x + 15 * y + 3 * z);
  var v_fn = (x, y, z) => 9 * y / (x + 15 * y + 3 * z);
  var un = u_fn(Xn2, Yn2, Zn2);
  var vn = v_fn(Xn2, Yn2, Zn2);
  var l_fn = (value) => value <= e2 ? k2 * value : 116 * Math.cbrt(value) - 16;
  var convertXyz50ToLuv = ({ x, y, z, alpha }) => {
    let l = l_fn(y / Yn2);
    let u = u_fn(x, y, z);
    let v = v_fn(x, y, z);
    if (!isFinite(u) || !isFinite(v)) {
      l = u = v = 0;
    } else {
      u = 13 * l * (u - un);
      v = 13 * l * (v - vn);
    }
    let res = {
      mode: "luv",
      l,
      u,
      v
    };
    if (alpha !== void 0) {
      res.alpha = alpha;
    }
    return res;
  };
  var convertXyz50ToLuv_default = convertXyz50ToLuv;

  // node_modules/culori/src/luv/convertLuvToXyz50.js
  var u_fn2 = (x, y, z) => 4 * x / (x + 15 * y + 3 * z);
  var v_fn2 = (x, y, z) => 9 * y / (x + 15 * y + 3 * z);
  var un2 = u_fn2(Xn2, Yn2, Zn2);
  var vn2 = v_fn2(Xn2, Yn2, Zn2);
  var convertLuvToXyz50 = ({ l, u, v, alpha }) => {
    let up = u / (13 * l) + un2;
    let vp = v / (13 * l) + vn2;
    let y = Yn2 * (l <= 8 ? l / k2 : Math.pow((l + 16) / 116, 3));
    let x = y * (9 * up) / (4 * vp);
    let z = y * (12 - 3 * up - 20 * vp) / (4 * vp);
    let res = { mode: "xyz50", x, y, z };
    if (alpha !== void 0) {
      res.alpha = alpha;
    }
    return res;
  };
  var convertLuvToXyz50_default = convertLuvToXyz50;

  // node_modules/culori/src/lchuv/definition.js
  var convertRgbToLchuv = (rgb4) => convertLuvToLchuv_default(convertXyz50ToLuv_default(convertRgbToXyz50_default(rgb4)));
  var convertLchuvToRgb = (lchuv2) => convertXyz50ToRgb_default(convertLuvToXyz50_default(convertLchuvToLuv_default(lchuv2)));
  var definition16 = {
    mode: "lchuv",
    toMode: {
      luv: convertLchuvToLuv_default,
      rgb: convertLchuvToRgb
    },
    fromMode: {
      rgb: convertRgbToLchuv,
      luv: convertLuvToLchuv_default
    },
    channels: ["l", "c", "h", "alpha"],
    parse: ["--lchuv"],
    serialize: "--lchuv",
    ranges: {
      l: [0, 100],
      c: [0, 176.956],
      h: [0, 360]
    },
    interpolate: {
      h: { use: interpolatorLinear, fixup: fixupHueShorter },
      c: interpolatorLinear,
      l: interpolatorLinear,
      alpha: { use: interpolatorLinear, fixup: fixupAlpha }
    },
    difference: {
      h: differenceHueChroma
    },
    average: {
      h: averageAngle
    }
  };
  var definition_default16 = definition16;

  // node_modules/culori/src/lrgb/definition.js
  var definition17 = {
    ...definition_default,
    mode: "lrgb",
    toMode: {
      rgb: convertLrgbToRgb_default
    },
    fromMode: {
      rgb: convertRgbToLrgb_default
    },
    parse: ["--srgb-linear"],
    serialize: "--srgb-linear"
  };
  var definition_default17 = definition17;

  // node_modules/culori/src/luv/definition.js
  var definition18 = {
    mode: "luv",
    toMode: {
      xyz50: convertLuvToXyz50_default,
      rgb: (luv2) => convertXyz50ToRgb_default(convertLuvToXyz50_default(luv2))
    },
    fromMode: {
      xyz50: convertXyz50ToLuv_default,
      rgb: (rgb4) => convertXyz50ToLuv_default(convertRgbToXyz50_default(rgb4))
    },
    channels: ["l", "u", "v", "alpha"],
    parse: ["--luv"],
    serialize: "--luv",
    ranges: {
      l: [0, 100],
      u: [-84.936, 175.042],
      v: [-125.882, 87.243]
    },
    interpolate: {
      l: interpolatorLinear,
      u: interpolatorLinear,
      v: interpolatorLinear,
      alpha: { use: interpolatorLinear, fixup: fixupAlpha }
    }
  };
  var definition_default18 = definition18;

  // node_modules/culori/src/oklab/convertLrgbToOklab.js
  var convertLrgbToOklab = ({ r: r2, g, b, alpha }) => {
    let L = Math.cbrt(0.4122214708 * r2 + 0.5363325363 * g + 0.0514459929 * b);
    let M2 = Math.cbrt(0.2119034982 * r2 + 0.6806995451 * g + 0.1073969566 * b);
    let S = Math.cbrt(0.0883024619 * r2 + 0.2817188376 * g + 0.6299787005 * b);
    let res = {
      mode: "oklab",
      l: 0.2104542553 * L + 0.793617785 * M2 - 0.0040720468 * S,
      a: 1.9779984951 * L - 2.428592205 * M2 + 0.4505937099 * S,
      b: 0.0259040371 * L + 0.7827717662 * M2 - 0.808675766 * S
    };
    if (alpha !== void 0) {
      res.alpha = alpha;
    }
    return res;
  };
  var convertLrgbToOklab_default = convertLrgbToOklab;

  // node_modules/culori/src/oklab/convertRgbToOklab.js
  var convertRgbToOklab = (rgb4) => {
    let res = convertLrgbToOklab_default(convertRgbToLrgb_default(rgb4));
    if (rgb4.r === rgb4.b && rgb4.b === rgb4.g) {
      res.a = res.b = 0;
    }
    return res;
  };
  var convertRgbToOklab_default = convertRgbToOklab;

  // node_modules/culori/src/oklab/convertOklabToLrgb.js
  var convertOklabToLrgb = ({ l, a, b, alpha }) => {
    let L = Math.pow(l + 0.3963377774 * a + 0.2158037573 * b, 3);
    let M2 = Math.pow(l - 0.1055613458 * a - 0.0638541728 * b, 3);
    let S = Math.pow(l - 0.0894841775 * a - 1.291485548 * b, 3);
    let res = {
      mode: "lrgb",
      r: 4.0767416621 * L - 3.3077115913 * M2 + 0.2309699292 * S,
      g: -1.2684380046 * L + 2.6097574011 * M2 - 0.3413193965 * S,
      b: -0.0041960863 * L - 0.7034186147 * M2 + 1.707614701 * S
    };
    if (alpha !== void 0) {
      res.alpha = alpha;
    }
    return res;
  };
  var convertOklabToLrgb_default = convertOklabToLrgb;

  // node_modules/culori/src/oklab/convertOklabToRgb.js
  var convertOklabToRgb = (c4) => convertLrgbToRgb_default(convertOklabToLrgb_default(c4));
  var convertOklabToRgb_default = convertOklabToRgb;

  // node_modules/culori/src/okhsl/helpers.js
  function toe(x) {
    const k_1 = 0.206;
    const k_2 = 0.03;
    const k_3 = (1 + k_1) / (1 + k_2);
    return 0.5 * (k_3 * x - k_1 + Math.sqrt((k_3 * x - k_1) * (k_3 * x - k_1) + 4 * k_2 * k_3 * x));
  }
  function toe_inv(x) {
    const k_1 = 0.206;
    const k_2 = 0.03;
    const k_3 = (1 + k_1) / (1 + k_2);
    return (x * x + k_1 * x) / (k_3 * (x + k_2));
  }
  function compute_max_saturation(a, b) {
    let k0, k1, k22, k3, k4, wl, wm, ws;
    if (-1.88170328 * a - 0.80936493 * b > 1) {
      k0 = 1.19086277;
      k1 = 1.76576728;
      k22 = 0.59662641;
      k3 = 0.75515197;
      k4 = 0.56771245;
      wl = 4.0767416621;
      wm = -3.3077115913;
      ws = 0.2309699292;
    } else if (1.81444104 * a - 1.19445276 * b > 1) {
      k0 = 0.73956515;
      k1 = -0.45954404;
      k22 = 0.08285427;
      k3 = 0.1254107;
      k4 = 0.14503204;
      wl = -1.2684380046;
      wm = 2.6097574011;
      ws = -0.3413193965;
    } else {
      k0 = 1.35733652;
      k1 = -915799e-8;
      k22 = -1.1513021;
      k3 = -0.50559606;
      k4 = 692167e-8;
      wl = -0.0041960863;
      wm = -0.7034186147;
      ws = 1.707614701;
    }
    let S = k0 + k1 * a + k22 * b + k3 * a * a + k4 * a * b;
    let k_l = 0.3963377774 * a + 0.2158037573 * b;
    let k_m = -0.1055613458 * a - 0.0638541728 * b;
    let k_s = -0.0894841775 * a - 1.291485548 * b;
    {
      let l_ = 1 + S * k_l;
      let m_ = 1 + S * k_m;
      let s_ = 1 + S * k_s;
      let l = l_ * l_ * l_;
      let m = m_ * m_ * m_;
      let s2 = s_ * s_ * s_;
      let l_dS = 3 * k_l * l_ * l_;
      let m_dS = 3 * k_m * m_ * m_;
      let s_dS = 3 * k_s * s_ * s_;
      let l_dS2 = 6 * k_l * k_l * l_;
      let m_dS2 = 6 * k_m * k_m * m_;
      let s_dS2 = 6 * k_s * k_s * s_;
      let f3 = wl * l + wm * m + ws * s2;
      let f1 = wl * l_dS + wm * m_dS + ws * s_dS;
      let f22 = wl * l_dS2 + wm * m_dS2 + ws * s_dS2;
      S = S - f3 * f1 / (f1 * f1 - 0.5 * f3 * f22);
    }
    return S;
  }
  function find_cusp(a, b) {
    let S_cusp = compute_max_saturation(a, b);
    let rgb4 = convertOklabToLrgb_default({ l: 1, a: S_cusp * a, b: S_cusp * b });
    let L_cusp = Math.cbrt(1 / Math.max(rgb4.r, rgb4.g, rgb4.b));
    let C_cusp = L_cusp * S_cusp;
    return [L_cusp, C_cusp];
  }
  function find_gamut_intersection(a, b, L1, C1, L0, cusp = null) {
    if (!cusp) {
      cusp = find_cusp(a, b);
    }
    let t;
    if ((L1 - L0) * cusp[1] - (cusp[0] - L0) * C1 <= 0) {
      t = cusp[1] * L0 / (C1 * cusp[0] + cusp[1] * (L0 - L1));
    } else {
      t = cusp[1] * (L0 - 1) / (C1 * (cusp[0] - 1) + cusp[1] * (L0 - L1));
      {
        let dL = L1 - L0;
        let dC = C1;
        let k_l = 0.3963377774 * a + 0.2158037573 * b;
        let k_m = -0.1055613458 * a - 0.0638541728 * b;
        let k_s = -0.0894841775 * a - 1.291485548 * b;
        let l_dt = dL + dC * k_l;
        let m_dt = dL + dC * k_m;
        let s_dt = dL + dC * k_s;
        {
          let L = L0 * (1 - t) + t * L1;
          let C = t * C1;
          let l_ = L + C * k_l;
          let m_ = L + C * k_m;
          let s_ = L + C * k_s;
          let l = l_ * l_ * l_;
          let m = m_ * m_ * m_;
          let s2 = s_ * s_ * s_;
          let ldt = 3 * l_dt * l_ * l_;
          let mdt = 3 * m_dt * m_ * m_;
          let sdt = 3 * s_dt * s_ * s_;
          let ldt2 = 6 * l_dt * l_dt * l_;
          let mdt2 = 6 * m_dt * m_dt * m_;
          let sdt2 = 6 * s_dt * s_dt * s_;
          let r2 = 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s2 - 1;
          let r1 = 4.0767416621 * ldt - 3.3077115913 * mdt + 0.2309699292 * sdt;
          let r22 = 4.0767416621 * ldt2 - 3.3077115913 * mdt2 + 0.2309699292 * sdt2;
          let u_r = r1 / (r1 * r1 - 0.5 * r2 * r22);
          let t_r = -r2 * u_r;
          let g = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s2 - 1;
          let g1 = -1.2684380046 * ldt + 2.6097574011 * mdt - 0.3413193965 * sdt;
          let g2 = -1.2684380046 * ldt2 + 2.6097574011 * mdt2 - 0.3413193965 * sdt2;
          let u_g = g1 / (g1 * g1 - 0.5 * g * g2);
          let t_g = -g * u_g;
          let b2 = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s2 - 1;
          let b1 = -0.0041960863 * ldt - 0.7034186147 * mdt + 1.707614701 * sdt;
          let b22 = -0.0041960863 * ldt2 - 0.7034186147 * mdt2 + 1.707614701 * sdt2;
          let u_b = b1 / (b1 * b1 - 0.5 * b2 * b22);
          let t_b = -b2 * u_b;
          t_r = u_r >= 0 ? t_r : 1e6;
          t_g = u_g >= 0 ? t_g : 1e6;
          t_b = u_b >= 0 ? t_b : 1e6;
          t += Math.min(t_r, Math.min(t_g, t_b));
        }
      }
    }
    return t;
  }
  function get_ST_max(a_, b_, cusp = null) {
    if (!cusp) {
      cusp = find_cusp(a_, b_);
    }
    let L = cusp[0];
    let C = cusp[1];
    return [C / L, C / (1 - L)];
  }
  function get_Cs(L, a_, b_) {
    let cusp = find_cusp(a_, b_);
    let C_max = find_gamut_intersection(a_, b_, L, 1, L, cusp);
    let ST_max = get_ST_max(a_, b_, cusp);
    let S_mid = 0.11516993 + 1 / (7.4477897 + 4.1590124 * b_ + a_ * (-2.19557347 + 1.75198401 * b_ + a_ * (-2.13704948 - 10.02301043 * b_ + a_ * (-4.24894561 + 5.38770819 * b_ + 4.69891013 * a_))));
    let T_mid = 0.11239642 + 1 / (1.6132032 - 0.68124379 * b_ + a_ * (0.40370612 + 0.90148123 * b_ + a_ * (-0.27087943 + 0.6122399 * b_ + a_ * (299215e-8 - 0.45399568 * b_ - 0.14661872 * a_))));
    let k3 = C_max / Math.min(L * ST_max[0], (1 - L) * ST_max[1]);
    let C_a = L * S_mid;
    let C_b = (1 - L) * T_mid;
    let C_mid = 0.9 * k3 * Math.sqrt(Math.sqrt(1 / (1 / (C_a * C_a * C_a * C_a) + 1 / (C_b * C_b * C_b * C_b))));
    C_a = L * 0.4;
    C_b = (1 - L) * 0.8;
    let C_0 = Math.sqrt(1 / (1 / (C_a * C_a) + 1 / (C_b * C_b)));
    return [C_0, C_mid, C_max];
  }

  // node_modules/culori/src/okhsl/convertOklabToOkhsl.js
  function convertOklabToOkhsl(lab3) {
    const ret = { mode: "okhsl", l: toe(lab3.l) };
    if (lab3.alpha !== void 0) {
      ret.alpha = lab3.alpha;
    }
    let c4 = Math.sqrt(lab3.a * lab3.a + lab3.b * lab3.b);
    if (!c4) {
      ret.s = 0;
      return ret;
    }
    let [C_0, C_mid, C_max] = get_Cs(lab3.l, lab3.a / c4, lab3.b / c4);
    let s2;
    if (c4 < C_mid) {
      let k_0 = 0;
      let k_1 = 0.8 * C_0;
      let k_2 = 1 - k_1 / C_mid;
      let t = (c4 - k_0) / (k_1 + k_2 * (c4 - k_0));
      s2 = t * 0.8;
    } else {
      let k_0 = C_mid;
      let k_1 = 0.2 * C_mid * C_mid * 1.25 * 1.25 / C_0;
      let k_2 = 1 - k_1 / (C_max - C_mid);
      let t = (c4 - k_0) / (k_1 + k_2 * (c4 - k_0));
      s2 = 0.8 + 0.2 * t;
    }
    if (s2) {
      ret.s = s2;
      ret.h = normalizeHue_default(Math.atan2(lab3.b, lab3.a) * 180 / Math.PI);
    }
    return ret;
  }

  // node_modules/culori/src/okhsl/convertOkhslToOklab.js
  function convertOkhslToOklab(hsl2) {
    let l = toe_inv(hsl2.l);
    const ret = { mode: "oklab", l };
    if (hsl2.alpha !== void 0) {
      ret.alpha = hsl2.alpha;
    }
    if (!hsl2.s || hsl2.l === 1) {
      ret.a = ret.b = 0;
      return ret;
    }
    let a_ = Math.cos(hsl2.h / 180 * Math.PI);
    let b_ = Math.sin(hsl2.h / 180 * Math.PI);
    let [C_0, C_mid, C_max] = get_Cs(l, a_, b_);
    let t, k_0, k_1, k_2;
    if (hsl2.s < 0.8) {
      t = 1.25 * hsl2.s;
      k_0 = 0;
      k_1 = 0.8 * C_0;
      k_2 = 1 - k_1 / C_mid;
    } else {
      t = 5 * (hsl2.s - 0.8);
      k_0 = C_mid;
      k_1 = 0.2 * C_mid * C_mid * 1.25 * 1.25 / C_0;
      k_2 = 1 - k_1 / (C_max - C_mid);
    }
    let C = k_0 + t * k_1 / (1 - k_2 * t);
    ret.a = C * a_;
    ret.b = C * b_;
    return ret;
  }

  // node_modules/culori/src/okhsl/modeOkhsl.js
  var modeOkhsl = {
    ...definition_default7,
    mode: "okhsl",
    channels: ["h", "s", "l", "alpha"],
    parse: ["--okhsl"],
    serialize: "--okhsl",
    fromMode: {
      oklab: convertOklabToOkhsl,
      rgb: (c4) => convertOklabToOkhsl(convertRgbToOklab_default(c4))
    },
    toMode: {
      oklab: convertOkhslToOklab,
      rgb: (c4) => convertOklabToRgb_default(convertOkhslToOklab(c4))
    }
  };
  var modeOkhsl_default = modeOkhsl;

  // node_modules/culori/src/okhsv/convertOklabToOkhsv.js
  function convertOklabToOkhsv(lab3) {
    let c4 = Math.sqrt(lab3.a * lab3.a + lab3.b * lab3.b);
    let l = lab3.l;
    let a_ = c4 ? lab3.a / c4 : 1;
    let b_ = c4 ? lab3.b / c4 : 1;
    let [S_max, T] = get_ST_max(a_, b_);
    let S_0 = 0.5;
    let k3 = 1 - S_0 / S_max;
    let t = T / (c4 + l * T);
    let L_v = t * l;
    let C_v = t * c4;
    let L_vt = toe_inv(L_v);
    let C_vt = C_v * L_vt / L_v;
    let rgb_scale = convertOklabToLrgb_default({ l: L_vt, a: a_ * C_vt, b: b_ * C_vt });
    let scale_L = Math.cbrt(1 / Math.max(rgb_scale.r, rgb_scale.g, rgb_scale.b, 0));
    l = l / scale_L;
    c4 = c4 / scale_L * toe(l) / l;
    l = toe(l);
    const ret = {
      mode: "okhsv",
      s: c4 ? (S_0 + T) * C_v / (T * S_0 + T * k3 * C_v) : 0,
      v: l ? l / L_v : 0
    };
    if (ret.s) {
      ret.h = normalizeHue_default(Math.atan2(lab3.b, lab3.a) * 180 / Math.PI);
    }
    if (lab3.alpha !== void 0) {
      ret.alpha = lab3.alpha;
    }
    return ret;
  }

  // node_modules/culori/src/okhsv/convertOkhsvToOklab.js
  function convertOkhsvToOklab(hsv2) {
    const ret = { mode: "oklab" };
    if (hsv2.alpha !== void 0) {
      ret.alpha = hsv2.alpha;
    }
    const h = hsv2.h || 0;
    const a_ = Math.cos(h / 180 * Math.PI);
    const b_ = Math.sin(h / 180 * Math.PI);
    const [S_max, T] = get_ST_max(a_, b_);
    const S_0 = 0.5;
    const k3 = 1 - S_0 / S_max;
    const L_v = 1 - hsv2.s * S_0 / (S_0 + T - T * k3 * hsv2.s);
    const C_v = hsv2.s * T * S_0 / (S_0 + T - T * k3 * hsv2.s);
    const L_vt = toe_inv(L_v);
    const C_vt = C_v * L_vt / L_v;
    const rgb_scale = convertOklabToLrgb_default({
      l: L_vt,
      a: a_ * C_vt,
      b: b_ * C_vt
    });
    const scale_L = Math.cbrt(1 / Math.max(rgb_scale.r, rgb_scale.g, rgb_scale.b, 0));
    const L_new = toe_inv(hsv2.v * L_v);
    const C = C_v * L_new / L_v;
    ret.l = L_new * scale_L;
    ret.a = C * a_ * scale_L;
    ret.b = C * b_ * scale_L;
    return ret;
  }

  // node_modules/culori/src/okhsv/modeOkhsv.js
  var modeOkhsv = {
    ...definition_default8,
    mode: "okhsv",
    channels: ["h", "s", "v", "alpha"],
    parse: ["--okhsv"],
    serialize: "--okhsv",
    fromMode: {
      oklab: convertOklabToOkhsv,
      rgb: (c4) => convertOklabToOkhsv(convertRgbToOklab_default(c4))
    },
    toMode: {
      oklab: convertOkhsvToOklab,
      rgb: (c4) => convertOklabToRgb_default(convertOkhsvToOklab(c4))
    }
  };
  var modeOkhsv_default = modeOkhsv;

  // node_modules/culori/src/oklab/definition.js
  var definition19 = {
    ...definition_default12,
    mode: "oklab",
    toMode: {
      lrgb: convertOklabToLrgb_default,
      rgb: convertOklabToRgb_default
    },
    fromMode: {
      lrgb: convertLrgbToOklab_default,
      rgb: convertRgbToOklab_default
    },
    ranges: {
      l: [0, 0.999],
      a: [-0.233, 0.276],
      b: [-0.311, 0.198]
    },
    parse: ["--oklab"],
    serialize: "--oklab"
  };
  var definition_default19 = definition19;

  // node_modules/culori/src/oklch/definition.js
  var definition20 = {
    ...definition_default14,
    mode: "oklch",
    toMode: {
      oklab: (c4) => convertLchToLab_default(c4, "oklab"),
      rgb: (c4) => convertOklabToRgb_default(convertLchToLab_default(c4, "oklab"))
    },
    fromMode: {
      rgb: (c4) => convertLabToLch_default(convertRgbToOklab_default(c4), "oklch"),
      oklab: (c4) => convertLabToLch_default(c4, "oklch")
    },
    parse: ["--oklch"],
    serialize: "--oklch",
    ranges: {
      l: [0, 0.999],
      c: [0, 0.322],
      h: [0, 360]
    }
  };
  var definition_default20 = definition20;

  // node_modules/culori/src/p3/convertP3ToXyz65.js
  var convertP3ToXyz65 = (rgb4) => {
    let { r: r2, g, b, alpha } = convertRgbToLrgb_default(rgb4);
    let res = {
      mode: "xyz65",
      x: 0.4865709 * r2 + 0.2656676 * g + 0.1982172 * b,
      y: 0.2289745 * r2 + 0.6917385 * g + 0.0792869 * b,
      z: 0 * r2 + 0.0451133 * g + 1.0439443 * b
    };
    if (alpha !== void 0) {
      res.alpha = alpha;
    }
    return res;
  };
  var convertP3ToXyz65_default = convertP3ToXyz65;

  // node_modules/culori/src/p3/convertXyz65ToP3.js
  var convertXyz65ToP3 = ({ x, y, z, alpha }) => {
    let res = convertLrgbToRgb_default({
      r: x * 2.4934969 - y * 0.9313836 - 0.4027107 * z,
      g: x * -0.8294889 + y * 1.762664 + 0.0236246 * z,
      b: x * 0.0358458 - y * 0.0761723 + 0.9568845 * z
    }, "p3");
    if (alpha !== void 0) {
      res.alpha = alpha;
    }
    return res;
  };
  var convertXyz65ToP3_default = convertXyz65ToP3;

  // node_modules/culori/src/p3/definition.js
  var definition21 = {
    ...definition_default,
    mode: "p3",
    parse: ["display-p3"],
    serialize: "display-p3",
    fromMode: {
      rgb: (color) => convertXyz65ToP3_default(convertRgbToXyz65_default(color)),
      xyz65: convertXyz65ToP3_default
    },
    toMode: {
      rgb: (color) => convertXyz65ToRgb_default(convertP3ToXyz65_default(color)),
      xyz65: convertP3ToXyz65_default
    }
  };
  var definition_default21 = definition21;

  // node_modules/culori/src/prophoto/convertXyz50ToProphoto.js
  var gamma2 = (v) => {
    let abs2 = Math.abs(v);
    if (abs2 >= 1 / 512) {
      return Math.sign(v) * Math.pow(abs2, 1 / 1.8);
    }
    return 16 * v;
  };
  var convertXyz50ToProphoto = ({ x, y, z, alpha }) => {
    let res = {
      mode: "prophoto",
      r: gamma2(x * 1.3457989731028281 - y * 0.25558010007997534 - 0.05110628506753401 * z),
      g: gamma2(x * -0.5446224939028347 + y * 1.5082327413132781 + 0.02053603239147973 * z),
      b: gamma2(x * 0 + y * 0 + 1.2119675456389454 * z)
    };
    if (alpha !== void 0) {
      res.alpha = alpha;
    }
    return res;
  };
  var convertXyz50ToProphoto_default = convertXyz50ToProphoto;

  // node_modules/culori/src/prophoto/convertProphotoToXyz50.js
  var linearize2 = (v) => {
    let abs2 = Math.abs(v);
    if (abs2 >= 16 / 512) {
      return Math.sign(v) * Math.pow(abs2, 1.8);
    }
    return v / 16;
  };
  var convertProphotoToXyz50 = (prophoto2) => {
    let r2 = linearize2(prophoto2.r);
    let g = linearize2(prophoto2.g);
    let b = linearize2(prophoto2.b);
    let res = {
      mode: "xyz50",
      x: 0.7977604896723027 * r2 + 0.13518583717574031 * g + 0.0313493495815248 * b,
      y: 0.2880711282292934 * r2 + 0.7118432178101014 * g + 8565396060525902e-20 * b,
      z: 0 * r2 + 0 * g + 0.8251046025104601 * b
    };
    if (prophoto2.alpha !== void 0) {
      res.alpha = prophoto2.alpha;
    }
    return res;
  };
  var convertProphotoToXyz50_default = convertProphotoToXyz50;

  // node_modules/culori/src/prophoto/definition.js
  var definition22 = {
    ...definition_default,
    mode: "prophoto",
    parse: ["prophoto-rgb"],
    serialize: "prophoto-rgb",
    fromMode: {
      xyz50: convertXyz50ToProphoto_default,
      rgb: (color) => convertXyz50ToProphoto_default(convertRgbToXyz50_default(color))
    },
    toMode: {
      xyz50: convertProphotoToXyz50_default,
      rgb: (color) => convertXyz50ToRgb_default(convertProphotoToXyz50_default(color))
    }
  };
  var definition_default22 = definition22;

  // node_modules/culori/src/rec2020/convertXyz65ToRec2020.js
  var \u03B1 = 1.09929682680944;
  var \u03B2 = 0.018053968510807;
  var gamma3 = (v) => {
    const abs2 = Math.abs(v);
    if (abs2 > \u03B2) {
      return (Math.sign(v) || 1) * (\u03B1 * Math.pow(abs2, 0.45) - (\u03B1 - 1));
    }
    return 4.5 * v;
  };
  var convertXyz65ToRec2020 = ({ x, y, z, alpha }) => {
    let res = {
      mode: "rec2020",
      r: gamma3(x * 1.7166511879712674 - y * 0.35567078377639233 - 0.25336628137365974 * z),
      g: gamma3(x * -0.6666843518324892 + y * 1.6164812366349395 + 0.01576854581391113 * z),
      b: gamma3(x * 0.017639857445310783 - y * 0.042770613257808524 + 0.9421031212354738 * z)
    };
    if (alpha !== void 0) {
      res.alpha = alpha;
    }
    return res;
  };
  var convertXyz65ToRec2020_default = convertXyz65ToRec2020;

  // node_modules/culori/src/rec2020/convertRec2020ToXyz65.js
  var \u03B12 = 1.09929682680944;
  var \u03B22 = 0.018053968510807;
  var linearize3 = (v) => {
    let abs2 = Math.abs(v);
    if (abs2 < \u03B22 * 4.5) {
      return v / 4.5;
    }
    return (Math.sign(v) || 1) * Math.pow((abs2 + \u03B12 - 1) / \u03B12, 1 / 0.45);
  };
  var convertRec2020ToXyz65 = (rec20202) => {
    let r2 = linearize3(rec20202.r);
    let g = linearize3(rec20202.g);
    let b = linearize3(rec20202.b);
    let res = {
      mode: "xyz65",
      x: 0.6369580483012914 * r2 + 0.14461690358620832 * g + 0.1688809751641721 * b,
      y: 0.2627002120112671 * r2 + 0.6779980715188708 * g + 0.05930171646986196 * b,
      z: 0 * r2 + 0.028072693049087428 * g + 1.060985057710791 * b
    };
    if (rec20202.alpha !== void 0) {
      res.alpha = rec20202.alpha;
    }
    return res;
  };
  var convertRec2020ToXyz65_default = convertRec2020ToXyz65;

  // node_modules/culori/src/rec2020/definition.js
  var definition23 = {
    ...definition_default,
    mode: "rec2020",
    fromMode: {
      xyz65: convertXyz65ToRec2020_default,
      rgb: (color) => convertXyz65ToRec2020_default(convertRgbToXyz65_default(color))
    },
    toMode: {
      xyz65: convertRec2020ToXyz65_default,
      rgb: (color) => convertXyz65ToRgb_default(convertRec2020ToXyz65_default(color))
    },
    parse: ["rec2020"],
    serialize: "rec2020"
  };
  var definition_default23 = definition23;

  // node_modules/culori/src/xyz50/definition.js
  var definition24 = {
    mode: "xyz50",
    parse: ["xyz-d50", "--xyz-d50"],
    serialize: "xyz-d50",
    toMode: {
      rgb: convertXyz50ToRgb_default,
      lab: convertXyz50ToLab_default
    },
    fromMode: {
      rgb: convertRgbToXyz50_default,
      lab: convertLabToXyz50_default
    },
    channels: ["x", "y", "z", "alpha"],
    ranges: {
      x: [0, 0.964],
      y: [0, 0.999],
      z: [0, 0.825]
    },
    interpolate: {
      x: interpolatorLinear,
      y: interpolatorLinear,
      z: interpolatorLinear,
      alpha: { use: interpolatorLinear, fixup: fixupAlpha }
    }
  };
  var definition_default24 = definition24;

  // node_modules/culori/src/xyz65/convertXyz65ToXyz50.js
  var convertXyz65ToXyz50 = (xyz652) => {
    let { x, y, z, alpha } = xyz652;
    let res = {
      mode: "xyz50",
      x: 1.0478112 * x + 0.0228866 * y - 0.050127 * z,
      y: 0.0295424 * x + 0.9904844 * y - 0.0170491 * z,
      z: -92345e-7 * x + 0.0150436 * y + 0.7521316 * z
    };
    if (alpha !== void 0) {
      res.alpha = alpha;
    }
    return res;
  };
  var convertXyz65ToXyz50_default = convertXyz65ToXyz50;

  // node_modules/culori/src/xyz65/convertXyz50ToXyz65.js
  var convertXyz50ToXyz65 = (xyz502) => {
    let { x, y, z, alpha } = xyz502;
    let res = {
      mode: "xyz65",
      x: 0.9555766 * x - 0.0230393 * y + 0.0631636 * z,
      y: -0.0282895 * x + 1.0099416 * y + 0.0210077 * z,
      z: 0.0122982 * x - 0.020483 * y + 1.3299098 * z
    };
    if (alpha !== void 0) {
      res.alpha = alpha;
    }
    return res;
  };
  var convertXyz50ToXyz65_default = convertXyz50ToXyz65;

  // node_modules/culori/src/xyz65/definition.js
  var definition25 = {
    mode: "xyz65",
    toMode: {
      rgb: convertXyz65ToRgb_default,
      xyz50: convertXyz65ToXyz50_default
    },
    fromMode: {
      rgb: convertRgbToXyz65_default,
      xyz50: convertXyz50ToXyz65_default
    },
    ranges: {
      x: [0, 0.95],
      y: [0, 1],
      z: [0, 1.088]
    },
    channels: ["x", "y", "z", "alpha"],
    parse: ["xyz", "xyz-d65", "--xyz-d65"],
    serialize: "xyz-d65",
    interpolate: {
      x: interpolatorLinear,
      y: interpolatorLinear,
      z: interpolatorLinear,
      alpha: { use: interpolatorLinear, fixup: fixupAlpha }
    }
  };
  var definition_default25 = definition25;

  // node_modules/culori/src/yiq/convertRgbToYiq.js
  var convertRgbToYiq = (rgb4) => {
    let { r: r2, g, b, alpha } = convertRgbToLrgb_default(rgb4);
    let res = {
      mode: "yiq",
      y: 0.29889531 * r2 + 0.58662247 * g + 0.11448223 * b,
      i: 0.59597799 * r2 - 0.2741761 * g - 0.32180189 * b,
      q: 0.21147017 * r2 - 0.52261711 * g + 0.31114694 * b
    };
    if (alpha !== void 0)
      res.alpha = alpha;
    return res;
  };
  var convertRgbToYiq_default = convertRgbToYiq;

  // node_modules/culori/src/yiq/convertYiqToRgb.js
  var convertYiqToRgb = ({ y, i, q, alpha }) => convertLrgbToRgb_default({
    r: y + 0.95608445 * i + 0.6208885 * q,
    g: y - 0.27137664 * i - 0.6486059 * q,
    b: y - 1.10561724 * i + 1.70250126 * q,
    alpha
  });
  var convertYiqToRgb_default = convertYiqToRgb;

  // node_modules/culori/src/yiq/definition.js
  var definition26 = {
    mode: "yiq",
    toMode: {
      rgb: convertYiqToRgb_default
    },
    fromMode: {
      rgb: convertRgbToYiq_default
    },
    channels: ["y", "i", "q", "alpha"],
    parse: ["--yiq"],
    serialize: "--yiq",
    ranges: {
      i: [-0.595, 0.595],
      q: [-0.522, 0.522]
    },
    interpolate: {
      y: interpolatorLinear,
      i: interpolatorLinear,
      q: interpolatorLinear,
      alpha: { use: interpolatorLinear, fixup: fixupAlpha }
    }
  };
  var definition_default26 = definition26;

  // node_modules/culori/src/round.js
  var r = (value, precision) => Math.round(value * (precision = Math.pow(10, precision))) / precision;
  var round = (precision = 4) => (value) => typeof value === "number" ? r(value, precision) : value;
  var round_default = round;

  // node_modules/culori/src/formatter.js
  var twoDecimals = round_default(2);
  var clamp = (value) => Math.max(0, Math.min(1, value));
  var serializeHsl = (color) => {
    if (color === void 0) {
      return void 0;
    }
    const h = twoDecimals(color.h || 0);
    const s2 = color.s !== void 0 ? twoDecimals(clamp(color.s) * 100) + "%" : "none";
    const l = color.l !== void 0 ? twoDecimals(clamp(color.l) * 100) + "%" : "none";
    if (color.alpha === void 0 || color.alpha === 1) {
      return `hsl(${h}, ${s2}, ${l})`;
    } else {
      return `hsla(${h}, ${s2}, ${l}, ${twoDecimals(clamp(color.alpha))})`;
    }
  };
  var formatHsl = (c4) => serializeHsl(converter_default("hsl")(c4));

  // node_modules/culori/src/displayable.js
  var rgb = converter_default("rgb");
  var displayable = (color) => {
    let c4 = rgb(color);
    return c4 !== void 0 && c4.r >= 0 && c4.r <= 1 && c4.g >= 0 && c4.g <= 1 && c4.b >= 0 && c4.b <= 1;
  };
  var displayable_default = displayable;

  // node_modules/culori/src/clamp.js
  var rgb2 = converter_default("rgb");
  var fixup_rgb = (color) => {
    let c4 = rgb2(color);
    c4.r = Math.max(0, Math.min(c4.r, 1));
    c4.g = Math.max(0, Math.min(c4.g, 1));
    c4.b = Math.max(0, Math.min(c4.b, 1));
    return c4;
  };
  var clampRgb = (color) => {
    color = prepare_default(color);
    if (color === void 0 || displayable_default(color))
      return color;
    let conv = converter_default(color.mode);
    return conv(fixup_rgb(color));
  };

  // node_modules/culori/src/index.js
  var a98 = useMode(definition_default2);
  var cubehelix = useMode(definition_default3);
  var dlab = useMode(definition_default4);
  var dlch = useMode(definition_default5);
  var hsi = useMode(definition_default6);
  var hsl = useMode(definition_default7);
  var hsv = useMode(definition_default8);
  var hwb2 = useMode(definition_default9);
  var jab = useMode(definition_default10);
  var jch = useMode(definition_default11);
  var lab2 = useMode(definition_default12);
  var lab65 = useMode(definition_default13);
  var lch2 = useMode(definition_default14);
  var lch65 = useMode(definition_default15);
  var lchuv = useMode(definition_default16);
  var lrgb = useMode(definition_default17);
  var luv = useMode(definition_default18);
  var okhsl = useMode(modeOkhsl_default);
  var okhsv = useMode(modeOkhsv_default);
  var oklab = useMode(definition_default19);
  var oklch = useMode(definition_default20);
  var p3 = useMode(definition_default21);
  var prophoto = useMode(definition_default22);
  var rec2020 = useMode(definition_default23);
  var rgb3 = useMode(definition_default);
  var xyz50 = useMode(definition_default24);
  var xyz65 = useMode(definition_default25);
  var yiq = useMode(definition_default26);

  // worklet.js
  var LCHBackground = class {
    static get inputProperties() {
      return ["--base-lch"];
    }
    propToString(prop) {
      return prop.toString().trim();
    }
    paint(ctx, geometry, props) {
      const { width, height } = geometry;
      const baseLCH = this.propToString(props.get("--base-lch"));
      const color = formatHsl(clampRgb(parse_default(baseLCH)));
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, width, height);
    }
  };
  registerPaint("lchBackground", LCHBackground);
})();
