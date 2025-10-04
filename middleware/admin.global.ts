// middleware/admin.global.ts
export default defineNuxtRouteMiddleware((to) => {
    const { isAdmin } = useAuth()

    if (to.path === '/admin/login') {
        return
    }

    if (to.path.startsWith('/admin') && !isAdmin.value) {
        return navigateTo('/admin/login')
    }
})