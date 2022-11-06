<template>
  <div class="box1">
    <!-- 表单 -->
    <el-form ref="form" :model="form" label-width="100px">
        <!-- 书名 -->
        <el-form-item label="书名：">
            <el-input v-model="name" placeholder="请输入书名" class="input_style"></el-input>
        </el-form-item>
        <br>
        <!-- 上传书籍照片 -->
        <el-upload
            class="upload-demo"
            action="#"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList">
            书籍图片：
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb,且至多只能上传四张图片</div>
            </el-upload>
            <br>
        <!-- 年级 -->
        <el-form-item label="书籍所用年级">
            <el-select v-model="form.region" placeholder="请选择年级">
                <el-option label="大一" value="1"></el-option>
                <el-option label="大二" value="2"></el-option>
                <el-option label="大三" value="3"></el-option>
                <el-option label="大四" value="4"></el-option>
            </el-select>
        </el-form-item>
        <br>
        <!-- 交易地点 -->
        <el-form-item label="交易地点">
            <el-radio-group v-model="form.address">
                <el-radio label="送上寝室" ></el-radio>
                <el-radio label="自取" ></el-radio>
                <el-radio label="放到指定地点" ></el-radio>
            </el-radio-group>
        </el-form-item>
        <!-- 书籍详情 -->
        <el-form-item label="书籍详情">
            <el-input type="textarea" v-model="form.area" cols="70" rows="10"></el-input>
        </el-form-item>
        <!-- 表单结束 -->
        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    name:'releasePage',
    data(){
        return {
            form:{
                name:'',
                regin:'',
                address:'',
                area:'',
            },
            fileList:[],
        }
    },
    methods:{
        onSubmit(){
            alert("表单已经提交");
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
             console.log(file);
             
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
        },
    }
}
</script>

<style>
.box1{
    position: relative;
    top: -50%;
    left: 50%;
    margin-left:-350px;
    width: 700px;
    height: 600px;
    background-color: #EDEDED;
}
.box1:hover{
    box-shadow: 3px 3px 3px #000;
}
.input_style{
    display: inline-block;
    width: 300px;
}
</style>