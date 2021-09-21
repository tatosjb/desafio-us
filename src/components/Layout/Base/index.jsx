import Header from '../../Header'

export default function LayoutBase({ children }) {
  return (
    <div className="App">
      <Header />
      {children}
    </div>
  )
}
