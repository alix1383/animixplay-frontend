<template>
    <header
        class="fixed inset-x-0 z-10 rounded-b-3xl backdrop-blur-md backdrop-brightness-50 transition-all lg:mx-[calc(50%-490px)] xl:mx-[calc(50%-620px)]"
    >
        <div class="flex h-14 items-center justify-between px-5 py-2">
            <div class="flex flex-1 items-center">
                <!-- Back button -->
                <BackButton />
                <!-- Home button -->
                <HomeButton />
                <!-- logo(Home button)-->
                <LogoButton />

                <div class="ml-5 hidden items-center transition-all lg:flex">
                    <SearchInput />
                    <!-- TODO Maybe add it later -->
                    <!-- <a href="" class="flex items-center text-2xl transition-colors hover:text-white">
                          <FilmIcon class="mx-2 h-6 w-6" />
                          <h2>Random</h2>
                      </a>
  
                      <a href="" class="flex items-center text-2xl transition-colors hover:text-white">
                          <QueueListIcon class="mx-2 h-6 w-6" />
                          <h2>List</h2>
                      </a> -->
                </div>
            </div>

            <!-- Mobile Search Bar and Menu icon -->
            <MobileButtons />
        </div>
    </header>
</template>

<script setup lang="ts">
import SearchInput from './partials/SearchInput.vue';
import LogoButton from './buttons/LogoButton.vue';
import BackButton from './buttons/BackButton.vue';
import HomeButton from './buttons/HomeButton.vue';
import MobileButtons from './partials/MobileButtons.vue';
</script>

<style scoped></style>
