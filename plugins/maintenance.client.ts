// plugins/maintenance.client.ts
export default defineNuxtPlugin(async () => {
    const { state, load } = useMaintenance()

    // Загружаем начальное состояние
    await load()

    // Обновляем состояние каждые 3 секунды
    if (process.client) {
        setInterval(async () => {
            await load()
        }, 3000)
    }

    // Следим за изменениями состояния
    watch(state, (newState) => {
        if (process.client) {
            const { isAdmin } = useAuth()
            const route = useRoute()

            // Если техобслуживание включено, пользователь не админ и не на странице техобслуживания
            if (newState.enabled && !isAdmin.value && route.path !== '/maintenance') {
                navigateTo('/maintenance')
            }

            // Если техобслуживание выключено и пользователь на странице техобслуживания
            if (!newState.enabled && route.path === '/maintenance') {
                navigateTo('/')
            }
        }
    })
})