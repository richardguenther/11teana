import{C as u}from"./codemirror.es-2a5af7fe.js";import{f as j}from"./forEachState.es-1e367fb2.js";import{z as g,A as b,D as O,V as m,B as D,y as N}from"./index-0e87dcc3.js";var M=Object.defineProperty,p=(i,n)=>M(i,"name",{value:n,configurable:!0});function f(i,n,t){const r=x(t,d(n.string));if(!r)return;const e=n.type!==null&&/"|\w/.test(n.string[0])?n.start:n.end;return{list:r,from:{line:i.line,ch:e},to:{line:i.line,ch:n.end}}}p(f,"hintList");function x(i,n){if(!n)return y(i,s=>!s.isDeprecated);const t=i.map(s=>({proximity:T(d(s.text),n),entry:s}));return y(y(t,s=>s.proximity<=2),s=>!s.entry.isDeprecated).sort((s,l)=>(s.entry.isDeprecated?1:0)-(l.entry.isDeprecated?1:0)||s.proximity-l.proximity||s.entry.text.length-l.entry.text.length).map(s=>s.entry)}p(x,"filterAndSortList");function y(i,n){const t=i.filter(n);return t.length===0?i:t}p(y,"filterNonEmpty");function d(i){return i.toLowerCase().replaceAll(/\W/g,"")}p(d,"normalizeText");function T(i,n){let t=V(n,i);return i.length>n.length&&(t-=i.length-n.length-1,t+=i.indexOf(n)===0?0:.5),t}p(T,"getProximity");function V(i,n){let t,r;const e=[],s=i.length,l=n.length;for(t=0;t<=s;t++)e[t]=[t];for(r=1;r<=l;r++)e[0][r]=r;for(t=1;t<=s;t++)for(r=1;r<=l;r++){const c=i[t-1]===n[r-1]?0:1;e[t][r]=Math.min(e[t-1][r]+1,e[t][r-1]+1,e[t-1][r-1]+c),t>1&&r>1&&i[t-1]===n[r-2]&&i[t-2]===n[r-1]&&(e[t][r]=Math.min(e[t][r],e[t-2][r-2]+c))}return e[s][l]}p(V,"lexicalDistance");u.registerHelper("hint","graphql-variables",(i,n)=>{const t=i.getCursor(),r=i.getTokenAt(t),e=v(t,r,n);return e!=null&&e.list&&e.list.length>0&&(e.from=u.Pos(e.from.line,e.from.ch),e.to=u.Pos(e.to.line,e.to.ch),u.signal(i,"hasCompletion",i,e,r)),e});function v(i,n,t){const r=n.state.kind==="Invalid"?n.state.prevState:n.state,{kind:e,step:s}=r;if(e==="Document"&&s===0)return f(i,n,[{text:"{"}]);const{variableToType:l}=t;if(!l)return;const c=L(l,n.state);if(e==="Document"||e==="Variable"&&s===0){const a=Object.keys(l);return f(i,n,a.map(o=>({text:`"${o}": `,type:l[o]})))}if((e==="ObjectValue"||e==="ObjectField"&&s===0)&&c.fields){const a=Object.keys(c.fields).map(o=>c.fields[o]);return f(i,n,a.map(o=>({text:`"${o.name}": `,type:o.type,description:o.description})))}if(e==="StringValue"||e==="NumberValue"||e==="BooleanValue"||e==="NullValue"||e==="ListValue"&&s===1||e==="ObjectField"&&s===2||e==="Variable"&&s===2){const a=c.type?g(c.type):void 0;if(a instanceof b)return f(i,n,[{text:"{"}]);if(a instanceof O){const o=a.getValues();return f(i,n,o.map(h=>({text:`"${h.name}"`,type:a,description:h.description})))}if(a===m)return f(i,n,[{text:"true",type:m,description:"Not false."},{text:"false",type:m,description:"Not true."}])}}p(v,"getVariablesHint");function L(i,n){const t={type:null,fields:null};return j(n,r=>{switch(r.kind){case"Variable":{t.type=i[r.name];break}case"ListValue":{const e=t.type?D(t.type):void 0;t.type=e instanceof N?e.ofType:null;break}case"ObjectValue":{const e=t.type?g(t.type):void 0;t.fields=e instanceof b?e.getFields():null;break}case"ObjectField":{const e=r.name&&t.fields?t.fields[r.name]:null;t.type=e==null?void 0:e.type;break}}}),t}p(L,"getTypeInfo");
