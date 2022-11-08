<template>
  <div>
    <!-- <router-link to="/index">index</router-link> -->
    <!-- <router-link to="/user">user</router-link> -->
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
    <router-view></router-view>
  </div>
</template>

<script>
import index from  './components/index'
import shoppingCar from './components/shoppingCar'
import release from './components/release'
import commodity from './components/commodity'
import user from './components/user'
export default {
  name: 'App',
  components:{index,shoppingCar,commodity,user,release},
}
</script>

