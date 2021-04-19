<template>
    <div>
        <div class="title-text1">
            浙江省跟踪抽检覆盖率
        </div>
        <div class="num-grade">
          <num-grade/>
        </div>
        <div class="second-row">
          <el-progress type='line' :text-inside="true" :show-text="false" :stroke-width="24" :percentage="26" color="linear-gradient(90deg, #32C5FF 0%, #5AD8A6 100%)" class='top-progress'></el-progress>
        </div>
        <div class="title-text2">
          跟踪抽检覆盖率实时排名
        </div>
        <!-- 进度条 -->
        <ul class='progress-bar'>
            <li>
                <div class="num1 num">1</div>
                <el-progress :text-inside="true" :stroke-width="15" :percentage="80" color='#ea3c3c' class='item'></el-progress>
            </li>
            <li>
                <div class="num2 num">2</div>
                <el-progress :text-inside="true" :stroke-width="15" :percentage="60" color='#ff7d26' class='item'></el-progress>
            </li>
            <li>
                <div class="num3 num">3</div>
                 <el-progress :text-inside="true" :stroke-width="15" :percentage="50" color="#c49a27" class='item'></el-progress>
            </li>
            <li>
                <div class="num4 num">4</div>
                <el-progress :text-inside="true" :stroke-width="15"  :percentage="40" color="#5bff83" class='item'></el-progress>
            </li>
            <li>
                <div class="num5 num">5</div>
                 <el-progress :text-inside="true" :stroke-width="15" :percentage="30" color="#00f9fd" class='item'></el-progress>
            </li>
        </ul> -->
    </div>
</template>

<script>
import numGrade from './num-grade'
export default {
    name:'left-top',
    components:{
      numGrade
    },
    data(){
        return{
            list:[]
        }
    },
}
</script>

<style scoped>
.title-text1 {
  font-size: 21px;
  color: #fff;
}
.num-grade{
  position: absolute;
  width: 87px;
  height: 78px;
  right:0;
  top: 8px;
}
.top-progress {
  margin-top: 24px;
  line-height: 24px;
  width: 462px;
}
.title-text2 {
  font-size: 21px;
  color: #fff;
  margin-top: 35px;
}
::v-deep .el-progress-bar__outer {
  background-color:rgba(255, 255, 255, 0.4);
}
.progress-bar {
  margin-top: 24px;
}
.progress-bar li {
  margin-left: 0;
  margin-bottom: 20px;
}
.num {
  float: left;
}
.item {
  margin-left: 34px;
  padding-right: 8px;
  font-size: 15px;
  line-height: 15px;
  height: 15px;
  color: #000;
}
.num {
  width: 14px;
  height: 14px;
  margin-left: 4px;
  text-align: center;
  line-height: 14px;
}
.num1 {
  border: 1px solid #ea3c3c;
  color: #ea3c3c;
}
.num2 {
  border: 1px solid #ff7d26;
  color: #ff7d26;
}
.num3 {
  border: 1px solid #c49a27;
  color: #c49a27;
}
.num4 {
  border: 1px solid #5bff83;
  color: #5bff83;
}
.num5 {
  border: 1px solid #00f9fd;
  color: #00f9fd;
}
</style>