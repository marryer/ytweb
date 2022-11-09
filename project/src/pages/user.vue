<template>
  <div>
    <!-- 顶部导航条 -->
    <!-- <top></top> -->
    <!-- 侧边栏 -->
    <sideBar/>
    <!-- 路由切换展示视图 -->
    <router-view></router-view>
  </div>
</template>

<script>
// import top from './index/top'
import sideBar from '../components/user/sideBar'
import basicShow from './basicShow'
import updatePassword from './updatePassword'
import soldOut from './soldOut'
import orderHistroy from './orderHistroy'
  export default {
    name:'User',
    components:{sideBar,basicShow,updatePassword,soldOut,orderHistroy}
  }
</script>

<style>

</style>