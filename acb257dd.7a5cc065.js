(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{70:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return d}));var a=t(2),i=t(6),o=(t(0),t(81)),r={id:"menu-customization",title:"Menu Customization"},c={unversionedId:"menu-customization",id:"menu-customization",isDocsHomePage:!1,title:"Menu Customization",description:"There are two ways to customize the menu: incrementally, and from scratch. Incrementally is great for when you only need to modify a few bindings from the default. Customizing from scratch is great for total control of the customization.",source:"@site/docs/menu-customization.md",slug:"/menu-customization",permalink:"/docs/menu-customization",editUrl:"https://github.com/VSpaceCode/vspacecode.github.io/edit/master/docs/menu-customization.md",version:"current",sidebar:"docs",previous:{title:"Default Keybindings",permalink:"/docs/default-keybindings"},next:{title:"Major Mode",permalink:"/docs/major-mode"}},l=[{value:"Default bindings",id:"default-bindings",children:[]},{value:"Incrementally",id:"incrementally",children:[{value:"Add/Replace",id:"addreplace",children:[]},{value:"Removal",id:"removal",children:[]}]},{value:"From Scratch",id:"from-scratch",children:[]}],s={rightToc:l};function d(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are two ways to customize the menu: incrementally, and from scratch. Incrementally is great for when you only need to modify a few bindings from the default. Customizing from scratch is great for total control of the customization."),Object(o.b)("h2",{id:"default-bindings"},"Default bindings"),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./default-keybindings"}),"Default Keybindings")," for default bindings."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The default menu bindings are subject to change before ",Object(o.b)("inlineCode",{parentName:"p"},"1.0.0"),". If you find something that you think it should bind to a particular key by default, or you want a particular command, please open an issue as a feature request."))),Object(o.b)("h2",{id:"incrementally"},"Incrementally"),Object(o.b)("p",null,"Using this option will allow to you surgically update the default bindings (",Object(o.b)("inlineCode",{parentName:"p"},"vspacecode.bindings"),"). The extension will override bindings sequentially base on ",Object(o.b)("inlineCode",{parentName:"p"},"vspacecode.bindingOverrides"),"."),Object(o.b)("h3",{id:"addreplace"},"Add/Replace"),Object(o.b)("p",null,"The following json will replace ",Object(o.b)("inlineCode",{parentName:"p"},"<SPC> g s")," in the same position if the binding exists in ",Object(o.b)("inlineCode",{parentName:"p"},"vspacecode.bindings"),", and append ",Object(o.b)("inlineCode",{parentName:"p"},"s")," to menu ",Object(o.b)("inlineCode",{parentName:"p"},"<SPC> g")," if it doesn't exists. This override will only execute if ",Object(o.b)("inlineCode",{parentName:"p"},"<SPC> g")," menu exists. An optional ",Object(o.b)("inlineCode",{parentName:"p"},"position")," key can be used to specified index of where the item should be inserted/moved to."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsonc"}),'{\n  "vspacecode.bindingOverrides": [\n    {\n      "keys": "g.s",\n      "name": "Go to line",\n      "type": "command",\n      "command":"workbench.action.gotoLine",\n    }\n  ]\n}\n')),Object(o.b)("p",null,"The following example will replace/append the whole ",Object(o.b)("inlineCode",{parentName:"p"},"<SPC> g")," menu with one binding ",Object(o.b)("inlineCode",{parentName:"p"},"s")," in it."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsonc"}),'{\n  "vspacecode.bindingOverrides": [\n    {\n      "keys": "g",\n      "name": "Go...",\n      "type": "bindings",\n      "bindings": [\n        {\n          "key": "s",\n          "name": "Go to",\n          "type": "command",\n          "command": "workbench.action.gotoLine",\n        }\n      ]\n    }\n  ]\n}\n')),Object(o.b)("p",null,"If the key binding's key uses character ",Object(o.b)("inlineCode",{parentName:"p"},".")," like ",Object(o.b)("inlineCode",{parentName:"p"},"<SPC> e ."),", you can target that by using an array in the keys like ",Object(o.b)("inlineCode",{parentName:"p"},'"keys": ["e", "."]'),"."),Object(o.b)("h3",{id:"removal"},"Removal"),Object(o.b)("p",null,"Any negative number in position is denoting a removal operation.\nIn the following example, any item bound to ",Object(o.b)("inlineCode",{parentName:"p"},"<SPC> g s")," will be remove."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsonc"}),'{\n  "vspacecode.bindingOverrides": [\n    {\n      "keys": "g.s",\n      "position": -1,\n    }\n  ]\n}\n')),Object(o.b)("h2",{id:"from-scratch"},"From Scratch"),Object(o.b)("p",null,"To customize the menu items from scratch, you can override the menu completely by putting your own ",Object(o.b)("inlineCode",{parentName:"p"},"vspacecode.bindings")," into your ",Object(o.b)("inlineCode",{parentName:"p"},"settings.json"),". Using this option will prevent any update to your own bindings."),Object(o.b)("p",null,"An example of a ",Object(o.b)("inlineCode",{parentName:"p"},"settings.json")," file that overrides space menu is as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "vspacecode.bindings": [\n    {\n      "key": "f",\n      "name": "File...",\n      "type": "bindings",\n      "bindings": [\n        {\n          "key": "f",\n          "name": "Open file",\n          "type": "command",\n          "command": "workbench.action.files.openFileFolder"\n        },\n        {\n          "key": "i",\n          "name": "Indentation...",\n          "type": "bindings",\n          "bindings": [\n            {\n              "key": "i",\n              "name": "Change indentation",\n              "type": "command",\n              "command": "changeEditorIndentation"\n            },\n            {\n              "key": "d",\n              "name": "Detect indentation",\n              "type": "command",\n              "command": "editor.action.detectIndentation"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n')),Object(o.b)("p",null,"The default value can be found in the ",Object(o.b)("inlineCode",{parentName:"p"},"contributes.configuration.vspacecode.bindings.default")," section of the ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," in this repo. You can use the default value as an example to craft your own custom menu."))}d.isMDXComponent=!0},81:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return u}));var a=t(0),i=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),d=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=d(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=d(t),m=a,u=b["".concat(r,".").concat(m)]||b[m]||p[m]||o;return t?i.a.createElement(u,c(c({ref:n},s),{},{components:t})):i.a.createElement(u,c({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<o;s++)r[s]=t[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);