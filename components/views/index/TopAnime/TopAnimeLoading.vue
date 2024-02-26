<template>
    <div class="relative animate-pulse">
        <div class="flex h-[160px] w-full bg-slate-700">
            <div class="h-full w-[112px] bg-slate-600"></div>
            <div class="ml-3 mt-2 flex h-full w-full flex-col justify-between">
                <div class="h-5 w-64 rounded bg-slate-600"></div>

                <div class="">
                    <div class="h-3 w-3/4 rounded bg-slate-600"></div>
                    <div class="my-1 h-3 w-4/5 rounded bg-slate-600"></div>
                    <div class="h-3 w-4/6 rounded bg-slate-600"></div>
                </div>

                <div class="mb-5 flex items-center justify-between text-[#a5a5a5]">
                    <div class="flex items-center text-xs">
                        <Icon name="heroicons:tag" class="mr-1" />
                        <div class="h-3 w-36 rounded bg-slate-600"></div>
                    </div>
                    <div class="flex items-center text-[#7893aa]">
                        <Icon name="heroicons:chevron-left" class="cursor-pointer transition-colors hover:text-white" />
                        <Icon
                            name="heroicons:chevron-right"
                            class="cursor-pointer transition-colors hover:text-white"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
