import{a as gr}from"./codemirror.es-2a5af7fe.js";import"./index-0e87dcc3.js";var hr=Object.defineProperty,a=(D,oe)=>hr(D,"name",{value:oe,configurable:!0});function pr(D,oe){return oe.forEach(function(y){y&&typeof y!="string"&&!Array.isArray(y)&&Object.keys(y).forEach(function(B){if(B!=="default"&&!(B in D)){var h=Object.getOwnPropertyDescriptor(y,B);Object.defineProperty(D,B,h.get?h:{enumerable:!0,get:function(){return y[B]}})}})}),Object.freeze(Object.defineProperty(D,Symbol.toStringTag,{value:"Module"}))}a(pr,"_mergeNamespaces");var mr={exports:{}};(function(D,oe){(function(y){y(gr.exports)})(function(y){y.defineMode("javascript",function(B,h){var W=B.indentUnit,Be=h.statementIndent,se=h.jsonld,q=h.json||se,qe=h.trackScope!==!1,k=h.typescript,ce=h.wordCharacters||/[\w$\xa1-\uffff]/,Pe=function(){function e(v){return{type:v,style:"keyword"}}a(e,"kw");var r=e("keyword a"),n=e("keyword b"),f=e("keyword c"),s=e("keyword d"),d=e("operator"),m={type:"atom",style:"atom"};return{if:e("if"),while:r,with:r,else:n,do:n,try:n,finally:n,return:s,break:s,continue:s,new:e("new"),delete:f,void:f,throw:f,debugger:e("debugger"),var:e("var"),const:e("var"),let:e("var"),function:e("function"),catch:e("catch"),for:e("for"),switch:e("switch"),case:e("case"),default:e("default"),in:d,typeof:d,instanceof:d,true:m,false:m,null:m,undefined:m,NaN:m,Infinity:m,this:e("this"),class:e("class"),super:e("atom"),yield:f,export:e("export"),import:e("import"),extends:f,await:f}}(),Fe=/[+\-*&%=<>!?|~^@]/,kr=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function Le(e){for(var r=!1,n,f=!1;(n=e.next())!=null;){if(!r){if(n=="/"&&!f)return;n=="["?f=!0:f&&n=="]"&&(f=!1)}r=!r&&n=="\\"}}a(Le,"readRegexp");var Z,le;function x(e,r,n){return Z=e,le=n,r}a(x,"ret");function z(e,r){var n=e.next();if(n=='"'||n=="'")return r.tokenize=Qe(n),r.tokenize(e,r);if(n=="."&&e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return x("number","number");if(n=="."&&e.match(".."))return x("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(n))return x(n);if(n=="="&&e.eat(">"))return x("=>","operator");if(n=="0"&&e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return x("number","number");if(/\d/.test(n))return e.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),x("number","number");if(n=="/")return e.eat("*")?(r.tokenize=C,C(e,r)):e.eat("/")?(e.skipToEnd(),x("comment","comment")):$e(e,r,1)?(Le(e),e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),x("regexp","string-2")):(e.eat("="),x("operator","operator",e.current()));if(n=="`")return r.tokenize=K,K(e,r);if(n=="#"&&e.peek()=="!")return e.skipToEnd(),x("meta","meta");if(n=="#"&&e.eatWhile(ce))return x("variable","property");if(n=="<"&&e.match("!--")||n=="-"&&e.match("->")&&!/\S/.test(e.string.slice(0,e.start)))return e.skipToEnd(),x("comment","comment");if(Fe.test(n))return(n!=">"||!r.lexical||r.lexical.type!=">")&&(e.eat("=")?(n=="!"||n=="=")&&e.eat("="):/[<>*+\-|&?]/.test(n)&&(e.eat(n),n==">"&&e.eat(n))),n=="?"&&e.eat(".")?x("."):x("operator","operator",e.current());if(ce.test(n)){e.eatWhile(ce);var f=e.current();if(r.lastType!="."){if(Pe.propertyIsEnumerable(f)){var s=Pe[f];return x(s.type,s.style,f)}if(f=="async"&&e.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/,!1))return x("async","keyword",f)}return x("variable","variable",f)}}a(z,"tokenBase");function Qe(e){return function(r,n){var f=!1,s;if(se&&r.peek()=="@"&&r.match(kr))return n.tokenize=z,x("jsonld-keyword","meta");for(;(s=r.next())!=null&&!(s==e&&!f);)f=!f&&s=="\\";return f||(n.tokenize=z),x("string","string")}}a(Qe,"tokenString");function C(e,r){for(var n=!1,f;f=e.next();){if(f=="/"&&n){r.tokenize=z;break}n=f=="*"}return x("comment","comment")}a(C,"tokenComment");function K(e,r){for(var n=!1,f;(f=e.next())!=null;){if(!n&&(f=="`"||f=="$"&&e.eat("{"))){r.tokenize=z;break}n=!n&&f=="\\"}return x("quasi","string-2",e.current())}a(K,"tokenQuasi");var br="([{}])";function de(e,r){r.fatArrowAt&&(r.fatArrowAt=null);var n=e.string.indexOf("=>",e.start);if(!(n<0)){if(k){var f=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start,n));f&&(n=f.index)}for(var s=0,d=!1,m=n-1;m>=0;--m){var v=e.string.charAt(m),_=br.indexOf(v);if(_>=0&&_<3){if(!s){++m;break}if(--s==0){v=="("&&(d=!0);break}}else if(_>=3&&_<6)++s;else if(ce.test(v))d=!0;else if(/["'\/`]/.test(v))for(;;--m){if(m==0)return;var wr=e.string.charAt(m-1);if(wr==v&&e.string.charAt(m-2)!="\\"){m--;break}}else if(d&&!s){++m;break}}d&&!s&&(r.fatArrowAt=m)}}a(de,"findFatArrow");var yr={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,import:!0,"jsonld-keyword":!0};function ge(e,r,n,f,s,d){this.indented=e,this.column=r,this.type=n,this.prev=s,this.info=d,f!=null&&(this.align=f)}a(ge,"JSLexical");function Je(e,r){if(!qe)return!1;for(var n=e.localVars;n;n=n.next)if(n.name==r)return!0;for(var f=e.context;f;f=f.prev)for(var n=f.vars;n;n=n.next)if(n.name==r)return!0}a(Je,"inScope");function he(e,r,n,f,s){var d=e.cc;for(i.state=e,i.stream=s,i.marked=null,i.cc=d,i.style=r,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;){var m=d.length?d.pop():q?b:w;if(m(n,f)){for(;d.length&&d[d.length-1].lex;)d.pop()();return i.marked?i.marked:n=="variable"&&Je(e,f)?"variable-2":r}}}a(he,"parseJS");var i={state:null,column:null,marked:null,cc:null};function o(){for(var e=arguments.length-1;e>=0;e--)i.cc.push(arguments[e])}a(o,"pass");function t(){return o.apply(null,arguments),!0}a(t,"cont");function pe(e,r){for(var n=r;n;n=n.next)if(n.name==e)return!0;return!1}a(pe,"inList");function P(e){var r=i.state;if(i.marked="def",!!qe){if(r.context){if(r.lexical.info=="var"&&r.context&&r.context.block){var n=ve(e,r.context);if(n!=null){r.context=n;return}}else if(!pe(e,r.localVars)){r.localVars=new H(e,r.localVars);return}}h.globalVars&&!pe(e,r.globalVars)&&(r.globalVars=new H(e,r.globalVars))}}a(P,"register");function ve(e,r){if(r)if(r.block){var n=ve(e,r.prev);return n?n==r.prev?r:new U(n,r.vars,!0):null}else return pe(e,r.vars)?r:new U(r.prev,new H(e,r.vars),!1);else return null}a(ve,"registerVarScoped");function ee(e){return e=="public"||e=="private"||e=="protected"||e=="abstract"||e=="readonly"}a(ee,"isModifier");function U(e,r,n){this.prev=e,this.vars=r,this.block=n}a(U,"Context");function H(e,r){this.name=e,this.next=r}a(H,"Var");var xr=new H("this",new H("arguments",null));function O(){i.state.context=new U(i.state.context,i.state.localVars,!1),i.state.localVars=xr}a(O,"pushcontext");function re(){i.state.context=new U(i.state.context,i.state.localVars,!0),i.state.localVars=null}a(re,"pushblockcontext"),O.lex=re.lex=!0;function T(){i.state.localVars=i.state.context.vars,i.state.context=i.state.context.prev}a(T,"popcontext"),T.lex=!0;function c(e,r){var n=a(function(){var f=i.state,s=f.indented;if(f.lexical.type=="stat")s=f.lexical.indented;else for(var d=f.lexical;d&&d.type==")"&&d.align;d=d.prev)s=d.indented;f.lexical=new ge(s,i.stream.column(),e,null,f.lexical,r)},"result");return n.lex=!0,n}a(c,"pushlex");function u(){var e=i.state;e.lexical.prev&&(e.lexical.type==")"&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}a(u,"poplex"),u.lex=!0;function l(e){function r(n){return n==e?t():e==";"||n=="}"||n==")"||n=="]"?o():t(r)}return a(r,"exp"),r}a(l,"expect");function w(e,r){return e=="var"?t(c("vardef",r),xe,l(";"),u):e=="keyword a"?t(c("form"),me,w,u):e=="keyword b"?t(c("form"),w,u):e=="keyword d"?i.stream.match(/^\s*$/,!1)?t():t(c("stat"),F,l(";"),u):e=="debugger"?t(l(";")):e=="{"?t(c("}"),re,ie,u,T):e==";"?t():e=="if"?(i.state.lexical.info=="else"&&i.state.cc[i.state.cc.length-1]==u&&i.state.cc.pop()(),t(c("form"),me,w,u,_e)):e=="function"?t(V):e=="for"?t(c("form"),re,Ie,w,T,u):e=="class"||k&&r=="interface"?(i.marked="keyword",t(c("form",e=="class"?e:r),ze,u)):e=="variable"?k&&r=="declare"?(i.marked="keyword",t(w)):k&&(r=="module"||r=="enum"||r=="type")&&i.stream.match(/^\s*\w/,!1)?(i.marked="keyword",r=="enum"?t(Ne):r=="type"?t(Ve,l("operator"),p,l(";")):t(c("form"),S,l("{"),c("}"),ie,u,u)):k&&r=="namespace"?(i.marked="keyword",t(c("form"),b,w,u)):k&&r=="abstract"?(i.marked="keyword",t(w)):t(c("stat"),He):e=="switch"?t(c("form"),me,l("{"),c("}","switch"),re,ie,u,u,T):e=="case"?t(b,l(":")):e=="default"?t(l(":")):e=="catch"?t(c("form"),O,Re,w,u,T):e=="export"?t(c("stat"),ur,u):e=="import"?t(c("stat"),or,u):e=="async"?t(w):r=="@"?t(b,w):o(c("stat"),b,l(";"),u)}a(w,"statement");function Re(e){if(e=="(")return t($,l(")"))}a(Re,"maybeCatchBinding");function b(e,r){return je(e,r,!1)}a(b,"expression");function j(e,r){return je(e,r,!0)}a(j,"expressionNoComma");function me(e){return e!="("?o():t(c(")"),F,l(")"),u)}a(me,"parenExpr");function je(e,r,n){if(i.state.fatArrowAt==i.stream.start){var f=n?Se:Te;if(e=="(")return t(O,c(")"),g($,")"),u,l("=>"),f,T);if(e=="variable")return o(O,S,l("=>"),f,T)}var s=n?L:M;return yr.hasOwnProperty(e)?t(s):e=="function"?t(V,s):e=="class"||k&&r=="interface"?(i.marked="keyword",t(c("form"),fr,u)):e=="keyword c"||e=="async"?t(n?j:b):e=="("?t(c(")"),F,l(")"),u,s):e=="operator"||e=="spread"?t(n?j:b):e=="["?t(c("]"),cr,u,s):e=="{"?G(ne,"}",null,s):e=="quasi"?o(te,s):e=="new"?t(We(n)):t()}a(je,"expressionInner");function F(e){return e.match(/[;\}\)\],]/)?o():o(b)}a(F,"maybeexpression");function M(e,r){return e==","?t(F):L(e,r,!1)}a(M,"maybeoperatorComma");function L(e,r,n){var f=n==!1?M:L,s=n==!1?b:j;if(e=="=>")return t(O,n?Se:Te,T);if(e=="operator")return/\+\+|--/.test(r)||k&&r=="!"?t(f):k&&r=="<"&&i.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?t(c(">"),g(p,">"),u,f):r=="?"?t(b,l(":"),s):t(s);if(e=="quasi")return o(te,f);if(e!=";"){if(e=="(")return G(j,")","call",f);if(e==".")return t(Ge,f);if(e=="[")return t(c("]"),F,l("]"),u,f);if(k&&r=="as")return i.marked="keyword",t(p,f);if(e=="regexp")return i.state.lastType=i.marked="operator",i.stream.backUp(i.stream.pos-i.stream.start-1),t(s)}}a(L,"maybeoperatorNoComma");function te(e,r){return e!="quasi"?o():r.slice(r.length-2)!="${"?t(te):t(F,De)}a(te,"quasi");function De(e){if(e=="}")return i.marked="string-2",i.state.tokenize=K,t(te)}a(De,"continueQuasi");function Te(e){return de(i.stream,i.state),o(e=="{"?w:b)}a(Te,"arrowBody");function Se(e){return de(i.stream,i.state),o(e=="{"?w:j)}a(Se,"arrowBodyNoComma");function We(e){return function(r){return r=="."?t(e?Ue:Ke):r=="variable"&&k?t(rr,e?L:M):o(e?j:b)}}a(We,"maybeTarget");function Ke(e,r){if(r=="target")return i.marked="keyword",t(M)}a(Ke,"target");function Ue(e,r){if(r=="target")return i.marked="keyword",t(L)}a(Ue,"targetNoComma");function He(e){return e==":"?t(u,w):o(M,l(";"),u)}a(He,"maybelabel");function Ge(e){if(e=="variable")return i.marked="property",t()}a(Ge,"property");function ne(e,r){if(e=="async")return i.marked="property",t(ne);if(e=="variable"||i.style=="keyword"){if(i.marked="property",r=="get"||r=="set")return t(Xe);var n;return k&&i.state.fatArrowAt==i.stream.start&&(n=i.stream.match(/^\s*:\s*/,!1))&&(i.state.fatArrowAt=i.stream.pos+n[0].length),t(N)}else{if(e=="number"||e=="string")return i.marked=se?"property":i.style+" property",t(N);if(e=="jsonld-keyword")return t(N);if(k&&ee(r))return i.marked="keyword",t(ne);if(e=="[")return t(b,Q,l("]"),N);if(e=="spread")return t(j,N);if(r=="*")return i.marked="keyword",t(ne);if(e==":")return o(N)}}a(ne,"objprop");function Xe(e){return e!="variable"?o(N):(i.marked="property",t(V))}a(Xe,"getterSetter");function N(e){if(e==":")return t(j);if(e=="(")return o(V)}a(N,"afterprop");function g(e,r,n){function f(s,d){if(n?n.indexOf(s)>-1:s==","){var m=i.state.lexical;return m.info=="call"&&(m.pos=(m.pos||0)+1),t(function(v,_){return v==r||_==r?o():o(e)},f)}return s==r||d==r?t():n&&n.indexOf(";")>-1?o(e):t(l(r))}return a(f,"proceed"),function(s,d){return s==r||d==r?t():o(e,f)}}a(g,"commasep");function G(e,r,n){for(var f=3;f<arguments.length;f++)i.cc.push(arguments[f]);return t(c(r,n),g(e,r),u)}a(G,"contCommasep");function ie(e){return e=="}"?t():o(w,ie)}a(ie,"block");function Q(e,r){if(k){if(e==":")return t(p);if(r=="?")return t(Q)}}a(Q,"maybetype");function Ye(e,r){if(k&&(e==":"||r=="in"))return t(p)}a(Ye,"maybetypeOrIn");function Ee(e){if(k&&e==":")return i.stream.match(/^\s*\w+\s+is\b/,!1)?t(b,Ze,p):t(p)}a(Ee,"mayberettype");function Ze(e,r){if(r=="is")return i.marked="keyword",t()}a(Ze,"isKW");function p(e,r){if(r=="keyof"||r=="typeof"||r=="infer"||r=="readonly")return i.marked="keyword",t(r=="typeof"?j:p);if(e=="variable"||r=="void")return i.marked="type",t(E);if(r=="|"||r=="&")return t(p);if(e=="string"||e=="number"||e=="atom")return t(E);if(e=="[")return t(c("]"),g(p,"]",","),u,E);if(e=="{")return t(c("}"),ke,u,E);if(e=="(")return t(g(ye,")"),Ce,E);if(e=="<")return t(g(p,">"),p);if(e=="quasi")return o(be,E)}a(p,"typeexpr");function Ce(e){if(e=="=>")return t(p)}a(Ce,"maybeReturnType");function ke(e){return e.match(/[\}\)\]]/)?t():e==","||e==";"?t(ke):o(X,ke)}a(ke,"typeprops");function X(e,r){if(e=="variable"||i.style=="keyword")return i.marked="property",t(X);if(r=="?"||e=="number"||e=="string")return t(X);if(e==":")return t(p);if(e=="[")return t(l("variable"),Ye,l("]"),X);if(e=="(")return o(R,X);if(!e.match(/[;\}\)\],]/))return t()}a(X,"typeprop");function be(e,r){return e!="quasi"?o():r.slice(r.length-2)!="${"?t(be):t(p,er)}a(be,"quasiType");function er(e){if(e=="}")return i.marked="string-2",i.state.tokenize=K,t(be)}a(er,"continueQuasiType");function ye(e,r){return e=="variable"&&i.stream.match(/^\s*[?:]/,!1)||r=="?"?t(ye):e==":"?t(p):e=="spread"?t(ye):o(p)}a(ye,"typearg");function E(e,r){if(r=="<")return t(c(">"),g(p,">"),u,E);if(r=="|"||e=="."||r=="&")return t(p);if(e=="[")return t(p,l("]"),E);if(r=="extends"||r=="implements")return i.marked="keyword",t(p);if(r=="?")return t(p,l(":"),p)}a(E,"afterType");function rr(e,r){if(r=="<")return t(c(">"),g(p,">"),u,E)}a(rr,"maybeTypeArgs");function ae(){return o(p,tr)}a(ae,"typeparam");function tr(e,r){if(r=="=")return t(p)}a(tr,"maybeTypeDefault");function xe(e,r){return r=="enum"?(i.marked="keyword",t(Ne)):o(S,Q,I,ir)}a(xe,"vardef");function S(e,r){if(k&&ee(r))return i.marked="keyword",t(S);if(e=="variable")return P(r),t();if(e=="spread")return t(S);if(e=="[")return G(nr,"]");if(e=="{")return G(Ae,"}")}a(S,"pattern");function Ae(e,r){return e=="variable"&&!i.stream.match(/^\s*:/,!1)?(P(r),t(I)):(e=="variable"&&(i.marked="property"),e=="spread"?t(S):e=="}"?o():e=="["?t(b,l("]"),l(":"),Ae):t(l(":"),S,I))}a(Ae,"proppattern");function nr(){return o(S,I)}a(nr,"eltpattern");function I(e,r){if(r=="=")return t(j)}a(I,"maybeAssign");function ir(e){if(e==",")return t(xe)}a(ir,"vardefCont");function _e(e,r){if(e=="keyword b"&&r=="else")return t(c("form","else"),w,u)}a(_e,"maybeelse");function Ie(e,r){if(r=="await")return t(Ie);if(e=="(")return t(c(")"),ar,u)}a(Ie,"forspec");function ar(e){return e=="var"?t(xe,J):e=="variable"?t(J):o(J)}a(ar,"forspec1");function J(e,r){return e==")"?t():e==";"?t(J):r=="in"||r=="of"?(i.marked="keyword",t(b,J)):o(b,J)}a(J,"forspec2");function V(e,r){if(r=="*")return i.marked="keyword",t(V);if(e=="variable")return P(r),t(V);if(e=="(")return t(O,c(")"),g($,")"),u,Ee,w,T);if(k&&r=="<")return t(c(">"),g(ae,">"),u,V)}a(V,"functiondef");function R(e,r){if(r=="*")return i.marked="keyword",t(R);if(e=="variable")return P(r),t(R);if(e=="(")return t(O,c(")"),g($,")"),u,Ee,T);if(k&&r=="<")return t(c(">"),g(ae,">"),u,R)}a(R,"functiondecl");function Ve(e,r){if(e=="keyword"||e=="variable")return i.marked="type",t(Ve);if(r=="<")return t(c(">"),g(ae,">"),u)}a(Ve,"typename");function $(e,r){return r=="@"&&t(b,$),e=="spread"?t($):k&&ee(r)?(i.marked="keyword",t($)):k&&e=="this"?t(Q,I):o(S,Q,I)}a($,"funarg");function fr(e,r){return e=="variable"?ze(e,r):fe(e,r)}a(fr,"classExpression");function ze(e,r){if(e=="variable")return P(r),t(fe)}a(ze,"className");function fe(e,r){if(r=="<")return t(c(">"),g(ae,">"),u,fe);if(r=="extends"||r=="implements"||k&&e==",")return r=="implements"&&(i.marked="keyword"),t(k?p:b,fe);if(e=="{")return t(c("}"),A,u)}a(fe,"classNameAfter");function A(e,r){if(e=="async"||e=="variable"&&(r=="static"||r=="get"||r=="set"||k&&ee(r))&&i.stream.match(/^\s+[\w$\xa1-\uffff]/,!1))return i.marked="keyword",t(A);if(e=="variable"||i.style=="keyword")return i.marked="property",t(Y,A);if(e=="number"||e=="string")return t(Y,A);if(e=="[")return t(b,Q,l("]"),Y,A);if(r=="*")return i.marked="keyword",t(A);if(k&&e=="(")return o(R,A);if(e==";"||e==",")return t(A);if(e=="}")return t();if(r=="@")return t(b,A)}a(A,"classBody");function Y(e,r){if(r=="!"||r=="?")return t(Y);if(e==":")return t(p,I);if(r=="=")return t(j);var n=i.state.lexical.prev,f=n&&n.info=="interface";return o(f?R:V)}a(Y,"classfield");function ur(e,r){return r=="*"?(i.marked="keyword",t(we,l(";"))):r=="default"?(i.marked="keyword",t(b,l(";"))):e=="{"?t(g(Oe,"}"),we,l(";")):o(w)}a(ur,"afterExport");function Oe(e,r){if(r=="as")return i.marked="keyword",t(l("variable"));if(e=="variable")return o(j,Oe)}a(Oe,"exportField");function or(e){return e=="string"?t():e=="("?o(b):e=="."?o(M):o(ue,Me,we)}a(or,"afterImport");function ue(e,r){return e=="{"?G(ue,"}"):(e=="variable"&&P(r),r=="*"&&(i.marked="keyword"),t(sr))}a(ue,"importSpec");function Me(e){if(e==",")return t(ue,Me)}a(Me,"maybeMoreImports");function sr(e,r){if(r=="as")return i.marked="keyword",t(ue)}a(sr,"maybeAs");function we(e,r){if(r=="from")return i.marked="keyword",t(b)}a(we,"maybeFrom");function cr(e){return e=="]"?t():o(g(j,"]"))}a(cr,"arrayLiteral");function Ne(){return o(c("form"),S,l("{"),c("}"),g(lr,"}"),u,u)}a(Ne,"enumdef");function lr(){return o(S,I)}a(lr,"enummember");function dr(e,r){return e.lastType=="operator"||e.lastType==","||Fe.test(r.charAt(0))||/[,.]/.test(r.charAt(0))}a(dr,"isContinuedStatement");function $e(e,r,n){return r.tokenize==z&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(r.lastType)||r.lastType=="quasi"&&/\{\s*$/.test(e.string.slice(0,e.pos-(n||0)))}return a($e,"expressionAllowed"),{startState:function(e){var r={tokenize:z,lastType:"sof",cc:[],lexical:new ge((e||0)-W,0,"block",!1),localVars:h.localVars,context:h.localVars&&new U(null,null,!1),indented:e||0};return h.globalVars&&typeof h.globalVars=="object"&&(r.globalVars=h.globalVars),r},token:function(e,r){if(e.sol()&&(r.lexical.hasOwnProperty("align")||(r.lexical.align=!1),r.indented=e.indentation(),de(e,r)),r.tokenize!=C&&e.eatSpace())return null;var n=r.tokenize(e,r);return Z=="comment"?n:(r.lastType=Z=="operator"&&(le=="++"||le=="--")?"incdec":Z,he(r,n,Z,le,e))},indent:function(e,r){if(e.tokenize==C||e.tokenize==K)return y.Pass;if(e.tokenize!=z)return 0;var n=r&&r.charAt(0),f=e.lexical,s;if(!/^\s*else\b/.test(r))for(var d=e.cc.length-1;d>=0;--d){var m=e.cc[d];if(m==u)f=f.prev;else if(m!=_e&&m!=T)break}for(;(f.type=="stat"||f.type=="form")&&(n=="}"||(s=e.cc[e.cc.length-1])&&(s==M||s==L)&&!/^[,\.=+\-*:?[\(]/.test(r));)f=f.prev;Be&&f.type==")"&&f.prev.type=="stat"&&(f=f.prev);var v=f.type,_=n==v;return v=="vardef"?f.indented+(e.lastType=="operator"||e.lastType==","?f.info.length+1:0):v=="form"&&n=="{"?f.indented:v=="form"?f.indented+W:v=="stat"?f.indented+(dr(e,r)?Be||W:0):f.info=="switch"&&!_&&h.doubleIndentSwitch!=!1?f.indented+(/^(?:case|default)\b/.test(r)?W:2*W):f.align?f.column+(_?0:1):f.indented+(_?0:W)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:q?null:"/*",blockCommentEnd:q?null:"*/",blockCommentContinue:q?null:" * ",lineComment:q?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:q?"json":"javascript",jsonldMode:se,jsonMode:q,expressionAllowed:$e,skipExpression:function(e){he(e,"atom","atom","true",new y.StringStream("",2,null))}}}),y.registerHelper("wordChars","javascript",/[\w$]/),y.defineMIME("text/javascript","javascript"),y.defineMIME("text/ecmascript","javascript"),y.defineMIME("application/javascript","javascript"),y.defineMIME("application/x-javascript","javascript"),y.defineMIME("application/ecmascript","javascript"),y.defineMIME("application/json",{name:"javascript",json:!0}),y.defineMIME("application/x-json",{name:"javascript",json:!0}),y.defineMIME("application/manifest+json",{name:"javascript",json:!0}),y.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),y.defineMIME("text/typescript",{name:"javascript",typescript:!0}),y.defineMIME("application/typescript",{name:"javascript",typescript:!0})})})();var vr=mr.exports,Sr=pr({__proto__:null,default:vr},[mr.exports]);export{Sr as j};
