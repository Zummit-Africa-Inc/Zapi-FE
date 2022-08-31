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