import React from 'react'
import Clock from './Clock'
import AlternativeClock from "./AlternativeClock";
import {AlternativeClock2} from "./AlternativeClock2";

function HW9() {
    return (
        <div>
            <hr/>
            homeworks 9

            {/*should work (должно работать)*/}
            <Clock/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeClock/>
            <hr/>
            <AlternativeClock2/>
        </div>
    )
}

export default HW9
