import { useCallback, useEffect, useRef, useState } from "react";
import Cookies from 'universal-cookie'

export const useHttpRequest = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<any>(null)
    const cookies = new Cookies()

    const activeHttpRequests = useRef(<any>[])

    const sendRequest = useCallback(async(url: string, method: string, body?: string, headers={}): Promise<any> => {
        setLoading(true)

        const httpAbortCtrl = new AbortController()
        activeHttpRequests.current.push(httpAbortCtrl)

        try {
            const response  = await fetch(url,{
                method,
                body,
                headers: {
                    'Zapi_Auth_token': cookies.get('accessToken'),
                    'Content-Type': 'application/json',
                    ...headers,
                },
                // signal: httpAbortCtrl.signal
            })
            const data = await response.json()
            activeHttpRequests.current = activeHttpRequests.current.filter((reqCtrl: any) => {
                reqCtrl !== httpAbortCtrl
            })
            if(!response.ok) {
                throw new Error(data.message)
            }
            setLoading(false)
            return data
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    },[])

    useEffect(() => {
        return () => activeHttpRequests.current.forEach((abortCtrl: any) => {
            abortCtrl.abort()
        })
    })

    const clearError = () => setError(null)

    return { loading, error, sendRequest, clearError }
}