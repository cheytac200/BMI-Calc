(this["webpackJsonpBMI-Calc"]=this["webpackJsonpBMI-Calc"]||[]).push([[1],{46:function(e,n,t){var r={"./ion-action-sheet.entry.js":[63,5],"./ion-alert.entry.js":[64,6],"./ion-app_8.entry.js":[65,7],"./ion-avatar_3.entry.js":[66,17],"./ion-back-button.entry.js":[67,18],"./ion-backdrop.entry.js":[68,44],"./ion-button_2.entry.js":[69,19],"./ion-card_5.entry.js":[70,20],"./ion-checkbox.entry.js":[71,21],"./ion-chip.entry.js":[72,22],"./ion-col_3.entry.js":[73,45],"./ion-datetime_3.entry.js":[74,10],"./ion-fab_3.entry.js":[75,23],"./ion-img.entry.js":[76,46],"./ion-infinite-scroll_2.entry.js":[77,47],"./ion-input.entry.js":[78,24],"./ion-item-option_3.entry.js":[79,25],"./ion-item_8.entry.js":[80,26],"./ion-loading.entry.js":[81,27],"./ion-menu_3.entry.js":[82,28],"./ion-modal.entry.js":[83,8],"./ion-nav_2.entry.js":[84,14],"./ion-popover.entry.js":[85,9],"./ion-progress-bar.entry.js":[86,29],"./ion-radio_2.entry.js":[87,30],"./ion-range.entry.js":[88,31],"./ion-refresher_2.entry.js":[89,11],"./ion-reorder_2.entry.js":[90,16],"./ion-ripple-effect.entry.js":[91,48],"./ion-route_4.entry.js":[92,32],"./ion-searchbar.entry.js":[93,33],"./ion-segment_2.entry.js":[94,34],"./ion-select_3.entry.js":[95,35],"./ion-slide_2.entry.js":[96,49],"./ion-spinner.entry.js":[97,13],"./ion-split-pane.entry.js":[98,50],"./ion-tab-bar_2.entry.js":[99,36],"./ion-tab_2.entry.js":[100,15],"./ion-text.entry.js":[101,37],"./ion-textarea.entry.js":[102,38],"./ion-toast.entry.js":[103,39],"./ion-toggle.entry.js":[104,12],"./ion-virtual-scroll.entry.js":[105,51]};function s(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],s=n[0];return t.e(n[1]).then((function(){return t(s)}))}s.keys=function(){return Object.keys(r)},s.id=46,e.exports=s},48:function(e,n,t){var r={"./ion-icon.entry.js":[106,57]};function s(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],s=n[0];return t.e(n[1]).then((function(){return t(s)}))}s.keys=function(){return Object.keys(r)},s.id=48,e.exports=s},60:function(e,n,t){},61:function(e,n,t){"use strict";t.r(n);var r=t(0),s=t.n(r),c=t(21),i=t.n(c),o=t(22),j=t(4),l=t(15),a=t(2),u=function(e){return Object(a.jsxs)(j.n,{children:[Object(a.jsx)(j.f,{className:"ion-text-left",children:Object(a.jsxs)(j.c,{onClick:e.onCalculate,children:[Object(a.jsx)(j.j,{slot:"start",icon:l.b}),"Calculate"]})}),Object(a.jsx)(j.f,{className:"ion-text-right",children:Object(a.jsxs)(j.c,{onClick:e.onReset,children:[Object(a.jsx)(j.j,{slot:"start",icon:l.k}),"Reset"]})})]})},b=function(e){return Object(a.jsx)(j.n,{children:Object(a.jsx)(j.f,{children:Object(a.jsx)(j.d,{children:Object(a.jsxs)(j.e,{className:"ion-text-center",children:[Object(a.jsx)("h2",{children:"Your Body-Mass-Index"}),Object(a.jsx)("h3",{children:e.result.toFixed(2)})]})})})})},d=function(e){return Object(a.jsxs)(j.o,{value:e.selectedValue,onIonChange:function(n){e.onSelectedValue(n.detail.value)},children:[Object(a.jsx)(j.p,{value:"mkg",children:Object(a.jsx)(j.m,{children:"m/kg"})}),Object(a.jsx)(j.p,{value:"ftlbs",children:Object(a.jsx)(j.m,{children:"ft/lbs"})})]})},O=(t(50),t(51),t(52),t(53),t(54),t(55),t(56),t(57),t(58),t(59),t(60),function(){var e=Object(r.useState)(),n=Object(o.a)(e,2),t=n[0],s=n[1],c=Object(r.useState)(),i=Object(o.a)(c,2),l=i[0],O=i[1],h=Object(r.useState)("mkg"),x=Object(o.a)(h,2),y=x[0],f=x[1],m=Object(r.useRef)(null),p=Object(r.useRef)(null);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(j.a,{isOpen:!!l,message:l,buttons:[{text:"Okay",handler:function(){O("")}}]}),Object(a.jsxs)(j.b,{children:[Object(a.jsx)(j.i,{children:Object(a.jsx)(j.r,{color:"primary",children:Object(a.jsx)(j.q,{children:"BMI Calculator"})})}),Object(a.jsx)(j.g,{className:"ion-padding",children:Object(a.jsxs)(j.h,{children:[Object(a.jsx)(j.n,{children:Object(a.jsx)(j.f,{children:Object(a.jsx)(d,{selectedValue:y,onSelectedValue:function(e){f(e)}})})}),Object(a.jsx)(j.n,{children:Object(a.jsx)(j.f,{children:Object(a.jsxs)(j.l,{children:[Object(a.jsxs)(j.m,{position:"floating",children:["Your Height (","mkg"===y?"meters":"feet",")"]}),Object(a.jsx)(j.k,{type:"number",ref:p})]})})}),Object(a.jsx)(j.n,{children:Object(a.jsx)(j.f,{children:Object(a.jsxs)(j.l,{children:[Object(a.jsxs)(j.m,{position:"floating",children:["Your Weight (","mkg"===y?"kg":"lbs",")"]}),Object(a.jsx)(j.k,{type:"number",ref:m})]})})}),Object(a.jsx)(u,{onCalculate:function(){var e=m.current.value,n=p.current.value;if(!e||!n||+n<=0||+e<=0)O("Please enter valid numbers!");else{var t=+e/("ftlbs"===y?3.28:1);s(+e/("ftlbs"===y?2.2:1)/(t*t))}},onReset:function(){m.current.value="",p.current.value=""}}),t&&Object(a.jsx)(b,{result:t})]})})]})]})});i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root"))}},[[61,3,4]]]);
//# sourceMappingURL=main.ea822380.chunk.js.map