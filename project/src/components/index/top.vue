<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#67C23A"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item>欢迎来到易书</el-menu-item>
    <el-menu-item index="1" class="top-one"><a href="javascript:;" target="_blank" class="all-line">首页</a></el-menu-item>
    <el-menu-item index="2" class="top-two"><a href="javascript:;" target="_blank" class="all-line">全部商品</a></el-menu-item>
    <el-menu-item index="3" class="top-three"><a href="javascript:;" target="_blank" class="all-line">发布</a></el-menu-item>
    <el-menu-item index="4" class="top-four"><a href="javascript:;" target="_blank" class="all-line">购物车</a></el-menu-item>
    <el-menu-item index="5" class="top-right"><a href="javascript:;" target="_blank" class="all-line">用户中心</a></el-menu-item>
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
  left: 740px;
 }

</style>