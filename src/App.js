import React, { useEffect, useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import CongresspeopleTable from './components/CongresspeopleList'
import { fetchMembers } from './services/prorepublica'

// you should feel free to reorganize the code however you see fit
// including creating additional folders/files and organizing your
// components however you would like.

function App() {
  const [members, setMembers] = useState([])

  useEffect(() => {
    const session = 115 // 115th congressional session
    const chamber = 'senate' // or 'house'

    // sample API call
    fetchMembers(session, chamber)
      .then((members) => {
        setMembers(members)
      })
      .catch(() => {
        // catch errors
      })
  }, [])

  return (
    <Layout>
      <section className="container">
        <CongresspeopleTable congresspeople={members} />
      </section>
    </Layout>
  )
}

export default App
