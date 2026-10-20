import {build} from 'esbuild';
import {fileURLToPath} from 'node:url';
import {resolve} from 'node:path';
const root=fileURLToPath(new URL('..',import.meta.url));
await build({entryPoints:[resolve(root,'app.js')],outfile:resolve(root,'build/game.js'),bundle:true,minify:true,format:'iife',platform:'browser',target:['es2020'],legalComments:'eof',logLevel:'info'});
