<template>
    <div>
        <!-- Кнопка бургер-меню -->
        <button @click="openMenu" class="lg:hidden p-2 focus:outline-none" aria-label="Открыть меню">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>

        <!-- Мобильное меню -->
        <transition name="menu">
            <div v-show="isMenuOpen" class="fixed inset-0 z-[100]" @click="closeMenu">
                <!-- Затемнение -->
                <div class="absolute inset-0 bg-black bg-opacity-70"></div>

                <!-- Контент меню -->
                <div class="absolute top-0 right-0 h-full w-4/5 bg-[#7216f4] shadow-xl overflow-y-auto" @click.stop>
                    <div class="p-4 flex justify-end">
                        <button @click="closeMenu" class="p-2 text-white" aria-label="Закрыть меню">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <nav class="px-6 pb-8">
                        <ul class="space-y-4">
                            <li>
                                <NuxtLink to="#cardstovar"  @click="closeMenu"
                                    class="block py-3 text-lg font-medium text-[#f9d1f9]  border-b border-gray-100">
                                    Услуги
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#whyus" @click="closeMenu"
                                    class="block py-3 text-lg font-medium text-[#f9d1f9] border-b border-gray-100">
                                    О нас
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="https://t.me/TakaMorY" @click="closeMenu"
                                    class="block py-3 text-lg font-medium text-[#f9d1f9] border-b border-gray-100">
                                    Контакты
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#features" @click="closeMenu"
                                    class="block py-3 text-lg font-medium text-[#f9d1f9] border-b border-gray-100">
                                    Наши преимущества
                                </NuxtLink>
                            </li>
                        </ul>
                    </nav>
                </div>
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

<style>
.menu-enter-active,
.menu-leave-active {
    transition: opacity 0.3s;
}

.menu-enter-from,
.menu-leave-to {
    opacity: 0;
}

.menu-enter-active .absolute.right-0,
.menu-leave-active .absolute.right-0 {
    transition: transform 0.3s ease;
}

.menu-enter-from .absolute.right-0,
.menu-leave-to .absolute.right-0 {
    transform: translateX(100%);
}
</style>