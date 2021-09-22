import { useState } from 'react'
import LayoutBase from './Base'
import LayoutBody from './Body'
import useFetchCongresspeople from '../../hooks/useFetchCongresspeople'

export default function Layout() {
  const [filter, setFilter] = useState('')

  const members = useFetchCongresspeople(filter)

  async function handleChange({ target: { value } }) {
    setFilter(value)
  }

  return (
    <LayoutBase>
      <input value={filter} onChange={handleChange}/>

      <LayoutBody members={members} />
    </LayoutBase>
  )
}
