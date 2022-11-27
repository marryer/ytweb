<template>
  <!-- 67C23A  ffd04b-->
  <el-menu
  :default-active="activeIndex2"
    class="el-menu-demo top"
    mode="horizontal"
    @select="handleSelect"
    background-color="#fff"
    text-color="black"
    active-text-color="#9a8600"
    tab-position="top">
    <el-menu-item>欢迎来到易书</el-menu-item>
    <!-- vue中借助router-link标签 实现路由切换 -->
    <el-menu-item index="1" class="top-one">
      <router-link :to="{name:'index',}"  class="all-line">首页</router-link>
    </el-menu-item>
    <!-- router-link中添加 target="_blank" 会使路由新开页签进行跳转 -->
    <el-menu-item index="2" class="top-two">
      <router-link to="/commodity" class="all-line">书海</router-link></el-menu-item>
    <el-menu-item index="3" class="top-three"><router-link to="/release"  class="all-line">发布</router-link>
    </el-menu-item>
    <el-menu-item index="4" class="top-four">
      <router-link 
        :to="{
          path:'/shoppingCar',
          query:{
            userInfo:userInfo.userId
          }
        }" 
        class="all-line">书单
      </router-link>
    </el-menu-item>
    <el-menu-item index="5" class="top-right-user">
      <router-link to="/user"   class="all-line">用户中心</router-link>
    </el-menu-item>
    <el-menu-item index="6" class="top-right">
      <a href="javascript:;"  class="all-line" @click="exit">退出</a>
    </el-menu-item>
  </el-menu>
</template>

<script>
// import axios from 'axios';
export default {
  name:'Top',
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        userInfo:{},
      };
  }, 
  methods: {
    handleSelect(key, keyPath) {
      console.log("key",key,"keyPath", keyPath);
    },
    exit(){
      this.$bus.$emit("removeUsername",'')
      localStorage.removeItem("userInfo")
      localStorage.removeItem("data")
    }
  },
   mounted(){
      this.$bus.$on("send",userInfo=>{
        this.userInfo = userInfo
      })
    }

  }
</script>

<style scoped>
/* 去掉超链接的下划线 */
  a{
    display: inline-block;
    width: 80px;
    text-align: center;
    text-decoration: none;
    display: block;
  }
  li{
    padding: 0;
  }
  .top{
    /* float: left; */
    background-color: #67C23A;
    width: 1260px;
  }
  /* 更改el-menu-item的位置 */
  .top-one{
    left:240px
  }
  .top-two{
    left: 340px;
  }
  .top-three{
    left: 440px;
  }
  .top-four{
    left: 540px;
  }
  .top-right-user{
    left: 680px;
  }
 .top-right{
  left: 680px;
 }

</style>