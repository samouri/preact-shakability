const esbuild = require('esbuild');

esbuild.buildSync({
  entryPoints: ['current/input.js'],
  outfile: 'current/bundled.js',
  bundle: true,
});

esbuild.buildSync({
  entryPoints: ['isolated/input.js'],
  outfile: 'isolated/bundled.js',
  bundle: true,
});
