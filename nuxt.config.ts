// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "@nuxtjs/eslint-module",
        "@nuxtjs/robots",
        "@nuxtjs/tailwindcss",
        "shadcn-nuxt",
        "@nuxtjs/color-mode",
        "@nuxtjs/google-fonts",
        "@nuxt/image",
        "nuxt-icon",
    ],
    typescript: {
        strict: true,
    },
    googleFonts: {
        families: {
            Inter: true,
        },
    },
    colorMode: {
        classSuffix: "",
    },
});