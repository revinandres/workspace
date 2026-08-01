import { useState } from 'react';
import './App.css';

const initialForm = {
  nombre: '',
  correo: '',
  password: '',
  edad: '',
  fechaNacimiento: '',
  experiencia: 5,
  aceptaTerminos: false,
  lenguajes: [],
  modalidad: 'presencial',
  pais: '',
  comentarios: '',
  colorFavorito: '#000000',
  foto: null,
};

const lenguajesOpciones = ['JavaScript', 'Python', 'Java', 'C#', 'Go'];
const paises = ['Argentina', 'Brasil', 'Chile', 'Colombia', 'México', 'Perú'];

function App() {
  const [form, setForm] = useState(initialForm);
  const [submittedData, setSubmittedData] = useState(null);
  const [mostrarErrores, setMostrarErrores] = useState(false);

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo);

  const handleChange = (event) => {
    const { name, value, type, checked, files } = event.target;

    if (type === 'checkbox' && name === 'aceptaTerminos') {
      setForm((prev) => ({ ...prev, aceptaTerminos: checked }));
      return;
    }

    if (type === 'checkbox') {
      setForm((prev) => {
        const lenguajes = checked
          ? [...prev.lenguajes, value]
          : prev.lenguajes.filter((lenguaje) => lenguaje !== value);
        return { ...prev, lenguajes };
      });
      return;
    }

    if (type === 'file') {
      setForm((prev) => ({ ...prev, foto: files[0] || null }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMostrarErrores(true);

    const edadValida = Number(form.edad) > 0;
    if (!emailValido || !form.aceptaTerminos || !edadValida) {
      return;
    }

    setSubmittedData({ ...form });
  };

  const fotoUrl = form.foto ? URL.createObjectURL(form.foto) : null;

  return (
    <div className="app-container">
      <h1>Registro de estudiante</h1>
      <form className="formulario" onSubmit={handleSubmit} noValidate>
        <label>
          Nombre
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Correo
          <input
            type="email"
            name="correo"
            value={form.correo}
            onChange={handleChange}
            required
          />
          {mostrarErrores && !emailValido && (
            <span className="error">Ingresa un correo válido.</span>
          )}
        </label>

        <label>
          Contraseña
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Edad
          <input
            type="number"
            name="edad"
            value={form.edad}
            onChange={handleChange}
            min="1"
            required
          />
          {mostrarErrores && Number(form.edad) <= 0 && (
            <span className="error">La edad debe ser mayor a 0.</span>
          )}
        </label>

        <label>
          Fecha de nacimiento
          <input
            type="date"
            name="fechaNacimiento"
            value={form.fechaNacimiento}
            onChange={handleChange}
            required
          />
        </label>

        <label className="range-label">
          Nivel de experiencia: <strong>{form.experiencia}</strong>
          <input
            type="range"
            name="experiencia"
            min="1"
            max="10"
            value={form.experiencia}
            onChange={handleChange}
          />
        </label>

        <label className="checkbox-inline">
          <input
            type="checkbox"
            name="aceptaTerminos"
            checked={form.aceptaTerminos}
            onChange={handleChange}
          />
          Acepto los términos y condiciones
        </label>

        <fieldset>
          <legend>Lenguajes que conoces</legend>
          {lenguajesOpciones.map((lenguaje) => (
            <label key={lenguaje} className="checkbox-inline">
              <input
                type="checkbox"
                name="lenguajes"
                value={lenguaje}
                checked={form.lenguajes.includes(lenguaje)}
                onChange={handleChange}
              />
              {lenguaje}
            </label>
          ))}
        </fieldset>

        <fieldset>
          <legend>Modalidad</legend>
          <label className="radio-inline">
            <input
              type="radio"
              name="modalidad"
              value="presencial"
              checked={form.modalidad === 'presencial'}
              onChange={handleChange}
            />
            Presencial
          </label>

          <label className="radio-inline">
            <input
              type="radio"
              name="modalidad"
              value="virtual"
              checked={form.modalidad === 'virtual'}
              onChange={handleChange}
            />
            Virtual
          </label>
        </fieldset>

        <label>
          País
          <select name="pais" value={form.pais} onChange={handleChange} required>
            <option value="">Selecciona un país</option>
            {paises.map((pais) => (
              <option key={pais} value={pais}>
                {pais}
              </option>
            ))}
          </select>
        </label>

        <label>
          Comentarios
          <textarea
            name="comentarios"
            value={form.comentarios}
            onChange={handleChange}
          />
        </label>

        <label>
          Foto de perfil
          <input type="file" name="foto" accept="image/*" onChange={handleChange} />
        </label>

        {fotoUrl && (
          <div className="preview">
            <p>Vista previa de la foto:</p>
            <img src={fotoUrl} alt="Vista previa" />
          </div>
        )}

        <label>
          Color favorito
          <input
            type="color"
            name="colorFavorito"
            value={form.colorFavorito}
            onChange={handleChange}
          />
        </label>

        <button type="submit" disabled={!form.aceptaTerminos || !emailValido || Number(form.edad) <= 0}>
          Enviar
        </button>
      </form>

      {submittedData && (
        <section className="resumen">
          <h2>Resumen de registro</h2>
          <p>
            <strong>Nombre:</strong> {submittedData.nombre}
          </p>
          <p>
            <strong>Correo:</strong> {submittedData.correo}
          </p>
          <p>
            <strong>Edad:</strong> {submittedData.edad}
          </p>
          <p>
            <strong>Fecha de nacimiento:</strong> {submittedData.fechaNacimiento}
          </p>
          <p>
            <strong>Experiencia:</strong> {submittedData.experiencia}
          </p>
          <p>
            <strong>Modalidad:</strong> {submittedData.modalidad}
          </p>
          <p>
            <strong>País:</strong> {submittedData.pais}
          </p>
          <p>
            <strong>Lenguajes:</strong>{' '}
            {submittedData.lenguajes.length > 0 ? submittedData.lenguajes.join(', ') : 'Ninguno'}
          </p>
          <p>
            <strong>Color favorito:</strong>{' '}
            <span className="color-chip" style={{ backgroundColor: submittedData.colorFavorito }}>
              {submittedData.colorFavorito}
            </span>
          </p>
          <p>
            <strong>Comentarios:</strong> {submittedData.comentarios || 'Sin comentarios'}
          </p>
          <p>
            <strong>Aceptó términos:</strong> {submittedData.aceptaTerminos ? 'Sí' : 'No'}
          </p>
          {submittedData.foto && (
            <div className="preview">
              <p>Foto enviada:</p>
              <img src={URL.createObjectURL(submittedData.foto)} alt="Foto enviada" />
            </div>
          )}
        </section>
      )}
    </div>
  );
}

export default App;
