import React from 'react'

const Button = ({
    children,
    type="button",
    bgColor="#512da8",
    textColor="red",
    className ="",
    ...props
}) => {
  return (
    <button className={`  font-bold cursor-pointer tracking-tight uppercase border border-solid border-transparent  ${className} ${type} bg-[${bgColor}] text-${textColor}`}
    {...props}
    >
        {children}
    </button>
  )
}

export default Button
