import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const app = "";
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-full fixed bottom-0 z-index: 100"> <div class="sky-discrete opacity-10"></div> <div class="sky-discrete opacity-25"></div> <div class="sky-discrete opacity-50"></div> <div class="sky-discrete opacity-1"></div>  <div class="bg-rust h-16 flex flex-row justify-evenly items-center"><button class="navbutton" data-svelte-h="svelte-1wgzwwb">About Me</button> <button class="navbutton" data-svelte-h="svelte-ps54cg">Portfolio</button> <button class="navbutton" data-svelte-h="svelte-1zpiv7">Education and Experience</button></div></div>`;
});
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="bg-hide w-full fixed bottom-0 z-index: 100" data-svelte-h="svelte-wi0yh6">Contact Me</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="relative flex flex-col mx-auto w-full">${validate_component(Contact, "ContactButton").$$render($$result, {}, {}, {})} <div class="max-w-4xl p-10">${slots.default ? slots.default({}) : ``}</div> ${validate_component(Navigation, "NavigationBar").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
