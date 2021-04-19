<template>
  <div class=container>
    <div class="title-text">
      数字药监数据驾驶舱
    </div>
    <div class="letp"><left-top/></div>
    <div class="lect"><left-center/></div>
    <div class="lebm"><left-bottom/></div>
    <div class="cttp"><center-top/></div>
    <div class="ctct"><center-center/></div>
    <div class="ctbm"><center-bottom/></div>
    <div class="rgtp"><right-top/></div>
    <div class="rgbm"><right-bottom/></div>
    <div class="login">
      <div class="pic"></div>
      <div class="word">admin</div>
      <div class="triangel"></div>
    </div>
    <div class="drawer" :style="{width:drawerWidth+'px'}">
        <div class="upfile">
          <upload-file/>
        </div>
    </div>
    <div class="drawer-pic" @click='turn' :style="{left:drawerWidth+'px'}">
      <div class="arrows1" v-if="drawerWidth===0"></div>
      <div class="arrows2" v-else></div>
    </div>
  </div>
</template>

<script>
import leftTop from './left-top'
import leftCenter from './left-center'
import leftBottom from './left-bottom'
import centerTop from './center-top'
import centerCenter from './center-center'
import rightTop from './right-top'
import rightBottom from './right-bottom'
import centerBottom from './center-bottom'
import uploadFile from './upload-file'

export default {
  name: "index",
  data () {
      return {
        bank: [],
        drawer: false,
        drawerWidth: 0,
      }
    },
    components: {
      leftTop,
      leftCenter,
      leftBottom,
      centerTop,
      centerCenter,
      rightTop,
      rightBottom,
      centerBottom,
      uploadFile
    },
    methods:{
      turn(){
        if(this.drawerWidth===0){
          this.drawerWidth=248
        }else{
          this.drawerWidth=0
        }
      }
    }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
.container {
  position: relative;
  width: 1920px;
  height: 1080px;
  background-image: url("../assets/img/bgc.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: 0 0;
}
.drawer-pic{
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top:50%;
  width: 24px;
  height: 120px;
  transform: translate(0,-50%);
  background: url('../assets/img/switch.png') no-repeat;
  background-size: cover;
  transition: all .5s;
  z-index: 500;
}
.arrows1{
  margin-left: 8px;
  width: 24px;
  height: 24px;
  background: url('../assets/img/arrow.png') no-repeat;
  transform: rotate(-90deg);
}
.arrows2{
  margin-right: 8px;
  width: 24px;
  height: 24px;
  background: url('../assets/img/arrow.png') no-repeat;
  transform: rotate(90deg);
}
.direct{
  z-index: 50;
  margin-left: 7px;
  margin-top: 50px;
  width: 13px;
  height: 20px;
  background: url('../assets/img/arrow.png') no-repeat;
  transform: rotate(-90deg);
}
.title-text {
  position: absolute;
  font-size: 38px;
  z-index: 200;
  margin-top: 26px;
  color: rgb(185, 208, 225);
  left: 50%;
  transform: translate(-50%, 0);
}
.letp {
  z-index: 50;
  position: absolute;
  width: 573px;
  height: 328px;
  top: 168px;
  left: 40px;
}
.lect {
  z-index: 50;
  position: absolute;
  width: 573px;
  height: 185px;
  top: 540px;
  left: 40px;
}
.lebm {
  z-index: 50;
  position: absolute;
  width: 278px;
  height: 243px;
  top: 776px;
  left: 351px;
}
.cttp {
  z-index: 50;
  position: absolute;
  width: 573px;
  height: 332px;
  top: 168px;
  left: 671px;
}
.ctct {
  z-index: 50;
  position: absolute;
  width: 573px;
  height: 179px;
  top: 543px;
  left: 671px;
}
.ctbm {
  z-index: 50;
  position: absolute;
  width: 573px;
  height: 278px;
  top: 776px;
  left: 671px;
}
.rgtp {
  z-index: 50;
  position: absolute;
  width: 575px;
  height: 179px;
  top: 168px;
  left: 1301px;
}
.rgbm {
  z-index: 50;
  position: absolute;
  width: 575px;
  height: 650px;
  top: 383px;
  left: 1301px;
}
.login {
  position: absolute;
  width: 110px;
  height: 27px;
  right: 148px;
  top: 30px;
}
.login div {
  float: left;
}
.pic {
  width: 25px;
  height: 27px;
  background-image: url("../assets/img/admin.png");
  background-size: 100% 100%;
  margin-right: 12px;
}
.word {
  font-size: 14px;
  color: white;
  line-height: 27px;
  display: flex;
}
.triangel {
  background-image: url("../assets/img/arrow.png");
  background-position: 50% 50%;
  margin-left: 11px;
  width: 12px;
  height: 27px;
}
.upfile{
    position: absolute;
    top: 250px;
    left: 0;
    width: 248px;
    height: 62px;
    cursor: pointer;
}
.drawer{
  width: 0;
  height: 1080px;
  position: fixed;
  top: 0;
  left: 0;
  background: url('../assets/img/drawer.png') no-repeat;
  transition: width 0.5s;
  z-index: 999;
  overflow: hidden;
}
</style>
