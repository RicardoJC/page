(this.webpackJsonppage=this.webpackJsonppage||[]).push([[0],{52:function(e,a,t){},53:function(e,a,t){},59:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(12),i=t.n(o),l=(t(52),t(53),t(88)),c=t(97),s=t(98),m=t(62),p=t(23),d=t(24),u=t(32),h=t(31),g=t(5),b=t(4),E=t(25),f=t(85),v=t(39),x=t.n(v),y=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var r;return Object(p.a)(this,t),(r=a.call(this,e)).state={wrapper:r.props.dataTarget.replace(/#/,""),listMenus:r.props.menu},r.toggleCollapse=r.toggleCollapse.bind(Object(E.a)(r)),r}return Object(d.a)(t,[{key:"toggleCollapse",value:function(e){e.preventDefault();var a=document.getElementById(this.state.wrapper);"block"===a.style.display?a.style.display="none":(a.style.display="block",a.style.backgroundColor="#00000055",a.style.top="50px",a.style.textAlign="justify",a.style.width="240px",a.style.position="absolute",a.style.zIndex=1450)}},{key:"render",value:function(){return n.a.createElement(f.a,{className:this.props.classes.buttonCollapse,onClick:this.toggleCollapse},n.a.createElement(x.a,{style:{color:"#FFFFFF"}}))}}]),t}(n.a.Component),w=Object(b.a)((function(e){var a;return{buttonCollapse:(a={},Object(g.a)(a,e.breakpoints.up("md"),{display:"none"}),Object(g.a)(a,"margin","10px"),Object(g.a)(a,"boxShadow","none"),a)}}))(y),F=t(87),j=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var r;return Object(p.a)(this,t),(r=a.call(this,e)).state={visible:!1},r}return Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:this.props.classes.root},n.a.createElement(w,{dataTarget:"#appbar-collapse"}),n.a.createElement("div",{className:this.props.classes.wrapper,id:"appbar-collapse"},n.a.createElement("ul",{className:this.props.classes.listContainer,id:"list-appbar-collapse"},n.a.createElement(F.a,{color:"inherit",href:"#hello"},"Home"),n.a.createElement(F.a,{color:"inherit",href:"#projects"},"Proyectos"),n.a.createElement(F.a,{color:"inherit",href:"#contact"},"Contacto"))))}}]),t}(n.a.Component),k=Object(b.a)((function(e){var a;return{root:{position:"absolute",right:0},wrapper:(a={},Object(g.a)(a,e.breakpoints.down("md"),{display:"none"}),Object(g.a)(a,"margin","10px"),Object(g.a)(a,"paddingLeft","16px"),Object(g.a)(a,"right",0),Object(g.a)(a,"position","relative"),Object(g.a)(a,"width","100%"),Object(g.a)(a,"background","transparent"),a),listContainer:{listStyle:"none",margin:0,padding:0,overflow:"hidden"},listMenus:{float:"left"},listItems:{display:"inline-block",textAlign:"center",padding:"6px 8px"}}}))(j),S=t(43),N=t(89),O=Object(S.a)();O.typography.body1=Object(g.a)({fontSize:"14px","@media (min-width:600px)":{fontSize:"18px"}},O.breakpoints.up("md"),{fontSize:"20px"});var z=Object(l.a)((function(e){return{root:{width:"100",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",backgroundSize:"cover",backgroundImage:"url('../richard.jpg')"},button:{fontSize:"16px",fontWeight:"bold",textAlign:"center",backgroundColor:"#FFF",borderRadius:"1em","&:hover":{backgroundColor:"#FFFFFFAA",boxShadow:"none"}},textName:{color:"#FFFFFF",fontSize:"9vw",fontWeight:"bold"},textDescription:{color:"#FFFFFF"}}}));var C=function(){var e=z();return n.a.createElement("div",{id:"hello",className:e.root},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("th",null,n.a.createElement(N.a,null,n.a.createElement(m.a,{variant:"body1",className:e.textDescription},"Desarrollador y pensador de la vida a ratos")))),n.a.createElement("tr",null,n.a.createElement("th",null,n.a.createElement(N.a,null,n.a.createElement(m.a,{variant:"h1",className:e.textName},"\xa1Bienvenid@!")))),n.a.createElement("tr",null,n.a.createElement("th",null,n.a.createElement(F.a,{size:"large",className:e.button,href:"#whoami"},"\xa1Hola!")))))},B=Object(S.a)();B.typography.h1=Object(g.a)({fontSize:"32px","@media (min-width:600px)":{fontSize:"42px"}},B.breakpoints.up("md"),{fontSize:"5vw"}),B.typography.body1=Object(g.a)({fontSize:"14px","@media (min-width:600px)":{fontSize:"18px"}},B.breakpoints.up("md"),{fontSize:"20px"});var T=Object(l.a)((function(e){return{root:{height:"auto",width:"100",paddingTop:"10%",paddingStart:"10%",paddingEnd:"10%",paddingBottom:"10%",display:"inherit",alignItems:"center",backgroundColor:"#1868e3"},textName:{color:"#FFFFFF",fontWeight:"bold"},textDescription:{color:"#FFFFFF",whiteSpace:"pre-line"},hr:{border:"2px solid white",width:"20%",marginStart:"2px",marginTop:"5px",marginBottom:"10px"}}}));var D=function(){var e=T();return n.a.createElement("div",{id:"whoami",className:e.root},n.a.createElement(N.a,null,n.a.createElement(m.a,{variant:"h1",className:e.textName},"Soy Richard"),n.a.createElement("hr",{className:e.hr}),n.a.createElement(m.a,{variant:"body1",className:e.textDescription},"\n","Tengo experiencia resolviendo problemas con ayuda de la tecnolog\xeda. En mi tiempo libre estudio japon\xe9s y practico karate. Me gusta leer novelas o historias de diferentes culturas y su paso por la vida. Adem\xe1s, me gustan los videojuegos y mi compositor favorito es Tchaikovsky."),n.a.createElement(m.a,{variant:"span",className:e.textDescription})))},A=t(90),I=t(40),W=t.n(I),_=t(41),J=t.n(_),M=t(42),R=t.n(M),H=Object(S.a)();H.typography.h1=Object(g.a)({fontSize:"32px","@media (min-width:600px)":{fontSize:"42px"}},H.breakpoints.up("md"),{fontSize:"5vw"}),H.typography.body1=Object(g.a)({fontSize:"14px","@media (min-width:600px)":{fontSize:"18px"}},H.breakpoints.up("md"),{fontSize:"20px"}),H.typography.h3=Object(g.a)({fontSize:"16px","@media (min-width:600px)":{fontSize:"20px"}},H.breakpoints.up("md"),{fontSize:"24px"});var P=Object(l.a)((function(e){return{root:{height:"auto",width:"100",paddingTop:"5%",paddingStart:"10%",paddingEnd:"10%",paddingBottom:"2%",display:"inherit",alignItems:"center",backgroundColor:"#000",color:"#FFF"},textName:{fontWeight:"bold"},textDescription:{whiteSpace:"pre-line"},textEmail:{fontWeight:"bold",paddingTop:"5%",paddingBottom:"2%"},linkEmail:{color:"#FFF","&:hover":{color:"#888888",textDecoration:"none"}},hr:{border:"2px solid #1868e3",width:"20%",marginStart:"2px",marginTop:"5px"},icon:{color:"#888","&:hover":{color:"#FFF"}},footer:{width:"100%",color:"#888",textAlign:"center",backgroundColor:"#000"}}}));var G=function(){var e=P();return n.a.createElement("div",{id:"contact",className:e.root},n.a.createElement("div",null,n.a.createElement(N.a,{theme:H},n.a.createElement(m.a,{variant:"h1",className:e.textName},"Cont\xe1ctame"),n.a.createElement("hr",{className:e.hr}),n.a.createElement(m.a,{variant:"body1",className:e.textDescription},"Te invito a contactarme para realizar proyectos incre\xedbles."),n.a.createElement(m.a,{className:e.textEmail,variant:"h3"},n.a.createElement(A.a,{className:e.linkEmail,href:"mailto:ricardoj.epc@gmail.com",target:"_blank",rel:"noreferrer"},"ricardoj.epc@gmail.com"))),n.a.createElement(f.a,{className:e.icon,target:"_blank",rel:"noreferrer",href:"https://github.com/RicardoJC"},n.a.createElement(W.a,null)),n.a.createElement(f.a,{className:e.icon,target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/ricardojicr/"},n.a.createElement(J.a,null)),n.a.createElement(f.a,{className:e.icon,target:"_blank",rel:"noreferrer",href:"https://api.whatsapp.com/send?phone=+525540874892"},n.a.createElement(R.a,null))),n.a.createElement("div",{className:e.footer},n.a.createElement(m.a,{variant:"span"},"Ricardo JC 2020 | ","<> with \u2764\ufe0f")))},Q=t(92),L=t(93),q=t(96),V=t(95),$=t(94),K=t(91),U=Object(S.a)();U.typography.h1=Object(g.a)({fontSize:"32px","@media (min-width:600px)":{fontSize:"42px"}},U.breakpoints.up("md"),{fontSize:"5vw"}),U.typography.body2=Object(g.a)({fontSize:"14px","@media (min-width:600px)":{fontSize:"18px"}},U.breakpoints.up("md"),{fontSize:"20px"}),U.typography.h5=Object(g.a)({fontSize:"16px","@media (min-width:600px)":{fontSize:"20px"}},U.breakpoints.up("md"),{fontSize:"24px"});var X=Object(l.a)((function(e){return{root:{height:"auto",width:"100",paddingTop:"10%",paddingStart:"10%",paddingEnd:"10%",paddingBottom:"10%",display:"inherit",alignItems:"center",backgroundColor:"#FFFFFF"},textName:{color:"#000000",fontWeight:"bold",paddingBottom:"2%"},textDescription:{color:"#FFFFFF"},rootCard:{width:345,backgroundColor:"#FFF",color:"#000"},media:{height:240,backgroundPosition:"center top"}}}));var Y=function(){var e=X();return n.a.createElement("div",{id:"projects",className:e.root},n.a.createElement(N.a,null,n.a.createElement(m.a,{variant:"h1",className:e.textName},"Proyectos")),n.a.createElement(K.a,{container:!0,spacing:3},n.a.createElement(K.a,{item:!0,xs:!0},n.a.createElement(Q.a,{className:e.rootCard},n.a.createElement(L.a,null,n.a.createElement($.a,{className:e.media,image:"/mipot.png",title:"Atomic"}),n.a.createElement(V.a,null,n.a.createElement(N.a,null,n.a.createElement(m.a,{gutterBottom:!0,variant:"h5"},"Atomic Things: MiPOT"),n.a.createElement(m.a,{variant:"body2"},"Con Atomic Things realic\xe9 muchas cosas: desarroll\xe9 la app de Android con Java, bases de datos, arquitectura del sistema, desarrollo backend con NodeJS y tomaba juntas importantes de desarrollo.")))),n.a.createElement(q.a,null,n.a.createElement(F.a,{size:"large",color:"primary",target:"_blank",rel:"noreferrer",href:"http://www.atomicthings.com"},"\xbfQuieres saber m\xe1s?")))),n.a.createElement(K.a,{item:!0,xs:!0},n.a.createElement(Q.a,{className:e.rootCard},n.a.createElement(L.a,null,n.a.createElement($.a,{className:e.media,image:"/miopers.png",title:"covid19_unam"}),n.a.createElement(V.a,null,n.a.createElement(N.a,null,n.a.createElement(m.a,{gutterBottom:!0,variant:"h5"},"Monitoreo de Twitter para COVID19"),n.a.createElement(m.a,{variant:"body2"},"Como miembro del grupo de ingenier\xeda ling\xfc\xedstica, desarrollamos un monitor de Twitter para evaluar el comportamiento de las personas, estados de \xe1nimo, la popularidad de las medidas del tomadas por el gobierno y s\xedntomas de coronavirus. Mi aportaci\xf3n fue la primera secci\xf3n y toda la p\xe1gina web.")))),n.a.createElement(q.a,null,n.a.createElement(F.a,{size:"large",color:"primary",target:"_blank",rel:"noreferrer",href:"http://www.miopers.unam.mx/covid/#/"},"\xbfQuieres saber m\xe1s?")))),n.a.createElement(K.a,{item:!0,xs:!0},n.a.createElement(Q.a,{className:e.rootCard},n.a.createElement(L.a,null,n.a.createElement($.a,{className:e.media,image:"/creaton.jpg",title:"Hackaton"}),n.a.createElement(V.a,null,n.a.createElement(N.a,null,n.a.createElement(m.a,{gutterBottom:!0,variant:"h5"},"Hackaton derechos humanos"),n.a.createElement(m.a,{variant:"body2"},"Ana y yo participamos en un hackat\xf3n para juntar nuestras habilidades y proponer una soluci\xf3n a un tema muy importante en el pa\xeds: violencia de g\xe9nero. Ganamos en la categor\xeda de Atenci\xf3n a mujeres v\xedctimas de violencia. :D")))),n.a.createElement(q.a,null,n.a.createElement(F.a,{size:"large",color:"primary",target:"_blank",rel:"noreferrer",href:"https://www.facebook.com/CreatonPorLosDerechosHumanos/videos/278599159733062/?t=3569"},"\xbfQuieres saber m\xe1s?"))))))},Z=Object(l.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(1)},title:{flexGrow:1},appBar:{background:"#00000033",boxShadow:"none"}}}));var ee=function(e){var a=Z();return n.a.createElement("div",{className:a.root},n.a.createElement(c.a,{position:"fixed",className:a.appBar},n.a.createElement(s.a,null,n.a.createElement(m.a,{variant:"h6",className:a.title},"RicardoJC"),n.a.createElement(k,null))),n.a.createElement(C,null),n.a.createElement(D,null),n.a.createElement(Y,null),n.a.createElement(G,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.cc21f553.chunk.js.map