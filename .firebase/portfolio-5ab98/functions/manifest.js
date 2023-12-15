export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["AI Logo.png","favicon.png","icons/space-base-1.png","icons/space-exploration-colony-1-6.png","icons/space-exploration-sputnik-1-5.png","icons/space-galaxy-7.png","icons/space-rocket-3.png","icons/space-rocket-launch-2.png","icons/space-science.png","icons/space-ship-4.png","particlesjs-config.json"]),
	mimeTypes: {".png":"image/png",".json":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.fdd5ed1f.js","app":"_app/immutable/entry/app.95b0472c.js","imports":["_app/immutable/entry/start.fdd5ed1f.js","_app/immutable/chunks/scheduler.cc9b4bb6.js","_app/immutable/chunks/singletons.9c99912a.js","_app/immutable/entry/app.95b0472c.js","_app/immutable/chunks/scheduler.cc9b4bb6.js","_app/immutable/chunks/index.ee4d2bbe.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/aboutme",
				pattern: /^\/aboutme\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/educationandexperience",
				pattern: /^\/educationandexperience\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/portfolio",
				pattern: /^\/portfolio\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
