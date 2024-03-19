// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "@nuxtjs/robots",
        "@nuxtjs/tailwindcss",
        "@nuxtjs/color-mode",
        "@nuxtjs/google-fonts",
        "@nuxt/image",
        "nuxt-icon",
        "shadcn-nuxt",
    ],
    css: ["~/assets/css/global.css"],
    googleFonts: {
        families: {
            Poppins: [400, 600, 700],
        },
    },
    colorMode: {
        preference: "light",
        classSuffix: "",
    },
});
