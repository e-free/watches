import React from "react"

function FormModule(props) {
  const {town, timezone, onSubmit, onChange} = props;

  return (
    <div className="container my-5">
      <h1>Мировые часы</h1>
      <form className="d-flex justify-content-start my-4" onSubmit={(event) => onSubmit(event)}>
        <div className="me-4">
          <label className="d-block " htmlFor="town">Название</label>
          <input className="form-control " type="text" name="town" value={town} onChange={(event) => onChange(event)} required/>
        </div>
        <div className="me-4">
          <label className="d-block" htmlFor="timezone">Часовой пояс</label>
          <input className="form-control" type="text" step="any" name="timezone" value={timezone} onChange={(event) => onChange(event)} required/>
        </div>
        <button className="me-4 align-self-end btn btn-outline-dark" type="submit">Добавить</button>
      </form>
    </div>
  )
}

export default FormModule;