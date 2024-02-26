<template>
    <div
        v-touch:swipe.left="swipeLeftHandler"
        v-show="menuStatus.scheduleMenuStatus === 'OPEN'"
        @click="menuStatus.scheduleMenuStatus = 'CLOSE'"
        class="fixed inset-0 z-40 backdrop-blur backdrop-brightness-50 transition-all duration-1000"
    ></div>
    <div>
        <div
            v-touch:swipe.left="swipeLeftHandler"
            :class="{
                '-left-full w-0': menuStatus.scheduleMenuStatus === 'CLOSE',
                'left-0 w-full': menuStatus.scheduleMenuStatus === 'OPEN',
            }"
            class="scrollbar-hide fixed top-0 z-50 flex h-full max-w-[450px] flex-col overflow-y-scroll scroll-smooth border-r border-r-[#2f2f2f] bg-[#191919] py-4 text-white transition-all duration-1000 lg:w-[370px]"
        >
            <!-- Top Side Menu (info like TZ, clock, etc...) -->
            <Information />
            <!-- Week Days -->
            <Suspense>
                <WeekDays />

                <template #fallback>
                    <AnimeLoading />
                </template>
            </Suspense>

            <div class="bottom-0 mx-7 my-2 bg-[#333324] p-1 text-center">Release time is estimated</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import WeekDays from './components/WeekDays.vue';
import AnimeLoading from './layouts/AnimeLoading.vue';
import Information from './layouts/Information.vue';

const menuStatus = useMenuStore();

function swipeLeftHandler() {
    menuStatus.scheduleMenuStatus = 'CLOSE';
}
</script>
