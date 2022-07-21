import React from 'react'

const Input = (props) => {
  return (
  <>
  <input
   type={props.type}
   id ={props.id}
   name ={props.name}
   className ={props.className}
   placeholder={props.placeholder}
   onChange = {props.onChange}
   value ={props.value}
  />
  </>
  )
}

export default Input