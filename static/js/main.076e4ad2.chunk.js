(this["webpackJsonpgrievance-system"]=this["webpackJsonpgrievance-system"]||[]).push([[0],{82:function(e,t,i){},83:function(e,t,i){},90:function(e,t,i){},91:function(e,t,i){},92:function(e,t,i){},93:function(e,t,i){},94:function(e,t,i){"use strict";i.r(t);var n=i(2),a=i(0),c=i.n(a),r=i(9),s=i.n(r),o=(i(82),i(17)),l=(i(83),i(149)),d=i(141),j=i(138),h=i(148),b=i(95),u=i(136),m=i(63),x=i.n(m),p=i(139),O=i(133),f=i(140),g=c.a.createContext({}),v=c.a.createContext({}),y=Object(O.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:'url("https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80")',backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(5,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),w=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),i=t[0],r=t[1],s=Object(a.useState)(""),m=Object(o.a)(s,2),O=m[0],g=m[1],w=Object(a.useState)(!1),S=Object(o.a)(w,2),C=S[0],T=S[1],N=Object(a.useState)(!0),k=Object(o.a)(N,2),D=k[0],G=k[1],I=y(),A=c.a.useContext(v);return Object(n.jsxs)(u.a,{container:!0,component:"main",className:I.root,children:[Object(n.jsx)(j.a,{}),Object(n.jsx)(u.a,{item:!0,xs:!1,sm:4,md:7,className:I.image}),Object(n.jsxs)(u.a,{item:!0,xs:12,sm:8,md:5,component:b.a,elevation:6,square:!0,children:[Object(n.jsx)(u.a,{container:!0,justify:"flex-end",style:{paddingTop:"10px",paddingRight:"15px"}}),Object(n.jsxs)("div",{className:I.paper,children:[Object(n.jsx)(l.a,{className:I.avatar,children:Object(n.jsx)(x.a,{})}),Object(n.jsx)(p.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(n.jsxs)(f.a,{className:I.form,validate:"true",children:[Object(n.jsx)(h.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Roll Number",name:"email",autoComplete:"email",onInput:function(e){""===O&&""===i&&T(!1),r(e.target.value)},value:i,error:C&&!i,helperText:C&&!i&&"Roll number field is required",autoFocus:!0}),Object(n.jsx)(h.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onInput:function(e){""===O&&""===i&&T(!1),g(e.target.value)},value:O,error:C&&!O,helperText:C&&!O&&"Password field is required",autoComplete:"current-password"}),!D&&Object(n.jsx)(p.a,{color:"error",variant:"caption",align:"left",children:"RollNumber or Password is Invalid"}),Object(n.jsx)(d.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:I.submit,onClick:function(){console.log(i,O),T(!0),""!==O&&""!==i&&("19CSR118"===i&&"1234"===O?setTimeout((function(){return A(!0)}),1e3):(console.log("Invalid Input"),G(!1),setTimeout((function(){return G(!0)}),5e3)))},children:"Sign In"})]}),Object(n.jsxs)("p",{children:["For testing purpose ",Object(n.jsx)("br",{})," User name : 19CSR118 ",Object(n.jsx)("br",{})," Password : 1234"]})]})]})]})},S=i(68),C=i(147),T=i(146),N=i(143),k=i(144),D=i(69),G=i(150),I=i(64),A=i.n(I),R=i(65),P=i.n(R),M=i(66),E=i.n(M),W=i(142),q=i(11);function z(){var e=c.a.useState(null),t=Object(o.a)(e,2),i=t[0],a=t[1],r=c.a.useContext(v),s=function(){a(null)},l=Object(q.f)();return Object(n.jsxs)("div",{children:[Object(n.jsx)(W.a,{id:"simple-menu",onClick:function(e){a(e.currentTarget)},children:Object(n.jsx)(A.a,{style:{color:"white"}})}),Object(n.jsxs)(D.a,{id:"menu-list-grow",anchorEl:i,keepMounted:!0,open:Boolean(i),onClose:s,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:[Object(n.jsxs)(G.a,{onClick:function(){l.push("/Grievance-system-Student/profile"),s()},children:[Object(n.jsx)(P.a,{})," \xa0\xa0\xa0Profile"]}),Object(n.jsxs)(G.a,{onClick:function(){s(),r(!1)},children:[Object(n.jsx)(E.a,{})," \xa0\xa0\xa0Logout"]})]})]})}var H=i(30),B=function(){return Object(n.jsx)(N.a,{position:"fixed",color:"primary",children:Object(n.jsx)(k.a,{children:Object(n.jsxs)(u.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(n.jsx)(u.a,{item:!0,children:Object(n.jsx)("h3",{className:"mon",children:"VCET"})}),Object(n.jsx)(u.a,{item:!0,justify:"flex-end",children:Object(n.jsxs)(u.a,{container:!0,justify:"space-between",alignItems:"center",children:[Object(n.jsx)(H.b,{to:"/Grievance-system-Student/",style:{padding:"0px 10px",fontWeight:"bold",color:"white"},children:"Home"}),Object(n.jsx)(H.b,{to:"/Grievance-system-Student/about",style:{padding:"0px 10px",fontWeight:"bold",color:"white"},children:"About"}),Object(n.jsx)(z,{})]})})]})})})},F=(i(90),i(91),function(){return Object(n.jsx)("div",{className:"image-container",children:Object(n.jsxs)("h1",{className:"head",style:{fontSize:"30px",marginTop:"30px",color:"white"},children:["STUDENTS",Object(n.jsx)("span",{children:" GRIEVANCE CELL"})]})})}),U=(i(92),function(){return Object(n.jsxs)("div",{className:"details",children:[Object(n.jsx)("h1",{className:"form-head form-head1",children:"Grievance Cell"}),Object(n.jsx)("p",{children:"\xa0 \xa0 \xa0 \xa0The cell functions to look into the grievances lodged by any student. Students may approach the cell to voice their grievances regarding academic matters, health services, library and other services. Any form of discontent or dissatisfaction on the part of the students can be informed to the cell. The Grievance cell also looks into matters of harassment. Anyone with a genuine grievance may approach the Co-ordinator or member of the Students\u2019 Grievance cell. Grievances may also be sent through this portal to the Co-ordinator of the Students\u2019 Grievance Cell. The cell then redresses the grievances promptly and judiciously."}),Object(n.jsx)("h1",{children:"Objective"}),Object(n.jsx)("p",{children:"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0The main objective of the Grievance Cell is to promote and maintain a conducive and harmonious educational environment among the students. This is with the following objectives in mind"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Grievance cell is formed in order to keep the healthy working atmosphere amongst staff, students and parents. This cell helps Students to record their complaints and solve their problems related to academics, resources and personal grievances freely and frankly without any fear of victimization."}),Object(n.jsx)("li",{children:"To ensure effective solution to the student grievances with an impartial and fair approach"}),Object(n.jsx)("li",{children:"In order to advising Students of the College to respect each other and be patient whenever any occasion of conflict arises."}),Object(n.jsx)("li",{children:"Ragging in any form is strictly prohibited in and outside the institution. Any violation of ragging and disciplinary rules should be urgently brought to the notice of the Principal.Ragging Complaints will be handled as per ragging rules."}),Object(n.jsx)("li",{children:"Woman Harassment complaints will be handled as per government guidelines by respective section."})]}),Object(n.jsx)("h1",{children:"Scope"}),Object(n.jsx)("p",{children:"\xa0 \xa0 \xa0 \xa0\xa0 \xa0 \xa0The cell will deal with Grievances received in writing from the students about any of the following matters:"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Academic Matters: Related to timely issue of duplicate Mark-sheets, Transfer Certificates, Conduct Certificates or other examination related matters."}),Object(n.jsx)("li",{children:"Financial matters: Related to dues and payments for various items from library, hostels etc."}),Object(n.jsx)("li",{children:"Other Matters: Related to certain misgivings about conditions of sanitation, preparation of food, availability of transport, victimization by teachers etc."})]}),Object(n.jsx)("h1",{children:"Functions"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Using this portal students can post grievance and can stay anonymous"}),Object(n.jsx)("li",{children:"The cases will be attended promptly on receipt of grievances from the students."}),Object(n.jsx)("li",{children:"The cell will review all cases and will act formally accordingly as per the Management policy and send response to the students using this portal regarding their complaints."}),Object(n.jsx)("li",{children:"The cell will give report to the authority about the cases attended to and the number of pending cases, if any, which require direction and guidance from the higher authorities."})]}),Object(n.jsx)("h1",{children:"Exclusions"}),Object(n.jsx)("p",{children:"\xa0 \xa0 \xa0 \xa0\xa0 \xa0 \xa0The grievance Redressal cell shall not entertain the following issues:"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Decisions of the executive council, academic council, board of studies and other administrative or academic committees constituted by the university."}),Object(n.jsx)("li",{children:"Decisions with regard to award of scholarship, fee concessions, medals etc."}),Object(n.jsx)("li",{children:"Decisions made by the university with regard to disciplinary matters and misconduct."})]}),Object(n.jsx)("h1",{children:"Committee Members"}),Object(n.jsx)("div",{className:"table",children:Object(n.jsx)("table",{children:Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Designation"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Dr. Tharun Kumar"}),Object(n.jsx)("td",{children:"Principal "})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Dr. Nithesh Prawin"}),Object(n.jsx)("td",{children:"Assistant professor, Dept. of Computer Science "})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Dr. Vaishnavi Suvetha"}),Object(n.jsx)("td",{children:"Assistant professor, Dept. of Computer Science "})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Dr. Sathiyasri"}),Object(n.jsx)("td",{children:"Assistant professor, Dept. of Computer Science "})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Mr. Udaya"}),Object(n.jsx)("td",{children:"Assistant professor, Dept. of Computer Science "})]})]})})})]})}),V=i(145),L=i(67),Y=i.n(L),J=(i(93),function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),i=t[0],c=t[1],r=Object(a.useState)(""),s=Object(o.a)(r,2),l=s[0],j=s[1],b=Object(a.useState)(""),m=Object(o.a)(b,2),x=m[0],O=m[1],g=Object(a.useState)(!1),v=Object(o.a)(g,2),y=v[0],w=v[1];return Object(n.jsxs)("div",{className:"form",children:[Object(n.jsx)("h1",{className:"form-head",children:"Post Your Grievance"}),Object(n.jsx)(p.a,{variant:"caption",display:"block",align:"left",color:"error",style:{margin:"0px 8px 10px 8px"},children:"NOTE : Your personal information is kept anonymous to the grievance committee, until you reveal it in complaint column."}),Object(n.jsxs)(V.a,{className:"form-group",children:[Object(n.jsxs)(u.a,{container:!0,spacing:1,children:[Object(n.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(f.a,{className:"single",children:Object(n.jsx)(h.a,{id:"outlined-basic",label:"Title",variant:"outlined",value:i,onInput:function(e){c(e.target.value)},error:y&&""===i,helperText:"Short title on your complaint"})})}),Object(n.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(f.a,{className:"single",children:Object(n.jsxs)(h.a,{id:"select",label:"Category",select:!0,variant:"outlined",value:l,onChange:function(e){j(e.target.value)},error:y&&""===l,helperText:"Select category of complaint",children:[Object(n.jsx)(G.a,{value:"college",children:"College"}),Object(n.jsx)(G.a,{value:"hostel",children:"Hostel"})]})})})]}),Object(n.jsx)(f.a,{className:"single",children:Object(n.jsx)(h.a,{id:"outlined-multiline-static",label:"Complaint",multiline:!0,rows:10,onInput:function(e){O(e.target.value)},value:x,variant:"outlined",error:y&&""===x,helperText:"Give summary of your complaint with required details"})}),Object(n.jsx)(u.a,{container:!0,justify:"flex-end",children:Object(n.jsx)(d.a,{variant:"contained",color:"primary",endIcon:Object(n.jsx)(Y.a,{}),onClick:function(){w(!0),""!==i&&""!==l&&""!==x&&console.log(i,l,x,Date.now())},children:"Send"})})]})]})}),K=function(){return Object(n.jsx)(N.a,{position:"relative",style:{top:"auto",bottom:0},color:"primary",children:Object(n.jsxs)(u.a,{container:!0,justify:"space-between",style:{padding:"10px 5px"},children:[Object(n.jsx)(u.a,{item:!0,sm:6,xs:12,children:Object(n.jsx)(p.a,{variant:"caption",children:"Copyright \xa9 2020"})}),Object(n.jsx)(u.a,{item:!0,sm:6,xs:12,children:Object(n.jsx)(p.a,{variant:"caption",children:"Developed By Anonymous with \u2764\ufe0f"})})]})})},X=function(){return Object(n.jsx)("div",{style:{height:"75vh"},children:Object(n.jsx)("h1",{style:{marginTop:"100px"},children:"Profile"})})},Q=function(){return Object(n.jsx)(H.a,{children:Object(n.jsxs)(b.a,{children:[Object(n.jsx)(B,{}),Object(n.jsxs)(q.c,{children:[Object(n.jsx)(q.a,{exact:!0,path:"/Grievance-system-Student/about",children:Object(n.jsx)(T.a,{maxWidth:"md",children:Object(n.jsx)(U,{})})}),Object(n.jsx)(q.a,{exact:!0,path:"/Grievance-system-Student/profile",children:Object(n.jsx)(T.a,{maxWidth:"md",children:Object(n.jsx)(X,{})})}),Object(n.jsxs)(q.a,{path:"/Grievance-system-Student/",children:[Object(n.jsx)(F,{}),Object(n.jsx)(T.a,{maxWidth:"md",children:Object(n.jsx)(u.a,{container:!0,direction:"column",children:Object(n.jsx)(J,{})})})]})]}),Object(n.jsx)(K,{})]})})};var Z=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),i=t[0],c=t[1],r=Object(a.useState)(!1),s=Object(o.a)(r,2),l=s[0],d=s[1],j=Object(S.a)({palette:{type:i?"dark":"light",primary:{main:"#3a42bb"}}});return Object(n.jsx)(C.a,{theme:j,children:Object(n.jsx)(g.Provider,{value:c,children:Object(n.jsx)(v.Provider,{value:d,children:Object(n.jsx)("div",{className:"App",children:l?Object(n.jsx)(Q,{}):Object(n.jsx)(w,{})})})})})};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(Z,{})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.076e4ad2.chunk.js.map