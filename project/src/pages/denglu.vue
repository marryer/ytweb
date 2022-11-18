<template>
   <div class="all">
        <div class="main">
            <div class="user_name">
                <label for="userName" class="userNameTip"></label>
                <input type="text" id="userName" placeholder="请输入您的账户">
            </div>
            <div class="pass_word">
                <label for="passWord" class="passWordTip"></label>
                <input type="password" id="passWord" placeholder="请输入您的密码">
            </div>
            <button class="loginBtn"><router-link   :to="{name:'index'}">登陆</router-link></button>
            <button class="resBtn">重置</button>
        </div>
   </div>
</template>

<script>
// import axios from 'axios'
// import { response } from 'express';
export default {
    name:'Denglu',
}
</script>

<style scoped>

a{
    display: block;
    text-decoration: none;
    color: black;
}
input{
    font-family: "宋体";
    font-size: 16px;
}
.all{
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.829);
    z-index: 999;
}
.main{
    width: 400px;
    height: 380px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    margin-left: -200px;
    top: 50%;
    margin-top: -200px;
    border-radius: 5px;
    color: black;
}
.user_name{
    width: 200px;
    height: 50px;
    position: absolute;
    top: 50px;
    left: 40px;
    font-size: 20px;
}
.pass_word{
    width: 200px;
    height: 50px;
    position: absolute;
    top: 150px;
    left: 40px;
    font-size: 20px;
}
.userNameTip{
    position: absolute;
    top: 0px;
}
.userNameTipA{
    animation: user 0.3s linear normal forwards;
    animation-iteration-count: 1;

}
.passWordTip{
    position: absolute;
    top: 0px;
}

.loginBtn{
    display: inline-block;
    width: 80px;
    height: 40px;
    position: absolute;
    bottom: 100px;
    left: 50%;
    margin-left: -120px;
    background-color: #67c23a;
    border: none;
    border-radius: 10px;
}
.resBtn{
    display: inline-block;
    width: 80px;
    height: 40px;
    position: absolute;
    bottom: 100px;
    left: 50%;
    margin-left: 20px;
    background-color: #e9f7e2;
    border: 1px solid #67c23aa9;
    border-radius: 10px;
}
.resBtn:hover{
    background-color: #67c23a;
}
#userName{
    display: inline-block;
    width: 300px;
    height: 30px;
    color: #000;
    font-size: 20px;
    border: 0px transparent;
    border-bottom: 1px solid #000;
}
#userName:focus{
    outline: none;
    border-bottom: 2px solid #000;
    animation: user 0.3s linear ;
} 
#passWord{
    display: inline-block;
    width: 300px;
    height: 30px;
    color: #000;
    font-size: 20px;
    border: 0px transparent;
    border-bottom: 1px solid #000;
}
#passWord:focus{
    outline: none;
    border-bottom: 2px solid #000;
}
@keyframes user {
    from{
        top: 0px;
        font-size: 20px;
    }
    to{
        top: -20px;
        font-size: 12px;
        color: #000;
    }
}
</style>