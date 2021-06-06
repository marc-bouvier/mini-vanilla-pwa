// load data
//  self.importScripts('data/games.js');

var cacheName = 'mini-vanilla-pwa-v1';
var appShellFiles = [
    '/mini-vanilla-pwa/',
    '/mini-vanilla-pwa/index.html',
    '/mini-vanilla-pwa/app.js',
    '/mini-vanilla-pwa/style.css',
    // '/favicon.ico',
    '/mini-vanilla-pwa/icons/icon_144x144.png',
    '/mini-vanilla-pwa/icons/icon_192x192.png',
];
var contentToCache =appShellFiles;

// Install the assets for local use

self.addEventListener('install', function(e) {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[Service Worker] Caching all: app shell and content');
            return cache.addAll(contentToCache);
        })
    );
});

// Bypass fetch to load installed assets instead of live ones

self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(r) {
            console.log('[Service Worker] Fetching resource: '+e.request.url);
            return r || fetch(e.request).then(function(response) {
                return caches.open(cacheName).then(function(cache) {
                    console.log('[Service Worker] Caching new resource: '+e.request.url);
                    cache.put(e.request, response.clone());
                    return response;
                });
            });
        })
    );
});
