if(!self.define){let e,s={};const r=(r,o)=>(r=new URL(r+".js",o).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(o,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const d=e=>r(e,n),u={module:{uri:n},exports:c,require:d};s[n]=Promise.all(o.map((e=>u[e]||d(e)))).then((e=>(i(...e),c)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"wordfeud-hacker"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/wordfeusk/css/app.fb6fba6f.css",revision:null},{url:"/wordfeusk/help-svgrepo-com (1).svg",revision:"ceee0052e9381b86cab270e5ba049158"},{url:"/wordfeusk/index.html",revision:"d7f77a0db7e9c2ab1940baac46503d24"},{url:"/wordfeusk/js/app.ed30ce5d.js",revision:null},{url:"/wordfeusk/js/chunk-vendors.85bf156b.js",revision:null},{url:"/wordfeusk/manifest.json",revision:"013c3978368a5e9e676ac92af6fc17e8"},{url:"/wordfeusk/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/wordfeusk/search-advanced-svgrepo-com.svg",revision:"79635db1bf0e89cdd6dadb09b7d05c05"}],{})}));
//# sourceMappingURL=service-worker.js.map
