<template>
    <div class="font-lexend select-none">
        <AppHeader />

        <ScheduleMenu />

        <main v-touch:swipe.right="swipeHandlerRight" class="pt-14 lg:mx-[calc(50%-490px)] xl:mx-[calc(50%-620px)]">
            <slot />
        </main>

        <AppFooter />
    </div>
</template>

<script setup lang="ts">
const menuStatus = useMenuStore();
function swipeHandlerRight() {
    menuStatus.scheduleMenuStatus = 'OPEN';
}
</script>
