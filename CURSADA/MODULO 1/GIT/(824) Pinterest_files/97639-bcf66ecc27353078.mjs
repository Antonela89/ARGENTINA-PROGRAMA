(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[97639],{155656:(e,t,r)=>{r.d(t,{Z:()=>s});r(441143);var o=r(785893);class n{static factory(e){return e instanceof n?e:new n(String(e))}constructor(e){this._private_safe_value=e.trim().replace(">",">").replace("<","<").replace("&","&").replace('"','"').replace("'","'")}toString(){return this._private_safe_value}}function s(e){const{css:t,unsafeCSS:r,...s}=e,i=String(t||"")||r||"";return!!i?(0,o.jsx)("style",{...s,dangerouslySetInnerHTML:{__html:String(n.factory(i))}}):null}},549156:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(883119),n=r(785893);function s(e){const{children:t,display:r,id:s}=e;return(0,n.jsx)(o.xu,{"data-test-id":s,display:r,children:t})}},457175:(e,t,r)=>{r.d(t,{B:()=>n,v:()=>s});var o=r(762803);const{Provider:n,useHook:s}=(0,o.Z)("ContextLogger")},304966:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(457175);const n=()=>(0,o.v)().logContextEvent},762803:(e,t,r)=>{r.d(t,{Z:()=>i});var o=r(667294),n=r(785893);function s(e,t){let r=e.slice(1);if(r=r.endsWith("Context")?r:`${r}Context`,t){return{hocDisplayName:`with${e[0].toUpperCase()}${r}(${t})`}}return{propsDisplayName:`${e[0].toLowerCase()}${r}`,messageDisplayName:`${e[0].toUpperCase()}${r}`}}function i(e,t){const r=(0,o.createContext)(t),{propsDisplayName:i,messageDisplayName:a}=s(e);r.displayName=a;const l=r.Provider,c=({children:e})=>{const t=(0,o.useContext)(r);if(void 0===t)throw new Error(`${a}Consumer must be used within a ${a}Provider.`);return e(t)},d=()=>(0,o.useContext)(r);function u(t){const{hocDisplayName:l}=s(e,String(t.displayName||t.name)),c=e=>{const s=(0,o.useContext)(r);if(void 0===s)throw new Error(`${l} must be used within a ${a}Provider.`);if(e[i])throw new Error("Parent Component and Context are passing to the component the same variables.");const c={[i]:s};return(0,n.jsx)(t,{...e,...c})};return c.displayName=l,c}return l.displayName=`${a}Provider`,c.displayName=`${a}Consumer`,u.displayName=`${a}HOC`,{Provider:l,Consumer:c,MaybeConsumer:({children:e})=>e((0,o.useContext)(r)),useMaybeHook:d,useHook:function(){const e=d();if(void 0===e)throw new Error(`use${a} must be used within a ${a}Provider.`);return e},deprecatedHOC:u}}},292900:(e,t,r)=>{r.d(t,{Z:()=>a});var o=r(667294),n=r(731164),s=r(372833);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class a extends o.Component{constructor(...e){super(...e),i(this,"state",{error:null,info:null}),i(this,"resetError",(()=>{this.setState({error:null,info:null})}))}componentDidCatch(e,t){try{const t=this.props.name,r=this.props.type||"secondary";(0,s.B)({errorBoundary:t,errorBoundaryType:r,message:e.message,name:e.name,stack:e.stack}),n.Z.increment("react.error_boundary",.1,{component:void 0,name:this.props.name})}catch(r){n.Z.increment("react.error_boundary.error",1,{name:this.props.name})}this.setState({error:e,info:t})}render(){const{renderErrorState:e}=this.props,{error:t,info:r}=this.state;return t&&r?e?e({error:t,info:r,resetError:this.resetError}):null:this.props.children}}},551687:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r(292900).Z},451190:(e,t,r)=>{r.d(t,{b:()=>l,Z:()=>c});var o=r(667294),n=r(241933),s=r(51610),i=r(883119),a=r(785893);const l=new i.Ry(1e3);function c({_dangerouslyDisableScrollBoundaryContainer:e,accessibilityModalLabel:t,align:r,allowClickAndDrag:c,allowMediaPlay:d,allowScroll:u,children:h,closeOnOutsideClick:p,footer:m,heading:g,onDismiss:v,role:y,size:f,subHeading:x}){(0,o.useEffect)((()=>(n.Z.pause(),function(){n.Z.resume()})),[]);return(0,a.jsx)(i.mh,{zIndex:l,children:(0,a.jsx)(s.Z,{allowClickAndDrag:c,allowEsc:!0,allowMediaPlay:d,allowScroll:u,children:(0,a.jsx)(i.u_,{_dangerouslyDisableScrollBoundaryContainer:e,accessibilityModalLabel:t,align:r,closeOnOutsideClick:p,heading:g,footer:m,onDismiss:()=>{n.Z.resume(),v()},role:y,size:f,subHeading:x,children:h})})})}},493858:(e,t,r)=>{r.d(t,{iR:()=>o,_Q:()=>n,Js:()=>s,VX:()=>i,jL:()=>a,hy:()=>l,_J:()=>c,sV:()=>d,sY:()=>u,cL:()=>h,rM:()=>p,Zt:()=>m,hb:()=>g});const o=e=>!!e&&!!e.video_list,n=e=>!!e.promoted_is_lead_ad,s=(e,t)=>{let r=e&&e.url?e.url.split("/")[1]:"";return t&&t.full_name&&(r=t.full_name),r},i=e=>{var t;return e.rich_summary&&e.rich_summary.products&&e.rich_summary.products.length>0||(null===(t=e.rich_metadata)||void 0===t?void 0:t.products)&&e.rich_metadata.products.length>0||!1},a=e=>!!e.promoter&&!e.is_downstream_promotion,l=({story_pin_data_id:e})=>!!e,c=e=>!!e.video_status&&5!==e.video_status,d=e=>["email","messages","deep_linking"].includes(e),u=e=>!!e.embed&&"gif"===e.embed.type,h=e=>!(!e.embed||!e.embed.src||u(e)||(e=>!!e.embed&&"pinstory"===e.embed.subtype)(e)),p=({mobile_link:e,tracked_link:t,link:r})=>!e&&!t&&!r,m=e=>{var t,r,o;return e?e.mobile_link||e.tracked_link||e.link||(null!==(t=null===(r=(null!==(o=e.images)&&void 0!==o?o:{}).orig)||void 0===r?void 0:r.url)&&void 0!==t?t:""):null},g=e=>{const t="image";return e?l(e)?"storyPin":o(e.videos)?"video":t:t}},139848:(e,t,r)=>{r.d(t,{Z:()=>s});const o=new Set(["bookmarks","client_tracking_params","get_page_metadata","in_nux","invite_code","no_fetch_context_on_resource","original_referrer","source","top_level_source","top_level_source_depth"]),n=e=>!o.has(e)&&!e.startsWith("__track__"),s=e=>e?Object.keys("object"==typeof e&&e||{}).filter((e=>"string"==typeof e)).filter(n).sort().map((t=>`${t}=${JSON.stringify(null==e[t]?null:e[t])}`)).join(","):""},387987:(e,t,r)=>{r.d(t,{P2:()=>i,Mf:()=>a,LC:()=>l,fH:()=>c,B:()=>d});var o=r(667294),n=r(785893);const s=(0,o.createContext)(),i=s.Provider;function a(e){function t(t){const r=(0,o.useContext)(s);if(!r)throw new Error("withRequestContext must be used within a RequestContextProvider");return(0,n.jsx)(e,{...t,requestContext:r})}return t.displayName=`withRequestContext(${String(e.displayName||e.name)})`,t}const l=({children:e})=>{const t=(0,o.useContext)(s);if(!t)throw new Error("RequestContextConsumer must be used within a RequestContextProvider");return e(t)},c=({children:e})=>{const t=(0,o.useContext)(s);if(!t)throw new Error("RequestContextConsumer must be used within a RequestContextProvider");return e(t)};function d(){const e=(0,o.useContext)(s);if(!e)throw new Error("useRequestContext must be used within a RequestContextProvider");return e}},357846:(e,t,r)=>{r.d(t,{U2:()=>l,bi:()=>c,v_:()=>d});var o=r(139848),n=r(311866),s=r(301314),i=r(678929);function a({fetchOptions:e,resource:t,retry:r}){return(l,c)=>{var d,u,h;const{bookmark:p,headers:m,options:g,refresh:v,schema:y}=e,f=(0,o.Z)(g);if(null!==(d=c().resources)&&void 0!==d&&null!==(u=d[t])&&void 0!==u&&null!==(h=u[f])&&void 0!==h&&h.fetching&&!r)return Promise.resolve();const x=r?r.bookmark:p,b=x?{...g,bookmarks:[x]}:g;return l((0,s.LQ)(t,g,!0)),n.ZP.create(t,b).callGet(void 0,m).then((o=>{var c,d,u;const h=null===(c=o.resource_response)||void 0===c?void 0:c.data,[m]=o.bookmarks||[];if(Array.isArray(h)&&0===h.length&&m&&m!==i.q){const o=r?r.count:0;if(!(o>=i.s))return l(a({resource:t,fetchOptions:e,retry:{count:o+1,bookmark:m}}))}null===(d=n.ZP.customDataManipulations)||void 0===d||d.call(n.ZP,t,h,g);const{normalizedResponse:f,resourceSchema:x}=(null===(u=n.ZP.normalizeResponse)||void 0===u?void 0:u.call(n.ZP,{data:h,opts:{bookmark:p,options:g,schema:y},resource:t}))||{normalizedResponse:null,resourceSchema:void 0};return p?l((0,s.Dm)(t,g,o,f,x)):(l((0,s.Sr)(t,g,o,f,v,x)),n.ZP.fetchCompleteCallback&&n.ZP.fetchCompleteCallback({resource:t,options:g,response:o,normalizedResponse:f,refresh:v,resourceSchema:x})),Promise.resolve()}),(e=>{l((0,s.Tl)(t,g,e))}))}}const l=(e,{bookmark:t,headers:r,options:o,schema:n})=>a({resource:e,fetchOptions:{bookmark:t,headers:r,options:o,refresh:!1,schema:n}}),c=(e,{headers:t,options:r,schema:o})=>a({resource:e,fetchOptions:{headers:t,options:r,refresh:!0,schema:o}});function d(e,t,r){return o=>{const{options:i}=t;return n.ZP.create(e,i).callCreate().then((t=>{var n;if(null!==(n=t.resource_response)&&void 0!==n&&n.data){const n=t.resource_response.data,a=(null==r?void 0:r(n))||null;o((0,s.XM)(e,i,t,a))}return t}),(t=>(o((0,s.Tl)(e,i,t)),t)))}}},678929:(e,t,r)=>{r.d(t,{q:()=>o,s:()=>n});const o="-end-",n=10},451104:(e,t,r)=>{r.d(t,{AF:()=>o,KK:()=>n,cR:()=>s,zP:()=>i,aW:()=>a,se:()=>l});const o="CREATE_COMPLETE",n="FETCHING",s="FETCH_ERROR",i="FETCH_COMPLETE",a="FETCH_MORE_COMPLETE",l="RESOURCE_INVALIDATE"},301314:(e,t,r)=>{r.d(t,{XM:()=>n,LQ:()=>s,Tl:()=>i,Sr:()=>a,Dm:()=>l,jB:()=>c});var o=r(451104);function n(e,t,r,n){return{type:o.AF,payload:{resource:e,options:t,response:r,normalizedResponse:n}}}function s(e,t,r){return{type:o.KK,payload:{resource:e,options:t,isFetching:r}}}const i=(e,t,r)=>({type:o.cR,payload:{resource:e,options:t,error:r}});function a(e,t,r,n,s,i){return{type:o.zP,payload:{isRefresh:s,normalizedResponse:n,options:t,resource:e,response:r,schema:i}}}function l(e,t,r,n,s){return{type:o.aW,payload:{resource:e,options:t,response:r,normalizedResponse:n,schema:s}}}function c(e,t={}){return{type:o.se,payload:{resource:e,options:t}}}},535718:(e,t,r)=>{r.d(t,{Z:()=>u});var o=r(667294),n=r(40142),s=r(139848),i=r(678929),a=r(855168),l=r(387987),c=r(357846);const d={};function u({enabledRouteRefresh:e,dangerouslyDisableFetch:t,headers:r,name:u,noCache:h,options:p,schema:m}){const g=(0,n.useDispatch)(),v=(0,s.Z)(p),y=(0,o.useRef)(),f=(0,a.k6)(),x=f&&"POP"!==f.action,b=e=>(e[u]||d)[v]||d,_=(0,n.useSelector)((({resources:e})=>b(e).nextBookmark)),C=(0,n.useSelector)((({resources:e})=>b(e).data)),w=(0,n.useSelector)((({resources:e})=>b(e).auxData)),k=(0,n.useSelector)((({resources:e})=>b(e).error)),j=(0,n.useSelector)((({resources:e})=>Boolean(b(e).fetching))),S=Boolean(k)||void 0!==C,P=S&&!j&&_===i.q,R=Boolean(S&&e&&x&&!t),[T,E]=(0,o.useState)(R),O=(0,o.useCallback)((e=>g((0,c.U2)(u,{options:p,schema:m,bookmark:e,headers:r}))),[g,u,v,m,r]),Z=()=>g((0,c.bi)(u,{options:p,schema:m,headers:r})),{isBot:M}=(0,l.B)();(0,o.useEffect)((()=>{if(!t&&y.current!==v){const e=void 0===y.current;y.current=v,!S&&!j||e&&k&&(({httpStatus:e})=>!e||e>=500)(k)?O():(!M&&h||R)&&Z()}}));const D=(0,o.useCallback)((()=>{t||(Z(),E(!0))}),[t,c.bi,u,v,r,E]),I=(0,o.useCallback)((()=>{!_||P||j||t||O(_)}),[t,O,_,P,j]),H=(0,o.useRef)({auxData:void 0,data:void 0,error:void 0,fetchMore:I,isAtEnd:!1,isFetching:!1,isLoaded:!1,isRefreshing:!1,nextBookmark:void 0,refresh:D}),L={auxData:w,data:C,error:k,fetchMore:I,isAtEnd:P,isFetching:j,isLoaded:S,isRefreshing:T,nextBookmark:_,refresh:D};return(0,n.shallowEqual)(L,H.current)||(!T||!H.current.data&&R||(0,n.shallowEqual)(L.data,H.current.data)||(L.isRefreshing=!1,E(!1)),H.current=L),H.current}},906959:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(238402);function n({storyCategory:e,query:t,referringSource:r,bubbleId:n,storyId:s}){const i=[0,24,21,26].includes(e),a=(0,o.Z)({q:t,rs:r||void 0,b_id:n,source_id:s});return i?`/discover/article/${n}`:"/search/pins/"+(a?"?"+a:"")}},480055:(e,t,r)=>{r.d(t,{J:()=>o,Z:()=>n});const o=-1;function n(e){switch(e){case 0:return"shopping-bag";case 1:return"tag";default:return"search"}}},730060:(e,t,r)=>{r.d(t,{Z:()=>o});const o=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/\'/g,"&#39;")},754999:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(925265),n=r(730060);const s=(e,t)=>{const r={};return Object.keys(t).forEach((e=>{r[e]=t[e]?(0,n.Z)(t[e].toString()):""})),(0,o.Z)(e,r)}},34411:(e,t,r)=>{r.d(t,{$:()=>n,Z:()=>i});var o=r(762803);const{Provider:n,useHook:s}=(0,o.Z)("viewer"),i=s},149674:(e,t,r)=>{r.d(t,{jx:()=>n,Wb:()=>s,tk:()=>i});var o=r(762803);const{Provider:n,useHook:s}=(0,o.Z)("Pins");function i(){const{pins:e}=s();return t=>e[t]}},56221:(e,t,r)=>{r.d(t,{Z:()=>w});var o=r(667294),n=r(151101),s=r(759746),i=r(304385),a=r(906959),l=r(303975),c=r(451190),d=r(311866),u=r(881220),h=r(382064),p=r(174523),m=r(880841),g=r(883119),v=r(785893);function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class f extends o.PureComponent{constructor(...e){var t;super(...e),t=this,y(this,"state",{showModal:!1,reportType:null}),y(this,"handleDismiss",(()=>this.setState({showModal:!1}))),y(this,"handleClick",(()=>{const{reportType:e}=this.state;"image"===e?this.reportSuggestionImage():this.reportSuggestionText()})),y(this,"reportSuggestionImage",(async function(){const{imgSignature:e,reportImage:r}=t.props;t.setState({showModal:!1});r((await d.ZP.create("GetPinFromSignature",{imgSignature:e}).callGet()).resource_response.data.id)})),y(this,"reportSuggestionText",(()=>{const{handleReport:e,toastManagerContext:t}=this.props;e&&(e(),t.showToast((({onHide:e})=>(0,v.jsx)(u.ZP,{onHide:e,text:this.props.i18n._("Thanks for your report! This will be reviewed by our Trust and Safety Team","ReportingFlag.Toast.text","Toast after reporting a search suggestion")}))),this.handleDismiss())})),y(this,"showModal",(({event:e})=>{e.stopPropagation(),e.preventDefault(),this.setState({showModal:!0})}))}render(){const{showModal:e}=this.state;return(0,v.jsxs)(o.Fragment,{children:[this.props.isVisible&&(0,v.jsx)(l.Z,{onClick:this.showModal,backgroundHaloSize:24}),e&&(0,v.jsx)(c.Z,{accessibilityModalLabel:this.props.i18n._("Report search term","ReportingFlag.Modal.accessibilityModalLabel","accessible label for report suggestion modal"),heading:this.props.i18n._("Report search term","ReportingFlag.Modal.heading","Heading for report suggestion modal"),onDismiss:this.handleDismiss,size:"sm",children:(0,v.jsxs)(g.xu,{children:[(0,v.jsx)(g.xu,{padding:5,children:(0,v.jsx)(g.xv,{children:this.props.i18n._("When you flag this, our Trust and Safety team will review it. If it doesn't meet our Community Guidelines, it will be blocked.","ReportingFlag.Box.Text.report","What will happen when you report a suggestion")})}),(0,v.jsxs)(g.xu,{role:"list",display:"flex",direction:"column",marginBottom:4,paddingX:5,children:[(0,v.jsxs)(g.xu,{alignItems:"center",paddingY:1,display:"flex",direction:"row",children:[(0,v.jsx)(g.EU,{checked:"text"===this.state.reportType,id:"textType",onChange:()=>this.setState({reportType:"text"}),value:"Report search text"}),(0,v.jsx)(g.xu,{flex:"grow",children:(0,v.jsx)(g.__,{htmlFor:"textType",children:(0,v.jsx)(g.xu,{paddingX:2,children:(0,v.jsx)(g.xv,{children:"Report search text"})})})})]}),(0,v.jsxs)(g.xu,{alignItems:"center",paddingY:1,display:"flex",direction:"row",children:[(0,v.jsx)(g.EU,{checked:"image"===this.state.reportType,id:"imageType",onChange:()=>this.setState({reportType:"image"}),value:"Report search image"}),(0,v.jsx)(g.xu,{flex:"grow",children:(0,v.jsx)(g.__,{htmlFor:"imageType",children:(0,v.jsx)(g.xu,{paddingX:2,children:(0,v.jsx)(g.xv,{children:"Report search image"})})})})]})]}),(0,v.jsx)(g.iz,{}),(0,v.jsxs)(g.xu,{display:"flex",justifyContent:"end",padding:2,children:[(0,v.jsx)(g.xu,{margin:2,children:(0,v.jsx)(g.zx,{fullWidth:!0,onClick:this.handleDismiss,text:this.props.i18n._("Cancel","ReportingFlag.Box.Button.text.cancel","Text for cancel button when reporting search suggestion")})}),(0,v.jsx)(g.xu,{margin:2,children:(0,v.jsx)(g.zx,{fullWidth:!0,color:"red",onClick:this.handleClick,text:this.props.i18n._("Report","ReportingFlag.Box.Button.text.report","Button label to report search suggestion"),disabled:!this.state.reportType})})]})]})})]})}}function x(e){const t=(0,p.ZP)(),{reportImage:r}=(0,h.f)();return(0,v.jsx)(f,{...e,i18n:t,reportImage:r,toastManagerContext:(0,m.F9)()})}var b=r(754999),_=r(34411),C=r(480055);function w({bubble:e,height:t,storyId:r,width:l,onClick:c,referringSource:d,contextLogData:u,viewType:h,viewParameter:m,slotIndex:y,handleReport:f,showFlag:w,imgSignature:k,onMouseEnter:j,onMouseLeave:S,isHovered:P,disableTabIndex:R}){const T=(0,p.ZP)(),E=(0,_.Z)(),{id:O,action:Z,cover_images:M,dominant_colors:D,identifier_icon_type:I,title:H,story_category:L,curator:N}=e,B=M&&M[0]?M[0]["280x280"]||M[0]["236x"]:void 0,F=(0,b.Z)(H&&H.format||"",H&&H.args||{}),z=D&&D.length?D[0]:"gray",q=(null==Z?void 0:Z.url)||(0,a.Z)({storyCategory:L,query:F,referringSource:d,bubbleId:O,storyId:r});return(0,v.jsx)(i.Z,{impressionAuxFields:{storyCategory:L,storyIdStr:r},impressionType:"Article",loggingId:O,viewType:h,viewParameter:m,slotIndex:y,contextLogData:{story_id:r,...u},children:(0,v.jsx)(s.Z,{backgroundColor:z,coverImage:B,height:t,id:O,isHovered:P,onClick:c,onMouseEnter:j,onMouseLeave:S,url:q,width:l,disableTabIndex:R,children:({isHovered:e})=>(0,v.jsxs)(o.Fragment,{children:[N&&26!==L&&(0,v.jsx)(g.xu,{position:"absolute",top:!0,left:!0,padding:2,children:(0,v.jsx)(n.Z,{outline:!0,size:"xs",src:N.image_small_url,name:N.full_name})}),I&&I!==C.J&&(0,v.jsx)(g.xu,{alignItems:"center",color:"white",display:"flex",height:24,justifyContent:"center",left:!0,margin:2,opacity:.8,position:"absolute",rounding:"circle",top:!0,width:24,children:(0,v.jsx)(g.JO,{icon:(0,C.Z)(I),accessibilityLabel:T._("Shopping icon","bubble.shoppingIcon.label","Accessibility label for bubble shopping Icon"),color:"darkGray",size:12})}),(0,v.jsx)(g.xu,{display:"flex",height:t,width:l||"100%",position:"absolute",top:!0,padding:3,alignItems:26===L?"end":"center",justifyContent:"center",children:(0,v.jsxs)(g.kC,{alignItems:"stretch",justifyContent:"start",direction:"column",children:[t>200?(0,v.jsx)(g.X6,{size:"md",align:"center",color:"white",children:F}):(0,v.jsx)(g.xv,{align:"center",color:"white",weight:"bold",children:F}),N&&26===L&&(0,v.jsxs)(g.xu,{display:"flex",justifyContent:"center",alignItems:"center",marginTop:4,children:[(0,v.jsx)(g.xu,{marginEnd:2,children:(0,v.jsx)(n.Z,{outline:!0,size:"xs",src:N.image_small_url,name:N.full_name})}),(0,v.jsx)(g.xv,{size:"sm",color:"white",children:N.full_name})]})]})}),E.isAuth&&E.isEmployee&&w?(0,v.jsx)(g.xu,{position:"absolute",bottom:!0,right:!0,marginBottom:1,children:(0,v.jsx)(x,{handleReport:f,viewType:h,viewParameter:m,imgSignature:k||"",isVisible:e})}):null]})})})}},759746:(e,t,r)=>{r.d(t,{Z:()=>a});var o=r(667294),n=r(883119),s=r(785893);const i={bubbleOverlay:{backgroundColor:"rgba(0, 0, 0, 0.4)"},hoverOverlay:{backgroundColor:"rgba(0, 0, 0, 0.6)"}};function a({backgroundColor:e,children:t,coverImage:r,height:a,id:l,isHovered:c,onMouseEnter:d,onMouseLeave:u,onClick:h,url:p,width:m,disableTabIndex:g}){var v,y;const[f,x]=(0,o.useState)(!1),b=()=>{d?d():x(!0)},_=()=>{u?u():x(!1)},C=c||f;return(0,s.jsx)(n.iP,{role:"link",href:p,onBlur:_,onMouseLeave:_,onFocus:b,onMouseEnter:b,onTap:()=>{null==h||h(l)},rounding:4,tabIndex:g?-1:void 0,children:(0,s.jsx)(n.zd,{rounding:4,width:m||"100%",height:a,children:null!=r&&r.url?(0,s.jsxs)(n.Ee,{alt:"",color:e,fit:"cover",naturalHeight:null!==(v=r.height)&&void 0!==v?v:1,naturalWidth:null!==(y=r.width)&&void 0!==y?y:1,role:"presentation",src:r.url,children:[(0,s.jsx)(n.xu,{height:"100%",width:"100%",dangerouslySetInlineStyle:{__style:C?i.hoverOverlay:i.bubbleOverlay}}),"function"==typeof t?t({isHovered:C}):t]}):(0,s.jsx)(n.xu,{height:"100%",width:"100%",dangerouslySetInlineStyle:{__style:{backgroundColor:e}}})})})}},303975:(e,t,r)=>{r.d(t,{Z:()=>h});var o=r(667294);const n={backgroundColor:"transparent"},s={backgroundColor:"rgba(216, 216, 216, 0.37)"},i={borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"},a={outline:"0"};var l=r(883119),c=r(785893);function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class u extends o.Component{constructor(...e){super(...e),d(this,"state",{hovered:!1}),d(this,"handleMouseEnter",(()=>this.setState({hovered:!0}))),d(this,"handleMouseLeave",(()=>this.setState({hovered:!1})))}render(){const{backgroundHaloSize:e,onClick:t,color:r="lightGray"}=this.props,o={height:e,width:e},d={border:0,display:"block",background:"transparent",cursor:"pointer",...a},u={...i,...n,...this.state.hovered?s:{}};return(0,c.jsx)("button",{type:"button",style:d,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onClick:e=>t&&t({event:e}),children:(0,c.jsx)("div",{style:{...o,...u},children:(0,c.jsx)(l.xu,{rounding:"circle",children:(0,c.jsx)(l.JO,{accessibilityLabel:"",icon:"flag",size:e/2,color:r})})})})}}const h=u},382064:(e,t,r)=>{r.d(t,{X:()=>d,f:()=>c});var o=r(667294);function n(e=null,t){switch(t.type){case"REPORT_CONTENT_SHOW":return{id:t.payload.id,isProduct:t.payload.isProduct,isPromoted:t.payload.isPromoted,videoDuration:t.payload.videoDuration,viewParameter:t.payload.viewParameter,viewType:t.payload.viewType,type:t.payload.type};case"REPORT_CONTENT_DISMISS":return null;default:return e}}var s=r(762803),i=r(493858),a=r(785893);const{Provider:l,useHook:c}=(0,s.Z)("ReportData");function d({children:e}){const[t,r]=(0,o.useReducer)(n,null),s=(0,o.useMemo)((()=>({dismiss:()=>r({type:"REPORT_CONTENT_DISMISS"}),reportComment:(e,t,o)=>r({type:"REPORT_CONTENT_SHOW",payload:{id:e,isProduct:!1,isPromoted:!1,videoDuration:null,viewParameter:t,viewType:o,type:"aggregatedComment"}}),reportImage:(e,t,o)=>r({type:"REPORT_CONTENT_SHOW",payload:{id:e,isProduct:!1,isPromoted:!1,videoDuration:null,viewParameter:t,viewType:o,type:"pin"}}),reportPin:(e,t,o)=>{const{id:n,videos:s}=e,a=(0,i.VX)(e),l=(0,i.jL)(e);let c;if((0,i.iR)(s)&&s){const{video_list:e={}}=s,t=e[Object.keys(e)[0]];c=t&&t.duration}r({type:"REPORT_CONTENT_SHOW",payload:{id:n,isProduct:a,isPromoted:l,videoDuration:c,viewParameter:t,viewType:o,type:"pin"}})}})),[r]);return(0,a.jsx)(l,{value:{reportData:t,...s},children:e})}},372833:(e,t,r)=>{r.d(t,{B:()=>i,Z:()=>a});var o=r(858875),n=r(704170);const s=[];function i(e){let t;try{t=JSON.stringify({errorObj:e})}catch(l){t=JSON.stringify({errorObj:{message:e.message,name:"logToServer stringify exception"}})}const r=(i={report_context:JSON.stringify({current_url:window.location.href,client_version:"74b2aec"}),report_data:t},Object.keys(i).map((e=>e+"="+encodeURIComponent(i[e]))).join("&"));var i;const a=window.btoa(r);if(-1===s.indexOf(a)){const e=new XMLHttpRequest;e.open("post","/_/_/report/error/",!0),e.setRequestHeader("Content-type","application/x-www-form-urlencoded");const t=(0,n.H)();t&&e.setRequestHeader("X-Pinterest-PWS-Handler",t),e.setRequestHeader("X-CSRFToken",function(e){const t=("; "+document.cookie).split("; "+e.name+"=");return 2===t.length?t.pop().split(";").shift():""}(o.fS)),e.send(r),s.push(a)}s.length>100&&s.shift()}function a(){window.addEventListener("error",(e=>{const t=e.error||{};i({name:t.name,message:t.message||e.message,stack:t.stack,filename:e.filename,line:e.lineno,column:e.colno})})),window.addEventListener("unhandledrejection",(e=>{var t,r,o,n,s;if(!((null==e?void 0:e.reason)instanceof Error))return;const{reason:a}=e,l="string"==typeof(null==a?void 0:a.message)?a.message:String(a);i({name:null!==(t=null==a?void 0:a.name)&&void 0!==t?t:"unhandledrejection",message:l,message_detail:null==a?void 0:a.message_detail,original_message:null==a?void 0:a.original_message,stack:null==a?void 0:a.stack,filename:null==a?void 0:a.fileName,line:null!==(r=null!==(o=null==a?void 0:a.lineno)&&void 0!==o?o:null==a?void 0:a.line)&&void 0!==r?r:null==a?void 0:a.lineNumber,column:null!==(n=null!==(s=null==a?void 0:a.column)&&void 0!==s?s:null==a?void 0:a.colno)&&void 0!==n?n:null==a?void 0:a.columnNumber})}))}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/97639-bcf66ecc27353078.mjs.map