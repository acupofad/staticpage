<template>
    <div>
        <div class="title-text3">
            浙江省抽检任务完成率
        </div>
        <div class="box1">
            <div class="table-title3">
                地方监督抽检进度及排名
            </div>
            <div class="grade">
                <num-grade1/>
            </div>
            <div class='progress1'>
                <el-progress :text-inside="false" :show-text="false" :stroke-width="15" :percentage="grade.percentage" color='skyblue' class='item'></el-progress>
            </div>
        </div>
        <div class="box2">
            <div class="table-title3">
                地方评价抽检进度及排名
            </div>
            <div class="grade">
                <num-grade1/>
            </div>
            <div class='progress1'>
                <el-progress :text-inside="false" :show-text="false" :stroke-width="15" :percentage="grade.percentage" color='skyblue' class='item'></el-progress>
            </div>
        </div>
    </div>
</template>

<script>
import numGrade1 from './num-grade1'
export default {
    name:'left-bottom',
    data(){
        return{
            grade:'',
            num:[]
        }
    },
    components:{
        numGrade1
    },
    created(){
        this.getNum()
    },
    methods:{
        async getNum(){
            const res =  await this.$http.get('/api/grade');
            this.grade = res.data.result;
            // console.log(this.grade.risk);
            this.grade.percentage = this.grade.percentage + '';
            this.num = this.grade.percentage.split('');
            // console.log(this.num);
        }
    },
}
</script>

<style scoped>
.title-text3 {
  font-size: 21px;
  color: #fff;
}
.table-title3 {
  margin-top: 35px;
  color: #fff;
  font-size: 14px;
}
.progress1{
    margin-top: 8px;
    width: 271px;
}
.grade{
    margin-top: 15px;
    width: 264px;
    height: 19px;
}

</style>