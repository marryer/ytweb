<template>
   <div class="box">
    <div class="infinite-list" v-infinite-scroll="load" style="overflow: scroll;">
        <div v-for="(i,z) in count" class="infinite-list-item" :key="z" >发布历史：{{ i }}</div>
    </div>
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

<style>
.box{
    position:absolute;
    top:280px;
    left:30px;
    width: 200px;
    background-color: #EDEDED;
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