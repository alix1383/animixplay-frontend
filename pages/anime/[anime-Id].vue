<template>
    <div>
        <!-- Top Level BG Img -->
        <div class="-z-10 h-60 w-full overflow-hidden">
            <img
                class="-mt-[50%] w-full align-middle opacity-30 blur-xl"
                :src="`${runtimeConfig.public.StorageBase}/img/mal/${animeInfoData.mal_id}.webp`"
                :alt="animeInfoData.title_english"
                decoding="sync"
            />
        </div>
        <!-- Left Side Section -->
        <div class="mx-2 flex flex-col text-white">
            <img
                class="-mt-40 w-40 rounded border border-solid border-gray-400"
                :src="`${runtimeConfig.public.StorageBase}/img/mal/${animeInfoData.mal_id}.webp`"
                :alt="animeInfoData.title_english"
                decoding="sync"
            />
            <!-- TODO Add play button -->
            <!-- <div
                class="absolute left-48 top-64 inline-flex cursor-pointer rounded-md border border-solid border-[#404040] bg-[#282828] px-2 py-1 text-[#9bc6ec]"
            >
                <Icon name="heroicons:play" size="24px" /> <span>Watch</span>
            </div> -->
            <!-- Anime Name Info -->
            <div class="mt-3">
                <p class="inline-flex items-center text-[#ffb680]">
                    <Icon name="heroicons:globe-alt-solid" class="mr-1" size="16px" />
                    {{ animeInfoData.title_english }}
                </p>
                <p class="text-gray-400">{{ animeInfoData.title }}</p>
                <p class="text-gray-400">{{ animeInfoData.title_japanese }}</p>
            </div>
            <!-- Anime Name Info -->
            <div class="my-1">
                <hr class="opacity-45" />
                <p class="my-1 text-center">Information</p>
                <hr class="opacity-45" />
            </div>
            <!-- Information  -->
            <div class="text-sm">
                <p class="inline-flex items-center">
                    Score:
                    <Icon name="heroicons:star-solid" size="16px" class="mx-1 text-[#eac42e]" />
                    {{ animeInfoData.score }}
                </p>
                <p>Episodes: {{ animeInfoData.episodes }} {{ animeInfoData.type }}</p>
                <p>Status: {{ animeInfoData.status }}</p>
                <!-- <p>Aired: Oct 9, 2022 to ?</p> -->
                <p>
                    Popularity: {{ animeInfoData.popularity }}
                    <span class="text-gray-400">#{{ animeInfoData.rank }}</span>
                </p>
                <!-- <p>Genres : Sports, Team Sports</p> -->
                <p>Rating: {{ animeInfoData.rating }}</p>
                <!-- <p>Studios: 8bit</p> -->
            </div>
            <!-- Information  -->
            <!-- <p class="mt-2 inline-flex items-center text-[#fdfd00]">
                New sub: 5d 2h 28m 6s
                <span class="ml-3 text-gray-400">(estimated)</span>
            </p> -->
        </div>
        <!-- bottom -->
        <div class="mx-2 mt-3 text-white">
            <ul class="flex items-center justify-start gap-2">
                <li
                    :class="{
                        'border-b border-b-gray-400 bg-[#282828] px-2 text-[#87b4ce]': tab !== 'Synopsis',
                        'border-b bg-[#282828] px-2': tab == 'Synopsis',
                    }"
                    @click="tab = 'Synopsis'"
                >
                    Synopsis
                </li>
                <li
                    :class="{
                        'border-b border-b-gray-400 bg-[#282828] px-2 text-[#87b4ce]': tab !== 'Related',
                        'border-b bg-[#282828] px-2': tab == 'Related',
                    }"
                    @click="tab = 'Related'"
                >
                    Related
                </li>
                <li
                    :class="{
                        'border-b border-b-gray-400 bg-[#282828] px-2 text-[#87b4ce]': tab !== 'Similar',
                        'border-b bg-[#282828] px-2': tab == 'Similar',
                    }"
                    @click="tab = 'Similar'"
                >
                    Similar
                </li>
                <li
                    :class="{
                        'border-b border-b-gray-400 bg-[#282828] px-2 text-[#87b4ce]': tab !== 'OP/ED',
                        'border-b bg-[#282828] px-2': tab == 'OP/ED',
                    }"
                    @click="tab = 'OP/ED'"
                >
                    OP/ED
                </li>
                <li
                    :class="{
                        'border-b border-b-gray-400 bg-[#282828] px-2 text-[#87b4ce]': tab !== 'Trailer',
                        'border-b bg-[#282828] px-2': tab == 'Trailer',
                    }"
                    @click="tab = 'Trailer'"
                >
                    Trailer
                </li>
            </ul>

            <hr class="opacity-20" />
        </div>
        <!-- bottom -->
    </div>
</template>
<script lang="ts" setup>
type Tabs = 'Synopsis' | 'Related' | 'Similar' | 'OP/ED' | 'Trailer';
const tab = ref<Tabs>('Synopsis');
const runtimeConfig = useRuntimeConfig();

const route = useRoute();
const { data } = await useFetch(`${runtimeConfig.public.apiBase}/v1/anime/info/${route.params.animeId}`);
const animeInfoData = data.value as any;

// https://api.animixplay-reborn.xyz/api/v1/anime/info/54869
</script>
