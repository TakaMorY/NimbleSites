// server/api/auth/login.post.ts
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const storage = useStorage('auth')

    if (body.password === 'admin123') {
        await storage.setItem('auth:state', {
            isAdmin: true,
            loginTime: Date.now()
        })
        return { success: true }
    }

    return { success: false, error: 'Неверный пароль' }
})