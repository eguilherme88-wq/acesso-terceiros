self.addEventListener('install',event=>{self.skipWaiting()});
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
// Dados e consultas continuam usando a rede, sem cache de informações pessoais.
self.addEventListener('fetch',()=>{});
