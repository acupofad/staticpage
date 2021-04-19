<template>
    <div>
        <div class="title-text">
            全国药品风险实时排行
        </div>
        <ul class="list-box">
            <li class=''>
                <div class="title">化学药</div>
                <div class="list-title">
                    <div class="num">#</div>
                    <div class="name">修正药品名</div>
                    <div class="rate">不合格批次数</div>
                </div>
                <div class="list-item" v-for='(item,index) in list.item1' :key=index>
                    <div class="num">{{item.id}}</div>
                    <div class="name">{{item.name}}</div>
                    <div class="rate">
                        <el-progress :text-inside="false" :show-text="false" :stroke-width="7" :percentage="item.rate" :color="colorConfirm(item.id)" class='pro'></el-progress>
                    </div>
                    <div class="fail">{{item.num}}</div>
                </div>
            </li>
            <li>
                <div class="title2">中成药</div>
                <div class="list-title">
                    <div class="num">#</div>
                    <div class="name">修正药品名</div>
                    <div class="rate">不合格批次数</div>
                </div>
                <div class="list-item" v-for='(item,index) in list.item2' :key=index>
                    <div class="num">{{item.id}}</div>
                    <div class="name">{{item.name}}</div>
                    <div class="rate">
                        <el-progress :text-inside="false" :show-text="false" :stroke-width="7" :percentage="item.rate" :color="colorConfirm(item.id)" class='pro'></el-progress>
                    </div>
                    <div class="fail">{{item.num}}</div>
                </div>
            </li>
            <li>
                <div class="title2">中饮药品</div>
                <div class="list-title">
                    <div class="num">#</div>
                    <div class="name">修正药品名</div>
                    <div class="rate">不合格批次数</div>
                </div>
                <div class="list-item" v-for='(item,index) in list.item3' :key=index>
                    <div class="num">{{item.id}}</div>
                    <div class="name">{{item.name}}</div>
                    <div class="rate">
                        <el-progress :text-inside="false" :show-text="false" :stroke-width="7" :percentage="item.rate" :color="colorConfirm(item.id)" class='pro'></el-progress>
                    </div>
                    <div class="fail">{{item.num}}</div>
                </div>
            </li>
        </ul>
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
        this.getMedList()
    },
    methods:{
        async getMedList(){
            const res = await this.$http.get('/api/med');
            this.list = res.data.result;
        },
        colorConfirm(id){
            switch(id){
                case 1:return '#ea3c3c';
                case 2:return '#ff7d26';
                case 3:return '#c49a27';
                case 4:return '#5bff83';
                case 5:return '#00f9fd';
                default :return '#00f9fd'
            }
        }
    },
}
</script>

<style scoped>
.title-text{
    font-size: 21px;
    color: #fff;
    margin-bottom: 13px;
}
.title,
.title2{
    width: 560px;
    height: 30px;
    background-image: url('../assets/img/Rectangle 5.png');
    background-repeat: no-repeat;
    background-size: cover;
    font-size: 14px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 30px;
    text-align: center;
}
.list-title{
    margin-top: 8px;
    margin-bottom: 15px;
    display: flex;
    color:#80899e;
    font-size: 13px;
}
.list-item{
    display: flex;
    margin-bottom: 10px;
    color: #fff;
    height: 17px;
    font-size: 13px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 17px;
}
::v-deep .el-progress-bar__outer {
    background-color:  rgba(255, 255, 255, 0.4);
}
.pro{
    margin-top: 6px;
}
.num{
    width: 48px;
    height: 17px;
    font-size: 13px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    line-height: 17px;
}
.name{
    width: 205px;
}
.rate{
    width: 270px;
    margin-right: 25px;
}
.fail{
    flex: 1;
}
.title2{
    margin-top: 22px;
}
</style>