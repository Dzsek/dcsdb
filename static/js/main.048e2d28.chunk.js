(this.webpackJsonpdcsdb=this.webpackJsonpdcsdb||[]).push([[0],{138:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},147:function(e,t,a){},445:function(e,t,a){},446:function(e,t,a){},447:function(e,t,a){},448:function(e,t,a){},449:function(e,t,a){},450:function(e,t,a){},451:function(e,t,a){},452:function(e,t,a){},453:function(e,t,a){},454:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(131),i=a.n(c),s=(a(138),a(139),a(4)),o=a(5),l=a(11),h=a(7),d=a(6),u=(a(140),a(28)),p=(a(141),a(13)),j=a(1),f=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.plane,a=e.weaponid;return Object(j.jsx)(p.b,{to:"/aircraft/"+t.id+(a?"?from="+a:""),children:Object(j.jsxs)("div",{className:"AircraftCard-root"+(t.id===t.name?" AircraftCard-root-wip":""),children:[Object(j.jsx)("img",{alt:t.name,src:"/dcsdb/data/aircrafts/"+t.id+"/thumbnail.jpg"}),Object(j.jsx)("span",{children:t.name})]})})}}]),a}(r.a.Component);a(147),a(148);function b(e){var t=e.name.replaceAll(" ","").replaceAll("-","").replaceAll("/","").replaceAll(".","").toLowerCase();e.tags||(e.tags=[]),e.tags.push(t),e.tags.push(e.category.toLowerCase()),e.tags.includes("ir")&&e.tags.push("infrared"),"aam"===e.category&&(e.tags.push("airtoair"),e.tags.push("aa")),"agm"===e.category&&(e.tags.push("airtoground"),e.tags.push("ag")),"bomb"===e.category&&(e.tags.push("bombs"),e.tags.push("airtoground"),e.tags.push("ag")),"pod"===e.category&&(e.tags.push("pods"),e.tags.push("sensors")),"rocket"===e.category&&(e.tags.push("rockets"),e.tags.push("airtoground"),e.tags.push("ag"))}function m(e,t){var a,n=e.replaceAll("-","").toLowerCase().split(" "),r=!0,c=Object(u.a)(n);try{for(c.s();!(a=c.n()).done;){var i,s=a.value,o=!1,l=Object(u.a)(t.tags);try{for(l.s();!(i=l.n()).done;){if(i.value.includes(s)){o=!0;break}}}catch(h){l.e(h)}finally{l.f()}if(!o){r=!1;break}}}catch(h){c.e(h)}finally{c.f()}return r}function O(){window.gtag&&window.gtag("event","page_view",{page_location:window.location.origin,page_path:window.location.pathname+window.location.hash,page_title:document.title})}var g=["Air-to-Ground","Air-to-Air","Bomb","Rocket","Pod","Fuel","GPS","Radar","Laser","Infrared","TV","Dumb","Cluster","Tank","Light Armor","Building","Fortification","SAM"],x=["Modern","Cold War","Multirole","Fighter","CAS","Blue","Red"],v=null,w=function(){function e(){return Object(s.a)(this,e),v||(v=this),this.aircraft=null,this.weapons=null,this.aircraftdata={},this.weapondata={},v}return Object(o.a)(e,[{key:"getAircraftList",value:function(){var e=this;return this.aircraft?new Promise((function(t,a){setTimeout((function(){t(e.aircraft)}),10)})):fetch("/dcsdb/data/aircrafts/aircrafts.json").then((function(e){return e.json()})).then((function(t){return e.aircraft=t,e.aircraft}))}},{key:"getWeaponList",value:function(){var e=this;return this.weapons?new Promise((function(t,a){setTimeout((function(){t(e.weapons)}),10)})):fetch("/dcsdb/data/weapons/weapons.json").then((function(e){return e.json()})).then((function(t){return e.weapons=t,e.weapons}))}},{key:"getAircraft",value:function(e){var t=this;return this.aircraftdata[e]?new Promise((function(a,n){setTimeout((function(){a(t.aircraftdata[e])}),10)})):fetch("/dcsdb/data/aircrafts/"+e+"/data.json").then((function(e){return e.json()})).then((function(a){return t.aircraftdata[e]=a,t.aircraftdata[e]}))}},{key:"getWeapon",value:function(e){var t=this;return this.weapondata[e]?new Promise((function(a,n){setTimeout((function(){a(t.weapondata[e])}),10)})):fetch("/dcsdb/data/weapons/"+e+"/data.json").then((function(e){return e.json()})).then((function(a){return t.weapondata[e]=a,t.weapondata[e]}))}}]),e}(),y=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={aircrafts:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;(new w).getAircraftList().then((function(t){var a,n=Object(u.a)(t);try{for(n.s();!(a=n.n()).done;){var r=a.value,c=r.name.replaceAll(" ","").replaceAll("-","").replaceAll("/","").replaceAll(".","").toLowerCase();r.tags||(r.tags=[]),r.tags.push(c)}}catch(i){n.e(i)}finally{n.f()}e.setState({aircrafts:t})}))}},{key:"render",value:function(){var e=this,t=this.state.aircrafts;return Object(j.jsx)("div",{className:"AircraftList-root",children:t.filter((function(t){return m(e.props.filter,t)})).filter((function(e){return e.id!==e.name})).sort((function(e,t){return e.name-t.name})).map((function(e){return Object(j.jsx)(f,{plane:e},e.id)}))})}}]),a}(r.a.Component),k=(a(445),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleChange=n.handleChange.bind(Object(l.a)(n)),n.clear=n.clear.bind(Object(l.a)(n)),n.chipClicked=n.chipClicked.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.props.onSearchTextChanged(e.target.value)}},{key:"chipClicked",value:function(e){if(this.props.searchText.includes(e)){var t=this.props.searchText.replaceAll(e,"").replaceAll("  "," ");" "===t&&(t=""),this.props.onSearchTextChanged(t)}else{var a=this.props.searchText;a.length&&(a+=" "),a+=e,this.props.onSearchTextChanged(a)}}},{key:"clear",value:function(e){e.preventDefault(),this.props.onSearchTextChanged("")}},{key:"render",value:function(){var e=this,t=this.props.searchText,a=this.props.chips;return Object(j.jsxs)("div",{className:"SearchBar-root",children:[Object(j.jsxs)("div",{className:"SearchBar-root-bar",children:[Object(j.jsx)("input",{type:"text",placeholder:"Search",value:t,onChange:this.handleChange}),Object(j.jsx)("span",{className:"material-icons",onClick:this.clear,children:"close"})]}),Object(j.jsx)("div",{className:"SearchBar-root-chips",children:a?a.map((function(a){return Object(j.jsxs)("div",{className:t.includes(a)?"chip-active":"",onClick:function(t){return e.chipClicked(a)},children:[Object(j.jsx)("span",{children:a}),Object(j.jsx)("span",{className:"material-icons",onClick:e.clear,children:"close"})]},a)})):""})]})}}]),a}(r.a.Component)),C=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={searchText:"",searchterms:x},n.handleSearchTextChanged=n.handleSearchTextChanged.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){document.title="DCSDB - Aircraft",O()}},{key:"handleSearchTextChanged",value:function(e){this.setState({searchText:e})}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"AircraftPage-root",children:[Object(j.jsx)(k,{searchText:this.state.searchText,onSearchTextChanged:this.handleSearchTextChanged,chips:this.state.searchterms}),Object(j.jsx)(y,{filter:this.state.searchText})]})}}]),a}(r.a.Component),A=(a(446),a(447),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.weapon,a=e.aircraftid;return Object(j.jsx)(p.b,{to:"/weapon/"+t.id+(a?"?from="+a:""),children:Object(j.jsxs)("div",{className:"WeaponCard-root"+(t.id===t.name?" WeaponCard-root-wip":""),children:[Object(j.jsx)("img",{alt:t.name,src:"/dcsdb/data/weapons/"+t.id+"/thumbnail.jpg"}),Object(j.jsx)("span",{children:t.name})]})})}}]),a}(r.a.Component)),T=(a(448),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={weapons:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;(new w).getWeaponList().then((function(t){var a,n=Object(u.a)(t);try{for(n.s();!(a=n.n()).done;){b(a.value)}}catch(r){n.e(r)}finally{n.f()}e.setState({weapons:t})}))}},{key:"render",value:function(){var e=this,t=this.state.weapons;return Object(j.jsx)("div",{className:"WeaponList-root",children:t.filter((function(t){return m(e.props.filter,t)})).filter((function(e){return e.id!==e.name})).sort((function(e,t){return e.name-t.name})).map((function(e){return Object(j.jsx)(A,{weapon:e},e.id)}))})}}]),a}(r.a.Component)),S=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={searchText:"",searchterms:g},n.handleSearchTextChanged=n.handleSearchTextChanged.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){document.title="DCSDB - Weapons",O()}},{key:"handleSearchTextChanged",value:function(e){this.setState({searchText:e})}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"WeaponPage-root",children:[Object(j.jsx)(k,{searchText:this.state.searchText,onSearchTextChanged:this.handleSearchTextChanged,chips:this.state.searchterms}),Object(j.jsx)(T,{filter:this.state.searchText})]})}}]),a}(r.a.Component),N=a(8),D=(a(449),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.returnTo,a=e.className;return Object(j.jsx)("div",{className:a,children:Object(j.jsx)(p.b,{to:t,children:Object(j.jsx)("span",{className:"material-icons backButton",children:"keyboard_arrow_left"})})})}}]),a}(r.a.Component)),W=(a(450),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={weapon:{},id:"",selectedInstructionAircraft:{}},n.selectedAircraftChanged=n.selectedAircraftChanged.bind(Object(l.a)(n)),n.loadAlternate=n.loadAlternate.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=new URLSearchParams(this.props.location.search).get("from"),a=this.props.match.params;this.setState({id:a.id}),(new w).getWeapon(a.id).then((function(a){if(document.title="DCSDB - "+a.name,O(),e.setState({weapon:a}),a.aircraft){var n=a.aircraft.find((function(e){return e.id===t}));!n&&a.aircraft.length&&(n=a.aircraft[0]),n&&e.setState({selectedInstructionAircraft:n})}}))}},{key:"selectedAircraftChanged",value:function(e){var t=e.target.value,a=this.state.weapon.aircraft.find((function(e){return e.id===t}));a&&this.setState({selectedInstructionAircraft:a})}},{key:"loadAlternate",value:function(e){e.target.src.includes("image.jpg")&&(e.target.src=e.target.src.replace("image.jpg","thumbnail.jpg"))}},{key:"render",value:function(){var e=new URLSearchParams(this.props.location.search).get("from"),t=this.state,a=t.weapon,n=t.id,r=t.selectedInstructionAircraft;return Object(j.jsxs)("div",{className:"WeaponView-root",children:[Object(j.jsx)(D,{className:"WeaponView-root-backbutton",returnTo:e?"/aircraft/"+e:"/weapons"}),Object(j.jsx)("img",{alt:a.name,src:"/dcsdb/data/weapons/"+n+"/image.jpg",onError:this.loadAlternate}),Object(j.jsx)("span",{children:a.name}),Object(j.jsxs)("div",{className:"WeaponView-root-content",children:[Object(j.jsx)("div",{children:a.data?Object(j.jsx)("div",{className:"WeaponView-table",children:a.data?Object.keys(a.data).map((function(e){return Object(j.jsx)(L,{name:e,data:a.data[e]},e)})):""}):"Weapon data not available"}),a.aircraft&&a.aircraft.length?Object(j.jsxs)("div",{style:{display:"none"},children:[Object(j.jsxs)("div",{className:"WeaponView-aircraftinstructions",children:[Object(j.jsx)("span",{children:"Notes"}),Object(j.jsx)("select",{value:r.id,onChange:this.selectedAircraftChanged,children:a.aircraft.map((function(e){return Object(j.jsx)("option",{value:e.id,children:e.name},e.id)}))})]}),r.instructions?r.instructions.map((function(e){return Object(j.jsx)("span",{className:"WeaponView-instruction",children:e})})):"No instructions"]}):"",Object(j.jsx)("div",{className:"WeaponView-root-description",children:Object(j.jsx)("p",{children:a.description})})]}),Object(j.jsxs)("div",{className:"WeaponView-root-extra",children:[Object(j.jsx)("span",{children:"Compatible platforms"}),Object(j.jsx)("div",{children:a.aircraft?a.aircraft.filter((function(e){return e.id!==e.name})).map((function(e){return Object(j.jsx)(f,{plane:e,weaponid:n},e.id)})):"Data unavailable"})]})]})}}]),a}(r.a.Component));function L(e){return e.data?[Object(j.jsx)("span",{style:{fontWeight:"bold"},children:e.name},e.name),Object(j.jsx)("span",{children:e.data},e.data)]:""}var B=Object(N.g)(W),M=(a(451),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={aircraft:{},id:"",searchText:"",searchterms:g},n.loadAlternate=n.loadAlternate.bind(Object(l.a)(n)),n.handleSearchTextChanged=n.handleSearchTextChanged.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=new w,a=this.props.match.params;this.setState({id:a.id}),t.getAircraft(a.id).then((function(a){document.title="DCSDB - "+a.name,O(),t.getWeaponList().then((function(t){a.weapongroups={aam:[],agm:[],bomb:[],fuel:[],pod:[],rocket:[]};var n,r=Object(u.a)(a.weapons);try{var c=function(){var e=n.value;e.tags=t.find((function(t){return t.id===e.id})).tags,b(e),a.weapongroups[e.category]||(a.weapongroups[e.category]=[]),a.weapongroups[e.category].push(e)};for(r.s();!(n=r.n()).done;)c()}catch(i){r.e(i)}finally{r.f()}e.setState({aircraft:a})}))}))}},{key:"handleSearchTextChanged",value:function(e){this.setState({searchText:e})}},{key:"loadAlternate",value:function(e){e.target.src.includes("image.jpg")&&(e.target.src=e.target.src.replace("image.jpg","thumbnail.jpg"))}},{key:"render",value:function(){var e=new URLSearchParams(this.props.location.search).get("from"),t=this.state,a=t.aircraft,n=t.id,r=t.searchText;return Object(j.jsxs)("div",{className:"AircraftView-root",children:[Object(j.jsx)(D,{className:"AircraftView-root-backbutton",returnTo:e?"/weapon/"+e:"/aircraft"}),Object(j.jsx)("img",{alt:a.name,src:"/dcsdb/data/aircrafts/"+n+"/image.jpg",onError:this.loadAlternate}),Object(j.jsx)("span",{children:a.name}),Object(j.jsxs)("div",{className:"AircraftView-root-content",children:[Object(j.jsx)(k,{searchText:r,onSearchTextChanged:this.handleSearchTextChanged,chips:this.state.searchterms}),function(){if(a.weapongroups){var e=[];for(var t in a.weapongroups){var c=a.weapongroups[t];(c=c.filter((function(e){return m(r,e)})))&&c.length&&e.push(Object(j.jsx)(P,{id:t,group:c,aircraftid:n},t))}return e.length?e:Object(j.jsx)("span",{children:"No equipment found"})}return Object(j.jsx)("span",{})}()]}),Object(j.jsx)("div",{className:"AircraftView-root-extra",children:Object(j.jsx)("p",{children:a.description})})]})}}]),a}(r.a.Component)),P=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={isOpen:!0},n.toggleGroup=n.toggleGroup.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"toggleGroup",value:function(){var e=this.state.isOpen;this.setState({isOpen:!e})}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.group,n=e.aircraftid,r=this.state.isOpen;return Object(j.jsxs)("div",{className:"WeaponGroup-root",children:[Object(j.jsxs)("div",{className:"WeaponGroup-root-header",onClick:this.toggleGroup,children:[Object(j.jsx)("span",{children:function(){switch(t){case"aam":return"AA Missiles";case"agm":return"AG Missiles";case"bomb":return"Bombs";case"fuel":return"Fuel Tanks";case"pod":return"Pods";case"rocket":return"Rockets";default:return t}}()}),r?Object(j.jsx)("span",{className:"material-icons",children:"keyboard_arrow_down"}):Object(j.jsx)("span",{className:"material-icons",children:"keyboard_arrow_up"})]}),Object(j.jsx)("div",{className:"WeaponGroup-root-content "+(r?"":"collapsed"),children:r?a.sort((function(e,t){return e.name-t.name})).map((function(e){return Object(j.jsx)(A,{weapon:e,aircraftid:n},e.id)})):""})]})}}]),a}(r.a.Component),V=Object(N.g)(M);a(452);var _=function(){return Object(j.jsxs)("header",{className:"app-header",children:[Object(j.jsx)("span",{className:"title",children:"DCSDB"}),Object(j.jsxs)("div",{className:"navigation",children:[Object(j.jsxs)(p.b,{className:"app-header-link",to:"/aircraft",children:[Object(j.jsx)("span",{className:"link-text",children:"Aircraft"}),Object(j.jsx)("span",{className:"material-icons link-icon",children:"airplanemode_active"})]}),Object(j.jsxs)(p.b,{className:"app-header-link",to:"/weapons",children:[Object(j.jsx)("span",{className:"link-text",children:"Weapons"}),Object(j.jsx)("span",{className:"material-icons link-icon",children:"workspaces"})]}),Object(j.jsxs)(p.b,{className:"app-header-link",to:"/about",children:[Object(j.jsx)("span",{className:"link-text",children:"About"}),Object(j.jsx)("span",{className:"material-icons link-icon",children:"info"})]})]})]})},G=(a(453),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){document.title="DCSDB - About",O()}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"AboutPage-root",children:[Object(j.jsx)("p",{children:"This website was created to provide a quick reference for the aircraft and weapons available in Digital Combat Simulator."}),Object(j.jsx)("p",{children:"I will try to keep this site updated to reflect the latest open beta version of DCS, but I can not guarantee that the information presented here is going to be 100% accurate at all times."}),Object(j.jsx)("p",{children:"The data presented on this website is only applicable to DCS, and it does not necessarily reflect any real-world characteristics of the various aircraft and weapons."}),Object(j.jsx)("p",{children:"This is a hobby project and is in no way affiliated with Eagle Dynamics."}),Object(j.jsxs)("p",{children:["You can find the github project ",Object(j.jsx)("a",{href:"https://github.com/Dzsek/dcsdb",children:"here"}),"."]}),Object(j.jsxs)("p",{children:["This will always remain free and without ads, however if you would like to support development feel free to ",Object(j.jsx)("a",{href:"https://www.buymeacoffee.com/dcsdb",children:"buy me a coffee/beer"}),"."]})]})}}]),a}(r.a.Component));var I=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(_,{}),Object(j.jsxs)(N.d,{children:[Object(j.jsx)(N.b,{exact:!0,path:"/",children:Object(j.jsx)(N.a,{to:"/aircraft"})}),Object(j.jsx)(N.b,{exact:!0,path:"/aircraft",children:Object(j.jsx)(C,{})}),Object(j.jsx)(N.b,{exact:!0,path:"/weapons",children:Object(j.jsx)(S,{})}),Object(j.jsx)(N.b,{exact:!0,path:"/aircraft/:id",children:Object(j.jsx)(V,{})}),Object(j.jsx)(N.b,{exact:!0,path:"/weapon/:id",children:Object(j.jsx)(B,{})}),Object(j.jsx)(N.b,{exact:!0,path:"/about",children:Object(j.jsx)(G,{})})]})]})};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(p.a,{hashType:"slash",children:Object(j.jsx)(I,{})})}),document.getElementById("root"))}},[[454,1,2]]]);
//# sourceMappingURL=main.048e2d28.chunk.js.map