function loadFont(t,e,o,n){function f(){if(!window.FontFace)return!1;var t=new FontFace("t",'url("data:application/font-woff2,") format("woff2")',{}),e=t.load();try{e.then(null,function(){})}catch(t){}return"loading"===t.status}var a=navigator.userAgent,i=!window.addEventListener||a.match(/(Android (2|3|4.0|4.1|4.2|4.3))|(Opera (Mini|Mobi))/)&&!a.match(/Chrome/);if(!i){var c={};try{c=localStorage||{}}catch(t){}var l="x-font-"+t,s=l+"url",d=l+"css",r=c[s],w=c[d],b=document.createElement("style");if(b.rel="stylesheet",document.head.appendChild(b),!w||r!==e&&r!==o){var u=o&&f()?o:e,v=new XMLHttpRequest;v.open("GET",u),v.onload=function(){v.status>=200&&v.status<400&&(c[s]=u,c[d]=v.responseText,n||(b.textContent=v.responseText))},v.send()}else b.textContent=w}}loadFont("vwheadoffice-bolditalic-webfont","fonts/vwheadoffice-bolditalic-webfont.css"),loadFont("vwheadoffice-bold-webfont","fonts/vwheadoffice-bold-webfont.css"),loadFont("vwheadoffice-regularitalic-webfont","fonts/vwheadoffice-regularitalic-webfont.css"),loadFont("vwheadoffice-regular-webfont","fonts/vwheadoffice-regular-webfont.css"),loadFont("vwtextoffice-bolditalic-webfont","fonts/vwtextoffice-bolditalic-webfont.css"),loadFont("vwtextoffice-bold-webfont","fonts/vwtextoffice-bold-webfont.css"),loadFont("vwtextoffice-regularitalic-webfont","fonts/vwtextoffice-regularitalic-webfont.css"),loadFont("vwtextoffice-regular-webfont","fonts/vwtextoffice-regular-webfont.css");