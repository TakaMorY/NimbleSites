<template>
    <div>
        <!-- Стильная кнопка бургер-меню с фиолетовым градиентом -->
        <button @click="openMenu" class="lg:hidden p-3 rounded-xl  transition-all duration-300  group"
            aria-label="Открыть меню">
            <div class="relative w-6 h-6 flex items-center justify-center">
                <span class="absolute h-0.5 w-6 bg-white transform transition-all duration-300"
                    :class="isMenuOpen ? 'rotate-45' : '-translate-y-1.5'"></span>
                <span class="absolute h-0.5 w-6 bg-white transform transition-all duration-300"
                    :class="isMenuOpen ? 'opacity-0' : 'opacity-100'"></span>
                <span class="absolute h-0.5 w-6 bg-white transform transition-all duration-300"
                    :class="isMenuOpen ? '-rotate-45' : 'translate-y-1.5'"></span>
            </div>
        </button>

        <!-- Модернизированное мобильное меню с новой цветовой схемой -->
        <transition enter-active-class="transition-opacity duration-500 ease-out" enter-from-class="opacity-0"
            enter-to-class="opacity-100" leave-active-class="transition-opacity duration-400 ease-in"
            leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div v-show="isMenuOpen" class="fixed inset-0 z-50" @click="closeMenu">
                <!-- Затемнение с фиолетовым оттенком -->
                <div class="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-95"></div>

                <!-- Контент меню с улучшенной анимацией -->
                <transition enter-active-class="transition-transform duration-500 ease-out"
                    enter-from-class="translate-x-full" enter-to-class="translate-x-0"
                    leave-active-class="transition-transform duration-400 ease-in" leave-from-class="translate-x-0"
                    leave-to-class="translate-x-full">
                    <div v-show="isMenuOpen"
                        class="absolute top-0 right-0 h-full w-80 max-w-full bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl overflow-y-auto"
                        @click.stop>
                        <!-- Декоративные элементы -->
                        <div
                            class="absolute top-0 left-0 w-32 h-32 bg-purple-700 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-40">
                        </div>

                        <!-- <div class="absolute bottom-12 left-48 w-24 h-24 bg-purple-700 rounded-full opacity-40"></div> -->
                        <!-- Заголовок меню -->
                        <div
                            class="p-5 flex items-center justify-between border-b border-purple-700 border-opacity-30 relative z-10">
                            <h2
                                class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-purple-200">
                                Навигация</h2>
                            <button @click="closeMenu"
                                class="p-2 rounded-xl bg-opacity-50 transition-all duration-300 hover:scale-110"
                                aria-label="Закрыть меню">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <!-- Навигация -->
                        <nav class="px-5 py-8 relative z-10">
                            <ul class="space-y-3">
                                <li>
                                    <NuxtLink to="#cardstovar" @click="closeMenu"
                                        class="flex items-center py-4 px-5 text-lg font-medium text-gray-100 rounded-xl  bg-gradient-to-br from-gray-900 to-gray-800 bg-opacity-70 hover:bg-opacity-90 transition-all duration-300 group hover:translate-x-2 backdrop-blur-sm border border-purple-600 border-opacity-30">
                                        <div
                                            class="w-8 h-8 flex items-center justify-center rounded-lg  bg-gradient-to-br from-purple-700 to-purple-900 mr-3 group-hover:scale-110 transition-transform duration-300">
                                            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                            </svg>
                                        </div>
                                        Услуги
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="#whyus" @click="closeMenu"
                                        class="flex items-center py-4 px-5 text-lg font-medium text-gray-100 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 bg-opacity-70 hover:bg-opacity-90 transition-all duration-300 group hover:translate-x-2 backdrop-blur-sm border border-purple-600 border-opacity-30">
                                        <div
                                            class="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-700 to-purple-900 mr-3 group-hover:scale-110 transition-transform duration-300">
                                            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </div>
                                        О нас
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/portfolio" @click="closeMenu"
                                        class="flex items-center py-4 px-5 text-lg font-medium text-gray-100 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 bg-opacity-70 hover:bg-opacity-90 transition-all duration-300 group hover:translate-x-2 backdrop-blur-sm border border-purple-600 border-opacity-30">
                                        <div
                                            class="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-700 to-purple-900 mr-3 group-hover:scale-110 transition-transform duration-300">
                                            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        Портфолио
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/shablon" @click="closeMenu"
                                        class="flex items-center py-4 px-5 text-lg font-medium text-gray-100 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 bg-opacity-70 hover:bg-opacity-90 transition-all duration-300 group hover:translate-x-2 backdrop-blur-sm border border-purple-600 border-opacity-30">
                                        <div
                                            class="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-700 to-purple-900 mr-3 group-hover:scale-110 transition-transform duration-300">
                                            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                            </svg>
                                        </div>
                                        Шаблоны
                                    </NuxtLink>
                                </li>
                            </ul>

                            <!-- Дополнительный декор -->
                            <div class="mt-16 text-center relative">
                                <div
                                    class="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent">
                                </div>
                                <p class="mt-4 text-sm text-purple-300 text-opacity-80">Мы всегда на связи!</p>
                                <div class="flex justify-center space-x-3 mt-3">
                                    <a href="https://t.me/TakaMorY"
                                        class="w-8 h-8 flex items-center justify-center rounded-lg bg-purple-800 bg-opacity-40 hover:bg-opacity-60 transition-colors duration-300">
                                        <svg class="w-4 h-4 text-purple-200" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.140.141-.259.259-.374.261l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.136-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                                        </svg>
                                    </a>
                                    <!-- <a href="#"
                                        class="w-8 h-8 flex items-center justify-center rounded-lg bg-purple-800 bg-opacity-40 hover:bg-opacity-60 transition-colors duration-300">
                                        <svg class="w-4 h-4 text-purple-200" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z" />
                                        </svg>
                                    </a> -->
                                </div>
                            </div>
                        </nav>
                    </div>
                </transition>
            </div>
        </transition>
    </div>
</template>

<script setup>
const isMenuOpen = ref(false);

const openMenu = () => {
    isMenuOpen.value = true;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
};

const closeMenu = () => {
    isMenuOpen.value = false;
    document.body.style.overflow = '';
    document.body.style.position = '';
};

// Закрытие при изменении ориентации
onMounted(() => {
    window.addEventListener('orientationchange', closeMenu);
});

onBeforeUnmount(() => {
    window.removeEventListener('orientationchange', closeMenu);
});
</script>