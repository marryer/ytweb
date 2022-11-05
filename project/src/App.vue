<template>
  <div>
    <!-- 首页 -->
    <index v-show="false"></index>
    <!-- 购物车 -->
    <shoppingCar v-show="false"></shoppingCar>
    <!-- 全部商品展示 -->
    <commodity v-show="false"></commodity>
    <!-- 用户中心 -->
    <user v-show="true"></user>
  </div>
</template>

<script>
import index from  './components/index'
import shoppingCar from './components/shoppingCar'
import commodity from './components/commodity'
import user from './components/user'
export default {
  name: 'App',
  components:{index,shoppingCar,commodity,user}
}
</script>

