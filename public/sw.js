if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(n[c])return;let t={};const r=e=>i(e,c),o={module:{uri:c},exports:t,require:r};n[c]=Promise.all(s.map((e=>o[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/GetStarted.png",revision:"9d716030a352f0ba1e779121b967f0dd"},{url:"/_next/app-build-manifest.json",revision:"eaa25d2ad438c71cc63ac58e59d0e220"},{url:"/_next/static/chunks/107-5400c25a50bcbcc6.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/112-baf83706c662958b.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/293-624a28497c3e54a6.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/331-0e0e4436c24c797b.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/457b8330-abaf97e63829fa5e.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/53c13509-4a39ea84b218e925.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/542-ee96aed3d6f1b50f.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/69-017b762829c74710.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/703-a6854bb87745ee8f.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/792-911e9360a1d99cb1.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/8e1d74a4-1b6fb19c6834e5a8.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/919-004c0c0eb29e85e2.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/94730671-57849f745cb6025b.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/9c4e2130-b43b54cc91f7c7aa.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/app/_not-found-18dfe8ba08857673.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/app/dashboard/page-9e404195d40097a2.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/app/forgot-password/page-be336e1a4bf1f96c.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/app/history/page-da94e716684c65bb.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/app/layout-3df653d666c97931.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/app/location/page-cb987f5b10e07d00.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/app/login/page-5f445ebf5aa31479.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/app/page-6a24cad340b00724.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/app/profile/page-cf5b8c640570e57d.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/app/register/page-2d7bcec762c1d763.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/app/report/page-a58e510c2dab2afa.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/app/verify-forgot-password/page-03b4b6f320044553.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/app/verify-register/page-e5876a60321ede80.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/app/video/page-da0ee7550036f01c.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/ca377847-748a339df1a16877.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/d0deef33-961d3a340fa63ac3.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/fd9d1056-30742dd4cc86f5d3.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/main-app-4c37e0ad3ee3e2d7.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/main-e30ad48b16221ddd.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-f515615ae86fd6c2.js",revision:"nngeO9i6LeYP7F8SVF4NJ"},{url:"/_next/static/css/2243a5f7820bc93d.css",revision:"2243a5f7820bc93d"},{url:"/_next/static/css/4907fee97fe94ec2.css",revision:"4907fee97fe94ec2"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/contact.0b7f3a26.jpg",revision:"10b3b20c22a52ba7144b3694996bd443"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/layers-2x.9859cd12.png",revision:"9859cd12"},{url:"/_next/static/media/layers.ef6db872.png",revision:"ef6db872"},{url:"/_next/static/media/loc.42baa71f.jpg",revision:"0c39f690db69b7293a269e90ee407315"},{url:"/_next/static/media/marker-icon.d577052a.png",revision:"d577052a"},{url:"/_next/static/media/person.24c232b5.png",revision:"8fdca18b79b1213d3a0d234d6249e741"},{url:"/_next/static/media/user.249c8716.png",revision:"9174f493b44bef6a41b17777fc1be075"},{url:"/_next/static/nngeO9i6LeYP7F8SVF4NJ/_buildManifest.js",revision:"b79ad816bd7b118b11d0a6188c5f20e3"},{url:"/_next/static/nngeO9i6LeYP7F8SVF4NJ/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/check.PNG",revision:"2f13d3e43d5a402cf6727c9cfd8f1ff2"},{url:"/contact.jpg",revision:"10b3b20c22a52ba7144b3694996bd443"},{url:"/dashheader.jpg",revision:"6fa07bc72316a9891e0f7979bc5ff8ba"},{url:"/drone.jpeg",revision:"ada056d778d48da9887846d94d1770b9"},{url:"/dronegarbage.jpg",revision:"65afe11388cc5f00ffcd3be5e2d675ef"},{url:"/droneimg.jpeg",revision:"37294d9ddc985e7318d16df70ea949f2"},{url:"/droneloc.jpg",revision:"0113c7b15a426e4b52df5ebb2efa5955"},{url:"/dronepic.jpg",revision:"0113c7b15a426e4b52df5ebb2efa5955"},{url:"/google.png",revision:"b75aecaf9e70a9b1760497e33bcd6db1"},{url:"/icon1.png",revision:"1ee48c35374c3203b5d0445518504aa7"},{url:"/icon2.png",revision:"d1a074cb28785a196a76820ba281c2b7"},{url:"/icon3.png",revision:"0f384250166614fad8a0f5db80cf393d"},{url:"/icon4.png",revision:"898e671b38c728ba01db9c698a431751"},{url:"/img1.jpg",revision:"bb1e3b2cdd1b903fbd921e3b6e3b4d12"},{url:"/loc.jpg",revision:"0c39f690db69b7293a269e90ee407315"},{url:"/login.jpg",revision:"30af78d885da8407a2aa6214b1c6d44e"},{url:"/loginimg.png",revision:"ef8fb6d2a21d4e9f20b66eddd5ebc529"},{url:"/logo.jpg",revision:"eb95fbb8f2e33c285c93e647703f8b43"},{url:"/logo.png",revision:"47b91fffbd53c5e1a72017d4d9d3635b"},{url:"/manifest.json",revision:"e861e32f0ed380ae032084de8a139098"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/person.png",revision:"8fdca18b79b1213d3a0d234d6249e741"},{url:"/profile.jpg",revision:"2a6c222b873de16da100a5fc60a820b1"},{url:"/profile.png",revision:"818b970c10233b362274e7fe602446fb"},{url:"/signupbg.jpeg",revision:"de23e3752d40765f2053c5b64dd2f9d3"},{url:"/user.png",revision:"9174f493b44bef6a41b17777fc1be075"},{url:"/users.jpg",revision:"edcebd5d95fc3facfe3cbf0714baf663"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/wastelogo.png",revision:"bbd4de02b12b5744b6f672e728e9e5ef"},{url:"/welcomeimage.jpg",revision:"ff06e7b00f6d051fac9b2d225b30fd8f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:i,state:s})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
