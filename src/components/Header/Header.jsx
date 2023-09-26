import React from "react";
import Link from "next/link";

export default function Header() {
    const headerLinks = [
        {
            name: 'Work',
            path: '/#work',
            id: 'work'
        },
        {
            name: 'About',
            path: '/#about',
            id: 'about'
        },
        {
            name: 'Blog',
            path: '/blog',
            id: 'blog'
        },
        {
            name: 'Contact',
            path: '/#contact',
            id: 'contact'
        }
    ]
    return(
        <>
            <header className="bg-black opacity-[90%] py-[20px] backdrop-blur-[10px] fixed z-[10] w-full">
                <nav className="container">
                    <ul className="flex gap-[24px] justify-center">
                        {
                            headerLinks.map((link) => (
                                <Link key={link.id} href={link.path}>
                                    <li className="inter600 text-[16px] leading-[24px] text-white py-[8px] px-[14px] hover:bg-gray hover:border-lightgray border-black border-[1px] border-solid rounded-[8px] ease-in-out duration-500">
                                        {link.name}
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>
                </nav>
            </header>
        </>
    )
}