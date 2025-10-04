// middleware/maintenance.global.ts
export default defineNuxtRouteMiddleware((to) => {
    const maintenanceMode = true // Переключите при необходимости

    // Если режим техобслуживания ВКЛЮЧЕН
    if (maintenanceMode) {
        // Редиректим все запросы на страницу техобслуживания
        if (to.path !== '/maintenance') {
            return navigateTo('/maintenance')
        }
    }
    // Если режим техобслуживания ВЫКЛЮЧЕН
    else {
        // Блокируем доступ к странице техобслуживания
        if (to.path === '/maintenance') {
            return navigateTo('/')
        }
    }
})