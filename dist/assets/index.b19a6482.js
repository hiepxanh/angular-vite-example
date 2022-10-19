import"./@angular/compiler.f20fe699.js";import"./zone.js.deac1c6d.js";import{b as c}from"./@angular/platform-browser.256ebc2c.js";import{ao as p,ap as u,G as a}from"./@angular/core.ff44991c.js";import{C as f}from"./@angular/common.442f0f8f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();var d=Object.defineProperty,m=Object.getOwnPropertyDescriptor,h=(i,t,s,r)=>{for(var e=r>1?void 0:r?m(t,s):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(e=(r?n(t,s,e):n(e))||e);return r&&e&&d(t,s,e),e};let l=class{constructor(){}ngOnInit(){}};l=h([p({selector:"app-root",standalone:!0,imports:[f],template:`
  <p> hello, this is angular, avite </p>
  <h1 class="text-3xl font-bold underline">
      Hello Tailwind inside angular!
  </h1>
  `,styles:[`
      :host {
        display: block;
      }
    `],changeDetection:u.OnPush})],l);c(l,{providers:[{provide:a,useValue:new a({shouldCoalesceEventChangeDetection:!1})}]});
