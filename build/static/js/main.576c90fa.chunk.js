(this["webpackJsonpstaycation-web"]=this["webpackJsonpstaycation-web"]||[]).push([[0],{112:function(e,a,t){},137:function(e,a){},155:function(e,a,t){},162:function(e,a,t){},165:function(e,a,t){},166:function(e,a,t){},167:function(e,a,t){},168:function(e,a,t){},172:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(13),c=t.n(l),i=t(25),s=t(4),m=t(32),o=t(15),u=t(16),d=t(20),p=t(19),g=t(18),h=t(1),E=t.n(h);function N(e){var a=[e.className];e.isPrimary&&a.push("btn-primary"),e.isLight&&a.push("btn-light"),e.isLarge&&a.push("btn-lg"),e.isSmall&&a.push("btn-sm"),e.isBlock&&a.push("btn-block"),e.hasShadow&&a.push("btn-shadow");var t=function(){e.onClick&&e.onClick()};return e.isDisabled||e.isLoading?(e.isDisabled&&a.push("disabled"),r.a.createElement("span",{className:a.join(" "),style:e.style},e.isLoading?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"spinner-border spinner-border-sm mx-5"}),r.a.createElement("span",{className:"sr-only"},"Loading...")):e.children,e.children)):"link"===e.type?e.isExternal?r.a.createElement("a",{href:e.href,className:a.join(" "),style:e.style,target:"_blank"===e.target?"_blank":void 0,rel:"_blank"===e.target?"noopener noreferrer":void 0},e.children):r.a.createElement(i.b,{to:e.href,className:a.join(" "),style:e.style,onClick:t},e.children):r.a.createElement("button",{className:a.join(" "),style:e.style,onClick:t},e.children)}function f(){return r.a.createElement(N,{className:"brand-text-icon",href:"",type:"link"},"Stay",r.a.createElement("span",{className:"text-gray-900"},"cation."))}function v(e){var a=function(a){return e.location.pathname===a?" active":""};return e.isCentered?r.a.createElement(E.a,null,r.a.createElement("header",{className:"spacing-sm"},r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},r.a.createElement(N,{className:"brand-text-icon mx-auto",href:"",type:"link"},"Stay",r.a.createElement("span",{className:"text-gray-900"},"cation.")))))):r.a.createElement(E.a,null,r.a.createElement("header",{className:"spacing-sm"},r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},r.a.createElement(f,null),r.a.createElement("div",{className:"collapse navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item".concat(a("/"))},r.a.createElement(N,{className:"nav-link",type:"link",href:"/"},"Home")),r.a.createElement("li",{className:"nav-item".concat(a("/browse-by"))},r.a.createElement(N,{className:"nav-link",type:"link",href:"/browse-by"},"Browse By")),r.a.createElement("li",{className:"nav-item".concat(a("/stories"))},r.a.createElement(N,{className:"nav-link",type:"link",href:"/stories"},"Stories")),r.a.createElement("li",{className:"nav-item".concat(a("/agents"))},r.a.createElement(N,{className:"nav-link",type:"link",href:"/agents"},"Agents"))))))))}var y=t(69),b=t.n(y),k=t(70),w=t.n(k),x=t(71),j=t.n(x),O=t(72),C=t.n(O),D=function(e){return new Intl.NumberFormat("id-ID").format(e)};function P(e){return r.a.createElement(E.a,{bottom:!0},r.a.createElement("section",{className:"container pt-4"},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-auto pr-5",style:{width:530}},r.a.createElement("h1",{className:"font-weight-bold line-height-1 mb-3"},"Forget Busy Work,",r.a.createElement("br",null),"Start Next Vacation"),r.a.createElement("p",{className:"mb-4 font-weight-light text-gray-500 w-75",style:{lineHeight:"170%"}},"We provide what you need to enjoy your holiday with family. Time to make another memorable moments."),r.a.createElement(N,{className:"btn px-5",isPrimary:!0,hasShadow:!0,onClick:function(){window.scrollTo({top:e.refMostPicked.current.offsetTop-50,behavior:"smooth"})}},"Show Me Now"),r.a.createElement("div",{className:"row",style:{marginTop:80}},r.a.createElement("div",{className:"col-auto",style:{marginRight:35}},r.a.createElement("img",{width:"36",src:j.a,alt:"".concat(e.data.trevelers," travelers")}),r.a.createElement("h6",{className:"mt-3"},D(e.data.trevelers)," ",r.a.createElement("span",{className:"text-gray-500 font-weight-light"},"travelers"))),r.a.createElement("div",{className:"col-auto",style:{marginRight:35}},r.a.createElement("img",{width:"36",src:C.a,alt:"".concat(e.data.treasures," treasures")}),r.a.createElement("h6",{className:"mt-3"},D(e.data.treasures)," ",r.a.createElement("span",{className:"text-gray-500 font-weight-light"},"treasures"))),r.a.createElement("div",{className:"col-auto"},r.a.createElement("img",{width:"36",src:w.a,alt:"".concat(e.data.cities," cities")}),r.a.createElement("h6",{className:"mt-3"},D(e.data.cities)," ",r.a.createElement("span",{className:"text-gray-500 font-weight-light"},"cities"))))),r.a.createElement("div",{className:"col-6 pl-5"},r.a.createElement("div",{style:{width:560}},r.a.createElement("img",{src:b.a,alt:"Room with couches",className:"img-fluid position-absolute",style:{width:520,height:410,margin:"-30px 0 0 -30px",zIndex:1,borderRadius:"100px 15px 15px 15px"}}),r.a.createElement("div",{className:"frame",style:{width:510,height:400,margin:"0 -15px -15px 0"}}))))))}function S(e){return r.a.createElement("section",{className:"container",ref:e.refMostPicked},r.a.createElement(E.a,{bottom:!0},r.a.createElement("h4",{className:"mb-3"},"Most Picked"),r.a.createElement("div",{className:"container-grid"},e.data.map((function(e,a){return r.a.createElement("div",{key:"mostpicked-".concat(a),className:"item column-4".concat(0===a?" row-2":" row-1")},r.a.createElement(E.a,{bottom:!0,delay:500*a},r.a.createElement("div",{className:"card card-featured"},r.a.createElement("div",{className:"tag"},"$",e.price," ",r.a.createElement("span",{className:"font-weight-light"},"per $",e.unit)),r.a.createElement("figure",{className:"img-wrapper"},r.a.createElement("img",{src:e.imageId[0]?"https://staycationapinodejs.herokuapp.com/".concat(e.imageId[0].imageUrl):"",alt:e.title,className:"img-cover"})),r.a.createElement("div",{className:"meta-wrapper"},r.a.createElement(N,{type:"link",className:"stretched-link d-block text-white",href:"/properties/".concat(e._id)},r.a.createElement("h5",null,e.title)),r.a.createElement("span",null,e.city,", ",e.country)))))})))))}function B(e){return e.data.map((function(e,a){return 0===e.itemId.length?null:r.a.createElement("section",{className:"container",key:"category-".concat(a)},r.a.createElement(E.a,{bottom:!0},r.a.createElement("h4",{className:"mb-3 font-weight-medium"},e.name),r.a.createElement("div",{className:"container-grid"},e.itemId.length>0&&e.itemId.map((function(e,t){return r.a.createElement("div",{className:"item column-3 row-1",key:"category-".concat(a,"-item-").concat(t)},r.a.createElement(E.a,{bottom:!0,delay:300*t},r.a.createElement("div",{className:"card"},e.isPopular&&r.a.createElement("div",{className:"tag"},"Popular"," ",r.a.createElement("span",{className:"font-weight-light"},"Choice")),r.a.createElement("figure",{className:"img-wrapper",style:{height:180}},r.a.createElement("img",{src:e.imageId[0]?"https://staycationapinodejs.herokuapp.com/".concat(e.imageId[0].imageUrl):"",alt:e.title,className:"img-cover"})),r.a.createElement("div",{className:"meta-wrapper"},r.a.createElement(N,{type:"link",className:"stretched-link d-block text-gray-800",href:"/properties/".concat(e._id)},r.a.createElement("h5",{className:"h4"},e.title)),r.a.createElement("span",{className:"text-gray-500"},e.city,", ",e.country)))))})))))}))}t(94);function T(e){for(var a=e.className,t=e.value,n=e.height,l=e.width,c=e.spacing,i=Number(t)%1,s=[],m=0,o=0;o<5&&o<t-i;o++)m+=l,s.push(r.a.createElement("div",{className:"star",key:"star-".concat(o),style:{left:o*l,height:n,width:l,marginRight:c}}));i>0&&t<=5&&s.push(r.a.createElement("div",{className:"star",key:"starWithDecimal",style:{left:m,height:n,width:i*l-c}}));for(var u=[],d=0;d<5;d++)u.push(r.a.createElement("div",{className:"star placeholder",key:"starPlaceholder-".concat(d),style:{left:d*l,height:n,width:l,marginRight:c}}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:["stars",a].join(" "),style:{height:n}},u,s))}function _(e){var a=e.data;return r.a.createElement(E.a,{bottom:!0},r.a.createElement("section",{className:"container"},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-auto",style:{marginRight:70}},r.a.createElement("div",{className:"testimonial-hero",style:{width:410}},r.a.createElement("img",{src:"https://staycationapinodejs.herokuapp.com/".concat(a.imageUrl),alt:"Testimonial",className:"position-absolute",style:{width:370,height:500,zIndex:1,margin:"30px 0 0 30px",borderRadius:"15px 15px 100px 15px"}}),r.a.createElement("div",{className:"frame",style:{width:365,height:500}}))),r.a.createElement("div",{className:"col"},r.a.createElement("h4",{style:{marginBottom:40}},a.name),r.a.createElement(T,{value:a.rate,height:35,width:35,spacing:4}),r.a.createElement("h5",{className:"h2 font-weight-light line-height-2 my-3"},a.content),r.a.createElement("span",{className:"text-gray-500"},a.familyName,", ",a.familyOccupation),r.a.createElement("div",null,r.a.createElement(N,{className:"btn px-5",style:{marginTop:40},hasShadow:!0,isPrimary:!0,type:"link",href:"/testimonial/".concat(a._id)},"Read Their Story"))))))}function I(){var e=(new Date).getFullYear();return 2020!==e&&(e="2020 - ".concat(e)),r.a.createElement("footer",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-auto",style:{width:350}},r.a.createElement(f,null),r.a.createElement("p",{className:"brand-tagline"},"We kaboom your beauty holiday instantly and memorable.")),r.a.createElement("div",{className:"col-auto mr-5"},r.a.createElement("h6",{className:"mt-2"},"For Beginners"),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement(N,{type:"link",href:"/register"},"New Account")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(N,{type:"link",href:"/properties"},"Start Booking a Room")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(N,{type:"link",href:"/use-payments"},"Use Payments")))),r.a.createElement("div",{className:"col-2 mr-5"},r.a.createElement("h6",{className:"mt-2"},"Explore Us"),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement(N,{type:"link",href:"/careers"},"Our Careers")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(N,{type:"link",href:"/privacy"},"Privacy")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(N,{type:"link",href:"/terms"},"Terms & Conditions")))),r.a.createElement("div",{className:"col-3"},r.a.createElement("h6",{className:"mt-2"},"Connect Us"),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement(N,{isExternal:!0,type:"link",href:"mailto:support@staycation.id"},"support@staycation.id")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(N,{isExternal:!0,type:"link",href:"tel:+622122081996"},"021 - 2208 - 1996")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",null,"Staycation, Jakarta"))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col text-center copyrights"},"Copyright ",e," \u2022 All rights reserved \u2022 Staycation"))))}var F=t(17),R=t(73),H=t.n(R);t(111);var U=function(e){var a;if(e&&e.response)return a=500===e.response.status?"Something went wrong":e.response.message,console.log(a),Object(m.b)(a),Promise.reject(e)},A=H.a.create({baseURL:"https://staycationapinodejs.herokuapp.com/api/v1/member"});A.interceptors.response.use((function(e){return e}),U);var L=A,M=function(e,a){return function(t){return L.get(e).then((function(e){t({type:"FETCH_PAGE",payload:Object(F.a)({},a,e.data)})}))}},$=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).refMostPicked=r.a.createRef(),n}return Object(u.a)(t,[{key:"componentDidMount",value:function(){window.title="Staycation | Home",window.scrollTo(0,0),this.props.page.landingPage||this.props.fetchPage("/landing-page","landingPage")}},{key:"render",value:function(){var e=this.props.page;return e.hasOwnProperty("landingPage")?r.a.createElement(r.a.Fragment,null,r.a.createElement(v,this.props),r.a.createElement(P,{refMostPicked:this.refMostPicked,data:e.landingPage.hero}),r.a.createElement(S,{refMostPicked:this.refMostPicked,data:e.landingPage.mostPicked}),r.a.createElement(B,{data:e.landingPage.category}),r.a.createElement(_,{data:e.landingPage.testimonial}),r.a.createElement(I,null)):null}}]),t}(n.Component),W=Object(g.b)((function(e){return{page:e.page}}),{fetchPage:M})($);t(112);function K(e){var a=["breadcrumb",e.className];return r.a.createElement("nav",{"aria-label":"breadcrumb"},r.a.createElement("ol",{className:a.join(" ")},e.data.map((function(a,t){return r.a.createElement("li",{key:"breadcrumb-".concat(t),className:"breadcrumb-item".concat(t===e.data.length-1?" active":"")},t===e.data.length-1?a.pageTitle:r.a.createElement(N,{type:"link",href:a.pageHref},a.pageTitle))}))))}function G(e){var a=e.data,t=e.breadcrumb;return r.a.createElement("section",{className:"container spacing-sm"},r.a.createElement(E.a,{bottom:!0},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col"},r.a.createElement(K,{data:t})),r.a.createElement("div",{className:"col-auto text-center"},r.a.createElement("h1",{className:"h2"},a.title),r.a.createElement("span",{className:"text-gray-400"},a.city,", ",a.country)),r.a.createElement("div",{className:"col"}))))}function V(e){var a=e.data;return r.a.createElement("section",{className:"container"},r.a.createElement("div",{className:"container-grid sm"},a.map((function(e,a){return r.a.createElement("div",{key:"DetailImage-".concat(a),className:"item ".concat(a>0?"column-5":"column-7"," ").concat(a>0?"row-1":"row-2")},r.a.createElement(E.a,{bottom:!0,delay:300*a},r.a.createElement("div",{className:"card h-100"},r.a.createElement("figure",{className:"img-wrapper"},r.a.createElement("img",{className:"img-cover",src:"https://staycationapinodejs.herokuapp.com/".concat(e.imageUrl),alt:e._id})))))}))))}var X=t(74),q=t.n(X);function J(e){var a=e.data;return r.a.createElement("main",null,r.a.createElement("h4",null,"About the place"),q()(a.description),r.a.createElement("div",{className:"row",style:{marginTop:30}},0===a.featureId.length?"Tidak Ada Feature":a.featureId.map((function(e,a){return r.a.createElement("div",{key:"feature-".concat(a),className:"col-3",style:{marginBottom:20}},r.a.createElement("img",{width:"38",className:"d-block mb-2",src:"https://staycationapinodejs.herokuapp.com/".concat(e.imageUrl),alt:e.name})," ",r.a.createElement("span",null,e.qty)," ",r.a.createElement("span",{className:"text-gray-500 font-weight-light"},e.name))}))))}var Y=t(5);t(155);function z(e){var a=e.value,t=e.placeholder,n=e.name,l=e.min,c=e.max,i=e.prefix,s=e.suffix,m=e.isSuffixPlural,o=function(a){var t=String(a.target.value);+t<=c&&+t>=l&&e.onChange({target:{name:n,value:+t}})};return r.a.createElement("div",{className:["input-number mb-3",e.outerClassName].join(" ")},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend "},r.a.createElement("span",{className:"input-group-text minus",onClick:function(){a>l&&o({target:{name:n,value:+a-1}})}},"-")),r.a.createElement("input",{min:l,max:c,name:n,readOnly:!0,className:"form-control",placeholder:t||"0",value:"".concat(i).concat(a).concat(s).concat(m&&a>1?"s":""),onChange:o}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text plus",onClick:function(){a<c&&o({target:{name:n,value:+a+1}})}},"+"))))}z.defaultProps={min:1,max:1,prefix:"",suffix:""};var Q=t(14),Z=t(75),ee=(t(162),t(163),t(164),function(e){var a=new Date(e),t=new Intl.DateTimeFormat("en",{year:"numeric",month:"short",day:"2-digit"}).formatToParts(a),n=Object(Q.a)(t,3),r=n[0].value,l=n[2].value;return"".concat(l," ").concat(r)}),ae=t(76),te=t.n(ae);function ne(e){var a=e.value,t=e.placeholder,l=e.name,c=Object(n.useState)(!1),i=Object(Q.a)(c,2),s=i[0],m=i[1];Object(n.useEffect)((function(){return document.addEventListener("mousedown",u),function(){document.removeEventListener("mousedown",u)}}));var o=Object(n.useRef)(null),u=function(e){o&&!o.current.contains(e.target)&&m(!1)},d="".concat(a.startDate?ee(a.startDate):"").concat(a.endDate?" - "+ee(a.endDate):"");return r.a.createElement("div",{ref:o,className:["input-date mb-3",e.outerClassName].join(" ")},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend bg-gray-900"},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("img",{src:te.a,alt:"icon calendar"}))),r.a.createElement("input",{readOnly:!0,type:"text",className:"form-control",value:d,placeholder:t,onClick:function(){return m(!s)}}),s&&r.a.createElement("div",{className:"date-range-wrapper"},r.a.createElement(Z.DateRange,{editableDateInputs:!0,onChange:function(a){var t={target:{value:a.selection,name:l}};e.onChange(t)},moveRangeOnFirstSelection:!1,onRangeFocusChange:function(e){e.indexOf(1)<0&&m(!1)},ranges:[a]}))))}t(165);function re(e){var a=e.value,t=e.type,l=e.placeholder,c=e.name,i=e.prepend,s=e.append,m=e.outerClassName,o=e.inputClassName,u=e.errorResponse,d=Object(n.useState)(null),p=Object(Q.a)(d,2),g=p[0],h=p[1],E="";"email"===t&&(E=/^[^\s@]+@[^\s@]+\.[^\s@]+$/),"tel"===t&&(E="[0-9]*");return r.a.createElement("div",{className:["input-text mb-3",m].join(" ")},r.a.createElement("div",{className:"input-group"},i&&r.a.createElement("div",{className:"input-group-prepend bg-gray-900"},r.a.createElement("span",{className:"input-group-text"},i)),r.a.createElement("input",{name:c,type:t,pattern:E,className:["form-control",o].join(" "),value:a,placeholder:l,onChange:function(a){var n={target:{name:c,value:a.target.value}};"email"===t&&(E.test(a.target.value)?h(null):h(u)),"tel"===t?a.target.validity.valid&&e.onChange(n):e.onChange(n)}}),s&&r.a.createElement("div",{className:"input-group-append bg-gray-900"},r.a.createElement("span",{className:"input-group-text"},s))),g&&r.a.createElement("span",{className:"error-helper"},g))}re.defaultProps={type:"text",pattern:"",placeholder:"Please type here...",errorResponse:"Please match the requested format."};t(166);function le(e){var a=Object(n.useState)(""),t=Object(Q.a)(a,2),l=t[0],c=t[1],i=e.placeholder,s=e.name,m=e.accept,o=e.prepend,u=e.append,d=e.outerClassName,p=e.inputClassName,g=Object(n.useRef)(null);return r.a.createElement("div",{className:["input-text mb-3",d].join(" ")},r.a.createElement("div",{className:"input-group"},o&&r.a.createElement("div",{className:"input-group-prepend bg-gray-900"},r.a.createElement("span",{className:"input-group-text"},o)),r.a.createElement("input",{accept:m,ref:g,name:s,className:"d-none",type:"file",value:l,onChange:function(a){c(a.target.value),e.onChange({target:{name:a.target.name,value:a.target.files}})}}),r.a.createElement("input",{onClick:function(){return g.current.click()},defaultValue:l,placeholder:i,className:["form-control",p].join(" ")}),u&&r.a.createElement("div",{className:"input-group-append bg-gray-900"},r.a.createElement("span",{className:"input-group-text"},u))))}le.defaultProps={placeholder:"Browse a file..."};var ce=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).updateData=function(e){n.setState(Object(Y.a)(Object(Y.a)({},n.state),{},{data:Object(Y.a)(Object(Y.a)({},n.state.data),{},Object(F.a)({},e.target.name,e.target.value))}))},n.startBooking=function(){var e=n.state.data;n.props.startBooking({_id:n.props.itemDetails._id,duration:e.duration,date:{startDate:e.date.startDate,endDate:e.date.endDate}}),n.props.history.push("/checkout")},n.state={data:{duration:1,date:{startDate:new Date,endDate:new Date,key:"selection"}}},n}return Object(u.a)(t,[{key:"componentDidUpdate",value:function(e,a){var t=this.state.data;if(a.data.date!==t.date){var n=new Date(t.date.startDate),r=new Date(t.date.endDate),l=new Date(r-n).getDate();this.setState({data:Object(Y.a)(Object(Y.a)({},this.state.data),{},{duration:l})})}if(a.data.duration!==t.duration){var c=new Date(t.date.startDate),i=new Date(c.setDate(c.getDate()+ +t.duration-1));this.setState(Object(Y.a)(Object(Y.a)({},this.state),{},{data:Object(Y.a)(Object(Y.a)({},this.state.data),{},{date:Object(Y.a)(Object(Y.a)({},this.state.data.date),{},{endDate:i})})}))}}},{key:"render",value:function(){var e=this.state.data,a=this.props.itemDetails;return r.a.createElement("div",{className:"card bordered",style:{padding:"60px 80px"}},r.a.createElement("h4",{className:"mb-3"},"Start Booking"),r.a.createElement("h5",{className:"h2 text-teal mb-4"},"$",a.price," ",r.a.createElement("span",{className:"text-gray-500 font-weight-light"},"per ",a.unit)),r.a.createElement("label",{htmlFor:"duration"},"How long you will stay?"),r.a.createElement(z,{max:30,suffix:" night",isSuffixPlural:!0,onChange:this.updateData,name:"duration",value:e.duration}),r.a.createElement("label",{htmlFor:"date"},"Pick a date"),r.a.createElement(ne,{onChange:this.updateData,name:"date",value:e.date}),r.a.createElement("h6",{className:"text-gray-500 font-weight-light",style:{marginBottom:40}},"You will pay"," ",r.a.createElement("span",{className:"text-gray-900"},"$",a.price*e.duration," USD")," ","per"," ",r.a.createElement("span",{className:"text-gray-900"},e.duration," ",a.unit)),r.a.createElement(N,{className:"btn",hasShadow:!0,isPrimary:!0,isBlock:!0,onClick:this.startBooking},"Continue to Book"))}}]),t}(n.Component),ie=Object(s.e)(ce);function se(e){var a=e.data;return 0===a.length?null:r.a.createElement("section",{className:"container"},r.a.createElement(E.a,{bottom:!0},r.a.createElement("h4",{className:"mb-3 font-weight-medium"},"Treasure to Choose"),r.a.createElement("div",{className:"container-grid"},a.map((function(e,a){return r.a.createElement("div",{className:"item column-3 row-1",key:"activity-item-".concat(a)},r.a.createElement(E.a,{bottom:!0,delay:300*a},r.a.createElement("div",{className:"card"},e.isPopular&&r.a.createElement("div",{className:"tag"},"Popular"," ",r.a.createElement("span",{className:"font-weight-light"},"Choice")),r.a.createElement("figure",{className:"img-wrapper",style:{height:180}},r.a.createElement("img",{src:e.imageUrl?"https://staycationapinodejs.herokuapp.com/".concat(e.imageUrl):"",alt:e.name,className:"img-cover"})),r.a.createElement("div",{className:"meta-wrapper"},r.a.createElement(N,{type:"link",href:"/properties/".concat(e._id),className:"stretched-link d-block text-gray-800"},r.a.createElement("h5",{className:"h4"},e.name)),r.a.createElement("span",{className:"text-gray-500"},e.type)))))})))))}var me=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"componentDidMount",value:function(){window.title="Details Page",window.scrollTo(0,0),this.props.page[this.props.match.params.id]||this.props.fetchPage("/detail-page/".concat(this.props.match.params.id),this.props.match.params.id)}},{key:"render",value:function(){var e=this.props,a=e.page,t=e.match;if(!a[t.params.id])return null;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,this.props),r.a.createElement(G,{breadcrumb:[{pageTitle:"Home",pageHref:""},{pageTitle:"House Details",pageHref:""}],data:a[t.params.id]}),r.a.createElement(V,{data:a[t.params.id].imageId}),r.a.createElement("section",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-7 pr-5"},r.a.createElement(E.a,{bottom:!0},r.a.createElement(J,{data:a[t.params.id]}))),r.a.createElement("div",{className:"col-5"},r.a.createElement(E.a,{bottom:!0},r.a.createElement(ie,{itemDetails:a[t.params.id],startBooking:this.props.checkoutBooking}))))),r.a.createElement(se,{data:a[t.params.id].activityId}),r.a.createElement(_,{data:a[t.params.id].testimonial}),r.a.createElement(I,null))}}]),t}(n.Component),oe=Object(g.b)((function(e){return{page:e.page}}),{checkoutBooking:function(e){return function(a){a({type:"CHECKOUT_BOOKING",payload:e})}},fetchPage:M})(me),ue=t(3),de=t.n(ue);t(167);function pe(e){var a=e.style,t=e.className,n=e.data,l=e.current,c=Object.keys(n);return r.a.createElement(E.a,null,r.a.createElement("ol",{className:["stepper",t].join(" "),style:a},c.map((function(e,a){var t=e===l?"active":"";return a+1===c.length?(t="",null):r.a.createElement("li",{key:"list-".concat(a),className:[t].join(" ")},a+1)}))))}function ge(e){var a=e.data,t=e.current;return r.a.createElement(E.a,{delay:300},r.a.createElement("div",{className:"text-center",style:{marginBottom:30}},r.a.createElement("h1",{className:"h2"},a[t]&&a[t].title),r.a.createElement("p",{className:"lead text-gray-500"},a[t]&&a[t].description)))}function he(e){return r.a.createElement(E.a,null,r.a.createElement("section",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-3"},e.children))))}function Ee(e){var a=e.data,t=e.current;return r.a.createElement(E.a,null,a[t]&&a[t].content)}function Ne(e){var a=e.steps,t=e.initialStep,l=Object.keys(a),c=Object(n.useState)(l.indexOf(t)>-1?t:l[0]),i=Object(Q.a)(c,2),s=i[0],m=i[1],o=l.length,u=l.indexOf(s);return r.a.createElement(r.a.Fragment,null,e.children((function(){+u>0&&m(l[u-1])}),(function(){+u<o&&m(l[u+1])}),s,a))}function fe(e){var a=e.data,t=e.ItemDetails,n=e.checkout;return r.a.createElement(E.a,null,r.a.createElement("div",{className:"container",style:{marginBottom:30}},r.a.createElement("div",{className:"row justify-content-center align-items-center"},r.a.createElement("div",{className:"col-5 border-right py-5",style:{paddingRight:80}},r.a.createElement(E.a,{delay:300},r.a.createElement("div",{className:"card"},r.a.createElement("figure",{className:"img-wrapper",style:{height:270}},r.a.createElement("img",{className:"img-cover",src:"https://staycationapinodejs.herokuapp.com/".concat(t.imageId[0].imageUrl),alt:t.title})),r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"meta-wrapper"},r.a.createElement("h5",null,t.title),r.a.createElement("span",{className:"text-gray-500"},t.city,", ",t.country))),r.a.createElement("div",{className:"col-auto"},r.a.createElement("span",null,"$",+n.duration*t.price," USD",r.a.createElement("span",{className:"text-gray-500"}," per "),n.duration," ",t.unit,+n.duration>1?"s":"")))))),r.a.createElement("div",{className:"col-5 py-5",style:{paddingLeft:80}},r.a.createElement(E.a,{delay:600},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement(re,{id:"firstName",name:"firstName",value:a.firstName,onChange:e.onChange}),r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement(re,{id:"lastName",name:"lastName",value:a.lastName,onChange:e.onChange}),r.a.createElement("label",{htmlFor:"email"},"Email Address"),r.a.createElement(re,{id:"email",name:"email",type:"email",value:a.email,onChange:e.onChange}),r.a.createElement("label",{htmlFor:"phone"},"Phone Number"),r.a.createElement(re,{id:"phone",name:"phone",type:"tel",value:a.phone,onChange:e.onChange}))))))}Ne.propTypes={data:de.a.object.isRequired,initialStep:de.a.string};var ve=t(77),ye=t.n(ve),be=t(78),ke=t.n(be);function we(e){var a=e.data,t=e.ItemDetails,n=e.checkout,l=t.price*n.duration,c=10*l/100+l;return r.a.createElement(E.a,null,r.a.createElement("div",{className:"container",style:{marginBottom:30}},r.a.createElement("div",{className:"row justify-content-center align-items-center"},r.a.createElement("div",{className:"col-5 border-right py-5",style:{paddingRight:80}},r.a.createElement(E.a,{delay:300},r.a.createElement("p",{className:"mb-4"},"Transfer Pembayaran:"),r.a.createElement("p",null,"Tax: ",10,"%"),r.a.createElement("p",null,"Sub total: $",l," USD"),r.a.createElement("p",null,"Total: $",c," USD"),r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col-3 text-right"},r.a.createElement("img",{src:ye.a,alt:"bank central asia",width:"60"})),r.a.createElement("div",{className:"col"},r.a.createElement("dl",null,r.a.createElement("dd",null,"Bank Central Asia"),r.a.createElement("dd",null,"2208 1996"),r.a.createElement("dd",null,"Adhi Ariyadi")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3 text-right"},r.a.createElement("img",{src:ke.a,alt:"mandiri",width:"60"})),r.a.createElement("div",{className:"col"},r.a.createElement("dl",null,r.a.createElement("dd",null,"Bank Mandiri"),r.a.createElement("dd",null,"2208 1996"),r.a.createElement("dd",null,"Adhi Ariyadi")))))),r.a.createElement("div",{className:"col-5 py-5",style:{paddingLeft:80}},r.a.createElement(E.a,{delay:600},r.a.createElement("label",{htmlFor:"proofPayment"},"Upload Bukti Transfer"),r.a.createElement(le,{accept:"image/*",id:"proofPayment",name:"proofPayment",value:a.proofPayment,onChange:e.onChange}),r.a.createElement("label",{htmlFor:"bankName"},"Asal Bank"),r.a.createElement(re,{id:"bankName",name:"bankName",type:"text",value:a.bankName,onChange:e.onChange}),r.a.createElement("label",{htmlFor:"bankHolder"},"Nama Pengirim"),r.a.createElement(re,{id:"bankHolder",name:"bankHolder",type:"text",value:a.bankHolder,onChange:e.onChange}))))))}var xe=t(79),je=t.n(xe);function Oe(){return r.a.createElement(E.a,null,r.a.createElement("div",{className:"container",style:{marginBottom:30}},r.a.createElement("div",{className:"row justify-content-center text-center"},r.a.createElement("div",{className:"col-4"},r.a.createElement("img",{src:je.a,className:"img-fluid",alt:"completed checkout apartment"}),r.a.createElement("p",{className:"text-gray-500"},"We will inform you via email later once the transaction has been accepted")))))}var Ce=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={data:{firstName:"",lastName:"",email:"",phone:"",proofPayment:"",bankName:"",bankHolder:""}},e.onChange=function(a){e.setState({data:Object(Y.a)(Object(Y.a)({},e.state.data),{},Object(F.a)({},a.target.name,a.target.value))})},e._Submit=function(a){var t=e.state.data,n=e.props.checkout,r=new FormData;r.append("firstName",t.firstName),r.append("lastName",t.lastName),r.append("email",t.email),r.append("phoneNumber",t.phone),r.append("itemId",n._id),r.append("duration",n.duration),r.append("bookingStartDate",n.date.startDate),r.append("bookingEndDate",n.date.endDate),r.append("accountHolder",t.bankHolder),r.append("bankFrom",t.bankName),r.append("image",t.proofPayment[0]),e.props.submitBooking(r).then((function(){a()}))},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){window.scroll(0,0)}},{key:"render",value:function(){var e=this,a=this.state.data,t=this.props,n=t.checkout,l=t.page;if(!n)return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-center justify-content-center text-center",style:{height:"100vh"}},r.a.createElement("div",{className:"col-3"},"Pilih kamar dulu",r.a.createElement("div",null,r.a.createElement(N,{className:"btn mt-5",type:"button",onClick:function(){return e.props.history.goBack()},isLight:!0},"Back")))));var c={booking:{title:"Booking Information",description:"Please fill up the blank fields below",content:r.a.createElement(fe,{data:a,checkout:n,ItemDetails:l[n._id],onChange:this.onChange})},payment:{title:"Payment",description:"Kindly follow the instructions below",content:r.a.createElement(we,{data:a,ItemDetails:l[n._id],checkout:n,onChange:this.onChange})},completed:{title:"Yay! Completed",description:null,content:r.a.createElement(Oe,null)}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{isCentered:!0}),r.a.createElement(Ne,{steps:c},(function(t,c,i,s){return r.a.createElement(r.a.Fragment,null,r.a.createElement(pe,{data:s,current:i,style:{marginBottom:50}}),r.a.createElement(ge,{data:s,current:i}),r.a.createElement(Ee,{data:s,current:i}),"booking"===i&&r.a.createElement(he,null,""!==a.firstName&&""!==a.lastName&&""!==a.email&&""!==a.phone&&r.a.createElement(E.a,null,r.a.createElement(N,{className:"btn mb-3",type:"button",isBlock:!0,isPrimary:!0,hasShadow:!0,onClick:c},"Continue to Book")),r.a.createElement(N,{className:"btn",type:"link",isBlock:!0,isLight:!0,href:"/properties/".concat(l[n._id]._id)},"Cancel")),"payment"===i&&r.a.createElement(he,null,""!==a.proofPayment&&""!==a.bankName&&""!==a.bankHolder&&r.a.createElement(E.a,null,r.a.createElement(N,{className:"btn mb-3",type:"button",isBlock:!0,isPrimary:!0,hasShadow:!0,onClick:function(){return e._Submit(c)}},"Continue to Book")),r.a.createElement(N,{className:"btn",type:"button",isBlock:!0,isLight:!0,onClick:t},"Cancel")),"completed"===i&&r.a.createElement(he,null,r.a.createElement(N,{className:"btn",type:"link",isBlock:!0,isPrimary:!0,hasShadow:!0,href:""},"Back to Home")))})))}}]),t}(n.Component),De=Object(g.b)((function(e){return{checkout:e.checkout,page:e.page}}),{submitBooking:function(e){return function(){return L.post("/booking-page",e,{headers:{contentType:"multipart/form-data"}})}}})(Ce);t(168);var Pe=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement(s.a,{exact:!0,path:"/",component:W}),r.a.createElement(s.a,{exact:!0,path:"/properties/:id",component:oe}),r.a.createElement(s.a,{exact:!0,path:"/checkout",component:De})),r.a.createElement(m.a,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Se=t(21),Be=t(80),Te={},_e=Object(Se.c)({checkout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CHECKOUT_BOOKING":return a.payload;default:return e}},page:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_PAGE":return Object(Y.a)(Object(Y.a)({},e),a.payload);default:return e}}}),Ie=[Be.a],Fe=Object(Se.e)(_e,{},Object(Se.d)(Se.a.apply(void 0,Ie),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e})),Re=t(81);t.n(Re).a.config(),c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g.a,{store:Fe},r.a.createElement(Pe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},69:function(e,a,t){e.exports=t.p+"static/media/img-hero.3f284a81.jpg"},70:function(e,a,t){e.exports=t.p+"static/media/icon-cities.e6a7cd81.svg"},71:function(e,a,t){e.exports=t.p+"static/media/icon-traveler.d2336c65.svg"},72:function(e,a,t){e.exports=t.p+"static/media/icon-treasure.4f579769.svg"},76:function(e,a,t){e.exports=t.p+"static/media/icon-calendar.67e25a39.svg"},77:function(e,a,t){e.exports=t.p+"static/media/logo-bca.82a2a8d4.png"},78:function(e,a,t){e.exports=t.p+"static/media/logo-mandiri.865aa86d.png"},79:function(e,a,t){e.exports=t.p+"static/media/completed.b029ba5f.png"},82:function(e,a,t){e.exports=t(172)},94:function(e,a,t){}},[[82,1,2]]]);
//# sourceMappingURL=main.576c90fa.chunk.js.map