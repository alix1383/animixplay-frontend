<template>
    <div v-for="x in 7" class="animate-pulse">
        <div class="my-2 flex flex-col px-4">
            <div class="mx-auto h-5 w-28 rounded bg-slate-700"></div>
            <div class="my-1 h-[1px] w-full rounded bg-slate-700"></div>
            <div v-for="x in 5" class="my-1 flex justify-between">
                <div class="h-5 w-72 rounded bg-slate-700"></div>
                <div class="h-5 w-8 rounded bg-slate-700"></div>
            </div>
        </div>
    </div>
</template>
