(this["webpackJsonpweibo-demo"]=this["webpackJsonpweibo-demo"]||[]).push([[0],{103:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),c=i(23),s=i.n(c),r=(i(91),i(92),i(8)),o=i(49),l=i(77),d=i(155),u=i(55),m=i(149),j=i(150),p=i(151),b=i(141),h=i(152),x=i(153),g=i(156),O=i(140),f=i(56),v=i.n(f),y=i(74),N=i.n(y),w=i(75),k=i.n(w),q=i(76),A=i.n(q),C=i(11),I=i(148),L=i(79),R=i(138),M=i(134),D=i(136),P=i(137),B=i(24),E=i(139),S=i(2),F=function(e){var t=e.custom,i=e.data,a=i.menuItems.map((function(e){return Object(S.jsxs)(M.a,{button:!0,className:t.menuItem,onClick:function(){return console.log("click side bar")},children:[Object(S.jsx)(D.a,{children:e.icon}),Object(S.jsx)(P.a,{primary:e.title})]},e.title)})),n=i.customization.map((function(e){return Object(S.jsxs)(M.a,{button:!0,className:t.menuItem,onClick:function(){return console.log("click side bar")},children:[Object(S.jsx)(D.a,{children:e.icon}),Object(S.jsx)(P.a,{primary:e.title})]},e.title)}));return Object(S.jsxs)(L.a,{className:t,children:[Object(S.jsx)(B.a,{variant:"h5",gutterBottom:!0,align:"left",children:i.title.text}),Object(S.jsx)(R.a,{children:a}),Object(S.jsx)(E.a,{}),Object(S.jsx)(R.a,{children:n})]})},W=Object(O.a)((function(e){return{BotButton:{textAlign:"center",cursor:"pointer",fontWeight:700,"&:hover":{color:e.palette.secondary.main}}}})),z=function(e){var t=e.data,i=e.custom,a=W(),n=t.news.slice(0,10).map((function(e){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(M.a,{button:!0,children:[Object(S.jsx)(D.a,{children:e.id}),Object(S.jsx)(P.a,{primary:e.title,primaryTypographyProps:{noWrap:!0}})]},e.id),Object(S.jsx)(E.a,{variant:"middle",light:!0})]})}));return Object(S.jsxs)(L.a,{className:i,children:[Object(S.jsx)(B.a,{children:t.title}),Object(S.jsx)(E.a,{}),Object(S.jsx)(R.a,{children:n}),Object(S.jsx)(B.a,{className:a.BotButton,children:t.check})]})},H=i(157),U=i(147),J=i(142),T=i(143),Q=i(145),V=i(144),Z=i(146),G=i(61),K=i.n(G),X=i(63),Y=i.n(X),$=i(62),_=i.n($),ee=Object(O.a)((function(e){return{root:{padding:e.spacing(2),borderRadius:e.shape.borderRadius},cardContent:{marginLeft:"3rem"},cardMedia:{height:0,paddingTop:"56.25%",margin:"0 1rem 1rem 4rem"},cardActions:{justifyContent:"space-around"}}})),te=function(e){var t=e.data,i=ee(),a=t.map((function(e){return Object(S.jsx)(b.a,{item:!0,className:i.root,xs:12,children:Object(S.jsxs)(J.a,{children:[Object(S.jsx)(T.a,{avatar:Object(S.jsx)(H.a,{children:e.blogger[0].toUpperCase()}),title:e.blogger,subheader:e.date}),e.wb?Object(S.jsx)(V.a,{className:i.cardContent,children:Object(S.jsx)(B.a,{variant:"body1",color:"textSecondary",component:"p",children:e.wb})}):null,e.img?Object(S.jsx)(Q.a,{className:i.cardMedia,image:e.img}):null,Object(S.jsxs)(Z.a,{className:i.cardActions,children:[Object(S.jsx)(U.a,{size:"small",color:"secondary",startIcon:Object(S.jsx)(K.a,{}),children:"Repost"}),Object(S.jsx)(U.a,{size:"small",color:"secondary",startIcon:Object(S.jsx)(_.a,{}),children:"Comment"}),Object(S.jsx)(U.a,{size:"small",color:"secondary",startIcon:Object(S.jsx)(Y.a,{}),children:e.likes})]})]})})}));return Object(S.jsx)(S.Fragment,{children:a})},ie=i(64),ae=i(65),ne=Object(O.a)((function(e){return{gitem:{top:"6%",position:"sticky",padding:e.spacing(2),borderRadius:e.shape.borderRadius},gcontainer:{},menuItem:{padding:"0.5rem"},menuItemText:{paddingLeft:0},hideSM:{"@media screen and (max-width: 600px)":{display:"none"}},hideMD:{"@media screen and (max-width: 960px)":{display:"none"}}}})),ce=function(){var e=ne();return Object(S.jsx)(I.a,{children:Object(S.jsxs)(b.a,{container:!0,spacing:2,className:e.gcontainer,children:[Object(S.jsx)(b.a,{item:!0,sm:3,className:e.hideSM,children:Object(S.jsx)(F,{custom:e.gitem,data:Le})}),Object(S.jsx)(b.a,{item:!0,container:!0,xs:12,sm:9,md:6,spacing:1,children:Object(S.jsx)(te,{data:ae.content})}),Object(S.jsx)(b.a,{item:!0,md:3,className:e.hideMD,children:Object(S.jsx)(z,{custom:e.gitem,data:ie.hotNews})})]})})},se=Object(O.a)((function(e){return{gitem:{borderRadius:e.shape.borderRadius,backgroundColor:Object(C.a)(e.palette.secondary.main,.15)}}})),re=function(){var e=se();return Object(S.jsx)(I.a,{children:Object(S.jsxs)(b.a,{container:!0,spacing:6,children:[Object(S.jsx)(b.a,{item:!0,xs:3,className:e.gitem,children:"2222"}),Object(S.jsx)(b.a,{item:!0,xs:3,className:e.gitem,children:"2222"}),Object(S.jsx)(b.a,{item:!0,xs:3,className:e.gitem,children:"2222"}),Object(S.jsx)(b.a,{item:!0,xs:3,className:e.gitem,children:"2222"})]})})},oe=function(){return Object(S.jsx)("div",{children:"hot news"})},le=function(){return Object(S.jsx)("div",{children:"messages page"})},de=function(){return Object(S.jsxs)("div",{children:[Object(S.jsx)(B.a,{variant:"h1",children:"this is my page"}),Object(S.jsx)(B.a,{variant:"h1",children:"this is my page"}),Object(S.jsx)(B.a,{variant:"h1",children:"this is my page"}),Object(S.jsx)(B.a,{variant:"h1",children:"this is my page"}),Object(S.jsx)(B.a,{variant:"h1",children:"this is my page"}),Object(S.jsx)(B.a,{variant:"h1",children:"this is my page"}),Object(S.jsx)(B.a,{variant:"h1",children:"this is my page"}),Object(S.jsx)(B.a,{variant:"h1",children:"this is my page"}),Object(S.jsx)(B.a,{variant:"h1",children:"this is my page"}),Object(S.jsx)(B.a,{variant:"h1",children:"this is my page"}),Object(S.jsx)(B.a,{variant:"h1",children:"this is my page"})]})},ue=i(66),me=i.n(ue),je=i(67),pe=i.n(je),be=i(68),he=i.n(be),xe=i(69),ge=i.n(xe),Oe=i(70),fe=i.n(Oe),ve=i(71),ye=i.n(ve),Ne=i(72),we=i.n(Ne),ke=i(73),qe=i.n(ke),Ae=i(32),Ce=i.n(Ae),Ie=[{title:"Home Page",icon:Object(S.jsx)(me.a,{}),path:"/",component:Object(S.jsx)(ce,{})},{title:"Videos Page",icon:Object(S.jsx)(pe.a,{}),path:"/videos",component:Object(S.jsx)(re,{})},{title:"Hot News Page",icon:Object(S.jsx)(he.a,{}),path:"/hotnews",component:Object(S.jsx)(oe,{})},{title:"Messages Page",icon:Object(S.jsx)(ge.a,{}),path:"/messages",component:Object(S.jsx)(le,{})},{title:"Me Page",icon:Object(S.jsx)(H.a,{src:"/avatar.jpg"}),path:"/me",component:Object(S.jsx)(de,{})}],Le={title:{text:"Main Page"},menuItems:[{title:"All",icon:Object(S.jsx)(fe.a,{})},{title:"Newest",icon:Object(S.jsx)(ye.a,{})},{title:"Special",icon:Object(S.jsx)(we.a,{})},{title:"Zone",icon:Object(S.jsx)(qe.a,{})}],customization:[{title:"test 1",icon:Object(S.jsx)(Ce.a,{})},{title:"test 2",icon:Object(S.jsx)(Ce.a,{})},{title:"test 3",icon:Object(S.jsx)(Ce.a,{})},{title:"test 4",icon:Object(S.jsx)(Ce.a,{})}]},Re=Object(O.a)((function(e){return{root:{display:"flex",height:"100%"},page:{background:Object(C.a)(e.palette.secondary.light,.15),width:"100%",padding:e.spacing(2)},toolbarblock:e.mixins.toolbar,appbar:{},toolbar:{},logoArea:{display:"flex"},BNAction:{backgroundColor:"transparent"},search:{height:"80%",margin:"auto 0",position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(C.a)(e.palette.common.white,.15)},searchIcon:{padding:e.spacing(0,1),height:"100%",margin:"auto 0",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",height:"100%"},inputInput:Object(u.a)({padding:e.spacing(1),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"5rem","&:focus":{width:"8rem"}})}})),Me=function(e){var t=e.children,i=Re(),a=Object(r.f)();return Object(S.jsxs)("div",{className:i.root,children:[Object(S.jsx)(m.a,{color:"secondary",className:i.appbar,children:Object(S.jsx)(j.a,{variant:"dense",className:i.toolbar,children:Object(S.jsxs)(b.a,{container:!0,children:[Object(S.jsxs)(b.a,{item:!0,sm:2,className:i.logoArea,children:[Object(S.jsx)(p.a,{"aria-label":"page logo",children:Object(S.jsx)(N.a,{})}),Object(S.jsxs)("div",{className:i.search,children:[Object(S.jsx)("div",{className:i.searchIcon,children:Object(S.jsx)(k.a,{})}),Object(S.jsx)(g.a,{placeholder:"Search\u2026",classes:{root:i.inputRoot,input:i.inputInput},inputProps:{"aria-label":"search"}})]})]}),Object(S.jsx)(b.a,{item:!0,sm:6,children:Object(S.jsx)(h.a,{value:"home",className:i.BNAction,children:Ie.map((function(e){return Object(S.jsx)(x.a,{label:e.title,icon:e.icon,onClick:function(){return a.push(e.path)}})}))})}),Object(S.jsx)(b.a,{item:!0,sm:4,children:"menu placeholder"})]})})}),Object(S.jsxs)("div",{className:i.page,children:[Object(S.jsx)("div",{className:i.toolbarblock}),t]}),Object(S.jsx)(v.a,{showUnder:160,duration:1e3,children:Object(S.jsx)(A.a,{})})]})},De=i(154);var Pe=function(){var e=Object(l.a)({palette:{secondary:De.a},typography:{fontFamily:"Quicksand",fontWeightLight:400,fontWeightRegular:500,fontWeightMedium:600,fontWeightBold:700}}),t=Ie.map((function(e){return Object(S.jsx)(r.a,{exact:!0,path:e.path,children:e.component},e.title)}));return Object(S.jsx)(d.a,{theme:e,children:Object(S.jsx)(o.a,{children:Object(S.jsx)(Me,{children:Object(S.jsx)(r.c,{children:t})})})})};s.a.render(Object(S.jsx)(n.a.StrictMode,{children:Object(S.jsx)(Pe,{})}),document.getElementById("root"))},64:function(e){e.exports=JSON.parse('{"hotNews":{"title":"Hot News~","check":"Check all news","news":[{"id":1,"title":"Reprehenderit est consectetur eiusmod velit eu duis commodo eiusmod.","heat":40000,"url":"/"},{"id":2,"title":"Fugiat magna voluptate quis consequat.","heat":40000,"url":"/"},{"id":3,"title":"Deserunt sunt fugiat ad consequat.","heat":40000,"url":"/"},{"id":4,"title":"Anim reprehenderit ex eu tempor irure ut irure.","heat":40000,"url":"/"},{"id":5,"title":"Culpa ex laborum amet Lorem incididunt adipisicing commodo ipsum.","heat":40000,"url":"/"},{"id":6,"title":"Occaecat adipisicing nostrud cupidatat dolore non ullamco id commodo nisi magna.","heat":40000,"url":"/"},{"id":7,"title":"Laboris excepteur occaecat reprehenderit culpa ad dolor veniam et sunt commodo duis aute enim cillum.","heat":40000,"url":"/"},{"id":8,"title":"Ullamco aliquip dolor ut sit cupidatat in officia.","heat":40000,"url":"/"},{"id":9,"title":"Labore elit aliquip dolor labore aliqua ea.","heat":40000,"url":"/"},{"id":10,"title":"Ullamco consectetur sit reprehenderit Lorem anim consectetur voluptate ut fugiat.","heat":40000,"url":"/"},{"id":11,"title":"Ut proident eu eu eiusmod et quis amet ex aliquip ad fugiat eiusmod aute laborum.","heat":40000,"url":"/"},{"id":12,"title":"Magna dolore velit duis qui ipsum officia labore irure ut commodo proident duis.","heat":40000,"url":"/"},{"id":13,"title":"Adipisicing ullamco eu anim Lorem est dolor voluptate do et id.","heat":40000,"url":"/"},{"id":14,"title":"Aute dolor aliquip nisi consectetur eu.","heat":40000,"url":"/"},{"id":15,"title":"Mollit tempor ipsum exercitation aliqua incididunt eiusmod in ex culpa exercitation ullamco.","heat":40000,"url":"/"}]}}')},65:function(e){e.exports=JSON.parse('{"content":[{"blogger":"Ab des","date":"xxxx","wb":"Pariatur in nulla incididunt eu duis non et ex ipsum cupidatat sunt. Deserunt ea laboris nisi ad labore occaecat veniam pariatur id anim fugiat eiusmod pariatur irure. Reprehenderit excepteur quis ipsum pariatur sit excepteur velit.","img":"https://source.unsplash.com/random","likes":101},{"blogger":"Dfed aa","date":"xxxx","wb":"Ea reprehenderit reprehenderit cupidatat sit deserunt anim laboris velit duis velit.","img":"https://source.unsplash.com/random","likes":12},{"blogger":"HDEF","date":"xxxx","wb":"Proident eiusmod eu magna proident sit commodo. Tempor quis aliquip Lorem non. Eiusmod pariatur adipisicing quis tempor ullamco aliquip ipsum deserunt sunt. Dolor et esse velit consequat culpa velit et adipisicing aliquip reprehenderit. Elit ea culpa duis minim laborum sint elit laborum laborum. Consequat adipisicing consectetur culpa fugiat sit laborum officia. Officia nostrud ea laborum aliquip.","img":"","likes":301},{"blogger":"afafda sdfds","date":"xxxx","wb":"Ad adipisicing non est sunt. Occaecat nulla ipsum cillum sint tempor eu Lorem excepteur amet dolor esse ex cupidatat cillum. Aute culpa sunt id magna culpa mollit incididunt incididunt anim eu est. Occaecat cillum ut ex amet laboris laborum quis occaecat eiusmod velit mollit. Non labore eu fugiat incididunt elit in laboris ad nisi sint non labore exercitation culpa. Fugiat quis laboris fugiat ut enim ullamco culpa aliqua cillum non Lorem minim Lorem amet. Adipisicing ea aliqua esse excepteur ex ut magna duis est amet excepteur amet.","img":"https://source.unsplash.com/random","likes":10022},{"blogger":"df e af","date":"xxxx","wb":"Deserunt labore excepteur consequat nulla esse non sint quis officia voluptate cupidatat adipisicing.","img":"","likes":10012},{"blogger":"12332","date":"xxxx","wb":"","img":"https://source.unsplash.com/random","likes":323},{"blogger":"Ab des","date":"xxxx","wb":"Commodo occaecat magna consectetur incididunt minim id proident fugiat cupidatat exercitation duis. Nulla exercitation sit laboris esse aute duis adipisicing occaecat incididunt laborum anim eiusmod voluptate sint. Anim enim sint cillum adipisicing do officia dolor incididunt irure duis velit officia aute ut.","img":"https://source.unsplash.com/random","likes":20},{"blogger":"Ab des","date":"xxxx","wb":"","img":"https://source.unsplash.com/random","likes":100},{"blogger":"HDEF","date":"xxxx","wb":"Do velit minim aliqua non nisi cupidatat exercitation exercitation labore magna Lorem dolor laborum sunt.","img":"","likes":390},{"blogger":"afafda sdfds","date":"xxxx","wb":"Ea velit cillum et qui enim.","img":"https://source.unsplash.com/random","likes":1245}]}')},91:function(e,t,i){},92:function(e,t,i){}},[[103,1,2]]]);
//# sourceMappingURL=main.f93bfb45.chunk.js.map