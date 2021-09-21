import CongresspeopleTable from '../../CongresspeopleList'

export default function LayoutBody({ members }) {
  return (
    <section className="container">
      <CongresspeopleTable congresspeople={members} />
    </section>
  )
}
