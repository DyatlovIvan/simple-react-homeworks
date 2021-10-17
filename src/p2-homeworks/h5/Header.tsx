import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import style from './Header.module.css'

function Header() {

    return (
        <div className={style.header}>
            {/*// add NavLinks*/}
            <NavLink className={style.link} activeClassName={style.active} to={PATH.PRE_JUNIOR}>pre-junior</NavLink>
            <NavLink className={style.link} activeClassName={style.active} to={PATH.JUNIOR}>junior</NavLink>
            <NavLink className={style.link} activeClassName={style.active} to={PATH.JUNIOR_PLUS}>junior+</NavLink>
            <div className={style.square}/>
        </div>
    )
}

export default Header
