import React from 'react'
import style from "./radio.module.css"

const InputRadio = React.forwardRef(

  (props,ref) => {
  
    return (
      <div className={style.content}>
        {props.itens.map((item) => (
          <div
            key={item}
          >
            <label 
            className={style.label}>
            <input
            ref={ref}
            className={style.input}
            id={item}
            name={props.nome}
            type={props.tipo} 
            value = {item}
            {...props}
          />
            {item}</label>
          </div>
          ))}
      </div>
    )
  }
)


export { InputRadio }
// export default forwardRef(InputRadio)