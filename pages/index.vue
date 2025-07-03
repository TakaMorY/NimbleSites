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






definePageMeta({
    layout: 'default' // Явное указание layout
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

:target {
    scroll-margin-top: 5rem;
}
</style>




<template>

    

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


    
</template>
