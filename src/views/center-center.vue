<template>
    <div>
        <div class="title-text5">
            全国生产企业风险实时监控
        </div>
        <div class="list-title5">
            <div class="product">生产单位</div>
            <div class="region">省份</div>
            <div class="mediname">药品名称</div>
            <div class="fail">不合格批次</div>
        </div>
        <div class="list-box5">
            <div class="list-item5" v-for='(item,index) in riskList' :key=index>
                <div class="product">{{item.production}}</div>
                <div class="region">{{item.region}}</div>
                <div class="mediname">{{item.name}}</div>
                <div class="fail">{{item.num}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            riskList:[]
        }
    },
    created(){
        this.getRiskList();
    },
    methods:{
        async getRiskList(){
            const{data:res} = await this.$http.get('/api/risk')
            this.riskList = res.result;
        }
    },
    mounted(){

    }
}
</script>

<style scoped>
.title-text5 {
  font-size: 21px;
  color: #fff;
  margin-bottom: 15px;
}
.list-title5 {
  color: #80899e;
  display: flex;
  font-size: 13px;
}
.product {
  width: 165px;
}
.region {
  width: 93px;
}
.mediname {
  flex: 1;
}
.fail {
  width: 76px;
}
.list-item5 {
  display: flex;
  color: #fff;
  font-size: 13px;
  height: 22px;
  line-height: 22px;
}
.list-box5 {
  margin-top: 8px;
  height: 180px;
  overflow-y: hidden;
}

</style>