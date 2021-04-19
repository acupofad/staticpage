<template>
    <div>
        <el-upload
            class="upload"
            :action=url
            multiple
            :limit="3"
            ref="upload"
            :before-upload="beforeUpload"
            :auto-upload="false"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :http-request="customUpload"
            :file-list="fileList"
            :on-success="handleSuccess"
        >
        </el-upload>
        <!-- <el-progress type='circle' v-if='loading' :percentage="percentage" :colors='colors' class='progress'></el-progress> -->
    </div>
</template>

<script>
export default {
    name:'upload-file',
    data(){
        return{
             url:'http://jsonplaceholder.typicode.com/',
        }
    },
    methods:{
        handleRemove(file) {
            this.$refs.upload.abort(); //取消上传
            this.$message({message: '成功移除' + file.name, type: 'success'});
        },
        // customUpload(file) {
        //         let FormDatas = new FormData();
        //         FormDatas.append('file', file.file);
        //         this.$axios({
        //             url: '/api/file',
        //             method: 'post',
        //             data: FormDatas,
        //             //上传进度
        //             onUploadProgress: (progressEvent) => {
        //                 let num = progressEvent.loaded / progressEvent.total * 100 | 0;  //百分比
        //                 file.onProgress({percent: num})     //进度条
        //             }
        //         }).then(data => {
        //             file.onSuccess(); 
        //             console.log(data);//上传成功(打钩的小图标)
        //         })
        //     },
        handleSuccess(file){
            // console.log(res);
            console.log(file);
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