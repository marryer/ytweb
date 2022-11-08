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
        <el-upload
            class="upload-demo"
            action="#"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList"
            :class="imgBox">
            书籍图片：
            <el-button size="small" type="success" :class="successBtn">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb,且至多只能上传四张图片</div>
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
        <!-- 交易地点 -->
        <el-form-item label="交易地点" :class="radioBox">
            <el-radio-group v-model="form.address">
                <el-radio label="送上寝室" ></el-radio>
                <el-radio label="自取" ></el-radio>
                <el-radio label="放到指定地点" ></el-radio>
            </el-radio-group>
        </el-form-item>
        <!-- 书籍详情 -->
        <el-form-item label="书籍详情" :class="tips">
            <el-input type="textarea" v-model="form.area" cols="70" rows="10"></el-input>
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
                bookName:'',
                bookAuthor:'',
                price:'',
                regin:'',
                address:'',
                area:'',
            },
            box1:'box1',
            fileList:[],
            bookName:'book_name',
            inputStyle:'input_style',
            bookAuthor:'book_author',
            priceBox:'price_box',
            imgBox:'img_box',
            selectBox:'select_box',
            radioBox:'radio_box',
            tips:'tips',
            submitBox:'submit_box',
            successBtn:'success_btn',
            inputFocus:'input_focus',
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

<style scoped>
.box1{
    position: fixed;
    margin-top: -260px;
    left: 300px;
    top: 50%;
    left: 50%;
    margin-left:-600px;
    width: 700px;
    height: 600px;
    /* margin-top: 40px; */
    background-color: #EDEDED;
    padding-left: 40px;
}
.box1:hover{
    border: 1px solid rgba(227, 227, 227, 0.863);
    box-shadow: 4 4 2px rgba(0, 0, 0, .2);
}
.input_style{
    margin-left: 20px;
    width:60%;
}
.book_name,.book_author{
    position: absolute;
    top:5%;
    margin-left: -30px;
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
.img_box{
    position: absolute;
    top: 15%;
    left: 20px;
}
.select_box{
    position: absolute;
    top: 28%;
}
.radio_box{
    position: absolute;
    top: 35%;
}
.tips{
    position: absolute;
    top:42%;
}
.submit_box{
    position: absolute;
    bottom:6%;
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