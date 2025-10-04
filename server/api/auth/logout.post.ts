// server/api/auth/logout.post.ts
export default defineEventHandler(async (event) => {
    const storage = useStorage('auth')
    await storage.setItem('auth:state', {
        isAdmin: false,
        loginTime: null
    })

    return { success: true }
})