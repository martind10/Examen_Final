function Pagination({

  currentPage,
  setCurrentPage,
  rowsPerPage,
  setRowsPerPage,
  totalPlayers

}){

  const totalPages = Math.ceil(
    totalPlayers / rowsPerPage
  )

  const pages = []

  for(let i = 1; i <= totalPages; i++){

    pages.push(i)

  }

  return(

    <div className="table-footer">

      <div className="table-footer__left">

        <span>
          MOSTRAR
        </span>

        <select
          className="table-footer__select"
          value={rowsPerPage}
          onChange={(e) => {

            setRowsPerPage(Number(e.target.value))
            setCurrentPage(1)

          }}
        >

          <option value={5}>
            5 por página
          </option>

          <option value={10}>
            10 por página
          </option>

          <option value={15}>
            15 por página
          </option>

        </select>

      </div>

      <div className="pagination">

        <button
          className="pagination__button"
          onClick={() =>
            setCurrentPage(currentPage - 1)
          }
          disabled={currentPage === 1}
        >

          ‹

        </button>

        {

          pages.map((page) => (

            <button
              key={page}
              className={`pagination__button ${
                currentPage === page
                ? 'pagination__button--active'
                : ''
              }`}
              onClick={() =>
                setCurrentPage(page)
              }
            >

              {page}

            </button>

          ))

        }

        <button
          className="pagination__button"
          onClick={() =>
            setCurrentPage(currentPage + 1)
          }
          disabled={currentPage === totalPages}
        >

          ›

        </button>

      </div>

    </div>

  )

}

export default Pagination