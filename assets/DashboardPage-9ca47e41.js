import{v as me,w as ye,r as h,x as ve,y as Ce,_ as k,j as o,z as x,A as T,B as j,C as we,T as Fe,D as Me,E as ke,t as v,F as Te,I as je,S as Re,M as $e,s as u,d as C,G as R,H as $,J as S,K as B,O as M,P as Se,Q as A,R as Be,L as ze,U as Ae,u as De,V as Pe,h as Le,W as q}from"./index-1f7ab0ee.js";import{C as oe,b as ne,L as se,P as ae,e as ie,c as le,p as re,i as ce,a as de,f as pe}from"./index-5be6ff48.js";const We=["className","component"];function He(e={}){const{themeId:t,defaultTheme:s,defaultClassName:n="MuiBox-root",generateClassName:a}=e,i=me("div",{shouldForwardProp:c=>c!=="theme"&&c!=="sx"&&c!=="as"})(ye);return h.forwardRef(function(g,l){const r=ve(s),p=Ce(g),{className:m,component:b="div"}=p,y=k(p,We);return o.jsx(i,x({as:b,ref:l,className:T(m,a?a(n):n),theme:t&&r[t]||r},y))})}const Oe=j("MuiBox",["root"]),Ne=Oe,Ie=we(),Ee=He({themeId:Fe,defaultTheme:Ie,defaultClassName:Ne.root,generateClassName:Me.generate}),Ue=Ee,_e=ke`
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
  }`,w=["January","February","March","April","May","June","July","August","September","October","November","December"],Ve=e=>o.jsx("svg",{...e,width:"16",height:"16",fill:"red",viewBox:"0 0 32 32",children:o.jsx("path",{d:"M5.067 11.019c-0.403 0.175-0.604 0.484-0.604 0.932 0 0.247 0.028 0.339 0.164 0.533 0.227 0.324 8.995 9.063 9.293 9.261 0.695 0.464 1.221 0.621 2.080 0.621s1.384-0.157 2.080-0.621c0.341-0.228 9.152-9.031 9.317-9.309 0.161-0.272 0.187-0.692 0.056-0.944-0.168-0.326-0.503-0.546-0.888-0.546-0.132 0-0.258 0.026-0.373 0.072l0.007-0.002c-0.14 0.057-1.545 1.425-4.705 4.581-3.096 3.091-4.581 4.537-4.747 4.624-0.203 0.105-0.319 0.125-0.747 0.125s-0.544-0.020-0.747-0.125c-0.165-0.087-1.651-1.533-4.747-4.624-3.16-3.156-4.565-4.524-4.705-4.581-0.107-0.048-0.232-0.077-0.364-0.077-0.134 0-0.261 0.029-0.376 0.082l0.006-0.002z"})});function Ye({onChange:e}){return o.jsxs(o.Fragment,{children:[o.jsx(Ue,{sx:{minWidth:116,[v.breakpoints.up("tablet")]:{minWidth:140},paddingRight:"0px",border:"none",padding:"0px","& .MuiOutlinedInput-notchedOutline":{border:"none"},"&:hover .MuiOutlinedInput-notchedOutline":{border:"none"},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{border:"none"}},children:o.jsxs(Te,{fullWidth:!0,children:[o.jsx(je,{id:"demo-simple-select-label",sx:{color:"#FFFFFF",fontFamily:"Poppins500",fontWeight:"500",fontSize:"24px",lineHeight:"1.25",top:"-20px",left:"-16px",[v.breakpoints.up("tablet")]:{fontSize:"30px"},"&.Mui-focused":{color:"#FFFFFF",fontSize:"24px",transform:"translate(14px, 9px) scale(1)"}},children:"Months"}),o.jsx(Re,{IconComponent:Ve,labelId:"demo-simple-select-label",id:"demo-simple-select",value:"",label:"Month",onChange:e,sx:{"& .MuiSelect-select":{color:"#FFFFFF",padding:"0px"},"& .MuiSelect-icon ":{fill:"#e3ffa8",right:"0px",[v.breakpoints.up("tablet")]:{top:"8px",right:"2px"}}},children:w.map(t=>o.jsx($e,{value:t,sx:{color:"#B6B6B6",fontFamily:"Poppins400",fontWeight:"400",paddingLeft:"16px",paddingTop:"4px",paddingBottom:"4px",backgroundColor:"#0F0F0F",fontSize:"14px",lineHeight:"1.4","&:hover":{color:"#E3FFA8",backgroundColor:"rgba(255, 255, 255, 0.03)"}},children:t},t))})]})}),o.jsx(_e,{})]})}const Je=u.h3`
  font-family: 'Poppins500';
  font-weight: 500;
  font-size: 16px;

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 1.3;
  }
`,qe=({month:e})=>o.jsx(Je,{children:e}),ge=e=>e.monthStatistics.calories,ue=e=>e.monthStatistics.water,he=e=>e.monthStatistics.weight,Ge=e=>e.monthStatistics.isLoading,Ke=e=>e.monthStatistics.error;function N(e,t){return new Date(e,t,0).getDate()}const I=new Date,Qe=I.getFullYear(),Xe=I.getMonth()+1,Ze=I.getDate();function et(e,t){let s=[],n=[],a=0;const i=w.indexOf(t)+1,d=N(Qe,i),c=e==null?void 0:e.flatMap(l=>new Date(l.date).getDate());for(let l=0;l<d;l++)if((e==null?void 0:e.length)>0){if(c.includes(l+1)){let r=e==null?void 0:e.find(p=>new Date(p.date).getDate()===l+1);n.push(r.totalCalories)}else Xe===i&&l+1>Ze?n.push(null):n.push(a);s.push(l+1)}else s.push(l+1);return(e==null?void 0:e.length)===0&&(n=null),{values:n,days:s}}oe.register(ne,se,ae,ie,le,re,ce,de);const tt={elements:{point:{backgroundColor:"#E3FFA8",borderWidth:1,radius:.9,hoverRadius:5},line:{backgroundColor:"#E3FFA8",borderColor:"#E3FFA8",borderWidth:1,tension:.29}},plugins:{legend:{display:!1},tooltip:{backgroundColor:"#0F0F0F",titleColor:"#FFFFFF",bodyColor:"#B6B6B6",bodyAlign:"center",caretSize:0,cornerRadius:8,padding:{top:8,right:6,bottom:8,left:6},titleMarginBottom:2,borderColor:"rgba(255, 255, 255, 0.1)",borderWidth:3,enabled:!0,displayColors:!1,usePointStyle:!0,titleFont:{family:"Poppins500",size:32,lineHeight:1.18,weight:"normal"},bodyFont:{family:"Poppins400",size:14,lineHeight:1.4,weight:"normal"},xAlign:"left",yAlign:"bottom",callbacks:{title:e=>e[0].parsed.y,label:()=>"calories"}}},responsive:!0,scales:{x:{grid:{color:"#292928",weight:"1px"}},y:{min:0,max:3e3,ticks:{callback:e=>`${e/1e3} K`,stepSize:1e3},grid:{color:"#292928",weight:"1px"}}}},ot=({month:e})=>{const t=C(ge),s=et(t,e),n=s.days,a=s.values;return o.jsx(pe,{options:tt,data:{labels:n,datasets:[{data:a}]}})},E=new Date,nt=E.getFullYear(),st=E.getMonth()+1,at=E.getDate();function it(e,t){let s=[],n=[],a=0;const i=w.indexOf(t)+1,d=N(nt,i),c=e==null?void 0:e.flatMap(l=>new Date(l.date).getDate());for(let l=0;l<d;l++)if((e==null?void 0:e.length)>0){if(c.includes(l+1)){let r=e==null?void 0:e.find(p=>new Date(p.date).getDate()===l+1);n.push(r.value)}else st===i&&l+1>at?n.push(null):n.push(a);s.push(l+1)}else s.push(l+1);return(e==null?void 0:e.length)===0&&(n=null),{values:n,days:s}}oe.register(ne,se,ae,ie,le,re,ce,de);const lt={elements:{point:{backgroundColor:"#E3FFA8",borderWidth:1,radius:.9,hoverRadius:5},line:{backgroundColor:"#E3FFA8",borderColor:"#E3FFA8",borderWidth:1,tension:.29}},plugins:{legend:{display:!1},tooltip:{backgroundColor:"#0F0F0F",titleColor:"#FFFFFF",bodyColor:"#B6B6B6",bodyAlign:"center",caretSize:0,cornerRadius:8,padding:{top:8,right:6,bottom:8,left:6},titleMarginBottom:2,borderColor:"rgba(255, 255, 255, 0.1)",borderWidth:3,enabled:!0,displayColors:!1,usePointStyle:!0,titleFont:{family:"Poppins500",size:32,lineHeight:1.18,weight:"normal"},bodyFont:{family:"Poppins400",size:14,lineHeight:1.4,weight:"normal"},xAlign:"left",yAlign:"bottom",callbacks:{title:e=>e[0].parsed.y,label:()=>"milliliters"}}},responsive:!0,scales:{x:{grid:{color:"#292928",weight:"1px"}},y:{min:0,max:3e3,ticks:{callback:e=>`${e/1e3} L`,stepSize:1e3},grid:{color:"#292928",weight:"1px"}}}},rt=({month:e})=>{const t=C(ue),s=it(t,e),n=s.days,a=s.values;return o.jsx(pe,{options:lt,data:{labels:n,datasets:[{data:a}]}})},ct=h.createContext(),xe=ct;function dt(e){return R("MuiTable",e)}j("MuiTable",["root","stickyHeader"]);const pt=["className","component","padding","size","stickyHeader"],gt=e=>{const{classes:t,stickyHeader:s}=e;return B({root:["root",s&&"stickyHeader"]},dt,t)},ut=$("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>x({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":x({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"})),G="table",ht=h.forwardRef(function(t,s){const n=S({props:t,name:"MuiTable"}),{className:a,component:i=G,padding:d="normal",size:c="medium",stickyHeader:g=!1}=n,l=k(n,pt),r=x({},n,{component:i,padding:d,size:c,stickyHeader:g}),p=gt(r),m=h.useMemo(()=>({padding:d,size:c,stickyHeader:g}),[d,c,g]);return o.jsx(xe.Provider,{value:m,children:o.jsx(ut,x({as:i,role:i===G?null:"table",ref:s,className:T(p.root,a),ownerState:r},l))})}),xt=ht,bt=h.createContext(),U=bt;function ft(e){return R("MuiTableBody",e)}j("MuiTableBody",["root"]);const mt=["className","component"],yt=e=>{const{classes:t}=e;return B({root:["root"]},ft,t)},vt=$("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),Ct={variant:"body"},K="tbody",wt=h.forwardRef(function(t,s){const n=S({props:t,name:"MuiTableBody"}),{className:a,component:i=K}=n,d=k(n,mt),c=x({},n,{component:i}),g=yt(c);return o.jsx(U.Provider,{value:Ct,children:o.jsx(vt,x({className:T(g.root,a),as:i,ref:s,role:i===K?null:"rowgroup",ownerState:c},d))})}),Ft=wt;function Mt(e){return R("MuiTableCell",e)}const kt=j("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),Tt=kt,jt=["align","className","component","padding","scope","size","sortDirection","variant"],Rt=e=>{const{classes:t,variant:s,align:n,padding:a,size:i,stickyHeader:d}=e,c={root:["root",s,d&&"stickyHeader",n!=="inherit"&&`align${M(n)}`,a!=="normal"&&`padding${M(a)}`,`size${M(i)}`]};return B(c,Mt,t)},$t=$("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[s.variant],t[`size${M(s.size)}`],s.padding!=="normal"&&t[`padding${M(s.padding)}`],s.align!=="inherit"&&t[`align${M(s.align)}`],s.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>x({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode==="light"?Se(A(e.palette.divider,1),.88):Be(A(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},t.variant==="head"&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},t.variant==="body"&&{color:(e.vars||e).palette.text.primary},t.variant==="footer"&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},t.size==="small"&&{padding:"6px 16px",[`&.${Tt.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},t.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},t.padding==="none"&&{padding:0},t.align==="left"&&{textAlign:"left"},t.align==="center"&&{textAlign:"center"},t.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},t.align==="justify"&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),St=h.forwardRef(function(t,s){const n=S({props:t,name:"MuiTableCell"}),{align:a="inherit",className:i,component:d,padding:c,scope:g,size:l,sortDirection:r,variant:p}=n,m=k(n,jt),b=h.useContext(xe),y=h.useContext(U),F=y&&y.variant==="head";let f;d?f=d:f=F?"th":"td";let z=g;f==="td"?z=void 0:!z&&F&&(z="col");const V=p||y&&y.variant,Y=x({},n,{align:a,component:f,padding:c||(b&&b.padding?b.padding:"normal"),size:l||(b&&b.size?b.size:"medium"),sortDirection:r,stickyHeader:V==="head"&&b&&b.stickyHeader,variant:V}),fe=Rt(Y);let J=null;return r&&(J=r==="asc"?"ascending":"descending"),o.jsx($t,x({as:f,ref:s,className:T(fe.root,i),"aria-sort":J,scope:z,ownerState:Y},m))}),Q=St;function Bt(e){return R("MuiTableContainer",e)}j("MuiTableContainer",["root"]);const zt=["className","component"],At=e=>{const{classes:t}=e;return B({root:["root"]},Bt,t)},Dt=$("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),Pt=h.forwardRef(function(t,s){const n=S({props:t,name:"MuiTableContainer"}),{className:a,component:i="div"}=n,d=k(n,zt),c=x({},n,{component:i}),g=At(c);return o.jsx(Dt,x({ref:s,as:i,className:T(g.root,a),ownerState:c},d))}),Lt=Pt;function Wt(e){return R("MuiTableRow",e)}const Ht=j("MuiTableRow",["root","selected","hover","head","footer"]),X=Ht,Ot=["className","component","hover","selected"],Nt=e=>{const{classes:t,selected:s,hover:n,head:a,footer:i}=e;return B({root:["root",s&&"selected",n&&"hover",a&&"head",i&&"footer"]},Wt,t)},It=$("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.head&&t.head,s.footer&&t.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${X.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${X.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:A(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:A(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),Z="tr",Et=h.forwardRef(function(t,s){const n=S({props:t,name:"MuiTableRow"}),{className:a,component:i=Z,hover:d=!1,selected:c=!1}=n,g=k(n,Ot),l=h.useContext(U),r=x({},n,{component:i,hover:d,selected:c,head:l&&l.variant==="head",footer:l&&l.variant==="footer"}),p=Nt(r);return o.jsx(It,x({as:i,ref:s,className:T(p.root,a),role:i===Z?null:"row",ownerState:r},g))}),be=Et,Ut=u(be)({"& .MuiTableCell-root":{fontFamily:"Poppins400, sans-serif",fontSize:"14px",lineHeight:"1.4",color:"#FFFFFF",borderBottom:"none",paddingTop:"24px",paddingLeft:"12px",paddingRight:"12px",paddingBottom:"8px",textAlign:"center",[v.breakpoints.up("tablet")]:{fontSize:"10px",lineHeight:"1.6",paddingLeft:"3px",paddingRight:"3px",paddingBottom:"6px"},[v.breakpoints.up("desktop")]:{fontSize:"14px",lineHeight:"1.4",paddingLeft:"12px",paddingRight:"12px",paddingBottom:"8px"}}}),_t=u(be)({"& .MuiTableCell-root":{fontFamily:"Poppins400, sans-serif",fontSize:"10px",lineHeight:"1.4",color:"#B6B6B6",borderBottom:"none",paddingTop:"8px",paddingLeft:"15px",paddingRight:"15px",paddingBottom:"36px",textAlign:"center",[v.breakpoints.up("tablet")]:{paddingTop:"6px",paddingLeft:"5px",paddingRight:"5px",paddingBottom:"44px"},[v.breakpoints.up("desktop")]:{paddingTop:"8px",paddingLeft:"15px",paddingRight:"15px",paddingBottom:"36px"}}}),_=new Date,Vt=_.getFullYear(),Yt=_.getMonth()+1,Jt=_.getDate();function qt(e,t){let s=[],n=[],a=0;(e==null?void 0:e.length)>0&&(a=e[0].value);let i=0;const d=w.indexOf(t)+1,c=N(Vt,d),g=e==null?void 0:e.flatMap(r=>new Date(r.date).getDate());for(let r=0;r<c;r++)if((e==null?void 0:e.length)>0){if(g.includes(r+1)){let p=e==null?void 0:e.find(m=>new Date(m.date).getDate()===r+1);n.push(p.value),a=p.value}else Yt===d&&r+1>Jt?n.push(i):n.push(a);s.push(r+1)}else n.push(i),s.push(r+1);return{values:n,days:s}}const Gt=({month:e})=>{const t=C(he),s=qt(t,e);let n=s.days,a=s.values;return o.jsx(o.Fragment,{children:o.jsx(Lt,{sx:{backgroundColor:"#0F0F0F",borderRadius:"12px",paddingLeft:"10px",paddingRight:"10px",[v.breakpoints.up("tablet")]:{paddingLeft:"20px",paddingRight:"20px"},[v.breakpoints.up("desktop")]:{paddingLeft:"10px",paddingRight:"10px"},"&::-webkit-scrollbar":{height:"8px"},"&::-webkit-scrollbar-thumb":{backgroundColor:"rgb(255, 255, 255, 0.1)",outline:"1px solid rgb(255, 255, 255, 0.1)",borderRadius:"12px"}},children:o.jsx(xt,{sx:{minWidth:650},"aria-label":"simple table",children:o.jsxs(Ft,{children:[o.jsx(Ut,{sx:{"&:last-child td, &:last-child th":{border:0}},children:a==null?void 0:a.map((i,d)=>o.jsx(Q,{component:"th",scope:"row",children:i},d))}),o.jsx(_t,{sx:{"&:last-child td, &:last-child th":{border:0}},children:n==null?void 0:n.map(i=>o.jsx(Q,{align:"right",children:i},i))})]})})})})},Kt=u.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;

  @media screen and (min-width: 1440px) {
    padding-bottom: 40px;
  }
`,Qt=u.div`
  display: flex;
  justify-content: space-between;
`,Xt=u.div`
  display: flex;
  gap: 6px;

  @media screen and (min-width: 834px) {
    gap: 12px;
  }
`,Zt=u.div`
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
`,eo=u(ze)`
  color: #ffffff;
`,to=u.svg`
  width: 16px;
  height: 16px;
  transform: rotate(180deg);
  fill: var(--primary-color-grey);

  @media screen and (min-width: 834px) {
    width: 24px;
    height: 24px;
  }
`,oo=u.div`
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
`,D=u.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,P=u.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  @media screen and (min-width: 834px) {
    justify-content: start;
    gap: 40px;
  }
`,L=u.h2`
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
`,ee=u.div`
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
`;function te(e){if((e==null?void 0:e.length)===0)return 0;const s=(e==null?void 0:e.reduce((n,a)=>n+a.value,0))/(e==null?void 0:e.length);return Math.round(s)}function no(e){if((e==null?void 0:e.length)===0)return 0;const s=(e==null?void 0:e.reduce((n,a)=>n+a.totalCalories,0))/(e==null?void 0:e.length);return Math.round(s)}function O(e){if(e)return e.indexOf("/")===-1?e:e.slice(e.indexOf("/")+1,e.length)}const so=new Date;let ao=w[so.getMonth()];const io=()=>{var y;const e=C(ge),t=C(ue),s=C(he),n=C(Ge),a=C(Ke),i=Ae(),d=((y=i==null?void 0:i.state)==null?void 0:y.from)??"/",c=De(),[g,l]=Pe(),r=g.get("queryMonth"),[p,m]=h.useState(O(r)??ao);h.useEffect(()=>{async function F(){try{c(r?q(w.indexOf(O(r))+1):q(w.indexOf(O(p))+1))}catch(f){console.log("error",f)}}F()},[p,r,c]);const b=F=>{const f=F.target.value;l({queryMonth:`${Date.now()}/${f}`}),m(f)};return o.jsxs(o.Fragment,{children:[n?o.jsx("p",{children:"Oops! Loading....."}):!a&&o.jsxs(Kt,{children:[o.jsxs(Qt,{children:[o.jsxs(Xt,{children:[o.jsx(Zt,{type:"button",children:o.jsx(eo,{to:d,children:o.jsx(to,{children:o.jsx("use",{href:`${Le}#icon-arrowright`})})})}),o.jsx(Ye,{month:p,onChange:b})]}),o.jsx(qe,{month:p})]}),o.jsxs(oo,{children:[o.jsxs(D,{children:[o.jsxs(P,{children:[o.jsx(L,{children:" Calories "}),o.jsxs(W,{children:["Average value:"," ",o.jsxs(H,{children:[no(e)," cal"]})]})]}),o.jsx(ee,{children:o.jsx(ot,{month:p})})]}),o.jsxs(D,{children:[o.jsxs(P,{children:[o.jsx(L,{children:" Water "}),o.jsxs(W,{children:["Average value:"," ",o.jsxs(H,{children:[te(t)," ml"]})]})]}),o.jsx(ee,{children:o.jsx(rt,{month:p})})]})]}),o.jsxs(D,{children:[o.jsxs(P,{children:[o.jsx(L,{children:" Weight "}),o.jsxs(W,{children:["Average value:"," ",o.jsxs(H,{children:[te(s)," kg"]})]})]}),o.jsx(Gt,{month:p})]})]}),a&&!n&&o.jsx("p",{children:"Oops! Something went wrong!"})]})},co=()=>o.jsx(io,{});export{co as default};
