var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var e=Math.PI/180,t=180/Math.PI,r=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,n=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,o=/(^[#\.]|[a-y][a-z])/gi,i=/[achlmqstvz]/gi,a=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,s=_gsScope._gsDefine.globals.TweenLite,h="MorphSVGPlugin",l=String.fromCharCode(103,114,101,101,110,115,111,99,107,46,99,111,109),f=String.fromCharCode(47,114,101,113,117,105,114,101,115,45,109,101,109,98,101,114,115,104,105,112,47),g=function(e){for(var t=-1!==(window?window.location.href:"").indexOf(String.fromCharCode(103,114,101,101,110,115,111,99,107))&&-1!==e.indexOf(String.fromCharCode(108,111,99,97,108,104,111,115,116)),r=[l,String.fromCharCode(99,111,100,101,112,101,110,46,105,111),String.fromCharCode(99,111,100,101,112,101,110,46,100,101,118),String.fromCharCode(99,115,115,45,116,114,105,99,107,115,46,99,111,109),String.fromCharCode(99,100,112,110,46,105,111),String.fromCharCode(103,97,110,110,111,110,46,116,118),String.fromCharCode(99,111,100,101,99,97,110,121,111,110,46,110,101,116),String.fromCharCode(116,104,101,109,101,102,111,114,101,115,116,46,110,101,116),String.fromCharCode(99,101,114,101,98,114,97,120,46,99,111,46,117,107),String.fromCharCode(116,121,109,112,97,110,117,115,46,110,101,116),String.fromCharCode(116,119,101,101,110,109,97,120,46,99,111,109),String.fromCharCode(116,119,101,101,110,108,105,116,101,46,99,111,109),String.fromCharCode(112,108,110,107,114,46,99,111),String.fromCharCode(104,111,116,106,97,114,46,99,111,109),String.fromCharCode(106,115,102,105,100,100,108,101,46,110,101,116)],n=r.length;--n>-1;)if(-1!==e.indexOf(r[n]))return!0;return t&&window&&window.console&&console.log(String.fromCharCode(87,65,82,78,73,78,71,58,32,97,32,115,112,101,99,105,97,108,32,118,101,114,115,105,111,110,32,111,102,32)+h+String.fromCharCode(32,105,115,32,114,117,110,110,105,110,103,32,108,111,99,97,108,108,121,44,32,98,117,116,32,105,116,32,119,105,108,108,32,110,111,116,32,119,111,114,107,32,111,110,32,97,32,108,105,118,101,32,100,111,109,97,105,110,32,98,101,99,97,117,115,101,32,105,116,32,105,115,32,97,32,109,101,109,98,101,114,115,104,105,112,32,98,101,110,101,102,105,116,32,111,102,32,67,108,117,98,32,71,114,101,101,110,83,111,99,107,46,32,80,108,101,97,115,101,32,115,105,103,110,32,117,112,32,97,116,32,104,116,116,112,58,47,47,103,114,101,101,110,115,111,99,107,46,99,111,109,47,99,108,117,98,47,32,97,110,100,32,116,104,101,110,32,100,111,119,110,108,111,97,100,32,116,104,101,32,39,114,101,97,108,39,32,118,101,114,115,105,111,110,32,102,114,111,109,32,121,111,117,114,32,71,114,101,101,110,83,111,99,107,32,97,99,99,111,117,110,116,32,119,104,105,99,104,32,104,97,115,32,110,111,32,115,117,99,104,32,108,105,109,105,116,97,116,105,111,110,115,46,32,84,104,101,32,102,105,108,101,32,121,111,117,39,114,101,32,117,115,105,110,103,32,119,97,115,32,108,105,107,101,108,121,32,100,111,119,110,108,111,97,100,101,100,32,102,114,111,109,32,101,108,115,101,119,104,101,114,101,32,111,110,32,116,104,101,32,119,101,98,32,97,110,100,32,105,115,32,114,101,115,116,114,105,99,116,101,100,32,116,111,32,108,111,99,97,108,32,117,115,101,32,111,114,32,111,110,32,115,105,116,101,115,32,108,105,107,101,32,99,111,100,101,112,101,110,46,105,111,46)),t}(window?window.location.host:""),u=function(e){_gsScope.console&&console.log(e)},c=function(t,r){var n,o,i,a,s,h,l=Math.ceil(Math.abs(r)/90),f=0,g=[];for(t*=e,n=(r*=e)/l,o=4/3*Math.sin(n/2)/(1+Math.cos(n/2)),h=0;l>h;h++)i=t+h*n,a=Math.cos(i),s=Math.sin(i),g[f++]=a-o*s,g[f++]=s+o*a,i+=n,a=Math.cos(i),s=Math.sin(i),g[f++]=a+o*s,g[f++]=s-o*a,g[f++]=a,g[f++]=s;return g},p=function(r,n,o,i,a,s,h,l,f){if(r!==l||n!==f){o=Math.abs(o),i=Math.abs(i);var g=a%360*e,u=Math.cos(g),p=Math.sin(g),d=(r-l)/2,m=(n-f)/2,v=u*d+p*m,b=-p*d+u*m,M=o*o,C=i*i,S=v*v,y=b*b,A=S/M+y/C;A>1&&(o=Math.sqrt(A)*o,i=Math.sqrt(A)*i,M=o*o,C=i*i);var x=s===h?-1:1,w=(M*C-M*y-C*S)/(M*y+C*S);0>w&&(w=0);var N=x*Math.sqrt(w),_=N*(o*b/i),z=N*(-i*v/o),P=(r+l)/2+(u*_-p*z),T=(n+f)/2+(p*_+u*z),L=(v-_)/o,G=(b-z)/i,q=(-v-_)/o,I=(-b-z)/i,Y=Math.sqrt(L*L+G*G),B=L,V=(x=0>G?-1:1)*Math.acos(B/Y)*t;Y=Math.sqrt((L*L+G*G)*(q*q+I*I)),B=L*q+G*I;var X=(x=0>L*I-G*q?-1:1)*Math.acos(B/Y)*t;!h&&X>0?X-=360:h&&0>X&&(X+=360);var O,R,j,F=c(V%=360,X%=360),H=u*o,D=p*o,Q=p*-i,E=u*i,U=F.length-2;for(O=0;U>O;O+=2)R=F[O],j=F[O+1],F[O]=R*H+j*Q+P,F[O+1]=R*D+j*E+T;return F[F.length-2]=l,F[F.length-1]=f,F}},d=function(e){var t,n,o,i,s,h,l,f,g,c,d,m,v,b=(e+"").replace(a,function(e){var t=+e;return 1e-4>t&&t>-1e-4?0:t}).match(r)||[],M=[],C=0,S=0,y=b.length,A=2,x=0;if(!e||!isNaN(b[0])||isNaN(b[1]))return u("ERROR: malformed path data: "+e),M;for(t=0;y>t;t++)if(v=s,isNaN(b[t])?(s=b[t].toUpperCase(),h=s!==b[t]):t--,o=+b[t+1],i=+b[t+2],h&&(o+=C,i+=S),0===t&&(f=o,g=i),"M"===s)l&&l.length<8&&(M.length-=1,A=0),C=f=o,S=g=i,l=[o,i],x+=A,A=2,M.push(l),t+=2,s="L";else if("C"===s)l||(l=[0,0]),l[A++]=o,l[A++]=i,h||(C=S=0),l[A++]=C+1*b[t+3],l[A++]=S+1*b[t+4],l[A++]=C+=1*b[t+5],l[A++]=S+=1*b[t+6],t+=6;else if("S"===s)"C"===v||"S"===v?(c=C-l[A-4],d=S-l[A-3],l[A++]=C+c,l[A++]=S+d):(l[A++]=C,l[A++]=S),l[A++]=o,l[A++]=i,h||(C=S=0),l[A++]=C+=1*b[t+3],l[A++]=S+=1*b[t+4],t+=4;else if("Q"===s)c=o-C,d=i-S,l[A++]=C+2*c/3,l[A++]=S+2*d/3,h||(C=S=0),C+=1*b[t+3],S+=1*b[t+4],c=o-C,d=i-S,l[A++]=C+2*c/3,l[A++]=S+2*d/3,l[A++]=C,l[A++]=S,t+=4;else if("T"===s)c=C-l[A-4],d=S-l[A-3],l[A++]=C+c,l[A++]=S+d,c=C+1.5*c-o,d=S+1.5*d-i,l[A++]=o+2*c/3,l[A++]=i+2*d/3,l[A++]=C=o,l[A++]=S=i,t+=2;else if("H"===s)i=S,l[A++]=C+(o-C)/3,l[A++]=S+(i-S)/3,l[A++]=C+2*(o-C)/3,l[A++]=S+2*(i-S)/3,l[A++]=C=o,l[A++]=i,t+=1;else if("V"===s)i=o,o=C,h&&(i+=S-C),l[A++]=o,l[A++]=S+(i-S)/3,l[A++]=o,l[A++]=S+2*(i-S)/3,l[A++]=o,l[A++]=S=i,t+=1;else if("L"===s||"Z"===s)"Z"===s&&(o=f,i=g,l.closed=!0),("L"===s||Math.abs(C-o)>.5||Math.abs(S-i)>.5)&&(l[A++]=C+(o-C)/3,l[A++]=S+(i-S)/3,l[A++]=C+2*(o-C)/3,l[A++]=S+2*(i-S)/3,l[A++]=o,l[A++]=i,"L"===s&&(t+=2)),C=o,S=i;else if("A"===s){if(m=p(C,S,1*b[t+1],1*b[t+2],1*b[t+3],1*b[t+4],1*b[t+5],(h?C:0)+1*b[t+6],(h?S:0)+1*b[t+7]))for(n=0;n<m.length;n++)l[A++]=m[n];C=l[A-2],S=l[A-1],t+=7}else u("Error: malformed path data: "+e);return M.totalPoints=x+A,M},m=function(e,t){var r,n,o,i,a,s,h,l,f,g,u,c,p,d,m=0,v=e.length,b=t/((v-2)/6);for(p=2;v>p;p+=6)for(m+=b;m>.999999;)r=e[p-2],n=e[p-1],o=e[p],i=e[p+1],a=e[p+2],s=e[p+3],h=e[p+4],l=e[p+5],d=1/(Math.floor(m)+1),f=r+(o-r)*d,u=o+(a-o)*d,f+=(u-f)*d,u+=(a+(h-a)*d-u)*d,g=n+(i-n)*d,c=i+(s-i)*d,g+=(c-g)*d,c+=(s+(l-s)*d-c)*d,e.splice(p,4,r+(o-r)*d,n+(i-n)*d,f,g,f+(u-f)*d,g+(c-g)*d,u,c,a+(h-a)*d,s+(l-s)*d),p+=6,v+=6,m--;return e},v=function(e){var t,r,n,o,i="",a=e.length,s=100;for(r=0;a>r;r++){for(i+="M"+(o=e[r])[0]+","+o[1]+" C",t=o.length,n=2;t>n;n++)i+=(o[n++]*s|0)/s+","+(o[n++]*s|0)/s+" "+(o[n++]*s|0)/s+","+(o[n++]*s|0)/s+" "+(o[n++]*s|0)/s+","+(o[n]*s|0)/s+" ";o.closed&&(i+="z")}return i},b=function(e){for(var t=[],r=e.length-1,n=0;--r>-1;)t[n++]=e[r],t[n++]=e[r+1],r--;for(r=0;n>r;r++)e[r]=t[r];e.reversed=!e.reversed},M=function(e){var t,r=e.length,n=0,o=0;for(t=0;r>t;t++)n+=e[t++],o+=e[t];return[n/(r/2),o/(r/2)]},C=function(e){var t,r,n,o=e.length,i=e[0],a=i,s=e[1],h=s;for(n=6;o>n;n+=6)t=e[n],r=e[n+1],t>i?i=t:a>t&&(a=t),r>s?s=r:h>r&&(h=r);return e.centerX=(i+a)/2,e.centerY=(s+h)/2,e.size=(i-a)*(s-h)},S=function(e){for(var t,r,n,o,i,a=e.length,s=e[0][0],h=s,l=e[0][1],f=l;--a>-1;)for(i=e[a],t=i.length,o=6;t>o;o+=6)r=i[o],n=i[o+1],r>s?s=r:h>r&&(h=r),n>l?l=n:f>n&&(f=n);return e.centerX=(s+h)/2,e.centerY=(l+f)/2,e.size=(s-h)*(l-f)},y=function(e,t){return t.length-e.length},A=function(e,t){var r=e.size||C(e),n=t.size||C(t);return Math.abs(n-r)<(r+n)/20?t.centerX-e.centerX||t.centerY-e.centerY:n-r},x=function(e,t){var r,n,o=e.slice(0),i=e.length,a=i-2;for(t|=0,r=0;i>r;r++)n=(r+t)%a,e[r++]=o[n],e[r]=o[n+1]},w=function(e,t,r,n,o){var i,a,s,h,l=e.length,f=0,g=l-2;for(r*=6,a=0;l>a;a+=6)i=(a+r)%g,h=e[i]-(t[a]-n),s=e[i+1]-(t[a+1]-o),f+=Math.sqrt(s*s+h*h);return f},N=function(e,t,r){var n,o,i,a=e.length,s=M(e),h=M(t),l=h[0]-s[0],f=h[1]-s[1],g=w(e,t,0,l,f),u=0;for(i=6;a>i;i+=6)o=w(e,t,i/6,l,f),g>o&&(g=o,u=i);if(r)for(n=e.slice(0),b(n),i=6;a>i;i+=6)o=w(n,t,i/6,l,f),g>o&&(g=o,u=-i);return u/6},_=function(e,t,r){for(var n,o,i,a,s,h,l=e.length,f=99999999999,g=0,u=0;--l>-1;)for(n=e[l],h=n.length,s=0;h>s;s+=6)o=n[s]-t,i=n[s+1]-r,a=Math.sqrt(o*o+i*i),f>a&&(f=a,g=n[s],u=n[s+1]);return[g,u]},z=function(e,t,r,n,o,i){var a,s,h,l,f,g=t.length,u=0,c=Math.min(e.size||C(e),t[r].size||C(t[r]))*n,p=999999999999,d=e.centerX+o,m=e.centerY+i;for(s=r;g>s&&(a=t[s].size||C(t[s]),c<=a);s++)h=t[s].centerX-d,l=t[s].centerY-m,f=Math.sqrt(h*h+l*l),p>f&&(u=s,p=f);return f=t[u],t.splice(u,1),f},P=function(e,t,r,n){var o,i,a,s,h,l,f,g=t.length-e.length,c=g>0?t:e,p=g>0?e:t,d=0,v="complexity"===n?y:A,M="position"===n?0:"number"==typeof n?n:.8,w=p.length,P="object"==typeof r&&r.push?r.slice(0):[r],T="reverse"===P[0]||P[0]<0,L="log"===r;if(p[0]){if(c.length>1&&(e.sort(v),t.sort(v),l=c.size||S(c),l=p.size||S(p),l=c.centerX-p.centerX,f=c.centerY-p.centerY,v===A))for(w=0;w<p.length;w++)c.splice(w,0,z(p[w],c,w,M,l,f));if(g)for(0>g&&(g=-g),c[0].length>p[0].length&&m(p[0],(c[0].length-p[0].length)/6|0),w=p.length;g>d;)s=c[w].size||C(c[w]),a=_(p,c[w].centerX,c[w].centerY),s=a[0],h=a[1],p[w++]=[s,h,s,h,s,h,s,h],p.totalPoints+=8,d++;for(w=0;w<e.length;w++)o=t[w],i=e[w],0>(g=o.length-i.length)?m(o,-g/6|0):g>0&&m(i,g/6|0),T&&!i.reversed&&b(i),(r=P[w]||0===P[w]?P[w]:"auto")&&(i.closed||Math.abs(i[0]-i[i.length-2])<.5&&Math.abs(i[1]-i[i.length-1])<.5?"auto"===r||"log"===r?(P[w]=r=N(i,o,0===w),0>r&&(T=!0,b(i),r=-r),x(i,6*r)):"reverse"!==r&&(w&&0>r&&b(i),x(i,6*(0>r?-r:r))):!T&&("auto"===r&&Math.abs(o[0]-i[0])+Math.abs(o[1]-i[1])+Math.abs(o[o.length-2]-i[i.length-2])+Math.abs(o[o.length-1]-i[i.length-1])>Math.abs(o[0]-i[i.length-2])+Math.abs(o[1]-i[i.length-1])+Math.abs(o[o.length-2]-i[0])+Math.abs(o[o.length-1]-i[1])||r%2)?(b(i),P[w]=-1,T=!0):"auto"===r?P[w]=0:"reverse"===r&&(P[w]=-1),i.closed!==o.closed&&(i.closed=o.closed=!1));return L&&u("shapeIndex:["+P.join(",")+"]"),P}},T=function(e,t,r,n){var o=d(e[0]),i=d(e[1]);P(o,i,t||0===t?t:"auto",r)&&(e[0]=v(o),e[1]=v(i),("log"===n||!0===n)&&u('precompile:["'+e[0]+'","'+e[1]+'"]'))},L=function(e,t,r){return t||r||e||0===e?function(n){T(n,e,t,r)}:T},G=function(e,t){if(!t)return e;var r,o,i,a=e.match(n)||[],s=a.length,h="";for("reverse"===t?(o=s-1,r=-2):(o=(2*(parseInt(t,10)||0)+1+100*s)%s,r=2),i=0;s>i;i+=2)h+=a[o-1]+","+a[o]+" ",o=(o+r)%s;return h},q=function(e,t){var r,n,o,i,a,s,h,l=0,f=parseFloat(e[0]),g=parseFloat(e[1]),u=f+","+g+" ",c=.999999;for(r=.5*t/(.5*(o=e.length)-1),n=0;o-2>n;n+=2){if(l+=r,s=parseFloat(e[n+2]),h=parseFloat(e[n+3]),l>c)for(a=1/(Math.floor(l)+1),i=1;l>c;)u+=(f+(s-f)*a*i).toFixed(2)+","+(g+(h-g)*a*i).toFixed(2)+" ",l--,i++;u+=s+","+h+" ",f=s,g=h}return u},I=function(e){var t=e[0].match(n)||[],r=e[1].match(n)||[],o=r.length-t.length;o>0?e[0]=q(t,o):e[1]=q(r,-o)},Y=function(e){return isNaN(e)?I:function(t){I(t),t[1]=G(t[1],parseInt(e,10))}},B=function(e,t){var r,n=_gsScope.document.createElementNS("http://www.w3.org/2000/svg","path"),o=Array.prototype.slice.call(e.attributes),i=o.length;for(t=","+t+",";--i>-1;)r=o[i].nodeName.toLowerCase(),-1===t.indexOf(","+r+",")&&n.setAttributeNS(null,r,o[i].nodeValue);return n},V=function(e,t){var r,o,i,a,s,h,l,f,g,u,c,p,d,m,v,b,M,C,S,y,A,x=e.tagName.toLowerCase(),w=.552284749831;return"path"!==x&&e.getBBox?(h=B(e,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),"rect"===x?(a=+e.getAttribute("rx")||0,s=+e.getAttribute("ry")||0,o=+e.getAttribute("x")||0,i=+e.getAttribute("y")||0,u=(+e.getAttribute("width")||0)-2*a,c=(+e.getAttribute("height")||0)-2*s,a||s?(p=o+a*(1-w),d=o+a,m=d+u,v=m+a*w,b=m+a,M=i+s*(1-w),C=i+s,S=C+c,y=S+s*w,A=S+s,r="M"+b+","+C+" V"+S+" C"+[b,y,v,A,m,A,m-(m-d)/3,A,d+(m-d)/3,A,d,A,p,A,o,y,o,S,o,S-(S-C)/3,o,C+(S-C)/3,o,C,o,M,p,i,d,i,d+(m-d)/3,i,m-(m-d)/3,i,m,i,v,i,b,M,b,C].join(",")+"z"):r="M"+(o+u)+","+i+" v"+c+" h"+-u+" v"+-c+" h"+u+"z"):"circle"===x||"ellipse"===x?("circle"===x?(a=s=+e.getAttribute("r")||0,f=a*w):(a=+e.getAttribute("rx")||0,s=+e.getAttribute("ry")||0,f=s*w),o=+e.getAttribute("cx")||0,i=+e.getAttribute("cy")||0,l=a*w,r="M"+(o+a)+","+i+" C"+[o+a,i+f,o+l,i+s,o,i+s,o-l,i+s,o-a,i+f,o-a,i,o-a,i-f,o-l,i-s,o,i-s,o+l,i-s,o+a,i-f,o+a,i].join(",")+"z"):"line"===x?r="M"+(e.getAttribute("x1")||0)+","+(e.getAttribute("y1")||0)+" L"+(e.getAttribute("x2")||0)+","+(e.getAttribute("y2")||0):("polyline"===x||"polygon"===x)&&(g=(e.getAttribute("points")+"").match(n)||[],o=g.shift(),i=g.shift(),r="M"+o+","+i+" L"+g.join(","),"polygon"===x&&(r+=","+o+","+i+"z")),h.setAttribute("d",r),t&&e.parentNode&&(e.parentNode.insertBefore(h,e),e.parentNode.removeChild(e)),h):e},X=function(e,t,r){var i,a,h="string"==typeof e;return(!h||o.test(e)||(e.match(n)||[]).length<3)&&((i=h?s.selector(e):e&&e[0]?e:[e])&&i[0]?(i=i[0],a=i.nodeName.toUpperCase(),t&&"PATH"!==a&&(i=V(i,!1),a="PATH"),e=i.getAttribute("PATH"===a?"d":"points")||"",i===r&&(e=i.getAttributeNS(null,"data-original")||e)):(u("WARNING: invalid morph to: "+e),e=!1)),e},O="Use MorphSVGPlugin.convertToPath(elementOrSelectorText) to convert to a path before morphing.",R=_gsScope._gsDefine.plugin({propName:"morphSVG",API:2,global:!0,version:"0.8.10",init:function(e,t,r,n){var o,a,s,c,p;return"function"==typeof e.setAttribute&&(g?("function"==typeof t&&(t=t(n,e)),o=e.nodeName.toUpperCase(),p="POLYLINE"===o||"POLYGON"===o,"PATH"===o||p?(a="PATH"===o?"d":"points",("string"==typeof t||t.getBBox||t[0])&&(t={shape:t}),c=X(t.shape||t.d||t.points||"","d"===a,e),p&&i.test(c)?(u("WARNING: a <"+o+"> cannot accept path data. "+O),!1):(c&&(this._target=e,e.getAttributeNS(null,"data-original")||e.setAttributeNS(null,"data-original",e.getAttribute(a)),(s=this._addTween(e,"setAttribute",e.getAttribute(a)+"",c+"","morphSVG",!1,a,"object"==typeof t.precompile?function(e){e[0]=t.precompile[0],e[1]=t.precompile[1]}:"d"===a?L(t.shapeIndex,t.map||R.defaultMap,t.precompile):Y(t.shapeIndex)))&&(this._overwriteProps.push("morphSVG"),s.end=c,s.endProp=a)),g)):(u("WARNING: cannot morph a <"+o+"> SVG element. "+O),!1)):(window.location.href="http://"+l+f+"?plugin="+h+"&source=codepen",!1))},set:function(e){var t;if(this._super.setRatio.call(this,e),1===e)for(t=this._firstPT;t;)t.end&&this._target.setAttribute(t.endProp,t.end),t=t._next}});R.pathFilter=T,R.pointsFilter=I,R.subdivideRawBezier=m,R.defaultMap="size",R.pathDataToRawBezier=function(e){return d(X(e,!0))},R.equalizeSegmentQuantity=P,R.convertToPath=function(e,t){"string"==typeof e&&(e=s.selector(e));for(var r=e&&0!==e.length?e.length&&e[0]&&e[0].nodeType?Array.prototype.slice.call(e,0):[e]:[],n=r.length;--n>-1;)r[n]=V(r[n],!1!==t);return r},R.pathDataToBezier=function(e,t){var r,n,o,i,a,h,l,f,g=d(X(e,!0))[0]||[],u=0;if(t=t||{},f=t.align||t.relative,i=t.matrix||[1,0,0,1,0,0],a=t.offsetX||0,h=t.offsetY||0,"relative"===f||!0===f?(a-=g[0]*i[0]+g[1]*i[2],h-=g[0]*i[1]+g[1]*i[3],u="+="):(a+=i[4],h+=i[5],f&&(f="string"==typeof f?s.selector(f):f&&f[0]?f:[f])&&f[0]&&(l=f[0].getBBox()||{x:0,y:0},a-=l.x,h-=l.y)),r=[],o=g.length,i&&"1,0,0,1,0,0"!==i.join(","))for(n=0;o>n;n+=2)r.push({x:u+(g[n]*i[0]+g[n+1]*i[2]+a),y:u+(g[n]*i[1]+g[n+1]*i[3]+h)});else for(n=0;o>n;n+=2)r.push({x:u+(g[n]+a),y:u+(g[n+1]+h)});return r}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(e){"use strict";var t=function(){return(_gsScope.GreenSockGlobals||_gsScope).MorphSVGPlugin};"function"==typeof define&&define.amd?define(["TweenLite"],t):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=t())}();