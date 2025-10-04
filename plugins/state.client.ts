// plugins/state.client.ts
export default defineNuxtPlugin(() => {
    // Инициализируем состояния на клиенте
    const adminSession = useState('adminSession', () => ({
        isLoggedIn: false,
        loginTime: 0
    }))

    const maintenanceState = useState('maintenanceState', () => ({
        enabled: false
    }))
})