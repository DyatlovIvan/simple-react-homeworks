import { type } from 'os'
import React from 'react'
import style from './AlternativeMessage.module.css'

type AlternativeMessageType ={
    avatar:string;
    name:string;
    message:string;
    time:string;
}


function AlternativeMessage(props:AlternativeMessageType) {
    return (
        <div className={style.all}>
            <img className={style.img}  src={props.avatar} alt="Avatar"/>
            <div className={style.angle}></div>
                <div className={style.item}>
                    <div className={style.name}>{props.name}</div>
                    <div className={style.message}>{props.message}</div>
                    <div className={style.time}>{props.time}</div>
                </div>   
        </div>
    )
}

export default AlternativeMessage
