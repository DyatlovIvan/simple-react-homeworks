import React, {useEffect, useState} from "react";

export const AlternativeClock2 = React.memo((props) => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {

        const Interval = setInterval(() => {
            console.log('tic')
            setDate(new Date())
        },1000)

        return(()=>clearInterval(Interval))
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