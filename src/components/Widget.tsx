import { Typography } from '@mui/material'
import React from 'react'

interface WidgetProps{
    title?: string
    subtitle?: string
    span?: string
    className?: string
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

const Widget: React.FC<WidgetProps> = ({title,subtitle,className,span,onClick}) => {
    return (
        <>
            <div>
                <div className={className} onClick={onClick}>
                    <Typography sx={{fontWeight: 'bold'}} gutterBottom>{title}</Typography>
                    <Typography gutterBottom>{subtitle}</Typography>
                    <Typography sx={{fontSize: '2rem', fontWeight: 200}}>{span}</Typography>
                </div>
            </div>
        </>
    )
}

export default Widget