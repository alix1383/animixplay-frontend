<template>
    <div class="relative w-full">
        <div v-for="(item, index) in topAnimeData" :key="index">
            <div v-show="index == showItem">
                <div class="h-40 overflow-hidden brightness-50">
                    <img
                        class="h-full w-full object-cover blur-xl"
                        :src="imgUri + item.imageFileName"
                        :alt="item.name"
                        decoding="async"
                    />
                </div>
                <div class="absolute top-0 h-40 w-auto">
                    <img
                        class="aspect-auto h-full w-full align-middle"
                        :src="imgUri + item.imageFileName"
                        :alt="item.name"
                        decoding="async"
                    />
                </div>
                <div class="absolute inset-x-0 left-32 top-2 flex flex-col pr-5">
                    <div
                        class="max-h-5 cursor-pointer overflow-hidden text-ellipsis text-nowrap text-sm text-[#a7ccea] transition-colors hover:text-[#d9eeff]"
                    >
                        <NuxtLink :to="`/anime/${item.ids.myanimelist}`">
                            {{ item.name }}
                        </NuxtLink>
                    </div>
                    <div class="my-4 h-16 max-h-16 overflow-hidden text-ellipsis text-xs text-[#a5a5a5]">
                        {{ item.animeSummary.markdown }}
                    </div>
                    <div class="flex items-center justify-between text-[#a5a5a5]">
                        <div class="flex items-center text-xs">
                            <Icon name="heroicons:tag" class="mr-1" size="25px" />
                            <p class="max-w-32 overflow-hidden text-ellipsis text-nowrap sm:max-w-full">
                                {{ mergeTags(item.animeSummary.tags) }}
                            </p>
                        </div>
                        <div class="flex items-center text-[#7893aa]">
                            <Icon
                                name="heroicons:chevron-left"
                                @click="previous"
                                class="cursor-pointer transition-colors hover:text-white"
                            />
                            <Icon
                                name="heroicons:chevron-right"
                                @click="next"
                                class="cursor-pointer transition-colors hover:text-white"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
type TopAnimeData = {
    name: string;
    ids: {
        anilist: number | null;
        myanimelist: number;
        anidb: number | null;
        animeplanet: string | null;
        anisearch: number | null;
        kitsu: number | null;
        livechart: number;
    };
    imageFileName: string;
    animeSummary: {
        tags: Array<string>;
        markdown: string;
    };
};
const runtimeConfig = useRuntimeConfig();

const imgUri: String = `${runtimeConfig.public.srcBase}/img/liveChart/`;

import { ref } from 'vue';
import axios from 'axios';

const apiData = await axios.get(runtimeConfig.public.apiBase + '/v1/anime/top');
const topAnimeData: TopAnimeData[] = apiData.data;
console.log(topAnimeData);

const showItem = ref(1);

function mergeTags(tags: Array<string>): string {
    return tags.join(', ');
}

setInterval(next, 15 * 1000);

function next(): void {
    if (showItem.value > 9) {
        showItem.value = 1;
    } else {
        showItem.value++;
    }
}

function previous(): void {
    if (showItem.value < 2) {
        showItem.value = 10;
    } else {
        showItem.value--;
    }
}
</script>
