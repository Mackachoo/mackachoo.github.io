import{s as l,n as c}from"../chunks/scheduler.cc9b4bb6.js";import{S as f,i as m,d as r,v as u,o as d,p,a as _,g}from"../chunks/index.ee4d2bbe.js";function i(a){let e;const o={c:function(){e=d("Some Stuff")},l:function(t){e=p(t,"Some Stuff")},m:function(t,n){_(t,e,n)},p:c,i:c,o:c,d:function(t){t&&g(e)}};return r("SvelteRegisterBlock",{block:o,id:i.name,type:"component",source:"",ctx:a}),o}function v(a,e){let{$$slots:o={},$$scope:s}=e;u("Page",o,[]);const t=[];return Object.keys(e).forEach(n=>{!~t.indexOf(n)&&n.slice(0,2)!=="$$"&&n!=="slot"&&console.warn(`<Page> was created with unknown prop '${n}'`)}),[]}class $ extends f{constructor(e){super(e),m(this,e,v,i,l,{}),r("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:i.name})}}export{$ as component};