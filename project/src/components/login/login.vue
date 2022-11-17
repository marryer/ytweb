<template>
    <div class="main">
        <div class="user_name">
            <label for="userName" class="userNameTip">请输入您的账户</label>
            <input type="text" id="userName">
        </div>
        <div class="pass_word">
            <label for="passWord" class="passWordTip">请输入您的密码</label>
            <input type="password" id="passWord">
        </div>
        <button class="loginBtn">登陆</button>
        <button class="resBtn">重置</button>
    </div>
</template>

<script>
export default {
    name:'Login',
}
</script>

<style>
html{
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #ededed;
}
.main{
    width: 400px;
    height: 400px;
    background-color: #a3a0a0;
    position: absolute;
    left: 50%;
    margin-left: -200px;
    top: 50%;
    margin-top: -200px;
    border-radius: 5px;
}
.user_name{
    width: 200px;
    height: 50px;
    position: absolute;
    top: 50px;
    left: 40px;
    font-size: 18px;
    /* background-color: #0FF; */
    font-size: 20px;
}
.pass_word{
    width: 200px;
    height: 50px;
    position: absolute;
    top: 150px;
    left: 40px;
    background-color: #a3a0a0;
    font-size: 20px;
}
.userNameTip{
    color: white;
    position: absolute;
    top: 0px;
}
.userNameTipA{
    animation: user 0.3s linear normal forwards;
    animation-iteration-count: 1;

}
.passWordTip{
    color: white;
    position: absolute;
    top: 0px;
    background-color: #a3a0a0;
}

.loginBtn{
    display: inline-block;
    width: 80px;
    height: 40px;
    position: absolute;
    bottom: 100px;
    left: 50%;
    font-weight: 700;
    margin-left: -120px;
    background-color: rgb(123, 212, 241);
    border: 2px solid rgb(123, 212, 241);
    border-radius: 10px;
}
.loginBtn:hover{
    box-shadow: 0px 0px 4px 2px rgb(163, 226, 247);
}
.resBtn{
    display: inline-block;
    width: 80px;
    height: 40px;
    position: absolute;
    bottom: 100px;
    left: 50%;
    font-weight: 700;
    margin-left: 20px;
    background-color: rgb(188, 224, 236);
    border: 2px solid rgb(188, 224, 236);
    border-radius: 10px;
}
.resBtn:hover{
    box-shadow: 0px 0px 4px 2px rgb(225, 238, 242);
}
#userName{
    display: inline-block;
    width: 300px;
    height: 30px;
    color: #000;
    font-size: 20px;
    border: 0px transparent;
    border-bottom: 2px solid #fff;
    background-color: #a3a0a0;
}
#userName:focus{
    outline: none;
    border-bottom: 2px solid #000;
    /* animation: user 0.3s linear ; */
}
#passWord{
    display: inline-block;
    width: 300px;
    height: 30px;
    color: #000;
    font-size: 20px;
    border: 0px transparent;
    border-bottom: 2px solid #fff;
    background-color: #a3a0a0;
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