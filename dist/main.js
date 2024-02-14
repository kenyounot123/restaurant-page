(()=>{"use strict";var e={272:(e,n,t)=>{t.d(n,{c:()=>c});var a=t(500),r=t.n(a),o=t(312),i=t.n(o)()(r());i.push([e.id,".contact-container {\n  color: white;\n  width: 90%;\n  margin: 1em auto;\n}\n.contact-title {\n  margin: 2rem 0;\n  text-align: center;\n  font-size: 3rem;\n}",""]);const c=i},544:(e,n,t)=>{t.d(n,{c:()=>c});var a=t(500),r=t.n(a),o=t(312),i=t.n(o)()(r());i.push([e.id,".home-container {\n  color: white;\n  width: 90%;\n  margin: 1em auto;\n}\n.home-title {\n  margin: 2rem 0;\n  text-align: center;\n  font-size: 3rem;\n}\n.about-container {\n  color: black;\n  width: 50%;\n  margin: 0 auto;\n  padding: 50px;\n  background-color: antiquewhite;\n  border-radius: 50px;\n}\n.about-title {\n  font-size: 2rem;\n}\n.about-content {\n  font-size: 1.5rem;\n\n}",""]);const c=i},452:(e,n,t)=>{t.d(n,{c:()=>c});var a=t(500),r=t.n(a),o=t(312),i=t.n(o)()(r());i.push([e.id,".menu-container {\n  color: black;\n  width: 90%;\n  margin: 1em auto;\n}\n.menu-title {\n  color: white;\n  margin: 1em 0;\n  text-align: center;\n  font-size: 3rem;\n}\n.menu-grid {\n  display: grid;\n  width: 50%;\n  grid-template-columns: repeat(auto-fill, minmax(calc(100% / 3), 1fr));\n  margin: 0 auto;\n  gap: 20px;\n}\n.menu-card{\n  width: 100%;\n  border: 2px white solid;\n  padding: 2em;\n  border-radius: 50px;\n  background-color: antiquewhite;\n}\n\n.menu-card-title {\n  font-size: 2rem;\n  text-align: center;\n  margin-bottom: 10px;\n}\n.menu-card-img {\n  max-width: 100%;\n  border-radius: 50px;\n}\n.menu-content {\n  font-size: 1.2rem;\n}",""]);const c=i},892:(e,n,t)=>{t.d(n,{c:()=>m});var a=t(500),r=t.n(a),o=t(312),i=t.n(o),c=t(536),s=t.n(c),d=new URL(t(492),t.b),l=i()(r()),u=s()(d);l.push([e.id,`* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: "Oswald", sans-serif;\n}\nbody {\n  background-color: #495057;\n  background-image: url(${u});\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n#content {\n  flex-grow: 1;\n}\n.nav-container {\n  background-color: rgba(33, 37, 41, 0.5);\n}\n.nav-bar {\n  width: 90%;\n  display: flex;\n  margin: 0 auto;\n}\n.main-nav {\n  display: flex;\n  margin: 0 auto;\n  gap: 100px;\n}\n.nav-bar-buttons {\n  font-size: 2rem;\n  color: white;\n  background: none;\n  border: none;\n  padding: 10px;\n  margin: 0;\n}\n.nav-bar-buttons:hover {\n  background-color: grey;\n}\n.footer-container {\n  background-color: #212529;\n  min-height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.footer-content {\n  width: 90%;\n  text-align: center;\n  font-size: 1.2rem;\n  color: white;\n  margin: 0 auto;\n  flex-shrink: 0;\n}`,""]);const m=l},312:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},536:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},500:e=>{e.exports=function(e){return e[1]}},596:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],d=a.base?s[0]+a.base:s[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var m=t(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var f=r(p,a);a.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var s=a(e,r),d=0;d<o.length;d++){var l=t(o[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=s}}},176:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},808:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},120:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},520:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},936:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},492:(e,n,t)=>{e.exports=t.p+"87fae8b605ece232d345.jpg"}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var o=n[a]={id:a,exports:{}};return e[a](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&!e;)e=a[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(596),n=t.n(e),a=t(520),r=t.n(a),o=t(176),i=t.n(o),c=t(120),s=t.n(c),d=t(808),l=t.n(d),u=t(936),m=t.n(u),p=t(892),f={};f.styleTagTransform=m(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),n()(p.c,f),p.c&&p.c.locals&&p.c.locals;var h=t(272),g={};g.styleTagTransform=m(),g.setAttributes=s(),g.insert=i().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=l(),n()(h.c,g),h.c&&h.c.locals&&h.c.locals;var b=t(544),v={};v.styleTagTransform=m(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=l(),n()(b.c,v),b.c&&b.c.locals&&b.c.locals;const y=function(){const e=document.getElementById("content"),n=document.createElement("div");n.classList.add("home-container");const t=document.createElement("h1");t.classList.add("home-title"),t.textContent="Mabs Delights",n.appendChild(t);const a=document.createElement("div");a.classList.add("about-container");const r=document.createElement("h2");r.classList.add("about-title");const o=document.createElement("p");o.classList.add("about-content"),r.textContent="About Us",o.textContent="\n  Mabs delight is a heartwarming bakery that is NYC based.\n  We have the best baked goods in Brooklyn with some fan favorites being our Fruit tarts and Apple pies. ",a.appendChild(r),a.appendChild(o),n.appendChild(a),e.appendChild(n)};var x=t(452),w={};w.styleTagTransform=m(),w.setAttributes=s(),w.insert=i().bind(null,"head"),w.domAPI=r(),w.insertStyleElement=l(),n()(x.c,w),x.c&&x.c.locals&&x.c.locals;const C=[t.p+"76dbccb77ce394664d37.png",t.p+"ab028a6ad97157fac273.png"],E=["Fruit Tarts","Apple Pies"],L=["A delectable pastry dessert with a flaky crust, creamy filling, and vibrant fresh fruits, offering a delightful blend of sweet and tangy flavors in every bite. Fruit tarts vary in size starting from $2.50 to $20","A classic dessert featuring a buttery, flaky crust filled with tender slices of apples, gently spiced and baked to golden perfection, evoking warm and comforting memories with every indulgent bite. Apple pies vary in size and go from $10 to $20"],k=document.getElementById("content"),T=document.querySelector("#home-btn"),A=document.querySelector("#menu-btn"),S=document.querySelector("#contact-btn");y(),T.addEventListener("click",(()=>{k.innerHTML=" ",y()})),A.addEventListener("click",(()=>{k.innerHTML=" ",function(){const e=document.getElementById("content"),n=document.createElement("div");n.classList.add("menu-container");const t=document.createElement("h1");t.classList.add("menu-title"),t.textContent="Our Menu",n.appendChild(t);const a=document.createElement("div");a.classList.add("menu-grid"),E.forEach(((e,n)=>{let t=document.createElement("div");t.classList.add("menu-card");let r=document.createElement("h3"),o=document.createElement("img");o.classList.add("menu-card-img"),r.classList.add("menu-card-title"),r.textContent=`${e}`,o.setAttribute("src",C[n]),o.setAttribute("alt",`${e}`);let i=document.createElement("p");i.classList.add("menu-content"),i.textContent=L[n],t.appendChild(r),t.appendChild(o),t.appendChild(i),a.appendChild(t)})),n.appendChild(a),e.appendChild(n)}()})),S.addEventListener("click",(()=>{k.innerHTML=" ",function(){const e=document.getElementById("content"),n=document.createElement("div");n.classList.add("contact-container");const t=document.createElement("h1");t.classList.add("contact-title"),t.textContent="Contacts",n.appendChild(t);const a=document.createElement("div");a.classList.add("hours-container");const r=document.createElement("h2");r.classList.add("hours-title"),r.textContent="Hours",a.appendChild(r);const o=document.createElement("ul");o.classList.add("hours-list"),["Monday: 9am - 5pm","Tuesday: 9am - 5pm","Wednesday: 9am - 5pm","Thursday: 9am - 5pm","Friday: 9am - 5pm","Saturday: 10am - 3pm","Sunday: Closed"].forEach((e=>{const n=document.createElement("li");n.classList.add("hours-item"),n.textContent=e,o.appendChild(n)})),a.appendChild(o);const i=document.createElement("div");i.classList.add("socials-container");const c=document.createElement("h2");c.classList.add("socials-title"),c.textContent="Socials",i.appendChild(c);const s=document.createElement("ul");s.classList.add("socials-list"),["Follow us on Instagram!","Follow us on Facebook!","Follow us on TikTok!","Email us at randomemail@gmail.com"].forEach((e=>{const n=document.createElement("li");n.classList.add("socials-item"),n.textContent=e,s.appendChild(n)})),i.appendChild(s),n.appendChild(a),n.appendChild(i),e.appendChild(n)}()}))})()})();