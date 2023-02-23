import React from 'react'

export default function Speedmph(props) {
    const onChangeHandler =(e)=>{
        props.callBack(e.target.value)
        
    }
  return (
    <fieldset>
        <legend>Enter Speed in Mph:</legend>
        <input onChange={onChangeHandler} value={props.speed} type='number'/>
        <hr />
    </fieldset>
  )
}
