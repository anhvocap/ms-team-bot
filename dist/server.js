(()=>{"use strict";var e={64:function(e,r,t){var o=this&&this.__createBinding||(Object.create?function(e,r,t,o){void 0===o&&(o=t);var s=Object.getOwnPropertyDescriptor(r,t);s&&!("get"in s?!r.__esModule:s.writable||s.configurable)||(s={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,o,s)}:function(e,r,t,o){void 0===o&&(o=t),e[o]=r[t]}),s=this&&this.__exportStar||function(e,r){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(r,t)||o(r,e,t)};Object.defineProperty(r,"__esModule",{value:!0}),r.nonce=void 0,r.nonce={},s(t(163),r)},163:function(e,r,t){var o=this&&this.__decorate||function(e,r,t,o){var s,n=arguments.length,i=n<3?r:null===o?o=Object.getOwnPropertyDescriptor(r,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,r,t,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(n<3?s(i):n>3?s(r,t,i):s(r,t))||i);return n>3&&i&&Object.defineProperty(r,t,i),i};Object.defineProperty(r,"__esModule",{value:!0}),r.MyWorkTab=void 0;const s=t(698);let n=class{};n=o([(0,s.PreventIframe)("/myWorkTab/index.html"),(0,s.PreventIframe)("/myWorkTab/config.html"),(0,s.PreventIframe)("/myWorkTab/remove.html")],n),r.MyWorkTab=n},455:e=>{e.exports=require("compression")},974:e=>{e.exports=require("debug")},142:e=>{e.exports=require("dotenv")},860:e=>{e.exports=require("express")},698:e=>{e.exports=require("express-msteams-host")},470:e=>{e.exports=require("morgan")},685:e=>{e.exports=require("http")},17:e=>{e.exports=require("path")}},r={};function t(o){var s=r[o];if(void 0!==s)return s.exports;var n=r[o]={exports:{}};return e[o].call(n.exports,n,n.exports,t),n.exports}(()=>{const e=t(860),r=t(685),o=t(17),s=t(470),n=t(698),i=t(974),a=t(455),c=i("msteams");c("Initializing Microsoft Teams Express hosted App..."),t(142).config();const u=t(64),p=e(),d=process.env.port||process.env.PORT||3007;p.use(e.json({verify:(e,r,t,o)=>{e.rawBody=t.toString()}})),p.use(e.urlencoded({extended:!0})),p.set("views",o.join(__dirname,"/")),p.use(s("tiny")),p.use(a()),p.use("/scripts",e.static(o.join(__dirname,"web/scripts"))),p.use("/assets",e.static(o.join(__dirname,"web/assets"))),p.use((0,n.MsTeamsApiRouter)(u)),p.use((0,n.MsTeamsPageRouter)({root:o.join(__dirname,"web/"),components:u})),p.use("/",e.static(o.join(__dirname,"web/"),{index:"index.html"})),p.set("port",d),r.createServer(p).listen(d,(()=>{c(`Server running on ${d}`)}))})()})();
//# sourceMappingURL=server.js.map