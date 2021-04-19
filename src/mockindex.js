var Mock = require('mockjs')
// const data = Mock.mock({
//     "string|4": "aihishd"
//     string: '@cword(3,10)',
//     title: '@ctitle(3,10)',
//     sentence: '@csentence(3,10)',
//     content: '@cparagraph(3,10)',
//     'number|1-100': 10,
//     id: '@increment(1)',
//     name: '@cname(3,10)',
//     idcard: '@id()',
//     address: '@city(true)',
//     img_url:'@image("200x100","#136724","red","png","eywgf")'
//     date: '@date(yyyy-MM-dd hh:mm:ss)',
//     "newlist|8-20": [
//         {
//             name: '@cname(3,10)',
//             address: '@city(true)',
//             idcard: '@id()',
//         }
//     ]
// })
Mock.mock('/api/examin1', 'get', {
    status: 200,
    msg: '获取数据成功',
    result: {
        item1: {
            cate: '化学药',
            total: 47398,
            num:234
        },
        item2: {
            cate: '中成药',
            total: 47398,
            num:234
        },
        item3: {
            cate: '中饮药片',
            total: 47398,
            num:234
        },
    }
})
Mock.mock('/api/class', 'get', {
    status: 200,
    msg: '获取数据成功',
    result:{
        item1:{
            production: '杭州*******医院',
            name: '去甲肾上腺素',
            number: 9843594,
            acount:849
        },
        item2:{
            production: '杭州*******医院',
            name: '去甲肾上腺素',
            number: 9843594,
            acount:849
        },
        item3:{
            production: '杭州*******医院',
            name: '去甲肾上腺素',
            number: 9843594,
            acount:849
        },
        item4:{
            production: '杭州*******医院',
            name: '去甲肾上腺素',
            number: 9843594,
            acount:849
        },
        item5:{
            production: '杭州*******医院',
            name: '去甲肾上腺素',
            number: 9843594,
            acount:849
        },
        item6:{
            production: '杭州*******医院',
            name: '去甲肾上腺素',
            number: 9843594,
            acount:849
        },
        item7:{
            production: '杭州*******医院',
            name: '去甲肾上腺素',
            number: 9843594,
            acount:849
        },
        item8:{
            production: '杭州*******医院',
            name: '去甲肾上腺素',
            number: 9843594,
            acount:849
        },
        item9:{
            production: '杭州*******医院',
            name: '去甲肾上腺素',
            number: 9843594,
            acount:849
        },
    }
})
Mock.mock('/api/risk', 'get', {
    status: 200,
    msg: '获取数据成功',
    result: {
        item1: {
            production: '杭州某某制药厂',
            region: '浙江',
            name:'去甲肾上腺素',
            num:234275736
        },
        item2: {
            production: '杭州某某制药厂',
            region: '浙江',
            name:'去甲肾上腺素',
            num:234275736
        },
        item3: {
            production: '杭州某某制药厂',
            region: '浙江',
            name:'去甲肾上腺素',
            num:234275736
        },
        item4: {
            production: '杭州某某制药厂',
            region: '浙江',
            name:'去甲肾上腺素',
            num:234275736
        },
        item5: {
            production: '杭州某某制药厂',
            region: '浙江',
            name:'去甲肾上腺素',
            num:234275736
        },
    }
})
Mock.mock('/api/news', 'post',() => {
    return {
        status: 200,
        msg:'获取数据成功'
    }
})
Mock.mock('/api/med', 'get', {
    status: 200,
    msg: '获取数据成功',
    result: {
        item1: [
            {
                id: 1,
                name: '醋酸甲羟孕酮——安宫黄铜',
                rate: 80,
                num:3243
            },
            {
                id: 2,
                name: '醋酸甲羟孕酮——安宫黄铜',
                rate: 60,
                num:3243
            },
            {
                id: 3,
                name: '醋酸甲羟孕酮——安宫黄铜',
                rate: 40,
                num:3243
            },
            {
                id: 4,
                name: '醋酸甲羟孕酮——安宫黄铜',
                rate: 50,
                num:3243
            },
            {
                id: 5,
                name: '醋酸甲羟孕酮——安宫黄铜',
                rate: 20,
                num:3243
            },
            
        ],
        item2: [
            {
                id: 1,
                name: '醋酸甲羟孕酮——安宫黄铜',
                rate: 80,
                num:3243
            },
            {
                id: 2,
                name: '醋酸甲羟孕酮——安宫黄铜',
                rate: 45,
                num:3243
            },
            {
                id: 3,
                name: '醋酸甲羟孕酮——安宫黄铜',
                rate: 56,
                num:3243
            },
            {
                id: 4,
                name: '醋酸甲羟孕酮——安宫黄铜',
                rate: 90,
                num:3243
            },
            {
                id: 5,
                name: '醋酸甲羟孕酮——安宫黄铜',
                rate: 10,
                num:3243
            },
            
        ],
        item3: [
            {
                id: 1,
                name: '醋酸甲羟孕酮——安宫黄铜',
                rate: 60,
                num:3243
            },
            {
                id: 2,
                name: '醋酸甲羟孕酮——安宫黄铜',
                rate: 70,
                num:3243
            },
            {
                id: 3,
                name: '醋酸甲羟孕酮——安宫黄铜',
                rate: 30,
                num:3243
            },
            {
                id: 4,
                name: '醋酸甲羟孕酮——安宫黄铜',
                rate: 80,
                num:3243
            },
            {
                id: 5,
                name: '醋酸甲羟孕酮——安宫黄铜',
                rate: 88,
                num:3243
            },
            
        ],
    }
})
Mock.mock('/api/data', 'get',() => {
    return {
        status: 200,
        msg: '获取数据成功',
        result: [{
            date: '2021/04/12',
            num1: 2763,
            num2: 3874,
            num3: 5894,
            state:'待审核'
            },
            {
            date: '2021/04/12',
            num1: 2763,
            num2: 3874,
            num3: 5894,
            state:'已发布'
            },
            {
                date: '2021/04/12',
                num1: 2763,
                num2: 3874,
                num3: 5894,
                state:'待审核'
            },
            {
                date: '2021/04/12',
                num1: 2763,
                num2: 3874,
                num3: 5894,
                state:'已发布'
            },
            {
                date: '2021/04/12',
                num1: 2763,
                num2: 3874,
                num3: 5894,
                state:'待审核'
            },
            {
                date: '2021/04/12',
                num1: 2763,
                num2: 3874,
                num3: 5894,
                state:'需要修订'
            },
            {
                date: '2021/04/12',
                num1: 2763,
                num2: 3874,
                num3: 5894,
                state:'待审核'
            },
            {
                date: '2021/04/12',
                num1: 2763,
                num2: 3874,
                num3: 5894,
                state:'需要修订'
            },
            {
                date: '2021/04/12',
                num1: 2763,
                num2: 3874,
                num3: 5894,
                state:'已发布'
            },
        ]
    }
})
Mock.mock('/api/grade', 'get', {
    status: 200,
    msg: '获取排名成功',
    result: {
        risk: 6,
        percentage:26
    }
})
Mock.mock('/api/file', 'post', (data)=> {
    return {
        status: 200,
        msg: '获取排名成功',
        data,
    }
})