import{c as e}from"./mobile.697e7beb.js";import{a as l,w as a,r as t,o as s,c as o,f as i,i as u,j as n,t as v}from"./vendor.e0b7d5c2.js";import"./index.02fa2e07.js";const{createDemo:d}=e("shortpassword");var r=d({setup(){const e=l({dialogShow:!1,dialogShow1:!1,dialogShow2:!1,dialogShow3:!1,value:"",value1:"",value2:"",value3:"",errorMsg:""});return a((()=>e.value3),(l=>{6==l.length&&(e.errorMsg="请输入正确密码")})),{state:e,switchActionSheet:function(l){e[`${l}`]=!e[`${l}`]},sureClick:function(){e.dialogShow1=!1}}}});const h={class:"demo full"},c=i("h2",null,"基础用法",-1),w=n("点击出现输出框"),g=i("h2",null,"展示按钮",-1),S=n("点击出现输出框"),b=i("h2",null,"自定义长度",-1),f=n("点击出现输出框"),p=i("h2",null,"出现提示信息",-1),k=n("点击出现输出框");r.render=function(e,l,a,d,r,m){const C=t("nut-cell"),U=t("nut-shortpassword");return s(),o("div",h,[c,i(C,{onClick:l[1]||(l[1]=l=>e.switchActionSheet("dialogShow"))},{default:u((()=>[w])),_:1}),i(C,null,{default:u((()=>[n("您输入的密码是："+v(e.state.value),1)])),_:1}),g,i(C,{onClick:l[2]||(l[2]=l=>e.switchActionSheet("dialogShow1"))},{default:u((()=>[S])),_:1}),i(C,null,{default:u((()=>[n("您输入的密码是："+v(e.state.value1),1)])),_:1}),b,i(C,{onClick:l[3]||(l[3]=l=>e.switchActionSheet("dialogShow2"))},{default:u((()=>[f])),_:1}),i(C,null,{default:u((()=>[n("您输入的密码是："+v(e.state.value2),1)])),_:1}),p,i(C,{onClick:l[4]||(l[4]=l=>e.switchActionSheet("dialogShow3"))},{default:u((()=>[k])),_:1}),i(C,null,{default:u((()=>[n("您输入的密码是："+v(e.state.value3),1)])),_:1}),i(U,{value:e.state.value,"onUpdate:value":l[5]||(l[5]=l=>e.state.value=l),"is-visible":e.state.dialogShow,"onUpdate:is-visible":l[6]||(l[6]=l=>e.state.dialogShow=l)},null,8,["value","is-visible"]),i(U,{value:e.state.value1,"onUpdate:value":l[7]||(l[7]=l=>e.state.value1=l),"is-visible":e.state.dialogShow1,"onUpdate:is-visible":l[8]||(l[8]=l=>e.state.dialogShow1=l),"no-button":!1,onSureClick:e.sureClick},null,8,["value","is-visible","onSureClick"]),i(U,{value:e.state.value2,"onUpdate:value":l[9]||(l[9]=l=>e.state.value2=l),"is-visible":e.state.dialogShow2,"onUpdate:is-visible":l[10]||(l[10]=l=>e.state.dialogShow2=l),length:5},null,8,["value","is-visible"]),i(U,{value:e.state.value3,"onUpdate:value":l[11]||(l[11]=l=>e.state.value3=l),"is-visible":e.state.dialogShow3,"onUpdate:is-visible":l[12]||(l[12]=l=>e.state.dialogShow3=l),errorMsg:e.state.errorMsg},null,8,["value","is-visible","errorMsg"])])};export default r;