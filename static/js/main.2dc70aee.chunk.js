(this.webpackJsonpdcsdb=this.webpackJsonpdcsdb||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),s=a.n(r),i=(a(26),a(27),a(7)),h=a(8),o=a(12),j=a(10),l=a(9),d=(a(28),a(29),a(11)),u=a(1),b=function(e){Object(j.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.plane;return Object(u.jsx)(d.b,{to:"/aircraft/"+e.id,children:Object(u.jsxs)("div",{className:"AircraftCard-root",children:[Object(u.jsx)("img",{alt:e.name,src:"/dcsdb/data/aircrafts/"+e.id+"/thumbnail.jpg"}),Object(u.jsx)("span",{children:e.name})]})})}}]),a}(c.a.Component),f=(a(36),function(e){Object(j.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={aircrafts:[]},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/dcsdb/data/aircrafts/aircrafts.json").then((function(e){return e.json()})).then((function(t){e.setState({aircrafts:t})}))}},{key:"render",value:function(){var e=this,t=this.state.aircrafts;return Object(u.jsx)("div",{className:"AircraftList-root",children:t.filter((function(t){var a=t.name.replace(" ","").replace("-","").replace("/","").replace(".","").toLowerCase();return t.name.toLowerCase().includes(e.props.filter.toLowerCase())||a.includes(e.props.filter.toLowerCase())})).map((function(e){return Object(u.jsx)(b,{plane:e},e.id)}))})}}]),a}(c.a.Component)),p=(a(37),function(e){Object(j.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=n.handleChange.bind(Object(o.a)(n)),n.clear=n.clear.bind(Object(o.a)(n)),n}return Object(h.a)(a,[{key:"handleChange",value:function(e){this.props.onSearchTextChanged(e.target.value)}},{key:"clear",value:function(e){e.preventDefault(),this.props.onSearchTextChanged("")}},{key:"render",value:function(){var e=this.props.searchText;return Object(u.jsxs)("div",{className:"SearchBar-root",children:[Object(u.jsx)("input",{type:"text",placeholder:"Search",value:e,onChange:this.handleChange}),Object(u.jsx)("span",{className:"material-icons",onClick:this.clear,children:"close"})]})}}]),a}(c.a.Component)),O=function(e){Object(j.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={searchText:""},n.handleSearchTextChanged=n.handleSearchTextChanged.bind(Object(o.a)(n)),n}return Object(h.a)(a,[{key:"handleSearchTextChanged",value:function(e){this.setState({searchText:e})}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"AircraftPage-root",children:[Object(u.jsx)(p,{searchText:this.state.searchText,onSearchTextChanged:this.handleSearchTextChanged}),Object(u.jsx)(f,{filter:this.state.searchText})]})}}]),a}(c.a.Component),x=a(2),v=(a(38),function(e){Object(j.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={aircraft:{}},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params;fetch("/dcsdb/data/aircrafts/"+t.id+"/data.json").then((function(e){return e.json()})).then((function(t){e.setState({aircraft:t})}))}},{key:"render",value:function(){var e=this.state.aircraft;return Object(u.jsxs)("div",{className:"AircraftView-root",children:[Object(u.jsx)("h1",{children:e.name}),Object(u.jsx)("p",{children:e.description})]})}}]),a}(c.a.Component)),m=Object(x.g)(v);a(39);var C=function(){return Object(u.jsx)("header",{className:"app-header",children:Object(u.jsx)(d.b,{className:"app-header-link",to:"/",children:Object(u.jsx)("p",{children:"DCSDB"})})})};var g=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(C,{}),Object(u.jsxs)(x.d,{children:[Object(u.jsx)(x.b,{exact:!0,path:"/",children:Object(u.jsx)(x.a,{to:"/aircraft"})}),Object(u.jsx)(x.b,{exact:!0,path:"/aircraft",children:Object(u.jsx)(O,{})}),Object(u.jsx)(x.b,{exact:!0,path:"/aircraft/:id",children:Object(u.jsx)(m,{})})]})]})};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(d.a,{hashType:"slash",children:Object(u.jsx)(g,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.2dc70aee.chunk.js.map