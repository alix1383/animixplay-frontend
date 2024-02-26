import { defineStore } from 'pinia';

type MenuStatus = 'OPEN' | 'CLOSE';

export const useMenuStore = defineStore('Menu', () => {
    const scheduleMenuStatus = ref<MenuStatus>('CLOSE');

    return { scheduleMenuStatus };
});
