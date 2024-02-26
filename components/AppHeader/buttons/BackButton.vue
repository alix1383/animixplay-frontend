<template>
  <button type="button" @click="goToPrev()" title="Back">
    <Icon name="heroicons:chevron-left" class="transition-colors hover:text-white" />
  </button>
</template>

<script setup lang="ts">
const router = useRouter();
function goToPrev() {
  router.go(-1);
}
</script>
