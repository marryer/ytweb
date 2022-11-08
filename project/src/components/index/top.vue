<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo top"
    mode="horizontal"
    @select="handleSelect"
    background-color="#67C23A"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item>欢迎来到易书</el-menu-item>
    <!-- vue中借助router-link标签 实现路由切换 -->
    <el-menu-item index="1" class="top-one"> <router-link to="/index"  target="_blank" class="all-line">首页</router-link></el-menu-item>
    <el-menu-item index="2" class="top-two"><router-link to="/commodity"  target="_blank" class="all-line">书海</router-link></el-menu-item>
    <el-menu-item index="3" class="top-three"> <router-link to="/release"   target="_blank" class="all-line">发布</router-link></el-menu-item>
    <el-menu-item index="4" class="top-four"> <router-link to="/shoppingCar"  target="_blank" class="all-line">书单</router-link></el-menu-item>
    <el-menu-item index="5" class="top-right"><router-link to="/user"   target="_blank" class="all-line">用户中心</router-link></el-menu-item>
    <el-menu-item index="6" class="top-right"><a href="javascript:;" target="_blank" class="all-line">退出</a></el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name:'Top',
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
  }
</script>

<style scoped>
/* 去掉超链接的下划线 */
  .all-line{
    text-decoration: none;
  }
  .top{
    float: left;
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
 .top-right{
  left: 680px;
 }

</style>