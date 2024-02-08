export async function getClientes() {
  const req = await fetch(import.meta.env.VITE_API_URL);
  const res = await req.json();
  return res;
}
export async function setCliente(datos) {
  try {
    const req = await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: { "Contente-Type": "application/json" },
      mode: "no-cors",
    });
    const res = await req.json();
    return res
  } catch (e) {
    console.error(e);
  }
}
export async function getCliente(id) {
  const req = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
  const res = await req.json();
  console.log(res);
  return res;
}
export async function updateCliente(id, datos) {
  try {
    const req = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(datos),
      headers: { "Contente-Type": "application/json" },
    });
    const res = await req.json();
    return res;
  } catch (e) {
    console.error(e);
  }
}
export async function deleteCliente(id) {
  console.log("eliminando...");
  try {
    const req = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "DELETE",
    });
    const res = await req.json();
    return res;
  } catch (e) {
    console.error(e);
  }
}
