<template>
    <div>
        <!-- Кнопка -->
        <button @click="toggleMenu" class="lg:hidden p-2 text-white">
            <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>

        <!-- Меню -->
        <div v-if="isOpen" class="fixed inset-0 z-50 bg-black bg-opacity-70" @click="toggleMenu">
            <div class="absolute right-0 top-0 h-full w-3/4 bg-white shadow-lg" @click.stop>
                <button @click="toggleMenu" class="absolute top-4 right-4 p-2">
                    ✕
                </button>
                <nav class="mt-16 px-4">
                    <NuxtLink to="/" class="block py-3 text-lg border-b" @click="toggleMenu">
                        Главная
                    </NuxtLink>
                    <NuxtLink to="/services" class="block py-3 text-lg border-b" @click="toggleMenu">
                        Услуги
                    </NuxtLink>
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup>
const isOpen = ref(false);

const toggleMenu = () => {
    isOpen.value = !isOpen.value;
    document.body.style.overflow = isOpen.value ? 'hidden' : '';
};
</script>