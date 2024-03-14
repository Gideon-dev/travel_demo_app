"use client"

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { useState } from "react"


const Navbar = () => {
    const [isClicked, setisClicked] = useState(false);
   
    function handleClick(){
        setisClicked(!isClicked)
    }
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/"   className={isClicked ? `hidden`:`flex`}>
            <Image src="/hilink-logo.svg" 
            alt="logo" 
            width={74}
            height={29}
            />
        </Link>
        
        <ul className={`${isClicked?`flex flex-col`:`hidden`}  h-full md:flexCenter gap-12 lg:flex`}>
            {NAV_LINKS.map((link)=> (
                <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                    {link.label}
                </Link>
            ))}

        </ul>

        <div className="lg:flexCenter hidden" onClick={handleClick}>
            <Button 
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
            />
        </div>
        
        <button className="flex self-start" onClick={handleClick}>
            <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        
        />
        </button>
        
    </nav>
  )
}

export default Navbar