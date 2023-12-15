

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/aboutme/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.e202fd81.js","_app/immutable/chunks/scheduler.cc9b4bb6.js","_app/immutable/chunks/index.ee4d2bbe.js"];
export const stylesheets = [];
export const fonts = [];
