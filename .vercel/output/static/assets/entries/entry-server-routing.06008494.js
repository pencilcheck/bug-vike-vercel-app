import{_ as r,s as c,g as l,a as u,o,b as _,c as f,l as h,d as v,e as y,f as x,h as E,i as m}from"../chunks/chunk-7fb35581.js";const n={},C={},F={},L={},P=[],p={},b=!0,R=[],w={configValuesImported:[]},O=Object.assign({"/pages/about/index.page.tsx":()=>r(()=>import("./pages_about_index.page.5997bdda.js"),["assets/entries/pages_about_index.page.5997bdda.js","assets/chunks/chunk-4d04ce61.js","assets/static/index.page.f1aef519.css"]),"/pages/index/index.page.tsx":()=>r(()=>import("./pages_index_index.page.631f6b21.js"),["assets/entries/pages_index_index.page.631f6b21.js","assets/chunks/chunk-4d04ce61.js","assets/chunks/chunk-ba88e3b1.js"]),"/renderer/_error.page.tsx":()=>r(()=>import("./renderer_error.page.9b14c43c.js"),["assets/entries/renderer_error.page.9b14c43c.js","assets/chunks/chunk-4d04ce61.js"])}),S={...O};n[".page"]=S;const z=Object.assign({"/renderer/_default.page.client.tsx":()=>r(()=>import("./renderer_default.page.client.9deed7b9.js"),["assets/entries/renderer_default.page.client.9deed7b9.js","assets/chunks/chunk-4d04ce61.js","assets/chunks/chunk-ba88e3b1.js","assets/entries/renderer_default.page.server.extractAssets.334717de.js","assets/static/default.page.server.d4835ae9.css","assets/static/default.page.client.c88455e0.css"])}),I={...z};n[".page.client"]=I;const A=Object.assign({"/renderer/_default.page.server.tsx":()=>r(()=>import("./renderer_default.page.server.extractAssets.334717de.js"),["assets/entries/renderer_default.page.server.extractAssets.334717de.js","assets/static/default.page.server.d4835ae9.css"])}),H={...A};p[".page.server"]=H;const T=Object.freeze(Object.defineProperty({__proto__:null,isGeneratedFile:b,neverLoaded:p,pageConfigGlobalSerialized:w,pageConfigsSerialized:R,pageFilesEager:C,pageFilesExportNamesEager:L,pageFilesExportNamesLazy:F,pageFilesLazy:n,pageFilesList:P},Symbol.toStringTag,{value:"Module"}));c(T);const d=l({withoutHash:!0});async function j(){const e=u();return o(e,{isHydration:!0,isBackwardNavigation:null,_hasPageContextFromClient:!1}),o(e,await k(e._pageId)),V(),e}function V(){const e=l({withoutHash:!0});_(d===e,`The URL was manipulated before the hydration finished ('${d}' to '${e}'). Ensure the hydration has finished before manipulating the URL. Consider using the onHydrationEnd() hook.`)}async function k(e){const t={},{pageFilesAll:a,pageConfigs:i}=await f(!0);return o(t,{_pageFilesAll:a,_pageConfigs:i}),o(t,await h(a,i,e)),a.filter(s=>s.fileType!==".page.server").forEach(s=>{var g;v(!((g=s.fileExports)!=null&&g.onBeforeRender),`export { onBeforeRender } of ${s.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define onBeforeRender() in a .page.server.js file instead, see https://vike.dev/onBeforeRender-isomorphic#server-routing`,{onlyOnce:!0})}),t}y();const B=!0;x(B);D();async function D(){var t,a;const e=await j();await E(e,!1),m(e,"onHydrationEnd"),await((a=(t=e.exports).onHydrationEnd)==null?void 0:a.call(t,e))}
