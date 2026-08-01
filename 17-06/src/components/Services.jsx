// ============================================================
//  🛠️ COMPONENTE PARA COMPLETAR — TAREA ESTUDIANTE
//  Services.jsx
//
//  INSTRUCCIONES:
//  1. Define el array "servicios" con al menos 6 servicios.
//     Cada objeto debe tener: icono, titulo, descripcion.
//  2. Completa el JSX usando tarjetas Bootstrap (card).
//  3. Usa .map() para renderizar — NO copies el HTML 6 veces.
//
//  PISTAS:
//  - Usa <div className="row g-4"> para el grid
//  - Cada tarjeta va en <div className="col-md-6 col-lg-4">
//  - Clases Bootstrap útiles: card, card-body, card-title, card-text
// ============================================================

// 🛠️ PASO 1: Define aquí tu array de servicios
const servicios = [
  {
    icono: '🏠',
    titulo: 'Instalaciones residenciales',
    descripcion: 'Diseñamos y ejecutamos redes eléctricas seguras para viviendas nuevas, remodelaciones y ampliaciones.',
  },
  {
    icono: '🏢',
    titulo: 'Instalaciones comerciales',
    descripcion: 'Montamos sistemas eléctricos para oficinas, locales y bodegas con enfoque en eficiencia y continuidad.',
  },
  {
    icono: '🛠️',
    titulo: 'Mantenimiento preventivo',
    descripcion: 'Realizamos inspecciones y ajustes periódicos para detectar fallas antes de que afecten tu operación.',
  },
  {
    icono: '🔌',
    titulo: 'Tableros y protecciones',
    descripcion: 'Instalamos y modernizamos tableros eléctricos, breakers y protecciones para mejorar la seguridad.',
  },
  {
    icono: '💡',
    titulo: 'Iluminación LED',
    descripcion: 'Implementamos soluciones de iluminación LED que reducen consumo y mejoran la estética de los espacios.',
  },
  {
    icono: '⚙️',
    titulo: 'Puestas a tierra',
    descripcion: 'Desarrollamos sistemas de puesta a tierra y mediciones para cumplir la normativa vigente y proteger equipos.',
  },
];

function Services() {
  return (
    <section id="servicios" className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-titulo">Nuestros Servicios</h2>
          <p className="section-subtitulo text-muted">
            Soluciones eléctricas confiables para hogares y empresas, con personal técnico capacitado y cumplimiento de norma.
          </p>
        </div>

        {/* 🛠️ PASO 2: Renderiza las tarjetas con servicios.map(...) */}
        <div className="row g-4">
          {servicios.map((servicio) => (
            <div key={servicio.titulo} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div style={{ fontSize: '2.5rem' }}>{servicio.icono}</div>
                  <h5 className="card-title fw-bold mt-2">{servicio.titulo}</h5>
                  <p className="card-text text-muted">{servicio.descripcion}</p>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;