<template>
    <div>
        <el-upload
            class="upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
            :limit="3"
            ref="upload"
            :before-upload="beforeUpload"
            :auto-upload="false"
            :on-exceed="handleExceed"
            :on-remove="handleRemove"
        >
        </el-upload>
        <el-progress type='circle' v-if='loading' :percentage="percentage" :colors='colors' class='progress'></el-progress>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        handleRemove(file) {
            this.$refs.upload.abort(); //取消上传
            this.$message({message: '成功移除' + file.name, type: 'success'});
        }
    } 
}
</script>

<style scoped>
::v-deep .upload{
    height: 62px;
}
::v-deep .el-upload,
::v-deep .el-upload--text{
    width: 248px;
    height: 62px;
}
</style>