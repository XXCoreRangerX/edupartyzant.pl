<template>
    <footer class="flex flex-col items-center justify-center gap-2 border-t p-6 text-center">
        <NuxtLink to="/" class="text-2xl font-semibold text-accent-foreground">{{ useAppConfig().title }}</NuxtLink>
        <p class="text-muted-foreground">&copy; {{ new Date().getFullYear() }}</p>
        <ModeToggle class="mt-2" />
    </footer>
</template>
