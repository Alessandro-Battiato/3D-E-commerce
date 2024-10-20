import navLinks from "@/data/navLinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import sneakersLogo from "../../images/logo.svg";
import cartIcon from "../../images/icon-cart.svg";
// TO DO: Add avatar icon, and render 3d model in Home
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
                <div className="flex itesm-center gap-12">
                    <div>
                        <Image
                            src={cartIcon}
                            alt="Cart Icon"
                            width={20}
                            height={20}
                        />
                    </div>
                    <div>avatar</div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
