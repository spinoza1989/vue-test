<script setup lang="ts">
  // The name of the component can be set using defineOptions
  defineOptions({
    name: 'Routes'
  });

import { useThingtore } from '@/store/thing'
import type { UserInfo } from '@/types/model';

let thingStore = useThingtore();

//console.log(thingStore.name);



let userinfo: UserInfo = { name: '小明', age: 18, permissions: ['admin'] };
let routeList = [];
  if (userinfo) {
    // 获取路由信息
    let permissions = userinfo.permissions;
    // 如果没有权限，跳转到403页面
    if (permissions.includes('admin')) {
      //router.addRoute({ path: '/productInfo', component: productInfoView })
      routeList.push("/productInfo");
    }
  }
</script>

<template>
     <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
    <!-- 根据routeList遍历生成RouterLink  -->
    <RouterLink v-for="(item, index) in routeList" :key="index" :to="item">
      Go to {{ item }}
    </RouterLink>
  </nav>

</template>

<style scoped>
</style>
