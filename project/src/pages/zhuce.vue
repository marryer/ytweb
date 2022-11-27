<template>
  <div class="all">

    <form class="main">
        <div class="account">
            <input type="text" id="account" placeholder="请输入您的账号" v-model="account">
        </div>
        <span id="accountTip" v-show="isacountShow">账号不能为空</span>
        <div class="user_name">
            <input type="text" id="userName" placeholder="请输入您的用户名" v-model="username">
        </div>
        <span id="usernameTip" v-show="isusernameShow">用户名不能为空</span>
        <div class="pass_word">
            <input type="password" id="passWord" placeholder="请输入您的密码" v-model="password">
        </div>
        <span id="passwordTip" v-show="ispwdShow">密码不能为空</span>
        <div class="rePass_word">
            <input type="password" id="rePassword" placeholder="请再次输入您的密码" v-model="rePassword">
        </div>
        <span id="rePwdTip" v-show="isrepwdShow">再次输入密码不能为空</span>
        <div class="person_name">
            <input type="text" id="personName" placeholder="请输入您的电话号码" v-model.number="tel">
        </div>
        <span id="telTip" v-show="istelShow">电话号码不能为空</span>
        <div class="address">
            <input type="text" id="address1" placeholder="请输入您的校内地址" v-model="address">
        </div>
        <div class="num_QQ">
            <input type="text" id="numQQ" placeholder="请输入您的QQ号" v-model.number="QQ">
        </div>
        <div class="phone_num">
            <input type="text" id="phoneNum" placeholder="请输入您的姓名" v-model="realName">
        </div>
        <div class="sexCheck">
            性别：
            <input type="radio" value="male" name="sex" v-model="sex">男
            <input type="radio" value="female" name="sex" v-model="sex">女
        </div>
<<<<<<< HEAD
        <button class="loginBtn">注册</button>
        <button class="resBtn">重置</button>
    </from>
=======
    </form>
    <button class="loginBtn" @click="register">注册</button>
    <!-- <button class="resBtn"><router-link :to="{name:'index'}">重置</router-link></button> -->
    <button class="resBtn" @click="resBtn">重置</button>
>>>>>>> 8b33da1a160dcf4809a17f4083fc9d567752fd7f
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Zhuece',
    data(){
        return{
            account:'',
            username:'',
            sex:'',
            password:'',
            rePassword:'',
            realName:'',
            address:'',
            QQ:'',
            tel:'',
            isacountShow:false,
            isusernameShow:false,
            ispwdShow:false,
            isrepwdShow:false,
            istelShow:false,
        }
    },
    methods:{
        register(){
            // 对必须输入的输入框进行判断value是否为空
            if(!this.account){
                this.isacountShow = true
            }else{
                this.isacountShow = false
            }
             if(!this.password){
                this.ispwdShow = true
            }else{
                this.ispwdShow = false
            }
             if(!this.rePassword){
                this.isrepwdShow = true
            }else{
                this.isrepwdShow = false
            }
            if(!this.username){
                this.isusernameShow = true
            }else{
                this.isusernameShow = false
            }
            if(!this.tel){
                this.istelShow = true
            }else{
                this.istelShow = false
            }
            // 发送post请求
            axios({
                method:'post',
                url:'/api//user/register',
                data:
                    {
                        "account": this.account,
                        "password": this.password,
                        "rePassword": this.rePassword,
                        "username": this.username,
                        "realName": this.realName,
                        "province": this.address,
                        "sex": this.sex,
                        "qq": this.QQ,
                        "phone": this.tel
                    }
            }).then(res=>{
                if(res.data.sucess) {
                    alert("注册成功")
                    }
              console.log(res.data)
            },err=>{
                console.log("请求失败",err.message)
            })
        },
        resBtn(){
            this.account = ''
            this.username=''
            this.sex=''
            this.password=''
            this.rePassword=''
            this.realName=''
            this.address=''
            this.QQ=''
            this.tel=''
            this.isacountShow=false
            this.isusernameShow=false
            this.ispwdShow=false
            this.isrepwdShow=false
            this.istelShow=false
        }
    }
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
span{
    display: block;
    font-size: 12px;
    color: red;
}
#accountTip{
    position: absolute;
    top: 65px;
    right: 55px;
}
#usernameTip{
    position: absolute;
    top: 115px;
    right: 55px;
}
#passwordTip{
    position: absolute;
    top: 165px;
    right: 55px;
}
#rePwdTip{
    position: absolute;
    top: 215px;
    right: 55px;
}
#telTip{
    position: absolute;
    top: 265px;
    right: 55px;
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
    height: 520px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    margin-left: -200px;
    top: 57%;
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
.account{
    position: absolute;
    top: 30px;
    left: 40px;
}
.user_name{ 
    top: 80px;
}
.pass_word{
    top: 130px;
}
.rePass_word{
    position: absolute;
    top: 180px;
    left: 40px;
}
.person_name{
    top: 230px;
}
.address{
    top: 280px;
}
.num_QQ{
    top: 330px;
}
.phone_num{
    top: 380px;
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
    position: absolute;
    top: 0px;
}
.sexCheck{
    position: absolute;
    top: 430px;
    left: 40px;
    font-size: 20px;
}

.loginBtn{
    display: inline-block;
    width: 80px;
    height: 40px;
    position: absolute;
    bottom: 30px;
    left: 50%;
    margin-left: -120px;
    background-color: #67c23a;
    border: none;
    border-radius: 10px;
}
.loginBtn:hover{
   border: none;
}
.resBtn{
    display: inline-block;
    width: 80px;
    height: 40px;
    position: absolute;
    bottom: 30px;
    left: 50%;
    margin-left: 20px;
    background-color: #e9f7e2;
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
#phoneNum,
#rePassword,
#account{
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
#phoneNum:focus,
#rePassword:focus,
#account:focus{
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