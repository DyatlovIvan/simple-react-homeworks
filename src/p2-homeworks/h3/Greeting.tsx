import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (value:string)=> void // need to fix any
    addUser: ()=>void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = s.error // need to fix with (?:)


    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>)=> {
        setNameCallback(event.currentTarget.value)
    }

    const onClickHandler = () => {
        addUser()
    }


    return (
        <div className={s.inputArea}>
            <input value={name} onChange={onChangeHandler} className={name===''?inputClass:''}/>
            <span className={s.errorTitle}>{error}</span>
            <button onClick={onClickHandler} className={s.buttonAdd}>add </button>
            <span>{totalUsers }</span>
        </div>
    )
}

export default Greeting
