import{f as c,c as l,G as d,s as f,u as p,j as n,a as g,b as m,P as b}from"./vendor-85299b65.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const h={apiKey:"AIzaSyAcQBYk4MRummz0S1XU4Cu8IRz5jp84B88",authDomain:"website1-92e89.firebaseapp.com",projectId:"website1-92e89",storageBucket:"website1-92e89.appspot.com",messagingSenderId:"134778940064",appId:"1:134778940064:web:bac0e1dbfe3c4ac8ddf7c5",measurementId:"G-MY61ZM3NE2"},I=c.initializeApp(h);I.firestore();const y=c.auth(),S=localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{},u=l({name:"firebase",initialState:{loading:!1,userInfo:{...S}},reducers:{userLoginRequest(r,s){return{...r,loading:!0}},userLoginSuccess(r,s){return localStorage.setItem("userInfo",JSON.stringify({...r.userInfo,...s.payload})),{access:!1,userInfo:{...r.userInfo,...s.payload},loading:!1}},userLoginFailure(r,s){return{...r,access:!1,loading:!1,error:s.payload}}}}),{userLoginRequest:L,userLoginSuccess:v,userLoginFailure:w}=u.actions,j=u.reducer,A=()=>async r=>{r(L());const s=new d;f(y,s).then(a=>{r(v({firebaseInfo:"foo"}))}).catch(a=>{let o;switch(a.code){case"auth/invalid-email":o="Invalid email address";break;case"auth/user-disabled":o="User account has been disabled";break;case"auth/user-not-found":o="User not found";break;case"auth/wrong-password":o="Invalid password";break;default:o=a.message;break}r(w({error:o}))})};function O(){const r=p(),s=a=>{a.preventDefault(),r(A())};return n.jsx("div",{children:n.jsxs("h1",{children:["foo!",n.jsx("button",{onClick:s,children:"click me!"})]})})}const P=g({reducer:{firebase:j}});m.createRoot(document.getElementById("root")).render(n.jsx(b,{store:P,children:n.jsx(O,{})}));