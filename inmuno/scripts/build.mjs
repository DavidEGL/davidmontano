import {build} from 'esbuild';
await build({entryPoints:['app.js'],outfile:'build/game.js',bundle:true,minify:true,format:'iife',platform:'browser',target:['es2020'],legalComments:'eof',logLevel:'info'});
