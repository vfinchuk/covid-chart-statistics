(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{270:function(e,t,a){e.exports=a(458)},457:function(e,t,a){},458:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a.n(c),l=a(18),i=a(73);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u,m,d,f=a(55),s=a(17),O=a(8),E={navTrigger:!1,navLinks:[{name:"World",url:"/"},{name:"By country",url:"/country"},{name:"About",url:"/about"}],loading:!1,alert:null},p=(u={},Object(s.a)(u,"APP/TOGGLE_NAVIGATION",(function(e){return Object(O.a)(Object(O.a)({},e),{},{navTrigger:!e.navTrigger})})),Object(s.a)(u,"APP/SHOW_LOADING",(function(e){return Object(O.a)(Object(O.a)({},e),{},{loading:!0})})),Object(s.a)(u,"APP/HIDE_LOADING",(function(e){return Object(O.a)(Object(O.a)({},e),{},{loading:!1})})),Object(s.a)(u,"APP/SHOW_ALERT",(function(e,t){var a=t.payload;return Object(O.a)(Object(O.a)({},e),{},{alert:a})})),Object(s.a)(u,"APP/HIDE_ALERT",(function(e){return Object(O.a)(Object(O.a)({},e),{},{alert:null})})),Object(s.a)(u,"DEFAULT",(function(e){return e})),u),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,a=p[t.type]||p.DEFAULT;return a(e,t)},v={currentCountry:"",caseType:"",countriesList:[],data:[],filteredData:[],dateFrom:null,dateFromRange:{min:null,max:null}},y=(m={},Object(s.a)(m,"COUNTRY/FETCH_COUNTRIES",(function(e,t){var a=t.payload;return Object(O.a)(Object(O.a)({},e),{},{countriesList:a})})),Object(s.a)(m,"COUNTRY/FETCH_BY_COUNTRY",(function(e,t){var a=t.payload;return Object(O.a)(Object(O.a)({},e),{},{data:a})})),Object(s.a)(m,"COUNTRY/SELECT_DATE_FROM_RANGE",(function(e,t){var a=t.payload;return Object(O.a)(Object(O.a)({},e),{},{dateFromRange:Object(O.a)({},a)})})),Object(s.a)(m,"COUNTRY/SELECT_DATE_FROM",(function(e,t){var a=t.payload;return Object(O.a)(Object(O.a)({},e),{},{dateFrom:new Date(a)})})),Object(s.a)(m,"COUNTRY/SELECT_COUNTRY",(function(e,t){var a=t.payload;return Object(O.a)(Object(O.a)({},e),{},{currentCountry:a})})),Object(s.a)(m,"COUNTRY/SELECT_CASE",(function(e,t){var a=t.payload;return Object(O.a)(Object(O.a)({},e),{},{caseType:a})})),Object(s.a)(m,"COUNTRY/FILTERED_DATA",(function(e,t){var a=t.payload;return Object(O.a)(Object(O.a)({},e),{},{filteredData:a})})),Object(s.a)(m,"DEFAULT",(function(e){return e})),m),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,a=y[t.type]||y.DEFAULT;return a(e,t)},T={caseType:"",data:[],filteredData:[],dateFrom:null,dateTo:null,dateFromRange:{min:null,max:null},dateToRange:{min:null,max:null}},h=(d={},Object(s.a)(d,"GLOBAL/FETCH_DATA",(function(e,t){var a=t.payload;return Object(O.a)(Object(O.a)({},e),{},{data:a})})),Object(s.a)(d,"GLOBAL/FILTERED_DATA",(function(e,t){var a=t.payload;return Object(O.a)(Object(O.a)({},e),{},{filteredData:a})})),Object(s.a)(d,"GLOBAL/SELECT_CASE",(function(e,t){var a=t.payload;return Object(O.a)(Object(O.a)({},e),{},{caseType:a})})),Object(s.a)(d,"GLOBAL/SELECT_DATE_FROM",(function(e,t){var a=t.payload;return Object(O.a)(Object(O.a)({},e),{},{dateFrom:a})})),Object(s.a)(d,"GLOBAL/SELECT_DATE_TO",(function(e,t){var a=t.payload;return Object(O.a)(Object(O.a)({},e),{},{dateTo:a})})),Object(s.a)(d,"GLOBAL/SET_DATE_FROM_RANGE",(function(e,t){var a=t.payload;return Object(O.a)(Object(O.a)({},e),{},{dateFromRange:Object(O.a)({},a)})})),Object(s.a)(d,"GLOBAL/SET_DATE_TO_RANGE",(function(e,t){var a=t.payload;return Object(O.a)(Object(O.a)({},e),{},{dateToRange:Object(O.a)({},a)})})),Object(s.a)(d,"DEFAULT",(function(e){return e})),d),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0,a=h[t.type]||h.DEFAULT;return a(e,t)},C=Object(f.c)({app:b,country:g,global:j}),A=a(204),D="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):f.d,L=Object(f.e)(C,D(Object(f.a)(A.a))),_=a(506),N=a(21),R=a(491),S=a(512),w=a(497),F=a(498),x=a(114),I=a(499),k=a(208),G=a.n(k),U=a(513),P=a(495),B=a(462),Y=a(496),H=Object(R.a)((function(){return Object(S.a)({list:{width:250},activeListItem:{textDecoration:"underline"}})})),M=Object(N.f)((function(e){var t=e.links,a=e.trigger,n=e.closeDrawerHandler,c=e.history,o=H();return r.a.createElement(U.a,{anchor:"left",open:a,onClose:n},r.a.createElement(P.a,{className:o.list},t.map((function(e){return r.a.createElement(B.a,{key:e.name,button:!0,onClick:function(){return t=e.url,n(),void(t!==c.location.pathname&&c.push(t));var t}},r.a.createElement(Y.a,{primary:e.name,className:e.url===c.location.pathname?o.activeListItem:null}))}))))})),W=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;return function(a){a({type:"APP/SHOW_ALERT",payload:e}),setTimeout((function(){a({type:"APP/HIDE_ALERT"})}),t)}},K=Object(R.a)((function(e){return Object(S.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},list:{width:250}})})),V=function(){var e=K(),t=Object(l.b)(),a=Object(l.c)((function(e){return e.app.navLinks})),n=Object(l.c)((function(e){return e.app.navTrigger})),c=function(){t({type:"APP/TOGGLE_NAVIGATION"})};return r.a.createElement("div",{className:e.root},r.a.createElement(w.a,{position:"static"},r.a.createElement(F.a,null,r.a.createElement(I.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",onClick:c},r.a.createElement(G.a,null)),r.a.createElement(x.a,{variant:"h6",className:e.title},"Covid-19"),r.a.createElement(M,{trigger:n,links:a,closeDrawerHandler:c}))))},J=a(510),X=Object(R.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),z=function(){var e=X(),t=Object(l.c)((function(e){return e.app.alert}));return t?r.a.createElement("div",{className:e.root},r.a.createElement(J.a,{severity:"error"},t)):null},$=a(508),q=a(500),Q=Object(R.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",zIndex:-1,"& > * + *":{marginLeft:e.spacing(2)}}}})),Z=function(){var e=Q();return r.a.createElement($.a,{className:e.root,m:1,height:100},r.a.createElement(q.a,null))},ee=a(514),te=a(504),ae=a(501),ne=a(509),re=Object(R.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120}}})),ce=r.a.memo((function(e){var t=e.value,a=e.label,n=e.items,c=e.handleChange,o=re();return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae.a,{className:o.formControl},r.a.createElement(ee.a,{id:"select-label-".concat(a)},a),r.a.createElement(ne.a,{labelId:"select-label-".concat(a),id:"select-".concat(a),value:t,onChange:c},n.map((function(e){var t=e.value,a=e.title;return r.a.createElement(te.a,{key:t,value:t},a)})))))})),oe=a(28);function le(e){var t={month:"numeric",day:"numeric",year:"2-digit"};return new Intl.DateTimeFormat("ua-EN",t).format(new Date(e))}var ie="https://api.covid19api.com",ue={default:"all",confirmed:"confirmed",deaths:"deaths",recovered:"recovered",active:"active"},me={confirmed:"#8884d8",deaths:"#d32f2f",recovered:"#82ca9d",active:"#ffc658"},de=800,fe=400,se={left:0,right:30,top:30,bottom:0},Oe={backgroundColor:"#f1f1f1",padding:"0.5rem"},Ee="date",pe=function(e){return le(e)},be=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return"".concat((100*e).toFixed(t),"%")},ve=function(e){var t=e.payload,a=e.label,n=a?le(a):a,c=t.reduce((function(e,t){return e+t.value}),0);return r.a.createElement("div",{className:"customized-tooltip-content",style:{backgroundColor:Oe.backgroundColor,padding:Oe.padding}},r.a.createElement("p",{className:"total"},"".concat(n," (Total: ").concat(c,")")),r.a.createElement("ul",{className:"list"},t.map((function(e,t){return r.a.createElement("li",{key:"item-".concat(t),style:{color:e.color}},"".concat(e.name,": ").concat(e.value,"\n              (").concat(function(e,t){return be(t>0?e/t:0,2)}(e.value,c),")"))}))))},ye=r.a.memo((function(e){var t=e.data;return r.a.createElement(oe.b,{width:de,height:fe,margin:Object(O.a)({},se),data:t,stackOffset:"expand"},r.a.createElement(oe.c,{strokeDasharray:"3 3"}),r.a.createElement(oe.e,{dataKey:Ee,tickFormatter:pe}),r.a.createElement(oe.f,{tickFormatter:be}),r.a.createElement(oe.d,{content:ve}),r.a.createElement(oe.a,{type:"monotone",dataKey:"deaths",stackId:"1",stroke:me.deaths,fill:me.deaths}),r.a.createElement(oe.a,{type:"monotone",dataKey:"active",stackId:"1",stroke:me.active,fill:me.active}),r.a.createElement(oe.a,{type:"monotone",dataKey:"recovered",stackId:"1",stroke:me.recovered,fill:me.recovered}))})),ge=a(505),Te=a(218),he=a(26),je=a(507),Ce=function(e){var t=e.value,a=e.label,n=e.minDate,c=e.maxDate,o=e.changeHandle;return r.a.createElement(he.a,{utils:Te.a},r.a.createElement(je.a,{disableToolbar:!0,variant:"inline",format:"dd.MM.yyyy",margin:"normal",label:a,value:t,minDate:n,maxDate:c,onChange:o,KeyboardButtonProps:{"aria-label":"change date"}}))},Ae=r.a.memo((function(e){var t=e.caseType,a=e.data;return r.a.createElement(oe.b,{width:de,height:fe,margin:Object(O.a)({},se),data:a},r.a.createElement(oe.c,{strokeDasharray:"3 3"}),r.a.createElement(oe.e,{dataKey:Ee}),r.a.createElement(oe.f,{width:100,fontSize:12}),r.a.createElement(oe.d,null),r.a.createElement(oe.a,{type:"monotone",dataKey:t,stroke:me[t],fill:me[t]}))}));function De(e,t){if(t!==ue.default)return Object.keys(e).map((function(a,n){return Object(s.a)({date:le(e[n].date)},t,e[n][t])}))}function Le(e){return new Date(e).getTime()}function _e(e,t){window.sessionStorage.setItem(e,t)}function Ne(e){return window.sessionStorage.getItem(e)}function Re(){return Object.keys(ue).map((function(e){return{value:ue[e],title:ue[e][0].toUpperCase()+ue[e].substring(1)}}))}function Se(e){var t=new Date(e);return t.setUTCHours(0,0,0,0),t.toISOString()}function we(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"add";e=new Date(e);var n=new Date(Number(e));return"add"===a?n.setDate(e.getDate()+t):"sub"===a&&n.setDate(e.getDate()-t),n}var Fe=a(59),xe=a.n(Fe),Ie=a(90),ke="globalDateFrom",Ge="globalDateTo",Ue="globalCase",Pe=function(e,t,a){return function(n){var r=e;n(He(e[0].date)),n(Ye(e[e.length-1].date)),t&&a&&(_e(ke,Se(t)),_e(Ge,Se(a)),r=e.filter((function(e){var n=Le(e.date);return n>=Le(t)&&n<=Le(a)})));var c=e[0].date,o=e[e.length-1].date;n(Me(c,r[r.length-1].date)),n(We(r[0].date,o)),n(Be(ue.default)),n({type:"GLOBAL/FILTERED_DATA",payload:r})}},Be=function(e){return function(t){var a=Ne(Ue);t({type:"GLOBAL/SELECT_CASE",payload:a||e})}},Ye=function(e){return function(t){var a=Ne(Ge);t({type:"GLOBAL/SELECT_DATE_TO",payload:null!==a&&void 0!==a?a:e})}},He=function(e){return function(t){var a=Ne(ke);t({type:"GLOBAL/SELECT_DATE_FROM",payload:null!==a&&void 0!==a?a:e})}},Me=function(e,t){return{type:"GLOBAL/SET_DATE_FROM_RANGE",payload:{min:e,max:t}}},We=function(e,t){return{type:"GLOBAL/SET_DATE_TO_RANGE",payload:{min:e,max:t}}},Ke=Object(R.a)((function(){return{box:{display:"flex",flexDirection:"column",alignItems:"center"},controlsPanel:{margin:"1rem auto",alignItems:"center",justifyContent:"space-evenly"},title:{margin:"1.5rem auto 0",textAlign:"center"}}})),Ve=Object(N.f)((function(e){var t=e.history,a=e.match,c=Ke(),o=Object(l.b)(),i=Object(l.c)((function(e){return e.app.loading})),u=Object(l.c)((function(e){return e.global.data})),m=Object(l.c)((function(e){return e.global.filteredData})),d=Object(l.c)((function(e){return e.global.dateFromRange})),f=Object(l.c)((function(e){return e.global.dateToRange})),s=Object(l.c)((function(e){return e.global.dateFrom})),O=Object(l.c)((function(e){return e.global.dateTo})),E=Object(l.c)((function(e){return e.global.caseType}));Object(n.useEffect)((function(){o(function(){var e=Object(Ie.a)(xe.a.mark((function e(t){var a;return xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"APP/SHOW_LOADING"}),e.prev=1,e.next=4,fetch("".concat(ie,"/world")).then((function(e){return e.json()})).then((function(e){var t=we(new Date,e.length,"sub");a=e.sort((function(e,t){if(e.TotalConfirmed<t.TotalConfirmed)return-1})).map((function(e,a){return{recovered:e.TotalRecovered,deaths:e.TotalDeaths,confirmed:e.TotalConfirmed,active:e.NewConfirmed+e.NewDeaths+e.NewRecovered,date:Se(we(t,a,"add"))}}))}));case 4:t({type:"GLOBAL/FETCH_DATA",payload:a}),t(Pe(a,Ne(ke),Ne(Ge))),t({type:"APP/HIDE_LOADING"}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),t(W("Something went wrong with data fetching...",8e3));case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(n.useEffect)((function(){var e="".concat(a.path,"?from=").concat(le(s),"&to=").concat(le(O),"&case=").concat(E).trim();t.push(e)}),[s,O,E]);return r.a.createElement($.a,{m:1,className:c.box},r.a.createElement(x.a,{variant:"h4",component:"h1",className:c.title},"Covid-19 Global World WIP Statistics"),i||!u.length?r.a.createElement(Z,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(ge.a,{container:!0,className:c.controlsPanel},r.a.createElement(Ce,{changeHandle:function(e){o(function(e){return function(t){_e(ke,e),t({type:"GLOBAL/SELECT_DATE_FROM",payload:e})}}(e)),o(Pe(u,e,O))},value:s,minDate:d.min,maxDate:d.max,label:"Date from"}),r.a.createElement(Ce,{changeHandle:function(e){o(function(e){return function(t){_e(Ge,e),t({type:"GLOBAL/SELECT_DATE_TO",payload:e})}}(e)),o(Pe(u,s,e))},value:O,minDate:f.min,maxDate:f.max,label:"Date to"}),r.a.createElement(ce,{value:E,items:Re(),label:"Cases",handleChange:function(e){var t=e.target;o(function(e){return function(t){_e(Ue,e),t({type:"GLOBAL/SELECT_CASE",payload:e})}}(t.value))}})),E!==ue.default?r.a.createElement(Ae,{data:De(m,E),caseType:E}):r.a.createElement(ye,{data:m})))})),Je="countries",Xe="currentCountry",ze="countryDateFrom",$e="countryCase",qe=function(e){return function(t){var a=Ne(Xe),n=null!==a&&void 0!==a?a:e;t({type:"COUNTRY/SELECT_COUNTRY",payload:n}),_e(Xe,n),t(et(ue.default)),t(Ze(n))}},Qe=function(e){return function(t){var a;_e(Xe,e),t({type:"COUNTRY/SELECT_COUNTRY",payload:e}),a=ze,window.sessionStorage.removeItem(a),t(qe(e))}},Ze=function(e){return function(){var t=Object(Ie.a)(xe.a.mark((function t(a){var n;return xe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"APP/SHOW_LOADING"}),t.prev=1,t.next=4,fetch("".concat(ie,"/dayone/country/").concat(e)).then((function(e){return e.json()})).then((function(e){n=e.map((function(e){return{active:e.Active,recovered:e.Recovered,deaths:e.Deaths,confirmed:e.Confirmed,date:e.Date}}))}));case 4:a({type:"COUNTRY/FETCH_BY_COUNTRY",payload:n}),a({type:"COUNTRY/FILTERED_DATA",payload:n}),a(function(){var e=Object(Ie.a)(xe.a.mark((function e(t){var a,n;return xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(n=window.sessionStorage.getItem(Je))){e.next=6;break}return a=JSON.parse(n),t({type:"COUNTRY/FETCH_COUNTRIES",payload:a}),e.abrupt("return");case 6:return e.next=8,fetch("".concat(ie,"/countries")).then((function(e){return e.json()})).then((function(e){a=e.map((function(e){return{title:e.Country,value:e.Slug}})).sort((function(e,t){return e.value.localeCompare(t.value)}))}));case 8:window.sessionStorage.setItem(Je,JSON.stringify(a)),t({type:"COUNTRY/FETCH_COUNTRIES",payload:a}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),t(W("Something went wrong..."));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()),a(at(n)),a(tt(n[0].date)),a({type:"APP/HIDE_LOADING"}),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),a(W("Something went wrong with [".concat(e,"] data..."),8e3)),a(nt());case 16:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}()},et=function(e){return function(t){var a=Ne($e);t({type:"COUNTRY/SELECT_CASE",payload:null!==a&&void 0!==a?a:e})}},tt=function(e){return function(t){var a=Ne(ze);t({type:"COUNTRY/SELECT_DATE_FROM",payload:null!==a&&void 0!==a?a:e})}},at=function(e){return function(t){t({type:"COUNTRY/SELECT_DATE_FROM_RANGE",payload:{min:e[0].date,max:e[e.length-1].date}})}},nt=function(){return function(e){e(Qe("ukraine")),e(Ze("ukraine"))}},rt=Object(R.a)((function(){return{box:{display:"flex",flexDirection:"column",alignItems:"center"},controlsPanel:{margin:"1rem auto",alignItems:"center",justifyContent:"space-evenly"},title:{margin:"1.5rem auto 0",textAlign:"center"}}})),ct=Object(N.f)((function(e){var t=e.history,a=e.match,c=rt(),o=Object(l.b)(),i=Object(l.c)((function(e){return e.app.loading})),u=Object(l.c)((function(e){return e.country.dateFromRange})),m=Object(l.c)((function(e){return e.country.dateFrom})),d=Object(l.c)((function(e){return e.country.countriesList})),f=Object(l.c)((function(e){return e.country.currentCountry})),s=Object(l.c)((function(e){return e.country.data})),O=Object(l.c)((function(e){return e.country.filteredData})),E=Object(l.c)((function(e){return e.country.caseType}));Object(n.useEffect)((function(){o(qe("ukraine"))}),[]),Object(n.useEffect)((function(){var e="".concat(a.path,"?from=").concat(le(m),"&country=").concat(f,"&case=").concat(E).trim();t.push(e)}),[m,f,E]);return r.a.createElement($.a,{m:1,className:c.box},r.a.createElement(x.a,{variant:"h4",component:"h1",className:c.title},"Covid-19 Statistics By Country And Status After Date"),i||!s.length?r.a.createElement(Z,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(ge.a,{container:!0,className:c.controlsPanel},r.a.createElement(ce,{value:f,items:d,label:"Countries",handleChange:function(e){var t=e.target;o(Qe(t.value))}}),r.a.createElement(Ce,{changeHandle:function(e){o(function(e,t){return function(a){var n=e.filter((function(a){var n=Le(a.date);return n>=Le(t)&&n<=Le(e[e.length-1].date)}));a({type:"COUNTRY/FILTERED_DATA",payload:n}),a({type:"COUNTRY/SELECT_DATE_FROM_RANGE",payload:{min:e[0].date,max:n[n.length-1].date}})}}(s,e)),o(function(e){return function(t){_e(ze,e),t({type:"COUNTRY/SELECT_DATE_FROM",payload:e})}}(e))},value:m,minDate:u.min,maxDate:u.max,label:"Date from"}),r.a.createElement(ce,{value:E,items:Re(),label:"Cases",handleChange:function(e){var t,a=e.target;o((t=a.value,function(e){_e($e,t),e({type:"COUNTRY/SELECT_CASE",payload:t})}))}})),E!==ue.default?r.a.createElement(Ae,{data:De(O,E),caseType:E}):r.a.createElement(ye,{data:O})))})),ot=Object(R.a)((function(){return{content:{margin:"5rem auto 0",maxWidth:550},title:{margin:"5rem auto 0",textAlign:"center"}}})),lt=function(){var e=ot();return r.a.createElement($.a,{m:1},r.a.createElement(x.a,{className:e.title,variant:"h3",component:"h2",gutterBottom:!0},"COVID-19"),r.a.createElement(x.a,{className:e.content,variant:"body1",gutterBottom:!0},"The coronavirus COVID-19 pandemic is the defining global health crisis of our time and the greatest challenge we have faced since World War Two. Since its emergence in Asia late last year, the virus has spread to every continent except Antarctica."))};var it=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,null),r.a.createElement(z,null),r.a.createElement(_.a,{maxWidth:"md"},r.a.createElement(N.c,null,r.a.createElement(N.a,{exact:!0,path:"/",component:Ve}),r.a.createElement(N.a,{exact:!0,path:"/country",component:ct}),r.a.createElement(N.a,{exact:!0,path:"/about",component:lt}))))},ut=(a(457),r.a.createElement(l.a,{store:L},r.a.createElement(i.a,null,r.a.createElement(it,null))));o.a.render(ut,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[270,1,2]]]);
//# sourceMappingURL=main.a5b3ca17.chunk.js.map