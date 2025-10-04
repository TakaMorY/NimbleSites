export default defineNuxtRouteMiddleware((to) => {
    const maintenanceMode = true // Переключите при необходимости

    if (maintenanceMode && to.path !== '/maintenance') {
        return navigateTo('/maintenance')
    }
})