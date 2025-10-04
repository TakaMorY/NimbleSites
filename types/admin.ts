// types/admin.ts
export interface AdminSession {
    isLoggedIn: boolean
    loginTime: number
}

export interface MaintenanceState {
    enabled: boolean
    enabledAt?: number
    message?: string
}