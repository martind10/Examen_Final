import { useState } from 'react'

import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import PlayersTable from './components/PlayersTable/PlayersTable'
import History from './components/History/History'

import playersData from './data/players'

import StatsCards from './components/StatsCards/StatsCards'

function App(){

  const [players, setPlayers] = useState(playersData)

  const [search, setSearch] = useState('')

  const [history, setHistory] = useState([])

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

  const handleSearch = (value) => {

    setSearch(value)

    if(
      value.trim() !== '' &&
      !history.includes(value)
    ){

      setHistory([value, ...history])

    }

  }

  const clearHistory = () => {

    setHistory([])

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
            setSearch={handleSearch}
          />

          <StatsCards players={filteredPlayers} />

          <History
            history={history}
            clearHistory={clearHistory}
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