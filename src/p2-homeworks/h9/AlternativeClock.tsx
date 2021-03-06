import React, {useEffect, useState} from 'react'

function AlternativeClock() {

 const [date,setDate] = useState('')
    useEffect(()=>{
        const func = (num:number)=>num>10 ?num : '0' + num

        const Interval = setInterval(()=>{
            console.log('tic')
            const clock = new Date()
            let hours = func(clock.getHours())
            let minutes = func(clock.getMinutes())
            let seconds = func(clock.getSeconds())
            setDate(`${hours}:${minutes}:${seconds}`)
        },1000)

        return(()=>clearInterval(Interval))
    },[])

    return (
        <div>
            {date}
        </div>
    )
}

export default AlternativeClock
