function PlayerCard({ selectedPlayer }){

  if(!selectedPlayer){

    return null

  }

  return(

    <div className="player-card">

      <h3 className="player-card__name">

        {selectedPlayer.player}

      </h3>

      <p>
        Equipo: {selectedPlayer.team}
      </p>

      <p>
        Posición: {selectedPlayer.position}
      </p>

      <p>
        PTS: {selectedPlayer.pts}
      </p>

      <p>
        REB: {selectedPlayer.reb}
      </p>

      <p>
        AST: {selectedPlayer.ast}
      </p>

      <p>
        Eficiencia: {selectedPlayer.efficiency}
      </p>

    </div>

  )

}

export default PlayerCard