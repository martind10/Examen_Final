import { useState } from 'react'

import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import PlayersTable from './components/PlayersTable/PlayersTable'
import History from './components/History/History'
import StatsCards from './components/StatsCards/StatsCards'
import Pagination from './components/Pagination/Pagination'
import PlayerCard from './components/PlayerCard/PlayerCard'

import playersData from './data/players'

function App(){

  const [players, setPlayers] = useState(playersData)

  const [search, setSearch] = useState('')

  const [history, setHistory] = useState([])

  const [currentPage, setCurrentPage] = useState(1)

  const [rowsPerPage, setRowsPerPage] = useState(5)

  const [highlightEven, setHighlightEven] = useState(false)

  const [highlightOdd, setHighlightOdd] = useState(false)

  const [lightMode, setLightMode] = useState(false)

  const [selectedPlayer, setSelectedPlayer] = useState(null)

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

  const clearHighlights = () => {

    setHighlightEven(false)

    setHighlightOdd(false)

  }

  const filteredPlayers = players.filter((player) =>

    player.player
      .toLowerCase()
      .includes(search.toLowerCase())

  )

  const lastIndex = currentPage * rowsPerPage

  const firstIndex = lastIndex - rowsPerPage

  const currentPlayers = filteredPlayers.slice(
    firstIndex,
    lastIndex
  )

  return(

    <main className={`dashboard ${
      lightMode ? 'dashboard--light' : ''
    }`}>

      <section className="dashboard__container">

        <div className="dashboard__top">

          <Header />

          <div className="theme-toggle">

            <button
              className="theme-toggle__button"
              onClick={() =>
                setLightMode(!lightMode)
              }
            >

              {
                lightMode
                ? '🌙 Modo oscuro'
                : '☀ Modo claro'
              }

            </button>

          </div>

        </div>

        <section className="stats-panel container-fluid">

          <SearchBar
            search={search}
            setSearch={handleSearch}
          />

          <StatsCards players={filteredPlayers} />

          <History
            history={history}
            clearHistory={clearHistory}
          />

          <PlayerCard
            selectedPlayer={selectedPlayer}
            setSelectedPlayer={setSelectedPlayer}
          />

          <div className="table-actions d-flex flex-wrap">

            <button
              className="table-actions__button btn"
              onClick={() => {

                setHighlightEven(true)
                setHighlightOdd(false)

              }}
            >

              FILAS PARES

            </button>

            <button
              className="table-actions__button"
              onClick={() => {

                setHighlightOdd(true)
                setHighlightEven(false)

              }}
            >

              FILAS IMPARES

            </button>

            <button
              className="table-actions__button"
              onClick={clearHighlights}
            >

              LIMPIAR RESALTADO

            </button>

          </div>

          <PlayersTable
            players={currentPlayers}
            toggleFavorite={toggleFavorite}
            highlightEven={highlightEven}
            highlightOdd={highlightOdd}
            setSelectedPlayer={setSelectedPlayer}
          />

          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            totalPlayers={filteredPlayers.length}
          />

        </section>

      </section>

    </main>

  )

}

export default App