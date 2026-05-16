import { useState } from 'react'
import './App.css'

function App() {
  const [id, setId] = useState("")
  const [formData, setFormData] = useState({
    Firstname: "",
    Lastname: "",
    Profession: "",
    Age: ""
  })

  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    try {
      const res = await fetch(`http://localhost:3000/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (!res.ok) throw data

      setResponse(data)
      setError(null)
    } catch (err) {
      setError(err)
      setResponse(null)
    }
  }

  return (
    <div className="page">
      <div className="card-modern">

        <h1 className="title">Atualizar Utilizador</h1>
        <p className="subtitle">Gestão de dados de utilizadores</p>

        <form onSubmit={handleSubmit} className="form">

          <input
            className="input"
            type="text"
            placeholder="ID do utilizador"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />

          <input className="input" name="Firstname" placeholder="Primeiro Nome"
            value={formData.Firstname} onChange={handleChange} />

          <input className="input" name="Lastname" placeholder="Último Nome"
            value={formData.Lastname} onChange={handleChange} />

          <input className="input" name="Profession" placeholder="Profissão"
            value={formData.Profession} onChange={handleChange} />

          <input className="input" name="Age" type="number" placeholder="Idade"
            value={formData.Age} onChange={handleChange} />

          <button className="btn">
            Atualizar
          </button>
        </form>

        {response && (
          <div className="success">
            ✔ Utilizador atualizado com sucesso
          </div>
        )}

        {error && (
          <div className="error">
            ✖ Erro ao atualizar utilizador
          </div>
        )}

      </div>
    </div>
  )
}

export default App