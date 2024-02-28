import { defineStore } from 'pinia';
type RecentAnime = {
    [key: number]: {
        name: string;
        imageFileName: string;
        watchUrl: string;
        ep: number;
        myAnimeList: {
            title: string;
            id: number;
            eps: number | null;
            score: number;
            type: string;
        };
    };
};
export const useRecentAnimeStore = defineStore('RecentAnime', () => {
    const data = ref<RecentAnime>();
    return { data };
});
