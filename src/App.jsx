import { useState, useEffect } from 'react';
import './App.css';

// Datos iniciales de tareas.
const tareasIniciales = [
  { id: 1, texto: 'Aprender React', categoria: 'estudio', completada: false },
  { id: 2, texto: 'Hacer ejercicio', categoria: 'salud', completada: true },
  { id: 3, texto: 'Leer un libro', categoria: 'ocio', completada: false },
  { id: 4, texto: 'Practicar debugging', completada: false },
];

function App() {
  const [tareas, setTareas] = useState(tareasIniciales);
  const [filtro, setFiltro] = useState('todas');
  const [contador, setContador] = useState(0);

  // BUG 2 — CORREGIDO
  useEffect(() => {
    console.log('Renderizando App, contador:', contador);
    setContador(contador + 1);
  }, []);

  // Filtra las tareas según el botón elegido
  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === 'todas') return true;

    // BUG 3 — CORREGIDO
    if (filtro === 'completadas') return tarea.completada === true;
    if (filtro === 'pendientes') return tarea.completada === false;

    return true;
  });

  // Agrega una tarea nueva a la lista
  function agregarTarea(texto) {
    if (!texto.trim()) return;

    // BUG 4 — CORREGIDO
    const nuevaTarea = {
      id: Date.now(),
      texto,
      categoria: 'general',
      completada: false
    };

    setTareas([...tareas, nuevaTarea]);
  }

  // Marca una tarea como completada
  function completarTarea(id) {
    const nuevasTareas = tareas.map((tarea) =>
      tarea.id === id
        ? { ...tarea, completada: true }
        : tarea
    );

    setTareas(nuevasTareas);
  }

  return (
    <div className="app">
      <h1>Mis Tareas</h1>

      <div className="filtros">
        <button onClick={() => setFiltro('todas')}>
          Todas
        </button>

        <button onClick={() => setFiltro('pendientes')}>
          Pendientes
        </button>

        <button onClick={() => setFiltro('completadas')}>
          Completadas
        </button>
      </div>

      <ul className="lista-tareas">
        {tareasFiltradas.map((tarea) => (
          <li
            key={tarea.id}
            className={tarea.completada ? 'completada' : ''}
          >
            <span>{tarea.texto}</span>

            {/* BUG 1 — CORREGIDO */}
            <span className="categoria">
              {tarea.categoria?.toUpperCase() ?? 'SIN CATEGORÍA'}
            </span>

            <button onClick={() => completarTarea(tarea.id)}>
              ✔
            </button>
          </li>
        ))}
      </ul>

      <AgregarTarea onAgregar={agregarTarea} />

      <PerfilUsuario />
    </div>
  );
}

function AgregarTarea({ onAgregar }) {
  const [texto, setTexto] = useState('');

  function manejarEnvio(e) {
    e.preventDefault();
    onAgregar(texto);
    setTexto('');
  }

  return (
    <form onSubmit={manejarEnvio} className="form-agregar">
      <input
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Nueva tarea"
      />

      <button type="submit">
        Agregar
      </button>
    </form>
  );
}

function PerfilUsuario() {
  const [usuario, setUsuario] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    obtenerUsuario();
  }, []);

  // Simula una llamada a una API
  function obtenerUsuario() {
    const exito = Math.random() > 0.5;

    setTimeout(() => {
      if (exito) {
        setUsuario({
          nombre: 'Estudiante React'
        });
      } else {
        // BUG 5 — CORREGIDO
        setError('No se pudo cargar el usuario');
      }
    }, 1000);
  }

  if (error) {
    return (
      <p className="perfil">
        {error}
      </p>
    );
  }

  if (!usuario) {
    return (
      <p className="perfil">
        Cargando perfil...
      </p>
    );
  }

  return (
    <p className="perfil">
      Perfil: {usuario.nombre}
    </p>
  );
}

export default App;