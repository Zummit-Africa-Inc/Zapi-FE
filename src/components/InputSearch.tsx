import React, { ChangeEvent } from "react";
import { MdOutlineSearch } from "react-icons/md";

interface InputProps {
    type: string
    name: string
    value?: string | number | undefined
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    onSelect?: (e: ChangeEvent<HTMLSelectElement>) => void
    placeholder?: string
    data?: Array<any>
    className?: string
}

const InputSearch: React.FC<InputProps> = ({type,name,value,onChange,onSelect,placeholder,data,className}) => {

    if(type === "select") {
        return (
            <div className={className}>
                {placeholder ? 
                <select name={name} value={value} onChange={onSelect}>
                    <option value="">{placeholder}</option>
                    {data?.map((item, index) => (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    ))}
                </select> 
                : 
                <select name={name} value={value} onChange={onSelect}>
                    {data?.map((item, index) => (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
                }
            </div>
        )
    }

  return (
    <div className={className}>
        <MdOutlineSearch />
        <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder}  />
    </div>
  )
}

export default InputSearch