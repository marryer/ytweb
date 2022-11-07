<template>
  <div>
    <!-- 首页 -->
    <index v-show="false" ></index>
    <!-- 购物车 -->
    <shoppingCar v-show="false" ></shoppingCar>
    <!-- 发布商品 -->
    <release v-show="true" ></release>
    <!-- 全部商品展示 -->
    <commodity v-show="false" ></commodity>
    <!-- 用户中心 -->
    <user v-show="false"></user>
    <!-- 退出 -->
    <exit v-show="false"></exit>

  </div>
</template>

<script>
import index from  './components/index'
import shoppingCar from './components/shoppingCar'
import release from './components/release'
import commodity from './components/commodity'
import user from './components/user'
import exit from './components/exit'
export default {
  name: 'App',
  components:{
    index,
    shoppingCar,
    commodity,
    user,
    release,
    exit
  },
}

</script>

