function k(){}const F=t=>t;function w(t,n){for(const e in n)t[e]=n[e];return t}function j(t){return t()}function P(){return Object.create(null)}function E(t){t.forEach(j)}function S(t){return typeof t=="function"}function U(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let i;function A(t,n){return t===n?!0:(i||(i=document.createElement("a")),i.href=n,t===i.href)}function B(t){return Object.keys(t).length===0}function q(t,...n){if(t==null){for(const r of n)r(void 0);return k}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function C(t,n,e){t.$$.on_destroy.push(q(n,e))}function D(t,n,e,r){if(t){const o=y(t,n,e,r);return t[0](o)}}function y(t,n,e,r){return t[1]&&r?w(e.ctx.slice(),t[1](r(n))):e.ctx}function G(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const l=[],_=Math.max(n.dirty.length,o.length);for(let s=0;s<_;s+=1)l[s]=n.dirty[s]|o[s];return l}return n.dirty|o}return n.dirty}function H(t,n,e,r,o,l){if(o){const _=y(n,e,r,l);t.p(_,o)}}function I(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}let f;function d(t){f=t}function m(){if(!f)throw new Error("Function called outside component initialization");return f}function J(t){m().$$.on_mount.push(t)}function K(t){m().$$.after_update.push(t)}const a=[],b=[];let u=[];const g=[],x=Promise.resolve();let p=!1;function v(){p||(p=!0,x.then(M))}function L(){return v(),x}function O(t){u.push(t)}const h=new Set;let c=0;function M(){if(c!==0)return;const t=f;do{try{for(;c<a.length;){const n=a[c];c++,d(n),z(n.$$)}}catch(n){throw a.length=0,c=0,n}for(d(null),a.length=0,c=0;b.length;)b.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];h.has(e)||(h.add(e),e())}u.length=0}while(a.length);for(;g.length;)g.pop()();p=!1,h.clear(),d(t)}function z(t){if(t.fragment!==null){t.update(),E(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function N(t){const n=[],e=[];u.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),u=n}export{K as a,b,C as c,O as d,D as e,G as f,I as g,A as h,S as i,F as j,P as k,M as l,B as m,k as n,J as o,N as p,f as q,E as r,U as s,L as t,H as u,d as v,j as w,a as x,v as y};
