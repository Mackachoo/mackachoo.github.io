

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.b773cfc8.js","_app/immutable/chunks/scheduler.cc9b4bb6.js","_app/immutable/chunks/index.ee4d2bbe.js"];
export const stylesheets = [];
export const fonts = [];
