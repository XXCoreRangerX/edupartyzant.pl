<script setup lang="ts">
const setColorMode = (newTheme: string) => {
    useColorMode().preference = newTheme;
};
</script>

<template>
    <div>
        <DropdownMenu>
            <DropdownMenuTrigger as-child>
                <Button variant="outline" size="icon">
                    <Icon
                        name="lucide:sun"
                        class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                    />
                    <Icon
                        name="lucide:moon"
                        class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                    />
                    <span class="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem @click="setColorMode('system')">
                    <Icon name="lucide:monitor" class="mr-2 h-4 w-4" />
                    System
                </DropdownMenuItem>
                <DropdownMenuItem @click="setColorMode('light')">
                    <Icon name="lucide:sun" class="mr-2 h-4 w-4" />
                    Jasny
                </DropdownMenuItem>
                <DropdownMenuItem @click="setColorMode('dark')">
                    <Icon name="lucide:moon" class="mr-2 h-4 w-4" />
                    Ciemny
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
</template>
