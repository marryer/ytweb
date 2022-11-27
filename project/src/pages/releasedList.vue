<template>
   <div class="box">
    <div class="infinite-list" v-infinite-scroll="load" style="overflow: scroll;">
        <div v-for="(i,z) in count" class="infinite-list-item" :key="z" ><router-link :to="{name:'releaseHistory'}">发布历史：{{ i }}</router-link></div>  
    </div>
    <router-view></router-view>
   </div>
</template>

<script>
export default {
    name:'releasedList',
    data () {
      return {
        count:0,
      }
    },
    methods: {
      load () {
        if(this.count < 30){
        this.count += 2;
        }else{
            return;
        }
      },
      showH(){
            alert('11');
            this.flag = !flag;
        }
    }
    
}
</script>

<style scoped>
.box{
    position:absolute;
    top:160px;
    top:280px;
    left:50px;
    width: 200px;
    background-color: #ebeaea;
}
a{    
    display: inline-block;
    width: 180px;
    height: 60px;
    color: #000;
    text-decoration: none;
}
.infinite-list{
    height: 600px;
}
.infinite-list-item{
    height: 60px;
    text-align: center;
    list-style: none;
    line-height: 60px;;
    font-size:20px;
    text-align: center;
}
.infinite-list-item:hover{
    background-color:#67C23A;
}
</style>