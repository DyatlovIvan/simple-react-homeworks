import React from 'react'
import {AffairType} from "./HW2";
import style from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType // need to fix any
    deleteAffairCallback: (value:number) =>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {

        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={style.grid}>
            <div>
            {props.affair.name}</div>
            <div>
            {props.affair.priority}</div>
            <button className={style.deleteButton} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
