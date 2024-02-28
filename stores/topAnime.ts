import { defineStore } from 'pinia';
interface TopAnime {
    [key: number]: {
        name: string;
        ids: {
            anilist: number | null;
            myanimelist: number;
            anidb: number | null;
            animeplanet: string | null;
            anisearch: number | null;
            kitsu: number | null;
            livechart: number;
        };
        imageFileName: string;
        animeSummary: {
            tags: Array<string>;
            markdown: string;
        };
    };
}
export const useTopAnimeStore = defineStore('TopAnime', () => {
    const data = ref<TopAnime>();
    return { data };
});
