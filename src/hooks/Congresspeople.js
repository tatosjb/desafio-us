import { useEffect, useState } from 'react'
import { fetchMembers } from '../services/prorepublica'

export default function useFetchCongresspeople() {
  const [members, setMembers] = useState([])

  useEffect(() => {
    const session = 115 // 115th congressional session
    const chamber = 'senate' // or 'house'

    // sample API call
    fetchMembers(session, chamber)
      .then(members => {
        setMembers(members)
      })
      .catch(() => {
        // catch errors
      })
  }, [])

  return members
}
