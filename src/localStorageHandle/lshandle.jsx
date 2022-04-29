
function LsHandle () {
  
  const dados = localStorage.getItem('valoresTransacoes')
 
    localStorage.getItem('valoresTransacoes') ? dadosL :[]
 
    function dadosL () {
      const itemL = JSON.parse(localStorage.getItem('valoresTransacoes'))
      console.log(itemL)
      console.log(dados)
    }


  return null
}

export { LsHandle }