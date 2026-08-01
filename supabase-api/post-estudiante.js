const fetch = require("node-fetch");

const url =
  "https://dwmwzxvrhpmpxqvucfwv.supabase.co/rest/v1/estudiantes";

const headers = {
  apikey: process.env.SUPABASE_API_KEY || "TU_API_KEY",
  "Content-Type": "application/json",
};

async function crearEstudiante() {

  try {

    console.log("Creando estudiante...");

    const nuevoEstudiante = {
      nombre: "Juan",
      edad: 20,
      email: "juan23@mail.com",
      curso_id: 1,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        ...headers,
        Prefer: "return=representation",
      },
      body: JSON.stringify(nuevoEstudiante),
    });

    const data = await response.json();

    console.log("Estudiante creado:");

    console.table(data);

  } catch (error) {

    console.log("Error:");

    console.log(error);

  }

}

crearEstudiante();