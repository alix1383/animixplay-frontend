<template>
  <div class="flex items-center justify-between lg:hidden">
    <SearchInput v-show="showSearchBar" />

    <icon
      name="heroicons:magnifying-glass"
      v-show="!showSearchBar"
      class="transition-colors hover:text-white"
      @click="showSearchBar = true"
    />

    <Icon
      name="heroicons:x-mark"
      v-show="showSearchBar"
      class="transition-colors hover:text-white"
      @click="showSearchBar = false"
    />

    <Icon name="heroicons:bars-3" class="transition-colors hover:text-white" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SearchInput from './SearchInput.vue';
const showSearchBar = ref<boolean>(false);
</script>
