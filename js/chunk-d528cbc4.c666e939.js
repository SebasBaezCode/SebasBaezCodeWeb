(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d528cbc4"],{"0ed0":function(e,a,t){},1822:function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"works"},[t("div",{staticClass:"first"},[t("info-section",{attrs:{data:e.works_data,render:e.works_data.render,leave:e.works_data.leave}})],1),t("div",{staticClass:"container-sb"},[t("div",{staticClass:"top-tools"},[t("div",{staticClass:"category-select"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.categories,expression:"categories"}],attrs:{multiple:""},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.categories=a.target.multiple?t:t[0]}}},[t("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("Filtrar por categorías")]),t("option",{attrs:{value:"website"}},[e._v("Sitio Web")]),t("option",{attrs:{value:"landing_page"}},[e._v("Landing Page")]),t("option",{attrs:{value:"digital_flyer"}},[e._v("Volante Digital")]),t("option",{attrs:{value:"plataform"}},[e._v("Plataforma")])])])]),t("div",{staticClass:"container-cards"},e._l(e.filter_work_cards,(function(e,a){return t("work-card",{key:a,attrs:{work_card:e}})})),1)]),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("footer-sb")],1)},s=[],n=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"card item-card"},[e.work_card.external_link?i("a",{staticClass:"external-icon",attrs:{href:e.work_card.external_link,title:"Ir al sitio",target:"_blank"}},[i("img",{attrs:{src:t("a563"),alt:"Link"}})]):e._e(),i("div",{staticClass:"card-image"},[i("div",{staticClass:"bg"}),i("div",{staticClass:"image",style:"background-image: url("+t("c2d3")("./"+e.work_card.image)+")"}),i("span",{staticClass:"card-title",domProps:{innerHTML:e._s(e.work_card.title)}})]),i("div",{staticClass:"card-content"},[i("p",{domProps:{innerHTML:e._s(e.work_card.description)}})]),i("div",{staticClass:"card-action"},[i("div",{staticClass:"tools"},e._l(e.images,(function(e,a){return i("img",{key:a,attrs:{src:e}})})),0)])])},o=[],r={props:["work_card"],data(){return{}},computed:{images(){let e=[],a={html_css:t("80f6"),vue:t("64cb"),lumen:t("cdf8"),sass:t("bd99"),js:t("a4c6"),git:t("0e19"),my_sql:t("53a5"),wordpress:t("ef5c")};for(const t in this.work_card.tools)for(const i in a)this.work_card.tools[t]==i&&e.push(a[i]);return e}}},l=r,d=(t("f51b"),t("2877")),g=Object(d["a"])(l,n,o,!1,null,"44486c18",null),p=g.exports,c={components:{"work-card":p},data(){return{works_data:{render:!1,leave:!1,title:"MIS TRABAJOS",description:"Estos son algúnos proyectos recientes en los que he trabajado.",buttonText:"Explorar",button_link:{type:"ext",link:"https://www.linkedin.com/in/sebastian-b%C3%A1ez-a461a2176/"},image:{full:!0,url:"home/works.jpg"}},categories:[],work_cards:[{image:"website/sebasbaez/desktop.png",title:"Sebastian Báez Code",description:"Página Web para mostrar quién soy y los trabajos que he realizado.",link:{text:"Ver más",to:""},tools:["vue","sass","js","git"],categories:["website"]},{image:"website/king-wash/desktop.png",title:"King Wash - Embellecimiento Automotriz",description:"Página Web con panel de administración para gestionar reservas online, cupones de dcto, etc.",link:{text:"Ver más",to:""},tools:["vue","sass","js","lumen","my_sql","git"],categories:["website","plataform"],external_link:"https://kingwash.co"},{image:"website/ummami/desktop.jpg",title:"Ummami Express",description:"Página Web para la empresa Ummami Express, restaurante de comida variada con pedidos online.",link:{text:"Ver más",to:""},tools:["vue","sass","js","lumen","my_sql","git"],categories:["website","plataform"],external_link:"https://ummamiexpress.com"},{image:"website/winketing/desktop.png",title:"Winketing",description:"Página Web para la empresa Winketing, agencia de marketing digital.",link:{text:"Ver más",to:""},tools:["html_css","sass","js","my_sql","git"],categories:["website"],external_link:"https://winketing.com/"},{image:"website/industrias-pico/desktop.jpg",title:"Industrias Pico",description:"Página Web para la empresa Industrias Pico, diseñada para la presentación de estanterías, muebles, entre otros.",link:{text:"Ver más",to:""},tools:["vue","sass","js","my_sql","git"],categories:["website"],external_link:"https://winketing.com/industrias-pico/"},{image:"website/lemarm/desktop.jpg",title:"Le Marm - Propuesta",description:"Propuesta de diseño web para la empresa Le Marm, enfocada a la venta de diseño interior.",link:{text:"Ver más",to:""},tools:["html_css","sass","js"],categories:["website"],external_link:"https://winketing.com/lemarm/"},{image:"website/odontomedicas/desktop.png",title:"Odontomedicas",description:"Página Web para la empresa Odontomedicas, servicios de medicina general y especializado en odontología.",link:{text:"Ver más",to:""},tools:["wordpress","my_sql"],categories:["website"],external_link:"https://odontomedicas.com/"},{image:"landing-pages/pagina-web/desktop.png",title:"¿Necesitas una página web?",description:"\n                        Landing Page/Volante para la atracción de clientes interesados en un sitio web.\n                    ",link:{text:"Ver más",to:""},tools:["html_css","sass","js","my_sql"],categories:["landing_page","digital_flyer"],external_link:"https://www.winketing.com/volantes/productos/pagina-web/"},{image:"landing-pages/social-marketing/desktop.jpg",title:"Social Media Marketing",description:"\n                        Landing Page para promocionar marketing social media marketing para la empresa Winketing.\n                    ",link:{text:"Ver más",to:""},tools:["html_css","sass","js"],categories:["landing_page"],external_link:"https://winketing.com/social-marketing/"},{image:"landing-pages/promociones-taikinsa/desktop.jpg",title:"Beneficios Taikinsa - Hotel Dann",description:"Landing Page para la atracción de clientes en Taikinsa y Hotel Dann.",link:{text:"Ver más",to:""},tools:["html_css","sass","js"],categories:["landing_page"],external_link:"https://promociones.taikinsa.com/taikinsadann/programa-de-beneficios/"},{image:"landing-pages/pico/desktop-1.png",title:"Silla Ergohuman",description:"Landing Page/Volante para la atracción de clientes interesados en una silla ergonómica.",link:{text:"Ver más",to:""},tools:["html_css","sass","js"],categories:["landing_page","digital_flyer"],external_link:"https://industriaspico.com/silla-ergohuman/"},{image:"landing-pages/marketing-automatizado/desktop.jpg",title:"Marketing Automatizado",description:"Landing Page para la atracción de clientes interesados en el marketing automatizado.",link:{text:"Ver más",to:""},tools:["html_css","sass","js"],categories:["landing_page"],external_link:"https://winketing.com/marketing-automatizado/"},{image:"landing-pages/vioss/desktop.png",title:"Vioss - Un regalo para una madre",description:"Landing Page/Volante para la atracción de clientes interesados en un regalo para el día de las madres.",link:{text:"Ver más",to:""},tools:["html_css","sass","js"],categories:["landing_page","digital_flyer"],external_link:"https://winketing.com/volantes/productos/vioss/"},{image:"landing-pages/volante/desktop.png",title:"Un volante digital para tu marca",description:"Landing Page/Volante para la atracción de clientes interesados en un volante digital.",link:{text:"Ver más",to:""},tools:["html_css","sass","js"],categories:["landing_page","digital_flyer"],external_link:"https://www.winketing.com/volantes/productos/volante-digital/"},{image:"landing-pages/tarjeta-digital/desktop.png",title:"Tarjeta Digital",description:"Landing Page para la atracción de clientes interesados en una tarjeta digital.",link:{text:"Ver más",to:""},tools:["wordpress","sass","js"],categories:["landing_page"],external_link:"https://winketing.com/tarjeta-digital/"},{image:"plataform/sistema-de-salud/desktop.png",title:"Sistema de Salud",description:"Sistema para gestionar los procesos de salud para los pacientes de una IPS.",link:{text:"Ver más",to:""},tools:["vue","sass","js","lumen","git","my_sql"],categories:["website","plataform"]},{image:"plataform/curso-movilidad/desktop.png",title:"Plataforma de Cursos Viales",description:"Plataforma de cursos online, enforcada en la seguridad vial y relacionadas.",link:{text:"Ver más",to:""},tools:["vue","sass","js","lumen","git","my_sql"],categories:["website","plataform"]},{image:"landing-pages/asesoria-gratuita/desktop.png",title:"Asesoria Gratuita de Marketing",description:"Landing Page para la atracción de clientes interesados en hacer crecer usando marketing digital.",link:{text:"Ver más",to:""},tools:["html_css","sass","js","my_sql"],categories:["landing_page"],external_link:"https://winketing.com/asesoria-gratuita/"},{image:"landing-pages/tratamientos/desktop.png",title:"Vivemas - Tramiento de enfermedades",description:"Landing Page para la atracción de clientes interesados en brigadas médicas.",link:{text:"Ver más",to:""},tools:["html_css","sass","js","my_sql"],categories:["landing_page"],external_link:"https://vivemas.com.co/tratamiento-enfermedades/"},{image:"tienda-online/vivemas/desktop.png",title:"Vivemas - Tienda de productos",description:"Tienda online modificando la plantilla base de Prestashop para la venta de productos homeopáticos.",link:{text:"Ver más",to:""},tools:["html_css","sass","js","my_sql"],categories:["website","plataform"],external_link:"https://vivemas.com.co/productos"},{image:"landing-pages/guia-practica/desktop.png",title:"Guia Práctica en Seguriad Vial",description:"Landing Page/Volante para la atracción de clientes interesados en la seguridad vial.",link:{text:"Ver más",to:""},tools:["html_css","sass","js"],categories:["landing_page","digital_flyer"]},{image:"landing-pages/burger-box/desktop.png",title:"Burguer Box",description:"Landing Page/Volante para la atracción de clientes interesados en una hamburguesa especial.",link:{text:"Ver más",to:""},tools:["html_css","sass","js"],categories:["landing_page","digital_flyer"],external_link:"http://www.winketing.com/volantes/productos/burger-box/"},{image:"landing-pages/desafio/desktop.png",title:"Desafio de Marketing",description:"Landing Page para la atracción de clientes interesados en participar por un plan de marketing digital.",link:{text:"Ver más",to:""},tools:["html_css","sass","js"],categories:["landing_page"],external_link:"https://winketing.com/desafio/"},{image:"landing-pages/unimat/desktop.png",title:"Unimat - Alfombras de calidad",description:"Landing Page/Volante para la atracción de clientes interesados en alformbras.",link:{text:"Ver más",to:""},tools:["html_css","sass","js"],categories:["landing_page","digital_flyer"],external_link:"https://winketing.com/volantes/productos/unimat/"},{image:"landing-pages/cardio/desktop.png",title:"Vive mas - Brigada Cardiovascular",description:"Landing Page/Volante para la atracción de clientes interesados en tratamientos cardiovasculares.",link:{text:"Ver más",to:""},tools:["html_css","sass","js"],categories:["landing_page","digital_flyer"],external_link:"https://winketing.com/volantes/vivemas/brigada-cardiovascular/"}]}},mounted(){M.AutoInit()},computed:{filter_work_cards(){let e=[];if(this.categories.length<=0)e=this.work_cards;else for(const a in this.work_cards)for(const t in this.categories)-1!=this.work_cards[a].categories.indexOf(this.categories[t])&&-1==e.indexOf(this.work_cards[a])&&e.push(this.work_cards[a]);return e}}},m=c,k=(t("e793"),Object(d["a"])(m,i,s,!1,null,"914c1e70",null));a["default"]=k.exports},6977:function(e,a,t){},c2d3:function(e,a,t){var i={"./landing-pages/asesoria-gratuita/desktop.png":"6e54","./landing-pages/asesoria-gratuita/mobile.png":"76f2","./landing-pages/asesoria-gratuita/reserve.png":"8b6a","./landing-pages/burger-box/Mobile.png":"8cf1","./landing-pages/burger-box/desktop.png":"eaf7","./landing-pages/cardio/Mobile.png":"cf3b","./landing-pages/cardio/desktop.png":"29ca","./landing-pages/desafio/desktop.png":"3d30","./landing-pages/desafio/mobile.png":"92ef","./landing-pages/guia-practica/desktop.png":"0265","./landing-pages/marketing-automatizado/desktop.jpg":"9ffa","./landing-pages/marketing-automatizado/mobile.png":"9b9e","./landing-pages/pagina-web/Mobile.png":"fda8","./landing-pages/pagina-web/desktop.png":"9ce6","./landing-pages/pico/Mobile.png":"30f8","./landing-pages/pico/desktop-1.png":"31d1","./landing-pages/pico/desktop.jpg":"158b","./landing-pages/promociones-taikinsa/desktop.jpg":"dda2","./landing-pages/promociones-taikinsa/mobile.jpg":"cd6a","./landing-pages/social-marketing/desktop.jpg":"4253","./landing-pages/social-marketing/mobile.png":"7df7","./landing-pages/tarjeta-digital/desktop.png":"afcb","./landing-pages/tarjeta-digital/mobile.jpg":"8f74","./landing-pages/tarjeta-digital/s.png":"eced","./landing-pages/tratamientos/desktop.png":"12fc","./landing-pages/tratamientos/mobile.png":"2274","./landing-pages/unimat/Mobile.png":"20fe","./landing-pages/unimat/desktop.png":"5890","./landing-pages/vioss/Mobile.png":"c638","./landing-pages/vioss/desktop.png":"3b21","./landing-pages/volante/Mobile.png":"d02c","./landing-pages/volante/desktop-2.png":"a549","./landing-pages/volante/desktop.png":"bc59","./plataform/curso-movilidad/desktop.png":"e8f0","./plataform/curso-movilidad/mobile.png":"1459","./plataform/sistema-de-salud/desktop.png":"61ff","./plataform/sistema-de-salud/mobile.png":"0160","./tienda-online/vivemas/desktop.png":"86c7","./tienda-online/vivemas/mobile.png":"96c0","./website/industrias-pico/desktop.jpg":"d9d1","./website/industrias-pico/mobile.png":"5193","./website/king-wash/desktop.png":"f1ed","./website/lemarm/desktop.jpg":"f73a","./website/lemarm/mobile.png":"4e24","./website/odontomedicas/desktop.png":"2312","./website/odontomedicas/mobile.jpg":"4aa6","./website/sebasbaez/desktop.png":"098c","./website/sebasbaez/mobile.png":"b620","./website/ummami/desktop.jpg":"a903","./website/ummami/mobile.png":"6589","./website/winketing/desktop.png":"4709","./website/winketing/mobile.png":"503f"};function s(e){var a=n(e);return t(a)}function n(e){if(!t.o(i,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return i[e]}s.keys=function(){return Object.keys(i)},s.resolve=n,e.exports=s,s.id="c2d3"},e793:function(e,a,t){"use strict";t("6977")},f51b:function(e,a,t){"use strict";t("0ed0")}}]);
//# sourceMappingURL=chunk-d528cbc4.c666e939.js.map