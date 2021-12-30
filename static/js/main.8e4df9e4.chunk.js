(this["webpackJsonpNASA-API-search-engine"]=this["webpackJsonpNASA-API-search-engine"]||[]).push([[0],{56:function(e,t,a){e.exports=a(87)},87:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(29),s=a.n(r),l=a(2),i=a(52),o=a.n(i);var m=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"searchBarContainer"},c.a.createElement("div",{className:"iconContainer"},c.a.createElement(o.a,null)),c.a.createElement("input",{placeholder:"enter a NASA-related search term!",defaultValue:e.keyword,className:"searchBar",onChange:function(t){e.updateTerm(t.target.value)}})))};function u(){return c.a.createElement("p",{className:"heading"},"NASA Image API Search Engine")}function d(){return c.a.createElement("p",{className:"heading2"},"NASA Image API Search Engine")}var p=a(3);var g=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),r=a[0],s=a[1],i=Object(n.useState)(!1),o=Object(l.a)(i,2),m=o[0],u=o[1],d=Object(n.useState)(!1),g=Object(l.a)(d,2);function E(){s(!0),e.keyword&&(u(!0),e.update&&e.update())}return g[0],g[1],Object(n.useEffect)((function(){var e=function(e){"Enter"!==e.code&&"NumpadEnter"!==e.code||E()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}})),Object(n.useEffect)((function(){u(!1)}),[e.imgURL]),c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"searchButton",onClick:E},!e.loaded&&m?"Loading...":e.text),r&&""!=e.redirect?c.a.createElement(p.a,{to:e.redirect}):c.a.createElement(c.a.Fragment,null))},E=a(16);var f=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),r=a[0],s=a[1],i=Object(E.useSpring)({opacity:r?1:0,config:{duration:1e3}});return Object(n.useEffect)((function(){s(!0)}),[]),c.a.createElement("section",{className:"main"},c.a.createElement(E.animated.div,{className:"searchContainer",style:i},c.a.createElement(u,null),c.a.createElement(m,{keyword:e.keyword,updateTerm:e.update}),c.a.createElement(g,{setFirstSearch:e.setFirstSearch,keyword:e.keyword,text:"Search",redirect:"results"})))},h=a(36),b=a(15),O=a.n(b),N=a(18),v=a(21),j=a.n(v),y=a(54),S=a.n(y);var k=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),r=a[0],s=a[1],i=Object(E.useSpring)({opacity:r?1:0,config:{duration:100}});return Object(n.useEffect)((function(){s(!0)}),[]),c.a.createElement(E.animated.div,{className:"displayContainer",style:i},c.a.createElement("div",{className:"displayCard"},c.a.createElement("button",{className:"exitButton",onClick:e.exit},c.a.createElement(S.a,null)),c.a.createElement("div",{className:"displayTitleBox"},c.a.createElement("p",{className:"displayTitle"},e.displayTitle)),c.a.createElement("div",{className:"displayImgBox"},c.a.createElement("img",{className:"displayImg",src:e.displayImg,alt:"image not found"})),c.a.createElement("div",{className:"displayDescriptionBox"},c.a.createElement("p",{className:"displayDescription"},e.displayTitle!=e.displayDescription?e.displayDescription:""))))};var w=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),r=a[0],s=a[1],i=Object(E.useSpring)({opacity:r?1:0,config:{duration:1e3}}),o=Object(n.useState)([]),u=Object(l.a)(o,2),p=u[0],f=u[1],h=Object(n.useState)([]),b=Object(l.a)(h,2),v=(b[0],b[1]),y=Object(n.useState)([]),S=Object(l.a)(y,2),w=S[0],x=S[1],A=Object(n.useState)([]),C=Object(l.a)(A,2),I=C[0],T=C[1],F=Object(n.useState)(""),L=Object(l.a)(F,2),B=L[0],R=L[1],D=Object(n.useState)(""),P=Object(l.a)(D,2),J=P[0],q=P[1],H=Object(n.useState)(""),U=Object(l.a)(H,2),G=U[0],M=U[1],V=Object(n.useState)(!1),Y=Object(l.a)(V,2),z=Y[0],K=Y[1],Q=Object(n.useState)(!0),W=Object(l.a)(Q,2),X=W[0],Z=W[1];function $(){e.keyword?j.a.get("".concat("https://images-api.nasa.gov","/search?q=").concat(e.keyword)).then((function(e){console.log(e);for(var t=e.data.collection.items,a=[],n=0;n<t.length;++n)t[n].href.includes("/image/")&&a.push(t[n].href);!function(e){ee.apply(this,arguments)}(a)})).catch((function(e){alert("an error has occurred, please refresh and try again"),window.location.reload(),console.log(e)})):Z(!1)}function _(e){var t=e.length;return e.includes("Read More")&&(t=String(e).indexOf("Read more")),String(e).substring(0,t)}function ee(){return(ee=Object(N.a)(O.a.mark((function e(t){var a,n,c,r,s,l,i,o,m,u,d,p;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v(t),0!=t.length){e.next=7;break}return f([]),x([]),T([]),Z(!1),e.abrupt("return");case 7:a=[],n=[],c=[],r=0;case 11:if(!(a.length<10&&r<t.length)){e.next=34;break}return console.log(r),e.next=15,j.a.get(t[r]);case 15:if(s=e.sent,!(l=JSON.parse(JSON.stringify(s))).data[0].includes("jpg")){e.next=21;break}a.push(l.data[0]),e.next=23;break;case 21:return++r,e.abrupt("continue",11);case 23:return e.next=25,j.a.get(l.data[l.data.length-1]);case 25:for(u in i=e.sent,o=JSON.parse(JSON.stringify(i)).data,m={},o)d=u.includes(":")?u.split(":")[1].toLowerCase():u.toLowerCase(),p=o[u],m[d]=p;n.push(_(m.description)),c.push(m.title),++r,e.next=11;break;case 34:f(a),x(c),T(n),Z(!1);case 38:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){$()}),[e.firstSearch]),Object(n.useEffect)((function(){s(!0)}),[]),c.a.createElement("section",{className:"main"},z?c.a.createElement(k,{displayDescription:G,displayTitle:J,displayImg:B,displaying:z,exit:function(){K(!1)}}):c.a.createElement(c.a.Fragment,null),c.a.createElement(E.animated.div,{className:"searchContainer",style:i},c.a.createElement("div",{className:"resultsContainer"},c.a.createElement("div",{className:"resultsTopContainer"},c.a.createElement("div",{className:"heading2Container"},c.a.createElement(d,null)),c.a.createElement(m,{keyword:e.keyword,updateTerm:e.update}),c.a.createElement(g,{imgURL:p,update:$,keyword:e.keyword,text:"Search",redirect:""})),c.a.createElement("div",{className:"resultsBottomContainer"},z?c.a.createElement(c.a.Fragment,null):c.a.createElement("div",{className:"resultsList"},0!=p.length?p.map((function(e,t){if(t<10)return c.a.createElement("div",{className:"resultsItem",key:t,onClick:function(){!function(e,t,a){M(a),q(t),R(e),K(!0)}(p[t],w[t],I[t])}},c.a.createElement("div",{className:"imgContainer"},c.a.createElement("div",{className:"imgPlaceHolder"},c.a.createElement("img",{className:"resultImg",src:p[t]}))),c.a.createElement("p",{className:"resultTitle"},w[t]?w[t]:"loading..."),c.a.createElement("p",{className:"resultDescription"},I[t]?(a=I[t],String(a).length<50?a:String(a).substring(0,50)+"..."):"loading..."));var a})):c.a.createElement("div",{className:"noResults"},c.a.createElement("span",{className:"noResults"},e.firstSearch&&X?"Loading...":"No Results")))))))};var x=function(){return c.a.createElement("section",{className:"main"},c.a.createElement("div",{className:"searchContainer"},c.a.createElement("p",{className:"heading"},"The Page You Are Looking For Does Not Exist"),c.a.createElement(g,{text:"Go To Home",redirect:"/"})))};var A=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)("firstSearch"),i=Object(l.a)(s,2),o=i[0],m=i[1],u=Object(n.useState)([]),d=Object(l.a)(u,2),g=d[0],E=d[1];function b(e){r(e),e&&j.a.get("".concat("https://images-api.nasa.gov","/search?q=").concat(e)).then((function(e){for(var t=e.data.collection.items,a=[],n=0;n<t.length;++n)t[n].href.includes("/image/")&&a.push(t[n].href);E(a)})).catch((function(e){console.log(e)}))}return c.a.createElement(c.a.Fragment,null,c.a.createElement("meta",{name:"viewport",content:"initial-scale=1, maximum-scale=1"}),c.a.createElement("div",{className:"container"},c.a.createElement(h.a,{basename:"/NASA-API-search-engine"},c.a.createElement(p.d,null,c.a.createElement(p.b,{path:"/",element:c.a.createElement(f,{setFirstSearch:m,keyword:a,update:b})}),c.a.createElement(p.b,{path:"/Results",element:c.a.createElement(w,{firstSearch:o,urls:g,keyword:a,update:b})}),c.a.createElement(p.b,{path:"*",element:c.a.createElement(x,null)})))))};s.a.render(c.a.createElement(A,null),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.8e4df9e4.chunk.js.map