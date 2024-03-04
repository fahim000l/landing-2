import React from 'react'



interface props {
    onClick?: () => void;
    children: React.ReactNode;
    type?: "submit" | "reset" | "button" | undefined
}


const Button = ({ onClick, children, type }: props) => {

    return (

        <>
            <button type={type} onClick={onClick} className="lg:rounded-[10px] rounded-[5px] px-5 py-2 bg-[#FFD4A5] hover:bg-[#a07445] text-[#FF8600] hover:text-[#ffffff] lg:w-[234px] w-[120px] font-semibold lg:text-lg text-sm">{children}</button>
        </>
    )
}


export default Button