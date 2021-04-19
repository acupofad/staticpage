<template>
    <div class='ct'>
        <div class="title-text4">
            全国重复抽检风险实时排行
        </div>
        <div class="title4">
            <div :class="{'active':actIndex == 0}">化学药</div>
            <div :class="{'active':actIndex == 1}">中成药</div>
            <div :class="{'active':actIndex == 2}">饮品药</div>
        </div>
        <div class="list-title">
            <div class="production">生产单位</div>
            <div class="medicine-name">药品名称</div>
            <div class="batch-number">批号</div>
            <div class="batch-acount">批次计数</div>
        </div>
        <div class="carousel">
            <el-carousel :interval="2000" height="187px" arrow='never' indicator-position="none" @change='getActIndex'>
                <el-carousel-item v-for="(item,index) in 3" :key="index">
                    <div class="list-box">
                        <div class="list-item4" v-for='(item,index) in classList' :key=index>
                            <div class="production">{{item.production}}</div>
                            <div class="medicine-name">{{item.name}}</div>
                            <div class="batch-number">{{item.number}}</div>
                            <div class="batch-acount">{{item.acount}}</div>
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            classList:[],
            actIndex:0
        }
    },
    created(){
        this.getClassList()
    },
    methods:{
        async getClassList(){
            const res = await this.$http.get('/api/class');
            this.classList = res.data.result;
        },
        getActIndex(index){
          this.actIndex = index;
        }
    },
}
</script>

<style scoped>
.ct{
  overflow: hidden;
}
.title-text4 {
  font-size: 21px;
  color: #fff;
  margin-bottom: 24px;
}
.title4 {
  height: 28px;
  display: flex;
  margin-bottom: 23px;
}
.title4 div {
  flex: 1;
  text-align: center;
  width: 180px;
  color: #fff;
  line-height: 28px;
  background-size: contain;
  background: url("../assets/img/Rectangle5.png") no-repeat;
}
.title4 .active {
  background: url("../assets/img/Rectangle3.png") no-repeat;
}
.list-title {
  color: #80899e;
  display: flex;
  font-size: 13px;
}
.production {
  width: 160px;
}
.medicine-name {
  width: 230px;
}
.batch-number {
  width: 98px;
}
.batch-acount {
  width: 85px;
}
.list-item4 {
  display: flex;
  color: #fff;
  font-size: 13px;
  height: 24px;
  line-height: 24px;
}
.total-box{
  width: 1719px;
}
.list-box {
  float: left;
  margin-top: 13px;
  height: 187px;
  overflow-y: hidden;
}
</style>