<script setup>
// import { useAuthStore } from '@/stores/auth';
// const authStore = useAuthStore();

// const logout = async () => {
//     await authStore.logout();
//     console.log(`Вышел из аккаунта!`)

// };

import { onMounted } from 'vue';

onMounted(() => {
});


const visible = ref(false)

onMounted(() => {
    visible.value = true
})

const section = ref(null);

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





</script>

<style>
.wave-bg {
    position: absolute;
    bottom: 0;
    left: -50%;
    width: 200%;
    height: 30vh;
    background: linear-gradient(90deg, #7216f410 0%, #9b51e015 50%, #7216f410 100%);
    border-radius: 50% 50% 0 0;
    animation: wave 15s linear infinite;
}

.wave-bg.delay-1 {
    animation-delay: 5s;
    bottom: -5vh;
    opacity: 0.3;
}

.wave-bg.delay-2 {
    animation-delay: 8s;
    bottom: -10vh;
    opacity: 0.2;
}

@keyframes wave {
    0% {
        transform: translateX(0) rotate(0deg);
    }

    100% {
        transform: translateX(50%) rotate(360deg);
    }
}



.animate-fadeIn {
    animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}




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




<template>

    <header class="bg-[#7216f4]">
        <div class="top-0 py-1 lg:py-2 w-full bg-transparent lg:relative z-50 h-auto overflow-x-hidden">
            <nav class="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:py-4">
                <div class="flex items-center justify-between ">
                    <div class="flex items-center space-x-2">
                        <h2 class="text-[#f9d1f9]  font-bold text-2xl">NimbleSites</h2>
                    </div>


                    <div class="relative">
                        <!-- Кнопка бургер (видна только на мобильных) -->
                        <button @click="isMenuOpen = !isMenuOpen" class="lg:hidden p-2 focus:outline-none"
                            aria-label="Меню">
                            <svg class="w-8 h-8 text-[#e2e2e2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>




                        <div class="hidden lg:block ">
                            <div class="flex space-x-10 text-base font-bold text-black/60 ">
                                <div
                                    class="text-[#e2e2e2] hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                    <NuxtLink to="#cardstovar">Услуги</NuxtLink>
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
                                    <NuxtLink to="#cardstovar"
                                        class="text-[#e2e2e2] text-2xl py-3 hover:text-white transition-colors"
                                        @click="isMenuOpen = false">
                                        Услуги
                                    </NuxtLink>
                                    <NuxtLink to="#whyus" class="text-[#e2e2e2] text-2xl py-3 hover:text-white transition-colors"
                                        @click="isMenuOpen = false">
                                        О нас
                                    </NuxtLink>
                                    <NuxtLink to="https://t.me/TakaMorY"
                                        class="text-[#e2e2e2] text-2xl py-3 hover:text-white transition-colors"
                                        @click="isMenuOpen = false">
                                        Контакты
                                    </NuxtLink>
                                    <NuxtLink to="#features" class="text-[#e2e2e2] text-2xl py-3 hover:text-white transition-colors"
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
                        <p>Мы создаем современные веб-сайты, которые не просто красиво выглядят, а эффективно работают
                            на ваш бизнес. Каждый проект - это индивидуальное решение, учитывающее специфику вашей ниши
                            и целевой аудитории.</p>
                        <p>
                            От лаконичных лендингов до сложных интернет-магазинов - мы реализуем проекты любой сложности
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

    <main>
        <section class="mt-20 mb-20" id="cardstovar">
            <div class="container mx-auto px-4 py-12">
                <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">С чем мы можем вам помочь?</h2>

                <!-- Сетка карточек -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all">

                    <!-- Карточка 1 -->
                    <div
                        class="bg-[#7216f4] rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-white relative overflow-hidden">
                        <NuxtLink to="https://t.me/TakaMorY"
                            class="absolute top-5 right-5 w-10 h-10 bg-black rounded-full flex items-center justify-center transition-all group-hover:bg-black/90 hover:scale-110">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </NuxtLink>

                        <h3 class="text-xl font-semibold mb-18">Web-разработка</h3>
                        <div class="bg-white/20 text-sm px-3 py-1 rounded-full mb-3 inline-block">3-14 дней</div>
                        <p class="text-white/80 mb-4">Создание современных интерфейсов</p>
                        <div class="text-[#f9d1f9] font-bold text-lg">от 5 000 ₽</div>
                    </div>
                    <!-- Карточка 6 -->
                    <div
                        class="bg-[#f9d1f9] rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-gray-800 relative overflow-hidden">
                        <NuxtLink to="https://t.me/TakaMorY"
                            class="absolute  top-5 right-5 w-10 h-10 bg-black rounded-full flex items-center justify-center transition-all group-hover:bg-black/90 hover:scale-110">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </NuxtLink>

                        <h3 class="text-xl font-semibold mb-18">Работа с нейросетями</h3>
                        <div class="bg-[#7216f4]/20 text-sm px-3 py-1 rounded-full mb-3 inline-block">3-5 дней</div>
                        <p class="text-gray-600 mb-4">AI-решения для бизнеса</p>
                        <div class="text-[#7216f4] font-bold text-lg">от 200 ₽</div>
                    </div>


                    <!-- Карточка 3 -->
                    <div
                        class="bg-[#7216f4] rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-white relative overflow-hidden">
                        <NuxtLink to="https://t.me/TakaMorY"
                            class="absolute top-5 right-5 w-10 h-10 bg-black rounded-full flex items-center justify-center transition-all group-hover:bg-black/90 hover:scale-110">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </NuxtLink>

                        <h3 class="text-xl font-semibold mb-18">Дизайн карточек</h3>
                        <div class="bg-white/20 text-sm px-3 py-1 rounded-full mb-3 inline-block">2-5 дней</div>
                        <p class="text-white/80 mb-4">Визуал для продуктов</p>
                        <div class="text-[#f9d1f9] font-bold text-lg">от 500 ₽</div>
                    </div>

                    <!-- Карточка 4 -->
                    <div
                        class="bg-[#f9d1f9] rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-gray-800 relative overflow-hidden">
                        <NuxtLink to="https://t.me/TakaMorY"
                            class="absolute top-5 right-5 w-10 h-10 bg-black rounded-full flex items-center justify-center transition-all group-hover:bg-black/90 hover:scale-110">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </NuxtLink>

                        <h3 class="text-xl font-semibold mb-18">Оформление соц. сетей</h3>
                        <div class="bg-[#7216f4]/20 text-sm px-3 py-1 rounded-full mb-3 inline-block">2-14 дней</div>
                        <p class="text-gray-600 mb-4">Контент для Instagram и др.</p>
                        <div class="text-[#7216f4] font-bold text-lg">от 500 ₽</div>
                    </div>

                    <!-- Карточка 5 -->
                    <div
                        class="bg-[#7216f4] rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-white relative overflow-hidden">
                        <NuxtLink to="https://t.me/TakaMorY"
                            class="absolute top-5 right-5 w-10 h-10 bg-black rounded-full flex items-center justify-center transition-all group-hover:bg-black/90 hover:scale-110">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </NuxtLink>

                        <h3 class="text-xl font-semibold mb-18">Обработка фото</h3>
                        <div class="bg-white/20 text-sm px-3 py-1 rounded-full mb-3 inline-block">1-3 дня</div>
                        <p class="text-white/80 mb-4">Ретушь и коррекция</p>
                        <div class="text-[#f9d1f9] font-bold text-lg">от 10 000 ₽</div>
                    </div>
                    <!-- Карточка 2 -->
                    <div
                        class="bg-[#f9d1f9] rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-gray-800 relative overflow-hidden">
                        <NuxtLink to="https://t.me/TakaMorY"
                            class="absolute top-5 right-5 w-10 h-10 bg-black rounded-full flex items-center justify-center transition-all group-hover:bg-black/90 hover:scale-110">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </NuxtLink>

                        <h3 class="text-xl font-semibold mb-18">Продажа шаблонов</h3>
                        <div class="bg-[#7216f4]/20 text-sm px-3 py-1 rounded-full mb-3 inline-block">Моментально</div>
                        <p class="text-gray-600 mb-4">Продадим шаблон сайта на ваш выбор</p>
                        <div class="text-[#7216f4] font-bold text-lg">от 2000 ₽</div>
                    </div>


                </div>

                <!-- Призыв к действию -->
                <div class="text-center mt-16">
                    <p class="text-gray-600 mb-6 max-w-2xl mx-auto text-lg">
                        Еще больше об услугах, которые я предоставляю, вы можете узнать, связавшись со мной!
                    </p>
                    <NuxtLink to="https://t.me/TakaMorY" class="
      inline-flex items-center justify-center
      px-8 py-4  
      h-14        
      min-w-40   
      text-lg font-semibold 
      text-white
      hover:text-black bg-[#7216f4] 
      rounded-lg 
      hover:bg-[#f9d1f9] 
      transition-all
      border-2 border-transparent
      hover:border-indigo-100
      group duration-300 transform hover:translate-x-1
    ">
                        Обсудить проект
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </NuxtLink>
                </div>
            </div>
        </section>


        <section id="features" class="mt-20  relative block px-6 py-10 md:py-20 md:px-10 bg-[#7216f4]">


            <div class="relative mx-auto max-w-5xl text-center">
                <span class="text-[#f9d1f9] my-3 flex items-center justify-center font-medium uppercase tracking-wider">
                    Почему именно мы
                </span>
                <h2
                    class="block w-full bg-gradient-to-b text-white bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                    Создаём Веб-Сайт Который понравится Вашим Клиентам
                </h2>
                <p
                    class="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-[#f9d1f9]">
                    Наши шаблоны допускают максимальную индивидуализацию. А в сайты, созданные с нуля, мы вкладываем
                    всю душу.
                </p>
            </div>


            <div
                class="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3 transition-all">
                <div
                    class="rounded-xl border  border-transparent p-8 text-center shadow bg-white transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
                    <div
                        class="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-xl border bg-[#7216f4]/20">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-color-swatch"
                            width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"></path>
                            <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"></path>
                            <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"></path>
                            <line x1="17" y1="17" x2="17" y2="17.01"></line>
                        </svg>
                    </div>
                    <h3 class="mt-10 mb-6 max-w-2xl mx-auto text-lg">Кастомизация</h3>
                    <hr>
                    <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide">Адаптируем внешний
                        вид вашего сайта, от цветовой гаммы до размера шрифта, исходя из ваших предпочтений.
                    </p>
                </div>


                <div
                    class="rounded-xl border  border-transparent p-8 text-center shadow bg-white transition-all duration-300 transform hover:-translate-y-1  relative overflow-hidden">
                    <div
                        class="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-xl border bg-[#7216f4]/40">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bolt" width="24"
                            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline>
                        </svg>
                    </div>
                    <h3 class="mt-10 mb-6 max-w-2xl mx-auto text-lg">Быстрая работа</h3>
                    <hr>
                    <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide ">Мы разрабатываем
                        наши
                        сайты с
                        учетом скорости и сверхбыстрого времени загрузки, чтобы ваши клиенты никогда не сомневались.
                    </p>
                </div>


                <div
                    class="rounded-xl border border-transparent p-8 text-center shadow bg-white transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
                    <div
                        class="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-xl border bg-[#7216f4]/20">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tools" width="24"
                            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
                            <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
                            <polyline points="12 8 7 3 3 7 8 12"></polyline>
                            <line x1="7" y1="8" x2="5.5" y2="9.5"></line>
                            <polyline points="16 12 21 17 17 21 12 16"></polyline>
                            <line x1="16" y1="17" x2="14.5" y2="18.5"></line>
                        </svg>
                    </div>
                    <h3 class="mt-10 mb-6 max-w-2xl mx-auto text-lg">Функциональность</h3>
                    <hr>
                    <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide">
                        Все, что вам нужно для
                        успешного
                        запуска вашего продукта это - довериться нам.
                    </p>
                </div>


            </div>
            <div id="whyus" class="container mx-auto px-4">
                <div class="mb-20 mt-60">
                    <!-- Heading -->
                    <h2 class="text-[#f9d1f9] text-lg mb-2" data-aos="fade-down">
                        Немного о нас
                    </h2>
                    <h3 class="mb-4 text-3xl font-bold text-white section-title" data-aos="fade-down">
                        Создаём сайты, которые трудно забыть
                    </h3>
                    <p class="mb-8 max-w-3xl text-[#f9d1f9]" data-aos="fade-down">
                        Обладая более чем двулетним опытом в web-разработке, мы овладели искусством
                        рассказывать истории с помощью наших сайтов. Наша страсть заключается в том, чтобы
                        создавать сайты и превращать их в вечные воспоминания.
                    </p>

                    <!-- About Cards Section -->
                    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        <!-- Card 1 -->
                        <div class="rounded-lg bg-white p-6 text-center">
                            <h4 class="mb-2 text-3xl font-bold text-[#7216f4]">2+</h4>
                            <p class="text-gray-600">Года на рынке</p>
                        </div>
                        <div class="rounded-lg  bg-white p-6 text-center">
                            <h4 class="mb-2 text-3xl font-bold text-[#7216f4]">Множество</h4>
                            <p class="text-gray-600">Довольных клиентов</p>
                        </div>
                        <div class="rounded-lg bg-white p-6 text-center">
                            <h4 class="mb-2 text-3xl font-bold text-[#7216f4]">4.7</h4>
                            <p class="text-gray-600">Средняя оценка</p>
                        </div>
                        <div class="rounded-lg bg-white p-6 text-center">
                            <h4 class="mb-2 text-3xl font-bold text-[#7216f4]">10+</h4>
                            <p class="text-gray-600">Шаблонов сайтов</p>
                        </div>

                    </div>
                </div>

                <!-- Buttons Section -->
                <div class="flex flex-col sm:flex-row items-center gap-4 mt-8" data-aos="fade-up">
                    <NuxtLink to="https://t.me/TakaMorY"
                        class="cursor-pointer rounded-full border-2 py-3 px-8 border-white text-white hover:bg-white hover:text-purple-900 transition duration-300 ease-in-out">
                        Связаться с нами
                    </NuxtLink>
                </div>
            </div>
        </section>

        <section ref="section" class="relative py-10 sm:py-10 lg:py-24">
            <div class="absolute inset-0 -z-10 overflow-hidden">
                <div class="wave-bg"></div>
                <div class="wave-bg delay-1"></div>
                <div class="wave-bg delay-2"></div>
            </div>

            <div class="relative z-10 container mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Как мы работаем?</h2>
                <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div class="relative mt-12 lg:mt-20">
                        <div class="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                            <div>
                                <div
                                    class="flex items-center justify-center w-16 h-16 mx-auto rounded-full shadow bg-[#7216f4] transform duration-1500 hover:translate-x-2 hover:-translate-y-2 relative overflow-hidden">
                                    <span class="text-xl text-white font-semibold">1</span>
                                </div>
                                <h3 class="mt-6 text-xl font-semibold leading-tight md:mt-10">Выберете услугу
                                </h3>
                                <p class="mt-4 text-base md:text-lg">
                                    Выберете услугу в соответствии с вашими нуждами.
                                </p>
                            </div>
                            <div>
                                <div
                                    class="flex items-center justify-center w-16 h-16 mx-auto  rounded-full shadow bg-[#7216f4] transform duration-1500 hover:translate-x-2 hover:-translate-y-2 relative overflow-hidden">
                                    <span class="text-xl text-white font-semibold ">2</span>
                                </div>
                                <h3 class="mt-6 text-xl font-semibold leading-tight md:mt-10">Свяжитесь с нами
                                </h3>
                                <p class="mt-4 text-base  md:text-lg">
                                    Свяжитесь с нами и опишите задачу.
                                </p>
                            </div>
                            <div>
                                <div
                                    class="flex items-center justify-center w-16 h-16 mx-auto rounded-full shadow bg-[#7216f4] transform duration-1500 hover:translate-x-2 hover:-translate-y-2 relative overflow-hidden">
                                    <span class="text-xl text-white font-semibold ">3</span>
                                </div>
                                <h3 class="mt-6 text-xl  font-semibold leading-tight md:mt-10">Получите готовый товар
                                </h3>
                                <p class="mt-4 text-base  md:text-lg">
                                    Получите готовый товар, полностью соответствующий вашим требованиям.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>


    <footer class="bg-[#7216f4]">
        <div class="container mx-auto p-0 md:p-8 xl:px-0">
            <div class="mx-auto max-w-7xl px-6 pb-10 pt-16">
                <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                    <!-- Логотип и описание -->
                    <div class="space-y-4">
                        <div>
                            <NuxtLink  to="/">
                                <div class="flex items-center space-x-2 text-2xl font-medium">
                                    <span>
                                        <img src="" alt="" width="64" height="64" class="w-16">
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
                                    <NuxtLink  to=""
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
                                    <NuxtLink  to="#whyus"
                                        class="text-md leading-6 text-[#e2e2e2] hover:underline hover:underline-offset-4 transition-colors duration-300 hover:text-[#c8c8c8]">
                                        О нас
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink  to="https://t.me/TakaMorY"
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
                                    <NuxtLink  to=""
                                        class="text-md leading-6 text-[#e2e2e2] hover:underline hover:underline-offset-4 transition-colors duration-300 hover:text-[#c8c8c8]">
                                        Отзывы
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink  to="#features"
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

</template>
