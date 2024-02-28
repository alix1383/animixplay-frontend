<template>
    <div class="select-none font-lexend">
        <AppHeader />

        <ScheduleMenu />

        <main v-touch:swipe.right="swipeHandlerRight" class="pt-14 lg:mx-[calc(50%-490px)] xl:mx-[calc(50%-620px)]">
            <slot />
        </main>

        <AppFooter />
    </div>
</template>

<script setup lang="ts">
const scheduleMenuStore = useScheduleMenuStore();
function swipeHandlerRight() {
    scheduleMenuStore.scheduleMenuStatus = 'OPEN';
}
</script>
