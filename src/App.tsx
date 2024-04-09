import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import { useReducer } from 'react'

const initialState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: 'false'
}

function reducer (state, action) {

}

function App () {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <h1>Translate</h1>
    </>
  )
}

export default App
