<template>
  <div>
    <!-- 导航条 -->
    <top></top>
    <!-- 搜索框 -->
    <search></search>
    <!-- 登录,注册指示 -->
    <login></login>
    <!-- logo -->
    <logo></logo>
    <!-- 一部分商品展示 -->
    <business></business>
    <business></business>
    <business></business>
    <!-- 广告栏 -->
    <ad></ad>
    <!-- 查看更多，会跳转到全部商品页面 -->
    <more></more>
  </div>
</template>

<script>
// 引入子组件
import top from './index/top'
import search from './index/search'
import login from './index/login'
import logo from './index/logo'
import business from './index/business'
import ad from './index/ad'
import more from './index/more'
  export default {
    name:'Index',
    components:{top,search,login,logo,business,ad,more}
  }
</script>

<style>

</style>