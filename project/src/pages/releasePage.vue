<template>
  <div :class="box1">
    <!-- 表单 -->
    <el-form ref="form" :model="form" label-width="100px" class="release-page">
        <!-- 书名 -->
        <el-form-item label="书名：" :class="bookName">
            <el-input v-model="form.bookName" placeholder="请输入书名" :class="[inputStyle,inputFocus]"></el-input>
        </el-form-item>
        <!-- 作者 -->
        <el-form-item label="作者：" :class="bookAuthor">
            <el-input v-model="form.bookAuthor" placeholder="请输入作者" :class="[inputStyle,inputFocus]"></el-input>
        </el-form-item>
        <el-form-item label="价格" :class="priceBox">
            <el-input-number v-model="form.price" @change="handleChange" :min="0" :max="100" label="价格"></el-input-number>
        </el-form-item>
            <br>
        <!-- 上传书籍照片 -->
        <div class="bookImg">书籍封面：</div>
            <el-upload
            :class="uploadImg"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div :class="elUploadTip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        
            <br>
        <!-- 年级 -->
        <el-form-item label="书籍所用年级" :class="selectBox">
            <el-select v-model="form.region" placeholder="请选择年级">
                <el-option label="请选择年级" value="0"></el-option>
                <el-option label="大一" value="1"></el-option>
                <el-option label="大二" value="2"></el-option>
                <el-option label="大三" value="3"></el-option>
                <el-option label="大四" value="4"></el-option>
            </el-select>
        </el-form-item>
        <br>
        <!-- 专业 -->
        <el-form-item label="所用专业：" :class="bookSpecialty">
            <el-input v-model="form.bookSpecialty" placeholder="请输入专业" :class="[inputStyle,inputFocus]"></el-input>
        </el-form-item>
        <!-- 书籍详情 -->
        <el-form-item label="书籍详情" :class="tips">
            <el-input type="textarea" v-model="form.area" cols="70" rows="5"></el-input>
        </el-form-item>
        <!-- 表单结束 -->
        <el-form-item :class="submitBox">
            <el-button type="success" @click="onSubmit" :class="successBtn">立即发布</el-button>
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
                bookName:'',// 书名
                bookAuthor:'',// 书籍作者
                price:'',// 价格
                regin:'',//年级
                bookSpecialty:'',// 书籍专业
                area:'',// 书籍详情
            },
            box1:'box1',
            fileList:[],
            bookName:'book_name',
            inputStyle:'input_style',
            bookAuthor:'book_author',
            priceBox:'price_box',
            // imgBox:'img_box',
            uploadImg:'upload_img',
            elUploadTip:'el-upload_tip',
            selectBox:'select_box',
            bookSpecialty:'book_specialty',
            tips:'tips',
            submitBox:'submit_box',
            successBtn:'success_btn',
            inputFocus:'input_focus',
        }
    },
     // 提交操作
    mounted() {
        function onSubmit(){

        }
    },
    
}
</script>

<style scoped>
.box1{
    position: absolute;
    margin-top: 20px;
    margin-left:350px;
    width: 700px;
    height: 600px;
    /* margin-top: 40px; */
    background-color: #EDEDED;
    padding-left: 40px;
}
/* .box1:hover{
    border: 1px solid rgba(227, 227, 227, 0.863);
    box-shadow: 4 4 2px rgba(0, 0, 0, .2);
} */
.input_style{
    margin-left: 20px;
    width:60%;
}
.book_name{
    position: absolute;
    margin-left: -30px;
}
.book_author{
    position: absolute;
    margin-left: 10px;
}
.book_name,.book_author{
    position: absolute;
    top:5%;
    font-size:40px;
    font-weight: 700;
}

.book_author{
    position: absolute;
    top: 5%;
    left: 30%;
}
.price_box{
    position: absolute;
    top: 5%;
    right: 10px;
}
.bookImg{
    position: absolute;
    top:30%;
}
.upload_img{
    position: absolute;
    top: 14%;
    left: 130px;
    width: 200px;
    height: 100px;
    font-size: 12px;
}
.el-upload_tip{
    display: inline-block;
    width: 300px;
    font-size: 12px;
}
.select_box{
    position: absolute;
    top: 49%;
}
.book_specialty{
    position: absolute;
    left: 20px;
    top: 56%;
}
.tips{
    position: absolute;
    top:64%;
}
.submit_box{
    position: absolute;
    bottom:4%;
}
.success_btn{
    background-color: #67C23A;
}
.success_btn:hover{
    background-color: #67C23A;
}
.input_focus:focus{
    border:1px #67C23A
}
</style>