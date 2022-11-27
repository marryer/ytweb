<template>
  <div class="all">
    <from  class="main">
        <div class="user_name">
            <input type="text" id="userName" placeholder="请输入您的用户名">
        </div>
        <div class="pass_word">
            <input type="password" id="passWord" placeholder="请输入您的密码">
        </div>
        <div class="person_name">
            <input type="text" id="personName" placeholder="请输入您的姓名">
        </div>
        <div class="address">
            <input type="text" id="address1" placeholder="请输入您的校内地址">
        </div>
        <div class="num_QQ">
            <input type="text" id="numQQ" placeholder="请输入您的QQ号">
        </div>
        <div class="phone_num">
            <input type="text" id="phoneNum" placeholder="请输入您的电话号码">
        </div>
        <div class="sexCheck">
            性别：
            <input type="radio" value="男" name="sex">男
            <input type="radio" value="女" name="sex">女
        </div>
        <button class="loginBtn">注册</button>
        <button class="resBtn">重置</button>
    </from>
  </div>
</template>

<script>
export default {
    name:'Zhuece',
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
    height: 600px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    margin-left: -200px;
    top: 50%;
    margin-top: -300px;
    border-radius: 5px;
    color: #000;
}

.user_name,
.pass_word,
.person_name,
.address,
.num_QQ,
.phone_num{
    width: 200px;
    height: 50px;
    position: absolute;
    left: 40px;
    /* font-size: 18px; */
    /* background-color: #FFF; */
    font-size: 20px;
}

.user_name{ 
    top: 30px;
}
.pass_word{
    top: 90px;
}
.person_name{
    top: 150px;
}
.address{
    top: 210px;
}
.num_QQ{
    top: 270px;
}
.phone_num{
    top: 330px;
}
.userNameTip,
.passWordTip,
.personNameTip,
.addressTip,
.numQQTip,
.phoneNumTip{
    color: white;
    position: absolute;
    top: 0px;
}
.userNameTipA{
    animation: user 0.3s linear normal forwards;
    animation-iteration-count: 1;

}
.passWordTip,
.passWordTip,
.personNameTip,
.addressTip,
.numQQTip,
.phoneNumTip{
    /* color: #a3a0a0; */
    position: absolute;
    top: 0px;
    /* background-color: #fff; */
}
.sexCheck{
    position: absolute;
    top: 390px;
    left: 40px;
    font-size: 20px;
}

.loginBtn{
    display: inline-block;
    width: 80px;
    height: 40px;
    position: absolute;
    bottom: 100px;
    left: 50%;
    /* font-weight: 700; */
    margin-left: -120px;
    background-color: #67c23a;
    /* border: 2px solid rgb(123, 212, 241); */
    border: none;
    border-radius: 10px;
}
/* .loginBtn:hover{
    box-shadow: 0px 0px 4px 2px rgb(163, 226, 247);
} */
.resBtn{
    display: inline-block;
    width: 80px;
    height: 40px;
    position: absolute;
    bottom: 100px;
    left: 50%;
    /* font-weight: 700; */
    margin-left: 20px;
    background-color: #e9f7e2;
    /* border: none; */
    border: 1px solid #67c23aa9;
    border-radius: 10px;
}
.resBtn:hover{
    background-color: #67c23a;
}
#userName,
#passWord,
#personName,
#address1,
#numQQ,
#phoneNum{
    display: inline-block;
    width: 300px;
    height: 30px;
    color: #000;
    font-size: 20px;
    border: 0px transparent;
    border-bottom: 2px solid #ededed;
    background-color: #fff;
}
#userName:focus,
#passWord:focus,
#personName:focus,
#address1:focus,
#numQQ:focus,
#phoneNum:focus{
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