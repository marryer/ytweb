<template>
  <div>
    <!-- 商品订单头部 -->
    <headerTop></headerTop>
    <!-- 商品订单的信息 -->
    <imagenation></imagenation>
    <!-- 商品订单 -->
    <list></list>
    <list></list>
    <list></list>
  </div>
</template>

<script>
 import HeaderTop from './headerTop'
 import imagenation from './imagenation'
 import list from './list'
  export default {
    name:'ShoppingCarList',
    components:{HeaderTop,list,imagenation}
  }
</script>

<style>

</style>