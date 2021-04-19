<template>
    <div>
        <div class="num">
            <div class="num-box" v-for='(item,index) in num' :key=index>
                <img src="../assets/img/number-white/number-white/n0.png" alt="" v-if="item===0||item===''">
                <img src="../assets/img/number-white/number-white/n1.png" alt="" v-else-if="item==='1'">
                <img src="../assets/img/number-white/number-white/n2.png" alt="" v-else-if="item==='2'">
                <img src="../assets/img/number-white/number-white/n3.png" alt="" v-else-if="item==='3'">
                <img src="../assets/img/number-white/number-white/n4.png" alt="" v-else-if="item==='4'">
                <img src="../assets/img/number-white/number-white/n5.png" alt="" v-else-if="item==='5'">
                <img src="../assets/img/number-white/number-white/n6.png" alt="" v-else-if="item==='6'">
                <img src="../assets/img/number-white/number-white/n7.png" alt="" v-else-if="item==='7'">
                <img src="../assets/img/number-white/number-white/n8.png" alt="" v-else-if="item==='8'">
                <img src="../assets/img/number-white/number-white/n9.png" alt="" v-else-if="item==='9'">
            </div>
            <div class="pic">
                %
            </div>
        </div>
        <div class="grade">
            <div class="grade-box">
            <div class="text">第</div>
            <div class="risk">
                <img src="../assets/img/number-blue/number-blue/n0.png" alt="" v-if="grade.risk===0||grade.risk===''">
                <img src="../assets/img/number-blue/number-blue/n1.png" alt="" v-else-if="grade.risk===1">
                <img src="../assets/img/number-blue/number-blue/n2.png" alt="" v-else-if="grade.risk===2">
                <img src="../assets/img/number-blue/number-blue/n3.png" alt="" v-else-if="grade.risk===3">
                <img src="../assets/img/number-blue/number-blue/n4.png" alt="" v-else-if="grade.risk===4">
                <img src="../assets/img/number-blue/number-blue/n5.png" alt="" v-else-if="grade.risk===5">
                <img src="../assets/img/number-blue/number-blue/n6.png" alt="" v-else-if="grade.risk===6">
                <img src="../assets/img/number-blue/number-blue/n7.png" alt="" v-else-if="grade.risk===7">
                <img src="../assets/img/number-blue/number-blue/n8.png" alt="" v-else-if="grade.risk===8">
                <img src="../assets/img/number-blue/number-blue/n9.png" alt="" v-else-if="grade.risk===9">
            </div>
            <div class="text">名</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'num-grade',
    data(){
        return{
            grade:'',
            num:[]
        }
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
.num{
    margin-left: 7px;
    width: 77px;
    height: 55px;
}
.num-box{
    width: 22px;
    height: 40px;
}
.num div{
    float: left;
    margin-right: 5px;
}
.pic{
    color: #fff;
    margin-top: 14px;
    font-size: 19px;
}
.grade{
    position: absolute;
    bottom: 5px;
    width: 77px;
    height: 25px;
    color:#32C5FF;
    background: url('../assets/img/Rectangle 5.png') no-repeat;
    background-size: cover;
}
.risk{
    margin: 0 4px;
}
.grade-box{
    position: absolute;
    width: 65px;
    left:50%;
    transform: translate(-30%,0);
    height: 19px;
}
.grade-box div{
    float: left;
}
</style>