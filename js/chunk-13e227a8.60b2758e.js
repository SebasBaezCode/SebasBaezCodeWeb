(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13e227a8"],{"5b06":function(t,e,s){},"6eab":function(t,e,s){},bb51:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{ref:"bg_moonlight",staticClass:"container-bg-moon",attrs:{"data-relative-input":"true"}},[t._m(0)]),s("div",{ref:"stars",staticClass:"container-bg-stars"},[t._m(1)]),s("full-page",{ref:"fullpage",attrs:{options:t.options,id:"fullpage"}},[s("profile-h",{attrs:{render:t.render_profile,leave:t.leave_profile}}),s("div",{staticClass:"section"},[s("info-section",{attrs:{data:t.about_me_data,render:t.about_me_data.render,leave:t.about_me_data.leave}})],1),s("div",{staticClass:"section"},[s("info-section",{attrs:{data:t.works_data,render:t.works_data.render,leave:t.works_data.leave}})],1),s("div",{staticClass:"section"},[s("info-section",{attrs:{data:t.contact_data,render:t.contact_data.render,leave:t.contact_data.leave}})],1)],1),s("div",{staticClass:"items-page"},[s("span",{class:{"item-active":"perfil"==t.current_section},attrs:{title:"Perfil"},on:{click:function(e){return t.goToSection("perfil")}}}),s("span",{class:{"item-active":"sobre-mi"==t.current_section},attrs:{title:"Sobre mi"},on:{click:function(e){return t.goToSection("sobre-mi")}}}),s("span",{class:{"item-active":"trabajos"==t.current_section},attrs:{title:"Trabajos"},on:{click:function(e){return t.goToSection("trabajos")}}}),s("span",{class:{"item-active":"contacto"==t.current_section},attrs:{title:"Contacto"},on:{click:function(e){return t.goToSection("contacto")}}})])],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-moon",attrs:{"data-depth":"0.2"}},[s("div",{staticClass:"bg"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg",attrs:{"data-depth":"0.2"}},[a("img",{attrs:{src:s("ab3d"),alt:"stars"}})])}],i=s("a5ab"),r=s.n(i),c=(s("109c"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section section-profile"},[a("div",{staticClass:"name-profession"},[a("div",{ref:"name",staticClass:"title-lines"},[t._m(0),t._m(1)]),a("h3",{ref:"profession",staticClass:"description"},[t._v("Desarrollador Web / "),a("br"),t._v("Análista")])]),a("div",{staticClass:"moon"},[a("div",{ref:"moon",staticClass:"container-img-moon"},[a("div",{ref:"moon_img",staticClass:"img-moon"},[a("img",{attrs:{src:s("26aa"),"data-depth":"0.2",alt:"moon"}})]),a("div",{ref:"title_portfolio",staticClass:"cloud portfolio-title",attrs:{"data-depth":"0.3"}},[a("h1",[t._v("Portafolio")])]),a("div",{ref:"cloud_mr",staticClass:"cloud cloud-middle-right",attrs:{"data-depth":"0.6"}},[a("img",{attrs:{src:s("5052"),alt:"cloud"}})]),a("div",{ref:"cloud_tf",staticClass:"cloud cloud-top-left",attrs:{"data-depth":"0.3"}},[a("img",{attrs:{src:s("4845"),alt:"cloud"}})]),a("div",{ref:"cloud_br",staticClass:"cloud cloud-bottom-right",attrs:{"data-depth":"0.4"}},[a("img",{attrs:{src:s("9fc8"),alt:"cloud"}})]),a("div",{ref:"cloud_bl",staticClass:"cloud cloud-bottom-left",attrs:{"data-depth":"0.6"}},[a("img",{attrs:{src:s("c935"),alt:"cloud"}})]),a("div",{ref:"cloud_tr",staticClass:"cloud cloud-top-right",attrs:{"data-depth":"0.3"}},[a("img",{attrs:{src:s("dce0"),alt:"cloud"}})])])])])}),n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",{staticClass:"title"},[t._v("SEBASTIAN "),s("br"),t._v("BAEZ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"lines"},[s("span"),s("span")])}],l={props:["render","leave"],data(){return{top_clouds:[]}},mounted(){new r.a(this.$refs.moon);this.top_clouds=[this.$refs.cloud_tf,this.$refs.cloud_tr],this.onRenderAnimations()},methods:{onRenderAnimations(){TweenLite.from(this.$refs.name,1,{css:{right:"50%",opacity:0}},{css:{right:"0px",opacity:1}}),TweenLite.from(this.$refs.profession,.8,{css:{right:"50%",opacity:0}},{css:{right:"0px",opacity:1}}).delay(.3),TweenLite.from(this.$refs.title_portfolio,.7,{css:{left:"50%",opacity:0}},{css:{left:"0px",opacity:1}}),TweenLite.from(this.$refs.moon_img,.8,{css:{left:"50%",opacity:0}},{css:{left:"0px",opacity:1}}),TweenLite.from(this.$refs.cloud_mr,.3,{css:{left:"50%",opacity:0}},{css:{left:"0px",opacity:1}}).delay(.6),TweenLite.from(this.top_clouds,.8,{css:{left:"50%",opacity:0}},{css:{left:"0px",opacity:1}}).delay(.4),TweenLite.from(this.$refs.cloud_br,.9,{css:{left:"50%",opacity:0}},{css:{left:"0px",opacity:1}}).delay(.4),TweenLite.from(this.$refs.cloud_bl,.7,{css:{left:"50%",opacity:0}},{css:{left:"0px",opacity:1}}).delay(.6)},leaveAnimations(){TweenLite.to(this.$refs.name,.6,{css:{right:"20%",opacity:0}}),TweenLite.to(this.$refs.profession,.4,{css:{right:"20%",opacity:0}}).delay(.3),TweenLite.to(this.$refs.title_portfolio,.8,{css:{left:"70%",opacity:0}}).delay(.2),TweenLite.to(this.$refs.moon_img,.7,{css:{left:"70%",opacity:0}}).delay(.3),TweenLite.to(this.$refs.cloud_mr,.6,{css:{left:"70%",opacity:0}}).delay(.3),TweenLite.to(this.top_clouds,.6,{css:{left:"70%",opacity:0}}),TweenLite.to(this.$refs.cloud_br,.6,{css:{left:"50%",opacity:0}}),TweenLite.to(this.$refs.cloud_bl,.7,{css:{left:"50%",opacity:0}})},returnAnimations(){TweenLite.fromTo(this.$refs.name,1,{css:{right:"20%",opacity:0}},{css:{right:"0px",opacity:1}}),TweenLite.fromTo(this.$refs.profession,.8,{css:{right:"20%",opacity:0}},{css:{right:"0px",opacity:1}}).delay(.3),TweenLite.fromTo(this.$refs.title_portfolio,.8,{css:{left:"70%",opacity:0}},{css:{left:"0px",opacity:1}}).delay(.2),TweenLite.fromTo(this.$refs.moon_img,1,{css:{left:"70%",opacity:0}},{css:{left:"0px",opacity:1}}),TweenLite.fromTo(this.$refs.cloud_mr,.3,{css:{left:"70%",opacity:0}},{css:{left:"0px",opacity:1}}).delay(.6),TweenLite.fromTo(this.top_clouds,.8,{css:{left:"70%",opacity:0}},{css:{left:"0px",opacity:1}}).delay(.4),TweenLite.fromTo(this.$refs.cloud_br,.9,{css:{left:"50%",opacity:0}},{css:{left:"0px",opacity:1}}).delay(.4),TweenLite.fromTo(this.$refs.cloud_bl,.7,{css:{left:"50%",opacity:0}},{css:{left:"0px",opacity:1}}).delay(.6)}},watch:{render(){this.returnAnimations()},leave(){this.leaveAnimations()}}},d=l,f=(s("d6b9"),s("2877")),p=Object(f["a"])(d,c,n,!1,null,"0ab67be6",null),m=p.exports,h=s("c78c"),u={components:{"profile-h":m,"info-section":h["a"]},data(){return{current_section:"perfil",render_profile:!1,leave_profile:!1,about_me_data:{type:"home",render:!1,leave:!1,title:"QUIÉN SOY YO",description:"Amante de la Tecnología, los Animales y de adquirir Nuevo Conocimiento.",button_link:{type:"local",link:"about-me"},image:{url:"home/me.jpg"}},works_data:{type:"home",render:!1,leave:!1,title:"MIS TRABAJOS",description:"Estos son algúnos proyectos recientes en los que he trabajado.",button_link:{type:"local",link:"works"},image:{url:"home/works.jpg"}},contact_data:{type:"home",render:!1,leave:!1,title:"CONTÁCTAME",description:"Si tienes un Proyecto Increíble y necesitas Desarrollo Web Profesional no dudes en contáctarme.",social_networks:!0,image:{url:"home/contact.jpg"}},options:{licenseKey:"YOUR_KEY_HEERE",scrollingSpeed:1180,anchors:["perfil","sobre-mi","trabajos","contacto"],onLeave:this.onLeaveAnimations}}},mounted(){new r.a(this.$refs.stars),new r.a(this.$refs.bg_moonlight)},methods:{goToSection(t){this.$refs.fullpage.api.moveTo(t)},onLeaveAnimations(t,e,s){this.current_section=e.anchor,"perfil"==t.anchor&&(this.leave_profile=!this.leave_profile),"sobre-mi"==t.anchor&&"up"==s&&(this.render_profile=!this.render_profile),"contacto"==t.anchor&&(this.render_profile=!this.render_profile),"sobre-mi"==t.anchor&&(this.about_me_data.leave=!this.about_me_data.leave),"sobre-mi"==e.anchor&&(this.about_me_data.render=!this.about_me_data.render),"trabajos"==t.anchor&&(this.works_data.leave=!this.works_data.leave),"trabajos"==e.anchor&&(this.works_data.render=!this.works_data.render),"contacto"==t.anchor&&(this.contact_data.leave=!this.contact_data.leave),"contacto"==e.anchor&&(this.contact_data.render=!this.contact_data.render)}}},_=u,v=(s("c346"),Object(f["a"])(_,a,o,!1,null,"052bd1aa",null));e["default"]=v.exports},c346:function(t,e,s){"use strict";s("5b06")},d6b9:function(t,e,s){"use strict";s("6eab")}}]);
//# sourceMappingURL=chunk-13e227a8.60b2758e.js.map