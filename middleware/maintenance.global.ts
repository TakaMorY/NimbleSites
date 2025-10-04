// middleware/maintenance.global.ts
export default defineNuxtRouteMiddleware(async (to) => {
    // Разрешаем доступ к странице техобслуживания и админ-логина
    if (to.path === '/maintenance' || to.path === '/admin/login') {
        return
    }

    const { isAdmin } = useAuth()

    // Админы имеют доступ ко всем страницам
    if (isAdmin.value) {
        return
    }

    try {
        // Получаем актуальное состояние техобслуживания
        const state = await $fetch('/api/maintenance/state')

        // Если техобслуживание включено, перенаправляем на страницу техработ
        if (state.enabled) {
            return navigateTo('/maintenance')
        }
    } catch (error) {
        console.error('Error checking maintenance state:', error)
    }
})