if(!self.define){let s,l={};const e=(e,i)=>(e=new URL(e+".js",i).href,l[e]||new Promise((l=>{if("document"in self){const s=document.createElement("script");s.src=e,s.onload=l,document.head.appendChild(s)}else s=e,importScripts(e),l()})).then((()=>{let s=l[e];if(!s)throw new Error(`Module ${e} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(l[n])return;let u={};const a=s=>e(s,n),t={module:{uri:n},exports:u,require:a};l[n]=Promise.all(i.map((s=>t[s]||a(s)))).then((s=>(r(...s),u)))}}define(["./workbox-1eb19836"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"200",revision:"6053634057b0f247944e061c6155b717"},{url:"404",revision:"6053634057b0f247944e061c6155b717"},{url:"apple-touch-icon.png",revision:"8b5d23adf13cc40f215a72fad25d9b1d"},{url:"assets/_id_.C2Oyuent.css",revision:null},{url:"assets/3aLoi2fs.js",revision:null},{url:"assets/55eqh71t.js",revision:null},{url:"assets/8kKHd4ZL.js",revision:null},{url:"assets/B2VvftIS.js",revision:null},{url:"assets/B2ZkQZSL.js",revision:null},{url:"assets/B7F3HtPF.js",revision:null},{url:"assets/B9TqLHAk.js",revision:null},{url:"assets/BACCcnx_.js",revision:null},{url:"assets/bC257e71.js",revision:null},{url:"assets/BCTFAUpS.js",revision:null},{url:"assets/BE3rRE_G.js",revision:null},{url:"assets/BE8RsGBA.js",revision:null},{url:"assets/BemVzBTY.js",revision:null},{url:"assets/Bg9QKxBu.js",revision:null},{url:"assets/BGDl7St1.js",revision:null},{url:"assets/BHddiNFS.js",revision:null},{url:"assets/BHUZy23s.js",revision:null},{url:"assets/Bi_qi707.js",revision:null},{url:"assets/BjieXrMO.js",revision:null},{url:"assets/bold.2JfRo6pj.ttf",revision:null},{url:"assets/bold.B4o9Siml.ttf",revision:null},{url:"assets/bold.CArNNkSo.otf",revision:null},{url:"assets/bold.CX3nFGdj.otf",revision:null},{url:"assets/bold.D1b7czW9.ttf",revision:null},{url:"assets/bold.D8A7svot.ttf",revision:null},{url:"assets/bold.DcqXiNP3.otf",revision:null},{url:"assets/bolditalic.BmuAIsMD.ttf",revision:null},{url:"assets/bolditalic.BuOu_Z5X.otf",revision:null},{url:"assets/bolditalic.Cn4P82iL.otf",revision:null},{url:"assets/bolditalic.DbIlENiU.ttf",revision:null},{url:"assets/bolditalic.gU__EM_J.ttf",revision:null},{url:"assets/bolditalic.uP5PuZ0j.otf",revision:null},{url:"assets/BR_hrfni.js",revision:null},{url:"assets/BriwQgXR.js",revision:null},{url:"assets/BrXDlLUW.js",revision:null},{url:"assets/BSJtEu7s.js",revision:null},{url:"assets/BtxyJn6H.js",revision:null},{url:"assets/Btz91-7U.js",revision:null},{url:"assets/BVWDLtw5.js",revision:null},{url:"assets/BvyzZa65.js",revision:null},{url:"assets/ByThyB2Q.js",revision:null},{url:"assets/BZQrJoCF.js",revision:null},{url:"assets/BZs-M4m5.js",revision:null},{url:"assets/C__SbcrF.js",revision:null},{url:"assets/C3-3IcFM.js",revision:null},{url:"assets/C4g7059C.js",revision:null},{url:"assets/C5B-Dyhu.js",revision:null},{url:"assets/C60_ePHw.js",revision:null},{url:"assets/C6Gjjw_x.js",revision:null},{url:"assets/C7hRTYZ9.js",revision:null},{url:"assets/C8zJ04aV.js",revision:null},{url:"assets/CaUdfbQS.js",revision:null},{url:"assets/CCCmp334.js",revision:null},{url:"assets/CElzELwZ.js",revision:null},{url:"assets/CGsvhooB.js",revision:null},{url:"assets/CilYvikO.js",revision:null},{url:"assets/CKDUeRmd.js",revision:null},{url:"assets/ClBCoF8h.js",revision:null},{url:"assets/CNk-c2w1.js",revision:null},{url:"assets/codicon.BA2IlpFX.ttf",revision:null},{url:"assets/CQ6TMH2r.js",revision:null},{url:"assets/CQnCLemc.js",revision:null},{url:"assets/Crkvc3mc.js",revision:null},{url:"assets/css.worker-DvNUQFd1.js",revision:null},{url:"assets/CTBHJ-SC.js",revision:null},{url:"assets/CuCtxA7T.js",revision:null},{url:"assets/CUsyEhik.js",revision:null},{url:"assets/CuU66Ptk.js",revision:null},{url:"assets/CUuBwSI6.js",revision:null},{url:"assets/CxaaEKKi.js",revision:null},{url:"assets/CY5IOZuu.js",revision:null},{url:"assets/CYoSlgTu.js",revision:null},{url:"assets/D-OVkc4F.js",revision:null},{url:"assets/D2p3uOX2.js",revision:null},{url:"assets/D3ApGBxz.js",revision:null},{url:"assets/D5k9sY44.js",revision:null},{url:"assets/D5sGVkLV.js",revision:null},{url:"assets/D6taVZFb.js",revision:null},{url:"assets/D8nrxEjS.js",revision:null},{url:"assets/D8V_buCG.js",revision:null},{url:"assets/DD5ev3Vf.js",revision:null},{url:"assets/De1axCfe.js",revision:null},{url:"assets/DFjpnwFp.js",revision:null},{url:"assets/DgZoLDI1.js",revision:null},{url:"assets/DIEZMp5R.js",revision:null},{url:"assets/DJJ695mm.js",revision:null},{url:"assets/DL_FVbcQ.js",revision:null},{url:"assets/DMAqh5Lk.js",revision:null},{url:"assets/DNI1vH3h.js",revision:null},{url:"assets/DNUaDNdz.js",revision:null},{url:"assets/DozOpKnV.js",revision:null},{url:"assets/DPDQl0_U.js",revision:null},{url:"assets/DrIuu9u1.js",revision:null},{url:"assets/DRxbB97D.js",revision:null},{url:"assets/Dsa4rhA_.js",revision:null},{url:"assets/DSpi8_qN.js",revision:null},{url:"assets/DsrzVyM1.js",revision:null},{url:"assets/DUImKuGY.js",revision:null},{url:"assets/DVJXmIwd.js",revision:null},{url:"assets/DYsfeylR.js",revision:null},{url:"assets/DZNw3jJB.js",revision:null},{url:"assets/editor.ChyOjXgx.css",revision:null},{url:"assets/editor.worker-BVwmgLrR.js",revision:null},{url:"assets/entry.BI-cgk2Y.css",revision:null},{url:"assets/error-404.DtbKAVpD.css",revision:null},{url:"assets/error-500.7_wNPYQ_.css",revision:null},{url:"assets/GbSrCElU.js",revision:null},{url:"assets/hbBFZ0w9.js",revision:null},{url:"assets/index.BueJ6JY7.css",revision:null},{url:"assets/italic.B006CNRt.otf",revision:null},{url:"assets/italic.BfYpPhiQ.ttf",revision:null},{url:"assets/italic.BhLaVUsL.ttf",revision:null},{url:"assets/italic.CtQkwsbK.otf",revision:null},{url:"assets/italic.sUu3xK4L.otf",revision:null},{url:"assets/italic.U3zDcBL8.ttf",revision:null},{url:"assets/jqFeRM5s.js",revision:null},{url:"assets/KaTeX_AMS-Regular.BQhdFMY1.woff2",revision:null},{url:"assets/KaTeX_AMS-Regular.DRggAlZN.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold.ATXxdsX0.ttf",revision:null},{url:"assets/KaTeX_Caligraphic-Bold.Dq_IR9rO.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular.Di6jR-x-.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular.wX97UBjC.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold.BdnERNNW.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Bold.CL6g_b3V.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular.CB_wures.ttf",revision:null},{url:"assets/KaTeX_Fraktur-Regular.CTYiF6lA.woff2",revision:null},{url:"assets/KaTeX_Main-Bold.Cx986IdX.woff2",revision:null},{url:"assets/KaTeX_Main-Bold.waoOVXN0.ttf",revision:null},{url:"assets/KaTeX_Main-BoldItalic.DxDJ3AOS.woff2",revision:null},{url:"assets/KaTeX_Main-BoldItalic.DzxPMmG6.ttf",revision:null},{url:"assets/KaTeX_Main-Italic.3WenGoN9.ttf",revision:null},{url:"assets/KaTeX_Main-Italic.NWA7e6Wa.woff2",revision:null},{url:"assets/KaTeX_Main-Regular.B22Nviop.woff2",revision:null},{url:"assets/KaTeX_Main-Regular.ypZvNtVU.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic.B3XSjfu4.ttf",revision:null},{url:"assets/KaTeX_Math-BoldItalic.CZnvNsCZ.woff2",revision:null},{url:"assets/KaTeX_Math-Italic.flOr_0UB.ttf",revision:null},{url:"assets/KaTeX_Math-Italic.t53AETM-.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold.CFMepnvq.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Bold.D1sUS0GD.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Italic.C3H0VqGB.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Italic.YYjJ1zSn.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular.BNo7hRIc.ttf",revision:null},{url:"assets/KaTeX_SansSerif-Regular.DDBCnlJ7.woff2",revision:null},{url:"assets/KaTeX_Script-Regular.C5JkGWo-.ttf",revision:null},{url:"assets/KaTeX_Script-Regular.D3wIWfF6.woff2",revision:null},{url:"assets/KaTeX_Size1-Regular.Dbsnue_I.ttf",revision:null},{url:"assets/KaTeX_Size1-Regular.mCD8mA8B.woff2",revision:null},{url:"assets/KaTeX_Size2-Regular.B7gKUWhC.ttf",revision:null},{url:"assets/KaTeX_Size2-Regular.Dy4dx90m.woff2",revision:null},{url:"assets/KaTeX_Size3-Regular.DgpXs0kz.ttf",revision:null},{url:"assets/KaTeX_Size4-Regular.Dl5lxZxV.woff2",revision:null},{url:"assets/KaTeX_Size4-Regular.DWFBv043.ttf",revision:null},{url:"assets/KaTeX_Typewriter-Regular.CO6r4hn1.woff2",revision:null},{url:"assets/KaTeX_Typewriter-Regular.D3Ib7_Hf.ttf",revision:null},{url:"assets/KqQ96-gC.js",revision:null},{url:"assets/LA0C7mUc.js",revision:null},{url:"assets/mWSI85Nw.js",revision:null},{url:"assets/N5ajIiFQ.js",revision:null},{url:"assets/QDarlsp7.js",revision:null},{url:"assets/Qea9fmmb.js",revision:null},{url:"assets/regular.C59i-JIY.otf",revision:null},{url:"assets/regular.DCtZAFBW.otf",revision:null},{url:"assets/regular.DT0fM1uu.ttf",revision:null},{url:"assets/regular.DTSkpAnp.ttf",revision:null},{url:"assets/regular.DysTBsqN.ttf",revision:null},{url:"assets/regular.lvl9fZ61.ttf",revision:null},{url:"assets/regular.ujiHdYas.otf",revision:null},{url:"assets/VVGvvgir.js",revision:null},{url:"assets/w7.G_kyatnr.ttf",revision:null},{url:"assets/w9.LxosMOIK.ttf",revision:null},{url:"assets/Z6z2stHy.js",revision:null},{url:"assets/zD_CCkZ1.js",revision:null},{url:"favicon-dark.svg",revision:"496f2c5bda76eacee78c8e1fc92d00d1"},{url:"favicon.svg",revision:"1301d06df37eff0ca0bf808656842828"},{url:"/markdown-resume/",revision:"07e2018a6b165d99f03b105067c73201"},{url:"pwa-192x192.png",revision:"e3ee23607a02913fa308a010c3f732be"},{url:"pwa-512x512.png",revision:"94db878cb6e20a5ae061b5352c96d243"},{url:"safari-pinned-tab.svg",revision:"ebc4be35e86410cc899f73d56063dc68"},{url:"_payload.json",revision:"b2d54088db0eeb3d15b1464be0a49c78"},{url:"assets/builds/latest.json",revision:"4acbef6a55a19bc3bcda34d769f921a9"},{url:"assets/builds/meta/a6908ff1-aca8-4c6e-9baf-6f60e1e43bc6.json",revision:null},{url:"manifest.webmanifest",revision:"3b5de7dd4822f6c89f56c1e36a7b2a88"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/markdown-resume/"))),s.registerRoute(/^https:\/\/fonts.googleapis.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
