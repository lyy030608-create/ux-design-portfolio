import {mkdir,copyFile,writeFile} from 'node:fs/promises';
for(const route of ['resume','work/dose-of-truth','work/low-pressure-karaoke','work/message-drift']){await mkdir('dist/'+route,{recursive:true});await copyFile('dist/index.html','dist/'+route+'/index.html');}
await copyFile('dist/index.html','dist/404.html');await writeFile('dist/.nojekyll','');
