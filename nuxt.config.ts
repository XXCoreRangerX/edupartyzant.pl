// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: "en",
            },
            link: [
                {
                    rel: "icon",
                    type: "image/png",
                    href: "/favicon.png",
                },
            ],
        },
    },
    devtools: { enabled: true },
    modules: [
        "@nuxtjs/robots",
        "@nuxtjs/tailwindcss",
        "shadcn-nuxt",
        "@nuxtjs/color-mode",
        "@nuxtjs/google-fonts",
        "@nuxt/image",
        "nuxt-icon",
    ],
    css: ["~/assets/css/global.css"],
    googleFonts: {
        families: {
            Inter: [400, 500, 700],
        },
    },
    colorMode: {
        preference: "light",
        classSuffix: "",
    },
});
