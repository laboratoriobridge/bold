(window.webpackJsonp=window.webpackJsonp||[]).push([["6f95"],{bDkR:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/form/Form.demo",function(){var e=t("sbrz");return{page:e.default||e}}])},sbrz:function(e,a,t){"use strict";t.r(a);var l=t("mXGw"),n=t.n(l),r=t("c2a7");var m=function(e){var a={};return e.firstName||(a.firstName="First name is required"),e.lastName||(a.lastName="Last name is required"),a};a.default=function(){return n.a.createElement(r.Form,{render:function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement(r.Grid,{wrap:!0},n.a.createElement(r.Cell,{xs:6},n.a.createElement(r.TextField,{label:"First name",name:"firstName",required:!0})),n.a.createElement(r.Cell,{xs:6},n.a.createElement(r.TextField,{label:"Last name",name:"lastName",required:!0})),n.a.createElement(r.Cell,{xs:6},n.a.createElement(r.TextField,{name:"email",label:"E-mail",type:"email",icon:"emailFilled"})),n.a.createElement(r.Cell,{xs:6},n.a.createElement(r.FormControl,{label:"Favorite color"},n.a.createElement(r.HFlow,null,n.a.createElement(r.RadioField,{name:"color",value:"red",label:"Red"}),n.a.createElement(r.RadioField,{name:"color",value:"green",label:"Green"}),n.a.createElement(r.RadioField,{name:"color",value:"blue",label:"Blue"})))),n.a.createElement(r.Cell,{xs:12},n.a.createElement(r.CheckboxField,{name:"agreed",label:"I agree to the terms of use"})),n.a.createElement(r.Cell,{xs:12},n.a.createElement(r.HFlow,{justifyContent:"flex-end"},n.a.createElement(r.Button,{type:"reset",skin:"outline",onClick:e.reset},"Reset"),n.a.createElement(r.Button,{type:"submit",kind:"primary",onClick:e.handleSubmit},"Submit")))))},onSubmit:console.log,validate:m})}}},[["bDkR","5d41","9da1"]]]);