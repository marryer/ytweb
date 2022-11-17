<template>
  <div>
    <!-- 搜索框 -->
    <search></search>
    <!-- 登录,注册指示 -->
    <login></login>
        <!-- logo -->
    <logo></logo>
    <!-- 一部分商品展示 -->
    <business></business>
    <!-- 广告栏 -->
    <ad></ad>
    <!-- 查看更多，会跳转到全部商品页面 -->
    <more></more>
    <router-view></router-view>
  </div>
</template>

<script>
// 引入子组件
import search from '../components/index/search'
import login from '../components/index/login'
import logo from '../components/index/logo'
import business from '../components/index/business'
import ad from '../components/index/ad'
import more from '../components/index/more'
  export default {
    name:'Index',
    components:{search,login,logo,business,ad,more},
  }
</script>

<style>

</style>