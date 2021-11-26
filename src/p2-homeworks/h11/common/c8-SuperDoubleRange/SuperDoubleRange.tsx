import React, {ChangeEvent, useEffect} from 'react'
import {Slider} from "antd";
import s from './SuperDoubleRange.module.css'


type SuperDoubleRangePropsType = {
    // onChangeRange?: (value: [number, number]) => void
    // value?: [number, number]
    min: number
    max: number
    onChangeRangeMin: (value: number) => void
    onChangeRangeMax: (value: number) => void
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        // onChangeRange, value, ...restProps
        min, max, onChangeRangeMin, onChangeRangeMax
    }
    // min, max, step, disable, ...

) => {
    // сделать самому, можно подключать библиотеки
    const onChangeCallback = (value: Array<number>) => {
        if(value[0]<value[1]){
            onChangeRangeMin && onChangeRangeMin(value[0])
            onChangeRangeMax && onChangeRangeMax(value[1])
        }
    }

    return (
        <>
            <Slider className={s.slider}
                    range value={[min, max]}
                    onChange={onChangeCallback}
                    included={true}
            />
        </>
    )
}


export default SuperDoubleRange
