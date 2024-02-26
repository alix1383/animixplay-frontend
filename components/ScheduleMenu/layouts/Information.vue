<template>
    <div>
        <div class="mb-3 flex items-center justify-between px-5">
            <!-- improve icon style -->
            <Icon name="heroicons:arrow-left" @click="menuStatus.scheduleMenuStatus = 'CLOSE'" />

            <div class="pl-6 text-3xl">{{ time }}</div>
            <div class="flex flex-col items-end">
                <!-- Time Zone offset -->
                <span class="text-sm">UTC {{ DateTime.now().offset / 60 }}</span>
                <span class="text-xs">{{ DateTime.now().zoneName }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { DateTime } from 'luxon';
import { useMenuStore } from '@/stores/menu';

const menuStatus = useMenuStore();
const time = ref('00:00:00');

// [nuxt] `setInterval` should not be used on the server.

setInterval(function () {
    let times = [DateTime.now().hour.toString(), DateTime.now().minute.toString(), DateTime.now().second.toString()];

    times.forEach((element, index) => {
        if (element.length === 1) {
            times[index] = `0${element}`;
        }
    });

    time.value = times.join(':');
}, 500);
</script>
