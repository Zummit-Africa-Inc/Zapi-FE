import { ChangeEvent, MouseEvent } from "react"
import InputSearch from "./InputSearch"
import { DATATYPE } from "../testdata"
import { makeStyles } from "@mui/styles"

interface PostComponentProps {
    payload: string
    dataType: string
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    handleSelect: (e: ChangeEvent<HTMLSelectElement>) => void
    addFormField: (e: MouseEvent<HTMLButtonElement>) => void
    removeFormField: (e: MouseEvent<HTMLButtonElement>) => void
}

const PostComponent: React.FC<PostComponentProps> = ({payload, dataType, handleChange, handleSelect, addFormField, removeFormField}) => {
    const classes = useStyles()

    const requestBody=[{payload, dataType}]
    return (
        <>
            
        </>
    )
}

export default PostComponent

const useStyles = makeStyles({
    
})