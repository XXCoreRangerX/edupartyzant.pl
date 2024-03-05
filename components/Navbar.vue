<script lang="ts">
import defaults from "../defaults/defaults";
import { cn } from "@/lib/utils";

export default {
    data() {
        return {
            scrolled: false,
        };
    },
    computed: {
        defaults() {
            return defaults;
        },
        sortedRoutes() {
            return this.$router.options.routes;
        },
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    methods: {
        cn,
        handleScroll() {
            this.scrolled = window.scrollY > 0;
        },
    },
};
</script>

<template>
    <nav
        :class="
            cn(
                'fixed top-0 z-50 flex w-full items-center justify-between bg-background p-5 transition-shadow duration-300 ease-in-out',
                scrolled && 'border-b shadow-sm',
            )
        "
    >
        <NuxtLink to="/" class="text-xl font-bold text-accent-foreground">{{ defaults.title }}</NuxtLink>
        <div class="flex flex-wrap items-center gap-x-5">
            <ul class="hidden flex-wrap gap-4 text-sm capitalize min-[400px]:flex">
                <li v-for="route in sortedRoutes" :key="route.path">
                    <NuxtLink :to="route.path" exact class="transition-colors hover:text-primary/90">
                        {{ route.name === "index" ? "home" : route.name }}
                    </NuxtLink>
                </li>
            </ul>
            <ModeToggle />
        </div>
    </nav>
</template>
