<template>
  <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm updatePassword">
    <el-form-item
      label="原密码"
      prop="oldpassword"
      :rules="[
        { required: true, message: '密码框不能为空'},
      ]"
    >
    <el-input type="password" v-model.number="numberValidateForm.oldpassword" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item
      label="修改密码"
      prop="updatePassword"
      :rules="[
        { required: true, message: '修改密码不能为空'},
      ]"
    >
    <el-input type="password" v-model.number="numberValidateForm.updatePassword" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item
      label="确认密码"
      prop="rePassword"
      :rules="[
        { required: true, message: '确认密码不能为空'},
      ]"
    >
    <el-input type="password" v-model.number="numberValidateForm.rePassword" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm()">提交</el-button>
      <el-button @click="resetForm('numberValidateForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import axios from 'axios';
  export default {
    name:'updatePassword',
    data() {
      return {
        numberValidateForm: {
          oldpassword:'',
          updatePassword:'',
          rePassword:''
        },
        userId:JSON.parse(localStorage.getItem("userInfo")).userId
      };
    },
    methods: {
      submitForm() {
        console.log("修改密码")
        if(this.numberValidateForm.updatePassword === this.numberValidateForm.rePassword){
          axios({
          method:'post',
          url:'/api//user/updatePwd',
          data:{
            "userId":this.userId,
            "oldPwd":this.numberValidateForm.oldpassword,
            "newPwd":this.numberValidateForm.updatePassword
          }
        }).then(res=>{
          console.log("修改成功")
        })
        }else{
          alert("修改密码和确认密码必须一致")
          console.log("---",this.numberValidateForm.rePassword,this.numberValidateForm.updatePassword)
        }
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
  .updatePassword{
    position: absolute;
    top: 140px;
    left: 300px;
  }
</style>