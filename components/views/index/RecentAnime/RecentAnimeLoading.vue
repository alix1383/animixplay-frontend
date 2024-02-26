<template>
    <div class="mt-4 flex animate-pulse flex-row flex-wrap justify-around gap-3">
        <div v-for="x in 20" class="h-80 max-w-44 basis-1/2 bg-slate-600 p-1 md:basis-1/4 lg:basis-1/6">
            <div class="relative h-60 w-full bg-slate-500">
                <div class="absolute left-0 top-0 h-6 w-14 rounded-br-lg backdrop-blur-lg backdrop-brightness-50"></div>
                <div
                    class="absolute bottom-0 right-0 h-6 w-14 rounded-tl-lg backdrop-blur-lg backdrop-brightness-50"
                ></div>
            </div>
            <div class="mx-auto mt-3 h-6 w-9/12 rounded-2xl bg-slate-700"></div>
            <div class="mx-auto mt-3 h-6 w-7/12 rounded-2xl bg-slate-700"></div>
        </div>
    </div>
</template>
