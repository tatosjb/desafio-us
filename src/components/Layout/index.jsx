import LayoutBase from './Base'
import LayoutBody from './Body'
import useFetchCongresspeople from '../../hooks/useFetchCongresspeople'

export default function Layout() {
  const members = useFetchCongresspeople()

  return (
    <LayoutBase>
      <LayoutBody members={members} />
    </LayoutBase>
  )
}
