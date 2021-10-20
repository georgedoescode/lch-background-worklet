import { parse, clampRgb, formatHsl } from 'culori';

class LCHBackground {
  static get inputProperties() {
    return ['--base-lch'];
  }

  propToString(prop) {
    return prop.toString().trim();
  }

  paint(ctx, geometry, props) {
    const { width, height } = geometry;

    const baseLCH = this.propToString(props.get('--base-lch'));
    const color = formatHsl(clampRgb(parse(baseLCH)));

    ctx.fillStyle = color;

    ctx.fillRect(0, 0, width, height);
  }
}

registerPaint('lchBackground', LCHBackground);
