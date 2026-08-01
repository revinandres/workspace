// ============================================================
//  🛠️ COMPONENTE PARA COMPLETAR — TAREA ESTUDIANTE
//  Contact.jsx
//
//  INSTRUCCIONES:
//  1. Completa el formulario: nombre, email, teléfono,
//     tipo de servicio (select), mensaje (textarea), botón.
//  2. Agrega la información de contacto en la columna izquierda.
//  3. Usa las clases Bootstrap: form-label, form-control,
//     form-select, btn.
//
//  ⚠️ DIFERENCIAS JSX vs HTML:
//     class="..."  →  className="..."
//     for="campo"  →  htmlFor="campo"
//
//  RETO ADICIONAL: usa useState para manejar el formulario
//  y mostrar una alerta al enviarlo.
// ============================================================

import { useState } from 'react';

const estadoInicial = {
  nombre: '',
  email: '',
  telefono: '',
  servicio: '',
  mensaje: '',
};

function Contact() {
  const [formulario, setFormulario] = useState(estadoInicial);
  const [enviado, setEnviado] = useState(false);

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setFormulario((estadoActual) => ({
      ...estadoActual,
      [name]: value,
    }));
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();

    if (formulario.nombre && formulario.email && formulario.servicio) {
      setEnviado(true);
      setFormulario(estadoInicial);
      return;
    }

    setEnviado(false);
  };

  return (
    <section id="contacto" className="py-5 bg-dark text-white">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-titulo text-white">Contáctenos</h2>
          <p className="text-light opacity-75">
            Cuéntanos tu necesidad y te ayudaremos a encontrar la solución eléctrica más segura y eficiente para tu proyecto.
          </p>
        </div>

        <div className="row g-5">

          {/* Columna izquierda: información de contacto */}
          <div className="col-lg-4">
            <h4 className="mb-4">Información de contacto</h4>
            <ul className="list-unstyled text-light opacity-75">
              <li className="mb-3">
                <span className="me-2">📍</span>
                Calle 10 # 43A-15, El Poblado, Medellín
              </li>
              <li className="mb-3">
                <span className="me-2">📞</span>
                <a href="tel:+573001234567" className="text-decoration-none text-light">
                  (300) 123-4567
                </a>
              </li>
              <li className="mb-3">
                <span className="me-2">📧</span>
                <a href="mailto:info@volttec.com.co" className="text-decoration-none text-light">
                  info@volttec.com.co
                </a>
              </li>
              <li className="mb-3">
                <span className="me-2">🕐</span>
                Lun–Vie 7am–6pm · Sáb 8am–2pm
              </li>
            </ul>
          </div>

          {/* Columna derecha: formulario */}
          <div className="col-lg-8">
            <div className="bg-white text-dark rounded-3 p-4">
              <form className="row g-3" onSubmit={manejarEnvio}>

                {/* Campo: Nombre */}
                <div className="col-md-6">
                  <label htmlFor="nombre" className="form-label fw-semibold">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className="form-control"
                    placeholder="Tu nombre"
                    value={formulario.nombre}
                    onChange={manejarCambio}
                  />
                </div>

                {/* Campo: Email */}
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="tu@email.com"
                    value={formulario.email}
                    onChange={manejarCambio}
                  />
                </div>

                {/* Campo: Teléfono */}
                <div className="col-md-6">
                  <label htmlFor="telefono" className="form-label fw-semibold">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    className="form-control"
                    placeholder="(300) 123-4567"
                    value={formulario.telefono}
                    onChange={manejarCambio}
                  />
                </div>

                {/* Campo: Tipo de servicio — usa <select> con 5+ opciones */}
                <div className="col-md-6">
                  <label htmlFor="servicio" className="form-label fw-semibold">
                    Tipo de servicio
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    className="form-select"
                    value={formulario.servicio}
                    onChange={manejarCambio}
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="residencial">Instalación residencial</option>
                    <option value="comercial">Instalación comercial</option>
                    <option value="mantenimiento">Mantenimiento eléctrico</option>
                    <option value="iluminacion">Iluminación LED</option>
                    <option value="puesta-tierra">Puesta a tierra</option>
                    <option value="tableros">Tableros y protecciones</option>
                  </select>
                </div>

                {/* Campo: Mensaje — usa <textarea> */}
                <div className="col-12">
                  <label htmlFor="mensaje" className="form-label fw-semibold">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    className="form-control"
                    rows="4"
                    placeholder="Describe brevemente tu necesidad..."
                    value={formulario.mensaje}
                    onChange={manejarCambio}
                  ></textarea>
                </div>

                {/* Botón enviar */}
                <div className="col-12">
                  <button type="submit" className="btn btn-voltec w-100 py-2">
                    Enviar solicitud
                  </button>
                  {enviado && (
                    <div className="alert alert-success mt-3 mb-0">
                      ✅ ¡Gracias {formulario.nombre || 'por contactarnos'}! Te responderemos pronto.
                    </div>
                  )}
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;