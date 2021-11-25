import React, {useEffect, useState} from "react";

export const AlternativeClock2 = React.memo((props) => {
    const [date, setDate] = useState(new Date())
    console.log('tic')
    useEffect(() => {
        setInterval(() => setDate(new Date()))
    },[])

    const fun = (num:number) => num<10? '0'+num : num
    return (
        <div>
            <span>{fun(date.getHours())}</span>:
            <span>{fun(date.getMinutes())}</span>:
            <span>{fun(date.getSeconds())}</span>
        </div>
    )
})