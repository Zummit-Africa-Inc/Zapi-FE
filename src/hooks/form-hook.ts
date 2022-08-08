import { ChangeEvent, useReducer } from "react";


export const useFormInputs = (initialState: any) => {
    const reducer = (state: typeof initialState, payload: { name: string, value: string}) => {
        return {
            ...state,
            [payload.name]: payload.value
        }
    };

    const [inputs, dispatch] = useReducer(reducer, initialState);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({ name: e.target.name, value: e.target.value})
    };

    return { inputs, bind: { onChange: handleChange }};
};