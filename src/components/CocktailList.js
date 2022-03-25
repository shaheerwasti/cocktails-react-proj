import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext();
  //console.log(cocktails)
  if (loading) {
    return <Loading></Loading>
  }
  if (cocktails.length < 1) {
    return (<h2 className='section-title'>
      no cocktails match your term</h2>)
  }
  return (
    <section className='section'>
      <h2 className='section-title'> Cocktails</h2>
      <div className='cocktails-center'>
        {
          cocktails.map((item) => {
            return <Cocktail key={item.id} {...item} />
          })
        }
      </div>
    </section>
  )
}

export default CocktailList
