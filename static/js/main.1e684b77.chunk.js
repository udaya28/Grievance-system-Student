(this["webpackJsonpgrievance-system"]=this["webpackJsonpgrievance-system"]||[]).push([[0],{106:function(e,t,i){},107:function(e,t,i){},114:function(e,t,i){},115:function(e,t,i){},116:function(e,t,i){},117:function(e,t,i){},118:function(e,t,i){},119:function(e,t,i){},120:function(e,t,i){},121:function(e,t,i){"use strict";i.r(t);var n=i(1),s=i(0),c=i.n(s),a=i(10),o=i.n(a),r=(i(106),i(14)),l=(i(107),i(180)),d=i(166),j=i(164),u=i(177),m=i(122),h=i(162),b=i(71),p=i.n(b),x=i(89),O=i(159),g=i(165),f=c.a.createContext({}),v=Object(O.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:'url("https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80")',backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(5,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),y=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),i=t[0],a=t[1],o=Object(s.useState)(""),b=Object(r.a)(o,2),O=b[0],y=b[1],C=Object(s.useState)(!1),S=Object(r.a)(C,2),w=S[0],N=S[1],T=Object(s.useState)(!0),q=Object(r.a)(T,2),I=q[0],k=q[1],D=v(),G=c.a.useContext(f);return Object(n.jsxs)(h.a,{container:!0,component:"main",className:D.root,children:[Object(n.jsx)(j.a,{}),Object(n.jsx)(h.a,{item:!0,xs:!1,sm:4,md:7,className:D.image}),Object(n.jsxs)(h.a,{item:!0,xs:12,sm:8,md:5,component:m.a,elevation:6,square:!0,children:[Object(n.jsx)(h.a,{container:!0,justify:"flex-end",style:{paddingTop:"10px",paddingRight:"15px"}}),Object(n.jsxs)("div",{className:D.paper,children:[Object(n.jsx)(l.a,{className:D.avatar,children:Object(n.jsx)(p.a,{})}),Object(n.jsx)(x.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(n.jsxs)(g.a,{className:D.form,validate:"true",children:[Object(n.jsx)(u.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Roll Number",name:"email",autoComplete:"email",onInput:function(e){""===O&&""===i&&N(!1),a(e.target.value)},value:i,error:w&&!i,helperText:w&&!i&&"Roll number field is required",autoFocus:!0}),Object(n.jsx)(u.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onInput:function(e){""===O&&""===i&&N(!1),y(e.target.value)},value:O,error:w&&!O,helperText:w&&!O&&"Password field is required",autoComplete:"current-password"}),!I&&Object(n.jsx)(x.a,{color:"error",variant:"caption",align:"left",children:"RollNumber or Password is Invalid"}),Object(n.jsx)(d.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:D.submit,onClick:function(){console.log(i,O),N(!0),""!==O&&""!==i&&("19CSR118"===i&&"1234"===O?setTimeout((function(){return G(!0)}),1e3):(console.log("Invalid Input"),k(!1),setTimeout((function(){return k(!0)}),5e3)))},children:"Sign In"})]}),Object(n.jsxs)("p",{children:["For testing purpose ",Object(n.jsx)("br",{})," User name : 19CSR118 ",Object(n.jsx)("br",{})," Password : 1234"]})]})]})]})},C=i(85),S=i(176),w=i(175),N=i(172),T=i(173),q=i(86),I=i(181),k=i(72),D=i.n(k),G=i(73),A=i.n(G),E=i(74),M=i.n(E),P=i(171),R=i(33),L=i(179),B=i(170),U=i(168),W=i(169),H=i(167),F=function(e){var t=e.SetOpen,i=e.handleClose,s=e.title,c=e.content,a=e.handleConfirm,o=e.confirmButtonColorSecondary;return Object(n.jsx)("div",{children:Object(n.jsxs)(L.a,{open:t,onClose:i,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(n.jsx)(H.a,{id:"alert-dialog-title",children:s}),""!==c&&Object(n.jsx)(U.a,{children:Object(n.jsx)(W.a,{id:"alert-dialog-description",children:c})}),Object(n.jsxs)(B.a,{children:[Object(n.jsx)(d.a,{onClick:i,variant:"text",color:"primary",style:{color:"#333333"},children:"Cancel"}),Object(n.jsx)(d.a,{onClick:a,variant:"contained",color:o?"secondary":"primary",autoFocus:!0,children:"Confirm"})]})]})})};function z(){var e=c.a.useState(null),t=Object(r.a)(e,2),i=t[0],s=t[1],a=c.a.useContext(f),o=function(){s(null)},l=c.a.useState(!1),d=Object(r.a)(l,2),j=d[0],u=d[1],m=function(){s(null),u(!0)};return Object(n.jsxs)("div",{children:[Object(n.jsx)(P.a,{id:"simple-menu",onClick:function(e){s(e.currentTarget)},children:Object(n.jsx)(D.a,{style:{color:"white"}})}),Object(n.jsxs)(q.a,{id:"menu-list-grow",anchorEl:i,keepMounted:!0,open:Boolean(i),onClose:o,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:[Object(n.jsx)(R.b,{to:"/Grievance-system-Student/profile",children:Object(n.jsxs)(I.a,{onClick:function(){o()},children:[Object(n.jsx)(A.a,{})," \xa0\xa0\xa0Profile"]})}),Object(n.jsxs)(I.a,{onClick:function(){m()},children:[Object(n.jsx)(M.a,{})," \xa0\xa0\xa0Logout"]})]}),Object(n.jsx)(F,{SetOpen:j,handleClose:function(){u(!1)},title:"Confirm",content:"Are you sure you want to logout?",handleConfirm:function(){o(),a(!1)},confirmButtonColorSecondary:!0})]})}var V=function(){return Object(n.jsx)(N.a,{position:"fixed",color:"primary",children:Object(n.jsx)(T.a,{children:Object(n.jsxs)(h.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(n.jsx)(h.a,{item:!0,children:Object(n.jsx)("h3",{className:"mon",children:"VCET"})}),Object(n.jsx)(h.a,{item:!0,children:Object(n.jsxs)(h.a,{container:!0,justify:"space-between",alignItems:"center",children:[Object(n.jsx)(R.c,{to:"/Grievance-system-Student/",style:{padding:"0px 10px",fontWeight:"bold",color:"white"},children:"Home"}),Object(n.jsx)(R.c,{to:"/Grievance-system-Student/about",style:{padding:"0px 10px",fontWeight:"bold",color:"white"},children:"About"}),Object(n.jsx)(z,{})]})})]})})})},Y=(i(114),i(115),function(){return Object(n.jsx)("div",{className:"image-container",children:Object(n.jsxs)("h1",{className:"head",style:{fontSize:"30px",marginTop:"30px",color:"white"},children:["STUDENTS",Object(n.jsx)("span",{children:" GRIEVANCE CELL"})]})})}),J=(i(116),function(){return Object(n.jsxs)("div",{className:"details",children:[Object(n.jsx)("h1",{className:"form-head form-head1",children:"Grievance Cell"}),Object(n.jsx)("p",{children:"\xa0 \xa0 \xa0 \xa0The cell functions to look into the grievances lodged by any student. Students may approach the cell to voice their grievances regarding academic matters, health services, library and other services. Any form of discontent or dissatisfaction on the part of the students can be informed to the cell. The Grievance cell also looks into matters of harassment. Anyone with a genuine grievance may approach the Co-ordinator or member of the Students\u2019 Grievance cell. Grievances may also be sent through this portal to the Co-ordinator of the Students\u2019 Grievance Cell. The cell then redresses the grievances promptly and judiciously."}),Object(n.jsx)("h1",{children:"Objective"}),Object(n.jsx)("p",{children:"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0The main objective of the Grievance Cell is to promote and maintain a conducive and harmonious educational environment among the students. This is with the following objectives in mind"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Grievance cell is formed in order to keep the healthy working atmosphere amongst staff, students and parents. This cell helps Students to record their complaints and solve their problems related to academics, resources and personal grievances freely and frankly without any fear of victimization."}),Object(n.jsx)("li",{children:"To ensure effective solution to the student grievances with an impartial and fair approach"}),Object(n.jsx)("li",{children:"In order to advising Students of the College to respect each other and be patient whenever any occasion of conflict arises."}),Object(n.jsx)("li",{children:"Ragging in any form is strictly prohibited in and outside the institution. Any violation of ragging and disciplinary rules should be urgently brought to the notice of the Principal.Ragging Complaints will be handled as per ragging rules."}),Object(n.jsx)("li",{children:"Woman Harassment complaints will be handled as per government guidelines by respective section."})]}),Object(n.jsx)("h1",{children:"Scope"}),Object(n.jsx)("p",{children:"\xa0 \xa0 \xa0 \xa0\xa0 \xa0 \xa0The cell will deal with Grievances received in writing from the students about any of the following matters:"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Academic Matters: Related to timely issue of duplicate Mark-sheets, Transfer Certificates, Conduct Certificates or other examination related matters."}),Object(n.jsx)("li",{children:"Financial matters: Related to dues and payments for various items from library, hostels etc."}),Object(n.jsx)("li",{children:"Other Matters: Related to certain misgivings about conditions of sanitation, preparation of food, availability of transport, victimization by teachers etc."})]}),Object(n.jsx)("h1",{children:"Functions"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Using this portal students can post grievance and can stay anonymous"}),Object(n.jsx)("li",{children:"The cases will be attended promptly on receipt of grievances from the students."}),Object(n.jsx)("li",{children:"The cell will review all cases and will act formally accordingly as per the Management policy and send response to the students using this portal regarding their complaints."}),Object(n.jsx)("li",{children:"The cell will give report to the authority about the cases attended to and the number of pending cases, if any, which require direction and guidance from the higher authorities."})]}),Object(n.jsx)("h1",{children:"Exclusions"}),Object(n.jsx)("p",{children:"\xa0 \xa0 \xa0 \xa0\xa0 \xa0 \xa0The grievance Redressal cell shall not entertain the following issues:"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Decisions of the executive council, academic council, board of studies and other administrative or academic committees constituted by the university."}),Object(n.jsx)("li",{children:"Decisions with regard to award of scholarship, fee concessions, medals etc."}),Object(n.jsx)("li",{children:"Decisions made by the university with regard to disciplinary matters and misconduct."})]}),Object(n.jsx)("h1",{children:"Committee Members"}),Object(n.jsx)("div",{className:"table",children:Object(n.jsx)("table",{children:Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Designation"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Dr. Tharun Kumar"}),Object(n.jsx)("td",{children:"Principal "})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Dr. Nithesh Prawin"}),Object(n.jsx)("td",{children:"Assistant professor, Dept. of Computer Science "})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Dr. Vaishnavi Suvetha"}),Object(n.jsx)("td",{children:"Assistant professor, Dept. of Computer Science "})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Dr. Sathiyasri"}),Object(n.jsx)("td",{children:"Assistant professor, Dept. of Computer Science "})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Mr. Udaya"}),Object(n.jsx)("td",{children:"Assistant professor, Dept. of Computer Science "})]})]})})})]})}),K=i(174),X=i(75),Q=i.n(X),Z=(i(117),function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),i=t[0],a=t[1],o=Object(s.useState)(""),l=Object(r.a)(o,2),j=l[0],m=l[1],b=Object(s.useState)(""),p=Object(r.a)(b,2),O=p[0],f=p[1],v=Object(s.useState)(!1),y=Object(r.a)(v,2),C=y[0],S=y[1],w=c.a.useState(!1),N=Object(r.a)(w,2),T=N[0],q=N[1],k=function(){q(!0)};return Object(n.jsxs)("div",{className:"form",children:[Object(n.jsx)("h1",{className:"form-head",children:"Post Your Grievance"}),Object(n.jsx)(x.a,{variant:"caption",display:"block",align:"left",color:"error",style:{margin:"0px 8px 10px 8px"},children:"NOTE : Your personal information is kept anonymous to the grievance committee, until you reveal it in complaint column."}),Object(n.jsxs)(K.a,{className:"form-group",children:[Object(n.jsxs)(h.a,{container:!0,spacing:1,children:[Object(n.jsx)(h.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(g.a,{className:"single",children:Object(n.jsx)(u.a,{id:"outlined-basic",label:"Title",variant:"outlined",value:i,onInput:function(e){a(e.target.value)},error:C&&""===i,helperText:"Short title on your complaint"})})}),Object(n.jsx)(h.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(g.a,{className:"single",children:Object(n.jsxs)(u.a,{id:"select",label:"Category",select:!0,variant:"outlined",value:j,onChange:function(e){m(e.target.value)},error:C&&""===j,helperText:"Select category of complaint",children:[Object(n.jsx)(I.a,{value:"college",children:"College"}),Object(n.jsx)(I.a,{value:"hostel",children:"Hostel"})]})})})]}),Object(n.jsx)(g.a,{className:"single",children:Object(n.jsx)(u.a,{id:"outlined-multiline-static",label:"Complaint",multiline:!0,rows:10,onInput:function(e){f(e.target.value)},value:O,variant:"outlined",error:C&&""===O,helperText:"Give summary of your complaint with required details"})}),Object(n.jsx)(h.a,{container:!0,justify:"flex-end",children:Object(n.jsx)(d.a,{variant:"contained",color:"primary",endIcon:Object(n.jsx)(Q.a,{}),onClick:function(){S(!0),""!==i&&""!==j&&""!==O&&(console.log(i,j,O,Date.now()),k())},children:"Send"})})]}),Object(n.jsx)(F,{SetOpen:T,handleClose:function(){q(!1)},title:"Confirm",content:"Once submitted you can't change or delete your complaint.",handleConfirm:function(){a(""),m(""),f(""),q(!1),S(!1)},confirmButtonColorSecondary:!1})]})}),$=function(){return Object(n.jsx)(N.a,{position:"relative",style:{top:"auto",bottom:0},color:"primary",children:Object(n.jsxs)(h.a,{container:!0,justify:"space-between",style:{padding:"10px 5px"},children:[Object(n.jsx)(h.a,{item:!0,sm:6,xs:12,children:Object(n.jsx)(x.a,{variant:"caption",children:"Copyright \xa9 2020"})}),Object(n.jsx)(h.a,{item:!0,sm:6,xs:12,children:Object(n.jsx)(x.a,{variant:"caption",children:"Developed By Anonymous with \u2764\ufe0f"})})]})})},_=i(12),ee=(i(118),i(76)),te=i.n(ee),ie=i(77),ne=i.n(ie),se=i(78),ce=i.n(se),ae=i(79),oe=i.n(ae),re=i(80),le=i.n(re),de=i(81),je=i.n(de),ue=i(84),me=i.n(ue),he=i(83),be=i.n(he),pe=i(82),xe=i.n(pe),Oe=function(e){var t=e.head,i=e.content,s=e.icon;return Object(n.jsxs)(h.a,{container:!0,justify:"center",alignContent:"center",direction:"row",children:[Object(n.jsx)(h.a,{container:!0,alignContent:"center",justify:"center",children:Object(n.jsx)(l.a,{style:{width:"35px",height:"35px"},children:s})}),Object(n.jsxs)(h.a,{item:!0,children:[Object(n.jsx)("h1",{className:"sub-head",children:t}),Object(n.jsx)("p",{style:{fontWeight:"bold"},children:i})]})]})},ge=function(e){var t=e.data,i=t.firstName,s=t.secondName,c=t.joinYear,a=t.department,o=t.dateOfBirth,r=t.rollNumber,d=t.totalComplaintsMade,j=t.totalComplaintsClosed;return Object(n.jsxs)(h.a,{container:!0,className:"profile-container",alignItems:"center",justify:"center",direction:"row",style:{paddingTop:"80px",paddingBottom:"60px"},children:[Object(n.jsxs)(h.a,{container:!0,justify:"center",alignItems:"center",style:{padding:"20px"},direction:"column",children:[Object(n.jsx)(h.a,{item:!0,xs:12,children:Object(n.jsx)(l.a,{style:{width:"80px",height:"80px"},children:Object(n.jsx)(te.a,{className:"icon-lg",style:{backgroundColor:"3a42bb"}})})}),Object(n.jsx)(h.a,{item:!0,xs:12,children:Object(n.jsx)("h1",{className:"sub-head",children:i+" "+s})})]}),Object(n.jsx)(h.a,{item:!0,xs:12,children:Object(n.jsxs)(h.a,{container:!0,spacing:4,children:[Object(n.jsx)(h.a,{item:!0,xs:6,sm:3,children:Object(n.jsx)(Oe,{head:"Campus",content:"VCET",icon:Object(n.jsx)(ne.a,{})})}),Object(n.jsx)(h.a,{item:!0,xs:6,sm:3,children:Object(n.jsx)(Oe,{head:"Batch",content:"".concat(c," - ").concat(c+4),icon:Object(n.jsx)(ce.a,{})})}),Object(n.jsx)(h.a,{item:!0,xs:6,sm:3,children:Object(n.jsx)(Oe,{head:"Department",content:a,icon:Object(n.jsx)(oe.a,{})})}),Object(n.jsx)(h.a,{item:!0,xs:6,sm:3,children:Object(n.jsx)(Oe,{head:"Degree",content:"B.E",icon:Object(n.jsx)(le.a,{})})}),Object(n.jsx)(h.a,{item:!0,xs:6,sm:3,children:Object(n.jsx)(Oe,{head:"Date of birth",content:o,icon:Object(n.jsx)(je.a,{})})}),Object(n.jsx)(h.a,{item:!0,xs:6,sm:3,children:Object(n.jsx)(Oe,{head:"Roll number",content:r,icon:Object(n.jsx)(xe.a,{})})}),Object(n.jsx)(h.a,{item:!0,xs:6,sm:3,children:Object(n.jsx)(Oe,{head:"Complaints made",content:d,icon:Object(n.jsx)(be.a,{})})}),Object(n.jsx)(h.a,{item:!0,xs:6,sm:3,children:Object(n.jsx)(Oe,{head:"Complaints closed",content:j,icon:Object(n.jsx)(me.a,{})})})]})})]})},fe=(i(119),function(e){var t,i=e.open,s=e.handleClose,c=e.data;return t="seen"===c.status?"yellow1":"unseen"===c.status?"red1":"replayed"===c.status?"green1":"",Object(n.jsx)("div",{children:Object(n.jsxs)(L.a,{open:i,onClose:s,scroll:"paper","aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",children:[Object(n.jsx)(H.a,{id:"scroll-dialog-title",children:Object(n.jsx)("h1",{className:"dialogHeading",style:{margin:"0px"},children:c.title})}),Object(n.jsx)(U.a,{dividers:!0,className:t,children:Object(n.jsxs)(W.a,{id:"scroll-dialog-description",children:[Object(n.jsx)("h1",{className:"dialogHeading",children:"Complaint Made"}),Object(n.jsx)("p",{style:{textAlign:"justify"},children:c.complaint}),""!==c.response?[Object(n.jsx)("h1",{className:"dialogHeading",children:"Response"}),Object(n.jsx)("p",{style:{textAlign:"justify"},children:c.complaint})]:[Object(n.jsx)("h1",{className:"dialogHeading",children:"No response received"})]]})}),Object(n.jsxs)(B.a,{className:"action",children:[Object(n.jsx)("p",{style:{fontSize:"small"},className:"time-stamp",children:c.timeStr}),Object(n.jsx)(d.a,{onClick:s,color:"primary",children:"Close"})]})]})})}),ve=(i(120),[{title:"Complaint about online",timeStamp:"Fri Dec 04 2020 19:21:33 GMT+0530 (India Standard Time)",status:"unseen",category:"hostel",complaint:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis similique debitis distinctio nobis. Perferendis voluptate, obcaecati deleniti nostrum impedit doloribus quod soluta. Eos et corporis consequuntur id ipsa impedit?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis similique debitis distinctio nobis. Perferendis voluptate, obcaecati deleniti nostrum impedit doloribus quod soluta. Eos et corporis consequuntur id ipsa impedit?",response:""},{title:"Need information about Bus transport",timeStamp:"Fri Dec 04 2020 20:09:31 GMT+0530 (India Standard Time)",status:"unseen",category:"college",complaint:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis similique debitis distinctio nobis. Perferendis voluptate, obcaecati deleniti nostrum impedit doloribus quod soluta. Eos et corporis consequuntur id ipsa impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis similique debitis distinctio nobis. Perferendis voluptate, obcaecati deleniti nostrum impedit doloribus quod soluta. Eos et corporis consequuntur id ipsa impedit?",response:""},{title:"Complaint about hostel food",timeStamp:"Fri Dec 04 2020 22:45:31 GMT+0530 (India Standard Time)",status:"seen",category:"hostel",complaint:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis similique debitis distinctio nobis. Perferendis voluptate, obcaecati deleniti nostrum impedit doloribus quod soluta. Eos et corporis consequuntur id ipsa impedit?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis similique debitis distinctio nobis. Perferendis voluptate, obcaecati deleniti nostrum impedit doloribus quod soluta. Eos et corporis consequuntur id ipsa impedit?",response:""},{title:"About online exam portal",timeStamp:"Fri Dec 04 2020 02:45:31 GMT+0530 (India Standard Time)",status:"replayed",category:"college",complaint:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis similique debitis distinctio nobis. Perferendis voluptate, obcaecati deleniti nostrum impedit doloribus quod soluta. Eos et corporis consequuntur id ipsa impedit?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis similique debitis distinctio nobis. Perferendis voluptate, obcaecati deleniti nostrum impedit doloribus quod soluta. Eos et corporis consequuntur id ipsa impedit?",response:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci dolorum blanditiis odio, iste veniam, iusto nemo veritatis quas aliquam quibusdam accusantium! Aut hic earum distinctio nostrum autem cumque praesentium repellendus!"}]),ye=function(e){var t=e.split(" ").slice(1,5),i=t[3].split(":").map((function(e){return parseInt(e)})),n="AM",s=i[0],c=i[1],a=t.slice(0,3).join(" ");i[0]>=12&&(n="PM",s%=12);var o="".concat(s>9?s:"0"+s,":").concat(c>9?c:"0"+c," ").concat(n);return"".concat(a+" "+o)},Ce=function(e){var t,i=e.data,s=e.handleClickOpen,c=i.title,a=i.timeStamp,o=i.status;return t="seen"===o?"yellow":"unseen"===o?"red":"replayed"===o?"green":"",Object(n.jsx)(h.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)("div",{onClick:function(){s(i,ye(a))},children:Object(n.jsxs)(h.a,{container:!0,className:"activity-container + ".concat(t),children:[Object(n.jsx)(h.a,{item:!0,children:Object(n.jsx)("h1",{className:"activity-title",children:c})}),Object(n.jsxs)(h.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(n.jsx)(h.a,{item:!0,xs:6,children:Object(n.jsx)("p",{className:"time-stamp",children:ye(a)})}),Object(n.jsx)(h.a,{item:!0,xs:6,children:Object(n.jsx)("p",{className:"activity-status",children:o})})]})]})})})},Se=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),i=t[0],c=t[1],a=Object(s.useState)({}),o=Object(r.a)(a,2),l=o[0],d=o[1],j=function(e,t){e.timeStr=t,d(e),c(!0)};return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"activity-head",children:"Previous Activity"}),Object(n.jsx)(h.a,{container:!0,spacing:1,style:{padding:"10px 5px 30px 5px"},children:ve.map((function(e,t){return Object(n.jsx)(Ce,{data:e,handleClickOpen:j},t)}))}),Object(n.jsx)(fe,{handleClose:function(){c(!1)},open:i,data:l})]})},we={firstName:"Udaya",secondName:"M",rollNumber:"19CSR118",gender:"male",joinYear:2019,department:"CSE",totalComplaintsMade:0,totalComplaintsClosed:0,dateOfBirth:"28-01-2002"},Ne=function(){return Object(n.jsx)(R.a,{children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)(V,{}),Object(n.jsxs)(_.c,{children:[Object(n.jsx)(_.a,{exact:!0,path:"/Grievance-system-Student/about",children:Object(n.jsx)(w.a,{maxWidth:"md",children:Object(n.jsx)(J,{})})}),Object(n.jsx)(_.a,{exact:!0,path:"/Grievance-system-Student/profile",children:Object(n.jsx)(w.a,{maxWidth:"md",children:Object(n.jsx)(ge,{data:we})})}),Object(n.jsxs)(_.a,{path:"/Grievance-system-Student/",children:[Object(n.jsx)(Y,{}),Object(n.jsx)(w.a,{maxWidth:"md",children:Object(n.jsxs)(h.a,{container:!0,direction:"column",children:[Object(n.jsx)(Z,{}),Object(n.jsx)(Se,{})]})})]})]}),Object(n.jsx)($,{})]})})};var Te=function(){var e;e=null!==localStorage.getItem("isLoggedIn")&&"true"===localStorage.getItem("isLoggedIn");var t=Object(s.useState)(e),i=Object(r.a)(t,2),c=i[0],a=i[1];Object(s.useEffect)((function(){var e=c?"true":"false";return localStorage.setItem("isLoggedIn",e),function(){}}),[c]);var o=Object(C.a)({palette:{type:"light",primary:{main:"#3a42bb"}}});return Object(n.jsx)(S.a,{theme:o,children:Object(n.jsx)(f.Provider,{value:a,children:Object(n.jsx)("div",{className:"App",children:c?Object(n.jsx)(Ne,{}):Object(n.jsx)(y,{})})})})};o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(Te,{})}),document.getElementById("root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.1e684b77.chunk.js.map