<template>
    <ul class="mt-4 flex flex-row flex-wrap justify-around gap-2">
        <li
            v-for="anime in animeData"
            class="max-w-44 basis-1/2 cursor-pointer border-2 border-solid border-[#222222] bg-[#2c2c2c] p-1 transition-all hover:brightness-50 md:basis-1/4 lg:basis-1/6"
        >
            <NuxtLink :to="`/anime/${anime.myAnimeList.id}/watch/${anime.ep}`">
                <div class="relative max-w-44">
                    <img class="h-60 w-full" :src="`${runtimeConfig.public.srcBase}/img/gogo/${anime.imageFileName}`" />
                    <div
                        class="absolute top-0 inline-flex items-center rounded-br-lg px-2 backdrop-blur-lg backdrop-brightness-50"
                    >
                        {{ anime.myAnimeList.score }}
                        <Icon name="heroicons:star-solid" class="ml-1 text-yellow-400" size="18px" />
                    </div>
                    <div class="absolute bottom-0 right-0 rounded-tl-lg px-2 backdrop-blur-lg backdrop-brightness-50">
                        {{ anime.myAnimeList.type }}
                    </div>
                </div>
                <div>
                    <p class="mt-2 line-clamp-2 h-10 max-w-40 text-ellipsis text-center text-sm">
                        {{ anime.name }}
                    </p>
                    <p class="mb-1 text-center">EP: {{ anime.ep }}/{{ anime.myAnimeList.eps || '?' }}</p>
                </div>
            </NuxtLink>
        </li>
    </ul>
</template>

<script setup lang="ts">
import axios from 'axios';
const runtimeConfig = useRuntimeConfig();

const apiReq = await axios.get(runtimeConfig.public.apiBase + '/v1/anime/recent');

type RecentAnime = {
    [key: number]: {
        name: string;
        imageFileName: string;
        watchUrl: string;
        ep: number;
        myAnimeList: {
            title: string;
            id: number;
            eps: number | null;
            score: number;
            type: string;
        };
    };
};

const animeData: RecentAnime = apiReq.data;
</script>
