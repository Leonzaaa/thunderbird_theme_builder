import { build } from 'thunderbird-theme-builder';
import { createRequire } from 'module';
import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

import theme from './themeConfig.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const AdmZip = require('adm-zip');

const pkg = JSON.parse(readFileSync(resolve(__dirname, '..', 'package.json'), 'utf-8'));
const xpiName = `${pkg.name}.xpi`;
const xpiPath = resolve(__dirname, '..', 'build', xpiName);
const assetsDir = resolve(__dirname, 'assets');
const iconPath = resolve(__dirname, 'assets', 'icon.png');
const hasAssetsDir = existsSync(assetsDir);
const hasThemeIcon = existsSync(iconPath);

build(theme, {
  stylesPath: 'themeCustomStyles.scss',
  ...(hasAssetsDir ? { assetsDir: 'src/assets' } : {}),
});

const zip = new AdmZip(xpiPath);
const manifest = JSON.parse(zip.readAsText('manifest.json'));

if (hasThemeIcon) {
  manifest.icons = { "16": "icon.png", "48": "icon.png", "128": "icon.png" };
}

zip.updateFile('manifest.json', Buffer.from(JSON.stringify(manifest, null, 1)));
zip.writeZip(xpiPath);

console.log(hasThemeIcon
  ? '\n  Theme icon registered from src/assets/icon.png.'
  : '\n  Build completed without theme icon. Add src/assets/icon.png later to include it in the package.');
