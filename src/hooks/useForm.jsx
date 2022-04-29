import React from 'react'

const useForm = () => {
  const [value, setValue] = React.useState('')

  function onChange ({target}) {
    setValue(target.value)
  }

  function limpar (){
    setValue('')
  }

  return {
      value,
      onChange,
      limpar
    }
}
export { useForm }
