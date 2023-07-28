<script setup lang='ts'>
import { ElTable } from 'element-plus'
const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const handleSelectionChange = (val: any) => {
    $emit('getTotal', val)
}
interface Goods {
    id: number;
    name: string;
    price: number;
    imgSrc: string;
    num?: number;
}
/**
 * props
 *
 */
defineProps<{ cartData: Goods[] }>()
const $emit = defineEmits(["addNum", "multiNum", 'deleteCart', 'getTotal'])
</script>


<template>
    <el-table ref="multipleTableRef" :data="cartData" style="width: 100%;text-align: center;"
        @selection-change="handleSelectionChange" :row-style="{ height: '80px' }">
        <el-table-column type="selection" width="55" />
        <el-table-column label="名称">
            <template #default="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column label="价格">
            <template #default="scope">￥{{ scope.row.price }}</template>
        </el-table-column>
        <el-table-column label="数量">

            <template #default="scope">
                <el-button type="info" @click="$emit('addNum', scope.row)">+</el-button>
                {{ scope.row.num }}
                <el-button type="info" @click="$emit('multiNum', scope.row)">-</el-button>
            </template>

        </el-table-column>
        <el-table-column property="address" label="操作">
            <template #default="scope">
                <el-button type="primary" @click="$emit('deleteCart', scope.row)">删除</el-button>
            </template>

        </el-table-column>
    </el-table>
</template>

<style scoped lang="scss">
:deep(.el-button) {
    background-color: #1ed760;
    border: none;
}
</style>