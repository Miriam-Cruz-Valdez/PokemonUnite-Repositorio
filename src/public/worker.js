const cachePWA="cache-site-v1";

const assets=[
    "/",
    "/index.html",
    "/descripcion.html",
    "/manifiest.json",
    "/worker.js",
    "/main.js",
    "/routes/index.js",
    "../index.js",
    "../webpush.js",
    "../../.env",
    
    "/assets/css/images/overlay.png",
    "/assets/css/main.css",
    "/assets/css/fontawesome-all.min.css",
    "/assets/css/styles.css",


    "/assets/js/breakpoints.min.js",
    "/assets/js/browser.min.js",
    "/assets/js/jquery.min.js",
    "/assets/js/jquery.poptrox.min.js",
    "/assets/js/main.js",
    "/assets/js/util.js",
    "/assets/js/jquery.custom.js",
    "/assets/js/jquery.tools.js",
    "/assets/js/jquery-1.3.2.min.js",

    "/assets/sass/main.scss",
    "/assets/sass/libs/_breakpoints.scss",
    "/assets/sass/libs/_functions.scss",
    "/assets/sass/libs/_html-grid.scss",
    "/assets/sass/libs/_mixins.scss",
    "/assets/sass/libs/_vars.scss",
    "/assets/sass/libs/_vendor.scss",

    "/assets/webfonts/fa-brands-400.eot",
    "/assets/webfonts/fa-brands-400.svg",
    "/assets/webfonts/fa-brands-400.ttf",
    "/assets/webfonts/fa-brands-400.woff",
    "/assets/webfonts/fa-brands-400.woff2",
    "/assets/webfonts/fa-regular-400.eot",
    "/assets/webfonts/fa-regular-400.svg",
    "/assets/webfonts/fa-regular-400.ttf",
    "/assets/webfonts/fa-regular-400.woff",
    "/assets/webfonts/fa-regular-400.woff2",
    "/assets/webfonts/fa-solid-900.oet",
    "/assets/webfonts/fa-solid-900.svg",
    "/assets/webfonts/fa-solid-900.ttf",
    "/assets/webfonts/fa-solid-900.woff",
    "/assets/webfonts/fa-solid-900.woff2",

    "/assets/images/avatar.jpg",
    "/assets/images/bg.jpg",
    "/assets/images/fulls/",
    "/assets/images/fulls/stat-garchomp.png",
    "/assets/images/fulls/stat-cinderace.png",
    "/assets/images/fulls/stat-mr-mime.png",
    "/assets/images/fulls/stat-greninja.png",
    "/assets/images/fulls/stat-snorlax.png",
    "/assets/images/fulls/stat-pikachu.png",
    "/assets/images/fulls/stat-decidueye.png",
    "/assets/images/fulls/stat-greedent.png",
    "/assets/images/fulls/stat-sylveon.png",
    "/assets/images/fulls/stat-venusaur.png",
    "/assets/images/fulls/stat-alolan-ninetales.png",
    "/assets/images/fulls/stat-zeraora.png",
    

    "/assets/images/icons/pokemon_32x32.png",
    "/assets/images/icons/pokemon_64x64.png",
    "/assets/images/icons/pokemon_256x256.png",

    "/assets/images/thumbs/stat-garchomp.png",
    "/assets/images/thumbs/stat-cinderace.png",
    "/assets/images/thumbs/stat-mr-mime.png",
    "/assets/images/thumbs/stat-greninja.png",
    "/assets/images/thumbs/stat-snorlax.png",
    "/assets/images/thumbs/stat-pikachu.png",

  
    


    
];

self.addEventListener("install",installEvent=>{
    installEvent.waitUntil(
        caches.open(cachePWA).then(cache =>{
            cache.addAll(assets);
        })
    )

});
self.addEventListener("fetch",fetchEvent=>{
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res =>{
            return res || fetch(fetchEvent.request);
        })
    )
});

//Notificación Push

console.log('Service Worker Works');

self.addEventListener('push', e => {
    const data = e.data.json();
    console.log(data)
    console.log('Notificación Recibida');
    self.registration.showNotification(data.title, {
        body: data.message,
        icon: 'https://www.pinpng.com/pngs/m/102-1029052_pokemon-pikachu-free-png-image-pokemon-logo-with.png'
    });
});

self.addEventListener('notificationclick', e => {
    //---access data from event using event.notification.data---
    console.log('Click en Notificación: ', e.notification.data);
    var url = '/descripcion.html';

    //---close the notification---
    e.notification.close();

    //---open the app and navigate to breaking.html
    // after clicking the notification---
    e.waitUntil(
        clients.openWindow(url)
    );
});