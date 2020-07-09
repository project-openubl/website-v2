(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(2),i=n(9),o=(n(0),n(170)),a={id:"introduction",title:"Introduction",sidebar_label:"Introduction"},c={id:"introduction",isDocsHomePage:!0,title:"Introduction",description:"XBuilder is a Java library that can create XML files based on the Universal Bussiness Language (UBL).",source:"@site/docs/introduction.md",permalink:"/xbuilder-docs/docs/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/introduction.md",sidebar_label:"Introduction",sidebar:"someSidebar",next:{title:"Design principles",permalink:"/xbuilder-docs/docs/design_principles"}},u=[{value:"Countries supported",id:"countries-supported",children:[]},{value:"Staying informed",id:"staying-informed",children:[]},{value:"Something missing?",id:"something-missing",children:[]}],s={rightToc:u};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"XBuilder is a Java library that can create XML files based on the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Universal_Business_Language"}),"Universal Bussiness Language")," (UBL)."),Object(o.b)("h2",{id:"countries-supported"},"Countries supported"),Object(o.b)("p",null,"Even though ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Universal_Business_Language"}),"UBL")," is a standard, every country might customize or even extends it. XBuilder is designed for fitting all requirements depending of each country."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Per\xfa")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If you want XBuilder to support your country, contact us through Github Issues.")),Object(o.b)("h2",{id:"staying-informed"},"Staying informed"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/project-openubl/xml-builder-lib"}),"GitHub")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://twitter.com/openubl"}),"Twitter")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.youtube.com/channel/UChq3xxjyDgjcU346rp0bbtA"}),"Youtube"))),Object(o.b)("h2",{id:"something-missing"},"Something missing?"),Object(o.b)("p",null,"If you find issues with the documentation or have suggestions on how to improve the documentation or the project in general, please ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/project-openubl/xml-builder-lib/issues"}),"file an issue")," for us, or send a tweet mentioning the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://twitter.com/openubl"}),"@openubl")," Twitter account."))}l.isMDXComponent=!0},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,m=p["".concat(a,".").concat(d)]||p[d]||b[d]||o;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);