import React, { useEffect, useState } from 'react'
import './App.css'
import Layout from './components/Layout'

// you should feel free to reorganize the code however you see fit
// including creating additional folders/files and organizing your
// components however you would like.

function fullName(member) {
  return `${member.first_name}${member.middle_name ? ` ${member.middle_name} ` : ''} ${member.last_name}`
}

function App() {
  const [members, setMembers] = useState([])

  useEffect(() => {
    const session = 115 // 115th congressional session
    const chamber = 'senate' // or 'house'

    // sample API call
    fetch(
      `https://api.propublica.org/congress/v1/${session}/${chamber}/members.json`,
      {
        headers: new Headers({
          'X-API-Key': 'd0ywBucVrXRlMQhENZxRtL3O7NPgtou2mwnLARTr',
        }),
      },
    )
      .then((res) => res.json())
      .then((json) => json.results[0].members)
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
        {members.map(member => {
          return <label key={member.id}>{fullName(member)}</label>
        })}
      </section>
    </Layout>
  )
}

export default App
