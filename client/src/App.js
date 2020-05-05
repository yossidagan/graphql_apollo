import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import logo from '../src/logo.png'
import './App.css'

const client = new ApolloProvider({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
    <div className='container'>
      <img
        src={logo}
        alt=''
        style={{ width: 300, display: 'block', margin: 'auto' }}
      />
    </div>
    </ApolloProvider>
  )
}

export default App
