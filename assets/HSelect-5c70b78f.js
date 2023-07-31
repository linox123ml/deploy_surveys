import{o as I,c as B,a as S,r as w,b as m,d as F,K as V,p as le,e as K,O as J,Q as W,F as _,f as oe,w as ne,i as ie,n as $,m as X,A as re,B as ue,t as N,l as se,j as C,h as M,u as j,q as E,T as de,g as ce,x as ve}from"./index-a3a3eaf1.js";import{u as P,F as pe,w as fe,h as be,o as x,c as me,l as z,K as ge,H as q,T as xe,t as H,p as ye,N as G,O as he,a as g}from"./use-outside-click-2ccb6c21.js";import{x as Oe,a as O,b as Se,p as we,u as ke}from"./use-text-value-393c2056.js";import{f as Re,a as Le}from"./InputForm-c052d208.js";function Ve(t,i){return I(),B("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[S("path",{"fill-rule":"evenodd",d:"M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z","clip-rule":"evenodd"})])}function Te(t,i){return I(),B("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[S("path",{"fill-rule":"evenodd",d:"M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z","clip-rule":"evenodd"})])}function Y(t={},i=null,n=[]){for(let[d,e]of Object.entries(t))ee(n,Z(i,d),e);return n}function Z(t,i){return t?t+"["+i+"]":i}function ee(t,i,n){if(Array.isArray(n))for(let[d,e]of n.entries())ee(t,Z(i,d.toString()),e);else n instanceof Date?t.push([i,n.toISOString()]):typeof n=="boolean"?t.push([i,n?"1":"0"]):typeof n=="string"?t.push([i,n]):typeof n=="number"?t.push([i,`${n}`]):n==null?t.push([i,""]):Y(n,i,t)}function Ie(t,i,n){let d=w(n==null?void 0:n.value),e=m(()=>t.value!==void 0);return[m(()=>e.value?t.value:d.value),function(c){return e.value||(d.value=c),i==null?void 0:i(c)}]}function Pe(t,i){return t===i}var De=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(De||{}),Be=(t=>(t[t.Single=0]="Single",t[t.Multi=1]="Multi",t))(Be||{}),$e=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))($e||{});function Ae(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let te=Symbol("ListboxContext");function U(t){let i=ie(te,null);if(i===null){let n=new Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,U),n}return i}let Ce=F({name:"Listbox",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>Pe},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(t,{slots:i,attrs:n,emit:d}){let e=w(1),c=w(null),v=w(null),b=w(null),f=w([]),a=w(""),l=w(null),y=w(1);function k(o=r=>r){let r=l.value!==null?f.value[l.value]:null,u=he(o(f.value.slice()),h=>x(h.dataRef.domRef)),p=r?u.indexOf(r):null;return p===-1&&(p=null),{options:u,activeOptionIndex:p}}let R=m(()=>t.multiple?1:0),[L,A]=Ie(m(()=>t.modelValue===void 0?P(R.value,{[1]:[],[0]:void 0}):t.modelValue),o=>d("update:modelValue",o),m(()=>t.defaultValue)),T={listboxState:e,value:L,mode:R,compare(o,r){if(typeof t.by=="string"){let u=t.by;return(o==null?void 0:o[u])===(r==null?void 0:r[u])}return t.by(o,r)},orientation:m(()=>t.horizontal?"horizontal":"vertical"),labelRef:c,buttonRef:v,optionsRef:b,disabled:m(()=>t.disabled),options:f,searchQuery:a,activeOptionIndex:l,activationTrigger:y,closeListbox(){t.disabled||e.value!==1&&(e.value=1,l.value=null)},openListbox(){t.disabled||e.value!==0&&(e.value=0)},goToOption(o,r,u){if(t.disabled||e.value===1)return;let p=k(),h=Oe(o===O.Specific?{focus:O.Specific,id:r}:{focus:o},{resolveItems:()=>p.options,resolveActiveIndex:()=>p.activeOptionIndex,resolveId:D=>D.id,resolveDisabled:D=>D.dataRef.disabled});a.value="",l.value=h,y.value=u??1,f.value=p.options},search(o){if(t.disabled||e.value===1)return;let r=a.value!==""?0:1;a.value+=o.toLowerCase();let u=(l.value!==null?f.value.slice(l.value+r).concat(f.value.slice(0,l.value+r)):f.value).find(h=>h.dataRef.textValue.startsWith(a.value)&&!h.dataRef.disabled),p=u?f.value.indexOf(u):-1;p===-1||p===l.value||(l.value=p,y.value=1)},clearSearch(){t.disabled||e.value!==1&&a.value!==""&&(a.value="")},registerOption(o,r){let u=k(p=>[...p,{id:o,dataRef:r}]);f.value=u.options,l.value=u.activeOptionIndex},unregisterOption(o){let r=k(u=>{let p=u.findIndex(h=>h.id===o);return p!==-1&&u.splice(p,1),u});f.value=r.options,l.value=r.activeOptionIndex,y.value=1},select(o){t.disabled||A(P(R.value,{[0]:()=>o,[1]:()=>{let r=V(T.value.value).slice(),u=V(o),p=r.findIndex(h=>T.compare(u,V(h)));return p===-1?r.push(u):r.splice(p,1),r}}))}};pe([v,b],(o,r)=>{var u;T.closeListbox(),fe(r,be.Loose)||(o.preventDefault(),(u=x(v))==null||u.focus())},m(()=>e.value===0)),le(te,T),me(m(()=>P(e.value,{[0]:z.Open,[1]:z.Closed})));let s=m(()=>{var o;return(o=x(v))==null?void 0:o.closest("form")});return K(()=>{J([s],()=>{if(!s.value||t.defaultValue===void 0)return;function o(){T.select(t.defaultValue)}return s.value.addEventListener("reset",o),()=>{var r;(r=s.value)==null||r.removeEventListener("reset",o)}},{immediate:!0})}),()=>{let{name:o,modelValue:r,disabled:u,form:p,...h}=t,D={open:e.value===0,disabled:u,value:L.value};return W(_,[...o!=null&&L.value!=null?Y({[o]:L.value}).map(([Q,ae])=>W(Re,ge({features:Le.Hidden,key:Q,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:p,name:Q,value:ae}))):[],q({ourProps:{},theirProps:{...n,...xe(h,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:D,slots:i,attrs:n,name:"Listbox"})])}}}),je=F({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-listbox-button-${H()}`}},setup(t,{attrs:i,slots:n,expose:d}){let e=U("ListboxButton");d({el:e.buttonRef,$el:e.buttonRef});function c(a){switch(a.key){case g.Space:case g.Enter:case g.ArrowDown:a.preventDefault(),e.openListbox(),$(()=>{var l;(l=x(e.optionsRef))==null||l.focus({preventScroll:!0}),e.value.value||e.goToOption(O.First)});break;case g.ArrowUp:a.preventDefault(),e.openListbox(),$(()=>{var l;(l=x(e.optionsRef))==null||l.focus({preventScroll:!0}),e.value.value||e.goToOption(O.Last)});break}}function v(a){switch(a.key){case g.Space:a.preventDefault();break}}function b(a){e.disabled.value||(e.listboxState.value===0?(e.closeListbox(),$(()=>{var l;return(l=x(e.buttonRef))==null?void 0:l.focus({preventScroll:!0})})):(a.preventDefault(),e.openListbox(),Ae(()=>{var l;return(l=x(e.optionsRef))==null?void 0:l.focus({preventScroll:!0})})))}let f=Se(m(()=>({as:t.as,type:i.type})),e.buttonRef);return()=>{var a,l;let y={open:e.listboxState.value===0,disabled:e.disabled.value,value:e.value.value},{id:k,...R}=t,L={ref:e.buttonRef,id:k,type:f.value,"aria-haspopup":"listbox","aria-controls":(a=x(e.optionsRef))==null?void 0:a.id,"aria-expanded":e.disabled.value?void 0:e.listboxState.value===0,"aria-labelledby":e.labelRef.value?[(l=x(e.labelRef))==null?void 0:l.id,k].join(" "):void 0,disabled:e.disabled.value===!0?!0:void 0,onKeydown:c,onKeyup:v,onClick:b};return q({ourProps:L,theirProps:R,slot:y,attrs:i,slots:n,name:"ListboxButton"})}}}),Ne=F({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-listbox-options-${H()}`}},setup(t,{attrs:i,slots:n,expose:d}){let e=U("ListboxOptions"),c=w(null);d({el:e.optionsRef,$el:e.optionsRef});function v(a){switch(c.value&&clearTimeout(c.value),a.key){case g.Space:if(e.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),e.search(a.key);case g.Enter:if(a.preventDefault(),a.stopPropagation(),e.activeOptionIndex.value!==null){let l=e.options.value[e.activeOptionIndex.value];e.select(l.dataRef.value)}e.mode.value===0&&(e.closeListbox(),$(()=>{var l;return(l=x(e.buttonRef))==null?void 0:l.focus({preventScroll:!0})}));break;case P(e.orientation.value,{vertical:g.ArrowDown,horizontal:g.ArrowRight}):return a.preventDefault(),a.stopPropagation(),e.goToOption(O.Next);case P(e.orientation.value,{vertical:g.ArrowUp,horizontal:g.ArrowLeft}):return a.preventDefault(),a.stopPropagation(),e.goToOption(O.Previous);case g.Home:case g.PageUp:return a.preventDefault(),a.stopPropagation(),e.goToOption(O.First);case g.End:case g.PageDown:return a.preventDefault(),a.stopPropagation(),e.goToOption(O.Last);case g.Escape:a.preventDefault(),a.stopPropagation(),e.closeListbox(),$(()=>{var l;return(l=x(e.buttonRef))==null?void 0:l.focus({preventScroll:!0})});break;case g.Tab:a.preventDefault(),a.stopPropagation();break;default:a.key.length===1&&(e.search(a.key),c.value=setTimeout(()=>e.clearSearch(),350));break}}let b=ye(),f=m(()=>b!==null?(b.value&z.Open)===z.Open:e.listboxState.value===0);return()=>{var a,l,y,k;let R={open:e.listboxState.value===0},{id:L,...A}=t,T={"aria-activedescendant":e.activeOptionIndex.value===null||(a=e.options.value[e.activeOptionIndex.value])==null?void 0:a.id,"aria-multiselectable":e.mode.value===1?!0:void 0,"aria-labelledby":(k=(l=x(e.labelRef))==null?void 0:l.id)!=null?k:(y=x(e.buttonRef))==null?void 0:y.id,"aria-orientation":e.orientation.value,id:L,onKeydown:v,role:"listbox",tabIndex:0,ref:e.optionsRef};return q({ourProps:T,theirProps:A,slot:R,attrs:i,slots:n,features:G.RenderStrategy|G.Static,visible:f.value,name:"ListboxOptions"})}}}),Me=F({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-listbox.option-${H()}`}},setup(t,{slots:i,attrs:n,expose:d}){let e=U("ListboxOption"),c=w(null);d({el:c,$el:c});let v=m(()=>e.activeOptionIndex.value!==null?e.options.value[e.activeOptionIndex.value].id===t.id:!1),b=m(()=>P(e.mode.value,{[0]:()=>e.compare(V(e.value.value),V(t.value)),[1]:()=>V(e.value.value).some(s=>e.compare(V(s),V(t.value)))})),f=m(()=>P(e.mode.value,{[1]:()=>{var s;let o=V(e.value.value);return((s=e.options.value.find(r=>o.some(u=>e.compare(V(u),V(r.dataRef.value)))))==null?void 0:s.id)===t.id},[0]:()=>b.value})),a=we(c),l=m(()=>({disabled:t.disabled,value:t.value,get textValue(){return a()},domRef:c}));K(()=>e.registerOption(t.id,l)),oe(()=>e.unregisterOption(t.id)),K(()=>{J([e.listboxState,b],()=>{e.listboxState.value===0&&b.value&&P(e.mode.value,{[1]:()=>{f.value&&e.goToOption(O.Specific,t.id)},[0]:()=>{e.goToOption(O.Specific,t.id)}})},{immediate:!0})}),ne(()=>{e.listboxState.value===0&&v.value&&e.activationTrigger.value!==0&&$(()=>{var s,o;return(o=(s=x(c))==null?void 0:s.scrollIntoView)==null?void 0:o.call(s,{block:"nearest"})})});function y(s){if(t.disabled)return s.preventDefault();e.select(t.value),e.mode.value===0&&(e.closeListbox(),$(()=>{var o;return(o=x(e.buttonRef))==null?void 0:o.focus({preventScroll:!0})}))}function k(){if(t.disabled)return e.goToOption(O.Nothing);e.goToOption(O.Specific,t.id)}let R=ke();function L(s){R.update(s)}function A(s){R.wasMoved(s)&&(t.disabled||v.value||e.goToOption(O.Specific,t.id,0))}function T(s){R.wasMoved(s)&&(t.disabled||v.value&&e.goToOption(O.Nothing))}return()=>{let{disabled:s}=t,o={active:v.value,selected:b.value,disabled:s},{id:r,value:u,disabled:p,...h}=t,D={id:r,ref:c,role:"option",tabIndex:s===!0?void 0:-1,"aria-disabled":s===!0?!0:void 0,"aria-selected":b.value,disabled:void 0,onClick:y,onFocus:k,onPointerenter:L,onMouseenter:L,onPointermove:A,onMousemove:A,onPointerleave:T,onMouseleave:T};return q({ourProps:D,theirProps:h,slot:o,attrs:n,slots:i,name:"ListboxOption"})}}});const Ee=["id","value","name"],_e=["for"],Ze={__name:"CheckBoxesFrom",props:{questionIndex:[Number,String],options:Array,modelValue:{type:[Number,Object,String,Array],default:[]}},emits:["update:modelValue"],setup(t,{emit:i}){const n=t,d=m({get:()=>n.modelValue,set:e=>i("update:modelValue",e)});return(e,c)=>(I(!0),B(_,null,X(t.options,(v,b)=>(I(),B("div",{key:v.title,class:"flex items-center my-2"},[re(S("input",{id:`checkbox-${b}${t.questionIndex}`,type:"checkbox",value:v.id,"onUpdate:modelValue":c[0]||(c[0]=f=>d.value=f),name:`name-${b}${t.questionIndex}`,class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"},null,8,Ee),[[ue,d.value]]),S("label",{for:`checkbox-${b}${t.questionIndex}`,class:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 first-letter:uppercase"},N(v.title),9,_e)]))),128))}},ze={class:"col-span-4 text-sm font-medium leading-6 text-gray-900 first-letter:uppercase"},Fe={class:"text-red-600 font-mono"},qe={class:"relative mt-1"},Ue={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},Ke=["onClick"],He={key:0,class:"absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600"},Qe={class:"w-full text-end"},We={class:"text-xs text-red-600"},et={__name:"HSelect",props:{options:{type:Array,default:[{id:1,title:"Opción 1"},{id:2,title:"Opción 2"}]},itemValue:{type:String,default:"id"},itemTitle:{type:String,default:"title"},modelValue:{type:[String,Number,Object],default:null},label:{type:[String,Number,Object],default:null},error:{type:[Object],default:{isError:!1,text:null}},isDisabled:{type:Boolean,default:!1},isRequired:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:i}){var c;const n=t,d=m({get:()=>n.modelValue,set:v=>i("update:modelValue",v)}),e=w(d.value?(c=n.options.find(v=>v[`${n.itemValue}`]==d.value))==null?void 0:c[`${n.itemTitle}`]:"Seleccione un item");return(v,b)=>{var f;return I(),B(_,null,[S("div",ze,[se(N(t.label)+" ",1),S("span",Fe,N(t.isRequired?"*":""),1)]),C(j(Ce),{class:"w-full",modelValue:d.value,"onUpdate:modelValue":b[0]||(b[0]=a=>d.value=a)},{default:M(()=>[S("div",qe,[C(j(je),{class:E(["relative block w-full rounded-md h-11 bg-gray-50 p-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6",t.error.isError?"ring-2 ring-red-500":"border-gray-300"])},{default:M(()=>[S("span",{class:E(["block truncate uppercase text-start ms-2",d.value?"text-black":"text-gray-400"])},N(e.value),3),S("span",Ue,[C(j(Te),{class:"h-5 w-5 text-gray-400","aria-hidden":"true"})])]),_:1},8,["class"]),C(de,{"leave-active-class":"transition duration-100 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:M(()=>[C(j(Ne),{class:"absolute mt-1 max-h-60 w-full overflow-auto z-50 rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm uppercase"},{default:M(()=>[(I(!0),B(_,null,X(t.options,a=>(I(),ce(j(Me),{key:a,value:a[`${t.itemValue}`],as:"template",disabled:t.isDisabled},{default:M(({active:l,selected:y})=>[S("li",{class:E([l?"bg-blue-100 text-blue-900":"text-gray-900","relative cursor-default select-none py-2 pl-10 pr-4"]),onClick:()=>e.value=a[`${t.itemTitle}`]},[S("span",{class:E([y?"font-medium text-blue-600":"font-normal","block truncate"])},N(a[`${t.itemTitle}`]),3),y?(I(),B("span",He,[C(j(Ve),{class:"h-5 w-5","aria-hidden":"true"})])):ve("",!0)],10,Ke)]),_:2},1032,["value","disabled"]))),128))]),_:1})]),_:1})])]),_:1},8,["modelValue"]),S("div",Qe,[S("span",We,N((f=t.error)==null?void 0:f.text),1)])],64)}}};export{Ze as _,et as a,Ve as b,Ie as d,Y as e,Te as r};
