import React from 'react';
import {NavLink} from "react-router-dom";
import iconNews from '../../img/icons/newspaper.svg'
import iconProjects from '../../img/icons/project.svg'
// import iconKvartira from '../img/icons/apartment.svg'
import iconEven from '../../img/icons/calendar.svg'
// import iconAbout from '../img/icons/help.svg'
const MobileNav = (props) => {
    return (
        <div id="mobile-menu" className="menu__container" data-v-4898f67a>
            <div className="container" data-v-4898f67a>
                <div className="menu" data-v-4898f67a>
                    <NavLink to="/news" className="menu-item" data-v-4898f67a>
                        <img src={iconNews} className="menu-item__icon" data-v-4898f67a/>
                        <span className="menu-item__title" data-v-4898f67a>НОВОСТИ</span>
                    </NavLink>
                    <NavLink to="/projects" className="menu-item" data-v-4898f67a>
                        <img src={iconProjects} className="menu-item__icon" data-v-4898f67a/>
                        <span className="menu-item__title" data-v-4898f67a>ПРОЕКТЫ</span>
                    </NavLink>
                    {/*<NavLink to="/kvartira" className="menu-item"
                    data-v-4898f67a>
                        <img src={iconKvartira} className="menu-item__icon" data-v-4898f67a/>
                        <span className="menu-item__title" data-v-4898f67a>КВARTИРА</span>
                    </NavLink>*/}
                    <NavLink to="/events" className="menu-item" data-v-4898f67a>
                        <img src={iconEven} className="menu-item__icon" data-v-4898f67a/>
                        <span className="menu-item__title" data-v-4898f67a>МЕРОПРИЯТИЯ</span>
                    </NavLink>
                    {/*<NavLink to="/about" className="menu-item" data-v-4898f67a>
                        <img src={iconAbout} className="menu-item__icon" data-v-4898f67a/>
                        <span className="menu-item__title" data-v-4898f67a>О НАС</span>
                    </NavLink>*/}
                </div>
            </div>
        </div>

    )
}
export default MobileNav;