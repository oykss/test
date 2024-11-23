import{A as P,S as $,N as A,a as j}from"./assets/vendor-ClQ9ArOj.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();let x=3;const g=document.querySelector(".load-more");g.addEventListener("click",L);function L(){const e=document.querySelectorAll(".project-list .visually-hidden");e.length<=3&&(x=e.length,g.classList.add("visually-hidden"),g.removeEventListener("click",L));for(let t=0;t<x;t++)e[t].classList.remove("visually-hidden")}const I=[{name:"Wallet webservice",image:{"1x":"/projects/1_wallet-webservice-@1x.jpg","2x":"/projects/1_wallet-webservice-@2x.jpg"}},{name:"Green harvest webservice",image:{"1x":"/projects/2_green-harvest-online-store-@1x.jpg","2x":"/projects/2_green-harvest-online-store-@2x.jpg"}},{name:"English Excellence website",image:{"1x":"/projects/3_english-excellence-webservice-@1x.jpg","2x":"/projects/3_english-excellence-webservice-@2x.jpg"}},{name:"Vyshyvanka Landing Page",image:{"1x":"/projects/4_vyshyvanka-vibes-landing-page-@1x.jpg","2x":"/projects/4_vyshyvanka-vibes-landing-page-@2x.jpg"}},{name:"Chego jewelry website",image:{"1x":"/projects/5_chego-jewelry-website-@1x.jpg","2x":"/projects/5_chego-jewelry-website-@2x.jpg"}},{name:"Energy flow webservice",image:{"1x":"/projects/6_energy-flow-webservice-@1x.jpg","2x":"/projects/6_energy-flow-webservice-@2x.jpg"}},{name:"Fruitbox online store",image:{"1x":"/projects/7_fruitbox-online-store-@1x.jpg","2x":"/projects/7_fruitbox-online-store-@2x.jpg"}},{name:"Mimino website",image:{"1x":"/projects/8_mimino-website-@1x.jpg","2x":"/projects/8_mimino-website-@2x.jpg"}},{name:"Power pulse webservice",image:{"1x":"/projects/9_power-pulse-webservice-@1x.jpg","2x":"/projects/9_power-pulse-webservice-@2x.jpg"}},{name:"Starlight studio landing",image:{"1x":"/projects/10_starlight-studio-landing-page-@1x.jpg","2x":"/projects/10_starlight-studio-landing-page-@2x.jpg"}}],h={projects:I};console.log(h);const l="/team-landing-portfolio/",B=document.querySelector(".project-list");function T(e,t){for(let r=e;r<=t;r++){console.log(h.projects[r]);const{image:{"1x":n,"2x":s},name:o}=h.projects[r];B.innerHTML+=`
      <li class="item">
        <div class="item-img">
          <picture>
            <source
              srcset="
                ${l+n} 1x,
                 ${l+s} 2x
              "
            />
            <img
              src="${l+n}"
              width="320"
              alt="${o}"
            />
          </picture>
        </div>
        <p class="item-subtext">React, JavaScript, Node JS, Git</p>
        <div class="container-txt-btn">
          <p class="item-text">${o}</p>
          <a class="item-btn-grey" href="https://github.com/oykss/team-landing-portfolio" target="_blank" rel="noopener noreferrer">
            VISIT
            <svg class="btn-grey-icon" width="24" height="24">
              <use href="${l}/img/icon.svg#icon-arrow-up-right"></use>
            </svg>
          </a>
        </div>
      </li>`}}T(0,9);document.addEventListener("DOMContentLoaded",()=>{new P("#ac-list",{closeOther:!0}).open(0)});const C=e=>new IntersectionObserver((t,r)=>{t.forEach(n=>{n.isIntersecting&&(e(),r.unobserve(n.target))})},{rootMargin:"0px 0px -300px 0px",threshold:0}),S=document.querySelector(".swiper-wrapper"),v=document.querySelector(".error-text"),c=document.querySelector(".swiper-button-prev"),a=document.querySelector(".swiper-button-next"),b=document.querySelector(".slider-icon"),N=async()=>{try{const e=await j.get("https://portfolio-js.b.goit.study/api/reviews");return v.style.display="none",e.data}catch(e){v.style.display="block",c.style.display="none",a.style.display="none",console.log(e)}},W=e=>e.map(t=>`
        <div class='swiper-slide'>
        <li class='review-card'>
            <p class='review-text'>${t.review}</p>
            <div class='author-info'>
                <img src='${t.avatar_url}' alt='${t.author}' class='review-img'/>
                <p class='review-author'>${t.author}</p>
            </div>
        </li>
        </div>
    `).join(""),H=async()=>{const e=await N();if(!e){v.style.display="block",c.style.display="none",a.style.display="none";return}const t=W(e);S.insertAdjacentHTML("beforeend",t);const r=n=>{n.isBeginning?c.classList.add("disabled"):(c.classList.remove("disabled"),c.style.transition="all .3s ease-out allow-discrete",b.style.transition="all .3s ease-out allow-discrete"),n.isEnd?(a.classList.add("disabled"),a.style.transition="all .3s ease-out allow-discrete",b.style.transition="all .3s ease-out allow-discrete"):a.classList.remove("disabled")};new $(".swiper",{modules:[A],slidesPerView:1,spaceBetween:20,direction:"horizontal",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},centeredSlides:!0,on:{init:function(){r(this)},slideChange:function(){r(this)}},breakpoints:{768:{slidesPerView:1,spaceBetween:32},1280:{spaceBetween:32,centeredSlides:!1,slidesPerView:2}}})},V=C(H);V.observe(S);const E=document.querySelector("#modal"),k=document.querySelectorAll("[data-close-modal]");function F(){E.classList.add("is-open"),k.forEach(e=>{e.addEventListener("click",f),document.addEventListener("keydown",_)})}function f(){E.classList.remove("is-open"),document.body.style.overflow="",k.forEach(e=>{e.removeEventListener("click",f),document.removeEventListener("keydown",_)})}function _(e){e.key==="Escape"&&f()}const d=document.querySelector("#cont-form");d.addEventListener("submit",async e=>{e.preventDefault();const t=document.querySelector("#modal .title-modal"),r=document.querySelector("#modal .desc"),n={email:d.elements["user-email"].value.trim(),comment:d.elements["user-message"].value.trim()};try{const s=await j.post("https://portfolio-js.b.goit.study/api/requests",n);d.reset(),F(),document.body.style.overflow="hidden";const{title:o,message:i}=s.data;t.innerHTML=o,r.innerHTML=i}catch{alert("Failed to submit the form. Try again.")}});const y=document.querySelector(".mob-menu"),m=document.querySelector("#header .js-open-menu"),q=document.querySelectorAll('.mob-menu [data-close="true"]');m.addEventListener("click",M);function M(){m.classList.toggle("is-active"),y.classList.toggle("is-open"),y.classList.contains("is-open")?document.body.style.overflow="hidden":document.body.style.overflow="",q.forEach(e=>{e.addEventListener("click",O)})}function O(){document.body.style.overflow="",m.classList.remove("is-active"),y.classList.remove("is-open"),m.addEventListener("click",M),q.forEach(e=>{e.removeEventListener("click",O)})}const R=document.querySelector("html"),w=document.querySelectorAll('[name="checkbox-mod"]'),p=localStorage.getItem("theme");p&&(p==="theme-dark"?u("theme-light","theme-dark"):u("theme-dark","theme-light"),w.forEach(e=>{e.checked=p==="theme-dark"}));function u(e,t){R.classList.replace(e,t),localStorage.setItem("theme",t),w.forEach(r=>{r.checked=t==="theme-dark"})}w.forEach(e=>{e.addEventListener("change",t=>{t.target.checked?u("theme-light","theme-dark"):u("theme-dark","theme-light")})});
//# sourceMappingURL=index.js.map
