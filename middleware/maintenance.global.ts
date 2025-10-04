// middleware/maintenance.global.ts
export default defineNuxtRouteMiddleware(async (to) => {
    if (to.path === '/maintenance' || to.path === '/admin/login') {
        return
    }

    const { isAdmin } = useAuth()

    if (isAdmin.value) {
        return
    }

    try {
        const state = await $fetch('/api/maintenance/state')

        if (state.enabled) {
            return navigateTo('/maintenance')
        }
    } catch (error) {
        console.error('Error checking maintenance state:', error)
    }
})