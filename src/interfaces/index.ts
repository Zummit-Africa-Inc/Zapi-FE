export interface DeviceInfo {
    browserFullVersion: string
    browserMajorVersion: string
    browserName: string
    engineName: string
    engineVersion: string
    isBrowser: boolean
    osName: string
    osVersion: string
    userAgent: string
}

export interface Location {
    lat: number
    lon: number
    time: number
}

export interface AddApiProps {
    category: string
    description: string
    baseUrl: string
    visibility: "private" | "public"
    about?: string
    readMe?: File | null
    documentation?: File | null
    website?: string
    additionalInfo?: string
}

export interface EndpointProps {
    id: string | undefined
    name: string
    route: string
    method: string
}