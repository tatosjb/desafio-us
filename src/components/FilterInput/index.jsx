function Input({value, onChange}) {
  return <input className="form-control" value={value} onChange={onChange}/>
}

export default function FilterInput({ value, onChange }) {
  return (
    <div className="row">
      <div className="col-12 col-sm-6 col-lg-4">
        <div className="col-12 col-sm-6 col-lg-4 input-group">
          <div className="input-group-text" role="button">
            <i className="fas fa-search" />
          </div>

          <Input value={value} onChange={onChange} />
        </div>
      </div>
    </div>
  )
}
