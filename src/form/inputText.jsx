import React from 'react'
import style from "./text.module.css"

 const InputText = React.forwardRef (
   (props,ref) => {
    return (
      <div className={style.content}>
        <label
        className={style.label}
        htmlFor={props.nome}>{props.label}</label>
        <input
        ref={ref}
        className={style.input}
        id={props.nome}
        name={props.nome}
        type={props.tipo} 
        value = {props.value} 
        onChange = {props.onChange}
        onClick = {props.limpar}
        />
      </div>
    )
  }
  )


export { InputText }