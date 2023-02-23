import React from 'react'

export default function Speedkm(props) {
    const onChangeHandler =(e)=>{
        props.callBack(e.target.value)
    }
  return (
    <fieldset>
        <legend>Enter Speed in Kmph:</legend>
        <input onChange={onChangeHandler} value={props.speed} type='number'/>
        <hr />
    </fieldset>
  )
}
