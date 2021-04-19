<template>
    <div>
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
        <div class="num">
            <div class="num-box" v-for='(item,index) in num' :key=index>
                <img src="../assets/img/number-blue/number-blue/n0.png" alt="" v-if="item===0||item===''">
                <img src="../assets/img/number-blue/number-blue/n1.png" alt="" v-else-if="item==='1'">
                <img src="../assets/img/number-blue/number-blue/n2.png" alt="" v-else-if="item==='2'">
                <img src="../assets/img/number-blue/number-blue/n3.png" alt="" v-else-if="item==='3'">
                <img src="../assets/img/number-blue/number-blue/n4.png" alt="" v-else-if="item==='4'">
                <img src="../assets/img/number-blue/number-blue/n5.png" alt="" v-else-if="item==='5'">
                <img src="../assets/img/number-blue/number-blue/n6.png" alt="" v-else-if="item==='6'">
                <img src="../assets/img/number-blue/number-blue/n7.png" alt="" v-else-if="item==='7'">
                <img src="../assets/img/number-blue/number-blue/n8.png" alt="" v-else-if="item==='8'">
                <img src="../assets/img/number-blue/number-blue/n9.png" alt="" v-else-if="item==='9'">
            </div>
            <div class="pic">
                %
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
.grade-box{
    color:#32C5FF;
    line-height: 19px;
}
.grade-box div{
    float: left;
    line-height: 19px;
    margin-right: 4px;
}
.num{
    position: absolute;
    width: 36px;
    height: 19px;
    right: 0;
}
.num-box{
    float: left;
    width: 9px;
    height: 15px;
    margin-left: 2px;
}
.pic{
    margin-left: 2px;
    color: #32C5FF;
    margin-top: 8px;
    font-size: 8px;
}
</style>