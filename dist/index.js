!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){var n,o,i;o=[],void 0===(i="function"==typeof(n=function(){for(var t=[null,[[10,7,17,13],[1,1,1,1],[]],[[16,10,28,22],[1,1,1,1],[4,16]],[[26,15,22,18],[1,1,2,2],[4,20]],[[18,20,16,26],[2,1,4,2],[4,24]],[[24,26,22,18],[2,1,4,4],[4,28]],[[16,18,28,24],[4,2,4,4],[4,32]],[[18,20,26,18],[4,2,5,6],[4,20,36]],[[22,24,26,22],[4,2,6,6],[4,22,40]],[[22,30,24,20],[5,2,8,8],[4,24,44]],[[26,18,28,24],[5,4,8,8],[4,26,48]],[[30,20,24,28],[5,4,11,8],[4,28,52]],[[22,24,28,26],[8,4,11,10],[4,30,56]],[[22,26,22,24],[9,4,16,12],[4,32,60]],[[24,30,24,20],[9,4,16,16],[4,24,44,64]],[[24,22,24,30],[10,6,18,12],[4,24,46,68]],[[28,24,30,24],[10,6,16,17],[4,24,48,72]],[[28,28,28,28],[11,6,19,16],[4,28,52,76]],[[26,30,28,28],[13,6,21,18],[4,28,54,80]],[[26,28,26,26],[14,7,25,21],[4,28,56,84]],[[26,28,28,30],[16,8,25,20],[4,32,60,88]],[[26,28,30,28],[17,8,25,23],[4,26,48,70,92]],[[28,28,24,30],[17,9,34,23],[4,24,48,72,96]],[[28,30,30,30],[18,9,30,25],[4,28,52,76,100]],[[28,30,30,30],[20,10,32,27],[4,26,52,78,104]],[[28,26,30,30],[21,12,35,29],[4,30,56,82,108]],[[28,28,30,28],[23,12,37,34],[4,28,56,84,112]],[[28,30,30,30],[25,12,40,34],[4,32,60,88,116]],[[28,30,30,30],[26,13,42,35],[4,24,48,72,96,120]],[[28,30,30,30],[28,14,45,38],[4,28,52,76,100,124]],[[28,30,30,30],[29,15,48,40],[4,24,50,76,102,128]],[[28,30,30,30],[31,16,51,43],[4,28,54,80,106,132]],[[28,30,30,30],[33,17,54,45],[4,32,58,84,110,136]],[[28,30,30,30],[35,18,57,48],[4,28,56,84,112,140]],[[28,30,30,30],[37,19,60,51],[4,32,60,88,116,144]],[[28,30,30,30],[38,19,63,53],[4,28,52,76,100,124,148]],[[28,30,30,30],[40,20,66,56],[4,22,48,74,100,126,152]],[[28,30,30,30],[43,21,70,59],[4,26,52,78,104,130,156]],[[28,30,30,30],[45,22,74,62],[4,30,56,82,108,134,160]],[[28,30,30,30],[47,24,77,65],[4,24,52,80,108,136,164]],[[28,30,30,30],[49,25,81,68],[4,28,56,84,112,140,168]]],e=/^\d*$/,r=/^[A-Za-z0-9 $%*+\-./:]*$/,n=/^[A-Z0-9 $%*+\-./:]*$/,o=[],i=[-1],a=0,u=1;a<255;++a)o.push(u),i[u]=a,u=2*u^(u>=128?285:0);var f=[[]];for(a=0;a<30;++a){for(var c=f[a],s=[],l=0;l<=a;++l){var h=l<a?o[c[l]]:0,p=o[(a+(c[l-1]||0))%255];s.push(i[h^p])}f.push(s)}var d={};for(a=0;a<45;++a)d["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:".charAt(a)]=a;var v=[function(t,e){return(t+e)%2==0},function(t,e){return t%2==0},function(t,e){return e%3==0},function(t,e){return(t+e)%3==0},function(t,e){return((t/2|0)+(e/3|0))%2==0},function(t,e){return t*e%2+t*e%3==0},function(t,e){return(t*e%2+t*e%3)%2==0},function(t,e){return((t+e)%2+t*e%3)%2==0}],g=function(t){return t>6},y=function(e,r){var n=-8&function(e){var r=t[e],n=16*e*e+128*e+64;return g(e)&&(n-=36),r[2].length&&(n-=25*r[2].length*r[2].length-10*r[2].length-55),n}(e),o=t[e];return n-=8*o[0][r]*o[1][r]},b=function(t,e){switch(e){case 1:return t<10?10:t<27?12:14;case 2:return t<10?9:t<27?11:13;case 4:return t<10?8:16;case 8:return t<10?8:t<27?10:12}},m=function(t,e,r){var n=y(t,r)-4-b(t,e);switch(e){case 1:return 3*(n/10|0)+(n%10<4?0:n%10<7?1:2);case 2:return 2*(n/11|0)+(n%11<6?0:1);case 4:return n/8|0;case 8:return n/13|0}},w=function(t,e){for(var r=t.slice(0),n=t.length,a=e.length,u=0;u<a;++u)r.push(0);for(u=0;u<n;){var f=i[r[u++]];if(f>=0)for(var c=0;c<a;++c)r[u+c]^=o[(f+e[c])%255]}return r.slice(n)},x=function(t,e,r,n){for(var o=t<<n,i=e-1;i>=0;--i)o>>n+i&1&&(o^=r<<i);return t<<n|o},O=function(t,e,r){for(var n=v[r],o=t.length,i=0;i<o;++i)for(var a=0;a<o;++a)e[i][a]||(t[i][a]^=n(i,a));return t},P=function(t,e,r,n){for(var o=t.length,i=21522^x(r<<3|n,5,1335,10),a=0;a<15;++a){var u=[o-1,o-2,o-3,o-4,o-5,o-6,o-7,o-8,7,5,4,3,2,1,0][a];t[[0,1,2,3,4,5,7,8,o-7,o-6,o-5,o-4,o-3,o-2,o-1][a]][8]=t[8][u]=i>>a&1}return t},j=function(t){for(var e=function(t){for(var e=0,r=0;r<t.length;++r)t[r]>=5&&(e+=t[r]-5+3);for(r=5;r<t.length;r+=2){var n=t[r];t[r-1]==n&&t[r-2]==3*n&&t[r-3]==n&&t[r-4]==n&&(t[r-5]>=4*n||t[r+1]>=4*n)&&(e+=40)}return e},r=t.length,n=0,o=0,i=0;i<r;++i){var a,u=t[i];a=[0];for(var f=0;f<r;){for(c=0;f<r&&u[f];++c)++f;for(a.push(c),c=0;f<r&&!u[f];++c)++f;a.push(c)}for(n+=e(a),a=[0],f=0;f<r;){var c;for(c=0;f<r&&t[f][i];++c)++f;for(a.push(c),c=0;f<r&&!t[f][i];++c)++f;a.push(c)}n+=e(a);var s=t[i+1]||[];for(o+=u[0],f=1;f<r;++f){var l=u[f];o+=l,u[f-1]==l&&s[f]===l&&s[f-1]===l&&(n+=3)}}return n+=10*(Math.abs(o/r/r-.5)/.05|0)},S=function(e,r,n,o,i){var a=t[r],u=function(t,e,r,n){var o=[],i=0,a=8,u=r.length,f=function(t,e){if(e>=a){for(o.push(i|t>>(e-=a));e>=8;)o.push(t>>(e-=8)&255);i=0,a=8}e>0&&(i|=(t&(1<<e)-1)<<(a-=e))},c=b(t,e);switch(f(e,4),f(u,c),e){case 1:for(var s=2;s<u;s+=3)f(parseInt(r.substring(s-2,s+1),10),10);f(parseInt(r.substring(s-2),10),[0,4,7][u%3]);break;case 2:for(s=1;s<u;s+=2)f(45*d[r.charAt(s-1)]+d[r.charAt(s)],11);u%2==1&&f(d[r.charAt(s-1)],6);break;case 4:for(s=0;s<u;++s)f(r[s],8)}for(f(0,4),a<8&&o.push(i);o.length+1<n;)o.push(236,17);return o.length<n&&o.push(236),o}(r,n,e,y(r,o)>>3);u=function(t,e,r){for(var n=[],o=t.length/e|0,i=0,a=e-t.length%e,u=0;u<a;++u)n.push(i),i+=o;for(u=a;u<e;++u)n.push(i),i+=o+1;n.push(i);var f=[];for(u=0;u<e;++u)f.push(w(t.slice(n[u],n[u+1]),r));var c=[],s=t.length/e|0;for(u=0;u<s;++u)for(var l=0;l<e;++l)c.push(t[n[l]+u]);for(l=a;l<e;++l)c.push(t[n[l+1]-1]);for(u=0;u<r.length;++u)for(l=0;l<e;++l)c.push(f[l][u]);return c}(u,a[1][o],f[a[0][o]]);var c=function(e){for(var r=t[e],n=function(t){return 4*t+17}(e),o=[],i=[],a=0;a<n;++a)o.push([]),i.push([]);var u=function(t,e,r,n,a){for(var u=0;u<r;++u)for(var f=0;f<n;++f)o[t+u][e+f]=a[u]>>f&1,i[t+u][e+f]=1};for(u(0,0,9,9,[127,65,93,93,93,65,383,0,64]),u(n-8,0,8,9,[256,127,65,93,93,93,65,127]),u(0,n-8,9,8,[254,130,186,186,186,130,254,0,0]),a=9;a<n-8;++a)o[6][a]=o[a][6]=1&~a,i[6][a]=i[a][6]=1;var f=r[2],c=f.length;for(a=0;a<c;++a)for(var s=0==a?c-1:c,l=0==a||a==c-1?1:0;l<s;++l)u(f[a],f[l],5,5,[31,17,21,17,31]);if(g(e)){var h=x(e,6,7973,12),p=0;for(a=0;a<6;++a)for(l=0;l<3;++l)o[a][n-11+l]=o[n-11+l][a]=h>>p++&1,i[a][n-11+l]=i[n-11+l][a]=1}return{matrix:o,reserved:i}}(r),s=c.matrix,l=c.reserved;if(function(t,e,r){for(var n=t.length,o=0,i=-1,a=n-1;a>=0;a-=2){6==a&&--a;for(var u=i<0?n-1:0,f=0;f<n;++f){for(var c=a;c>a-2;--c)e[u][c]||(t[u][c]=r[o>>3]>>(7&~o)&1,++o);u+=i}i=-i}}(s,l,u),i<0){O(s,l,0),P(s,0,o,0);var h=0,p=j(s);for(O(s,l,0),i=1;i<8;++i){O(s,l,i),P(s,0,o,i);var v=j(s);p>v&&(p=v,h=i),O(s,l,i)}i=h}return O(s,l,i),P(s,0,o,i),s},M={generate:function(t,o){var i={numeric:1,alphanumeric:2,octet:4},a={L:1,M:0,Q:3,H:2},u=(o=o||{}).version||-1,f=a[(o.ecclevel||"L").toUpperCase()],c=o.mode?i[o.mode.toLowerCase()]:-1,s="mask"in o?o.mask:-1;if(c<0)c="string"==typeof t?t.match(e)?1:t.match(n)?2:4:4;else if(1!=c&&2!=c&&4!=c)throw"invalid or unsupported mode";if(null===(t=function(t,n){switch(t){case 1:return n.match(e)?n:null;case 2:return n.match(r)?n.toUpperCase():null;case 4:if("string"==typeof n){for(var o=[],i=0;i<n.length;++i){var a=n.charCodeAt(i);a<128?o.push(a):a<2048?o.push(192|a>>6,128|63&a):a<65536?o.push(224|a>>12,128|a>>6&63,128|63&a):o.push(240|a>>18,128|a>>12&63,128|a>>6&63,128|63&a)}return o}return n}}(c,t)))throw"invalid data format";if(f<0||f>3)throw"invalid ECC level";if(u<0){for(u=1;u<=40&&!(t.length<=m(u,c,f));++u);if(u>40)throw"too large data"}else if(u<1||u>40)throw"invalid version";if(-1!=s&&(s<0||s>8))throw"invalid mask";return S(t,u,c,f,s)},generateHTML:function(t,e){e=e||{};for(var r=M.generate(t,e),n=Math.max(e.modulesize||5,.5),o=e.unit||"px",i=e.ratio||1,a=Math.max(null!==e.margin?e.margin:4,0),u=document.createElement("div"),f=r.length,c=['<table border="0" cellspacing="0" cellpadding="0" style="border:'+n*a+'px solid #fff;background:#fff">'],s=0;s<f;++s){c.push("<tr>");for(var l=0;l<f;++l){const t="px"!==o?"width:"+n*i+o+"; height:"+n*i+o:"width:"+n+"px;height:"+n+"px";console.log("generateHTML",{unit:o,ratio:i,modsize:n,size:t}),c.push('<td style="'+t+(r[s][l]?";background:#000":"")+'" part="'+(r[s][l]?"module-fg":"module-bg")+'" ></td>')}c.push("</tr>")}return u.className="qrcode",u.innerHTML=c.join("")+"</table>",u},generateSVG:function(t,e){e=e||{};var r=M.generate(t,e),n=r.length,o=Math.max(e.modulesize||5,.5),i=Math.max(null!==e.margin?e.margin:4,0),a=o*(n+2*i),u=' class= "fg" width="'+o+'" height="'+o+'"/>',f=document.createElementNS("http://www.w3.org/2000/svg","svg");f.setAttribute("viewBox","0 0 "+a+" "+a),f.setAttribute("style","shape-rendering:crispEdges"),e.modulesize&&(f.setAttribute("width",a),f.setAttribute("height",a));for(var c=["<style scoped>.bg{fill:#FFF}.fg{fill:#000}</style>",'<rect class="bg" x="0" y="0"','width="'+a+'" height="'+a+'"/>'],s=i*o,l=0;l<n;++l){for(var h=i*o,p=0;p<n;++p)r[l][p]&&c.push('<rect x="'+h+'" y="'+s+'"',u),h+=o;s+=o}return f.innerHTML=c.join(""),f},generatePNG:function(t,e){e=e||{};var r,n=M.generate(t,e),o=Math.max(e.modulesize||5,.5),i=Math.max(null!==e.margin?e.margin:4,0),a=n.length,u=o*(a+2*i),f=document.createElement("canvas");if(f.width=f.height=u,!(r=f.getContext("2d")))throw"canvas support is needed for PNG output";r.fillStyle="#fff",r.fillRect(0,0,u,u),r.fillStyle="#000";for(var c=0;c<a;++c)for(var s=0;s<a;++s)n[c][s]&&r.fillRect(o*(i+s),o*(i+c),o,o);return f.toDataURL()}};return M})?n.apply(e,o):n)||(t.exports=i)},function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,a=void 0,a=function(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===i(a)?a:String(a)),n)}var o,a}function u(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return f(t)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(t){var e="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return s(t,arguments,p(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),h(n,t)})(t)}function s(t,e,r){return(s=l()?Reflect.construct.bind():function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&h(o,r.prototype),o}).apply(null,arguments)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function h(t,e){return(h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(d,t);var e,r,n,i,c,s=(e=d,r=l(),function(){var t,n=p(e);if(r){var o=p(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return u(this,t)});function d(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,d),(t=s.call(this))._defineProperty=t._defineProperty.bind(f(t)),t.attachShadow({mode:"open"}),Object.keys(d.defaultAttributes).map(t._defineProperty),t}return n=d,c=[{key:"defaultAttributes",get:function(){return{data:null,format:"png",modulesize:5,margin:4,unit:"px",ratio:1}}},{key:"observedAttributes",get:function(){return Object.keys(d.defaultAttributes)}}],(i=[{key:"attributeChangedCallback",value:function(t,e,r){var n=this[t+"Changed"];n&&"function"==typeof n&&n.call(this,e,r),this.generate()}},{key:"_defineProperty",value:function(t){var e=this;Object.defineProperty(this,t,{get:function(){var r=e.getAttribute(t);return null===r?d.defaultAttributes[t]:r},set:function(r){e.setAttribute(t,r)}})}},{key:"getOptions",value:function(){var t=this.modulesize,e=this.margin,r=this.unit,n=this.ratio;return{margin:null!==e?parseInt(e):e,modulesize:null!==t?parseInt(t):t,unit:r||"px",ratio:n||1}}},{key:"generate",value:function(){try{this.clear(),null!==this.data?"png"===this.format?this.generatePNG():"html"===this.format?this.generateHTML():"svg"===this.format?this.generateSVG():this.shadowRoot.textContent="qr-code: ".concat(this.format," not supported!"):this.shadowRoot.textContent="qr-code: no data!"}catch(t){console.error(t),this.shadowRoot.textContent="qr-code: error!"}}},{key:"generatePNG",value:function(){var t=document.createElement("img");t.src=o.a.generatePNG(this.data,this.getOptions()),t.setAttribute("part","img"),this.shadowRoot.appendChild(t)}},{key:"generateHTML",value:function(){var t=o.a.generateHTML(this.data,this.getOptions()).firstChild;t.setAttribute("part","table"),this.shadowRoot.appendChild(t)}},{key:"generateSVG",value:function(){var t=o.a.generateSVG(this.data,this.getOptions());t.setAttribute("part","svg"),this.shadowRoot.appendChild(t)}},{key:"clear",value:function(){for(;this.shadowRoot.lastChild;)this.shadowRoot.removeChild(this.shadowRoot.lastChild)}}])&&a(n.prototype,i),c&&a(n,c),Object.defineProperty(n,"prototype",{writable:!1}),d}(c(HTMLElement));customElements.get("qr-code")||customElements.define("qr-code",d)}]);