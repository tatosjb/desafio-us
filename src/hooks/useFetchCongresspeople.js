import { useEffect, useState } from 'react'
import { fetchMembers } from '../services/prorepublica'
import { fullName } from '../services/congress-person'

function filterMembers(members, filter) {
  return members.filter(member => {
    return fullName(member).match(new RegExp(`${filter}`, 'i'))
  })
}

export default function useFetchCongresspeople(filter) {
  const [members, setMembers] = useState([])
  const [filteredMembers, setFilteredMembers] = useState([])

  useEffect(() => {
    const session = 115 // 115th congressional session
    const chamber = 'senate' // or 'house'

    // sample API call
    fetchMembers(session, chamber)
      .then(members => {
        setMembers(members)
        setFilteredMembers(filter ? filterMembers(members, filter) : members)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  useEffect(() => {
    setFilteredMembers(filter ? filterMembers(members, filter) : members)
  }, [filter])

  return filteredMembers
}
