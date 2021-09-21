import LayoutBase from './Base'
import LayoutBody from './Body'
import useFetchCongresspeople from '../../hooks/Congresspeople'

export default function Layout() {
  const members = useFetchCongresspeople()

  return (
    <LayoutBase>
      <LayoutBody members={members} />
    </LayoutBase>
  )
}
