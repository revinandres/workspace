// ============================================================
//  🛠️ COMPONENTE PARA COMPLETAR — TAREA ESTUDIANTE
//  WhyUs.jsx  (¿Por qué elegirnos?)
//
//  INSTRUCCIONES:
//  1. Define el array "razones" con al menos 4 objetos.
//     Cada objeto debe tener: icono, titulo, descripcion.
//  2. Agrega una imagen en la columna izquierda.
//  3. Escribe 2 párrafos sobre la empresa.
//  4. Usa .map() para renderizar la lista de razones.
//
//  PISTAS:
//  - <div className="row align-items-center"> para las columnas
//  - className="list-unstyled" en <ul> quita los bullets
//  - Placeholder: https://placehold.co/500x400/1a1e2e/f5c518?text=VoltTec
// ============================================================

// 🛠️ PASO 1: Define tu array de razones
const razones = [
  {
    icono: '🏆',
    titulo: 'Experiencia certificada',
    descripcion: 'Contamos con técnicos entrenados y procesos alineados con los estándares de seguridad eléctrica.',
  },
  {
    icono: '⏱️',
    titulo: 'Respuesta rápida',
    descripcion: 'Atendemos solicitudes con agilidad para minimizar tiempos muertos en hogares y negocios.',
  },
  {
    icono: '🧰',
    titulo: 'Materiales confiables',
    descripcion: 'Trabajamos con insumos de primera calidad para asegurar instalaciones duraderas y seguras.',
  },
  {
    icono: '📋',
    titulo: 'Asesoría sin costo',
    descripcion: 'Evaluamos tu necesidad y entregamos una recomendación clara antes de iniciar cualquier trabajo.',
  },
];

function WhyUs() {
  return (
    <section id="nosotros" className="py-5">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Columna izquierda: imagen */}
          <div className="col-lg-5">
            <img
              src="https://placehold.co/500x400/1a1e2e/f5c518?text=VoltTec"
              alt="Técnicos de VoltTec trabajando"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Columna derecha: texto y razones */}
          <div className="col-lg-7">
            <h2 className="section-titulo mb-3">¿Por qué elegirnos?</h2>

            <p className="text-muted mb-4">
              VoltTec es una empresa de servicios eléctricos con más de 15 años de experiencia en proyectos residenciales y comerciales en Medellín y el Área Metropolitana.
            </p>
            <p className="text-muted mb-4">
              Nuestro equipo atiende instalaciones, mantenimientos y modernización de sistemas eléctricos con un enfoque claro en seguridad, cumplimiento y atención cercana al cliente.
            </p>

            {/* 🛠️ PASO 2: Renderiza las razones con .map() */}
            <ul className="list-unstyled">
              {razones.map((razon) => (
                <li key={razon.titulo} className="d-flex gap-3 mb-3">
                  <span style={{ fontSize: '1.5rem' }}>{razon.icono}</span>
                  <div>
                    <strong>{razon.titulo}</strong>
                    <p className="text-muted mb-0 small">{razon.descripcion}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyUs;