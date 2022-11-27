<template>
  <div>
    <logo></logo>
    <!-- 商品订单列表 -->
    <shoppingCarList></shoppingCarList>
    <!-- 商品底部 -->
    <shoppingFooter></shoppingFooter>
  </div>
</template>

<script>
import axios from 'axios'
  import shoppingCarList from '../components/shoppingCar/shoppingCarList'
  import shoppingFooter from '../components/shoppingCar/shoppingFooter'
  import logo from '../components/index/logo'
  export default {
    name:'ShoppingCar',
    components:{
      logo,
      shoppingCarList,
      shoppingFooter,
    },
    data(){
      return{
        userId:"",
        shoppingCarts:[],
        statistical:{}
      }
    },
    mounted(){
      // 路由传参  
      // this.$route.query.userInfo
      this.userId = JSON.parse(localStorage.getItem("userInfo")).userId  
      axios({
        method:'post',
        url:'/api/shopping_cart',
        data:{
          "userId":this.userId
        }
      }).then(res=>{
        console.log("shoppingcar请求成功1111",this.userId)
        console.log("shoppingcar请求成功",res.data.data)
        localStorage.setItem("data",JSON.stringify(res.data.data))
      })
    }
  }
</script>
