<template>
  <div class="business">
    <div class="business-one">
      <div  v-for="list in bookList" :key="list.bookId">
        <!-- src="../../img/redmi10A.png" -->
        <img :src="list.bookUrl" alt="">
        <p>书名: {{list.bookName}}</p>
        <p>作者: {{list.author}}</p>
        <p style="color:#9a8600">价格: {{list.price}} 元</p>
        <el-button type="success" plain class="allshow-button" @click="addToCar(list.bookId)">加入书单</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    name:'Business',
    data(){
      return{
        bookList:[],
        userInfo:{
          userId:'',
          username:''
        },
      }
    },
    mounted(){
      axios.get('http://localhost:8080/api/book').then(
        response=>{
          this.bookList = response.data.data
          console.log("url",response.data.data)
        },
        error=>{
          return alert("请求失败")
        }
      )
     this.$bus.$on("searchBook",(searchValue)=>{
      this.bookList = searchValue
     })
      this.$bus.$on("sendusername",list=>{
        this.userInfo.userId = list.userId
        this.userInfo.username = list.username
        console.log("business",list.userId)
      })
    },
    methods:{
      addToCar(bookId){
       axios({
        method:'post',
        url:'/api/shopping_cart/add',
        data:{
          "userId":JSON.parse(localStorage.getItem("userInfo")).userId,
          "bookId":bookId
        } 
       }).then(res=>{
        return alert("添加成功")
       })
      }
    }
  }
</script>
<style  scoped lang="less"> 
.business{
    .business-one{
      margin-top: 60px;
      div{
        display: inline-block;
        width: 260px;
        border: 1px solid rgba(227, 227, 227, 0.863);
        box-shadow: 0 0 2px rgba(0, 0, 0, .2);
        text-align: center;
        transition: all .5s;
        margin-top: 30px;
        margin-left: 25px;
          img{
            width: 80%;
          }
      }
      div:hover{
        transform: translateY(-4px);
        box-shadow: 0 0 10px rgba(0, 0, 0, .2);
      }
  }
}

</style>