<template>
    <div>
        <div class="title-text2">
            浙江省年度药品抽检实时监控
        </div>
        <div class="sign">
          <sign/>
        </div>
        <div class="box">
            <div class='pic2'>
            <div class="list-top">地方监督抽检</div>
            <div class="list-box">
                <div class='list-item' v-for='(item,index) in list' :key=index>
                    <div class='item-cate'>{{item.cate}}</div>
                    <div class='item-tot'>{{item.total}}</div>
                    <div class='item-num'>{{item.num}}</div>
                </div>
            </div>
        </div>
        <div class='cut-off'></div>
        <div class='pic2 pic-right'>
            <div class="list-top">地方评价抽检</div>
            <div class="list-box">
                <div class='list-item' v-for='(item,index) in list' :key=index>
                    <div class='item-cate'>{{item.cate}}</div>
                    <div class='item-tot'>{{item.total}}</div>
                    <div class='item-num'>{{item.num}}</div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import Sign from './sign'
export default {
    data(){
        return{
            list:''
        }
    },
    components:{
      Sign
    },
    created(){
        this.getList();
    },
    methods:{
        async getList(){
            const {data:res}= await this.$http.get('/api/examin1');
            this.list=res.result;
            console.log(this.list);
        }
    },
}
</script>

<style scoped>
.title-text2 {
  font-size: 21px;
  color: #fff;
}
.sign{
  position: absolute;
  right: 0;
  top: 7px;
  width: 187px;
  height: 18px;
}
.box {
  display: flex;
  justify-content: space-between;
  color: #fff;
}
.pic2 {
  flex: 1;
  width: 285px;
  height: 146px;
  margin-top: 12px;
}
.list-top {
  width: 252px;
  height: 30px;
  margin-left: 13px;
  background-image: url("../assets/img/Rectangle\ 5.png");
  background-size: 100% 100%;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
}
.list-box {
  position: relative;
  display: flex;
  width: 90%;
}
.list-box > div {
  flex: 1;
  text-align: center;
}
.item-cate {
  margin-top: 18px;
  font-size: 14px;
}
.item-tot {
  margin-top: 23px;
  color: #32c5ff;
  font-size: 18px;
}
.item-num {
  margin-top: 12px;
  color: #ff7d26;
  font-size: 17px;
}
.cut-off {
  position: absolute;
  left: 282px;
  top: 78px;
  width: 2px;
  height: 100px;
  background-color: #0d2f53;
}
</style>