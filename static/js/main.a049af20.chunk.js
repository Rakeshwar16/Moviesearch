(this["webpackJsonpmovie-search"]=this["webpackJsonpmovie-search"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(4),o=c.n(s),l=(c(9),c(3)),r=(c(10),c(0));var d=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)("how to train your dragon"),o=Object(l.a)(s,2),d=o[0],j=o[1];function a(){var e="https://omdbapi.com/?t=".concat(d,"&apikey=73dd9dff");fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e),i(e)})).catch((function(e){console.log(e)}))}return Object(n.useEffect)((function(){a()}),[]),Object(r.jsx)("div",{className:"App",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"padd",children:[Object(r.jsx)("h1",{children:"Movie Search"}),Object(r.jsxs)("div",{className:"input-group",children:[Object(r.jsx)("input",{type:"text",placeholder:"Enter a Movie Name",onChange:function(e){var t;t=e.target.value,j(t)},className:"movie-search"}),Object(r.jsx)("button",{className:"btn",onClick:a,children:"Search Movie"})]}),void 0===(null===c||void 0===c?void 0:c.Error)?Object(r.jsxs)("div",{className:"movie",children:[Object(r.jsx)("div",{className:"poster",children:Object(r.jsx)("img",{src:null===c||void 0===c?void 0:c.Poster,alt:"poster",className:"img-poster"})}),Object(r.jsx)("div",{className:"detail",children:Object(r.jsxs)("div",{className:"padding",children:[Object(r.jsx)("h1",{children:null===c||void 0===c?void 0:c.Title}),Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"Genre "})," : ",null===c||void 0===c?void 0:c.Genre]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"Plot "})," : ",null===c||void 0===c?void 0:c.Plot]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:" Cast"})," : ",null===c||void 0===c?void 0:c.Actors]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:" Box Office"})," : ",null===c||void 0===c?void 0:c.BoxOffice]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"Directed By "})," : ",null===c||void 0===c?void 0:c.Director]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:" Language"})," : ",null===c||void 0===c?void 0:c.Language]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"Released Date "})," : ",null===c||void 0===c?void 0:c.Released]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"Runtime "})," : ",null===c||void 0===c?void 0:c.Runtime]}),Object(r.jsx)("div",{className:"ratings",children:null===c||void 0===c?void 0:c.Ratings.map((function(e,t){return Object(r.jsxs)("div",{children:[Object(r.jsx)("strong",{children:e.Source}),Object(r.jsx)("h3",{children:e.Value})]},t)}))})]})})]}):Object(r.jsx)("h1",{children:"Movie Not Found"})]})})})},j=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),n(e),i(e),s(e),o(e)}))};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(d,{})}),document.getElementById("root")),j()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.a049af20.chunk.js.map