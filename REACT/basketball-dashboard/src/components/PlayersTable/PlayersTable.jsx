import players from '../../data/players'

function PlayersTable(){

  return(

    <div className="table-responsive">

      <table className="players-table table">

        <thead>

          <tr>

            <th>FAV</th>
            <th>#</th>
            <th>JUGADOR</th>
            <th>EQUIPO</th>
            <th>POSICIÓN</th>
            <th>PTS</th>
            <th>REB</th>
            <th>AST</th>
            <th>EFICIENCIA</th>

          </tr>

        </thead>

        <tbody>

          {

            players.map((player) => (

              <tr key={player.id}>

                <td>
                  {player.favorite ? '⭐' : '☆'}
                </td>

                <td>
                  {player.number}
                </td>

                <td>
                  {player.player}
                </td>

                <td>
                  {player.team}
                </td>

                <td>
                  {player.position}
                </td>

                <td>
                  {player.pts}
                </td>

                <td>
                  {player.reb}
                </td>

                <td>
                  {player.ast}
                </td>

                <td>
                  {player.efficiency}
                </td>

              </tr>

            ))

          }

        </tbody>

      </table>

    </div>

  )

}

export default PlayersTable