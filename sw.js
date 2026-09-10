'use strict';
const SCOPE=new URL(self.registration.scope);
const PREFIX='lele-pages:'+SCOPE.pathname+':';
const CACHE=PREFIX+'v3';
const APP_URL=new URL('./index.html',SCOPE).href;
const ASSETS=['./manifest.webmanifest','./icon-180.png','./icon-192.png','./icon-512.png'].map(path=>new URL(path,SCOPE).href);
async function appResponse(response){
  return response.ok&&!response.redirected&&(response.headers.get('content-type')||'').includes('text/html')&&(await response.clone().text()).includes('<meta name="lele-app" content="reading-game">');
}
self.addEventListener('install',event=>event.waitUntil((async()=>{
  const response=await fetch(APP_URL,{cache:'reload'});
  if(!(await appResponse(response)))throw new Error('Application is not accessible');
  const cache=await caches.open(CACHE);
  await cache.put(APP_URL,response);
  await cache.addAll(ASSETS);
  await self.skipWaiting();
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
  for(const name of await caches.keys())if(name.startsWith(PREFIX)&&name!==CACHE)await caches.delete(name);
  await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
  const url=new URL(event.request.url);
  if(event.request.method!=='GET'||url.origin!==SCOPE.origin)return;
  const isHome=url.pathname===SCOPE.pathname||url.pathname===new URL(APP_URL).pathname;
  if(event.request.mode==='navigate'&&isHome){
    event.respondWith((async()=>{
      try{
        const response=await fetch(event.request);
        if(await appResponse(response)){const cache=await caches.open(CACHE);await cache.put(APP_URL,response.clone());}
        return response;
      }catch(error){
        const cache=await caches.open(CACHE);
        return(await cache.match(APP_URL))||new Response('Abra o LêLê com internet uma vez para preparar o jogo.',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}});
      }
    })());
  }else if(ASSETS.includes(url.href)){
    event.respondWith(caches.open(CACHE).then(async cache=>(await cache.match(event.request))||fetch(event.request)));
  }
});
