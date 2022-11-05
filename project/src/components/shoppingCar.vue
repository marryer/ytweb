<template>
  <div>
    <!-- 顶部导航栏 -->
    <top></top>
    <!-- 商品订单列表 -->
    <shoppingCarList></shoppingCarList>
    <!-- 商品底部 -->
    <shoppingFooter></shoppingFooter>
  </div>
</template>

<script>
  import top from './index/top'
  import shoppingCarList from './shoppingCar/shoppingCarList'
  import shoppingFooter from './shoppingCar/shoppingFooter'
  export default {
    name:'ShoppingCar',
    components:{top,shoppingCarList,shoppingFooter}
  }
</script>

<style>

</style>