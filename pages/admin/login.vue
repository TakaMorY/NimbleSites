<!-- pages/admin/login.vue -->
<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
        <div class="max-w-md w-full">
            <div class="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
                <div class="text-center mb-8">
                    <div
                        class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <h1 class="text-2xl font-bold text-white">Вход в панель управления</h1>
                    <p class="text-gray-400 mt-2">Введите пароль администратора</p>
                </div>

                <form @submit.prevent="handleLogin" class="space-y-6">
                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-300 mb-2">
                            Пароль администратора
                        </label>
                        <input id="password" v-model="password" type="password" required
                            class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder="Введите пароль" :class="{ 'border-red-500': error }" />
                        <div v-if="error" class="text-red-400 text-sm mt-2 flex items-center">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {{ error }}
                        </div>
                    </div>

                    <button type="submit" :disabled="loading"
                        class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
                        <span v-if="loading" class="flex items-center justify-center">
                            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                            Вход...
                        </span>
                        <span v-else>Войти</span>
                    </button>
                </form>

                <div class="mt-4 p-3 bg-gray-800/50 rounded-lg">
                    <p class="text-gray-400 text-sm">Для тестирования используйте пароль: <code
                            class="text-purple-300">admin123</code></p>
                </div>

                <!-- Отладочная информация -->
                <div v-if="debug" class="mt-4 p-3 bg-yellow-500/20 rounded-lg">
                    <p class="text-yellow-400 text-sm">Отладка:</p>
                    <p class="text-yellow-400 text-sm">isAdmin: {{ isAdmin }}</p>
                    <p class="text-yellow-400 text-sm">Пароль введен: {{ password }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false
})

const { login, isAdmin } = useAuth()
const router = useRouter()

const password = ref('')
const error = ref('')
const loading = ref(false)
const debug = ref(true) // Включить для отладки

const handleLogin = () => {
    if (!password.value.trim()) {
        error.value = 'Введите пароль'
        return
    }

    loading.value = true
    error.value = ''

    // Используем setTimeout чтобы дать интерфейсу обновиться
    setTimeout(() => {
        try {
            const success = login(password.value)

            if (success) {
                console.log('Login successful, isAdmin:', isAdmin.value)
                // Используем window.location для надежного перехода
                window.location.href = '/admin'
            } else {
                error.value = 'Неверный пароль'
            }
        } catch (err) {
            error.value = 'Ошибка при входе'
            console.error('Login error:', err)
        } finally {
            loading.value = false
        }
    }, 100)
}

// Если уже залогинен, перенаправляем
onMounted(() => {
    if (isAdmin.value) {
        window.location.href = '/admin'
    }
})
</script>