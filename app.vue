<script setup lang="ts">
useSeoMeta({
    title: useAppConfig().title,
    ogTitle: useAppConfig().title,
    description: useAppConfig().description,
    ogDescription: useAppConfig().description,
    ogImage: useAppConfig().image,
    ogUrl: useAppConfig().url,
    twitterCard: "summary",
    twitterTitle: useAppConfig().title,
    twitterDescription: useAppConfig().description,
    twitterImage: useAppConfig().image,
});

useHead({
    htmlAttrs: {
        lang: "pl",
    },
    link: [
        {
            rel: "icon",
            type: "image/webp",
            href: "/favicon.webp",
        },
    ],
});
</script>

<template>
    <main class="px-2">
        <Hero />
    </main>
    <Footer />
</template>
