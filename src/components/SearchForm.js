import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('');

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])
  const serachCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSunbmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSunbmit}>
        <div className="form-control">
          <label htmlFor="name"> search your favorite cocktail</label>
          <input type="text" id='nmae' ref={searchValue} onChange={serachCocktail} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
