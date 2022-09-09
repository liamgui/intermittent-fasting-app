// let dataCacheName = 'Intermittent_Fasting';
// let cacheName = 'Intermittent_Fasting';
// let filesToCache = [
//        '/',
//       '/index.html',
//       '/settings.html',
//       '/scripts/jquery-min.js',
//       '/scripts/mainjs.js',
//       '/scripts/settings.js',
//       '/styles/main.css',
//       '/anyPicker/fonts/anypicker-font.eot',
//       '/anyPicker/fonts/anypicker-font.svg',
//       '/anyPicker/fonts/anypicker-font.woff',
//       '/anyPicker/fonts/anypicker-font.ttf',
//       '/anyPicker/anypicker-all.css',
//       '/anyPicker/anypicker-core.css',
//       '/anyPicker/anypicker-core.js',
//       '/anyPicker/anypicker-datetime.js',
//       '/anyPicker/anypicker-font.css',
//       '/anyPicker/anypicker.css',
//       '/anyPicker/anypicker.js',
//       '/manifest.json',
//       '/sw.js',
//       '/img/if_plate_logo.png',
//       '/img/motivatingMoments/motivating_moment_1.jpg',
//       '/img/motivatingMoments/motivating_moment_2.jpg',
//       '/img/motivatingMoments/motivating_moment_3.jpg',
//       '/img/motivatingMoments/motivating_moment_4.jpg',
//       '/img/motivatingMoments/motivating_moment_5.jpg',
//       '/img/motivatingMoments/motivating_moment_6.jpg',
//       '/img/motivatingMoments/motivating_moment_7.jpg',
//       '/img/motivatingMoments/motivating_moment_8.jpg',
//       '/img/motivatingMoments/motivating_moment_9.jpg',
//       '/img/motivatingMoments/motivating_moment_10.jpg',
//       '/img/motivatingMoments/motivating_moment_11.jpg',
//       '/img/motivatingMoments/motivating_moment_12.jpg',
//       '/img/motivatingMoments/motivating_moment_13.jpg',
//       '/img/motivatingMoments/motivating_moment_14.jpg',
//       '/img/motivatingMoments/motivating_moment_15.jpg',
//       '/img/motivatingMoments/motivating_moment_16.jpg',
//       '/img/selfTalks/self_talk_1.png',
//       '/img/selfTalks/self_talk_2.jpg',
//       '/img/selfTalks/self_talk_3.jpg',
//       '/img/selfTalks/self_talk_4.jpg',
//       '/img/selfTalks/self_talk_5.jpg',
//       '/img/selfTalks/self_talk_6.png',
//       '/img/selfTalks/self_talk_7.jpg',
//       '/img/selfTalks/self_talk_8.jpg',
//       '/img/selfTalks/self_talk_9.jpg',
//       '/img/selfTalks/self_talk_10.jpg',
//       '/img/selfTalks/self_talk_11.png',
//       '/img/selfTalks/self_talk_12.jpg',
//       '/img/selfTalks/self_talk_13.jpg',
//       '/img/selfTalks/self_talk_14.jpg',
//       '/img/selfTalks/self_talk_15.jpg',
//       '/img/selfTalks/self_talk_16.png',
//       '/img/homeScreen48.png',
//       '/img/homeScreen72.png',
//       '/img/homeScreen96.png',
//       '/img/homeScreen144.png',
//       '/img/homeScreen168.png',
//       '/img/homeScreen192.png',
//       '/img/homeScreen512.png',
//       '/img/addToHomeScreen.png',
//       '/img/addToHomeScreenAndroid.png',
//       '/resources.html',
//       '/scripts/resources.js',
//       '/fonts/stylesheet.css',
//       '/fonts/comfortaa-regular-webfont.woff2',
//       '/fonts/comfortaa-regular-webfont.woff',
//       '/fonts/josefinsans-light-webfont.woff2',
//       '/fonts/josefinsans-light-webfont.woff',
//       '/fonts/josefinsans-regular-webfont.woff',
//       '/fonts/josefinsans-regular-webfont.woff2',
//       '/fonts/comfortaa-light-webfont.woff',
//       '/fonts/comfortaa-light-webfont.woff2'





// ];

// self.addEventListener('install', function(e) {
//   console.log('[ServiceWorker] Install');
//   e.waitUntil(
//     caches.open(cacheName).then(function(cache) {
//       console.log('[ServiceWorker] Caching app shell');
//       return cache.addAll(filesToCache);
//     })
//   );
// });

// self.addEventListener('activate', function(e) {
//   console.log('[ServiceWorker] Activate');
//   e.waitUntil(
//     caches.keys().then(function(keyList) {
//       return Promise.all(keyList.map(function(key) {
//         if (key !== cacheName && key !== dataCacheName) {
//           console.log('[ServiceWorker] Removing old cache', key);
//           return caches.delete(key);
//         }
//       }));
//     })
//   );
//   return self.clients.claim();
// });

// self.addEventListener('fetch', function(e) {
//   console.log('[Service Worker] Fetch', e.request.url);
//   let dataUrl = 'https://query.yahooapis.com/v1/public/yql';
//   if (e.request.url.indexOf(dataUrl) > -1) {
//     e.respondWith(
//       caches.open(dataCacheName).then(function(cache) {
//         return fetch(e.request).then(function(response){
//           cache.put(e.request.url, response.clone());
//           return response;
//         });
//       })
//     );
//   } else {
//     e.respondWith(
//       caches.match(e.request).then(function(response) {
//         return response || fetch(e.request);
//       })
//     );
//   }
// });











self.addEventListener('install', function(evt) {
  evt.waitUntil(precache());
});

function precache() {
  return caches.open('intermittent_fasting').then(function (cache) {
    // list all your assets in the array
    return cache.addAll([
       '/',
      'index.html',
      'manifest.json',
      'settings.html',
      'scripts/jquery-min.js',
      'scripts/mainjs.js',
      'scripts/settings.js',
      'styles/main.css',
      'anyPicker/fonts/anypicker-font.eot',
      'anyPicker/fonts/anypicker-font.svg',
      'anyPicker/fonts/anypicker-font.woff',
      'anyPicker/fonts/anypicker-font.ttf',
      'anyPicker/anypicker-all.css',
      'anyPicker/anypicker-core.css',
      'anyPicker/anypicker-core.js',
      'anyPicker/anypicker-datetime.js',
      'anyPicker/anypicker-font.css',
      'anyPicker/anypicker.css',
      'anyPicker/anypicker.js',
      'sw.js',
      'img/if_plate_logo.png',
      'img/motivatingMoments/motivating_moment_1.jpg',
      'img/motivatingMoments/motivating_moment_2.jpg',
      'img/motivatingMoments/motivating_moment_3.jpg',
      'img/motivatingMoments/motivating_moment_4.jpg',
      'img/motivatingMoments/motivating_moment_5.jpg',
      'img/motivatingMoments/motivating_moment_6.jpg',
      'img/motivatingMoments/motivating_moment_7.jpg',
      'img/motivatingMoments/motivating_moment_8.jpg',
      'img/motivatingMoments/motivating_moment_9.jpg',
      'img/motivatingMoments/motivating_moment_10.jpg',
      'img/motivatingMoments/motivating_moment_11.jpg',
      'img/motivatingMoments/motivating_moment_12.jpg',
      'img/motivatingMoments/motivating_moment_13.jpg',
      'img/motivatingMoments/motivating_moment_14.jpg',
      'img/motivatingMoments/motivating_moment_15.jpg',
      'img/motivatingMoments/motivating_moment_16.jpg',
      'img/selfTalks/self_talk_1.png',
      'img/selfTalks/self_talk_2.jpg',
      'img/selfTalks/self_talk_3.jpg',
      'img/selfTalks/self_talk_4.jpg',
      'img/selfTalks/self_talk_5.jpg',
      'img/selfTalks/self_talk_6.png',
      'img/selfTalks/self_talk_7.jpg',
      'img/selfTalks/self_talk_8.jpg',
      'img/selfTalks/self_talk_9.jpg',
      'img/selfTalks/self_talk_10.jpg',
      'img/selfTalks/self_talk_11.png',
      'img/selfTalks/self_talk_12.jpg',
      'img/selfTalks/self_talk_13.jpg',
      'img/selfTalks/self_talk_14.jpg',
      'img/selfTalks/self_talk_15.jpg',
      'img/selfTalks/self_talk_16.png',
      'img/homeScreen48.png',
      'img/homeScreen72.png',
      'img/homeScreen96.png',
      'img/homeScreen144.png',
      'img/homeScreen168.png',
      'img/homeScreen192.png',
      'img/homeScreen512.png',
      'resources.html',
      'scripts/resources.js',
      'fonts/stylesheet.css',
      'fonts/comfortaa-regular-webfont.woff2',
      'fonts/comfortaa-regular-webfont.woff',
      'fonts/josefinsans-light-webfont.woff2',
      'fonts/josefinsans-light-webfont.woff',
      'fonts/josefinsans-regular-webfont.woff',
      'fonts/josefinsans-regular-webfont.woff2',
      'fonts/comfortaa-light-webfont.woff',
      'fonts/comfortaa-light-webfont.woff2'
    ]);
  });
}

// Everytime the application requests a resource, return it from cache
// and try to refresh it afterwards
self.addEventListener('fetch', function(evt) {
  evt.respondWith(fromCache(evt.request));
  evt.waitUntil(update(evt.request));
});

function fromCache(request) {
  return caches.open('intermittent_fasting').then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match');
    });
  });
}

function update(request) {
  return caches.open('intermittent_fasting').then(function (cache) {
    return fetch(request).then(function (response) {
      // console.log("serviceWorker has finished updating");
      return cache.put(request, response);
    });
  });
}

// window.addEventListener( 'load', () => {
//   window.caches.open( myCache )
//     .then( cache => cache.addAll( content ) )
//     .then( () => alert( 'content is now available offline' ) )
//     .catch( () => alert( 'oh noes! something went wrong' ) );
// });
