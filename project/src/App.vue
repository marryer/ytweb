<template>
  <div>
    <top></top>
    <!-- 首页 --> 
    <!-- <index></index> -->
    <!-- 发布商品 -->
    <!-- <release></release> -->
    <!-- 购物车 -->
    <!-- <shoppingCar></shoppingCar> -->
    <!-- 全部商品展示 -->
    <!-- <commodity></commodity> -->
    <!-- 用户中心 -->
    <!-- <user></user> -->
    
    <!-- 指定组件呈现的位置 -->
    <div>
      <router-view></router-view>
    </div>
  
  </div>
</template>

<script>
// import index from  './components/index'
// import shoppingCar from './components/shoppingCar'
// import release from './components/release'
// import commodity from './components/commodity'
// import user from './components/user'
import top from './components/index/top'
export default {
  name: 'App',
  components:{
    // index,
    // shoppingCar,
    // commodity,
    // user,
    // release,
    top
  },
}
</script>


