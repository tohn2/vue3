<script setup lang='ts'>
import { useRouter } from 'vue-router'
import {
    Menu as IconMenu,
    Fold,
    Setting
} from '@element-plus/icons-vue'
const router = useRouter()
const asideSwitch = () => {
    isCollapse.value = !isCollapse.value
}
const isCollapse = ref(false)
const logOut = () => {
    router.push('/login')
}
</script>


<template>
    <div class="login">
        <el-container style="min-height: 100vh;">
            <el-aside width="auto">
                <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#000" text-color="#a9a6a9"
                    active-text-color="#fff" :collapse="isCollapse">
                    <el-menu-item-group title="赤兔养车">
                    </el-menu-item-group>
                    <el-sub-menu index="1">
                        <template #title>
                            <el-icon><icon-menu /></el-icon>
                            <span>系统管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">用户管理</el-menu-item>
                            <el-menu-item index="1-2">角色管理</el-menu-item>
                            <el-menu-item index="1-3">菜单管理</el-menu-item>
                            <el-menu-item index="1-4">字典管理</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header>
                    <div class="asideSwitch" @click="asideSwitch"><el-icon>
                            <Fold />
                        </el-icon></div>
                    <div class="user">
                        <div class="toolbar">
                            <el-dropdown>
                                <el-icon style="margin-right: 8px; margin-top: 1px">
                                    <setting />
                                </el-icon>
                                <template #dropdown>
                                    <el-dropdown-menu>
                                        <el-dropdown-item>个人中心</el-dropdown-item>
                                        <el-dropdown-item>密码修改</el-dropdown-item>
                                        <el-dropdown-item>系统定制</el-dropdown-item>
                                        <el-dropdown-item @click="logOut">退出登录</el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                            <span>Tom</span>
                        </div>
                    </div>
                </el-header>
                <el-main>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style lang="scss" scoped>
.login {
    background-color: #1e1e1e;
    color: #fff;

    :deep(.el-aside) {
        font-size: 16px;
    }

    :deep(header) {
        background-color: #000;
        line-height: 60px;
        color: #fff;
        display: flex;
        justify-content: space-between;

        .toolbar {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            right: 20px;
        }
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