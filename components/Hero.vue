<script setup lang="ts">
import defaults from "@/defaults/defaults";
</script>

<template>
    <div class="flex min-h-screen items-center justify-center">
        <div class="grid items-center justify-center gap-6 text-center sm:flex sm:gap-10">
            <NuxtImg
                src="/hero.jpeg"
                alt="Artur Tutka"
                class="mx-auto w-full max-w-80 rounded-full outline outline-4 outline-offset-4 outline-accent-foreground sm:max-w-sm"
            />
            <div>
                <h1 class="text-5xl font-semibold text-accent-foreground sm:text-6xl">
                    {{ defaults.fullName }}
                </h1>
                <p class="mt-2 text-lg">{{ defaults.bio }}</p>
                <div class="flex items-center justify-center gap-3 py-5">
                    <NuxtLink v-for="social in defaults.socials" :key="social.url" :to="social.url">
                        <Icon
                            :name="social.icon"
                            exact
                            class="h-8 w-8 text-accent-foreground transition-colors hover:text-accent-foreground/90"
                        />
                    </NuxtLink>
                </div>
                <Button variant="accent" class="group font-bold" as-child
                    ><NuxtLink to="https://patronite.pl/edu-partyzant"
                        >Zobacz więcej<Icon
                            name="lucide:arrow-up-right"
                            class="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></NuxtLink
                ></Button>
                <Button variant="link" class="ml-2" as-child><NuxtLink to="#kontakt">Kontakt</NuxtLink></Button>
            </div>
        </div>
    </div>
</template>
