// middleware/maintenance.global.ts
export default defineNuxtRouteMiddleware((to) => {
    const { isAdmin } = useAuth()
    const { isMaintenanceEnabled } = useMaintenance()

    // Если техработы включены
    if (isMaintenanceEnabled.value) {
        // Админы имеют доступ ко всем страницам
        if (isAdmin.value) {
            return
        }

        // Обычные пользователи перенаправляются на страницу техработ
        if (to.path !== '/maintenance') {
            return navigateTo('/maintenance')
        }
    }
    // Если техработы выключены
    else {
        // Блокируем доступ к странице техработ для всех
        if (to.path === '/maintenance') {
            return navigateTo('/')
        }
    }
})