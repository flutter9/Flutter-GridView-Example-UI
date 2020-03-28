'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/images/five.jpg": "e1515943c4d9dffcf886128bcd9806a2",
"/assets/assets/images/three.jpg": "10e1a2177dcf9391b9751bb0167550fd",
"/assets/assets/images/two.jpg": "3cd6d4a679482ca66e5dec51be2e6b6c",
"/assets/assets/images/one.jpg": "a7af6dce7fb7a27f8d0bdb11334cf20e",
"/assets/assets/images/four.jpg": "fd72ee900ec039a23205887e1e183ee9",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "8abfb6dc76537c3877d86370262cbd66",
"/assets/LICENSE": "86ed68af45587fbe062baf0749fd1d90",
"/main.dart.js": "467dd5cf7f370f12b14006a2df7fca01"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
