<script setup lang="ts">
  // The name of the component can be set using defineOptions
  defineOptions({
    name: 'App'
  });

  import { useThingtore } from '@/store/thing';
  import Routes from '@/router/Routes.vue';

  const thingStore = useThingtore();

</script>

<template>
    <h1>Hello App!</h1>

    <h2>{{ thingStore.name }}</h2>
  <!-- <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p> -->
  <!-- <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav> -->
  <Routes></Routes>
  <main>
    <RouterView />
  </main>

</template>

<style scoped>
  .app {
    text-align: center;
    padding: 20px;
    font-size: 18px;
    color: #2c3e50;
  }
</style>
