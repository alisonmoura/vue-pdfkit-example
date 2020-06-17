(function(e){function t(t){for(var r,s,c=t[0],i=t[1],l=t[2],f=0,d=[];f<c.length;f++)s=c[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("theme-changer"),e._m(0),n("font-sizer"),n("home")],1)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-center"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}})])}],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",{staticClass:"text-center"},[e._v(e._s(e.title))]),e._m(0),n("instructions")],1)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"text-center"},[e._v(" An example for generating build generate and download a PDF file full client-side using "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Vue")]),e._v(" and "),n("a",{attrs:{href:"https://pdfkit.org",target:"_blank",rel:"noopener"}},[e._v("PDFKit")]),e._v(". ")])}],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("Dependencies")]),e._m(0),n("h3",[e._v("Setup")]),e._m(1),n("vue-config-snippet")],1)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("Vue 2")]),n("li",[e._v("PDFKit")]),n("li",[e._v("Blob Stream")]),n("li",[e._v("Browser File Downloader")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"instructions text-justify"},[e._v(" First of all, we'll need to change some "),n("span",[e._v("webpack")]),e._v(" configurations. As we are using "),n("span",[e._v("Vue CLI 3")]),e._v(" for scaffolding your project, we have to create the "),n("span",[e._v("vue.config.js")]),e._v(" file on the project's root folder: ")])}],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{markdown:"1"},domProps:{innerHTML:e._s(e.content)}})},f=[],d={data:function(){return{content:"\n    configureWebpack: {\n    resolve: {\n      alias: {\n        fs: 'pdfkit/js/virtual-fs.js'\n      }\n    },\n    module: {\n      rules: [\n        {\n          enforce: 'post',\n          test: /fontkit[/\\]index.js$/,\n          loader: 'transform-loader?brfs'\n        },\n        {\n          enforce: 'post',\n          test: /unicode-properties[/\\]index.js$/,\n          loader: 'transform-loader?brfs'\n        },\n        {\n          enforce: 'post',\n          test: /linebreak[/\\]src[/\\]linebreaker.js/,\n          loader: 'transform-loader?brfs'\n        },\n        { test: /src[/\\]assets/, loader: 'arraybuffer-loader' },\n        { test: /.afm$/, loader: 'raw-loader' }\n      ]\n    }\n  }"}}},p=d,v=n("2877"),_=Object(v["a"])(p,u,f,!1,null,null,null),h=_.exports,m={components:{VueConfigSnippet:h}},b=m,g=(n("cd27"),Object(v["a"])(b,i,l,!1,null,"24982a80",null)),y=g.exports,j={name:"Home",components:{Instructions:y},data:function(){return{title:"Vue + PDFKit Example"}}},k=j,w=Object(v["a"])(k,s,c,!1,null,null,null),x=w.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row justify-center button-group"},[n("button",{on:{click:e.increaseFont}},[e._v("A+")]),n("button",{on:{click:e.decreaseFont}},[e._v("A-")])])},O=[],M={data:function(){return{fontSize:100}},methods:{increaseFont:function(){this.fontSize+=10,document.body.style.fontSize="".concat(this.fontSize,"%")},decreaseFont:function(){this.fontSize-=10,document.body.style.fontSize="".concat(this.fontSize,"%")}}},$=M,P=Object(v["a"])($,S,O,!1,null,null,null),E=P.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row justify-end"},[e.darkMode?n("button",{on:{click:e.changeMode}},[e._v("Light Mode")]):n("button",{on:{click:e.changeMode}},[e._v("Dark Mode")])])},C=[],z={data:function(){return{darkMode:!1}},methods:{changeMode:function(){this.darkMode=!this.darkMode,this.darkMode?document.querySelector("body").classList.add("dark"):document.querySelector("body").classList.remove("dark")}}},D=z,V=Object(v["a"])(D,F,C,!1,null,null,null),A=V.exports,L={name:"App",components:{Home:x,FontSizer:E,ThemeChanger:A}},T=L,H=(n("034f"),Object(v["a"])(T,o,a,!1,null,null,null)),K=H.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(K)}}).$mount("#app")},"5ace":function(e,t,n){},"85ec":function(e,t,n){},cd27:function(e,t,n){"use strict";var r=n("5ace"),o=n.n(r);o.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.4bfb785c.js.map