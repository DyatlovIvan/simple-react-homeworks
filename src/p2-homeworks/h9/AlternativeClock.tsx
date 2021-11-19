import React, {useEffect, useState} from 'react'

function AlternativeClock() {
    let date = new Date();
    let time = `${date.getHours()}:${date.getMinutes()}:${ date.getSeconds()}`
 const [clock,setClock] = useState<string>(time)

    useEffect(()=>{
        setInterval(()=>{
            console.log('tak')
            let newDate = new Date();
            let newTime = `${newDate.getHours()}:${newDate.getMinutes()}:${ newDate.getSeconds().toString().length!==1?newDate.getSeconds()
                : '0'+date.getSeconds().toString()}`
            setClock(state=>newTime)
        },1000)
    },[])

    return (
        <div>
            {clock}
        </div>
    )
}

export default AlternativeClock
