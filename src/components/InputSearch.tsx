import React, { ChangeEvent } from "react";
import { makeStyles } from "@mui/styles";
import { SearchOutlined } from "@mui/icons-material";

interface InputProps {
    type: string
    name: string
    value?: string | number | undefined
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    onSelect?: (e: ChangeEvent<HTMLSelectElement>) => void
    placeholder: string
    data?: Array<any>
}

const InputSearch: React.FC<InputProps> = ({type,name,value,onChange,onSelect,placeholder,data}) => {
    const classes = useStyles()

    if(type === "select") {
        return (
            <div className={classes.formControl}>
                <select name={name} value={value} onChange={onSelect}>
                    <option value="">{placeholder}</option>
                    {data?.map((item, index) => (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>
        )
    }

  return (
    <div className={classes.formControl}>
        <SearchOutlined />
        <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder}  />
    </div>
  )
}

const useStyles = makeStyles({
    formControl: {
        height: 45,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        background: "#FFF",
        padding: "0.25rem 1rem",
        margin: "1rem 0",
        borderRadius: 5,
        "& input": {
            width: 250,
            height: "100%",
            outline: "none",
            border: "none",
        },
        "& select": {
            width: 100,
            height: "100%",
            outline: "none",
            border: "none",
        }
    }
})

export default InputSearch