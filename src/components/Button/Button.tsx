import React from 'react'

interface ButtonProps {
    label?: string,
    primary?:boolean,
    disabled?: boolean,
    size?: "small" | "medium" | "large",
}

const Button = (props: ButtonProps) =>  (
    <button> {props?.label} </button>
)

export default Button;