<template>
  <div>
    <top></top>
    <!-- 首页 --> 
    <index v-show="false"></index>
    <!-- 发布商品 -->
    <release v-show="false"></release>
    <!-- 购物车 -->
    <!-- <shoppingCar></shoppingCar> -->
    <shoppingCar v-show="false"></shoppingCar>
    <release v-show="false" ></release>
    <!-- 全部商品展示 -->
    <commodity v-show="true"></commodity>
    <!-- 用户中心 -->
    <!-- <user></user> -->
    
    <!-- 指定组件呈现的位置 -->
    <div>
      <router-view></router-view>
    </div>
  

    <user v-show="false"></user>
    <!-- 指定组件呈现的位置 -->
    <!-- <router-view></router-view> -->
    <user v-show="false"></user> 
    <!-- 退出 -->
    <exit v-show="false"></exit>
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


