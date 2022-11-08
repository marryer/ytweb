<template>
  <div>
    <!-- 顶部导航条 -->
    <top></top>
    <!-- 侧边栏 -->
    <sideBar/>
    <!-- 路由切换展示视图 -->
    <router-view></router-view>
  </div>
</template>

<script>
import top from './index/top'
import sideBar from './user/sideBar'
import basicShow from './user/basicShow'
import updatePassword from './user/updatePassword'
import soldOut from './user/soldOut'
import orderHistroy from './user/orderHistroy'
  export default {
    name:'User',
    components:{top,sideBar,basicShow,updatePassword,soldOut,orderHistroy}
  }
</script>

<style>

</style>