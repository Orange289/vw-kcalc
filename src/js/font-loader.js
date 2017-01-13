function loadFont(a,b,c,d){function e(){if(!window.FontFace)return!1;var a=new FontFace("t",'url("data:application/font-woff2,") format("woff2")',{}),b=a.load();try{b.then(null,function(){})}catch(c){}return"loading"===a.status}var f=navigator.userAgent,g=!window.addEventListener||f.match(/(Android (2|3|4.0|4.1|4.2|4.3))|(Opera (Mini|Mobi))/)&&!f.match(/Chrome/);if(!g){var h={};try{h=localStorage||{}}catch(i){}var j="x-font-"+a,k=j+"url",l=j+"css",m=h[k],n=h[l],o=document.createElement("style");if(o.rel="stylesheet",document.head.appendChild(o),!n||m!==b&&m!==c){var p=c&&e()?c:b,q=new XMLHttpRequest;q.open("GET",p),q.onload=function(){q.status>=200&&q.status<400&&(h[k]=p,h[l]=q.responseText,d||(o.textContent=q.responseText))},q.send()}else o.textContent=n}}

loadFont('vwheadoffice-bolditalic-webfont', 'fonts/vwheadoffice-bolditalic-webfont.css');
loadFont('vwheadoffice-bold-webfont', 'fonts/vwheadoffice-bold-webfont.css');
loadFont('vwheadoffice-regularitalic-webfont', 'fonts/vwheadoffice-regularitalic-webfont.css');
loadFont('vwheadoffice-regular-webfont', 'fonts/vwheadoffice-regular-webfont.css');
loadFont('vwtextoffice-bolditalic-webfont', 'fonts/vwtextoffice-bolditalic-webfont.css');
loadFont('vwtextoffice-bold-webfont', 'fonts/vwtextoffice-bold-webfont.css');
loadFont('vwtextoffice-regularitalic-webfont', 'fonts/vwtextoffice-regularitalic-webfont.css');
loadFont('vwtextoffice-regular-webfont', 'fonts/vwtextoffice-regular-webfont.css');
