// middleware/maintenance.global.ts
export default defineNuxtRouteMiddleware(async (to) => {
    // Если это страница техобслуживания или админ-логина, пропускаем
    if (to.path === '/maintenance' || to.path === '/admin/login') {
        return
    }

    // Получаем состояние техобслуживания с сервера
    try {
        const state = await $fetch('/api/maintenance/state')

        // Если техобслуживание включено и пользователь не админ
        const { isAdmin } = useAuth()
        if (state.enabled && !isAdmin.value) {
            return navigateTo('/maintenance')
        }
    } catch (error) {
        console.error('Failed to check maintenance state:', error)
    }
})