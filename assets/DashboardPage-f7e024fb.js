import{v as ye,w as ve,r as h,x as Ce,y as we,_ as k,j as o,z as x,A as j,B as T,C as Fe,T as Me,D as ke,E as je,t as v,F as Te,I as Re,S as Se,M as $e,s as u,d as C,G as R,H as S,J as $,K as B,O as M,P as Be,Q as A,R as ze,L as Ae,U as De,u as Pe,V as We,h as Le,W as q}from"./index-1cde3463.js";import{C as ne,b as se,L as ae,P as ie,e as le,c as re,p as ce,i as de,a as pe,f as ge}from"./index-9523ad62.js";const He=["className","component"];function Oe(e={}){const{themeId:t,defaultTheme:s,defaultClassName:n="MuiBox-root",generateClassName:a}=e,i=ye("div",{shouldForwardProp:c=>c!=="theme"&&c!=="sx"&&c!=="as"})(ve);return h.forwardRef(function(g,l){const r=Ce(s),p=we(g),{className:m,component:b="div"}=p,y=k(p,He);return o.jsx(i,x({as:b,ref:l,className:j(m,a?a(n):n),theme:t&&r[t]||r},y))})}const Ne=T("MuiBox",["root"]),Ie=Ne,Ee=Fe(),Ue=Oe({themeId:Me,defaultTheme:Ee,defaultClassName:Ie.root,generateClassName:ke.generate}),_e=Ue,Ve=je`
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
`,w=["January","February","March","April","May","June","July","August","September","October","November","December"],Ye=e=>o.jsx("svg",{...e,width:"16",height:"16",fill:"red",viewBox:"0 0 32 32",children:o.jsx("path",{d:"M5.067 11.019c-0.403 0.175-0.604 0.484-0.604 0.932 0 0.247 0.028 0.339 0.164 0.533 0.227 0.324 8.995 9.063 9.293 9.261 0.695 0.464 1.221 0.621 2.080 0.621s1.384-0.157 2.080-0.621c0.341-0.228 9.152-9.031 9.317-9.309 0.161-0.272 0.187-0.692 0.056-0.944-0.168-0.326-0.503-0.546-0.888-0.546-0.132 0-0.258 0.026-0.373 0.072l0.007-0.002c-0.14 0.057-1.545 1.425-4.705 4.581-3.096 3.091-4.581 4.537-4.747 4.624-0.203 0.105-0.319 0.125-0.747 0.125s-0.544-0.020-0.747-0.125c-0.165-0.087-1.651-1.533-4.747-4.624-3.16-3.156-4.565-4.524-4.705-4.581-0.107-0.048-0.232-0.077-0.364-0.077-0.134 0-0.261 0.029-0.376 0.082l0.006-0.002z"})});function Je({onChange:e}){return o.jsxs(o.Fragment,{children:[o.jsx(_e,{sx:{minWidth:116,[v.breakpoints.up("tablet")]:{minWidth:140},paddingRight:"0px",border:"none",padding:"0px","& .MuiOutlinedInput-notchedOutline":{border:"none"},"&:hover .MuiOutlinedInput-notchedOutline":{border:"none"},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{border:"none"}},children:o.jsxs(Te,{fullWidth:!0,children:[o.jsx(Re,{id:"demo-simple-select-label",sx:{color:"#FFFFFF",fontFamily:"Poppins500",fontWeight:"500",fontSize:"24px",lineHeight:"1.25",top:"-20px",left:"-16px",[v.breakpoints.up("tablet")]:{fontSize:"30px"},"&.Mui-focused":{color:"#FFFFFF",fontSize:"24px",transform:"translate(14px, 9px) scale(1)"}},children:"Months"}),o.jsx(Se,{IconComponent:Ye,labelId:"demo-simple-select-label",id:"demo-simple-select",value:"",label:"Month",onChange:e,sx:{"& .MuiSelect-select":{color:"#FFFFFF",padding:"0px"},"& .MuiSelect-icon ":{fill:"#e3ffa8",right:"0px",[v.breakpoints.up("tablet")]:{top:"8px",right:"2px"}}},children:w.map(t=>o.jsx($e,{value:t,sx:{color:"#B6B6B6",fontFamily:"Poppins400",fontWeight:"400",paddingLeft:"16px",paddingTop:"4px",paddingBottom:"4px",backgroundColor:"#0F0F0F",fontSize:"14px",lineHeight:"1.4","&:hover":{color:"#E3FFA8",backgroundColor:"rgba(255, 255, 255, 0.03)"}},children:t},t))})]})}),o.jsx(Ve,{})]})}const qe=u.h3`
  font-family: 'Poppins500';
  font-weight: 500;
  font-size: 16px;

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 1.3;
  }
`,Ge=({month:e})=>o.jsx(qe,{children:e}),ue=e=>e.monthStatistics.calories,he=e=>e.monthStatistics.water,xe=e=>e.monthStatistics.weight,Xe=e=>e.monthStatistics.isLoading,Ke=e=>e.monthStatistics.error;function N(e,t){return new Date(e,t,0).getDate()}const I=new Date,Qe=I.getFullYear(),Ze=I.getMonth()+1,et=I.getDate();function tt(e,t){let s=[],n=[],a=0;const i=w.indexOf(t)+1,d=N(Qe,i),c=e==null?void 0:e.flatMap(l=>new Date(l.date).getDate());for(let l=0;l<d;l++)if((e==null?void 0:e.length)>0){if(c.includes(l+1)){let r=e==null?void 0:e.find(p=>new Date(p.date).getDate()===l+1);n.push(r.totalCalories)}else Ze===i&&l+1>et?n.push(null):n.push(a);s.push(l+1)}else s.push(l+1);return(e==null?void 0:e.length)===0&&(n=null),{values:n,days:s}}ne.register(se,ae,ie,le,re,ce,de,pe);const ot={elements:{point:{backgroundColor:"#E3FFA8",borderWidth:1,radius:.9,hoverRadius:5},line:{backgroundColor:"#E3FFA8",borderColor:"#E3FFA8",borderWidth:1,tension:.29}},plugins:{legend:{display:!1},tooltip:{backgroundColor:"#0F0F0F",titleColor:"#FFFFFF",bodyColor:"#B6B6B6",bodyAlign:"center",caretSize:0,cornerRadius:8,padding:{top:8,right:6,bottom:8,left:6},titleMarginBottom:2,borderColor:"rgba(255, 255, 255, 0.1)",borderWidth:3,enabled:!0,displayColors:!1,usePointStyle:!0,titleFont:{family:"Poppins500",size:32,lineHeight:1.18,weight:"normal"},bodyFont:{family:"Poppins400",size:14,lineHeight:1.4,weight:"normal"},xAlign:"left",yAlign:"bottom",callbacks:{title:e=>e[0].parsed.y,label:()=>"calories"}}},responsive:!0,scales:{x:{grid:{color:"#292928",weight:"1px"}},y:{min:0,max:3e3,ticks:{callback:e=>`${e/1e3} K`,stepSize:1e3},grid:{color:"#292928",weight:"1px"}}}},nt=({month:e})=>{const t=C(ue),s=tt(t,e),n=s.days,a=s.values;return o.jsx(ge,{options:ot,data:{labels:n,datasets:[{data:a}]}})},E=new Date,st=E.getFullYear(),at=E.getMonth()+1,it=E.getDate();function lt(e,t){let s=[],n=[],a=0;const i=w.indexOf(t)+1,d=N(st,i),c=e==null?void 0:e.flatMap(l=>new Date(l.date).getDate());for(let l=0;l<d;l++)if((e==null?void 0:e.length)>0){if(c.includes(l+1)){let r=e==null?void 0:e.find(p=>new Date(p.date).getDate()===l+1);n.push(r.value)}else at===i&&l+1>it?n.push(null):n.push(a);s.push(l+1)}else s.push(l+1);return(e==null?void 0:e.length)===0&&(n=null),{values:n,days:s}}ne.register(se,ae,ie,le,re,ce,de,pe);const rt={elements:{point:{backgroundColor:"#E3FFA8",borderWidth:1,radius:.9,hoverRadius:5},line:{backgroundColor:"#E3FFA8",borderColor:"#E3FFA8",borderWidth:1,tension:.29}},plugins:{legend:{display:!1},tooltip:{backgroundColor:"#0F0F0F",titleColor:"#FFFFFF",bodyColor:"#B6B6B6",bodyAlign:"center",caretSize:0,cornerRadius:8,padding:{top:8,right:6,bottom:8,left:6},titleMarginBottom:2,borderColor:"rgba(255, 255, 255, 0.1)",borderWidth:3,enabled:!0,displayColors:!1,usePointStyle:!0,titleFont:{family:"Poppins500",size:32,lineHeight:1.18,weight:"normal"},bodyFont:{family:"Poppins400",size:14,lineHeight:1.4,weight:"normal"},xAlign:"left",yAlign:"bottom",callbacks:{title:e=>e[0].parsed.y,label:()=>"milliliters"}}},responsive:!0,scales:{x:{grid:{color:"#292928",weight:"1px"}},y:{min:0,max:3e3,ticks:{callback:e=>`${e/1e3} L`,stepSize:1e3},grid:{color:"#292928",weight:"1px"}}}},ct=({month:e})=>{const t=C(he),s=lt(t,e),n=s.days,a=s.values;return o.jsx(ge,{options:rt,data:{labels:n,datasets:[{data:a}]}})},dt=h.createContext(),be=dt;function pt(e){return R("MuiTable",e)}T("MuiTable",["root","stickyHeader"]);const gt=["className","component","padding","size","stickyHeader"],ut=e=>{const{classes:t,stickyHeader:s}=e;return B({root:["root",s&&"stickyHeader"]},pt,t)},ht=S("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>x({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":x({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"})),G="table",xt=h.forwardRef(function(t,s){const n=$({props:t,name:"MuiTable"}),{className:a,component:i=G,padding:d="normal",size:c="medium",stickyHeader:g=!1}=n,l=k(n,gt),r=x({},n,{component:i,padding:d,size:c,stickyHeader:g}),p=ut(r),m=h.useMemo(()=>({padding:d,size:c,stickyHeader:g}),[d,c,g]);return o.jsx(be.Provider,{value:m,children:o.jsx(ht,x({as:i,role:i===G?null:"table",ref:s,className:j(p.root,a),ownerState:r},l))})}),bt=xt,ft=h.createContext(),U=ft;function mt(e){return R("MuiTableBody",e)}T("MuiTableBody",["root"]);const yt=["className","component"],vt=e=>{const{classes:t}=e;return B({root:["root"]},mt,t)},Ct=S("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),wt={variant:"body"},X="tbody",Ft=h.forwardRef(function(t,s){const n=$({props:t,name:"MuiTableBody"}),{className:a,component:i=X}=n,d=k(n,yt),c=x({},n,{component:i}),g=vt(c);return o.jsx(U.Provider,{value:wt,children:o.jsx(Ct,x({className:j(g.root,a),as:i,ref:s,role:i===X?null:"rowgroup",ownerState:c},d))})}),Mt=Ft;function kt(e){return R("MuiTableCell",e)}const jt=T("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),Tt=jt,Rt=["align","className","component","padding","scope","size","sortDirection","variant"],St=e=>{const{classes:t,variant:s,align:n,padding:a,size:i,stickyHeader:d}=e,c={root:["root",s,d&&"stickyHeader",n!=="inherit"&&`align${M(n)}`,a!=="normal"&&`padding${M(a)}`,`size${M(i)}`]};return B(c,kt,t)},$t=S("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[s.variant],t[`size${M(s.size)}`],s.padding!=="normal"&&t[`padding${M(s.padding)}`],s.align!=="inherit"&&t[`align${M(s.align)}`],s.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>x({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode==="light"?Be(A(e.palette.divider,1),.88):ze(A(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},t.variant==="head"&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},t.variant==="body"&&{color:(e.vars||e).palette.text.primary},t.variant==="footer"&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},t.size==="small"&&{padding:"6px 16px",[`&.${Tt.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},t.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},t.padding==="none"&&{padding:0},t.align==="left"&&{textAlign:"left"},t.align==="center"&&{textAlign:"center"},t.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},t.align==="justify"&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),Bt=h.forwardRef(function(t,s){const n=$({props:t,name:"MuiTableCell"}),{align:a="inherit",className:i,component:d,padding:c,scope:g,size:l,sortDirection:r,variant:p}=n,m=k(n,Rt),b=h.useContext(be),y=h.useContext(U),F=y&&y.variant==="head";let f;d?f=d:f=F?"th":"td";let z=g;f==="td"?z=void 0:!z&&F&&(z="col");const V=p||y&&y.variant,Y=x({},n,{align:a,component:f,padding:c||(b&&b.padding?b.padding:"normal"),size:l||(b&&b.size?b.size:"medium"),sortDirection:r,stickyHeader:V==="head"&&b&&b.stickyHeader,variant:V}),me=St(Y);let J=null;return r&&(J=r==="asc"?"ascending":"descending"),o.jsx($t,x({as:f,ref:s,className:j(me.root,i),"aria-sort":J,scope:z,ownerState:Y},m))}),K=Bt;function zt(e){return R("MuiTableContainer",e)}T("MuiTableContainer",["root"]);const At=["className","component"],Dt=e=>{const{classes:t}=e;return B({root:["root"]},zt,t)},Pt=S("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),Wt=h.forwardRef(function(t,s){const n=$({props:t,name:"MuiTableContainer"}),{className:a,component:i="div"}=n,d=k(n,At),c=x({},n,{component:i}),g=Dt(c);return o.jsx(Pt,x({ref:s,as:i,className:j(g.root,a),ownerState:c},d))}),Lt=Wt;function Ht(e){return R("MuiTableRow",e)}const Ot=T("MuiTableRow",["root","selected","hover","head","footer"]),Q=Ot,Nt=["className","component","hover","selected"],It=e=>{const{classes:t,selected:s,hover:n,head:a,footer:i}=e;return B({root:["root",s&&"selected",n&&"hover",a&&"head",i&&"footer"]},Ht,t)},Et=S("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.head&&t.head,s.footer&&t.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${Q.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${Q.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:A(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:A(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),Z="tr",Ut=h.forwardRef(function(t,s){const n=$({props:t,name:"MuiTableRow"}),{className:a,component:i=Z,hover:d=!1,selected:c=!1}=n,g=k(n,Nt),l=h.useContext(U),r=x({},n,{component:i,hover:d,selected:c,head:l&&l.variant==="head",footer:l&&l.variant==="footer"}),p=It(r);return o.jsx(Et,x({as:i,ref:s,className:j(p.root,a),role:i===Z?null:"row",ownerState:r},g))}),fe=Ut,_t=u(fe)({"& .MuiTableCell-root":{fontFamily:"Poppins400, sans-serif",fontSize:"14px",lineHeight:"1.4",color:"#FFFFFF",borderBottom:"none",paddingTop:"24px",paddingLeft:"12px",paddingRight:"12px",paddingBottom:"8px",textAlign:"center",[v.breakpoints.up("tablet")]:{fontSize:"10px",lineHeight:"1.6",paddingLeft:"3px",paddingRight:"3px",paddingBottom:"6px"},[v.breakpoints.up("desktop")]:{fontSize:"14px",lineHeight:"1.4",paddingLeft:"12px",paddingRight:"12px",paddingBottom:"8px"}}}),Vt=u(fe)({"& .MuiTableCell-root":{fontFamily:"Poppins400, sans-serif",fontSize:"10px",lineHeight:"1.4",color:"#B6B6B6",borderBottom:"none",paddingTop:"8px",paddingLeft:"15px",paddingRight:"15px",paddingBottom:"36px",textAlign:"center",[v.breakpoints.up("tablet")]:{paddingTop:"6px",paddingLeft:"5px",paddingRight:"5px",paddingBottom:"44px"},[v.breakpoints.up("desktop")]:{paddingTop:"8px",paddingLeft:"15px",paddingRight:"15px",paddingBottom:"36px"}}}),_=new Date,Yt=_.getFullYear(),Jt=_.getMonth()+1,qt=_.getDate();function Gt(e,t){let s=[],n=[],a=0;(e==null?void 0:e.length)>0&&(a=e[0].value);let i=0;const d=w.indexOf(t)+1,c=N(Yt,d),g=e==null?void 0:e.flatMap(r=>new Date(r.date).getDate());for(let r=0;r<c;r++)if((e==null?void 0:e.length)>0){if(g.includes(r+1)){let p=e==null?void 0:e.find(m=>new Date(m.date).getDate()===r+1);n.push(p.value),a=p.value}else Jt===d&&r+1>qt?n.push(i):n.push(a);s.push(r+1)}else n.push(i),s.push(r+1);return{values:n,days:s}}const Xt=({month:e})=>{const t=C(xe),s=Gt(t,e);let n=s.days,a=s.values;return o.jsx(o.Fragment,{children:o.jsx(Lt,{sx:{backgroundColor:"#0F0F0F",borderRadius:"12px",paddingLeft:"10px",paddingRight:"10px",[v.breakpoints.up("tablet")]:{paddingLeft:"20px",paddingRight:"20px"},[v.breakpoints.up("desktop")]:{paddingLeft:"10px",paddingRight:"10px"},"&::-webkit-scrollbar":{height:"8px"},"&::-webkit-scrollbar-thumb":{backgroundColor:"rgb(255, 255, 255, 0.1)",outline:"1px solid rgb(255, 255, 255, 0.1)",borderRadius:"12px"}},children:o.jsx(bt,{sx:{minWidth:650},"aria-label":"simple table",children:o.jsxs(Mt,{children:[o.jsx(_t,{sx:{"&:last-child td, &:last-child th":{border:0}},children:a==null?void 0:a.map((i,d)=>o.jsx(K,{component:"th",scope:"row",children:i},d))}),o.jsx(Vt,{sx:{"&:last-child td, &:last-child th":{border:0}},children:n==null?void 0:n.map(i=>o.jsx(K,{align:"right",children:i},i))})]})})})})},Kt=u.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;

  @media screen and (min-width: 1440px) {
    padding-bottom: 40px;
  }
`,Qt=u.div`
  display: flex;
  justify-content: space-between;
`,Zt=u.div`
  display: flex;
  gap: 6px;

  @media screen and (min-width: 834px) {
    gap: 12px;
  }
`,eo=u.div`
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
`,to=u(Ae)`
  color: #ffffff;
`,oo=u.svg`
  width: 16px;
  height: 16px;
  transform: rotate(180deg);
  fill: var(--primary-color-grey);

  @media screen and (min-width: 834px) {
    width: 24px;
    height: 24px;
  }
`,no=u.div`
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
`,W=u.h2`
  font-family: 'Poppins400';
  font-weight: 400;
  font-size: 18px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.5;
  }
`,L=u.p`
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
`,te=u.div`

`;function oe(e){if((e==null?void 0:e.length)===0)return 0;const s=(e==null?void 0:e.reduce((n,a)=>n+a.value,0))/(e==null?void 0:e.length);return Math.round(s)}function so(e){if((e==null?void 0:e.length)===0)return 0;const s=(e==null?void 0:e.reduce((n,a)=>n+a.totalCalories,0))/(e==null?void 0:e.length);return Math.round(s)}function O(e){if(e)return e.indexOf("/")===-1?e:e.slice(e.indexOf("/")+1,e.length)}const ao=new Date;let io=w[ao.getMonth()];const lo=()=>{var y;const e=C(ue),t=C(he),s=C(xe),n=C(Xe),a=C(Ke),i=De(),d=((y=i==null?void 0:i.state)==null?void 0:y.from)??"/",c=Pe(),[g,l]=We(),r=g.get("queryMonth"),[p,m]=h.useState(O(r)??io);h.useEffect(()=>{async function F(){try{c(r?q(w.indexOf(O(r))+1):q(w.indexOf(O(p))+1))}catch(f){console.log("error",f)}}F()},[p,r,c]);const b=F=>{const f=F.target.value;l({queryMonth:`${Date.now()}/${f}`}),m(f)};return o.jsxs(o.Fragment,{children:[n?o.jsx("p",{children:"Oops! Loading....."}):!a&&o.jsxs(Kt,{children:[o.jsxs(Qt,{children:[o.jsxs(Zt,{children:[o.jsx(eo,{type:"button",children:o.jsx(to,{to:d,children:o.jsx(oo,{children:o.jsx("use",{href:`${Le}#icon-arrowright`})})})}),o.jsx(Je,{month:p,onChange:b})]}),o.jsx(Ge,{month:p})]}),o.jsxs(no,{children:[o.jsxs(D,{children:[o.jsxs(P,{children:[o.jsx(W,{children:" Calories "}),o.jsxs(L,{children:["Average value:"," ",o.jsxs(H,{children:[so(e)," cal"]})]})]}),o.jsx(te,{style:{overflowX:"auto"},children:o.jsx(ee,{children:o.jsx(nt,{month:p})})})]}),o.jsxs(D,{children:[o.jsxs(P,{children:[o.jsx(W,{children:" Water "}),o.jsxs(L,{children:["Average value:"," ",o.jsxs(H,{children:[oe(t)," ml"]})]})]}),o.jsx(te,{style:{overflowX:"auto"},children:o.jsx(ee,{children:o.jsx(ct,{month:p})})})]})]}),o.jsxs(D,{children:[o.jsxs(P,{children:[o.jsx(W,{children:" Weight "}),o.jsxs(L,{children:["Average value:"," ",o.jsxs(H,{children:[oe(s)," kg"]})]})]}),o.jsx(Xt,{month:p})]})]}),a&&!n&&o.jsx("p",{children:"Oops! Something went wrong!"})]})},po=()=>o.jsx(lo,{});export{po as default};
