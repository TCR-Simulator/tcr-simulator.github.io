(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,a){e.exports=a(308)},127:function(e,t,a){},308:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(17),r=a.n(l),s=(a(127),a(121)),c=a.n(s),o=a(120),u=a.n(o),m=a(14),h=a.n(m),d=a(15),p=a(119),b=a.n(p),g=a(67),f=a.n(g),y=a(34),v=a.n(y),E=a(51),C=a(20),O=a(21),k=a(23),N=a(22),x=a(24),S=a(49),j=a(33),w=a.n(j),q=a(68),D=a.n(q),T=a(50),I=a.n(T),L=a(108),B=a.n(L),F=a(114),M=a.n(F),Q=a(110),R=a.n(Q),W=a(109),P=a.n(W),A=a(111),z=a.n(A),H=a(112),J=a.n(H),G=a(113),U=a.n(G),V=a(52),$=a.n(V),_=a(40),K=a.n(_),X=a(27),Y=a(5),Z=a.n(Y),ee=a(39),te=a.n(ee),ae=a(106),ne=a.n(ae),ie=a(66),le=a.n(ie),re=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(k.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(i)))).handleChange=function(e){return function(t){a.setState(Object(X.a)({},e,t.target.value))}},a}return Object(x.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement("div",{className:e.root},i.a.createElement(le.a,{className:Z()(e.withoutLabel,e.textField)},i.a.createElement(te.a,{id:"min-deposit",onChange:this.handleChange("minDeposit"),endAdornment:i.a.createElement(ne.a,{position:"end"},"Wei"),inputProps:{"aria-label":"MinDeposit"}})))}}]),t}(i.a.Component),se=Object(d.withStyles)(function(e){return{root:{display:"flex",flexWrap:"wrap",marginRight:-85,marginTop:-22},withoutLabel:{marginTop:1.5*e.spacing.unit},textField:{flexBasis:100}}})(re),ce=a(107),oe=a.n(ce),ue=function(e){function t(){return Object(C.a)(this,t),Object(k.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(O.a)(t,[{key:"getDialog",value:function(){var e=this.props.content;return"acceptanceLikelihood"===e?"The probability that a maintainor will accept a submission":"submissionFreq"===e?"How frequently submissions are made in a set time frame":"submissionFreq"===e?"How frequently submissions are made in a set time frame":"submissionQuality"===e?"The quality of the submission - i.e. submissions with higher quality are more likely to be accpted":"minimumDeposit"===e?"The minimum amount a contributor must pay to contribute a submission":"TCRMech"===e?"The rules for the TCR":"curation"===e?"Determines if each of the maintainor will have the same voting right i.e one maintainer's vote may be of greater importance than another despite having the same amount of tokens":"access"===e?"Indicates if a user has to pay in order to access the list":"ERROR"}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(oe.a,{title:this.getDialog()},i.a.createElement("i",{className:"material-icons"},"help")))}}]),t}(i.a.Component),me=Object(d.withStyles)(function(e){return{button:{margin:e.spacing.unit},customWidth:{maxWidth:500},noMaxWidth:{maxWidth:"none"}}})(ue);var he=function(e){var t=e.classes,a=e.open,n=e.handleClose,l=e.tcrBar;return i.a.createElement(B.a,{open:a,onClose:n,"aria-labelledby":"form-dialog-title",className:t.dialogBox,fullWidth:!0},i.a.createElement(P.a,{id:"form-dialog-title"},"TCR Mechanism",i.a.createElement(me,{classes:"",content:"TCRMech"})),i.a.createElement(R.a,null,i.a.createElement("div",null,i.a.createElement("div",{className:t.section},i.a.createElement(z.a,{className:t.subtitleIcon}),i.a.createElement(h.a,{variant:"subtitle1",className:t.subtitle},"Submission")),i.a.createElement(v.a,{className:t.ListItem},i.a.createElement($.a,{className:t.listItemText},"Minimum Deposit",i.a.createElement(me,{classes:"",content:"minimumDeposit"})),i.a.createElement("div",null,i.a.createElement(se,null)))),i.a.createElement("div",null,i.a.createElement("div",{className:t.section},i.a.createElement(J.a,{className:t.subtitleIcon}),i.a.createElement(h.a,{variant:"subtitle1",className:t.subtitle})),i.a.createElement(v.a,{className:t.ListItem},i.a.createElement($.a,{className:t.listItemText},"Each maintainer holds equal voting rights. Curation"," ",i.a.createElement(me,{classes:"",content:"curation"})),i.a.createElement(K.a,{defaultChecked:!0}))),i.a.createElement("div",null,i.a.createElement("div",{className:t.section},i.a.createElement(U.a,{className:t.subtitleIcon}),i.a.createElement(h.a,{variant:"subtitle1",className:t.subtitle},"Subscription")),i.a.createElement(v.a,{className:t.ListItem},i.a.createElement($.a,{className:t.listItemText},"Consumer pays to subscribe to the list. Curation"," ",i.a.createElement(me,{classes:"",content:"access"})),i.a.createElement(K.a,null)))),i.a.createElement(M.a,null,i.a.createElement(I.a,{onClick:n,color:"primary"},"Cancel"),i.a.createElement(I.a,{onClick:function(e){return function(){e.setState(function(e){var t=Object(E.a)(e.chipData);return t.push({key:Math.floor(1e4*Math.random())}),{chipData:t}}),e.setState({tcrDialogOpened:!1})}}(l),color:"primary"},"Add")))};he.defaultProps={open:!1,handleClose:function(){}};var de=Object(d.withStyles)(function(e){return{subtitle:{display:"inline",paddingLeft:6,marginTop:1,position:"absolute"},dialogBox:{maxWidth:"80%"},subtitleIcon:{display:"inline",padding:3},listItemText:{marginLeft:10},ListItem:{marginTop:10,marginBottom:17},margin:{margin:e.spacing.unit},section:{borderBottom:"1px solid rgb(0,0,0,.25)"}}})(he),pe=function(e){function t(e){var a;Object(C.a)(this,t),a=Object(k.a)(this,Object(N.a)(t).call(this,e));for(var n=[],i=0;i<3;i++)n.push({key:Math.floor(1e4*Math.random())});return a.state={chipData:n,tcrDialogOpened:!1},a}return Object(x.a)(t,e),Object(O.a)(t,[{key:"handleDelete",value:function(e){var t=this;return function(){t.setState(function(t){var a=Object(E.a)(t.chipData),n=a.indexOf(e);return a.splice(n,1),{chipData:a}})}}},{key:"handleClick",value:function(e){return function(){alert("key: ".concat(e.key))}}},{key:"handleAddClick",value:function(){var e=this;return function(){e.setState({tcrDialogOpened:!0})}}},{key:"handleTcrDialogClose",value:function(){var e=this;return function(){e.setState({tcrDialogOpened:!1})}}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.chipData,l=a.tcrDialogOpened;return i.a.createElement(w.a,{elevation:1,square:!0,className:t.tcrBar},i.a.createElement(h.a,{variant:"h6",component:"h2",color:"secondary"},"TCR Mechanisms"),n.map(function(a,n){return i.a.createElement(D.a,{key:a.key,label:"TCR".concat(n+1),onDelete:e.handleDelete(a),onClick:e.handleClick(a),className:t.chip,color:"primary",variant:"outlined"})}),i.a.createElement(D.a,{label:"+",className:t.chip,onClick:this.handleAddClick(),color:"primary"}),i.a.createElement(de,{open:l,handleClose:this.handleTcrDialogClose(),tcrBar:this}))}}]),t}(i.a.Component),be=Object(d.withStyles)(function(e){return{tcrBar:Object(S.a)({},e.mixins.gutters(),{paddingTop:1*e.spacing.unit,paddingBottom:1*e.spacing.unit}),chip:{margin:e.spacing.unit/2}}})(pe),ge=a(116),fe=a.n(ge),ye=a(117),ve=a.n(ye),Ee=a(118),Ce=a.n(Ee),Oe=a(53),ke=a.n(Oe),Ne=a(115),xe=a.n(Ne),Se=function(e){function t(e){var a;return Object(C.a)(this,t),(a=Object(k.a)(this,Object(N.a)(t).call(this,e))).handleChange=function(e){return function(t){a.setState(Object(X.a)({},e,t.target.value))}},a.handleChangeQuality=function(e){return function(t){a.setState(Object(X.a)({},e,t.target.checked))}},a.handleChangeFreqSlider=function(e,t){a.setState({frequency:t})},a.handleChangeQualSlider=function(e,t){a.setState({qualityScale:t})},a.state=Object(S.a)({},a.props,{ignoreQuality:!0}),a}return Object(x.a)(t,e),Object(O.a)(t,[{key:"getBehaviorComponents",value:function(){var e=this.props.classes,t=this.state,a=t.type,n=t.frequency,l=t.ignoreQuality,r=t.qualityScale;return"maintainer"===a?i.a.createElement("div",null,i.a.createElement(xe.a,{label:"Ignore submission quality",control:i.a.createElement(K.a,{label:"Submission Quality",checked:l,onChange:this.handleChangeQuality("ignoreQuality"),value:"ignoreQuality"})}),i.a.createElement(h.a,null,"Acceptance Likelihood")," ",i.a.createElement(me,{classes:"",content:"acceptanceLikelihood"}),n,i.a.createElement(ke.a,{className:e.slider,value:n,onChange:this.handleChangeFreqSlider})):"contributor"===a?i.a.createElement("div",null,i.a.createElement(h.a,null,"Submission Frequency"),i.a.createElement(me,{classes:"",content:"submissionFreq"})," ",n,i.a.createElement(ke.a,{className:e.slider,value:n,onChange:this.handleChangeFreqSlider}),i.a.createElement(h.a,null,"Submission Quality"),i.a.createElement(me,{classes:"",content:"submissionQuality"})," ",r,i.a.createElement(ke.a,{className:e.slider,value:r,onChange:this.handleChangeQualSlider})):i.a.createElement("div",null)}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.type,n=t.population;return i.a.createElement(fe.a,{className:e.card},i.a.createElement(ve.a,null,i.a.createElement(h.a,{className:e.agent},a.toUpperCase()),i.a.createElement("form",{className:e.container,noValidate:!0,autoComplete:"off"},i.a.createElement(Ce.a,{id:"standard_number",label:"Number",value:n,onChange:this.handleChange("population"),type:"number",className:e.textField,InputLabelProps:{shrink:!0},margin:"normal"}),this.getBehaviorComponents())))}}]),t}(i.a.Component);Se.defaultProps={frequency:0,qualityScale:0};var je=Object(d.withStyles)({card:{width:"100%"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},slider:{padding:"22px 0px"},agent:{fontSize:"16px",fontWeight:500}})(Se),we=[{type:"maintainer",population:1,behaviors:{ignoreQuality:!1,acceptanceLikelihood:50}},{type:"contributor",population:20,behaviors:{qualityScale:70,frequency:15}},{type:"user",population:50}],qe=function(e){var t=e.classes,a=e.className;return i.a.createElement("div",{id:"settings",className:a},i.a.createElement(be,null),i.a.createElement("div",{id:"agents-list",className:t.agentsList},i.a.createElement(f.a,{component:"nav"},we.map(function(e){return i.a.createElement(v.a,null,i.a.createElement(je,{type:e.type,population:e.population,qualityScale:e.qualityScale,frequency:e.frequency,acceptanceLikelihood:e.acceptanceLikelihood}))}))))};qe.defaultProps={className:null};var De=Object(d.withStyles)({agentsList:{}})(qe),Te=function(e){var t=e.className;return i.a.createElement("div",{id:"results",className:t},i.a.createElement("h1",null,"Results!"))};Te.defaultProps={className:null};var Ie=Te,Le=Object(d.createMuiTheme)({palette:{primary:b.a,secondary:{main:"#444444"}}}),Be=Object(d.withStyles)({root:{height:"100%",display:"flex",flexDirection:"column"},content:{height:"100%",display:"flex"},settingFrame:{display:"flex",flexDirection:"column",height:"100%",overflow:"auto",boxShadow:"2px 0 2px rgba(0,0,0,.1)",borderRight:"1px solid rgba(0,0,0,.25)",zIndex:10,flexBasis:"35%",boxSizing:"border-box"},resultFrame:{flexGrow:1,padding:"0 20px"}})(function(e){var t=e.classes;return i.a.createElement(d.MuiThemeProvider,{theme:Le},i.a.createElement("div",{className:t.root},i.a.createElement(u.a,{position:"relative",color:"primary",elevation:2},i.a.createElement(c.a,null,i.a.createElement(h.a,{variant:"h5",color:"inherit"},"TCR Simulator"))),i.a.createElement("div",{id:"content",className:t.content},i.a.createElement(De,{className:t.settingFrame}),i.a.createElement(Ie,{className:t.resultFrame}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(Be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[122,2,1]]]);
//# sourceMappingURL=main.c36cdcbf.chunk.js.map