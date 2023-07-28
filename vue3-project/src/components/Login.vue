<template>
    <div class="login">

        <div class="form">
            <div class="form_head">
                <img src="/src/assets/images/logo.png" alt="">
                <span>赤兔养车</span>
            </div>
            <div class="loginFrom" v-if="isLogin">
                <el-form ref="ruleFormRef" label-position="top" size="large" :model="ruleForm" :rules="rules"
                    label-width="330px" class="demo-ruleForm">
                    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" :stretch="true">
                        <el-tab-pane label="账号密码登录" name="first">
                            <template #label>
                                <span class="custom-tabs-label">
                                    <el-icon>
                                        <calendar />
                                    </el-icon>
                                    <span>账号密码登录</span>
                                </span>
                            </template>
                            <el-form-item label="用户名" prop="user">
                                <el-input v-model.number="ruleForm.user" />
                            </el-form-item>
                            <el-form-item label="密码" prop="pass">
                                <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
                            </el-form-item>
                        </el-tab-pane>
                        <el-tab-pane label="手机号登录" name="second">
                            <template #label>
                                <span class="custom-tabs-label">
                                    <el-icon>
                                        <calendar />
                                    </el-icon>
                                    <span>手机号登录</span>
                                </span>
                            </template>
                            <el-form-item label="手机号" prop="user">
                                <el-input v-model.number="ruleForm.user" />
                            </el-form-item>
                            <el-form-item label="验证码" prop="pass">
                                <div class="code">
                                    <div class="codeInput">
                                        <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
                                    </div>
                                    <el-button>获取验证码</el-button>
                                </div>
                            </el-form-item>
                        </el-tab-pane>
                    </el-tabs>
                    <el-form-item>
                        <el-button type="success" round @click="submitForm(ruleFormRef)">登录</el-button>
                    </el-form-item>
                </el-form>
                <div class="divider"></div>
                <div class="toLogin">
                    <span>没有账号？</span>
                    <span class="toRegister">去注册</span>
                </div>
                <div class="moveIn" @click="toMoveIn">商家入驻</div>
            </div>
            <div class="moveInFrom" v-if="!isLogin">
                <el-form ref="ruleFormRef2" label-position="top" size="large" :model="ruleForm2" :rules="rules2"
                    label-width="330px" class="demo-ruleForm">
                    <el-form-item label="商铺类型">
                        <el-radio-group v-model="ruleForm2.type">
                            <el-radio label="充电站" />
                            <el-radio label="其他" />
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="店铺名" prop="user">
                        <el-input v-model.number="ruleForm2.shopName" />
                    </el-form-item>
                    <el-form-item label="手机号" prop="user">
                        <el-input v-model.number="ruleForm2.phone" />
                    </el-form-item>
                    <el-form-item label="店铺地址" prop="user">
                        <el-input v-model.number="ruleForm2.address" />
                    </el-form-item>
                    <el-form-item label="注册人" prop="user">
                        <el-input v-model.number="ruleForm2.name" />
                    </el-form-item>
                    <el-form-item label="身份证号" prop="user">
                        <el-input v-model.number="ruleForm2.idCard" />
                    </el-form-item>
                    <el-form-item label="身份证照片" prop="user">
                        <el-upload class="avatar-uploader"
                            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" :show-file-list="false"
                            :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                            <el-icon v-else class="avatar-uploader-icon">
                                <Plus />
                            </el-icon>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="营业执照编号" prop="user">
                        <el-input v-model.number="ruleForm2.businessLicense" />
                    </el-form-item>
                    <el-form-item label="营业执照照片" prop="user">
                        <el-upload class="avatar-uploader"
                            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" :show-file-list="false"
                            :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                            <el-icon v-else class="avatar-uploader-icon">
                                <Plus />
                            </el-icon>
                        </el-upload>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="success" round @click="submitForm2(ruleFormRef2)">立即申请</el-button>
                        <span class="hasAccount" @click="toLogin">使用已有账户登录</span>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import type { UploadProps } from 'element-plus'
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules, TabsPaneContext } from 'element-plus'
import router from '@/router'
const isLogin = ref(true)
const ruleFormRef = ref<FormInstance>()
const ruleFormRef2 = ref<FormInstance>()

const checkUser = (_rule: any, value: any, callback: any) => {
    if (!value) {
        return callback(new Error('请输入账号'))
    } else {
        return callback()
    }
}

const validatePass = (_rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入密码'))
    } else {
        callback()
    }
}

const ruleForm = reactive({
    pass: '',
    user: '',
})
const ruleForm2 = reactive({
    type: true,
    shopName: '',
    phone: '',
    address: '',
    name: '',
    idCard: '',
    idCardImg: '',
    businessLicense: '',
    businessLicenseImg: ''
})

const rules = reactive<FormRules<typeof ruleForm>>({
    pass: [{ validator: validatePass, trigger: 'blur' }],
    user: [{ validator: checkUser, trigger: 'blur' }],
})
const rules2 = reactive<FormRules<typeof ruleForm2>>({
    type: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }],
    shopName: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }],
    phone: [{ required: true, trigger: 'blur' }],
    address: [{ required: true, trigger: 'blur' }],
    name: [{ required: true, trigger: 'blur' }],
    idCard: [{ required: true, trigger: 'blur' }],
    idCardImg: [{ required: true, trigger: 'blur' }],
    businessLicense: [{ required: true, trigger: 'blur' }],
    businessLicenseImg: [{ required: true, trigger: 'blur' }]
})
const toMoveIn = () => {
    isLogin.value = false
}
const toLogin = () => {
    isLogin.value = true
}

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!', ruleForm)
            router.push('/home')
        } else {
            console.log('error submit!')
            return false
        }
    })
}
const submitForm2 = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!', ruleForm2)
        } else {
            console.log('error submit!')
            return false
        }
    })
}
/**
 * 上传图片
 */
const imageUrl = ref('')

const handleAvatarSuccess: UploadProps['onSuccess'] = (
    // response,
    uploadFile
) => {
    imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
    if (rawFile.type !== 'image/jpeg') {
        ElMessage.error('Avatar picture must be JPG format!')
        return false
    } else if (rawFile.size / 1024 / 1024 > 2) {
        ElMessage.error('Avatar picture size can not exceed 2MB!')
        return false
    }
    return true
}
//tabbar
const activeName = ref('first')
const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}
</script>
<style lang="scss" scoped>
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #141414;

    .form {
        width: 730px;
        padding: 0 180px;
        box-sizing: border-box;
        background-color: #000;
        border-radius: 10px;

        .form_head {
            display: flex;
            justify-content: center;
            color: #fff;
            font-size: 28px;
            font-weight: bold;
            align-items: center;
            margin-bottom: 20px;

            img {
                width: 40px;
                height: 20px;
                margin-right: 10px;
            }
        }

        .moveInFrom {
            :deep(.el-button.is-round) {
                width: 50%;
                background-color: #1ed760;
                color: #000;
                font-size: 16px;
                font-weight: bold;

            }
        }

        .loginFrom {
            .code {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .codeInput {
                    flex-grow: 1;
                    margin-right: 15px;
                }
            }

            :deep(.el-button.is-round) {
                width: 100%;
                background-color: #1ed760;
                color: #000;
                font-size: 16px;
                font-weight: bold;

            }
        }

        :deep(.el-form-item__label) {
            color: #fff;
            font-size: 16px;
            font-weight: bold;
        }



        .hasAccount {
            margin-left: 50px;
            color: #fff;
        }

        :deep(.el-upload) {
            background-color: #1b1b1a;
        }

        .avatar-uploader .el-upload {
            border: 1px dashed var(--el-border-color);
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            transition: var(--el-transition-duration-fast);
        }

        .avatar-uploader .el-upload:hover {
            border-color: var(--el-color-primary);
        }

        .el-icon.avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 100px;
            height: 100px;
            text-align: center;
        }

        .avatar-uploader .avatar {
            width: 178px;
            height: 178px;
            display: block;
        }
    }

    .divider {
        margin: 40px 0;
        height: 1px;
        background-color: rgb(41, 41, 41);
    }

    .toLogin {
        text-align: center;
        color: #a7a7a7;

        .toRegister {
            color: #fff;
            text-decoration: underline;
        }
    }

    .moveIn {
        color: #fff;
        text-align: right;
        margin-top: 10px;
    }

}
</style>