import Header from './components/Header/Header'
import PlayersTable from './components/PlayersTable/PlayersTable'

function App(){

  return(

    <main className="dashboard">

      <section className="dashboard__container">

        <Header />

        <PlayersTable />

      </section>

    </main>

  )

}

export default App