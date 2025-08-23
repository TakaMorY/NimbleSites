<template>
    <div class="relative overflow-hidden min-h-screen">

        <div class="bg-gradient-to-br from-gray-900 to-gray-800">
            <header>
                <div class="top-0 py-1 lg:py-2 w-full bg-transparent lg:relative z-50 h-auto overflow-x-hidden">
                    <nav class="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:py-4">
                        <div class="flex items-center justify-between ">
                            <div class="flex items-center space-x-">
                                <NuxtLink to="/" class="text-[#f9d1f9]  font-bold text-3xl">NimbleSites</NuxtLink>
                            </div>
                            <div class="hidden lg:block ">
                                <div class="flex space-x-10 text-base font-bold text-black/60 ">
                                    <div
                                        class=" hover:text-white text-gray-400  hover:w-fit transition-all duration-100 ease-linear">
                                        <NuxtLink to="#cardstovar">Услуги</NuxtLink>
                                    </div>
                                    <div
                                        class=" hover:text-white text-gray-400  hover:w-fit transition-all duration-100 ease-linear">
                                        <NuxtLink to="#whyus">О нас</NuxtLink>
                                    </div>
                                    <div
                                        class=" hover:text-white text-gray-400  hover:w-fit transition-all duration-100 ease-linear">
                                        <NuxtLink to="https://t.me/TakaMorY">Портфолио</NuxtLink>
                                    </div>
                                    <div
                                        class=" hover:text-white text-gray-400  hover:w-fit transition-all duration-100 ease-linear">
                                        <NuxtLink to="/shablon">Шаблоны</NuxtLink>
                                    </div>


                                </div>
                            </div>

                            <MobileMenu class="lg:hidden" />


                        </div>
                    </nav>
                </div>

            </header>






        </div>






        <main class="content">
            <slot />
        </main>

        <footer class="bg-gradient-to-b from-gray-900 to-purple-900">
            <div class="container mx-auto p-0 md:p-8 xl:px-0">
                <div class="mx-auto max-w-7xl px-6 pb-10 pt-16">
                    <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                        <!-- Логотип и описание -->
                        <div class="space-y-4">
                            <div>
                                <NuxtLink to="/">
                                    <div class="flex items-center space-x-3">
                                        <!-- Место для логотипа -->
                                        <div
                                            class="w-12 h-12  rounded-lg flex items-center justify-center shadow-lg">
                                            <img src="\images\logo\logo.png" class="text-white font-bold text-lg"></img>
                                        </div>
                                        <span
                                            class="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-purple-400 text-2xl font-medium">NimbleSites</span>
                                    </div>
                                </NuxtLink>
                            </div>
                            <div class="max-w-md pr-16 text-md text-purple-200">
                                Повысьте производительность и эффективность вашего бизнеса с помощью передовых
                                решений в веб-разработке.
                            </div>
                        </div>

                        <!-- Навигационные колонки -->
                        <div class="mt-16 grid grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
                            <!-- Колонка 1: Ресурсы -->
                            <div>
                                <h3 class="text-md font-semibold leading-6 text-purple-100">Ресурсы</h3>
                                <ul role="list" class="mt-4 space-y-4">
                                    <li>
                                        <NuxtLink to=""
                                            class="text-md leading-6 hover:text-white text-gray-400 transition-colors duration-300">
                                            Шаблоны работ
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to=""
                                            class="text-md leading-6 hover:text-white text-gray-400 transition-colors duration-300">
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
                                            class="text-md leading-6 hover:text-white text-gray-400 transition-colors duration-300">
                                            О нас
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="https://t.me/TakaMorY"
                                            class="text-md leading-6 hover:text-white text-gray-400 transition-colors duration-300">
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
                                            class="text-md leading-6 hover:text-white text-gray-400 transition-colors duration-300">
                                            Отзывы
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="#features"
                                            class="text-md leading-6 hover:text-white text-gray-400 transition-colors duration-300">
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
import MobileMenu from '~/components/MobileMenu.vue';











onMounted(() => {
    visible.value = true
})
const section = ref(null);
const visible = ref(false)

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
            }
        });
    });

    if (section.value) {
        observer.observe(section.value);
    }
});


// Закрытие при нажатии ESC
onMounted(() => {
    const handleEscape = (e) => {
        if (e.key === 'Escape') closeMenu()
    }
    document.addEventListener('keydown', handleEscape)
    onBeforeUnmount(() => {
        document.removeEventListener('keydown', handleEscape)
    })
})











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