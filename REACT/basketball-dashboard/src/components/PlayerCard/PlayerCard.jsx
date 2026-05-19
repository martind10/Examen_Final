function PlayerCard({

  selectedPlayer,
  setSelectedPlayer

}){

  if(!selectedPlayer){

    return null

  }

  return(

    <div className="player-modal">

      <div
        className="player-modal__overlay"
        onClick={() =>
          setSelectedPlayer(null)
        }
      >

        <div
          className="player-modal__content"
          onClick={(e) =>
            e.stopPropagation()
          }
        >

          <button
            className="player-modal__close"
            onClick={() =>
              setSelectedPlayer(null)
            }
          >

            ✕

          </button>

          <div className="player-modal__header">

            <div>

              <h2 className="player-modal__name">

                {selectedPlayer.player}

              </h2>

              <span className="player-modal__position">

                {selectedPlayer.position}

              </span>

            </div>

          </div>

          <div className="player-modal__info">

            <div className="player-modal__item">

              <p>Equipo</p>

              <strong>
                {selectedPlayer.team}
              </strong>

            </div>

            <div className="player-modal__item">

              <p>Número</p>

              <strong>
                #{selectedPlayer.number}
              </strong>

            </div>

            <div className="player-modal__item">

              <p>Asistencias</p>

              <strong>
                {selectedPlayer.ast}
              </strong>

            </div>

          </div>

          <div className="player-modal__stats">

            <div className="player-modal__card">

              <span>PUNTOS</span>

              <strong>
                {selectedPlayer.pts}
              </strong>

            </div>

            <div className="player-modal__card">

              <span>REBOTES</span>

              <strong>
                {selectedPlayer.reb}
              </strong>

            </div>

            <div className="player-modal__card player-modal__card--light">

              <span>EFICIENCIA</span>

              <strong>
                {selectedPlayer.efficiency}
              </strong>

            </div>

          </div>

        </div>

      </div>

    </div>

  )

}

export default PlayerCard