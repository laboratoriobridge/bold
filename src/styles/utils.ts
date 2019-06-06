import { ColorScale } from './colors'

export const hexToRGB = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  } else {
    return `rgba(${r}, ${g}, ${b})`
  }
}

export const invertColorScale = (scale: ColorScale): ColorScale => {
  return {
    c10: scale.c100,
    c20: scale.c90,
    c30: scale.c80,
    c40: scale.c70,
    c50: scale.c60,
    c60: scale.c50,
    c70: scale.c40,
    c80: scale.c30,
    c90: scale.c20,
    c100: scale.c10,
  }
}

// https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
// tslint:disable
// prettier-ignore
export function shade(p, from, to = undefined) {
    if (typeof (p) != "number" || p < -1 || p > 1 || typeof (from) != "string" || (from[0] != 'r' && from[0] != '#') || (typeof (to) != "string" && typeof (to) != "undefined")) return null; //ErrorCheck
    if (!this.sbcRip) this.sbcRip = (d) => {
        let l = d.length, RGB = new Object();
        if (l > 9) {
            d = d.split(",");
            if (d.length < 3 || d.length > 4) return null;//ErrorCheck
            RGB[0] = i(d[0].slice(4)), RGB[1] = i(d[1]), RGB[2] = i(d[2]), RGB[3] = d[3] ? parseFloat(d[3]) : -1;
        } else {
            if (l == 8 || l == 6 || l < 4) return null; //ErrorCheck
            if (l < 6) d = "#" + d[1] + d[1] + d[2] + d[2] + d[3] + d[3] + (l > 4 ? d[4] + "" + d[4] : ""); //3 digit
            d = i(d.slice(1), 16), RGB[0] = d >> 16 & 255, RGB[1] = d >> 8 & 255, RGB[2] = d & 255, RGB[3] = l == 9 || l == 5 ? r(((d >> 24 & 255) / 255) * 10000) / 10000 : -1;
        }
        return RGB;
    }
    var i = parseInt, r = Math.round, h = from.length > 9, h = typeof (to) == "string" ? to.length > 9 ? true : to == "c" ? !h : false : h, b = p < 0, p = b ? p * -1 : p as any, to = to && to != "c" ? to : b ? "#000000" as any : "#FFFFFF" as any, f = this.sbcRip(from), t = this.sbcRip(to);
    if (!f || !t) return null; //ErrorCheck
    if (h) return "rgb(" + r((t[0] - f[0]) * p + f[0]) + "," + r((t[1] - f[1]) * p + f[1]) + "," + r((t[2] - f[2]) * p + f[2]) + (f[3] < 0 && t[3] < 0 ? ")" : "," + (f[3] > -1 && t[3] > -1 ? r(((t[3] - f[3]) * p + f[3]) * 10000) / 10000 : t[3] < 0 ? f[3] : t[3]) + ")");
    else return "#" + (0x100000000 + (f[3] > -1 && t[3] > -1 ? r(((t[3] - f[3]) * p + f[3]) * 255) : t[3] > -1 ? r(t[3] * 255) : f[3] > -1 ? r(f[3] * 255) : 255) * 0x1000000 + r((t[0] - f[0]) * p + f[0]) * 0x10000 + r((t[1] - f[1]) * p + f[1]) * 0x100 + r((t[2] - f[2]) * p + f[2])).toString(16).slice(f[3] > -1 || t[3] > -1 ? 1 : 3);
}
// tslint:enable