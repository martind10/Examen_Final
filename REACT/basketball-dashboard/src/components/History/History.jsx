function History({ history, clearHistory }){

  return(

    <article className="stat-card stat-card--history">

      <div className="stat-card__history-top">

        <p className="stat-card__title">

          HISTORIAL DE BÚSQUEDA

        </p>

        <button
          className="stat-card__clear"
          onClick={clearHistory}
        >

          Limpiar

        </button>

      </div>

      <div className="stat-card__tags">

        {

          history.map((item, index) => (

            <span
              key={index}
              className="stat-card__tag"
            >

              {item}

            </span>

          ))

        }

      </div>

    </article>

  )

}

export default History