<template>
  <div :class="bg">
    <div :class="exitBar">
        <div :class="exitTip">确定要退出吗？</div>
        <el-row>
        <el-button type="success" round :class="exitBtn">确定</el-button>
        <el-button type="info" round :class="cancelBtn">取消</el-button>
</el-row>
    </div>
  </div>
</template>

<script>
export default {
    name:'Exit',
    data(){
        return {
            bg:'bg',
            exitBar:'exit_bar',
            exitBtn:'exit_btn',
            cancelBtn:'cancel_btn',
            exitTip:'exit_tip',
        }
    }
}
</script>

<style>
.bg{
    position: relative;
    width: 2000px;
    height: 1000px;
    background-color: #000 0.05;
}
.exit_bar{
    position: absolute;
    left: 50%;
    margin-left: -350px;
    top: 50%;
    margin-top: -200px;
    width: 600px;
    height: 400px;
    background-color: #e2eedc;
    border-radius: 10px;
}
.exit_tip{
    position: absolute;
    left: 50%;
    margin-left: -150px;
    top: 50px;
    width: 300px;
    height: 200px;
    font-size: xx-large;
    text-align: center;
    line-height: 200px;
}
.exit_btn{
    position: absolute;
    top: 300px;
    left: 190px;
}
.cancel_btn{
    position: absolute;
    top: 300px;
    right: 190px;
}
</style>