const url =
  "https://dwmwzxvrhpmpxqvucfwv.supabase.co/rest/v1/estudiantes";

const headers = {
  apikey: process.env.SUPABASE_API_KEY || "TU_API_KEY",
  "Content-Type": "application/json",
};

async function obtenerEstudiantes() {
  try {

    console.log("Consultando API...");

    const response = await fetch(url, {
      method: "GET",
      headers,
    });

    const data = await response.json();

    console.log("Respuesta de la API:");
    console.log(data);

    console.table(data);

  } catch (error) {

    console.log("Error:");
    console.log(error);

  }
}

obtenerEstudiantes();