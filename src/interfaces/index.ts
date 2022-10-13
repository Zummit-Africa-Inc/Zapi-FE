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
    name: string
    category: string
    description: string
    base_url: string
}

export interface EndpointProps {
    id?: string | undefined
    name: string
    route: string
    method: string
    description?: string
    headers?: Array<string>
    requestBody?: Array<string>
}

export interface ApiProps {
    id: string
    name:	string
    description: string
    base_url: string
    about?: string
    categoryId?:	string
    logo_url?: string
    api_website?: string
    term_of_use?: string
    visibility?: string
    secretKey?: string
    endpoints?: Array<EndpointProps | null>
}

export interface UserApis {
    apis: Array<ApiProps | null>
}

export interface HeaderObject {
    key: string
    value: string
}

export interface APIHeaderProps {
    id?: string
    name?: string
    base_url?: string
    description?: string
    logo_url?: string
    status?: string
    rating?: number
    service_level?: number
    latency?: number
}
