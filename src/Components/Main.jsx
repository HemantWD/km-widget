 import React from 'react'
import Speedkm from './Speedkm'
import Speedmph from './Speedmph'


const initialState = {
    kmph: 0,
    mph: 0
}
export default function Main() {
    const [speedObject, setSpeedObject] = React.useState(initialState)

    const kmphCallBack = (speed) => {
        setSpeedObject({
            kmph: speed,
            mph: speed * 0.6
        })
    }
    const mphCallBack = (speed) => {
        setSpeedObject({
            kmph: speed*1.6,
            // this formula will change the speed into mph
            mph: speed 
        })
    }
    return (
        <>

            <Speedkm callBack={kmphCallBack} speed ={speedObject.kmph}/>
            <Speedmph callBack={mphCallBack} speed={speedObject.mph}/>
        </>
    )
}
