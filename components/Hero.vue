<template>
    <div class="flex min-h-screen items-center justify-center">
        <div class="grid h-full gap-6 text-center">
            <div class="mx-auto w-full max-w-xs px-3">
                <NuxtImg
                    src="/hero.jpeg"
                    alt="Artur Tutka"
                    sizes="80vw sm:50vw"
                    quality="80"
                    format="webp"
                    width="640"
                    height="640"
                    class="rounded-full outline outline-4 outline-offset-4 outline-accent-foreground"
                />
            </div>
            <div class="space-y-2">
                <h1 class="text-5xl font-semibold text-accent-foreground sm:text-6xl">
                    {{ useAppConfig().fullName }}
                </h1>
                <p class="text-lg">{{ useAppConfig().bio }}</p>
                <div class="flex flex-wrap items-center justify-center gap-2 py-2">
                    <Button
                        v-for="social in useAppConfig().socials"
                        :key="social.url"
                        :to="social.url"
                        :aria-label="social.name"
                        variant="ghost"
                        size="icon"
                        as-child
                    >
                        <NuxtLink :to="social.url">
                            <Icon
                                :name="social.icon"
                                exact
                                class="h-10 w-10 text-accent-foreground transition-colors hover:text-accent-foreground/90"
                            />
                        </NuxtLink>
                    </Button>
                </div>
                <div class="space-x-2 space-y-2">
                    <Button variant="accent" class="group font-bold" as-child>
                        <NuxtLink to="https://patronite.pl/edu-partyzant">
                            Zobacz więcej na Patronite
                            <Icon
                                name="lucide:arrow-up-right"
                                class="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </NuxtLink>
                    </Button>
                    <Button variant="outline" as-child>
                        <NuxtLink to="mailto:mail@edupartyzant.pl">Kontakt</NuxtLink>
                    </Button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts"></script>
