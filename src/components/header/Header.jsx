import React, { useState } from "react"
import logo from "../../assets/images/icons/church.png"
import "./header.css"
import Locale from "../locale/Locale"
import {nav} from "../../assets/data/constants"
import {Link} from "react-router-dom"
import { t } from '../i18n/i18n';
import MenuButton from './MenuButton';

export const Header = () => {
    window.addEventListener("scroll", function () {
        const header = this.document.querySelector(".header")
        header.classList.toggle("active", this.window.scrollY > 100)
    });

    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

    return (
        <>
            <header className='header'>
                <div className='header_grid flex'>

                    <div className='logo'>
                        <img src={logo} alt='logo' width='50px'/>
                    </div>

                    <nav>
                        <MenuButton isActive={isMenuActive} toggleMenu={toggleMenu} />
                        <ul className={`menu cf ${isMenuActive ? 'active' : ''}`}>
                            {nav.map((link) => (
                                <li key={link.id}  onClick={!link.submenu ? toggleMenu: ''}>
                                    <Link to={link.url}>{t(link.text)}</Link>
                                    {link.submenu &&
                                        <ul className="submenu">
                                            {link.submenu.map((submenulink) => (
                                                <li onClick={toggleMenu}><Link to={submenulink.url}>{t(submenulink.text)}</Link></li>
                                            ))}
                                        </ul>
                                    }
                                </li>
                            ))}

                        </ul>
                    </nav>
                    <div className='account'>
                        <Locale />
                    </div>
                </div>
            </header>
        </>
    )
}
