export async function getClientes(){
    const req=await fetch(import.meta.env.VITE_API_URL)
    const res =await req.json()
    return res
}