

export async function llamadaApi (url){
    try{
        console.log("entre a la api")
        const apiResponse = await fetch(url).then((response) => response.json());
        return apiResponse;
    } catch(error){
        return {error: "Error en la api : "+ error}
    }
}