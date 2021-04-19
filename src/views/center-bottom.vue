<template>
    <div>
        <div class="title-text">
            全国数据上报情况
        </div>
        <div class="list-title">
            <div class="pro-data">日期</div>
            <div class="num1">化学药批次</div>
            <div class="num2">中成药批次</div>
            <div class="num3">中药饮片批次</div>
            <div class="state">审核状态</div>
        </div>
        <div class="list-box">
            <div class="list-item" v-for='(item,index) in list' :key=index>
                <div class="pro-data">{{item.date}}</div>
                <div class="num1">{{item.num1}}</div>
                <div class="num2">{{item.num2}}</div>
                <div class="num3">{{item.num3}}</div>
                <div class="state" :class='isFinished(item.state)'>{{item.state}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    created(){
        this.getList()
    },
    methods:{
        async getList(){
            const res = await this.$http.get('/api/data');
            this.list = res.data.result;
        },
        isFinished(state){
            switch(state){
                case '待审核': return 'warning';
                case '已发布': return 'success';
                case '需要修订': return 'error';
                default: return 'warning';
            }
        }
    },
}
</script>

<style scoped>
.title-text {
  font-size: 21px;
  color: #fff;
  margin-bottom: 15px;
}
.list-title {
  color: #80899e;
  margin-bottom: 8px;
  display: flex;
  font-size: 13px;
}
.pro-data{
    width: 130px;
}
.num1{
    width: 120px;
}
.num2{
    width: 120px;
}
.num3{
    width: 130px;
}
.state{
    flex:1;
}
.list-item {
  display: flex;
  color: #fff;
  font-size: 13px;
  height: 22px;
  line-height: 22px;
}
.warning{
    color: yellow;
}
.success{
    color: green;
}
.error{
    color: red;
}
</style>