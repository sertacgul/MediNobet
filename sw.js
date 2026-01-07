const CACHE_NAME = 'shiftzen-cache-v49'; // Ekip Listesi Etkileşimi Eklendi

const ASSETS = [

  './',

  './index.html',

  './manifest.json',

  './icon.png',

  'https://cdn.tailwindcss.com',

  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',

  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',

  'https://cdn.sheetjs.com/xlsx-0.20.1/package/dist/xlsx.full.min.js',

  'https://cdn.jsdelivr.net/npm/chart.js'

];

self.addEventListener('install', (e) => {

  self.skipWaiting();

  e.waitUntil(

    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))

  );

});

self.addEventListener('activate', (e) => {

  e.waitUntil(

    caches.keys().then((keyList) => {

      return Promise.all(keyList.map((key) => {

        if (key !== CACHE_NAME) {

          return caches.delete(key);

        }

      }));

    })

  );

});

self.addEventListener('fetch', (e) => {

  e.respondWith(

    caches.match(e.request).then((response) => response || fetch(e.request))

  );

});
 
