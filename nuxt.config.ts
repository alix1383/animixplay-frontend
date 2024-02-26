// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    typescript: {
        shim: false,
        strict: true,
        typeCheck: true,
    },
    $development: {
        devtools: { enabled: true },
    },
    runtimeConfig: {
        public: { apiBase: 'http://localhost:8000/api', srcBase: 'http://localhost:8000/storage' },
    },

    googleFonts: {
        families: {
            'Lexend Deca': [400, 500, 700],
        },
    },

    // tailwindcss: {
    //     cssPath: 'assets/css/tailwind.css',
    // },

    appConfig: {
        nuxtIcon: {
            size: '30px',
        },
    },
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@pinia/nuxt', '@nuxtjs/google-fonts'],
});
