import { useState,useEffect } from "react";
import Card from "./components/Card"
import Form from "./components/Form"
import './style.scss'

function App() {
  const [pets, setPets] = useState([]);
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    date: "",
    owner: "",
  });
  
  const getPets = async () => {
    const response = await fetch('http://localhost:8000/pets')
    const result = await response.json()
    setPets(result)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/pets', {
      method: 'POST',
        body: JSON.stringify({
          id: window.crypto.randomUUID(),
          name: form.name,
          age: form.age,
          gender: form.gender,
          date: form.date,
          owner: form.owner
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      setForm({ name: "", age: "", gender: "", date: "", owner: ""});
      getPets()
    };

  useEffect(() => {
    getPets()
  }, [form])
  return (
    <div className="app">
      <h1 className="title">AGENDA MASCOTAS</h1>
      <Form
        form={form}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
       />
      <div className="section">
        {pets.map((pet) => (
            <Card
              key={pet.id} 
              pet={pet}
            /> 
          ))}
      </div>
    </div>
  )
}

export default App
