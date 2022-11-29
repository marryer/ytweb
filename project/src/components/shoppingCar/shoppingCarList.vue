<template>
  <div>
    <!-- 商品订单头部 -->
    <headerTop></headerTop>
    <!-- 商品订单的信息 -->
    <imagenation></imagenation>
    <!-- 商品订单 -->
    <list></list>
    <div class="shoppingcarImg" v-show="isShow">
      <img src="../../img/shoppingcarNone.png" alt="">
    </div>
  </div>
</template>

<script>
import HeaderTop from './headerTop'
 import imagenation from './imagenation'
 import list from './list'
  export default {
    name:'ShoppingCarList',
    components:{HeaderTop,list,imagenation},
    data(){
      return{
        bookList:{
          shoppingCarts:[],
          statistical:{}
        },
        isShow:true
      }
    },
    mounted(){
        this.isShow = JSON.parse(localStorage.getItem("bool"))
    }
  }
</script>

<style scoped>
.shoppingcarImg{
  width: 600px;
  height: 600px;
  margin: 0 auto;
}
</style>