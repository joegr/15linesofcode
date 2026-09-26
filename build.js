// Builds _site/: one sub page per sketch folder, plus an index linking them all.
const fs = require('fs');
const path = require('path');

const out = '_site';
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out);
fs.copyFileSync(require.resolve('p5/lib/p5.min.js'), path.join(out, 'p5.min.js'));

const sketches = fs.readdirSync('.')
  .filter(d => fs.existsSync(path.join(d, 'sketch.js')))
  .sort((a, b) => {
    const [am, ad, ay] = a.split('_').map(Number), [bm, bd, by] = b.split('_').map(Number);
    return ay - by || am - bm || ad - bd;
  });

const page = (title, body) => `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<style>body{margin:0;background:#111;color:#eee;font-family:sans-serif}a{color:#f9a98c}canvas{display:block;margin:20px auto}nav{padding:12px 16px}</style>
</head>
<body>
${body}
</body>
</html>
`;

for (const name of sketches) {
  fs.mkdirSync(path.join(out, name));
  fs.copyFileSync(path.join(name, 'sketch.js'), path.join(out, name, 'sketch.js'));
  fs.writeFileSync(path.join(out, name, 'index.html'), page(name.replace(/_/g, '/'),
    `<nav><a href="../">&larr; all sketches</a> &middot; ${name.replace(/_/g, '/')}</nav>
<script src="../p5.min.js"></script>
<script src="sketch.js"></script>`));
}

fs.writeFileSync(path.join(out, 'index.html'), page('15 lines of code',
  `<nav><h1>15 lines of code</h1><ul>
${sketches.map(s => `<li><a href="${s}/">${s.replace(/_/g, '/')}</a></li>`).join('\n')}
</ul></nav>`));

console.log(`Built ${sketches.length} sketches into ${out}/`);
