<template>
    <div class="flex flex-col">
        <!-- Top Anime -->
        <div class="flex flex-1 flex-col gap-2">
            <TopAnimeLoading v-if="pendingTop" />
            <div v-else>
                <ClientOnly>
                    <TopAnime />
                </ClientOnly>
            </div>

            <InfoSection />
        </div>
        <!-- Recent Anime -->
        <RecentAnimeLoading v-if="pendingRecent" />
        <div v-else>
            <ClientOnly>
                <RecentAnime />
            </ClientOnly>
        </div>
    </div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
const topAnimeStore = useTopAnimeStore();
const recentAnimeStore = useRecentAnimeStore();

useSeoMeta({
    title: 'AniMixPlay - Reborn Project',
    ogTitle: 'AniMixPlay - Reborn Project',
    description: 'This is not official AniMixPlay site. The real name of this site is "AniMixPlay Reborn Project".',
    ogDescription: 'This is not official AniMixPlay site. The real name of this site is "AniMixPlay Reborn Project".',
});

// import topSide
import InfoSection from '@/components/views/index/InfoSection.vue';
import TopAnime from '@/components/views/index/TopAnime/TopAnime.vue';
import TopAnimeLoading from '@/components/views/index/TopAnime/TopAnimeLoading.vue';

const { pending: pendingTop } = await useFetch(`${runtimeConfig.public.apiBase}/v1/anime/top`, {
    lazy: true,
    server: false,
    cache: 'no-cache',
    onResponse: (r) => {
        if (r.response.ok && r.response.status == 200) {
            topAnimeStore.data = r.response._data;
        }
    },
});

// import recent anime
import RecentAnime from '@/components/views/index/RecentAnime/RecentAnime.vue';
import RecentAnimeLoading from '@/components/views/index/RecentAnime/RecentAnimeLoading.vue';

const { pending: pendingRecent } = await useFetch(`${runtimeConfig.public.apiBase}/v1/anime/recent`, {
    lazy: true,
    server: false,
    cache: 'no-cache',
    onResponse: (r) => {
        if (r.response.ok && r.response.status == 200) {
            recentAnimeStore.data = r.response._data;
        }
    },
});
</script>
