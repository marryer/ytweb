<template>
 <ul class="list">
    <li v-for="list in List.shoppingCarts" :key="list.bookId">
      <label>
        <input type="checkbox" :checked="done" @click="selectDone(done,list.price)"> 
        <img :src="list.bookUrl" alt="">
        <span class="des">书名：{{list.bookName}}；作者：{{list.author}}</span>
        <span class="list-number">{{list.price}}</span>
        <button class="list-oprate" @click="remove(list.shoppingId)">删除</button>
      </label>
    </li>
 </ul>
</template>

<script>
import axios from 'axios'
  export default {
    name:'List',
    data(){
      return{
        List:{},
        userId:'',
        done:false,
        sumPrice:0,
        count:0,
      }
    },
    watch:{
      done:{
        immediate:true,
        deep:true,
        handler(newValue,oldValue){
          console.log("done值发生改变了",newValue,oldValue)
        }
      }
    },
    methods:{
      // 取消购物车
      remove(shoppingId){
        axios({
          method:'post',
          url:'/api/shopping_cart/delete',
          data:{
            "shoppingId": [shoppingId]
          }
        }).then(res=>{
          return  alert("删除成功")
        })
      },
      selectDone(done,price){
          console.log("list",price)
        this.count++
        this.sumPrice +=price
        this.$bus.$emit("sendPriceCount",this.count,this.sumPrice)
        console.log("list,sumPrice",done,this.sumPrice,this.count)
      }
    },
    mounted(){
      this.userId = JSON.parse(localStorage.getItem("userInfo")).userId  
      axios({
        method:'post',
        url:'/api/shopping_cart',
        data:{
          "userId":this.userId
        }
      }).then(res=>{
       console.log("成功了",res.data.data)
       this.List = res.data.data
      })
      this.$bus.$on("sendDone",done=>{
        this.done = done
      })
    }
  }
</script>

<style scoped lang="less">
.list{
  list-style: none;
  width: 1005px;
  // height: 120px;
  margin: 0 auto;
  padding-left: 15px;
  border: 1px solid rgba(227, 227, 227, 0.863);
  border-top: none;
  li{
    height: 120px;
    border-top: 1px solid rgba(227, 227, 227, 0.863);
  }
  img{
    width: 12%;
    margin-left: 10px;
    margin-right: 25px;
    margin-bottom: -45px;

  }
  span{
    display: inline-block;
  }
  .des{
    width: 360px;
  }
  .list-number{
    display: inline-block;
    width: 40px;
    margin: 0 60px;
    color: #9a8600;
  }
  .list-oprate{
    margin-left: 220px;
    border: none;
    background-color: #fff;
  }
  .list-oprate:hover, .list-oprate:focus{
    color:red
  }
}
</style>