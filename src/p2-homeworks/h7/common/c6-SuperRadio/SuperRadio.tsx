import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './Radio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        onChangeOption&&onChangeOption(e.currentTarget.value)
    }


    // const mappedOptions: any[] = options ? options.map((o, i) => (
    //
    //     <label key={name + '-' + i}>
    //         <input
    //             type={'radio'}
    //             name = {o.name}
    //             checked={{value}===o.name?true:false}
    //             value = {i}
    //             onChange={onChangeCallback}
    //
    //             // name, checked, value, onChange
    //         />
    //         {o}
    //     </label>
    // )) : []

    const mappedOptions= options?.map((o, i) => {

        return(

        <label key={name + '-' + i}>
            <input
                className={s.radio}
                type={'radio'}
                name = {name}
                checked={value===o}
                value = {o}
                onChange={onChangeCallback}

                // name, checked, value, onChange
            />
            {o}
        </label>
    )})

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
