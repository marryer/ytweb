<template>
  <el-container style="height: 500px; border: 1px solid #eee" class="sideBar">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-document"></i>基本信息</template>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-refresh"></i>修改密码</template>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-sold-out"></i>下架书籍</template>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="el-icon-setting"></i>历史订单</template>
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
  box-shadow: 0 0 2px rgba(0, 0, 0, .2);
}
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>