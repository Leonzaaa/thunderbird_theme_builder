import { build } from 'thunderbird-theme-builder';
import { createRequire } from 'module';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

import theme from './themeConfig.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const AdmZip = require('adm-zip');

const pkg = JSON.parse(readFileSync(resolve(__dirname, '..', 'package.json'), 'utf-8'));
const xpiName = `${pkg.name}.xpi`;
const xpiPath = resolve(__dirname, '..', 'build', xpiName);
const iconPath = resolve(__dirname, 'assets', 'icon.png');

build(theme, { stylesPath: 'themeCustomStyles.scss' });

const zip = new AdmZip(xpiPath);
const manifest = JSON.parse(zip.readAsText('manifest.json'));

manifest.icons = { "16": "icon.png", "48": "icon.png", "128": "icon.png" };

zip.addLocalFile(iconPath);
zip.updateFile('manifest.json', Buffer.from(JSON.stringify(manifest, null, 1)));
zip.writeZip(xpiPath);

console.log('\n  Icon added to theme package.');
