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
  // import top from '../components/index/top'
  import logo from '../components/index/logo'
  import search from '../components/index/search'
  import ad from '../components/index/ad'
  import classify from '../components/commodity/classify'
  import slideShow from '../components/commodity/slideShow'
  import business from '../components/index/business'
  import allShow from '../components/commodity/allShow'
  export default {
    name:'Commodity',
    components:{logo,search,ad,classify,slideShow,business,allShow}
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