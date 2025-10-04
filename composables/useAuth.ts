// composables/useAuth.ts
export const useAuth = () => {
    const isAdmin = ref(false)

    const init = () => {
        if (process.client) {
            const saved = localStorage.getItem('adminSession')
            if (saved) {
                try {
                    const session = JSON.parse(saved)
                    // Проверяем срок действия сессии (30 дней)
                    const sessionDuration = 30 * 24 * 60 * 60 * 1000
                    if (session.loginTime && Date.now() - session.loginTime < sessionDuration) {
                        isAdmin.value = true
                    } else {
                        localStorage.removeItem('adminSession')
                    }
                } catch (e) {
                    localStorage.removeItem('adminSession')
                }
            }
        }
    }

    const login = (password: string) => {
        // Простая проверка пароля
        if (password === 'admin123') {
            const session = {
                isAdmin: true,
                loginTime: Date.now()
            }

            isAdmin.value = true

            if (process.client) {
                localStorage.setItem('adminSession', JSON.stringify(session))
            }

            return true
        }
        return false
    }

    const logout = () => {
        isAdmin.value = false

        if (process.client) {
            localStorage.removeItem('adminSession')
        }
    }

    return {
        isAdmin: readonly(isAdmin),
        init,
        login,
        logout
    }
}