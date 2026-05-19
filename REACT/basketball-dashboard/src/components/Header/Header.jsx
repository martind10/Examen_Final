function Header(){

  return(

    <header className="dashboard__header">

      <div className="scoreboard">

        <div className="scoreboard__team">

          <h2 className="scoreboard__name">
            TCB
          </h2>

          <p className="scoreboard__description">
            TOP CLUB FLAMES
          </p>

        </div>

        <div className="scoreboard__center">

          <h1 className="scoreboard__score">

            <span className="scoreboard__score--yellow">
              98
            </span>

            <span className="scoreboard__separator">
              —
            </span>

            <span className="scoreboard__score--blue">
              92
            </span>

          </h1>

        </div>

        <div className="scoreboard__team scoreboard__team--right">

          <h2 className="scoreboard__name">
            RIV
          </h2>

          <p className="scoreboard__description">
            RIVAL ALL-STARS
          </p>

        </div>

        <div className="scoreboard__time">

          <span className="scoreboard__badge">
            Q4 · 01:12
          </span>

          <p className="scoreboard__arena">
            ARENA CENTRAL · 18 NOV
          </p>

        </div>

      </div>

    </header>

  )

}

export default Header