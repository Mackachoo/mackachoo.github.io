

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.aec73831.js","_app/immutable/chunks/scheduler.cc9b4bb6.js","_app/immutable/chunks/index.ee4d2bbe.js","_app/immutable/chunks/singletons.9c99912a.js"];
export const stylesheets = [];
export const fonts = [];
