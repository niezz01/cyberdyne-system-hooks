import React, { useState, useEffect } from 'react'
import TerminatorList from './components/terminator-list/terminator-list'
import SearcBox from './components/searchbox/searchbox.component'

function App() {
  const [models, setModels] = useState([])
  const [searchfield, setSearchfield] = useState('')
  // const [szamlalo, setSzamlalo] = useState(0)
  
  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setModels( users ))},[/*szamlalo*/])

  const filteredModels = models.filter((model) => {
    return model.name.toLowerCase().includes(searchfield.toLowerCase())
  })

  if (models.length === 0) {
    return <h1>Betöltés folyamatban...</h1>
  }

  return (
    <div className='tc'>
      <h1>Terminator modellek</h1>
      {/* <button onClick={() => setSzamlalo(szamlalo + 1)}>Kattints ide!</button> */}
      <SearcBox searchChange={onSearchChange} />
      <TerminatorList models={filteredModels} />
    </div>)
}

// constructor() {
//   super();
//   this.state = {
//     models: [],
//     searchfield: '',
//   }
// }


//     const filteredModels = models.filter((model) => {
//       return model.name.toLowerCase().includes(searchfield.toLowerCase())


// componentDidMount(); {
//   fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((users) => this.setState({models: users}))
// }


export default App

