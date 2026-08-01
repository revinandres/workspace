const url =
 

const headers = {
  apikey: "TU_API_KEY",
  "Content-Type": "application/json",
};

async function actualizarEstudiante() {

  const response = await fetch(url, {
    method: "PATCH",
    headers,
    body: JSON.stringify({
      nombre: "Carlos",
    }),
  });

  const data = await response.json();

  console.log(data);
}

actualizarEstudiante();