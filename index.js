function e(e){let a;function A(){let e=new Image;e.onload=(()=>{let a=e.width+e.height;if(128==a||96==a){pre.innerText="";let a=canvas.getContext("2d");a.drawImage(e,8,8,8,8,0,0,8,8),a.drawImage(e,40,8,8,8,0,0,8,8),r();let A=new Image;A.src=canvas.toDataURL(),A.onload=(()=>document.querySelector('link[type="image/x-icon"]').href=t(A))}else alert("invalid minecraft skin, this website only supports 64px skins.")}),e.src=a.result}e.target&&"INPUT"==e.target.tagName?((a=new FileReader).readAsDataURL(e.target.files[0]),a.onload=A):(a={result:e},A())}function t(e){var t=document.createElement("canvas");t.width=e.width,t.height=e.height;var a=t.getContext("2d");a.drawImage(e,0,0);var A=a.getImageData(0,0,e.width,e.height).data,n=4*e.width,r=4*e.height,i=document.createElement("canvas");i.width=n,i.height=r;for(var g=i.getContext("2d"),o=g.createImageData(n,r),c=o.data,w=0,s=0,d=0;d<e.height;++d)for(var h=0;h<4;++h)for(var l=0;l<e.width;++l){w=4*(d*e.width+l);for(var p=0;p<4;++p){var f=w;c[s++]=A[f++],c[s++]=A[f++],c[s++]=A[f++],c[s++]=A[f++]}}return g.putImageData(o,0,0),i.toDataURL()}["canvas","input","pre"].forEach(e=>{window[e]=document.querySelector([e])}),input.value?e({target:input}):e("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFDUlEQVR42u2a20sUURzH97G0LKMotPuWbVpslj1olJXdjCgyisowsSjzgrB0gSKyC5UF1ZNQWEEQSBQ9dHsIe+zJ/+nXfM/sb/rN4ZwZ96LOrnPgyxzP/M7Z+X7OZc96JpEISfWrFhK0YcU8knlozeJKunE4HahEqSc2nF6zSEkCgGCyb+82enyqybtCZQWAzdfVVFgBJJNJn1BWFgC49/VpwGVlD0CaxQiA5HSYEwBM5sMAdKTqygcAG9+8coHKY/XXAZhUNgDYuBSPjJL/GkzVVhAEU5tqK5XZ7cnFtHWtq/TahdSw2l0HUisr1UKIWJQBAMehDuqiDdzndsP2EZECAG1ZXaWMwOCODdXqysLf++uXUGv9MhUHIByDOijjdiSAoH3ErANQD73C7TXXuGOsFj1d4YH4OTJAEy8y9Hd0mCaeZ5z8dfp88zw1bVyiYhCLOg1ZeAqC0ybaDttHRGME1DhDeVWV26u17lRAPr2+mj7dvULfHw2q65fhQRrLXKDfIxkau3ZMCTGIRR3URR5toU38HbaPiMwUcKfBAkoun09PzrbQ2KWD1JJaqswjdeweoR93rirzyCMBCmIQizqoizZkm2H7iOgAcHrMHbbV9KijkUYv7qOn55sdc4fo250e+vUg4329/Xk6QB/6DtOws+dHDGJRB3XRBve+XARt+4hIrAF4UAzbnrY0ve07QW8uHfB+0LzqanMM7qVb+3f69LJrD90/1axiEIs6qIs21BTIToewfcSsA+Bfb2x67OoR1aPPzu2i60fSNHRwCw221Suz0O3jO+jh6V1KyCMGse9721XdN5ePutdsewxS30cwuMjtC860T5JUKpXyKbSByUn7psi5l+juDlZYGh9324GcPKbkycaN3jUSAGxb46IAYPNZzW0AzgiQ5tVnzLUpUDCAbakMQXXrOtX1UMtHn+Q9/X5L4wgl7t37r85OSrx+TYl379SCia9KXjxRpiTjIZTBFOvrV1f8ty2eY/T7XJ81FQAwmA8ASH1ob68r5PnBsxA88/xAMh6SpqW4HRnLBrkOA9Xv5wPAZjAUgOkB+SHxgBgR0qSMh0zmZRsmwDJm1gFg2PMDIC8/nAHIMls8x8GgzOsG5WiaqREgYzDvpTwjLDy8NM15LpexDEA3LepjU8Z64my+8PtDCmUyRr+fFwA2J0eAFYA0AxgSgMmYBMZTwFQnO9RNAEaHOj2DXF5UADmvAToA2ftyxZYA5BqgmZZApDkdAK4mAKo8GzPlr8G8AehzMAyA/i1girUA0HtYB2CaIkUBEHQ/cBHSvwF0AKZFS5M0ZwMQtEaEAmhtbSUoDADH9ff3++QZ4o0I957e+zYAMt6wHkhzpjkuAcgpwNcpA7AZDLsvpwiuOkBvxygA6Bsvb0HlaeKIF2EbADZpGiGzBsA0gnwQHGOhW2snRpbpPexbAB2Z1oicAMQpTnGKU5ziFKc4xSlOcYpTnOIUpzgVmgo+XC324WfJAdDO/+ceADkCpuMFiFKbApEHkOv7BfzfXt+5gpT8V7rpfYJcDz+jAsB233r6yyBsJ0mlBCDofuBJkel4vOwBFPv8fyYAFPJ+wbSf/88UANNRVy4Awo6+Ig2gkCmgA5DHWjoA+X7AlM//owLANkX0w0359od++pvX8fdMAcj3/QJ9iJsAFPQCxHSnQt8vMJ3v2wCYpkhkAOR7vG7q4aCXoMoSgG8hFAuc/grMdAD4B/kHl9da7Ne9AAAAAElFTkSuQmCC"),input.onchange=e;const a=[{e:"🟥",c:[221,46,68]},{e:"🟧",c:[244,144,12]},{e:"🟨",c:[253,203,88]},{e:"🟩",c:[120,177,89]},{e:"🟦",c:[85,172,238]},{e:"🟪",c:[170,142,214]},{e:"🟫",c:[193,105,79]},{e:"⬛",c:[49,55,61]},{e:"⬜",c:[230,231,232]}];function A(e,t){let a=0;return e.forEach((e,A)=>{a+=Math.pow(e-t[A],2)}),Math.sqrt(a)}function n(e,t){let a=canvas.getContext("2d").getImageData(e,t,1,1).data;return[a[0],a[1],a[2]]}function r(){for(let e=0;e<8;e++){for(let t=0;t<8;t++){let r=999,i=0;a.forEach((a,g)=>{let o=A(a.c,n(t,e));r>o&&(r=o,i=g)}),pre.innerText+=a[i].e}pre.innerText+="\n"}pre.innerText+="\n",twemoji&&(twemoji.parse(pre),pre.style.lineHeight=0)}