<template>
    <Button
        variant="outline"
        size="icon"
        @click="$colorMode.preference = $colorMode.preference === 'light' ? 'dark' : 'light'"
    >
        <Icon name="lucide:sun" class="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Icon
            name="lucide:moon"
            class="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <span class="sr-only">Toggle theme</span>
    </Button>
</template>
