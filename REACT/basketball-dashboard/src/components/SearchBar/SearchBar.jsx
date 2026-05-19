function SearchBar({ search, setSearch }){

  return(

    <div className="stats-panel__search">

      <label className="stats-panel__label">

        BUSCAR JUGADORES

      </label>

      <div className="stats-panel__search-box">

        <span className="stats-panel__icon">
          🔍
        </span>

        <input
          type="text"
          className="stats-panel__input"
          placeholder="Escribe un nombre o equipo..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

    </div>

  )

}

export default SearchBar