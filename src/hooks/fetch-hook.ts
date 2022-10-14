import { useCallback, useEffect, useRef, useState } from "react";
import Cookies from 'universal-cookie'
import { API } from "aws-amplify";

type MethodTypes = "get" | "post" | "patch" | "del" | "put";
// type MethodTypes = "GET" | "POST" | "PATCH" | "DEL" | "PUT";
export const useHttpRequest = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<any>(null)
    const cookies = new Cookies()

    const activeHttpRequests = useRef(<any>[])

    const sendRequest = useCallback(async(url: string, method: MethodTypes, apiName:string, body?: object, headers={}): Promise<any> => {
        setLoading(true)

        const httpAbortCtrl = new AbortController()
        activeHttpRequests.current.push(httpAbortCtrl)

        try {
            let requestExtraParams = {
                headers: {
                    'Zapi_Auth_token': cookies.get('accessToken'),
                    ...headers,
                },
                body
            }
            const response = await API[`${method}`](apiName, url, requestExtraParams)
            const data = await response.data
            activeHttpRequests.current = activeHttpRequests.current.filter((reqCtrl: any) => {
                reqCtrl !== httpAbortCtrl
            })
            if(!response.success) {
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