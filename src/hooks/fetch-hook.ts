import { useCallback, useEffect, useRef, useState } from "react";
import Cookies from 'universal-cookie'

export const useHttpRequest = () => {
    const [loading, setLoading] = useState<string>("idle")
    const [error, setError] = useState<any>(null)
    const cookies = new Cookies()

    const activeHttpRequests = useRef(<any>[])

    const sendRequest = useCallback(async(url = "", method = "GET", body = null, headers = {}) => {
        setLoading("pending")

        const httpAbortCtrl = new AbortController()
        activeHttpRequests.current.push(httpAbortCtrl)

        try {
            const response  = await fetch(url,{
                method,
                body,
                headers: {
                    'Authorization': cookies.get('accessToken'),
                    ...headers,
                },
                signal: httpAbortCtrl.signal
            })
            const data = await response.json()
            activeHttpRequests.current = activeHttpRequests.current.filter((reqCtrl: any) => {
                reqCtrl !== httpAbortCtrl
            })
            if(!response.ok) {
                throw new Error(data.message)
            }
            setLoading("fulfilled")
            return data
        } catch (error) {
            setError(error)
            setLoading("rejected")
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