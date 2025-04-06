<script setup lang="ts">
  defineOptions({
    name: 'Login'
  });

import router from '@/router';
  import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  userName: '',
  password: '',
})

const onSubmit = () => {
  //console.log('submit!')
  // 直接跳转主页面
  // 这里可以使用router.push({ path: '/productInfo' })来跳转

  router.push({ path: '/Home' });
}
</script>

<template>
   <el-form :model="form" label-width="auto" style="max-width: 600px">
    <el-form-item label="User Name">
      <el-input v-model="form.userName" />
    </el-form-item>
    <el-form-item label="Password">
      <el-input v-model="form.password" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">Login</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>
</style>
