<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <section class="text-center flex flex-col justify-center items-center h-96">
    <i  class="pi pi-exclamation-triangle text-yellow-500 text-9xl! mb-5"></i>
    <h1 class="text-6xl font-bold mb-4">404 Not Found</h1>
    <p class="text-xl mb-5">This page does not exist</p>
    <div class="text-white bg-black hover:bg-gray-900 rounded-md px-3 py-2 mt-4 ">
      <router-link to="/" >GO Back</router-link>
    </div>
  </section>
</template>

