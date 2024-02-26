<template>
  <div
    class="flex max-h-10 w-auto max-w-60 rounded border border-solid border-[#ffffff14] bg-[#00000033] text-base transition-colors focus-within:border-[#49cbff85]"
  >
    <input
      type="search"
      autocomplete="off"
      placeholder="Search"
      class="w-full bg-inherit px-1 text-left capitalize text-white outline-none"
      name="search"
      id="search-bar"
    />
    <button>
      <icon name="heroicons:magnifying-glass" class="mx-1 transition-colors hover:text-white active:text-red-500" />
    </button>
  </div>
</template>
<script setup lang="ts"></script>
