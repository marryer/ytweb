<template>
  <div class="login">
    <div><img src="../../img/head.png" alt=""></div>
    <p class="login-char">Hi,你好</p>
    <div style="margin: 20px 0">
      <el-button type="success">登录</el-button>
      <el-button type="success" plain>注册</el-button>
</div>
  </div>
</template>

<script>
  export default {
    name:'Login',
  }
</script>

<style scoped>
/* 设置登录注册框的样式 */
.login{
    /* background-color: red; */
    position: absolute;
    top: 99px;
    right:10px;
    width: 320px;
    text-align: center;
    border: 1px solid rgba(227, 225, 225, 0.879);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
  .login-char{
    font-size: 14px;
  }
</style>