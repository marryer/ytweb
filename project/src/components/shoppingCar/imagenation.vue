<template>
  <div class="imagenation">
    <input type="checkbox" :checked="done" @click="checkAll(done)">全选
    <span class="imagenation-one">商品信息</span>
    <span class="imagenation-two">价格</span>
    <span class="imagenation-three">操作</span>
  </div>
</template>

<script>
  export default {
    name:'Imagenation',
    data(){
      return{
        done:false
      }
    },
    methods:{
      checkAll(done){
        this.done = !done
        this.$bus.$emit("sendDone",this.done)
        this.$bus.$emit("sendremoveDone",this.done)
      }
    }
  }
</script>

<style scoped lang="less">
  .imagenation{
    width: 1000px;
    height: 35px;
    line-height: 35px;
    margin: 0 auto;
    padding-left: 20px;
    border: 1px solid rgba(227, 227, 227, 0.863);
    border-top: none;
    border-bottom: none;
    margin-top: 15px;
    .imagenation-one{
      display: inline-block;
      margin-left: 160px;
    }
    .imagenation-two{
      display: inline-block;
      margin: 0 300px;
    }
  }
</style>