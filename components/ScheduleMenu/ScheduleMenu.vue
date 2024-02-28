<template>
    <div
        v-touch:swipe.left="swipeLeftHandler"
        v-show="scheduleMenuStore.scheduleMenuStatus === 'OPEN'"
        @click="scheduleMenuStore.scheduleMenuStatus = 'CLOSE'"
        class="fixed inset-0 z-40 backdrop-blur backdrop-brightness-50 transition-all duration-1000"
    ></div>
    <div>
        <div
            v-touch:swipe.left="swipeLeftHandler"
            :class="{
                '-left-full w-0': scheduleMenuStore.scheduleMenuStatus === 'CLOSE',
                'left-0 w-full': scheduleMenuStore.scheduleMenuStatus === 'OPEN',
            }"
            class="fixed top-0 z-50 flex h-full max-w-[450px] flex-col overflow-y-scroll scroll-smooth border-r border-r-[#2f2f2f] bg-[#191919] py-4 text-white transition-all duration-1000 scrollbar-hide lg:w-[370px]"
        >
            <!-- Top Side Menu (info like TZ, clock, etc...) -->
            <Information />
            <!-- Week Days -->

            <AnimeLoading v-if="pending" />
            <div v-else>
                <ClientOnly>
                    <WeekDays />
                </ClientOnly>
            </div>
            <!-- <Suspense>
                <WeekDays />

                <template #fallback>
                    <AnimeLoading />
                </template>
            </Suspense> -->

            <div class="bottom-0 mx-7 my-2 bg-[#333324] p-1 text-center">Release time is estimated</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import WeekDays from './components/WeekDays.vue';
import AnimeLoading from './layouts/AnimeLoading.vue';
import Information from './layouts/Information.vue';

const runtimeConfig = useRuntimeConfig();
const scheduleMenuStore = useScheduleMenuStore();

const { pending } = await useFetch(`${runtimeConfig.public.apiBase}/v1/anime/schedule`, {
    lazy: true,
    server: false,
    cache: 'no-cache',
    onResponse: (r) => {
        if (r.response.ok && r.response.status == 200) {
            scheduleMenuStore.data = r.response._data;
        }
    },
});

function swipeLeftHandler() {
    scheduleMenuStore.scheduleMenuStatus = 'CLOSE';
}
</script>
