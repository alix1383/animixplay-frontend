// @ts-ignore
import touchEvents from 'vue3-touch-events';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(touchEvents as any);
});
