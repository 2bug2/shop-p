(function(e){function t(t){for(var a,r,c=t[0],i=t[1],s=t[2],f=0,d=[];f<c.length;f++)r=c[f],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);l&&l(t);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2224e097":"02b85bc3","chunk-2d0c1d78":"73e722ff","chunk-43e86dd0":"fea8a9e0","chunk-a0fe12e2":"f6872012","chunk-e587cf48":"74e23748","chunk-f74ab424":"49e1d581"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-2224e097":1,"chunk-43e86dd0":1,"chunk-a0fe12e2":1,"chunk-e587cf48":1,"chunk-f74ab424":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-2224e097":"ba978487","chunk-2d0c1d78":"31d6cfe0","chunk-43e86dd0":"cb8966e3","chunk-a0fe12e2":"16151ffc","chunk-e587cf48":"9bb80f04","chunk-f74ab424":"6cd9035f"}[e]+".css",o=i.p+a,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===a||f===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],f=s.getAttribute("data-href");if(f===a||f===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var a=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=a,delete r[e],l.parentNode.removeChild(l),n(u)},l.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var u=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=u);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=c(e);var d=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=f;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"22e5":function(e,t,n){"use strict";n("2678")},2395:function(e,t,n){},2678:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("4de4"),n("a9e3"),n("b680");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),e.$route.meta.isShowTabbar?n("MyTabbar"):e._e()],1)},o=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("van-tabbar",{attrs:{"active-color":"#ee0a24","inactive-color":"#000"},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("van-tabbar-item",{attrs:{to:"/home",icon:"home-o"}},[e._v("首页")]),n("van-tabbar-item",{attrs:{to:"/topice",icon:"apps-o"}},[e._v("专题")]),n("van-tabbar-item",{attrs:{to:"/category",icon:"friends-o"}},[e._v("分类")]),n("van-tabbar-item",{attrs:{to:"/cart",icon:"cart-o"}},[e._v("购物车")]),n("van-tabbar-item",{attrs:{to:"/user",icon:"manager-o"}},[e._v("我的")])],1)],1)},c=[],i={data:function(){return{}},mounted:function(){},computed:{active:{get:function(){switch(this.$route.path){case"/home":return 0;case"/topice":return 1;case"/category":return 2;case"/cart":return 3;case"/user":return 4;default:break}},set:function(){}}}},s=i,f=n("2877"),d=Object(f["a"])(s,u,c,!1,null,"583ccef2",null),l=d.exports,p={data:function(){return{}},components:{MyTabbar:l}},h=p,b=(n("7c55"),Object(f["a"])(h,r,o,!1,null,null,null)),m=b.exports,v=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("van-search",{attrs:{disabled:"",shape:"round",background:"#4fc08d",placeholder:"请输入搜索关键词"},on:{click:e.goToPopup},model:{value:e.SearchVal,callback:function(t){e.SearchVal=t},expression:"SearchVal"}}),n("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"darkred"}},e._l(e.banner,(function(t){return n("van-swipe-item",{key:t.id},[n("img",{staticStyle:{display:"block"},attrs:{src:t.image_url,width:"100%",alt:""}}),n("div",[e._v(e._s(t.floor_price))])])})),1),n("van-grid",{attrs:{"column-num":5}},e._l(e.channel,(function(e){return n("van-grid-item",{key:e.id,attrs:{icon:e.icon_url,text:e.name}})})),1),n("div",{staticClass:"title"},[e._v("品牌供应商")]),n("van-row",{attrs:{type:"flex",justify:"center"}},e._l(e.brandList,(function(t){return n("van-col",{key:t.id,attrs:{span:"12"}},[n("img",{attrs:{src:t.pic_url,alt:""}}),n("h4",[e._v(e._s(t.name))]),n("div",[e._v(e._s(e._f("filterMoney")(t.floor_price)))])])})),1),n("transition",{attrs:{name:"van-slide-right"}},[n("router-view")],1)],1)},y=[],k=n("fd03"),_={data:function(){return{SearchVal:"",banner:[],channel:[],brandList:[]}},created:function(){var e=this;Object(k["h"])().then((function(t){if(0==t.errno){console.log(t.data);var n=t.data,a=n.banner,r=n.channel,o=n.brandList;e.banner=a,e.channel=r,e.brandList=o}})).catch((function(e){console.log(e)}))},methods:{goToPopup:function(){this.$router.push("/home/popup")}}},w=_,x=(n("22e5"),Object(f["a"])(w,g,y,!1,null,"4166fdb1",null)),j=x.exports;a["a"].use(v["a"]);var S=new v["a"]({routes:[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:j,meta:{activeNum:4,isShowTabbar:!0},children:[{path:"popup",component:function(){return n.e("chunk-2224e097").then(n.bind(null,"1c61"))}}]},{path:"/topice",name:"Topice",component:function(){return n.e("chunk-a0fe12e2").then(n.bind(null,"a52f"))}},{path:"/category",name:"Category",component:function(){return n.e("chunk-2d0c1d78").then(n.bind(null,"4886"))}},{path:"/cart",name:"Cart",component:function(){return n.e("chunk-f74ab424").then(n.bind(null,"b789"))}},{path:"/user",name:"User",component:function(){return n.e("chunk-43e86dd0").then(n.bind(null,"1511"))}},{path:"/productDetail",name:"ProductDetail",component:function(){return n.e("chunk-e587cf48").then(n.bind(null,"5f47"))}}]});S.beforeEach((function(e,t,n){var r=localStorage.getItem("token");"/cart"!=e.path||r?n():(a["a"].prototype.$toast("请先登录"),setTimeout((function(){n("/user")}),1e3))}));var T=S,O=(n("157a"),n("afd4"),n("ca19")),P=(n("a39e"),n("241e")),E=(n("570a"),n("1d36")),C=(n("4467"),n("c36e")),L=(n("f06a"),n("20fb")),M=(n("9cb7"),n("66fd")),N=(n("a909"),n("3acc")),$=(n("3c32"),n("417e")),A=(n("be39"),n("efa0")),B=(n("e415"),n("2b5e")),D=(n("591c"),n("7713")),V=(n("ef6f"),n("82a8")),q=(n("93ac"),n("bb33")),I=(n("66cf"),n("343b")),U=(n("4056"),n("44bf")),F=(n("be7f"),n("565f")),H=(n("38d5"),n("772a")),J=(n("4d48"),n("d1e1")),K=(n("81e6"),n("9ffb")),R=(n("0ec5"),n("21ab")),W=(n("3df5"),n("2830")),X=(n("a52c"),n("2ed4")),z=(n("537a"),n("ac28")),G=(n("e7e5"),n("d399")),Q=(n("c194"),n("7744")),Y=(n("2994"),n("2bdd")),Z=(n("91d5"),n("f0ca")),ee=(n("61ae"),n("d314")),te=(n("09d3"),n("2d6d")),ne=(n("5f1a"),n("a3e2")),ae=(n("c3a6"),n("ad06")),re=(n("4b0a"),n("2bb1")),oe=(n("7844"),n("5596")),ue=(n("5852"),n("d961")),ce=(n("66b9"),n("b650"));a["a"].use(ce["a"]),a["a"].use(ue["a"]),a["a"].use(oe["a"]),a["a"].use(re["a"]),a["a"].use(ae["a"]),a["a"].use(ne["a"]),a["a"].use(te["a"]),a["a"].use(ee["a"]),a["a"].use(Z["a"]),a["a"].use(Y["a"]),a["a"].use(Q["a"]),a["a"].use(G["a"]),a["a"].use(z["a"]),a["a"].use(X["a"]),a["a"].use(W["a"]),a["a"].use(R["a"]),a["a"].use(K["a"]),a["a"].use(J["a"]),a["a"].use(H["a"]),a["a"].use(F["a"]),a["a"].use(U["a"]),a["a"].use(I["a"]),a["a"].use(q["a"]),a["a"].use(V["a"]),a["a"].use(D["a"]),a["a"].use(B["a"]),a["a"].use(A["a"]),a["a"].use($["a"]),a["a"].use(N["a"]),a["a"].use(M["a"]),a["a"].use(L["a"]),a["a"].use(C["a"]),a["a"].use(E["a"]),a["a"].use(P["a"]),a["a"].use(O["a"]);n("fa6d");a["a"].config.productionTip=!1,a["a"].filter("filterMoney",(function(e){var t=Number(e);return"￥"+t.toFixed(2)+"元"})),new a["a"]({render:function(e){return e(m)},router:T}).$mount("#app")},"7c55":function(e,t,n){"use strict";n("2395")},fd03:function(e,t,n){"use strict";n.d(t,"h",(function(){return c})),n.d(t,"i",(function(){return i})),n.d(t,"j",(function(){return s})),n.d(t,"k",(function(){return f})),n.d(t,"c",(function(){return d})),n.d(t,"l",(function(){return l})),n.d(t,"g",(function(){return p})),n.d(t,"f",(function(){return h})),n.d(t,"a",(function(){return b})),n.d(t,"e",(function(){return m})),n.d(t,"b",(function(){return v})),n.d(t,"m",(function(){return g})),n.d(t,"d",(function(){return y}));n("d3b7");var a=n("bc3a"),r=n.n(a),o=r.a.create({baseURL:"http://kumanxuan1.f3322.net:8001",timeout:5e3});o.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers["X-Nideshop-Token"]=t),e}),(function(e){return Promise.reject(e)})),o.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e)}));var u=o,c=function(){return u.get("/index/index")},i=function(){return u.get("/search/index")},s=function(e){return u.get("/goods/list",{params:e})},f=function(e){return u.get("/search/helper",{params:e})},d=function(){return u.post("/search/clearhistory")},l=function(e){return u.post("/auth/loginByWeb",e)},p=function(e){return u.get("/goods/detail",{params:e})},h=function(){return u.get("/cart/goodscount")},b=function(e){return u.post("/cart/add",e)},m=function(){return u.get("/cart/index")},v=function(e){return u.post("/cart/checked",e)},g=function(e){return u.post("/cart/update",e)},y=function(e){return u.post("/cart/delete",e)}}});
//# sourceMappingURL=app.1c3dbe00.js.map