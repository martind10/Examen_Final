import { useState } from 'react'

import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import PlayersTable from './components/PlayersTable/PlayersTable'

import playersData from './data/players'

function App(){

  const [players, setPlayers] = useState(playersData)

  const [search, setSearch] = useState('')

  const toggleFavorite = (id) => {

    const updatedPlayers = players.map((player) => {

      if(player.id === id){

        return{
          ...player,
          favorite: !player.favorite
        }

      }

      return player

    })

    setPlayers(updatedPlayers)

  }

  const filteredPlayers = players.filter((player) =>

    player.player
      .toLowerCase()
      .includes(search.toLowerCase())

  )

  return(

    <main className="dashboard">

      <section className="dashboard__container">

        <Header />

        <section className="stats-panel">

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <PlayersTable
            players={filteredPlayers}
            toggleFavorite={toggleFavorite}
          />

        </section>

      </section>

    </main>

  )

}

export default App