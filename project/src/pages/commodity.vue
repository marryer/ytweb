<template>
  <div>
    <search></search>
    <logo></logo>
    <ad class="commodity-ad"></ad>
    <classify></classify>
    <slideShow></slideShow>
    <business></business>
  </div>
</template>

<script>
  import logo from '../components/index/logo'
  import search from '../components/index/search'
  import ad from '../components/index/ad'
  import classify from '../components/commodity/classify'
  import slideShow from '../components/commodity/slideShow'
  import business from '../components/index/business'
  export default {
    name:'Commodity',
    components:{logo,search,ad,classify,slideShow,business}
  }
</script>
<style scoped>
.commodity-ad{
  top: 100px;
}
</style>
