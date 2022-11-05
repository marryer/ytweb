<template>
 <ul class="basicShow">
  <li><img src="../../img/头像 女孩 (1).png" alt=""></li>
  <li>{{user.fakeName}}</li>
  <li> 姓名：{{user.realName}}</li>
  <li>校内地址：{{user.address}}</li>
  <li>性别：{{user.sex}}</li>
  <li>QQ：{{user.QQtel}}</li>
  <li>电话：{{user.tel}}</li>
 </ul>
</template>

<script>
  export default {
    name:'BasicShow',
    data(){
      return {
        user:{
          fakeName:'不负如来不负卿',
          realName:'周斯越',
          sex:'男',
          address:'花果书院-A6-112',
          QQtel:2229795409,
          tel:13629773154,
        }
      }
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
      color: #ffd04b;
    }
  }
</style>