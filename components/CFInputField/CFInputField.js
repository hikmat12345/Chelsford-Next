import React from 'react'

const CFInputField = (
    type="",
    value = "",
    name="",
    id="",
    defaultValue="",
    onChange= () => {},
    required,
    // className="form-control contactFormInput"
    className= '',
    placeholder=""
) => {
  return (
    <>
        <input 
            type = {type}
            value = {value}
            name= {name}
            id= {id}
            // defaultValue=""
            onChange = {onChange}
            required
            // className="form-control contactFormInput"
            className = {className}
            placeholder = {placeholder}
        >      
        </input>
    </>
  )
}

export default CFInputField