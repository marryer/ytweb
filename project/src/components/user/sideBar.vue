<template>
  <el-container style="height: 500px; border: 1px solid #eee" class="sideBar">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <!-- router-link 路由切换 -->
          <template slot="title"><i class="el-icon-document"></i> <router-link :to="{name:'basicShow'}">基本信息</router-link></template>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-refresh"></i> <router-link to="/user/updatePwd">修改密码</router-link></template>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-sold-out"></i><router-link to="/user/soldOut">下架书籍</router-link></template>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="el-icon-setting"></i> <router-link to="/user/orderHistroy">订单历史</router-link> </template>
        </el-submenu>
      </el-menu>
    </el-aside>
  </el-container>
</template>

<script>
  export default {
    name:'SideBar',
  }
</script>

<style scoped>
.sideBar{
  /* margin-top: 20px; */
  display: block;
  box-shadow: 0 0 2px rgba(0, 0, 0, .2);
}
  .el-header {
    background-color: #9a8600;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
  a{
    text-decoration: none;
    color: #8b8b8bea;
  }
</style>