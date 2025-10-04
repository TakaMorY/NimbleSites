// middleware/maintenance.global.ts
export default defineNuxtRouteMiddleware((to) => {
    const { isAdmin } = useAuth()
    const { state } = useMaintenance()

    // Разрешаем доступ к странице техобслуживания и админ-логина
    if (to.path === '/maintenance' || to.path === '/admin/login') {
        return
    }

    // Админы имеют доступ ко всем страницам
    if (isAdmin.value) {
        return
    }

    // Если техобслуживание включено, перенаправляем
    if (state.value.enabled) {
        return navigateTo('/maintenance')
    }
})