<script setup>
import HeroSec from '@/components/HomeViewComp/HeroSec.vue';
import BannersSec from '@/components/HomeViewComp/BannersSec.vue';
import CategorySec from '@/components/HomeViewComp/CategorySec.vue';
import ProductsSec from '@/components/HomeViewComp/ProductsSec.vue';
</script>
<template>
  <HeroSec/>
  <BannersSec/>
  <CategorySec />
  <ProductsSec limit="4" />
</template>
