<script lang="ts">
import defaults from "@/defaults/defaults";

export default {
    computed: {
        defaults() {
            return defaults;
        },
        sortedRoutes() {
            return this.$router.options.routes.slice(0).sort((a, b) => a.path.localeCompare(b.path));
        },
    },
};
</script>

<template>
    <Separator />
    <footer class="grid gap-2 p-6 text-center">
        <NuxtLink to="/" class="text-xl font-bold text-accent-foreground">{{ defaults.title }}</NuxtLink>
        <p class="flex items-center justify-center text-muted-foreground">&copy; {{ new Date().getFullYear() }}</p>
    </footer>
</template>
