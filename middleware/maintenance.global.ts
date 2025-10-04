// middleware/maintenance.global.ts
export default defineNuxtRouteMiddleware((to) => {
    const { isAdmin } = useAuth()
    const { state } = useMaintenance()

    if (to.path === '/maintenance' || to.path === '/admin/login') {
        return
    }

    if (isAdmin.value) {
        return
    }

    if (state.value.enabled) {
        return navigateTo('/maintenance')
    }
})