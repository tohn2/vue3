<script setup lang='ts'>

interface Goods {
    id: number;
    name: string;
    price: number;
    imgSrc: string;
    num?: number;
}

const goodsList = ref<Goods[]>([{ id: 1, name: '商品1', price: 12, imgSrc: '/src/assets/images/img.jpg' },
{ id: 2, name: '商品2', price: 12, imgSrc: '/src/assets/images/img.jpg' },
{ id: 3, name: '商品3', price: 12, imgSrc: '/src/assets/images/img.jpg' },
{ id: 4, name: '商品4', price: 12, imgSrc: '/src/assets/images/img.jpg' },
])
const cartData = ref<Goods[]>([])
const selected = ref<Goods[]>([])
/**
 * 函数
 */
const addCart = (item: Goods) => {
    const index = cartData.value.findIndex((value: Goods) => value.id === item.id)
    if (index === -1) {
        item.num = 1
        cartData.value.push(item)
    } else {
        (<number>cartData.value[index].num)++
    }
}
//添加购物车商品数量
const addNum = (item: Goods) => {
    (<number>item.num)++
}
const multiNum = (item: Goods) => {
    (<number>item.num)--
    if (item.num === 0) {
        const index = cartData.value.findIndex((value: Goods) => value.id === item.id)
        cartData.value.splice(index, 1)
    }
}
//删除
const deleteCart = (item: Goods) => {
    const index = cartData.value.findIndex((value: Goods) => value.id === item.id)
    cartData.value.splice(index, 1)
}
//获取总价
const getTotal = (arr: Goods[]) => {
    selected.value = arr
}
const total = computed(() => {
    let total = 0
    selected.value.forEach((item: Goods) => {
        total += item.price * item.num!
    })
    return total
})
</script>


<template>
    <div class="login">
        <el-container style="    min-height: 100vh;">
            <el-aside width="200px">Aside</el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>
                    <div class="goodsList">
                        <div class="item" v-for="item in goodsList">
                            <img :src="item.imgSrc" alt="">
                            <div class="name">{{ item.name }}</div>
                            <div class="price">￥{{ item.price }}</div>
                            <div class="addCart">
                                <el-button @click="addCart(item)">加入购物车</el-button>
                            </div>
                        </div>
                    </div>
                    <div class="cart">
                        <Table :cartData="cartData" @addNum="addNum" @multiNum="multiNum" @deleteCart="deleteCart"
                            @getTotal="getTotal"></Table>
                        <div class="allPrice">总价：{{ total }}</div>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style lang="scss" scoped>
.login {
    background-color: #1e1e1e;
    color: #fff;

    :deep(header) {
        background-color: #000;
        line-height: 60px;
        color: #fff;
    }

    :deep(.el-aside) {
        background-color: #000;
        color: #fff;
    }


    .goodsList {
        display: flex;
        flex-wrap: wrap;
        background-color: #000;
        border-radius: 10px;

        .item {
            width: 180px;
            height: 280px;
            background-color: #181818;
            margin: 10px;
            border-radius: 10px;
            overflow: hidden;

            img {
                width: 100%;
                height: 160px;
            }

            .name {
                font-size: 16px;
                font-weight: bold;
                margin: 10px 0;
            }

            .price {
                color: red;
                font-size: 16px;
                font-weight: bold;
                margin: 10px 0;
            }

            .addCart {
                text-align: center;
            }
        }
    }

    .cart {
        margin-top: 20px;
        background-color: #000;
        border-radius: 10px;
    }
}
</style>