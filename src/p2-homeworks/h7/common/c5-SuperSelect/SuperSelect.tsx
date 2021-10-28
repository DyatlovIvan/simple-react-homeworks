import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './Select.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions:any[] = options? options.map((m,i)=>
        (<option className={s.option} key = {m + '-' + i} value = {m}>{m}</option>)):[]//: any[] = []; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {

        onChangeOption&&onChangeOption(e.currentTarget.value)
        // onChange, onChangeOption
    }

    return (
        <select className={s.select} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
