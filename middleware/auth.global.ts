// middleware/auth.global.ts
export default defineNuxtRouteMiddleware((to) => {
    const { isAdmin } = useAuth()

    // Разрешаем доступ к странице логина без авторизации
    if (to.path === '/admin/login') {
        return
    }

    // Защита админских страниц
    if (to.path.startsWith('/admin') && !isAdmin.value) {
        return navigateTo('/admin/login')
    }
})