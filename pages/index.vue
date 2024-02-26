<template>
    <div class="flex flex-col">
        <!-- Top Anime -->
        <div class="flex flex-1 flex-col gap-2">
            <Suspense>
                <TopAnime />
                <template #fallback>
                    <TopAnimeLoading />
                </template>
            </Suspense>

            <InfoSection />
        </div>

        <Suspense>
            <RecentAnime />

            <template #fallback>
                <!-- TODO improve loading animation -->
                <RecentAnimeLoading />
            </template>
        </Suspense>
    </div>
</template>

<script lang="ts" setup>
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

// import recent anime
import RecentAnime from '@/components/views/index/RecentAnime/RecentAnime.vue';
import RecentAnimeLoading from '@/components/views/index/RecentAnime/RecentAnimeLoading.vue';
</script>
