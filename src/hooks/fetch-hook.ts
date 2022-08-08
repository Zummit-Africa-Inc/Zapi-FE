import { useCallback, useEffect, useRef, useState } from "react";

export const useHttpRequest = () => {
    const [loading, setLoading] = useState<string>("idle")
    const [error, setError] = useState<any>(null)

    const activeHttpRequests = useRef(<any>[])

    const sendRequest = useCallback(async(url = "", method = "GET", body = null, headers = {}) => {
        setLoading("pending")

        const httpAbortCtrl = new AbortController()
        activeHttpRequests.current.push(httpAbortCtrl)

        try {
            const response  = await fetch(url,{
                method,
                body,
                headers,
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