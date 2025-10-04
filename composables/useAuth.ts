// composables/useAuth.ts
export const useAuth = () => {
    const isAdmin = useState('isAdmin', () => false)

    // Проверяем сохраненную сессию
    if (process.client) {
        const saved = localStorage.getItem('adminSession')
        if (saved) {
            try {
                const session = JSON.parse(saved)
                const sessionDuration = 7 * 24 * 60 * 60 * 1000 // 7 дней
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

    const login = (password: string): boolean => {
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
        login,
        logout
    }
}