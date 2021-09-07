import React,{useState} from 'react';
import logo from "./../../img/logo.svg"
import logo2 from "./../../img/logo2.svg"
import {Link, NavLink} from "react-router-dom";
import './../style.css'


let logoImg;

    const Header = (props) => {
    const [header,setWrapper ] =useState(false);
    const [menu,setNav] = useState(false);
    let prevScrollpos = window.pageYOffset;



  const changeMenu = () =>
        {let currentScrollPos = window.pageYOffset;

            if ( prevScrollpos < currentScrollPos )
            {
                setNav(true)
            }
            else
            {
                setNav(false)
            }
            prevScrollpos = currentScrollPos;
        };

        window.addEventListener('scroll', changeMenu);

  const changeBackground = () =>{
      if(window.scrollY >= 80)
      {
          setWrapper(true)
      }
      else{
          setWrapper(false)
      }

  };
        window.addEventListener('scroll', changeBackground);
    if (props.color === "light")
    {

        logoImg = logo;

    }
    else if(props.color === "dark")
    {
        logoImg = logo2;
    }
    if(header)
    {
        logoImg = logo2;
    }




    return (
        <div className='header__wrapper'>
            <div className={header? "header active header--black":"header header--" + `${props.color}`}>
                <div className="header-base__container">
                    <div className="container">
                        <div className="header-base">
                            <div className="header-base-left">
                                <div className="header-base__item header-base__item--search"/>
                            </div>
                            <div className="header-base__logo">
                                <Link to={"/"} className="nuxt-link-exact-active nuxt-link-active">

                                    <div className="logo">
                                        <img src={logoImg} alt=""/>
                                    </div>
                                </Link>
                            </div>
                            <div className="header-base-right">

                            </div>
                        </div>
                    </div>
                </div>
                <div className={menu? "header-menu__container active": "header-menu__container"}>
                    <div className="container">

                        <div className={"header-menu"}>
                            <Link to={"/news"} className="header-menu-item">НОВОСТИ</Link>
                            <Link to={"/projects"} className="header-menu-item">ПРОЕКТЫ</Link>
                            <Link to={"/events"} className="header-menu-item">МЕРОПРИЯТИЯ</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
};
export default Header;