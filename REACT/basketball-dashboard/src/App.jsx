import { useState } from 'react'

import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import PlayersTable from './components/PlayersTable/PlayersTable'
import History from './components/History/History'

import playersData from './data/players'

import StatsCards from './components/StatsCards/StatsCards'

import Pagination from './components/Pagination/Pagination'

function App(){

  const [players, setPlayers] = useState(playersData)

  const [search, setSearch] = useState('')

  const [history, setHistory] = useState([])

  const [currentPage, setCurrentPage] = useState(1)

  const [rowsPerPage, setRowsPerPage] = useState(5)

  const [highlightEven, setHighlightEven] = useState(false)

  const [highlightOdd, setHighlightOdd] = useState(false)

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

          <div className="table-actions">

          <button className="table-actions__button" onClick={() => {

            setHighlightEven(true)
            setHighlightOdd(false)

          }}
          >

           FILAS PARES

          </button>

          <button className="table-actions__button" onClick={() => {
            setHighlightOdd(true)
            setHighlightEven(false)

          }}
          >

          FILAS IMPARES

          </button>

          <button className="table-actions__button" onClick={clearHighlights}>

        LIMPIAR RESALTADO

        </button>

        </div>

          <PlayersTable
            players={currentPlayers}
            toggleFavorite={toggleFavorite}
            highlightEven={highlightEven}
            highlightOdd={highlightOdd}
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