(this["webpackJsonpgrievance-system"]=this["webpackJsonpgrievance-system"]||[]).push([[0],{101:function(e,t,n){},102:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n(0),a=n.n(c),s=n(10),r=n.n(s),o=(n(101),n(15)),l=(n(102),n(178)),j=n(164),d=n(162),h=n(175),b=n(116),m=n(160),x=n(70),u=n.n(x),O=n(88),p=n(157),f=n(163),g=a.a.createContext({}),v=Object(p.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:'url("https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80")',backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(5,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),y=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),x=Object(o.a)(r,2),p=x[0],y=x[1],C=Object(c.useState)(!1),w=Object(o.a)(C,2),N=w[0],S=w[1],T=Object(c.useState)(!0),I=Object(o.a)(T,2),D=I[0],k=I[1],A=v(),G=a.a.useContext(g);return Object(i.jsxs)(m.a,{container:!0,component:"main",className:A.root,children:[Object(i.jsx)(d.a,{}),Object(i.jsx)(m.a,{item:!0,xs:!1,sm:4,md:7,className:A.image}),Object(i.jsxs)(m.a,{item:!0,xs:12,sm:8,md:5,component:b.a,elevation:6,square:!0,children:[Object(i.jsx)(m.a,{container:!0,justify:"flex-end",style:{paddingTop:"10px",paddingRight:"15px"}}),Object(i.jsxs)("div",{className:A.paper,children:[Object(i.jsx)(l.a,{className:A.avatar,children:Object(i.jsx)(u.a,{})}),Object(i.jsx)(O.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(i.jsxs)(f.a,{className:A.form,validate:"true",children:[Object(i.jsx)(h.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Roll Number",name:"email",autoComplete:"email",onInput:function(e){""===p&&""===n&&S(!1),s(e.target.value)},value:n,error:N&&!n,helperText:N&&!n&&"Roll number field is required",autoFocus:!0}),Object(i.jsx)(h.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onInput:function(e){""===p&&""===n&&S(!1),y(e.target.value)},value:p,error:N&&!p,helperText:N&&!p&&"Password field is required",autoComplete:"current-password"}),!D&&Object(i.jsx)(O.a,{color:"error",variant:"caption",align:"left",children:"RollNumber or Password is Invalid"}),Object(i.jsx)(j.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:A.submit,onClick:function(){console.log(n,p),S(!0),""!==p&&""!==n&&("19CSR118"===n&&"1234"===p?setTimeout((function(){return G(!0)}),1e3):(console.log("Invalid Input"),k(!1),setTimeout((function(){return k(!0)}),5e3)))},children:"Sign In"})]}),Object(i.jsxs)("p",{children:["For testing purpose ",Object(i.jsx)("br",{})," User name : 19CSR118 ",Object(i.jsx)("br",{})," Password : 1234"]})]})]})]})},C=n(84),w=n(174),N=n(173),S=n(170),T=n(171),I=n(85),D=n(179),k=n(71),A=n.n(k),G=n(72),M=n.n(G),R=n(73),E=n.n(R),B=n(169),P=n(33),W=n(177),q=n(168),z=n(166),H=n(167),L=n(165),F=function(e){var t=e.SetOpen,n=e.handleClose,c=e.title,a=e.content,s=e.handleConfirm,r=e.confirmButtonColorSecondary;return Object(i.jsx)("div",{children:Object(i.jsxs)(W.a,{open:t,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(i.jsx)(L.a,{id:"alert-dialog-title",children:c}),""!==a&&Object(i.jsx)(z.a,{children:Object(i.jsx)(H.a,{id:"alert-dialog-description",children:a})}),Object(i.jsxs)(q.a,{children:[Object(i.jsx)(j.a,{onClick:n,variant:"text",color:"primary",style:{color:"#333333"},children:"Cancel"}),Object(i.jsx)(j.a,{onClick:s,variant:"contained",color:r?"secondary":"primary",autoFocus:!0,children:"Confirm"})]})]})})};function U(){var e=a.a.useState(null),t=Object(o.a)(e,2),n=t[0],c=t[1],s=a.a.useContext(g),r=function(){c(null)},l=a.a.useState(!1),j=Object(o.a)(l,2),d=j[0],h=j[1],b=function(){c(null),h(!0)};return Object(i.jsxs)("div",{children:[Object(i.jsx)(B.a,{id:"simple-menu",onClick:function(e){c(e.currentTarget)},children:Object(i.jsx)(A.a,{style:{color:"white"}})}),Object(i.jsxs)(I.a,{id:"menu-list-grow",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:r,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:[Object(i.jsx)(P.b,{to:"/Grievance-system-Student/profile",children:Object(i.jsxs)(D.a,{onClick:function(){r()},children:[Object(i.jsx)(M.a,{})," \xa0\xa0\xa0Profile"]})}),Object(i.jsxs)(D.a,{onClick:function(){b()},children:[Object(i.jsx)(E.a,{})," \xa0\xa0\xa0Logout"]})]}),Object(i.jsx)(F,{SetOpen:d,handleClose:function(){h(!1)},title:"Confirm",content:"Are you sure you want to logout?",handleConfirm:function(){r(),s(!1)},confirmButtonColorSecondary:!0})]})}var V=function(){return Object(i.jsx)(S.a,{position:"fixed",color:"primary",children:Object(i.jsx)(T.a,{children:Object(i.jsxs)(m.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(i.jsx)(m.a,{item:!0,children:Object(i.jsx)("h3",{className:"mon",children:"VCET"})}),Object(i.jsx)(m.a,{item:!0,children:Object(i.jsxs)(m.a,{container:!0,justify:"space-between",alignItems:"center",children:[Object(i.jsx)(P.c,{to:"/Grievance-system-Student/",style:{padding:"0px 10px",fontWeight:"bold",color:"white"},children:"Home"}),Object(i.jsx)(P.c,{to:"/Grievance-system-Student/about",style:{padding:"0px 10px",fontWeight:"bold",color:"white"},children:"About"}),Object(i.jsx)(U,{})]})})]})})})},Y=(n(109),n(110),function(){return Object(i.jsx)("div",{className:"image-container",children:Object(i.jsxs)("h1",{className:"head",style:{fontSize:"30px",marginTop:"30px",color:"white"},children:["STUDENTS",Object(i.jsx)("span",{children:" GRIEVANCE CELL"})]})})}),J=(n(111),function(){return Object(i.jsxs)("div",{className:"details",children:[Object(i.jsx)("h1",{className:"form-head form-head1",children:"Grievance Cell"}),Object(i.jsx)("p",{children:"\xa0 \xa0 \xa0 \xa0The cell functions to look into the grievances lodged by any student. Students may approach the cell to voice their grievances regarding academic matters, health services, library and other services. Any form of discontent or dissatisfaction on the part of the students can be informed to the cell. The Grievance cell also looks into matters of harassment. Anyone with a genuine grievance may approach the Co-ordinator or member of the Students\u2019 Grievance cell. Grievances may also be sent through this portal to the Co-ordinator of the Students\u2019 Grievance Cell. The cell then redresses the grievances promptly and judiciously."}),Object(i.jsx)("h1",{children:"Objective"}),Object(i.jsx)("p",{children:"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0The main objective of the Grievance Cell is to promote and maintain a conducive and harmonious educational environment among the students. This is with the following objectives in mind"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Grievance cell is formed in order to keep the healthy working atmosphere amongst staff, students and parents. This cell helps Students to record their complaints and solve their problems related to academics, resources and personal grievances freely and frankly without any fear of victimization."}),Object(i.jsx)("li",{children:"To ensure effective solution to the student grievances with an impartial and fair approach"}),Object(i.jsx)("li",{children:"In order to advising Students of the College to respect each other and be patient whenever any occasion of conflict arises."}),Object(i.jsx)("li",{children:"Ragging in any form is strictly prohibited in and outside the institution. Any violation of ragging and disciplinary rules should be urgently brought to the notice of the Principal.Ragging Complaints will be handled as per ragging rules."}),Object(i.jsx)("li",{children:"Woman Harassment complaints will be handled as per government guidelines by respective section."})]}),Object(i.jsx)("h1",{children:"Scope"}),Object(i.jsx)("p",{children:"\xa0 \xa0 \xa0 \xa0\xa0 \xa0 \xa0The cell will deal with Grievances received in writing from the students about any of the following matters:"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Academic Matters: Related to timely issue of duplicate Mark-sheets, Transfer Certificates, Conduct Certificates or other examination related matters."}),Object(i.jsx)("li",{children:"Financial matters: Related to dues and payments for various items from library, hostels etc."}),Object(i.jsx)("li",{children:"Other Matters: Related to certain misgivings about conditions of sanitation, preparation of food, availability of transport, victimization by teachers etc."})]}),Object(i.jsx)("h1",{children:"Functions"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Using this portal students can post grievance and can stay anonymous"}),Object(i.jsx)("li",{children:"The cases will be attended promptly on receipt of grievances from the students."}),Object(i.jsx)("li",{children:"The cell will review all cases and will act formally accordingly as per the Management policy and send response to the students using this portal regarding their complaints."}),Object(i.jsx)("li",{children:"The cell will give report to the authority about the cases attended to and the number of pending cases, if any, which require direction and guidance from the higher authorities."})]}),Object(i.jsx)("h1",{children:"Exclusions"}),Object(i.jsx)("p",{children:"\xa0 \xa0 \xa0 \xa0\xa0 \xa0 \xa0The grievance Redressal cell shall not entertain the following issues:"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Decisions of the executive council, academic council, board of studies and other administrative or academic committees constituted by the university."}),Object(i.jsx)("li",{children:"Decisions with regard to award of scholarship, fee concessions, medals etc."}),Object(i.jsx)("li",{children:"Decisions made by the university with regard to disciplinary matters and misconduct."})]}),Object(i.jsx)("h1",{children:"Committee Members"}),Object(i.jsx)("div",{className:"table",children:Object(i.jsx)("table",{children:Object(i.jsxs)("tbody",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Designation"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:"Dr. Tharun Kumar"}),Object(i.jsx)("td",{children:"Principal "})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:"Dr. Nithesh Prawin"}),Object(i.jsx)("td",{children:"Assistant professor, Dept. of Computer Science "})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:"Dr. Vaishnavi Suvetha"}),Object(i.jsx)("td",{children:"Assistant professor, Dept. of Computer Science "})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:"Dr. Sathiyasri"}),Object(i.jsx)("td",{children:"Assistant professor, Dept. of Computer Science "})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:"Mr. Udaya"}),Object(i.jsx)("td",{children:"Assistant professor, Dept. of Computer Science "})]})]})})})]})}),K=n(172),X=n(74),Q=n.n(X),Z=(n(112),function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),l=Object(o.a)(r,2),d=l[0],b=l[1],x=Object(c.useState)(""),u=Object(o.a)(x,2),p=u[0],g=u[1],v=Object(c.useState)(!1),y=Object(o.a)(v,2),C=y[0],w=y[1],N=a.a.useState(!1),S=Object(o.a)(N,2),T=S[0],I=S[1],k=function(){I(!0)};return Object(i.jsxs)("div",{className:"form",children:[Object(i.jsx)("h1",{className:"form-head",children:"Post Your Grievance"}),Object(i.jsx)(O.a,{variant:"caption",display:"block",align:"left",color:"error",style:{margin:"0px 8px 10px 8px"},children:"NOTE : Your personal information is kept anonymous to the grievance committee, until you reveal it in complaint column."}),Object(i.jsxs)(K.a,{className:"form-group",children:[Object(i.jsxs)(m.a,{container:!0,spacing:1,children:[Object(i.jsx)(m.a,{item:!0,xs:12,sm:6,children:Object(i.jsx)(f.a,{className:"single",children:Object(i.jsx)(h.a,{id:"outlined-basic",label:"Title",variant:"outlined",value:n,onInput:function(e){s(e.target.value)},error:C&&""===n,helperText:"Short title on your complaint"})})}),Object(i.jsx)(m.a,{item:!0,xs:12,sm:6,children:Object(i.jsx)(f.a,{className:"single",children:Object(i.jsxs)(h.a,{id:"select",label:"Category",select:!0,variant:"outlined",value:d,onChange:function(e){b(e.target.value)},error:C&&""===d,helperText:"Select category of complaint",children:[Object(i.jsx)(D.a,{value:"college",children:"College"}),Object(i.jsx)(D.a,{value:"hostel",children:"Hostel"})]})})})]}),Object(i.jsx)(f.a,{className:"single",children:Object(i.jsx)(h.a,{id:"outlined-multiline-static",label:"Complaint",multiline:!0,rows:10,onInput:function(e){g(e.target.value)},value:p,variant:"outlined",error:C&&""===p,helperText:"Give summary of your complaint with required details"})}),Object(i.jsx)(m.a,{container:!0,justify:"flex-end",children:Object(i.jsx)(j.a,{variant:"contained",color:"primary",endIcon:Object(i.jsx)(Q.a,{}),onClick:function(){w(!0),""!==n&&""!==d&&""!==p&&(console.log(n,d,p,Date.now()),k())},children:"Send"})})]}),Object(i.jsx)(F,{SetOpen:T,handleClose:function(){I(!1)},title:"Confirm",content:"Once submitted you can't change or delete your complaint.",handleConfirm:function(){s(""),b(""),g(""),I(!1),w(!1)},confirmButtonColorSecondary:!1})]})}),$=function(){return Object(i.jsx)(S.a,{position:"relative",style:{top:"auto",bottom:0},color:"primary",children:Object(i.jsxs)(m.a,{container:!0,justify:"space-between",style:{padding:"10px 5px"},children:[Object(i.jsx)(m.a,{item:!0,sm:6,xs:12,children:Object(i.jsx)(O.a,{variant:"caption",children:"Copyright \xa9 2020"})}),Object(i.jsx)(m.a,{item:!0,sm:6,xs:12,children:Object(i.jsx)(O.a,{variant:"caption",children:"Developed By Anonymous with \u2764\ufe0f"})})]})})},_=n(12),ee=(n(113),n(75)),te=n.n(ee),ne=n(76),ie=n.n(ne),ce=n(77),ae=n.n(ce),se=n(78),re=n.n(se),oe=n(79),le=n.n(oe),je=n(80),de=n.n(je),he=n(83),be=n.n(he),me=n(82),xe=n.n(me),ue=n(81),Oe=n.n(ue),pe=function(e){var t=e.head,n=e.content,c=e.icon;return Object(i.jsxs)(m.a,{container:!0,justify:"center",alignContent:"center",direction:"row",children:[Object(i.jsx)(m.a,{container:!0,alignContent:"center",justify:"center",children:Object(i.jsx)(l.a,{style:{width:"35px",height:"35px"},children:c})}),Object(i.jsxs)(m.a,{item:!0,children:[Object(i.jsx)("h1",{className:"sub-head",children:t}),Object(i.jsx)("p",{style:{fontWeight:"bold"},children:n})]})]})},fe=function(e){var t=e.data,n=t.firstName,c=t.secondName,a=t.joinYear,s=t.department,r=t.dateOfBirth,o=t.rollNumber,j=t.totalComplaintsMade,d=t.totalComplaintsClosed;return Object(i.jsxs)(m.a,{container:!0,className:"profile-container",alignItems:"center",justify:"center",direction:"row",style:{paddingTop:"80px",paddingBottom:"60px"},children:[Object(i.jsxs)(m.a,{container:!0,justify:"center",alignItems:"center",style:{padding:"20px"},direction:"column",children:[Object(i.jsx)(m.a,{item:!0,xs:12,children:Object(i.jsx)(l.a,{style:{width:"80px",height:"80px"},children:Object(i.jsx)(te.a,{className:"icon-lg",style:{backgroundColor:"3a42bb"}})})}),Object(i.jsx)(m.a,{item:!0,xs:12,children:Object(i.jsx)("h1",{className:"sub-head",children:n+" "+c})})]}),Object(i.jsx)(m.a,{item:!0,xs:12,children:Object(i.jsxs)(m.a,{container:!0,spacing:4,children:[Object(i.jsx)(m.a,{item:!0,xs:6,sm:3,children:Object(i.jsx)(pe,{head:"Campus",content:"VCET",icon:Object(i.jsx)(ie.a,{})})}),Object(i.jsx)(m.a,{item:!0,xs:6,sm:3,children:Object(i.jsx)(pe,{head:"Batch",content:"".concat(a," - ").concat(a+4),icon:Object(i.jsx)(ae.a,{})})}),Object(i.jsx)(m.a,{item:!0,xs:6,sm:3,children:Object(i.jsx)(pe,{head:"Department",content:s,icon:Object(i.jsx)(re.a,{})})}),Object(i.jsx)(m.a,{item:!0,xs:6,sm:3,children:Object(i.jsx)(pe,{head:"Degree",content:"B.E",icon:Object(i.jsx)(le.a,{})})}),Object(i.jsx)(m.a,{item:!0,xs:6,sm:3,children:Object(i.jsx)(pe,{head:"Date of birth",content:r,icon:Object(i.jsx)(de.a,{})})}),Object(i.jsx)(m.a,{item:!0,xs:6,sm:3,children:Object(i.jsx)(pe,{head:"Roll number",content:o,icon:Object(i.jsx)(Oe.a,{})})}),Object(i.jsx)(m.a,{item:!0,xs:6,sm:3,children:Object(i.jsx)(pe,{head:"Complaints made",content:j,icon:Object(i.jsx)(xe.a,{})})}),Object(i.jsx)(m.a,{item:!0,xs:6,sm:3,children:Object(i.jsx)(pe,{head:"Complaints closed",content:d,icon:Object(i.jsx)(be.a,{})})})]})})]})},ge=(n(114),function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{className:"activity-head",children:"Previous Activity"}),Object(i.jsxs)(m.a,{container:!0,spacing:1,style:{padding:"10px 5px 30px 5px"},children:[Object(i.jsx)(m.a,{item:!0,xs:12,sm:6,children:Object(i.jsxs)(m.a,{container:!0,className:"activity-container",children:[Object(i.jsx)(m.a,{item:!0,children:Object(i.jsx)("h1",{className:"activity-title",children:"complaint about online class"})}),Object(i.jsxs)(m.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(i.jsx)(m.a,{item:!0,xs:6,children:Object(i.jsx)("p",{className:"time-stamp",children:"4 Dec 2020 10:45 AM"})}),Object(i.jsx)(m.a,{item:!0,xs:6,children:Object(i.jsx)("p",{className:"activity-status",children:"seen"})})]})]})}),Object(i.jsx)(m.a,{item:!0,xs:12,sm:6,children:Object(i.jsxs)(m.a,{container:!0,className:"activity-container",children:[Object(i.jsx)(m.a,{item:!0,children:Object(i.jsx)("h1",{className:"activity-title",children:"complaint about online class"})}),Object(i.jsxs)(m.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(i.jsx)(m.a,{item:!0,xs:6,children:Object(i.jsx)("p",{className:"time-stamp",children:"4 Dec 2020 10:45 AM"})}),Object(i.jsx)(m.a,{item:!0,xs:6,children:Object(i.jsx)("p",{className:"activity-status",children:"seen"})})]})]})}),Object(i.jsx)(m.a,{item:!0,xs:12,sm:6,children:Object(i.jsxs)(m.a,{container:!0,className:"activity-container",children:[Object(i.jsx)(m.a,{item:!0,children:Object(i.jsx)("h1",{className:"activity-title",children:"complaint about online class"})}),Object(i.jsxs)(m.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(i.jsx)(m.a,{item:!0,xs:6,children:Object(i.jsx)("p",{className:"time-stamp",children:"4 Dec 2020 10:45 AM"})}),Object(i.jsx)(m.a,{item:!0,xs:6,children:Object(i.jsx)("p",{className:"activity-status",children:"seen"})})]})]})}),Object(i.jsx)(m.a,{item:!0,xs:12,sm:6,children:Object(i.jsxs)(m.a,{container:!0,className:"activity-container",children:[Object(i.jsx)(m.a,{item:!0,children:Object(i.jsx)("h1",{className:"activity-title",children:"complaint about online class"})}),Object(i.jsxs)(m.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(i.jsx)(m.a,{item:!0,xs:6,children:Object(i.jsx)("p",{className:"time-stamp",children:"4 Dec 2020 10:45 AM"})}),Object(i.jsx)(m.a,{item:!0,xs:6,children:Object(i.jsx)("p",{className:"activity-status",children:"seen"})})]})]})})]})]})}),ve={firstName:"Udaya",secondName:"M",rollNumber:"19CSR118",gender:"male",joinYear:2019,department:"CSE",totalComplaintsMade:0,totalComplaintsClosed:0,dateOfBirth:"28-01-2002"},ye=function(){return Object(i.jsx)(P.a,{children:Object(i.jsxs)(b.a,{children:[Object(i.jsx)(V,{}),Object(i.jsxs)(_.c,{children:[Object(i.jsx)(_.a,{exact:!0,path:"/Grievance-system-Student/about",children:Object(i.jsx)(N.a,{maxWidth:"md",children:Object(i.jsx)(J,{})})}),Object(i.jsx)(_.a,{exact:!0,path:"/Grievance-system-Student/profile",children:Object(i.jsx)(N.a,{maxWidth:"md",children:Object(i.jsx)(fe,{data:ve})})}),Object(i.jsxs)(_.a,{path:"/Grievance-system-Student/",children:[Object(i.jsx)(Y,{}),Object(i.jsx)(N.a,{maxWidth:"md",children:Object(i.jsxs)(m.a,{container:!0,direction:"column",children:[Object(i.jsx)(Z,{}),Object(i.jsx)(ge,{})]})})]})]}),Object(i.jsx)($,{})]})})};var Ce=function(){var e;e=null!==localStorage.getItem("isLoggedIn")&&"true"===localStorage.getItem("isLoggedIn");var t=Object(c.useState)(e),n=Object(o.a)(t,2),a=n[0],s=n[1];Object(c.useEffect)((function(){var e=a?"true":"false";return localStorage.setItem("isLoggedIn",e),function(){}}),[a]);var r=Object(C.a)({palette:{type:"light",primary:{main:"#3a42bb"}}});return Object(i.jsx)(w.a,{theme:r,children:Object(i.jsx)(g.Provider,{value:s,children:Object(i.jsx)("div",{className:"App",children:a?Object(i.jsx)(ye,{}):Object(i.jsx)(y,{})})})})};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(Ce,{})}),document.getElementById("root"))}},[[115,1,2]]]);
//# sourceMappingURL=main.3d8f5e5b.chunk.js.map