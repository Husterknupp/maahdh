(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/katzen-lahore.94b2a8c9.jpg"},function(e,t,a){e.exports=a.p+"static/media/android-chrome-192x192.3cff30c4.png"},function(e,t,a){e.exports=a(23)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"Day_10_17",function(){return y});var r=a(0),l=a.n(r),c=a(8),o=a.n(c),i=(a(17),a(2)),m=a(3),u=a(5),s=a(4),h=a(6),d=a(1);a(19),a(21);function E(e){var t=e.src,a=e.alt;return l.a.createElement("img",{src:t,alt:a,className:"image round-corners"})}function p(e){var t=e.imgSrc,a=e.paragraphs;return l.a.createElement(l.a.Fragment,null,a.map(function(e,a){return l.a.createElement("div",{key:a},l.a.createElement(E,{src:t}),l.a.createElement(e,null))}))}var f=a(9),g=a.n(f),v=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).handleClick=function(){e.setState({isExpanded:!e.state.isExpanded})},e.state={isExpanded:!1},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.isExpanded,t=this.props,a=t.Clickable,n=t.Expandable;return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{onClick:this.handleClick,style:{textDecoration:"underline"}},l.a.createElement(a,null)),e?l.a.createElement(n,null):l.a.createElement("div",{style:{marginBottom:"3em"}}))}}]),t}(l.a.Component);function y(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Component Show Room"),l.a.createElement("h3",null,"No. 1")," the ",l.a.createElement("code",null,"RepeatedImage")," component.",l.a.createElement(p,{imgSrc:g.a,paragraphs:[function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Kitties are s\xfc\xdf, no matter where they are"))},function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Also there are other details on this image that you wanna discuss in a separate paragraph without the reader to scroll up the page to see the image you're referring to every time"))},function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Every new paragraph automatically starts with the image"))}]}),l.a.createElement("h3",null,"No. 2")," is ",l.a.createElement("code",null,"ExpandOnClick")," component.",l.a.createElement(v,{Clickable:function(){return l.a.createElement("p",null,"click this text to un-hide more content.")},Expandable:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"create a nice little interaction to make reading"),l.a.createElement(v,{Clickable:function(){return l.a.createElement("p",null,"more fun ..")},Expandable:function(){return l.a.createElement("p",null," & exciting!")}}))}}))}var k=a(10),b=a.n(k);function x(e){var t=e.which,a=e.label;return l.a.createElement("span",{role:"img","aria-label":a},t)}function w(e){var t=e.onBackClick,a=e.onHomeClick;return l.a.createElement("div",{className:"header",style:{display:"flex"}},l.a.createElement("div",{onClick:function(){return t()},style:{flex:"1 0 44px"}},"<"),l.a.createElement("div",{onClick:function(){return a()},style:{flex:"1 0 auto"}},l.a.createElement("img",{src:b.a,style:{height:"1.5em"},alt:"Ein Lynx"})," ",l.a.createElement("span",null,"MaahdH")),l.a.createElement("div",{style:{flex:"1 0 44px"}}))}var C=function(e){var t=e.dayOfMonth,a=e.month,r="Day_".concat(a.toString().padStart(2,"0"),"_").concat(t.toString().padStart(2,"0")),c=n[r];return c?l.a.createElement(c,null):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,"Trying to get post for ",a,"-",t," (",r,")"),l.a.createElement("div",{style:{marginTop:"1em"}},"append"," ",l.a.createElement("span",{style:{textDecoration:"underline"}},"?day=10/17/2019")," ","to your url and you'll get to the showroom"))};function O(e){var t=e.dayOfMonth,a=e.month;return l.a.createElement("div",{className:"content"},l.a.createElement("div",{style:{margin:"1em"}},C({dayOfMonth:t,month:a})))}var T=[{name:"Washington D.C.",timeZone:"utc-5"},{name:"Philadelphia",timeZone:"utc-5",state:"Pennsylvania"},{name:"New York",timeZone:"utc-5"},{name:"Henderson",timeZone:"utc-8",state:"Nevada"},{name:"Chicago",timeZone:"utc-6",state:"Illinois"},{name:"Zuhause",timeZone:"utc+1",state:"Sachsen-Anhalt"}],j=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).updateTime=function(){e.setState({currentTime:e.getCurrentTime()})},e.getCurrentTime=function(){return d.DateTime.local().setZone(e.currentLocation.timeZone).toFormat("HH':'mm")},e.currentLocation=T[5],e.state={currentTime:e.getCurrentTime()},setInterval(e.updateTime,5e3),e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=function(){var e=d.DateTime.fromISO("2042-12-24T12:05:00+01:00"),t=d.Interval.fromDateTimes(d.DateTime.local(),e).toDuration(["days","hours"]);return console.log({remainingDuration:t}),t.invalid?l.a.createElement(l.a.Fragment,null,l.a.createElement(x,{which:"\ud83c\udf89",label:"party"})," 0h"):t.toObject().days>=1?t.toFormat("dd't 'hh'h'"):l.a.createElement(l.a.Fragment,null,l.a.createElement(x,{which:"\ud83c\udf89",label:"party"})," ",t.toFormat("hh'h'"))}(),t=this.state.currentTime;return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{style:{flex:"1 1 auto",textAlign:"center"}},e),l.a.createElement("div",{style:{flex:"1 1 auto",textAlign:"center"}},this.currentLocation.name," ",this.currentLocation.state?l.a.createElement("div",null,l.a.createElement("small",null,this.currentLocation.state)):""),l.a.createElement("div",{style:{flex:"1 1 auto",textAlign:"center"}},t))}}]),t}(l.a.Component),D=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleBackClick=function(){var e=a.state,t=e.day,n=e.month,r=d.DateTime.local().setZone("utc+1").set({day:t,month:n}).minus({days:1});a.setState({day:r.day,month:r.month})},a.handleHomeClick=function(){var e=d.DateTime.local().setZone("utc+1");a.setState({day:e.day,month:e.month})};var n,r=new URLSearchParams(window.location.search.slice(1)).get("date");return n=r?d.DateTime.fromJSDate(new Date(r)):d.DateTime.local().setZone("utc+1"),a.state={day:n.day,month:n.month},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state;e.day,e.month;return l.a.createElement("div",{className:"app"},l.a.createElement(w,{onBackClick:this.handleBackClick,onHomeClick:this.handleHomeClick}),l.a.createElement(O,{dayOfMonth:"17",month:"10"}),l.a.createElement(j,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,2,1]]]);
//# sourceMappingURL=main.cb099de2.chunk.js.map