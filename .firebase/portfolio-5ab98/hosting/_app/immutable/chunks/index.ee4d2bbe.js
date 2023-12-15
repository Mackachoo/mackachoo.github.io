var C=Object.defineProperty;var M=(e,t,n)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var _=(e,t,n)=>(M(e,typeof t!="symbol"?t+"":t,n),n);import{r as p,n as v,i as S,j,k as b,l as I,m as N,p as E,q as B,w as R,x as q,y as P,z as T}from"./scheduler.cc9b4bb6.js";let y=!1;function z(){y=!0}function H(){y=!1}function V(e,t,n,i){for(;e<t;){const s=e+(t-e>>1);n(s)<=i?e=s+1:t=s}return e}function L(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let a=0;a<t.length;a++){const u=t[a];u.claim_order!==void 0&&r.push(u)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let s=0;for(let r=0;r<t.length;r++){const a=t[r].claim_order,u=(s>0&&t[n[s]].claim_order<=a?s+1:V(1,s,h=>t[n[h]].claim_order,a))-1;i[r]=n[u]+1;const f=u+1;n[f]=r,s=Math.max(f,s)}const c=[],l=[];let o=t.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(c.push(t[r-1]);o>=r;o--)l.push(t[o]);o--}for(;o>=0;o--)l.push(t[o]);c.reverse(),l.sort((r,a)=>r.claim_order-a.claim_order);for(let r=0,a=0;r<l.length;r++){for(;a<c.length&&l[r].claim_order>=c[a].claim_order;)a++;const u=a<c.length?c[a]:null;e.insertBefore(l[r],u)}}function O(e,t){if(y){for(L(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function U(e,t,n){y&&!n?O(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function A(e){e.parentNode&&e.parentNode.removeChild(e)}function W(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function ae(){return x(" ")}function le(){return x("")}function k(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function oe(e){return e.dataset.svelteH}function F(e){return Array.from(e.childNodes)}function G(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function D(e,t,n,i,s=!1){G(e);const c=(()=>{for(let l=e.claim_info.last_index;l<e.length;l++){const o=e[l];if(t(o)){const r=n(o);return r===void 0?e.splice(l,1):e[l]=r,s||(e.claim_info.last_index=l),o}}for(let l=e.claim_info.last_index-1;l>=0;l--){const o=e[l];if(t(o)){const r=n(o);return r===void 0?e.splice(l,1):e[l]=r,s?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=l,o}}return i()})();return c.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,c}function J(e,t,n,i){return D(e,s=>s.nodeName===t,s=>{const c=[];for(let l=0;l<s.attributes.length;l++){const o=s.attributes[l];n[o.name]||c.push(o.name)}c.forEach(l=>s.removeAttribute(l))},()=>i(t))}function ce(e,t,n){return J(e,t,n,W)}function K(e,t){return D(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(t),!0)}function fe(e){return K(e," ")}function ue(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function Q(e,t,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:i})}const $=new Set;let d;function de(){d={r:0,c:[],p:d}}function _e(){d.r||p(d.c),d=d.p}function X(e,t){e&&e.i&&($.delete(e),e.i(t))}function me(e,t,n,i){if(e&&e.o){if($.has(e))return;$.add(e),d.c.push(()=>{$.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function he(e){e&&e.c()}function $e(e,t){e&&e.l(t)}function Y(e,t,n){const{fragment:i,after_update:s}=e.$$;i&&i.m(t,n),b(()=>{const c=e.$$.on_mount.map(R).filter(E);e.$$.on_destroy?e.$$.on_destroy.push(...c):p(c),e.$$.on_mount=[]}),s.forEach(b)}function Z(e,t){const n=e.$$;n.fragment!==null&&(q(n.after_update),p(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ee(e,t){e.$$.dirty[0]===-1&&(P.push(e),T(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function pe(e,t,n,i,s,c,l=null,o=[-1]){const r=I;N(e);const a=e.$$={fragment:null,ctx:[],props:c,update:v,not_equal:s,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:S(),dirty:o,skip_bound:!1,root:t.target||r.$$.root};l&&l(a.root);let u=!1;if(a.ctx=n?n(e,t.props||{},(f,h,...w)=>{const g=w.length?w[0]:h;return a.ctx&&s(a.ctx[f],a.ctx[f]=g)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](g),u&&ee(e,f)),h}):[],a.update(),u=!0,p(a.before_update),a.fragment=i?i(a.ctx):!1,t.target){if(t.hydrate){z();const f=F(t.target);a.fragment&&a.fragment.l(f),f.forEach(A)}else a.fragment&&a.fragment.c();t.intro&&X(e.$$.fragment),Y(e,t.target,t.anchor),H(),j()}N(r)}class te{constructor(){_(this,"$$");_(this,"$$set")}$destroy(){Z(this,1),this.$destroy=v}$on(t,n){if(!E(n))return v;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(t){this.$$set&&!B(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ne="4.2.8",ie="4";function m(e,t){document.dispatchEvent(Q(e,{version:ne,...t},{bubbles:!0}))}function ye(e,t){m("SvelteDOMInsert",{target:e,node:t}),O(e,t)}function ve(e,t,n){m("SvelteDOMInsert",{target:e,node:t,anchor:n}),U(e,t,n)}function xe(e){m("SvelteDOMRemove",{node:e}),A(e)}function we(e,t,n){k(e,t,n),n==null?m("SvelteDOMRemoveAttribute",{node:e,attribute:t}):m("SvelteDOMSetAttribute",{node:e,attribute:t,value:n})}function ge(e,t){t=""+t,e.data!==t&&(m("SvelteDOMSetData",{node:e,data:t}),e.data=t)}function Se(e,t,n){for(const i of Object.keys(t))~n.indexOf(i)||console.warn(`<${e}> received an unexpected slot "${i}".`)}function be(e,t){const n="this={...} of <svelte:component> should specify a Svelte component.";try{const i=new e(t);if(!i.$$||!i.$set||!i.$on||!i.$destroy)throw new Error(n);return i}catch(i){const{message:s}=i;throw typeof s=="string"&&s.indexOf("is not a constructor")!==-1?new Error(n):i}}class Ne extends te{constructor(n){if(!n||!n.target&&!n.$$inline)throw new Error("'target' is a required option");super();_(this,"$$prop_def");_(this,"$$events_def");_(this,"$$slot_def")}$destroy(){super.$destroy(),this.$destroy=()=>{console.warn("Component was already destroyed")}}$capture_state(){}$inject_state(){}}typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ie);export{ye as A,Ne as S,ve as a,_e as b,fe as c,m as d,le as e,X as f,xe as g,be as h,pe as i,W as j,ce as k,F as l,we as m,ue as n,x as o,K as p,ge as q,de as r,ae as s,me as t,he as u,Se as v,$e as w,Y as x,Z as y,oe as z};
