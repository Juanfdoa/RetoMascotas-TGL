import '../style.scss'

const Form = ({ form, handleSubmit, handleChange}) => {
    return (
        <form className="form-card"  onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Nombre mascota"
                value={form.name}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="age"
                placeholder="Edad"
                value={form.age}
                onChange={handleChange}
                required
            />
            <select name="gender" value={form.gender} onChange={handleChange} required>
                <option value="" disabled>Seleccionar género</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
            </select>
            <input
                type="datetime-local"
                name="date"
                placeholder="Fecha"
                value={form.date}
                onChange={handleChange}
                required
            />
             <input
                type="text"
                name="owner"
                placeholder="Nombre propietario"
                value={form.owner}
                onChange={handleChange}
                required
            />
            <button type="submit">Registrar</button>
        </form>
    )
}

export default Form