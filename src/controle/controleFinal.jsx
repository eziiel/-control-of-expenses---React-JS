function ListaLocal () {
  if(dadosLocal.length < 0) return null

  return (
    <>
      {dadosLocal.map((item) => (
        <div 
        key={item.description}
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
                <img src={setDown} alt="seta Baixo - negativo" />
                </span>
                <span className={style.removeItem + " material-symbols-outlined"}>
                cancel
                </span>
               </li>
            ) : (<li className={style.liFinal}>
              <span className={`${style.icon}`}>
                <img src={setUp} alt="seta Cima - Positivo" />
            </span>
            <span className={style.removeItem + " material-symbols-outlined"}>
            cancel
            </span>
              </li>)}
          </ul>
        </div>
  ))}
    </>
  )
}