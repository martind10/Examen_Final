function StatsCards({ players }){

  const favoritePlayers = players.filter(
    (player) => player.favorite
  )

  const averagePoints = (

    players.reduce(
      (acc, player) => acc + player.pts,
      0
    ) / players.length

  ).toFixed(1)

  const averageRebounds = (

    players.reduce(
      (acc, player) => acc + player.reb,
      0
    ) / players.length

  ).toFixed(1)

  const topScorer = [...players].sort(
    (a, b) => b.pts - a.pts
  )[0]

  const topEfficiency = [...players].sort(
    (a, b) => b.efficiency - a.efficiency
  )[0]

  return(

    <div className="stats-panel__cards">

      <article className="stat-card stat-card--yellow">

        <p className="stat-card__title">
          JUGADORES EN TABLA
        </p>

        <h2 className="stat-card__number">
          {players.length}
        </h2>

        <span className="stat-card__badge">

          Favoritos: {favoritePlayers.length}

        </span>

      </article>

      <article className="stat-card">

        <p className="stat-card__title">
          PROMEDIO DE PUNTOS
        </p>

        <h2 className="stat-card__number">
          {averagePoints}
        </h2>

        <span className="stat-card__text">
          Por jugador
        </span>

      </article>

      <article className="stat-card">

        <p className="stat-card__title">
          PROMEDIO DE REBOTES
        </p>

        <h2 className="stat-card__number">
          {averageRebounds}
        </h2>

        <span className="stat-card__text">
          Por jugador
        </span>

      </article>

      <article className="stat-card">

        <p className="stat-card__title">
          LÍDERES
        </p>

        <div className="stat-card__leader">

          <strong>
            Anotador
          </strong>

          <p>

            {topScorer.player} - {topScorer.pts} pts

          </p>

        </div>

        <div className="stat-card__leader">

          <strong>
            Eficiencia
          </strong>

          <p>

            {topEfficiency.player} - {topEfficiency.efficiency} PER

          </p>

        </div>

      </article>

    </div>

  )

}

export default StatsCards