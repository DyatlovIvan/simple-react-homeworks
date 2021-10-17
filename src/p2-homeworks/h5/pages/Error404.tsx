import React from 'react'
import style from './Error404.module.css'

function Error404() {
    return (
        <div className={style.error}>
            <div className={style.numberError}>404</div>
            <div className={style.textError}>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    )
}

export default Error404
