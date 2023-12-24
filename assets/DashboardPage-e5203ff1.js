import{x as ye,y as ve,r as h,z as Ce,A as we,_ as k,j as o,B as x,C as j,D as T,G as Fe,T as Me,H as ke,I as je,t as m,J as Te,K as Re,S as $e,M as Be,s as g,g as C,O as R,P as $,Q as B,R as S,U as M,V as Se,W as A,X as ze,L as Ae,Y as De,u as Pe,Z as We,k as Le,$ as X}from"./index-be77791b.js";import{C as ne,b as se,L as ae,P as ie,e as le,c as re,p as de,i as ce,a as pe,f as ue}from"./index-862d0a23.js";const He=["className","component"];function Oe(e={}){const{themeId:t,defaultTheme:s,defaultClassName:n="MuiBox-root",generateClassName:a}=e,i=ye("div",{shouldForwardProp:d=>d!=="theme"&&d!=="sx"&&d!=="as"})(ve);return h.forwardRef(function(u,l){const r=Ce(s),p=we(u),{className:y,component:b="div"}=p,v=k(p,He);return o.jsx(i,x({as:b,ref:l,className:j(y,a?a(n):n),theme:t&&r[t]||r},v))})}const Ne=T("MuiBox",["root"]),Ie=Ne,Ee=Fe(),Ue=Oe({themeId:Me,defaultTheme:Ee,defaultClassName:Ie.root,generateClassName:ke.generate}),_e=Ue,Ye=je`
  .MuiPaper-root.MuiMenu-paper {
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
  .MuiList-root {
     padding-top: 10px;
     padding-bottom: 10px;
  }

   .MuiMenu-list {
    background-color: #0F0F0F;
  }

  .MuiButtonBase-root.MuiMenuItem-root{
    min-height: 1px;
  }
`,w=["January","February","March","April","May","June","July","August","September","October","November","December"],Ve=e=>o.jsx("svg",{...e,width:"16",height:"16",fill:"red",viewBox:"0 0 32 32",children:o.jsx("path",{d:"M5.067 11.019c-0.403 0.175-0.604 0.484-0.604 0.932 0 0.247 0.028 0.339 0.164 0.533 0.227 0.324 8.995 9.063 9.293 9.261 0.695 0.464 1.221 0.621 2.080 0.621s1.384-0.157 2.080-0.621c0.341-0.228 9.152-9.031 9.317-9.309 0.161-0.272 0.187-0.692 0.056-0.944-0.168-0.326-0.503-0.546-0.888-0.546-0.132 0-0.258 0.026-0.373 0.072l0.007-0.002c-0.14 0.057-1.545 1.425-4.705 4.581-3.096 3.091-4.581 4.537-4.747 4.624-0.203 0.105-0.319 0.125-0.747 0.125s-0.544-0.020-0.747-0.125c-0.165-0.087-1.651-1.533-4.747-4.624-3.16-3.156-4.565-4.524-4.705-4.581-0.107-0.048-0.232-0.077-0.364-0.077-0.134 0-0.261 0.029-0.376 0.082l0.006-0.002z"})});function Je({onChange:e}){return o.jsxs(o.Fragment,{children:[o.jsx(_e,{sx:{minWidth:116,[m.breakpoints.up("tablet")]:{minWidth:140},paddingRight:"0px",border:"none",padding:"0px","& .MuiOutlinedInput-notchedOutline":{border:"none"},"&:hover .MuiOutlinedInput-notchedOutline":{border:"none"},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{border:"none"}},children:o.jsxs(Te,{fullWidth:!0,children:[o.jsx(Re,{id:"demo-simple-select-label",sx:{color:"#FFFFFF",fontFamily:"Poppins500",fontWeight:"500",fontSize:"24px",lineHeight:"1.25",top:"-20px",left:"-16px",[m.breakpoints.up("tablet")]:{fontSize:"30px"},"&.Mui-focused":{color:"#FFFFFF",fontSize:"24px",transform:"translate(14px, 9px) scale(1)"}},children:"Months"}),o.jsx($e,{IconComponent:Ve,labelId:"demo-simple-select-label",id:"demo-simple-select",value:"",label:"Month",onChange:e,sx:{"& .MuiSelect-select":{color:"#FFFFFF",padding:"0px"},"& .MuiSelect-icon ":{fill:"#e3ffa8",right:"0px",[m.breakpoints.up("tablet")]:{top:"8px",right:"2px"}}},children:w.map(t=>o.jsx(Be,{value:t,sx:{color:"#B6B6B6",fontFamily:"Poppins400",fontWeight:"400",paddingLeft:"16px",paddingTop:"4px",paddingBottom:"4px",backgroundColor:"#0F0F0F",fontSize:"14px",lineHeight:"1.4","&:hover":{color:"#E3FFA8",backgroundColor:"rgba(255, 255, 255, 0.03)"}},children:t},t))})]})}),o.jsx(Ye,{})]})}const Xe=g.h3`
  font-family: 'Poppins500';
  font-weight: 500;
  font-size: 16px;

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 1.3;
  }
`,qe=({month:e})=>o.jsx(Xe,{children:e}),ge=e=>e.monthStatistics.calories,he=e=>e.monthStatistics.water,xe=e=>e.monthStatistics.weight,Ge=e=>e.monthStatistics.isLoading,Ke=e=>e.monthStatistics.error;function N(e,t){return new Date(e,t,0).getDate()}const I=new Date,Qe=I.getFullYear(),Ze=I.getMonth()+1,et=I.getDate();function tt(e,t){let s=[],n=[],a=0;const i=w.indexOf(t)+1,c=N(Qe,i),d=e==null?void 0:e.flatMap(l=>new Date(l.date).getDate());for(let l=0;l<c;l++)if((e==null?void 0:e.length)>0){if(d.includes(l+1)){let r=e==null?void 0:e.find(p=>new Date(p.date).getDate()===l+1);n.push(r.totalCalories)}else Ze===i&&l+1>et?n.push(null):n.push(a);s.push(l+1)}else s.push(l+1);return(e==null?void 0:e.length)===0&&(n=null),{values:n,days:s}}ne.register(se,ae,ie,le,re,de,ce,pe);const ot={elements:{point:{backgroundColor:"#E3FFA8",borderWidth:1,radius:.9,hoverRadius:5},line:{backgroundColor:"#E3FFA8",borderColor:"#E3FFA8",borderWidth:1,tension:.29}},plugins:{legend:{display:!1},tooltip:{backgroundColor:"#0F0F0F",titleColor:"#FFFFFF",bodyColor:"#B6B6B6",bodyAlign:"center",caretSize:0,cornerRadius:8,padding:{top:8,right:6,bottom:8,left:6},titleMarginBottom:2,borderColor:"rgba(255, 255, 255, 0.1)",borderWidth:3,enabled:!0,displayColors:!1,usePointStyle:!0,titleFont:{family:"Poppins500",size:32,lineHeight:1.18,weight:"normal"},bodyFont:{family:"Poppins400",size:14,lineHeight:1.4,weight:"normal"},xAlign:"left",yAlign:"bottom",callbacks:{title:e=>e[0].parsed.y,label:()=>"calories"}}},responsive:!0,scales:{x:{grid:{color:"#292928",weight:"1px"}},y:{min:0,max:3e3,ticks:{callback:e=>`${e/1e3} K`,stepSize:1e3},grid:{color:"#292928",weight:"1px"}}}},nt=({month:e})=>{const t=C(ge),s=tt(t,e),n=s.days,a=s.values;return o.jsx(ue,{options:ot,data:{labels:n,datasets:[{data:a}]}})},E=new Date,st=E.getFullYear(),at=E.getMonth()+1,it=E.getDate();function lt(e,t){let s=[],n=[],a=0;const i=w.indexOf(t)+1,c=N(st,i),d=e==null?void 0:e.flatMap(l=>new Date(l.date).getDate());for(let l=0;l<c;l++)if((e==null?void 0:e.length)>0){if(d.includes(l+1)){let r=e==null?void 0:e.find(p=>new Date(p.date).getDate()===l+1);n.push(r.value)}else at===i&&l+1>it?n.push(null):n.push(a);s.push(l+1)}else s.push(l+1);return(e==null?void 0:e.length)===0&&(n=null),{values:n,days:s}}ne.register(se,ae,ie,le,re,de,ce,pe);const rt={elements:{point:{backgroundColor:"#E3FFA8",borderWidth:1,radius:.9,hoverRadius:5},line:{backgroundColor:"#E3FFA8",borderColor:"#E3FFA8",borderWidth:1,tension:.29}},plugins:{legend:{display:!1},tooltip:{backgroundColor:"#0F0F0F",titleColor:"#FFFFFF",bodyColor:"#B6B6B6",bodyAlign:"center",caretSize:0,cornerRadius:8,padding:{top:8,right:6,bottom:8,left:6},titleMarginBottom:2,borderColor:"rgba(255, 255, 255, 0.1)",borderWidth:3,enabled:!0,displayColors:!1,usePointStyle:!0,titleFont:{family:"Poppins500",size:32,lineHeight:1.18,weight:"normal"},bodyFont:{family:"Poppins400",size:14,lineHeight:1.4,weight:"normal"},xAlign:"left",yAlign:"bottom",callbacks:{title:e=>e[0].parsed.y,label:()=>"milliliters"}}},responsive:!0,scales:{x:{grid:{color:"#292928",weight:"1px"}},y:{min:0,max:3e3,ticks:{callback:e=>`${e/1e3} L`,stepSize:1e3},grid:{color:"#292928",weight:"1px"}}}},dt=({month:e})=>{const t=C(he),s=lt(t,e),n=s.days,a=s.values;return o.jsx(ue,{options:rt,data:{labels:n,datasets:[{data:a}]}})},ct=h.createContext(),be=ct;function pt(e){return R("MuiTable",e)}T("MuiTable",["root","stickyHeader"]);const ut=["className","component","padding","size","stickyHeader"],gt=e=>{const{classes:t,stickyHeader:s}=e;return S({root:["root",s&&"stickyHeader"]},pt,t)},ht=$("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>x({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":x({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"})),q="table",xt=h.forwardRef(function(t,s){const n=B({props:t,name:"MuiTable"}),{className:a,component:i=q,padding:c="normal",size:d="medium",stickyHeader:u=!1}=n,l=k(n,ut),r=x({},n,{component:i,padding:c,size:d,stickyHeader:u}),p=gt(r),y=h.useMemo(()=>({padding:c,size:d,stickyHeader:u}),[c,d,u]);return o.jsx(be.Provider,{value:y,children:o.jsx(ht,x({as:i,role:i===q?null:"table",ref:s,className:j(p.root,a),ownerState:r},l))})}),bt=xt,ft=h.createContext(),U=ft;function mt(e){return R("MuiTableBody",e)}T("MuiTableBody",["root"]);const yt=["className","component"],vt=e=>{const{classes:t}=e;return S({root:["root"]},mt,t)},Ct=$("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),wt={variant:"body"},G="tbody",Ft=h.forwardRef(function(t,s){const n=B({props:t,name:"MuiTableBody"}),{className:a,component:i=G}=n,c=k(n,yt),d=x({},n,{component:i}),u=vt(d);return o.jsx(U.Provider,{value:wt,children:o.jsx(Ct,x({className:j(u.root,a),as:i,ref:s,role:i===G?null:"rowgroup",ownerState:d},c))})}),Mt=Ft;function kt(e){return R("MuiTableCell",e)}const jt=T("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),Tt=jt,Rt=["align","className","component","padding","scope","size","sortDirection","variant"],$t=e=>{const{classes:t,variant:s,align:n,padding:a,size:i,stickyHeader:c}=e,d={root:["root",s,c&&"stickyHeader",n!=="inherit"&&`align${M(n)}`,a!=="normal"&&`padding${M(a)}`,`size${M(i)}`]};return S(d,kt,t)},Bt=$("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[s.variant],t[`size${M(s.size)}`],s.padding!=="normal"&&t[`padding${M(s.padding)}`],s.align!=="inherit"&&t[`align${M(s.align)}`],s.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>x({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode==="light"?Se(A(e.palette.divider,1),.88):ze(A(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},t.variant==="head"&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},t.variant==="body"&&{color:(e.vars||e).palette.text.primary},t.variant==="footer"&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},t.size==="small"&&{padding:"6px 16px",[`&.${Tt.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},t.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},t.padding==="none"&&{padding:0},t.align==="left"&&{textAlign:"left"},t.align==="center"&&{textAlign:"center"},t.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},t.align==="justify"&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),St=h.forwardRef(function(t,s){const n=B({props:t,name:"MuiTableCell"}),{align:a="inherit",className:i,component:c,padding:d,scope:u,size:l,sortDirection:r,variant:p}=n,y=k(n,Rt),b=h.useContext(be),v=h.useContext(U),F=v&&v.variant==="head";let f;c?f=c:f=F?"th":"td";let z=u;f==="td"?z=void 0:!z&&F&&(z="col");const Y=p||v&&v.variant,V=x({},n,{align:a,component:f,padding:d||(b&&b.padding?b.padding:"normal"),size:l||(b&&b.size?b.size:"medium"),sortDirection:r,stickyHeader:Y==="head"&&b&&b.stickyHeader,variant:Y}),me=$t(V);let J=null;return r&&(J=r==="asc"?"ascending":"descending"),o.jsx(Bt,x({as:f,ref:s,className:j(me.root,i),"aria-sort":J,scope:z,ownerState:V},y))}),K=St;function zt(e){return R("MuiTableContainer",e)}T("MuiTableContainer",["root"]);const At=["className","component"],Dt=e=>{const{classes:t}=e;return S({root:["root"]},zt,t)},Pt=$("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),Wt=h.forwardRef(function(t,s){const n=B({props:t,name:"MuiTableContainer"}),{className:a,component:i="div"}=n,c=k(n,At),d=x({},n,{component:i}),u=Dt(d);return o.jsx(Pt,x({ref:s,as:i,className:j(u.root,a),ownerState:d},c))}),Lt=Wt;function Ht(e){return R("MuiTableRow",e)}const Ot=T("MuiTableRow",["root","selected","hover","head","footer"]),Q=Ot,Nt=["className","component","hover","selected"],It=e=>{const{classes:t,selected:s,hover:n,head:a,footer:i}=e;return S({root:["root",s&&"selected",n&&"hover",a&&"head",i&&"footer"]},Ht,t)},Et=$("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.head&&t.head,s.footer&&t.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${Q.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${Q.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:A(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:A(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),Z="tr",Ut=h.forwardRef(function(t,s){const n=B({props:t,name:"MuiTableRow"}),{className:a,component:i=Z,hover:c=!1,selected:d=!1}=n,u=k(n,Nt),l=h.useContext(U),r=x({},n,{component:i,hover:c,selected:d,head:l&&l.variant==="head",footer:l&&l.variant==="footer"}),p=It(r);return o.jsx(Et,x({as:i,ref:s,className:j(p.root,a),role:i===Z?null:"row",ownerState:r},u))}),fe=Ut,_t=g(fe)({"& .MuiTableCell-root":{fontFamily:"Poppins400, sans-serif",fontSize:"14px",lineHeight:"1.4",color:"#FFFFFF",borderBottom:"none",paddingTop:"24px",paddingLeft:"12px",paddingRight:"12px",paddingBottom:"8px",textAlign:"center",[m.breakpoints.up("tablet")]:{fontSize:"10px",lineHeight:"1.6",paddingLeft:"3px",paddingRight:"3px",paddingBottom:"6px"},[m.breakpoints.up("desktop")]:{fontSize:"14px",lineHeight:"1.4",paddingLeft:"12px",paddingRight:"12px",paddingBottom:"8px"}}}),Yt=g(fe)({"& .MuiTableCell-root":{fontFamily:"Poppins400, sans-serif",fontSize:"10px",lineHeight:"1.4",color:"#B6B6B6",borderBottom:"none",paddingTop:"8px",paddingLeft:"15px",paddingRight:"15px",paddingBottom:"36px",textAlign:"center",[m.breakpoints.up("tablet")]:{paddingTop:"6px",paddingLeft:"5px",paddingRight:"5px",paddingBottom:"44px"},[m.breakpoints.up("desktop")]:{paddingTop:"8px",paddingLeft:"15px",paddingRight:"15px",paddingBottom:"36px"}}}),_=new Date,Vt=_.getFullYear(),Jt=_.getMonth()+1,Xt=_.getDate();function qt(e,t){let s=[],n=[],a=0;(e==null?void 0:e.length)>0&&(a=e[0].value);let i=0;const c=w.indexOf(t)+1,d=N(Vt,c),u=e==null?void 0:e.flatMap(r=>new Date(r.date).getDate());for(let r=0;r<d;r++)if((e==null?void 0:e.length)>0){if(u.includes(r+1)){let p=e==null?void 0:e.find(y=>new Date(y.date).getDate()===r+1);n.push(p.value),a=p.value}else Jt===c&&r+1>Xt?n.push(i):n.push(a);s.push(r+1)}else n.push(i),s.push(r+1);return{values:n,days:s}}const Gt=({month:e})=>{const t=C(xe),s=qt(t,e);let n=s.days,a=s.values;return o.jsx(o.Fragment,{children:o.jsx(Lt,{sx:{[m.breakpoints.down("tablet")]:{width:"100vw"},backgroundColor:"#0F0F0F",borderRadius:"12px",paddingLeft:"10px",paddingRight:"10px",[m.breakpoints.up("tablet")]:{paddingLeft:"20px",paddingRight:"20px"},[m.breakpoints.up("desktop")]:{paddingLeft:"10px",paddingRight:"10px"},"&::-webkit-scrollbar":{height:"2px"},"&::-webkit-scrollbar-thumb":{backgroundColor:"rgb(255, 255, 255, 0.1)",outline:"1px solid rgb(255, 255, 255, 0.1)",borderRadius:"12px"}},children:o.jsx(bt,{sx:{minWidth:650},"aria-label":"simple table",children:o.jsxs(Mt,{children:[o.jsx(_t,{sx:{"&:last-child td, &:last-child th":{border:0}},children:a==null?void 0:a.map((i,c)=>o.jsx(K,{component:"th",scope:"row",children:i},c))}),o.jsx(Yt,{sx:{"&:last-child td, &:last-child th":{border:0}},children:n==null?void 0:n.map(i=>o.jsx(K,{align:"right",children:i},i))})]})})})})},Kt=g.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;

  @media screen and (min-width: 1440px) {
    padding-bottom: 40px;
  }
`,Qt=g.div`
  display: flex;
  justify-content: space-between;
`,Zt=g.div`
  display: flex;
  gap: 6px;

  @media screen and (min-width: 834px) {
    gap: 12px;
  }
`,eo=g.div`
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
`,to=g(Ae)`
  color: #ffffff;
`,oo=g.svg`
  width: 16px;
  height: 16px;
  transform: rotate(180deg);
  fill: var(--primary-color-grey);

  @media screen and (min-width: 834px) {
    width: 24px;
    height: 24px;
  }
`,no=g.div`
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
`,D=g.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,P=g.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  @media screen and (min-width: 834px) {
    justify-content: start;
    gap: 40px;
  }
`,W=g.h2`
  font-family: 'Poppins400';
  font-weight: 400;
  font-size: 18px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.5;
  }
`,L=g.p`
  font-family: 'Poppins400';
  font-weight: 400;
`,H=g.span`
  font-family: 'Poppins500';
  font-weight: 500;
  color: var(--primary-color-grey);
  margin-left: 8px;
`,ee=g.div`
  cursor: pointer;
  background-color: var(--primary-color-black-two);
  min-width: 676px;
  min-height: 382px;
  border-radius: 12px;
  padding-top: 24px;
  padding-right: 30px;
  padding-bottom: 24px;
  padding-left: 14px;

  @media screen and (min-width: 834px) {
    width: 780px;
    padding-right: 30px;
  }

  @media screen and (min-width: 1440px) {
    width: 676px;
    padding-right: 20px;
  }
`,te=g.div`
  @media screen and (max-width: 833px) {
    width: 100vw;
  }
`;function oe(e){if((e==null?void 0:e.length)===0)return 0;const s=(e==null?void 0:e.reduce((n,a)=>n+a.value,0))/(e==null?void 0:e.length);return Math.round(s)}function so(e){if((e==null?void 0:e.length)===0)return 0;const s=(e==null?void 0:e.reduce((n,a)=>n+a.totalCalories,0))/(e==null?void 0:e.length);return Math.round(s)}function O(e){if(e)return e.indexOf("/")===-1?e:e.slice(e.indexOf("/")+1,e.length)}const ao=new Date;let io=w[ao.getMonth()];const lo=()=>{var v;const e=C(ge),t=C(he),s=C(xe),n=C(Ge),a=C(Ke),i=De(),c=((v=i==null?void 0:i.state)==null?void 0:v.from)??"/",d=Pe(),[u,l]=We(),r=u.get("queryMonth"),[p,y]=h.useState(O(r)??io);h.useEffect(()=>{async function F(){try{d(r?X(w.indexOf(O(r))+1):X(w.indexOf(O(p))+1))}catch(f){console.log("error",f)}}F()},[p,r,d]);const b=F=>{const f=F.target.value;l({queryMonth:`${Date.now()}/${f}`}),y(f)};return o.jsxs(o.Fragment,{children:[n?o.jsx("p",{children:"Oops! Loading....."}):!a&&o.jsxs(Kt,{children:[o.jsxs(Qt,{children:[o.jsxs(Zt,{children:[o.jsx(eo,{type:"button",children:o.jsx(to,{to:c,children:o.jsx(oo,{children:o.jsx("use",{href:`${Le}#icon-arrowright`})})})}),o.jsx(Je,{month:p,onChange:b})]}),o.jsx(qe,{month:p})]}),o.jsxs(no,{children:[o.jsxs(D,{children:[o.jsxs(P,{children:[o.jsx(W,{children:" Calories "}),o.jsxs(L,{children:["Average value:"," ",o.jsxs(H,{children:[so(e)," cal"]})]})]}),o.jsx(te,{style:{overflowX:"auto"},children:o.jsx(ee,{children:o.jsx(nt,{month:p})})})]}),o.jsxs(D,{children:[o.jsxs(P,{children:[o.jsx(W,{children:" Water "}),o.jsxs(L,{children:["Average value:"," ",o.jsxs(H,{children:[oe(t)," ml"]})]})]}),o.jsx(te,{style:{overflowX:"auto"},children:o.jsx(ee,{children:o.jsx(dt,{month:p})})})]})]}),o.jsxs(D,{children:[o.jsxs(P,{children:[o.jsx(W,{children:" Weight "}),o.jsxs(L,{children:["Average value:"," ",o.jsxs(H,{children:[oe(s)," kg"]})]})]}),o.jsx(Gt,{month:p})]})]}),a&&!n&&o.jsx("p",{children:"Oops! Something went wrong!"})]})},po=()=>o.jsx(lo,{});export{po as default};
