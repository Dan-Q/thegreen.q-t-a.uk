const site = 'thegreen';
const version = '1';

self.addEventListener('install', event=>{
  event.waitUntil(
    caches.open(`${site}-${version}`).then(cache=>{
      return cache.addAll([
        '/',
        '/family.svg',
        '/eb-garamond-v14-latin-regular.woff2',
        '/eb-garamond-v14-latin-700.woff2',
        '/icon-192x192.png'
      ]);
    })
  );
});

// Network-first on 400ms timeout, failing that fall back to cache
self.addEventListener('fetch', event=>{
  event.respondWith(fromNetwork(event.request, 400).catch(()=>{
    return fromCache(event.request);
  }));
});

function fromNetwork(request, timeout) {
  return new Promise(function (fulfill, reject) {
    const timeoutId = setTimeout(reject, timeout);
    fetch(request).then(response=>{
      clearTimeout(timeoutId);
      fulfill(response);
    }, reject);
  });
}

function fromCache(request) {
  return caches.open(`${site}-${version}`).then(cache=>{
    return cache.match(request).then(matching=>{
      return matching || Promise.reject('no-match');
    });
  });
}
