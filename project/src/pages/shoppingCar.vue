<template>
  <div>
    <!-- 顶部导航栏 -->
    <!-- <top class="shopping-top"></top> -->
    <!-- 商品订单列表 -->
    <shoppingCarList></shoppingCarList>
    <!-- 商品底部 -->
    <shoppingFooter></shoppingFooter>
  </div>
</template>

<script>
  // import top from './index/top'
  import shoppingCarList from '../components/shoppingCar/shoppingCarList'
  import shoppingFooter from '../components/shoppingCar/shoppingFooter'
  export default {
    name:'ShoppingCar',
    components:{
      // top,
      shoppingCarList,
      shoppingFooter,
    }
  }
</script>

<style scoped>
.shopping-top{
  /* margin-top: -30px; */
}


</style>