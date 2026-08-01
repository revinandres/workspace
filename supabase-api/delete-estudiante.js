const url =
  

const headers = {
  apikey: "TU_API_KEY",
  
};

async function eliminarEstudiante() {

  const response = await fetch(url, {
    method: "DELETE",
    headers,
  });

  console.log("Estudiante eliminado");
}

eliminarEstudiante();