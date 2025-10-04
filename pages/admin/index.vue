<!-- pages/admin/index.vue -->
<template>
    <div class="min-h-screen bg-gray-900">
        <header class="bg-gray-800 border-b border-gray-700">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex items-center">
                        <h1 class="text-xl font-bold text-white">Панель управления</h1>
                    </div>
                    <div class="flex items-center space-x-4">
                        <span class="text-gray-300">Администратор</span>
                        <button @click="handleLogout"
                            class="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                            Выйти
                        </button>
                    </div>
                </div>
            </div>
        </header>

        <main class="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div class="space-y-6">
                <!-- Карточка управления техобслуживанием -->
                <div class="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-lg font-semibold text-white">Управление техобслуживанием</h2>
                        <div class="flex items-center space-x-2">
                            <span class="px-3 py-1 rounded-full text-sm font-medium"
                                :class="state.enabled ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'">
                                {{ state.enabled ? 'ВКЛЮЧЕНО' : 'выключено' }}
                            </span>
                            <button @click="refreshState" class="p-1 text-gray-400 hover:text-white transition-colors"
                                title="Обновить состояние">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <p class="text-gray-400 mb-6">
                        При включении этого режима все пользователи на всех устройствах будут автоматически
                        перенаправлены на страницу технического обслуживания.
                    </p>

                    <div class="flex flex-col sm:flex-row gap-4">
                        <button v-if="!state.enabled" @click="enableMaintenance" :disabled="loading"
                            class="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                            {{ loading ? 'Включение...' : 'Включить техработы' }}
                        </button>

                        <button v-else @click="disableMaintenance" :disabled="loading"
                            class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {{ loading ? 'Отключение...' : 'Отключить техработы' }}
                        </button>
                    </div>

                    <!-- Статус операции -->
                    <div v-if="operationStatus" class="mt-4 p-3 rounded-lg"
                        :class="operationStatus.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'">
                        {{ operationStatus.message }}
                    </div>

                    <div v-if="state.enabled" class="mt-6 p-4 bg-gray-700/50 rounded-xl">
                        <div class="text-center">
                            <p class="text-green-400 font-medium">✅ Глобальный режим техобслуживания АКТИВЕН</p>
                            <p class="text-gray-400 text-sm mt-1">Все пользователи автоматически перенаправляются на
                                страницу техработ</p>
                            <p class="text-gray-400 text-sm mt-2" v-if="state.enabledAt">
                                Включен: {{ formatDate(state.enabledAt) }}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Информация о системе -->
                <div class="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
                    <h3 class="text-lg font-semibold text-white mb-4">Информация о системе</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="space-y-3">
                            <div class="flex justify-between">
                                <span class="text-gray-400">Статус сервера</span>
                                <span class="text-green-400 font-medium">Online</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-400">Режим техработ</span>
                                <span :class="state.enabled ? 'text-red-400' : 'text-green-400'" class="font-medium">
                                    {{ state.enabled ? 'ВКЛЮЧЕН' : 'выключен' }}
                                </span>
                            </div>
                        </div>
                        <div class="space-y-3">
                            <div class="flex justify-between">
                                <span class="text-gray-400">Авторизация</span>
                                <span class="text-green-400 font-medium">Администратор</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-400">Обновление</span>
                                <span class="text-blue-400 font-medium">Авто (2 сек)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Тестирование -->
                <div class="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
                    <h3 class="text-lg font-semibold text-white mb-4">Тестирование</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button @click="testAsUser"
                            class="p-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors duration-200">
                            Открыть сайт как пользователь
                        </button>
                        <button @click="openNewAdmin"
                            class="p-4 bg-purple-600 hover:bg-purple-700 rounded-lg text-white transition-colors duration-200">
                            Открыть новую админ-сессию
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
const { logout } = useAuth()
const { state, loadState, enableMaintenance, disableMaintenance } = useMaintenance()

const loading = ref(false)
const operationStatus = ref<{ type: 'success' | 'error', message: string } | null>(null)

const handleLogout = () => {
    logout()
    navigateTo('/admin/login')
}

const refreshState = async () => {
    await loadState()
    showStatus('success', 'Состояние обновлено')
}

const enableMaintenance = async () => {
    loading.value = true
    operationStatus.value = null

    try {
        const success = await enableMaintenance()
        if (success) {
            showStatus('success', 'Техобслуживание включено глобально')
            // Обновляем состояние после изменения
            await loadState()
        } else {
            showStatus('error', 'Ошибка при включении техобслуживания')
        }
    } catch (error) {
        console.error('Error enabling maintenance:', error)
        showStatus('error', 'Ошибка при включении техобслуживания')
    } finally {
        loading.value = false
    }
}

const disableMaintenance = async () => {
    loading.value = true
    operationStatus.value = null

    try {
        const success = await disableMaintenance()
        if (success) {
            showStatus('success', 'Техобслуживание отключено глобально')
            // Обновляем состояние после изменения
            await loadState()
        } else {
            showStatus('error', 'Ошибка при отключении техобслуживания')
        }
    } catch (error) {
        console.error('Error disabling maintenance:', error)
        showStatus('error', 'Ошибка при отключении техобслуживания')
    } finally {
        loading.value = false
    }
}

const showStatus = (type: 'success' | 'error', message: string) => {
    operationStatus.value = { type, message }
    setTimeout(() => {
        operationStatus.value = null
    }, 5000)
}

const testAsUser = () => {
    window.open('/', '_blank')
}

const openNewAdmin = () => {
    window.open('/admin', '_blank')
}

const formatDate = (timestamp: number | null) => {
    if (!timestamp) return 'Неизвестно'
    return new Date(timestamp).toLocaleString('ru-RU')
}

// Загружаем состояние при монтировании
onMounted(async () => {
    await loadState()
    console.log('Admin panel mounted, maintenance state:', state.value)
})
</script>