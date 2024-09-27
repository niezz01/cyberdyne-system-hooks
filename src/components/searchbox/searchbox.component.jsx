import React from 'react'

const SearchBox = ({searchChange}) => {
  return (
    <div className='pa2'>
      <input 
      className='pa3 ba b--black bg-light-gray' 
      type="search" 
      placeholder="Model keresés..." 
      onChange={searchChange}
      
      />
    </div>
  )
}

export default SearchBox
