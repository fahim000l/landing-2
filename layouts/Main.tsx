import Footer from "@/components/Main/Footer"
import Header from "@/components/Main/Header"
import { Toaster } from "react-hot-toast"
import React from 'react'


interface props {
    children: React.ReactNode
}


const Main = ({ children }: props) => {


    return (
        <main className="bg-[#F4F4F4]" >
            <Header />
            {children}
            <Footer />
            <Toaster />
        </main>
    )

}


export default Main