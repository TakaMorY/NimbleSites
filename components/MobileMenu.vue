<template>
    <div>
        <!-- Кнопка бургера -->
        <button @click="openMenu" class="lg:hidden p-2 focus:outline-none" aria-label="Меню">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>

        <!-- Мобильное меню -->
        <div v-show="isMenuOpen" class="fixed inset-0 z-[1000] flex">
            <!-- Затемнение -->
            <div @click="closeMenu" class="absolute inset-0 bg-black bg-opacity-70 transition-opacity duration-300"
                :class="{ 'opacity-0': !menuVisible, 'opacity-100': menuVisible }"></div>

            <!-- Контент меню -->
            <div class="relative ml-auto h-full w-4/5 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out"
                :class="{ 'translate-x-full': !menuVisible, 'translate-x-0': menuVisible }" @click.stop>
                <!-- Кнопка закрытия -->
                <button @click="closeMenu" class="absolute left-4 top-4 p-1 text-gray-500 hover:text-gray-700"
                    aria-label="Закрыть">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <!-- Навигация -->
                <nav class="pt-16 px-6 pb-8 h-full overflow-y-auto">
                    <ul class="space-y-4">
                        <li v-for="item in menuItems" :key="item.path">
                            <NuxtLink :to="item.path" @click="closeMenu"
                                class="block py-3 text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors">
                                {{ item.title }}
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup>
const isMenuOpen = ref(false);
const menuVisible = ref(false);
const menuItems = [
    { path: '/', title: 'Главная' },
    { path: '/services', title: 'Услуги' },
    { path: '/portfolio', title: 'Портфолио' },
    { path: '/contacts', title: 'Контакты' }
];

const openMenu = () => {
    isMenuOpen.value = true;
    document.body.style.overflow = 'hidden';

    // Небольшая задержка для корректной анимации
    setTimeout(() => {
        menuVisible.value = true;
    }, 30);
};

const closeMenu = () => {
    menuVisible.value = false;

    setTimeout(() => {
        isMenuOpen.value = false;
        document.body.style.overflow = '';
    }, 300);
};

// Закрытие при изменении размера окна
onMounted(() => {
    window.addEventListener('resize', closeMenu);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', closeMenu);
});
</script>