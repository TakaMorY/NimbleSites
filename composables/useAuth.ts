// composables/useAuth.ts
export const useAuth = () => {
  const adminSession = useState('adminSession', () => ({
    isLoggedIn: false,
    loginTime: null as number | null
  }))

  // Автоматически проверяем сохраненную сессию при создании композабла
  if (process.client) {
    const saved = localStorage.getItem('adminSession')
    if (saved) {
      try {
        const session = JSON.parse(saved)
        // Проверяем, не истекла ли сессия (7 дней)
        const sessionDuration = 7 * 24 * 60 * 60 * 1000
        if (session.loginTime && Date.now() - session.loginTime < sessionDuration) {
          adminSession.value = session
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
        isLoggedIn: true,
        loginTime: Date.now()
      }

      adminSession.value = session

      if (process.client) {
        localStorage.setItem('adminSession', JSON.stringify(session))
      }

      return true
    }
    return false
  }

  const logout = () => {
    adminSession.value = {
      isLoggedIn: false,
      loginTime: null
    }

    if (process.client) {
      localStorage.removeItem('adminSession')
    }
  }

  const isAdmin = computed(() => adminSession.value.isLoggedIn)

  return {
    adminSession: readonly(adminSession),
    login,
    logout,
    isAdmin
  }
}