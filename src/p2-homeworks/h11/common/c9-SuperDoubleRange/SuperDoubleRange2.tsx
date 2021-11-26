import React, {ChangeEvent, useEffect} from 'react'
import {Slider} from "antd";


type SuperDoubleRangePropsType = {
    // onChangeRange?: (value: [number, number]) => void
    // value?: [number, number]
    min: number
    max: number
    // min, max, step, disable, ...
}

const SuperDoubleRange2: React.FC<SuperDoubleRangePropsType> = (
    {
        // onChangeRange, value, ...restProps
        min, max
    }
    // min, max, step, disable, ...

) => {
    // сделать самому, можно подключать библиотеки
    const onChangeCallback = (value: Array<number>) => {

    }

    return (
        <>
            оооо
        </>
    )
}


export default SuperDoubleRange2
