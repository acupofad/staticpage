<template>
    <div>
         <div class="title-text7">
            全国药品抽检实时监控
        </div>
        <div class="sign">
          <sign/>
        </div>
        <ul class='introduce-box'>
            <li>
                <div class="medicname">{{medList.item1.cate}}</div>
                <div class="pic7"></div>
                <div class="meditotal">{{medList.item1.total}}</div>
                <div class="medinum">{{medList.item1.num}}</div>
            </li>
            <li>
                <div class="medicname">{{medList.item2.cate}}</div>
                <div class="pic7"></div>
                <div class="meditotal">{{medList.item2.total}}</div>
                <div class="medinum">{{medList.item2.num}}</div>
            </li>
            <li>
                <div class="medicname">{{medList.item3.cate}}</div>
                <div class="pic7"></div>
                <div class="meditotal">{{medList.item3.total}}</div>
                <div class="medinum">{{medList.item3.num}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
import Sign from './sign'
export default {
    data(){
        return{
            medList:[]
        }
    },
    components:{
      Sign
    },
    created(){
        this.getMedList()
    },
    methods:{
        async getMedList(){
            const res = await this.$http.get('/api/examin1');
            this.medList=res.data.result;
            console.log(res);
        }
    },
}
</script>

<style scoped>
.title-text7 {
  font-size: 21px;
  color: #fff;
  margin-bottom: 13px;
}
.sign{
  position: absolute;
  right: 0;
  top: 7px;
  width: 187px;
  height: 18px;
}
.introduce-box {
  display: flex;
  justify-content: space-between;
  width: 563px;
  height: 126px;
}
.introduce-box li {
  position: relative;
  width: 165px;
  background: url("../assets/img/编组\ 24.png") no-repeat;
  text-align: center;
}
.medicname {
  margin-top: 17px;
  font-size: 18px;
  color: #fff;
}
.pic7 {
  position: absolute;
  width: 82px;
  height: 6px;
  left: 41px;
  top: 43px;
  background: url("../assets/img/直线.png") no-repeat;
}
.meditotal {
  margin-top: 15px;
  font-size: 18px;
  font-weight: 500;
  color: #32c5ff;
}
.medinum {
  margin-top: 8px;
  color: #ff7d26;
  font-size: 18px;
  font-weight: 500;
}


</style>