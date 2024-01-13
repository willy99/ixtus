import React from "react"
import logo from "../../assets/images/icons/church.png"
import "./header.css"
import Locale from "../locale/Locale"
import {nav} from "../../assets/data/constants"
import {Link} from "react-router-dom"
import { t } from '../i18n/i18n';

export const Header = () => {
    window.addEventListener("scroll", function () {
        const header = this.document.querySelector(".header")
        header.classList.toggle("active", this.window.scrollY > 100)
    });

    return (
        <>
            <header className='header'>
                <div className='scontainer flex'>
                    <div className='logo'>
                        <img src={logo} alt='logo' width='50px'/>
                    </div>
                    <nav>
                        <ul className="menu cf">
                            {nav.map((link) => (
                                <li key={link.id}>
                                    <Link to={link.url}>{t(link.text)}</Link>
                                    {link.submenu &&
                                        <ul className="submenu">
                                            {link.submenu.map((submenulink) => (
                                                <li><Link to={submenulink.url}>{t(submenulink.text)}</Link></li>
                                            ))}
                                        </ul>
                                    }
                                </li>
                            ))}

                        </ul>
                    </nav>
                    <div className='account flexCenter'>
                        <Locale />
                    </div>
                </div>
            </header>
        </>
    )
}
