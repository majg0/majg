// DOCS: https://developers.google.com/web/fundamentals/primers/service-workers

const SITE_CACHE_V1 = 'site-cache-v1'
const activeCaches = new Set([SITE_CACHE_V1])

self.addEventListener('install', (event) => {
  event.waitUntil(installCache())
})

async function installCache() {
  const cache = await caches.open(SITE_CACHE_V1)
  await cache.addAll(['/'])
}

self.addEventListener('fetch', (event) => {
  event.respondWith(getResponse(event.request))
})

async function getResponse(request) {
  let response = await caches.match(request)
  if (response) {
    return response
  }
  response = await fetch(request)
  tryCacheResponse(request, response, SITE_CACHE_V1)
  return response
}

async function tryCacheResponse(request, response, cacheKey) {
  if (
    !response ||
    response.status !== 200 ||
    response.type !== 'basic' // NOTE: 'basic' indicates it's a request from our origin
  ) {
    return
  }

  // NOTE: A response is a single stream, but we need to consume it twice.
  const responseClone = response.clone()
  const cache = await caches.open(cacheKey)
  cache.put(request, responseClone)
}

self.addEventListener('activate', (event) => {
  event.waitUntil(clearStaleCaches())
})

async function clearStaleCaches() {
  const cacheKeys = await caches.keys()
  await Promise.all(
    cacheKeys.filter((k) => !activeCaches.has(k)).map((k) => caches.delete(k))
  )
}

self.addEventListener('push', (event) => {
  // TODO
})
