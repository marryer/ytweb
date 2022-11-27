<template>
  <div class="business">
    <div class="business-one">
      <div  v-for="list in bookList" :key="list.bookId">
        <img src="../../img/redmi10A.png" alt="">
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
        }
      }
    },
    mounted(){
      axios.get('http://localhost:8080/api/book').then(
        response=>{
          this.bookList = response.data.data
        },
        error=>{
          alert("请求失败")
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
        // data:{
        //   "userId":1,
        //   "bookId":1
        // }
       }).then(res=>{
        // alert("添加成功")
        console.log(res.data,this.userInfo.userId)
       })
      }
    }
  }
</script>
<style  scoped lang="less"> 
.business{
  width: 900px;
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