import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from '../h11/common/c8-SuperDoubleRange/SuperDoubleRange.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange value={value1}
                            onChangeRange={setValue1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div className={s.doubleSliderBlock}>
                <span>{value1}</span>
                <SuperDoubleRange min={value1}
                                  max={value2}
                                  onChangeRangeMin={setValue1}
                                  onChangeRangeMax={setValue2}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <hr/>
        </div>
    )
}

export default HW11
