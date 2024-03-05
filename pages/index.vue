<script setup lang="ts">
import Defaults from "~/defaults/defaults";

useSeoMeta({
    title: Defaults.title,
    description: Defaults.bio,
    ogTitle: Defaults.title,
    ogDescription: Defaults.bio,
    ogImage: "/hero.jpeg",
    ogUrl: Defaults.url,
    twitterTitle: Defaults.title,
    twitterDescription: Defaults.bio,
    twitterImage: "/hero.jpeg",
    twitterCard: "summary",
});

useHead({
    htmlAttrs: {
        lang: "pl",
    },
    link: [
        {
            rel: "icon",
            type: "image/png",
            href: "/favicon.png",
        },
    ],
});
</script>

<template>
    <Hero />
</template>
