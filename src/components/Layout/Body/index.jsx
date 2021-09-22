import { useState } from 'react'
import useFetchCongresspeople from '../../../hooks/useFetchCongresspeople'
import CongresspeopleList from '../../CongresspeopleList'
import FilterInput from '../../FilterInput'

export default function LayoutBody() {
  const [filter, setFilter] = useState('')

  const members = useFetchCongresspeople(filter)

  async function handleChange({ target: { value } }) {
    setFilter(value)
  }

  return (
    <div className="row mt-2">
      <div className="col-12">
        <section className="container">
          <FilterInput value={filter} onChange={handleChange}/>

          <CongresspeopleList congresspeople={members} />
        </section>
      </div>
    </div>
  )
}
