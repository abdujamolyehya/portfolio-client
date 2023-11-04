import React from "react"
import Main from "@/components/Main/Main"
import Work from "@/components/Work/Work"
import About from "@/components/About/About"
import Contact from "@/components/Contact/Contact"

export default function Home() {
    return(
        <>
            <main className="pt-[80px] mobile:pt-[40px] bg-black">
                <Main/>
                <Work/>
                <About/>
                <Contact/>
            </main>
        </>
    )
}