export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["logo.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.DpmrbZeg.js",app:"_app/immutable/entry/app.CU4u-VRi.js",imports:["_app/immutable/entry/start.DpmrbZeg.js","_app/immutable/chunks/B5isLzP-.js","_app/immutable/chunks/DrT0ZMPV.js","_app/immutable/entry/app.CU4u-VRi.js","_app/immutable/chunks/CO3NILB8.js","_app/immutable/chunks/DrT0ZMPV.js","_app/immutable/chunks/CqNvrnYF.js","_app/immutable/chunks/B_F1-HWf.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
