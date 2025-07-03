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
</style>




<template>

    <header class="bg-[#7216f4]">
        <div class="top-0 py-1 lg:py-2 w-full bg-transparent lg:relative z-50 h-auto overflow-x-hidden">
            <nav class="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:py-4">
                <div class="flex items-center justify-between ">
                    <div class="flex items-center space-x-2">
                        <h2 class="text-[#f9d1f9]  font-bold text-2xl">NimbleSites</h2>
                    </div>





                    <div class="hidden lg:block ">
                        <div class="flex space-x-10 text-base font-bold text-black/60 ">
                            <div
                                class="text-[#e2e2e2] hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                <NuxtLink to="#cardstovar">Услуги</NuxtLink>
                            </div>
                            <div
                                class="text-[#e2e2e2] hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                <NuxtLink to="/contact">Контакты</NuxtLink>
                            </div>
                            <div
                                class="text-[#e2e2e2] hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                <NuxtLink to="/about">О нас</NuxtLink>
                            </div>
                            <div
                                class="text-[#e2e2e2] hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                <NuxtLink to="/cabinet">Услуги</NuxtLink>
                            </div>
                        </div>
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
                <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">С чем я могу вам помочь?</h2>

                <!-- Сетка карточек -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all">

                    <!-- Карточка 1 -->
                    <div
                        class="bg-[#7216f4] rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-white relative overflow-hidden">
                        <div
                            class="absolute top-5 right-5 w-10 h-10 bg-black rounded-full flex items-center justify-center transition-all group-hover:bg-black/90 hover:scale-110">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </div>

                        <h3 class="text-xl font-semibold mb-18">Веб-дизайн</h3>
                        <div class="bg-white/20 text-sm px-3 py-1 rounded-full mb-3 inline-block">7-14 дней</div>
                        <p class="text-white/80 mb-4">Создание современных интерфейсов</p>
                        <div class="text-[#f9d1f9] font-bold text-lg">от 30 000 ₽</div>
                    </div>

                    <!-- Карточка 2 -->
                    <div
                        class="bg-[#f9d1f9] rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-gray-800 relative overflow-hidden">
                        <div
                            class="absolute top-5 right-5 w-10 h-10 bg-black rounded-full flex items-center justify-center transition-all group-hover:bg-black/90 hover:scale-110">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </div>

                        <h3 class="text-xl font-semibold mb-18">Дизайн презентаций</h3>
                        <div class="bg-[#7216f4]/20 text-sm px-3 py-1 rounded-full mb-3 inline-block">3-7 дней</div>
                        <p class="text-gray-600 mb-4">Профессиональные слайды</p>
                        <div class="text-[#7216f4] font-bold text-lg">от 50 000 ₽</div>
                    </div>

                    <!-- Карточка 3 -->
                    <div
                        class="bg-[#7216f4] rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-white relative overflow-hidden">
                        <div
                            class="absolute top-5 right-5 w-10 h-10 bg-black rounded-full flex items-center justify-center transition-all group-hover:bg-black/90 hover:scale-110">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </div>

                        <h3 class="text-xl font-semibold mb-18">Дизайн карточек</h3>
                        <div class="bg-white/20 text-sm px-3 py-1 rounded-full mb-3 inline-block">5-10 дней</div>
                        <p class="text-white/80 mb-4">Визуал для продуктов</p>
                        <div class="text-[#f9d1f9] font-bold text-lg">от 50 000 ₽</div>
                    </div>

                    <!-- Карточка 4 -->
                    <div
                        class="bg-[#f9d1f9] rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-gray-800 relative overflow-hidden">
                        <div
                            class="absolute top-5 right-5 w-10 h-10 bg-black rounded-full flex items-center justify-center transition-all group-hover:bg-black/90 hover:scale-110">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </div>

                        <h3 class="text-xl font-semibold mb-18">Оформление соц. сетей</h3>
                        <div class="bg-[#7216f4]/20 text-sm px-3 py-1 rounded-full mb-3 inline-block">7-14 дней</div>
                        <p class="text-gray-600 mb-4">Контент для Instagram и др.</p>
                        <div class="text-[#7216f4] font-bold text-lg">от 30 000 ₽</div>
                    </div>

                    <!-- Карточка 5 -->
                    <div
                        class="bg-[#7216f4] rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-white relative overflow-hidden">
                        <div
                            class="absolute top-5 right-5 w-10 h-10 bg-black rounded-full flex items-center justify-center transition-all group-hover:bg-black/90 hover:scale-110">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </div>

                        <h3 class="text-xl font-semibold mb-18">Обработка фото</h3>
                        <div class="bg-white/20 text-sm px-3 py-1 rounded-full mb-3 inline-block">1-3 дня</div>
                        <p class="text-white/80 mb-4">Ретушь и коррекция</p>
                        <div class="text-[#f9d1f9] font-bold text-lg">от 10 000 ₽</div>
                    </div>

                    <!-- Карточка 6 -->
                    <div
                        class="bg-[#f9d1f9] rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-gray-800 relative overflow-hidden">
                        <div
                            class="absolute  top-5 right-5 w-10 h-10 bg-black rounded-full flex items-center justify-center transition-all group-hover:bg-black/90 hover:scale-110">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </div>

                        <h3 class="text-xl font-semibold mb-18">Работа с нейросетями</h3>
                        <div class="bg-[#7216f4]/20 text-sm px-3 py-1 rounded-full mb-3 inline-block">3-5 дней</div>
                        <p class="text-gray-600 mb-4">AI-решения для бизнеса</p>
                        <div class="text-[#7216f4] font-bold text-lg">от 20 000 ₽</div>
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
                        вид вашего сайта, от цветовой гаммы до размера шрифта, исходя из вашиз предпочтений.
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
        </section>

        <section ref="section" class="relative py-10 sm:py-10 lg:py-24 mt-20 mb-20">
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
                    <div class="space-y-4">
                        <div>
                            <a href="/">
                                <div class="flex items-center space-x-2 text-2xl font-medium">
                                    <span>
                                        <img src="" alt="" width="64" height="64" class="w-16">
                                    </span>
                                    <span class="text-[#f9d1f9]">NimbleSites</span>
                                </div>

                            </a>
                        </div>
                        <div class="max-w-md pr-16 text-md text-[#c8c8c8]">Повысьте производительность и эффективность
                            вашего бизнеса с помощью передовых решений в веб-разработке.
                        </div>
                        <!-- <div class="flex space-x-2">
                            <a href="" target="_blank" class="text-gray-200 hover:text-gray-200">
                                <span class="sr-only">Linkedin</span><svg fill="currentColor" viewBox="0 0 24 24"
                                    class="h-6 w-6" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </a>
                            <a href="" target="_blank" class="text-gray-200 hover:text-gray-200">
                                <span class="sr-only">Twitter</span><svg fill="currentColor" viewBox="0 0 24 24"
                                    class="h-6 w-6" aria-hidden="true">
                                    <path
                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                                    </path>
                                </svg>
                            </a>
                        </div> -->
                    </div>
                    <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div class="md:grid md:grid-cols-2 md:gap-8">
                            <div class="mt-10 md:mt-0">
                                <h3 class="text-md font-semibold leading-6 text-[#fbfbfb]">Компания</h3>
                                <ul role="list" class="mt-6 space-y-4">
                                    <li>
                                        <a href="/aboutus"
                                            class="text-md leading-6 text-[#e2e2e2] hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-500 ease-linear ease-in-out ease-in-out   hover:text-[c8c8c8]">О
                                            нас
                                        </a>
                                    </li>
                                    <!-- <li>
                                        <a href="/careers"
                                            class="text-md leading-6 text-[#e2e2e2] hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-500 ease-linear ease-in-out ease-in-out   hover:text-[c8c8c8]">Careers
                                        </a>
                                    </li> -->
                                    <li>
                                        <a href="/contactus"
                                            class="text-md leading-6 text-[#e2e2e2] hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-500 ease-linear ease-in-out ease-in-out   hover:text-[c8c8c8]">Связаться
                                            с нами
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <!-- <div>
                                <h3 class="text-md font-semibold leading-6 text-[#fbfbfb]">Our Solutions</h3>
                                <ul role="list" class="mt-6 space-y-4 ">
                                    <li>
                                        <a href="/aiplatform"
                                            class="text-md leading-6 text-[#e2e2e2] hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-500 ease-linear ease-in-out   hover:text-[c8c8c8]">AI
                                            Platform
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/aialgorithms"
                                            class="text-md leading-6 text-[#e2e2e2] hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-500 ease-linear ease-in-out   hover:text-[c8c8c8]">AI
                                            Algorithms
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/industryapplications"
                                            class="text-md leading-6 text-[#e2e2e2]  hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-500 ease-linear ease-in-out   hover:text-[c8c8c8]">Industry
                                            Applications
                                        </a>
                                    </li>
                                </ul>
                            </div> -->
                            <div class="mt-10 md:mt-0">
                                <h3 class="text-md font-semibold leading-6 text-[#fbfbfb]">Пользователю</h3>
                                <ul role="list" class="mt-6 space-y-4">
                                    <li>
                                        <a href="/predictiveanalysis"
                                            class="text-md leading-6 text-[#e2e2e2] hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-500 ease-linear ease-in-out ease-in-out   hover:text-[c8c8c8]">Predictive
                                            Analysis
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/customerexperience"
                                            class="text-md leading-6 text-[#e2e2e2] hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-500 ease-linear ease-in-out ease-in-out   hover:text-[c8c8c8]">Отзывы
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/automation"
                                            class="text-md leading-6 text-[#e2e2e2] hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-500 ease-linear ease-in-out ease-in-out   hover:text-[c8c8c8]">Наши
                                            работы
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 class="text-md font-semibold leading-6 text-[#fbfbfb]">Ресурсы</h3>
                                <ul role="list" class="mt-6 space-y-4">
                                    <li>
                                        <a href="/pricing"
                                            class="text-md leading-6 text-[#e2e2e2] hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-500 ease-linear ease-in-out ease-in-out   hover:text-[c8c8c8]">Услуги
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/casestudies"
                                            class="text-md leading-6 text-[#e2e2e2] hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-500 ease-linear ease-in-out ease-in-out  hover:text-[c8c8c8]">Шаблоны
                                            работ

                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24">
                    <div class="text-md text-center text-white">
                        Все права защищены © 2025 . Созданно
                        <span class="text-[#c8c8c8]">♥</span>
                        <a rel="noopener" href="/"> NimbleSites.
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

</template>
