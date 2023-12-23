import{w as me,x as ye,r as x,y as ve,z as Ce,_ as k,j as o,A as h,B as T,C as j,D as we,T as Fe,E as Me,F as ke,t as v,G as Te,I as je,S as Re,M as Be,s as u,g as C,H as R,J as B,K as S,O as $,P as F,Q as Se,R as A,U as $e,L as ze,V as Ae,u as Pe,W as Le,b as De,X as Y}from"./index-d1100706.js";import{C as ee,b as te,L as oe,P as ne,e as se,c as ae,p as ie,i as le,a as re,f as de}from"./index-c150f376.js";const We=["className","component"];function He(e={}){const{themeId:t,defaultTheme:n,defaultClassName:s="MuiBox-root",generateClassName:i}=e,a=me("div",{shouldForwardProp:r=>r!=="theme"&&r!=="sx"&&r!=="as"})(ye);return x.forwardRef(function(g,c){const l=ve(n),p=Ce(g),{className:m,component:b="div"}=p,y=k(p,We);return o.jsx(a,h({as:b,ref:c,className:T(m,i?i(s):s),theme:t&&l[t]||l},y))})}const Ne=j("MuiBox",["root"]),Oe=Ne,Ie=we(),Ee=He({themeId:Fe,defaultTheme:Ie,defaultClassName:Oe.root,generateClassName:Me.generate}),Ue=Ee,_e=ke`
  .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper.MuiPaper-elevation {
    background-color: #0F0F0F;
    border-radius: 12px;
    width: 212px;
    height: 144px;
    overflow-y: scroll;
    scrollbar-width: none;
    box-shadow: 0px 4px 14px 0px  rgba(227, 255, 168, 0.2);

    &::-webkit-scrollbar { 
    width: 0;
  }
}
  .css-6hp17o-MuiList-root-MuiMenu-list.MuiList-padding {
     padding-top: 10px;
     padding-bottom: 10px;
     background-color: #0F0F0F;
  }`,M=["January","February","March","April","May","June","July","August","September","October","November","December"],Je=e=>o.jsx("svg",{...e,width:"16",height:"16",fill:"red",viewBox:"0 0 32 32",children:o.jsx("path",{d:"M5.067 11.019c-0.403 0.175-0.604 0.484-0.604 0.932 0 0.247 0.028 0.339 0.164 0.533 0.227 0.324 8.995 9.063 9.293 9.261 0.695 0.464 1.221 0.621 2.080 0.621s1.384-0.157 2.080-0.621c0.341-0.228 9.152-9.031 9.317-9.309 0.161-0.272 0.187-0.692 0.056-0.944-0.168-0.326-0.503-0.546-0.888-0.546-0.132 0-0.258 0.026-0.373 0.072l0.007-0.002c-0.14 0.057-1.545 1.425-4.705 4.581-3.096 3.091-4.581 4.537-4.747 4.624-0.203 0.105-0.319 0.125-0.747 0.125s-0.544-0.020-0.747-0.125c-0.165-0.087-1.651-1.533-4.747-4.624-3.16-3.156-4.565-4.524-4.705-4.581-0.107-0.048-0.232-0.077-0.364-0.077-0.134 0-0.261 0.029-0.376 0.082l0.006-0.002z"})});function Ve({onChange:e}){return o.jsxs(o.Fragment,{children:[o.jsx(Ue,{sx:{minWidth:116,[v.breakpoints.up("tablet")]:{minWidth:140},paddingRight:"0px",border:"none",padding:"0px","& .MuiOutlinedInput-notchedOutline":{border:"none"},"&:hover .MuiOutlinedInput-notchedOutline":{border:"none"},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{border:"none"}},children:o.jsxs(Te,{fullWidth:!0,children:[o.jsx(je,{id:"demo-simple-select-label",sx:{color:"#FFFFFF",fontFamily:"Poppins500",fontWeight:"500",fontSize:"24px",lineHeight:"1.25",top:"-20px",left:"-16px",[v.breakpoints.up("tablet")]:{fontSize:"30px"},"&.Mui-focused":{color:"#FFFFFF",fontSize:"24px",transform:"translate(14px, 9px) scale(1)"}},children:"Months"}),o.jsx(Re,{IconComponent:Je,labelId:"demo-simple-select-label",id:"demo-simple-select",value:"",label:"Month",onChange:e,sx:{"& .MuiSelect-select":{color:"#FFFFFF",padding:"0px"},"& .MuiSelect-icon ":{fill:"#e3ffa8",right:"0px",[v.breakpoints.up("tablet")]:{top:"8px",right:"2px"}}},children:M.map(t=>o.jsx(Be,{value:t,sx:{color:"#B6B6B6",fontFamily:"Poppins400",fontWeight:"400",paddingLeft:"16px",paddingTop:"4px",paddingBottom:"4px",backgroundColor:"#0F0F0F",fontSize:"14px",lineHeight:"1.4","&:hover":{color:"#E3FFA8",backgroundColor:"rgba(255, 255, 255, 0.03)"}},children:t},t))})]})}),o.jsx(_e,{})]})}const Ye=u.h3`
  font-family: 'Poppins500';
  font-weight: 500;
  font-size: 16px;

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 1.3;
  }
`,qe=({month:e})=>o.jsx(Ye,{children:e}),ce=e=>e.monthStatistics.calories,pe=e=>e.monthStatistics.water,ge=e=>e.monthStatistics.weight,Ge=e=>e.monthStatistics.isLoading,Ke=e=>e.monthStatistics.error;function ue(e,t){return new Date(e,t,0).getDate()}const I=new Date,Qe=I.getFullYear(),Xe=I.getMonth()+1,Ze=I.getDate();function xe(e,t){let n=[],s=[],i=0;const a=M.indexOf(t)+1,d=ue(Qe,a),r=e==null?void 0:e.flatMap(c=>new Date(c.date).getDate());for(let c=0;c<d;c++)if((e==null?void 0:e.length)>0){if(r.includes(c+1)){let l=e==null?void 0:e.find(p=>new Date(p.date).getDate()===c+1);s.push(l.value)}else Xe===a&&c+1>Ze?s.push(null):s.push(i);n.push(c+1)}else n.push(c+1);return(e==null?void 0:e.length)===0&&(s=null),{values:s,days:n}}ee.register(te,oe,ne,se,ae,ie,le,re);const et={elements:{point:{backgroundColor:"#E3FFA8",borderWidth:1,radius:.9,hoverRadius:5},line:{backgroundColor:"#E3FFA8",borderColor:"#E3FFA8",borderWidth:1,tension:.29}},plugins:{legend:{display:!1},tooltip:{backgroundColor:"#0F0F0F",titleColor:"#FFFFFF",bodyColor:"#B6B6B6",bodyAlign:"center",caretSize:0,cornerRadius:8,padding:{top:8,right:6,bottom:8,left:6},titleMarginBottom:2,borderColor:"rgba(255, 255, 255, 0.1)",borderWidth:3,enabled:!0,displayColors:!1,usePointStyle:!0,titleFont:{family:"Poppins500",size:32,lineHeight:1.18,weight:"normal"},bodyFont:{family:"Poppins400",size:14,lineHeight:1.4,weight:"normal"},xAlign:"left",yAlign:"bottom",callbacks:{title:e=>e[0].parsed.y,label:()=>"calories"}}},responsive:!0,scales:{x:{grid:{color:"#292928",weight:"1px"}},y:{min:0,max:3e3,ticks:{callback:e=>`${e/1e3} K`,stepSize:1e3},grid:{color:"#292928",weight:"1px"}}}},tt=({month:e})=>{const t=C(ce),n=xe(t,e),s=n.days,i=n.values;return o.jsx(de,{options:et,data:{labels:s,datasets:[{data:i}]}})};ee.register(te,oe,ne,se,ae,ie,le,re);const ot={elements:{point:{backgroundColor:"#E3FFA8",borderWidth:1,radius:.9,hoverRadius:5},line:{backgroundColor:"#E3FFA8",borderColor:"#E3FFA8",borderWidth:1,tension:.29}},plugins:{legend:{display:!1},tooltip:{backgroundColor:"#0F0F0F",titleColor:"#FFFFFF",bodyColor:"#B6B6B6",bodyAlign:"center",caretSize:0,cornerRadius:8,padding:{top:8,right:6,bottom:8,left:6},titleMarginBottom:2,borderColor:"rgba(255, 255, 255, 0.1)",borderWidth:3,enabled:!0,displayColors:!1,usePointStyle:!0,titleFont:{family:"Poppins500",size:32,lineHeight:1.18,weight:"normal"},bodyFont:{family:"Poppins400",size:14,lineHeight:1.4,weight:"normal"},xAlign:"left",yAlign:"bottom",callbacks:{title:e=>e[0].parsed.y,label:()=>"milliliters"}}},responsive:!0,scales:{x:{grid:{color:"#292928",weight:"1px"}},y:{min:0,max:3e3,ticks:{callback:e=>`${e/1e3} L`,stepSize:1e3},grid:{color:"#292928",weight:"1px"}}}},nt=({month:e})=>{const t=C(pe),n=xe(t,e),s=n.days,i=n.values;return o.jsx(de,{options:ot,data:{labels:s,datasets:[{data:i}]}})},st=x.createContext(),he=st;function at(e){return R("MuiTable",e)}j("MuiTable",["root","stickyHeader"]);const it=["className","component","padding","size","stickyHeader"],lt=e=>{const{classes:t,stickyHeader:n}=e;return $({root:["root",n&&"stickyHeader"]},at,t)},rt=B("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>h({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":h({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"})),q="table",dt=x.forwardRef(function(t,n){const s=S({props:t,name:"MuiTable"}),{className:i,component:a=q,padding:d="normal",size:r="medium",stickyHeader:g=!1}=s,c=k(s,it),l=h({},s,{component:a,padding:d,size:r,stickyHeader:g}),p=lt(l),m=x.useMemo(()=>({padding:d,size:r,stickyHeader:g}),[d,r,g]);return o.jsx(he.Provider,{value:m,children:o.jsx(rt,h({as:a,role:a===q?null:"table",ref:n,className:T(p.root,i),ownerState:l},c))})}),ct=dt,pt=x.createContext(),E=pt;function gt(e){return R("MuiTableBody",e)}j("MuiTableBody",["root"]);const ut=["className","component"],xt=e=>{const{classes:t}=e;return $({root:["root"]},gt,t)},ht=B("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),bt={variant:"body"},G="tbody",ft=x.forwardRef(function(t,n){const s=S({props:t,name:"MuiTableBody"}),{className:i,component:a=G}=s,d=k(s,ut),r=h({},s,{component:a}),g=xt(r);return o.jsx(E.Provider,{value:bt,children:o.jsx(ht,h({className:T(g.root,i),as:a,ref:n,role:a===G?null:"rowgroup",ownerState:r},d))})}),mt=ft;function yt(e){return R("MuiTableCell",e)}const vt=j("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),Ct=vt,wt=["align","className","component","padding","scope","size","sortDirection","variant"],Ft=e=>{const{classes:t,variant:n,align:s,padding:i,size:a,stickyHeader:d}=e,r={root:["root",n,d&&"stickyHeader",s!=="inherit"&&`align${F(s)}`,i!=="normal"&&`padding${F(i)}`,`size${F(a)}`]};return $(r,yt,t)},Mt=B("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`size${F(n.size)}`],n.padding!=="normal"&&t[`padding${F(n.padding)}`],n.align!=="inherit"&&t[`align${F(n.align)}`],n.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>h({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode==="light"?Se(A(e.palette.divider,1),.88):$e(A(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},t.variant==="head"&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},t.variant==="body"&&{color:(e.vars||e).palette.text.primary},t.variant==="footer"&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},t.size==="small"&&{padding:"6px 16px",[`&.${Ct.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},t.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},t.padding==="none"&&{padding:0},t.align==="left"&&{textAlign:"left"},t.align==="center"&&{textAlign:"center"},t.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},t.align==="justify"&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),kt=x.forwardRef(function(t,n){const s=S({props:t,name:"MuiTableCell"}),{align:i="inherit",className:a,component:d,padding:r,scope:g,size:c,sortDirection:l,variant:p}=s,m=k(s,wt),b=x.useContext(he),y=x.useContext(E),w=y&&y.variant==="head";let f;d?f=d:f=w?"th":"td";let z=g;f==="td"?z=void 0:!z&&w&&(z="col");const _=p||y&&y.variant,J=h({},s,{align:i,component:f,padding:r||(b&&b.padding?b.padding:"normal"),size:c||(b&&b.size?b.size:"medium"),sortDirection:l,stickyHeader:_==="head"&&b&&b.stickyHeader,variant:_}),fe=Ft(J);let V=null;return l&&(V=l==="asc"?"ascending":"descending"),o.jsx(Mt,h({as:f,ref:n,className:T(fe.root,a),"aria-sort":V,scope:z,ownerState:J},m))}),K=kt;function Tt(e){return R("MuiTableContainer",e)}j("MuiTableContainer",["root"]);const jt=["className","component"],Rt=e=>{const{classes:t}=e;return $({root:["root"]},Tt,t)},Bt=B("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),St=x.forwardRef(function(t,n){const s=S({props:t,name:"MuiTableContainer"}),{className:i,component:a="div"}=s,d=k(s,jt),r=h({},s,{component:a}),g=Rt(r);return o.jsx(Bt,h({ref:n,as:a,className:T(g.root,i),ownerState:r},d))}),$t=St;function zt(e){return R("MuiTableRow",e)}const At=j("MuiTableRow",["root","selected","hover","head","footer"]),Q=At,Pt=["className","component","hover","selected"],Lt=e=>{const{classes:t,selected:n,hover:s,head:i,footer:a}=e;return $({root:["root",n&&"selected",s&&"hover",i&&"head",a&&"footer"]},zt,t)},Dt=B("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.head&&t.head,n.footer&&t.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${Q.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${Q.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:A(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:A(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),X="tr",Wt=x.forwardRef(function(t,n){const s=S({props:t,name:"MuiTableRow"}),{className:i,component:a=X,hover:d=!1,selected:r=!1}=s,g=k(s,Pt),c=x.useContext(E),l=h({},s,{component:a,hover:d,selected:r,head:c&&c.variant==="head",footer:c&&c.variant==="footer"}),p=Lt(l);return o.jsx(Dt,h({as:a,ref:n,className:T(p.root,i),role:a===X?null:"row",ownerState:l},g))}),be=Wt,Ht=u(be)({"& .MuiTableCell-root":{fontFamily:"Poppins400, sans-serif",fontSize:"14px",lineHeight:"1.4",color:"#FFFFFF",borderBottom:"none",paddingTop:"24px",paddingLeft:"12px",paddingRight:"12px",paddingBottom:"8px",textAlign:"center",[v.breakpoints.up("tablet")]:{fontSize:"10px",lineHeight:"1.6",paddingLeft:"3px",paddingRight:"3px",paddingBottom:"6px"},[v.breakpoints.up("desktop")]:{fontSize:"14px",lineHeight:"1.4",paddingLeft:"12px",paddingRight:"12px",paddingBottom:"8px"}}}),Nt=u(be)({"& .MuiTableCell-root":{fontFamily:"Poppins400, sans-serif",fontSize:"10px",lineHeight:"1.4",color:"#B6B6B6",borderBottom:"none",paddingTop:"8px",paddingLeft:"15px",paddingRight:"15px",paddingBottom:"36px",textAlign:"center",[v.breakpoints.up("tablet")]:{paddingTop:"6px",paddingLeft:"5px",paddingRight:"5px",paddingBottom:"44px"},[v.breakpoints.up("desktop")]:{paddingTop:"8px",paddingLeft:"15px",paddingRight:"15px",paddingBottom:"36px"}}}),U=new Date,Ot=U.getFullYear(),It=U.getMonth()+1,Et=U.getDate();function Ut(e,t){let n=[],s=[],i=0;(e==null?void 0:e.length)>0&&(i=e[0].value);let a=0;const d=M.indexOf(t)+1,r=ue(Ot,d),g=e==null?void 0:e.flatMap(l=>new Date(l.date).getDate());for(let l=0;l<r;l++)if((e==null?void 0:e.length)>0){if(g.includes(l+1)){let p=e==null?void 0:e.find(m=>new Date(m.date).getDate()===l+1);s.push(p.value),i=p.value}else It===d&&l+1>Et?s.push(a):s.push(i);n.push(l+1)}else s.push(a),n.push(l+1);return{values:s,days:n}}const _t=({month:e})=>{const t=C(ge),n=Ut(t,e);let s=n.days,i=n.values;return o.jsx(o.Fragment,{children:o.jsx($t,{sx:{backgroundColor:"#0F0F0F",borderRadius:"12px",paddingLeft:"10px",paddingRight:"10px",[v.breakpoints.up("tablet")]:{paddingLeft:"20px",paddingRight:"20px"},[v.breakpoints.up("desktop")]:{paddingLeft:"10px",paddingRight:"10px"},"&::-webkit-scrollbar":{height:"8px"},"&::-webkit-scrollbar-thumb":{backgroundColor:"rgb(255, 255, 255, 0.1)",outline:"1px solid rgb(255, 255, 255, 0.1)",borderRadius:"12px"}},children:o.jsx(ct,{sx:{minWidth:650},"aria-label":"simple table",children:o.jsxs(mt,{children:[o.jsx(Ht,{sx:{"&:last-child td, &:last-child th":{border:0}},children:i==null?void 0:i.map((a,d)=>o.jsx(K,{component:"th",scope:"row",children:a},d))}),o.jsx(Nt,{sx:{"&:last-child td, &:last-child th":{border:0}},children:s==null?void 0:s.map(a=>o.jsx(K,{align:"right",children:a},a))})]})})})})},Jt=u.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;

  @media screen and (min-width: 1440px) {
    padding-bottom: 40px;
  }
`,Vt=u.div`
  display: flex;
  justify-content: space-between;
`,Yt=u.div`
  display: flex;
  gap: 6px;

  @media screen and (min-width: 834px) {
    gap: 12px;
  }
`,qt=u.div`
  display: inline-block;
  max-width: 15px;
  max-height: 20px;

  svg {
    &:hover,
    &:focus {
      fill: #e3ffa8;
    }
  }
  @media screen and (min-width: 834px) {
    max-width: 24px;
    max-height: 24px;
  }
`,Gt=u(ze)`
  color: #ffffff;
`,Kt=u.svg`
  width: 16px;
  height: 16px;
  transform: rotate(180deg);
  fill: var(--primary-color-grey);

  @media screen and (min-width: 834px) {
    width: 24px;
    height: 24px;
  }
`,Qt=u.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 26px;
  gap: 26px;

  @media screen and (min-width: 834px) {
    margin-bottom: 40px;
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    margin-bottom: 20px;
    gap: 20px;
  }
`,P=u.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,L=u.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  @media screen and (min-width: 834px) {
    justify-content: start;
    gap: 40px;
  }
`,D=u.h2`
  font-family: 'Poppins400';
  font-weight: 400;
  font-size: 18px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.5;
  }
`,W=u.p`
  font-family: 'Poppins400';
  font-weight: 400;
`,H=u.span`
  font-family: 'Poppins500';
  font-weight: 500;
  color: var(--primary-color-grey);
  margin-left: 8px;
`,Z=u.div`
  cursor: pointer;
  background-color: var(--primary-color-black-two);
  width: 676px;
  border-radius: 12px;
  padding-top: 24px;
  padding-right: 30px;
  padding-bottom: 24px;
  padding-left: 14px;
  /* overflow-x: scroll; */

  /* ::-webkit-scrollbar {
    height: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgb(255, 255, 255, 0.1);
    outline: 1px solid rgb(255, 255, 255, 0.1);
    border-radius: 12px;
  } */

  @media screen and (min-width: 834px) {
    width: 780px;
    padding-right: 30px;
  }

  @media screen and (min-width: 1440px) {
    width: 676px;
    padding-right: 20px;
  }
`;function N(e){if((e==null?void 0:e.length)===0)return 0;const n=(e==null?void 0:e.reduce((s,i)=>s+i.value,0))/(e==null?void 0:e.length);return Math.round(n)}function O(e){if(e)return e.indexOf("/")===-1?e:e.slice(e.indexOf("/")+1,e.length)}const Xt=new Date;let Zt=M[Xt.getMonth()];const eo=()=>{var y;const e=C(ce),t=C(pe),n=C(ge),s=C(Ge),i=C(Ke),a=Ae(),d=((y=a==null?void 0:a.state)==null?void 0:y.from)??"/",r=Pe(),[g,c]=Le(),l=g.get("queryMonth"),[p,m]=x.useState(O(l)??Zt);x.useEffect(()=>{async function w(){try{r(l?Y(M.indexOf(O(l))+1):Y(M.indexOf(O(p))+1))}catch(f){console.log("error",f)}}w()},[p,l,r]);const b=w=>{const f=w.target.value;c({queryMonth:`${Date.now()}/${f}`}),m(f)};return o.jsxs(o.Fragment,{children:[s?o.jsx("p",{children:"Oops! Loading....."}):!i&&o.jsxs(Jt,{children:[o.jsxs(Vt,{children:[o.jsxs(Yt,{children:[o.jsx(qt,{type:"button",children:o.jsx(Gt,{to:d,children:o.jsx(Kt,{children:o.jsx("use",{href:`${De}#icon-arrowright`})})})}),o.jsx(Ve,{month:p,onChange:b})]}),o.jsx(qe,{month:p})]}),o.jsxs(Qt,{children:[o.jsxs(P,{children:[o.jsxs(L,{children:[o.jsx(D,{children:" Calories "}),o.jsxs(W,{children:["Average value:"," ",o.jsxs(H,{children:[N(e)," cal"]})]})]}),o.jsx(Z,{children:o.jsx(tt,{month:p})})]}),o.jsxs(P,{children:[o.jsxs(L,{children:[o.jsx(D,{children:" Water "}),o.jsxs(W,{children:["Average value:"," ",o.jsxs(H,{children:[N(t)," ml"]})]})]}),o.jsx(Z,{children:o.jsx(nt,{month:p})})]})]}),o.jsxs(P,{children:[o.jsxs(L,{children:[o.jsx(D,{children:" Weight "}),o.jsxs(W,{children:["Average value:"," ",o.jsxs(H,{children:[N(n)," kg"]})]})]}),o.jsx(_t,{month:p})]})]}),i&&!s&&o.jsx("p",{children:"Oops! Something went wrong!"})]})},no=()=>o.jsx(eo,{});export{no as default};
