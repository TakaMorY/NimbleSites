// middleware/maintenance.global.ts
export default defineNuxtRouteMiddleware(async (to) => {
    const { isAdmin } = useAuth()

    // Для админов не применяем ограничения
    if (isAdmin.value) {
        return
    }

    try {
        // Получаем актуальное состояние с сервера
        const state = await $fetch('/api/maintenance/state')

        // Если техработы включены и пользователь не на странице техработ
        if (state.enabled && to.path !== '/maintenance') {
            return navigateTo('/maintenance')
        }

        // Если техработы выключены и пользователь на странице техработ
        if (!state.enabled && to.path === '/maintenance') {
            return navigateTo('/')
        }
    } catch (error) {
        console.error('Failed to check maintenance state:', error)
    }
})