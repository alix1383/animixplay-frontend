<template>
    <div class="flex flex-col px-4">
        <template v-for="(value, key, index) in airingTime" :key="index">
            <div class="flex justify-center px-5">
                <p>{{ key }}</p>
                <span v-if="index == 0" class="ml-1 text-yellow-300"> (Today) </span>
            </div>
            <hr class="opacity-80" />
            <div class="flex flex-col">
                <template v-for="(anime, id) in value" :key="id">
                    <div class="flex items-center justify-between text-sm">
                        <div
                            :class="{
                                'bg-[#2f1d1d]': anime.airingTimestamp < Math.round(Date.now() / 1000),
                                'border-l-2 border-l-lime-400 bg-[#1d2f1d] pl-1': markCheck(anime.liveChartAnimeId),
                            }"
                            class="flex-1 overflow-hidden text-ellipsis text-nowrap px-3"
                        >
                            <span class="cursor-pointer text-[#96bdd9] transition-colors hover:text-white">
                                {{ anime.animeName }}
                            </span>
                        </div>
                        <div
                            class="cursor-pointer transition-colors hover:text-green-400"
                            @click="addScheduleToStorage(anime.liveChartAnimeId)"
                        >
                            {{ covertUnixTime(anime.airingTimestamp) }}
                        </div>
                    </div>
                </template>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
type AnimeDetailsType = {
    airingTimestamp: number;
    animeName: string;
    liveChartAnimeId: number;
};

type AnimeIdList = Array<number>;

type weekdayLong = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

import { getCurrentInstance } from 'vue';
import { DateTime } from 'luxon';
import axios from 'axios';
const runtimeConfig = useRuntimeConfig();

const instance = getCurrentInstance();

const getDataFromApi = await axios.get(runtimeConfig.public.apiBase + '/v1/anime/schedule?${Math.round(new Date().getTime()/1000)}');
const airingTime = reOrderWeekDays(getDataFromApi.data);

function reOrderWeekDays(data: AnimeDetailsType[]) {
    const animeData: { [day: string]: AnimeDetailsType[] } = {};

    for (const element of data) {
        const { airingTimestamp } = element;
        const time = DateTime.fromSeconds(airingTimestamp);
        const day = time.weekdayLong as weekdayLong;

        if (time.month === DateTime.now().month) {
            if (time.day < DateTime.now().day) {
                continue;
            }
        }

        if (animeData.hasOwnProperty(day)) {
            const firstIndexUnixTime = animeData[day][0].airingTimestamp;
            const firstIndexDay = DateTime.fromSeconds(firstIndexUnixTime).day;
            const currentAnimeDay = time.day;

            if (currentAnimeDay !== firstIndexDay) {
                continue;
            }
        }

        animeData[day] = animeData[day] || [];
        animeData[day].push(element);
    }

    return animeData;
}

function isValidJson(value: string | null): value is string {
    return value !== null && typeof value === 'string';
}

function markCheck(id: number): boolean {
    const LocalDB = localStorage.getItem('anime_mark');

    if (!isValidJson(LocalDB)) {
        return false;
    }

    const oldData: AnimeIdList = JSON.parse(LocalDB);
    const hasId = oldData.some((value) => value === id);

    return hasId;
}

function addScheduleToStorage(id: number): void {
    const LocalDB: string | null = localStorage.getItem('anime_mark');
    if (LocalDB !== null) {
        const oldData: Array<number> = JSON.parse(LocalDB);
        const index = oldData.findIndex((value) => value === id);

        if (index === -1) {
            const newData: Array<number> = [...oldData, id];
            localStorage.setItem('anime_mark', JSON.stringify(newData));
        } else {
            oldData.splice(index, 1);
            localStorage.setItem('anime_mark', JSON.stringify(oldData));
        }
    } else {
        localStorage.setItem('anime_mark', JSON.stringify([id]));
    }
    instance?.proxy?.$forceUpdate();
}

function covertUnixTime(time: number): string {
    const date = DateTime.fromSeconds(time);
    const air_time = [date.hour.toString(), date.minute.toString()];

    air_time.forEach((element, index) => {
        if (element.length == 1) {
            air_time[index] = `0${element}`;
        }
    });
    return air_time.join(':');
}
</script>
