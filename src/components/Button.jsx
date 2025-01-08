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
    <button className={` p-[10px_45px] font-bold cursor-pointer tracking-tight uppercase border border-solid border-transparent rounded-xl ${className} ${type} bg-[${bgColor}] text-${textColor}`}
    {...props}
    >
        {children}
    </button>
  )
}

export default Button
