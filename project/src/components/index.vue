<template>
  <div>
    <top></top>
    <search></search>
    <login></login>
    <logo></logo>
    <business></business>
    <business></business>
    <business></business>
    <ad></ad>
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