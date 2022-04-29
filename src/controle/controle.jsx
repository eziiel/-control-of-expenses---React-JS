
import React, { useRef } from "react"
import { InputRadio } from "../form/inputRadio"
import { InputText } from "../form/inputText"
import { useForm } from "../hooks/useForm"
import style from "./controle.module.css"
import setDown from "../imagens/down.svg" 
import setUp from "../imagens/up.svg" 


const radios = ["Entrada", "Saída"]


//main Element
const Controle =() => {

  // const [dadosLocal, setDadosLocal] = React.useState(JSON.parse(localStorage.getItem('transactions')))
    // const transactions = localStorage.getItem('transactions') !== null ? dadosLocal :[]

    const LocalS = localStorage.getItem('transactions')
    const dadosFinal = JSON.parse(localStorage.getItem('transactions'))
    const [dadosLocal, setDadosLocal] = React.useState(LocalS !== null?dadosFinal:[])
    let [total, setTotal] = React.useState(0)
    let [entrada, setEntrada] = React.useState(0)
    let [saida, setSaida] = React.useState(0)
    let [valueRadio, setInputRadio] = React.useState('')
    let descricao = useForm()
    let valor = useForm()
    let ref = React.createRef()
    let refText = React.createRef()

  //variaveis

  const handleClick =({target}) => {
    setInputRadio(target.value )
  }

  const handleAdd = () => {
    Controle()
  }
  const handleRemove = ({target}) => {
    const id = target.getAttribute("value")
      setDadosLocal(dadosLocal
          .filter((item) => item.id !== id)
        )
  }
  
  React.useEffect(() => {
    ListaLocal()
    dadosLocal && localStorage.setItem('transactions', JSON.stringify(dadosLocal))
    
    setEntrada(0)
    dadosLocal.map(item => {
      item.tipo == 'entrada' && setEntrada((total) => total += item.valorDesc)
    })
    setSaida(0)
    dadosLocal.map(item => {
      item.tipo == 'saída'  && setSaida((total) => total += item.valorDesc )
    })
    setTotal(0)
    dadosLocal.map(item => {
      setTotal((total) => total += item.valorDesc )
    })
},[dadosLocal])

  React.useEffect(() => {
    setEntrada(0)
    dadosLocal.map(item => {
      item.tipo == 'entrada'  && setEntrada((total) => total += item.valorDesc )
    })
    setSaida(0)
    dadosLocal.map(item => {
      item.tipo == 'saída' && setSaida((total) => total += item.valorDesc )
    })
    setTotal(0)
    dadosLocal.map(item => {
      setTotal((total) => total += item.valorDesc )
    })
  },[])
  

  const Controle = () => {
    refText.current.focus()
    ref.current.checked = false
    
    
    const idTransactions = (Math.random()*1000).toFixed()
    let [radio, desc, val] = [
      (valueRadio.toLowerCase()),
      descricao.value,
      Math.abs(valor.value)
    ]
    if(!(radio && desc && val)) return  
   

    function valorL () {
      let valorFinal
      if(radio === "saída") {
        valorFinal = Number(-val)
      } else {
        valorFinal = Number(val)
      }
      return valorFinal
    }

    const valueTransactions = {
     description : desc.trim(),
     valorDesc : valorL(),
     tipo : radio,
     id :idTransactions
    }
    setDadosLocal([...dadosLocal, valueTransactions])
   
    descricao.limpar()
    valor.limpar()
  }
  
  
  function ListaLocal () {
    return (
      <>
        {dadosLocal.map((item) => (
          <div 
          key={item.id}
          className={style.listaDescricao}>
            <ul>
              <li>{item.description}</li>
            </ul>
            <ul>
              <li>{item.valorDesc}</li>
            </ul>
            <ul>
              {item.valorDesc >= 0 ? (
                 <li className={style.liFinal}>
                 <span className={`${style.icon} Green`}>
                  <img 
                  src={setDown} 
                  alt="seta Baixo - negativo" />
                  </span>
                  <span   
                  onClick={handleRemove}
                  className={style.removeItem + " material-symbols-outlined"}
                  value = {item.id}
                  >
                  cancel
                  </span>
                 </li>
                ) : (<li className={style.liFinal}>
                <span className={`${style.icon}`}>
                  <img 
                  src={setUp} 
                  alt="seta Cima - Positivo" />
              </span>
              <span 
              onClick={handleRemove}
              className={style.removeItem + " material-symbols-outlined"}
              value = {item.id}
              >
              cancel
              </span>
                </li>)}
            </ul>
          </div>
    ))}
      </>
    )
  }


  return (
    <main className={style.controle}>

      <section className={style.content}>
        <div className={style.item}>
          <div className={style.itemInfo}> 
            <h2>Entradas</h2>
            <span className={style.icon + " material-symbols-outlined"}>
            arrow_circle_up
            </span>
            <div className={style.valueAdd}>
              <h3 className={style.value}> 
                <span className={style.cifra}>RS</span> 
                <span className={style.valueNumber}>{entrada}</span>
                </h3>
            </div>
          </div>
        </div>
        
        <div className={style.item}>
          <div className={style.itemInfo}>
              <h2>Saídas</h2>
              <span className={style.icon + " material-symbols-outlined"}>
              arrow_circle_down
              </span>
              <div className={style.valueAdd}>
              <h3 className={style.value}> 
                <span className={style.cifra}>RS</span> 
                <span className={style.valueNumber}>{saida}</span>
                </h3>
              </div>
            </div>
        </div>
        
        <div className={style.item}>
          <div className={style.itemInfo}> 
            <h2>Total</h2>
            <span className={style.icon + " material-symbols-outlined"}>
            swap_vertical_circle
            </span>
            <div className={style.valueAdd}>
            <h3 className={style.value}> 
              <span className={style.cifra}>RS</span> 
              <span className={style.valueNumber}>{total}</span>
              </h3>
            </div>
          </div>
        </div>

        <div className={style.dados }>
          <div>
           <InputText 
           ref = {refText}
           tipo="text" 
           nome="descricao"
           label="Descrição"
           {...descricao}
           />
          </div>

          <div>
           <InputText 
           tipo="text" 
           nome="valor"
           label="Valor"
           {...valor}
           />
          </div>
          
          <div 
            className={style.inputRadio}>
            <InputRadio 
            ref={ref}
            itens={radios} 
            tipo="radio" 
            nome="entrada" 
            onClick = {handleClick}
            label="Entrada"/>
          </div>

          <button
          onClick={handleAdd}
          className={style.button}>Adicionar</button>
        </div>

        <div className={style.descricao}>
          <div className={style.descricaoTitulo}>
            <h2>Descrição</h2>
            <h2>Valor</h2>
            <h2>Tipo</h2>
          </div>

        {dadosLocal && (<ListaLocal />)}
        </div>
      </section>

    </main>
  )
}

export { Controle }