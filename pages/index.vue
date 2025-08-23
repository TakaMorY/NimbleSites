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
        <section class="bg-gradient-to-br from-gray-900 to-gray-800">
            <div class="flex items-center bg-gradient-to-r from-purple-600/20 to-blue-500/20">
                <div class="flex items-center pl-8 md:pl-16 lg:pl-24">
                    <h1 class="mt-70 mb-70 text-4xl md:text-5xl font-bold leading-tight transition-all duration-2000 ease-out"
                        :class="visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'">
                        <span class="block text-white">РАЗРАБОТКА <span class="text-[#f9d1f9]">САЙТА</span></span>
                        <span class="block text-white">ПОД ЗАКАЗ</span>
                        <!-- <img src="C:\Users\User\Desktop\Работа\nimblesites\assets\pantone_10279548.png"
                        alt="Пример рекламного сайта" class="w-25 max-w-md"> -->
                        <div class="text-lg text-white mt-14 md:mt-9 mb-12 md:mb-16 max-w-2xl mx-auto">
                            <p>Мы создаем современные веб-сайты, которые не просто красиво выглядят, а
                                эффективно
                                работают
                                на ваш бизнес. Каждый проект - это индивидуальное решение, учитывающее специфику
                                вашей
                                ниши
                                и целевой аудитории.</p>
                            <p>
                                От лаконичных лендингов до сложных интернет-магазинов - мы реализуем проекты
                                любой
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
            <div>
                <TelegramButton />
            </div>
        </section>
        <section class="pt-12 bg-gray-900" id="cardstovar">
            <CardsTovar />
        </section>


        <section id="whyus"
            class="relative py-20 md:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
            <!-- Декоративные элементы -->
            <WhyUs />
        </section>

        <section>
            <HowWorking />
        </section>
    </main>



</template>