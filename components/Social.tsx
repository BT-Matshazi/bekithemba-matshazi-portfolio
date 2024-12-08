import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin, SiX, SiInstagram } from "react-icons/si";

const socialLinks = [
  {
    href: "https://github.com/bekithemba",
    icon: SiGithub,
  },
  {
    href: "https://www.linkedin.com/in/bekithemba/",
    icon: SiLinkedin,
  },
  {
    href: "https://twitter.com/bekithemba",
    icon: SiX,
  },
  {
    href: "https://www.instagram.com/bekithemba/",
    icon: SiInstagram,
  },
];


export default function Social({containerStyle, iconStyle}: {containerStyle?: string, iconStyle?: string}) {
    return (
        <div className={containerStyle}>
            {socialLinks.map((item, i) => {
                return <Link key={i} href={item.href} className={iconStyle}>{React.createElement(item.icon)}</Link>
            })}
        </div>
    )
}