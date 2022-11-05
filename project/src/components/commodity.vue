<template>
  <div>
    <top></top>
    <search></search>
    <logo class="commodity-logo"></logo>
    <ad class="commodity-ad"></ad>
    <classify></classify>
    <slideShow></slideShow>
    <business></business>
    <allShow></allShow>
  </div>
</template>

<script>
  import top from './index/top'
  import logo from './index/logo'
  import search from './index/search'
  import ad from './index/ad'
  import classify from './commodity/classify'
  import slideShow from './commodity/slideShow'
  import business from './index/business'
  import allShow from './commodity/allShow'
  export default {
    name:'Commodity',
    components:{top,logo,search,ad,classify,slideShow,business,allShow}
  }
</script>

<style scoped>
  .commodity-logo{
    top: 28px;
    left: 120px;
    background-color: red;
}
  .commodity-ad{
    margin-top: -220px;
  }
</style>