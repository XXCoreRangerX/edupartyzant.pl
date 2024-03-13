<template>
    <Separator />
    <footer class="flex flex-col items-center justify-center gap-2 p-6 text-center">
        <NuxtLink to="/" class="text-2xl font-bold text-accent-foreground">{{ useAppConfig().title }}</NuxtLink>
        <p class="text-muted-foreground">&copy; {{ new Date().getFullYear() }}</p>
        <ModeToggle class="mt-2" />
    </footer>
</template>
