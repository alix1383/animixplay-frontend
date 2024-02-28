import { defineStore } from 'pinia';

type MenuStatus = 'OPEN' | 'CLOSE';
export const useScheduleMenuStore = defineStore('ScheduleMenu', () => {
    const data = ref();
    const scheduleMenuStatus = ref<MenuStatus>('CLOSE');
    return { data, scheduleMenuStatus };
});
