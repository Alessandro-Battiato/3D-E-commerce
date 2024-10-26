import navLinks from "@/data/navLinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import sneakersLogo from "../../images/logo.svg";
import cartIcon from "../../images/icon-cart.svg";
import avatar from "../../images/image-avatar.png";
// TO DO: Implement sidebar for smaller devices
const Navbar = () => {
    return (
        <header className="fixed flex w-full px-44 h-32 items-center justify-between top-0">
            <div className="flex items-center w-full h-full justify-between border-b">
                <div className="flex items-center gap-16">
                    <Image
                        src={sneakersLogo}
                        alt="Sneakers Logo"
                        width={150}
                        height={150}
                    />
                    <nav className="flex gap-8">
                        {navLinks.map((link) => (
                            <div key={link.title}>
                                <Link href={link.href}>{link.title}</Link>
                            </div>
                        ))}
                    </nav>
                </div>
                <div className="flex itesm-center gap-10">
                    <div className="flex items-center">
                        <Image
                            src={cartIcon}
                            alt="Cart Icon"
                            width={20}
                            height={20}
                        />
                    </div>
                    <div>
                        <Image
                            src={avatar}
                            alt="Avatar image"
                            width={40}
                            height={40}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
