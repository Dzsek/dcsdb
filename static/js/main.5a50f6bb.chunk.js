(this.webpackJsonpdcsdb=this.webpackJsonpdcsdb||[]).push([[0],{31:function(t,e,a){},32:function(t,e,a){},33:function(t,e,a){},34:function(t,e,a){},43:function(t,e,a){},44:function(t,e,a){},45:function(t,e,a){},46:function(t,e,a){},47:function(t,e,a){},48:function(t,e,a){},49:function(t,e,a){},50:function(t,e,a){},51:function(t,e,a){},52:function(t,e,a){},53:function(t,e,a){},54:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),i=a(22),s=a.n(i),c=(a(31),a(32),a(2)),o=a(3),l=a(6),u=a(4),h=a(5),d=(a(33),a(13)),p=(a(34),a(9)),f=a(0),j=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"cardClicked",value:function(){var t=this.props,e=t.plane,a=t.weaponid,n=t.clickCallback,r="/aircraft/"+e.id+(a?"?from="+a:"");n&&n(e.id),window.location.hash=r}},{key:"render",value:function(){var t=this,e=this.props,a=e.plane,n=e.weaponid;return Object(f.jsx)(p.b,{onClick:function(e){return t.cardClicked()},to:"/aircraft/"+a.id+(n?"?from="+n:""),children:Object(f.jsxs)("div",{className:"AircraftCard-root"+(a.id===a.name?" AircraftCard-root-wip":""),children:[Object(f.jsx)("img",{alt:a.name,src:"/dcsdb/data/aircrafts/"+a.id+"/thumbnail.jpg"}),Object(f.jsx)("span",{children:a.name})]})})}}]),a}(r.a.Component),b=j;a(43);function m(t){var e=t.name.replaceAll(" ","").replaceAll("-","").replaceAll("/","").replaceAll(".","").toLowerCase();t.tags||(t.tags=[]),t.tags.push(e),t.tags.push(t.category.toLowerCase()),t.tags.includes("ir")&&t.tags.push("infrared"),t.tags.includes("infrared")&&t.tags.push("ir"),"aam"===t.category&&(t.tags.push("airtoair"),t.tags.push("aa")),"agm"===t.category&&(t.tags.push("airtoground"),t.tags.push("ag")),"bomb"===t.category&&(t.tags.push("bombs"),t.tags.push("airtoground"),t.tags.push("ag")),"pod"===t.category&&(t.tags.push("pods"),t.tags.push("sensors")),"rocket"===t.category&&(t.tags.push("rockets"),t.tags.push("airtoground"),t.tags.push("ag"))}function O(t,e,a){if(!t)return!0;var n,r=t.replaceAll("-","").toLowerCase().split(" "),i=!0,s=Object(d.a)(r);try{for(s.s();!(n=s.n()).done;){var c,o=n.value,l=!1,u=Object(d.a)(e.tags);try{for(u.s();!(c=u.n()).done;){var h=c.value;switch(a){case"exact":if(h===o){l=!0;break}break;case"starts":if(h.startsWith(o)){l=!0;break}break;default:if(h.includes(o)){l=!0;break}}}}catch(p){u.e(p)}finally{u.f()}if(!l){i=!1;break}}}catch(p){s.e(p)}finally{s.f()}return i}function g(){window.gtag&&window.gtag("event","page_view",{page_location:window.location.origin,page_path:window.location.pathname+window.location.hash,page_title:document.title})}var x=["Air-to-Ground","Air-to-Air","Bomb","Rocket","Pod","Fuel","GPS","Radar","Laser","Infrared","TV","Dumb","Cluster","Tank","Light Armor","Building","Fortification","SAM"],v=["Modern","Cold War","Multirole","Helicopter","Fighter","CAS","Blue","Red"],w=null,y=function(){function t(){return Object(c.a)(this,t),w||(w=this),this.aircraft=null,this.weapons=null,this.aircraftdata={},this.weapondata={},this.tutorials={},this.tutorialLists={},w}return Object(o.a)(t,[{key:"getTutorial",value:function(t,e){var a=this;return this.tutorials[t]&&this.tutorials[t][e]?new Promise((function(n,r){setTimeout((function(){n(a.tutorials[t][e])}),10)})):fetch("/dcsdb/data/aircrafts/"+t+"/tutorials/"+e+".json").then((function(t){return t.json()})).then((function(n){return a.tutorials[t]=a.tutorials[t]||{},a.tutorials[t][e]=n,a.tutorials[t][e]}))}},{key:"getTutorialList",value:function(t){var e=this;return this.tutorialLists[t]?new Promise((function(a,n){setTimeout((function(){a(e.tutorialLists[t])}),10)})):fetch("/dcsdb/data/aircrafts/"+t+"/tutorials.json").then((function(t){return t.json()})).then((function(a){return e.tutorialLists[t]=a,e.tutorialLists[t]}))}},{key:"getAircraftList",value:function(){var t=this;return this.aircraft?new Promise((function(e,a){setTimeout((function(){e(t.aircraft)}),10)})):fetch("/dcsdb/data/aircrafts/aircrafts.json").then((function(t){return t.json()})).then((function(e){return t.aircraft=e,t.aircraft}))}},{key:"getWeaponList",value:function(){var t=this;return this.weapons?new Promise((function(e,a){setTimeout((function(){e(t.weapons)}),10)})):fetch("/dcsdb/data/weapons/weapons.json").then((function(t){return t.json()})).then((function(e){return t.weapons=e,t.weapons}))}},{key:"getAircraft",value:function(t){var e=this;return this.aircraftdata[t]?new Promise((function(a,n){setTimeout((function(){a(e.aircraftdata[t])}),10)})):fetch("/dcsdb/data/aircrafts/"+t+"/data.json").then((function(t){return t.json()})).then((function(a){return e.aircraftdata[t]=a,e.aircraftdata[t]}))}},{key:"getWeapon",value:function(t){var e=this;return this.weapondata[t]?new Promise((function(a,n){setTimeout((function(){a(e.weapondata[t])}),10)})):fetch("/dcsdb/data/weapons/"+t+"/data.json").then((function(t){return t.json()})).then((function(a){return e.weapondata[t]=a,e.weapondata[t]}))}}]),t}(),k=null,C=function(){function t(){return Object(c.a)(this,t),k||(k=this),k}return Object(o.a)(t,[{key:"pushHistory",value:function(t,e){sessionStorage.history=sessionStorage.history||JSON.stringify([]);var a=JSON.parse(sessionStorage.history);a.push({url:t,obj:e}),sessionStorage.history=JSON.stringify(a)}},{key:"getLast",value:function(){var t=JSON.parse(sessionStorage.history||"[]");if(t&&t.length)return t[t.length-1]}},{key:"popHistory",value:function(){var t=JSON.parse(sessionStorage.history);if(t&&t.length){var e=t.pop();return sessionStorage.history=JSON.stringify(t),e}}}]),t}(),T=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t))._history=new C,n.state={aircrafts:[]},n.cardClicked=n.cardClicked.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"cardClicked",value:function(t){this._history.pushHistory(window.location.hash,{search:this.props.filter,scroll:window.scrollY})}},{key:"componentDidMount",value:function(){var t=this;(new y).getAircraftList().then((function(e){var a,n=Object(d.a)(e);try{for(n.s();!(a=n.n()).done;){var r=a.value,i=r.name.replaceAll(" ","").replaceAll("-","").replaceAll("/","").replaceAll(".","").toLowerCase();r.tags||(r.tags=[]),r.tags.push(i)}}catch(s){n.e(s)}finally{n.f()}t.setState({aircrafts:e})})).then((function(){window.scrollToThis&&(window.scrollTo(0,window.scrollToThis),delete window.scrollToThis)}))}},{key:"render",value:function(){var t=this,e=this.state.aircrafts,a=e.filter((function(e){return O(t.props.filter,e,"exact")}));return a.length||(a=e.filter((function(e){return O(t.props.filter,e,"starts")}))),a.length||(a=e.filter((function(e){return O(t.props.filter,e,"includes")}))),Object(f.jsx)("div",{className:"AircraftList-root",children:a.filter((function(t){return t.id!==t.name})).sort((function(t,e){return t.name-e.name})).map((function(e){return Object(f.jsx)(b,{plane:e,clickCallback:t.cardClicked},e.id)}))})}}]),a}(r.a.Component),S=(a(44),function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).handleChange=n.handleChange.bind(Object(l.a)(n)),n.clear=n.clear.bind(Object(l.a)(n)),n.chipClicked=n.chipClicked.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(t){this.props.onSearchTextChanged(t.target.value)}},{key:"chipClicked",value:function(t){if(this.props.searchText.includes(t)){var e=this.props.searchText.replaceAll(t,"").replaceAll("  "," ");" "===e&&(e=""),this.props.onSearchTextChanged(e)}else{var a=this.props.searchText;a.length&&(a+=" "),a+=t,this.props.onSearchTextChanged(a)}}},{key:"clear",value:function(t){t.preventDefault(),this.props.onSearchTextChanged("")}},{key:"render",value:function(){var t=this,e=this.props.searchText,a=this.props.chips;return Object(f.jsxs)("div",{className:"SearchBar-root",children:[Object(f.jsxs)("div",{className:"SearchBar-root-bar",children:[Object(f.jsx)("input",{type:"text",placeholder:"Search",value:e,onChange:this.handleChange}),Object(f.jsx)("span",{className:"material-icons",onClick:this.clear,children:"close"})]}),Object(f.jsx)("div",{className:"SearchBar-root-chips",children:a?a.map((function(a){return Object(f.jsxs)("div",{className:e.includes(a)?"chip-active":"",onClick:function(e){return t.chipClicked(a)},children:[Object(f.jsx)("span",{children:a}),Object(f.jsx)("span",{className:"material-icons",onClick:t.clear,children:"close"})]},a)})):""})]})}}]),a}(r.a.Component)),N=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t))._history=new C,n.state={searchText:"",searchterms:v},n.handleSearchTextChanged=n.handleSearchTextChanged.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){document.title="DCSDB - Aircraft",g();var t=this._history.getLast();if(t&&t.url===window.location.hash){var e=this._history.popHistory();this.setState({searchText:e.obj.search}),window.scrollToThis=e.obj.scroll}}},{key:"handleSearchTextChanged",value:function(t){this.setState({searchText:t})}},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"AircraftPage-root",children:[Object(f.jsx)(S,{searchText:this.state.searchText,onSearchTextChanged:this.handleSearchTextChanged,chips:this.state.searchterms}),Object(f.jsx)(T,{filter:this.state.searchText})]})}}]),a}(r.a.Component),A=(a(45),a(46),function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"cardClicked",value:function(){var t=this.props,e=t.weapon,a=t.aircraftid,n=t.clickCallback,r="/weapon/"+e.id+(a?"?from="+a:"");n&&n(e.id),window.location.hash=r}},{key:"render",value:function(){var t=this,e=this.props,a=e.weapon,n=e.aircraftid;return Object(f.jsx)(p.b,{onClick:function(e){return t.cardClicked()},to:"/weapon/"+a.id+(n?"?from="+n:""),children:Object(f.jsxs)("div",{className:"WeaponCard-root"+(a.id===a.name?" WeaponCard-root-wip":""),children:[Object(f.jsx)("img",{alt:a.name,src:"/dcsdb/data/weapons/"+a.id+"/thumbnail.jpg"}),Object(f.jsx)("span",{children:a.name})]})})}}]),a}(r.a.Component)),_=A,L=(a(47),function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t))._history=new C,n.state={weapons:[]},n.cardClicked=n.cardClicked.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t=this;(new y).getWeaponList().then((function(e){var a,n=Object(d.a)(e);try{for(n.s();!(a=n.n()).done;){m(a.value)}}catch(r){n.e(r)}finally{n.f()}t.setState({weapons:e})})).then((function(){window.scrollToThis&&(window.scrollTo(0,window.scrollToThis),delete window.scrollToThis)}))}},{key:"cardClicked",value:function(t){this._history.pushHistory(window.location.hash,{search:this.props.filter,scroll:window.scrollY})}},{key:"render",value:function(){var t=this,e=this.state.weapons,a=e.filter((function(e){return O(t.props.filter,e,"exact")}));return a.length||(a=e.filter((function(e){return O(t.props.filter,e,"starts")}))),a.length||(a=e.filter((function(e){return O(t.props.filter,e,"includes")}))),Object(f.jsx)("div",{className:"WeaponList-root",children:a.filter((function(t){return t.id!==t.name})).sort((function(t,e){return t.name-e.name})).map((function(e){return Object(f.jsx)(_,{weapon:e,clickCallback:t.cardClicked},e.id)}))})}}]),a}(r.a.Component)),D=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t))._history=new C,n.state={searchText:"",searchterms:x},n.handleSearchTextChanged=n.handleSearchTextChanged.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){document.title="DCSDB - Weapons",g();var t=this._history.getLast();if(t&&t.url===window.location.hash){var e=this._history.popHistory();this.setState({searchText:e.obj.search}),window.scrollToThis=e.obj.scroll}}},{key:"handleSearchTextChanged",value:function(t){this.setState({searchText:t})}},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"WeaponPage-root",children:[Object(f.jsx)(S,{searchText:this.state.searchText,onSearchTextChanged:this.handleSearchTextChanged,chips:this.state.searchterms}),Object(f.jsx)(L,{filter:this.state.searchText})]})}}]),a}(r.a.Component),W=a(7),I=(a(48),function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var t=this.props.className;return Object(f.jsx)("div",{className:t,onClick:function(t){return window.history.back()},children:Object(f.jsx)("span",{className:"material-icons backButton",children:"keyboard_arrow_left"})})}}]),a}(r.a.Component)),V=I,M=(a(49),function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).state={weapon:{},id:"",selectedInstructionAircraft:{}},n.selectedAircraftChanged=n.selectedAircraftChanged.bind(Object(l.a)(n)),n.loadAlternate=n.loadAlternate.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t=this,e=new URLSearchParams(this.props.location.search).get("from"),a=this.props.match.params;this.setState({id:a.id}),(new y).getWeapon(a.id).then((function(a){if(document.title="DCSDB - "+a.name,g(),t.setState({weapon:a}),a.aircraft){var n=a.aircraft.find((function(t){return t.id===e}));!n&&a.aircraft.length&&(n=a.aircraft[0]),n&&t.setState({selectedInstructionAircraft:n})}}))}},{key:"selectedAircraftChanged",value:function(t){var e=t.target.value,a=this.state.weapon.aircraft.find((function(t){return t.id===e}));a&&this.setState({selectedInstructionAircraft:a})}},{key:"loadAlternate",value:function(t){t.target.src.includes("image.jpg")&&(t.target.src=t.target.src.replace("image.jpg","thumbnail.jpg"))}},{key:"render",value:function(){var t=new URLSearchParams(this.props.location.search).get("from"),e=this.state,a=e.weapon,n=e.id,r=e.selectedInstructionAircraft;return Object(f.jsxs)("div",{className:"WeaponView-root",children:[Object(f.jsx)(V,{className:"WeaponView-root-backbutton",returnTo:t?"/aircraft/"+t:"/weapons"}),Object(f.jsx)("img",{alt:a.name,src:"/dcsdb/data/weapons/"+n+"/image.jpg",onError:this.loadAlternate}),Object(f.jsx)("span",{children:a.name}),Object(f.jsxs)("div",{className:"WeaponView-root-content",children:[Object(f.jsx)("div",{children:a.data?Object(f.jsx)("div",{className:"WeaponView-table",children:a.data?Object.keys(a.data).map((function(t){return Object(f.jsx)(B,{name:t,data:a.data[t]},t)})):""}):"Weapon data not available"}),a.aircraft&&a.aircraft.length?Object(f.jsxs)("div",{style:{display:"none"},children:[Object(f.jsxs)("div",{className:"WeaponView-aircraftinstructions",children:[Object(f.jsx)("span",{children:"Notes"}),Object(f.jsx)("select",{value:r.id,onChange:this.selectedAircraftChanged,children:a.aircraft.map((function(t){return Object(f.jsx)("option",{value:t.id,children:t.name},t.id)}))})]}),r.instructions?r.instructions.map((function(t){return Object(f.jsx)("span",{className:"WeaponView-instruction",children:t})})):"No instructions"]}):"",Object(f.jsx)("div",{className:"WeaponView-root-description",children:Object(f.jsx)("p",{children:a.description})})]}),Object(f.jsxs)("div",{className:"WeaponView-root-extra",children:[Object(f.jsx)("span",{children:"Compatible platforms"}),Object(f.jsx)("div",{children:a.aircraft?a.aircraft.filter((function(t){return t.id!==t.name})).map((function(t){return Object(f.jsx)(b,{plane:t,weaponid:n},t.id)})):"Data unavailable"})]})]})}}]),a}(r.a.Component));function B(t){return t.data?[Object(f.jsx)("span",{style:{fontWeight:"bold"},children:t.name},t.name),Object(f.jsx)("span",{children:t.data},t.data)]:""}var P=Object(W.g)(M),H=(a(50),function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t))._history=new C,n.state={aircraft:{},id:"",searchText:"",searchterms:x,tutorials:[]},n.loadAlternate=n.loadAlternate.bind(Object(l.a)(n)),n.handleSearchTextChanged=n.handleSearchTextChanged.bind(Object(l.a)(n)),n.cardClicked=n.cardClicked.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t=this,e=this._history.getLast();if(e&&e.url===window.location.hash){var a=this._history.popHistory();this.setState({searchText:a.obj.search}),window.scrollToThis=a.obj.scroll}var n=new y,r=this.props.match.params;this.setState({id:r.id}),n.getAircraft(r.id).then((function(e){document.title="DCSDB - "+e.name,g(),n.getWeaponList().then((function(a){e.weapongroups={aam:[],agm:[],bomb:[],fuel:[],pod:[],rocket:[]};var n,r=Object(d.a)(e.weapons);try{var i=function(){var t=n.value;t.tags=a.find((function(e){return e.id===t.id})).tags,m(t),e.weapongroups[t.category]||(e.weapongroups[t.category]=[]),e.weapongroups[t.category].push(t)};for(r.s();!(n=r.n()).done;)i()}catch(s){r.e(s)}finally{r.f()}t.setState({aircraft:e})})).then((function(){n.getTutorialList(r.id).then((function(e){t.setState({tutorials:e})})).then((function(){window.scrollToThis&&(window.scrollTo(0,window.scrollToThis),delete window.scrollToThis)}))}))}))}},{key:"handleSearchTextChanged",value:function(t){this.setState({searchText:t})}},{key:"loadAlternate",value:function(t){t.target.src.includes("image.jpg")&&(t.target.src=t.target.src.replace("image.jpg","thumbnail.jpg"))}},{key:"cardClicked",value:function(t){this._history.pushHistory(window.location.hash,{search:this.state.searchText,scroll:window.scrollY})}},{key:"render",value:function(){var t=this,e=new URLSearchParams(this.props.location.search).get("from"),a=this.state,n=a.aircraft,r=a.id,i=a.searchText,s=a.tutorials;return Object(f.jsxs)("div",{className:"AircraftView-root",children:[Object(f.jsx)(V,{className:"AircraftView-root-backbutton",returnTo:e?"/weapon/"+e:"/aircraft"}),Object(f.jsx)("img",{alt:n.name,src:"/dcsdb/data/aircrafts/"+r+"/image.jpg",onError:this.loadAlternate}),Object(f.jsx)("span",{children:n.name}),Object(f.jsxs)("div",{className:"AircraftView-root-content",children:[Object(f.jsx)(S,{searchText:i,onSearchTextChanged:this.handleSearchTextChanged,chips:this.state.searchterms}),function(){if(n.weapongroups){var e=[];for(var a in n.weapongroups){var s=n.weapongroups[a],c=s.filter((function(t){return O(i,t,"exact")}));c.length||(c=s.filter((function(t){return O(i,t,"starts")}))),c.length||(c=s.filter((function(t){return O(i,t,"includes")}))),c&&c.length&&e.push(Object(f.jsx)(G,{cardClicked:t.cardClicked,id:a,group:c,aircraftid:r},a))}return e.length?e:Object(f.jsx)("span",{children:"No equipment found"})}return Object(f.jsx)("span",{})}()]}),Object(f.jsxs)("div",{className:"AircraftView-root-info",children:[Object(f.jsx)("div",{className:"AircraftView-root-extra",children:Object(f.jsx)("p",{dangerouslySetInnerHTML:{__html:n.description}})}),s.length?Object(f.jsxs)("div",{className:"AircraftView-root-tutorials",children:[Object(f.jsx)("h3",{children:"Guides"}),Object(f.jsx)("ul",{children:s.map((function(e){return Object(f.jsx)(p.b,{onClick:function(e){return t.cardClicked()},to:"/tutorial/"+r+"/"+e.id,children:Object(f.jsx)("li",{children:e.name})})}))})]}):""]})]})}}]),a}(r.a.Component)),G=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).state={isOpen:!0},n.toggleGroup=n.toggleGroup.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"toggleGroup",value:function(){var t=this.state.isOpen;this.setState({isOpen:!t})}},{key:"cardClicked",value:function(t){this.props.cardClicked(t)}},{key:"render",value:function(){var t=this,e=this.props,a=e.id,n=e.group,r=e.aircraftid,i=this.state.isOpen;return Object(f.jsxs)("div",{className:"WeaponGroup-root",children:[Object(f.jsxs)("div",{className:"WeaponGroup-root-header",onClick:this.toggleGroup,children:[Object(f.jsx)("span",{children:function(){switch(a){case"aam":return"AA Missiles";case"agm":return"AG Missiles";case"bomb":return"Bombs";case"fuel":return"Fuel Tanks";case"pod":return"Pods";case"rocket":return"Rockets";default:return a}}()}),i?Object(f.jsx)("span",{className:"material-icons",children:"keyboard_arrow_down"}):Object(f.jsx)("span",{className:"material-icons",children:"keyboard_arrow_up"})]}),Object(f.jsx)("div",{className:"WeaponGroup-root-content "+(i?"":"collapsed"),children:i?n.sort((function(t,e){return t.name-e.name})).map((function(e){return Object(f.jsx)(_,{weapon:e,aircraftid:r,clickCallback:function(e){return t.cardClicked(e)}},e.id)})):""})]})}}]),a}(r.a.Component),J=Object(W.g)(H);a(51);var R=function(){return Object(f.jsxs)("header",{className:"app-header",children:[Object(f.jsx)("span",{className:"title",children:"DCSDB"}),Object(f.jsxs)("div",{className:"navigation",children:[Object(f.jsxs)(p.b,{className:"app-header-link",to:"/aircraft",children:[Object(f.jsx)("span",{className:"link-text",children:"Aircraft"}),Object(f.jsx)("span",{className:"material-icons link-icon",children:"airplanemode_active"})]}),Object(f.jsxs)(p.b,{className:"app-header-link",to:"/weapons",children:[Object(f.jsx)("span",{className:"link-text",children:"Weapons"}),Object(f.jsx)("span",{className:"material-icons link-icon",children:"workspaces"})]}),Object(f.jsxs)(p.b,{className:"app-header-link",to:"/about",children:[Object(f.jsx)("span",{className:"link-text",children:"About"}),Object(f.jsx)("span",{className:"material-icons link-icon",children:"info"})]})]})]})},z=(a(52),function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){document.title="DCSDB - About",g()}},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"AboutPage-root",children:[Object(f.jsx)("p",{children:"This website was created to provide a quick reference for the aircraft and weapons available in Digital Combat Simulator."}),Object(f.jsx)("p",{children:"I will try to keep this site updated to reflect the latest open beta version of DCS, but I can not guarantee that the information presented here is going to be 100% accurate at all times."}),Object(f.jsx)("p",{children:"The data presented on this website is only applicable to DCS, and it does not necessarily reflect any real-world characteristics of the various aircraft and weapons."}),Object(f.jsx)("p",{children:"This is a hobby project and is in no way affiliated with Eagle Dynamics."}),Object(f.jsxs)("p",{children:["You can find the github project ",Object(f.jsx)("a",{href:"https://github.com/Dzsek/dcsdb",children:"here"}),"."]}),Object(f.jsxs)("p",{children:["This will always remain free and without ads, however if you would like to support development feel free to ",Object(f.jsx)("a",{href:"https://www.buymeacoffee.com/dcsdb",children:"buy me a coffee/beer"}),"."]})]})}}]),a}(r.a.Component)),E=z,F=(a(53),function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t))._mq=window.matchMedia("only screen and (max-width: 800px)"),n.state={tutorial:{},planeid:"",fullscreenVisible:!1,fullscreenInstruction:{}},n}return Object(o.a)(a,[{key:"maximizeInstruction",value:function(t,e){this.setState({fullscreenInstruction:t,fullscreenVisible:!0}),document.body.style.overflow="hidden"}},{key:"minimizeInstruction",value:function(){this.setState({fullscreenInstruction:{},fullscreenVisible:!1}),document.body.style.overflow="auto"}},{key:"componentDidMount",value:function(){var t=this,e=new y,a=this.props.match.params;e.getTutorial(a.planeid,a.tutorialid).then((function(e){t.setState({tutorial:e,planeid:a.planeid})}))}},{key:"render",value:function(){var t=this,e=this.state,a=e.tutorial,n=e.planeid,r=e.fullscreenVisible,i=e.fullscreenInstruction;return Object(f.jsxs)("div",{className:"Tutorial-root",children:[Object(f.jsxs)("div",{className:"Tutorial-title",children:[Object(f.jsx)("h1",{children:a.title}),Object(f.jsx)("h2",{children:a.subtitle})]}),a.steps?a.steps.sort((function(t,e){return t.step-e.step})).map((function(e){return Object(f.jsxs)("div",{className:"Tutorial-instructionCard",children:[Object(f.jsx)("div",{children:Object(f.jsx)("span",{children:e.step})}),Object(f.jsxs)("div",{children:[e.image?Object(f.jsx)("img",{alt:"Instruction "+e.step,src:"/dcsdb/data/aircrafts/"+n+"/tutorials/"+e.image,onClick:function(a){return t.maximizeInstruction(e)}}):"",Object(f.jsx)("p",{dangerouslySetInnerHTML:{__html:e.instructions}})]})]},e.step)})):"",r?Object(f.jsxs)("div",{className:"Tutorial-fullscreenInstruction",onClick:function(e){return t.minimizeInstruction()},children:[i.image?Object(f.jsx)("img",{alt:"Instruction "+i.step,src:"/dcsdb/data/aircrafts/"+n+"/tutorials/"+i.image}):"",Object(f.jsx)("p",{dangerouslySetInnerHTML:{__html:i.instructions}})]}):""]})}}]),a}(r.a.Component)),Y=Object(W.g)(F);var q=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(R,{}),Object(f.jsxs)(W.d,{children:[Object(f.jsx)(W.b,{exact:!0,path:"/",children:Object(f.jsx)(W.a,{to:"/aircraft"})}),Object(f.jsx)(W.b,{exact:!0,path:"/aircraft",children:Object(f.jsx)(N,{})}),Object(f.jsx)(W.b,{exact:!0,path:"/weapons",children:Object(f.jsx)(D,{})}),Object(f.jsx)(W.b,{exact:!0,path:"/aircraft/:id",children:Object(f.jsx)(J,{})}),Object(f.jsx)(W.b,{exact:!0,path:"/weapon/:id",children:Object(f.jsx)(P,{})}),Object(f.jsx)(W.b,{exact:!0,path:"/tutorial/:planeid/:tutorialid",children:Object(f.jsx)(Y,{})}),Object(f.jsx)(W.b,{exact:!0,path:"/about",children:Object(f.jsx)(E,{})})]})]})};s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(p.a,{hashType:"slash",children:Object(f.jsx)(q,{})})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.5a50f6bb.chunk.js.map