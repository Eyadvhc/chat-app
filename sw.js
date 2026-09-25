self.addEventListener('install', (e) => {
  console.log('Service Worker Installed');
});

self.addEventListener('fetch', (e) => {
  // تمرير الطلبات بسلاسة ليعمل التطبيق بكفاءة
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});