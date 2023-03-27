import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';
import { FONTS_MANIFEST } from '@porsche-design-system/fonts';

type Options = {
  baseUrl: string;
  fontsManifest: typeof FONTS_MANIFEST;
  addContentBasedHash: boolean;
  suffix?: string;
};

const toHash = (str: string): string => crypto.createHash('md5').update(str, 'utf8').digest('hex');

const compileFontFaceScss = (opts: Options): string => {
  const sass = require('sass');

  const { addContentBasedHash, suffix } = opts;
  const scssPath = path.resolve(__dirname, '../src/styles/font-face.scss');

  // read raw css to replace import of font-face-variables for other cdn
  const rawScss = fs.readFileSync(scssPath, 'utf8');
  const result = sass.renderSync({
    data: suffix ? rawScss.replace(/(@import 'font-face.variables)(';)/, `$1.${suffix}$2`) : rawScss,
    includePaths: [path.resolve(__dirname, '../src/scss'), path.resolve(__dirname, '../src/styles')],
    outputStyle: 'compressed',
  });

  const hash = addContentBasedHash ? `.${toHash(result.css)}` : '';
  const filename = `font-face.min${suffix ? `.${suffix}` : ''}${hash}.css`;
  const targetPath = path.normalize(`./dist/styles/${filename}`);

  fs.writeFileSync(targetPath, result.css);

  return filename;
};

export function buildStyle(opts: Options): string {
  return compileFontFaceScss(opts);
}
