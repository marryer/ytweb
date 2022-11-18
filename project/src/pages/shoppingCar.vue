<template>
  <div>
    <logo></logo>
    <!-- 商品订单列表 -->
    <logo></logo>
    <shoppingCarList></shoppingCarList>
    <!-- 商品底部 -->
    <shoppingFooter></shoppingFooter>
  </div>
</template>

<script>
  // import top from './index/top'
  import shoppingCarList from '../components/shoppingCar/shoppingCarList'
  import shoppingFooter from '../components/shoppingCar/shoppingFooter'
  import logo from '../components/index/logo'
  export default {
    name:'ShoppingCar',
    components:{
      logo,
      shoppingCarList,
      shoppingFooter,
    }
  }
</script>
