export default async function product ({params}) {
    const {id} = await params; 
    return <h1>product {id}</h1> 
}    