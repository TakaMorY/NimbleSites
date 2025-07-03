<template>
    <div>
        <header class="bg-[#7216f4]">
            <div class="top-0 py-1 lg:py-2 w-full bg-transparent lg:relative z-50 h-auto overflow-x-hidden">
                <nav class="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:py-4">
                    <div class="flex items-center justify-between ">
                        <div class="flex items-center space-x-2">
                            <h2 class="text-[#f9d1f9]  font-bold text-2xl">NimbleSites</h2>
                        </div>


                        <div class="relative">
                            <!-- Кнопка бургера (только на мобильных) -->
                            <button @click="isMenuOpen = !isMenuOpen" class="lg:hidden p-2 focus:outline-none"
                                aria-label="Меню">
                                <svg class="w-8 h-8 text-[#e2e2e2]" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                    <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <!-- Десктопное меню (как у вас было) -->
                            <div class="hidden lg:block">
                                <div class="flex space-x-10 text-base font-bold text-black/60">
                                    <div
                                        class="text-[#e2e2e2] hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                        <NuxtLink to="#cardstova">Услуги</NuxtLink>
                                    </div>
                                    <div
                                        class="text-[#e2e2e2] hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                        <NuxtLink to="#whyus">О нас</NuxtLink>
                                    </div>
                                    <div
                                        class="text-[#e2e2e2] hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                        <NuxtLink to="https://t.me/TakaMorY">Контакты</NuxtLink>
                                    </div>
                                    <div
                                        class="text-[#e2e2e2] hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                        <NuxtLink to="#features">Наши преимущества</NuxtLink>
                                    </div>
                                </div>
                            </div>

                            <!-- Мобильное меню с анимацией -->
                            <Transition name="mobile-menu">
                                <div v-if="isMenuOpen" ref="menuRef"
                                    class="lg:hidden fixed inset-0 bg-gray-900/95 z-50 pt-20 px-4">
                                    <div class="flex flex-col space-y-6 text-center">
                                        <NuxtLink to="#cardstova"
                                            class="text-[#e2e2e2] text-2xl py-3 hover:text-white transition-colors"
                                            @click="isMenuOpen = false">
                                            Услуги
                                        </NuxtLink>
                                        <NuxtLink to="#whyus"
                                            class="text-[#e2e2e2] text-2xl py-3 hover:text-white transition-colors"
                                            @click="isMenuOpen = false">
                                            О нас
                                        </NuxtLink>
                                        <NuxtLink to="https://t.me/TakaMorY"
                                            class="text-[#e2e2e2] text-2xl py-3 hover:text-white transition-colors"
                                            @click="isMenuOpen = false">
                                            Контакты
                                        </NuxtLink>
                                        <NuxtLink to="#features"
                                            class="text-[#e2e2e2] text-2xl py-3 hover:text-white transition-colors"
                                            @click="isMenuOpen = false">
                                            Наши преимущества
                                        </NuxtLink>
                                    </div>
                                </div>
                            </Transition>

                            <!-- Затемнение фона -->
                            <Transition name="fade">
                                <div v-if="isMenuOpen" @click="isMenuOpen = false"
                                    class="fixed inset-0 bg-black/50 z-40 lg:hidden"></div>
                            </Transition>
                        </div>

                    </div>
                </nav>
            </div>


            <div class="flex items-center">
                <div class="flex items-center pl-8 md:pl-16 lg:pl-24">
                    <h1 class="mt-70 mb-70 text-4xl md:text-5xl font-bold leading-tight transition-all duration-2000 ease-out"
                        :class="visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'">
                        <span class="block text-white">РАЗРАБОТКА <span class="text-[#f9d1f9]">САЙТА</span></span>
                        <span class="block text-white">ПОД ЗАКАЗ</span>
                        <!-- <img src="C:\Users\User\Desktop\Работа\nimblesites\assets\pantone_10279548.png"
                        alt="Пример рекламного сайта" class="w-25 max-w-md"> -->
                        <div class="text-lg text-white mt-14 md:mt-9 mb-12 md:mb-16 max-w-2xl mx-auto">
                            <p>Мы создаем современные веб-сайты, которые не просто красиво выглядят, а эффективно
                                работают
                                на ваш бизнес. Каждый проект - это индивидуальное решение, учитывающее специфику вашей
                                ниши
                                и целевой аудитории.</p>
                            <p>
                                От лаконичных лендингов до сложных интернет-магазинов - мы реализуем проекты любой
                                сложности
                                с гарантией качества и сроков.</p>
                        </div>
                        <NuxtLink to="https://t.me/TakaMorY" class="
      inline-flex items-center justify-center
      px-8 py-4  
      h-14        
      min-w-40   
      text-lg font-semibold 
      text-black bg-[#f9d1f9] 
      rounded-lg 
      hover:bg-indigo-50 
      transition-all
      border-2 border-transparent
      hover:border-indigo-100
      group
    ">
                            Заказать сайт
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </NuxtLink>

                    </h1>
                </div>
                <div class="flex-1 pl-12">
                    <div class="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
                        <img id="heroImg1"
                            class="w-full max-w-md mx-auto md:max-w-lg lg:max-w-xl transition-all duration-1000 ease-in-out hover:scale-105"
                            :class="visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'"
                            src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png"
                            alt="Awesome hero page image" width="500" height="488" />
                    </div>
                </div>
            </div>



        </header>
    </div>
    <main class="content">
        <slot />
    </main>
    <div>
        <footer class="bg-[#7216f4]">
            <div class="container mx-auto p-0 md:p-8 xl:px-0">
                <div class="mx-auto max-w-7xl px-6 pb-10 pt-16">
                    <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                        <!-- Логотип и описание -->
                        <div class="space-y-4">
                            <div>
                                <NuxtLink to="/">
                                    <div class="flex items-center space-x-2 text-2xl font-medium">
                                        <span>
                                            <img src="https://www.freepik.com/icon/tribal_10483290#fromView=family&page=1&position=2&uuid=164b1d44-7966-490a-a4c9-0256ddc80f34"
                                                alt="" width="64" height="64" class="w-16">
                                        </span>
                                        <span class="text-[#f9d1f9]">NimbleSites</span>
                                    </div>
                                </NuxtLink>
                            </div>
                            <div class="max-w-md pr-16 text-md text-[#c8c8c8]">
                                Повысьте производительность и эффективность вашего бизнеса с помощью передовых решений в
                                веб-разработке.
                            </div>
                        </div>

                        <!-- Навигационные колонки -->
                        <div class="mt-16 grid grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
                            <!-- Колонка 1: Ресурсы -->
                            <div>
                                <h3 class="text-md font-semibold leading-6 text-[#fbfbfb]">Ресурсы</h3>
                                <ul role="list" class="mt-4 space-y-4">
                                    <li>
                                        <NuxtLink to=""
                                            class="text-md leading-6 text-[#e2e2e2] hover:underline hover:underline-offset-4 transition-colors duration-300 hover:text-[#c8c8c8]">
                                            Шаблоны работ
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to=""
                                            class="text-md leading-6 text-[#e2e2e2] hover:underline hover:underline-offset-4 transition-colors duration-300 hover:text-[#c8c8c8]">
                                            Наши работы
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>

                            <!-- Колонка 2: Компания -->
                            <div>
                                <h3 class="text-md font-semibold leading-6 text-[#fbfbfb]">Компания</h3>
                                <ul role="list" class="mt-4 space-y-4">
                                    <li>
                                        <NuxtLink to="#whyus"
                                            class="text-md leading-6 text-[#e2e2e2] hover:underline hover:underline-offset-4 transition-colors duration-300 hover:text-[#c8c8c8]">
                                            О нас
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="https://t.me/TakaMorY"
                                            class="text-md leading-6 text-[#e2e2e2] hover:underline hover:underline-offset-4 transition-colors duration-300 hover:text-[#c8c8c8]">
                                            Связаться с нами
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>

                            <!-- Колонка 3: Пользователю -->
                            <div>
                                <h3 class="text-md font-semibold leading-6 text-[#fbfbfb]">Пользователю</h3>
                                <ul role="list" class="mt-4 space-y-4">
                                    <li>
                                        <NuxtLink to=""
                                            class="text-md leading-6 text-[#e2e2e2] hover:underline hover:underline-offset-4 transition-colors duration-300 hover:text-[#c8c8c8]">
                                            Отзывы
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="#features"
                                            class="text-md leading-6 text-[#e2e2e2] hover:underline hover:underline-offset-4 transition-colors duration-300 hover:text-[#c8c8c8]">
                                            Почему именно мы
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Футер -->
                    <div class="mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24">
                        <div class="text-md text-center text-white">
                            Все права защищены © 2025. Создано
                            <span class="text-[#c8c8c8]">♥</span>
                            <NuxtLink to="/" class="hover:text-[#f9d1f9] transition-colors">NimbleSites</NuxtLink>.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

const isMenuOpen = ref(false);
const menuRef = ref(null);

// Закрытие при клике вне меню
onClickOutside(menuRef, () => {
    isMenuOpen.value = false;
});

// Блокировка скролла при открытом меню
watch(isMenuOpen, (val) => {
    if (process.client) {
        document.body.style.overflow = val ? 'hidden' : 'auto';
    }
});

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
/* Анимация меню */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
    transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}

/* Анимация затемнения */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
