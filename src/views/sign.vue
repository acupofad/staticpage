<template>
    <div class=box>
        <div class='box1'>
            <div class='r1'></div>
            <div class=text1>总批次数</div>
        </div>
        <div class='box2'>
            <div class='r2'></div>
            <div class=text2>不合格批次数</div>
        </div>
    </div>
</template>

<style scoped>
.r1{
    position: absolute;
    margin-top: 3px;
    border: 6px solid #32C5FF;
    border-radius: 6px;
}
.r2{
    position: absolute;
    margin-top: 3px;
    border: 6px solid #FF7D26;
    border-radius: 6px;
}
.box1,
.box2{
    float: left;
}
.box2{
    margin-left: 10px;
}
.text1,
.text2{
    margin-left: 18px;
    color: #80899e;
    font-size: 13px;
    line-height: 19px;
}
</style>