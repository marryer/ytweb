<template>
  <div class="login">
    <div><img src="../../img/head.png" alt=""></div>
    <p class="login-char">Hi,你好 &nbsp;<span class="login-username">{{username}}</span></p>
    <div style="margin: 20px 0">

        <div class="leftBtn">
          <router-link :to="{name:'denglu' }">
          <el-button type="success">登录</el-button>
        </router-link>
        </div>
        <div class="rightBtn">
          <router-link :to="{name:'zhuce'}">
          <el-button type="success" plain>注册</el-button>
        </router-link>
        </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
  export default {
    name:'Login',
    data(){
      return{
        username:JSON.parse(localStorage.getItem("userInfo")).username || '',
      }
    },
    mounted(){
      this.$bus.$on("userInfo",userInfo=>{
        this.username = userInfo.username 
      })
      this.$bus.$on("removeUsername",username=>{
        this.username = username.username
      })
    }
  }
</script>

<style scoped>
a{
  display: block;
  text-decoration: none;
  color: black;
}
.login-username{
  color:rgba(213, 106, 29, 0.881);
}
/* 设置登录注册框的样式 */
.login{
    position: absolute;
    top: 99px;
    right:10px;
    width: 320px;
    height: 200px;
    text-align: center;
    border: 1px solid rgba(227, 225, 225, 0.879);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
  .login-char{
    font-size: 14px;
  }
  .leftBtn{
    display: inline-block;
    position: absolute;
    left: 75px;
  }
  .rightBtn{
    display: inline-block;
    position: absolute;
    right: 75px;
  }
</style>