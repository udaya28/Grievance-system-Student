(this["webpackJsonpgrievance-system"]=this["webpackJsonpgrievance-system"]||[]).push([[0],{80:function(e,t,i){},81:function(e,t,i){},86:function(e,t,i){},87:function(e,t,i){},88:function(e,t,i){},89:function(e,t,i){},90:function(e,t,i){"use strict";i.r(t);var n=i(2),a=i(0),s=i.n(a),c=i(9),r=i.n(c),o=(i(80),i(15)),l=(i(81),i(145)),d=i(138),j=i(134),h=i(144),u=i(91),b=i(133),m=i(60),x=i.n(m),O=i(135),p=i(132),f=i(136),g=i(59),v=i.n(g),y=i(58),w=i.n(y),C=i(128),S=s.a.createContext({}),T=s.a.createContext({}),N=function(){var e=s.a.useState(!1),t=Object(o.a)(e,2),i=t[0],a=t[1],c=s.a.useContext(S);return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(C.a,{onClick:function(){c(!i),a(!i)},children:i?Object(n.jsx)(w.a,{}):Object(n.jsx)(v.a,{})})})},k=Object(p.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:'url("https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80")',backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(5,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),D=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),i=t[0],c=t[1],r=Object(a.useState)(""),m=Object(o.a)(r,2),p=m[0],g=m[1],v=Object(a.useState)(!1),y=Object(o.a)(v,2),w=y[0],C=y[1],S=Object(a.useState)(!0),D=Object(o.a)(S,2),G=D[0],I=D[1],R=k(),A=s.a.useContext(T);return Object(n.jsxs)(b.a,{container:!0,component:"main",className:R.root,children:[Object(n.jsx)(j.a,{}),Object(n.jsx)(b.a,{item:!0,xs:!1,sm:4,md:7,className:R.image}),Object(n.jsxs)(b.a,{item:!0,xs:12,sm:8,md:5,component:u.a,elevation:6,square:!0,children:[Object(n.jsx)(b.a,{container:!0,justify:"flex-end",style:{paddingTop:"10px",paddingRight:"15px"},children:Object(n.jsx)(N,{})}),Object(n.jsxs)("div",{className:R.paper,children:[Object(n.jsx)(l.a,{className:R.avatar,children:Object(n.jsx)(x.a,{})}),Object(n.jsx)(O.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(n.jsxs)(f.a,{className:R.form,validate:"true",children:[Object(n.jsx)(h.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Roll Number",name:"email",autoComplete:"email",onInput:function(e){""===p&&""===i&&C(!1),c(e.target.value)},value:i,error:w&&!i,helperText:w&&!i&&"Roll number field is required",autoFocus:!0}),Object(n.jsx)(h.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onInput:function(e){""===p&&""===i&&C(!1),g(e.target.value)},value:p,error:w&&!p,helperText:w&&!p&&"Password field is required",autoComplete:"current-password"}),!G&&Object(n.jsx)(O.a,{color:"error",variant:"caption",align:"left",children:"RollNumber or Password is Invalid"}),Object(n.jsx)(d.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:R.submit,onClick:function(){console.log(i,p),C(!0),""!==p&&""!==i&&("19CSR118"===i&&"1234"===p?setTimeout((function(){return A(!0)}),1e3):(console.log("Invalid Input"),I(!1),setTimeout((function(){return I(!0)}),5e3)))},children:"Sign In"})]}),Object(n.jsxs)("p",{children:[" For testing purpose ",Object(n.jsx)("br",{})," User name : 19CSR118 ",Object(n.jsx)("br",{})," Password : 1234"]})]})]})]})},G=i(65),I=i(143),R=i(142),A=i(139),M=i(140),P=i(66),E=i(146),q=i(61),z=i.n(q),W=i(62),B=i.n(W),F=i(63),H=i.n(F);function V(){var e=s.a.useState(null),t=Object(o.a)(e,2),i=t[0],a=t[1],c=s.a.useContext(T),r=function(){a(null)};return Object(n.jsxs)("div",{children:[Object(n.jsx)(C.a,{id:"simple-menu",onClick:function(e){a(e.currentTarget)},children:Object(n.jsx)(z.a,{})}),Object(n.jsxs)(P.a,{id:"menu-list-grow",anchorEl:i,keepMounted:!0,open:Boolean(i),onClose:r,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:[Object(n.jsxs)(E.a,{onClick:r,children:[Object(n.jsx)(B.a,{})," \xa0\xa0\xa0Profile"]}),Object(n.jsxs)(E.a,{onClick:function(){r(),c(!1)},children:[Object(n.jsx)(H.a,{})," \xa0\xa0\xa0Logout"]})]})]})}var U=function(){return Object(n.jsx)(A.a,{position:"fixed",color:"default",children:Object(n.jsx)(M.a,{children:Object(n.jsxs)(b.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(n.jsx)(b.a,{item:!0,children:Object(n.jsx)("h3",{className:"mon",children:"VCET"})}),Object(n.jsx)(b.a,{item:!0,children:Object(n.jsxs)(b.a,{container:!0,direction:"row",alignItems:"center",children:[Object(n.jsx)(N,{}),Object(n.jsx)(V,{})]})})]})})})},Y=(i(86),i(87),function(){return Object(n.jsxs)("div",{className:"image-container",children:[Object(n.jsxs)("h1",{className:"head",style:{fontSize:"30px",marginTop:"30px"},children:["STUDENTS",Object(n.jsx)("span",{children:" GRIEVANCE CELL"})]}),Object(n.jsx)("h1",{style:{fontSize:"20px"},children:"\xa0\xa0<VCET/>"})]})}),L=(i(88),function(){return Object(n.jsxs)("div",{className:"details",children:[Object(n.jsx)("h1",{className:"form-head",children:"Grievance Cell"}),Object(n.jsx)("p",{children:"\xa0 \xa0 \xa0 \xa0The cell functions to look into the grievances lodged by any student. Students may approach the cell to voice their grievances regarding academic matters, health services, library and other services. Any form of discontent or dissatisfaction on the part of the students can be informed to the cell. The Grievance cell also looks into matters of harassment. Anyone with a genuine grievance may approach the Co-ordinator or member of the Students\u2019 Grievance cell. Grievances may also be sent through this portal to the Co-ordinator of the Students\u2019 Grievance Cell. The cell then redresses the grievances promptly and judiciously."}),Object(n.jsx)("h1",{children:"Objective"}),Object(n.jsx)("p",{children:"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0The main objective of the Grievance Cell is to promote and maintain a conducive and harmonious educational environment among the students. This is with the following objectives in mind"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Grievance cell is formed in order to keep the healthy working atmosphere amongst staff, students and parents. This cell helps Students to record their complaints and solve their problems related to academics, resources and personal grievances freely and frankly without any fear of victimization."}),Object(n.jsx)("li",{children:"To ensure effective solution to the student grievances with an impartial and fair approach"}),Object(n.jsx)("li",{children:"In order to advising Students of the College to respect each other and be patient whenever any occasion of conflict arises."}),Object(n.jsx)("li",{children:"Ragging in any form is strictly prohibited in and outside the institution. Any violation of ragging and disciplinary rules should be urgently brought to the notice of the Principal.Ragging Complaints will be handled as per ragging rules."}),Object(n.jsx)("li",{children:"Woman Harassment complaints will be handled as per government guidelines by respective section."})]}),Object(n.jsx)("h1",{children:"Scope"}),Object(n.jsx)("p",{children:"\xa0 \xa0 \xa0 \xa0\xa0 \xa0 \xa0The cell will deal with Grievances received in writing from the students about any of the following matters:"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Academic Matters: Related to timely issue of duplicate Mark-sheets, Transfer Certificates, Conduct Certificates or other examination related matters."}),Object(n.jsx)("li",{children:"Financial matters: Related to dues and payments for various items from library, hostels etc."}),Object(n.jsx)("li",{children:"Other Matters: Related to certain misgivings about conditions of sanitation, preparation of food, availability of transport, victimization by teachers etc."})]}),Object(n.jsx)("h1",{children:"Functions"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Using this portal students can post grievance and can stay anonymous"}),Object(n.jsx)("li",{children:"The cases will be attended promptly on receipt of grievances from the students."}),Object(n.jsx)("li",{children:"The cell will review all cases and will act formally accordingly as per the Management policy and send response to the students using this portal regarding their complaints."}),Object(n.jsx)("li",{children:"The cell will give report to the authority about the cases attended to and the number of pending cases, if any, which require direction and guidance from the higher authorities."})]}),Object(n.jsx)("h1",{children:"Exclusions"}),Object(n.jsx)("p",{children:"\xa0 \xa0 \xa0 \xa0\xa0 \xa0 \xa0The grievance Redressal cell shall not entertain the following issues:"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Decisions of the executive council, academic council, board of studies and other administrative or academic committees constituted by the university."}),Object(n.jsx)("li",{children:"Decisions with regard to award of scholarship, fee concessions, medals etc."}),Object(n.jsx)("li",{children:"Decisions made by the university with regard to disciplinary matters and misconduct."})]}),Object(n.jsx)("h1",{children:"Committee Members"}),Object(n.jsx)("div",{className:"table",children:Object(n.jsx)("table",{children:Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Designation"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Dr. Tharun Kumar"}),Object(n.jsx)("td",{children:"Principal "})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Dr. Nithesh Prawin"}),Object(n.jsx)("td",{children:"Assistant professor, Dept. of Computer Science "})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Dr. Vaishnavi Suvetha"}),Object(n.jsx)("td",{children:"Assistant professor, Dept. of Computer Science "})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Dr. Sathiyasri"}),Object(n.jsx)("td",{children:"Assistant professor, Dept. of Computer Science "})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Mr. Udaya"}),Object(n.jsx)("td",{children:"Assistant professor, Dept. of Computer Science "})]})]})})})]})}),J=i(141),K=i(137),X=i(64),Q=i.n(X),Z=(i(89),function(){return Object(n.jsxs)("div",{className:"form",children:[Object(n.jsx)("h1",{className:"form-head",children:"Post Your Grievance"}),Object(n.jsx)(O.a,{variant:"caption",display:"block",align:"justify",color:"error",style:{margin:"0px 8px"},children:"NOTE: You can make complaint and can stay anonyms. Your details will not be show to any faculty of college as well as Grievance Committee unless you provide any information in below form. Make sure you don't add any of your details unless you willing to provide your details."}),Object(n.jsxs)(J.a,{className:"form-group",children:[Object(n.jsxs)(b.a,{container:!0,spacing:1,children:[Object(n.jsx)(b.a,{item:!0,xs:12,sm:6,children:Object(n.jsxs)(f.a,{className:"single",children:[Object(n.jsx)(h.a,{id:"outlined-basic",label:"Title",variant:"outlined"}),Object(n.jsx)(K.a,{id:"outlined-basic",children:"Short title on your complaint."})]})}),Object(n.jsx)(b.a,{item:!0,xs:12,sm:6,children:Object(n.jsxs)(f.a,{className:"single",children:[Object(n.jsxs)(h.a,{id:"select",label:"Category",select:!0,variant:"outlined",children:[Object(n.jsx)(E.a,{value:"college",children:"College"}),Object(n.jsx)(E.a,{value:"hostel",children:"Hostel"})]}),Object(n.jsx)(K.a,{id:"select",children:"Select category of complaint."})]})})]}),Object(n.jsxs)(f.a,{className:"single",children:[Object(n.jsx)(h.a,{id:"outlined-multiline-static",label:"Complaint",multiline:!0,rows:10,variant:"outlined"}),Object(n.jsx)(K.a,{id:"outlined-multiline-static",children:"Give a detailed summary of your complaint with required details."})]}),Object(n.jsx)(b.a,{container:!0,justify:"flex-end",children:Object(n.jsx)(d.a,{variant:"contained",color:"primary",endIcon:Object(n.jsx)(Q.a,{}),children:"Send"})})]})]})}),$=function(){return Object(n.jsx)(A.a,{position:"relative",style:{top:"auto",bottom:0},color:"default",children:Object(n.jsxs)(b.a,{container:!0,justify:"space-between",style:{padding:"25px 5px"},children:[Object(n.jsx)(b.a,{item:!0,sm:6,xs:12,children:"Copyright \xa9 2020"}),Object(n.jsx)(b.a,{item:!0,sm:6,xs:12,children:"Developed By Anonymous with \u2764\ufe0f"})]})})},_=function(){return Object(n.jsxs)(u.a,{children:[Object(n.jsx)(U,{}),Object(n.jsx)(Y,{}),Object(n.jsx)(R.a,{maxWidth:"md",children:Object(n.jsxs)(b.a,{container:!0,direction:"column",children:[Object(n.jsx)(Z,{}),Object(n.jsx)(L,{})]})}),Object(n.jsx)($,{})]})};var ee=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),i=t[0],s=t[1],c=Object(a.useState)(!1),r=Object(o.a)(c,2),l=r[0],d=r[1],j=Object(G.a)({palette:{type:i?"dark":"light"}});return Object(n.jsx)(I.a,{theme:j,children:Object(n.jsx)(S.Provider,{value:s,children:Object(n.jsx)(T.Provider,{value:d,children:Object(n.jsx)("div",{className:"App",children:l?Object(n.jsx)(_,{}):Object(n.jsx)(D,{})})})})})};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(ee,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.29dc38db.chunk.js.map