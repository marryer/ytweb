<template>
  <ul class="shoppingFooter">
    <li> <el-button type="success" plain @click="removeAll">删除</el-button></li>
    <li>已选商品 {{0}} 件</li>
    <li>合计：{{0}} 元</li>
    <li><button @click="payment(shopping.shoppingId,shopping.bookId)">结算</button></li>
  </ul>
</template>

<script>
import axios from 'axios'
  export default {
    name:'ShoppingFooter',
    data(){
      return{
        statistical:{},
        done:false,
        userId:JSON.parse(localStorage.getItem("userInfo")).userId || '',
        shopping:JSON.parse(localStorage.getItem("data")).shoppingCarts || []
      }
    },
    methods:{
      removeAll(){
        if(this.done){
          console.log("清除成功")
        }
      },
      payment(shoppingId,bookId){
        console.log("userid",this.userId)
        console.log("shopping",this.shopping)
        axios({
          method:'post',
          url:'/api//shopping_cart/payment',
          data:{
            "userId": this.userId,
            "shoppingIds": [shoppingId,bookId]
          }
        }).then(res=>{
          alert("结算成功")
        })
      }
    },
    mounted(){
        this.statistical = JSON.parse(localStorage.getItem("data"))
        this.$bus.$on("sendremoveDone",done=>{
          this.done = done
        })
      }
    }
</script>

<style scoped lang="less">
  .shoppingFooter{
    width: 1005px;
    height: 60px;
    line-height: 60px;
    list-style: none;
    padding-left: 15px;
    border: 1px solid rgba(227, 227, 227, 0.863);
    border-top: none;
    margin: 0 auto;
    border-radius: 10px;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    li{
      float: left;
    }
    li:nth-child(2){
      margin: 0 300px;
    }
    li:nth-child(4){
      margin-left: 30px;
      button{
        width: 90px;
        height: 45px;
        border-radius: 50px;
        border: none;
        background-color: #67C23A;
        color: #fff;
      }
    }
  }
</style>