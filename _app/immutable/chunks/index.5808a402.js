var G=Object.defineProperty;var J=(t,e,n)=>e in t?G(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var P=(t,e,n)=>(J(t,typeof e!="symbol"?e+"":e,n),n);import{n as w,r as v,j as D,d as z,k as K,l as O,m as Q,p as X,q as Y,v as Z,w as q,x as tt,y as et,z as nt}from"./scheduler.d55865c2.js";const T=typeof window<"u";let it=T?()=>window.performance.now():()=>Date.now(),I=T?t=>requestAnimationFrame(t):w;const g=new Set;function H(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&I(H)}function rt(t){let e;return g.size===0&&I(H),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let C=!1;function st(){C=!0}function lt(){C=!1}function at(t,e,n,i){for(;t<e;){const o=t+(e-t>>1);n(o)<=i?t=o+1:e=o}return t}function ot(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let a=0;a<e.length;a++){const d=e[a];d.claim_order!==void 0&&r.push(d)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let o=0;for(let r=0;r<e.length;r++){const a=e[r].claim_order,d=(o>0&&e[n[o]].claim_order<=a?o+1:at(1,o,m=>e[n[m]].claim_order,a))-1;i[r]=n[d]+1;const c=d+1;n[c]=r,o=Math.max(c,o)}const u=[],l=[];let s=e.length-1;for(let r=n[o]+1;r!=0;r=i[r-1]){for(u.push(e[r-1]);s>=r;s--)l.push(e[s]);s--}for(;s>=0;s--)l.push(e[s]);u.reverse(),l.sort((r,a)=>r.claim_order-a.claim_order);for(let r=0,a=0;r<l.length;r++){for(;a<u.length&&l[r].claim_order>=u[a].claim_order;)a++;const d=a<u.length?u[a]:null;t.insertBefore(l[r],d)}}function ut(t,e){t.appendChild(e)}function k(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ct(t){const e=U("style");return e.textContent="/* empty */",ft(k(t),e),e.sheet}function ft(t,e){return ut(t.head||t,e),e.sheet}function dt(t,e){if(C){for(ot(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Pt(t,e,n){C&&!n?dt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function F(t){t.parentNode&&t.parentNode.removeChild(t)}function Rt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function U(t){return document.createElement(t)}function M(t){return document.createTextNode(t)}function zt(){return M(" ")}function Dt(){return M("")}function It(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Mt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ot(t){return t.dataset.svelteH}function _t(t){return Array.from(t.childNodes)}function mt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function V(t,e,n,i,o=!1){mt(t);const u=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const s=t[l];if(e(s)){const r=n(s);return r===void 0?t.splice(l,1):t[l]=r,o||(t.claim_info.last_index=l),s}}for(let l=t.claim_info.last_index-1;l>=0;l--){const s=t[l];if(e(s)){const r=n(s);return r===void 0?t.splice(l,1):t[l]=r,o?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function ht(t,e,n,i){return V(t,o=>o.nodeName===e,o=>{const u=[];for(let l=0;l<o.attributes.length;l++){const s=o.attributes[l];n[s.name]||u.push(s.name)}u.forEach(l=>o.removeAttribute(l))},()=>i(e))}function qt(t,e,n){return ht(t,e,n,U)}function pt(t,e){return V(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>M(e),!0)}function Lt(t){return pt(t," ")}function Tt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ht(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function $t(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function kt(t,e){return new t(e)}const E=new Map;let A=0;function yt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function gt(t,e){const n={stylesheet:ct(e),rules:{}};return E.set(t,n),n}function L(t,e,n,i,o,u,l,s=0){const r=16.666/i;let a=`{
`;for(let _=0;_<=1;_+=r){const y=e+(n-e)*u(_);a+=_*100+`%{${l(y,1-y)}}
`}const d=a+`100% {${l(n,1-n)}}
}`,c=`__svelte_${yt(d)}_${s}`,m=k(t),{stylesheet:$,rules:f}=E.get(m)||gt(m,t);f[c]||(f[c]=!0,$.insertRule(`@keyframes ${c} ${d}`,$.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${c} ${i}ms linear ${o}ms 1 both`,A+=1,c}function xt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),o=n.length-i.length;o&&(t.style.animation=i.join(", "),A-=o,A||wt())}function wt(){I(()=>{A||(E.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&F(e)}),E.clear())})}let x;function vt(){return x||(x=Promise.resolve(),x.then(()=>{x=null})),x}function R(t,e,n){t.dispatchEvent($t(`${e?"intro":"outro"}${n}`))}const N=new Set;let p;function Ft(){p={r:0,c:[],p}}function Ut(){p.r||v(p.c),p=p.p}function bt(t,e){t&&t.i&&(N.delete(t),t.i(e))}function Vt(t,e,n,i){if(t&&t.o){if(N.has(t))return;N.add(t),p.c.push(()=>{N.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Nt={duration:0};function Wt(t,e,n,i){let u=e(t,n,{direction:"both"}),l=i?0:1,s=null,r=null,a=null,d;function c(){a&&xt(t,a)}function m(f,h){const _=f.b-l;return h*=Math.abs(_),{a:l,b:f.b,d:_,duration:h,start:f.start,end:f.start+h,group:f.group}}function $(f){const{delay:h=0,duration:_=300,easing:y=K,tick:S=w,css:j}=u||Nt,B={start:it()+h,b:f};f||(B.group=p,p.r+=1),"inert"in t&&(f?d!==void 0&&(t.inert=d):(d=t.inert,t.inert=!0)),s||r?r=B:(j&&(c(),a=L(t,l,f,_,h,y,j)),f&&S(0,1),s=m(B,_),z(()=>R(t,f,"start")),rt(b=>{if(r&&b>r.start&&(s=m(r,_),r=null,R(t,s.b,"start"),j&&(c(),a=L(t,l,s.b,s.duration,0,y,u.css))),s){if(b>=s.end)S(l=s.b,1-l),R(t,s.b,"end"),r||(s.b?c():--s.group.r||v(s.group.c)),s=null;else if(b>=s.start){const W=b-s.start;l=s.a+s.d*y(W/s.duration),S(l,1-l)}}return!!(s||r)}))}return{run(f){D(u)?vt().then(()=>{u=u({direction:f?"in":"out"}),$(f)}):$(f)},end(){c(),s=r=null}}}function Gt(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Jt(t){t&&t.c()}function Kt(t,e){t&&t.l(e)}function Et(t,e,n){const{fragment:i,after_update:o}=t.$$;i&&i.m(e,n),z(()=>{const u=t.$$.on_mount.map(tt).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...u):v(u),t.$$.on_mount=[]}),o.forEach(z)}function At(t,e){const n=t.$$;n.fragment!==null&&(Y(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ct(t,e){t.$$.dirty[0]===-1&&(et.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Qt(t,e,n,i,o,u,l=null,s=[-1]){const r=Z;q(t);const a=t.$$={fragment:null,ctx:[],props:u,update:w,not_equal:o,bound:O(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:O(),dirty:s,skip_bound:!1,root:e.target||r.$$.root};l&&l(a.root);let d=!1;if(a.ctx=n?n(t,e.props||{},(c,m,...$)=>{const f=$.length?$[0]:m;return a.ctx&&o(a.ctx[c],a.ctx[c]=f)&&(!a.skip_bound&&a.bound[c]&&a.bound[c](f),d&&Ct(t,c)),m}):[],a.update(),d=!0,v(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){st();const c=_t(e.target);a.fragment&&a.fragment.l(c),c.forEach(F)}else a.fragment&&a.fragment.c();e.intro&&bt(t.$$.fragment),Et(t,e.target,e.anchor),lt(),Q()}q(r)}class Xt{constructor(){P(this,"$$");P(this,"$$set")}$destroy(){At(this,1),this.$destroy=w}$on(e,n){if(!D(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(e){this.$$set&&!X(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const St="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(St);export{It as A,Wt as B,Gt as C,Xt as S,Pt as a,Ut as b,Lt as c,bt as d,Dt as e,F as f,U as g,qt as h,Qt as i,_t as j,Mt as k,Ht as l,M as m,pt as n,Tt as o,Ft as p,kt as q,Jt as r,zt as s,Vt as t,Kt as u,Et as v,At as w,dt as x,Rt as y,Ot as z};
