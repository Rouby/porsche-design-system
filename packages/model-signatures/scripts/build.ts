import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';
import globby from 'globby';
import { paramCase } from 'change-case';
import { CDN_BASE_URL_DYNAMIC, CDN_KEY_TYPE_DEFINITION, CDN_BASE_PATH_MODEL_SIGNATURES } from '../../../cdn.config';

type Manifest = {
  [name: string]: string;
};

const toHash = (str: string): string => crypto.createHash('md5').update(str, 'utf8').digest('hex');

const createManifestAndCopyAssets = (cdn: string, files: string[]): void => {
  fs.rmSync(path.normalize('./dist'), { force: true, recursive: true });
  fs.mkdirSync(path.normalize('./dist/model-signatures'), { recursive: true });

  const manifest: Manifest = {};

  for (const file of files) {
    const svgRawPath = path.normalize(file);
    const svgRawName = path.basename(svgRawPath, '.svg');
    const svgRawData = fs.readFileSync(svgRawPath, 'utf8');
    const hash = toHash(svgRawData);
    const filename = `${paramCase(svgRawName)}.min.${hash}.svg`;
    const targetPath = path.normalize(`./dist/model-signatures/${filename}`);

    manifest[svgRawName] = filename;

    fs.copyFileSync(svgRawPath, targetPath);

    console.log(`Model signature "${svgRawName}" copied`);
  }

  fs.writeFileSync(
    path.normalize('./index.ts'),
    `${CDN_KEY_TYPE_DEFINITION}

export const CDN_BASE_URL = ${cdn};
export const MODEL_SIGNATURES_MANIFEST = ${JSON.stringify(manifest)};`
  );

  console.log('Created model-signatures manifest.');
};

const cdn = `${CDN_BASE_URL_DYNAMIC} + '/${CDN_BASE_PATH_MODEL_SIGNATURES}'`;
const files = globby.sync('./src/optimized/*.svg').sort();

createManifestAndCopyAssets(cdn, files);
