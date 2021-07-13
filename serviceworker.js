self.addEventListener("install", e => {
e.waitUntil(
	caches.open("static").then(cache => {
		return cache.addAll(["./", "./assets/css/ijendev.min.css", "./assets/css/ijendev.css", "./img/author192.png"]);
	})
);
});
self.addEventListener("fetch", e =>{
	// console.log(`Intercepting fetch request for: ${e.request.url}`);

	e.respondWith(
		caches.match(e.request).then(response => {
			return response || fetch(e.request);
		})
	);
});


// 