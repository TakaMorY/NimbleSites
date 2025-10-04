<template>
    <div class="relative overflow-hidden min-h-screen">
        <div class="bg-gradient-to-br from-gray-900 to-gray-800">
            <header>
                <div class="top-0 py-1 lg:py-2 w-full bg-transparent lg:relative z-50 h-auto overflow-x-hidden">
                    <nav class="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:py-4">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-">
                                <NuxtLink to="/"
                                    class="text-[#f9d1f9] font-bold text-3xl transition-all duration-300 hover:scale-105">
                                    NimbleSites</NuxtLink>
                            </div>
                            <div class="hidden lg:block">
                                <div class="flex space-x-10 text-base font-bold">
                                    <NuxtLink to="#cardstovar"
                                        class="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105">
                                        Услуги</NuxtLink>
                                    <NuxtLink to="#whyus"
                                        class="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105">
                                        О нас</NuxtLink>
                                    <NuxtLink to="https://t.me/TakaMorY"
                                        class="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105">
                                        Портфолио</NuxtLink>
                                    <NuxtLink to="/shablon"
                                        class="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105">
                                        Шаблоны</NuxtLink>
                                </div>
                            </div>

                            <!-- Кнопка бургер-меню -->
                            <div class="lg:hidden">
                                <button @click="toggleMobileMenu"
                                    class="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300">
                                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>

                <!-- Мобильное навигационное меню -->
                <transition name="mobile-menu">
                    <div v-if="mobileMenuOpen" class="lg:hidden fixed inset-0 z-40">
                        <div class="absolute inset-0 bg-gray-900/95 backdrop-blur-sm" @click="closeMobileMenu"></div>
                        <div
                            class="absolute right-0 top-0 h-full w-80 max-w-full bg-gradient-to-b from-gray-900 to-purple-900/90 shadow-2xl">
                            <div class="flex flex-col h-full">
                                <!-- Заголовок и кнопка закрытия -->
                                <div class="flex items-center justify-between p-6 border-b border-purple-700/30">
                                    <span class="text-xl font-bold text-purple-200">Меню</span>
                                    <button @click="closeMobileMenu"
                                        class="p-2 text-gray-400 hover:text-white transition-colors duration-300">
                                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <!-- Навигационные ссылки -->
                                <div class="flex-1 flex flex-col items-center justify-center space-y-8 p-6">
                                    <NuxtLink to="#cardstovar"
                                        class="text-2xl font-bold text-gray-300 hover:text-white transition-all duration-500 transform hover:scale-110 hover:translate-x-2"
                                        @click="closeMobileMenu">
                                        Услуги
                                    </NuxtLink>
                                    <NuxtLink to="#whyus"
                                        class="text-2xl font-bold text-gray-300 hover:text-white transition-all duration-500 transform hover:scale-110 hover:translate-x-2"
                                        @click="closeMobileMenu">
                                        О нас
                                    </NuxtLink>
                                    <NuxtLink to="https://t.me/TakaMorY"
                                        class="text-2xl font-bold text-gray-300 hover:text-white transition-all duration-500 transform hover:scale-110 hover:translate-x-2"
                                        @click="closeMobileMenu">
                                        Портфолио
                                    </NuxtLink>
                                    <NuxtLink to="/shablon"
                                        class="text-2xl font-bold text-gray-300 hover:text-white transition-all duration-500 transform hover:scale-110 hover:translate-x-2"
                                        @click="closeMobileMenu">
                                        Шаблоны
                                    </NuxtLink>
                                </div>

                                <!-- Социальные иконки в мобильном меню -->
                                <div class="p-6 border-t border-purple-700/30">
                                    <div class="flex justify-center space-x-6">
                                        <a href="https://t.me/TakaMorY"
                                            class="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
                                            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.14.141-.259.259-.374.261l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.136-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                                            </svg>
                                        </a>
                                        <a href="#"
                                            class="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
                                            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </header>
        </div>

        <main class="content">
            <slot />
        </main>

        <footer class="bg-gradient-to-b from-gray-900 to-purple-900 relative overflow-hidden">
            <!-- Декоративный элемент -->
            <div class="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>
            <div class="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-purple-700/10 blur-3xl"></div>

            <div class="container mx-auto p-0 md:p-8 xl:px-0 relative z-10">
                <div class="mx-auto max-w-7xl px-6 pb-10 pt-16">
                    <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                        <!-- Логотип и описание -->
                        <div class="space-y-4">
                            <div>
                                <NuxtLink to="/">
                                    <div class="flex items-center space-x-3">
                                        <div
                                            class="w-12 h-12 rounded-lg flex items-center justify-center shadow-lg bg-gradient-to-r from-purple-600 to-purple-800">
                                            <img src="/images/logo/logo.png" alt="NimbleSites Logo"
                                                class="text-white font-bold text-lg">
                                        </div>
                                        <span
                                            class="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-purple-400 text-2xl font-medium">NimbleSites</span>
                                    </div>
                                </NuxtLink>
                            </div>
                            <div class="max-w-md pr-16 text-md text-purple-200">
                                Повысьте производительность и эффективность вашего бизнеса с помощью передовых решений в
                                веб-разработке.
                            </div>

                            <!-- Социальные иконки -->
                            <div class="flex space-x-4 mt-6">
                                <a href="https://t.me/TakaMorY"
                                    class="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.14.141-.259.259-.374.261l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.136-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                                    </svg>
                                </a>
                                <a href="#"
                                    class="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <!-- Навигационные колонки -->
                        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 xl:grid-cols-3">
                            <!-- Колонка 1: Ресурсы -->
                            <div>
                                <h3 class="text-md font-semibold leading-6 text-purple-100">Ресурсы</h3>
                                <ul role="list" class="mt-4 space-y-4">
                                    <li>
                                        <NuxtLink to=""
                                            class="text-md leading-6 hover:text-white text-gray-400 transition-colors duration-300 transform hover:translate-x-1 inline-block">
                                            Шаблоны работ
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to=""
                                            class="text-md leading-6 hover:text-white text-gray-400 transition-colors duration-300 transform hover:translate-x-1 inline-block">
                                            Наши работы
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>

                            <!-- Колонка 2: Компания -->
                            <div>
                                <h3 class="text-md font-semibold leading-6 text-purple-100">Компания</h3>
                                <ul role="list" class="mt-4 space-y-4">
                                    <li>
                                        <NuxtLink to="#whyus"
                                            class="text-md leading-6 hover:text-white text-gray-400 transition-colors duration-300 transform hover:translate-x-1 inline-block">
                                            О нас
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="https://t.me/TakaMorY"
                                            class="text-md leading-6 hover:text-white text-gray-400 transition-colors duration-300 transform hover:translate-x-1 inline-block">
                                            Связаться с нами
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>

                            <!-- Колонка 3: Пользователю -->
                            <div>
                                <h3 class="text-md font-semibold leading-6 text-purple-100">Пользователю</h3>
                                <ul role="list" class="mt-4 space-y-4">
                                    <li>
                                        <NuxtLink to=""
                                            class="text-md leading-6 hover:text-white text-gray-400 transition-colors duration-300 transform hover:translate-x-1 inline-block">
                                            Отзывы
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="#features"
                                            class="text-md leading-6 hover:text-white text-gray-400 transition-colors duration-300 transform hover:translate-x-1 inline-block">
                                            Почему именно мы
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Футер -->
                    <div class="mt-16 border-t border-purple-700/30 pt-8 sm:mt-20 lg:mt-24">
                        <div class="text-md text-center text-purple-200">
                            Все права защищены © 2025. Создано
                            <span class="text-purple-300">♥</span>
                            <NuxtLink to="/" class="hover:text-purple-100 transition-colors">NimbleSites</NuxtLink>.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
// Состояние мобильного меню
const mobileMenuOpen = ref(false);

// Функции для управления мобильным меню
const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
    if (mobileMenuOpen.value) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
};

const closeMobileMenu = () => {
    mobileMenuOpen.value = false;
    document.body.style.overflow = 'auto';
};

// Закрытие мобильного меню при нажатии ESC
const handleEscape = (e) => {
    if (e.key === 'Escape' && mobileMenuOpen.value) {
        closeMobileMenu();
    }
};

onMounted(() => {
    // Добавляем обработчик ESC
    document.addEventListener('keydown', handleEscape);
});

onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleEscape);
});
</script>

<style scoped>
/* Анимации для мобильного меню */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
    transition: opacity 0.4s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
    opacity: 0;
}

.mobile-menu-enter-active .absolute.right-0,
.mobile-menu-leave-active .absolute.right-0 {
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-menu-enter-from .absolute.right-0 {
    transform: translateX(100%);
}

.mobile-menu-leave-to .absolute.right-0 {
    transform: translateX(100%);
}

/* Плавная прокрутка */
html {
    scroll-behavior: smooth;
}

/* Кастомный скроллбар */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #1f2937;
}

::-webkit-scrollbar-thumb {
    background: #7c3aed;
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: #6d28d9;
}
</style>