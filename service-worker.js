if(!self.define){let e,s={};const r=(r,o)=>(r=new URL(r+".js",o).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(o,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const u=e=>r(e,n),d={module:{uri:n},exports:c,require:u};s[n]=Promise.all(o.map((e=>d[e]||u(e)))).then((e=>(i(...e),c)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"wordfeud-hacker"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/wordfeusk/css/app.fa8bac19.css",revision:null},{url:"/wordfeusk/help-svgrepo-com (1).svg",revision:"ceee0052e9381b86cab270e5ba049158"},{url:"/wordfeusk/index.html",revision:"f8d470895f80b5326b94dc2272469a3a"},{url:"/wordfeusk/js/app.420c2559.js",revision:null},{url:"/wordfeusk/js/chunk-vendors.85bf156b.js",revision:null},{url:"/wordfeusk/manifest.json",revision:"013c3978368a5e9e676ac92af6fc17e8"},{url:"/wordfeusk/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/wordfeusk/search-advanced-svgrepo-com.svg",revision:"79635db1bf0e89cdd6dadb09b7d05c05"}],{})}));
//# sourceMappingURL=service-worker.js.map
