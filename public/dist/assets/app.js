/* empty css    *//**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tl="179",Id=0,Cc=1,Dd=2,Jh=1,Nd=2,ti=3,oi=0,sn=1,Un=2,yi=0,ps=1,Pc=2,Lc=3,Ic=4,Ud=5,Bi=100,Od=101,Fd=102,Bd=103,zd=104,kd=200,Hd=201,Vd=202,Gd=203,Da=204,Na=205,Wd=206,Xd=207,Zd=208,qd=209,Yd=210,Kd=211,jd=212,$d=213,Jd=214,Ua=0,Oa=1,Fa=2,vs=3,Ba=4,za=5,ka=6,Ha=7,Qh=0,Qd=1,tf=2,Mi=0,ef=1,nf=2,sf=3,rf=4,of=5,af=6,lf=7,Dc="attached",cf="detached",tu=300,xs=301,ys=302,Va=303,Ga=304,vo=306,Ms=1e3,xi=1001,fo=1002,Je=1003,eu=1004,Qs=1005,hn=1006,ro=1007,ni=1008,Bn=1009,nu=1010,iu=1011,rr=1012,El=1013,Vi=1014,An=1015,dr=1016,bl=1017,wl=1018,or=1020,su=35902,ru=1021,ou=1022,vn=1023,ar=1026,lr=1027,Al=1028,Rl=1029,au=1030,Cl=1031,Pl=1033,oo=33776,ao=33777,lo=33778,co=33779,Wa=35840,Xa=35841,Za=35842,qa=35843,Ya=36196,Ka=37492,ja=37496,$a=37808,Ja=37809,Qa=37810,tl=37811,el=37812,nl=37813,il=37814,sl=37815,rl=37816,ol=37817,al=37818,ll=37819,cl=37820,hl=37821,ho=36492,ul=36494,dl=36495,lu=36283,fl=36284,pl=36285,ml=36286,cr=2300,hr=2301,Yo=2302,Nc=2400,Uc=2401,Oc=2402,hf=2500,uf=0,cu=1,_l=2,df=3200,ff=3201,hu=0,pf=1,vi="",Xe="srgb",tn="srgb-linear",po="linear",Re="srgb",$i=7680,Fc=519,mf=512,_f=513,gf=514,uu=515,vf=516,xf=517,yf=518,Mf=519,gl=35044,Bc="300 es",On=2e3,mo=2001;class As{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let a=0,l=s.length;a<l;a++)s[a].call(this,t);t.target=null}}}const Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zc=1234567;const nr=Math.PI/180,Ss=180/Math.PI;function Rn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ze[r&255]+Ze[r>>8&255]+Ze[r>>16&255]+Ze[r>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]).toLowerCase()}function le(r,t,e){return Math.max(t,Math.min(e,r))}function Ll(r,t){return(r%t+t)%t}function Sf(r,t,e,i,s){return i+(r-t)*(s-i)/(e-t)}function Tf(r,t,e){return r!==t?(e-r)/(t-r):0}function ir(r,t,e){return(1-e)*r+e*t}function Ef(r,t,e,i){return ir(r,t,1-Math.exp(-e*i))}function bf(r,t=1){return t-Math.abs(Ll(r,t*2)-t)}function wf(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Af(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Rf(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Cf(r,t){return r+Math.random()*(t-r)}function Pf(r){return r*(.5-Math.random())}function Lf(r){r!==void 0&&(zc=r);let t=zc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function If(r){return r*nr}function Df(r){return r*Ss}function Nf(r){return(r&r-1)===0&&r!==0}function Uf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Of(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ff(r,t,e,i,s){const a=Math.cos,l=Math.sin,h=a(e/2),u=l(e/2),d=a((t+i)/2),m=l((t+i)/2),p=a((t-i)/2),_=l((t-i)/2),x=a((i-t)/2),M=l((i-t)/2);switch(s){case"XYX":r.set(h*m,u*p,u*_,h*d);break;case"YZY":r.set(u*_,h*m,u*p,h*d);break;case"ZXZ":r.set(u*p,u*_,h*m,h*d);break;case"XZX":r.set(h*m,u*M,u*x,h*d);break;case"YXY":r.set(u*x,h*m,u*M,h*d);break;case"ZYZ":r.set(u*M,u*x,h*m,h*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Te(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Bf={DEG2RAD:nr,RAD2DEG:Ss,generateUUID:Rn,clamp:le,euclideanModulo:Ll,mapLinear:Sf,inverseLerp:Tf,lerp:ir,damp:Ef,pingpong:bf,smoothstep:wf,smootherstep:Af,randInt:Rf,randFloat:Cf,randFloatSpread:Pf,seededRandom:Lf,degToRad:If,radToDeg:Df,isPowerOfTwo:Nf,ceilPowerOfTwo:Uf,floorPowerOfTwo:Of,setQuaternionFromProperEuler:Ff,normalize:Te,denormalize:bn};class fe{constructor(t=0,e=0){fe.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(le(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),a=this.x-t.x,l=this.y-t.y;return this.x=a*i-l*s+t.x,this.y=a*s+l*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ti{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,a,l,h){let u=i[s+0],d=i[s+1],m=i[s+2],p=i[s+3];const _=a[l+0],x=a[l+1],M=a[l+2],S=a[l+3];if(h===0){t[e+0]=u,t[e+1]=d,t[e+2]=m,t[e+3]=p;return}if(h===1){t[e+0]=_,t[e+1]=x,t[e+2]=M,t[e+3]=S;return}if(p!==S||u!==_||d!==x||m!==M){let y=1-h;const g=u*_+d*x+m*M+p*S,I=g>=0?1:-1,C=1-g*g;if(C>Number.EPSILON){const O=Math.sqrt(C),F=Math.atan2(O,g*I);y=Math.sin(y*F)/O,h=Math.sin(h*F)/O}const w=h*I;if(u=u*y+_*w,d=d*y+x*w,m=m*y+M*w,p=p*y+S*w,y===1-h){const O=1/Math.sqrt(u*u+d*d+m*m+p*p);u*=O,d*=O,m*=O,p*=O}}t[e]=u,t[e+1]=d,t[e+2]=m,t[e+3]=p}static multiplyQuaternionsFlat(t,e,i,s,a,l){const h=i[s],u=i[s+1],d=i[s+2],m=i[s+3],p=a[l],_=a[l+1],x=a[l+2],M=a[l+3];return t[e]=h*M+m*p+u*x-d*_,t[e+1]=u*M+m*_+d*p-h*x,t[e+2]=d*M+m*x+h*_-u*p,t[e+3]=m*M-h*p-u*_-d*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,a=t._z,l=t._order,h=Math.cos,u=Math.sin,d=h(i/2),m=h(s/2),p=h(a/2),_=u(i/2),x=u(s/2),M=u(a/2);switch(l){case"XYZ":this._x=_*m*p+d*x*M,this._y=d*x*p-_*m*M,this._z=d*m*M+_*x*p,this._w=d*m*p-_*x*M;break;case"YXZ":this._x=_*m*p+d*x*M,this._y=d*x*p-_*m*M,this._z=d*m*M-_*x*p,this._w=d*m*p+_*x*M;break;case"ZXY":this._x=_*m*p-d*x*M,this._y=d*x*p+_*m*M,this._z=d*m*M+_*x*p,this._w=d*m*p-_*x*M;break;case"ZYX":this._x=_*m*p-d*x*M,this._y=d*x*p+_*m*M,this._z=d*m*M-_*x*p,this._w=d*m*p+_*x*M;break;case"YZX":this._x=_*m*p+d*x*M,this._y=d*x*p+_*m*M,this._z=d*m*M-_*x*p,this._w=d*m*p-_*x*M;break;case"XZY":this._x=_*m*p-d*x*M,this._y=d*x*p-_*m*M,this._z=d*m*M+_*x*p,this._w=d*m*p+_*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],a=e[8],l=e[1],h=e[5],u=e[9],d=e[2],m=e[6],p=e[10],_=i+h+p;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(m-u)*x,this._y=(a-d)*x,this._z=(l-s)*x}else if(i>h&&i>p){const x=2*Math.sqrt(1+i-h-p);this._w=(m-u)/x,this._x=.25*x,this._y=(s+l)/x,this._z=(a+d)/x}else if(h>p){const x=2*Math.sqrt(1+h-i-p);this._w=(a-d)/x,this._x=(s+l)/x,this._y=.25*x,this._z=(u+m)/x}else{const x=2*Math.sqrt(1+p-i-h);this._w=(l-s)/x,this._x=(a+d)/x,this._y=(u+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,a=t._z,l=t._w,h=e._x,u=e._y,d=e._z,m=e._w;return this._x=i*m+l*h+s*d-a*u,this._y=s*m+l*u+a*h-i*d,this._z=a*m+l*d+i*u-s*h,this._w=l*m-i*h-s*u-a*d,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,a=this._z,l=this._w;let h=l*t._w+i*t._x+s*t._y+a*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=l,this._x=i,this._y=s,this._z=a,this;const u=1-h*h;if(u<=Number.EPSILON){const x=1-e;return this._w=x*l+e*this._w,this._x=x*i+e*this._x,this._y=x*s+e*this._y,this._z=x*a+e*this._z,this.normalize(),this}const d=Math.sqrt(u),m=Math.atan2(d,h),p=Math.sin((1-e)*m)/d,_=Math.sin(e*m)/d;return this._w=l*p+this._w*_,this._x=i*p+this._x*_,this._y=s*p+this._y*_,this._z=a*p+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,e=0,i=0){V.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*s,this.y=a[1]*e+a[4]*i+a[7]*s,this.z=a[2]*e+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,a=t.elements,l=1/(a[3]*e+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*s+a[12])*l,this.y=(a[1]*e+a[5]*i+a[9]*s+a[13])*l,this.z=(a[2]*e+a[6]*i+a[10]*s+a[14])*l,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,a=t.x,l=t.y,h=t.z,u=t.w,d=2*(l*s-h*i),m=2*(h*e-a*s),p=2*(a*i-l*e);return this.x=e+u*d+l*p-h*m,this.y=i+u*m+h*d-a*p,this.z=s+u*p+a*m-l*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s,this.y=a[1]*e+a[5]*i+a[9]*s,this.z=a[2]*e+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(le(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,a=t.z,l=e.x,h=e.y,u=e.z;return this.x=s*u-a*h,this.y=a*l-i*u,this.z=i*h-s*l,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ko.copy(this).projectOnVector(t),this.sub(Ko)}reflect(t){return this.sub(Ko.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ko=new V,kc=new Ti;class ee{constructor(t,e,i,s,a,l,h,u,d){ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,l,h,u,d)}set(t,e,i,s,a,l,h,u,d){const m=this.elements;return m[0]=t,m[1]=s,m[2]=h,m[3]=e,m[4]=a,m[5]=u,m[6]=i,m[7]=l,m[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,a=this.elements,l=i[0],h=i[3],u=i[6],d=i[1],m=i[4],p=i[7],_=i[2],x=i[5],M=i[8],S=s[0],y=s[3],g=s[6],I=s[1],C=s[4],w=s[7],O=s[2],F=s[5],B=s[8];return a[0]=l*S+h*I+u*O,a[3]=l*y+h*C+u*F,a[6]=l*g+h*w+u*B,a[1]=d*S+m*I+p*O,a[4]=d*y+m*C+p*F,a[7]=d*g+m*w+p*B,a[2]=_*S+x*I+M*O,a[5]=_*y+x*C+M*F,a[8]=_*g+x*w+M*B,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],l=t[4],h=t[5],u=t[6],d=t[7],m=t[8];return e*l*m-e*h*d-i*a*m+i*h*u+s*a*d-s*l*u}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],l=t[4],h=t[5],u=t[6],d=t[7],m=t[8],p=m*l-h*d,_=h*u-m*a,x=d*a-l*u,M=e*p+i*_+s*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/M;return t[0]=p*S,t[1]=(s*d-m*i)*S,t[2]=(h*i-s*l)*S,t[3]=_*S,t[4]=(m*e-s*u)*S,t[5]=(s*a-h*e)*S,t[6]=x*S,t[7]=(i*u-d*e)*S,t[8]=(l*e-i*a)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,a,l,h){const u=Math.cos(a),d=Math.sin(a);return this.set(i*u,i*d,-i*(u*l+d*h)+l+t,-s*d,s*u,-s*(-d*l+u*h)+h+e,0,0,1),this}scale(t,e){return this.premultiply(jo.makeScale(t,e)),this}rotate(t){return this.premultiply(jo.makeRotation(-t)),this}translate(t,e){return this.premultiply(jo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const jo=new ee;function du(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ur(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function zf(){const r=ur("canvas");return r.style.display="block",r}const Hc={};function ms(r){r in Hc||(Hc[r]=!0,console.warn(r))}function kf(r,t,e){return new Promise(function(i,s){function a(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}const Vc=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gc=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hf(){const r={enabled:!0,workingColorSpace:tn,spaces:{},convert:function(s,a,l){return this.enabled===!1||a===l||!a||!l||(this.spaces[a].transfer===Re&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b)),this.spaces[a].primaries!==this.spaces[l].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Re&&(s.r=_s(s.r),s.g=_s(s.g),s.b=_s(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vi?po:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,l){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return ms("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return ms("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[tn]:{primaries:t,whitePoint:i,transfer:po,toXYZ:Vc,fromXYZ:Gc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:i,transfer:Re,toXYZ:Vc,fromXYZ:Gc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),r}const ge=Hf();function si(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function _s(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ji;class Vf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ji===void 0&&(Ji=ur("canvas")),Ji.width=t.width,Ji.height=t.height;const s=Ji.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ji}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ur("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let l=0;l<a.length;l++)a[l]=si(a[l]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(si(e[i]/255)*255):e[i]=si(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Gf=0;class Il{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Rn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let l=0,h=s.length;l<h;l++)s[l].isDataTexture?a.push($o(s[l].image)):a.push($o(s[l]))}else a=$o(s);i.url=a}return e||(t.images[this.uuid]=i),i}}function $o(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Vf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wf=0;const Jo=new V;class He extends As{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,i=xi,s=xi,a=hn,l=ni,h=vn,u=Bn,d=He.DEFAULT_ANISOTROPY,m=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=Rn(),this.name="",this.source=new Il(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=l,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=u,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jo).x}get height(){return this.source.getSize(Jo).y}get depth(){return this.source.getSize(Jo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ms:t.x=t.x-Math.floor(t.x);break;case xi:t.x=t.x<0?0:1;break;case fo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ms:t.y=t.y-Math.floor(t.y);break;case xi:t.y=t.y<0?0:1;break;case fo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=tu;He.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,i=0,s=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,a=this.w,l=t.elements;return this.x=l[0]*e+l[4]*i+l[8]*s+l[12]*a,this.y=l[1]*e+l[5]*i+l[9]*s+l[13]*a,this.z=l[2]*e+l[6]*i+l[10]*s+l[14]*a,this.w=l[3]*e+l[7]*i+l[11]*s+l[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,a;const u=t.elements,d=u[0],m=u[4],p=u[8],_=u[1],x=u[5],M=u[9],S=u[2],y=u[6],g=u[10];if(Math.abs(m-_)<.01&&Math.abs(p-S)<.01&&Math.abs(M-y)<.01){if(Math.abs(m+_)<.1&&Math.abs(p+S)<.1&&Math.abs(M+y)<.1&&Math.abs(d+x+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const C=(d+1)/2,w=(x+1)/2,O=(g+1)/2,F=(m+_)/4,B=(p+S)/4,W=(M+y)/4;return C>w&&C>O?C<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(C),s=F/i,a=B/i):w>O?w<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(w),i=F/s,a=W/s):O<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(O),i=B/a,s=W/a),this.set(i,s,a,e),this}let I=Math.sqrt((y-M)*(y-M)+(p-S)*(p-S)+(_-m)*(_-m));return Math.abs(I)<.001&&(I=1),this.x=(y-M)/I,this.y=(p-S)/I,this.z=(_-m)/I,this.w=Math.acos((d+x+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(le(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xf extends As{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);const s={width:t,height:e,depth:i.depth},a=new He(s);this.textures=[];const l=i.count;for(let h=0;h<l;h++)this.textures[h]=a.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Il(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends Xf{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class fu extends He{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zf extends He{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ai{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let l=0,h=a.count;l<h;l++)t.isMesh===!0?t.getVertexPosition(l,Sn):Sn.fromBufferAttribute(a,l),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ir.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ir.copy(i.boundingBox)),Ir.applyMatrix4(t.matrixWorld),this.union(Ir)}const s=t.children;for(let a=0,l=s.length;a<l;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),Dr.subVectors(this.max,Ws),Qi.subVectors(t.a,Ws),ts.subVectors(t.b,Ws),es.subVectors(t.c,Ws),ui.subVectors(ts,Qi),di.subVectors(es,ts),Ci.subVectors(Qi,es);let e=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Ci.z,Ci.y,ui.z,0,-ui.x,di.z,0,-di.x,Ci.z,0,-Ci.x,-ui.y,ui.x,0,-di.y,di.x,0,-Ci.y,Ci.x,0];return!Qo(e,Qi,ts,es,Dr)||(e=[1,0,0,0,1,0,0,0,1],!Qo(e,Qi,ts,es,Dr))?!1:(Nr.crossVectors(ui,di),e=[Nr.x,Nr.y,Nr.z],Qo(e,Qi,ts,es,Dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Yn=[new V,new V,new V,new V,new V,new V,new V,new V],Sn=new V,Ir=new ai,Qi=new V,ts=new V,es=new V,ui=new V,di=new V,Ci=new V,Ws=new V,Dr=new V,Nr=new V,Pi=new V;function Qo(r,t,e,i,s){for(let a=0,l=r.length-3;a<=l;a+=3){Pi.fromArray(r,a);const h=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),u=t.dot(Pi),d=e.dot(Pi),m=i.dot(Pi);if(Math.max(-Math.max(u,d,m),Math.min(u,d,m))>h)return!1}return!0}const qf=new ai,Xs=new V,ta=new V;class kn{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):qf.setFromPoints(t).getCenter(i);let s=0;for(let a=0,l=t.length;a<l;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xs.subVectors(t,this.center);const e=Xs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Xs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ta.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xs.copy(t.center).add(ta)),this.expandByPoint(Xs.copy(t.center).sub(ta))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Kn=new V,ea=new V,Ur=new V,fi=new V,na=new V,Or=new V,ia=new V;class xo{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ea.copy(t).add(e).multiplyScalar(.5),Ur.copy(e).sub(t).normalize(),fi.copy(this.origin).sub(ea);const a=t.distanceTo(e)*.5,l=-this.direction.dot(Ur),h=fi.dot(this.direction),u=-fi.dot(Ur),d=fi.lengthSq(),m=Math.abs(1-l*l);let p,_,x,M;if(m>0)if(p=l*u-h,_=l*h-u,M=a*m,p>=0)if(_>=-M)if(_<=M){const S=1/m;p*=S,_*=S,x=p*(p+l*_+2*h)+_*(l*p+_+2*u)+d}else _=a,p=Math.max(0,-(l*_+h)),x=-p*p+_*(_+2*u)+d;else _=-a,p=Math.max(0,-(l*_+h)),x=-p*p+_*(_+2*u)+d;else _<=-M?(p=Math.max(0,-(-l*a+h)),_=p>0?-a:Math.min(Math.max(-a,-u),a),x=-p*p+_*(_+2*u)+d):_<=M?(p=0,_=Math.min(Math.max(-a,-u),a),x=_*(_+2*u)+d):(p=Math.max(0,-(l*a+h)),_=p>0?a:Math.min(Math.max(-a,-u),a),x=-p*p+_*(_+2*u)+d);else _=l>0?-a:a,p=Math.max(0,-(l*_+h)),x=-p*p+_*(_+2*u)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(ea).addScaledVector(Ur,_),x}intersectSphere(t,e){Kn.subVectors(t.center,this.origin);const i=Kn.dot(this.direction),s=Kn.dot(Kn)-i*i,a=t.radius*t.radius;if(s>a)return null;const l=Math.sqrt(a-s),h=i-l,u=i+l;return u<0?null:h<0?this.at(u,e):this.at(h,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,a,l,h,u;const d=1/this.direction.x,m=1/this.direction.y,p=1/this.direction.z,_=this.origin;return d>=0?(i=(t.min.x-_.x)*d,s=(t.max.x-_.x)*d):(i=(t.max.x-_.x)*d,s=(t.min.x-_.x)*d),m>=0?(a=(t.min.y-_.y)*m,l=(t.max.y-_.y)*m):(a=(t.max.y-_.y)*m,l=(t.min.y-_.y)*m),i>l||a>s||((a>i||isNaN(i))&&(i=a),(l<s||isNaN(s))&&(s=l),p>=0?(h=(t.min.z-_.z)*p,u=(t.max.z-_.z)*p):(h=(t.max.z-_.z)*p,u=(t.min.z-_.z)*p),i>u||h>s)||((h>i||i!==i)&&(i=h),(u<s||s!==s)&&(s=u),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,i,s,a){na.subVectors(e,t),Or.subVectors(i,t),ia.crossVectors(na,Or);let l=this.direction.dot(ia),h;if(l>0){if(s)return null;h=1}else if(l<0)h=-1,l=-l;else return null;fi.subVectors(this.origin,t);const u=h*this.direction.dot(Or.crossVectors(fi,Or));if(u<0)return null;const d=h*this.direction.dot(na.cross(fi));if(d<0||u+d>l)return null;const m=-h*fi.dot(ia);return m<0?null:this.at(m/l,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,i,s,a,l,h,u,d,m,p,_,x,M,S,y){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,l,h,u,d,m,p,_,x,M,S,y)}set(t,e,i,s,a,l,h,u,d,m,p,_,x,M,S,y){const g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=a,g[5]=l,g[9]=h,g[13]=u,g[2]=d,g[6]=m,g[10]=p,g[14]=_,g[3]=x,g[7]=M,g[11]=S,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/ns.setFromMatrixColumn(t,0).length(),a=1/ns.setFromMatrixColumn(t,1).length(),l=1/ns.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*l,e[9]=i[9]*l,e[10]=i[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,a=t.z,l=Math.cos(i),h=Math.sin(i),u=Math.cos(s),d=Math.sin(s),m=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){const _=l*m,x=l*p,M=h*m,S=h*p;e[0]=u*m,e[4]=-u*p,e[8]=d,e[1]=x+M*d,e[5]=_-S*d,e[9]=-h*u,e[2]=S-_*d,e[6]=M+x*d,e[10]=l*u}else if(t.order==="YXZ"){const _=u*m,x=u*p,M=d*m,S=d*p;e[0]=_+S*h,e[4]=M*h-x,e[8]=l*d,e[1]=l*p,e[5]=l*m,e[9]=-h,e[2]=x*h-M,e[6]=S+_*h,e[10]=l*u}else if(t.order==="ZXY"){const _=u*m,x=u*p,M=d*m,S=d*p;e[0]=_-S*h,e[4]=-l*p,e[8]=M+x*h,e[1]=x+M*h,e[5]=l*m,e[9]=S-_*h,e[2]=-l*d,e[6]=h,e[10]=l*u}else if(t.order==="ZYX"){const _=l*m,x=l*p,M=h*m,S=h*p;e[0]=u*m,e[4]=M*d-x,e[8]=_*d+S,e[1]=u*p,e[5]=S*d+_,e[9]=x*d-M,e[2]=-d,e[6]=h*u,e[10]=l*u}else if(t.order==="YZX"){const _=l*u,x=l*d,M=h*u,S=h*d;e[0]=u*m,e[4]=S-_*p,e[8]=M*p+x,e[1]=p,e[5]=l*m,e[9]=-h*m,e[2]=-d*m,e[6]=x*p+M,e[10]=_-S*p}else if(t.order==="XZY"){const _=l*u,x=l*d,M=h*u,S=h*d;e[0]=u*m,e[4]=-p,e[8]=d*m,e[1]=_*p+S,e[5]=l*m,e[9]=x*p-M,e[2]=M*p-x,e[6]=h*m,e[10]=S*p+_}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yf,t,Kf)}lookAt(t,e,i){const s=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),pi.crossVectors(i,ln),pi.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),pi.crossVectors(i,ln)),pi.normalize(),Fr.crossVectors(ln,pi),s[0]=pi.x,s[4]=Fr.x,s[8]=ln.x,s[1]=pi.y,s[5]=Fr.y,s[9]=ln.y,s[2]=pi.z,s[6]=Fr.z,s[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,a=this.elements,l=i[0],h=i[4],u=i[8],d=i[12],m=i[1],p=i[5],_=i[9],x=i[13],M=i[2],S=i[6],y=i[10],g=i[14],I=i[3],C=i[7],w=i[11],O=i[15],F=s[0],B=s[4],W=s[8],R=s[12],A=s[1],N=s[5],tt=s[9],et=s[13],$=s[2],lt=s[6],J=s[10],pt=s[14],G=s[3],xt=s[7],it=s[11],vt=s[15];return a[0]=l*F+h*A+u*$+d*G,a[4]=l*B+h*N+u*lt+d*xt,a[8]=l*W+h*tt+u*J+d*it,a[12]=l*R+h*et+u*pt+d*vt,a[1]=m*F+p*A+_*$+x*G,a[5]=m*B+p*N+_*lt+x*xt,a[9]=m*W+p*tt+_*J+x*it,a[13]=m*R+p*et+_*pt+x*vt,a[2]=M*F+S*A+y*$+g*G,a[6]=M*B+S*N+y*lt+g*xt,a[10]=M*W+S*tt+y*J+g*it,a[14]=M*R+S*et+y*pt+g*vt,a[3]=I*F+C*A+w*$+O*G,a[7]=I*B+C*N+w*lt+O*xt,a[11]=I*W+C*tt+w*J+O*it,a[15]=I*R+C*et+w*pt+O*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],a=t[12],l=t[1],h=t[5],u=t[9],d=t[13],m=t[2],p=t[6],_=t[10],x=t[14],M=t[3],S=t[7],y=t[11],g=t[15];return M*(+a*u*p-s*d*p-a*h*_+i*d*_+s*h*x-i*u*x)+S*(+e*u*x-e*d*_+a*l*_-s*l*x+s*d*m-a*u*m)+y*(+e*d*p-e*h*x-a*l*p+i*l*x+a*h*m-i*d*m)+g*(-s*h*m-e*u*p+e*h*_+s*l*p-i*l*_+i*u*m)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],l=t[4],h=t[5],u=t[6],d=t[7],m=t[8],p=t[9],_=t[10],x=t[11],M=t[12],S=t[13],y=t[14],g=t[15],I=p*y*d-S*_*d+S*u*x-h*y*x-p*u*g+h*_*g,C=M*_*d-m*y*d-M*u*x+l*y*x+m*u*g-l*_*g,w=m*S*d-M*p*d+M*h*x-l*S*x-m*h*g+l*p*g,O=M*p*u-m*S*u-M*h*_+l*S*_+m*h*y-l*p*y,F=e*I+i*C+s*w+a*O;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/F;return t[0]=I*B,t[1]=(S*_*a-p*y*a-S*s*x+i*y*x+p*s*g-i*_*g)*B,t[2]=(h*y*a-S*u*a+S*s*d-i*y*d-h*s*g+i*u*g)*B,t[3]=(p*u*a-h*_*a-p*s*d+i*_*d+h*s*x-i*u*x)*B,t[4]=C*B,t[5]=(m*y*a-M*_*a+M*s*x-e*y*x-m*s*g+e*_*g)*B,t[6]=(M*u*a-l*y*a-M*s*d+e*y*d+l*s*g-e*u*g)*B,t[7]=(l*_*a-m*u*a+m*s*d-e*_*d-l*s*x+e*u*x)*B,t[8]=w*B,t[9]=(M*p*a-m*S*a-M*i*x+e*S*x+m*i*g-e*p*g)*B,t[10]=(l*S*a-M*h*a+M*i*d-e*S*d-l*i*g+e*h*g)*B,t[11]=(m*h*a-l*p*a-m*i*d+e*p*d+l*i*x-e*h*x)*B,t[12]=O*B,t[13]=(m*S*s-M*p*s+M*i*_-e*S*_-m*i*y+e*p*y)*B,t[14]=(M*h*s-l*S*s-M*i*u+e*S*u+l*i*y-e*h*y)*B,t[15]=(l*p*s-m*h*s+m*i*u-e*p*u-l*i*_+e*h*_)*B,this}scale(t){const e=this.elements,i=t.x,s=t.y,a=t.z;return e[0]*=i,e[4]*=s,e[8]*=a,e[1]*=i,e[5]*=s,e[9]*=a,e[2]*=i,e[6]*=s,e[10]*=a,e[3]*=i,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),a=1-i,l=t.x,h=t.y,u=t.z,d=a*l,m=a*h;return this.set(d*l+i,d*h-s*u,d*u+s*h,0,d*h+s*u,m*h+i,m*u-s*l,0,d*u-s*h,m*u+s*l,a*u*u+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,a,l){return this.set(1,i,a,0,t,1,l,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,a=e._x,l=e._y,h=e._z,u=e._w,d=a+a,m=l+l,p=h+h,_=a*d,x=a*m,M=a*p,S=l*m,y=l*p,g=h*p,I=u*d,C=u*m,w=u*p,O=i.x,F=i.y,B=i.z;return s[0]=(1-(S+g))*O,s[1]=(x+w)*O,s[2]=(M-C)*O,s[3]=0,s[4]=(x-w)*F,s[5]=(1-(_+g))*F,s[6]=(y+I)*F,s[7]=0,s[8]=(M+C)*B,s[9]=(y-I)*B,s[10]=(1-(_+S))*B,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let a=ns.set(s[0],s[1],s[2]).length();const l=ns.set(s[4],s[5],s[6]).length(),h=ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],Tn.copy(this);const d=1/a,m=1/l,p=1/h;return Tn.elements[0]*=d,Tn.elements[1]*=d,Tn.elements[2]*=d,Tn.elements[4]*=m,Tn.elements[5]*=m,Tn.elements[6]*=m,Tn.elements[8]*=p,Tn.elements[9]*=p,Tn.elements[10]*=p,e.setFromRotationMatrix(Tn),i.x=a,i.y=l,i.z=h,this}makePerspective(t,e,i,s,a,l,h=On,u=!1){const d=this.elements,m=2*a/(e-t),p=2*a/(i-s),_=(e+t)/(e-t),x=(i+s)/(i-s);let M,S;if(u)M=a/(l-a),S=l*a/(l-a);else if(h===On)M=-(l+a)/(l-a),S=-2*l*a/(l-a);else if(h===mo)M=-l/(l-a),S=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=m,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=p,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=M,d[14]=S,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,i,s,a,l,h=On,u=!1){const d=this.elements,m=2/(e-t),p=2/(i-s),_=-(e+t)/(e-t),x=-(i+s)/(i-s);let M,S;if(u)M=1/(l-a),S=l/(l-a);else if(h===On)M=-2/(l-a),S=-(l+a)/(l-a);else if(h===mo)M=-1/(l-a),S=-a/(l-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=m,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=p,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=M,d[14]=S,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ns=new V,Tn=new ie,Yf=new V(0,0,0),Kf=new V(1,1,1),pi=new V,Fr=new V,ln=new V,Wc=new ie,Xc=new Ti;class zn{constructor(t=0,e=0,i=0,s=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,a=s[0],l=s[4],h=s[8],u=s[1],d=s[5],m=s[9],p=s[2],_=s[6],x=s[10];switch(e){case"XYZ":this._y=Math.asin(le(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-le(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(u,d)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(le(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-p,x),this._z=Math.atan2(-l,d)):(this._y=0,this._z=Math.atan2(u,a));break;case"ZYX":this._y=Math.asin(-le(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(u,a)):(this._x=0,this._z=Math.atan2(-l,d));break;case"YZX":this._z=Math.asin(le(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,d),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(h,a)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Wc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xc.setFromEuler(this),this.setFromQuaternion(Xc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class pu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jf=0;const Zc=new V,is=new Ti,jn=new ie,Br=new V,Zs=new V,$f=new V,Jf=new Ti,qc=new V(1,0,0),Yc=new V(0,1,0),Kc=new V(0,0,1),jc={type:"added"},Qf={type:"removed"},ss={type:"childadded",child:null},sa={type:"childremoved",child:null};class De extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new V,e=new zn,i=new Ti,s=new V(1,1,1);function a(){i.setFromEuler(e,!1)}function l(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new ee}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(qc,t)}rotateY(t){return this.rotateOnAxis(Yc,t)}rotateZ(t){return this.rotateOnAxis(Kc,t)}translateOnAxis(t,e){return Zc.copy(t).applyQuaternion(this.quaternion),this.position.add(Zc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qc,t)}translateY(t){return this.translateOnAxis(Yc,t)}translateZ(t){return this.translateOnAxis(Kc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Br.copy(t):Br.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Zs,Br,this.up):jn.lookAt(Br,Zs,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),is.setFromRotationMatrix(jn),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jc),ss.child=t,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qf),sa.child=t,this.dispatchEvent(sa),sa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jc),ss.child=t,this.dispatchEvent(ss),ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const l=this.children[i].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,t,$f),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,Jf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(h=>({...h})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(h,u){return h[u.uuid]===void 0&&(h[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const u=h.shapes;if(Array.isArray(u))for(let d=0,m=u.length;d<m;d++){const p=u[d];a(t.shapes,p)}else a(t.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let u=0,d=this.material.length;u<d;u++)h.push(a(t.materials,this.material[u]));s.material=h}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let h=0;h<this.children.length;h++)s.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let h=0;h<this.animations.length;h++){const u=this.animations[h];s.animations.push(a(t.animations,u))}}if(e){const h=l(t.geometries),u=l(t.materials),d=l(t.textures),m=l(t.images),p=l(t.shapes),_=l(t.skeletons),x=l(t.animations),M=l(t.nodes);h.length>0&&(i.geometries=h),u.length>0&&(i.materials=u),d.length>0&&(i.textures=d),m.length>0&&(i.images=m),p.length>0&&(i.shapes=p),_.length>0&&(i.skeletons=_),x.length>0&&(i.animations=x),M.length>0&&(i.nodes=M)}return i.object=s,i;function l(h){const u=[];for(const d in h){const m=h[d];delete m.metadata,u.push(m)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}De.DEFAULT_UP=new V(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new V,$n=new V,ra=new V,Jn=new V,rs=new V,os=new V,$c=new V,oa=new V,aa=new V,la=new V,ca=new ye,ha=new ye,ua=new ye;class wn{constructor(t=new V,e=new V,i=new V){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),En.subVectors(t,e),s.cross(En);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,i,s,a){En.subVectors(s,e),$n.subVectors(i,e),ra.subVectors(t,e);const l=En.dot(En),h=En.dot($n),u=En.dot(ra),d=$n.dot($n),m=$n.dot(ra),p=l*d-h*h;if(p===0)return a.set(0,0,0),null;const _=1/p,x=(d*u-h*m)*_,M=(l*m-h*u)*_;return a.set(1-x-M,M,x)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,i,s,a,l,h,u){return this.getBarycoord(t,e,i,s,Jn)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(a,Jn.x),u.addScaledVector(l,Jn.y),u.addScaledVector(h,Jn.z),u)}static getInterpolatedAttribute(t,e,i,s,a,l){return ca.setScalar(0),ha.setScalar(0),ua.setScalar(0),ca.fromBufferAttribute(t,e),ha.fromBufferAttribute(t,i),ua.fromBufferAttribute(t,s),l.setScalar(0),l.addScaledVector(ca,a.x),l.addScaledVector(ha,a.y),l.addScaledVector(ua,a.z),l}static isFrontFacing(t,e,i,s){return En.subVectors(i,e),$n.subVectors(t,e),En.cross($n).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),En.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,a){return wn.getInterpolation(t,this.a,this.b,this.c,e,i,s,a)}containsPoint(t){return wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,a=this.c;let l,h;rs.subVectors(s,i),os.subVectors(a,i),oa.subVectors(t,i);const u=rs.dot(oa),d=os.dot(oa);if(u<=0&&d<=0)return e.copy(i);aa.subVectors(t,s);const m=rs.dot(aa),p=os.dot(aa);if(m>=0&&p<=m)return e.copy(s);const _=u*p-m*d;if(_<=0&&u>=0&&m<=0)return l=u/(u-m),e.copy(i).addScaledVector(rs,l);la.subVectors(t,a);const x=rs.dot(la),M=os.dot(la);if(M>=0&&x<=M)return e.copy(a);const S=x*d-u*M;if(S<=0&&d>=0&&M<=0)return h=d/(d-M),e.copy(i).addScaledVector(os,h);const y=m*M-x*p;if(y<=0&&p-m>=0&&x-M>=0)return $c.subVectors(a,s),h=(p-m)/(p-m+(x-M)),e.copy(s).addScaledVector($c,h);const g=1/(y+S+_);return l=S*g,h=_*g,e.copy(i).addScaledVector(rs,l).addScaledVector(os,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},zr={h:0,s:0,l:0};function da(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Jt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ge.workingColorSpace){return this.r=t,this.g=e,this.b=i,ge.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ge.workingColorSpace){if(t=Ll(t,1),e=le(e,0,1),i=le(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,l=2*i-a;this.r=da(l,a,t+1/3),this.g=da(l,a,t),this.b=da(l,a,t-1/3)}return ge.colorSpaceToWorking(this,s),this}setStyle(t,e=Xe){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const l=s[1],h=s[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){const i=mu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return ge.workingToColorSpace(qe.copy(this),t),Math.round(le(qe.r*255,0,255))*65536+Math.round(le(qe.g*255,0,255))*256+Math.round(le(qe.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.workingToColorSpace(qe.copy(this),e);const i=qe.r,s=qe.g,a=qe.b,l=Math.max(i,s,a),h=Math.min(i,s,a);let u,d;const m=(h+l)/2;if(h===l)u=0,d=0;else{const p=l-h;switch(d=m<=.5?p/(l+h):p/(2-l-h),l){case i:u=(s-a)/p+(s<a?6:0);break;case s:u=(a-i)/p+2;break;case a:u=(i-s)/p+4;break}u/=6}return t.h=u,t.s=d,t.l=m,t}getRGB(t,e=ge.workingColorSpace){return ge.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Xe){ge.workingToColorSpace(qe.copy(this),t);const e=qe.r,i=qe.g,s=qe.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(zr);const i=ir(mi.h,zr.h,e),s=ir(mi.s,zr.s,e),a=ir(mi.l,zr.l,e);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*s,this.g=a[1]*e+a[4]*i+a[7]*s,this.b=a[2]*e+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new Jt;Jt.NAMES=mu;let tp=0;class Fn extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=ps,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Da,this.blendDst=Na,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(i.blending=this.blending),this.side!==oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Da&&(i.blendSrc=this.blendSrc),this.blendDst!==Na&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const l=[];for(const h in a){const u=a[h];delete u.metadata,l.push(u)}return l}if(e){const a=s(t.textures),l=s(t.images);a.length>0&&(i.textures=a),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ki extends Fn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Oe=new V,kr=new fe;let ep=0;class Qe{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ep++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=gl,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)kr.fromBufferAttribute(this,e),kr.applyMatrix3(t),this.setXY(e,kr.x,kr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=bn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Te(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array),s=Te(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,a){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array),s=Te(s,this.array),a=Te(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==gl&&(t.usage=this.usage),t}}class _u extends Qe{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class gu extends Qe{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ri extends Qe{constructor(t,e,i){super(new Float32Array(t),e,i)}}let np=0;const mn=new ie,fa=new De,as=new V,cn=new ai,qs=new ai,ke=new V;class Hn extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(du(t)?gu:_u)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ee().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,i){return mn.makeTranslation(t,e,i),this.applyMatrix4(mn),this}scale(t,e,i){return mn.makeScale(t,e,i),this.applyMatrix4(mn),this}lookAt(t){return fa.lookAt(t),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,a=t.length;s<a;s++){const l=t[s];i.push(l.x,l.y,l.z||0)}this.setAttribute("position",new ri(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const a=t[s];e.setXYZ(s,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const a=e[i];cn.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let a=0,l=e.length;a<l;a++){const h=e[a];qs.setFromBufferAttribute(h),this.morphTargetsRelative?(ke.addVectors(cn.min,qs.min),cn.expandByPoint(ke),ke.addVectors(cn.max,qs.max),cn.expandByPoint(ke)):(cn.expandByPoint(qs.min),cn.expandByPoint(qs.max))}cn.getCenter(i);let s=0;for(let a=0,l=t.count;a<l;a++)ke.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(ke));if(e)for(let a=0,l=e.length;a<l;a++){const h=e[a],u=this.morphTargetsRelative;for(let d=0,m=h.count;d<m;d++)ke.fromBufferAttribute(h,d),u&&(as.fromBufferAttribute(t,d),ke.add(as)),s=Math.max(s,i.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*i.count),4));const l=this.getAttribute("tangent"),h=[],u=[];for(let W=0;W<i.count;W++)h[W]=new V,u[W]=new V;const d=new V,m=new V,p=new V,_=new fe,x=new fe,M=new fe,S=new V,y=new V;function g(W,R,A){d.fromBufferAttribute(i,W),m.fromBufferAttribute(i,R),p.fromBufferAttribute(i,A),_.fromBufferAttribute(a,W),x.fromBufferAttribute(a,R),M.fromBufferAttribute(a,A),m.sub(d),p.sub(d),x.sub(_),M.sub(_);const N=1/(x.x*M.y-M.x*x.y);isFinite(N)&&(S.copy(m).multiplyScalar(M.y).addScaledVector(p,-x.y).multiplyScalar(N),y.copy(p).multiplyScalar(x.x).addScaledVector(m,-M.x).multiplyScalar(N),h[W].add(S),h[R].add(S),h[A].add(S),u[W].add(y),u[R].add(y),u[A].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let W=0,R=I.length;W<R;++W){const A=I[W],N=A.start,tt=A.count;for(let et=N,$=N+tt;et<$;et+=3)g(t.getX(et+0),t.getX(et+1),t.getX(et+2))}const C=new V,w=new V,O=new V,F=new V;function B(W){O.fromBufferAttribute(s,W),F.copy(O);const R=h[W];C.copy(R),C.sub(O.multiplyScalar(O.dot(R))).normalize(),w.crossVectors(F,R);const N=w.dot(u[W])<0?-1:1;l.setXYZW(W,C.x,C.y,C.z,N)}for(let W=0,R=I.length;W<R;++W){const A=I[W],N=A.start,tt=A.count;for(let et=N,$=N+tt;et<$;et+=3)B(t.getX(et+0)),B(t.getX(et+1)),B(t.getX(et+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let _=0,x=i.count;_<x;_++)i.setXYZ(_,0,0,0);const s=new V,a=new V,l=new V,h=new V,u=new V,d=new V,m=new V,p=new V;if(t)for(let _=0,x=t.count;_<x;_+=3){const M=t.getX(_+0),S=t.getX(_+1),y=t.getX(_+2);s.fromBufferAttribute(e,M),a.fromBufferAttribute(e,S),l.fromBufferAttribute(e,y),m.subVectors(l,a),p.subVectors(s,a),m.cross(p),h.fromBufferAttribute(i,M),u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,y),h.add(m),u.add(m),d.add(m),i.setXYZ(M,h.x,h.y,h.z),i.setXYZ(S,u.x,u.y,u.z),i.setXYZ(y,d.x,d.y,d.z)}else for(let _=0,x=e.count;_<x;_+=3)s.fromBufferAttribute(e,_+0),a.fromBufferAttribute(e,_+1),l.fromBufferAttribute(e,_+2),m.subVectors(l,a),p.subVectors(s,a),m.cross(p),i.setXYZ(_+0,m.x,m.y,m.z),i.setXYZ(_+1,m.x,m.y,m.z),i.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(h,u){const d=h.array,m=h.itemSize,p=h.normalized,_=new d.constructor(u.length*m);let x=0,M=0;for(let S=0,y=u.length;S<y;S++){h.isInterleavedBufferAttribute?x=u[S]*h.data.stride+h.offset:x=u[S]*m;for(let g=0;g<m;g++)_[M++]=d[x++]}return new Qe(_,m,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Hn,i=this.index.array,s=this.attributes;for(const h in s){const u=s[h],d=t(u,i);e.setAttribute(h,d)}const a=this.morphAttributes;for(const h in a){const u=[],d=a[h];for(let m=0,p=d.length;m<p;m++){const _=d[m],x=t(_,i);u.push(x)}e.morphAttributes[h]=u}e.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let h=0,u=l.length;h<u;h++){const d=l[h];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const d in u)u[d]!==void 0&&(t[d]=u[d]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const u in i){const d=i[u];t.data.attributes[u]=d.toJSON(t.data)}const s={};let a=!1;for(const u in this.morphAttributes){const d=this.morphAttributes[u],m=[];for(let p=0,_=d.length;p<_;p++){const x=d[p];m.push(x.toJSON(t.data))}m.length>0&&(s[u]=m,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const d in s){const m=s[d];this.setAttribute(d,m.clone(e))}const a=t.morphAttributes;for(const d in a){const m=[],p=a[d];for(let _=0,x=p.length;_<x;_++)m.push(p[_].clone(e));this.morphAttributes[d]=m}this.morphTargetsRelative=t.morphTargetsRelative;const l=t.groups;for(let d=0,m=l.length;d<m;d++){const p=l[d];this.addGroup(p.start,p.count,p.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jc=new ie,Li=new xo,Hr=new kn,Qc=new V,Vr=new V,Gr=new V,Wr=new V,pa=new V,Xr=new V,th=new V,Zr=new V;class un extends De{constructor(t=new Hn,e=new ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){const h=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,l=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const h=this.morphTargetInfluences;if(a&&h){Xr.set(0,0,0);for(let u=0,d=a.length;u<d;u++){const m=h[u],p=a[u];m!==0&&(pa.fromBufferAttribute(p,t),l?Xr.addScaledVector(pa,m):Xr.addScaledVector(pa.sub(e),m))}e.add(Xr)}return e}raycast(t,e){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hr.copy(i.boundingSphere),Hr.applyMatrix4(a),Li.copy(t.ray).recast(t.near),!(Hr.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Hr,Qc)===null||Li.origin.distanceToSquared(Qc)>(t.far-t.near)**2))&&(Jc.copy(a).invert(),Li.copy(t.ray).applyMatrix4(Jc),!(i.boundingBox!==null&&Li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,i){let s;const a=this.geometry,l=this.material,h=a.index,u=a.attributes.position,d=a.attributes.uv,m=a.attributes.uv1,p=a.attributes.normal,_=a.groups,x=a.drawRange;if(h!==null)if(Array.isArray(l))for(let M=0,S=_.length;M<S;M++){const y=_[M],g=l[y.materialIndex],I=Math.max(y.start,x.start),C=Math.min(h.count,Math.min(y.start+y.count,x.start+x.count));for(let w=I,O=C;w<O;w+=3){const F=h.getX(w),B=h.getX(w+1),W=h.getX(w+2);s=qr(this,g,t,i,d,m,p,F,B,W),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{const M=Math.max(0,x.start),S=Math.min(h.count,x.start+x.count);for(let y=M,g=S;y<g;y+=3){const I=h.getX(y),C=h.getX(y+1),w=h.getX(y+2);s=qr(this,l,t,i,d,m,p,I,C,w),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}else if(u!==void 0)if(Array.isArray(l))for(let M=0,S=_.length;M<S;M++){const y=_[M],g=l[y.materialIndex],I=Math.max(y.start,x.start),C=Math.min(u.count,Math.min(y.start+y.count,x.start+x.count));for(let w=I,O=C;w<O;w+=3){const F=w,B=w+1,W=w+2;s=qr(this,g,t,i,d,m,p,F,B,W),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{const M=Math.max(0,x.start),S=Math.min(u.count,x.start+x.count);for(let y=M,g=S;y<g;y+=3){const I=y,C=y+1,w=y+2;s=qr(this,l,t,i,d,m,p,I,C,w),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}}}function ip(r,t,e,i,s,a,l,h){let u;if(t.side===sn?u=i.intersectTriangle(l,a,s,!0,h):u=i.intersectTriangle(s,a,l,t.side===oi,h),u===null)return null;Zr.copy(h),Zr.applyMatrix4(r.matrixWorld);const d=e.ray.origin.distanceTo(Zr);return d<e.near||d>e.far?null:{distance:d,point:Zr.clone(),object:r}}function qr(r,t,e,i,s,a,l,h,u,d){r.getVertexPosition(h,Vr),r.getVertexPosition(u,Gr),r.getVertexPosition(d,Wr);const m=ip(r,t,e,i,Vr,Gr,Wr,th);if(m){const p=new V;wn.getBarycoord(th,Vr,Gr,Wr,p),s&&(m.uv=wn.getInterpolatedAttribute(s,h,u,d,p,new fe)),a&&(m.uv1=wn.getInterpolatedAttribute(a,h,u,d,p,new fe)),l&&(m.normal=wn.getInterpolatedAttribute(l,h,u,d,p,new V),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const _={a:h,b:u,c:d,normal:new V,materialIndex:0};wn.getNormal(Vr,Gr,Wr,_.normal),m.face=_,m.barycoord=p}return m}class fr extends Hn{constructor(t=1,e=1,i=1,s=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:a,depthSegments:l};const h=this;s=Math.floor(s),a=Math.floor(a),l=Math.floor(l);const u=[],d=[],m=[],p=[];let _=0,x=0;M("z","y","x",-1,-1,i,e,t,l,a,0),M("z","y","x",1,-1,i,e,-t,l,a,1),M("x","z","y",1,1,t,i,e,s,l,2),M("x","z","y",1,-1,t,i,-e,s,l,3),M("x","y","z",1,-1,t,e,i,s,a,4),M("x","y","z",-1,-1,t,e,-i,s,a,5),this.setIndex(u),this.setAttribute("position",new ri(d,3)),this.setAttribute("normal",new ri(m,3)),this.setAttribute("uv",new ri(p,2));function M(S,y,g,I,C,w,O,F,B,W,R){const A=w/B,N=O/W,tt=w/2,et=O/2,$=F/2,lt=B+1,J=W+1;let pt=0,G=0;const xt=new V;for(let it=0;it<J;it++){const vt=it*N-et;for(let zt=0;zt<lt;zt++){const se=zt*A-tt;xt[S]=se*I,xt[y]=vt*C,xt[g]=$,d.push(xt.x,xt.y,xt.z),xt[S]=0,xt[y]=0,xt[g]=F>0?1:-1,m.push(xt.x,xt.y,xt.z),p.push(zt/B),p.push(1-it/W),pt+=1}}for(let it=0;it<W;it++)for(let vt=0;vt<B;vt++){const zt=_+vt+lt*it,se=_+vt+lt*(it+1),Yt=_+(vt+1)+lt*(it+1),q=_+(vt+1)+lt*it;u.push(zt,se,q),u.push(se,Yt,q),G+=6}h.addGroup(x,G,R),x+=G,_+=pt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ts(r){const t={};for(const e in r){t[e]={};for(const i in r[e]){const s=r[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function je(r){const t={};for(let e=0;e<r.length;e++){const i=Ts(r[e]);for(const s in i)t[s]=i[s]}return t}function sp(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function vu(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}const rp={clone:Ts,merge:je};var op=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ap=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends Fn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=op,this.fragmentShader=ap,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=sp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?e.uniforms[s]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[s]={type:"m4",value:l.toArray()}:e.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class xu extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new V,eh=new fe,nh=new fe;class $e extends xu{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,e){return this.getViewBounds(t,eh,nh),e.subVectors(nh,eh)}setViewOffset(t,e,i,s,a,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(nr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,a=-.5*s;const l=this.view;if(this.view!==null&&this.view.enabled){const u=l.fullWidth,d=l.fullHeight;a+=l.offsetX*s/u,e-=l.offsetY*i/d,s*=l.width/u,i*=l.height/d}const h=this.filmOffset;h!==0&&(a+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ls=-90,cs=1;class lp extends De{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new $e(ls,cs,t,e);s.layers=this.layers,this.add(s);const a=new $e(ls,cs,t,e);a.layers=this.layers,this.add(a);const l=new $e(ls,cs,t,e);l.layers=this.layers,this.add(l);const h=new $e(ls,cs,t,e);h.layers=this.layers,this.add(h);const u=new $e(ls,cs,t,e);u.layers=this.layers,this.add(u);const d=new $e(ls,cs,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,a,l,h,u]=e;for(const d of e)this.remove(d);if(t===On)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===mo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,l,h,u,d,m]=this.children,p=t.getRenderTarget(),_=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,a),t.setRenderTarget(i,1,s),t.render(e,l),t.setRenderTarget(i,2,s),t.render(e,h),t.setRenderTarget(i,3,s),t.render(e,u),t.setRenderTarget(i,4,s),t.render(e,d),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,s),t.render(e,m),t.setRenderTarget(p,_,x),t.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class yu extends He{constructor(t=[],e=xs,i,s,a,l,h,u,d,m){super(t,e,i,s,a,l,h,u,d,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class cp extends Gi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new yu(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new fr(5,5,5),a=new Si({name:"CubemapFromEquirect",uniforms:Ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:yi});a.uniforms.tEquirect.value=e;const l=new un(s,a),h=e.minFilter;return e.minFilter===ni&&(e.minFilter=hn),new lp(1,10,this).update(t,l),e.minFilter=h,l.geometry.dispose(),l.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const a=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,i,s);t.setRenderTarget(a)}}class Hi extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hp={type:"move"};class ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,a=null,l=null;const h=this._targetRay,u=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){l=!0;for(const S of t.hand.values()){const y=e.getJointPose(S,i),g=this._getHandJoint(d,S);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const m=d.joints["index-finger-tip"],p=d.joints["thumb-tip"],_=m.position.distanceTo(p.position),x=.02,M=.005;d.inputState.pinching&&_>x+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&_<=x-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1));h!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(hp)))}return h!==null&&(h.visible=s!==null),u!==null&&(u.visible=a!==null),d!==null&&(d.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Hi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class up extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class dp{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=gl,this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,a=this.stride;s<a;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ke=new V;class Dl{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=bn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Te(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=bn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array),s=Te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array),s=Te(s,this.array),a=Te(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return new Qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Dl(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ih=new V,sh=new ye,rh=new ye,fp=new V,oh=new ie,Yr=new V,_a=new kn,ah=new ie,ga=new xo;class pp extends un{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Dc,this.bindMatrix=new ie,this.bindMatrixInverse=new ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ai),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Yr),this.boundingBox.expandByPoint(Yr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new kn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Yr),this.boundingSphere.expandByPoint(Yr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_a.copy(this.boundingSphere),_a.applyMatrix4(s),t.ray.intersectsSphere(_a)!==!1&&(ah.copy(s).invert(),ga.copy(t.ray).applyMatrix4(ah),!(this.boundingBox!==null&&ga.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ga)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ye,e=this.geometry.attributes.skinWeight;for(let i=0,s=e.count;i<s;i++){t.fromBufferAttribute(e,i);const a=1/t.manhattanLength();a!==1/0?t.multiplyScalar(a):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Dc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===cf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const i=this.skeleton,s=this.geometry;sh.fromBufferAttribute(s.attributes.skinIndex,t),rh.fromBufferAttribute(s.attributes.skinWeight,t),ih.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let a=0;a<4;a++){const l=rh.getComponent(a);if(l!==0){const h=sh.getComponent(a);oh.multiplyMatrices(i.bones[h].matrixWorld,i.boneInverses[h]),e.addScaledVector(fp.copy(ih).applyMatrix4(oh),l)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Mu extends De{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Su extends He{constructor(t=null,e=1,i=1,s,a,l,h,u,d=Je,m=Je,p,_){super(null,l,h,u,d,m,s,a,p,_),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lh=new ie,mp=new ie;class Nl{constructor(t=[],e=[]){this.uuid=Rn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new ie)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const i=new ie;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const t=this.bones,e=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let a=0,l=t.length;a<l;a++){const h=t[a]?t[a].matrixWorld:mp;lh.multiplyMatrices(h,e[a]),lh.toArray(i,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Nl(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const i=new Su(e,t,t,vn,An);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,s=t.bones.length;i<s;i++){const a=t.bones[i];let l=e[a];l===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),l=new Mu),this.bones.push(l),this.boneInverses.push(new ie().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,i=this.boneInverses;for(let s=0,a=e.length;s<a;s++){const l=e[s];t.bones.push(l.uuid);const h=i[s];t.boneInverses.push(h.toArray())}return t}}class vl extends Qe{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const hs=new ie,ch=new ie,Kr=[],hh=new ai,_p=new ie,Ys=new un,Ks=new kn;class gp extends un{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,_p)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ai),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,hs),hh.copy(t.boundingBox).applyMatrix4(hs),this.boundingBox.union(hh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new kn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,hs),Ks.copy(t.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(Ks)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,l=t*a+1;for(let h=0;h<i.length;h++)i[h]=s[l+h]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Ys.geometry=this.geometry,Ys.material=this.material,Ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ks.copy(this.boundingSphere),Ks.applyMatrix4(i),t.ray.intersectsSphere(Ks)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,hs),ch.multiplyMatrices(i,hs),Ys.matrixWorld=ch,Ys.raycast(t,Kr);for(let l=0,h=Kr.length;l<h;l++){const u=Kr[l];u.instanceId=a,u.object=this,e.push(u)}Kr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Su(new Float32Array(s*this.count),s,this.count,Al,An));const a=this.morphTexture.source.data.data;let l=0;for(let d=0;d<i.length;d++)l+=i[d];const h=this.geometry.morphTargetsRelative?1:1-l,u=s*t;a[u]=h,a.set(i,u+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const va=new V,vp=new V,xp=new ee;class Oi{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=va.subVectors(i,e).cross(vp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(va),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||xp.getNormalMatrix(t),s=this.coplanarPoint(va).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new kn,yp=new fe(.5,.5),jr=new V;class Ul{constructor(t=new Oi,e=new Oi,i=new Oi,s=new Oi,a=new Oi,l=new Oi){this.planes=[t,e,i,s,a,l]}set(t,e,i,s,a,l){const h=this.planes;return h[0].copy(t),h[1].copy(e),h[2].copy(i),h[3].copy(s),h[4].copy(a),h[5].copy(l),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=On,i=!1){const s=this.planes,a=t.elements,l=a[0],h=a[1],u=a[2],d=a[3],m=a[4],p=a[5],_=a[6],x=a[7],M=a[8],S=a[9],y=a[10],g=a[11],I=a[12],C=a[13],w=a[14],O=a[15];if(s[0].setComponents(d-l,x-m,g-M,O-I).normalize(),s[1].setComponents(d+l,x+m,g+M,O+I).normalize(),s[2].setComponents(d+h,x+p,g+S,O+C).normalize(),s[3].setComponents(d-h,x-p,g-S,O-C).normalize(),i)s[4].setComponents(u,_,y,w).normalize(),s[5].setComponents(d-u,x-_,g-y,O-w).normalize();else if(s[4].setComponents(d-u,x-_,g-y,O-w).normalize(),e===On)s[5].setComponents(d+u,x+_,g+y,O+w).normalize();else if(e===mo)s[5].setComponents(u,_,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(t){Ii.center.set(0,0,0);const e=yp.distanceTo(t.center);return Ii.radius=.7071067811865476+e,Ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(jr.x=s.normal.x>0?t.max.x:t.min.x,jr.y=s.normal.y>0?t.max.y:t.min.y,jr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(jr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tu extends Fn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const _o=new V,go=new V,uh=new ie,js=new xo,$r=new kn,xa=new V,dh=new V;class Ol extends De{constructor(t=new Hn,e=new Tu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,a=e.count;s<a;s++)_o.fromBufferAttribute(e,s-1),go.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=_o.distanceTo(go);t.setAttribute("lineDistance",new ri(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(s),$r.radius+=a,t.ray.intersectsSphere($r)===!1)return;uh.copy(s).invert(),js.copy(t.ray).applyMatrix4(uh);const h=a/((this.scale.x+this.scale.y+this.scale.z)/3),u=h*h,d=this.isLineSegments?2:1,m=i.index,_=i.attributes.position;if(m!==null){const x=Math.max(0,l.start),M=Math.min(m.count,l.start+l.count);for(let S=x,y=M-1;S<y;S+=d){const g=m.getX(S),I=m.getX(S+1),C=Jr(this,t,js,u,g,I,S);C&&e.push(C)}if(this.isLineLoop){const S=m.getX(M-1),y=m.getX(x),g=Jr(this,t,js,u,S,y,M-1);g&&e.push(g)}}else{const x=Math.max(0,l.start),M=Math.min(_.count,l.start+l.count);for(let S=x,y=M-1;S<y;S+=d){const g=Jr(this,t,js,u,S,S+1,S);g&&e.push(g)}if(this.isLineLoop){const S=Jr(this,t,js,u,M-1,x,M-1);S&&e.push(S)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){const h=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}}function Jr(r,t,e,i,s,a,l){const h=r.geometry.attributes.position;if(_o.fromBufferAttribute(h,s),go.fromBufferAttribute(h,a),e.distanceSqToSegment(_o,go,xa,dh)>i)return;xa.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(xa);if(!(d<t.near||d>t.far))return{distance:d,point:dh.clone().applyMatrix4(r.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:r}}const fh=new V,ph=new V;class Mp extends Ol{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,a=e.count;s<a;s+=2)fh.fromBufferAttribute(e,s),ph.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+fh.distanceTo(ph);t.setAttribute("lineDistance",new ri(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sp extends Ol{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Eu extends Fn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const mh=new ie,xl=new xo,Qr=new kn,to=new V;class Tp extends De{constructor(t=new Hn,e=new Eu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere),Qr.applyMatrix4(s),Qr.radius+=a,t.ray.intersectsSphere(Qr)===!1)return;mh.copy(s).invert(),xl.copy(t.ray).applyMatrix4(mh);const h=a/((this.scale.x+this.scale.y+this.scale.z)/3),u=h*h,d=i.index,p=i.attributes.position;if(d!==null){const _=Math.max(0,l.start),x=Math.min(d.count,l.start+l.count);for(let M=_,S=x;M<S;M++){const y=d.getX(M);to.fromBufferAttribute(p,y),_h(to,y,u,s,t,e,this)}}else{const _=Math.max(0,l.start),x=Math.min(p.count,l.start+l.count);for(let M=_,S=x;M<S;M++)to.fromBufferAttribute(p,M),_h(to,M,u,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){const h=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}}function _h(r,t,e,i,s,a,l){const h=xl.distanceSqToPoint(r);if(h<e){const u=new V;xl.closestPointToPoint(r,u),u.applyMatrix4(i);const d=s.ray.origin.distanceTo(u);if(d<s.near||d>s.far)return;a.push({distance:d,distanceToRay:Math.sqrt(h),point:u,index:t,face:null,faceIndex:null,barycoord:null,object:l})}}class bu extends He{constructor(t,e,i=Vi,s,a,l,h=Je,u=Je,d,m=ar,p=1){if(m!==ar&&m!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:e,depth:p};super(_,s,a,l,h,u,m,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Il(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class yo extends Hn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const a=t/2,l=e/2,h=Math.floor(i),u=Math.floor(s),d=h+1,m=u+1,p=t/h,_=e/u,x=[],M=[],S=[],y=[];for(let g=0;g<m;g++){const I=g*_-l;for(let C=0;C<d;C++){const w=C*p-a;M.push(w,-I,0),S.push(0,0,1),y.push(C/h),y.push(1-g/u)}}for(let g=0;g<u;g++)for(let I=0;I<h;I++){const C=I+d*g,w=I+d*(g+1),O=I+1+d*(g+1),F=I+1+d*g;x.push(C,w,F),x.push(w,O,F)}this.setIndex(x),this.setAttribute("position",new ri(M,3)),this.setAttribute("normal",new ri(S,3)),this.setAttribute("uv",new ri(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yo(t.width,t.height,t.widthSegments,t.heightSegments)}}class Fl extends Fn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hu,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Vn extends Fl{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return le(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Jt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Jt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Jt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Ep extends Fn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=df,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class bp extends Fn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function eo(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function wp(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ap(r){function t(s,a){return r[s]-r[a]}const e=r.length,i=new Array(e);for(let s=0;s!==e;++s)i[s]=s;return i.sort(t),i}function gh(r,t,e){const i=r.length,s=new r.constructor(i);for(let a=0,l=0;l!==i;++a){const h=e[a]*t;for(let u=0;u!==t;++u)s[l++]=r[h+u]}return s}function wu(r,t,e,i){let s=1,a=r[0];for(;a!==void 0&&a[i]===void 0;)a=r[s++];if(a===void 0)return;let l=a[i];if(l!==void 0)if(Array.isArray(l))do l=a[i],l!==void 0&&(t.push(a.time),e.push(...l)),a=r[s++];while(a!==void 0);else if(l.toArray!==void 0)do l=a[i],l!==void 0&&(t.push(a.time),l.toArray(e,e.length)),a=r[s++];while(a!==void 0);else do l=a[i],l!==void 0&&(t.push(a.time),e.push(l)),a=r[s++];while(a!==void 0)}class pr{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let i=this._cachedIndex,s=e[i],a=e[i-1];n:{t:{let l;e:{i:if(!(t<s)){for(let h=i+2;;){if(s===void 0){if(t<a)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===h)break;if(a=s,s=e[++i],t<s)break t}l=e.length;break e}if(!(t>=a)){const h=e[1];t<h&&(i=2,a=h);for(let u=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===u)break;if(s=a,a=e[--i-1],t>=a)break t}l=i,i=0;break e}break n}for(;i<l;){const h=i+l>>>1;t<e[h]?l=h:i=h+1}if(s=e[i],a=e[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let l=0;l!==s;++l)e[l]=i[a+l];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Rp extends pr{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nc,endingEnd:Nc}}intervalChanged_(t,e,i){const s=this.parameterPositions;let a=t-2,l=t+1,h=s[a],u=s[l];if(h===void 0)switch(this.getSettings_().endingStart){case Uc:a=t,h=2*e-i;break;case Oc:a=s.length-2,h=e+s[a]-s[a+1];break;default:a=t,h=i}if(u===void 0)switch(this.getSettings_().endingEnd){case Uc:l=t,u=2*i-e;break;case Oc:l=1,u=i+s[1]-s[0];break;default:l=t-1,u=e}const d=(i-e)*.5,m=this.valueSize;this._weightPrev=d/(e-h),this._weightNext=d/(u-i),this._offsetPrev=a*m,this._offsetNext=l*m}interpolate_(t,e,i,s){const a=this.resultBuffer,l=this.sampleValues,h=this.valueSize,u=t*h,d=u-h,m=this._offsetPrev,p=this._offsetNext,_=this._weightPrev,x=this._weightNext,M=(i-e)/(s-e),S=M*M,y=S*M,g=-_*y+2*_*S-_*M,I=(1+_)*y+(-1.5-2*_)*S+(-.5+_)*M+1,C=(-1-x)*y+(1.5+x)*S+.5*M,w=x*y-x*S;for(let O=0;O!==h;++O)a[O]=g*l[m+O]+I*l[d+O]+C*l[u+O]+w*l[p+O];return a}}class Cp extends pr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){const a=this.resultBuffer,l=this.sampleValues,h=this.valueSize,u=t*h,d=u-h,m=(i-e)/(s-e),p=1-m;for(let _=0;_!==h;++_)a[_]=l[d+_]*p+l[u+_]*m;return a}}class Pp extends pr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class Cn{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=eo(e,this.TimeBufferType),this.values=eo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:eo(t.times,Array),values:eo(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Pp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Cp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Rp(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case cr:e=this.InterpolantFactoryMethodDiscrete;break;case hr:e=this.InterpolantFactoryMethodLinear;break;case Yo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cr;case this.InterpolantFactoryMethodLinear:return hr;case this.InterpolantFactoryMethodSmooth:return Yo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){const i=this.times,s=i.length;let a=0,l=s-1;for(;a!==s&&i[a]<t;)++a;for(;l!==-1&&i[l]>e;)--l;if(++l,a!==0||l!==s){a>=l&&(l=Math.max(l,1),a=l-1);const h=this.getValueSize();this.times=i.slice(a,l),this.values=this.values.slice(a*h,l*h)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let l=null;for(let h=0;h!==a;h++){const u=i[h];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,h,u),t=!1;break}if(l!==null&&l>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,h,u,l),t=!1;break}l=u}if(s!==void 0&&wp(s))for(let h=0,u=s.length;h!==u;++h){const d=s[h];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,h,d),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Yo,a=t.length-1;let l=1;for(let h=1;h<a;++h){let u=!1;const d=t[h],m=t[h+1];if(d!==m&&(h!==1||d!==t[0]))if(s)u=!0;else{const p=h*i,_=p-i,x=p+i;for(let M=0;M!==i;++M){const S=e[p+M];if(S!==e[_+M]||S!==e[x+M]){u=!0;break}}}if(u){if(h!==l){t[l]=t[h];const p=h*i,_=l*i;for(let x=0;x!==i;++x)e[_+x]=e[p+x]}++l}}if(a>0){t[l]=t[a];for(let h=a*i,u=l*i,d=0;d!==i;++d)e[u+d]=e[h+d];++l}return l!==t.length?(this.times=t.slice(0,l),this.values=e.slice(0,l*i)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=hr;class Rs extends Cn{constructor(t,e,i){super(t,e,i)}}Rs.prototype.ValueTypeName="bool";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=cr;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;class Au extends Cn{constructor(t,e,i,s){super(t,e,i,s)}}Au.prototype.ValueTypeName="color";class Es extends Cn{constructor(t,e,i,s){super(t,e,i,s)}}Es.prototype.ValueTypeName="number";class Lp extends pr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){const a=this.resultBuffer,l=this.sampleValues,h=this.valueSize,u=(i-e)/(s-e);let d=t*h;for(let m=d+h;d!==m;d+=4)Ti.slerpFlat(a,0,l,d-h,l,d,u);return a}}class bs extends Cn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Lp(this.times,this.values,this.getValueSize(),t)}}bs.prototype.ValueTypeName="quaternion";bs.prototype.InterpolantFactoryMethodSmooth=void 0;class Cs extends Cn{constructor(t,e,i){super(t,e,i)}}Cs.prototype.ValueTypeName="string";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=cr;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;class ws extends Cn{constructor(t,e,i,s){super(t,e,i,s)}}ws.prototype.ValueTypeName="vector";class Ip{constructor(t="",e=-1,i=[],s=hf){this.name=t,this.tracks=i,this.duration=e,this.blendMode=s,this.uuid=Rn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],i=t.tracks,s=1/(t.fps||1);for(let l=0,h=i.length;l!==h;++l)e.push(Np(i[l]).scale(s));const a=new this(t.name,t.duration,e,t.blendMode);return a.uuid=t.uuid,a}static toJSON(t){const e=[],i=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let a=0,l=i.length;a!==l;++a)e.push(Cn.toJSON(i[a]));return s}static CreateFromMorphTargetSequence(t,e,i,s){const a=e.length,l=[];for(let h=0;h<a;h++){let u=[],d=[];u.push((h+a-1)%a,h,(h+1)%a),d.push(0,1,0);const m=Ap(u);u=gh(u,1,m),d=gh(d,1,m),!s&&u[0]===0&&(u.push(a),d.push(d[0])),l.push(new Es(".morphTargetInfluences["+e[h].name+"]",u,d).scale(1/i))}return new this(t,-1,l)}static findByName(t,e){let i=t;if(!Array.isArray(t)){const s=t;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===e)return i[s];return null}static CreateClipsFromMorphTargetSequences(t,e,i){const s={},a=/^([\w-]*?)([\d]+)$/;for(let h=0,u=t.length;h<u;h++){const d=t[h],m=d.name.match(a);if(m&&m.length>1){const p=m[1];let _=s[p];_||(s[p]=_=[]),_.push(d)}}const l=[];for(const h in s)l.push(this.CreateFromMorphTargetSequence(h,s[h],e,i));return l}static parseAnimation(t,e){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(p,_,x,M,S){if(x.length!==0){const y=[],g=[];wu(x,y,g,M),y.length!==0&&S.push(new p(_,y,g))}},s=[],a=t.name||"default",l=t.fps||30,h=t.blendMode;let u=t.length||-1;const d=t.hierarchy||[];for(let p=0;p<d.length;p++){const _=d[p].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const x={};let M;for(M=0;M<_.length;M++)if(_[M].morphTargets)for(let S=0;S<_[M].morphTargets.length;S++)x[_[M].morphTargets[S]]=-1;for(const S in x){const y=[],g=[];for(let I=0;I!==_[M].morphTargets.length;++I){const C=_[M];y.push(C.time),g.push(C.morphTarget===S?1:0)}s.push(new Es(".morphTargetInfluence["+S+"]",y,g))}u=x.length*l}else{const x=".bones["+e[p].name+"]";i(ws,x+".position",_,"pos",s),i(bs,x+".quaternion",_,"rot",s),i(ws,x+".scale",_,"scl",s)}}return s.length===0?null:new this(a,u,s,h)}resetDuration(){const t=this.tracks;let e=0;for(let i=0,s=t.length;i!==s;++i){const a=this.tracks[i];e=Math.max(e,a.times[a.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Dp(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Es;case"vector":case"vector2":case"vector3":case"vector4":return ws;case"color":return Au;case"quaternion":return bs;case"bool":case"boolean":return Rs;case"string":return Cs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Np(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Dp(r.type);if(r.times===void 0){const e=[],i=[];wu(r.keys,e,i,"value"),r.times=e,r.values=i}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const ii={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Up{constructor(t,e,i){const s=this;let a=!1,l=0,h=0,u;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.abortController=new AbortController,this.itemStart=function(m){h++,a===!1&&s.onStart!==void 0&&s.onStart(m,l,h),a=!0},this.itemEnd=function(m){l++,s.onProgress!==void 0&&s.onProgress(m,l,h),l===h&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return u?u(m):m},this.setURLModifier=function(m){return u=m,this},this.addHandler=function(m,p){return d.push(m,p),this},this.removeHandler=function(m){const p=d.indexOf(m);return p!==-1&&d.splice(p,2),this},this.getHandler=function(m){for(let p=0,_=d.length;p<_;p+=2){const x=d[p],M=d[p+1];if(x.global&&(x.lastIndex=0),x.test(m))return M}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Op=new Up;class Ps{constructor(t){this.manager=t!==void 0?t:Op,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,a){i.load(t,s,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Ps.DEFAULT_MATERIAL_NAME="__DEFAULT";const Qn={};class Fp extends Error{constructor(t,e){super(t),this.response=e}}class Ru extends Ps{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=ii.get(`file:${t}`);if(a!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(a),this.manager.itemEnd(t)},0),a;if(Qn[t]!==void 0){Qn[t].push({onLoad:e,onProgress:i,onError:s});return}Qn[t]=[],Qn[t].push({onLoad:e,onProgress:i,onError:s});const l=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),h=this.mimeType,u=this.responseType;fetch(l).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const m=Qn[t],p=d.body.getReader(),_=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),x=_?parseInt(_):0,M=x!==0;let S=0;const y=new ReadableStream({start(g){I();function I(){p.read().then(({done:C,value:w})=>{if(C)g.close();else{S+=w.byteLength;const O=new ProgressEvent("progress",{lengthComputable:M,loaded:S,total:x});for(let F=0,B=m.length;F<B;F++){const W=m[F];W.onProgress&&W.onProgress(O)}g.enqueue(w),I()}},C=>{g.error(C)})}}});return new Response(y)}else throw new Fp(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(u){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(m=>new DOMParser().parseFromString(m,h));case"json":return d.json();default:if(h==="")return d.text();{const p=/charset="?([^;"\s]*)"?/i.exec(h),_=p&&p[1]?p[1].toLowerCase():void 0,x=new TextDecoder(_);return d.arrayBuffer().then(M=>x.decode(M))}}}).then(d=>{ii.add(`file:${t}`,d);const m=Qn[t];delete Qn[t];for(let p=0,_=m.length;p<_;p++){const x=m[p];x.onLoad&&x.onLoad(d)}}).catch(d=>{const m=Qn[t];if(m===void 0)throw this.manager.itemError(t),d;delete Qn[t];for(let p=0,_=m.length;p<_;p++){const x=m[p];x.onError&&x.onError(d)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const us=new WeakMap;class Bp extends Ps{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,l=ii.get(`image:${t}`);if(l!==void 0){if(l.complete===!0)a.manager.itemStart(t),setTimeout(function(){e&&e(l),a.manager.itemEnd(t)},0);else{let p=us.get(l);p===void 0&&(p=[],us.set(l,p)),p.push({onLoad:e,onError:s})}return l}const h=ur("img");function u(){m(),e&&e(this);const p=us.get(this)||[];for(let _=0;_<p.length;_++){const x=p[_];x.onLoad&&x.onLoad(this)}us.delete(this),a.manager.itemEnd(t)}function d(p){m(),s&&s(p),ii.remove(`image:${t}`);const _=us.get(this)||[];for(let x=0;x<_.length;x++){const M=_[x];M.onError&&M.onError(p)}us.delete(this),a.manager.itemError(t),a.manager.itemEnd(t)}function m(){h.removeEventListener("load",u,!1),h.removeEventListener("error",d,!1)}return h.addEventListener("load",u,!1),h.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),ii.add(`image:${t}`,h),a.manager.itemStart(t),h.src=t,h}}class zp extends Ps{constructor(t){super(t)}load(t,e,i,s){const a=new He,l=new Bp(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(t,function(h){a.image=h,a.needsUpdate=!0,e!==void 0&&e(a)},i,s),a}}class Mo extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ya=new ie,vh=new V,xh=new V;class Bl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ul,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;vh.setFromMatrixPosition(t.matrixWorld),e.position.copy(vh),xh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xh),e.updateMatrixWorld(),ya.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ya,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ya)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class kp extends Bl{constructor(){super(new $e(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,i=Ss*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,a=t.distance||e.far;(i!==e.fov||s!==e.aspect||a!==e.far)&&(e.fov=i,e.aspect=s,e.far=a,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Hp extends Mo{constructor(t,e,i=0,s=Math.PI/3,a=0,l=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.distance=i,this.angle=s,this.penumbra=a,this.decay=l,this.map=null,this.shadow=new kp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const yh=new ie,$s=new V,Ma=new V;class Vp extends Bl{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,a=t.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),$s.setFromMatrixPosition(t.matrixWorld),i.position.copy($s),Ma.copy(i.position),Ma.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Ma),i.updateMatrixWorld(),s.makeTranslation(-$s.x,-$s.y,-$s.z),yh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yh,i.coordinateSystem,i.reversedDepth)}}class Gp extends Mo{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Vp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class zl extends xu{constructor(t=-1,e=1,i=1,s=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-t,l=i+t,h=s+e,u=s-e;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,l=a+d*this.view.width,h-=m*this.view.offsetY,u=h-m*this.view.height}this.projectionMatrix.makeOrthographic(a,l,h,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Wp extends Bl{constructor(){super(new zl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cu extends Mo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new Wp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Xp extends Mo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class sr{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}const Sa=new WeakMap;class Zp extends Ps{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,l=ii.get(`image-bitmap:${t}`);if(l!==void 0){if(a.manager.itemStart(t),l.then){l.then(d=>{if(Sa.has(l)===!0)s&&s(Sa.get(l)),a.manager.itemError(t),a.manager.itemEnd(t);else return e&&e(d),a.manager.itemEnd(t),d});return}return setTimeout(function(){e&&e(l),a.manager.itemEnd(t)},0),l}const h={};h.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",h.headers=this.requestHeader,h.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const u=fetch(t,h).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(d){return ii.add(`image-bitmap:${t}`,d),e&&e(d),a.manager.itemEnd(t),d}).catch(function(d){s&&s(d),Sa.set(u,d),ii.remove(`image-bitmap:${t}`),a.manager.itemError(t),a.manager.itemEnd(t)});ii.add(`image-bitmap:${t}`,u),a.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class qp extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const kl="\\[\\]\\.:\\/",Yp=new RegExp("["+kl+"]","g"),Hl="[^"+kl+"]",Kp="[^"+kl.replace("\\.","")+"]",jp=/((?:WC+[\/:])*)/.source.replace("WC",Hl),$p=/(WCOD+)?/.source.replace("WCOD",Kp),Jp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hl),Qp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hl),tm=new RegExp("^"+jp+$p+Jp+Qp+"$"),em=["material","materials","bones","map"];class nm{constructor(t,e,i){const s=i||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}}class Ee{constructor(t,e,i){this.path=e,this.parsedPath=i||Ee.parseTrackName(e),this.node=Ee.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new Ee.Composite(t,e,i):new Ee(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Yp,"")}static parseTrackName(t){const e=tm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=i.nodeName.substring(s+1);em.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){const i=function(a){for(let l=0;l<a.length;l++){const h=a[l];if(h.name===e||h.uuid===e)return h;const u=i(h.children);if(u)return u}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,i=e.objectName,s=e.propertyName;let a=e.propertyIndex;if(t||(t=Ee.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let d=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let m=0;m<t.length;m++)if(t[m].name===d){d=m;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(d!==void 0){if(t[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[d]}}const l=t[s];if(l===void 0){const d=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+s+" but it wasn't found.",t);return}let h=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?h=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}u=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=a}else l.fromArray!==void 0&&l.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(u=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=s;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ee.Composite=nm;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Mh(r,t,e,i){const s=im(i);switch(e){case ru:return r*t;case Al:return r*t/s.components*s.byteLength;case Rl:return r*t/s.components*s.byteLength;case au:return r*t*2/s.components*s.byteLength;case Cl:return r*t*2/s.components*s.byteLength;case ou:return r*t*3/s.components*s.byteLength;case vn:return r*t*4/s.components*s.byteLength;case Pl:return r*t*4/s.components*s.byteLength;case oo:case ao:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case lo:case co:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Xa:case qa:return Math.max(r,16)*Math.max(t,8)/4;case Wa:case Za:return Math.max(r,8)*Math.max(t,8)/2;case Ya:case Ka:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ja:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case tl:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case el:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case nl:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case il:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case sl:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case rl:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case ol:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case al:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case ll:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case cl:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case hl:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ho:case ul:case dl:return Math.ceil(r/4)*Math.ceil(t/4)*16;case lu:case fl:return Math.ceil(r/4)*Math.ceil(t/4)*8;case pl:case ml:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function im(r){switch(r){case Bn:case nu:return{byteLength:1,components:1};case rr:case iu:case dr:return{byteLength:2,components:1};case bl:case wl:return{byteLength:2,components:4};case Vi:case El:case An:return{byteLength:4,components:1};case su:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Pu(){let r=null,t=!1,e=null,i=null;function s(a,l){e(a,l),i=r.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(s),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){r=a}}}function sm(r){const t=new WeakMap;function e(h,u){const d=h.array,m=h.usage,p=d.byteLength,_=r.createBuffer();r.bindBuffer(u,_),r.bufferData(u,d,m),h.onUploadCallback();let x;if(d instanceof Float32Array)x=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=r.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=r.SHORT;else if(d instanceof Uint32Array)x=r.UNSIGNED_INT;else if(d instanceof Int32Array)x=r.INT;else if(d instanceof Int8Array)x=r.BYTE;else if(d instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:p}}function i(h,u,d){const m=u.array,p=u.updateRanges;if(r.bindBuffer(d,h),p.length===0)r.bufferSubData(d,0,m);else{p.sort((x,M)=>x.start-M.start);let _=0;for(let x=1;x<p.length;x++){const M=p[_],S=p[x];S.start<=M.start+M.count+1?M.count=Math.max(M.count,S.start+S.count-M.start):(++_,p[_]=S)}p.length=_+1;for(let x=0,M=p.length;x<M;x++){const S=p[x];r.bufferSubData(d,S.start*m.BYTES_PER_ELEMENT,m,S.start,S.count)}u.clearUpdateRanges()}u.onUploadCallback()}function s(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const u=t.get(h);u&&(r.deleteBuffer(u.buffer),t.delete(h))}function l(h,u){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const m=t.get(h);(!m||m.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=t.get(h);if(d===void 0)t.set(h,e(h,u));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,h,u),d.version=h.version}}return{get:s,remove:a,update:l}}var rm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,om=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,am=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,um=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,pm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_m=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Rm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Um="gl_FragColor = linearToOutputTexel( gl_FragColor );",Om=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,km=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ym=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Km=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$m=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,e_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,i_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,s_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,r_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,o_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,l_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,u_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,p_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,__=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,v_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,x_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,M_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,T_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,E_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,A_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,R_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,N_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,U_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,O_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,B_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,H_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,V_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,G_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,W_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,X_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Z_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Y_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,K_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,j_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,J_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Q_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ig=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ag=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ug=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ag=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ig=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ng=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ug=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Og=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ne={alphahash_fragment:rm,alphahash_pars_fragment:om,alphamap_fragment:am,alphamap_pars_fragment:lm,alphatest_fragment:cm,alphatest_pars_fragment:hm,aomap_fragment:um,aomap_pars_fragment:dm,batching_pars_vertex:fm,batching_vertex:pm,begin_vertex:mm,beginnormal_vertex:_m,bsdfs:gm,iridescence_fragment:vm,bumpmap_pars_fragment:xm,clipping_planes_fragment:ym,clipping_planes_pars_fragment:Mm,clipping_planes_pars_vertex:Sm,clipping_planes_vertex:Tm,color_fragment:Em,color_pars_fragment:bm,color_pars_vertex:wm,color_vertex:Am,common:Rm,cube_uv_reflection_fragment:Cm,defaultnormal_vertex:Pm,displacementmap_pars_vertex:Lm,displacementmap_vertex:Im,emissivemap_fragment:Dm,emissivemap_pars_fragment:Nm,colorspace_fragment:Um,colorspace_pars_fragment:Om,envmap_fragment:Fm,envmap_common_pars_fragment:Bm,envmap_pars_fragment:zm,envmap_pars_vertex:km,envmap_physical_pars_fragment:$m,envmap_vertex:Hm,fog_vertex:Vm,fog_pars_vertex:Gm,fog_fragment:Wm,fog_pars_fragment:Xm,gradientmap_pars_fragment:Zm,lightmap_pars_fragment:qm,lights_lambert_fragment:Ym,lights_lambert_pars_fragment:Km,lights_pars_begin:jm,lights_toon_fragment:Jm,lights_toon_pars_fragment:Qm,lights_phong_fragment:t_,lights_phong_pars_fragment:e_,lights_physical_fragment:n_,lights_physical_pars_fragment:i_,lights_fragment_begin:s_,lights_fragment_maps:r_,lights_fragment_end:o_,logdepthbuf_fragment:a_,logdepthbuf_pars_fragment:l_,logdepthbuf_pars_vertex:c_,logdepthbuf_vertex:h_,map_fragment:u_,map_pars_fragment:d_,map_particle_fragment:f_,map_particle_pars_fragment:p_,metalnessmap_fragment:m_,metalnessmap_pars_fragment:__,morphinstance_vertex:g_,morphcolor_vertex:v_,morphnormal_vertex:x_,morphtarget_pars_vertex:y_,morphtarget_vertex:M_,normal_fragment_begin:S_,normal_fragment_maps:T_,normal_pars_fragment:E_,normal_pars_vertex:b_,normal_vertex:w_,normalmap_pars_fragment:A_,clearcoat_normal_fragment_begin:R_,clearcoat_normal_fragment_maps:C_,clearcoat_pars_fragment:P_,iridescence_pars_fragment:L_,opaque_fragment:I_,packing:D_,premultiplied_alpha_fragment:N_,project_vertex:U_,dithering_fragment:O_,dithering_pars_fragment:F_,roughnessmap_fragment:B_,roughnessmap_pars_fragment:z_,shadowmap_pars_fragment:k_,shadowmap_pars_vertex:H_,shadowmap_vertex:V_,shadowmask_pars_fragment:G_,skinbase_vertex:W_,skinning_pars_vertex:X_,skinning_vertex:Z_,skinnormal_vertex:q_,specularmap_fragment:Y_,specularmap_pars_fragment:K_,tonemapping_fragment:j_,tonemapping_pars_fragment:$_,transmission_fragment:J_,transmission_pars_fragment:Q_,uv_pars_fragment:tg,uv_pars_vertex:eg,uv_vertex:ng,worldpos_vertex:ig,background_vert:sg,background_frag:rg,backgroundCube_vert:og,backgroundCube_frag:ag,cube_vert:lg,cube_frag:cg,depth_vert:hg,depth_frag:ug,distanceRGBA_vert:dg,distanceRGBA_frag:fg,equirect_vert:pg,equirect_frag:mg,linedashed_vert:_g,linedashed_frag:gg,meshbasic_vert:vg,meshbasic_frag:xg,meshlambert_vert:yg,meshlambert_frag:Mg,meshmatcap_vert:Sg,meshmatcap_frag:Tg,meshnormal_vert:Eg,meshnormal_frag:bg,meshphong_vert:wg,meshphong_frag:Ag,meshphysical_vert:Rg,meshphysical_frag:Cg,meshtoon_vert:Pg,meshtoon_frag:Lg,points_vert:Ig,points_frag:Dg,shadow_vert:Ng,shadow_frag:Ug,sprite_vert:Og,sprite_frag:Fg},Mt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Nn={basic:{uniforms:je([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:je([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:je([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:je([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:je([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:je([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:je([Mt.points,Mt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:je([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:je([Mt.common,Mt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:je([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:je([Mt.sprite,Mt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:je([Mt.common,Mt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:je([Mt.lights,Mt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Nn.physical={uniforms:je([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const no={r:0,b:0,g:0},Di=new zn,Bg=new ie;function zg(r,t,e,i,s,a,l){const h=new Jt(0);let u=a===!0?0:1,d,m,p=null,_=0,x=null;function M(C){let w=C.isScene===!0?C.background:null;return w&&w.isTexture&&(w=(C.backgroundBlurriness>0?e:t).get(w)),w}function S(C){let w=!1;const O=M(C);O===null?g(h,u):O&&O.isColor&&(g(O,1),w=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,l):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,l),(r.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(C,w){const O=M(w);O&&(O.isCubeTexture||O.mapping===vo)?(m===void 0&&(m=new un(new fr(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:Ts(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(F,B,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),Di.copy(w.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),m.material.uniforms.envMap.value=O,m.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(Bg.makeRotationFromEuler(Di)),m.material.toneMapped=ge.getTransfer(O.colorSpace)!==Re,(p!==O||_!==O.version||x!==r.toneMapping)&&(m.material.needsUpdate=!0,p=O,_=O.version,x=r.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null)):O&&O.isTexture&&(d===void 0&&(d=new un(new yo(2,2),new Si({name:"BackgroundMaterial",uniforms:Ts(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=O,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.toneMapped=ge.getTransfer(O.colorSpace)!==Re,O.matrixAutoUpdate===!0&&O.updateMatrix(),d.material.uniforms.uvTransform.value.copy(O.matrix),(p!==O||_!==O.version||x!==r.toneMapping)&&(d.material.needsUpdate=!0,p=O,_=O.version,x=r.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null))}function g(C,w){C.getRGB(no,vu(r)),i.buffers.color.setClear(no.r,no.g,no.b,w,l)}function I(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(C,w=1){h.set(C),u=w,g(h,u)},getClearAlpha:function(){return u},setClearAlpha:function(C){u=C,g(h,u)},render:S,addToRenderList:y,dispose:I}}function kg(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},s=_(null);let a=s,l=!1;function h(A,N,tt,et,$){let lt=!1;const J=p(et,tt,N);a!==J&&(a=J,d(a.object)),lt=x(A,et,tt,$),lt&&M(A,et,tt,$),$!==null&&t.update($,r.ELEMENT_ARRAY_BUFFER),(lt||l)&&(l=!1,w(A,N,tt,et),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function u(){return r.createVertexArray()}function d(A){return r.bindVertexArray(A)}function m(A){return r.deleteVertexArray(A)}function p(A,N,tt){const et=tt.wireframe===!0;let $=i[A.id];$===void 0&&($={},i[A.id]=$);let lt=$[N.id];lt===void 0&&(lt={},$[N.id]=lt);let J=lt[et];return J===void 0&&(J=_(u()),lt[et]=J),J}function _(A){const N=[],tt=[],et=[];for(let $=0;$<e;$++)N[$]=0,tt[$]=0,et[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:tt,attributeDivisors:et,object:A,attributes:{},index:null}}function x(A,N,tt,et){const $=a.attributes,lt=N.attributes;let J=0;const pt=tt.getAttributes();for(const G in pt)if(pt[G].location>=0){const it=$[G];let vt=lt[G];if(vt===void 0&&(G==="instanceMatrix"&&A.instanceMatrix&&(vt=A.instanceMatrix),G==="instanceColor"&&A.instanceColor&&(vt=A.instanceColor)),it===void 0||it.attribute!==vt||vt&&it.data!==vt.data)return!0;J++}return a.attributesNum!==J||a.index!==et}function M(A,N,tt,et){const $={},lt=N.attributes;let J=0;const pt=tt.getAttributes();for(const G in pt)if(pt[G].location>=0){let it=lt[G];it===void 0&&(G==="instanceMatrix"&&A.instanceMatrix&&(it=A.instanceMatrix),G==="instanceColor"&&A.instanceColor&&(it=A.instanceColor));const vt={};vt.attribute=it,it&&it.data&&(vt.data=it.data),$[G]=vt,J++}a.attributes=$,a.attributesNum=J,a.index=et}function S(){const A=a.newAttributes;for(let N=0,tt=A.length;N<tt;N++)A[N]=0}function y(A){g(A,0)}function g(A,N){const tt=a.newAttributes,et=a.enabledAttributes,$=a.attributeDivisors;tt[A]=1,et[A]===0&&(r.enableVertexAttribArray(A),et[A]=1),$[A]!==N&&(r.vertexAttribDivisor(A,N),$[A]=N)}function I(){const A=a.newAttributes,N=a.enabledAttributes;for(let tt=0,et=N.length;tt<et;tt++)N[tt]!==A[tt]&&(r.disableVertexAttribArray(tt),N[tt]=0)}function C(A,N,tt,et,$,lt,J){J===!0?r.vertexAttribIPointer(A,N,tt,$,lt):r.vertexAttribPointer(A,N,tt,et,$,lt)}function w(A,N,tt,et){S();const $=et.attributes,lt=tt.getAttributes(),J=N.defaultAttributeValues;for(const pt in lt){const G=lt[pt];if(G.location>=0){let xt=$[pt];if(xt===void 0&&(pt==="instanceMatrix"&&A.instanceMatrix&&(xt=A.instanceMatrix),pt==="instanceColor"&&A.instanceColor&&(xt=A.instanceColor)),xt!==void 0){const it=xt.normalized,vt=xt.itemSize,zt=t.get(xt);if(zt===void 0)continue;const se=zt.buffer,Yt=zt.type,q=zt.bytesPerElement,rt=Yt===r.INT||Yt===r.UNSIGNED_INT||xt.gpuType===El;if(xt.isInterleavedBufferAttribute){const ut=xt.data,Dt=ut.stride,Wt=xt.offset;if(ut.isInstancedInterleavedBuffer){for(let Kt=0;Kt<G.locationSize;Kt++)g(G.location+Kt,ut.meshPerAttribute);A.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Kt=0;Kt<G.locationSize;Kt++)y(G.location+Kt);r.bindBuffer(r.ARRAY_BUFFER,se);for(let Kt=0;Kt<G.locationSize;Kt++)C(G.location+Kt,vt/G.locationSize,Yt,it,Dt*q,(Wt+vt/G.locationSize*Kt)*q,rt)}else{if(xt.isInstancedBufferAttribute){for(let ut=0;ut<G.locationSize;ut++)g(G.location+ut,xt.meshPerAttribute);A.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let ut=0;ut<G.locationSize;ut++)y(G.location+ut);r.bindBuffer(r.ARRAY_BUFFER,se);for(let ut=0;ut<G.locationSize;ut++)C(G.location+ut,vt/G.locationSize,Yt,it,vt*q,vt/G.locationSize*ut*q,rt)}}else if(J!==void 0){const it=J[pt];if(it!==void 0)switch(it.length){case 2:r.vertexAttrib2fv(G.location,it);break;case 3:r.vertexAttrib3fv(G.location,it);break;case 4:r.vertexAttrib4fv(G.location,it);break;default:r.vertexAttrib1fv(G.location,it)}}}}I()}function O(){W();for(const A in i){const N=i[A];for(const tt in N){const et=N[tt];for(const $ in et)m(et[$].object),delete et[$];delete N[tt]}delete i[A]}}function F(A){if(i[A.id]===void 0)return;const N=i[A.id];for(const tt in N){const et=N[tt];for(const $ in et)m(et[$].object),delete et[$];delete N[tt]}delete i[A.id]}function B(A){for(const N in i){const tt=i[N];if(tt[A.id]===void 0)continue;const et=tt[A.id];for(const $ in et)m(et[$].object),delete et[$];delete tt[A.id]}}function W(){R(),l=!0,a!==s&&(a=s,d(a.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:h,reset:W,resetDefaultState:R,dispose:O,releaseStatesOfGeometry:F,releaseStatesOfProgram:B,initAttributes:S,enableAttribute:y,disableUnusedAttributes:I}}function Hg(r,t,e){let i;function s(d){i=d}function a(d,m){r.drawArrays(i,d,m),e.update(m,i,1)}function l(d,m,p){p!==0&&(r.drawArraysInstanced(i,d,m,p),e.update(m,i,p))}function h(d,m,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,m,0,p);let x=0;for(let M=0;M<p;M++)x+=m[M];e.update(x,i,1)}function u(d,m,p,_){if(p===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<d.length;M++)l(d[M],m[M],_[M]);else{x.multiDrawArraysInstancedWEBGL(i,d,0,m,0,_,0,p);let M=0;for(let S=0;S<p;S++)M+=m[S]*_[S];e.update(M,i,1)}}this.setMode=s,this.render=a,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Vg(r,t,e,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");s=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(B){return!(B!==vn&&i.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const W=B===dr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==Bn&&i.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==An&&!W)}function u(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=e.precision!==void 0?e.precision:"highp";const m=u(d);m!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",m,"instead."),d=m);const p=e.logarithmicDepthBuffer===!0,_=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),I=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),C=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),O=M>0,F=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:u,textureFormatReadable:l,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:p,reversedDepthBuffer:_,maxTextures:x,maxVertexTextures:M,maxTextureSize:S,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:I,maxVaryings:C,maxFragmentUniforms:w,vertexTextures:O,maxSamples:F}}function Gg(r){const t=this;let e=null,i=0,s=!1,a=!1;const l=new Oi,h=new ee,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,_){const x=p.length!==0||_||i!==0||s;return s=_,i=p.length,x},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,_){e=m(p,_,0)},this.setState=function(p,_,x){const M=p.clippingPlanes,S=p.clipIntersection,y=p.clipShadows,g=r.get(p);if(!s||M===null||M.length===0||a&&!y)a?m(null):d();else{const I=a?0:i,C=I*4;let w=g.clippingState||null;u.value=w,w=m(M,_,C,x);for(let O=0;O!==C;++O)w[O]=e[O];g.clippingState=w,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=I}};function d(){u.value!==e&&(u.value=e,u.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function m(p,_,x,M){const S=p!==null?p.length:0;let y=null;if(S!==0){if(y=u.value,M!==!0||y===null){const g=x+S*4,I=_.matrixWorldInverse;h.getNormalMatrix(I),(y===null||y.length<g)&&(y=new Float32Array(g));for(let C=0,w=x;C!==S;++C,w+=4)l.copy(p[C]).applyMatrix4(I,h),l.normal.toArray(y,w),y[w+3]=l.constant}u.value=y,u.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,y}}function Wg(r){let t=new WeakMap;function e(l,h){return h===Va?l.mapping=xs:h===Ga&&(l.mapping=ys),l}function i(l){if(l&&l.isTexture){const h=l.mapping;if(h===Va||h===Ga)if(t.has(l)){const u=t.get(l).texture;return e(u,l.mapping)}else{const u=l.image;if(u&&u.height>0){const d=new cp(u.height);return d.fromEquirectangularTexture(r,l),t.set(l,d),l.addEventListener("dispose",s),e(d.texture,l.mapping)}else return null}}return l}function s(l){const h=l.target;h.removeEventListener("dispose",s);const u=t.get(h);u!==void 0&&(t.delete(h),u.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}const fs=4,Sh=[.125,.215,.35,.446,.526,.582],zi=20,Ta=new zl,Th=new Jt;let Ea=null,ba=0,wa=0,Aa=!1;const Fi=(1+Math.sqrt(5))/2,ds=1/Fi,Eh=[new V(-Fi,ds,0),new V(Fi,ds,0),new V(-ds,0,Fi),new V(ds,0,Fi),new V(0,Fi,-ds),new V(0,Fi,ds),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],Xg=new V;class bh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,a={}){const{size:l=256,position:h=Xg}=a;Ea=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,i,s,u,h),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ea,ba,wa),this._renderer.xr.enabled=Aa,t.scissorTest=!1,io(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xs||t.mapping===ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ea=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:dr,format:vn,colorSpace:tn,depthBuffer:!1},s=wh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wh(t,e,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zg(a)),this._blurMaterial=qg(a,t,e)}return s}_compileMaterial(t){const e=new un(this._lodPlanes[0],t);this._renderer.compile(e,Ta)}_sceneToCubeUV(t,e,i,s,a){const u=new $e(90,1,e,i),d=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,x=p.toneMapping;p.getClearColor(Th),p.toneMapping=Mi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null));const S=new ki({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),y=new un(new fr,S);let g=!1;const I=t.background;I?I.isColor&&(S.color.copy(I),t.background=null,g=!0):(S.color.copy(Th),g=!0);for(let C=0;C<6;C++){const w=C%3;w===0?(u.up.set(0,d[C],0),u.position.set(a.x,a.y,a.z),u.lookAt(a.x+m[C],a.y,a.z)):w===1?(u.up.set(0,0,d[C]),u.position.set(a.x,a.y,a.z),u.lookAt(a.x,a.y+m[C],a.z)):(u.up.set(0,d[C],0),u.position.set(a.x,a.y,a.z),u.lookAt(a.x,a.y,a.z+m[C]));const O=this._cubeSize;io(s,w*O,C>2?O:0,O,O),p.setRenderTarget(s),g&&p.render(y,u),p.render(t,u)}y.geometry.dispose(),y.material.dispose(),p.toneMapping=x,p.autoClear=_,t.background=I}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===xs||t.mapping===ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ah());const a=s?this._cubemapMaterial:this._equirectMaterial,l=new un(this._lodPlanes[0],a),h=a.uniforms;h.envMap.value=t;const u=this._cubeSize;io(e,0,0,3*u,2*u),i.setRenderTarget(e),i.render(l,Ta)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),h=Eh[(s-a-1)%Eh.length];this._blur(t,a-1,a,l,h)}e.autoClear=i}_blur(t,e,i,s,a){const l=this._pingPongRenderTarget;this._halfBlur(t,l,e,i,s,"latitudinal",a),this._halfBlur(l,t,i,i,s,"longitudinal",a)}_halfBlur(t,e,i,s,a,l,h){const u=this._renderer,d=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,p=new un(this._lodPlanes[s],d),_=d.uniforms,x=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*zi-1),S=a/M,y=isFinite(a)?1+Math.floor(m*S):zi;y>zi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${zi}`);const g=[];let I=0;for(let B=0;B<zi;++B){const W=B/S,R=Math.exp(-W*W/2);g.push(R),B===0?I+=R:B<y&&(I+=2*R)}for(let B=0;B<g.length;B++)g[B]=g[B]/I;_.envMap.value=t.texture,_.samples.value=y,_.weights.value=g,_.latitudinal.value=l==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:C}=this;_.dTheta.value=M,_.mipInt.value=C-i;const w=this._sizeLods[s],O=3*w*(s>C-fs?s-C+fs:0),F=4*(this._cubeSize-w);io(e,O,F,3*w,2*w),u.setRenderTarget(e),u.render(p,Ta)}}function Zg(r){const t=[],e=[],i=[];let s=r;const a=r-fs+1+Sh.length;for(let l=0;l<a;l++){const h=Math.pow(2,s);e.push(h);let u=1/h;l>r-fs?u=Sh[l-r+fs-1]:l===0&&(u=0),i.push(u);const d=1/(h-2),m=-d,p=1+d,_=[m,m,p,m,p,p,m,m,p,p,m,p],x=6,M=6,S=3,y=2,g=1,I=new Float32Array(S*M*x),C=new Float32Array(y*M*x),w=new Float32Array(g*M*x);for(let F=0;F<x;F++){const B=F%3*2/3-1,W=F>2?0:-1,R=[B,W,0,B+2/3,W,0,B+2/3,W+1,0,B,W,0,B+2/3,W+1,0,B,W+1,0];I.set(R,S*M*F),C.set(_,y*M*F);const A=[F,F,F,F,F,F];w.set(A,g*M*F)}const O=new Hn;O.setAttribute("position",new Qe(I,S)),O.setAttribute("uv",new Qe(C,y)),O.setAttribute("faceIndex",new Qe(w,g)),t.push(O),s>fs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function wh(r,t,e){const i=new Gi(r,t,e);return i.texture.mapping=vo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function io(r,t,e,i,s){r.viewport.set(t,e,i,s),r.scissor.set(t,e,i,s)}function qg(r,t,e){const i=new Float32Array(zi),s=new V(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Ah(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Rh(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Vl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Yg(r){let t=new WeakMap,e=null;function i(h){if(h&&h.isTexture){const u=h.mapping,d=u===Va||u===Ga,m=u===xs||u===ys;if(d||m){let p=t.get(h);const _=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return e===null&&(e=new bh(r)),p=d?e.fromEquirectangular(h,p):e.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const x=h.image;return d&&x&&x.height>0||m&&x&&s(x)?(e===null&&(e=new bh(r)),p=d?e.fromEquirectangular(h):e.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",a),p.texture):null}}}return h}function s(h){let u=0;const d=6;for(let m=0;m<d;m++)h[m]!==void 0&&u++;return u===d}function a(h){const u=h.target;u.removeEventListener("dispose",a);const d=t.get(u);d!==void 0&&(t.delete(u),d.dispose())}function l(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:l}}function Kg(r){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&ms("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function jg(r,t,e,i){const s={},a=new WeakMap;function l(p){const _=p.target;_.index!==null&&t.remove(_.index);for(const M in _.attributes)t.remove(_.attributes[M]);_.removeEventListener("dispose",l),delete s[_.id];const x=a.get(_);x&&(t.remove(x),a.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function h(p,_){return s[_.id]===!0||(_.addEventListener("dispose",l),s[_.id]=!0,e.memory.geometries++),_}function u(p){const _=p.attributes;for(const x in _)t.update(_[x],r.ARRAY_BUFFER)}function d(p){const _=[],x=p.index,M=p.attributes.position;let S=0;if(x!==null){const I=x.array;S=x.version;for(let C=0,w=I.length;C<w;C+=3){const O=I[C+0],F=I[C+1],B=I[C+2];_.push(O,F,F,B,B,O)}}else if(M!==void 0){const I=M.array;S=M.version;for(let C=0,w=I.length/3-1;C<w;C+=3){const O=C+0,F=C+1,B=C+2;_.push(O,F,F,B,B,O)}}else return;const y=new(du(_)?gu:_u)(_,1);y.version=S;const g=a.get(p);g&&t.remove(g),a.set(p,y)}function m(p){const _=a.get(p);if(_){const x=p.index;x!==null&&_.version<x.version&&d(p)}else d(p);return a.get(p)}return{get:h,update:u,getWireframeAttribute:m}}function $g(r,t,e){let i;function s(_){i=_}let a,l;function h(_){a=_.type,l=_.bytesPerElement}function u(_,x){r.drawElements(i,x,a,_*l),e.update(x,i,1)}function d(_,x,M){M!==0&&(r.drawElementsInstanced(i,x,a,_*l,M),e.update(x,i,M))}function m(_,x,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,a,_,0,M);let y=0;for(let g=0;g<M;g++)y+=x[g];e.update(y,i,1)}function p(_,x,M,S){if(M===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<_.length;g++)d(_[g]/l,x[g],S[g]);else{y.multiDrawElementsInstancedWEBGL(i,x,0,a,_,0,S,0,M);let g=0;for(let I=0;I<M;I++)g+=x[I]*S[I];e.update(g,i,1)}}this.setMode=s,this.setIndex=h,this.render=u,this.renderInstances=d,this.renderMultiDraw=m,this.renderMultiDrawInstances=p}function Jg(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,l,h){switch(e.calls++,l){case r.TRIANGLES:e.triangles+=h*(a/3);break;case r.LINES:e.lines+=h*(a/2);break;case r.LINE_STRIP:e.lines+=h*(a-1);break;case r.LINE_LOOP:e.lines+=h*a;break;case r.POINTS:e.points+=h*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Qg(r,t,e){const i=new WeakMap,s=new ye;function a(l,h,u){const d=l.morphTargetInfluences,m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=m!==void 0?m.length:0;let _=i.get(h);if(_===void 0||_.count!==p){let R=function(){B.dispose(),i.delete(h),h.removeEventListener("dispose",R)};_!==void 0&&_.texture.dispose();const x=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],g=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let C=0;x===!0&&(C=1),M===!0&&(C=2),S===!0&&(C=3);let w=h.attributes.position.count*C,O=1;w>t.maxTextureSize&&(O=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const F=new Float32Array(w*O*4*p),B=new fu(F,w,O,p);B.type=An,B.needsUpdate=!0;const W=C*4;for(let A=0;A<p;A++){const N=y[A],tt=g[A],et=I[A],$=w*O*4*A;for(let lt=0;lt<N.count;lt++){const J=lt*W;x===!0&&(s.fromBufferAttribute(N,lt),F[$+J+0]=s.x,F[$+J+1]=s.y,F[$+J+2]=s.z,F[$+J+3]=0),M===!0&&(s.fromBufferAttribute(tt,lt),F[$+J+4]=s.x,F[$+J+5]=s.y,F[$+J+6]=s.z,F[$+J+7]=0),S===!0&&(s.fromBufferAttribute(et,lt),F[$+J+8]=s.x,F[$+J+9]=s.y,F[$+J+10]=s.z,F[$+J+11]=et.itemSize===4?s.w:1)}}_={count:p,texture:B,size:new fe(w,O)},i.set(h,_),h.addEventListener("dispose",R)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(r,"morphTexture",l.morphTexture,e);else{let x=0;for(let S=0;S<d.length;S++)x+=d[S];const M=h.morphTargetsRelative?1:1-x;u.getUniforms().setValue(r,"morphTargetBaseInfluence",M),u.getUniforms().setValue(r,"morphTargetInfluences",d)}u.getUniforms().setValue(r,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:a}}function tv(r,t,e,i){let s=new WeakMap;function a(u){const d=i.render.frame,m=u.geometry,p=t.get(u,m);if(s.get(p)!==d&&(t.update(p),s.set(p,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",h)===!1&&u.addEventListener("dispose",h),s.get(u)!==d&&(e.update(u.instanceMatrix,r.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,r.ARRAY_BUFFER),s.set(u,d))),u.isSkinnedMesh){const _=u.skeleton;s.get(_)!==d&&(_.update(),s.set(_,d))}return p}function l(){s=new WeakMap}function h(u){const d=u.target;d.removeEventListener("dispose",h),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:l}}const Lu=new He,Ch=new bu(1,1),Iu=new fu,Du=new Zf,Nu=new yu,Ph=[],Lh=[],Ih=new Float32Array(16),Dh=new Float32Array(9),Nh=new Float32Array(4);function Ls(r,t,e){const i=r[0];if(i<=0||i>0)return r;const s=t*e;let a=Ph[s];if(a===void 0&&(a=new Float32Array(s),Ph[s]=a),t!==0){i.toArray(a,0);for(let l=1,h=0;l!==t;++l)h+=e,r[l].toArray(a,h)}return a}function Fe(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function Be(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function So(r,t){let e=Lh[t];e===void 0&&(e=new Int32Array(t),Lh[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function ev(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function nv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;r.uniform2fv(this.addr,t),Be(e,t)}}function iv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;r.uniform3fv(this.addr,t),Be(e,t)}}function sv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;r.uniform4fv(this.addr,t),Be(e,t)}}function rv(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,i))return;Nh.set(i),r.uniformMatrix2fv(this.addr,!1,Nh),Be(e,i)}}function ov(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,i))return;Dh.set(i),r.uniformMatrix3fv(this.addr,!1,Dh),Be(e,i)}}function av(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,i))return;Ih.set(i),r.uniformMatrix4fv(this.addr,!1,Ih),Be(e,i)}}function lv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function cv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;r.uniform2iv(this.addr,t),Be(e,t)}}function hv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;r.uniform3iv(this.addr,t),Be(e,t)}}function uv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;r.uniform4iv(this.addr,t),Be(e,t)}}function dv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function fv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;r.uniform2uiv(this.addr,t),Be(e,t)}}function pv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;r.uniform3uiv(this.addr,t),Be(e,t)}}function mv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;r.uniform4uiv(this.addr,t),Be(e,t)}}function _v(r,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s);let a;this.type===r.SAMPLER_2D_SHADOW?(Ch.compareFunction=uu,a=Ch):a=Lu,e.setTexture2D(t||a,s)}function gv(r,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Du,s)}function vv(r,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Nu,s)}function xv(r,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Iu,s)}function yv(r){switch(r){case 5126:return ev;case 35664:return nv;case 35665:return iv;case 35666:return sv;case 35674:return rv;case 35675:return ov;case 35676:return av;case 5124:case 35670:return lv;case 35667:case 35671:return cv;case 35668:case 35672:return hv;case 35669:case 35673:return uv;case 5125:return dv;case 36294:return fv;case 36295:return pv;case 36296:return mv;case 35678:case 36198:case 36298:case 36306:case 35682:return _v;case 35679:case 36299:case 36307:return gv;case 35680:case 36300:case 36308:case 36293:return vv;case 36289:case 36303:case 36311:case 36292:return xv}}function Mv(r,t){r.uniform1fv(this.addr,t)}function Sv(r,t){const e=Ls(t,this.size,2);r.uniform2fv(this.addr,e)}function Tv(r,t){const e=Ls(t,this.size,3);r.uniform3fv(this.addr,e)}function Ev(r,t){const e=Ls(t,this.size,4);r.uniform4fv(this.addr,e)}function bv(r,t){const e=Ls(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function wv(r,t){const e=Ls(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Av(r,t){const e=Ls(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Rv(r,t){r.uniform1iv(this.addr,t)}function Cv(r,t){r.uniform2iv(this.addr,t)}function Pv(r,t){r.uniform3iv(this.addr,t)}function Lv(r,t){r.uniform4iv(this.addr,t)}function Iv(r,t){r.uniform1uiv(this.addr,t)}function Dv(r,t){r.uniform2uiv(this.addr,t)}function Nv(r,t){r.uniform3uiv(this.addr,t)}function Uv(r,t){r.uniform4uiv(this.addr,t)}function Ov(r,t,e){const i=this.cache,s=t.length,a=So(e,s);Fe(i,a)||(r.uniform1iv(this.addr,a),Be(i,a));for(let l=0;l!==s;++l)e.setTexture2D(t[l]||Lu,a[l])}function Fv(r,t,e){const i=this.cache,s=t.length,a=So(e,s);Fe(i,a)||(r.uniform1iv(this.addr,a),Be(i,a));for(let l=0;l!==s;++l)e.setTexture3D(t[l]||Du,a[l])}function Bv(r,t,e){const i=this.cache,s=t.length,a=So(e,s);Fe(i,a)||(r.uniform1iv(this.addr,a),Be(i,a));for(let l=0;l!==s;++l)e.setTextureCube(t[l]||Nu,a[l])}function zv(r,t,e){const i=this.cache,s=t.length,a=So(e,s);Fe(i,a)||(r.uniform1iv(this.addr,a),Be(i,a));for(let l=0;l!==s;++l)e.setTexture2DArray(t[l]||Iu,a[l])}function kv(r){switch(r){case 5126:return Mv;case 35664:return Sv;case 35665:return Tv;case 35666:return Ev;case 35674:return bv;case 35675:return wv;case 35676:return Av;case 5124:case 35670:return Rv;case 35667:case 35671:return Cv;case 35668:case 35672:return Pv;case 35669:case 35673:return Lv;case 5125:return Iv;case 36294:return Dv;case 36295:return Nv;case 36296:return Uv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ov;case 35679:case 36299:case 36307:return Fv;case 35680:case 36300:case 36308:case 36293:return Bv;case 36289:case 36303:case 36311:case 36292:return zv}}class Hv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=yv(e.type)}}class Vv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kv(e.type)}}class Gv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let a=0,l=s.length;a!==l;++a){const h=s[a];h.setValue(t,e[h.id],i)}}}const Ra=/(\w+)(\])?(\[|\.)?/g;function Uh(r,t){r.seq.push(t),r.map[t.id]=t}function Wv(r,t,e){const i=r.name,s=i.length;for(Ra.lastIndex=0;;){const a=Ra.exec(i),l=Ra.lastIndex;let h=a[1];const u=a[2]==="]",d=a[3];if(u&&(h=h|0),d===void 0||d==="["&&l+2===s){Uh(e,d===void 0?new Hv(h,r,t):new Vv(h,r,t));break}else{let p=e.map[h];p===void 0&&(p=new Gv(h),Uh(e,p)),e=p}}}class uo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=t.getActiveUniform(e,s),l=t.getUniformLocation(e,a.name);Wv(a,l,this)}}setValue(t,e,i,s){const a=this.map[e];a!==void 0&&a.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let a=0,l=e.length;a!==l;++a){const h=e[a],u=i[h.id];u.needsUpdate!==!1&&h.setValue(t,u.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,a=t.length;s!==a;++s){const l=t[s];l.id in e&&i.push(l)}return i}}function Oh(r,t,e){const i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}const Xv=37297;let Zv=0;function qv(r,t){const e=r.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let l=s;l<a;l++){const h=l+1;i.push(`${h===t?">":" "} ${h}: ${e[l]}`)}return i.join(`
`)}const Fh=new ee;function Yv(r){ge._getMatrix(Fh,ge.workingColorSpace,r);const t=`mat3( ${Fh.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(r)){case po:return[t,"LinearTransferOETF"];case Re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Bh(r,t,e){const i=r.getShaderParameter(t,r.COMPILE_STATUS),a=(r.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const h=parseInt(l[1]);return e.toUpperCase()+`

`+a+`

`+qv(r.getShaderSource(t),h)}else return a}function Kv(r,t){const e=Yv(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function jv(r,t){let e;switch(t){case ef:e="Linear";break;case nf:e="Reinhard";break;case sf:e="Cineon";break;case rf:e="ACESFilmic";break;case af:e="AgX";break;case lf:e="Neutral";break;case of:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const so=new V;function $v(){ge.getLuminanceCoefficients(so);const r=so.x.toFixed(4),t=so.y.toFixed(4),e=so.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tr).join(`
`)}function Qv(r){const t=[];for(const e in r){const i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function tx(r,t){const e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=r.getActiveAttrib(t,s),l=a.name;let h=1;a.type===r.FLOAT_MAT2&&(h=2),a.type===r.FLOAT_MAT3&&(h=3),a.type===r.FLOAT_MAT4&&(h=4),e[l]={type:a.type,location:r.getAttribLocation(t,l),locationSize:h}}return e}function tr(r){return r!==""}function zh(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kh(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ex=/^[ \t]*#include +<([\w\d./]+)>/gm;function yl(r){return r.replace(ex,ix)}const nx=new Map;function ix(r,t){let e=ne[t];if(e===void 0){const i=nx.get(t);if(i!==void 0)e=ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return yl(e)}const sx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hh(r){return r.replace(sx,rx)}function rx(r,t,e,i){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Vh(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ox(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Jh?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Nd?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ti&&(t="SHADOWMAP_TYPE_VSM"),t}function ax(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case xs:case ys:t="ENVMAP_TYPE_CUBE";break;case vo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lx(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ys:t="ENVMAP_MODE_REFRACTION";break}return t}function cx(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Qh:t="ENVMAP_BLENDING_MULTIPLY";break;case Qd:t="ENVMAP_BLENDING_MIX";break;case tf:t="ENVMAP_BLENDING_ADD";break}return t}function hx(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function ux(r,t,e,i){const s=r.getContext(),a=e.defines;let l=e.vertexShader,h=e.fragmentShader;const u=ox(e),d=ax(e),m=lx(e),p=cx(e),_=hx(e),x=Jv(e),M=Qv(a),S=s.createProgram();let y,g,I=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(tr).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(tr).join(`
`),g.length>0&&(g+=`
`)):(y=[Vh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),g=[Vh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+m:"",e.envMap?"#define "+p:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mi?"#define TONE_MAPPING":"",e.toneMapping!==Mi?ne.tonemapping_pars_fragment:"",e.toneMapping!==Mi?jv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,Kv("linearToOutputTexel",e.outputColorSpace),$v(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(tr).join(`
`)),l=yl(l),l=zh(l,e),l=kh(l,e),h=yl(h),h=zh(h,e),h=kh(h,e),l=Hh(l),h=Hh(h),e.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",e.glslVersion===Bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const C=I+y+l,w=I+g+h,O=Oh(s,s.VERTEX_SHADER,C),F=Oh(s,s.FRAGMENT_SHADER,w);s.attachShader(S,O),s.attachShader(S,F),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function B(N){if(r.debug.checkShaderErrors){const tt=s.getProgramInfoLog(S)||"",et=s.getShaderInfoLog(O)||"",$=s.getShaderInfoLog(F)||"",lt=tt.trim(),J=et.trim(),pt=$.trim();let G=!0,xt=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,S,O,F);else{const it=Bh(s,O,"vertex"),vt=Bh(s,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+lt+`
`+it+`
`+vt)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(J===""||pt==="")&&(xt=!1);xt&&(N.diagnostics={runnable:G,programLog:lt,vertexShader:{log:J,prefix:y},fragmentShader:{log:pt,prefix:g}})}s.deleteShader(O),s.deleteShader(F),W=new uo(s,S),R=tx(s,S)}let W;this.getUniforms=function(){return W===void 0&&B(this),W};let R;this.getAttributes=function(){return R===void 0&&B(this),R};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(S,Xv)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zv++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=O,this.fragmentShader=F,this}let dx=0;class fx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(i),l=this._getShaderCacheForMaterial(t);return l.has(s)===!1&&(l.add(s),s.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new px(t),e.set(t,i)),i}}class px{constructor(t){this.id=dx++,this.code=t,this.usedTimes=0}}function mx(r,t,e,i,s,a,l){const h=new pu,u=new fx,d=new Set,m=[],p=s.logarithmicDepthBuffer,_=s.vertexTextures;let x=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(R){return d.add(R),R===0?"uv":`uv${R}`}function y(R,A,N,tt,et){const $=tt.fog,lt=et.geometry,J=R.isMeshStandardMaterial?tt.environment:null,pt=(R.isMeshStandardMaterial?e:t).get(R.envMap||J),G=pt&&pt.mapping===vo?pt.image.height:null,xt=M[R.type];R.precision!==null&&(x=s.getMaxPrecision(R.precision),x!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",x,"instead."));const it=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,vt=it!==void 0?it.length:0;let zt=0;lt.morphAttributes.position!==void 0&&(zt=1),lt.morphAttributes.normal!==void 0&&(zt=2),lt.morphAttributes.color!==void 0&&(zt=3);let se,Yt,q,rt;if(xt){const ve=Nn[xt];se=ve.vertexShader,Yt=ve.fragmentShader}else se=R.vertexShader,Yt=R.fragmentShader,u.update(R),q=u.getVertexShaderID(R),rt=u.getFragmentShaderID(R);const ut=r.getRenderTarget(),Dt=r.state.buffers.depth.getReversed(),Wt=et.isInstancedMesh===!0,Kt=et.isBatchedMesh===!0,Pe=!!R.map,re=!!R.matcap,U=!!pt,be=!!R.aoMap,kt=!!R.lightMap,pe=!!R.bumpMap,Nt=!!R.normalMap,Se=!!R.displacementMap,wt=!!R.emissiveMap,Qt=!!R.metalnessMap,Ne=!!R.roughnessMap,Le=R.anisotropy>0,P=R.clearcoat>0,E=R.dispersion>0,Z=R.iridescence>0,nt=R.sheen>0,at=R.transmission>0,Q=Le&&!!R.anisotropyMap,Ut=P&&!!R.clearcoatMap,mt=P&&!!R.clearcoatNormalMap,Ct=P&&!!R.clearcoatRoughnessMap,Pt=Z&&!!R.iridescenceMap,dt=Z&&!!R.iridescenceThicknessMap,yt=nt&&!!R.sheenColorMap,Xt=nt&&!!R.sheenRoughnessMap,Lt=!!R.specularMap,gt=!!R.specularColorMap,$t=!!R.specularIntensityMap,z=at&&!!R.transmissionMap,ft=at&&!!R.thicknessMap,_t=!!R.gradientMap,bt=!!R.alphaMap,ct=R.alphaTest>0,st=!!R.alphaHash,Rt=!!R.extensions;let jt=Mi;R.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(jt=r.toneMapping);const we={shaderID:xt,shaderType:R.type,shaderName:R.name,vertexShader:se,fragmentShader:Yt,defines:R.defines,customVertexShaderID:q,customFragmentShaderID:rt,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:x,batching:Kt,batchingColor:Kt&&et._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&et.instanceColor!==null,instancingMorph:Wt&&et.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ut===null?r.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:tn,alphaToCoverage:!!R.alphaToCoverage,map:Pe,matcap:re,envMap:U,envMapMode:U&&pt.mapping,envMapCubeUVHeight:G,aoMap:be,lightMap:kt,bumpMap:pe,normalMap:Nt,displacementMap:_&&Se,emissiveMap:wt,normalMapObjectSpace:Nt&&R.normalMapType===pf,normalMapTangentSpace:Nt&&R.normalMapType===hu,metalnessMap:Qt,roughnessMap:Ne,anisotropy:Le,anisotropyMap:Q,clearcoat:P,clearcoatMap:Ut,clearcoatNormalMap:mt,clearcoatRoughnessMap:Ct,dispersion:E,iridescence:Z,iridescenceMap:Pt,iridescenceThicknessMap:dt,sheen:nt,sheenColorMap:yt,sheenRoughnessMap:Xt,specularMap:Lt,specularColorMap:gt,specularIntensityMap:$t,transmission:at,transmissionMap:z,thicknessMap:ft,gradientMap:_t,opaque:R.transparent===!1&&R.blending===ps&&R.alphaToCoverage===!1,alphaMap:bt,alphaTest:ct,alphaHash:st,combine:R.combine,mapUv:Pe&&S(R.map.channel),aoMapUv:be&&S(R.aoMap.channel),lightMapUv:kt&&S(R.lightMap.channel),bumpMapUv:pe&&S(R.bumpMap.channel),normalMapUv:Nt&&S(R.normalMap.channel),displacementMapUv:Se&&S(R.displacementMap.channel),emissiveMapUv:wt&&S(R.emissiveMap.channel),metalnessMapUv:Qt&&S(R.metalnessMap.channel),roughnessMapUv:Ne&&S(R.roughnessMap.channel),anisotropyMapUv:Q&&S(R.anisotropyMap.channel),clearcoatMapUv:Ut&&S(R.clearcoatMap.channel),clearcoatNormalMapUv:mt&&S(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&S(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&S(R.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&S(R.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&S(R.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&S(R.sheenRoughnessMap.channel),specularMapUv:Lt&&S(R.specularMap.channel),specularColorMapUv:gt&&S(R.specularColorMap.channel),specularIntensityMapUv:$t&&S(R.specularIntensityMap.channel),transmissionMapUv:z&&S(R.transmissionMap.channel),thicknessMapUv:ft&&S(R.thicknessMap.channel),alphaMapUv:bt&&S(R.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Nt||Le),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!lt.attributes.uv&&(Pe||bt),fog:!!$,useFog:R.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Dt,skinning:et.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:zt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:R.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:jt,decodeVideoTexture:Pe&&R.map.isVideoTexture===!0&&ge.getTransfer(R.map.colorSpace)===Re,decodeVideoTextureEmissive:wt&&R.emissiveMap.isVideoTexture===!0&&ge.getTransfer(R.emissiveMap.colorSpace)===Re,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Un,flipSided:R.side===sn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Rt&&R.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&R.extensions.multiDraw===!0||Kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return we.vertexUv1s=d.has(1),we.vertexUv2s=d.has(2),we.vertexUv3s=d.has(3),d.clear(),we}function g(R){const A=[];if(R.shaderID?A.push(R.shaderID):(A.push(R.customVertexShaderID),A.push(R.customFragmentShaderID)),R.defines!==void 0)for(const N in R.defines)A.push(N),A.push(R.defines[N]);return R.isRawShaderMaterial===!1&&(I(A,R),C(A,R),A.push(r.outputColorSpace)),A.push(R.customProgramCacheKey),A.join()}function I(R,A){R.push(A.precision),R.push(A.outputColorSpace),R.push(A.envMapMode),R.push(A.envMapCubeUVHeight),R.push(A.mapUv),R.push(A.alphaMapUv),R.push(A.lightMapUv),R.push(A.aoMapUv),R.push(A.bumpMapUv),R.push(A.normalMapUv),R.push(A.displacementMapUv),R.push(A.emissiveMapUv),R.push(A.metalnessMapUv),R.push(A.roughnessMapUv),R.push(A.anisotropyMapUv),R.push(A.clearcoatMapUv),R.push(A.clearcoatNormalMapUv),R.push(A.clearcoatRoughnessMapUv),R.push(A.iridescenceMapUv),R.push(A.iridescenceThicknessMapUv),R.push(A.sheenColorMapUv),R.push(A.sheenRoughnessMapUv),R.push(A.specularMapUv),R.push(A.specularColorMapUv),R.push(A.specularIntensityMapUv),R.push(A.transmissionMapUv),R.push(A.thicknessMapUv),R.push(A.combine),R.push(A.fogExp2),R.push(A.sizeAttenuation),R.push(A.morphTargetsCount),R.push(A.morphAttributeCount),R.push(A.numDirLights),R.push(A.numPointLights),R.push(A.numSpotLights),R.push(A.numSpotLightMaps),R.push(A.numHemiLights),R.push(A.numRectAreaLights),R.push(A.numDirLightShadows),R.push(A.numPointLightShadows),R.push(A.numSpotLightShadows),R.push(A.numSpotLightShadowsWithMaps),R.push(A.numLightProbes),R.push(A.shadowMapType),R.push(A.toneMapping),R.push(A.numClippingPlanes),R.push(A.numClipIntersection),R.push(A.depthPacking)}function C(R,A){h.disableAll(),A.supportsVertexTextures&&h.enable(0),A.instancing&&h.enable(1),A.instancingColor&&h.enable(2),A.instancingMorph&&h.enable(3),A.matcap&&h.enable(4),A.envMap&&h.enable(5),A.normalMapObjectSpace&&h.enable(6),A.normalMapTangentSpace&&h.enable(7),A.clearcoat&&h.enable(8),A.iridescence&&h.enable(9),A.alphaTest&&h.enable(10),A.vertexColors&&h.enable(11),A.vertexAlphas&&h.enable(12),A.vertexUv1s&&h.enable(13),A.vertexUv2s&&h.enable(14),A.vertexUv3s&&h.enable(15),A.vertexTangents&&h.enable(16),A.anisotropy&&h.enable(17),A.alphaHash&&h.enable(18),A.batching&&h.enable(19),A.dispersion&&h.enable(20),A.batchingColor&&h.enable(21),A.gradientMap&&h.enable(22),R.push(h.mask),h.disableAll(),A.fog&&h.enable(0),A.useFog&&h.enable(1),A.flatShading&&h.enable(2),A.logarithmicDepthBuffer&&h.enable(3),A.reversedDepthBuffer&&h.enable(4),A.skinning&&h.enable(5),A.morphTargets&&h.enable(6),A.morphNormals&&h.enable(7),A.morphColors&&h.enable(8),A.premultipliedAlpha&&h.enable(9),A.shadowMapEnabled&&h.enable(10),A.doubleSided&&h.enable(11),A.flipSided&&h.enable(12),A.useDepthPacking&&h.enable(13),A.dithering&&h.enable(14),A.transmission&&h.enable(15),A.sheen&&h.enable(16),A.opaque&&h.enable(17),A.pointsUvs&&h.enable(18),A.decodeVideoTexture&&h.enable(19),A.decodeVideoTextureEmissive&&h.enable(20),A.alphaToCoverage&&h.enable(21),R.push(h.mask)}function w(R){const A=M[R.type];let N;if(A){const tt=Nn[A];N=rp.clone(tt.uniforms)}else N=R.uniforms;return N}function O(R,A){let N;for(let tt=0,et=m.length;tt<et;tt++){const $=m[tt];if($.cacheKey===A){N=$,++N.usedTimes;break}}return N===void 0&&(N=new ux(r,A,R,a),m.push(N)),N}function F(R){if(--R.usedTimes===0){const A=m.indexOf(R);m[A]=m[m.length-1],m.pop(),R.destroy()}}function B(R){u.remove(R)}function W(){u.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:w,acquireProgram:O,releaseProgram:F,releaseShaderCache:B,programs:m,dispose:W}}function _x(){let r=new WeakMap;function t(l){return r.has(l)}function e(l){let h=r.get(l);return h===void 0&&(h={},r.set(l,h)),h}function i(l){r.delete(l)}function s(l,h,u){r.get(l)[h]=u}function a(){r=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:a}}function gx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Gh(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Wh(){const r=[];let t=0;const e=[],i=[],s=[];function a(){t=0,e.length=0,i.length=0,s.length=0}function l(p,_,x,M,S,y){let g=r[t];return g===void 0?(g={id:p.id,object:p,geometry:_,material:x,groupOrder:M,renderOrder:p.renderOrder,z:S,group:y},r[t]=g):(g.id=p.id,g.object=p,g.geometry=_,g.material=x,g.groupOrder=M,g.renderOrder=p.renderOrder,g.z=S,g.group=y),t++,g}function h(p,_,x,M,S,y){const g=l(p,_,x,M,S,y);x.transmission>0?i.push(g):x.transparent===!0?s.push(g):e.push(g)}function u(p,_,x,M,S,y){const g=l(p,_,x,M,S,y);x.transmission>0?i.unshift(g):x.transparent===!0?s.unshift(g):e.unshift(g)}function d(p,_){e.length>1&&e.sort(p||gx),i.length>1&&i.sort(_||Gh),s.length>1&&s.sort(_||Gh)}function m(){for(let p=t,_=r.length;p<_;p++){const x=r[p];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:i,transparent:s,init:a,push:h,unshift:u,finish:m,sort:d}}function vx(){let r=new WeakMap;function t(i,s){const a=r.get(i);let l;return a===void 0?(l=new Wh,r.set(i,[l])):s>=a.length?(l=new Wh,a.push(l)):l=a[s],l}function e(){r=new WeakMap}return{get:t,dispose:e}}function xx(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new Jt};break;case"SpotLight":e={position:new V,direction:new V,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new V,halfWidth:new V,halfHeight:new V};break}return r[t.id]=e,e}}}function yx(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Mx=0;function Sx(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Tx(r){const t=new xx,e=yx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new V);const s=new V,a=new ie,l=new ie;function h(d){let m=0,p=0,_=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let x=0,M=0,S=0,y=0,g=0,I=0,C=0,w=0,O=0,F=0,B=0;d.sort(Sx);for(let R=0,A=d.length;R<A;R++){const N=d[R],tt=N.color,et=N.intensity,$=N.distance,lt=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)m+=tt.r*et,p+=tt.g*et,_+=tt.b*et;else if(N.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(N.sh.coefficients[J],et);B++}else if(N.isDirectionalLight){const J=t.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const pt=N.shadow,G=e.get(N);G.shadowIntensity=pt.intensity,G.shadowBias=pt.bias,G.shadowNormalBias=pt.normalBias,G.shadowRadius=pt.radius,G.shadowMapSize=pt.mapSize,i.directionalShadow[x]=G,i.directionalShadowMap[x]=lt,i.directionalShadowMatrix[x]=N.shadow.matrix,I++}i.directional[x]=J,x++}else if(N.isSpotLight){const J=t.get(N);J.position.setFromMatrixPosition(N.matrixWorld),J.color.copy(tt).multiplyScalar(et),J.distance=$,J.coneCos=Math.cos(N.angle),J.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),J.decay=N.decay,i.spot[S]=J;const pt=N.shadow;if(N.map&&(i.spotLightMap[O]=N.map,O++,pt.updateMatrices(N),N.castShadow&&F++),i.spotLightMatrix[S]=pt.matrix,N.castShadow){const G=e.get(N);G.shadowIntensity=pt.intensity,G.shadowBias=pt.bias,G.shadowNormalBias=pt.normalBias,G.shadowRadius=pt.radius,G.shadowMapSize=pt.mapSize,i.spotShadow[S]=G,i.spotShadowMap[S]=lt,w++}S++}else if(N.isRectAreaLight){const J=t.get(N);J.color.copy(tt).multiplyScalar(et),J.halfWidth.set(N.width*.5,0,0),J.halfHeight.set(0,N.height*.5,0),i.rectArea[y]=J,y++}else if(N.isPointLight){const J=t.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),J.distance=N.distance,J.decay=N.decay,N.castShadow){const pt=N.shadow,G=e.get(N);G.shadowIntensity=pt.intensity,G.shadowBias=pt.bias,G.shadowNormalBias=pt.normalBias,G.shadowRadius=pt.radius,G.shadowMapSize=pt.mapSize,G.shadowCameraNear=pt.camera.near,G.shadowCameraFar=pt.camera.far,i.pointShadow[M]=G,i.pointShadowMap[M]=lt,i.pointShadowMatrix[M]=N.shadow.matrix,C++}i.point[M]=J,M++}else if(N.isHemisphereLight){const J=t.get(N);J.skyColor.copy(N.color).multiplyScalar(et),J.groundColor.copy(N.groundColor).multiplyScalar(et),i.hemi[g]=J,g++}}y>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Mt.LTC_FLOAT_1,i.rectAreaLTC2=Mt.LTC_FLOAT_2):(i.rectAreaLTC1=Mt.LTC_HALF_1,i.rectAreaLTC2=Mt.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=p,i.ambient[2]=_;const W=i.hash;(W.directionalLength!==x||W.pointLength!==M||W.spotLength!==S||W.rectAreaLength!==y||W.hemiLength!==g||W.numDirectionalShadows!==I||W.numPointShadows!==C||W.numSpotShadows!==w||W.numSpotMaps!==O||W.numLightProbes!==B)&&(i.directional.length=x,i.spot.length=S,i.rectArea.length=y,i.point.length=M,i.hemi.length=g,i.directionalShadow.length=I,i.directionalShadowMap.length=I,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=I,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=w+O-F,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=B,W.directionalLength=x,W.pointLength=M,W.spotLength=S,W.rectAreaLength=y,W.hemiLength=g,W.numDirectionalShadows=I,W.numPointShadows=C,W.numSpotShadows=w,W.numSpotMaps=O,W.numLightProbes=B,i.version=Mx++)}function u(d,m){let p=0,_=0,x=0,M=0,S=0;const y=m.matrixWorldInverse;for(let g=0,I=d.length;g<I;g++){const C=d[g];if(C.isDirectionalLight){const w=i.directional[p];w.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(y),p++}else if(C.isSpotLight){const w=i.spot[x];w.position.setFromMatrixPosition(C.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(y),x++}else if(C.isRectAreaLight){const w=i.rectArea[M];w.position.setFromMatrixPosition(C.matrixWorld),w.position.applyMatrix4(y),l.identity(),a.copy(C.matrixWorld),a.premultiply(y),l.extractRotation(a),w.halfWidth.set(C.width*.5,0,0),w.halfHeight.set(0,C.height*.5,0),w.halfWidth.applyMatrix4(l),w.halfHeight.applyMatrix4(l),M++}else if(C.isPointLight){const w=i.point[_];w.position.setFromMatrixPosition(C.matrixWorld),w.position.applyMatrix4(y),_++}else if(C.isHemisphereLight){const w=i.hemi[S];w.direction.setFromMatrixPosition(C.matrixWorld),w.direction.transformDirection(y),S++}}}return{setup:h,setupView:u,state:i}}function Xh(r){const t=new Tx(r),e=[],i=[];function s(m){d.camera=m,e.length=0,i.length=0}function a(m){e.push(m)}function l(m){i.push(m)}function h(){t.setup(e)}function u(m){t.setupView(e,m)}const d={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:h,setupLightsView:u,pushLight:a,pushShadow:l}}function Ex(r){let t=new WeakMap;function e(s,a=0){const l=t.get(s);let h;return l===void 0?(h=new Xh(r),t.set(s,[h])):a>=l.length?(h=new Xh(r),l.push(h)):h=l[a],h}function i(){t=new WeakMap}return{get:e,dispose:i}}const bx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ax(r,t,e){let i=new Ul;const s=new fe,a=new fe,l=new ye,h=new Ep({depthPacking:ff}),u=new bp,d={},m=e.maxTextureSize,p={[oi]:sn,[sn]:oi,[Un]:Un},_=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:bx,fragmentShader:wx}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const M=new Hn;M.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new un(M,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jh;let g=this.type;this.render=function(F,B,W){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const R=r.getRenderTarget(),A=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),tt=r.state;tt.setBlending(yi),tt.buffers.depth.getReversed()?tt.buffers.color.setClear(0,0,0,0):tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);const et=g!==ti&&this.type===ti,$=g===ti&&this.type!==ti;for(let lt=0,J=F.length;lt<J;lt++){const pt=F[lt],G=pt.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",pt,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const xt=G.getFrameExtents();if(s.multiply(xt),a.copy(G.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(a.x=Math.floor(m/xt.x),s.x=a.x*xt.x,G.mapSize.x=a.x),s.y>m&&(a.y=Math.floor(m/xt.y),s.y=a.y*xt.y,G.mapSize.y=a.y)),G.map===null||et===!0||$===!0){const vt=this.type!==ti?{minFilter:Je,magFilter:Je}:{};G.map!==null&&G.map.dispose(),G.map=new Gi(s.x,s.y,vt),G.map.texture.name=pt.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const it=G.getViewportCount();for(let vt=0;vt<it;vt++){const zt=G.getViewport(vt);l.set(a.x*zt.x,a.y*zt.y,a.x*zt.z,a.y*zt.w),tt.viewport(l),G.updateMatrices(pt,vt),i=G.getFrustum(),w(B,W,G.camera,pt,this.type)}G.isPointLightShadow!==!0&&this.type===ti&&I(G,W),G.needsUpdate=!1}g=this.type,y.needsUpdate=!1,r.setRenderTarget(R,A,N)};function I(F,B){const W=t.update(S);_.defines.VSM_SAMPLES!==F.blurSamples&&(_.defines.VSM_SAMPLES=F.blurSamples,x.defines.VSM_SAMPLES=F.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Gi(s.x,s.y)),_.uniforms.shadow_pass.value=F.map.texture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(B,null,W,_,S,null),x.uniforms.shadow_pass.value=F.mapPass.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(B,null,W,x,S,null)}function C(F,B,W,R){let A=null;const N=W.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(N!==void 0)A=N;else if(A=W.isPointLight===!0?u:h,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const tt=A.uuid,et=B.uuid;let $=d[tt];$===void 0&&($={},d[tt]=$);let lt=$[et];lt===void 0&&(lt=A.clone(),$[et]=lt,B.addEventListener("dispose",O)),A=lt}if(A.visible=B.visible,A.wireframe=B.wireframe,R===ti?A.side=B.shadowSide!==null?B.shadowSide:B.side:A.side=B.shadowSide!==null?B.shadowSide:p[B.side],A.alphaMap=B.alphaMap,A.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,A.map=B.map,A.clipShadows=B.clipShadows,A.clippingPlanes=B.clippingPlanes,A.clipIntersection=B.clipIntersection,A.displacementMap=B.displacementMap,A.displacementScale=B.displacementScale,A.displacementBias=B.displacementBias,A.wireframeLinewidth=B.wireframeLinewidth,A.linewidth=B.linewidth,W.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const tt=r.properties.get(A);tt.light=W}return A}function w(F,B,W,R,A){if(F.visible===!1)return;if(F.layers.test(B.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&A===ti)&&(!F.frustumCulled||i.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,F.matrixWorld);const et=t.update(F),$=F.material;if(Array.isArray($)){const lt=et.groups;for(let J=0,pt=lt.length;J<pt;J++){const G=lt[J],xt=$[G.materialIndex];if(xt&&xt.visible){const it=C(F,xt,R,A);F.onBeforeShadow(r,F,B,W,et,it,G),r.renderBufferDirect(W,null,et,it,F,G),F.onAfterShadow(r,F,B,W,et,it,G)}}}else if($.visible){const lt=C(F,$,R,A);F.onBeforeShadow(r,F,B,W,et,lt,null),r.renderBufferDirect(W,null,et,lt,F,null),F.onAfterShadow(r,F,B,W,et,lt,null)}}const tt=F.children;for(let et=0,$=tt.length;et<$;et++)w(tt[et],B,W,R,A)}function O(F){F.target.removeEventListener("dispose",O);for(const W in d){const R=d[W],A=F.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}const Rx={[Ua]:Oa,[Fa]:ka,[Ba]:Ha,[vs]:za,[Oa]:Ua,[ka]:Fa,[Ha]:Ba,[za]:vs};function Cx(r,t){function e(){let z=!1;const ft=new ye;let _t=null;const bt=new ye(0,0,0,0);return{setMask:function(ct){_t!==ct&&!z&&(r.colorMask(ct,ct,ct,ct),_t=ct)},setLocked:function(ct){z=ct},setClear:function(ct,st,Rt,jt,we){we===!0&&(ct*=jt,st*=jt,Rt*=jt),ft.set(ct,st,Rt,jt),bt.equals(ft)===!1&&(r.clearColor(ct,st,Rt,jt),bt.copy(ft))},reset:function(){z=!1,_t=null,bt.set(-1,0,0,0)}}}function i(){let z=!1,ft=!1,_t=null,bt=null,ct=null;return{setReversed:function(st){if(ft!==st){const Rt=t.get("EXT_clip_control");st?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),ft=st;const jt=ct;ct=null,this.setClear(jt)}},getReversed:function(){return ft},setTest:function(st){st?ut(r.DEPTH_TEST):Dt(r.DEPTH_TEST)},setMask:function(st){_t!==st&&!z&&(r.depthMask(st),_t=st)},setFunc:function(st){if(ft&&(st=Rx[st]),bt!==st){switch(st){case Ua:r.depthFunc(r.NEVER);break;case Oa:r.depthFunc(r.ALWAYS);break;case Fa:r.depthFunc(r.LESS);break;case vs:r.depthFunc(r.LEQUAL);break;case Ba:r.depthFunc(r.EQUAL);break;case za:r.depthFunc(r.GEQUAL);break;case ka:r.depthFunc(r.GREATER);break;case Ha:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}bt=st}},setLocked:function(st){z=st},setClear:function(st){ct!==st&&(ft&&(st=1-st),r.clearDepth(st),ct=st)},reset:function(){z=!1,_t=null,bt=null,ct=null,ft=!1}}}function s(){let z=!1,ft=null,_t=null,bt=null,ct=null,st=null,Rt=null,jt=null,we=null;return{setTest:function(ve){z||(ve?ut(r.STENCIL_TEST):Dt(r.STENCIL_TEST))},setMask:function(ve){ft!==ve&&!z&&(r.stencilMask(ve),ft=ve)},setFunc:function(ve,rn,dn){(_t!==ve||bt!==rn||ct!==dn)&&(r.stencilFunc(ve,rn,dn),_t=ve,bt=rn,ct=dn)},setOp:function(ve,rn,dn){(st!==ve||Rt!==rn||jt!==dn)&&(r.stencilOp(ve,rn,dn),st=ve,Rt=rn,jt=dn)},setLocked:function(ve){z=ve},setClear:function(ve){we!==ve&&(r.clearStencil(ve),we=ve)},reset:function(){z=!1,ft=null,_t=null,bt=null,ct=null,st=null,Rt=null,jt=null,we=null}}}const a=new e,l=new i,h=new s,u=new WeakMap,d=new WeakMap;let m={},p={},_=new WeakMap,x=[],M=null,S=!1,y=null,g=null,I=null,C=null,w=null,O=null,F=null,B=new Jt(0,0,0),W=0,R=!1,A=null,N=null,tt=null,et=null,$=null;const lt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,pt=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(pt=parseFloat(/^WebGL (\d)/.exec(G)[1]),J=pt>=1):G.indexOf("OpenGL ES")!==-1&&(pt=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),J=pt>=2);let xt=null,it={};const vt=r.getParameter(r.SCISSOR_BOX),zt=r.getParameter(r.VIEWPORT),se=new ye().fromArray(vt),Yt=new ye().fromArray(zt);function q(z,ft,_t,bt){const ct=new Uint8Array(4),st=r.createTexture();r.bindTexture(z,st),r.texParameteri(z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Rt=0;Rt<_t;Rt++)z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY?r.texImage3D(ft,0,r.RGBA,1,1,bt,0,r.RGBA,r.UNSIGNED_BYTE,ct):r.texImage2D(ft+Rt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ct);return st}const rt={};rt[r.TEXTURE_2D]=q(r.TEXTURE_2D,r.TEXTURE_2D,1),rt[r.TEXTURE_CUBE_MAP]=q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[r.TEXTURE_2D_ARRAY]=q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),rt[r.TEXTURE_3D]=q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),a.setClear(0,0,0,1),l.setClear(1),h.setClear(0),ut(r.DEPTH_TEST),l.setFunc(vs),pe(!1),Nt(Cc),ut(r.CULL_FACE),be(yi);function ut(z){m[z]!==!0&&(r.enable(z),m[z]=!0)}function Dt(z){m[z]!==!1&&(r.disable(z),m[z]=!1)}function Wt(z,ft){return p[z]!==ft?(r.bindFramebuffer(z,ft),p[z]=ft,z===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=ft),z===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=ft),!0):!1}function Kt(z,ft){let _t=x,bt=!1;if(z){_t=_.get(ft),_t===void 0&&(_t=[],_.set(ft,_t));const ct=z.textures;if(_t.length!==ct.length||_t[0]!==r.COLOR_ATTACHMENT0){for(let st=0,Rt=ct.length;st<Rt;st++)_t[st]=r.COLOR_ATTACHMENT0+st;_t.length=ct.length,bt=!0}}else _t[0]!==r.BACK&&(_t[0]=r.BACK,bt=!0);bt&&r.drawBuffers(_t)}function Pe(z){return M!==z?(r.useProgram(z),M=z,!0):!1}const re={[Bi]:r.FUNC_ADD,[Od]:r.FUNC_SUBTRACT,[Fd]:r.FUNC_REVERSE_SUBTRACT};re[Bd]=r.MIN,re[zd]=r.MAX;const U={[kd]:r.ZERO,[Hd]:r.ONE,[Vd]:r.SRC_COLOR,[Da]:r.SRC_ALPHA,[Yd]:r.SRC_ALPHA_SATURATE,[Zd]:r.DST_COLOR,[Wd]:r.DST_ALPHA,[Gd]:r.ONE_MINUS_SRC_COLOR,[Na]:r.ONE_MINUS_SRC_ALPHA,[qd]:r.ONE_MINUS_DST_COLOR,[Xd]:r.ONE_MINUS_DST_ALPHA,[Kd]:r.CONSTANT_COLOR,[jd]:r.ONE_MINUS_CONSTANT_COLOR,[$d]:r.CONSTANT_ALPHA,[Jd]:r.ONE_MINUS_CONSTANT_ALPHA};function be(z,ft,_t,bt,ct,st,Rt,jt,we,ve){if(z===yi){S===!0&&(Dt(r.BLEND),S=!1);return}if(S===!1&&(ut(r.BLEND),S=!0),z!==Ud){if(z!==y||ve!==R){if((g!==Bi||w!==Bi)&&(r.blendEquation(r.FUNC_ADD),g=Bi,w=Bi),ve)switch(z){case ps:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Pc:r.blendFunc(r.ONE,r.ONE);break;case Lc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ic:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ps:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Pc:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Lc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ic:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}I=null,C=null,O=null,F=null,B.set(0,0,0),W=0,y=z,R=ve}return}ct=ct||ft,st=st||_t,Rt=Rt||bt,(ft!==g||ct!==w)&&(r.blendEquationSeparate(re[ft],re[ct]),g=ft,w=ct),(_t!==I||bt!==C||st!==O||Rt!==F)&&(r.blendFuncSeparate(U[_t],U[bt],U[st],U[Rt]),I=_t,C=bt,O=st,F=Rt),(jt.equals(B)===!1||we!==W)&&(r.blendColor(jt.r,jt.g,jt.b,we),B.copy(jt),W=we),y=z,R=!1}function kt(z,ft){z.side===Un?Dt(r.CULL_FACE):ut(r.CULL_FACE);let _t=z.side===sn;ft&&(_t=!_t),pe(_t),z.blending===ps&&z.transparent===!1?be(yi):be(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),a.setMask(z.colorWrite);const bt=z.stencilWrite;h.setTest(bt),bt&&(h.setMask(z.stencilWriteMask),h.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),h.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),wt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ut(r.SAMPLE_ALPHA_TO_COVERAGE):Dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function pe(z){A!==z&&(z?r.frontFace(r.CW):r.frontFace(r.CCW),A=z)}function Nt(z){z!==Id?(ut(r.CULL_FACE),z!==N&&(z===Cc?r.cullFace(r.BACK):z===Dd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Dt(r.CULL_FACE),N=z}function Se(z){z!==tt&&(J&&r.lineWidth(z),tt=z)}function wt(z,ft,_t){z?(ut(r.POLYGON_OFFSET_FILL),(et!==ft||$!==_t)&&(r.polygonOffset(ft,_t),et=ft,$=_t)):Dt(r.POLYGON_OFFSET_FILL)}function Qt(z){z?ut(r.SCISSOR_TEST):Dt(r.SCISSOR_TEST)}function Ne(z){z===void 0&&(z=r.TEXTURE0+lt-1),xt!==z&&(r.activeTexture(z),xt=z)}function Le(z,ft,_t){_t===void 0&&(xt===null?_t=r.TEXTURE0+lt-1:_t=xt);let bt=it[_t];bt===void 0&&(bt={type:void 0,texture:void 0},it[_t]=bt),(bt.type!==z||bt.texture!==ft)&&(xt!==_t&&(r.activeTexture(_t),xt=_t),r.bindTexture(z,ft||rt[z]),bt.type=z,bt.texture=ft)}function P(){const z=it[xt];z!==void 0&&z.type!==void 0&&(r.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Z(){try{r.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function nt(){try{r.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function at(){try{r.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Q(){try{r.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ut(){try{r.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function mt(){try{r.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ct(){try{r.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Pt(){try{r.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function dt(){try{r.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function yt(z){se.equals(z)===!1&&(r.scissor(z.x,z.y,z.z,z.w),se.copy(z))}function Xt(z){Yt.equals(z)===!1&&(r.viewport(z.x,z.y,z.z,z.w),Yt.copy(z))}function Lt(z,ft){let _t=d.get(ft);_t===void 0&&(_t=new WeakMap,d.set(ft,_t));let bt=_t.get(z);bt===void 0&&(bt=r.getUniformBlockIndex(ft,z.name),_t.set(z,bt))}function gt(z,ft){const bt=d.get(ft).get(z);u.get(ft)!==bt&&(r.uniformBlockBinding(ft,bt,z.__bindingPointIndex),u.set(ft,bt))}function $t(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),l.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),m={},xt=null,it={},p={},_=new WeakMap,x=[],M=null,S=!1,y=null,g=null,I=null,C=null,w=null,O=null,F=null,B=new Jt(0,0,0),W=0,R=!1,A=null,N=null,tt=null,et=null,$=null,se.set(0,0,r.canvas.width,r.canvas.height),Yt.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),h.reset()}return{buffers:{color:a,depth:l,stencil:h},enable:ut,disable:Dt,bindFramebuffer:Wt,drawBuffers:Kt,useProgram:Pe,setBlending:be,setMaterial:kt,setFlipSided:pe,setCullFace:Nt,setLineWidth:Se,setPolygonOffset:wt,setScissorTest:Qt,activeTexture:Ne,bindTexture:Le,unbindTexture:P,compressedTexImage2D:E,compressedTexImage3D:Z,texImage2D:Pt,texImage3D:dt,updateUBOMapping:Lt,uniformBlockBinding:gt,texStorage2D:mt,texStorage3D:Ct,texSubImage2D:nt,texSubImage3D:at,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ut,scissor:yt,viewport:Xt,reset:$t}}function Px(r,t,e,i,s,a,l){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new fe,m=new WeakMap;let p;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,E){return x?new OffscreenCanvas(P,E):ur("canvas")}function S(P,E,Z){let nt=1;const at=Le(P);if((at.width>Z||at.height>Z)&&(nt=Z/Math.max(at.width,at.height)),nt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Q=Math.floor(nt*at.width),Ut=Math.floor(nt*at.height);p===void 0&&(p=M(Q,Ut));const mt=E?M(Q,Ut):p;return mt.width=Q,mt.height=Ut,mt.getContext("2d").drawImage(P,0,0,Q,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+Q+"x"+Ut+")."),mt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),P;return P}function y(P){return P.generateMipmaps}function g(P){r.generateMipmap(P)}function I(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(P,E,Z,nt,at=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Q=E;if(E===r.RED&&(Z===r.FLOAT&&(Q=r.R32F),Z===r.HALF_FLOAT&&(Q=r.R16F),Z===r.UNSIGNED_BYTE&&(Q=r.R8)),E===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(Q=r.R8UI),Z===r.UNSIGNED_SHORT&&(Q=r.R16UI),Z===r.UNSIGNED_INT&&(Q=r.R32UI),Z===r.BYTE&&(Q=r.R8I),Z===r.SHORT&&(Q=r.R16I),Z===r.INT&&(Q=r.R32I)),E===r.RG&&(Z===r.FLOAT&&(Q=r.RG32F),Z===r.HALF_FLOAT&&(Q=r.RG16F),Z===r.UNSIGNED_BYTE&&(Q=r.RG8)),E===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(Q=r.RG8UI),Z===r.UNSIGNED_SHORT&&(Q=r.RG16UI),Z===r.UNSIGNED_INT&&(Q=r.RG32UI),Z===r.BYTE&&(Q=r.RG8I),Z===r.SHORT&&(Q=r.RG16I),Z===r.INT&&(Q=r.RG32I)),E===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(Q=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(Q=r.RGB16UI),Z===r.UNSIGNED_INT&&(Q=r.RGB32UI),Z===r.BYTE&&(Q=r.RGB8I),Z===r.SHORT&&(Q=r.RGB16I),Z===r.INT&&(Q=r.RGB32I)),E===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(Q=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(Q=r.RGBA16UI),Z===r.UNSIGNED_INT&&(Q=r.RGBA32UI),Z===r.BYTE&&(Q=r.RGBA8I),Z===r.SHORT&&(Q=r.RGBA16I),Z===r.INT&&(Q=r.RGBA32I)),E===r.RGB&&Z===r.UNSIGNED_INT_5_9_9_9_REV&&(Q=r.RGB9_E5),E===r.RGBA){const Ut=at?po:ge.getTransfer(nt);Z===r.FLOAT&&(Q=r.RGBA32F),Z===r.HALF_FLOAT&&(Q=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(Q=Ut===Re?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function w(P,E){let Z;return P?E===null||E===Vi||E===or?Z=r.DEPTH24_STENCIL8:E===An?Z=r.DEPTH32F_STENCIL8:E===rr&&(Z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Vi||E===or?Z=r.DEPTH_COMPONENT24:E===An?Z=r.DEPTH_COMPONENT32F:E===rr&&(Z=r.DEPTH_COMPONENT16),Z}function O(P,E){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==Je&&P.minFilter!==hn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function F(P){const E=P.target;E.removeEventListener("dispose",F),W(E),E.isVideoTexture&&m.delete(E)}function B(P){const E=P.target;E.removeEventListener("dispose",B),A(E)}function W(P){const E=i.get(P);if(E.__webglInit===void 0)return;const Z=P.source,nt=_.get(Z);if(nt){const at=nt[E.__cacheKey];at.usedTimes--,at.usedTimes===0&&R(P),Object.keys(nt).length===0&&_.delete(Z)}i.remove(P)}function R(P){const E=i.get(P);r.deleteTexture(E.__webglTexture);const Z=P.source,nt=_.get(Z);delete nt[E.__cacheKey],l.memory.textures--}function A(P){const E=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(E.__webglFramebuffer[nt]))for(let at=0;at<E.__webglFramebuffer[nt].length;at++)r.deleteFramebuffer(E.__webglFramebuffer[nt][at]);else r.deleteFramebuffer(E.__webglFramebuffer[nt]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[nt])}else{if(Array.isArray(E.__webglFramebuffer))for(let nt=0;nt<E.__webglFramebuffer.length;nt++)r.deleteFramebuffer(E.__webglFramebuffer[nt]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let nt=0;nt<E.__webglColorRenderbuffer.length;nt++)E.__webglColorRenderbuffer[nt]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[nt]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=P.textures;for(let nt=0,at=Z.length;nt<at;nt++){const Q=i.get(Z[nt]);Q.__webglTexture&&(r.deleteTexture(Q.__webglTexture),l.memory.textures--),i.remove(Z[nt])}i.remove(P)}let N=0;function tt(){N=0}function et(){const P=N;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),N+=1,P}function $(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function lt(P,E){const Z=i.get(P);if(P.isVideoTexture&&Qt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&Z.__version!==P.version){const nt=P.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(Z,P,E);return}}else P.isExternalTexture&&(Z.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+E)}function J(P,E){const Z=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){rt(Z,P,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+E)}function pt(P,E){const Z=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){rt(Z,P,E);return}e.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+E)}function G(P,E){const Z=i.get(P);if(P.version>0&&Z.__version!==P.version){ut(Z,P,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+E)}const xt={[Ms]:r.REPEAT,[xi]:r.CLAMP_TO_EDGE,[fo]:r.MIRRORED_REPEAT},it={[Je]:r.NEAREST,[eu]:r.NEAREST_MIPMAP_NEAREST,[Qs]:r.NEAREST_MIPMAP_LINEAR,[hn]:r.LINEAR,[ro]:r.LINEAR_MIPMAP_NEAREST,[ni]:r.LINEAR_MIPMAP_LINEAR},vt={[mf]:r.NEVER,[Mf]:r.ALWAYS,[_f]:r.LESS,[uu]:r.LEQUAL,[gf]:r.EQUAL,[yf]:r.GEQUAL,[vf]:r.GREATER,[xf]:r.NOTEQUAL};function zt(P,E){if(E.type===An&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===hn||E.magFilter===ro||E.magFilter===Qs||E.magFilter===ni||E.minFilter===hn||E.minFilter===ro||E.minFilter===Qs||E.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,xt[E.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,xt[E.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,xt[E.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,it[E.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,it[E.minFilter]),E.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,vt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Je||E.minFilter!==Qs&&E.minFilter!==ni||E.type===An&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function se(P,E){let Z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",F));const nt=E.source;let at=_.get(nt);at===void 0&&(at={},_.set(nt,at));const Q=$(E);if(Q!==P.__cacheKey){at[Q]===void 0&&(at[Q]={texture:r.createTexture(),usedTimes:0},l.memory.textures++,Z=!0),at[Q].usedTimes++;const Ut=at[P.__cacheKey];Ut!==void 0&&(at[P.__cacheKey].usedTimes--,Ut.usedTimes===0&&R(E)),P.__cacheKey=Q,P.__webglTexture=at[Q].texture}return Z}function Yt(P,E,Z){return Math.floor(Math.floor(P/Z)/E)}function q(P,E,Z,nt){const Q=P.updateRanges;if(Q.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,Z,nt,E.data);else{Q.sort((dt,yt)=>dt.start-yt.start);let Ut=0;for(let dt=1;dt<Q.length;dt++){const yt=Q[Ut],Xt=Q[dt],Lt=yt.start+yt.count,gt=Yt(Xt.start,E.width,4),$t=Yt(yt.start,E.width,4);Xt.start<=Lt+1&&gt===$t&&Yt(Xt.start+Xt.count-1,E.width,4)===gt?yt.count=Math.max(yt.count,Xt.start+Xt.count-yt.start):(++Ut,Q[Ut]=Xt)}Q.length=Ut+1;const mt=r.getParameter(r.UNPACK_ROW_LENGTH),Ct=r.getParameter(r.UNPACK_SKIP_PIXELS),Pt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let dt=0,yt=Q.length;dt<yt;dt++){const Xt=Q[dt],Lt=Math.floor(Xt.start/4),gt=Math.ceil(Xt.count/4),$t=Lt%E.width,z=Math.floor(Lt/E.width),ft=gt,_t=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,$t),r.pixelStorei(r.UNPACK_SKIP_ROWS,z),e.texSubImage2D(r.TEXTURE_2D,0,$t,z,ft,_t,Z,nt,E.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,mt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ct),r.pixelStorei(r.UNPACK_SKIP_ROWS,Pt)}}function rt(P,E,Z){let nt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(nt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(nt=r.TEXTURE_3D);const at=se(P,E),Q=E.source;e.bindTexture(nt,P.__webglTexture,r.TEXTURE0+Z);const Ut=i.get(Q);if(Q.version!==Ut.__version||at===!0){e.activeTexture(r.TEXTURE0+Z);const mt=ge.getPrimaries(ge.workingColorSpace),Ct=E.colorSpace===vi?null:ge.getPrimaries(E.colorSpace),Pt=E.colorSpace===vi||mt===Ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let dt=S(E.image,!1,s.maxTextureSize);dt=Ne(E,dt);const yt=a.convert(E.format,E.colorSpace),Xt=a.convert(E.type);let Lt=C(E.internalFormat,yt,Xt,E.colorSpace,E.isVideoTexture);zt(nt,E);let gt;const $t=E.mipmaps,z=E.isVideoTexture!==!0,ft=Ut.__version===void 0||at===!0,_t=Q.dataReady,bt=O(E,dt);if(E.isDepthTexture)Lt=w(E.format===lr,E.type),ft&&(z?e.texStorage2D(r.TEXTURE_2D,1,Lt,dt.width,dt.height):e.texImage2D(r.TEXTURE_2D,0,Lt,dt.width,dt.height,0,yt,Xt,null));else if(E.isDataTexture)if($t.length>0){z&&ft&&e.texStorage2D(r.TEXTURE_2D,bt,Lt,$t[0].width,$t[0].height);for(let ct=0,st=$t.length;ct<st;ct++)gt=$t[ct],z?_t&&e.texSubImage2D(r.TEXTURE_2D,ct,0,0,gt.width,gt.height,yt,Xt,gt.data):e.texImage2D(r.TEXTURE_2D,ct,Lt,gt.width,gt.height,0,yt,Xt,gt.data);E.generateMipmaps=!1}else z?(ft&&e.texStorage2D(r.TEXTURE_2D,bt,Lt,dt.width,dt.height),_t&&q(E,dt,yt,Xt)):e.texImage2D(r.TEXTURE_2D,0,Lt,dt.width,dt.height,0,yt,Xt,dt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){z&&ft&&e.texStorage3D(r.TEXTURE_2D_ARRAY,bt,Lt,$t[0].width,$t[0].height,dt.depth);for(let ct=0,st=$t.length;ct<st;ct++)if(gt=$t[ct],E.format!==vn)if(yt!==null)if(z){if(_t)if(E.layerUpdates.size>0){const Rt=Mh(gt.width,gt.height,E.format,E.type);for(const jt of E.layerUpdates){const we=gt.data.subarray(jt*Rt/gt.data.BYTES_PER_ELEMENT,(jt+1)*Rt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,jt,gt.width,gt.height,1,yt,we)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,0,gt.width,gt.height,dt.depth,yt,gt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ct,Lt,gt.width,gt.height,dt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?_t&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,0,gt.width,gt.height,dt.depth,yt,Xt,gt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,ct,Lt,gt.width,gt.height,dt.depth,0,yt,Xt,gt.data)}else{z&&ft&&e.texStorage2D(r.TEXTURE_2D,bt,Lt,$t[0].width,$t[0].height);for(let ct=0,st=$t.length;ct<st;ct++)gt=$t[ct],E.format!==vn?yt!==null?z?_t&&e.compressedTexSubImage2D(r.TEXTURE_2D,ct,0,0,gt.width,gt.height,yt,gt.data):e.compressedTexImage2D(r.TEXTURE_2D,ct,Lt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?_t&&e.texSubImage2D(r.TEXTURE_2D,ct,0,0,gt.width,gt.height,yt,Xt,gt.data):e.texImage2D(r.TEXTURE_2D,ct,Lt,gt.width,gt.height,0,yt,Xt,gt.data)}else if(E.isDataArrayTexture)if(z){if(ft&&e.texStorage3D(r.TEXTURE_2D_ARRAY,bt,Lt,dt.width,dt.height,dt.depth),_t)if(E.layerUpdates.size>0){const ct=Mh(dt.width,dt.height,E.format,E.type);for(const st of E.layerUpdates){const Rt=dt.data.subarray(st*ct/dt.data.BYTES_PER_ELEMENT,(st+1)*ct/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,st,dt.width,dt.height,1,yt,Xt,Rt)}E.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,yt,Xt,dt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Lt,dt.width,dt.height,dt.depth,0,yt,Xt,dt.data);else if(E.isData3DTexture)z?(ft&&e.texStorage3D(r.TEXTURE_3D,bt,Lt,dt.width,dt.height,dt.depth),_t&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,yt,Xt,dt.data)):e.texImage3D(r.TEXTURE_3D,0,Lt,dt.width,dt.height,dt.depth,0,yt,Xt,dt.data);else if(E.isFramebufferTexture){if(ft)if(z)e.texStorage2D(r.TEXTURE_2D,bt,Lt,dt.width,dt.height);else{let ct=dt.width,st=dt.height;for(let Rt=0;Rt<bt;Rt++)e.texImage2D(r.TEXTURE_2D,Rt,Lt,ct,st,0,yt,Xt,null),ct>>=1,st>>=1}}else if($t.length>0){if(z&&ft){const ct=Le($t[0]);e.texStorage2D(r.TEXTURE_2D,bt,Lt,ct.width,ct.height)}for(let ct=0,st=$t.length;ct<st;ct++)gt=$t[ct],z?_t&&e.texSubImage2D(r.TEXTURE_2D,ct,0,0,yt,Xt,gt):e.texImage2D(r.TEXTURE_2D,ct,Lt,yt,Xt,gt);E.generateMipmaps=!1}else if(z){if(ft){const ct=Le(dt);e.texStorage2D(r.TEXTURE_2D,bt,Lt,ct.width,ct.height)}_t&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,yt,Xt,dt)}else e.texImage2D(r.TEXTURE_2D,0,Lt,yt,Xt,dt);y(E)&&g(nt),Ut.__version=Q.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ut(P,E,Z){if(E.image.length!==6)return;const nt=se(P,E),at=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+Z);const Q=i.get(at);if(at.version!==Q.__version||nt===!0){e.activeTexture(r.TEXTURE0+Z);const Ut=ge.getPrimaries(ge.workingColorSpace),mt=E.colorSpace===vi?null:ge.getPrimaries(E.colorSpace),Ct=E.colorSpace===vi||Ut===mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const Pt=E.isCompressedTexture||E.image[0].isCompressedTexture,dt=E.image[0]&&E.image[0].isDataTexture,yt=[];for(let st=0;st<6;st++)!Pt&&!dt?yt[st]=S(E.image[st],!0,s.maxCubemapSize):yt[st]=dt?E.image[st].image:E.image[st],yt[st]=Ne(E,yt[st]);const Xt=yt[0],Lt=a.convert(E.format,E.colorSpace),gt=a.convert(E.type),$t=C(E.internalFormat,Lt,gt,E.colorSpace),z=E.isVideoTexture!==!0,ft=Q.__version===void 0||nt===!0,_t=at.dataReady;let bt=O(E,Xt);zt(r.TEXTURE_CUBE_MAP,E);let ct;if(Pt){z&&ft&&e.texStorage2D(r.TEXTURE_CUBE_MAP,bt,$t,Xt.width,Xt.height);for(let st=0;st<6;st++){ct=yt[st].mipmaps;for(let Rt=0;Rt<ct.length;Rt++){const jt=ct[Rt];E.format!==vn?Lt!==null?z?_t&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt,0,0,jt.width,jt.height,Lt,jt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt,$t,jt.width,jt.height,0,jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?_t&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt,0,0,jt.width,jt.height,Lt,gt,jt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt,$t,jt.width,jt.height,0,Lt,gt,jt.data)}}}else{if(ct=E.mipmaps,z&&ft){ct.length>0&&bt++;const st=Le(yt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,bt,$t,st.width,st.height)}for(let st=0;st<6;st++)if(dt){z?_t&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,yt[st].width,yt[st].height,Lt,gt,yt[st].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,$t,yt[st].width,yt[st].height,0,Lt,gt,yt[st].data);for(let Rt=0;Rt<ct.length;Rt++){const we=ct[Rt].image[st].image;z?_t&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt+1,0,0,we.width,we.height,Lt,gt,we.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt+1,$t,we.width,we.height,0,Lt,gt,we.data)}}else{z?_t&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Lt,gt,yt[st]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,$t,Lt,gt,yt[st]);for(let Rt=0;Rt<ct.length;Rt++){const jt=ct[Rt];z?_t&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt+1,0,0,Lt,gt,jt.image[st]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt+1,$t,Lt,gt,jt.image[st])}}}y(E)&&g(r.TEXTURE_CUBE_MAP),Q.__version=at.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Dt(P,E,Z,nt,at,Q){const Ut=a.convert(Z.format,Z.colorSpace),mt=a.convert(Z.type),Ct=C(Z.internalFormat,Ut,mt,Z.colorSpace),Pt=i.get(E),dt=i.get(Z);if(dt.__renderTarget=E,!Pt.__hasExternalTextures){const yt=Math.max(1,E.width>>Q),Xt=Math.max(1,E.height>>Q);at===r.TEXTURE_3D||at===r.TEXTURE_2D_ARRAY?e.texImage3D(at,Q,Ct,yt,Xt,E.depth,0,Ut,mt,null):e.texImage2D(at,Q,Ct,yt,Xt,0,Ut,mt,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),wt(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,at,dt.__webglTexture,0,Se(E)):(at===r.TEXTURE_2D||at>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,nt,at,dt.__webglTexture,Q),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Wt(P,E,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,P),E.depthBuffer){const nt=E.depthTexture,at=nt&&nt.isDepthTexture?nt.type:null,Q=w(E.stencilBuffer,at),Ut=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=Se(E);wt(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,mt,Q,E.width,E.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,mt,Q,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Q,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ut,r.RENDERBUFFER,P)}else{const nt=E.textures;for(let at=0;at<nt.length;at++){const Q=nt[at],Ut=a.convert(Q.format,Q.colorSpace),mt=a.convert(Q.type),Ct=C(Q.internalFormat,Ut,mt,Q.colorSpace),Pt=Se(E);Z&&wt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Pt,Ct,E.width,E.height):wt(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Pt,Ct,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Ct,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Kt(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=i.get(E.depthTexture);nt.__renderTarget=E,(!nt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),lt(E.depthTexture,0);const at=nt.__webglTexture,Q=Se(E);if(E.depthTexture.format===ar)wt(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,at,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,at,0);else if(E.depthTexture.format===lr)wt(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,at,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function Pe(P){const E=i.get(P),Z=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const nt=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),nt){const at=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,nt.removeEventListener("dispose",at)};nt.addEventListener("dispose",at),E.__depthDisposeCallback=at}E.__boundDepthTexture=nt}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");const nt=P.texture.mipmaps;nt&&nt.length>0?Kt(E.__webglFramebuffer[0],P):Kt(E.__webglFramebuffer,P)}else if(Z){E.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[nt]),E.__webglDepthbuffer[nt]===void 0)E.__webglDepthbuffer[nt]=r.createRenderbuffer(),Wt(E.__webglDepthbuffer[nt],P,!1);else{const at=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer[nt];r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,at,r.RENDERBUFFER,Q)}}else{const nt=P.texture.mipmaps;if(nt&&nt.length>0?e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Wt(E.__webglDepthbuffer,P,!1);else{const at=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,at,r.RENDERBUFFER,Q)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function re(P,E,Z){const nt=i.get(P);E!==void 0&&Dt(nt.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&Pe(P)}function U(P){const E=P.texture,Z=i.get(P),nt=i.get(E);P.addEventListener("dispose",B);const at=P.textures,Q=P.isWebGLCubeRenderTarget===!0,Ut=at.length>1;if(Ut||(nt.__webglTexture===void 0&&(nt.__webglTexture=r.createTexture()),nt.__version=E.version,l.memory.textures++),Q){Z.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[mt]=[];for(let Ct=0;Ct<E.mipmaps.length;Ct++)Z.__webglFramebuffer[mt][Ct]=r.createFramebuffer()}else Z.__webglFramebuffer[mt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let mt=0;mt<E.mipmaps.length;mt++)Z.__webglFramebuffer[mt]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(Ut)for(let mt=0,Ct=at.length;mt<Ct;mt++){const Pt=i.get(at[mt]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=r.createTexture(),l.memory.textures++)}if(P.samples>0&&wt(P)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let mt=0;mt<at.length;mt++){const Ct=at[mt];Z.__webglColorRenderbuffer[mt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[mt]);const Pt=a.convert(Ct.format,Ct.colorSpace),dt=a.convert(Ct.type),yt=C(Ct.internalFormat,Pt,dt,Ct.colorSpace,P.isXRRenderTarget===!0),Xt=Se(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Xt,yt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,Z.__webglColorRenderbuffer[mt])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),Wt(Z.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){e.bindTexture(r.TEXTURE_CUBE_MAP,nt.__webglTexture),zt(r.TEXTURE_CUBE_MAP,E);for(let mt=0;mt<6;mt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ct=0;Ct<E.mipmaps.length;Ct++)Dt(Z.__webglFramebuffer[mt][Ct],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ct);else Dt(Z.__webglFramebuffer[mt],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);y(E)&&g(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let mt=0,Ct=at.length;mt<Ct;mt++){const Pt=at[mt],dt=i.get(Pt);let yt=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(yt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(yt,dt.__webglTexture),zt(yt,Pt),Dt(Z.__webglFramebuffer,P,Pt,r.COLOR_ATTACHMENT0+mt,yt,0),y(Pt)&&g(yt)}e.unbindTexture()}else{let mt=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(mt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(mt,nt.__webglTexture),zt(mt,E),E.mipmaps&&E.mipmaps.length>0)for(let Ct=0;Ct<E.mipmaps.length;Ct++)Dt(Z.__webglFramebuffer[Ct],P,E,r.COLOR_ATTACHMENT0,mt,Ct);else Dt(Z.__webglFramebuffer,P,E,r.COLOR_ATTACHMENT0,mt,0);y(E)&&g(mt),e.unbindTexture()}P.depthBuffer&&Pe(P)}function be(P){const E=P.textures;for(let Z=0,nt=E.length;Z<nt;Z++){const at=E[Z];if(y(at)){const Q=I(P),Ut=i.get(at).__webglTexture;e.bindTexture(Q,Ut),g(Q),e.unbindTexture()}}}const kt=[],pe=[];function Nt(P){if(P.samples>0){if(wt(P)===!1){const E=P.textures,Z=P.width,nt=P.height;let at=r.COLOR_BUFFER_BIT;const Q=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ut=i.get(P),mt=E.length>1;if(mt)for(let Pt=0;Pt<E.length;Pt++)e.bindFramebuffer(r.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);const Ct=P.texture.mipmaps;Ct&&Ct.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Pt=0;Pt<E.length;Pt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(at|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(at|=r.STENCIL_BUFFER_BIT)),mt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ut.__webglColorRenderbuffer[Pt]);const dt=i.get(E[Pt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,dt,0)}r.blitFramebuffer(0,0,Z,nt,0,0,Z,nt,at,r.NEAREST),u===!0&&(kt.length=0,pe.length=0,kt.push(r.COLOR_ATTACHMENT0+Pt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(kt.push(Q),pe.push(Q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,pe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,kt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),mt)for(let Pt=0;Pt<E.length;Pt++){e.bindFramebuffer(r.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.RENDERBUFFER,Ut.__webglColorRenderbuffer[Pt]);const dt=i.get(E[Pt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.TEXTURE_2D,dt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&u){const E=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Se(P){return Math.min(s.maxSamples,P.samples)}function wt(P){const E=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Qt(P){const E=l.render.frame;m.get(P)!==E&&(m.set(P,E),P.update())}function Ne(P,E){const Z=P.colorSpace,nt=P.format,at=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Z!==tn&&Z!==vi&&(ge.getTransfer(Z)===Re?(nt!==vn||at!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),E}function Le(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(d.width=P.naturalWidth||P.width,d.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(d.width=P.displayWidth,d.height=P.displayHeight):(d.width=P.width,d.height=P.height),d}this.allocateTextureUnit=et,this.resetTextureUnits=tt,this.setTexture2D=lt,this.setTexture2DArray=J,this.setTexture3D=pt,this.setTextureCube=G,this.rebindTextures=re,this.setupRenderTarget=U,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=wt}function Lx(r,t){function e(i,s=vi){let a;const l=ge.getTransfer(s);if(i===Bn)return r.UNSIGNED_BYTE;if(i===bl)return r.UNSIGNED_SHORT_4_4_4_4;if(i===wl)return r.UNSIGNED_SHORT_5_5_5_1;if(i===su)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===nu)return r.BYTE;if(i===iu)return r.SHORT;if(i===rr)return r.UNSIGNED_SHORT;if(i===El)return r.INT;if(i===Vi)return r.UNSIGNED_INT;if(i===An)return r.FLOAT;if(i===dr)return r.HALF_FLOAT;if(i===ru)return r.ALPHA;if(i===ou)return r.RGB;if(i===vn)return r.RGBA;if(i===ar)return r.DEPTH_COMPONENT;if(i===lr)return r.DEPTH_STENCIL;if(i===Al)return r.RED;if(i===Rl)return r.RED_INTEGER;if(i===au)return r.RG;if(i===Cl)return r.RG_INTEGER;if(i===Pl)return r.RGBA_INTEGER;if(i===oo||i===ao||i===lo||i===co)if(l===Re)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===oo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ao)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===co)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===oo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ao)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===co)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wa||i===Xa||i===Za||i===qa)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Wa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Za)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ya||i===Ka||i===ja)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Ya||i===Ka)return l===Re?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===ja)return l===Re?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===$a||i===Ja||i===Qa||i===tl||i===el||i===nl||i===il||i===sl||i===rl||i===ol||i===al||i===ll||i===cl||i===hl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===$a)return l===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ja)return l===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qa)return l===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===tl)return l===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===el)return l===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nl)return l===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===il)return l===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sl)return l===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rl)return l===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ol)return l===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===al)return l===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ll)return l===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cl)return l===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hl)return l===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ho||i===ul||i===dl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===ho)return l===Re?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ul)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===dl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lu||i===fl||i===pl||i===ml)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===ho)return a.COMPRESSED_RED_RGTC1_EXT;if(i===fl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ml)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===or?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}class Uu extends He{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const Ix=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Nx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Uu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Si({vertexShader:Ix,fragmentShader:Dx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new un(new yo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ux extends As{constructor(t,e){super();const i=this;let s=null,a=1,l=null,h="local-floor",u=1,d=null,m=null,p=null,_=null,x=null,M=null;const S=new Nx,y={},g=e.getContextAttributes();let I=null,C=null;const w=[],O=[],F=new fe;let B=null;const W=new $e;W.viewport=new ye;const R=new $e;R.viewport=new ye;const A=[W,R],N=new qp;let tt=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let rt=w[q];return rt===void 0&&(rt=new ma,w[q]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(q){let rt=w[q];return rt===void 0&&(rt=new ma,w[q]=rt),rt.getGripSpace()},this.getHand=function(q){let rt=w[q];return rt===void 0&&(rt=new ma,w[q]=rt),rt.getHandSpace()};function $(q){const rt=O.indexOf(q.inputSource);if(rt===-1)return;const ut=w[rt];ut!==void 0&&(ut.update(q.inputSource,q.frame,d||l),ut.dispatchEvent({type:q.type,data:q.inputSource}))}function lt(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",lt),s.removeEventListener("inputsourceschange",J);for(let q=0;q<w.length;q++){const rt=O[q];rt!==null&&(O[q]=null,w[q].disconnect(rt))}tt=null,et=null,S.reset();for(const q in y)delete y[q];t.setRenderTarget(I),x=null,_=null,p=null,s=null,C=null,Yt.stop(),i.isPresenting=!1,t.setPixelRatio(B),t.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){h=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||l},this.setReferenceSpace=function(q){d=q},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return p},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(I=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",lt),s.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await e.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(F),typeof XRWebGLBinding<"u"&&(p=new XRWebGLBinding(s,e)),p!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,Dt=null,Wt=null;g.depth&&(Wt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=g.stencil?lr:ar,Dt=g.stencil?or:Vi);const Kt={colorFormat:e.RGBA8,depthFormat:Wt,scaleFactor:a};_=p.createProjectionLayer(Kt),s.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),C=new Gi(_.textureWidth,_.textureHeight,{format:vn,type:Bn,depthTexture:new bu(_.textureWidth,_.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const ut={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),C=new Gi(x.framebufferWidth,x.framebufferHeight,{format:vn,type:Bn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(u),d=null,l=await s.requestReferenceSpace(h),Yt.setContext(s),Yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function J(q){for(let rt=0;rt<q.removed.length;rt++){const ut=q.removed[rt],Dt=O.indexOf(ut);Dt>=0&&(O[Dt]=null,w[Dt].disconnect(ut))}for(let rt=0;rt<q.added.length;rt++){const ut=q.added[rt];let Dt=O.indexOf(ut);if(Dt===-1){for(let Kt=0;Kt<w.length;Kt++)if(Kt>=O.length){O.push(ut),Dt=Kt;break}else if(O[Kt]===null){O[Kt]=ut,Dt=Kt;break}if(Dt===-1)break}const Wt=w[Dt];Wt&&Wt.connect(ut)}}const pt=new V,G=new V;function xt(q,rt,ut){pt.setFromMatrixPosition(rt.matrixWorld),G.setFromMatrixPosition(ut.matrixWorld);const Dt=pt.distanceTo(G),Wt=rt.projectionMatrix.elements,Kt=ut.projectionMatrix.elements,Pe=Wt[14]/(Wt[10]-1),re=Wt[14]/(Wt[10]+1),U=(Wt[9]+1)/Wt[5],be=(Wt[9]-1)/Wt[5],kt=(Wt[8]-1)/Wt[0],pe=(Kt[8]+1)/Kt[0],Nt=Pe*kt,Se=Pe*pe,wt=Dt/(-kt+pe),Qt=wt*-kt;if(rt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Qt),q.translateZ(wt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Wt[10]===-1)q.projectionMatrix.copy(rt.projectionMatrix),q.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const Ne=Pe+wt,Le=re+wt,P=Nt-Qt,E=Se+(Dt-Qt),Z=U*re/Le*Ne,nt=be*re/Le*Ne;q.projectionMatrix.makePerspective(P,E,Z,nt,Ne,Le),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function it(q,rt){rt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(rt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let rt=q.near,ut=q.far;S.texture!==null&&(S.depthNear>0&&(rt=S.depthNear),S.depthFar>0&&(ut=S.depthFar)),N.near=R.near=W.near=rt,N.far=R.far=W.far=ut,(tt!==N.near||et!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),tt=N.near,et=N.far),N.layers.mask=q.layers.mask|6,W.layers.mask=N.layers.mask&3,R.layers.mask=N.layers.mask&5;const Dt=q.parent,Wt=N.cameras;it(N,Dt);for(let Kt=0;Kt<Wt.length;Kt++)it(Wt[Kt],Dt);Wt.length===2?xt(N,W,R):N.projectionMatrix.copy(W.projectionMatrix),vt(q,N,Dt)};function vt(q,rt,ut){ut===null?q.matrix.copy(rt.matrixWorld):(q.matrix.copy(ut.matrixWorld),q.matrix.invert(),q.matrix.multiply(rt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(rt.projectionMatrix),q.projectionMatrixInverse.copy(rt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ss*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(_===null&&x===null))return u},this.setFoveation=function(q){u=q,_!==null&&(_.fixedFoveation=q),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=q)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(N)},this.getCameraTexture=function(q){return y[q]};let zt=null;function se(q,rt){if(m=rt.getViewerPose(d||l),M=rt,m!==null){const ut=m.views;x!==null&&(t.setRenderTargetFramebuffer(C,x.framebuffer),t.setRenderTarget(C));let Dt=!1;ut.length!==N.cameras.length&&(N.cameras.length=0,Dt=!0);for(let re=0;re<ut.length;re++){const U=ut[re];let be=null;if(x!==null)be=x.getViewport(U);else{const pe=p.getViewSubImage(_,U);be=pe.viewport,re===0&&(t.setRenderTargetTextures(C,pe.colorTexture,pe.depthStencilTexture),t.setRenderTarget(C))}let kt=A[re];kt===void 0&&(kt=new $e,kt.layers.enable(re),kt.viewport=new ye,A[re]=kt),kt.matrix.fromArray(U.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(U.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(be.x,be.y,be.width,be.height),re===0&&(N.matrix.copy(kt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Dt===!0&&N.cameras.push(kt)}const Wt=s.enabledFeatures;if(Wt&&Wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&p){const re=p.getDepthInformation(ut[0]);re&&re.isValid&&re.texture&&S.init(re,s.renderState)}if(Wt&&Wt.includes("camera-access")&&(t.state.unbindTexture(),p))for(let re=0;re<ut.length;re++){const U=ut[re].camera;if(U){let be=y[U];be||(be=new Uu,y[U]=be);const kt=p.getCameraImage(U);be.sourceTexture=kt}}}for(let ut=0;ut<w.length;ut++){const Dt=O[ut],Wt=w[ut];Dt!==null&&Wt!==void 0&&Wt.update(Dt,rt,d||l)}zt&&zt(q,rt),rt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:rt}),M=null}const Yt=new Pu;Yt.setAnimationLoop(se),this.setAnimationLoop=function(q){zt=q},this.dispose=function(){}}}const Ni=new zn,Ox=new ie;function Fx(r,t){function e(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function i(y,g){g.color.getRGB(y.fogColor.value,vu(r)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function s(y,g,I,C,w){g.isMeshBasicMaterial||g.isMeshLambertMaterial?a(y,g):g.isMeshToonMaterial?(a(y,g),p(y,g)):g.isMeshPhongMaterial?(a(y,g),m(y,g)):g.isMeshStandardMaterial?(a(y,g),_(y,g),g.isMeshPhysicalMaterial&&x(y,g,w)):g.isMeshMatcapMaterial?(a(y,g),M(y,g)):g.isMeshDepthMaterial?a(y,g):g.isMeshDistanceMaterial?(a(y,g),S(y,g)):g.isMeshNormalMaterial?a(y,g):g.isLineBasicMaterial?(l(y,g),g.isLineDashedMaterial&&h(y,g)):g.isPointsMaterial?u(y,g,I,C):g.isSpriteMaterial?d(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function a(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,e(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,e(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,e(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===sn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,e(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===sn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,e(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,e(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const I=t.get(g),C=I.envMap,w=I.envMapRotation;C&&(y.envMap.value=C,Ni.copy(w),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),y.envMapRotation.value.setFromMatrix4(Ox.makeRotationFromEuler(Ni)),y.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,y.aoMapTransform))}function l(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,e(g.map,y.mapTransform))}function h(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function u(y,g,I,C){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*I,y.scale.value=C*.5,g.map&&(y.map.value=g.map,e(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,e(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function d(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,e(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,e(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function p(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function _(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function x(y,g,I){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===sn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,g){g.matcap&&(y.matcap.value=g.matcap)}function S(y,g){const I=t.get(g).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Bx(r,t,e,i){let s={},a={},l=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function u(I,C){const w=C.program;i.uniformBlockBinding(I,w)}function d(I,C){let w=s[I.id];w===void 0&&(M(I),w=m(I),s[I.id]=w,I.addEventListener("dispose",y));const O=C.program;i.updateUBOMapping(I,O);const F=t.render.frame;a[I.id]!==F&&(_(I),a[I.id]=F)}function m(I){const C=p();I.__bindingPointIndex=C;const w=r.createBuffer(),O=I.__size,F=I.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,O,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,C,w),w}function p(){for(let I=0;I<h;I++)if(l.indexOf(I)===-1)return l.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(I){const C=s[I.id],w=I.uniforms,O=I.__cache;r.bindBuffer(r.UNIFORM_BUFFER,C);for(let F=0,B=w.length;F<B;F++){const W=Array.isArray(w[F])?w[F]:[w[F]];for(let R=0,A=W.length;R<A;R++){const N=W[R];if(x(N,F,R,O)===!0){const tt=N.__offset,et=Array.isArray(N.value)?N.value:[N.value];let $=0;for(let lt=0;lt<et.length;lt++){const J=et[lt],pt=S(J);typeof J=="number"||typeof J=="boolean"?(N.__data[0]=J,r.bufferSubData(r.UNIFORM_BUFFER,tt+$,N.__data)):J.isMatrix3?(N.__data[0]=J.elements[0],N.__data[1]=J.elements[1],N.__data[2]=J.elements[2],N.__data[3]=0,N.__data[4]=J.elements[3],N.__data[5]=J.elements[4],N.__data[6]=J.elements[5],N.__data[7]=0,N.__data[8]=J.elements[6],N.__data[9]=J.elements[7],N.__data[10]=J.elements[8],N.__data[11]=0):(J.toArray(N.__data,$),$+=pt.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,tt,N.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(I,C,w,O){const F=I.value,B=C+"_"+w;if(O[B]===void 0)return typeof F=="number"||typeof F=="boolean"?O[B]=F:O[B]=F.clone(),!0;{const W=O[B];if(typeof F=="number"||typeof F=="boolean"){if(W!==F)return O[B]=F,!0}else if(W.equals(F)===!1)return W.copy(F),!0}return!1}function M(I){const C=I.uniforms;let w=0;const O=16;for(let B=0,W=C.length;B<W;B++){const R=Array.isArray(C[B])?C[B]:[C[B]];for(let A=0,N=R.length;A<N;A++){const tt=R[A],et=Array.isArray(tt.value)?tt.value:[tt.value];for(let $=0,lt=et.length;$<lt;$++){const J=et[$],pt=S(J),G=w%O,xt=G%pt.boundary,it=G+xt;w+=xt,it!==0&&O-it<pt.storage&&(w+=O-it),tt.__data=new Float32Array(pt.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=w,w+=pt.storage}}}const F=w%O;return F>0&&(w+=O-F),I.__size=w,I.__cache={},this}function S(I){const C={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(C.boundary=4,C.storage=4):I.isVector2?(C.boundary=8,C.storage=8):I.isVector3||I.isColor?(C.boundary=16,C.storage=12):I.isVector4?(C.boundary=16,C.storage=16):I.isMatrix3?(C.boundary=48,C.storage=48):I.isMatrix4?(C.boundary=64,C.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),C}function y(I){const C=I.target;C.removeEventListener("dispose",y);const w=l.indexOf(C.__bindingPointIndex);l.splice(w,1),r.deleteBuffer(s[C.id]),delete s[C.id],delete a[C.id]}function g(){for(const I in s)r.deleteBuffer(s[I]);l=[],s={},a={}}return{bind:u,update:d,dispose:g}}class zx{constructor(t={}){const{canvas:e=zf(),context:i=null,depth:s=!0,stencil:a=!1,alpha:l=!1,antialias:h=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:d=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=l;const M=new Uint32Array(4),S=new Int32Array(4);let y=null,g=null;const I=[],C=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let O=!1;this._outputColorSpace=Xe;let F=0,B=0,W=null,R=-1,A=null;const N=new ye,tt=new ye;let et=null;const $=new Jt(0);let lt=0,J=e.width,pt=e.height,G=1,xt=null,it=null;const vt=new ye(0,0,J,pt),zt=new ye(0,0,J,pt);let se=!1;const Yt=new Ul;let q=!1,rt=!1;const ut=new ie,Dt=new V,Wt=new ye,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function re(){return W===null?G:1}let U=i;function be(b,k){return e.getContext(b,k)}try{const b={alpha:!0,depth:s,stencil:a,antialias:h,premultipliedAlpha:u,preserveDrawingBuffer:d,powerPreference:m,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Tl}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",ct,!1),U===null){const k="webgl2";if(U=be(k,b),U===null)throw be(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let kt,pe,Nt,Se,wt,Qt,Ne,Le,P,E,Z,nt,at,Q,Ut,mt,Ct,Pt,dt,yt,Xt,Lt,gt,$t;function z(){kt=new Kg(U),kt.init(),Lt=new Lx(U,kt),pe=new Vg(U,kt,t,Lt),Nt=new Cx(U,kt),pe.reversedDepthBuffer&&_&&Nt.buffers.depth.setReversed(!0),Se=new Jg(U),wt=new _x,Qt=new Px(U,kt,Nt,wt,pe,Lt,Se),Ne=new Wg(w),Le=new Yg(w),P=new sm(U),gt=new kg(U,P),E=new jg(U,P,Se,gt),Z=new tv(U,E,P,Se),dt=new Qg(U,pe,Qt),mt=new Gg(wt),nt=new mx(w,Ne,Le,kt,pe,gt,mt),at=new Fx(w,wt),Q=new vx,Ut=new Ex(kt),Pt=new zg(w,Ne,Le,Nt,Z,x,u),Ct=new Ax(w,Z,pe),$t=new Bx(U,Se,pe,Nt),yt=new Hg(U,kt,Se),Xt=new $g(U,kt,Se),Se.programs=nt.programs,w.capabilities=pe,w.extensions=kt,w.properties=wt,w.renderLists=Q,w.shadowMap=Ct,w.state=Nt,w.info=Se}z();const ft=new Ux(w,U);this.xr=ft,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=kt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=kt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(J,pt,!1))},this.getSize=function(b){return b.set(J,pt)},this.setSize=function(b,k,K=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=b,pt=k,e.width=Math.floor(b*G),e.height=Math.floor(k*G),K===!0&&(e.style.width=b+"px",e.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(J*G,pt*G).floor()},this.setDrawingBufferSize=function(b,k,K){J=b,pt=k,G=K,e.width=Math.floor(b*K),e.height=Math.floor(k*K),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(N)},this.getViewport=function(b){return b.copy(vt)},this.setViewport=function(b,k,K,Y){b.isVector4?vt.set(b.x,b.y,b.z,b.w):vt.set(b,k,K,Y),Nt.viewport(N.copy(vt).multiplyScalar(G).round())},this.getScissor=function(b){return b.copy(zt)},this.setScissor=function(b,k,K,Y){b.isVector4?zt.set(b.x,b.y,b.z,b.w):zt.set(b,k,K,Y),Nt.scissor(tt.copy(zt).multiplyScalar(G).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(b){Nt.setScissorTest(se=b)},this.setOpaqueSort=function(b){xt=b},this.setTransparentSort=function(b){it=b},this.getClearColor=function(b){return b.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(b=!0,k=!0,K=!0){let Y=0;if(b){let H=!1;if(W!==null){const ht=W.texture.format;H=ht===Pl||ht===Cl||ht===Rl}if(H){const ht=W.texture.type,St=ht===Bn||ht===Vi||ht===rr||ht===or||ht===bl||ht===wl,At=Pt.getClearColor(),Et=Pt.getClearAlpha(),Vt=At.r,Gt=At.g,Ft=At.b;St?(M[0]=Vt,M[1]=Gt,M[2]=Ft,M[3]=Et,U.clearBufferuiv(U.COLOR,0,M)):(S[0]=Vt,S[1]=Gt,S[2]=Ft,S[3]=Et,U.clearBufferiv(U.COLOR,0,S))}else Y|=U.COLOR_BUFFER_BIT}k&&(Y|=U.DEPTH_BUFFER_BIT),K&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),Pt.dispose(),Q.dispose(),Ut.dispose(),wt.dispose(),Ne.dispose(),Le.dispose(),Z.dispose(),gt.dispose(),$t.dispose(),nt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",dn),ft.removeEventListener("sessionend",mr),Gn.stop()};function _t(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const b=Se.autoReset,k=Ct.enabled,K=Ct.autoUpdate,Y=Ct.needsUpdate,H=Ct.type;z(),Se.autoReset=b,Ct.enabled=k,Ct.autoUpdate=K,Ct.needsUpdate=Y,Ct.type=H}function ct(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function st(b){const k=b.target;k.removeEventListener("dispose",st),Rt(k)}function Rt(b){jt(b),wt.remove(b)}function jt(b){const k=wt.get(b).programs;k!==void 0&&(k.forEach(function(K){nt.releaseProgram(K)}),b.isShaderMaterial&&nt.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,K,Y,H,ht){k===null&&(k=Kt);const St=H.isMesh&&H.matrixWorld.determinant()<0,At=_r(b,k,K,Y,H);Nt.setMaterial(Y,St);let Et=K.index,Vt=1;if(Y.wireframe===!0){if(Et=E.getWireframeAttribute(K),Et===void 0)return;Vt=2}const Gt=K.drawRange,Ft=K.attributes.position;let oe=Gt.start*Vt,me=(Gt.start+Gt.count)*Vt;ht!==null&&(oe=Math.max(oe,ht.start*Vt),me=Math.min(me,(ht.start+ht.count)*Vt)),Et!==null?(oe=Math.max(oe,0),me=Math.min(me,Et.count)):Ft!=null&&(oe=Math.max(oe,0),me=Math.min(me,Ft.count));const Bt=me-oe;if(Bt<0||Bt===1/0)return;gt.setup(H,Y,At,K,Et);let Zt,xe=yt;if(Et!==null&&(Zt=P.get(Et),xe=Xt,xe.setIndex(Zt)),H.isMesh)Y.wireframe===!0?(Nt.setLineWidth(Y.wireframeLinewidth*re()),xe.setMode(U.LINES)):xe.setMode(U.TRIANGLES);else if(H.isLine){let Ot=Y.linewidth;Ot===void 0&&(Ot=1),Nt.setLineWidth(Ot*re()),H.isLineSegments?xe.setMode(U.LINES):H.isLineLoop?xe.setMode(U.LINE_LOOP):xe.setMode(U.LINE_STRIP)}else H.isPoints?xe.setMode(U.POINTS):H.isSprite&&xe.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ms("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xe.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))xe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ot=H._multiDrawStarts,Me=H._multiDrawCounts,he=H._multiDrawCount,Ht=Et?P.get(Et).bytesPerElement:1,Ae=wt.get(Y).currentProgram.getUniforms();for(let Ve=0;Ve<he;Ve++)Ae.setValue(U,"_gl_DrawID",Ve),xe.render(Ot[Ve]/Ht,Me[Ve])}else if(H.isInstancedMesh)xe.renderInstances(oe,Bt,H.count);else if(K.isInstancedBufferGeometry){const Ot=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Me=Math.min(K.instanceCount,Ot);xe.renderInstances(oe,Bt,Me)}else xe.render(oe,Bt)};function we(b,k,K){b.transparent===!0&&b.side===Un&&b.forceSinglePass===!1?(b.side=sn,b.needsUpdate=!0,bi(b,k,K),b.side=oi,b.needsUpdate=!0,bi(b,k,K),b.side=Un):bi(b,k,K)}this.compile=function(b,k,K=null){K===null&&(K=b),g=Ut.get(K),g.init(k),C.push(g),K.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),b!==K&&b.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),g.setupLights();const Y=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ht=H.material;if(ht)if(Array.isArray(ht))for(let St=0;St<ht.length;St++){const At=ht[St];we(At,K,H),Y.add(At)}else we(ht,K,H),Y.add(ht)}),g=C.pop(),Y},this.compileAsync=function(b,k,K=null){const Y=this.compile(b,k,K);return new Promise(H=>{function ht(){if(Y.forEach(function(St){wt.get(St).currentProgram.isReady()&&Y.delete(St)}),Y.size===0){H(b);return}setTimeout(ht,10)}kt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let ve=null;function rn(b){ve&&ve(b)}function dn(){Gn.stop()}function mr(){Gn.start()}const Gn=new Pu;Gn.setAnimationLoop(rn),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(b){ve=b,ft.setAnimationLoop(b),b===null?Gn.stop():Gn.start()},ft.addEventListener("sessionstart",dn),ft.addEventListener("sessionend",mr),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(k),k=ft.getCamera()),b.isScene===!0&&b.onBeforeRender(w,b,k,W),g=Ut.get(b,C.length),g.init(k),C.push(g),ut.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Yt.setFromProjectionMatrix(ut,On,k.reversedDepth),rt=this.localClippingEnabled,q=mt.init(this.clippingPlanes,rt),y=Q.get(b,I.length),y.init(),I.push(y),ft.enabled===!0&&ft.isPresenting===!0){const ht=w.xr.getDepthSensingMesh();ht!==null&&Is(ht,k,-1/0,w.sortObjects)}Is(b,k,0,w.sortObjects),y.finish(),w.sortObjects===!0&&y.sort(xt,it),Pe=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,Pe&&Pt.addToRenderList(y,b),this.info.render.frame++,q===!0&&mt.beginShadows();const K=g.state.shadowsArray;Ct.render(K,b,k),q===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=y.opaque,H=y.transmissive;if(g.setupLights(),k.isArrayCamera){const ht=k.cameras;if(H.length>0)for(let St=0,At=ht.length;St<At;St++){const Et=ht[St];It(Y,H,b,Et)}Pe&&Pt.render(b);for(let St=0,At=ht.length;St<At;St++){const Et=ht[St];on(y,b,Et,Et.viewport)}}else H.length>0&&It(Y,H,b,k),Pe&&Pt.render(b),on(y,b,k);W!==null&&B===0&&(Qt.updateMultisampleRenderTarget(W),Qt.updateRenderTargetMipmap(W)),b.isScene===!0&&b.onAfterRender(w,b,k),gt.resetDefaultState(),R=-1,A=null,C.pop(),C.length>0?(g=C[C.length-1],q===!0&&mt.setGlobalState(w.clippingPlanes,g.state.camera)):g=null,I.pop(),I.length>0?y=I[I.length-1]:y=null};function Is(b,k,K,Y){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)K=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Yt.intersectsSprite(b)){Y&&Wt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ut);const St=Z.update(b),At=b.material;At.visible&&y.push(b,St,At,K,Wt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Yt.intersectsObject(b))){const St=Z.update(b),At=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Wt.copy(b.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Wt.copy(St.boundingSphere.center)),Wt.applyMatrix4(b.matrixWorld).applyMatrix4(ut)),Array.isArray(At)){const Et=St.groups;for(let Vt=0,Gt=Et.length;Vt<Gt;Vt++){const Ft=Et[Vt],oe=At[Ft.materialIndex];oe&&oe.visible&&y.push(b,St,oe,K,Wt.z,Ft)}}else At.visible&&y.push(b,St,At,K,Wt.z,null)}}const ht=b.children;for(let St=0,At=ht.length;St<At;St++)Is(ht[St],k,K,Y)}function on(b,k,K,Y){const H=b.opaque,ht=b.transmissive,St=b.transparent;g.setupLightsView(K),q===!0&&mt.setGlobalState(w.clippingPlanes,K),Y&&Nt.viewport(N.copy(Y)),H.length>0&&Ei(H,k,K),ht.length>0&&Ei(ht,k,K),St.length>0&&Ei(St,k,K),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function It(b,k,K,Y){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Y.id]===void 0&&(g.state.transmissionRenderTarget[Y.id]=new Gi(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?dr:Bn,minFilter:ni,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ge.workingColorSpace}));const ht=g.state.transmissionRenderTarget[Y.id],St=Y.viewport||N;ht.setSize(St.z*w.transmissionResolutionScale,St.w*w.transmissionResolutionScale);const At=w.getRenderTarget(),Et=w.getActiveCubeFace(),Vt=w.getActiveMipmapLevel();w.setRenderTarget(ht),w.getClearColor($),lt=w.getClearAlpha(),lt<1&&w.setClearColor(16777215,.5),w.clear(),Pe&&Pt.render(K);const Gt=w.toneMapping;w.toneMapping=Mi;const Ft=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),g.setupLightsView(Y),q===!0&&mt.setGlobalState(w.clippingPlanes,Y),Ei(b,K,Y),Qt.updateMultisampleRenderTarget(ht),Qt.updateRenderTargetMipmap(ht),kt.has("WEBGL_multisampled_render_to_texture")===!1){let oe=!1;for(let me=0,Bt=k.length;me<Bt;me++){const Zt=k[me],xe=Zt.object,Ot=Zt.geometry,Me=Zt.material,he=Zt.group;if(Me.side===Un&&xe.layers.test(Y.layers)){const Ht=Me.side;Me.side=sn,Me.needsUpdate=!0,Ds(xe,K,Y,Ot,Me,he),Me.side=Ht,Me.needsUpdate=!0,oe=!0}}oe===!0&&(Qt.updateMultisampleRenderTarget(ht),Qt.updateRenderTargetMipmap(ht))}w.setRenderTarget(At,Et,Vt),w.setClearColor($,lt),Ft!==void 0&&(Y.viewport=Ft),w.toneMapping=Gt}function Ei(b,k,K){const Y=k.isScene===!0?k.overrideMaterial:null;for(let H=0,ht=b.length;H<ht;H++){const St=b[H],At=St.object,Et=St.geometry,Vt=St.group;let Gt=St.material;Gt.allowOverride===!0&&Y!==null&&(Gt=Y),At.layers.test(K.layers)&&Ds(At,k,K,Et,Gt,Vt)}}function Ds(b,k,K,Y,H,ht){b.onBeforeRender(w,k,K,Y,H,ht),b.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(w,k,K,Y,b,ht),H.transparent===!0&&H.side===Un&&H.forceSinglePass===!1?(H.side=sn,H.needsUpdate=!0,w.renderBufferDirect(K,k,Y,H,b,ht),H.side=oi,H.needsUpdate=!0,w.renderBufferDirect(K,k,Y,H,b,ht),H.side=Un):w.renderBufferDirect(K,k,Y,H,b,ht),b.onAfterRender(w,k,K,Y,H,ht)}function bi(b,k,K){k.isScene!==!0&&(k=Kt);const Y=wt.get(b),H=g.state.lights,ht=g.state.shadowsArray,St=H.state.version,At=nt.getParameters(b,H.state,ht,k,K),Et=nt.getProgramCacheKey(At);let Vt=Y.programs;Y.environment=b.isMeshStandardMaterial?k.environment:null,Y.fog=k.fog,Y.envMap=(b.isMeshStandardMaterial?Le:Ne).get(b.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Vt===void 0&&(b.addEventListener("dispose",st),Vt=new Map,Y.programs=Vt);let Gt=Vt.get(Et);if(Gt!==void 0){if(Y.currentProgram===Gt&&Y.lightsStateVersion===St)return Wi(b,At),Gt}else At.uniforms=nt.getUniforms(b),b.onBeforeCompile(At,w),Gt=nt.acquireProgram(At,Et),Vt.set(Et,Gt),Y.uniforms=At.uniforms;const Ft=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ft.clippingPlanes=mt.uniform),Wi(b,At),Y.needsLights=gr(b),Y.lightsStateVersion=St,Y.needsLights&&(Ft.ambientLightColor.value=H.state.ambient,Ft.lightProbe.value=H.state.probe,Ft.directionalLights.value=H.state.directional,Ft.directionalLightShadows.value=H.state.directionalShadow,Ft.spotLights.value=H.state.spot,Ft.spotLightShadows.value=H.state.spotShadow,Ft.rectAreaLights.value=H.state.rectArea,Ft.ltc_1.value=H.state.rectAreaLTC1,Ft.ltc_2.value=H.state.rectAreaLTC2,Ft.pointLights.value=H.state.point,Ft.pointLightShadows.value=H.state.pointShadow,Ft.hemisphereLights.value=H.state.hemi,Ft.directionalShadowMap.value=H.state.directionalShadowMap,Ft.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ft.spotShadowMap.value=H.state.spotShadowMap,Ft.spotLightMatrix.value=H.state.spotLightMatrix,Ft.spotLightMap.value=H.state.spotLightMap,Ft.pointShadowMap.value=H.state.pointShadowMap,Ft.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=Gt,Y.uniformsList=null,Gt}function Ns(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=uo.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function Wi(b,k){const K=wt.get(b);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.batchingColor=k.batchingColor,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.instancingMorph=k.instancingMorph,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function _r(b,k,K,Y,H){k.isScene!==!0&&(k=Kt),Qt.resetTextureUnits();const ht=k.fog,St=Y.isMeshStandardMaterial?k.environment:null,At=W===null?w.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:tn,Et=(Y.isMeshStandardMaterial?Le:Ne).get(Y.envMap||St),Vt=Y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Gt=!!K.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ft=!!K.morphAttributes.position,oe=!!K.morphAttributes.normal,me=!!K.morphAttributes.color;let Bt=Mi;Y.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Bt=w.toneMapping);const Zt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,xe=Zt!==void 0?Zt.length:0,Ot=wt.get(Y),Me=g.state.lights;if(q===!0&&(rt===!0||b!==A)){const Ie=b===A&&Y.id===R;mt.setState(Y,b,Ie)}let he=!1;Y.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Me.state.version||Ot.outputColorSpace!==At||H.isBatchedMesh&&Ot.batching===!1||!H.isBatchedMesh&&Ot.batching===!0||H.isBatchedMesh&&Ot.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ot.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ot.instancing===!1||!H.isInstancedMesh&&Ot.instancing===!0||H.isSkinnedMesh&&Ot.skinning===!1||!H.isSkinnedMesh&&Ot.skinning===!0||H.isInstancedMesh&&Ot.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ot.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ot.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ot.instancingMorph===!1&&H.morphTexture!==null||Ot.envMap!==Et||Y.fog===!0&&Ot.fog!==ht||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==mt.numPlanes||Ot.numIntersection!==mt.numIntersection)||Ot.vertexAlphas!==Vt||Ot.vertexTangents!==Gt||Ot.morphTargets!==Ft||Ot.morphNormals!==oe||Ot.morphColors!==me||Ot.toneMapping!==Bt||Ot.morphTargetsCount!==xe)&&(he=!0):(he=!0,Ot.__version=Y.version);let Ht=Ot.currentProgram;he===!0&&(Ht=bi(Y,k,H));let Ae=!1,Ve=!1,Pn=!1;const ue=Ht.getUniforms(),en=Ot.uniforms;if(Nt.useProgram(Ht.program)&&(Ae=!0,Ve=!0,Pn=!0),Y.id!==R&&(R=Y.id,Ve=!0),Ae||A!==b){Nt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ue.setValue(U,"projectionMatrix",b.projectionMatrix),ue.setValue(U,"viewMatrix",b.matrixWorldInverse);const de=ue.map.cameraPosition;de!==void 0&&de.setValue(U,Dt.setFromMatrixPosition(b.matrixWorld)),pe.logarithmicDepthBuffer&&ue.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ue.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),A!==b&&(A=b,Ve=!0,Pn=!0)}if(H.isSkinnedMesh){ue.setOptional(U,H,"bindMatrix"),ue.setOptional(U,H,"bindMatrixInverse");const Ie=H.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),ue.setValue(U,"boneTexture",Ie.boneTexture,Qt))}H.isBatchedMesh&&(ue.setOptional(U,H,"batchingTexture"),ue.setValue(U,"batchingTexture",H._matricesTexture,Qt),ue.setOptional(U,H,"batchingIdTexture"),ue.setValue(U,"batchingIdTexture",H._indirectTexture,Qt),ue.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&ue.setValue(U,"batchingColorTexture",H._colorsTexture,Qt));const Ge=K.morphAttributes;if((Ge.position!==void 0||Ge.normal!==void 0||Ge.color!==void 0)&&dt.update(H,K,Ht),(Ve||Ot.receiveShadow!==H.receiveShadow)&&(Ot.receiveShadow=H.receiveShadow,ue.setValue(U,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(en.envMap.value=Et,en.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&k.environment!==null&&(en.envMapIntensity.value=k.environmentIntensity),Ve&&(ue.setValue(U,"toneMappingExposure",w.toneMappingExposure),Ot.needsLights&&li(en,Pn),ht&&Y.fog===!0&&at.refreshFogUniforms(en,ht),at.refreshMaterialUniforms(en,Y,G,pt,g.state.transmissionRenderTarget[b.id]),uo.upload(U,Ns(Ot),en,Qt)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(uo.upload(U,Ns(Ot),en,Qt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ue.setValue(U,"center",H.center),ue.setValue(U,"modelViewMatrix",H.modelViewMatrix),ue.setValue(U,"normalMatrix",H.normalMatrix),ue.setValue(U,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ie=Y.uniformsGroups;for(let de=0,xn=Ie.length;de<xn;de++){const an=Ie[de];$t.update(an,Ht),$t.bind(an,Ht)}}return Ht}function li(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function gr(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(b,k,K){const Y=wt.get(b);Y.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),wt.get(b.texture).__webglTexture=k,wt.get(b.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:K,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,k){const K=wt.get(b);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0};const To=U.createFramebuffer();this.setRenderTarget=function(b,k=0,K=0){W=b,F=k,B=K;let Y=!0,H=null,ht=!1,St=!1;if(b){const Et=wt.get(b);if(Et.__useDefaultFramebuffer!==void 0)Nt.bindFramebuffer(U.FRAMEBUFFER,null),Y=!1;else if(Et.__webglFramebuffer===void 0)Qt.setupRenderTarget(b);else if(Et.__hasExternalTextures)Qt.rebindTextures(b,wt.get(b.texture).__webglTexture,wt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ft=b.depthTexture;if(Et.__boundDepthTexture!==Ft){if(Ft!==null&&wt.has(Ft)&&(b.width!==Ft.image.width||b.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Qt.setupDepthRenderbuffer(b)}}const Vt=b.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(St=!0);const Gt=wt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Gt[k])?H=Gt[k][K]:H=Gt[k],ht=!0):b.samples>0&&Qt.useMultisampledRTT(b)===!1?H=wt.get(b).__webglMultisampledFramebuffer:Array.isArray(Gt)?H=Gt[K]:H=Gt,N.copy(b.viewport),tt.copy(b.scissor),et=b.scissorTest}else N.copy(vt).multiplyScalar(G).floor(),tt.copy(zt).multiplyScalar(G).floor(),et=se;if(K!==0&&(H=To),Nt.bindFramebuffer(U.FRAMEBUFFER,H)&&Y&&Nt.drawBuffers(b,H),Nt.viewport(N),Nt.scissor(tt),Nt.setScissorTest(et),ht){const Et=wt.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,Et.__webglTexture,K)}else if(St){const Et=k;for(let Vt=0;Vt<b.textures.length;Vt++){const Gt=wt.get(b.textures[Vt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Vt,Gt.__webglTexture,K,Et)}}else if(b!==null&&K!==0){const Et=wt.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Et.__webglTexture,K)}R=-1},this.readRenderTargetPixels=function(b,k,K,Y,H,ht,St,At=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=wt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et){Nt.bindFramebuffer(U.FRAMEBUFFER,Et);try{const Vt=b.textures[At],Gt=Vt.format,Ft=Vt.type;if(!pe.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-Y&&K>=0&&K<=b.height-H&&(b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+At),U.readPixels(k,K,Y,H,Lt.convert(Gt),Lt.convert(Ft),ht))}finally{const Vt=W!==null?wt.get(W).__webglFramebuffer:null;Nt.bindFramebuffer(U.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(b,k,K,Y,H,ht,St,At=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=wt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et)if(k>=0&&k<=b.width-Y&&K>=0&&K<=b.height-H){Nt.bindFramebuffer(U.FRAMEBUFFER,Et);const Vt=b.textures[At],Gt=Vt.format,Ft=Vt.type;if(!pe.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const oe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,oe),U.bufferData(U.PIXEL_PACK_BUFFER,ht.byteLength,U.STREAM_READ),b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+At),U.readPixels(k,K,Y,H,Lt.convert(Gt),Lt.convert(Ft),0);const me=W!==null?wt.get(W).__webglFramebuffer:null;Nt.bindFramebuffer(U.FRAMEBUFFER,me);const Bt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await kf(U,Bt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,oe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ht),U.deleteBuffer(oe),U.deleteSync(Bt),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,k=null,K=0){const Y=Math.pow(2,-K),H=Math.floor(b.image.width*Y),ht=Math.floor(b.image.height*Y),St=k!==null?k.x:0,At=k!==null?k.y:0;Qt.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,K,0,0,St,At,H,ht),Nt.unbindTexture()};const Eo=U.createFramebuffer(),bo=U.createFramebuffer();this.copyTextureToTexture=function(b,k,K=null,Y=null,H=0,ht=null){ht===null&&(H!==0?(ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ht=H,H=0):ht=0);let St,At,Et,Vt,Gt,Ft,oe,me,Bt;const Zt=b.isCompressedTexture?b.mipmaps[ht]:b.image;if(K!==null)St=K.max.x-K.min.x,At=K.max.y-K.min.y,Et=K.isBox3?K.max.z-K.min.z:1,Vt=K.min.x,Gt=K.min.y,Ft=K.isBox3?K.min.z:0;else{const Ge=Math.pow(2,-H);St=Math.floor(Zt.width*Ge),At=Math.floor(Zt.height*Ge),b.isDataArrayTexture?Et=Zt.depth:b.isData3DTexture?Et=Math.floor(Zt.depth*Ge):Et=1,Vt=0,Gt=0,Ft=0}Y!==null?(oe=Y.x,me=Y.y,Bt=Y.z):(oe=0,me=0,Bt=0);const xe=Lt.convert(k.format),Ot=Lt.convert(k.type);let Me;k.isData3DTexture?(Qt.setTexture3D(k,0),Me=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Qt.setTexture2DArray(k,0),Me=U.TEXTURE_2D_ARRAY):(Qt.setTexture2D(k,0),Me=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);const he=U.getParameter(U.UNPACK_ROW_LENGTH),Ht=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ae=U.getParameter(U.UNPACK_SKIP_PIXELS),Ve=U.getParameter(U.UNPACK_SKIP_ROWS),Pn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Zt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Zt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Vt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Gt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ft);const ue=b.isDataArrayTexture||b.isData3DTexture,en=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){const Ge=wt.get(b),Ie=wt.get(k),de=wt.get(Ge.__renderTarget),xn=wt.get(Ie.__renderTarget);Nt.bindFramebuffer(U.READ_FRAMEBUFFER,de.__webglFramebuffer),Nt.bindFramebuffer(U.DRAW_FRAMEBUFFER,xn.__webglFramebuffer);for(let an=0;an<Et;an++)ue&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,wt.get(b).__webglTexture,H,Ft+an),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,wt.get(k).__webglTexture,ht,Bt+an)),U.blitFramebuffer(Vt,Gt,St,At,oe,me,St,At,U.DEPTH_BUFFER_BIT,U.NEAREST);Nt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||b.isRenderTargetTexture||wt.has(b)){const Ge=wt.get(b),Ie=wt.get(k);Nt.bindFramebuffer(U.READ_FRAMEBUFFER,Eo),Nt.bindFramebuffer(U.DRAW_FRAMEBUFFER,bo);for(let de=0;de<Et;de++)ue?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ge.__webglTexture,H,Ft+de):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ge.__webglTexture,H),en?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ie.__webglTexture,ht,Bt+de):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ie.__webglTexture,ht),H!==0?U.blitFramebuffer(Vt,Gt,St,At,oe,me,St,At,U.COLOR_BUFFER_BIT,U.NEAREST):en?U.copyTexSubImage3D(Me,ht,oe,me,Bt+de,Vt,Gt,St,At):U.copyTexSubImage2D(Me,ht,oe,me,Vt,Gt,St,At);Nt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else en?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Me,ht,oe,me,Bt,St,At,Et,xe,Ot,Zt.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(Me,ht,oe,me,Bt,St,At,Et,xe,Zt.data):U.texSubImage3D(Me,ht,oe,me,Bt,St,At,Et,xe,Ot,Zt):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ht,oe,me,St,At,xe,Ot,Zt.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ht,oe,me,Zt.width,Zt.height,xe,Zt.data):U.texSubImage2D(U.TEXTURE_2D,ht,oe,me,St,At,xe,Ot,Zt);U.pixelStorei(U.UNPACK_ROW_LENGTH,he),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ht),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ae),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ve),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Pn),ht===0&&k.generateMipmaps&&U.generateMipmap(Me),Nt.unbindTexture()},this.copyTextureToTexture3D=function(b,k,K=null,Y=null,H=0){return ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,k,K,Y,H)},this.initRenderTarget=function(b){wt.get(b).__webglFramebuffer===void 0&&Qt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Qt.setTextureCube(b,0):b.isData3DTexture?Qt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Qt.setTexture2DArray(b,0):Qt.setTexture2D(b,0),Nt.unbindTexture()},this.resetState=function(){F=0,B=0,W=null,Nt.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}}function Zh(r,t){if(t===uf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===_l||t===cu){let e=r.getIndex();if(e===null){const l=[],h=r.getAttribute("position");if(h!==void 0){for(let u=0;u<h.count;u++)l.push(u);r.setIndex(l),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const i=e.count-2,s=[];if(t===_l)for(let l=1;l<=i;l++)s.push(e.getX(0)),s.push(e.getX(l)),s.push(e.getX(l+1));else for(let l=0;l<i;l++)l%2===0?(s.push(e.getX(l)),s.push(e.getX(l+1)),s.push(e.getX(l+2))):(s.push(e.getX(l+2)),s.push(e.getX(l+1)),s.push(e.getX(l)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=r.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}class kx extends Ps{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Xx(e)}),this.register(function(e){return new Zx(e)}),this.register(function(e){return new ey(e)}),this.register(function(e){return new ny(e)}),this.register(function(e){return new iy(e)}),this.register(function(e){return new Yx(e)}),this.register(function(e){return new Kx(e)}),this.register(function(e){return new jx(e)}),this.register(function(e){return new $x(e)}),this.register(function(e){return new Wx(e)}),this.register(function(e){return new Jx(e)}),this.register(function(e){return new qx(e)}),this.register(function(e){return new ty(e)}),this.register(function(e){return new Qx(e)}),this.register(function(e){return new Vx(e)}),this.register(function(e){return new sy(e)}),this.register(function(e){return new ry(e)})}load(t,e,i,s){const a=this;let l;if(this.resourcePath!=="")l=this.resourcePath;else if(this.path!==""){const d=sr.extractUrlBase(t);l=sr.resolveURL(d,this.path)}else l=sr.extractUrlBase(t);this.manager.itemStart(t);const h=function(d){s?s(d):console.error(d),a.manager.itemError(t),a.manager.itemEnd(t)},u=new Ru(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(t,function(d){try{a.parse(d,l,function(m){e(m),a.manager.itemEnd(t)},h)}catch(m){h(m)}},i,h)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,i,s){let a;const l={},h={},u=new TextDecoder;if(typeof t=="string")a=JSON.parse(t);else if(t instanceof ArrayBuffer)if(u.decode(new Uint8Array(t,0,4))===Ou){try{l[ce.KHR_BINARY_GLTF]=new oy(t)}catch(p){s&&s(p);return}a=JSON.parse(l[ce.KHR_BINARY_GLTF].content)}else a=JSON.parse(u.decode(t));else a=t;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new xy(a,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let m=0;m<this.pluginCallbacks.length;m++){const p=this.pluginCallbacks[m](d);p.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),h[p.name]=p,l[p.name]=!0}if(a.extensionsUsed)for(let m=0;m<a.extensionsUsed.length;++m){const p=a.extensionsUsed[m],_=a.extensionsRequired||[];switch(p){case ce.KHR_MATERIALS_UNLIT:l[p]=new Gx;break;case ce.KHR_DRACO_MESH_COMPRESSION:l[p]=new ay(a,this.dracoLoader);break;case ce.KHR_TEXTURE_TRANSFORM:l[p]=new ly;break;case ce.KHR_MESH_QUANTIZATION:l[p]=new cy;break;default:_.indexOf(p)>=0&&h[p]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+p+'".')}}d.setExtensions(l),d.setPlugins(h),d.parse(i,s)}parseAsync(t,e){const i=this;return new Promise(function(s,a){i.parse(t,e,s,a)})}}function Hx(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}const ce={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Vx{constructor(t){this.parser=t,this.name=ce.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let i=0,s=e.length;i<s;i++){const a=e[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(t){const e=this.parser,i="light:"+t;let s=e.cache.get(i);if(s)return s;const a=e.json,u=((a.extensions&&a.extensions[this.name]||{}).lights||[])[t];let d;const m=new Jt(16777215);u.color!==void 0&&m.setRGB(u.color[0],u.color[1],u.color[2],tn);const p=u.range!==void 0?u.range:0;switch(u.type){case"directional":d=new Cu(m),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new Gp(m),d.distance=p;break;case"spot":d=new Hp(m),d.distance=p,u.spot=u.spot||{},u.spot.innerConeAngle=u.spot.innerConeAngle!==void 0?u.spot.innerConeAngle:0,u.spot.outerConeAngle=u.spot.outerConeAngle!==void 0?u.spot.outerConeAngle:Math.PI/4,d.angle=u.spot.outerConeAngle,d.penumbra=1-u.spot.innerConeAngle/u.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+u.type)}return d.position.set(0,0,0),ei(d,u),u.intensity!==void 0&&(d.intensity=u.intensity),d.name=e.createUniqueName(u.name||"light_"+t),s=Promise.resolve(d),e.cache.add(i,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,i=this.parser,a=i.json.nodes[t],h=(a.extensions&&a.extensions[this.name]||{}).light;return h===void 0?null:this._loadLight(h).then(function(u){return i._getNodeRef(e.cache,h,u)})}}class Gx{constructor(){this.name=ce.KHR_MATERIALS_UNLIT}getMaterialType(){return ki}extendParams(t,e,i){const s=[];t.color=new Jt(1,1,1),t.opacity=1;const a=e.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const l=a.baseColorFactor;t.color.setRGB(l[0],l[1],l[2],tn),t.opacity=l[3]}a.baseColorTexture!==void 0&&s.push(i.assignTexture(t,"map",a.baseColorTexture,Xe))}return Promise.all(s)}}class Wx{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name].emissiveStrength;return a!==void 0&&(e.emissiveIntensity=a),Promise.resolve()}}class Xx{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Vn}extendMaterialParams(t,e){const i=this.parser,s=i.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],l=s.extensions[this.name];if(l.clearcoatFactor!==void 0&&(e.clearcoat=l.clearcoatFactor),l.clearcoatTexture!==void 0&&a.push(i.assignTexture(e,"clearcoatMap",l.clearcoatTexture)),l.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=l.clearcoatRoughnessFactor),l.clearcoatRoughnessTexture!==void 0&&a.push(i.assignTexture(e,"clearcoatRoughnessMap",l.clearcoatRoughnessTexture)),l.clearcoatNormalTexture!==void 0&&(a.push(i.assignTexture(e,"clearcoatNormalMap",l.clearcoatNormalTexture)),l.clearcoatNormalTexture.scale!==void 0)){const h=l.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new fe(h,h)}return Promise.all(a)}}class Zx{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_DISPERSION}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Vn}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return e.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class qx{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Vn}extendMaterialParams(t,e){const i=this.parser,s=i.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],l=s.extensions[this.name];return l.iridescenceFactor!==void 0&&(e.iridescence=l.iridescenceFactor),l.iridescenceTexture!==void 0&&a.push(i.assignTexture(e,"iridescenceMap",l.iridescenceTexture)),l.iridescenceIor!==void 0&&(e.iridescenceIOR=l.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),l.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=l.iridescenceThicknessMinimum),l.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=l.iridescenceThicknessMaximum),l.iridescenceThicknessTexture!==void 0&&a.push(i.assignTexture(e,"iridescenceThicknessMap",l.iridescenceThicknessTexture)),Promise.all(a)}}class Yx{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_SHEEN}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Vn}extendMaterialParams(t,e){const i=this.parser,s=i.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[];e.sheenColor=new Jt(0,0,0),e.sheenRoughness=0,e.sheen=1;const l=s.extensions[this.name];if(l.sheenColorFactor!==void 0){const h=l.sheenColorFactor;e.sheenColor.setRGB(h[0],h[1],h[2],tn)}return l.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=l.sheenRoughnessFactor),l.sheenColorTexture!==void 0&&a.push(i.assignTexture(e,"sheenColorMap",l.sheenColorTexture,Xe)),l.sheenRoughnessTexture!==void 0&&a.push(i.assignTexture(e,"sheenRoughnessMap",l.sheenRoughnessTexture)),Promise.all(a)}}class Kx{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Vn}extendMaterialParams(t,e){const i=this.parser,s=i.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],l=s.extensions[this.name];return l.transmissionFactor!==void 0&&(e.transmission=l.transmissionFactor),l.transmissionTexture!==void 0&&a.push(i.assignTexture(e,"transmissionMap",l.transmissionTexture)),Promise.all(a)}}class jx{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_VOLUME}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Vn}extendMaterialParams(t,e){const i=this.parser,s=i.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],l=s.extensions[this.name];e.thickness=l.thicknessFactor!==void 0?l.thicknessFactor:0,l.thicknessTexture!==void 0&&a.push(i.assignTexture(e,"thicknessMap",l.thicknessTexture)),e.attenuationDistance=l.attenuationDistance||1/0;const h=l.attenuationColor||[1,1,1];return e.attenuationColor=new Jt().setRGB(h[0],h[1],h[2],tn),Promise.all(a)}}class $x{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_IOR}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Vn}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return e.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class Jx{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_SPECULAR}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Vn}extendMaterialParams(t,e){const i=this.parser,s=i.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],l=s.extensions[this.name];e.specularIntensity=l.specularFactor!==void 0?l.specularFactor:1,l.specularTexture!==void 0&&a.push(i.assignTexture(e,"specularIntensityMap",l.specularTexture));const h=l.specularColorFactor||[1,1,1];return e.specularColor=new Jt().setRGB(h[0],h[1],h[2],tn),l.specularColorTexture!==void 0&&a.push(i.assignTexture(e,"specularColorMap",l.specularColorTexture,Xe)),Promise.all(a)}}class Qx{constructor(t){this.parser=t,this.name=ce.EXT_MATERIALS_BUMP}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Vn}extendMaterialParams(t,e){const i=this.parser,s=i.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],l=s.extensions[this.name];return e.bumpScale=l.bumpFactor!==void 0?l.bumpFactor:1,l.bumpTexture!==void 0&&a.push(i.assignTexture(e,"bumpMap",l.bumpTexture)),Promise.all(a)}}class ty{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Vn}extendMaterialParams(t,e){const i=this.parser,s=i.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],l=s.extensions[this.name];return l.anisotropyStrength!==void 0&&(e.anisotropy=l.anisotropyStrength),l.anisotropyRotation!==void 0&&(e.anisotropyRotation=l.anisotropyRotation),l.anisotropyTexture!==void 0&&a.push(i.assignTexture(e,"anisotropyMap",l.anisotropyTexture)),Promise.all(a)}}class ey{constructor(t){this.parser=t,this.name=ce.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,i=e.json,s=i.textures[t];if(!s.extensions||!s.extensions[this.name])return null;const a=s.extensions[this.name],l=e.options.ktx2Loader;if(!l){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,a.source,l)}}class ny{constructor(t){this.parser=t,this.name=ce.EXT_TEXTURE_WEBP}loadTexture(t){const e=this.name,i=this.parser,s=i.json,a=s.textures[t];if(!a.extensions||!a.extensions[e])return null;const l=a.extensions[e],h=s.images[l.source];let u=i.textureLoader;if(h.uri){const d=i.options.manager.getHandler(h.uri);d!==null&&(u=d)}return i.loadTextureImage(t,l.source,u)}}class iy{constructor(t){this.parser=t,this.name=ce.EXT_TEXTURE_AVIF}loadTexture(t){const e=this.name,i=this.parser,s=i.json,a=s.textures[t];if(!a.extensions||!a.extensions[e])return null;const l=a.extensions[e],h=s.images[l.source];let u=i.textureLoader;if(h.uri){const d=i.options.manager.getHandler(h.uri);d!==null&&(u=d)}return i.loadTextureImage(t,l.source,u)}}class sy{constructor(t){this.name=ce.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,i=e.bufferViews[t];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),l=this.parser.options.meshoptDecoder;if(!l||!l.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(h){const u=s.byteOffset||0,d=s.byteLength||0,m=s.count,p=s.byteStride,_=new Uint8Array(h,u,d);return l.decodeGltfBufferAsync?l.decodeGltfBufferAsync(m,p,_,s.mode,s.filter).then(function(x){return x.buffer}):l.ready.then(function(){const x=new ArrayBuffer(m*p);return l.decodeGltfBuffer(new Uint8Array(x),m,p,_,s.mode,s.filter),x})})}else return null}}class ry{constructor(t){this.name=ce.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,i=e.nodes[t];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=e.meshes[i.mesh];for(const d of s.primitives)if(d.mode!==gn.TRIANGLES&&d.mode!==gn.TRIANGLE_STRIP&&d.mode!==gn.TRIANGLE_FAN&&d.mode!==void 0)return null;const l=i.extensions[this.name].attributes,h=[],u={};for(const d in l)h.push(this.parser.getDependency("accessor",l[d]).then(m=>(u[d]=m,u[d])));return h.length<1?null:(h.push(this.parser.createNodeMesh(t)),Promise.all(h).then(d=>{const m=d.pop(),p=m.isGroup?m.children:[m],_=d[0].count,x=[];for(const M of p){const S=new ie,y=new V,g=new Ti,I=new V(1,1,1),C=new gp(M.geometry,M.material,_);for(let w=0;w<_;w++)u.TRANSLATION&&y.fromBufferAttribute(u.TRANSLATION,w),u.ROTATION&&g.fromBufferAttribute(u.ROTATION,w),u.SCALE&&I.fromBufferAttribute(u.SCALE,w),C.setMatrixAt(w,S.compose(y,g,I));for(const w in u)if(w==="_COLOR_0"){const O=u[w];C.instanceColor=new vl(O.array,O.itemSize,O.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&M.geometry.setAttribute(w,u[w]);De.prototype.copy.call(C,M),this.parser.assignFinalMaterial(C),x.push(C)}return m.isGroup?(m.clear(),m.add(...x),m):x[0]}))}}const Ou="glTF",Js=12,qh={JSON:1313821514,BIN:5130562};class oy{constructor(t){this.name=ce.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Js),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Ou)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Js,a=new DataView(t,Js);let l=0;for(;l<s;){const h=a.getUint32(l,!0);l+=4;const u=a.getUint32(l,!0);if(l+=4,u===qh.JSON){const d=new Uint8Array(t,Js+l,h);this.content=i.decode(d)}else if(u===qh.BIN){const d=Js+l;this.body=t.slice(d,d+h)}l+=h}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ay{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ce.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const i=this.json,s=this.dracoLoader,a=t.extensions[this.name].bufferView,l=t.extensions[this.name].attributes,h={},u={},d={};for(const m in l){const p=Ml[m]||m.toLowerCase();h[p]=l[m]}for(const m in t.attributes){const p=Ml[m]||m.toLowerCase();if(l[m]!==void 0){const _=i.accessors[t.attributes[m]],x=gs[_.componentType];d[p]=x.name,u[p]=_.normalized===!0}}return e.getDependency("bufferView",a).then(function(m){return new Promise(function(p,_){s.decodeDracoFile(m,function(x){for(const M in x.attributes){const S=x.attributes[M],y=u[M];y!==void 0&&(S.normalized=y)}p(x)},h,d,tn,_)})})}}class ly{constructor(){this.name=ce.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class cy{constructor(){this.name=ce.KHR_MESH_QUANTIZATION}}class Fu extends pr{constructor(t,e,i,s){super(t,e,i,s)}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s*3+s;for(let l=0;l!==s;l++)e[l]=i[a+l];return e}interpolate_(t,e,i,s){const a=this.resultBuffer,l=this.sampleValues,h=this.valueSize,u=h*2,d=h*3,m=s-e,p=(i-e)/m,_=p*p,x=_*p,M=t*d,S=M-d,y=-2*x+3*_,g=x-_,I=1-y,C=g-_+p;for(let w=0;w!==h;w++){const O=l[S+w+h],F=l[S+w+u]*m,B=l[M+w+h],W=l[M+w]*m;a[w]=I*O+C*F+y*B+g*W}return a}}const hy=new Ti;class uy extends Fu{interpolate_(t,e,i,s){const a=super.interpolate_(t,e,i,s);return hy.fromArray(a).normalize().toArray(a),a}}const gn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},gs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Yh={9728:Je,9729:hn,9984:eu,9985:ro,9986:Qs,9987:ni},Kh={33071:xi,33648:fo,10497:Ms},Ca={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ml={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},gi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},dy={CUBICSPLINE:void 0,LINEAR:hr,STEP:cr},Pa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function fy(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Fl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:oi})),r.DefaultMaterial}function Ui(r,t,e){for(const i in e.extensions)r[i]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[i]=e.extensions[i])}function ei(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function py(r,t,e){let i=!1,s=!1,a=!1;for(let d=0,m=t.length;d<m;d++){const p=t[d];if(p.POSITION!==void 0&&(i=!0),p.NORMAL!==void 0&&(s=!0),p.COLOR_0!==void 0&&(a=!0),i&&s&&a)break}if(!i&&!s&&!a)return Promise.resolve(r);const l=[],h=[],u=[];for(let d=0,m=t.length;d<m;d++){const p=t[d];if(i){const _=p.POSITION!==void 0?e.getDependency("accessor",p.POSITION):r.attributes.position;l.push(_)}if(s){const _=p.NORMAL!==void 0?e.getDependency("accessor",p.NORMAL):r.attributes.normal;h.push(_)}if(a){const _=p.COLOR_0!==void 0?e.getDependency("accessor",p.COLOR_0):r.attributes.color;u.push(_)}}return Promise.all([Promise.all(l),Promise.all(h),Promise.all(u)]).then(function(d){const m=d[0],p=d[1],_=d[2];return i&&(r.morphAttributes.position=m),s&&(r.morphAttributes.normal=p),a&&(r.morphAttributes.color=_),r.morphTargetsRelative=!0,r})}function my(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,i=t.weights.length;e<i;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let i=0,s=e.length;i<s;i++)r.morphTargetDictionary[e[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function _y(r){let t;const e=r.extensions&&r.extensions[ce.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+La(e.attributes):t=r.indices+":"+La(r.attributes)+":"+r.mode,r.targets!==void 0)for(let i=0,s=r.targets.length;i<s;i++)t+=":"+La(r.targets[i]);return t}function La(r){let t="";const e=Object.keys(r).sort();for(let i=0,s=e.length;i<s;i++)t+=e[i]+":"+r[e[i]]+";";return t}function Sl(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function gy(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const vy=new ie;class xy{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Hx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,a=!1,l=-1;if(typeof navigator<"u"){const h=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(h)===!0;const u=h.match(/Version\/(\d+)/);s=i&&u?parseInt(u[1],10):-1,a=h.indexOf("Firefox")>-1,l=a?h.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||a&&l<98?this.textureLoader=new zp(this.options.manager):this.textureLoader=new Zp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ru(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const i=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(l){return l._markDefs&&l._markDefs()}),Promise.all(this._invokeAll(function(l){return l.beforeRoot&&l.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(l){const h={scene:l[0][s.scene||0],scenes:l[0],animations:l[1],cameras:l[2],asset:s.asset,parser:i,userData:{}};return Ui(a,h,s),ei(h,s),Promise.all(i._invokeAll(function(u){return u.afterRoot&&u.afterRoot(h)})).then(function(){for(const u of h.scenes)u.updateMatrixWorld();t(h)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],i=this.json.meshes||[];for(let s=0,a=e.length;s<a;s++){const l=e[s].joints;for(let h=0,u=l.length;h<u;h++)t[l[h]].isBone=!0}for(let s=0,a=t.length;s<a;s++){const l=t[s];l.mesh!==void 0&&(this._addNodeRef(this.meshCache,l.mesh),l.skin!==void 0&&(i[l.mesh].isSkinnedMesh=!0)),l.camera!==void 0&&this._addNodeRef(this.cameraCache,l.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,i){if(t.refs[e]<=1)return i;const s=i.clone(),a=(l,h)=>{const u=this.associations.get(l);u!=null&&this.associations.set(h,u);for(const[d,m]of l.children.entries())a(m,h.children[d])};return a(i,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let i=0;i<e.length;i++){const s=t(e[i]);if(s)return s}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const i=[];for(let s=0;s<e.length;s++){const a=t(e[s]);a&&i.push(a)}return i}getDependency(t,e){const i=t+":"+e;let s=this.cache.get(i);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(e)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(i,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){const i=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(a,l){return i.getDependency(t,l)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],i=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[ce.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(a,l){i.load(sr.resolveURL(e.uri,s.path),a,void 0,function(){l(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(i){const s=e.byteLength||0,a=e.byteOffset||0;return i.slice(a,a+s)})}loadAccessor(t){const e=this,i=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){const l=Ca[s.type],h=gs[s.componentType],u=s.normalized===!0,d=new h(s.count*l);return Promise.resolve(new Qe(d,l,u))}const a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(l){const h=l[0],u=Ca[s.type],d=gs[s.componentType],m=d.BYTES_PER_ELEMENT,p=m*u,_=s.byteOffset||0,x=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,M=s.normalized===!0;let S,y;if(x&&x!==p){const g=Math.floor(_/x),I="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count;let C=e.cache.get(I);C||(S=new d(h,g*x,s.count*x/m),C=new dp(S,x/m),e.cache.add(I,C)),y=new Dl(C,u,_%x/m,M)}else h===null?S=new d(s.count*u):S=new d(h,_,s.count*u),y=new Qe(S,u,M);if(s.sparse!==void 0){const g=Ca.SCALAR,I=gs[s.sparse.indices.componentType],C=s.sparse.indices.byteOffset||0,w=s.sparse.values.byteOffset||0,O=new I(l[1],C,s.sparse.count*g),F=new d(l[2],w,s.sparse.count*u);h!==null&&(y=new Qe(y.array.slice(),y.itemSize,y.normalized)),y.normalized=!1;for(let B=0,W=O.length;B<W;B++){const R=O[B];if(y.setX(R,F[B*u]),u>=2&&y.setY(R,F[B*u+1]),u>=3&&y.setZ(R,F[B*u+2]),u>=4&&y.setW(R,F[B*u+3]),u>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}y.normalized=M}return y})}loadTexture(t){const e=this.json,i=this.options,a=e.textures[t].source,l=e.images[a];let h=this.textureLoader;if(l.uri){const u=i.manager.getHandler(l.uri);u!==null&&(h=u)}return this.loadTextureImage(t,a,h)}loadTextureImage(t,e,i){const s=this,a=this.json,l=a.textures[t],h=a.images[e],u=(h.uri||h.bufferView)+":"+l.sampler;if(this.textureCache[u])return this.textureCache[u];const d=this.loadImageSource(e,i).then(function(m){m.flipY=!1,m.name=l.name||h.name||"",m.name===""&&typeof h.uri=="string"&&h.uri.startsWith("data:image/")===!1&&(m.name=h.uri);const _=(a.samplers||{})[l.sampler]||{};return m.magFilter=Yh[_.magFilter]||hn,m.minFilter=Yh[_.minFilter]||ni,m.wrapS=Kh[_.wrapS]||Ms,m.wrapT=Kh[_.wrapT]||Ms,m.generateMipmaps=!m.isCompressedTexture&&m.minFilter!==Je&&m.minFilter!==hn,s.associations.set(m,{textures:t}),m}).catch(function(){return null});return this.textureCache[u]=d,d}loadImageSource(t,e){const i=this,s=this.json,a=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(p=>p.clone());const l=s.images[t],h=self.URL||self.webkitURL;let u=l.uri||"",d=!1;if(l.bufferView!==void 0)u=i.getDependency("bufferView",l.bufferView).then(function(p){d=!0;const _=new Blob([p],{type:l.mimeType});return u=h.createObjectURL(_),u});else if(l.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const m=Promise.resolve(u).then(function(p){return new Promise(function(_,x){let M=_;e.isImageBitmapLoader===!0&&(M=function(S){const y=new He(S);y.needsUpdate=!0,_(y)}),e.load(sr.resolveURL(p,a.path),M,void 0,x)})}).then(function(p){return d===!0&&h.revokeObjectURL(u),ei(p,l),p.userData.mimeType=l.mimeType||gy(l.uri),p}).catch(function(p){throw console.error("THREE.GLTFLoader: Couldn't load texture",u),p});return this.sourceCache[t]=m,m}assignTexture(t,e,i,s){const a=this;return this.getDependency("texture",i.index).then(function(l){if(!l)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(l=l.clone(),l.channel=i.texCoord),a.extensions[ce.KHR_TEXTURE_TRANSFORM]){const h=i.extensions!==void 0?i.extensions[ce.KHR_TEXTURE_TRANSFORM]:void 0;if(h){const u=a.associations.get(l);l=a.extensions[ce.KHR_TEXTURE_TRANSFORM].extendTexture(l,h),a.associations.set(l,u)}}return s!==void 0&&(l.colorSpace=s),t[e]=l,l})}assignFinalMaterial(t){const e=t.geometry;let i=t.material;const s=e.attributes.tangent===void 0,a=e.attributes.color!==void 0,l=e.attributes.normal===void 0;if(t.isPoints){const h="PointsMaterial:"+i.uuid;let u=this.cache.get(h);u||(u=new Eu,Fn.prototype.copy.call(u,i),u.color.copy(i.color),u.map=i.map,u.sizeAttenuation=!1,this.cache.add(h,u)),i=u}else if(t.isLine){const h="LineBasicMaterial:"+i.uuid;let u=this.cache.get(h);u||(u=new Tu,Fn.prototype.copy.call(u,i),u.color.copy(i.color),u.map=i.map,this.cache.add(h,u)),i=u}if(s||a||l){let h="ClonedMaterial:"+i.uuid+":";s&&(h+="derivative-tangents:"),a&&(h+="vertex-colors:"),l&&(h+="flat-shading:");let u=this.cache.get(h);u||(u=i.clone(),a&&(u.vertexColors=!0),l&&(u.flatShading=!0),s&&(u.normalScale&&(u.normalScale.y*=-1),u.clearcoatNormalScale&&(u.clearcoatNormalScale.y*=-1)),this.cache.add(h,u),this.associations.set(u,this.associations.get(i))),i=u}t.material=i}getMaterialType(){return Fl}loadMaterial(t){const e=this,i=this.json,s=this.extensions,a=i.materials[t];let l;const h={},u=a.extensions||{},d=[];if(u[ce.KHR_MATERIALS_UNLIT]){const p=s[ce.KHR_MATERIALS_UNLIT];l=p.getMaterialType(),d.push(p.extendParams(h,a,e))}else{const p=a.pbrMetallicRoughness||{};if(h.color=new Jt(1,1,1),h.opacity=1,Array.isArray(p.baseColorFactor)){const _=p.baseColorFactor;h.color.setRGB(_[0],_[1],_[2],tn),h.opacity=_[3]}p.baseColorTexture!==void 0&&d.push(e.assignTexture(h,"map",p.baseColorTexture,Xe)),h.metalness=p.metallicFactor!==void 0?p.metallicFactor:1,h.roughness=p.roughnessFactor!==void 0?p.roughnessFactor:1,p.metallicRoughnessTexture!==void 0&&(d.push(e.assignTexture(h,"metalnessMap",p.metallicRoughnessTexture)),d.push(e.assignTexture(h,"roughnessMap",p.metallicRoughnessTexture))),l=this._invokeOne(function(_){return _.getMaterialType&&_.getMaterialType(t)}),d.push(Promise.all(this._invokeAll(function(_){return _.extendMaterialParams&&_.extendMaterialParams(t,h)})))}a.doubleSided===!0&&(h.side=Un);const m=a.alphaMode||Pa.OPAQUE;if(m===Pa.BLEND?(h.transparent=!0,h.depthWrite=!1):(h.transparent=!1,m===Pa.MASK&&(h.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&l!==ki&&(d.push(e.assignTexture(h,"normalMap",a.normalTexture)),h.normalScale=new fe(1,1),a.normalTexture.scale!==void 0)){const p=a.normalTexture.scale;h.normalScale.set(p,p)}if(a.occlusionTexture!==void 0&&l!==ki&&(d.push(e.assignTexture(h,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(h.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&l!==ki){const p=a.emissiveFactor;h.emissive=new Jt().setRGB(p[0],p[1],p[2],tn)}return a.emissiveTexture!==void 0&&l!==ki&&d.push(e.assignTexture(h,"emissiveMap",a.emissiveTexture,Xe)),Promise.all(d).then(function(){const p=new l(h);return a.name&&(p.name=a.name),ei(p,a),e.associations.set(p,{materials:t}),a.extensions&&Ui(s,p,a),p})}createUniqueName(t){const e=Ee.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,i=this.extensions,s=this.primitiveCache;function a(h){return i[ce.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(h,e).then(function(u){return jh(u,h,e)})}const l=[];for(let h=0,u=t.length;h<u;h++){const d=t[h],m=_y(d),p=s[m];if(p)l.push(p.promise);else{let _;d.extensions&&d.extensions[ce.KHR_DRACO_MESH_COMPRESSION]?_=a(d):_=jh(new Hn,d,e),s[m]={primitive:d,promise:_},l.push(_)}}return Promise.all(l)}loadMesh(t){const e=this,i=this.json,s=this.extensions,a=i.meshes[t],l=a.primitives,h=[];for(let u=0,d=l.length;u<d;u++){const m=l[u].material===void 0?fy(this.cache):this.getDependency("material",l[u].material);h.push(m)}return h.push(e.loadGeometries(l)),Promise.all(h).then(function(u){const d=u.slice(0,u.length-1),m=u[u.length-1],p=[];for(let x=0,M=m.length;x<M;x++){const S=m[x],y=l[x];let g;const I=d[x];if(y.mode===gn.TRIANGLES||y.mode===gn.TRIANGLE_STRIP||y.mode===gn.TRIANGLE_FAN||y.mode===void 0)g=a.isSkinnedMesh===!0?new pp(S,I):new un(S,I),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),y.mode===gn.TRIANGLE_STRIP?g.geometry=Zh(g.geometry,cu):y.mode===gn.TRIANGLE_FAN&&(g.geometry=Zh(g.geometry,_l));else if(y.mode===gn.LINES)g=new Mp(S,I);else if(y.mode===gn.LINE_STRIP)g=new Ol(S,I);else if(y.mode===gn.LINE_LOOP)g=new Sp(S,I);else if(y.mode===gn.POINTS)g=new Tp(S,I);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);Object.keys(g.geometry.morphAttributes).length>0&&my(g,a),g.name=e.createUniqueName(a.name||"mesh_"+t),ei(g,a),y.extensions&&Ui(s,g,y),e.assignFinalMaterial(g),p.push(g)}for(let x=0,M=p.length;x<M;x++)e.associations.set(p[x],{meshes:t,primitives:x});if(p.length===1)return a.extensions&&Ui(s,p[0],a),p[0];const _=new Hi;a.extensions&&Ui(s,_,a),e.associations.set(_,{meshes:t});for(let x=0,M=p.length;x<M;x++)_.add(p[x]);return _})}loadCamera(t){let e;const i=this.json.cameras[t],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?e=new $e(Bf.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(e=new zl(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(e.name=this.createUniqueName(i.name)),ei(e,i),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],i=[];for(let s=0,a=e.joints.length;s<a;s++)i.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",e.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const a=s.pop(),l=s,h=[],u=[];for(let d=0,m=l.length;d<m;d++){const p=l[d];if(p){h.push(p);const _=new ie;a!==null&&_.fromArray(a.array,d*16),u.push(_)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[d])}return new Nl(h,u)})}loadAnimation(t){const e=this.json,i=this,s=e.animations[t],a=s.name?s.name:"animation_"+t,l=[],h=[],u=[],d=[],m=[];for(let p=0,_=s.channels.length;p<_;p++){const x=s.channels[p],M=s.samplers[x.sampler],S=x.target,y=S.node,g=s.parameters!==void 0?s.parameters[M.input]:M.input,I=s.parameters!==void 0?s.parameters[M.output]:M.output;S.node!==void 0&&(l.push(this.getDependency("node",y)),h.push(this.getDependency("accessor",g)),u.push(this.getDependency("accessor",I)),d.push(M),m.push(S))}return Promise.all([Promise.all(l),Promise.all(h),Promise.all(u),Promise.all(d),Promise.all(m)]).then(function(p){const _=p[0],x=p[1],M=p[2],S=p[3],y=p[4],g=[];for(let I=0,C=_.length;I<C;I++){const w=_[I],O=x[I],F=M[I],B=S[I],W=y[I];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const R=i._createAnimationTracks(w,O,F,B,W);if(R)for(let A=0;A<R.length;A++)g.push(R[A])}return new Ip(a,void 0,g)})}createNodeMesh(t){const e=this.json,i=this,s=e.nodes[t];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(a){const l=i._getNodeRef(i.meshCache,s.mesh,a);return s.weights!==void 0&&l.traverse(function(h){if(h.isMesh)for(let u=0,d=s.weights.length;u<d;u++)h.morphTargetInfluences[u]=s.weights[u]}),l})}loadNode(t){const e=this.json,i=this,s=e.nodes[t],a=i._loadNodeShallow(t),l=[],h=s.children||[];for(let d=0,m=h.length;d<m;d++)l.push(i.getDependency("node",h[d]));const u=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([a,Promise.all(l),u]).then(function(d){const m=d[0],p=d[1],_=d[2];_!==null&&m.traverse(function(x){x.isSkinnedMesh&&x.bind(_,vy)});for(let x=0,M=p.length;x<M;x++)m.add(p[x]);return m})}_loadNodeShallow(t){const e=this.json,i=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const a=e.nodes[t],l=a.name?s.createUniqueName(a.name):"",h=[],u=s._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(t)});return u&&h.push(u),a.camera!==void 0&&h.push(s.getDependency("camera",a.camera).then(function(d){return s._getNodeRef(s.cameraCache,a.camera,d)})),s._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(t)}).forEach(function(d){h.push(d)}),this.nodeCache[t]=Promise.all(h).then(function(d){let m;if(a.isBone===!0?m=new Mu:d.length>1?m=new Hi:d.length===1?m=d[0]:m=new De,m!==d[0])for(let p=0,_=d.length;p<_;p++)m.add(d[p]);if(a.name&&(m.userData.name=a.name,m.name=l),ei(m,a),a.extensions&&Ui(i,m,a),a.matrix!==void 0){const p=new ie;p.fromArray(a.matrix),m.applyMatrix4(p)}else a.translation!==void 0&&m.position.fromArray(a.translation),a.rotation!==void 0&&m.quaternion.fromArray(a.rotation),a.scale!==void 0&&m.scale.fromArray(a.scale);if(!s.associations.has(m))s.associations.set(m,{});else if(a.mesh!==void 0&&s.meshCache.refs[a.mesh]>1){const p=s.associations.get(m);s.associations.set(m,{...p})}return s.associations.get(m).nodes=t,m}),this.nodeCache[t]}loadScene(t){const e=this.extensions,i=this.json.scenes[t],s=this,a=new Hi;i.name&&(a.name=s.createUniqueName(i.name)),ei(a,i),i.extensions&&Ui(e,a,i);const l=i.nodes||[],h=[];for(let u=0,d=l.length;u<d;u++)h.push(s.getDependency("node",l[u]));return Promise.all(h).then(function(u){for(let m=0,p=u.length;m<p;m++)a.add(u[m]);const d=m=>{const p=new Map;for(const[_,x]of s.associations)(_ instanceof Fn||_ instanceof He)&&p.set(_,x);return m.traverse(_=>{const x=s.associations.get(_);x!=null&&p.set(_,x)}),p};return s.associations=d(a),a})}_createAnimationTracks(t,e,i,s,a){const l=[],h=t.name?t.name:t.uuid,u=[];gi[a.path]===gi.weights?t.traverse(function(_){_.morphTargetInfluences&&u.push(_.name?_.name:_.uuid)}):u.push(h);let d;switch(gi[a.path]){case gi.weights:d=Es;break;case gi.rotation:d=bs;break;case gi.translation:case gi.scale:d=ws;break;default:switch(i.itemSize){case 1:d=Es;break;case 2:case 3:default:d=ws;break}break}const m=s.interpolation!==void 0?dy[s.interpolation]:hr,p=this._getArrayFromAccessor(i);for(let _=0,x=u.length;_<x;_++){const M=new d(u[_]+"."+gi[a.path],e.array,p,m);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),l.push(M)}return l}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const i=Sl(e.constructor),s=new Float32Array(e.length);for(let a=0,l=e.length;a<l;a++)s[a]=e[a]*i;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(i){const s=this instanceof bs?uy:Fu;return new s(this.times,this.values,this.getValueSize()/3,i)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function yy(r,t,e){const i=t.attributes,s=new ai;if(i.POSITION!==void 0){const h=e.json.accessors[i.POSITION],u=h.min,d=h.max;if(u!==void 0&&d!==void 0){if(s.set(new V(u[0],u[1],u[2]),new V(d[0],d[1],d[2])),h.normalized){const m=Sl(gs[h.componentType]);s.min.multiplyScalar(m),s.max.multiplyScalar(m)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=t.targets;if(a!==void 0){const h=new V,u=new V;for(let d=0,m=a.length;d<m;d++){const p=a[d];if(p.POSITION!==void 0){const _=e.json.accessors[p.POSITION],x=_.min,M=_.max;if(x!==void 0&&M!==void 0){if(u.setX(Math.max(Math.abs(x[0]),Math.abs(M[0]))),u.setY(Math.max(Math.abs(x[1]),Math.abs(M[1]))),u.setZ(Math.max(Math.abs(x[2]),Math.abs(M[2]))),_.normalized){const S=Sl(gs[_.componentType]);u.multiplyScalar(S)}h.max(u)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(h)}r.boundingBox=s;const l=new kn;s.getCenter(l.center),l.radius=s.min.distanceTo(s.max)/2,r.boundingSphere=l}function jh(r,t,e){const i=t.attributes,s=[];function a(l,h){return e.getDependency("accessor",l).then(function(u){r.setAttribute(h,u)})}for(const l in i){const h=Ml[l]||l.toLowerCase();h in r.attributes||s.push(a(i[l],h))}if(t.indices!==void 0&&!r.index){const l=e.getDependency("accessor",t.indices).then(function(h){r.setIndex(h)});s.push(l)}return ge.workingColorSpace!==tn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ge.workingColorSpace}" not supported.`),ei(r,t),yy(r,t,e),Promise.all(s).then(function(){return t.targets!==void 0?py(r,t.targets,e):r})}function My(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var er={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */var Sy=er.exports,$h;function Ty(){return $h||($h=1,function(r,t){(function(e,i){i(t)})(Sy,function(e){var i="1.9.4";function s(n){var o,c,f,v;for(c=1,f=arguments.length;c<f;c++){v=arguments[c];for(o in v)n[o]=v[o]}return n}var a=Object.create||function(){function n(){}return function(o){return n.prototype=o,new n}}();function l(n,o){var c=Array.prototype.slice;if(n.bind)return n.bind.apply(n,c.call(arguments,1));var f=c.call(arguments,2);return function(){return n.apply(o,f.length?f.concat(c.call(arguments)):arguments)}}var h=0;function u(n){return"_leaflet_id"in n||(n._leaflet_id=++h),n._leaflet_id}function d(n,o,c){var f,v,T,D;return D=function(){f=!1,v&&(T.apply(c,v),v=!1)},T=function(){f?v=arguments:(n.apply(c,arguments),setTimeout(D,o),f=!0)},T}function m(n,o,c){var f=o[1],v=o[0],T=f-v;return n===f&&c?n:((n-v)%T+T)%T+v}function p(){return!1}function _(n,o){if(o===!1)return n;var c=Math.pow(10,o===void 0?6:o);return Math.round(n*c)/c}function x(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function M(n){return x(n).split(/\s+/)}function S(n,o){Object.prototype.hasOwnProperty.call(n,"options")||(n.options=n.options?a(n.options):{});for(var c in o)n.options[c]=o[c];return n.options}function y(n,o,c){var f=[];for(var v in n)f.push(encodeURIComponent(c?v.toUpperCase():v)+"="+encodeURIComponent(n[v]));return(!o||o.indexOf("?")===-1?"?":"&")+f.join("&")}var g=/\{ *([\w_ -]+) *\}/g;function I(n,o){return n.replace(g,function(c,f){var v=o[f];if(v===void 0)throw new Error("No value provided for variable "+c);return typeof v=="function"&&(v=v(o)),v})}var C=Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"};function w(n,o){for(var c=0;c<n.length;c++)if(n[c]===o)return c;return-1}var O="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function F(n){return window["webkit"+n]||window["moz"+n]||window["ms"+n]}var B=0;function W(n){var o=+new Date,c=Math.max(0,16-(o-B));return B=o+c,window.setTimeout(n,c)}var R=window.requestAnimationFrame||F("RequestAnimationFrame")||W,A=window.cancelAnimationFrame||F("CancelAnimationFrame")||F("CancelRequestAnimationFrame")||function(n){window.clearTimeout(n)};function N(n,o,c){if(c&&R===W)n.call(o);else return R.call(window,l(n,o))}function tt(n){n&&A.call(window,n)}var et={__proto__:null,extend:s,create:a,bind:l,get lastId(){return h},stamp:u,throttle:d,wrapNum:m,falseFn:p,formatNum:_,trim:x,splitWords:M,setOptions:S,getParamString:y,template:I,isArray:C,indexOf:w,emptyImageUrl:O,requestFn:R,cancelFn:A,requestAnimFrame:N,cancelAnimFrame:tt};function $(){}$.extend=function(n){var o=function(){S(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},c=o.__super__=this.prototype,f=a(c);f.constructor=o,o.prototype=f;for(var v in this)Object.prototype.hasOwnProperty.call(this,v)&&v!=="prototype"&&v!=="__super__"&&(o[v]=this[v]);return n.statics&&s(o,n.statics),n.includes&&(lt(n.includes),s.apply(null,[f].concat(n.includes))),s(f,n),delete f.statics,delete f.includes,f.options&&(f.options=c.options?a(c.options):{},s(f.options,n.options)),f._initHooks=[],f.callInitHooks=function(){if(!this._initHooksCalled){c.callInitHooks&&c.callInitHooks.call(this),this._initHooksCalled=!0;for(var T=0,D=f._initHooks.length;T<D;T++)f._initHooks[T].call(this)}},o},$.include=function(n){var o=this.prototype.options;return s(this.prototype,n),n.options&&(this.prototype.options=o,this.mergeOptions(n.options)),this},$.mergeOptions=function(n){return s(this.prototype.options,n),this},$.addInitHook=function(n){var o=Array.prototype.slice.call(arguments,1),c=typeof n=="function"?n:function(){this[n].apply(this,o)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(c),this};function lt(n){if(!(typeof L>"u"||!L||!L.Mixin)){n=C(n)?n:[n];for(var o=0;o<n.length;o++)n[o]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var J={on:function(n,o,c){if(typeof n=="object")for(var f in n)this._on(f,n[f],o);else{n=M(n);for(var v=0,T=n.length;v<T;v++)this._on(n[v],o,c)}return this},off:function(n,o,c){if(!arguments.length)delete this._events;else if(typeof n=="object")for(var f in n)this._off(f,n[f],o);else{n=M(n);for(var v=arguments.length===1,T=0,D=n.length;T<D;T++)v?this._off(n[T]):this._off(n[T],o,c)}return this},_on:function(n,o,c,f){if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}if(this._listens(n,o,c)===!1){c===this&&(c=void 0);var v={fn:o,ctx:c};f&&(v.once=!0),this._events=this._events||{},this._events[n]=this._events[n]||[],this._events[n].push(v)}},_off:function(n,o,c){var f,v,T;if(this._events&&(f=this._events[n],!!f)){if(arguments.length===1){if(this._firingCount)for(v=0,T=f.length;v<T;v++)f[v].fn=p;delete this._events[n];return}if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}var D=this._listens(n,o,c);if(D!==!1){var X=f[D];this._firingCount&&(X.fn=p,this._events[n]=f=f.slice()),f.splice(D,1)}}},fire:function(n,o,c){if(!this.listens(n,c))return this;var f=s({},o,{type:n,target:this,sourceTarget:o&&o.sourceTarget||this});if(this._events){var v=this._events[n];if(v){this._firingCount=this._firingCount+1||1;for(var T=0,D=v.length;T<D;T++){var X=v[T],j=X.fn;X.once&&this.off(n,j,X.ctx),j.call(X.ctx||this,f)}this._firingCount--}}return c&&this._propagateEvent(f),this},listens:function(n,o,c,f){typeof n!="string"&&console.warn('"string" type argument expected');var v=o;typeof o!="function"&&(f=!!o,v=void 0,c=void 0);var T=this._events&&this._events[n];if(T&&T.length&&this._listens(n,v,c)!==!1)return!0;if(f){for(var D in this._eventParents)if(this._eventParents[D].listens(n,o,c,f))return!0}return!1},_listens:function(n,o,c){if(!this._events)return!1;var f=this._events[n]||[];if(!o)return!!f.length;c===this&&(c=void 0);for(var v=0,T=f.length;v<T;v++)if(f[v].fn===o&&f[v].ctx===c)return v;return!1},once:function(n,o,c){if(typeof n=="object")for(var f in n)this._on(f,n[f],o,!0);else{n=M(n);for(var v=0,T=n.length;v<T;v++)this._on(n[v],o,c,!0)}return this},addEventParent:function(n){return this._eventParents=this._eventParents||{},this._eventParents[u(n)]=n,this},removeEventParent:function(n){return this._eventParents&&delete this._eventParents[u(n)],this},_propagateEvent:function(n){for(var o in this._eventParents)this._eventParents[o].fire(n.type,s({layer:n.target,propagatedFrom:n.target},n),!0)}};J.addEventListener=J.on,J.removeEventListener=J.clearAllEventListeners=J.off,J.addOneTimeEventListener=J.once,J.fireEvent=J.fire,J.hasEventListeners=J.listens;var pt=$.extend(J);function G(n,o,c){this.x=c?Math.round(n):n,this.y=c?Math.round(o):o}var xt=Math.trunc||function(n){return n>0?Math.floor(n):Math.ceil(n)};G.prototype={clone:function(){return new G(this.x,this.y)},add:function(n){return this.clone()._add(it(n))},_add:function(n){return this.x+=n.x,this.y+=n.y,this},subtract:function(n){return this.clone()._subtract(it(n))},_subtract:function(n){return this.x-=n.x,this.y-=n.y,this},divideBy:function(n){return this.clone()._divideBy(n)},_divideBy:function(n){return this.x/=n,this.y/=n,this},multiplyBy:function(n){return this.clone()._multiplyBy(n)},_multiplyBy:function(n){return this.x*=n,this.y*=n,this},scaleBy:function(n){return new G(this.x*n.x,this.y*n.y)},unscaleBy:function(n){return new G(this.x/n.x,this.y/n.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=xt(this.x),this.y=xt(this.y),this},distanceTo:function(n){n=it(n);var o=n.x-this.x,c=n.y-this.y;return Math.sqrt(o*o+c*c)},equals:function(n){return n=it(n),n.x===this.x&&n.y===this.y},contains:function(n){return n=it(n),Math.abs(n.x)<=Math.abs(this.x)&&Math.abs(n.y)<=Math.abs(this.y)},toString:function(){return"Point("+_(this.x)+", "+_(this.y)+")"}};function it(n,o,c){return n instanceof G?n:C(n)?new G(n[0],n[1]):n==null?n:typeof n=="object"&&"x"in n&&"y"in n?new G(n.x,n.y):new G(n,o,c)}function vt(n,o){if(n)for(var c=o?[n,o]:n,f=0,v=c.length;f<v;f++)this.extend(c[f])}vt.prototype={extend:function(n){var o,c;if(!n)return this;if(n instanceof G||typeof n[0]=="number"||"x"in n)o=c=it(n);else if(n=zt(n),o=n.min,c=n.max,!o||!c)return this;return!this.min&&!this.max?(this.min=o.clone(),this.max=c.clone()):(this.min.x=Math.min(o.x,this.min.x),this.max.x=Math.max(c.x,this.max.x),this.min.y=Math.min(o.y,this.min.y),this.max.y=Math.max(c.y,this.max.y)),this},getCenter:function(n){return it((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,n)},getBottomLeft:function(){return it(this.min.x,this.max.y)},getTopRight:function(){return it(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(n){var o,c;return typeof n[0]=="number"||n instanceof G?n=it(n):n=zt(n),n instanceof vt?(o=n.min,c=n.max):o=c=n,o.x>=this.min.x&&c.x<=this.max.x&&o.y>=this.min.y&&c.y<=this.max.y},intersects:function(n){n=zt(n);var o=this.min,c=this.max,f=n.min,v=n.max,T=v.x>=o.x&&f.x<=c.x,D=v.y>=o.y&&f.y<=c.y;return T&&D},overlaps:function(n){n=zt(n);var o=this.min,c=this.max,f=n.min,v=n.max,T=v.x>o.x&&f.x<c.x,D=v.y>o.y&&f.y<c.y;return T&&D},isValid:function(){return!!(this.min&&this.max)},pad:function(n){var o=this.min,c=this.max,f=Math.abs(o.x-c.x)*n,v=Math.abs(o.y-c.y)*n;return zt(it(o.x-f,o.y-v),it(c.x+f,c.y+v))},equals:function(n){return n?(n=zt(n),this.min.equals(n.getTopLeft())&&this.max.equals(n.getBottomRight())):!1}};function zt(n,o){return!n||n instanceof vt?n:new vt(n,o)}function se(n,o){if(n)for(var c=o?[n,o]:n,f=0,v=c.length;f<v;f++)this.extend(c[f])}se.prototype={extend:function(n){var o=this._southWest,c=this._northEast,f,v;if(n instanceof q)f=n,v=n;else if(n instanceof se){if(f=n._southWest,v=n._northEast,!f||!v)return this}else return n?this.extend(rt(n)||Yt(n)):this;return!o&&!c?(this._southWest=new q(f.lat,f.lng),this._northEast=new q(v.lat,v.lng)):(o.lat=Math.min(f.lat,o.lat),o.lng=Math.min(f.lng,o.lng),c.lat=Math.max(v.lat,c.lat),c.lng=Math.max(v.lng,c.lng)),this},pad:function(n){var o=this._southWest,c=this._northEast,f=Math.abs(o.lat-c.lat)*n,v=Math.abs(o.lng-c.lng)*n;return new se(new q(o.lat-f,o.lng-v),new q(c.lat+f,c.lng+v))},getCenter:function(){return new q((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new q(this.getNorth(),this.getWest())},getSouthEast:function(){return new q(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(n){typeof n[0]=="number"||n instanceof q||"lat"in n?n=rt(n):n=Yt(n);var o=this._southWest,c=this._northEast,f,v;return n instanceof se?(f=n.getSouthWest(),v=n.getNorthEast()):f=v=n,f.lat>=o.lat&&v.lat<=c.lat&&f.lng>=o.lng&&v.lng<=c.lng},intersects:function(n){n=Yt(n);var o=this._southWest,c=this._northEast,f=n.getSouthWest(),v=n.getNorthEast(),T=v.lat>=o.lat&&f.lat<=c.lat,D=v.lng>=o.lng&&f.lng<=c.lng;return T&&D},overlaps:function(n){n=Yt(n);var o=this._southWest,c=this._northEast,f=n.getSouthWest(),v=n.getNorthEast(),T=v.lat>o.lat&&f.lat<c.lat,D=v.lng>o.lng&&f.lng<c.lng;return T&&D},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(n,o){return n?(n=Yt(n),this._southWest.equals(n.getSouthWest(),o)&&this._northEast.equals(n.getNorthEast(),o)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function Yt(n,o){return n instanceof se?n:new se(n,o)}function q(n,o,c){if(isNaN(n)||isNaN(o))throw new Error("Invalid LatLng object: ("+n+", "+o+")");this.lat=+n,this.lng=+o,c!==void 0&&(this.alt=+c)}q.prototype={equals:function(n,o){if(!n)return!1;n=rt(n);var c=Math.max(Math.abs(this.lat-n.lat),Math.abs(this.lng-n.lng));return c<=(o===void 0?1e-9:o)},toString:function(n){return"LatLng("+_(this.lat,n)+", "+_(this.lng,n)+")"},distanceTo:function(n){return Dt.distance(this,rt(n))},wrap:function(){return Dt.wrapLatLng(this)},toBounds:function(n){var o=180*n/40075017,c=o/Math.cos(Math.PI/180*this.lat);return Yt([this.lat-o,this.lng-c],[this.lat+o,this.lng+c])},clone:function(){return new q(this.lat,this.lng,this.alt)}};function rt(n,o,c){return n instanceof q?n:C(n)&&typeof n[0]!="object"?n.length===3?new q(n[0],n[1],n[2]):n.length===2?new q(n[0],n[1]):null:n==null?n:typeof n=="object"&&"lat"in n?new q(n.lat,"lng"in n?n.lng:n.lon,n.alt):o===void 0?null:new q(n,o,c)}var ut={latLngToPoint:function(n,o){var c=this.projection.project(n),f=this.scale(o);return this.transformation._transform(c,f)},pointToLatLng:function(n,o){var c=this.scale(o),f=this.transformation.untransform(n,c);return this.projection.unproject(f)},project:function(n){return this.projection.project(n)},unproject:function(n){return this.projection.unproject(n)},scale:function(n){return 256*Math.pow(2,n)},zoom:function(n){return Math.log(n/256)/Math.LN2},getProjectedBounds:function(n){if(this.infinite)return null;var o=this.projection.bounds,c=this.scale(n),f=this.transformation.transform(o.min,c),v=this.transformation.transform(o.max,c);return new vt(f,v)},infinite:!1,wrapLatLng:function(n){var o=this.wrapLng?m(n.lng,this.wrapLng,!0):n.lng,c=this.wrapLat?m(n.lat,this.wrapLat,!0):n.lat,f=n.alt;return new q(c,o,f)},wrapLatLngBounds:function(n){var o=n.getCenter(),c=this.wrapLatLng(o),f=o.lat-c.lat,v=o.lng-c.lng;if(f===0&&v===0)return n;var T=n.getSouthWest(),D=n.getNorthEast(),X=new q(T.lat-f,T.lng-v),j=new q(D.lat-f,D.lng-v);return new se(X,j)}},Dt=s({},ut,{wrapLng:[-180,180],R:6371e3,distance:function(n,o){var c=Math.PI/180,f=n.lat*c,v=o.lat*c,T=Math.sin((o.lat-n.lat)*c/2),D=Math.sin((o.lng-n.lng)*c/2),X=T*T+Math.cos(f)*Math.cos(v)*D*D,j=2*Math.atan2(Math.sqrt(X),Math.sqrt(1-X));return this.R*j}}),Wt=6378137,Kt={R:Wt,MAX_LATITUDE:85.0511287798,project:function(n){var o=Math.PI/180,c=this.MAX_LATITUDE,f=Math.max(Math.min(c,n.lat),-c),v=Math.sin(f*o);return new G(this.R*n.lng*o,this.R*Math.log((1+v)/(1-v))/2)},unproject:function(n){var o=180/Math.PI;return new q((2*Math.atan(Math.exp(n.y/this.R))-Math.PI/2)*o,n.x*o/this.R)},bounds:function(){var n=Wt*Math.PI;return new vt([-n,-n],[n,n])}()};function Pe(n,o,c,f){if(C(n)){this._a=n[0],this._b=n[1],this._c=n[2],this._d=n[3];return}this._a=n,this._b=o,this._c=c,this._d=f}Pe.prototype={transform:function(n,o){return this._transform(n.clone(),o)},_transform:function(n,o){return o=o||1,n.x=o*(this._a*n.x+this._b),n.y=o*(this._c*n.y+this._d),n},untransform:function(n,o){return o=o||1,new G((n.x/o-this._b)/this._a,(n.y/o-this._d)/this._c)}};function re(n,o,c,f){return new Pe(n,o,c,f)}var U=s({},Dt,{code:"EPSG:3857",projection:Kt,transformation:function(){var n=.5/(Math.PI*Kt.R);return re(n,.5,-n,.5)}()}),be=s({},U,{code:"EPSG:900913"});function kt(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function pe(n,o){var c="",f,v,T,D,X,j;for(f=0,T=n.length;f<T;f++){for(X=n[f],v=0,D=X.length;v<D;v++)j=X[v],c+=(v?"L":"M")+j.x+" "+j.y;c+=o?It.svg?"z":"x":""}return c||"M0 0"}var Nt=document.documentElement.style,Se="ActiveXObject"in window,wt=Se&&!document.addEventListener,Qt="msLaunchUri"in navigator&&!("documentMode"in document),Ne=on("webkit"),Le=on("android"),P=on("android 2")||on("android 3"),E=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Z=Le&&on("Google")&&E<537&&!("AudioNode"in window),nt=!!window.opera,at=!Qt&&on("chrome"),Q=on("gecko")&&!Ne&&!nt&&!Se,Ut=!at&&on("safari"),mt=on("phantom"),Ct="OTransition"in Nt,Pt=navigator.platform.indexOf("Win")===0,dt=Se&&"transition"in Nt,yt="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!P,Xt="MozPerspective"in Nt,Lt=!window.L_DISABLE_3D&&(dt||yt||Xt)&&!Ct&&!mt,gt=typeof orientation<"u"||on("mobile"),$t=gt&&Ne,z=gt&&yt,ft=!window.PointerEvent&&window.MSPointerEvent,_t=!!(window.PointerEvent||ft),bt="ontouchstart"in window||!!window.TouchEvent,ct=!window.L_NO_TOUCH&&(bt||_t),st=gt&&nt,Rt=gt&&Q,jt=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,we=function(){var n=!1;try{var o=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("testPassiveEventSupport",p,o),window.removeEventListener("testPassiveEventSupport",p,o)}catch{}return n}(),ve=function(){return!!document.createElement("canvas").getContext}(),rn=!!(document.createElementNS&&kt("svg").createSVGRect),dn=!!rn&&function(){var n=document.createElement("div");return n.innerHTML="<svg/>",(n.firstChild&&n.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),mr=!rn&&function(){try{var n=document.createElement("div");n.innerHTML='<v:shape adj="1"/>';var o=n.firstChild;return o.style.behavior="url(#default#VML)",o&&typeof o.adj=="object"}catch{return!1}}(),Gn=navigator.platform.indexOf("Mac")===0,Is=navigator.platform.indexOf("Linux")===0;function on(n){return navigator.userAgent.toLowerCase().indexOf(n)>=0}var It={ie:Se,ielt9:wt,edge:Qt,webkit:Ne,android:Le,android23:P,androidStock:Z,opera:nt,chrome:at,gecko:Q,safari:Ut,phantom:mt,opera12:Ct,win:Pt,ie3d:dt,webkit3d:yt,gecko3d:Xt,any3d:Lt,mobile:gt,mobileWebkit:$t,mobileWebkit3d:z,msPointer:ft,pointer:_t,touch:ct,touchNative:bt,mobileOpera:st,mobileGecko:Rt,retina:jt,passiveEvents:we,canvas:ve,svg:rn,vml:mr,inlineSvg:dn,mac:Gn,linux:Is},Ei=It.msPointer?"MSPointerDown":"pointerdown",Ds=It.msPointer?"MSPointerMove":"pointermove",bi=It.msPointer?"MSPointerUp":"pointerup",Ns=It.msPointer?"MSPointerCancel":"pointercancel",Wi={touchstart:Ei,touchmove:Ds,touchend:bi,touchcancel:Ns},_r={touchstart:H,touchmove:Y,touchend:Y,touchcancel:Y},li={},gr=!1;function To(n,o,c){return o==="touchstart"&&K(),_r[o]?(c=_r[o].bind(this,c),n.addEventListener(Wi[o],c,!1),c):(console.warn("wrong event specified:",o),p)}function Eo(n,o,c){if(!Wi[o]){console.warn("wrong event specified:",o);return}n.removeEventListener(Wi[o],c,!1)}function bo(n){li[n.pointerId]=n}function b(n){li[n.pointerId]&&(li[n.pointerId]=n)}function k(n){delete li[n.pointerId]}function K(){gr||(document.addEventListener(Ei,bo,!0),document.addEventListener(Ds,b,!0),document.addEventListener(bi,k,!0),document.addEventListener(Ns,k,!0),gr=!0)}function Y(n,o){if(o.pointerType!==(o.MSPOINTER_TYPE_MOUSE||"mouse")){o.touches=[];for(var c in li)o.touches.push(li[c]);o.changedTouches=[o],n(o)}}function H(n,o){o.MSPOINTER_TYPE_TOUCH&&o.pointerType===o.MSPOINTER_TYPE_TOUCH&&We(o),Y(n,o)}function ht(n){var o={},c,f;for(f in n)c=n[f],o[f]=c&&c.bind?c.bind(n):c;return n=o,o.type="dblclick",o.detail=2,o.isTrusted=!1,o._simulated=!0,o}var St=200;function At(n,o){n.addEventListener("dblclick",o);var c=0,f;function v(T){if(T.detail!==1){f=T.detail;return}if(!(T.pointerType==="mouse"||T.sourceCapabilities&&!T.sourceCapabilities.firesTouchEvents)){var D=Xl(T);if(!(D.some(function(j){return j instanceof HTMLLabelElement&&j.attributes.for})&&!D.some(function(j){return j instanceof HTMLInputElement||j instanceof HTMLSelectElement}))){var X=Date.now();X-c<=St?(f++,f===2&&o(ht(T))):f=1,c=X}}}return n.addEventListener("click",v),{dblclick:o,simDblclick:v}}function Et(n,o){n.removeEventListener("dblclick",o.dblclick),n.removeEventListener("click",o.simDblclick)}var Vt=Ge(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),Gt=Ge(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Ft=Gt==="webkitTransition"||Gt==="OTransition"?Gt+"End":"transitionend";function oe(n){return typeof n=="string"?document.getElementById(n):n}function me(n,o){var c=n.style[o]||n.currentStyle&&n.currentStyle[o];if((!c||c==="auto")&&document.defaultView){var f=document.defaultView.getComputedStyle(n,null);c=f?f[o]:null}return c==="auto"?null:c}function Bt(n,o,c){var f=document.createElement(n);return f.className=o||"",c&&c.appendChild(f),f}function Zt(n){var o=n.parentNode;o&&o.removeChild(n)}function xe(n){for(;n.firstChild;)n.removeChild(n.firstChild)}function Ot(n){var o=n.parentNode;o&&o.lastChild!==n&&o.appendChild(n)}function Me(n){var o=n.parentNode;o&&o.firstChild!==n&&o.insertBefore(n,o.firstChild)}function he(n,o){if(n.classList!==void 0)return n.classList.contains(o);var c=Pn(n);return c.length>0&&new RegExp("(^|\\s)"+o+"(\\s|$)").test(c)}function Ht(n,o){if(n.classList!==void 0)for(var c=M(o),f=0,v=c.length;f<v;f++)n.classList.add(c[f]);else if(!he(n,o)){var T=Pn(n);Ve(n,(T?T+" ":"")+o)}}function Ae(n,o){n.classList!==void 0?n.classList.remove(o):Ve(n,x((" "+Pn(n)+" ").replace(" "+o+" "," ")))}function Ve(n,o){n.className.baseVal===void 0?n.className=o:n.className.baseVal=o}function Pn(n){return n.correspondingElement&&(n=n.correspondingElement),n.className.baseVal===void 0?n.className:n.className.baseVal}function ue(n,o){"opacity"in n.style?n.style.opacity=o:"filter"in n.style&&en(n,o)}function en(n,o){var c=!1,f="DXImageTransform.Microsoft.Alpha";try{c=n.filters.item(f)}catch{if(o===1)return}o=Math.round(o*100),c?(c.Enabled=o!==100,c.Opacity=o):n.style.filter+=" progid:"+f+"(opacity="+o+")"}function Ge(n){for(var o=document.documentElement.style,c=0;c<n.length;c++)if(n[c]in o)return n[c];return!1}function Ie(n,o,c){var f=o||new G(0,0);n.style[Vt]=(It.ie3d?"translate("+f.x+"px,"+f.y+"px)":"translate3d("+f.x+"px,"+f.y+"px,0)")+(c?" scale("+c+")":"")}function de(n,o){n._leaflet_pos=o,It.any3d?Ie(n,o):(n.style.left=o.x+"px",n.style.top=o.y+"px")}function xn(n){return n._leaflet_pos||new G(0,0)}var an,Us,wo;if("onselectstart"in document)an=function(){te(window,"selectstart",We)},Us=function(){Ce(window,"selectstart",We)};else{var Os=Ge(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);an=function(){if(Os){var n=document.documentElement.style;wo=n[Os],n[Os]="none"}},Us=function(){Os&&(document.documentElement.style[Os]=wo,wo=void 0)}}function Ao(){te(window,"dragstart",We)}function Ro(){Ce(window,"dragstart",We)}var vr,Co;function Po(n){for(;n.tabIndex===-1;)n=n.parentNode;n.style&&(xr(),vr=n,Co=n.style.outlineStyle,n.style.outlineStyle="none",te(window,"keydown",xr))}function xr(){vr&&(vr.style.outlineStyle=Co,vr=void 0,Co=void 0,Ce(window,"keydown",xr))}function Gl(n){do n=n.parentNode;while((!n.offsetWidth||!n.offsetHeight)&&n!==document.body);return n}function Lo(n){var o=n.getBoundingClientRect();return{x:o.width/n.offsetWidth||1,y:o.height/n.offsetHeight||1,boundingClientRect:o}}var Bu={__proto__:null,TRANSFORM:Vt,TRANSITION:Gt,TRANSITION_END:Ft,get:oe,getStyle:me,create:Bt,remove:Zt,empty:xe,toFront:Ot,toBack:Me,hasClass:he,addClass:Ht,removeClass:Ae,setClass:Ve,getClass:Pn,setOpacity:ue,testProp:Ge,setTransform:Ie,setPosition:de,getPosition:xn,get disableTextSelection(){return an},get enableTextSelection(){return Us},disableImageDrag:Ao,enableImageDrag:Ro,preventOutline:Po,restoreOutline:xr,getSizedParentNode:Gl,getScale:Lo};function te(n,o,c,f){if(o&&typeof o=="object")for(var v in o)Do(n,v,o[v],c);else{o=M(o);for(var T=0,D=o.length;T<D;T++)Do(n,o[T],c,f)}return this}var Ln="_leaflet_events";function Ce(n,o,c,f){if(arguments.length===1)Wl(n),delete n[Ln];else if(o&&typeof o=="object")for(var v in o)No(n,v,o[v],c);else if(o=M(o),arguments.length===2)Wl(n,function(X){return w(o,X)!==-1});else for(var T=0,D=o.length;T<D;T++)No(n,o[T],c,f);return this}function Wl(n,o){for(var c in n[Ln]){var f=c.split(/\d/)[0];(!o||o(f))&&No(n,f,null,null,c)}}var Io={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Do(n,o,c,f){var v=o+u(c)+(f?"_"+u(f):"");if(n[Ln]&&n[Ln][v])return this;var T=function(X){return c.call(f||n,X||window.event)},D=T;!It.touchNative&&It.pointer&&o.indexOf("touch")===0?T=To(n,o,T):It.touch&&o==="dblclick"?T=At(n,T):"addEventListener"in n?o==="touchstart"||o==="touchmove"||o==="wheel"||o==="mousewheel"?n.addEventListener(Io[o]||o,T,It.passiveEvents?{passive:!1}:!1):o==="mouseenter"||o==="mouseleave"?(T=function(X){X=X||window.event,Oo(n,X)&&D(X)},n.addEventListener(Io[o],T,!1)):n.addEventListener(o,D,!1):n.attachEvent("on"+o,T),n[Ln]=n[Ln]||{},n[Ln][v]=T}function No(n,o,c,f,v){v=v||o+u(c)+(f?"_"+u(f):"");var T=n[Ln]&&n[Ln][v];if(!T)return this;!It.touchNative&&It.pointer&&o.indexOf("touch")===0?Eo(n,o,T):It.touch&&o==="dblclick"?Et(n,T):"removeEventListener"in n?n.removeEventListener(Io[o]||o,T,!1):n.detachEvent("on"+o,T),n[Ln][v]=null}function wi(n){return n.stopPropagation?n.stopPropagation():n.originalEvent?n.originalEvent._stopped=!0:n.cancelBubble=!0,this}function Uo(n){return Do(n,"wheel",wi),this}function Fs(n){return te(n,"mousedown touchstart dblclick contextmenu",wi),n._leaflet_disable_click=!0,this}function We(n){return n.preventDefault?n.preventDefault():n.returnValue=!1,this}function Ai(n){return We(n),wi(n),this}function Xl(n){if(n.composedPath)return n.composedPath();for(var o=[],c=n.target;c;)o.push(c),c=c.parentNode;return o}function Zl(n,o){if(!o)return new G(n.clientX,n.clientY);var c=Lo(o),f=c.boundingClientRect;return new G((n.clientX-f.left)/c.x-o.clientLeft,(n.clientY-f.top)/c.y-o.clientTop)}var zu=It.linux&&It.chrome?window.devicePixelRatio:It.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function ql(n){return It.edge?n.wheelDeltaY/2:n.deltaY&&n.deltaMode===0?-n.deltaY/zu:n.deltaY&&n.deltaMode===1?-n.deltaY*20:n.deltaY&&n.deltaMode===2?-n.deltaY*60:n.deltaX||n.deltaZ?0:n.wheelDelta?(n.wheelDeltaY||n.wheelDelta)/2:n.detail&&Math.abs(n.detail)<32765?-n.detail*20:n.detail?n.detail/-32765*60:0}function Oo(n,o){var c=o.relatedTarget;if(!c)return!0;try{for(;c&&c!==n;)c=c.parentNode}catch{return!1}return c!==n}var ku={__proto__:null,on:te,off:Ce,stopPropagation:wi,disableScrollPropagation:Uo,disableClickPropagation:Fs,preventDefault:We,stop:Ai,getPropagationPath:Xl,getMousePosition:Zl,getWheelDelta:ql,isExternalTarget:Oo,addListener:te,removeListener:Ce},Yl=pt.extend({run:function(n,o,c,f){this.stop(),this._el=n,this._inProgress=!0,this._duration=c||.25,this._easeOutPower=1/Math.max(f||.5,.2),this._startPos=xn(n),this._offset=o.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=N(this._animate,this),this._step()},_step:function(n){var o=+new Date-this._startTime,c=this._duration*1e3;o<c?this._runFrame(this._easeOut(o/c),n):(this._runFrame(1),this._complete())},_runFrame:function(n,o){var c=this._startPos.add(this._offset.multiplyBy(n));o&&c._round(),de(this._el,c),this.fire("step")},_complete:function(){tt(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(n){return 1-Math.pow(1-n,this._easeOutPower)}}),_e=pt.extend({options:{crs:U,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(n,o){o=S(this,o),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(n),this._initLayout(),this._onResize=l(this._onResize,this),this._initEvents(),o.maxBounds&&this.setMaxBounds(o.maxBounds),o.zoom!==void 0&&(this._zoom=this._limitZoom(o.zoom)),o.center&&o.zoom!==void 0&&this.setView(rt(o.center),o.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=Gt&&It.any3d&&!It.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),te(this._proxy,Ft,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(n,o,c){if(o=o===void 0?this._zoom:this._limitZoom(o),n=this._limitCenter(rt(n),o,this.options.maxBounds),c=c||{},this._stop(),this._loaded&&!c.reset&&c!==!0){c.animate!==void 0&&(c.zoom=s({animate:c.animate},c.zoom),c.pan=s({animate:c.animate,duration:c.duration},c.pan));var f=this._zoom!==o?this._tryAnimatedZoom&&this._tryAnimatedZoom(n,o,c.zoom):this._tryAnimatedPan(n,c.pan);if(f)return clearTimeout(this._sizeTimer),this}return this._resetView(n,o,c.pan&&c.pan.noMoveStart),this},setZoom:function(n,o){return this._loaded?this.setView(this.getCenter(),n,{zoom:o}):(this._zoom=n,this)},zoomIn:function(n,o){return n=n||(It.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+n,o)},zoomOut:function(n,o){return n=n||(It.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-n,o)},setZoomAround:function(n,o,c){var f=this.getZoomScale(o),v=this.getSize().divideBy(2),T=n instanceof G?n:this.latLngToContainerPoint(n),D=T.subtract(v).multiplyBy(1-1/f),X=this.containerPointToLatLng(v.add(D));return this.setView(X,o,{zoom:c})},_getBoundsCenterZoom:function(n,o){o=o||{},n=n.getBounds?n.getBounds():Yt(n);var c=it(o.paddingTopLeft||o.padding||[0,0]),f=it(o.paddingBottomRight||o.padding||[0,0]),v=this.getBoundsZoom(n,!1,c.add(f));if(v=typeof o.maxZoom=="number"?Math.min(o.maxZoom,v):v,v===1/0)return{center:n.getCenter(),zoom:v};var T=f.subtract(c).divideBy(2),D=this.project(n.getSouthWest(),v),X=this.project(n.getNorthEast(),v),j=this.unproject(D.add(X).divideBy(2).add(T),v);return{center:j,zoom:v}},fitBounds:function(n,o){if(n=Yt(n),!n.isValid())throw new Error("Bounds are not valid.");var c=this._getBoundsCenterZoom(n,o);return this.setView(c.center,c.zoom,o)},fitWorld:function(n){return this.fitBounds([[-90,-180],[90,180]],n)},panTo:function(n,o){return this.setView(n,this._zoom,{pan:o})},panBy:function(n,o){if(n=it(n).round(),o=o||{},!n.x&&!n.y)return this.fire("moveend");if(o.animate!==!0&&!this.getSize().contains(n))return this._resetView(this.unproject(this.project(this.getCenter()).add(n)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Yl,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),o.noMoveStart||this.fire("movestart"),o.animate!==!1){Ht(this._mapPane,"leaflet-pan-anim");var c=this._getMapPanePos().subtract(n).round();this._panAnim.run(this._mapPane,c,o.duration||.25,o.easeLinearity)}else this._rawPanBy(n),this.fire("move").fire("moveend");return this},flyTo:function(n,o,c){if(c=c||{},c.animate===!1||!It.any3d)return this.setView(n,o,c);this._stop();var f=this.project(this.getCenter()),v=this.project(n),T=this.getSize(),D=this._zoom;n=rt(n),o=o===void 0?D:o;var X=Math.max(T.x,T.y),j=X*this.getZoomScale(D,o),ot=v.distanceTo(f)||1,Tt=1.42,qt=Tt*Tt;function ae(Ue){var Lr=Ue?-1:1,Rd=Ue?j:X,Cd=j*j-X*X+Lr*qt*qt*ot*ot,Pd=2*Rd*qt*ot,qo=Cd/Pd,Rc=Math.sqrt(qo*qo+1)-qo,Ld=Rc<1e-9?-18:Math.log(Rc);return Ld}function Ye(Ue){return(Math.exp(Ue)-Math.exp(-Ue))/2}function ze(Ue){return(Math.exp(Ue)+Math.exp(-Ue))/2}function pn(Ue){return Ye(Ue)/ze(Ue)}var nn=ae(0);function ji(Ue){return X*(ze(nn)/ze(nn+Tt*Ue))}function Ed(Ue){return X*(ze(nn)*pn(nn+Tt*Ue)-Ye(nn))/qt}function bd(Ue){return 1-Math.pow(1-Ue,1.5)}var wd=Date.now(),wc=(ae(1)-nn)/Tt,Ad=c.duration?1e3*c.duration:1e3*wc*.8;function Ac(){var Ue=(Date.now()-wd)/Ad,Lr=bd(Ue)*wc;Ue<=1?(this._flyToFrame=N(Ac,this),this._move(this.unproject(f.add(v.subtract(f).multiplyBy(Ed(Lr)/ot)),D),this.getScaleZoom(X/ji(Lr),D),{flyTo:!0})):this._move(n,o)._moveEnd(!0)}return this._moveStart(!0,c.noMoveStart),Ac.call(this),this},flyToBounds:function(n,o){var c=this._getBoundsCenterZoom(n,o);return this.flyTo(c.center,c.zoom,o)},setMaxBounds:function(n){return n=Yt(n),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),n.isValid()?(this.options.maxBounds=n,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(n){var o=this.options.minZoom;return this.options.minZoom=n,this._loaded&&o!==n&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(n):this},setMaxZoom:function(n){var o=this.options.maxZoom;return this.options.maxZoom=n,this._loaded&&o!==n&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(n):this},panInsideBounds:function(n,o){this._enforcingBounds=!0;var c=this.getCenter(),f=this._limitCenter(c,this._zoom,Yt(n));return c.equals(f)||this.panTo(f,o),this._enforcingBounds=!1,this},panInside:function(n,o){o=o||{};var c=it(o.paddingTopLeft||o.padding||[0,0]),f=it(o.paddingBottomRight||o.padding||[0,0]),v=this.project(this.getCenter()),T=this.project(n),D=this.getPixelBounds(),X=zt([D.min.add(c),D.max.subtract(f)]),j=X.getSize();if(!X.contains(T)){this._enforcingBounds=!0;var ot=T.subtract(X.getCenter()),Tt=X.extend(T).getSize().subtract(j);v.x+=ot.x<0?-Tt.x:Tt.x,v.y+=ot.y<0?-Tt.y:Tt.y,this.panTo(this.unproject(v),o),this._enforcingBounds=!1}return this},invalidateSize:function(n){if(!this._loaded)return this;n=s({animate:!1,pan:!0},n===!0?{animate:!0}:n);var o=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var c=this.getSize(),f=o.divideBy(2).round(),v=c.divideBy(2).round(),T=f.subtract(v);return!T.x&&!T.y?this:(n.animate&&n.pan?this.panBy(T):(n.pan&&this._rawPanBy(T),this.fire("move"),n.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(l(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:o,newSize:c}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(n){if(n=this._locateOptions=s({timeout:1e4,watch:!1},n),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var o=l(this._handleGeolocationResponse,this),c=l(this._handleGeolocationError,this);return n.watch?this._locationWatchId=navigator.geolocation.watchPosition(o,c,n):navigator.geolocation.getCurrentPosition(o,c,n),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(n){if(this._container._leaflet_id){var o=n.code,c=n.message||(o===1?"permission denied":o===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:o,message:"Geolocation error: "+c+"."})}},_handleGeolocationResponse:function(n){if(this._container._leaflet_id){var o=n.coords.latitude,c=n.coords.longitude,f=new q(o,c),v=f.toBounds(n.coords.accuracy*2),T=this._locateOptions;if(T.setView){var D=this.getBoundsZoom(v);this.setView(f,T.maxZoom?Math.min(D,T.maxZoom):D)}var X={latlng:f,bounds:v,timestamp:n.timestamp};for(var j in n.coords)typeof n.coords[j]=="number"&&(X[j]=n.coords[j]);this.fire("locationfound",X)}},addHandler:function(n,o){if(!o)return this;var c=this[n]=new o(this);return this._handlers.push(c),this.options[n]&&c.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),Zt(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(tt(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var n;for(n in this._layers)this._layers[n].remove();for(n in this._panes)Zt(this._panes[n]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(n,o){var c="leaflet-pane"+(n?" leaflet-"+n.replace("Pane","")+"-pane":""),f=Bt("div",c,o||this._mapPane);return n&&(this._panes[n]=f),f},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var n=this.getPixelBounds(),o=this.unproject(n.getBottomLeft()),c=this.unproject(n.getTopRight());return new se(o,c)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(n,o,c){n=Yt(n),c=it(c||[0,0]);var f=this.getZoom()||0,v=this.getMinZoom(),T=this.getMaxZoom(),D=n.getNorthWest(),X=n.getSouthEast(),j=this.getSize().subtract(c),ot=zt(this.project(X,f),this.project(D,f)).getSize(),Tt=It.any3d?this.options.zoomSnap:1,qt=j.x/ot.x,ae=j.y/ot.y,Ye=o?Math.max(qt,ae):Math.min(qt,ae);return f=this.getScaleZoom(Ye,f),Tt&&(f=Math.round(f/(Tt/100))*(Tt/100),f=o?Math.ceil(f/Tt)*Tt:Math.floor(f/Tt)*Tt),Math.max(v,Math.min(T,f))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new G(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(n,o){var c=this._getTopLeftPoint(n,o);return new vt(c,c.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(n){return this.options.crs.getProjectedBounds(n===void 0?this.getZoom():n)},getPane:function(n){return typeof n=="string"?this._panes[n]:n},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(n,o){var c=this.options.crs;return o=o===void 0?this._zoom:o,c.scale(n)/c.scale(o)},getScaleZoom:function(n,o){var c=this.options.crs;o=o===void 0?this._zoom:o;var f=c.zoom(n*c.scale(o));return isNaN(f)?1/0:f},project:function(n,o){return o=o===void 0?this._zoom:o,this.options.crs.latLngToPoint(rt(n),o)},unproject:function(n,o){return o=o===void 0?this._zoom:o,this.options.crs.pointToLatLng(it(n),o)},layerPointToLatLng:function(n){var o=it(n).add(this.getPixelOrigin());return this.unproject(o)},latLngToLayerPoint:function(n){var o=this.project(rt(n))._round();return o._subtract(this.getPixelOrigin())},wrapLatLng:function(n){return this.options.crs.wrapLatLng(rt(n))},wrapLatLngBounds:function(n){return this.options.crs.wrapLatLngBounds(Yt(n))},distance:function(n,o){return this.options.crs.distance(rt(n),rt(o))},containerPointToLayerPoint:function(n){return it(n).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(n){return it(n).add(this._getMapPanePos())},containerPointToLatLng:function(n){var o=this.containerPointToLayerPoint(it(n));return this.layerPointToLatLng(o)},latLngToContainerPoint:function(n){return this.layerPointToContainerPoint(this.latLngToLayerPoint(rt(n)))},mouseEventToContainerPoint:function(n){return Zl(n,this._container)},mouseEventToLayerPoint:function(n){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(n))},mouseEventToLatLng:function(n){return this.layerPointToLatLng(this.mouseEventToLayerPoint(n))},_initContainer:function(n){var o=this._container=oe(n);if(o){if(o._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");te(o,"scroll",this._onScroll,this),this._containerId=u(o)},_initLayout:function(){var n=this._container;this._fadeAnimated=this.options.fadeAnimation&&It.any3d,Ht(n,"leaflet-container"+(It.touch?" leaflet-touch":"")+(It.retina?" leaflet-retina":"")+(It.ielt9?" leaflet-oldie":"")+(It.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var o=me(n,"position");o!=="absolute"&&o!=="relative"&&o!=="fixed"&&o!=="sticky"&&(n.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var n=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),de(this._mapPane,new G(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Ht(n.markerPane,"leaflet-zoom-hide"),Ht(n.shadowPane,"leaflet-zoom-hide"))},_resetView:function(n,o,c){de(this._mapPane,new G(0,0));var f=!this._loaded;this._loaded=!0,o=this._limitZoom(o),this.fire("viewprereset");var v=this._zoom!==o;this._moveStart(v,c)._move(n,o)._moveEnd(v),this.fire("viewreset"),f&&this.fire("load")},_moveStart:function(n,o){return n&&this.fire("zoomstart"),o||this.fire("movestart"),this},_move:function(n,o,c,f){o===void 0&&(o=this._zoom);var v=this._zoom!==o;return this._zoom=o,this._lastCenter=n,this._pixelOrigin=this._getNewPixelOrigin(n),f?c&&c.pinch&&this.fire("zoom",c):((v||c&&c.pinch)&&this.fire("zoom",c),this.fire("move",c)),this},_moveEnd:function(n){return n&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return tt(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(n){de(this._mapPane,this._getMapPanePos().subtract(n))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(n){this._targets={},this._targets[u(this._container)]=this;var o=n?Ce:te;o(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&o(window,"resize",this._onResize,this),It.any3d&&this.options.transform3DLimit&&(n?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){tt(this._resizeRequest),this._resizeRequest=N(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var n=this._getMapPanePos();Math.max(Math.abs(n.x),Math.abs(n.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(n,o){for(var c=[],f,v=o==="mouseout"||o==="mouseover",T=n.target||n.srcElement,D=!1;T;){if(f=this._targets[u(T)],f&&(o==="click"||o==="preclick")&&this._draggableMoved(f)){D=!0;break}if(f&&f.listens(o,!0)&&(v&&!Oo(T,n)||(c.push(f),v))||T===this._container)break;T=T.parentNode}return!c.length&&!D&&!v&&this.listens(o,!0)&&(c=[this]),c},_isClickDisabled:function(n){for(;n&&n!==this._container;){if(n._leaflet_disable_click)return!0;n=n.parentNode}},_handleDOMEvent:function(n){var o=n.target||n.srcElement;if(!(!this._loaded||o._leaflet_disable_events||n.type==="click"&&this._isClickDisabled(o))){var c=n.type;c==="mousedown"&&Po(o),this._fireDOMEvent(n,c)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(n,o,c){if(n.type==="click"){var f=s({},n);f.type="preclick",this._fireDOMEvent(f,f.type,c)}var v=this._findEventTargets(n,o);if(c){for(var T=[],D=0;D<c.length;D++)c[D].listens(o,!0)&&T.push(c[D]);v=T.concat(v)}if(v.length){o==="contextmenu"&&We(n);var X=v[0],j={originalEvent:n};if(n.type!=="keypress"&&n.type!=="keydown"&&n.type!=="keyup"){var ot=X.getLatLng&&(!X._radius||X._radius<=10);j.containerPoint=ot?this.latLngToContainerPoint(X.getLatLng()):this.mouseEventToContainerPoint(n),j.layerPoint=this.containerPointToLayerPoint(j.containerPoint),j.latlng=ot?X.getLatLng():this.layerPointToLatLng(j.layerPoint)}for(D=0;D<v.length;D++)if(v[D].fire(o,j,!0),j.originalEvent._stopped||v[D].options.bubblingMouseEvents===!1&&w(this._mouseEvents,o)!==-1)return}},_draggableMoved:function(n){return n=n.dragging&&n.dragging.enabled()?n:this,n.dragging&&n.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var n=0,o=this._handlers.length;n<o;n++)this._handlers[n].disable()},whenReady:function(n,o){return this._loaded?n.call(o||this,{target:this}):this.on("load",n,o),this},_getMapPanePos:function(){return xn(this._mapPane)||new G(0,0)},_moved:function(){var n=this._getMapPanePos();return n&&!n.equals([0,0])},_getTopLeftPoint:function(n,o){var c=n&&o!==void 0?this._getNewPixelOrigin(n,o):this.getPixelOrigin();return c.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(n,o){var c=this.getSize()._divideBy(2);return this.project(n,o)._subtract(c)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(n,o,c){var f=this._getNewPixelOrigin(c,o);return this.project(n,o)._subtract(f)},_latLngBoundsToNewLayerBounds:function(n,o,c){var f=this._getNewPixelOrigin(c,o);return zt([this.project(n.getSouthWest(),o)._subtract(f),this.project(n.getNorthWest(),o)._subtract(f),this.project(n.getSouthEast(),o)._subtract(f),this.project(n.getNorthEast(),o)._subtract(f)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(n){return this.latLngToLayerPoint(n).subtract(this._getCenterLayerPoint())},_limitCenter:function(n,o,c){if(!c)return n;var f=this.project(n,o),v=this.getSize().divideBy(2),T=new vt(f.subtract(v),f.add(v)),D=this._getBoundsOffset(T,c,o);return Math.abs(D.x)<=1&&Math.abs(D.y)<=1?n:this.unproject(f.add(D),o)},_limitOffset:function(n,o){if(!o)return n;var c=this.getPixelBounds(),f=new vt(c.min.add(n),c.max.add(n));return n.add(this._getBoundsOffset(f,o))},_getBoundsOffset:function(n,o,c){var f=zt(this.project(o.getNorthEast(),c),this.project(o.getSouthWest(),c)),v=f.min.subtract(n.min),T=f.max.subtract(n.max),D=this._rebound(v.x,-T.x),X=this._rebound(v.y,-T.y);return new G(D,X)},_rebound:function(n,o){return n+o>0?Math.round(n-o)/2:Math.max(0,Math.ceil(n))-Math.max(0,Math.floor(o))},_limitZoom:function(n){var o=this.getMinZoom(),c=this.getMaxZoom(),f=It.any3d?this.options.zoomSnap:1;return f&&(n=Math.round(n/f)*f),Math.max(o,Math.min(c,n))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){Ae(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(n,o){var c=this._getCenterOffset(n)._trunc();return(o&&o.animate)!==!0&&!this.getSize().contains(c)?!1:(this.panBy(c,o),!0)},_createAnimProxy:function(){var n=this._proxy=Bt("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(n),this.on("zoomanim",function(o){var c=Vt,f=this._proxy.style[c];Ie(this._proxy,this.project(o.center,o.zoom),this.getZoomScale(o.zoom,1)),f===this._proxy.style[c]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){Zt(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var n=this.getCenter(),o=this.getZoom();Ie(this._proxy,this.project(n,o),this.getZoomScale(o,1))},_catchTransitionEnd:function(n){this._animatingZoom&&n.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(n,o,c){if(this._animatingZoom)return!0;if(c=c||{},!this._zoomAnimated||c.animate===!1||this._nothingToAnimate()||Math.abs(o-this._zoom)>this.options.zoomAnimationThreshold)return!1;var f=this.getZoomScale(o),v=this._getCenterOffset(n)._divideBy(1-1/f);return c.animate!==!0&&!this.getSize().contains(v)?!1:(N(function(){this._moveStart(!0,c.noMoveStart||!1)._animateZoom(n,o,!0)},this),!0)},_animateZoom:function(n,o,c,f){this._mapPane&&(c&&(this._animatingZoom=!0,this._animateToCenter=n,this._animateToZoom=o,Ht(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:n,zoom:o,noUpdate:f}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(l(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Ae(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Hu(n,o){return new _e(n,o)}var yn=$.extend({options:{position:"topright"},initialize:function(n){S(this,n)},getPosition:function(){return this.options.position},setPosition:function(n){var o=this._map;return o&&o.removeControl(this),this.options.position=n,o&&o.addControl(this),this},getContainer:function(){return this._container},addTo:function(n){this.remove(),this._map=n;var o=this._container=this.onAdd(n),c=this.getPosition(),f=n._controlCorners[c];return Ht(o,"leaflet-control"),c.indexOf("bottom")!==-1?f.insertBefore(o,f.firstChild):f.appendChild(o),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(Zt(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(n){this._map&&n&&n.screenX>0&&n.screenY>0&&this._map.getContainer().focus()}}),Bs=function(n){return new yn(n)};_e.include({addControl:function(n){return n.addTo(this),this},removeControl:function(n){return n.remove(),this},_initControlPos:function(){var n=this._controlCorners={},o="leaflet-",c=this._controlContainer=Bt("div",o+"control-container",this._container);function f(v,T){var D=o+v+" "+o+T;n[v+T]=Bt("div",D,c)}f("top","left"),f("top","right"),f("bottom","left"),f("bottom","right")},_clearControlPos:function(){for(var n in this._controlCorners)Zt(this._controlCorners[n]);Zt(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Kl=yn.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(n,o,c,f){return c<f?-1:f<c?1:0}},initialize:function(n,o,c){S(this,c),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var f in n)this._addLayer(n[f],f);for(f in o)this._addLayer(o[f],f,!0)},onAdd:function(n){this._initLayout(),this._update(),this._map=n,n.on("zoomend",this._checkDisabledLayers,this);for(var o=0;o<this._layers.length;o++)this._layers[o].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(n){return yn.prototype.addTo.call(this,n),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var n=0;n<this._layers.length;n++)this._layers[n].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(n,o){return this._addLayer(n,o),this._map?this._update():this},addOverlay:function(n,o){return this._addLayer(n,o,!0),this._map?this._update():this},removeLayer:function(n){n.off("add remove",this._onLayerChange,this);var o=this._getLayer(u(n));return o&&this._layers.splice(this._layers.indexOf(o),1),this._map?this._update():this},expand:function(){Ht(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var n=this._map.getSize().y-(this._container.offsetTop+50);return n<this._section.clientHeight?(Ht(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=n+"px"):Ae(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return Ae(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var n="leaflet-control-layers",o=this._container=Bt("div",n),c=this.options.collapsed;o.setAttribute("aria-haspopup",!0),Fs(o),Uo(o);var f=this._section=Bt("section",n+"-list");c&&(this._map.on("click",this.collapse,this),te(o,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var v=this._layersLink=Bt("a",n+"-toggle",o);v.href="#",v.title="Layers",v.setAttribute("role","button"),te(v,{keydown:function(T){T.keyCode===13&&this._expandSafely()},click:function(T){We(T),this._expandSafely()}},this),c||this.expand(),this._baseLayersList=Bt("div",n+"-base",f),this._separator=Bt("div",n+"-separator",f),this._overlaysList=Bt("div",n+"-overlays",f),o.appendChild(f)},_getLayer:function(n){for(var o=0;o<this._layers.length;o++)if(this._layers[o]&&u(this._layers[o].layer)===n)return this._layers[o]},_addLayer:function(n,o,c){this._map&&n.on("add remove",this._onLayerChange,this),this._layers.push({layer:n,name:o,overlay:c}),this.options.sortLayers&&this._layers.sort(l(function(f,v){return this.options.sortFunction(f.layer,v.layer,f.name,v.name)},this)),this.options.autoZIndex&&n.setZIndex&&(this._lastZIndex++,n.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;xe(this._baseLayersList),xe(this._overlaysList),this._layerControlInputs=[];var n,o,c,f,v=0;for(c=0;c<this._layers.length;c++)f=this._layers[c],this._addItem(f),o=o||f.overlay,n=n||!f.overlay,v+=f.overlay?0:1;return this.options.hideSingleBase&&(n=n&&v>1,this._baseLayersList.style.display=n?"":"none"),this._separator.style.display=o&&n?"":"none",this},_onLayerChange:function(n){this._handlingClick||this._update();var o=this._getLayer(u(n.target)),c=o.overlay?n.type==="add"?"overlayadd":"overlayremove":n.type==="add"?"baselayerchange":null;c&&this._map.fire(c,o)},_createRadioElement:function(n,o){var c='<input type="radio" class="leaflet-control-layers-selector" name="'+n+'"'+(o?' checked="checked"':"")+"/>",f=document.createElement("div");return f.innerHTML=c,f.firstChild},_addItem:function(n){var o=document.createElement("label"),c=this._map.hasLayer(n.layer),f;n.overlay?(f=document.createElement("input"),f.type="checkbox",f.className="leaflet-control-layers-selector",f.defaultChecked=c):f=this._createRadioElement("leaflet-base-layers_"+u(this),c),this._layerControlInputs.push(f),f.layerId=u(n.layer),te(f,"click",this._onInputClick,this);var v=document.createElement("span");v.innerHTML=" "+n.name;var T=document.createElement("span");o.appendChild(T),T.appendChild(f),T.appendChild(v);var D=n.overlay?this._overlaysList:this._baseLayersList;return D.appendChild(o),this._checkDisabledLayers(),o},_onInputClick:function(){if(!this._preventClick){var n=this._layerControlInputs,o,c,f=[],v=[];this._handlingClick=!0;for(var T=n.length-1;T>=0;T--)o=n[T],c=this._getLayer(o.layerId).layer,o.checked?f.push(c):o.checked||v.push(c);for(T=0;T<v.length;T++)this._map.hasLayer(v[T])&&this._map.removeLayer(v[T]);for(T=0;T<f.length;T++)this._map.hasLayer(f[T])||this._map.addLayer(f[T]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var n=this._layerControlInputs,o,c,f=this._map.getZoom(),v=n.length-1;v>=0;v--)o=n[v],c=this._getLayer(o.layerId).layer,o.disabled=c.options.minZoom!==void 0&&f<c.options.minZoom||c.options.maxZoom!==void 0&&f>c.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var n=this._section;this._preventClick=!0,te(n,"click",We),this.expand();var o=this;setTimeout(function(){Ce(n,"click",We),o._preventClick=!1})}}),Vu=function(n,o,c){return new Kl(n,o,c)},Fo=yn.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(n){var o="leaflet-control-zoom",c=Bt("div",o+" leaflet-bar"),f=this.options;return this._zoomInButton=this._createButton(f.zoomInText,f.zoomInTitle,o+"-in",c,this._zoomIn),this._zoomOutButton=this._createButton(f.zoomOutText,f.zoomOutTitle,o+"-out",c,this._zoomOut),this._updateDisabled(),n.on("zoomend zoomlevelschange",this._updateDisabled,this),c},onRemove:function(n){n.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(n){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(n.shiftKey?3:1))},_zoomOut:function(n){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(n.shiftKey?3:1))},_createButton:function(n,o,c,f,v){var T=Bt("a",c,f);return T.innerHTML=n,T.href="#",T.title=o,T.setAttribute("role","button"),T.setAttribute("aria-label",o),Fs(T),te(T,"click",Ai),te(T,"click",v,this),te(T,"click",this._refocusOnMap,this),T},_updateDisabled:function(){var n=this._map,o="leaflet-disabled";Ae(this._zoomInButton,o),Ae(this._zoomOutButton,o),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||n._zoom===n.getMinZoom())&&(Ht(this._zoomOutButton,o),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||n._zoom===n.getMaxZoom())&&(Ht(this._zoomInButton,o),this._zoomInButton.setAttribute("aria-disabled","true"))}});_e.mergeOptions({zoomControl:!0}),_e.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Fo,this.addControl(this.zoomControl))});var Gu=function(n){return new Fo(n)},jl=yn.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(n){var o="leaflet-control-scale",c=Bt("div",o),f=this.options;return this._addScales(f,o+"-line",c),n.on(f.updateWhenIdle?"moveend":"move",this._update,this),n.whenReady(this._update,this),c},onRemove:function(n){n.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(n,o,c){n.metric&&(this._mScale=Bt("div",o,c)),n.imperial&&(this._iScale=Bt("div",o,c))},_update:function(){var n=this._map,o=n.getSize().y/2,c=n.distance(n.containerPointToLatLng([0,o]),n.containerPointToLatLng([this.options.maxWidth,o]));this._updateScales(c)},_updateScales:function(n){this.options.metric&&n&&this._updateMetric(n),this.options.imperial&&n&&this._updateImperial(n)},_updateMetric:function(n){var o=this._getRoundNum(n),c=o<1e3?o+" m":o/1e3+" km";this._updateScale(this._mScale,c,o/n)},_updateImperial:function(n){var o=n*3.2808399,c,f,v;o>5280?(c=o/5280,f=this._getRoundNum(c),this._updateScale(this._iScale,f+" mi",f/c)):(v=this._getRoundNum(o),this._updateScale(this._iScale,v+" ft",v/o))},_updateScale:function(n,o,c){n.style.width=Math.round(this.options.maxWidth*c)+"px",n.innerHTML=o},_getRoundNum:function(n){var o=Math.pow(10,(Math.floor(n)+"").length-1),c=n/o;return c=c>=10?10:c>=5?5:c>=3?3:c>=2?2:1,o*c}}),Wu=function(n){return new jl(n)},Xu='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Bo=yn.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(It.inlineSvg?Xu+" ":"")+"Leaflet</a>"},initialize:function(n){S(this,n),this._attributions={}},onAdd:function(n){n.attributionControl=this,this._container=Bt("div","leaflet-control-attribution"),Fs(this._container);for(var o in n._layers)n._layers[o].getAttribution&&this.addAttribution(n._layers[o].getAttribution());return this._update(),n.on("layeradd",this._addAttribution,this),this._container},onRemove:function(n){n.off("layeradd",this._addAttribution,this)},_addAttribution:function(n){n.layer.getAttribution&&(this.addAttribution(n.layer.getAttribution()),n.layer.once("remove",function(){this.removeAttribution(n.layer.getAttribution())},this))},setPrefix:function(n){return this.options.prefix=n,this._update(),this},addAttribution:function(n){return n?(this._attributions[n]||(this._attributions[n]=0),this._attributions[n]++,this._update(),this):this},removeAttribution:function(n){return n?(this._attributions[n]&&(this._attributions[n]--,this._update()),this):this},_update:function(){if(this._map){var n=[];for(var o in this._attributions)this._attributions[o]&&n.push(o);var c=[];this.options.prefix&&c.push(this.options.prefix),n.length&&c.push(n.join(", ")),this._container.innerHTML=c.join(' <span aria-hidden="true">|</span> ')}}});_e.mergeOptions({attributionControl:!0}),_e.addInitHook(function(){this.options.attributionControl&&new Bo().addTo(this)});var Zu=function(n){return new Bo(n)};yn.Layers=Kl,yn.Zoom=Fo,yn.Scale=jl,yn.Attribution=Bo,Bs.layers=Vu,Bs.zoom=Gu,Bs.scale=Wu,Bs.attribution=Zu;var In=$.extend({initialize:function(n){this._map=n},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});In.addTo=function(n,o){return n.addHandler(o,this),this};var qu={Events:J},$l=It.touch?"touchstart mousedown":"mousedown",ci=pt.extend({options:{clickTolerance:3},initialize:function(n,o,c,f){S(this,f),this._element=n,this._dragStartTarget=o||n,this._preventOutline=c},enable:function(){this._enabled||(te(this._dragStartTarget,$l,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(ci._dragging===this&&this.finishDrag(!0),Ce(this._dragStartTarget,$l,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(n){if(this._enabled&&(this._moved=!1,!he(this._element,"leaflet-zoom-anim"))){if(n.touches&&n.touches.length!==1){ci._dragging===this&&this.finishDrag();return}if(!(ci._dragging||n.shiftKey||n.which!==1&&n.button!==1&&!n.touches)&&(ci._dragging=this,this._preventOutline&&Po(this._element),Ao(),an(),!this._moving)){this.fire("down");var o=n.touches?n.touches[0]:n,c=Gl(this._element);this._startPoint=new G(o.clientX,o.clientY),this._startPos=xn(this._element),this._parentScale=Lo(c);var f=n.type==="mousedown";te(document,f?"mousemove":"touchmove",this._onMove,this),te(document,f?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(n){if(this._enabled){if(n.touches&&n.touches.length>1){this._moved=!0;return}var o=n.touches&&n.touches.length===1?n.touches[0]:n,c=new G(o.clientX,o.clientY)._subtract(this._startPoint);!c.x&&!c.y||Math.abs(c.x)+Math.abs(c.y)<this.options.clickTolerance||(c.x/=this._parentScale.x,c.y/=this._parentScale.y,We(n),this._moved||(this.fire("dragstart"),this._moved=!0,Ht(document.body,"leaflet-dragging"),this._lastTarget=n.target||n.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Ht(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(c),this._moving=!0,this._lastEvent=n,this._updatePosition())}},_updatePosition:function(){var n={originalEvent:this._lastEvent};this.fire("predrag",n),de(this._element,this._newPos),this.fire("drag",n)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(n){Ae(document.body,"leaflet-dragging"),this._lastTarget&&(Ae(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),Ce(document,"mousemove touchmove",this._onMove,this),Ce(document,"mouseup touchend touchcancel",this._onUp,this),Ro(),Us();var o=this._moved&&this._moving;this._moving=!1,ci._dragging=!1,o&&this.fire("dragend",{noInertia:n,distance:this._newPos.distanceTo(this._startPos)})}});function Jl(n,o,c){var f,v=[1,4,2,8],T,D,X,j,ot,Tt,qt,ae;for(T=0,Tt=n.length;T<Tt;T++)n[T]._code=Ri(n[T],o);for(X=0;X<4;X++){for(qt=v[X],f=[],T=0,Tt=n.length,D=Tt-1;T<Tt;D=T++)j=n[T],ot=n[D],j._code&qt?ot._code&qt||(ae=yr(ot,j,qt,o,c),ae._code=Ri(ae,o),f.push(ae)):(ot._code&qt&&(ae=yr(ot,j,qt,o,c),ae._code=Ri(ae,o),f.push(ae)),f.push(j));n=f}return n}function Ql(n,o){var c,f,v,T,D,X,j,ot,Tt;if(!n||n.length===0)throw new Error("latlngs not passed");fn(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var qt=rt([0,0]),ae=Yt(n),Ye=ae.getNorthWest().distanceTo(ae.getSouthWest())*ae.getNorthEast().distanceTo(ae.getNorthWest());Ye<1700&&(qt=zo(n));var ze=n.length,pn=[];for(c=0;c<ze;c++){var nn=rt(n[c]);pn.push(o.project(rt([nn.lat-qt.lat,nn.lng-qt.lng])))}for(X=j=ot=0,c=0,f=ze-1;c<ze;f=c++)v=pn[c],T=pn[f],D=v.y*T.x-T.y*v.x,j+=(v.x+T.x)*D,ot+=(v.y+T.y)*D,X+=D*3;X===0?Tt=pn[0]:Tt=[j/X,ot/X];var ji=o.unproject(it(Tt));return rt([ji.lat+qt.lat,ji.lng+qt.lng])}function zo(n){for(var o=0,c=0,f=0,v=0;v<n.length;v++){var T=rt(n[v]);o+=T.lat,c+=T.lng,f++}return rt([o/f,c/f])}var Yu={__proto__:null,clipPolygon:Jl,polygonCenter:Ql,centroid:zo};function tc(n,o){if(!o||!n.length)return n.slice();var c=o*o;return n=$u(n,c),n=ju(n,c),n}function ec(n,o,c){return Math.sqrt(zs(n,o,c,!0))}function Ku(n,o,c){return zs(n,o,c)}function ju(n,o){var c=n.length,f=typeof Uint8Array<"u"?Uint8Array:Array,v=new f(c);v[0]=v[c-1]=1,ko(n,v,o,0,c-1);var T,D=[];for(T=0;T<c;T++)v[T]&&D.push(n[T]);return D}function ko(n,o,c,f,v){var T=0,D,X,j;for(X=f+1;X<=v-1;X++)j=zs(n[X],n[f],n[v],!0),j>T&&(D=X,T=j);T>c&&(o[D]=1,ko(n,o,c,f,D),ko(n,o,c,D,v))}function $u(n,o){for(var c=[n[0]],f=1,v=0,T=n.length;f<T;f++)Ju(n[f],n[v])>o&&(c.push(n[f]),v=f);return v<T-1&&c.push(n[T-1]),c}var nc;function ic(n,o,c,f,v){var T=f?nc:Ri(n,c),D=Ri(o,c),X,j,ot;for(nc=D;;){if(!(T|D))return[n,o];if(T&D)return!1;X=T||D,j=yr(n,o,X,c,v),ot=Ri(j,c),X===T?(n=j,T=ot):(o=j,D=ot)}}function yr(n,o,c,f,v){var T=o.x-n.x,D=o.y-n.y,X=f.min,j=f.max,ot,Tt;return c&8?(ot=n.x+T*(j.y-n.y)/D,Tt=j.y):c&4?(ot=n.x+T*(X.y-n.y)/D,Tt=X.y):c&2?(ot=j.x,Tt=n.y+D*(j.x-n.x)/T):c&1&&(ot=X.x,Tt=n.y+D*(X.x-n.x)/T),new G(ot,Tt,v)}function Ri(n,o){var c=0;return n.x<o.min.x?c|=1:n.x>o.max.x&&(c|=2),n.y<o.min.y?c|=4:n.y>o.max.y&&(c|=8),c}function Ju(n,o){var c=o.x-n.x,f=o.y-n.y;return c*c+f*f}function zs(n,o,c,f){var v=o.x,T=o.y,D=c.x-v,X=c.y-T,j=D*D+X*X,ot;return j>0&&(ot=((n.x-v)*D+(n.y-T)*X)/j,ot>1?(v=c.x,T=c.y):ot>0&&(v+=D*ot,T+=X*ot)),D=n.x-v,X=n.y-T,f?D*D+X*X:new G(v,T)}function fn(n){return!C(n[0])||typeof n[0][0]!="object"&&typeof n[0][0]<"u"}function sc(n){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),fn(n)}function rc(n,o){var c,f,v,T,D,X,j,ot;if(!n||n.length===0)throw new Error("latlngs not passed");fn(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var Tt=rt([0,0]),qt=Yt(n),ae=qt.getNorthWest().distanceTo(qt.getSouthWest())*qt.getNorthEast().distanceTo(qt.getNorthWest());ae<1700&&(Tt=zo(n));var Ye=n.length,ze=[];for(c=0;c<Ye;c++){var pn=rt(n[c]);ze.push(o.project(rt([pn.lat-Tt.lat,pn.lng-Tt.lng])))}for(c=0,f=0;c<Ye-1;c++)f+=ze[c].distanceTo(ze[c+1])/2;if(f===0)ot=ze[0];else for(c=0,T=0;c<Ye-1;c++)if(D=ze[c],X=ze[c+1],v=D.distanceTo(X),T+=v,T>f){j=(T-f)/v,ot=[X.x-j*(X.x-D.x),X.y-j*(X.y-D.y)];break}var nn=o.unproject(it(ot));return rt([nn.lat+Tt.lat,nn.lng+Tt.lng])}var Qu={__proto__:null,simplify:tc,pointToSegmentDistance:ec,closestPointOnSegment:Ku,clipSegment:ic,_getEdgeIntersection:yr,_getBitCode:Ri,_sqClosestPointOnSegment:zs,isFlat:fn,_flat:sc,polylineCenter:rc},Ho={project:function(n){return new G(n.lng,n.lat)},unproject:function(n){return new q(n.y,n.x)},bounds:new vt([-180,-90],[180,90])},Vo={R:6378137,R_MINOR:6356752314245179e-9,bounds:new vt([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(n){var o=Math.PI/180,c=this.R,f=n.lat*o,v=this.R_MINOR/c,T=Math.sqrt(1-v*v),D=T*Math.sin(f),X=Math.tan(Math.PI/4-f/2)/Math.pow((1-D)/(1+D),T/2);return f=-c*Math.log(Math.max(X,1e-10)),new G(n.lng*o*c,f)},unproject:function(n){for(var o=180/Math.PI,c=this.R,f=this.R_MINOR/c,v=Math.sqrt(1-f*f),T=Math.exp(-n.y/c),D=Math.PI/2-2*Math.atan(T),X=0,j=.1,ot;X<15&&Math.abs(j)>1e-7;X++)ot=v*Math.sin(D),ot=Math.pow((1-ot)/(1+ot),v/2),j=Math.PI/2-2*Math.atan(T*ot)-D,D+=j;return new q(D*o,n.x*o/c)}},td={__proto__:null,LonLat:Ho,Mercator:Vo,SphericalMercator:Kt},ed=s({},Dt,{code:"EPSG:3395",projection:Vo,transformation:function(){var n=.5/(Math.PI*Vo.R);return re(n,.5,-n,.5)}()}),oc=s({},Dt,{code:"EPSG:4326",projection:Ho,transformation:re(1/180,1,-1/180,.5)}),nd=s({},ut,{projection:Ho,transformation:re(1,0,-1,0),scale:function(n){return Math.pow(2,n)},zoom:function(n){return Math.log(n)/Math.LN2},distance:function(n,o){var c=o.lng-n.lng,f=o.lat-n.lat;return Math.sqrt(c*c+f*f)},infinite:!0});ut.Earth=Dt,ut.EPSG3395=ed,ut.EPSG3857=U,ut.EPSG900913=be,ut.EPSG4326=oc,ut.Simple=nd;var Mn=pt.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(n){return n.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(n){return n&&n.removeLayer(this),this},getPane:function(n){return this._map.getPane(n?this.options[n]||n:this.options.pane)},addInteractiveTarget:function(n){return this._map._targets[u(n)]=this,this},removeInteractiveTarget:function(n){return delete this._map._targets[u(n)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(n){var o=n.target;if(o.hasLayer(this)){if(this._map=o,this._zoomAnimated=o._zoomAnimated,this.getEvents){var c=this.getEvents();o.on(c,this),this.once("remove",function(){o.off(c,this)},this)}this.onAdd(o),this.fire("add"),o.fire("layeradd",{layer:this})}}});_e.include({addLayer:function(n){if(!n._layerAdd)throw new Error("The provided object is not a Layer.");var o=u(n);return this._layers[o]?this:(this._layers[o]=n,n._mapToAdd=this,n.beforeAdd&&n.beforeAdd(this),this.whenReady(n._layerAdd,n),this)},removeLayer:function(n){var o=u(n);return this._layers[o]?(this._loaded&&n.onRemove(this),delete this._layers[o],this._loaded&&(this.fire("layerremove",{layer:n}),n.fire("remove")),n._map=n._mapToAdd=null,this):this},hasLayer:function(n){return u(n)in this._layers},eachLayer:function(n,o){for(var c in this._layers)n.call(o,this._layers[c]);return this},_addLayers:function(n){n=n?C(n)?n:[n]:[];for(var o=0,c=n.length;o<c;o++)this.addLayer(n[o])},_addZoomLimit:function(n){(!isNaN(n.options.maxZoom)||!isNaN(n.options.minZoom))&&(this._zoomBoundLayers[u(n)]=n,this._updateZoomLevels())},_removeZoomLimit:function(n){var o=u(n);this._zoomBoundLayers[o]&&(delete this._zoomBoundLayers[o],this._updateZoomLevels())},_updateZoomLevels:function(){var n=1/0,o=-1/0,c=this._getZoomSpan();for(var f in this._zoomBoundLayers){var v=this._zoomBoundLayers[f].options;n=v.minZoom===void 0?n:Math.min(n,v.minZoom),o=v.maxZoom===void 0?o:Math.max(o,v.maxZoom)}this._layersMaxZoom=o===-1/0?void 0:o,this._layersMinZoom=n===1/0?void 0:n,c!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Xi=Mn.extend({initialize:function(n,o){S(this,o),this._layers={};var c,f;if(n)for(c=0,f=n.length;c<f;c++)this.addLayer(n[c])},addLayer:function(n){var o=this.getLayerId(n);return this._layers[o]=n,this._map&&this._map.addLayer(n),this},removeLayer:function(n){var o=n in this._layers?n:this.getLayerId(n);return this._map&&this._layers[o]&&this._map.removeLayer(this._layers[o]),delete this._layers[o],this},hasLayer:function(n){var o=typeof n=="number"?n:this.getLayerId(n);return o in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(n){var o=Array.prototype.slice.call(arguments,1),c,f;for(c in this._layers)f=this._layers[c],f[n]&&f[n].apply(f,o);return this},onAdd:function(n){this.eachLayer(n.addLayer,n)},onRemove:function(n){this.eachLayer(n.removeLayer,n)},eachLayer:function(n,o){for(var c in this._layers)n.call(o,this._layers[c]);return this},getLayer:function(n){return this._layers[n]},getLayers:function(){var n=[];return this.eachLayer(n.push,n),n},setZIndex:function(n){return this.invoke("setZIndex",n)},getLayerId:function(n){return u(n)}}),id=function(n,o){return new Xi(n,o)},Wn=Xi.extend({addLayer:function(n){return this.hasLayer(n)?this:(n.addEventParent(this),Xi.prototype.addLayer.call(this,n),this.fire("layeradd",{layer:n}))},removeLayer:function(n){return this.hasLayer(n)?(n in this._layers&&(n=this._layers[n]),n.removeEventParent(this),Xi.prototype.removeLayer.call(this,n),this.fire("layerremove",{layer:n})):this},setStyle:function(n){return this.invoke("setStyle",n)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var n=new se;for(var o in this._layers){var c=this._layers[o];n.extend(c.getBounds?c.getBounds():c.getLatLng())}return n}}),sd=function(n,o){return new Wn(n,o)},Zi=$.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(n){S(this,n)},createIcon:function(n){return this._createIcon("icon",n)},createShadow:function(n){return this._createIcon("shadow",n)},_createIcon:function(n,o){var c=this._getIconUrl(n);if(!c){if(n==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var f=this._createImg(c,o&&o.tagName==="IMG"?o:null);return this._setIconStyles(f,n),(this.options.crossOrigin||this.options.crossOrigin==="")&&(f.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),f},_setIconStyles:function(n,o){var c=this.options,f=c[o+"Size"];typeof f=="number"&&(f=[f,f]);var v=it(f),T=it(o==="shadow"&&c.shadowAnchor||c.iconAnchor||v&&v.divideBy(2,!0));n.className="leaflet-marker-"+o+" "+(c.className||""),T&&(n.style.marginLeft=-T.x+"px",n.style.marginTop=-T.y+"px"),v&&(n.style.width=v.x+"px",n.style.height=v.y+"px")},_createImg:function(n,o){return o=o||document.createElement("img"),o.src=n,o},_getIconUrl:function(n){return It.retina&&this.options[n+"RetinaUrl"]||this.options[n+"Url"]}});function rd(n){return new Zi(n)}var ks=Zi.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(n){return typeof ks.imagePath!="string"&&(ks.imagePath=this._detectIconPath()),(this.options.imagePath||ks.imagePath)+Zi.prototype._getIconUrl.call(this,n)},_stripUrl:function(n){var o=function(c,f,v){var T=f.exec(c);return T&&T[v]};return n=o(n,/^url\((['"])?(.+)\1\)$/,2),n&&o(n,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var n=Bt("div","leaflet-default-icon-path",document.body),o=me(n,"background-image")||me(n,"backgroundImage");if(document.body.removeChild(n),o=this._stripUrl(o),o)return o;var c=document.querySelector('link[href$="leaflet.css"]');return c?c.href.substring(0,c.href.length-11-1):""}}),ac=In.extend({initialize:function(n){this._marker=n},addHooks:function(){var n=this._marker._icon;this._draggable||(this._draggable=new ci(n,n,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Ht(n,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Ae(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(n){var o=this._marker,c=o._map,f=this._marker.options.autoPanSpeed,v=this._marker.options.autoPanPadding,T=xn(o._icon),D=c.getPixelBounds(),X=c.getPixelOrigin(),j=zt(D.min._subtract(X).add(v),D.max._subtract(X).subtract(v));if(!j.contains(T)){var ot=it((Math.max(j.max.x,T.x)-j.max.x)/(D.max.x-j.max.x)-(Math.min(j.min.x,T.x)-j.min.x)/(D.min.x-j.min.x),(Math.max(j.max.y,T.y)-j.max.y)/(D.max.y-j.max.y)-(Math.min(j.min.y,T.y)-j.min.y)/(D.min.y-j.min.y)).multiplyBy(f);c.panBy(ot,{animate:!1}),this._draggable._newPos._add(ot),this._draggable._startPos._add(ot),de(o._icon,this._draggable._newPos),this._onDrag(n),this._panRequest=N(this._adjustPan.bind(this,n))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(n){this._marker.options.autoPan&&(tt(this._panRequest),this._panRequest=N(this._adjustPan.bind(this,n)))},_onDrag:function(n){var o=this._marker,c=o._shadow,f=xn(o._icon),v=o._map.layerPointToLatLng(f);c&&de(c,f),o._latlng=v,n.latlng=v,n.oldLatLng=this._oldLatLng,o.fire("move",n).fire("drag",n)},_onDragEnd:function(n){tt(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",n)}}),Mr=Mn.extend({options:{icon:new ks,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(n,o){S(this,o),this._latlng=rt(n)},onAdd:function(n){this._zoomAnimated=this._zoomAnimated&&n.options.markerZoomAnimation,this._zoomAnimated&&n.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(n){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&n.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(n){var o=this._latlng;return this._latlng=rt(n),this.update(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},setZIndexOffset:function(n){return this.options.zIndexOffset=n,this.update()},getIcon:function(){return this.options.icon},setIcon:function(n){return this.options.icon=n,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var n=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(n)}return this},_initIcon:function(){var n=this.options,o="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),c=n.icon.createIcon(this._icon),f=!1;c!==this._icon&&(this._icon&&this._removeIcon(),f=!0,n.title&&(c.title=n.title),c.tagName==="IMG"&&(c.alt=n.alt||"")),Ht(c,o),n.keyboard&&(c.tabIndex="0",c.setAttribute("role","button")),this._icon=c,n.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&te(c,"focus",this._panOnFocus,this);var v=n.icon.createShadow(this._shadow),T=!1;v!==this._shadow&&(this._removeShadow(),T=!0),v&&(Ht(v,o),v.alt=""),this._shadow=v,n.opacity<1&&this._updateOpacity(),f&&this.getPane().appendChild(this._icon),this._initInteraction(),v&&T&&this.getPane(n.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Ce(this._icon,"focus",this._panOnFocus,this),Zt(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&Zt(this._shadow),this._shadow=null},_setPos:function(n){this._icon&&de(this._icon,n),this._shadow&&de(this._shadow,n),this._zIndex=n.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(n){this._icon&&(this._icon.style.zIndex=this._zIndex+n)},_animateZoom:function(n){var o=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center).round();this._setPos(o)},_initInteraction:function(){if(this.options.interactive&&(Ht(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),ac)){var n=this.options.draggable;this.dragging&&(n=this.dragging.enabled(),this.dragging.disable()),this.dragging=new ac(this),n&&this.dragging.enable()}},setOpacity:function(n){return this.options.opacity=n,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var n=this.options.opacity;this._icon&&ue(this._icon,n),this._shadow&&ue(this._shadow,n)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var n=this._map;if(n){var o=this.options.icon.options,c=o.iconSize?it(o.iconSize):it(0,0),f=o.iconAnchor?it(o.iconAnchor):it(0,0);n.panInside(this._latlng,{paddingTopLeft:f,paddingBottomRight:c.subtract(f)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function od(n,o){return new Mr(n,o)}var hi=Mn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(n){this._renderer=n.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(n){return S(this,n),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&n&&Object.prototype.hasOwnProperty.call(n,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Sr=hi.extend({options:{fill:!0,radius:10},initialize:function(n,o){S(this,o),this._latlng=rt(n),this._radius=this.options.radius},setLatLng:function(n){var o=this._latlng;return this._latlng=rt(n),this.redraw(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(n){return this.options.radius=this._radius=n,this.redraw()},getRadius:function(){return this._radius},setStyle:function(n){var o=n&&n.radius||this._radius;return hi.prototype.setStyle.call(this,n),this.setRadius(o),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var n=this._radius,o=this._radiusY||n,c=this._clickTolerance(),f=[n+c,o+c];this._pxBounds=new vt(this._point.subtract(f),this._point.add(f))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(n){return n.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function ad(n,o){return new Sr(n,o)}var Go=Sr.extend({initialize:function(n,o,c){if(typeof o=="number"&&(o=s({},c,{radius:o})),S(this,o),this._latlng=rt(n),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(n){return this._mRadius=n,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var n=[this._radius,this._radiusY||this._radius];return new se(this._map.layerPointToLatLng(this._point.subtract(n)),this._map.layerPointToLatLng(this._point.add(n)))},setStyle:hi.prototype.setStyle,_project:function(){var n=this._latlng.lng,o=this._latlng.lat,c=this._map,f=c.options.crs;if(f.distance===Dt.distance){var v=Math.PI/180,T=this._mRadius/Dt.R/v,D=c.project([o+T,n]),X=c.project([o-T,n]),j=D.add(X).divideBy(2),ot=c.unproject(j).lat,Tt=Math.acos((Math.cos(T*v)-Math.sin(o*v)*Math.sin(ot*v))/(Math.cos(o*v)*Math.cos(ot*v)))/v;(isNaN(Tt)||Tt===0)&&(Tt=T/Math.cos(Math.PI/180*o)),this._point=j.subtract(c.getPixelOrigin()),this._radius=isNaN(Tt)?0:j.x-c.project([ot,n-Tt]).x,this._radiusY=j.y-D.y}else{var qt=f.unproject(f.project(this._latlng).subtract([this._mRadius,0]));this._point=c.latLngToLayerPoint(this._latlng),this._radius=this._point.x-c.latLngToLayerPoint(qt).x}this._updateBounds()}});function ld(n,o,c){return new Go(n,o,c)}var Xn=hi.extend({options:{smoothFactor:1,noClip:!1},initialize:function(n,o){S(this,o),this._setLatLngs(n)},getLatLngs:function(){return this._latlngs},setLatLngs:function(n){return this._setLatLngs(n),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(n){for(var o=1/0,c=null,f=zs,v,T,D=0,X=this._parts.length;D<X;D++)for(var j=this._parts[D],ot=1,Tt=j.length;ot<Tt;ot++){v=j[ot-1],T=j[ot];var qt=f(n,v,T,!0);qt<o&&(o=qt,c=f(n,v,T))}return c&&(c.distance=Math.sqrt(o)),c},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return rc(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(n,o){return o=o||this._defaultShape(),n=rt(n),o.push(n),this._bounds.extend(n),this.redraw()},_setLatLngs:function(n){this._bounds=new se,this._latlngs=this._convertLatLngs(n)},_defaultShape:function(){return fn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(n){for(var o=[],c=fn(n),f=0,v=n.length;f<v;f++)c?(o[f]=rt(n[f]),this._bounds.extend(o[f])):o[f]=this._convertLatLngs(n[f]);return o},_project:function(){var n=new vt;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,n),this._bounds.isValid()&&n.isValid()&&(this._rawPxBounds=n,this._updateBounds())},_updateBounds:function(){var n=this._clickTolerance(),o=new G(n,n);this._rawPxBounds&&(this._pxBounds=new vt([this._rawPxBounds.min.subtract(o),this._rawPxBounds.max.add(o)]))},_projectLatlngs:function(n,o,c){var f=n[0]instanceof q,v=n.length,T,D;if(f){for(D=[],T=0;T<v;T++)D[T]=this._map.latLngToLayerPoint(n[T]),c.extend(D[T]);o.push(D)}else for(T=0;T<v;T++)this._projectLatlngs(n[T],o,c)},_clipPoints:function(){var n=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}var o=this._parts,c,f,v,T,D,X,j;for(c=0,v=0,T=this._rings.length;c<T;c++)for(j=this._rings[c],f=0,D=j.length;f<D-1;f++)X=ic(j[f],j[f+1],n,f,!0),X&&(o[v]=o[v]||[],o[v].push(X[0]),(X[1]!==j[f+1]||f===D-2)&&(o[v].push(X[1]),v++))}},_simplifyPoints:function(){for(var n=this._parts,o=this.options.smoothFactor,c=0,f=n.length;c<f;c++)n[c]=tc(n[c],o)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(n,o){var c,f,v,T,D,X,j=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(c=0,T=this._parts.length;c<T;c++)for(X=this._parts[c],f=0,D=X.length,v=D-1;f<D;v=f++)if(!(!o&&f===0)&&ec(n,X[v],X[f])<=j)return!0;return!1}});function cd(n,o){return new Xn(n,o)}Xn._flat=sc;var qi=Xn.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Ql(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(n){var o=Xn.prototype._convertLatLngs.call(this,n),c=o.length;return c>=2&&o[0]instanceof q&&o[0].equals(o[c-1])&&o.pop(),o},_setLatLngs:function(n){Xn.prototype._setLatLngs.call(this,n),fn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return fn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var n=this._renderer._bounds,o=this.options.weight,c=new G(o,o);if(n=new vt(n.min.subtract(c),n.max.add(c)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}for(var f=0,v=this._rings.length,T;f<v;f++)T=Jl(this._rings[f],n,!0),T.length&&this._parts.push(T)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(n){var o=!1,c,f,v,T,D,X,j,ot;if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(T=0,j=this._parts.length;T<j;T++)for(c=this._parts[T],D=0,ot=c.length,X=ot-1;D<ot;X=D++)f=c[D],v=c[X],f.y>n.y!=v.y>n.y&&n.x<(v.x-f.x)*(n.y-f.y)/(v.y-f.y)+f.x&&(o=!o);return o||Xn.prototype._containsPoint.call(this,n,!0)}});function hd(n,o){return new qi(n,o)}var Zn=Wn.extend({initialize:function(n,o){S(this,o),this._layers={},n&&this.addData(n)},addData:function(n){var o=C(n)?n:n.features,c,f,v;if(o){for(c=0,f=o.length;c<f;c++)v=o[c],(v.geometries||v.geometry||v.features||v.coordinates)&&this.addData(v);return this}var T=this.options;if(T.filter&&!T.filter(n))return this;var D=Tr(n,T);return D?(D.feature=wr(n),D.defaultOptions=D.options,this.resetStyle(D),T.onEachFeature&&T.onEachFeature(n,D),this.addLayer(D)):this},resetStyle:function(n){return n===void 0?this.eachLayer(this.resetStyle,this):(n.options=s({},n.defaultOptions),this._setLayerStyle(n,this.options.style),this)},setStyle:function(n){return this.eachLayer(function(o){this._setLayerStyle(o,n)},this)},_setLayerStyle:function(n,o){n.setStyle&&(typeof o=="function"&&(o=o(n.feature)),n.setStyle(o))}});function Tr(n,o){var c=n.type==="Feature"?n.geometry:n,f=c?c.coordinates:null,v=[],T=o&&o.pointToLayer,D=o&&o.coordsToLatLng||Wo,X,j,ot,Tt;if(!f&&!c)return null;switch(c.type){case"Point":return X=D(f),lc(T,n,X,o);case"MultiPoint":for(ot=0,Tt=f.length;ot<Tt;ot++)X=D(f[ot]),v.push(lc(T,n,X,o));return new Wn(v);case"LineString":case"MultiLineString":return j=Er(f,c.type==="LineString"?0:1,D),new Xn(j,o);case"Polygon":case"MultiPolygon":return j=Er(f,c.type==="Polygon"?1:2,D),new qi(j,o);case"GeometryCollection":for(ot=0,Tt=c.geometries.length;ot<Tt;ot++){var qt=Tr({geometry:c.geometries[ot],type:"Feature",properties:n.properties},o);qt&&v.push(qt)}return new Wn(v);case"FeatureCollection":for(ot=0,Tt=c.features.length;ot<Tt;ot++){var ae=Tr(c.features[ot],o);ae&&v.push(ae)}return new Wn(v);default:throw new Error("Invalid GeoJSON object.")}}function lc(n,o,c,f){return n?n(o,c):new Mr(c,f&&f.markersInheritOptions&&f)}function Wo(n){return new q(n[1],n[0],n[2])}function Er(n,o,c){for(var f=[],v=0,T=n.length,D;v<T;v++)D=o?Er(n[v],o-1,c):(c||Wo)(n[v]),f.push(D);return f}function Xo(n,o){return n=rt(n),n.alt!==void 0?[_(n.lng,o),_(n.lat,o),_(n.alt,o)]:[_(n.lng,o),_(n.lat,o)]}function br(n,o,c,f){for(var v=[],T=0,D=n.length;T<D;T++)v.push(o?br(n[T],fn(n[T])?0:o-1,c,f):Xo(n[T],f));return!o&&c&&v.length>0&&v.push(v[0].slice()),v}function Yi(n,o){return n.feature?s({},n.feature,{geometry:o}):wr(o)}function wr(n){return n.type==="Feature"||n.type==="FeatureCollection"?n:{type:"Feature",properties:{},geometry:n}}var Zo={toGeoJSON:function(n){return Yi(this,{type:"Point",coordinates:Xo(this.getLatLng(),n)})}};Mr.include(Zo),Go.include(Zo),Sr.include(Zo),Xn.include({toGeoJSON:function(n){var o=!fn(this._latlngs),c=br(this._latlngs,o?1:0,!1,n);return Yi(this,{type:(o?"Multi":"")+"LineString",coordinates:c})}}),qi.include({toGeoJSON:function(n){var o=!fn(this._latlngs),c=o&&!fn(this._latlngs[0]),f=br(this._latlngs,c?2:o?1:0,!0,n);return o||(f=[f]),Yi(this,{type:(c?"Multi":"")+"Polygon",coordinates:f})}}),Xi.include({toMultiPoint:function(n){var o=[];return this.eachLayer(function(c){o.push(c.toGeoJSON(n).geometry.coordinates)}),Yi(this,{type:"MultiPoint",coordinates:o})},toGeoJSON:function(n){var o=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(o==="MultiPoint")return this.toMultiPoint(n);var c=o==="GeometryCollection",f=[];return this.eachLayer(function(v){if(v.toGeoJSON){var T=v.toGeoJSON(n);if(c)f.push(T.geometry);else{var D=wr(T);D.type==="FeatureCollection"?f.push.apply(f,D.features):f.push(D)}}}),c?Yi(this,{geometries:f,type:"GeometryCollection"}):{type:"FeatureCollection",features:f}}});function cc(n,o){return new Zn(n,o)}var ud=cc,Ar=Mn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(n,o,c){this._url=n,this._bounds=Yt(o),S(this,c)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Ht(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){Zt(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(n){return this.options.opacity=n,this._image&&this._updateOpacity(),this},setStyle:function(n){return n.opacity&&this.setOpacity(n.opacity),this},bringToFront:function(){return this._map&&Ot(this._image),this},bringToBack:function(){return this._map&&Me(this._image),this},setUrl:function(n){return this._url=n,this._image&&(this._image.src=n),this},setBounds:function(n){return this._bounds=Yt(n),this._map&&this._reset(),this},getEvents:function(){var n={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var n=this._url.tagName==="IMG",o=this._image=n?this._url:Bt("img");if(Ht(o,"leaflet-image-layer"),this._zoomAnimated&&Ht(o,"leaflet-zoom-animated"),this.options.className&&Ht(o,this.options.className),o.onselectstart=p,o.onmousemove=p,o.onload=l(this.fire,this,"load"),o.onerror=l(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(o.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),n){this._url=o.src;return}o.src=this._url,o.alt=this.options.alt},_animateZoom:function(n){var o=this._map.getZoomScale(n.zoom),c=this._map._latLngBoundsToNewLayerBounds(this._bounds,n.zoom,n.center).min;Ie(this._image,c,o)},_reset:function(){var n=this._image,o=new vt(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),c=o.getSize();de(n,o.min),n.style.width=c.x+"px",n.style.height=c.y+"px"},_updateOpacity:function(){ue(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var n=this.options.errorOverlayUrl;n&&this._url!==n&&(this._url=n,this._image.src=n)},getCenter:function(){return this._bounds.getCenter()}}),dd=function(n,o,c){return new Ar(n,o,c)},hc=Ar.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var n=this._url.tagName==="VIDEO",o=this._image=n?this._url:Bt("video");if(Ht(o,"leaflet-image-layer"),this._zoomAnimated&&Ht(o,"leaflet-zoom-animated"),this.options.className&&Ht(o,this.options.className),o.onselectstart=p,o.onmousemove=p,o.onloadeddata=l(this.fire,this,"load"),n){for(var c=o.getElementsByTagName("source"),f=[],v=0;v<c.length;v++)f.push(c[v].src);this._url=c.length>0?f:[o.src];return}C(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(o.style,"objectFit")&&(o.style.objectFit="fill"),o.autoplay=!!this.options.autoplay,o.loop=!!this.options.loop,o.muted=!!this.options.muted,o.playsInline=!!this.options.playsInline;for(var T=0;T<this._url.length;T++){var D=Bt("source");D.src=this._url[T],o.appendChild(D)}}});function fd(n,o,c){return new hc(n,o,c)}var uc=Ar.extend({_initImage:function(){var n=this._image=this._url;Ht(n,"leaflet-image-layer"),this._zoomAnimated&&Ht(n,"leaflet-zoom-animated"),this.options.className&&Ht(n,this.options.className),n.onselectstart=p,n.onmousemove=p}});function pd(n,o,c){return new uc(n,o,c)}var Dn=Mn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(n,o){n&&(n instanceof q||C(n))?(this._latlng=rt(n),S(this,o)):(S(this,n),this._source=o),this.options.content&&(this._content=this.options.content)},openOn:function(n){return n=arguments.length?n:this._source._map,n.hasLayer(this)||n.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(n){return this._map?this.close():(arguments.length?this._source=n:n=this._source,this._prepareOpen(),this.openOn(n._map)),this},onAdd:function(n){this._zoomAnimated=n._zoomAnimated,this._container||this._initLayout(),n._fadeAnimated&&ue(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),n._fadeAnimated&&ue(this._container,1),this.bringToFront(),this.options.interactive&&(Ht(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(n){n._fadeAnimated?(ue(this._container,0),this._removeTimeout=setTimeout(l(Zt,void 0,this._container),200)):Zt(this._container),this.options.interactive&&(Ae(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(n){return this._latlng=rt(n),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(n){return this._content=n,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var n={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Ot(this._container),this},bringToBack:function(){return this._map&&Me(this._container),this},_prepareOpen:function(n){var o=this._source;if(!o._map)return!1;if(o instanceof Wn){o=null;var c=this._source._layers;for(var f in c)if(c[f]._map){o=c[f];break}if(!o)return!1;this._source=o}if(!n)if(o.getCenter)n=o.getCenter();else if(o.getLatLng)n=o.getLatLng();else if(o.getBounds)n=o.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(n),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var n=this._contentNode,o=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof o=="string")n.innerHTML=o;else{for(;n.hasChildNodes();)n.removeChild(n.firstChild);n.appendChild(o)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var n=this._map.latLngToLayerPoint(this._latlng),o=it(this.options.offset),c=this._getAnchor();this._zoomAnimated?de(this._container,n.add(c)):o=o.add(n).add(c);var f=this._containerBottom=-o.y,v=this._containerLeft=-Math.round(this._containerWidth/2)+o.x;this._container.style.bottom=f+"px",this._container.style.left=v+"px"}},_getAnchor:function(){return[0,0]}});_e.include({_initOverlay:function(n,o,c,f){var v=o;return v instanceof n||(v=new n(f).setContent(o)),c&&v.setLatLng(c),v}}),Mn.include({_initOverlay:function(n,o,c,f){var v=c;return v instanceof n?(S(v,f),v._source=this):(v=o&&!f?o:new n(f,this),v.setContent(c)),v}});var Rr=Dn.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(n){return n=arguments.length?n:this._source._map,!n.hasLayer(this)&&n._popup&&n._popup.options.autoClose&&n.removeLayer(n._popup),n._popup=this,Dn.prototype.openOn.call(this,n)},onAdd:function(n){Dn.prototype.onAdd.call(this,n),n.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof hi||this._source.on("preclick",wi))},onRemove:function(n){Dn.prototype.onRemove.call(this,n),n.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof hi||this._source.off("preclick",wi))},getEvents:function(){var n=Dn.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(n.preclick=this.close),this.options.keepInView&&(n.moveend=this._adjustPan),n},_initLayout:function(){var n="leaflet-popup",o=this._container=Bt("div",n+" "+(this.options.className||"")+" leaflet-zoom-animated"),c=this._wrapper=Bt("div",n+"-content-wrapper",o);if(this._contentNode=Bt("div",n+"-content",c),Fs(o),Uo(this._contentNode),te(o,"contextmenu",wi),this._tipContainer=Bt("div",n+"-tip-container",o),this._tip=Bt("div",n+"-tip",this._tipContainer),this.options.closeButton){var f=this._closeButton=Bt("a",n+"-close-button",o);f.setAttribute("role","button"),f.setAttribute("aria-label","Close popup"),f.href="#close",f.innerHTML='<span aria-hidden="true">&#215;</span>',te(f,"click",function(v){We(v),this.close()},this)}},_updateLayout:function(){var n=this._contentNode,o=n.style;o.width="",o.whiteSpace="nowrap";var c=n.offsetWidth;c=Math.min(c,this.options.maxWidth),c=Math.max(c,this.options.minWidth),o.width=c+1+"px",o.whiteSpace="",o.height="";var f=n.offsetHeight,v=this.options.maxHeight,T="leaflet-popup-scrolled";v&&f>v?(o.height=v+"px",Ht(n,T)):Ae(n,T),this._containerWidth=this._container.offsetWidth},_animateZoom:function(n){var o=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center),c=this._getAnchor();de(this._container,o.add(c))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var n=this._map,o=parseInt(me(this._container,"marginBottom"),10)||0,c=this._container.offsetHeight+o,f=this._containerWidth,v=new G(this._containerLeft,-c-this._containerBottom);v._add(xn(this._container));var T=n.layerPointToContainerPoint(v),D=it(this.options.autoPanPadding),X=it(this.options.autoPanPaddingTopLeft||D),j=it(this.options.autoPanPaddingBottomRight||D),ot=n.getSize(),Tt=0,qt=0;T.x+f+j.x>ot.x&&(Tt=T.x+f-ot.x+j.x),T.x-Tt-X.x<0&&(Tt=T.x-X.x),T.y+c+j.y>ot.y&&(qt=T.y+c-ot.y+j.y),T.y-qt-X.y<0&&(qt=T.y-X.y),(Tt||qt)&&(this.options.keepInView&&(this._autopanning=!0),n.fire("autopanstart").panBy([Tt,qt]))}},_getAnchor:function(){return it(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),md=function(n,o){return new Rr(n,o)};_e.mergeOptions({closePopupOnClick:!0}),_e.include({openPopup:function(n,o,c){return this._initOverlay(Rr,n,o,c).openOn(this),this},closePopup:function(n){return n=arguments.length?n:this._popup,n&&n.close(),this}}),Mn.include({bindPopup:function(n,o){return this._popup=this._initOverlay(Rr,this._popup,n,o),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(n){return this._popup&&(this instanceof Wn||(this._popup._source=this),this._popup._prepareOpen(n||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(n){return this._popup&&this._popup.setContent(n),this},getPopup:function(){return this._popup},_openPopup:function(n){if(!(!this._popup||!this._map)){Ai(n);var o=n.layer||n.target;if(this._popup._source===o&&!(o instanceof hi)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(n.latlng);return}this._popup._source=o,this.openPopup(n.latlng)}},_movePopup:function(n){this._popup.setLatLng(n.latlng)},_onKeyPress:function(n){n.originalEvent.keyCode===13&&this._openPopup(n)}});var Cr=Dn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(n){Dn.prototype.onAdd.call(this,n),this.setOpacity(this.options.opacity),n.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(n){Dn.prototype.onRemove.call(this,n),n.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var n=Dn.prototype.getEvents.call(this);return this.options.permanent||(n.preclick=this.close),n},_initLayout:function(){var n="leaflet-tooltip",o=n+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=Bt("div",o),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+u(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(n){var o,c,f=this._map,v=this._container,T=f.latLngToContainerPoint(f.getCenter()),D=f.layerPointToContainerPoint(n),X=this.options.direction,j=v.offsetWidth,ot=v.offsetHeight,Tt=it(this.options.offset),qt=this._getAnchor();X==="top"?(o=j/2,c=ot):X==="bottom"?(o=j/2,c=0):X==="center"?(o=j/2,c=ot/2):X==="right"?(o=0,c=ot/2):X==="left"?(o=j,c=ot/2):D.x<T.x?(X="right",o=0,c=ot/2):(X="left",o=j+(Tt.x+qt.x)*2,c=ot/2),n=n.subtract(it(o,c,!0)).add(Tt).add(qt),Ae(v,"leaflet-tooltip-right"),Ae(v,"leaflet-tooltip-left"),Ae(v,"leaflet-tooltip-top"),Ae(v,"leaflet-tooltip-bottom"),Ht(v,"leaflet-tooltip-"+X),de(v,n)},_updatePosition:function(){var n=this._map.latLngToLayerPoint(this._latlng);this._setPosition(n)},setOpacity:function(n){this.options.opacity=n,this._container&&ue(this._container,n)},_animateZoom:function(n){var o=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center);this._setPosition(o)},_getAnchor:function(){return it(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),_d=function(n,o){return new Cr(n,o)};_e.include({openTooltip:function(n,o,c){return this._initOverlay(Cr,n,o,c).openOn(this),this},closeTooltip:function(n){return n.close(),this}}),Mn.include({bindTooltip:function(n,o){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Cr,this._tooltip,n,o),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(n){if(!(!n&&this._tooltipHandlersAdded)){var o=n?"off":"on",c={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?c.add=this._openTooltip:(c.mouseover=this._openTooltip,c.mouseout=this.closeTooltip,c.click=this._openTooltip,this._map?this._addFocusListeners():c.add=this._addFocusListeners),this._tooltip.options.sticky&&(c.mousemove=this._moveTooltip),this[o](c),this._tooltipHandlersAdded=!n}},openTooltip:function(n){return this._tooltip&&(this instanceof Wn||(this._tooltip._source=this),this._tooltip._prepareOpen(n)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(n){return this._tooltip&&this._tooltip.setContent(n),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(n){var o=typeof n.getElement=="function"&&n.getElement();o&&(te(o,"focus",function(){this._tooltip._source=n,this.openTooltip()},this),te(o,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(n){var o=typeof n.getElement=="function"&&n.getElement();o&&o.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(n){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var o=this;this._map.once("moveend",function(){o._openOnceFlag=!1,o._openTooltip(n)});return}this._tooltip._source=n.layer||n.target,this.openTooltip(this._tooltip.options.sticky?n.latlng:void 0)}},_moveTooltip:function(n){var o=n.latlng,c,f;this._tooltip.options.sticky&&n.originalEvent&&(c=this._map.mouseEventToContainerPoint(n.originalEvent),f=this._map.containerPointToLayerPoint(c),o=this._map.layerPointToLatLng(f)),this._tooltip.setLatLng(o)}});var dc=Zi.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(n){var o=n&&n.tagName==="DIV"?n:document.createElement("div"),c=this.options;if(c.html instanceof Element?(xe(o),o.appendChild(c.html)):o.innerHTML=c.html!==!1?c.html:"",c.bgPos){var f=it(c.bgPos);o.style.backgroundPosition=-f.x+"px "+-f.y+"px"}return this._setIconStyles(o,"icon"),o},createShadow:function(){return null}});function gd(n){return new dc(n)}Zi.Default=ks;var Hs=Mn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:It.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(n){S(this,n)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(n){n._addZoomLimit(this)},onRemove:function(n){this._removeAllTiles(),Zt(this._container),n._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Ot(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Me(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(n){return this.options.opacity=n,this._updateOpacity(),this},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var n=this._clampZoom(this._map.getZoom());n!==this._tileZoom&&(this._tileZoom=n,this._updateLevels()),this._update()}return this},getEvents:function(){var n={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=d(this._onMoveEnd,this.options.updateInterval,this)),n.move=this._onMove),this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},createTile:function(){return document.createElement("div")},getTileSize:function(){var n=this.options.tileSize;return n instanceof G?n:new G(n,n)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(n){for(var o=this.getPane().children,c=-n(-1/0,1/0),f=0,v=o.length,T;f<v;f++)T=o[f].style.zIndex,o[f]!==this._container&&T&&(c=n(c,+T));isFinite(c)&&(this.options.zIndex=c+n(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!It.ielt9){ue(this._container,this.options.opacity);var n=+new Date,o=!1,c=!1;for(var f in this._tiles){var v=this._tiles[f];if(!(!v.current||!v.loaded)){var T=Math.min(1,(n-v.loaded)/200);ue(v.el,T),T<1?o=!0:(v.active?c=!0:this._onOpaqueTile(v),v.active=!0)}}c&&!this._noPrune&&this._pruneTiles(),o&&(tt(this._fadeFrame),this._fadeFrame=N(this._updateOpacity,this))}},_onOpaqueTile:p,_initContainer:function(){this._container||(this._container=Bt("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var n=this._tileZoom,o=this.options.maxZoom;if(n!==void 0){for(var c in this._levels)c=Number(c),this._levels[c].el.children.length||c===n?(this._levels[c].el.style.zIndex=o-Math.abs(n-c),this._onUpdateLevel(c)):(Zt(this._levels[c].el),this._removeTilesAtZoom(c),this._onRemoveLevel(c),delete this._levels[c]);var f=this._levels[n],v=this._map;return f||(f=this._levels[n]={},f.el=Bt("div","leaflet-tile-container leaflet-zoom-animated",this._container),f.el.style.zIndex=o,f.origin=v.project(v.unproject(v.getPixelOrigin()),n).round(),f.zoom=n,this._setZoomTransform(f,v.getCenter(),v.getZoom()),p(f.el.offsetWidth),this._onCreateLevel(f)),this._level=f,f}},_onUpdateLevel:p,_onRemoveLevel:p,_onCreateLevel:p,_pruneTiles:function(){if(this._map){var n,o,c=this._map.getZoom();if(c>this.options.maxZoom||c<this.options.minZoom){this._removeAllTiles();return}for(n in this._tiles)o=this._tiles[n],o.retain=o.current;for(n in this._tiles)if(o=this._tiles[n],o.current&&!o.active){var f=o.coords;this._retainParent(f.x,f.y,f.z,f.z-5)||this._retainChildren(f.x,f.y,f.z,f.z+2)}for(n in this._tiles)this._tiles[n].retain||this._removeTile(n)}},_removeTilesAtZoom:function(n){for(var o in this._tiles)this._tiles[o].coords.z===n&&this._removeTile(o)},_removeAllTiles:function(){for(var n in this._tiles)this._removeTile(n)},_invalidateAll:function(){for(var n in this._levels)Zt(this._levels[n].el),this._onRemoveLevel(Number(n)),delete this._levels[n];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(n,o,c,f){var v=Math.floor(n/2),T=Math.floor(o/2),D=c-1,X=new G(+v,+T);X.z=+D;var j=this._tileCoordsToKey(X),ot=this._tiles[j];return ot&&ot.active?(ot.retain=!0,!0):(ot&&ot.loaded&&(ot.retain=!0),D>f?this._retainParent(v,T,D,f):!1)},_retainChildren:function(n,o,c,f){for(var v=2*n;v<2*n+2;v++)for(var T=2*o;T<2*o+2;T++){var D=new G(v,T);D.z=c+1;var X=this._tileCoordsToKey(D),j=this._tiles[X];if(j&&j.active){j.retain=!0;continue}else j&&j.loaded&&(j.retain=!0);c+1<f&&this._retainChildren(v,T,c+1,f)}},_resetView:function(n){var o=n&&(n.pinch||n.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),o,o)},_animateZoom:function(n){this._setView(n.center,n.zoom,!0,n.noUpdate)},_clampZoom:function(n){var o=this.options;return o.minNativeZoom!==void 0&&n<o.minNativeZoom?o.minNativeZoom:o.maxNativeZoom!==void 0&&o.maxNativeZoom<n?o.maxNativeZoom:n},_setView:function(n,o,c,f){var v=Math.round(o);this.options.maxZoom!==void 0&&v>this.options.maxZoom||this.options.minZoom!==void 0&&v<this.options.minZoom?v=void 0:v=this._clampZoom(v);var T=this.options.updateWhenZooming&&v!==this._tileZoom;(!f||T)&&(this._tileZoom=v,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),v!==void 0&&this._update(n),c||this._pruneTiles(),this._noPrune=!!c),this._setZoomTransforms(n,o)},_setZoomTransforms:function(n,o){for(var c in this._levels)this._setZoomTransform(this._levels[c],n,o)},_setZoomTransform:function(n,o,c){var f=this._map.getZoomScale(c,n.zoom),v=n.origin.multiplyBy(f).subtract(this._map._getNewPixelOrigin(o,c)).round();It.any3d?Ie(n.el,v,f):de(n.el,v)},_resetGrid:function(){var n=this._map,o=n.options.crs,c=this._tileSize=this.getTileSize(),f=this._tileZoom,v=this._map.getPixelWorldBounds(this._tileZoom);v&&(this._globalTileRange=this._pxBoundsToTileRange(v)),this._wrapX=o.wrapLng&&!this.options.noWrap&&[Math.floor(n.project([0,o.wrapLng[0]],f).x/c.x),Math.ceil(n.project([0,o.wrapLng[1]],f).x/c.y)],this._wrapY=o.wrapLat&&!this.options.noWrap&&[Math.floor(n.project([o.wrapLat[0],0],f).y/c.x),Math.ceil(n.project([o.wrapLat[1],0],f).y/c.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(n){var o=this._map,c=o._animatingZoom?Math.max(o._animateToZoom,o.getZoom()):o.getZoom(),f=o.getZoomScale(c,this._tileZoom),v=o.project(n,this._tileZoom).floor(),T=o.getSize().divideBy(f*2);return new vt(v.subtract(T),v.add(T))},_update:function(n){var o=this._map;if(o){var c=this._clampZoom(o.getZoom());if(n===void 0&&(n=o.getCenter()),this._tileZoom!==void 0){var f=this._getTiledPixelBounds(n),v=this._pxBoundsToTileRange(f),T=v.getCenter(),D=[],X=this.options.keepBuffer,j=new vt(v.getBottomLeft().subtract([X,-X]),v.getTopRight().add([X,-X]));if(!(isFinite(v.min.x)&&isFinite(v.min.y)&&isFinite(v.max.x)&&isFinite(v.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var ot in this._tiles){var Tt=this._tiles[ot].coords;(Tt.z!==this._tileZoom||!j.contains(new G(Tt.x,Tt.y)))&&(this._tiles[ot].current=!1)}if(Math.abs(c-this._tileZoom)>1){this._setView(n,c);return}for(var qt=v.min.y;qt<=v.max.y;qt++)for(var ae=v.min.x;ae<=v.max.x;ae++){var Ye=new G(ae,qt);if(Ye.z=this._tileZoom,!!this._isValidTile(Ye)){var ze=this._tiles[this._tileCoordsToKey(Ye)];ze?ze.current=!0:D.push(Ye)}}if(D.sort(function(nn,ji){return nn.distanceTo(T)-ji.distanceTo(T)}),D.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var pn=document.createDocumentFragment();for(ae=0;ae<D.length;ae++)this._addTile(D[ae],pn);this._level.el.appendChild(pn)}}}},_isValidTile:function(n){var o=this._map.options.crs;if(!o.infinite){var c=this._globalTileRange;if(!o.wrapLng&&(n.x<c.min.x||n.x>c.max.x)||!o.wrapLat&&(n.y<c.min.y||n.y>c.max.y))return!1}if(!this.options.bounds)return!0;var f=this._tileCoordsToBounds(n);return Yt(this.options.bounds).overlaps(f)},_keyToBounds:function(n){return this._tileCoordsToBounds(this._keyToTileCoords(n))},_tileCoordsToNwSe:function(n){var o=this._map,c=this.getTileSize(),f=n.scaleBy(c),v=f.add(c),T=o.unproject(f,n.z),D=o.unproject(v,n.z);return[T,D]},_tileCoordsToBounds:function(n){var o=this._tileCoordsToNwSe(n),c=new se(o[0],o[1]);return this.options.noWrap||(c=this._map.wrapLatLngBounds(c)),c},_tileCoordsToKey:function(n){return n.x+":"+n.y+":"+n.z},_keyToTileCoords:function(n){var o=n.split(":"),c=new G(+o[0],+o[1]);return c.z=+o[2],c},_removeTile:function(n){var o=this._tiles[n];o&&(Zt(o.el),delete this._tiles[n],this.fire("tileunload",{tile:o.el,coords:this._keyToTileCoords(n)}))},_initTile:function(n){Ht(n,"leaflet-tile");var o=this.getTileSize();n.style.width=o.x+"px",n.style.height=o.y+"px",n.onselectstart=p,n.onmousemove=p,It.ielt9&&this.options.opacity<1&&ue(n,this.options.opacity)},_addTile:function(n,o){var c=this._getTilePos(n),f=this._tileCoordsToKey(n),v=this.createTile(this._wrapCoords(n),l(this._tileReady,this,n));this._initTile(v),this.createTile.length<2&&N(l(this._tileReady,this,n,null,v)),de(v,c),this._tiles[f]={el:v,coords:n,current:!0},o.appendChild(v),this.fire("tileloadstart",{tile:v,coords:n})},_tileReady:function(n,o,c){o&&this.fire("tileerror",{error:o,tile:c,coords:n});var f=this._tileCoordsToKey(n);c=this._tiles[f],c&&(c.loaded=+new Date,this._map._fadeAnimated?(ue(c.el,0),tt(this._fadeFrame),this._fadeFrame=N(this._updateOpacity,this)):(c.active=!0,this._pruneTiles()),o||(Ht(c.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:c.el,coords:n})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),It.ielt9||!this._map._fadeAnimated?N(this._pruneTiles,this):setTimeout(l(this._pruneTiles,this),250)))},_getTilePos:function(n){return n.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(n){var o=new G(this._wrapX?m(n.x,this._wrapX):n.x,this._wrapY?m(n.y,this._wrapY):n.y);return o.z=n.z,o},_pxBoundsToTileRange:function(n){var o=this.getTileSize();return new vt(n.min.unscaleBy(o).floor(),n.max.unscaleBy(o).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var n in this._tiles)if(!this._tiles[n].loaded)return!1;return!0}});function vd(n){return new Hs(n)}var Ki=Hs.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(n,o){this._url=n,o=S(this,o),o.detectRetina&&It.retina&&o.maxZoom>0?(o.tileSize=Math.floor(o.tileSize/2),o.zoomReverse?(o.zoomOffset--,o.minZoom=Math.min(o.maxZoom,o.minZoom+1)):(o.zoomOffset++,o.maxZoom=Math.max(o.minZoom,o.maxZoom-1)),o.minZoom=Math.max(0,o.minZoom)):o.zoomReverse?o.minZoom=Math.min(o.maxZoom,o.minZoom):o.maxZoom=Math.max(o.minZoom,o.maxZoom),typeof o.subdomains=="string"&&(o.subdomains=o.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(n,o){return this._url===n&&o===void 0&&(o=!0),this._url=n,o||this.redraw(),this},createTile:function(n,o){var c=document.createElement("img");return te(c,"load",l(this._tileOnLoad,this,o,c)),te(c,"error",l(this._tileOnError,this,o,c)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(c.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(c.referrerPolicy=this.options.referrerPolicy),c.alt="",c.src=this.getTileUrl(n),c},getTileUrl:function(n){var o={r:It.retina?"@2x":"",s:this._getSubdomain(n),x:n.x,y:n.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var c=this._globalTileRange.max.y-n.y;this.options.tms&&(o.y=c),o["-y"]=c}return I(this._url,s(o,this.options))},_tileOnLoad:function(n,o){It.ielt9?setTimeout(l(n,this,null,o),0):n(null,o)},_tileOnError:function(n,o,c){var f=this.options.errorTileUrl;f&&o.getAttribute("src")!==f&&(o.src=f),n(c,o)},_onTileRemove:function(n){n.tile.onload=null},_getZoomForUrl:function(){var n=this._tileZoom,o=this.options.maxZoom,c=this.options.zoomReverse,f=this.options.zoomOffset;return c&&(n=o-n),n+f},_getSubdomain:function(n){var o=Math.abs(n.x+n.y)%this.options.subdomains.length;return this.options.subdomains[o]},_abortLoading:function(){var n,o;for(n in this._tiles)if(this._tiles[n].coords.z!==this._tileZoom&&(o=this._tiles[n].el,o.onload=p,o.onerror=p,!o.complete)){o.src=O;var c=this._tiles[n].coords;Zt(o),delete this._tiles[n],this.fire("tileabort",{tile:o,coords:c})}},_removeTile:function(n){var o=this._tiles[n];if(o)return o.el.setAttribute("src",O),Hs.prototype._removeTile.call(this,n)},_tileReady:function(n,o,c){if(!(!this._map||c&&c.getAttribute("src")===O))return Hs.prototype._tileReady.call(this,n,o,c)}});function fc(n,o){return new Ki(n,o)}var pc=Ki.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(n,o){this._url=n;var c=s({},this.defaultWmsParams);for(var f in o)f in this.options||(c[f]=o[f]);o=S(this,o);var v=o.detectRetina&&It.retina?2:1,T=this.getTileSize();c.width=T.x*v,c.height=T.y*v,this.wmsParams=c},onAdd:function(n){this._crs=this.options.crs||n.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var o=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[o]=this._crs.code,Ki.prototype.onAdd.call(this,n)},getTileUrl:function(n){var o=this._tileCoordsToNwSe(n),c=this._crs,f=zt(c.project(o[0]),c.project(o[1])),v=f.min,T=f.max,D=(this._wmsVersion>=1.3&&this._crs===oc?[v.y,v.x,T.y,T.x]:[v.x,v.y,T.x,T.y]).join(","),X=Ki.prototype.getTileUrl.call(this,n);return X+y(this.wmsParams,X,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+D},setParams:function(n,o){return s(this.wmsParams,n),o||this.redraw(),this}});function xd(n,o){return new pc(n,o)}Ki.WMS=pc,fc.wms=xd;var qn=Mn.extend({options:{padding:.1},initialize:function(n){S(this,n),u(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),Ht(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var n={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(n.zoomanim=this._onAnimZoom),n},_onAnimZoom:function(n){this._updateTransform(n.center,n.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(n,o){var c=this._map.getZoomScale(o,this._zoom),f=this._map.getSize().multiplyBy(.5+this.options.padding),v=this._map.project(this._center,o),T=f.multiplyBy(-c).add(v).subtract(this._map._getNewPixelOrigin(n,o));It.any3d?Ie(this._container,T,c):de(this._container,T)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var n in this._layers)this._layers[n]._reset()},_onZoomEnd:function(){for(var n in this._layers)this._layers[n]._project()},_updatePaths:function(){for(var n in this._layers)this._layers[n]._update()},_update:function(){var n=this.options.padding,o=this._map.getSize(),c=this._map.containerPointToLayerPoint(o.multiplyBy(-n)).round();this._bounds=new vt(c,c.add(o.multiplyBy(1+n*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),mc=qn.extend({options:{tolerance:0},getEvents:function(){var n=qn.prototype.getEvents.call(this);return n.viewprereset=this._onViewPreReset,n},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){qn.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var n=this._container=document.createElement("canvas");te(n,"mousemove",this._onMouseMove,this),te(n,"click dblclick mousedown mouseup contextmenu",this._onClick,this),te(n,"mouseout",this._handleMouseOut,this),n._leaflet_disable_events=!0,this._ctx=n.getContext("2d")},_destroyContainer:function(){tt(this._redrawRequest),delete this._ctx,Zt(this._container),Ce(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var n;this._redrawBounds=null;for(var o in this._layers)n=this._layers[o],n._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){qn.prototype._update.call(this);var n=this._bounds,o=this._container,c=n.getSize(),f=It.retina?2:1;de(o,n.min),o.width=f*c.x,o.height=f*c.y,o.style.width=c.x+"px",o.style.height=c.y+"px",It.retina&&this._ctx.scale(2,2),this._ctx.translate(-n.min.x,-n.min.y),this.fire("update")}},_reset:function(){qn.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(n){this._updateDashArray(n),this._layers[u(n)]=n;var o=n._order={layer:n,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=o),this._drawLast=o,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(n){this._requestRedraw(n)},_removePath:function(n){var o=n._order,c=o.next,f=o.prev;c?c.prev=f:this._drawLast=f,f?f.next=c:this._drawFirst=c,delete n._order,delete this._layers[u(n)],this._requestRedraw(n)},_updatePath:function(n){this._extendRedrawBounds(n),n._project(),n._update(),this._requestRedraw(n)},_updateStyle:function(n){this._updateDashArray(n),this._requestRedraw(n)},_updateDashArray:function(n){if(typeof n.options.dashArray=="string"){var o=n.options.dashArray.split(/[, ]+/),c=[],f,v;for(v=0;v<o.length;v++){if(f=Number(o[v]),isNaN(f))return;c.push(f)}n.options._dashArray=c}else n.options._dashArray=n.options.dashArray},_requestRedraw:function(n){this._map&&(this._extendRedrawBounds(n),this._redrawRequest=this._redrawRequest||N(this._redraw,this))},_extendRedrawBounds:function(n){if(n._pxBounds){var o=(n.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new vt,this._redrawBounds.extend(n._pxBounds.min.subtract([o,o])),this._redrawBounds.extend(n._pxBounds.max.add([o,o]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var n=this._redrawBounds;if(n){var o=n.getSize();this._ctx.clearRect(n.min.x,n.min.y,o.x,o.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var n,o=this._redrawBounds;if(this._ctx.save(),o){var c=o.getSize();this._ctx.beginPath(),this._ctx.rect(o.min.x,o.min.y,c.x,c.y),this._ctx.clip()}this._drawing=!0;for(var f=this._drawFirst;f;f=f.next)n=f.layer,(!o||n._pxBounds&&n._pxBounds.intersects(o))&&n._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(n,o){if(this._drawing){var c,f,v,T,D=n._parts,X=D.length,j=this._ctx;if(X){for(j.beginPath(),c=0;c<X;c++){for(f=0,v=D[c].length;f<v;f++)T=D[c][f],j[f?"lineTo":"moveTo"](T.x,T.y);o&&j.closePath()}this._fillStroke(j,n)}}},_updateCircle:function(n){if(!(!this._drawing||n._empty())){var o=n._point,c=this._ctx,f=Math.max(Math.round(n._radius),1),v=(Math.max(Math.round(n._radiusY),1)||f)/f;v!==1&&(c.save(),c.scale(1,v)),c.beginPath(),c.arc(o.x,o.y/v,f,0,Math.PI*2,!1),v!==1&&c.restore(),this._fillStroke(c,n)}},_fillStroke:function(n,o){var c=o.options;c.fill&&(n.globalAlpha=c.fillOpacity,n.fillStyle=c.fillColor||c.color,n.fill(c.fillRule||"evenodd")),c.stroke&&c.weight!==0&&(n.setLineDash&&n.setLineDash(o.options&&o.options._dashArray||[]),n.globalAlpha=c.opacity,n.lineWidth=c.weight,n.strokeStyle=c.color,n.lineCap=c.lineCap,n.lineJoin=c.lineJoin,n.stroke())},_onClick:function(n){for(var o=this._map.mouseEventToLayerPoint(n),c,f,v=this._drawFirst;v;v=v.next)c=v.layer,c.options.interactive&&c._containsPoint(o)&&(!(n.type==="click"||n.type==="preclick")||!this._map._draggableMoved(c))&&(f=c);this._fireEvent(f?[f]:!1,n)},_onMouseMove:function(n){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var o=this._map.mouseEventToLayerPoint(n);this._handleMouseHover(n,o)}},_handleMouseOut:function(n){var o=this._hoveredLayer;o&&(Ae(this._container,"leaflet-interactive"),this._fireEvent([o],n,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(n,o){if(!this._mouseHoverThrottled){for(var c,f,v=this._drawFirst;v;v=v.next)c=v.layer,c.options.interactive&&c._containsPoint(o)&&(f=c);f!==this._hoveredLayer&&(this._handleMouseOut(n),f&&(Ht(this._container,"leaflet-interactive"),this._fireEvent([f],n,"mouseover"),this._hoveredLayer=f)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,n),this._mouseHoverThrottled=!0,setTimeout(l(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(n,o,c){this._map._fireDOMEvent(o,c||o.type,n)},_bringToFront:function(n){var o=n._order;if(o){var c=o.next,f=o.prev;if(c)c.prev=f;else return;f?f.next=c:c&&(this._drawFirst=c),o.prev=this._drawLast,this._drawLast.next=o,o.next=null,this._drawLast=o,this._requestRedraw(n)}},_bringToBack:function(n){var o=n._order;if(o){var c=o.next,f=o.prev;if(f)f.next=c;else return;c?c.prev=f:f&&(this._drawLast=f),o.prev=null,o.next=this._drawFirst,this._drawFirst.prev=o,this._drawFirst=o,this._requestRedraw(n)}}});function _c(n){return It.canvas?new mc(n):null}var Vs=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(n){return document.createElement("<lvml:"+n+' class="lvml">')}}catch{}return function(n){return document.createElement("<"+n+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),yd={_initContainer:function(){this._container=Bt("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(qn.prototype._update.call(this),this.fire("update"))},_initPath:function(n){var o=n._container=Vs("shape");Ht(o,"leaflet-vml-shape "+(this.options.className||"")),o.coordsize="1 1",n._path=Vs("path"),o.appendChild(n._path),this._updateStyle(n),this._layers[u(n)]=n},_addPath:function(n){var o=n._container;this._container.appendChild(o),n.options.interactive&&n.addInteractiveTarget(o)},_removePath:function(n){var o=n._container;Zt(o),n.removeInteractiveTarget(o),delete this._layers[u(n)]},_updateStyle:function(n){var o=n._stroke,c=n._fill,f=n.options,v=n._container;v.stroked=!!f.stroke,v.filled=!!f.fill,f.stroke?(o||(o=n._stroke=Vs("stroke")),v.appendChild(o),o.weight=f.weight+"px",o.color=f.color,o.opacity=f.opacity,f.dashArray?o.dashStyle=C(f.dashArray)?f.dashArray.join(" "):f.dashArray.replace(/( *, *)/g," "):o.dashStyle="",o.endcap=f.lineCap.replace("butt","flat"),o.joinstyle=f.lineJoin):o&&(v.removeChild(o),n._stroke=null),f.fill?(c||(c=n._fill=Vs("fill")),v.appendChild(c),c.color=f.fillColor||f.color,c.opacity=f.fillOpacity):c&&(v.removeChild(c),n._fill=null)},_updateCircle:function(n){var o=n._point.round(),c=Math.round(n._radius),f=Math.round(n._radiusY||c);this._setPath(n,n._empty()?"M0 0":"AL "+o.x+","+o.y+" "+c+","+f+" 0,"+65535*360)},_setPath:function(n,o){n._path.v=o},_bringToFront:function(n){Ot(n._container)},_bringToBack:function(n){Me(n._container)}},Pr=It.vml?Vs:kt,Gs=qn.extend({_initContainer:function(){this._container=Pr("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Pr("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){Zt(this._container),Ce(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){qn.prototype._update.call(this);var n=this._bounds,o=n.getSize(),c=this._container;(!this._svgSize||!this._svgSize.equals(o))&&(this._svgSize=o,c.setAttribute("width",o.x),c.setAttribute("height",o.y)),de(c,n.min),c.setAttribute("viewBox",[n.min.x,n.min.y,o.x,o.y].join(" ")),this.fire("update")}},_initPath:function(n){var o=n._path=Pr("path");n.options.className&&Ht(o,n.options.className),n.options.interactive&&Ht(o,"leaflet-interactive"),this._updateStyle(n),this._layers[u(n)]=n},_addPath:function(n){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(n._path),n.addInteractiveTarget(n._path)},_removePath:function(n){Zt(n._path),n.removeInteractiveTarget(n._path),delete this._layers[u(n)]},_updatePath:function(n){n._project(),n._update()},_updateStyle:function(n){var o=n._path,c=n.options;o&&(c.stroke?(o.setAttribute("stroke",c.color),o.setAttribute("stroke-opacity",c.opacity),o.setAttribute("stroke-width",c.weight),o.setAttribute("stroke-linecap",c.lineCap),o.setAttribute("stroke-linejoin",c.lineJoin),c.dashArray?o.setAttribute("stroke-dasharray",c.dashArray):o.removeAttribute("stroke-dasharray"),c.dashOffset?o.setAttribute("stroke-dashoffset",c.dashOffset):o.removeAttribute("stroke-dashoffset")):o.setAttribute("stroke","none"),c.fill?(o.setAttribute("fill",c.fillColor||c.color),o.setAttribute("fill-opacity",c.fillOpacity),o.setAttribute("fill-rule",c.fillRule||"evenodd")):o.setAttribute("fill","none"))},_updatePoly:function(n,o){this._setPath(n,pe(n._parts,o))},_updateCircle:function(n){var o=n._point,c=Math.max(Math.round(n._radius),1),f=Math.max(Math.round(n._radiusY),1)||c,v="a"+c+","+f+" 0 1,0 ",T=n._empty()?"M0 0":"M"+(o.x-c)+","+o.y+v+c*2+",0 "+v+-c*2+",0 ";this._setPath(n,T)},_setPath:function(n,o){n._path.setAttribute("d",o)},_bringToFront:function(n){Ot(n._path)},_bringToBack:function(n){Me(n._path)}});It.vml&&Gs.include(yd);function gc(n){return It.svg||It.vml?new Gs(n):null}_e.include({getRenderer:function(n){var o=n.options.renderer||this._getPaneRenderer(n.options.pane)||this.options.renderer||this._renderer;return o||(o=this._renderer=this._createRenderer()),this.hasLayer(o)||this.addLayer(o),o},_getPaneRenderer:function(n){if(n==="overlayPane"||n===void 0)return!1;var o=this._paneRenderers[n];return o===void 0&&(o=this._createRenderer({pane:n}),this._paneRenderers[n]=o),o},_createRenderer:function(n){return this.options.preferCanvas&&_c(n)||gc(n)}});var vc=qi.extend({initialize:function(n,o){qi.prototype.initialize.call(this,this._boundsToLatLngs(n),o)},setBounds:function(n){return this.setLatLngs(this._boundsToLatLngs(n))},_boundsToLatLngs:function(n){return n=Yt(n),[n.getSouthWest(),n.getNorthWest(),n.getNorthEast(),n.getSouthEast()]}});function Md(n,o){return new vc(n,o)}Gs.create=Pr,Gs.pointsToPath=pe,Zn.geometryToLayer=Tr,Zn.coordsToLatLng=Wo,Zn.coordsToLatLngs=Er,Zn.latLngToCoords=Xo,Zn.latLngsToCoords=br,Zn.getFeature=Yi,Zn.asFeature=wr,_e.mergeOptions({boxZoom:!0});var xc=In.extend({initialize:function(n){this._map=n,this._container=n._container,this._pane=n._panes.overlayPane,this._resetStateTimeout=0,n.on("unload",this._destroy,this)},addHooks:function(){te(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Ce(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){Zt(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(n){if(!n.shiftKey||n.which!==1&&n.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),an(),Ao(),this._startPoint=this._map.mouseEventToContainerPoint(n),te(document,{contextmenu:Ai,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(n){this._moved||(this._moved=!0,this._box=Bt("div","leaflet-zoom-box",this._container),Ht(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(n);var o=new vt(this._point,this._startPoint),c=o.getSize();de(this._box,o.min),this._box.style.width=c.x+"px",this._box.style.height=c.y+"px"},_finish:function(){this._moved&&(Zt(this._box),Ae(this._container,"leaflet-crosshair")),Us(),Ro(),Ce(document,{contextmenu:Ai,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(n){if(!(n.which!==1&&n.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(l(this._resetState,this),0);var o=new se(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(o).fire("boxzoomend",{boxZoomBounds:o})}},_onKeyDown:function(n){n.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});_e.addInitHook("addHandler","boxZoom",xc),_e.mergeOptions({doubleClickZoom:!0});var yc=In.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(n){var o=this._map,c=o.getZoom(),f=o.options.zoomDelta,v=n.originalEvent.shiftKey?c-f:c+f;o.options.doubleClickZoom==="center"?o.setZoom(v):o.setZoomAround(n.containerPoint,v)}});_e.addInitHook("addHandler","doubleClickZoom",yc),_e.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Mc=In.extend({addHooks:function(){if(!this._draggable){var n=this._map;this._draggable=new ci(n._mapPane,n._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),n.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),n.on("zoomend",this._onZoomEnd,this),n.whenReady(this._onZoomEnd,this))}Ht(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Ae(this._map._container,"leaflet-grab"),Ae(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var n=this._map;if(n._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var o=Yt(this._map.options.maxBounds);this._offsetLimit=zt(this._map.latLngToContainerPoint(o.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(o.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;n.fire("movestart").fire("dragstart"),n.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(n){if(this._map.options.inertia){var o=this._lastTime=+new Date,c=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(c),this._times.push(o),this._prunePositions(o)}this._map.fire("move",n).fire("drag",n)},_prunePositions:function(n){for(;this._positions.length>1&&n-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var n=this._map.getSize().divideBy(2),o=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=o.subtract(n).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(n,o){return n-(n-o)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var n=this._draggable._newPos.subtract(this._draggable._startPos),o=this._offsetLimit;n.x<o.min.x&&(n.x=this._viscousLimit(n.x,o.min.x)),n.y<o.min.y&&(n.y=this._viscousLimit(n.y,o.min.y)),n.x>o.max.x&&(n.x=this._viscousLimit(n.x,o.max.x)),n.y>o.max.y&&(n.y=this._viscousLimit(n.y,o.max.y)),this._draggable._newPos=this._draggable._startPos.add(n)}},_onPreDragWrap:function(){var n=this._worldWidth,o=Math.round(n/2),c=this._initialWorldOffset,f=this._draggable._newPos.x,v=(f-o+c)%n+o-c,T=(f+o+c)%n-o-c,D=Math.abs(v+c)<Math.abs(T+c)?v:T;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=D},_onDragEnd:function(n){var o=this._map,c=o.options,f=!c.inertia||n.noInertia||this._times.length<2;if(o.fire("dragend",n),f)o.fire("moveend");else{this._prunePositions(+new Date);var v=this._lastPos.subtract(this._positions[0]),T=(this._lastTime-this._times[0])/1e3,D=c.easeLinearity,X=v.multiplyBy(D/T),j=X.distanceTo([0,0]),ot=Math.min(c.inertiaMaxSpeed,j),Tt=X.multiplyBy(ot/j),qt=ot/(c.inertiaDeceleration*D),ae=Tt.multiplyBy(-qt/2).round();!ae.x&&!ae.y?o.fire("moveend"):(ae=o._limitOffset(ae,o.options.maxBounds),N(function(){o.panBy(ae,{duration:qt,easeLinearity:D,noMoveStart:!0,animate:!0})}))}}});_e.addInitHook("addHandler","dragging",Mc),_e.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Sc=In.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(n){this._map=n,this._setPanDelta(n.options.keyboardPanDelta),this._setZoomDelta(n.options.zoomDelta)},addHooks:function(){var n=this._map._container;n.tabIndex<=0&&(n.tabIndex="0"),te(n,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Ce(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var n=document.body,o=document.documentElement,c=n.scrollTop||o.scrollTop,f=n.scrollLeft||o.scrollLeft;this._map._container.focus(),window.scrollTo(f,c)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(n){var o=this._panKeys={},c=this.keyCodes,f,v;for(f=0,v=c.left.length;f<v;f++)o[c.left[f]]=[-1*n,0];for(f=0,v=c.right.length;f<v;f++)o[c.right[f]]=[n,0];for(f=0,v=c.down.length;f<v;f++)o[c.down[f]]=[0,n];for(f=0,v=c.up.length;f<v;f++)o[c.up[f]]=[0,-1*n]},_setZoomDelta:function(n){var o=this._zoomKeys={},c=this.keyCodes,f,v;for(f=0,v=c.zoomIn.length;f<v;f++)o[c.zoomIn[f]]=n;for(f=0,v=c.zoomOut.length;f<v;f++)o[c.zoomOut[f]]=-n},_addHooks:function(){te(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Ce(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(n){if(!(n.altKey||n.ctrlKey||n.metaKey)){var o=n.keyCode,c=this._map,f;if(o in this._panKeys){if(!c._panAnim||!c._panAnim._inProgress)if(f=this._panKeys[o],n.shiftKey&&(f=it(f).multiplyBy(3)),c.options.maxBounds&&(f=c._limitOffset(it(f),c.options.maxBounds)),c.options.worldCopyJump){var v=c.wrapLatLng(c.unproject(c.project(c.getCenter()).add(f)));c.panTo(v)}else c.panBy(f)}else if(o in this._zoomKeys)c.setZoom(c.getZoom()+(n.shiftKey?3:1)*this._zoomKeys[o]);else if(o===27&&c._popup&&c._popup.options.closeOnEscapeKey)c.closePopup();else return;Ai(n)}}});_e.addInitHook("addHandler","keyboard",Sc),_e.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Tc=In.extend({addHooks:function(){te(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Ce(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(n){var o=ql(n),c=this._map.options.wheelDebounceTime;this._delta+=o,this._lastMousePos=this._map.mouseEventToContainerPoint(n),this._startTime||(this._startTime=+new Date);var f=Math.max(c-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(l(this._performZoom,this),f),Ai(n)},_performZoom:function(){var n=this._map,o=n.getZoom(),c=this._map.options.zoomSnap||0;n._stop();var f=this._delta/(this._map.options.wheelPxPerZoomLevel*4),v=4*Math.log(2/(1+Math.exp(-Math.abs(f))))/Math.LN2,T=c?Math.ceil(v/c)*c:v,D=n._limitZoom(o+(this._delta>0?T:-T))-o;this._delta=0,this._startTime=null,D&&(n.options.scrollWheelZoom==="center"?n.setZoom(o+D):n.setZoomAround(this._lastMousePos,o+D))}});_e.addInitHook("addHandler","scrollWheelZoom",Tc);var Sd=600;_e.mergeOptions({tapHold:It.touchNative&&It.safari&&It.mobile,tapTolerance:15});var Ec=In.extend({addHooks:function(){te(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Ce(this._map._container,"touchstart",this._onDown,this)},_onDown:function(n){if(clearTimeout(this._holdTimeout),n.touches.length===1){var o=n.touches[0];this._startPos=this._newPos=new G(o.clientX,o.clientY),this._holdTimeout=setTimeout(l(function(){this._cancel(),this._isTapValid()&&(te(document,"touchend",We),te(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",o))},this),Sd),te(document,"touchend touchcancel contextmenu",this._cancel,this),te(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function n(){Ce(document,"touchend",We),Ce(document,"touchend touchcancel",n)},_cancel:function(){clearTimeout(this._holdTimeout),Ce(document,"touchend touchcancel contextmenu",this._cancel,this),Ce(document,"touchmove",this._onMove,this)},_onMove:function(n){var o=n.touches[0];this._newPos=new G(o.clientX,o.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(n,o){var c=new MouseEvent(n,{bubbles:!0,cancelable:!0,view:window,screenX:o.screenX,screenY:o.screenY,clientX:o.clientX,clientY:o.clientY});c._simulated=!0,o.target.dispatchEvent(c)}});_e.addInitHook("addHandler","tapHold",Ec),_e.mergeOptions({touchZoom:It.touch,bounceAtZoomLimits:!0});var bc=In.extend({addHooks:function(){Ht(this._map._container,"leaflet-touch-zoom"),te(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){Ae(this._map._container,"leaflet-touch-zoom"),Ce(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(n){var o=this._map;if(!(!n.touches||n.touches.length!==2||o._animatingZoom||this._zooming)){var c=o.mouseEventToContainerPoint(n.touches[0]),f=o.mouseEventToContainerPoint(n.touches[1]);this._centerPoint=o.getSize()._divideBy(2),this._startLatLng=o.containerPointToLatLng(this._centerPoint),o.options.touchZoom!=="center"&&(this._pinchStartLatLng=o.containerPointToLatLng(c.add(f)._divideBy(2))),this._startDist=c.distanceTo(f),this._startZoom=o.getZoom(),this._moved=!1,this._zooming=!0,o._stop(),te(document,"touchmove",this._onTouchMove,this),te(document,"touchend touchcancel",this._onTouchEnd,this),We(n)}},_onTouchMove:function(n){if(!(!n.touches||n.touches.length!==2||!this._zooming)){var o=this._map,c=o.mouseEventToContainerPoint(n.touches[0]),f=o.mouseEventToContainerPoint(n.touches[1]),v=c.distanceTo(f)/this._startDist;if(this._zoom=o.getScaleZoom(v,this._startZoom),!o.options.bounceAtZoomLimits&&(this._zoom<o.getMinZoom()&&v<1||this._zoom>o.getMaxZoom()&&v>1)&&(this._zoom=o._limitZoom(this._zoom)),o.options.touchZoom==="center"){if(this._center=this._startLatLng,v===1)return}else{var T=c._add(f)._divideBy(2)._subtract(this._centerPoint);if(v===1&&T.x===0&&T.y===0)return;this._center=o.unproject(o.project(this._pinchStartLatLng,this._zoom).subtract(T),this._zoom)}this._moved||(o._moveStart(!0,!1),this._moved=!0),tt(this._animRequest);var D=l(o._move,o,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=N(D,this,!0),We(n)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,tt(this._animRequest),Ce(document,"touchmove",this._onTouchMove,this),Ce(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});_e.addInitHook("addHandler","touchZoom",bc),_e.BoxZoom=xc,_e.DoubleClickZoom=yc,_e.Drag=Mc,_e.Keyboard=Sc,_e.ScrollWheelZoom=Tc,_e.TapHold=Ec,_e.TouchZoom=bc,e.Bounds=vt,e.Browser=It,e.CRS=ut,e.Canvas=mc,e.Circle=Go,e.CircleMarker=Sr,e.Class=$,e.Control=yn,e.DivIcon=dc,e.DivOverlay=Dn,e.DomEvent=ku,e.DomUtil=Bu,e.Draggable=ci,e.Evented=pt,e.FeatureGroup=Wn,e.GeoJSON=Zn,e.GridLayer=Hs,e.Handler=In,e.Icon=Zi,e.ImageOverlay=Ar,e.LatLng=q,e.LatLngBounds=se,e.Layer=Mn,e.LayerGroup=Xi,e.LineUtil=Qu,e.Map=_e,e.Marker=Mr,e.Mixin=qu,e.Path=hi,e.Point=G,e.PolyUtil=Yu,e.Polygon=qi,e.Polyline=Xn,e.Popup=Rr,e.PosAnimation=Yl,e.Projection=td,e.Rectangle=vc,e.Renderer=qn,e.SVG=Gs,e.SVGOverlay=uc,e.TileLayer=Ki,e.Tooltip=Cr,e.Transformation=Pe,e.Util=et,e.VideoOverlay=hc,e.bind=l,e.bounds=zt,e.canvas=_c,e.circle=ld,e.circleMarker=ad,e.control=Bs,e.divIcon=gd,e.extend=s,e.featureGroup=sd,e.geoJSON=cc,e.geoJson=ud,e.gridLayer=vd,e.icon=rd,e.imageOverlay=dd,e.latLng=rt,e.latLngBounds=Yt,e.layerGroup=id,e.map=Hu,e.marker=od,e.point=it,e.polygon=hd,e.polyline=cd,e.popup=md,e.rectangle=Md,e.setOptions=S,e.stamp=u,e.svg=gc,e.svgOverlay=pd,e.tileLayer=fc,e.tooltip=_d,e.transformation=re,e.version=i,e.videoOverlay=fd;var Td=window.L;e.noConflict=function(){return window.L=Td,this},window.L=e})}(er,er.exports)),er.exports}var Ey=Ty();const Ia=My(Ey),_n=document.getElementById("cake-container");if(_n){let h=function(){requestAnimationFrame(h),l&&(l.rotation.y+=.005),e.render(r,t)};const r=new up,t=new $e(75,_n.clientWidth/_n.clientHeight,.1,1e3),e=new zx({antialias:!0,alpha:!0});e.setSize(_n.clientWidth,_n.clientHeight),_n.appendChild(e.domElement);const i=new Xp(16777215,.8);r.add(i);const s=new Cu(16777215,1);s.position.set(5,10,7.5),r.add(s);const a=new kx;let l;a.load("/models/chocolate_mousse_cake.glb",function(u){l=u.scene,l.scale.set(70,70,70),l.position.set(0,0,0),l.rotation.x=.4,r.add(l)}),t.position.set(0,2.9,7),h(),window.addEventListener("resize",()=>{_n.clientWidth>0&&_n.clientHeight>0&&(t.aspect=_n.clientWidth/_n.clientHeight,t.updateProjectionMatrix(),e.setSize(_n.clientWidth,_n.clientHeight))})}const by=document.getElementById("map");if(by){const r=[28.4089,77.3178],t=Ia.map("map").setView(r,15);Ia.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(t),Ia.marker(r).addTo(t).bindPopup("<b>Kay's Bakery</b><br>Come find us here!").openPopup()}
