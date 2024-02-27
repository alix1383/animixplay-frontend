<template>
    <div class="my-5 flex items-center justify-center rounded-2xl bg-red-900 text-white">
        for Edge Users you can use
        <NuxtLink
            class="mx-1 font-bold underline"
            to="https://microsoftedge.microsoft.com/addons/detail/adblock-%E2%80%94-best-ad-blocker/ndcileolkflehcjpmjnfbnaibdcgglog?refid=bingshortanswersdownload"
            external
        >
            AdBlock
        </NuxtLink>
        to block player ads
    </div>

    <!-- Player Section -->
    <div class="mb-4 flex flex-col items-start justify-between bg-[#232323]">
        <!-- Title -->
        <div class="mb-2 w-full">
            EP: {{ route.params.ep }} <span class="opacity-30">|</span> External Player (anitaku.to)
        </div>
        <!-- Iframe Section -->
        <!-- TODO https://addons.mozilla.org/en-US/firefox/addon/popup-blocker/ -->
        <div class="aspect-square max-h-[280px] w-full overflow-hidden sm:aspect-video sm:max-h-none">
            <iframe
                class="h-full w-full bg-[3a3a3a]"
                :src="srcLink"
                allowfullscreen="true"
                marginwidth="0"
                marginheight="0"
                scrolling="no"
                frameborder="0"
            ></iframe>
        </div>
        <!-- Information -->
        <div class="mt-2 flex w-full flex-col px-4 py-5">
            <div class="flex items-center justify-between">
                <!-- Left -->
                <div class="flex items-center">
                    <span>GOGO Stream</span>
                    <span class="mx-2 opacity-30">|</span>
                    <!-- <Icon name="heroicons:cog-8-tooth" size="20px" /> -->
                </div>
                <!-- Right -->
                <div class="flex items-center">
                    <!-- <Icon name="heroicons:arrow-path" size="20px" class="ml-2" /> -->
                    <!-- <Icon name="heroicons:information-circle" size="20px" /> -->
                </div>
            </div>
            <!-- Anime Name -->
            <div class="my-3 flex items-center">
                <Icon name="heroicons:folder-plus-solid" class="mr-3" size="24px" />
                <span class="text-xl font-bold">{{ myAnimeListData.title }}</span>
            </div>
            <!-- Anime EPs -->
            <!-- <div>
                <button v-for="x in 3" class="mx-1 mb-1 w-11 bg-[#355f83]" type="button">
                    {{ x }}
                </button>
            </div> -->

            <hr class="my-3 opacity-40" />
            <!-- Extra Information -->
            <!-- <div class="flex flex-col">
                <div class="flex items-center justify-between">
                    <span>Genres : xy</span>
                    <span>Ep total : xx</span>
                </div>
                <div>
                    <span>Status : xxx</span>
                    <span class="mx-2 opacity-30">|</span>
                    <button type="button" class="border border-solid px-1 text-sm">MoreInfo</button>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const { data: srcData } = await useFetch(`https://api.animixplay-reborn.xyz/api/v1/watch/${route.params.ep}`);
const srcLink = srcData.value as string;

// TODO
const { data: MALData } = await useFetch(`https://api.animixplay-reborn.xyz/api/v1/anime/info/${route.params.id}`);
const myAnimeListData = MALData.value as any;
</script>
