<template>
 <ul class="basicShow">
  <li><img src="../img/头像 女孩 (1).png" alt=""></li>
  <li>{{user.username}}</li>
  <li> 姓名：{{user.realName}}</li>
  <li>校内地址：{{user.province}}</li>
  <li>性别：{{user.sex}}</li>
  <li>QQ：{{user.qq}}</li>
  <li>电话：{{user.phone}}</li>
 </ul>
</template>

<script>
import axios from 'axios'
  export default {
    name:'BasicShow',
    data(){
      return {
        user:{},
        userId:JSON.parse(localStorage.getItem("userInfo")).userId
      }
    },
    mounted(){
     axios({
      method:'post',
      url:'/api/user/info',
      data:{
        "userId": this.userId
      }
     }).then(res=>{
      console.log("basicShow请求成功",res.data.data)
      this.user = res.data.data
      if(this.user.sex < 1){
        this.user.sex = "男"
      }else if(this.user.sex >= 1){
        this.user.sex = "女"
      }
     })
    }
  }
</script>

<style scoped lang="less">
  .basicShow{
    list-style: none;
    position: absolute;
    top: 100px;
    left: 220px;
    li:nth-child(2){
      position: absolute;
      top: 15px;
      left: 120px;
    }
    li{
      margin-top: 15px;
    }
    li:nth-child(3),li:nth-child(4),
    li:nth-child(5),li:nth-child(6),
    li:nth-child(7){ 
      margin-left: 80px;

    }
    li:hover{
      color: #9a8600;
    }
  }
</style>