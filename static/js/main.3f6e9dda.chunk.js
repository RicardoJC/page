(this.webpackJsonppage=this.webpackJsonppage||[]).push([[0],{53:function(e,t,a){},54:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var r=a(2),o=a(0),i=a.n(o),n=a(15),c=a.n(n),s=(a(53),a(54),a(88)),l=a(97),d=a(98),p=a(63),j=a(24),h=a(13),b=a(31),m=a(30),x=a(6),g=a(5),u=a(12),O=a(85),f=a(38),v=a.n(f),y=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(j.a)(this,a),(r=t.call(this,e)).state={wrapper:r.props.dataTarget.replace(/#/,""),listMenus:r.props.menu},r.toggleCollapse=r.toggleCollapse.bind(Object(u.a)(r)),r}return Object(h.a)(a,[{key:"toggleCollapse",value:function(e){e.preventDefault();var t=document.getElementById(this.state.wrapper);"block"===t.style.display?t.style.display="none":(t.style.display="block",t.style.backgroundColor="#00000055",t.style.top="50px",t.style.textAlign="justify",t.style.width="240px",t.style.position="absolute",t.style.zIndex=1450)}},{key:"render",value:function(){return Object(r.jsx)(O.a,{className:this.props.classes.buttonCollapse,onClick:this.toggleCollapse,children:Object(r.jsx)(v.a,{style:{color:"#FFFFFF"}})})}}]),a}(i.a.Component),w=Object(g.a)((function(e){var t;return{buttonCollapse:(t={},Object(x.a)(t,e.breakpoints.up("md"),{display:"none"}),Object(x.a)(t,"margin","10px"),Object(x.a)(t,"boxShadow","none"),t)}}))(y),F=a(87),k=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(j.a)(this,a),(r=t.call(this,e)).state={visible:!1},r}return Object(h.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:this.props.classes.root,children:[Object(r.jsx)(w,{dataTarget:"#appbar-collapse"}),Object(r.jsx)("div",{className:this.props.classes.wrapper,id:"appbar-collapse",children:Object(r.jsxs)("ul",{className:this.props.classes.listContainer,id:"list-appbar-collapse",children:[Object(r.jsx)(F.a,{color:"inherit",href:"#hello",children:"Home"}),Object(r.jsx)(F.a,{color:"inherit",href:"#projects",children:"Proyectos"}),Object(r.jsx)(F.a,{color:"inherit",href:"#contact",children:"Contacto"})]})})]})}}]),a}(i.a.Component),S=Object(g.a)((function(e){var t;return{root:{position:"absolute",right:0},wrapper:(t={},Object(x.a)(t,e.breakpoints.down("md"),{display:"none"}),Object(x.a)(t,"margin","10px"),Object(x.a)(t,"paddingLeft","16px"),Object(x.a)(t,"right",0),Object(x.a)(t,"position","relative"),Object(x.a)(t,"width","100%"),Object(x.a)(t,"background","transparent"),t),listContainer:{listStyle:"none",margin:0,padding:0,overflow:"hidden"},listMenus:{float:"left"},listItems:{display:"inline-block",textAlign:"center",padding:"6px 8px"}}}))(k),N=a(42),z=a(89),C=Object(N.a)();C.typography.body1=Object(x.a)({fontSize:"14px","@media (min-width:600px)":{fontSize:"18px"}},C.breakpoints.up("md"),{fontSize:"20px"});var B=Object(s.a)((function(e){return{root:{width:"100",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",backgroundSize:"cover",backgroundImage:"url('../richard.jpg')"},button:{fontSize:"16px",fontWeight:"bold",textAlign:"center",backgroundColor:"#FFF",borderRadius:"1em","&:hover":{backgroundColor:"#FFFFFFAA",boxShadow:"none"}},textName:{color:"#FFFFFF",fontSize:"9vw",fontWeight:"bold"},textDescription:{color:"#FFFFFF"}}}));var T=function(){var e=B();return Object(r.jsx)("div",{id:"hello",className:e.root,children:Object(r.jsxs)("table",{children:[Object(r.jsx)("tr",{children:Object(r.jsx)("th",{children:Object(r.jsx)(z.a,{children:Object(r.jsx)(p.a,{variant:"body1",className:e.textDescription,children:"Desarrollador y pensador de la vida a ratos"})})})}),Object(r.jsx)("tr",{children:Object(r.jsx)("th",{children:Object(r.jsx)(z.a,{children:Object(r.jsx)(p.a,{variant:"h1",className:e.textName,children:"\xa1Bienvenid@!"})})})}),Object(r.jsx)("tr",{children:Object(r.jsx)("th",{children:Object(r.jsx)(F.a,{size:"large",className:e.button,href:"#whoami",children:"\xa1Hola!"})})})]})})},D=Object(N.a)();D.typography.h1=Object(x.a)({fontSize:"32px","@media (min-width:600px)":{fontSize:"42px"}},D.breakpoints.up("md"),{fontSize:"5vw"}),D.typography.body1=Object(x.a)({fontSize:"14px","@media (min-width:600px)":{fontSize:"18px"}},D.breakpoints.up("md"),{fontSize:"20px"});var A=Object(s.a)((function(e){return{root:{height:"auto",width:"100",paddingTop:"10%",paddingStart:"10%",paddingEnd:"10%",paddingBottom:"10%",display:"inherit",alignItems:"center",backgroundColor:"#1868e3"},textName:{color:"#FFFFFF",fontWeight:"bold"},textDescription:{color:"#FFFFFF",whiteSpace:"pre-line"},hr:{border:"2px solid white",width:"20%",marginStart:"2px",marginTop:"5px",marginBottom:"10px"}}}));var E=function(){var e=A();return Object(r.jsx)("div",{id:"whoami",className:e.root,children:Object(r.jsxs)(z.a,{children:[Object(r.jsx)(p.a,{variant:"h1",className:e.textName,children:"Soy Richard"}),Object(r.jsx)("hr",{className:e.hr}),Object(r.jsxs)(p.a,{variant:"body1",className:e.textDescription,children:["\n","Tengo experiencia resolviendo problemas con ayuda de la tecnolog\xeda. En mi tiempo libre estudio japon\xe9s y practico karate. Me gusta leer novelas o historias de diferentes culturas y su paso por la vida. Adem\xe1s, me gustan los videojuegos y mi compositor favorito es Tchaikovsky."]}),Object(r.jsx)(p.a,{variant:"span",className:e.textDescription})]})})},I=a(90),W=a(39),_=a.n(W),J=a(40),M=a.n(J),R=a(41),H=a.n(R),P=Object(N.a)();P.typography.h1=Object(x.a)({fontSize:"32px","@media (min-width:600px)":{fontSize:"42px"}},P.breakpoints.up("md"),{fontSize:"5vw"}),P.typography.body1=Object(x.a)({fontSize:"14px","@media (min-width:600px)":{fontSize:"18px"}},P.breakpoints.up("md"),{fontSize:"20px"}),P.typography.h3=Object(x.a)({fontSize:"16px","@media (min-width:600px)":{fontSize:"20px"}},P.breakpoints.up("md"),{fontSize:"24px"});var G=Object(s.a)((function(e){return{root:{height:"auto",width:"100",paddingTop:"5%",paddingStart:"10%",paddingEnd:"10%",paddingBottom:"2%",display:"inherit",alignItems:"center",backgroundColor:"#000",color:"#FFF"},textName:{fontWeight:"bold"},textDescription:{whiteSpace:"pre-line"},textEmail:{fontWeight:"bold",paddingTop:"5%",paddingBottom:"2%"},linkEmail:{color:"#FFF","&:hover":{color:"#888888",textDecoration:"none"}},hr:{border:"2px solid #1868e3",width:"20%",marginStart:"2px",marginTop:"5px"},icon:{color:"#888","&:hover":{color:"#FFF"}},footer:{width:"100%",color:"#888",textAlign:"center",backgroundColor:"#000"}}}));var Q=function(){var e=G();return Object(r.jsxs)("div",{id:"contact",className:e.root,children:[Object(r.jsxs)("div",{children:[Object(r.jsxs)(z.a,{theme:P,children:[Object(r.jsx)(p.a,{variant:"h1",className:e.textName,children:"Cont\xe1ctame"}),Object(r.jsx)("hr",{className:e.hr}),Object(r.jsx)(p.a,{variant:"body1",className:e.textDescription,children:"Te invito a contactarme para realizar proyectos incre\xedbles."}),Object(r.jsx)(p.a,{className:e.textEmail,variant:"h3",children:Object(r.jsx)(I.a,{className:e.linkEmail,href:"mailto:ricardoj.epc@gmail.com",target:"_blank",rel:"noreferrer",children:"ricardoj.epc@gmail.com"})})]}),Object(r.jsx)(O.a,{className:e.icon,target:"_blank",rel:"noreferrer",href:"https://github.com/RicardoJC",children:Object(r.jsx)(_.a,{})}),Object(r.jsx)(O.a,{className:e.icon,target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/ricardojicr/",children:Object(r.jsx)(M.a,{})}),Object(r.jsx)(O.a,{className:e.icon,target:"_blank",rel:"noreferrer",href:"https://api.whatsapp.com/send?phone=+525540874892",children:Object(r.jsx)(H.a,{})})]}),Object(r.jsx)("div",{className:e.footer,children:Object(r.jsxs)(p.a,{variant:"span",children:["Ricardo JC 2020 | ","<> with \u2764\ufe0f"]})})]})},L=a(92),q=a(93),V=a(96),$=a(95),K=a(94),U=a(91),X=Object(N.a)();X.typography.h1=Object(x.a)({fontSize:"32px","@media (min-width:600px)":{fontSize:"42px"}},X.breakpoints.up("md"),{fontSize:"5vw"}),X.typography.body2=Object(x.a)({fontSize:"14px","@media (min-width:600px)":{fontSize:"18px"}},X.breakpoints.up("md"),{fontSize:"20px"}),X.typography.h5=Object(x.a)({fontSize:"16px","@media (min-width:600px)":{fontSize:"20px"}},X.breakpoints.up("md"),{fontSize:"24px"});var Y=Object(s.a)((function(e){return{root:{height:"auto",width:"100",paddingTop:"10%",paddingStart:"10%",paddingEnd:"10%",paddingBottom:"10%",display:"inherit",alignItems:"center",backgroundColor:"#FFFFFF"},textName:{color:"#000000",fontWeight:"bold",paddingBottom:"2%"},textDescription:{color:"#FFFFFF"},rootCard:{width:345,backgroundColor:"#FFF",color:"#000"},media:{height:240,backgroundPosition:"center top"}}}));var Z=function(){var e=Y();return Object(r.jsxs)("div",{id:"projects",className:e.root,children:[Object(r.jsx)(z.a,{children:Object(r.jsx)(p.a,{variant:"h1",className:e.textName,children:"Proyectos"})}),Object(r.jsxs)(U.a,{container:!0,spacing:3,children:[Object(r.jsx)(U.a,{item:!0,xs:!0,children:Object(r.jsxs)(L.a,{className:e.rootCard,children:[Object(r.jsxs)(q.a,{children:[Object(r.jsx)(K.a,{className:e.media,image:"/mipot.png",title:"Atomic"}),Object(r.jsx)($.a,{children:Object(r.jsxs)(z.a,{children:[Object(r.jsx)(p.a,{gutterBottom:!0,variant:"h5",children:"Atomic Things: MiPOT"}),Object(r.jsx)(p.a,{variant:"body2",children:"Con Atomic Things realic\xe9 muchas cosas: desarroll\xe9 la app de Android con Java, bases de datos, arquitectura del sistema, desarrollo backend con NodeJS y tomaba juntas importantes de desarrollo."})]})})]}),Object(r.jsx)(V.a,{children:Object(r.jsx)(F.a,{size:"large",color:"primary",target:"_blank",rel:"noreferrer",href:"http://www.atomicthings.com",children:"\xbfQuieres saber m\xe1s?"})})]})}),Object(r.jsx)(U.a,{item:!0,xs:!0,children:Object(r.jsxs)(L.a,{className:e.rootCard,children:[Object(r.jsxs)(q.a,{children:[Object(r.jsx)(K.a,{className:e.media,image:"/miopers.png",title:"covid19_unam"}),Object(r.jsx)($.a,{children:Object(r.jsxs)(z.a,{children:[Object(r.jsx)(p.a,{gutterBottom:!0,variant:"h5",children:"Monitoreo de Twitter para COVID19"}),Object(r.jsx)(p.a,{variant:"body2",children:"Como miembro del grupo de ingenier\xeda ling\xfc\xedstica, desarrollamos un monitor de Twitter para evaluar el comportamiento de las personas, estados de \xe1nimo, la popularidad de las medidas del tomadas por el gobierno y s\xedntomas de coronavirus. Mi aportaci\xf3n fue la primera secci\xf3n y toda la p\xe1gina web."})]})})]}),Object(r.jsx)(V.a,{children:Object(r.jsx)(F.a,{size:"large",color:"primary",target:"_blank",rel:"noreferrer",href:"http://www.miopers.unam.mx/covid/#/",children:"\xbfQuieres saber m\xe1s?"})})]})}),Object(r.jsx)(U.a,{item:!0,xs:!0,children:Object(r.jsxs)(L.a,{className:e.rootCard,children:[Object(r.jsxs)(q.a,{children:[Object(r.jsx)(K.a,{className:e.media,image:"/creaton.jpg",title:"Hackaton"}),Object(r.jsx)($.a,{children:Object(r.jsxs)(z.a,{children:[Object(r.jsx)(p.a,{gutterBottom:!0,variant:"h5",children:"Hackaton derechos humanos"}),Object(r.jsx)(p.a,{variant:"body2",children:"Ana y yo participamos en un hackat\xf3n para juntar nuestras habilidades y proponer una soluci\xf3n a un tema muy importante en el pa\xeds: violencia de g\xe9nero. Ganamos en la categor\xeda de Atenci\xf3n a mujeres v\xedctimas de violencia. :D"})]})})]}),Object(r.jsx)(V.a,{children:Object(r.jsx)(F.a,{size:"large",color:"primary",target:"_blank",rel:"noreferrer",href:"https://www.facebook.com/CreatonPorLosDerechosHumanos/videos/278599159733062/?t=3569",children:"\xbfQuieres saber m\xe1s?"})})]})})]})]})},ee=Object(s.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(1)},title:{flexGrow:1},appBar:{background:"#00000033",boxShadow:"none"}}}));var te=function(e){var t=ee();return Object(r.jsxs)("div",{className:t.root,children:[Object(r.jsx)(l.a,{position:"fixed",className:t.appBar,children:Object(r.jsxs)(d.a,{children:[Object(r.jsx)(p.a,{variant:"h6",className:t.title,children:"RicardoJC"}),Object(r.jsx)(S,{})]})}),Object(r.jsx)(T,{}),Object(r.jsx)(E,{}),Object(r.jsx)(Z,{}),Object(r.jsx)(Q,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(te,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.3f6e9dda.chunk.js.map